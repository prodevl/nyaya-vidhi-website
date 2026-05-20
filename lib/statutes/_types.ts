/**
 * Statute content model — the single shape every Phase 2 Act conforms to.
 *
 * Hierarchy: Statute → Chapter → Section.
 *
 * Phase 2 ships two render modes (see PHASE-2-PROGRESS.md):
 *   - "mvp"      → verbatim section text + a Cascade-written 1-line summary +
 *                  source PDF link. The minimum every Act must meet.
 *   - "complete" → the deep-render showcase Acts (Forest 1980, EPA 1986,
 *                  Shariat 1937, Dowry 1961, POSH 2013). Adds plain-English,
 *                  scenarios, FAQs, visuals, cases, cross-refs.
 *
 * Deep-only fields are therefore *optional* on the type so that an MVP Act
 * file can be written with just the minimum and still type-check.
 */

// ============================================================
// Status
// ============================================================

/**
 * Coverage states drive both the registry badge and the renderer branch.
 *   "not-started" → only a stub `StatuteMeta` exists in `_registry.ts`.
 *   "brief"       → no per-section authoring, but a one-liner + headline
 *                   punishments + source link is shipped via `_briefs.ts`
 *                   (May-2026 Phase-2 floor).
 *   "in-progress" → file exists but does not yet meet the MVP checklist.
 *   "mvp"         → meets the Phase 2 MVP contract (verbatim + 1-liner +
 *                   PDF link per section).
 *   "complete"    → deep-render showcase Act (frozen).
 */
export type Coverage =
  | "not-started"
  | "brief"
  | "in-progress"
  | "mvp"
  | "complete";

// ============================================================
// Source provenance
// ============================================================

export type Source = {
  /** Public path served from /public/pdfs — e.g. "/pdfs/Criminal Laws pdf/BNS 2023.pdf" */
  pdfPath: string;
  /** Original filename of the source PDF, for display */
  pdfFile: string;
  /** 1-indexed page where the section starts in the source PDF */
  pdfPage: number;
  /** Optional: last page if the section spans multiple pages */
  pdfPageEnd?: number;
};

// ============================================================
// Atomic content units
// ============================================================

export type Definition = {
  /** Defined term, e.g. "forest" */
  term: string;
  /** Statutory definition, verbatim where possible */
  definition: string;
  /** The section that establishes the definition (e.g. "2(d)") */
  sourceSection?: string;
};

export type Example = {
  title: string;
  body: string;
};

export type Scenario = {
  /** Short headline, e.g. "Cheque bounces — what next?" */
  title: string;
  /** Story setup, in plain conversational English */
  setup: string;
  /** What the law actually does about it */
  outcome: string;
  /** Section/article this scenario maps to */
  appliesUnder: string;
  /** Optional: severity / time-cost cues for the user */
  consequence?: string;
};

export type ProcedureStep = {
  step: number;
  title: string;
  body: string;
  /** Who acts at this step (citizen / officer / court) */
  actor?: string;
  /** Statutory anchor */
  ref?: string;
  /** Optional time-bound, e.g. "within 30 days" */
  timeline?: string;
};

export type PenaltyEntry = {
  offence: string;
  punishment: string;
  /** Section that prescribes the penalty */
  ref: string;
  /** "minor" | "moderate" | "serious" | "grave" — drives severity color */
  severity?: "minor" | "moderate" | "serious" | "grave";
  /** Whether the offence is bailable / cognizable / compoundable */
  flags?: string[];
};

export type CaseRef = {
  name: string;
  citation: string;
  court: string;
  year: number;
  ratio: string;
};

