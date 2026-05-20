import Link from "next/link";
import { ArrowLeft, BookOpen, Layers } from "lucide-react";
import type { StatuteMeta } from "@/lib/statutes/_types";
import { getCategoryBySlug } from "@/lib/categories";
import StatuteStatusBadge from "./StatuteStatusBadge";

export default function StatuteHero({ meta }: { meta: StatuteMeta }) {
  const cat = getCategoryBySlug(meta.categorySlug);
  return (
    <section className="container-page pt-10 lg:pt-14">
      {/* breadcrumbs */}
      <nav className="flex items-center gap-1.5 text-xs text-ink-400">
        <Link href="/" className="hover:text-saffron-600">Home</Link>
        <span>/</span>
        <Link href="/laws" className="hover:text-saffron-600">All Laws</Link>
        <span>/</span>
        {cat && (
          <>
            <Link href={`/laws/${cat.slug}`} className="hover:text-saffron-600">
              {cat.title}
            </Link>
            <span>/</span>
          </>
        )}
        <span className="text-ink-500">{meta.shortName}</span>
      </nav>

      <div className="mt-10 relative overflow-hidden rounded-3xl border border-saffron-200 bg-gradient-to-br from-paper-100 via-paper-50 to-saffron-50/60 p-8 lg:p-12">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-saffron-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-india-200/20 blur-3xl" />

        <div className="relative">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-100 bg-paper-50 px-2.5 py-1 text-[11px] font-medium text-ink-500 tabular">
              Enacted {meta.year}
            </span>
            {cat && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-100 bg-paper-50 px-2.5 py-1 text-[11px] font-medium text-ink-500">
                {cat.title}
              </span>
            )}
            <StatuteStatusBadge coverage={meta.coverage} />
          </div>

          {meta.sanskrit && (
            <p className="devanagari mt-6 text-lg text-ink-500">{meta.sanskrit}</p>
          )}
          <h1 className="mt-2 max-w-3xl font-serif text-display-lg font-medium leading-[1.05] tracking-tight text-balance text-ink-900">
            {meta.fullName}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-[17px] leading-relaxed text-ink-500">
            {meta.summary}
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4">
            <Stat label="Sections" value={meta.totalSections.toLocaleString()} icon={BookOpen} />
            <Stat label="Chapters" value={meta.totalChapters.toLocaleString()} icon={Layers} />
            <Stat label="Tier" value={`Tier ${meta.tier}`} />
            {meta.commencement && <Stat label="Commenced" value={meta.commencement} />}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div>
      <dt className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-400">
        {Icon && <Icon className="h-3 w-3" />}
        {label}
      </dt>
      <dd className="mt-1 font-serif text-xl font-medium tabular text-ink-900">
        {value}
      </dd>
    </div>
  );
}
