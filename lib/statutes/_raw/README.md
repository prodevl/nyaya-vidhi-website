# `_raw/` — extracted PDF text per statute

Per-statute verbatim text extracted from the source PDFs in `public/pdfs/`.
These files are **not imported at runtime**; they are working transcripts that
Cascade reads while authoring an Act's `<slug>.ts` file, slicing the right
section text and the corresponding `pdfPage` into the section's `verbatim`
field.

## Filename convention

`<statute-slug>.txt` — same slug as the Act's `meta.slug` in
`lib/statutes/_registry.ts`.

Each file is plain UTF-8 with explicit page markers in the format:

```
--- PAGE 1 ---
... extracted text of page 1 ...

--- PAGE 2 ---
... extracted text of page 2 ...
```

## Workflow

When authoring a new Act:

1. Find its source PDF path in `_registry.ts` (`sourcePdf.pdfPath`).
2. Run the extractor:

   ```bash
   npm run extract:pdf -- "public/pdfs/<Category>/<File>.pdf" \
     "lib/statutes/_raw/<statute-slug>.txt"
   ```

   On Windows PowerShell:

   ```powershell
   npm run extract:pdf -- "public\pdfs\<Category>\<File>.pdf" `
     "lib\statutes\_raw\<statute-slug>.txt"
   ```

3. Open the resulting `.txt` to locate each section's verbatim text and the
   `--- PAGE N ---` marker that precedes it.
4. Paste the verbatim text into the section's `verbatim` field in
   `lib/statutes/<category>/<slug>.ts`, and record `N` as the section's
   `source.pdfPage`.

## Why .txt, not .ts?

Two reasons:

1. **Not runtime data.** The verbatim text is baked into the Act file at
   author time, not loaded by the app. A flat `.txt` is the minimum useful
   shape.
2. **Lower friction.** No TypeScript boilerplate, no escape gymnastics for
   special characters in section text. Cascade reads the file, copies, and
   moves on.

If the workflow ever needs runtime access to verbatim text (e.g., for a
cross-Act search index), we'll add a build-time loader that emits a typed
manifest from these `.txt` files.

## See also

- `PHASE-2-PROGRESS.md` §1 — the MVP content contract.
- `scripts/extract-pdf.mjs` — the underlying extractor.
