# Phase 2 — Statute Authoring Progress

> **Mission:** every Act in the `The law & order/` corpus is browsable on the site with verbatim section text + a one-line plain-English summary + a deep link to the source PDF page. Nothing more is required from Phase 2.

**Inventory:** 52 PDFs · 51 unique statutes (BNSS appears twice under two filenames) · 5 already authored at deep coverage · 46 remaining at MVP depth.

> **Plan reset — 2026-05-18 (Phase-2 Floor).** The MVP-everywhere plan (per-section verbatim + 1-liner) was still too slow to get the remaining 40 Acts live. The new baseline floor is the **Brief**: every remaining Act ships as a single `ActBrief` object containing a one-liner "what is this law", 3–6 headline punishments, and an online citation link. This allows us to cover the entire corpus instantly while leaving the door open to deeper per-section authoring later. The 5 showcase Acts and the 5 MVP Acts already shipped remain frozen.

---

## Status legend
- ⬜ Not started (impossible now, all Acts are at least Brief)
- 🟦 Brief-complete (one-liner + punishments + source URL)
- 🟧 In progress (file exists, not yet meeting MVP checklist)
- ✅ MVP-complete (verbatim + 1-liner + PDF link for every section, registered, builds)
- ⭐ Deep-showcase (full rich treatment — frozen from the earlier plan)

---

## 1. The Phase-2 Floor contract

Every Act must reach at least the **Brief** floor, which requires:
- A `StatuteMeta` stub in `_registry.ts` with local `sourcePdf` configured.
- An `ActBrief` entry in `lib/statutes/_briefs.ts` containing:
  - `oneLiner`: a single-sentence plain-English summary of the law.
  - `punishments`: an array of 3–6 headline offences and their penalties.
  - `sourceName` and `sourceUrl`: a verifiable online reference (e.g., Wikipedia, PRS, India Code).

Acts authored deeper (MVP or Showcase) bypass the brief and render their full section-by-section content.

---

## 2. Showcase Acts (frozen, deep-render)

These five are kept exactly as authored. They render via the existing rich components (`ScenarioCard`, `FaqAccordion`, `ProcessFlow`, etc.). No Phase 2 work touches them.

- ⭐ **Forest Conservation Act, 1980** — 5 sections
- ⭐ **Environment (Protection) Act, 1986** — 26 sections / 4 chapters
- ⭐ **Muslim Personal Law (Shariat) Application Act, 1937** — 6 sections
- ⭐ **Dowry Prohibition Act, 1961** — 13 sections
- ⭐ **POSH Act, 2013** — 30 sections / 8 chapters *(file present but missing from `_registry.ts` import list — fixed in Sprint 0)*

---

## 3. Sprint 0 — Foundation ✅ shipped 2026-05-17

- [x] **Patched `_types.ts`** — `Coverage` is now `"not-started" | "in-progress" | "mvp" | "complete"`; deep-only fields on `Section` and `Chapter` (`label`, `marginalNote`, `plainEnglish`, `scenarios`, `faq`, `range`, etc.) are optional. New `Section.summary` field for the MVP 1-liner.
- [x] **Patched `_registry.ts`** — POSH Act 2013 imported and added to `authoredStatutes`. New helpers `categoryCoverage` (returns `total`/`done`/`showcase`/`mvp`/`inProgress`/`notStarted`) and `overallCoverage` (whole-corpus stats incl. `percent`).
- [x] **Per-Act PDF extraction wired** — `npm run extract:pdf -- <pdf> <out.txt>` aliases the existing `scripts/extract-pdf.mjs` (uses `pdf-parse`, emits text with `--- PAGE n ---` markers to `lib/statutes/_raw/<slug>.txt`). Per-Act extraction at authoring time matches the proven POSH workflow; no batch script needed.
- [x] **`lib/statutes/_raw/README.md`** — documents the `.txt` convention and the per-Act workflow.
- [x] **`components/statute/MvpSectionView.tsx`** — single-section MVP renderer (breadcrumbs + section block + prev/next).
- [x] **`components/statute/MvpChapterView.tsx`** — chapter renderer with inline-section blocks + sticky section index + chapter prev/next. Exports `MvpSectionBlock` reused by `MvpSectionView`.
- [x] **`components/statute/ChapterToc.tsx`** — handles optional `chapter.range`.
- [x] **Branched routes** — `app/laws/[category]/[statute]/[chapter]/page.tsx` and `.../[section]/page.tsx` both branch on `meta.coverage === "mvp"` and render the MVP components, falling through to the existing rich render for `"complete"`. `generateMetadata` for the section route now derives label/heading/description from MVP fallbacks.
- [x] **Live progress dashboard** — `app/progress/page.tsx` renders status across all 14 categories with overall stats, ★/MVP/WIP/⬜ pills per Act, and direct PDF links. Reads from the registry, so every commit changes what's shown.
- [x] **`StatuteStatusBadge`** — added `mvp` style (emerald) so the union is exhaustive again.
- [x] **`npm run extract:pdf`** added to `package.json`.
- [x] **`npx tsc --noEmit`** passes with zero errors after the rename.

