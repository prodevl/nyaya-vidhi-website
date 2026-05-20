import Link from "next/link";
import { ExternalLink, Star, CheckCircle2, Circle, Loader2, FileText } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { categories } from "@/lib/categories";
import {
  statuteMetas,
  categoryCoverage,
  overallCoverage,
  isAuthored,
} from "@/lib/statutes/_registry";
import type { Coverage } from "@/lib/statutes/_types";

export const metadata = {
  title: "Phase 2 Progress — Nyaya Vidhi",
  description:
    "Live tracker for the Phase 2 statute-authoring effort. One row per Act; status updates the moment an Act is registered.",
};

/**
 * The category execution order locked in PHASE-2-PROGRESS.md §5.
 * Categories not in this list fall through to alphabetical at the end.
 */
const CATEGORY_ORDER: string[] = [
  "environment-and-land",
  "family-and-personal-laws",
  "labour-and-employment-laws",
  "real-estate",
  "consumer-rights",
  "information-technology-and-digital-laws",
  "intellectual-property",
  "contracts-and-commercial-law",
  "property-laws",
  "company-formation-and-governance",
  "financial-markets-and-banking",
  "tax-laws",
  "criminal-laws",
  "constitution-and-fundamental-rights",
];

function orderedCategories() {
  const known = new Set(CATEGORY_ORDER);
  const inOrder = CATEGORY_ORDER
    .map((slug) => categories.find((c) => c.slug === slug))
    .filter((c): c is (typeof categories)[number] => Boolean(c));
  const tail = categories
    .filter((c) => !known.has(c.slug))
    .sort((a, b) => a.title.localeCompare(b.title));
  return [...inOrder, ...tail];
}

const STATUS_META: Record<
  Coverage,
  { label: string; icon: React.ComponentType<{ className?: string }>; pillClass: string; sortKey: number }
> = {
  complete: {
    label: "Showcase",
    icon: Star,
    pillClass: "bg-saffron-50 text-saffron-700 ring-1 ring-inset ring-saffron-200",
    sortKey: 0,
  },
  mvp: {
    label: "MVP",
    icon: CheckCircle2,
    pillClass: "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200",
    sortKey: 1,
  },
  brief: {
    label: "Brief",
    icon: FileText,
    pillClass: "bg-sky-50 text-sky-700 ring-1 ring-inset ring-sky-200",
    sortKey: 2,
  },
  "in-progress": {
    label: "In progress",
    icon: Loader2,
    pillClass: "bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-200",
    sortKey: 3,
  },
  "not-started": {
    label: "Not started",
    icon: Circle,
    pillClass: "bg-ink-50 text-ink-500 ring-1 ring-inset ring-ink-100",
    sortKey: 4,
  },
};

