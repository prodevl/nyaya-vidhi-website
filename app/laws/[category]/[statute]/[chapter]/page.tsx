import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, FileText } from "lucide-react";
import FaqAccordion from "@/components/statute/FaqAccordion";
import ScenarioCard from "@/components/statute/ScenarioCard";
import SourceLink from "@/components/statute/SourceLink";
import { slugifySection } from "@/components/statute/SectionNav";
import MvpChapterView from "@/components/statute/MvpChapterView";
import { authoredStatutes, getStatuteMeta } from "@/lib/statutes/_registry";
import { getCategoryBySlug } from "@/lib/categories";

type Props = {
  params: Promise<{ category: string; statute: string; chapter: string }>;
};

export function generateStaticParams() {
  const out: { category: string; statute: string; chapter: string }[] = [];
  for (const slug in authoredStatutes) {
    const s = authoredStatutes[slug];
    for (const ch of s.chapters) {
      out.push({
        category: s.meta.categorySlug,
        statute: s.meta.slug,
        chapter: ch.slug,
      });
    }
  }
  return out;
}

export async function generateMetadata({ params }: Props) {
  const { statute, chapter } = await params;
  const s = authoredStatutes[statute];
  const ch = s?.chapters.find((c) => c.slug === chapter);
  if (!s || !ch) return { title: "Not Found" };
  return {
    title: `${ch.title} — ${s.meta.shortName}`,
    description: ch.intro ?? s.meta.summary,
  };
}

export default async function ChapterPage({ params }: Props) {
  const { category, statute: statuteSlug, chapter: chapterSlug } = await params;
  const cat = getCategoryBySlug(category);
  const meta = getStatuteMeta(statuteSlug);
  const statute = authoredStatutes[statuteSlug];
  if (!cat || !meta || !statute || meta.categorySlug !== cat.slug) {
    return notFound();
  }
  const chapter = statute.chapters.find((c) => c.slug === chapterSlug);
  if (!chapter) return notFound();

  const chIdx = statute.chapters.findIndex((c) => c.slug === chapter.slug);
  const prev = statute.chapters[chIdx - 1];
  const next = statute.chapters[chIdx + 1];

  // MVP Acts get the lightweight inline-sections renderer. Every field touched
  // below here is required only for deep ("complete") Acts.
  if (meta.coverage === "mvp") {
    return (
      <MvpChapterView
        cat={cat}
        meta={meta}
        chapter={chapter}
        prev={prev}
        next={next}
      />
    );
  }

  return (
    <article className="container-page pb-24 pt-10 lg:pt-14">
      {/* Breadcrumbs */}
      <nav className="flex flex-wrap items-center gap-1.5 text-xs text-ink-400">
        <Link href="/" className="hover:text-saffron-600">Home</Link>
        <span>/</span>
        <Link href="/laws" className="hover:text-saffron-600">All Laws</Link>
        <span>/</span>
        <Link href={`/laws/${cat.slug}`} className="hover:text-saffron-600">
          {cat.title}
        </Link>
        <span>/</span>
        <Link
          href={`/laws/${cat.slug}/${meta.slug}`}
          className="hover:text-saffron-600"
        >
          {meta.shortName}
        </Link>
        <span>/</span>
        <span className="text-ink-500">Chapter {chapter.number}</span>
      </nav>

      <header className="mt-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-saffron-700 tabular">
          Chapter {chapter.number}
          <span className="ml-2 font-mono text-ink-400">
            §{chapter.range![0]}–{chapter.range![1]}
          </span>
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-display-md font-medium leading-tight tracking-tight text-balance text-ink-900">
          {chapter.title}
        </h1>
        {chapter.intro && (
          <p className="mt-4 max-w-2xl text-pretty text-[17px] leading-relaxed text-ink-500">
            {chapter.intro}
          </p>
        )}
      </header>

      {/* Sections list */}
      <section className="mt-12">
        <p className="eyebrow">Sections in this chapter</p>
        <ol className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {chapter.sections.map((s, i) => (
            <li key={s.number}>
              <Link
                href={`/laws/${cat.slug}/${meta.slug}/${chapter.slug}/${slugifySection(s.number)}`}
                className="group card-heritage flex h-full items-start gap-4 p-5"
              >
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-saffron-50 font-mono text-[12px] font-semibold text-saffron-700 tabular">
                  §{s.number}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10.5px] font-semibold uppercase tracking-wider text-ink-400">
                    {s.label!}
                  </p>
                  <h3 className="mt-1 font-serif text-[16px] font-medium leading-tight text-ink-900">
                    {s.marginalNote!}
                  </h3>
                  {s.plainEnglish && (
                    <p className="mt-1 line-clamp-2 text-[12.5px] leading-relaxed text-ink-500">
                      {s.plainEnglish}
                    </p>
                  )}
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-ink-400 transition-all group-hover:translate-x-0.5 group-hover:text-saffron-600" />
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* Chapter scenarios */}
      {chapter.scenarios && chapter.scenarios.length > 0 && (
        <section className="mt-16">
          <p className="eyebrow">Real life</p>
          <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-ink-900">
            What this chapter means in practice
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {chapter.scenarios.map((s, i) => (
              <ScenarioCard key={i} scenario={s} />
            ))}
          </div>
        </section>
      )}

      {/* Chapter FAQs */}
      {chapter.faq && chapter.faq.length > 0 && (
        <section className="mt-16">
          <FaqAccordion
            items={chapter.faq}
            eyebrow="Frequently asked"
            title="Common questions about this chapter"
          />
        </section>
      )}

      {/* Source */}
      <section className="mt-16">
        <SourceLink source={meta.sourcePdf} label="Read the full Act" />
      </section>

      {/* prev/next */}
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
    </article>
  );
}
