import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { entitlementsFor, entitlementsForRole, ownsStandard, standardBundleIds } from "@/lib/entitlements";
import { priceNum } from "@/lib/hub/data";
import { parseContent, contentLangs } from "@/lib/standardDoc";
import { mergedBundles } from "@/lib/catalog";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Library extras for the catalog card: document type, languages and the Spanish title.
function libraryMeta(json: string): { docType: string | null; langs: string[]; titleEs: string | null } {
  const c = parseContent(json);
  return { docType: c.docType || null, langs: contentLangs(c), titleEs: c.translations?.es?.title || null };
}

// Public catalog of published, surfaced standards for the storefront (Frameworks).
// Marks each with `owned` so the client sees Buy vs. Generate.
export async function GET() {
  const rows = await prisma.standard
    .findMany({ where: { status: "published", hidden: false }, orderBy: { createdAt: "desc" }, take: 200 })
    .catch(() => []);
  const user = await getSessionUser().catch(() => null);
  const ent = user ? entitlementsForRole(user.role) || (await entitlementsFor(user.id)) : null;
  const bundles = await mergedBundles();
  const byId = new Map(bundles.map((b) => [b.id, b]));
  return NextResponse.json({
    standards: rows.map((s) => {
      const ids = standardBundleIds(s);
      const inBundles = ids.map((id) => byId.get(id)).filter((b): b is NonNullable<typeof b> => !!b);
      // The cheapest bundle that includes it is the one offered to buy.
      const b = [...inBundles].sort((x, y) => priceNum(x.price) - priceNum(y.price))[0];
      return {
        id: s.id,
        title: s.title,
        ...libraryMeta(s.contentJson),
        platform: s.platform,
        summary: s.summary,
        sourceUrl: s.sourceUrl,
        bundleId: b?.id || null,
        bundles: inBundles.map((x) => ({ id: x.id, name: x.name, price: x.price })),
        bundleName: b?.name || null,
        bundlePrice: b?.price || null,
        priceCents: s.priceCents,
        owned: ent ? ownsStandard(ent, ids) : false,
      };
    }),
  });
}
