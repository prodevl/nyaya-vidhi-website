import Link from "next/link";
import { notFound } from "next/navigation";
import { ShieldAlert } from "lucide-react";
import ReadingProgress from "@/components/statute/ReadingProgress";
import SectionNumberChip from "@/components/statute/SectionNumberChip";
import SectionQuote from "@/components/statute/SectionQuote";
import SourceLink from "@/components/statute/SourceLink";
import StatuteVisuals from "@/components/statute/StatuteVisuals";
import ScenarioCard from "@/components/statute/ScenarioCard";
import FaqAccordion from "@/components/statute/FaqAccordion";
import MvpSectionView from "@/components/statute/MvpSectionView";
import {
  DefinitionList,
  ProcedureList,
  CrossRefChips,
  CaseList,
} from "@/components/statute/SectionExtras";
import SectionNav, {
  findAdjacent,
  slugifySection,
} from "@/components/statute/SectionNav";
import { authoredStatutes, getStatuteMeta } from "@/lib/statutes/_registry";
import { getCategoryBySlug } from "@/lib/categories";

type Props = {
  params: Promise<{
    category: string;
    statute: string;
    chapter: string;
    section: string;
  }>;
};

export function generateStaticParams() {
  const out: {
    category: string;
    statute: string;
    chapter: string;
    section: string;
  }[] = [];
  for (const slug in authoredStatutes) {
    const s = authoredStatutes[slug];
    for (const ch of s.chapters) {
      for (const sec of ch.sections) {
        out.push({
          category: s.meta.categorySlug,
          statute: s.meta.slug,
          chapter: ch.slug,
          section: slugifySection(sec.number),
        });
      }
    }
  }
  return out;
}

export async function generateMetadata({ params }: Props) {
  const { statute, chapter, section } = await params;
  const s = authoredStatutes[statute];
  const ch = s?.chapters.find((c) => c.slug === chapter);
  const sec = ch?.sections.find(
    (x) => slugifySection(x.number) === section
  );
  if (!s || !ch || !sec) return { title: "Not Found" };
  const label = sec.label ?? `Section ${sec.number}`;
  const heading = sec.marginalNote ?? label;
  const description = sec.plainEnglish ?? sec.summary ?? s.meta.summary;
  return {
    title: `${label} — ${heading} · ${s.meta.shortName}`,
    description: description.slice(0, 160),
  };
}