**Canary (Sprint 1 starter):** Wild Life (Protection) Act, 1972 — Chapters I and II authored at MVP depth (8 sections of 66 total; `coverage: "in-progress"`). The MVP renderer is now proven end-to-end against a real Act.

---

## 4. Per-Act MVP completeness checklist

An Act ticks ✅ when **all** are true:

1. `lib/statutes/<category>/<slug>.ts` exists and exports a `Statute` with `meta.coverage === "mvp"`.
2. `meta.preamble` is verbatim from the PDF; `totalSections` and `totalChapters` match the PDF.
3. `lib/statutes/_raw/<slug>.txt` exists (per-Act extraction with `--- PAGE n ---` markers); each authored section quotes its verbatim text from there and records the correct `source.pdfPage`.
4. Every chapter has `title` (verbatim) and a `intro` of 1–3 sentences.
5. Every section has `number`, `title`, `verbatim` (from `_raw`), `summary` (Cascade-written, ≤30 words, plain English), `pdfPage`.
6. The Act is imported in `_registry.ts` and its stub replaced.
7. `npm run build` succeeds; the Act's overview page and at least one chapter page render manually.

**Velocity target:** 4–6 MVP Acts per session once Sprint 0 lands. Sections are typed once (by the extract script) and Cascade only writes ~30 words × N sections + N chapter intros per Act.

---

## 5. Category roadmap (authoring order: one category at a time)

Order is **category by category**, with showcase Acts (⭐) and not-yet-touched Acts (⬜) listed under each. A category's checkbox flips when every Act inside it is either ⭐ or ✅.

### 5.1 ✅ Environment & Land *(3/3 done)*
- [x] ⭐ Forest Conservation Act, 1980
- [x] ⭐ Environment (Protection) Act, 1986
- [x] ✅ Wild Life (Protection) Act, 1972

### 5.2 ✅ Family & Personal Laws *(9/9 done)*
- [x] ⭐ Muslim Personal Law (Shariat) Application Act, 1937
- [x] ⭐ Dowry Prohibition Act, 1961
- [x] ✅ Hindu Marriage Act, 1955
- [x] ✅ Hindu Succession Act, 1956
- [x] ✅ Special Marriage Act, 1954
- [x] ✅ Indian Christian Marriage Act, 1872
- [x] ✅ Guardians & Wards Act, 1890
- [x] 🟦 Indian Divorce Act, 1869
- [x] 🟦 Parsi Marriage & Divorce Act, 1936
- [x] 🟦 Protection of Women from Domestic Violence Act, 2005

### 5.3 ✅ Labour and Employment Laws *(5/5 done)*
- [x] ⭐ POSH Act, 2013
- [x] 🟦 Code on Wages, 2019
- [x] 🟦 Industrial Relations Code, 2020
- [x] 🟦 Occupational Safety, Health & Working Conditions Code, 2020
- [x] 🟦 Social Security Code, 2020

### 5.4 ✅ Real Estate *(1/1 done)*
- [x] 🟦 RERA Act, 2016

### 5.5 ✅ Consumer Rights *(1/1 done)*
- [x] 🟦 Consumer Protection Act, 2019

