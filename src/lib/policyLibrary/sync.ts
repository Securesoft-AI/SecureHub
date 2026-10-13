// Load the base policy library into the Standard table so it is sold through the catalog.
// Idempotent: rows are matched by title. Rows the library did not create (an AI-drafted or
// imported master standard with the same title) are left untouched and reported as skipped.

import type { PrismaClient } from "@prisma/client";
import { POLICY_LIBRARY } from "./index";
import type { LibraryPolicy } from "./types";
import type { StandardContent } from "../standardDoc";

const PLATFORM = "Corporate Policy";

export function libraryContent(p: LibraryPolicy): StandardContent & { library: string } {
  return {
    library: p.docId,
    platform: PLATFORM,
    summary: p.summary,
    references: p.references,
    sections: [],
    requirementSections: p.sections,
    narrative: {
      purposeIntro: p.purpose,
      purposePoints: [],
      purposeAims: p.aims,
      scopeIntro: p.scope,
      scopeAppliesTo: [],
      scopeCovers: p.covers,
      roles: p.roles,
      complianceIntro:
        "Compliance with this policy is mandatory. The policy owner verifies compliance through periodic " +
        "reviews, internal audits and, where applicable, automated monitoring.",
      complianceExceptionFields: [
        "The requirement(s) that cannot be met",
        "The business or technical justification",
        "The compensating controls in place to reduce the residual risk",
        "The approver and the review or expiry date of the exception",
      ],
      complianceEnforcement:
        "Exceptions require documented approval from the policy owner. Violations of this policy may result " +
        "in disciplinary action in line with the organization's human resources procedures, and in the " +
        "suspension of access to information systems.",
    },
  };
}

function libraryIdOf(contentJson: string): string | null {
  try { return (JSON.parse(contentJson) as { library?: string }).library ?? null; } catch { return null; }
}

export async function syncPolicyLibrary(prisma: PrismaClient): Promise<{ created: number; updated: number; skipped: number }> {
  let created = 0, updated = 0, skipped = 0;
  for (const p of POLICY_LIBRARY) {
    const existing = await prisma.standard.findFirst({ where: { title: p.title } });
    const fields = {
      title: p.title,
      platform: PLATFORM,
      summary: p.summary,
      contentJson: JSON.stringify(libraryContent(p)),
      bundleId: p.bundle,
      updatedAt: new Date(),
    };
    if (!existing) {
      await prisma.standard.create({ data: { ...fields, status: "published", hidden: false } });
      created++;
    } else if (libraryIdOf(existing.contentJson) === p.docId && !existing.masterDocx) {
      // Refresh the content but keep admin choices (visibility, status, bundle, price).
      await prisma.standard.update({ where: { id: existing.id }, data: { summary: fields.summary, contentJson: fields.contentJson, updatedAt: fields.updatedAt } });
      updated++;
    } else {
      skipped++;
    }
  }
  return { created, updated, skipped };
}
