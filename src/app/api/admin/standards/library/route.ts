import { NextResponse } from "next/server";
import { getSessionUser, canManageCatalog } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { syncPolicyLibrary } from "@/lib/policyLibrary/sync";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Load (or refresh) the base policy library as published catalog standards.
export async function POST() {
  const user = await getSessionUser().catch(() => null);
  if (!user || !canManageCatalog(user.role)) return NextResponse.json({ error: "Admin access required." }, { status: 403 });
  try {
    return NextResponse.json({ ok: true, ...(await syncPolicyLibrary(prisma)) });
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : "Library load failed" }, { status: 500 });
  }
}
