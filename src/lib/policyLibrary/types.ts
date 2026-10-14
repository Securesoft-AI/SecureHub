// Base document library: original SecureHub-authored policies, procedures, plans, registers
// and forms, in English and Spanish, sold in framework bundles (see ./bundles.ts).
// Content is written once and stored; buyers only personalise it (name, logo, template).

import type { Role } from "../policyNarrative";
import type { ReqSection } from "../standardDoc";

export type Lang = "en" | "es";
export const LANGS: Lang[] = ["en", "es"];

export type DocType = "policy" | "procedure" | "plan" | "register" | "form" | "template";

// ── Policies: structured Purpose / Scope / Roles / Requirements model ──
export type PolicyText = {
  title: string; // e.g. "Access Control Policy" / "Política de Control de Accesos"
  summary: string; // one sentence, shown in the catalog
  purpose: string; // purpose paragraph
  aims: string[]; // 3-5 objectives
  scope: string; // scope paragraph; refer to the buyer as "the organization" / "la organización"
  covers: string[]; // 3-5 topics the policy covers
  roles: Role[]; // 3-6 roles, each with 1-3 responsibilities
  sections: ReqSection[]; // 4-6 requirement groups, each with 4-7 "shall" / "deberá" statements
};

export type LibraryPolicy = {
  docId: string; // stable library id, e.g. "SH-POL-001"
  references: string[]; // framework mappings, e.g. "NIST CSF 2.0 — PR.AA"
} & PolicyText;

// Spanish text for an English policy, keyed by docId (see *.es.ts files).
export type PolicyTranslations = Record<string, PolicyText>;

// ── Other documents: free-form body made of blocks ──
export type DocBlock =
  | { t: "h1"; text: string } // numbered section heading, e.g. "1. Purpose"
  | { t: "h2"; text: string } // sub-heading
  | { t: "p"; text: string } // paragraph
  | { t: "li"; text: string } // bullet
  | { t: "step"; text: string } // numbered procedure step (numbering restarts after each heading)
  | { t: "table"; headers: string[]; rows: string[][] } // register/matrix; "" cells render blank for the buyer to fill
  | { t: "field"; label: string; hint?: string }; // form field with a blank line to fill in

export type DocText = {
  title: string;
  summary: string; // one sentence, shown in the catalog
  body: DocBlock[];
};

export type LibraryDoc = {
  docId: string; // e.g. "SH-PRC-001"
  type: DocType; // a body-based "policy" is allowed (e.g. the ENS security policy)
  references: string[];
  en: DocText;
  es: DocText;
};
