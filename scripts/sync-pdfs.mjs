/**
 * One-off / repeatable script: copy every PDF from
 *   c:\Users\Debabrata Barman\Documents\The law & order\
 * into
 *   <website>/public/pdfs/
 *
 * Run via:
 *   node scripts/sync-pdfs.mjs
 *
 * The script preserves folder structure (so the URLs in lib/statutes/_registry.ts
 * resolve as expected). It is idempotent — only copies when the source is newer
 * or the destination is missing.
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE = path.resolve(
  __dirname,
  "..",
  "..",
  "The law & order"
);
const DEST = path.resolve(__dirname, "..", "public", "pdfs");

let copied = 0;
let skipped = 0;
let failed = 0;

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function shouldCopy(src, dst) {
  try {
    const [s, d] = await Promise.all([fs.stat(src), fs.stat(dst)]);
    return s.mtimeMs > d.mtimeMs || s.size !== d.size;
  } catch {
    return true; // dst missing
  }
}

async function walk(srcDir, dstDir) {
  const entries = await fs.readdir(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const dstPath = path.join(dstDir, entry.name);
    if (entry.isDirectory()) {
      await ensureDir(dstPath);
      await walk(srcPath, dstPath);
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".pdf")) {
      try {
        if (await shouldCopy(srcPath, dstPath)) {
          await ensureDir(path.dirname(dstPath));
          await fs.copyFile(srcPath, dstPath);
          copied++;
          console.log(`  ✓ ${path.relative(SOURCE, srcPath)}`);
        } else {
          skipped++;
        }
      } catch (e) {
        failed++;
        console.error(`  ✗ ${path.relative(SOURCE, srcPath)} — ${e.message}`);
      }
    }
  }
}

(async () => {
  console.log(`Source : ${SOURCE}`);
  console.log(`Target : ${DEST}\n`);
  try {
    await fs.access(SOURCE);
  } catch {
    console.error(`Source folder not found: ${SOURCE}`);
    process.exit(1);
  }
  await ensureDir(DEST);
  await walk(SOURCE, DEST);
  console.log(`\nDone. Copied: ${copied}  Skipped (up-to-date): ${skipped}  Failed: ${failed}`);
})();
