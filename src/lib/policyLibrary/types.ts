// Base policy library: original SecureHub-authored policy content, sold in themed bundles.
// Each entry is rendered by the structured standard renderer (src/lib/standardDoc.ts).

import type { Role } from "../policyNarrative";
import type { ReqSection } from "../standardDoc";

export type PolicyBundleId = "pk-pol-gov" | "pk-pol-access" | "pk-pol-ops" | "pk-pol-resilience";

export type LibraryPolicy = {
  docId: string; // stable library id, e.g. "SH-POL-001"
  bundle: PolicyBundleId;
  title: string; // e.g. "Access Control Policy"
  summary: string; // one sentence, shown in the catalog
  purpose: string; // purpose paragraph
  aims: string[]; // 3-5 objectives
  scope: string; // scope paragraph; refer to the buyer as "the organization"
  covers: string[]; // 3-5 topics the policy covers
  roles: Role[]; // 3-6 roles, each with 1-3 responsibilities
  sections: ReqSection[]; // 4-6 requirement groups, each with 4-7 "shall" statements
  references: string[]; // framework mappings, e.g. "NIST CSF 2.0 — PR.AA"
};