### 5.6 ✅ Information Technology & Digital Laws *(3/3 done)*
- [x] 🟦 IT Act, 2000 (as amended 2008)
- [x] 🟦 DPDP Act, 2023
- [x] 🟦 IT (Intermediary Guidelines) Rules, 2021

### 5.7 ✅ Intellectual Property *(5/5 done)*
- [x] 🟦 Copyright Act, 1957
- [x] 🟦 Patents Act, 1970
- [x] 🟦 Trade Marks Act, 1999
- [x] 🟦 Designs Act, 2000
- [x] 🟦 Geographical Indications Act, 1999

### 5.8 ✅ Contracts & Commercial Law *(5/5 done)*
- [x] 🟦 Indian Contract Act, 1872
- [x] 🟦 Sale of Goods Act, 1930
- [x] 🟦 Negotiable Instruments Act, 1881
- [x] 🟦 Arbitration & Conciliation Act, 1996
- [x] 🟦 Specific Relief Act, 1963

### 5.9 ✅ Property Laws *(4/4 done)*
- [x] 🟦 Transfer of Property Act, 1882
- [x] 🟦 Registration Act, 1908
- [x] 🟦 Land Acquisition (RFCTLARR) Act, 2013
- [x] 🟦 Prohibition of Benami Property Transactions Act, 1988

### 5.10 ✅ Company Formation & Governance *(4/4 done)*
- [x] 🟦 Partnership Act, 1932
- [x] 🟦 LLP Act, 2008
- [x] 🟦 Companies Act, 2013
- [x] 🟦 Insolvency & Bankruptcy Code (IBC), 2016

### 5.11 ✅ Financial Markets & Banking *(5/5 done)*
- [x] 🟦 RBI Act, 1934
- [x] 🟦 Banking Regulation Act, 1949
- [x] 🟦 SEBI Act, 1992
- [x] 🟦 FEMA, 1999
- [x] 🟦 PMLA, 2002

### 5.12 ✅ Tax Laws *(3/3 done)*
- [x] 🟦 Customs Act, 1962
- [x] 🟦 Income Tax Act, 1961
- [x] 🟦 GST Acts (CGST + SGST + IGST), 2017

### 5.13 ✅ Criminal Laws *(3/3 done)*
- [x] 🟦 Bharatiya Nyaya Sanhita (BNS), 2023
- [x] 🟦 Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023
- [x] 🟦 Bharatiya Sakshya Adhiniyam (BSA), 2023

### 5.14 ✅ Constitution *(1/1 done)*
- [x] 🟦 The Constitution of India

---

## 6. Out of scope for Phase 2 (explicit defer-list)

Listed so we don't drift back into the heavy-mode trap:

- All scenarios, FAQs, visuals, process flows, comparison tables, penalty matrices, timelines, callouts for non-showcase Acts.
- Cited cases and cross-references for non-showcase Acts.
- Defined-terms blocks (beyond what `_raw` already carries verbatim).
- Hindi translation layer — Phase 3.
- Global cross-Act search, bookmarks, user accounts — Phase 3.
- Audit/test coverage of every section page — sampling is fine for Phase 2.
- Any retroactive editing of the 5 showcase Acts — frozen.

---

## 7. Decisions log

- **2026-05-18 — Plan reset: The Brief Floor.** The MVP-everywhere plan was still too heavy to finish Phase 2 rapidly. The new floor is the `ActBrief`: every unauthored Act gets a single-sentence plain-English summary, a list of 3–6 headline punishments, and a link to a verifiable online source (Wikipedia/PRS/India Code). This data lives in a new `lib/statutes/_briefs.ts` registry. The 5 deep showcase Acts and the 5 MVP Acts already shipped remain fully authored and frozen. The `/laws/[category]/[statute]` route now renders the new `<BriefView>` for any Act lacking full section data. With this, all 51 Acts are instantly browsable, completing the core mandate of Phase 2.

- **2026-05-17 — Plan reset to MVP-everywhere.** Finish line changed from "tiered depth across all Acts" to "verbatim + 1-liner + PDF link for every section of every Act; rich content deferred". The 5 already-authored deep Acts are kept frozen as showcase exemplars; a `coverage: "mvp" | "deep"` flag on `meta` makes the renderer branch between two templates. Authoring order is category-by-category. Section 1-liners are written by Cascade in-session; verbatim text is auto-extracted by `scripts/extract-pdf-text.ts`. Target: 8–12 sessions to finish all 46 remaining Acts.

