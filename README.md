# Nyaya Vidhi — Indian Law, Made Lucid

> **न्याय विधि** · A modern, beginner-to-advanced library of Indian law.

A premium-feel, citizen-first website that turns the entirety of Indian law into something readable, searchable, and approachable. **Phase 1 = architecture & UI/UX only.** All actual legal content arrives in Phase 2.

---

## Phase 1 — What's built

### Design system
- **Indian Heritage Modern** aesthetic: saffron + India green + paper-warm + ink
- Serif headlines (Fraunces) + sans body (Inter) + Devanagari accents (Tiro Devanagari Hindi)
- Custom motifs — jaali patterns, mandala backdrop, ornamental dividers, chakra logomark
- Fully responsive, accessible, animation-rich (Framer Motion)

### Pages
| Route | Purpose |
| --- | --- |
| `/` | Landing — hero, categories grid, learning paths, KYR teaser, features, CTA |
| `/laws` | All-laws hub with grouped + alphabetical index |
| `/laws/[category]` | Dynamic category page (15 categories, all wired) |
| `/laws/[category]/[topic]` | Dynamic topic/article template with TOC, sections, FAQs, cases |
| `/learn` | All learning paths, grouped by level |
| `/learn/[path]` | Individual learning path with lesson list |
| `/know-your-rights` | Scenario-first rights lookup |
| `/glossary` | A–Z lexicon |
| `/about` | Mission, principles, editorial process |
| `/*` | Themed 404 |

### Navigation
- Sticky header with **scroll-aware mega-menu** (15 categories grouped thematically)
- Mobile sheet with full category list
- Rich footer with newsletter, sitemap, category strip, disclaimer

### Domain coverage (15 categories, in `lib/categories.ts`)
1. Constitution & Fundamental Rights
2. Tax Laws
3. Real Estate
4. Property Laws
5. Consumer Rights
6. Criminal Laws (BNS / BNSS / BSA)
7. Environment & Land
8. Intellectual Property
9. Family & Personal Laws
10. Contracts & Commercial Law
11. Labour & Employment Laws
12. Financial Markets & Banking
13. Company Formation & Governance
14. IT & Digital Laws

Plus 8 curated **learning paths** in `lib/learning-paths.ts`.

---

## Tech stack

- **Next.js 14** (App Router)
- **TypeScript** (strict)
- **TailwindCSS 3** with custom design tokens
- **Framer Motion** for tasteful entrance animations
- **Lucide React** for iconography
- **Google Fonts** — Fraunces, Inter, Tiro Devanagari Hindi

---

## Run it locally

From inside the `website/` folder:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm start
```

> The lint errors you may see in the IDE (`Cannot find module 'next'`, etc.) are expected before `npm install` — they all resolve once dependencies are installed.

---

## Project structure

```
website/
├── app/
│   ├── layout.tsx                    # root layout, fonts, metadata
│   ├── page.tsx                      # landing page
│   ├── globals.css                   # design system tokens & utilities
│   ├── not-found.tsx                 # themed 404
│   ├── laws/
│   │   ├── page.tsx                  # all-laws hub
│   │   └── [category]/
│   │       ├── page.tsx              # category landing
│   │       └── [topic]/page.tsx      # topic article template
│   ├── learn/
│   │   ├── page.tsx                  # all learning paths
│   │   └── [path]/page.tsx           # path detail
│   ├── know-your-rights/page.tsx
│   ├── glossary/page.tsx
│   └── about/page.tsx
├── components/
│   ├── Header.tsx                    # sticky mega-menu
│   ├── Footer.tsx                    # rich footer
│   ├── Logo.tsx                      # chakra+scale logomark
│   ├── Hero.tsx
│   ├── CategoriesGrid.tsx
│   ├── LearningPaths.tsx
│   ├── KnowYourRightsTeaser.tsx
│   ├── Features.tsx
│   ├── CTA.tsx
│   └── PageHeader.tsx                # shared page-header w/ breadcrumbs
├── lib/
│   ├── categories.ts                 # source of truth: 15 categories
│   ├── learning-paths.ts             # 8 curated journeys
│   └── utils.ts                      # cn() helper
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
├── postcss.config.js
└── package.json
```

---

## Roadmap

### Phase 2 (next)
- Populate each topic page with: TL;DR, plain-English explainer, key sections table, procedure, scenarios, penalties, landmark cases, downloads
- Fill out FAQ blocks per category
- Replace all "Phase 2" placeholders with real cited content
- Per-statute deep-dive pages

### Phase 3
- Full-text search (Algolia / MeiliSearch)
- User accounts, bookmarks, progress tracking
- Quizzes & certificates for learning paths
- Bilingual (Hindi) translations of priority chapters
- "Ask a question" community layer with verified-advocate replies

---

## License & disclaimer

Educational use only. Content (when added in Phase 2) will be a learning aid, **not** legal advice. For case-specific guidance, consult a qualified advocate.

---

### Credits
Designed and built with care. Typography: Fraunces by Undercase Type, Inter by Rasmus Andersson, Tiro Devanagari Hindi by Tiro Typeworks.

*यतो धर्मस्ततो जयः · Where there is dharma, there is victory.*