export default async function SectionPage({ params }: Props) {
  const {
    category,
    statute: statuteSlug,
    chapter: chapterSlug,
    section: sectionSlug,
  } = await params;
  const cat = getCategoryBySlug(category);
  const meta = getStatuteMeta(statuteSlug);
  const statute = authoredStatutes[statuteSlug];
  if (!cat || !meta || !statute || meta.categorySlug !== cat.slug) {
    return notFound();
  }
  const chapter = statute.chapters.find((c) => c.slug === chapterSlug);
  if (!chapter) return notFound();
  const section = chapter.sections.find(
    (s) => slugifySection(s.number) === sectionSlug
  );
  if (!section) return notFound();

  const { prev, next } = findAdjacent(
    statute.chapters,
    chapter.slug,
    slugifySection(section.number)
  );

  // MVP Acts get the lightweight single-section renderer. Every deep-only field
  // accessed below is guaranteed present for `coverage === "complete"` Acts.
  if (meta.coverage === "mvp") {
    return (
      <MvpSectionView
        cat={cat}
        meta={meta}
        chapter={chapter}
        section={section}
        prev={prev ?? undefined}
        next={next ?? undefined}
      />
    );
  }

  const citation = `${section.label!}, ${meta.shortName} ${meta.year}`;

  return (
    <article className="relative">
      <ReadingProgress />

      <div className="container-page pt-10 pb-24 lg:pt-14">
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
          <Link
            href={`/laws/${cat.slug}/${meta.slug}/${chapter.slug}`}
            className="hover:text-saffron-600"
          >
            Ch. {chapter.number}
          </Link>
          <span>/</span>
          <span className="text-ink-500">{section.label}</span>
        </nav>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          {/* TOC sidebar */}
          <aside className="lg:col-span-3 lg:order-2">
            <div className="lg:sticky lg:top-32 space-y-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-400">
                  On this page
                </p>
                <nav className="mt-4 space-y-0.5 border-l border-ink-100 pl-4">
                  {[
                    "Verbatim",
                    "Plain English",
                    section.defines && section.defines.length > 0 && "Definitions",
                    section.procedure && section.procedure.length > 0 && "Procedure",
                    section.visuals && section.visuals.length > 0 && "Visuals",
                    "Scenarios",
                    section.cases && section.cases.length > 0 && "Cases",
                    section.crossRefs && section.crossRefs.length > 0 && "Cross-refs",
                    "FAQs",
                    "Source",
                  ]
                    .filter(Boolean)
                    .map((label) => (
                      <a
                        key={String(label)}
                        href={`#${String(label).toLowerCase().replace(/\W/g, "-")}`}
                        className="block py-1.5 text-[13px] text-ink-500 transition-colors hover:text-saffron-600"
                      >
                        {label}
                      </a>
                    ))}
                </nav>
              </div>

              <SourceLink source={section.source} variant="card" label="Source · this section" />

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

          {/* Article body */}
          <div className="lg:col-span-9 lg:order-1">
            <header>
              <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-ink-400">
                <Link
                  href={`/laws/${cat.slug}/${meta.slug}`}
                  className="hover:text-saffron-700"
                >
                  {meta.shortName}
                </Link>
                <span>·</span>
                <span>Chapter {chapter.number}</span>
                <span>·</span>
                <span>{chapter.title}</span>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <SectionNumberChip
                  label={section.label!}
                  number={section.number}
                  statuteShort={`${meta.shortName} ${meta.year}`}
                />
                <SourceLink source={section.source} variant="compact" />
              </div>

              <h1 className="mt-6 max-w-3xl font-serif text-display-md font-medium leading-[1.1] tracking-tight text-balance text-ink-900">
                {section.marginalNote!}
              </h1>
            </header>

            {/* Verbatim */}
            <section id="verbatim" className="mt-10">
              <SectionQuote text={section.verbatim} citation={citation} />
            </section>

            {/* Plain English */}
            <section id="plain-english" className="mt-10">
              <p className="eyebrow">In plain English</p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-ink-900">
                What this section actually means
              </h2>
              <div className="mt-4 space-y-4 text-[16px] leading-[1.75] text-ink-500">
                {section.plainEnglish!.split(/\n\s*\n/).map((p, i) => (
                  <p key={i} className="text-pretty">{p}</p>
                ))}
              </div>
            </section>

            {/* Definitions */}
            {section.defines && section.defines.length > 0 && (
              <section id="definitions" className="mt-12">
                <DefinitionList defines={section.defines} />
              </section>
            )}

            {/* Procedure */}
            {section.procedure && section.procedure.length > 0 && (
              <section id="procedure" className="mt-12">
                <ProcedureList steps={section.procedure} />
              </section>
            )}

            {/* Visuals */}
            {section.visuals && section.visuals.length > 0 && (
              <section id="visuals" className="mt-12">
                <p className="eyebrow">Visual</p>
                <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-ink-900">
                  See how it flows
                </h2>
                <StatuteVisuals visuals={section.visuals} />
              </section>
            )}

            {/* Scenarios */}
            {section.scenarios && section.scenarios.length > 0 && (
              <section id="scenarios" className="mt-12">
                <p className="eyebrow">Real life</p>
                <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-ink-900">
                  What this looks like in real life
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {section.scenarios.map((s, i) => (
                    <ScenarioCard key={i} scenario={s} />
                  ))}
                </div>
              </section>
            )}

            {/* Cases */}
            {section.cases && section.cases.length > 0 && (
              <section id="cases" className="mt-12">
                <CaseList cases={section.cases} />
              </section>
            )}

            {/* Cross refs */}
            {section.crossRefs && section.crossRefs.length > 0 && (
              <section id="cross-refs" className="mt-12">
                <CrossRefChips refs={section.crossRefs} />
              </section>
            )}

            {/* FAQs */}
            <section id="faqs" className="mt-12">
              <FaqAccordion
                items={section.faq!}
                eyebrow="Frequently asked"
                title={`Questions about ${section.label!}`}
              />
            </section>

            {/* Source */}
            <section id="source" className="mt-12">
              <SourceLink source={section.source} label="Open this section in the source PDF" />
            </section>

            {/* Prev / next */}
            <SectionNav meta={meta} prev={prev} next={next} />
          </div>
        </div>
      </div>
    </article>
  );
}