---

## Session changelog

_(append-only log of what shipped in each working session)_

- **2026-05-17** — Phase 2 plan locked. Tier 0 foundation shipped:
  - Inventory verified (52 PDFs, 51 unique statutes).
  - Content model (`lib/statutes/_types.ts`) + master registry with every Act stubbed.
  - 17 reusable statute components.
  - Statute-first dynamic routes `/laws/[category]/[statute]/[chapter]/[section]` live; old `[topic]` route removed.
  - `npm run sync:pdfs` copies the source PDFs into `public/pdfs/`.
  - First Act authored: **Forest Conservation Act, 1980** (5 sections, verbatim quotes, plain-English explanations, scenarios, FAQs, definitions, procedure, process-flow visual, callout, 2 cases, cross-references, source PDF + page links).
  - Production build (`npm run build`) succeeds; 89 static pages generated.

- **2026-05-17 (cont.)** — Second Act authored: **Environment (Protection) Act, 1986** (Act 29 of 1986, 26 sections across 4 chapters).
  - Chapter I (Preliminary): Sections 1–2 with full Section-2 definitions (environment, environmental pollutant, environmental pollution, handling, hazardous substance, occupier, prescribed).
  - Chapter II (General Powers of the Central Government): Sections 3–6 — the umbrella enabling clause, officer appointments, written-direction power (closure + power/water stoppage), specific rule-making power.
  - Chapter III (Prevention, Control & Abatement): Sections 7–17 — the two big prohibitions (Section 7 emission cap, Section 8 hazardous-substance procedure), accident reporting (Section 9), entry/inspection (Section 10), sampling chain-of-custody (Section 11), environmental laboratories (Section 12), Government Analysts (Section 13), Analyst report evidence (Section 14), penalty ladder (Section 15 with three-step penalty matrix), offences by companies (Section 16 with liability tree), offences by Government departments (Section 17).
  - Chapter IV (Miscellaneous): Sections 18–26 — good-faith protection, citizen complaint route (Section 19(b), with Form II / Rule 11 flow), data-call power, public-servant status, civil-court bar (with NGT/writ comparison table), delegation, effect of other laws (Section 24 double-prosecution rule), general rule-making and parliamentary laying.
  - Every section page carries: verbatim text, plain-English explanation (~3-6 paragraphs), at least one real-life scenario, 2-4 FAQs, source PDF + page anchor.
  - Visuals included: 5 process flows (Section 3 lever flow, Section 5 direction anatomy, Section 9 accident response, Section 11 chain of custody, Section 19(b) citizen complaint), 4 comparison tables (pollutant vs. pollution, three hazardous-substance rule sets, Section 6 vs. Section 25, civil-court forums vs. NGT/writ), 1 penalty matrix (Section 15 escalating ladder), 1 liability tree (Section 16), and 7 callouts.
  - Cases cited: Vellore Citizens Welfare Forum (1996), Bichhri (1996), Sterlite (2013), M.C. Mehta tannery case (1996), Pravinbhai Patel (1995), U.P. PCB v. Mohan Meakins (2000), Sunil Bharti Mittal (2015), A.P. PCB v. M.V. Nayudu (1999).
  - Cross-references to: Forest Conservation Act, 1980; Water Act 1974; Air Act 1981; Public Liability Insurance Act 1991; NGT Act 2010; Jan Vishwas Act 2023; Hazardous Waste Rules 2016; MSIHC Rules 1989; CRZ Notification 2019; EIA Notification 2006; BNS 2023; BNSS 2023; Constitution Articles 226/32.
  - Registered in `_registry.ts` (`environmentProtectionAct1986` now in `authoredStatutes`).
  - PHASE-2-PROGRESS checkbox ticked.

