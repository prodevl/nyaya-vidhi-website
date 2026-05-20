/**
 * Extracts text from a PDF and writes it to stdout (or to a file).
 *
 * Usage:
 *   node scripts/extract-pdf.mjs "<absolute-path-to-pdf>" [outFile]
 *
 * If outFile is omitted, the text is printed to stdout. If provided, it is
 * written to that file (UTF-8). The script also prints, on stderr, the
 * 1-indexed page number marker `\n--- PAGE n ---\n` between every page so
 * downstream authoring can locate exact source pages.
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { PDFParse } = require("pdf-parse");

const [, , inFile, outFile] = process.argv;
if (!inFile) {
  console.error("Usage: node scripts/extract-pdf.mjs <pdf> [outFile]");
  process.exit(1);
}

const buf = await fs.readFile(path.resolve(inFile));
const parser = new PDFParse({ data: buf });
const result = await parser.getText();

// pdf-parse v2 returns { pages: [{ text, ... }], info, metadata, ... }
const pages = result.pages || [];
const chunks = pages.map((p, i) => `\n--- PAGE ${i + 1} ---\n${(p.text ?? "").trim()}`);
const output = chunks.length > 0 ? chunks.join("\n") : (result.text ?? "");

if (outFile) {
  await fs.writeFile(path.resolve(outFile), output, "utf8");
  console.error(`Wrote ${output.length.toLocaleString()} chars to ${outFile} (${pages.length || "?"} pages)`);
} else {
  process.stdout.write(output);
}

await parser.destroy?.();
