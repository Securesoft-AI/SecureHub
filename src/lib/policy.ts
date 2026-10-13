// Built-in policy-document generator (neutral template) on the `docx` library.
// Renders the shared policy block model into an editable corporate security standard.

import {
  Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell,
  WidthType, BorderStyle, ShadingType, PageOrientation, type ISectionOptions,
} from "docx";
import type { FullControl } from "./hub/controlContent";
import type { Narrative } from "./policyNarrative";
import { policyBlocks, DOC_LABELS, type PolicyMeta, type Block } from "./policyContent";

export type { PolicyMeta } from "./policyContent";

// Tables with more columns than this are laid out on landscape pages.
export const WIDE_TABLE_COLS = 7;

const HEAD = { 1: HeadingLevel.HEADING_1, 2: HeadingLevel.HEADING_2, 3: HeadingLevel.HEADING_3 } as const;

export async function buildPolicyDocx(meta: PolicyMeta, controls: FullControl[], narrative: Narrative): Promise<Buffer> {
  return buildBlocksDocx(meta, policyBlocks(meta, controls, narrative));
}

// The SecureHub house style (cover + version-history table + branded headings), rendering an
// arbitrary Block[] — shared by the hardening policy and the standalone standards so both
// carry the same default branding.
export async function buildBlocksDocx(meta: PolicyMeta, blocks: Block[]): Promise<Buffer> {
  const brand = meta.color.replace("#", "");
  const L = DOC_LABELS[meta.lang || "en"];
  const subtitle = meta.subtitle ?? `${L.operationalises}: ${meta.benchTitle}${meta.benchVersion ? ` (${meta.benchVersion})` : ""}`;

  let children: (Paragraph | Table)[] = [];
  // Wide tables (registers, matrices) get their own landscape section.
  const sections: ISectionOptions[] = [];
  const closeSection = (landscape = false) => {
    if (children.length) sections.push({ properties: landscape ? { page: { size: { orientation: PageOrientation.LANDSCAPE } } } : {}, children });
    children = [];
  };
  // Start a landscape section for a wide table, carrying the heading (and any intro text)
  // that introduces it so the heading is not left alone at the bottom of a portrait page.
  let lastHeadingAt = -1; // index in `children` of the latest heading, -1 once content follows a table
  const openWideSection = () => {
    const carry = lastHeadingAt >= 0 ? children.splice(lastHeadingAt) : [];
    closeSection();
    children = carry;
  };

  // Cover / title block
  children.push(new Paragraph({ spacing: { before: 800 }, children: [new TextRun({ text: meta.org, bold: true, size: 28, color: brand })] }));
  children.push(new Paragraph({ spacing: { before: 120, after: 60 }, children: [new TextRun({ text: meta.title, bold: true, size: 52, color: brand })] }));
  if (subtitle) children.push(new Paragraph({ children: [new TextRun({ text: subtitle, size: 22, color: "57534E" })] }));
  children.push(new Paragraph({ spacing: { before: 400 }, children: [new TextRun({ text: `${L.classification}: ${meta.classification}   ·   ${L.version}: ${meta.version}   ·   ${L.date}: ${meta.date}`, size: 20 })] }));
  children.push(new Paragraph({ children: [new TextRun({ text: `${L.owner}: ${meta.author}`, size: 20 })] }));

  const vb = { style: BorderStyle.SINGLE, size: 1, color: "E7E6E5" };
  children.push(new Paragraph({ pageBreakBefore: true, heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: L.versionHistory })] }));
  children.push(
    new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      borders: { top: vb, bottom: vb, left: vb, right: vb, insideHorizontal: vb, insideVertical: vb },
      rows: [
        new TableRow({ tableHeader: true, children: [L.version, L.date, L.author, L.description].map((t) => new TableCell({ shading: { type: ShadingType.CLEAR, color: "auto", fill: brand }, children: [new Paragraph({ children: [new TextRun({ text: t, bold: true, color: "FFFFFF", size: 18 })] })] })) }),
        new TableRow({ children: [meta.version, meta.date, meta.author, L.initialIssue].map((t) => new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: t, size: 18 })] })] })) }),
      ],
    }),
  );

  let firstH1 = true;
  for (const bl of blocks) {
    switch (bl.t) {
      case "h1":
        lastHeadingAt = children.length;
        children.push(new Paragraph({ heading: HEAD[1], pageBreakBefore: firstH1, spacing: { before: 240, after: 80 }, children: [new TextRun({ text: bl.text })] }));
        firstH1 = false;
        break;
      case "h2":
        lastHeadingAt = children.length;
        children.push(new Paragraph({ heading: HEAD[2], spacing: { before: 160, after: 40 }, children: [new TextRun({ text: bl.text })] }));
        break;
      case "h3":
        children.push(new Paragraph({ heading: HEAD[3], spacing: { before: 100, after: 20 }, children: [new TextRun({ text: bl.text, color: brand })] }));
        break;
      case "p":
        children.push(new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text: bl.text, size: 20 })] }));
        break;
      case "li":
        children.push(new Paragraph({ text: bl.text, bullet: { level: 0 }, spacing: { after: 40 } }));
        break;
      case "kv":
        children.push(new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text: `${bl.label}. `, bold: true, size: 18 }), new TextRun({ text: bl.text, size: 18 })] }));
        break;
      case "role":
        children.push(new Paragraph({ spacing: { before: 60, after: 20 }, children: [new TextRun({ text: bl.role, bold: true, size: 19 })] }));
        bl.resp.forEach((r) => children.push(new Paragraph({ text: r, bullet: { level: 0 }, spacing: { after: 20 } })));
        break;
      case "step":
        children.push(new Paragraph({ indent: { left: 360, hanging: 360 }, spacing: { after: 60 }, children: [new TextRun({ text: `${bl.n}.\t`, bold: true, size: 20, color: brand }), new TextRun({ text: bl.text, size: 20 })] }));
        break;
      case "table": {
        const small = bl.headers.length > 10 ? 14 : bl.headers.length > 6 ? 15 : 17;
        const cell = (text: string, header: boolean) =>
          new TableCell({
            shading: header ? { type: ShadingType.CLEAR, color: "auto", fill: brand } : undefined,
            children: [new Paragraph({ children: [new TextRun({ text, bold: header, color: header ? "FFFFFF" : undefined, size: small })] })],
          });
        const wide = bl.headers.length > WIDE_TABLE_COLS;
        if (wide) openWideSection();
        children.push(
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: { top: vb, bottom: vb, left: vb, right: vb, insideHorizontal: vb, insideVertical: vb },
            rows: [
              new TableRow({ tableHeader: true, children: bl.headers.map((h) => cell(h, true)) }),
              ...bl.rows.map((r) => new TableRow({ children: bl.headers.map((_, i) => cell(r[i] ?? "", false)) })),
            ],
          }),
        );
        children.push(new Paragraph({ spacing: { after: 120 }, children: [] }));
        if (wide) closeSection(true);
        lastHeadingAt = -1;
        break;
      }
      case "field":
        children.push(new Paragraph({ spacing: { before: 100, after: 0 }, children: [new TextRun({ text: bl.label, bold: true, size: 19 }), ...(bl.hint ? [new TextRun({ text: `  (${bl.hint})`, italics: true, size: 17, color: "79716B" })] : [])] }));
        children.push(new Paragraph({ spacing: { after: 80 }, border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: "A8A29E", space: 1 } }, children: [new TextRun({ text: " ", size: 22 })] }));
        break;
    }
  }

  const doc = new Document({
    creator: "SecureHub",
    title: meta.title,
    description: `${meta.org} — ${meta.benchTitle}`,
    styles: { default: { document: { run: { font: "Calibri" } } } },
    sections: (closeSection(), sections),
  });
  return Packer.toBuffer(doc);
}