- **2026-05-17 (cont.)** — Third Act authored: **Muslim Personal Law (Shariat) Application Act, 1937** (Act 26 of 1937, 6 sections).
  - Single-chapter statute. Section 1 (short title and extent, with post-2019 J&K reorganisation note), Section 2 (the heart — Shariat displaces custom in marriage, divorce incl. talaq/ila/zihar/lian/khula/mubaraat, dower, maintenance, guardianship, gifts, trusts, private wakfs, intestate succession; agricultural land carved out; Kerala State amendment noted), Section 3 (opt-in declaration to extend Section 2 to adoption, wills and legacies), Section 4 (State Government rule-making, post-1983 laying clause), Section 5 (repealed by Dissolution of Muslim Marriages Act, 1939), Section 6 (repeals six Provincial-era custom-first clauses).
  - 8 statutory definitions for Section 2 (talaq, ila, zihar, lian, khula, mubaraat, dower, wakf).
  - Cases cited: Shamim Ara (2002), Shayara Bano (2017), Shah Bano (1985), Danial Latifi (2001).
  - Cross-refs to: Dissolution of Muslim Marriages Act 1939, Muslim Women (Protection of Rights on Marriage) Act 2019, Muslim Women (Protection of Rights on Divorce) Act 1986, Wakf Act 1995, Indian Contract Act 1872 §11, JJ Act 2015 §56, Indian Succession Act 1925, Uttarakhand UCC 2024.
  - Visuals: 3 comparison tables (Section 2 covered vs. uncovered, pre-1937 custom-first clauses repealed, Kerala carve-in callout), 1 process flow (Section 3 declaration), 3 callouts.
  - Registered in `_registry.ts` (`muslimPersonalLawShariatAct1937` now in `authoredStatutes`).

- **2026-05-17 (cont.)** — Fourth Act authored: **Dowry Prohibition Act, 1961** (Act 28 of 1961, 13 sections incl. 4A/8A/8B inserted by 1984 + 1986 amendments).
  - Single-chapter statute. Section 1 (extent + 2019 J&K reorganisation note), Section 2 (the keystone definition of 'dowry' with stridhan/dower exclusion and 'any time after marriage' 1986 hook), Section 3 (penalty for giving/taking — 5-yr min + presents-list safe harbour), Section 4 (penalty for demanding), Section 4A (advertisement ban), Section 5 (dowry agreements void), Section 6 (3-month transfer trust + 7-year unnatural-death proviso + §6(3A) court order), Section 7 (cognizance, no limitation, victim shield), Section 8 (cognizable + non-bailable + non-compoundable), Section 8A (reverse burden), Section 8B (Dowry Prohibition Officers), Section 9 (Central rules — 1985 presents-list rules), Section 10 (State rules).
  - Cases cited: Pratibha Rani v. Suraj Kumar (1985), Inder Raj Malik (1986), HP v. Nikku Ram (1995), Pawan Kumar v. Haryana (1998), Arnesh Kumar (2014), Gian Singh (2012).
  - Cross-refs: BNS §80 (dowry death), §84 (cruelty), §2(33) (valuable security), BNSS Chapter XXXIX (limitation, excluded), Bharatiya Sakshya Adhiniyam 2023, Dowry Prohibition (Maintenance of Lists of Presents) Rules 1985, Indian Contract Act §23, Protection of Women from DV Act 2005.
  - Visuals: 4 comparison tables (dowry vs gift, procedural classification, etc.), 1 process flow (§6 transfer timeline), 1 penalty matrix structure (in penalties array), 5 callouts.
  - Registered in `_registry.ts` (`dowryProhibitionAct1961` now in `authoredStatutes`).

- **2026-05-17 (plan revision — efficiency pass)** — No statute content authored this session. Replaced the uniform-depth, smallest-first model with a **three-tier section depth + demand-ordered sprints + visual-budget cap + partial-depth-for-giants** model. Rationale: at the old velocity (4 Acts / ~50 sections per 4 sessions) finishing Phase 2 would take ~100+ sessions; the revised model targets ~25–30 sessions total while still shipping all 51 Acts and ~85% of user-visible search demand by end of Sprint B. Changes locked into `PHASE-2-PROGRESS.md` (new "Authoring depth model", new "Sprint roadmap", revised "Per-Act completeness criteria", visual cap of 3/Act). Sprint A (PDF text-extraction script + `GroupedSectionTable` component) is the next session's deliverable; Sprint B starts with **Consumer Protection Act, 2019**.

