// Which library documents each bundle contains. One document can belong to several bundles.
// This file is small on purpose: the client catalog imports it (the content stays server-side).

export const LIBRARY_BUNDLE_IDS = ["pk-iso27001", "pk-nis2", "pk-gdpr", "pk-ens", "pk-dora", "pk-soc2", "pk-essentials"] as const;
export type LibraryBundleId = (typeof LIBRARY_BUNDLE_IDS)[number];

const pol = (...n: number[]) => n.map((x) => `SH-POL-${String(x).padStart(3, "0")}`);
const ALL_POLICIES = pol(1, 2, 3, 4, 5, 6, 7, 8, 101, 102, 103, 104, 105, 106, 107, 108, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 301, 302, 303, 304, 305, 306, 307);
const CORE = ["SH-PLN-001", "SH-PLN-002", "SH-PLN-003", "SH-PRC-001", "SH-PRC-002", "SH-PRC-003", "SH-PRC-004", "SH-PRC-005", "SH-REG-001", "SH-REG-002", "SH-REG-003", "SH-FRM-001", "SH-FRM-002"];
const series = (prefix: string, n: number) => Array.from({ length: n }, (_, i) => `${prefix}-${String(i + 1).padStart(3, "0")}`);

export const BUNDLE_MEMBERS: Record<LibraryBundleId, string[]> = {
  "pk-iso27001": [...ALL_POLICIES, ...CORE, ...series("SH-ISO", 8)],
  "pk-nis2": [
    ...pol(1, 2, 3, 4, 6, 7, 101, 102, 103, 104, 105, 201, 202, 203, 204, 205, 206, 207, 208, 209, 301, 302, 303, 304),
    "SH-PLN-001", "SH-PLN-002", "SH-PLN-003", "SH-PRC-003", "SH-PRC-005", "SH-REG-001", "SH-REG-002", "SH-REG-003", "SH-FRM-002",
    ...series("SH-NIS", 3),
  ],
  "pk-gdpr": [...pol(5, 6, 105, 106, 107, 108, 301, 303), ...series("SH-GDP", 8), "SH-PLN-001", "SH-PRC-005", "SH-REG-003", "SH-FRM-002"],
  "pk-ens": [
    ...series("SH-ENS", 7),
    ...pol(3, 4, 5, 6, 101, 102, 103, 104, 105, 201, 202, 203, 204, 205, 206, 207, 208, 301, 302, 303, 304, 305),
    "SH-PLN-001", "SH-PLN-002", "SH-PLN-003", "SH-PRC-001", "SH-PRC-002", "SH-PRC-003", "SH-PRC-004", "SH-REG-001", "SH-REG-002", "SH-FRM-002",
  ],
  "pk-dora": [
    ...pol(1, 2, 7, 101, 103, 105, 202, 203, 206, 207, 208, 209, 301, 302, 303),
    ...series("SH-DOR", 5),
    "SH-PLN-001", "SH-PLN-002", "SH-PLN-003", "SH-PRC-002", "SH-PRC-003", "SH-PRC-004", "SH-PRC-005", "SH-REG-001", "SH-REG-003",
  ],
  "pk-soc2": [...ALL_POLICIES, ...CORE, ...series("SH-SOC", 4)],
  "pk-essentials": [...pol(1, 3, 5, 6, 101, 102, 202, 204, 207, 301, 303, 304), "SH-PLN-001", "SH-REG-001", "SH-REG-002"],
};

// Every document in the library (the Complete Library bundle, pk-std-all, owns all of them).
export const ALL_LIBRARY_DOCS: string[] = [...new Set(Object.values(BUNDLE_MEMBERS).flat())];

export function bundlesOf(docId: string): LibraryBundleId[] {
  return LIBRARY_BUNDLE_IDS.filter((b) => BUNDLE_MEMBERS[b].includes(docId));
}
