// Validate the document library: every bundle member exists, English and Spanish versions
// match in structure, tables are rectangular, and text carries no markdown artefacts.
// Run: npm run check:library   (exits 1 when a problem is found)

import { POLICY_LIBRARY, POLICY_LIBRARY_ES, LIBRARY_DOCS } from "../src/lib/policyLibrary";
import { BUNDLE_MEMBERS, ALL_LIBRARY_DOCS } from "../src/lib/policyLibrary/bundles";
import type { DocBlock, PolicyText } from "../src/lib/policyLibrary/types";

const problems: string[] = [];
const fail = (msg: string) => problems.push(msg);

const known = new Set([...POLICY_LIBRARY.map((p) => p.docId), ...LIBRARY_DOCS.map((d) => d.docId)]);
const seen = new Set<string>();
for (const id of [...POLICY_LIBRARY.map((p) => p.docId), ...LIBRARY_DOCS.map((d) => d.docId)]) {
  if (seen.has(id)) fail(`duplicate docId ${id}`);
  seen.add(id);
}
for (const [bundle, ids] of Object.entries(BUNDLE_MEMBERS)) {
  for (const id of ids) if (!known.has(id)) fail(`${bundle}: ${id} has no content`);
}
for (const id of known) if (!ALL_LIBRARY_DOCS.includes(id)) fail(`${id} is not in any bundle`);

const BAD_TEXT = /^\s*[-*•#]\s|\*\*|\[Organization Name\]/;
const checkText = (id: string, s: string) => { if (BAD_TEXT.test(s)) fail(`${id}: markdown or placeholder artefact in "${s.slice(0, 60)}"`); };

// Policies: Spanish text must mirror the English structure.
const shape = (p: PolicyText) =>
  JSON.stringify([p.aims.length, p.covers.length, p.roles.map((r) => r.responsibilities.length), p.sections.map((s) => s.requirements.length)]);
for (const p of POLICY_LIBRARY) {
  const es = POLICY_LIBRARY_ES[p.docId];
  if (!es) { fail(`${p.docId}: missing Spanish translation`); continue; }
  if (shape(p) !== shape(es)) fail(`${p.docId}: English and Spanish structure differ`);
  [p, es].forEach((t) => [t.purpose, t.scope, ...t.aims, ...t.covers, ...t.sections.flatMap((s) => s.requirements)].forEach((x) => checkText(p.docId, x)));
}

// Documents: same block types in both languages, rectangular tables, short summaries.
const blockShape = (b: DocBlock[]) => b.map((x) => (x.t === "table" ? `table:${x.headers.length}x${x.rows.length}` : x.t)).join(",");
for (const d of LIBRARY_DOCS) {
  if (blockShape(d.en.body) !== blockShape(d.es.body)) fail(`${d.docId}: English and Spanish blocks differ`);
  for (const lang of ["en", "es"] as const) {
    const t = d[lang];
    if (!t.title || !t.summary) fail(`${d.docId}/${lang}: missing title or summary`);
    if (t.summary.length > 220) fail(`${d.docId}/${lang}: summary longer than 220 characters`);
    for (const b of t.body) {
      if (b.t === "table") b.rows.forEach((r, i) => { if (r.length !== b.headers.length) fail(`${d.docId}/${lang}: table row ${i + 1} has ${r.length} cells for ${b.headers.length} columns`); });
      else if (b.t === "field") checkText(d.docId, b.label);
      else checkText(d.docId, b.text);
    }
  }
}

console.log(`${POLICY_LIBRARY.length} policies, ${LIBRARY_DOCS.length} other documents, ${Object.keys(BUNDLE_MEMBERS).length} bundles`);
if (problems.length) {
  console.error(problems.map((p) => `  - ${p}`).join("\n"));
  process.exit(1);
}
console.log("Library OK");
