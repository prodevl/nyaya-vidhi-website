import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Chapter, StatuteMeta } from "@/lib/statutes/_types";

export type AdjacentRef = {
  chapterSlug: string;
  sectionSlug: string;
  label: string;
  marginalNote: string;
};

type Cursor = AdjacentRef | null;

type Props = {
  meta: StatuteMeta;
  prev: Cursor;
  next: Cursor;
};

export default function SectionNav({ meta, prev, next }: Props) {
  return (
    <nav className="mt-16 grid grid-cols-1 gap-3 border-t border-ink-100 pt-10 sm:grid-cols-2">
      {prev ? (
        <Link
          href={`/laws/${meta.categorySlug}/${meta.slug}/${prev.chapterSlug}/${prev.sectionSlug}`}
          className="group card-heritage flex items-start gap-3 p-5"
        >
          <ArrowLeft className="mt-1 h-4 w-4 text-ink-400 transition group-hover:-translate-x-0.5 group-hover:text-saffron-600" />
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-ink-400">Previous</p>
            <p className="mt-0.5 font-mono text-[10.5px] text-saffron-700">{prev.label}</p>
            <p className="mt-0.5 font-serif text-[15px] font-medium text-ink-900">
              {prev.marginalNote}
            </p>
          </div>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`/laws/${meta.categorySlug}/${meta.slug}/${next.chapterSlug}/${next.sectionSlug}`}
          className="group card-heritage flex items-start justify-end gap-3 p-5 text-right"
        >
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-ink-400">Next</p>
            <p className="mt-0.5 font-mono text-[10.5px] text-saffron-700">{next.label}</p>
            <p className="mt-0.5 font-serif text-[15px] font-medium text-ink-900">
              {next.marginalNote}
            </p>
          </div>
          <ArrowRight className="mt-1 h-4 w-4 text-ink-400 transition group-hover:translate-x-0.5 group-hover:text-saffron-600" />
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}

export function findAdjacent(
  chapters: Chapter[],
  chapterSlug: string,
  sectionSlug: string
): { prev: Cursor; next: Cursor } {
  const flat: AdjacentRef[] = [];
  for (const c of chapters) {
    for (const s of c.sections) {
      const label = s.label ?? `Section ${s.number}`;
      flat.push({
        chapterSlug: c.slug,
        sectionSlug: slugifySection(s.number),
        label,
        marginalNote: s.marginalNote ?? label,
      });
    }
  }
  const idx = flat.findIndex(
    (x) => x.chapterSlug === chapterSlug && x.sectionSlug === sectionSlug
  );
  if (idx < 0) return { prev: null, next: null };
  return {
    prev: idx > 0 ? flat[idx - 1] : null,
    next: idx < flat.length - 1 ? flat[idx + 1] : null,
  };
}

export function slugifySection(num: string): string {
  return num
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
