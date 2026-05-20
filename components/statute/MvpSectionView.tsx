import Link from "next/link";
import { ShieldAlert } from "lucide-react";
import ReadingProgress from "./ReadingProgress";
import SourceLink from "./SourceLink";
import { MvpSectionBlock } from "./MvpChapterView";
import SectionNav, { type AdjacentRef } from "./SectionNav";
import type { Chapter, StatuteMeta } from "@/lib/statutes/_types";
import type { LawCategory } from "@/lib/categories";

type Props = {
  cat: LawCategory;
  meta: StatuteMeta;
  chapter: Chapter;
  section: Chapter["sections"][number];
  prev?: AdjacentRef;
  next?: AdjacentRef;
};

/**
 * MVP single-section page.
 *
 * Renders one section's verbatim + summary + PDF link, framed by breadcrumbs,
 * a small sidebar, and prev/next nav across the whole statute. The body
 * itself reuses `MvpSectionBlock` so the inline-in-chapter render and the
 * single-section render are byte-for-byte identical.
 */
export default function MvpSectionView({ cat, meta, chapter, section, prev, next }: Props) {
  const label = section.label ?? `Section ${section.number}`;

  return (
    <article className="relative">
      <ReadingProgress />

      <div className="container-page pt-10 pb-24 lg:pt-14">
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
          <Link
            href={`/laws/${cat.slug}/${meta.slug}/${chapter.slug}`}
            className="hover:text-saffron-600"
          >
            Ch. {chapter.number}
          </Link>
          <span>/</span>
          <span className="text-ink-500">{label}</span>
        </nav>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Sidebar */}
          <aside className="lg:col-span-3 lg:order-2">
            <div className="lg:sticky lg:top-32 space-y-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-400">
                  Context
                </p>
                <p className="mt-3 font-serif text-[15px] leading-snug text-ink-900">
                  {chapter.title}
                </p>
                <Link
                  href={`/laws/${cat.slug}/${meta.slug}/${chapter.slug}`}
                  className="mt-2 inline-block text-[12px] text-saffron-700 underline-offset-4 hover:underline"
                >
                  Open full chapter →
                </Link>
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

          {/* Body */}
          <div className="lg:col-span-9 lg:order-1">
            <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-ink-400">
              <Link href={`/laws/${cat.slug}/${meta.slug}`} className="hover:text-saffron-700">
                {meta.shortName}
              </Link>
              <span>·</span>
              <span>Chapter {chapter.number}</span>
              <span>·</span>
              <span>{chapter.title}</span>
            </div>

            <div className="mt-8">
              <MvpSectionBlock meta={meta} section={section} />
            </div>

            <SectionNav meta={meta} prev={prev ?? null} next={next ?? null} />
          </div>
        </div>
      </div>
    </article>
  );
}