function StatusPill({ coverage }: { coverage: Coverage }) {
  const m = STATUS_META[coverage];
  const Icon = m.icon;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10.5px] font-medium uppercase tracking-[0.12em] ${m.pillClass}`}
    >
      <Icon className="h-3 w-3" />
      {m.label}
    </span>
  );
}

export default function ProgressPage() {
  const overall = overallCoverage();
  const cats = orderedCategories();

  const stats: { v: string; l: string; tone?: string }[] = [
    { v: `${overall.done}/${overall.total}`, l: "Acts done" },
    { v: `${overall.percent}%`, l: "Phase 2 complete" },
    { v: String(overall.showcase), l: "Showcase (deep)" },
    { v: String(overall.mvp), l: "MVP-shipped" },
    { v: String(overall.brief), l: "Brief-shipped" },
    { v: String(overall.notStarted), l: "Not started" },
  ];

  return (
    <>
      <PageHeader
        eyebrow="प्रगति · Progress"
        title="Phase 2 — live tracker"
        description="Every Indian statute we plan to ship, with its current authoring status. The page reads from the registry, so every commit changes what you see here."
        crumbs={[{ label: "Home", href: "/" }, { label: "Progress" }]}
      />

      <section className="container-page pb-24">
        {/* Overall stats */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((s) => (
            <div key={s.l} className="card-heritage flex flex-col items-start p-5">
              <p className="font-serif text-3xl font-medium tabular text-ink-900">{s.v}</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-ink-400">{s.l}</p>
            </div>
          ))}
        </div>

        {/* Phase 2 contract — quick reminder */}
        <div className="mt-10 rounded-2xl border border-ink-100 bg-paper-50 p-6">
          <p className="eyebrow">The Phase 2 floor (May 2026 pivot)</p>
          <h2 className="mt-2 font-serif text-2xl font-medium tracking-tight text-ink-900">
            One-liner · headline punishments · source PDF + online citation.
          </h2>
          <p className="mt-3 max-w-3xl text-[14px] leading-relaxed text-ink-500">
            Every Act now ships with at least a <strong className="font-medium text-ink-900">brief</strong>:
            a single sentence saying what the law is, the headline punishments
            in plain English, and links to the source PDF and an online reference.
            Section-by-section verbatim authoring is reserved for the showcase
            and MVP Acts already shipped — those stay frozen.
          </p>
          <p className="mt-3 text-[13px] text-ink-400">
            Authoring order is category-by-category, top to bottom in the list below.
            The full plan and decisions log live in
            <code className="mx-1 rounded bg-paper-100 px-1.5 py-0.5 text-[12px] text-ink-700">
              PHASE-2-PROGRESS.md
            </code>
            at the repo root.
          </p>
        </div>

        {/* Category sections */}
        <div className="mt-12 space-y-12">
          {cats.map((cat) => {
            const cov = categoryCoverage(cat.slug);
            if (cov.total === 0) return null;
            const acts = statuteMetas
              .filter((m) => m.categorySlug === cat.slug)
              .map((m) => {
                const authored = isAuthored(m.slug);
                // Trust the live coverage — categoryCoverage already resolves authored vs stub.
                return { meta: m, authored };
              })
              .sort((a, b) => {
                const ak = STATUS_META[a.meta.coverage].sortKey;
                const bk = STATUS_META[b.meta.coverage].sortKey;
                if (ak !== bk) return ak - bk;
                return a.meta.shortName.localeCompare(b.meta.shortName);
              });

            const allDone = cov.done === cov.total;
            return (
              <section key={cat.slug} id={cat.slug}>
                <header className="mb-4 flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="devanagari text-[11px] text-ink-400">{cat.sanskrit}</p>
                    <h2 className="mt-1 font-serif text-2xl font-medium tracking-tight text-ink-900">
                      {cat.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.15em] text-ink-400 tabular">
                    <span>
                      {cov.done}/{cov.total} done
                    </span>
                    {cov.showcase > 0 && (
                      <span className="text-saffron-700">★ {cov.showcase}</span>
                    )}
                    {cov.mvp > 0 && <span className="text-emerald-700">MVP {cov.mvp}</span>}
                    {cov.brief > 0 && <span className="text-sky-700">Brief {cov.brief}</span>}
                    {cov.inProgress > 0 && (
                      <span className="text-amber-700">WIP {cov.inProgress}</span>
                    )}
                    {allDone && (
                      <span className="rounded-full bg-saffron-50 px-2 py-0.5 text-saffron-700 ring-1 ring-inset ring-saffron-200">
                        Category complete
                      </span>
                    )}
                  </div>
                </header>

                <div className="overflow-hidden rounded-2xl border border-ink-100 bg-paper-50">
                  <table className="w-full text-[13.5px]">
                    <thead className="border-b border-ink-100 bg-paper-100/60 text-left text-[11px] uppercase tracking-[0.12em] text-ink-400">
                      <tr>
                        <th className="px-4 py-2.5 font-medium">Status</th>
                        <th className="px-4 py-2.5 font-medium">Act</th>
                        <th className="px-4 py-2.5 font-medium tabular">Year</th>
                        <th className="px-4 py-2.5 font-medium tabular">Sections</th>
                        <th className="px-4 py-2.5 font-medium">Source</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-ink-100">
                      {acts.map(({ meta, authored }) => (
                        <tr key={meta.slug} className="bg-white/60 transition hover:bg-saffron-50/40">
                          <td className="px-4 py-3 align-middle">
                            <StatusPill coverage={meta.coverage} />
                          </td>
                          <td className="px-4 py-3 align-middle">
                            {authored || meta.coverage === "brief" ? (
                              <Link
                                href={`/laws/${meta.categorySlug}/${meta.slug}`}
                                className="font-medium text-ink-900 underline-offset-4 hover:text-saffron-700 hover:underline"
                              >
                                {meta.shortName}
                              </Link>
                            ) : (
                              <span className="font-medium text-ink-700">{meta.shortName}</span>
                            )}
                            <p className="mt-0.5 line-clamp-1 text-[12px] text-ink-400">
                              {meta.fullName}
                            </p>
                          </td>
                          <td className="px-4 py-3 align-middle tabular text-ink-500">{meta.year}</td>
                          <td className="px-4 py-3 align-middle tabular text-ink-500">
                            {meta.totalSections}
                          </td>
                          <td className="px-4 py-3 align-middle">
                            <a
                              href={meta.sourcePdf.pdfPath}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 text-[12px] text-ink-500 hover:text-saffron-700"
                            >
                              <FileText className="h-3.5 w-3.5" />
                              PDF
                              <ExternalLink className="h-3 w-3 opacity-60" />
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-16 border-t border-ink-100 pt-8">
          <p className="eyebrow">Legend</p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {(Object.keys(STATUS_META) as Coverage[]).map((c) => {
              const m = STATUS_META[c];
              return (
                <div key={c} className="flex items-start gap-3 rounded-xl border border-ink-100 bg-paper-50 p-4">
                  <StatusPill coverage={c} />
                  <p className="text-[12.5px] leading-relaxed text-ink-500">
                    {c === "complete" &&
                      "Deep-render showcase Act (frozen). Verbatim + plain-English + scenarios + FAQs + visuals + cases."}
                    {c === "mvp" &&
                      "Verbatim section text + 1-line plain-English summary + source PDF link. Per-section coverage."}
                    {c === "brief" &&
                      "One-liner + headline punishments + source PDF and online citation. The new Phase-2 floor."}
                    {c === "in-progress" &&
                      "File exists in the codebase but does not yet meet the MVP checklist."}
                    {c === "not-started" &&
                      "Stub only. The Act has a registry entry so it shows up in nav, but no content yet."}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
