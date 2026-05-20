import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Bookmark, Share2, ShieldAlert } from "lucide-react";
import StatuteHero from "@/components/statute/StatuteHero";
import ChapterToc from "@/components/statute/ChapterToc";
import SourceLink from "@/components/statute/SourceLink";
import StatuteStatusBadge from "@/components/statute/StatuteStatusBadge";
import BriefView from "@/components/statute/BriefView";
import PenaltyTable from "@/components/statute/PenaltyTable";
import {
  getStatuteMeta,
  getStatute,
  statuteMetas,
} from "@/lib/statutes/_registry";
import { getBrief } from "@/lib/statutes/_briefs";
import { getCategoryBySlug, getAllCategorySlugs } from "@/lib/categories";

type Props = { params: Promise<{ category: string; statute: string }> };

export function generateStaticParams() {
  return statuteMetas.map((m) => ({
    category: m.categorySlug,
    statute: m.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { statute } = await params;
  const meta = getStatuteMeta(statute);
  if (!meta) return { title: "Not Found" };
  return {
    title: meta.fullName,
    description: meta.summary,
  };
}

export default async function StatutePage({ params }: Props) {
  const { category, statute } = await params;
  const cat = getCategoryBySlug(category);
  const meta = getStatuteMeta(statute);
  if (!cat || !meta || meta.categorySlug !== cat.slug) return notFound();

  const authored = getStatute(meta.slug);
  const brief = !authored ? getBrief(meta.slug) : undefined;

  // Sidebar nav targets adjust depending on which view we're rendering.
  const sidebarNav: [string, string][] = authored
    ? (authored.penaltyTable && authored.penaltyTable.length > 0)
      ? [
          ["Offences & Penalties", "#offences-table"],
          ["Source PDF", "#source"],
          ["About this Act", "#about"],
        ]
      : [
          ["Preamble", "#preamble"],
          ["Chapters", "#chapters"],
          ["Source PDF", "#source"],
          ["About this Act", "#about"],
        ]
    : brief
    ? [
        ["In one line", "#what-is-this"],
        ["Penalties", "#punishments"],
        ["Sources", "#source"],
        ["About this Act", "#about"],
      ]
    : [
        ["Preamble", "#preamble"],
        ["Chapters", "#chapters"],
        ["Source PDF", "#source"],
        ["About this Act", "#about"],
      ];

  return (
    <article className="pb-24">
      <StatuteHero meta={meta} />

      <section className="container-page mt-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          {/* sidebar */}
          <aside className="lg:col-span-3 lg:order-2">
            <div className="lg:sticky lg:top-32 space-y-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-400">
                  On this page
                </p>
                <nav className="mt-4 space-y-0.5 border-l border-ink-100 pl-4">
                  {sidebarNav.map(([label, href]) => (
                    <a
                      key={href}
                      href={href}
                      className="block py-1.5 text-[13px] text-ink-500 transition-colors hover:text-saffron-600"
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="flex gap-2">
                <button className="inline-flex h-9 items-center gap-1.5 rounded-full border border-ink-100 bg-paper-50 px-3 text-xs font-medium text-ink-500 hover:border-saffron-300 hover:text-saffron-700">
                  <Bookmark className="h-3.5 w-3.5" /> Save
                </button>
                <button className="inline-flex h-9 items-center gap-1.5 rounded-full border border-ink-100 bg-paper-50 px-3 text-xs font-medium text-ink-500 hover:border-saffron-300 hover:text-saffron-700">
                  <Share2 className="h-3.5 w-3.5" /> Share
                </button>
              </div>

              <div className="rounded-2xl border border-saffron-200 bg-saffron-50/60 p-5">
                <ShieldAlert className="h-5 w-5 text-saffron-700" />
                <p className="mt-3 font-serif text-base font-medium leading-tight text-ink-900">
                  Educational only
                </p>
                <p className="mt-1.5 text-[12px] leading-relaxed text-ink-500">
                  This page is a learning aid. For case-specific guidance, consult a qualified advocate.
                </p>
              </div>
            </div>
          </aside>

          {/* main */}
          <div className="lg:col-span-9 lg:order-1 space-y-16">
            {authored ? (
              <>
                {authored.penaltyTable && authored.penaltyTable.length > 0 && (
                  <PenaltyTable
                    rows={authored.penaltyTable}
                    shortName={meta.shortName}
                    sectionId="offences-table"
                  />
                )}

                {(!authored.penaltyTable || authored.penaltyTable.length === 0) && (
                  <>
                    {/* Preamble — authored Acts */}
                    <section id="preamble">
                      <p className="eyebrow">Preamble</p>
                      <h2 className="mt-3 font-serif text-3xl font-medium leading-tight tracking-tight text-ink-900">
                        What this Act sets out to do
                      </h2>
                      {authored.meta.preamble ? (
                        <blockquote className="mt-6 border-l-2 border-saffron-500 bg-paper-100/60 px-6 py-5 font-serif text-[17px] leading-[1.75] text-ink-900">
                          {authored.meta.preamble}
                        </blockquote>
                      ) : (
                        <p className="mt-4 text-[14px] leading-relaxed text-ink-500">
                          {meta.summary}
                        </p>
                      )}
                    </section>

                    {/* Chapters */}
                    <section id="chapters">
                      <div className="mb-6 flex items-end justify-between gap-4">
                        <div>
                          <p className="eyebrow">Table of contents</p>
                          <h2 className="mt-3 font-serif text-3xl font-medium leading-tight tracking-tight text-ink-900">
                            Chapters
                          </h2>
                        </div>
                        <span className="hidden text-xs uppercase tracking-[0.18em] text-ink-400 tabular sm:inline">
                          {authored.chapters.length} chapters
                        </span>
                      </div>
                      <ChapterToc meta={authored.meta} chapters={authored.chapters} />
                    </section>
                  </>
                )}

                {/* Source */}
                <section id="source">
                  <p className="eyebrow">Source</p>
                  <h2 className="mt-3 font-serif text-3xl font-medium leading-tight tracking-tight text-ink-900">
                    Read the Act yourself
                  </h2>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-500">
                    Every section page on this site links back to the exact page in the source PDF. You can also open the full Act below.
                  </p>
                  <div className="mt-6">
                    <SourceLink source={meta.sourcePdf} label="Source PDF" />
                  </div>
                </section>
              </>
            ) : brief ? (
              <BriefView brief={brief} meta={meta} />
            ) : (
              <>
                {/* Coming-soon — neither authored nor briefed */}
                <section id="preamble">
                  <p className="eyebrow">Coming soon</p>
                  <h2 className="mt-3 font-serif text-3xl font-medium leading-tight tracking-tight text-ink-900">
                    What this Act sets out to do
                  </h2>
                  <div className="mt-6 rounded-2xl border border-dashed border-ink-100 bg-paper-100/40 p-6">
                    <div className="flex items-center gap-3">
                      <StatuteStatusBadge coverage={meta.coverage} />
                      <span className="text-[13px] text-ink-500">
                        Brief summary and source links will appear soon.
                      </span>
                    </div>
                    <p className="mt-3 text-[14px] leading-relaxed text-ink-500">
                      {meta.summary}
                    </p>
                  </div>
                </section>

                <section id="source">
                  <p className="eyebrow">Source</p>
                  <h2 className="mt-3 font-serif text-3xl font-medium leading-tight tracking-tight text-ink-900">
                    Read the Act yourself
                  </h2>
                  <div className="mt-6">
                    <SourceLink source={meta.sourcePdf} label="Source PDF" />
                  </div>
                </section>
              </>
            )}

            {/* About */}
            <section id="about">
              <p className="eyebrow">About this Act</p>
              <h2 className="mt-3 font-serif text-3xl font-medium leading-tight tracking-tight text-ink-900">
                Quick facts
              </h2>
              <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
                <Fact label="Year" value={meta.year.toString()} />
                <Fact label="Sections" value={meta.totalSections.toLocaleString()} />
                <Fact label="Chapters" value={meta.totalChapters.toLocaleString()} />
                <Fact label="Tier" value={`Tier ${meta.tier}`} />
              </dl>
              {meta.amendments && meta.amendments.length > 0 && (
                <div className="mt-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-400">
                    Amendments
                  </p>
                  <ul className="mt-3 space-y-2">
                    {meta.amendments.map((a, i) => (
                      <li key={i} className="flex gap-3 text-[14px] text-ink-500">
                        <span className="font-mono font-semibold text-saffron-700 tabular">
                          {a.year}
                        </span>
                        <span>
                          <strong className="font-medium text-ink-900">{a.shortName}</strong>
                          {a.note ? ` — ${a.note}` : null}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <Link
                href={`/laws/${cat.slug}`}
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-saffron-700 hover:text-saffron-600"
              >
                Back to {cat.title}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </section>
          </div>
        </div>
      </section>
    </article>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-400">
        {label}
      </dt>
      <dd className="mt-1 font-serif text-xl font-medium tabular text-ink-900">
        {value}
      </dd>
    </div>
  );
}

