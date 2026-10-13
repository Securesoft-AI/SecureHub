// Render a stored Standard (AI-drafted, or from the document library) to DOCX or PDF.
// Library documents carry both languages; the buyer picks one when generating.
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import type { Narrative } from "./policyNarrative";
import { DOC_LABELS, type Block, type PolicyMeta } from "./policyContent";
import type { DocBlock, DocType, Lang } from "./policyLibrary/types";
import { buildBlocksDocx } from "./policy";
import { appendBlocksToPdf } from "./policyTemplate";

// A real requirement group extracted/derived from the source document: a heading, an
// optional short intro, and enforceable "shall" requirement statements grounded in the source.
export type ReqSection = { heading: string; intro?: string; requirements: string[] };
export type StandardContent = {
  narrative: Narrative;
  sections: string[]; // legacy: scraped headings (kept for back-compat)
  requirementSections?: ReqSection[]; // preferred: real requirements from the source
  summary?: string;
  references?: string[];
  sourceUrl?: string;
  platform?: string;
  // Document library fields.
  title?: string; // title in this content's language
  docType?: DocType;
  body?: DocBlock[]; // free-form documents (procedures, plans, registers, forms) render this instead of the narrative
  translations?: Partial<Record<Lang, StandardContent>>; // other languages of the same document
};

export function parseContent(json: string): StandardContent {
  try { return JSON.parse(json) as StandardContent; } catch { return { narrative: {} as Narrative, sections: [] }; }
}

// The content in the requested language (falls back to the stored default, English).
export function localize(c: StandardContent, lang: Lang = "en"): StandardContent {
  return (lang !== "en" && c.translations?.[lang]) || c;
}

// Languages a stored standard can be generated in.
export function contentLangs(c: StandardContent): Lang[] {
  return ["en", ...(Object.keys(c.translations || {}) as Lang[]).filter((l) => l !== "en")];
}

// True when the standard carries real, source-derived requirements (not just headings).
function hasReqSections(c: StandardContent): boolean {
  return Array.isArray(c.requirementSections) && c.requirementSections.some((s) => s && s.requirements && s.requirements.length > 0);
}

// When a buyer generates a purchased standard, their company name personalises the document.
export type StandardScope = { org?: string; version?: string; classification?: string; date?: string };

const SECTION_LABELS = {
  en: { purpose: "1. Purpose", scope: "2. Scope", roles: "3. Roles & responsibilities", requirements: "4. Security requirements", reqFallback: "Requirements", compliance: "5. Compliance", references: "References" },
  es: { purpose: "1. Propósito", scope: "2. Alcance", roles: "3. Roles y responsabilidades", requirements: "4. Requisitos de seguridad", reqFallback: "Requisitos", compliance: "5. Cumplimiento", references: "Referencias" },
} as const;

const ORG_PHRASE: Record<Lang, RegExp> = { en: /\bthe organization\b/gi, es: /\bla organización\b/gi };

// Free-form library body → render blocks: number steps (restarting after each heading) and put
// the buyer's name into the scope section.
function bodyBlocks(body: DocBlock[], org: string | undefined, lang: Lang): Block[] {
  const out: Block[] = [];
  let n = 0;
  let inScope = false;
  for (const bl of body) {
    if (bl.t === "h1" || bl.t === "h2") n = 0;
    if (bl.t === "h1") inScope = /^2\./.test(bl.text);
    if (bl.t === "step") out.push({ t: "step", n: ++n, text: bl.text });
    else if (bl.t === "p" && inScope && org) out.push({ t: "p", text: bl.text.replace(ORG_PHRASE[lang], org) });
    else out.push(bl);
  }
  return out;
}

// Block model of a stored standard, so a buyer's house-style template can be filled the same
// way the hardening policy is (see policyTemplate.injectBlocksIntoDocx/Pdf).
export function standardBlocks(title: string, content: StandardContent, scope: StandardScope = {}, lang: Lang = "en"): Block[] {
  const c = localize(content, lang);
  const L = SECTION_LABELS[lang];
  const b: Block[] = [];

  if (c.body?.length) {
    b.push(...bodyBlocks(c.body, scope.org, lang));
  } else {
    const n = c.narrative;
    b.push({ t: "h1", text: L.purpose });
    if (n.purposeIntro) b.push({ t: "p", text: n.purposeIntro });
    (n.purposeAims || []).forEach((x) => b.push({ t: "li", text: x }));
    b.push({ t: "h1", text: L.scope });
    if (n.scopeIntro) b.push({ t: "p", text: scope.org ? n.scopeIntro.replace(ORG_PHRASE[lang], scope.org) : n.scopeIntro });
    (n.scopeCovers || []).forEach((x) => b.push({ t: "li", text: x }));
    b.push({ t: "h1", text: L.roles });
    (n.roles || []).forEach((r) => b.push({ t: "role", role: r.role, resp: r.responsibilities || [] }));

    b.push({ t: "h1", text: L.requirements });
    if (hasReqSections(c)) {
      c.requirementSections!.forEach((sec) => {
        if (!sec || !sec.requirements?.length) return;
        b.push({ t: "h2", text: sec.heading || L.reqFallback });
        if (sec.intro) b.push({ t: "p", text: sec.intro });
        sec.requirements.forEach((r) => b.push({ t: "li", text: r }));
      });
    } else {
      (c.sections || []).forEach((s) => b.push({ t: "li", text: s }));
    }

    b.push({ t: "h1", text: L.compliance });
    if (n.complianceIntro) b.push({ t: "p", text: n.complianceIntro });
    if (n.complianceEnforcement) b.push({ t: "p", text: n.complianceEnforcement });
  }

  // References are shared across languages; number the heading after the body's last section.
  const refs = c.references?.length ? c.references : content.references;
  if (refs && refs.length) {
    const lastNum = Math.max(0, ...b.filter((x) => x.t === "h1").map((x) => parseInt((x as { text: string }).text, 10) || 0));
    b.push({ t: "h1", text: `${lastNum + 1}. ${L.references}` });
    refs.forEach((r) => b.push({ t: "li", text: r }));
  }
  return b;
}

