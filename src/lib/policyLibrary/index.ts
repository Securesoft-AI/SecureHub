// The document library, in catalog order. Server-only: the content is large, so the client
// bundle uses the lightweight bundle definitions (./bundles.ts and src/lib/hub/data.ts).

import { GOVERNANCE_POLICIES } from "./governance";
import { ACCESS_POLICIES } from "./access";
import { OPERATIONS_POLICIES } from "./operations";
import { RESILIENCE_POLICIES } from "./resilience";
import { GOVERNANCE_POLICIES_ES } from "./governance.es";
import { ACCESS_POLICIES_ES } from "./access.es";
import { OPERATIONS_POLICIES_ES } from "./operations.es";
import { RESILIENCE_POLICIES_ES } from "./resilience.es";
import { CORE_A_DOCS } from "./docs/core-a";
import { CORE_B_DOCS } from "./docs/core-b";
import { ISO_A_DOCS } from "./docs/iso-a";
import { ISO_B_DOCS } from "./docs/iso-b";
import { SOC2_DOCS } from "./docs/soc2";
import { GDPR_DOCS } from "./docs/gdpr";
import { ENS_A_DOCS } from "./docs/ens-a";
import { ENS_B_DOCS } from "./docs/ens-b";
import { NIS2_DORA_DOCS } from "./docs/nis2-dora";
import type { LibraryDoc, LibraryPolicy, PolicyTranslations } from "./types";

// Policies (structured model), English, plus their Spanish text keyed by docId.
export const POLICY_LIBRARY: LibraryPolicy[] = [...GOVERNANCE_POLICIES, ...ACCESS_POLICIES, ...OPERATIONS_POLICIES, ...RESILIENCE_POLICIES];
export const POLICY_LIBRARY_ES: PolicyTranslations = { ...GOVERNANCE_POLICIES_ES, ...ACCESS_POLICIES_ES, ...OPERATIONS_POLICIES_ES, ...RESILIENCE_POLICIES_ES };

// Procedures, plans, registers, forms and templates (free-form body), in both languages.
export const LIBRARY_DOCS: LibraryDoc[] = [...CORE_A_DOCS, ...CORE_B_DOCS, ...ISO_A_DOCS, ...ISO_B_DOCS, ...GDPR_DOCS, ...ENS_A_DOCS, ...ENS_B_DOCS, ...NIS2_DORA_DOCS, ...SOC2_DOCS];

export type { LibraryDoc, LibraryPolicy } from "./types";
