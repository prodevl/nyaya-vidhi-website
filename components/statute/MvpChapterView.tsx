import Link from "next/link";
import { ArrowLeft, ArrowRight, FileText, Sparkles } from "lucide-react";
import SectionQuote from "./SectionQuote";
import SourceLink from "./SourceLink";
import { slugifySection } from "./SectionNav";
import type { Chapter, StatuteMeta } from "@/lib/statutes/_types";
import type { LawCategory } from "@/lib/categories";

type Props = {
  cat: LawCategory;
  meta: StatuteMeta;
  chapter: Chapter;
  prev?: Chapter;
  next?: Chapter;
};

/**
 * MVP chapter renderer.
 *
 * For Acts at `coverage: "mvp"`, the chapter page is the *primary* unit of
 * reading: every section in the chapter appears inline with its verbatim
 * text, a 1-line plain-English summary, and a deep link to the PDF page.
 *
 * Per-section sub-pages still exist (see `MvpSectionView`) but are optional
 * — anchor jumps from this page cover the common case.
 */
export default function MvpChapterView({ cat, meta, chapter, prev, next }: Props) {
  return (
    <article className="container-page pt-10 pb-24 lg:pt-14">
      {/* Breadcrumbs */}
      <nav className="flex flex-wrap items-center gap-1.5 text-xs text-ink-400">
        <Link href="/" className="hover:text-saffron-600">
          Home
        </Link>
        <span>/</span>
        <Link href="/laws" className="hover:text-saffron-600">
          All Laws
        </Link>
        <span>/</span>
        <Link href={`/laws/${cat.slug}`} className="hover:text-saffron-600">
          {cat.title}
        </Link>
        <span>/</span>
        <Link href={`/laws/${cat.slug}/${meta.slug}`} className="hover:text-saffron-600">
          {meta.shortName}
        </Link>
        <span>/</span>
        <span className="text-ink-500">Chapter {chapter.number}</span>
      </nav>

      {/* Header */}
      <header className="mt-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-saffron-700 tabular">
          Chapter {chapter.number}
          {chapter.range && (
            <span className="ml-2 font-mono text-ink-400">
              §{chapter.range[0]}–{chapter.range[1]}
            </span>
          )}
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-display-md font-medium leading-tight tracking-tight text-balance text-ink-900">
          {chapter.title}
        </h1>
        {chapter.intro && (
          <p className="mt-4 max-w-2xl text-pretty text-[17px] leading-relaxed text-ink-500">
            {chapter.intro}
          </p>
        )}
        <p className="mt-4 text-[11px] uppercase tracking-[0.15em] text-ink-400 tabular">
          {chapter.sections.length} section{chapter.sections.length === 1 ? "" : "s"} · MVP coverage
        </p>
      </header>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Sticky section index */}
        <aside className="lg:col-span-3 lg:order-2">
          <div className="lg:sticky lg:top-32 space-y-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-400">
                Sections in this chapter
              </p>
              <nav className="mt-4 max-h-[60vh] space-y-0.5 overflow-y-auto border-l border-ink-100 pl-4 pr-1">
                {chapter.sections.map((s) => (
                  <a
                    key={s.number}
                    href={`#section-${slugifySection(s.number)}`}
                    className="block py-1 text-[12.5px] leading-snug text-ink-500 transition-colors hover:text-saffron-600"
                  >
                    <span className="font-mono tabular text-ink-400">§{s.number}</span>
                    <span className="ml-1.5">
                      {s.marginalNote ?? s.label ?? `Section ${s.number}`}
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            <SourceLink source={meta.sourcePdf} variant="card" label="Source · full Act" />
          </div>
        </aside>

        {/* Sections inline */}
        <div className="lg:col-span-9 lg:order-1 space-y-16">
          {chapter.sections.map((s) => (
            <MvpSectionBlock key={s.number} meta={meta} section={s} />
          ))}

          {/* prev / next */}
          <nav className="mt-16 grid grid-cols-1 gap-3 border-t border-ink-100 pt-10 sm:grid-cols-2">
            {prev ? (
              <Link
                href={`/laws/${cat.slug}/${meta.slug}/${prev.slug}`}
                className="group card-heritage flex items-start gap-3 p-5"
              >
                <ArrowLeft className="mt-1 h-4 w-4 text-ink-400 transition group-hover:-translate-x-0.5 group-hover:text-saffron-600" />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-ink-400">
                    Previous chapter
                  </p>
                  <p className="mt-0.5 font-serif text-[15px] font-medium text-ink-900">
                    Chapter {prev.number} — {prev.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/laws/${cat.slug}/${meta.slug}/${next.slug}`}
                className="group card-heritage flex items-start justify-end gap-3 p-5 text-right"
              >
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-ink-400">
                    Next chapter
                  </p>
                  <p className="mt-0.5 font-serif text-[15px] font-medium text-ink-900">
                    Chapter {next.number} — {next.title}
                  </p>
                </div>
                <ArrowRight className="mt-1 h-4 w-4 text-ink-400 transition group-hover:translate-x-0.5 group-hover:text-saffron-600" />
              </Link>
            ) : (
              <Link
                href={`/laws/${cat.slug}/${meta.slug}`}
                className="group card-heritage flex items-start justify-end gap-3 p-5 text-right"
              >
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-ink-400">
                    Back to
                  </p>
                  <p className="mt-0.5 font-serif text-[15px] font-medium text-ink-900">
                    {meta.shortName} — overview
                  </p>
                </div>
                <FileText className="mt-1 h-4 w-4 text-ink-400" />
              </Link>
            )}
          </nav>
        </div>
      </div>
    </article>
  );
}

/**
 * One section's MVP card — used by both this chapter view (rendered inline,
 * many per page) and the single-section MVP page (rendered once, wrapped in
 * extra chrome).
 */
export function MvpSectionBlock({
  meta,
  section,
}: {
  meta: StatuteMeta;
  section: Chapter["sections"][number];
}) {
  const label = section.label ?? `Section ${section.number}`;
  const heading = section.marginalNote ?? label;
  const citation = `${label}, ${meta.shortName} ${meta.year}`;

  return (
    <section
      id={`section-${slugifySection(section.number)}`}
      className="scroll-mt-28"
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex h-9 items-center gap-1.5 rounded-full bg-saffron-50 px-3 font-mono text-[12px] font-semibold text-saffron-700 ring-1 ring-inset ring-saffron-200 tabular">
          §{section.number}
        </span>
        <span className="text-[10.5px] font-semibold uppercase tracking-[0.15em] text-ink-400">
          {label}
        </span>
      </div>

      <h2 className="mt-3 font-serif text-[22px] font-medium leading-tight tracking-tight text-ink-900 sm:text-2xl">
        {heading}
      </h2>

      {section.summary && (
        <div className="mt-4 flex items-start gap-3 rounded-2xl border border-ink-100 bg-paper-50 p-4">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-saffron-700" />
          <p className="text-[14px] leading-relaxed text-ink-700">
            {section.summary}
          </p>
        </div>
      )}

      <SectionQuote text={section.verbatim} citation={citation} />

      <div className="mt-2 flex flex-wrap items-center gap-3 text-[11.5px] uppercase tracking-[0.12em] text-ink-400">
        <SourceLink source={section.source} variant="compact" />
      </div>
    </section>
  );
}