// The title to print: the library title in the requested language, else the stored title.
export function standardTitle(title: string, content: StandardContent, lang: Lang = "en"): string {
  return (lang !== "en" && localize(content, lang).title) || title;
}

// Inline {{PLACEHOLDER}} values for a buyer's DOCX template.
export function standardInlineMap(title: string, scope: StandardScope): Record<string, string> {
  return {
    "{{TITLE}}": title,
    "{{ORG}}": scope.org || "",
    "{{VERSION}}": scope.version || "1.0",
    "{{DATE}}": scope.date || new Date().toISOString().slice(0, 10),
    "{{CLASSIFICATION}}": scope.classification || "Internal Use",
  };
}

// Build the SecureHub-branded PolicyMeta for a standard (cover, version table, house style).
function standardMeta(title: string, content: StandardContent, scope: StandardScope, lang: Lang): PolicyMeta {
  const c = localize(content, lang);
  const org = scope.org || "SecureHub";
  const isLibrary = !!(content.docType || content.body);
  return {
    org,
    title,
    version: scope.version || "1.0",
    author: scope.org ? `${scope.org} ${lang === "es" ? "Seguridad" : "Security"}` : "SecureHub",
    date: scope.date || new Date().toISOString().slice(0, 10),
    color: "#0f4c9c",
    classification: scope.classification || (lang === "es" ? "Uso interno" : "Internal Use"),
    platform: c.platform || "",
    benchTitle: c.platform || c.sourceUrl || "the referenced source",
    benchVersion: "",
    lang,
    // Library documents show their summary under the title instead of "Operationalises: …".
    subtitle: isLibrary ? c.summary || "" : undefined,
  };
}

// Default standard DOCX uses the SecureHub house template (same as the DISA guides). When a
// buyer supplies their own template, the generate route injects into it instead (see route).
export async function buildStandardDocx(title: string, c: StandardContent, scope: StandardScope = {}, lang: Lang = "en"): Promise<Buffer> {
  const t = standardTitle(title, c, lang);
  return buildBlocksDocx(standardMeta(t, c, scope, lang), standardBlocks(t, c, scope, lang));
}

function latin1(s: string): string {
  return (s || "").replace(/[—–]/g, "-").replace(/[“”]/g, '"').replace(/[‘’]/g, "'").replace(/…/g, "...").replace(/[^\x00-\xFF]/g, "");
}

// House-style PDF: a cover page, then the same blocks as the DOCX.
export async function buildStandardPdf(title: string, c: StandardContent, scope: StandardScope = {}, lang: Lang = "en"): Promise<Buffer> {
  const t = standardTitle(title, c, lang);
  const meta = standardMeta(t, c, scope, lang);
  const L = DOC_LABELS[lang];
  const pdf = await PDFDocument.create();
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const brand = rgb(0.06, 0.3, 0.61), ink = rgb(0.11, 0.1, 0.09), muted = rgb(0.4, 0.39, 0.37);
  const M = 56, W = 595.28, H = 841.89;
  const page = pdf.addPage([W, H]);
  let y = H - 220;
  const line = (text: string, size: number, f = font, color = ink, gap = 6) => {
    const words = latin1(text).split(/\s+/);
    let cur = "";
    const flush = () => { if (cur) { page.drawText(cur, { x: M, y, size, font: f, color }); y -= size + gap; cur = ""; } };
    for (const w of words) {
      const next = cur ? `${cur} ${w}` : w;
      if (f.widthOfTextAtSize(next, size) > W - 2 * M) { flush(); cur = w; } else cur = next;
    }
    flush();
  };
  if (scope.org) line(scope.org, 14, bold, brand, 10);
  line(t, 24, bold, brand, 10);
  if (meta.subtitle) line(meta.subtitle, 11, font, muted, 4);
  y -= 30;
  line(`${L.classification}: ${meta.classification}   ·   ${L.version}: ${meta.version}   ·   ${L.date}: ${meta.date}`, 10);
  line(`${L.owner}: ${meta.author}`, 10);

  await appendBlocksToPdf(pdf, standardBlocks(t, c, scope, lang), meta.color);
  return Buffer.from(await pdf.save());
}