export type CrossRef = {
  /** Slug of related statute, or external label if outside the registry */
  statute: string;
  /** Section or article number */
  section: string;
  /** One-line note on why it's connected */
  note: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

// ============================================================
// Visuals — discriminated union, each renders via a dedicated component
// ============================================================

export type ProcessFlowVisual = {
  kind: "process-flow";
  title: string;
  caption?: string;
  nodes: { id: string; label: string; sub?: string; ref?: string }[];
  edges: { from: string; to: string; label?: string }[];
};

export type ComparisonTableVisual = {
  kind: "comparison-table";
  title: string;
  caption?: string;
  /** e.g. ["IPC", "BNS"] */
  columns: [string, string];
  rows: { left: string; right: string; note?: string }[];
};

export type PenaltyMatrixVisual = {
  kind: "penalty-matrix";
  title: string;
  caption?: string;
  entries: PenaltyEntry[];
};

export type TimelineVisual = {
  kind: "timeline";
  title: string;
  caption?: string;
  items: { year: number | string; label: string; note?: string }[];
};

export type CalloutVisual = {
  kind: "callout";
  tone: "info" | "warning" | "tip";
  title: string;
  body: string;
};

export type Visual =
  | ProcessFlowVisual
  | ComparisonTableVisual
  | PenaltyMatrixVisual
  | TimelineVisual
  | CalloutVisual;

// ============================================================
// Section
// ============================================================

export type SectionImportance = "core" | "operative" | "ancillary" | "transitional";

export type Section = {
  /** Raw section number, e.g. "3", "138", "173(8)", "Article 21" — required */
  number: string;
  /** Verbatim text from the source PDF — required for both MVP and deep */
  verbatim: string;
  /** Source PDF page anchor — required for both MVP and deep */
  source: Source;

  /** Pre-formatted display label, e.g. "Section 138". Defaults to `Section ${number}` if absent. */
  label?: string;
  /** Statute's own marginal heading. Strongly recommended; required for deep. */
  marginalNote?: string;
  /** MVP 1-liner — Cascade-written, ≤30 words, plain English. */
  summary?: string;
  /** Deep-only: full plain-English explanation, written conversationally. */
  plainEnglish?: string;
  /** Deep-only: at least one walk-through scenario per section. */
  scenarios?: Scenario[];
  /** Deep-only: at least 2 plain-English Q&As per section. */
  faq?: FaqItem[];
  /** Defaults to "operative" when omitted. */
  importance?: SectionImportance;

  examples?: Example[];
  defines?: Definition[];
  visuals?: Visual[];
  procedure?: ProcedureStep[];
  penalties?: PenaltyEntry[];
  crossRefs?: CrossRef[];
  cases?: CaseRef[];
};

// ============================================================
// Chapter
// ============================================================

export type Chapter = {
  /** "I", "II", "XII" — Roman or Arabic */
  slug: string;
  number: string;
  title: string;
  sections: Section[];
  /** Inclusive section-number range covered by this chapter. Optional for MVP. */
  range?: [string, string];
  /** Editorial intro, 1–3 sentences (MVP) or full conversational tone (deep). */
  intro?: string;
  /** Deep-only: chapter-level scenarios (broader than per-section scenarios). */
  scenarios?: Scenario[];
  /** Deep-only: chapter-level FAQs. */
  faq?: FaqItem[];
};

// ============================================================
// Statute meta
// ============================================================

export type Amendment = {
  year: number;
  shortName: string;
  note: string;
};

export type StatuteMeta = {
  /** URL slug, e.g. "forest-conservation-act-1980" */
  slug: string;
  /** Display short name, e.g. "Forest Conservation Act" */
  shortName: string;
  /** Display full name */
  fullName: string;
  /** Year of enactment */
  year: number;
  /** Devanagari accent label, e.g. "वन संरक्षण अधिनियम" */
  sanskrit?: string;
  /** Tagline shown on the statute hero */
  tagline: string;
  /** One-paragraph elevator description */
  summary: string;
  /** Verbatim preamble */
  preamble: string;
  /** Slug of the parent category in lib/categories.ts */
  categorySlug: string;
  /** ISO date the Act received presidential assent (if known) */
  enactedOn?: string;
  /** ISO date / human description of commencement */
  commencement?: string;
  /** Total operative sections */
  totalSections: number;
  /** Total chapters / parts */
  totalChapters: number;
  /** Has the Act been wholly or partly repealed by a successor? */
  repealedBy?: string;
  /** Statutes that this Act supersedes */
  repeals?: string[];
  amendments?: Amendment[];
  /** Source PDF location served from /public/pdfs */
  sourcePdf: Source;
  /** Coverage status — drives badges */
  coverage: Coverage;
  /** Tier from PHASE-2-PROGRESS.md: 1, 2, 3, 4 */
  tier: 1 | 2 | 3 | 4;
};

// ============================================================
// Statute (meta + chapters)
// ============================================================

export type Statute = {
  meta: StatuteMeta;
  chapters: Chapter[];
  penaltyTable?: BriefPenaltyRow[];
};

// ============================================================
// Brief — the lightweight "one-liner + punishments" content
// ============================================================

/**
 * For Acts that aren't authored at MVP/deep depth, we still ship a tiny
 * `ActBrief` so the statute page is useful: a single-sentence "what is this
 * law", a short list of headline punishments, and a verifiable online
 * source URL alongside the local PDF.
 *
 * This is the new Phase-2 floor (May 2026 pivot). Section-by-section
 * verbatim is no longer required for non-showcase Acts.
 */
export type BriefPenaltyRow = {
  section: string;
  subSection?: string;
  lawInBrief: string;
  punishment: string;
  
  /** Category of the section to render an appropriate badge */
  type?: "definition" | "structural" | "right" | "civil" | "criminal" | "procedural" | "compliance";
  /** Who this section primarily targets */
  applicableTo?: string;
  /** Bailability and cognizability for criminal offences */
  bailStatus?: string;
  /** Visual risk level */
  severity?: "low" | "medium" | "high";

  /** Elite Feature: Plain English real-world instruction / action */
  actionRequired?: string;
  /** Elite Feature: Deadlines or time limits associated with this rule */
  timeLimit?: string;
  /** Elite Feature: Who has jurisdiction or where to complain */
  authority?: string;
  /** Elite Feature: Loophole, defense, or exception */
  defences?: string;
};

export type BriefPunishment = {
  /** What the offence is, in plain English */
  offence: string;
  /** Punishment as prescribed by the Act, in plain English */
  punishment: string;
  /** Optional section anchor, e.g. "§138" or "Section 66" */
  section?: string;
};

export type ActBrief = {
  /** One-line plain-English answer to "what is this law" */
  oneLiner: string;
  /** Headline punishments — keep to 3–6 entries, the most important ones */
  punishments: BriefPunishment[];
  /** Display name of the source, e.g. "Wikipedia", "PRS India", "India Code" */
  sourceName: string;
  /** Direct URL to the online source */
  sourceUrl: string;
  /** Optional secondary source for cross-reference */
  secondarySourceName?: string;
  secondarySourceUrl?: string;
  penaltyTable?: BriefPenaltyRow[];
};


