import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Chapter, StatuteMeta } from "@/lib/statutes/_types";

type Props = {
  meta: StatuteMeta;
  chapters: Chapter[];
};

export default function ChapterToc({ meta, chapters }: Props) {
  return (
    <ol className="space-y-3">
      {chapters.map((c) => (
        <li key={c.slug}>
          <Link
            href={`/laws/${meta.categorySlug}/${meta.slug}/${c.slug}`}
            className="group card-heritage block p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-saffron-700 tabular">
                  Chapter {c.number}
                  {c.range && (
                    <span className="ml-2 font-mono text-[10.5px] text-ink-400">
                      §{c.range[0]}–{c.range[1]}
                    </span>
                  )}
                </p>
                <h3 className="mt-1.5 font-serif text-[18px] font-medium leading-tight text-ink-900">
                  {c.title}
                </h3>
                {c.intro && (
                  <p className="mt-2 line-clamp-2 text-[13.5px] leading-relaxed text-ink-500">
                    {c.intro}
                  </p>
                )}
                <p className="mt-3 text-[11.5px] uppercase tracking-wider text-ink-400 tabular">
                  {c.sections.length} sections
                </p>
              </div>
              <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-ink-400 transition-all group-hover:translate-x-0.5 group-hover:text-saffron-600" />
            </div>
          </Link>
        </li>
      ))}
    </ol>
  );
}