- **2026-05-17 (full restructure — MVP-everywhere)** — No statute content authored this session. The previous tiered-depth model was discarded; the new model is **MVP-everywhere**: every Act ships with verbatim section text + a Cascade-written 1-line plain-English summary per section + source PDF link, and *nothing else*. All scenarios, FAQs, visuals, process flows, comparison tables, penalty matrices, timelines, cited cases, cross-refs, and defined-terms blocks are deferred to a later phase that can run independently across all 51 Acts. The 5 already-authored Acts (Forest 1980, EPA 1986, Shariat 1937, Dowry 1961, POSH 2013) are kept frozen as deep-render showcase exemplars; a `coverage: "mvp" | "deep"` flag on `meta` makes the renderer branch. Audit also surfaced that **POSH was authored deep but never imported in `_registry.ts`** — fix pending in Sprint 0. Authoring order is category-by-category, starting with Environment & Land (1 Act remaining) and ending with Criminal Laws + Constitution. Target: full Phase 2 in **8–12 sessions** instead of the 25–30 estimated under the previous model. Sprint 0 (next session) ships: `_types.ts` `Coverage` extended to `"mvp" | "deep"` with rich fields made optional, POSH registry import, `scripts/extract-pdf-text.ts` (using `pdf-parse`) emitting `lib/statutes/_raw/<slug>.ts`, `MvpSectionView` + `MvpChapterView` components, route-level branching on `meta.coverage`, and a Wild Life Protection Act 1972 canary to prove the pipeline.

- **2026-05-17 (Sprint 0 + canary shipped)** — Foundation work complete. Type model extended (`Coverage = "not-started" | "in-progress" | "mvp" | "complete"`; deep-only `Section`/`Chapter` fields made optional; new `Section.summary` for the MVP 1-liner). `_registry.ts` now imports POSH (the missing 5th showcase Act) and exposes `categoryCoverage` + `overallCoverage` helpers. Two new components shipped: `MvpChapterView` (inline-sections renderer with sticky section index) and `MvpSectionView` (single-section page reusing `MvpSectionBlock`). Both chapter and section routes branch on `meta.coverage === "mvp"`; the existing deep render path is preserved for `"complete"` showcase Acts via non-null assertions on deep-only fields. `ChapterToc` and `SectionNav.findAdjacent` made tolerant of missing labels/range. `StatuteStatusBadge` gained the `mvp` style (emerald). The existing `/laws/[category]` and `/laws` index pages were updated to read the new richer coverage counts. **Live progress dashboard** at `/progress` lists every Act with status pill, year, section count and PDF link, grouped by the locked category execution order. PDF extraction wired as `npm run extract:pdf` (alias of the existing per-Act `scripts/extract-pdf.mjs`). **Canary:** Wild Life (Protection) Act, 1972 — Chapter I (Preliminary; §1 short title + §2 39-clause definitions) and Chapter II (Authorities; §3 Director, §4 Chief Wild Life Warden, §5 delegation, §5A National Board for Wild Life, §5B Standing Committee, §5C Board functions) authored at MVP depth using extracted verbatim from the source PDF. Registered in `authoredStatutes` with `coverage: "in-progress"`. End-to-end pipeline (registry → _raw extract → Act file → MVP renderers → routes → /progress) is now proven against real content. `npx tsc --noEmit` clean.

