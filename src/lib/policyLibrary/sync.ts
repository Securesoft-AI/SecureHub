// Load the document library into the Standard table so it is sold through the catalog.
// Idempotent: library rows are matched by docId. A standard the library did not create (an
// AI-drafted or imported master standard with the same title) is left untouched and skipped.
// Content is stored once here; buyers only personalise it when they generate (no AI involved).

import type { PrismaClient } from "@prisma/client";
import { POLICY_LIBRARY, POLICY_LIBRARY_ES, LIBRARY_DOCS } from "./index";
import { bundlesOf } from "./bundles";
import type { DocText, Lang, LibraryDoc, LibraryPolicy, PolicyText } from "./types";
import type { StandardContent } from "../standardDoc";

const PLATFORM = "Compliance Library";

const COMPLIANCE: Record<Lang, Pick<StandardContent["narrative"], "complianceIntro" | "complianceExceptionFields" | "complianceEnforcement">> = {
  en: {
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
  es: {
    complianceIntro:
      "El cumplimiento de esta política es obligatorio. El propietario de la política verifica su cumplimiento " +
      "mediante revisiones periódicas, auditorías internas y, cuando proceda, supervisión automatizada.",
    complianceExceptionFields: [
      "El requisito o requisitos que no pueden cumplirse",
      "La justificación de negocio o técnica",
      "Los controles compensatorios implantados para reducir el riesgo residual",
      "El aprobador y la fecha de revisión o caducidad de la excepción",
    ],
    complianceEnforcement:
      "Las excepciones requieren la aprobación documentada del propietario de la política. El incumplimiento " +
      "de esta política podrá dar lugar a medidas disciplinarias conforme a los procedimientos de recursos " +
      "humanos de la organización, así como a la suspensión del acceso a los sistemas de información.",
  },
};

function policyContent(p: PolicyText, lang: Lang, references: string[]): StandardContent {
  return {
    title: p.title,
    docType: "policy",
    platform: PLATFORM,
    summary: p.summary,
    references,
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
      ...COMPLIANCE[lang],
    },
  };
}

function docContent(d: DocText, type: LibraryDoc["type"], references: string[]): StandardContent {
  return {
    title: d.title,
    docType: type,
    platform: PLATFORM,
    summary: d.summary,
    references,
    sections: [],
    body: d.body,
    narrative: { purposeIntro: d.summary } as StandardContent["narrative"],
  };
}

export type LibraryEntry = { docId: string; title: string; summary: string; content: StandardContent };

// Every library document as storable content: English by default, Spanish as a translation.
export function libraryEntries(): LibraryEntry[] {
  const fromPolicy = (p: LibraryPolicy): LibraryEntry => {
    const en = policyContent(p, "en", p.references);
    const es = POLICY_LIBRARY_ES[p.docId];
    return { docId: p.docId, title: p.title, summary: p.summary, content: { ...en, translations: es ? { es: policyContent(es, "es", p.references) } : undefined } };
  };
  const fromDoc = (d: LibraryDoc): LibraryEntry => ({
    docId: d.docId,
    title: d.en.title,
    summary: d.en.summary,
    content: { ...docContent(d.en, d.type, d.references), translations: { es: docContent(d.es, d.type, d.references) } },
  });
  return [...POLICY_LIBRARY.map(fromPolicy), ...LIBRARY_DOCS.map(fromDoc)];
}

function libraryIdOf(contentJson: string): string | null {
  try { return (JSON.parse(contentJson) as { library?: string }).library ?? null; } catch { return null; }
}

export async function syncPolicyLibrary(prisma: PrismaClient): Promise<{ created: number; updated: number; skipped: number }> {
  let created = 0, updated = 0, skipped = 0;
  const rows = await prisma.standard.findMany({ select: { id: true, title: true, contentJson: true, masterDocx: true } });
  const byDocId = new Map<string, (typeof rows)[number]>();
  for (const r of rows) {
    const id = libraryIdOf(r.contentJson);
    if (id && !r.masterDocx) byDocId.set(id, r);
  }
  const titles = new Set(rows.map((r) => r.title));

  for (const e of libraryEntries()) {
    const bundleIds = bundlesOf(e.docId);
    const fields = {
      summary: e.summary,
      platform: PLATFORM,
      contentJson: JSON.stringify({ library: e.docId, ...e.content }),
      // Bundle membership is defined in code (bundles.ts), so a sync re-applies it.
      bundleIds: JSON.stringify(bundleIds),
      bundleId: bundleIds[0] ?? null,
      updatedAt: new Date(),
    };
    const existing = byDocId.get(e.docId);
    if (existing) {
      // Refresh content and bundles; keep admin choices (title edits, visibility, status, price).
      await prisma.standard.update({ where: { id: existing.id }, data: fields });
      updated++;
    } else if (titles.has(e.title)) {
      skipped++;
    } else {
      await prisma.standard.create({ data: { ...fields, title: e.title, status: "published", hidden: false } });
      created++;
    }
  }
  return { created, updated, skipped };
}
