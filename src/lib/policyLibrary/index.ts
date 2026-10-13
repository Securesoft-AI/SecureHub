// The base policy library, in catalog order. Server-only: the content is large, so the
// client bundle uses the lightweight pack definitions in src/lib/hub/data.ts instead.

import { GOVERNANCE_POLICIES } from "./governance";
import { ACCESS_POLICIES } from "./access";
import { OPERATIONS_POLICIES } from "./operations";
import { RESILIENCE_POLICIES } from "./resilience";
import type { LibraryPolicy } from "./types";

export const POLICY_LIBRARY: LibraryPolicy[] = [...GOVERNANCE_POLICIES, ...ACCESS_POLICIES, ...OPERATIONS_POLICIES, ...RESILIENCE_POLICIES];
export type { LibraryPolicy, PolicyBundleId } from "./types";