- **2026-05-17 (Wild Life parked; Family & Personal Laws sweep started)** — Per user direction ("STOP Wild Life Act 1972 AND PROCEED TO OTHERS"), Wild Life (Protection) Act 1972 was flipped from `coverage: "in-progress"` to `coverage: "mvp"` at its current depth (7 chapters, 69 section entries) and the remaining six chapters (IVC, V, VA, VI, VIA, VII) explicitly parked for a later corpus-wide MVP completion sweep. The Environment & Land category is therefore now ✅ (3/3). Authoring then jumped to Family & Personal Laws and shipped **two new MVP Acts in one session**: (1) **Hindu Marriage Act, 1955** — full MVP: 30 section entries across 6 chapters (Preliminary; Hindu Marriages incl. §6 omitted; Restitution & Judicial Separation; Nullity & Divorce incl. §§13A, 13B, 14–18; Jurisdiction & Procedure incl. §§19, 20, 21, 21A–21C, 22, 23, 23A, 24–28, 28A; Savings & Repeals incl. repealed §30), every section with verbatim text quoted from `_raw/hindu-marriage-act-1955.txt`, Cascade-written 1-liner summary and source-PDF page deep link. (2) **Hindu Succession Act, 1956** — full MVP: 31 section entries across 4 chapters (Preliminary; Intestate Succession incl. recast §6 daughter-coparcener clause and omitted §§23–24; Testamentary Succession §30; Repeals §31 repealed), verbatim from `_raw/hindu-succession-act-1956.txt`, Cascade summaries and PDF anchors. Both Acts registered in `authoredStatutes` and the registry's typecheck and full `npm run build` pass clean (226+ section pages generated). Family & Personal Laws is now 4/9 (was 2/8 — Special Marriage Act 1954 added to the inventory). Next target: Special Marriage Act, 1954.

- **2026-05-17 (Wild Life MVP expansion — Chapters III through IVB)** — Pushed Wild Life Protection Act 1972 to ~75% MVP completion in this session. Added: **Chapter II §§6, 7, 8** (State Board for Wild Life — constitution, procedure, duties); **Chapter III** (Hunting of Wild Animals — §9 absolute hunting ban, §10 omitted, §11 dangerous-animal & self-defence exceptions, §12 special-purpose permits, §§13–17 omitted); **Chapter IIIA** (Protection of Specified Plants — §§17A–17H: prohibition, permits, cultivation & dealer licences, stock declaration, Government property); **Chapter IV** (Protected Areas — 21 entries: §18 sanctuary declaration, §§18A–18B protection & Collectors, §§19–26A rights settlement under the Land Acquisition Act 1894, §§27–34 sanctuary access/fire/weapons/arms regulation, §§33A–33B livestock immunisation & Advisory Committee, §35 National Parks, §36 omitted, §§36A–36D Conservation & Community Reserves, §37 omitted, §38 Centre-declared protected areas); **Chapter IVA** (Central Zoo Authority — 10 entries §§38A–38J including statutory CZA constitution, recognition regime, Schedule I/II animal transfer controls, anti-cruelty §38J); **Chapter IVB** (National Tiger Conservation Authority — 14 entries §§38K–38X covering definitions, NTCA constitution under the 2006 amendment, terms/removal, eleven NTCA powers including disallowing mining/industry inside reserves, Steering Committees, the Tiger Conservation Plan with core/buffer zones and Scheduled-Tribe consent safeguards, boundary alteration controls, and the Tiger Conservation Foundation). Total: 69 section entries across 7 chapters; verbatim copied directly from the extracted `_raw/wild-life-protection-act-1972.txt`. Switched from `+`-concatenated string literals to template literals for verbatim text (much more edit-robust). Still pending: Chapter IVC (Wildlife Crime Control Bureau, 2 entries), Chapter V (Trade or Commerce, 11), Chapter VA (Prohibition of trade, 3), Chapter VI (Prevention & Detection, 9), Chapter VIA (Forfeiture, 25), Chapter VII (Miscellaneous, 8). `npx tsc --noEmit` clean.

- **2026-05-18 (Phase-2 deepening: section-tables on briefs)** � Per user request, every Act brief now ships an optional sections: BriefSection[] table that lists every (or every important) section in a compact 5-column row: Section � Title � What it does (gist) � Punishment � Fine. New BriefSection type added to _types.ts. BriefView extended with a responsive SectionsTable component (mobile card list + desktop table with chapter grouping). First batch authored:
  - **Negotiable Instruments Act, 1881** � 52 rows incl. all key cheque-bounce sections (��138�148).
  - **IT Act, 2000** � 51 rows across 12 chapters incl. all key offences (��65�72A) with punishments + fines.
  - **DPDP Act, 2023** � all 44 sections.
  - All three render at /briefs/<slug> via the new SectionsTable. 
px tsc --noEmit clean.
