import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { categories, megaMenuGroups, getCategoryBySlug } from "@/lib/categories";
import {
  statuteMetas,
  categoryCoverage,
} from "@/lib/statutes/_registry";

export const metadata = {
  title: "All Laws",
  description:
    "The complete index of every domain of Indian law on Nyaya Vidhi — taxation, criminal, constitutional, family, business, and more.",
};

export default function AllLawsPage() {
  return (
    <>
      <PageHeader
        eyebrow="सूचि · Index"
        title="The complete library of Indian law."
        description="Fifteen domains. Hundreds of topics. From the Constitution to consumer rights, learn from beginner to advanced — at your pace."
        crumbs={[{ label: "Home", href: "/" }, { label: "All Laws" }]}
      />

      <section className="container-page pb-24">
        {/* Stats strip — live numbers from the registry */}
        <div className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {(() => {
            const totalSections = statuteMetas.reduce(
              (acc, m) => acc + m.totalSections,
              0
            );
            const stats = [
              { v: String(categories.length), l: "Law domains" },
              { v: String(statuteMetas.length), l: "Acts indexed" },
              { v: totalSections.toLocaleString(), l: "Sections indexed" },
              { v: "8", l: "Learning paths" },
            ];
            return stats;
          })().map((s) => (
            <div
              key={s.l}
              className="card-heritage flex flex-col items-start p-5"
            >
              <p className="font-serif text-3xl font-medium tabular text-ink-900">
                {s.v}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-ink-400">
                {s.l}
              </p>
            </div>
          ))}
        </div>

        {/* Grouped categories */}
        <div className="space-y-16">
          {megaMenuGroups.map((group) => (
            <div key={group.label}>
              <div className="mb-6 flex items-center gap-4">
                <h2 className="font-serif text-2xl font-medium tracking-tight text-ink-900">
                  {group.label}
                </h2>
                <div className="h-px flex-1 bg-ink-100" />
                <span className="text-xs uppercase tracking-[0.18em] text-ink-400 tabular">
                  {group.items.length} categories
                </span>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((slug) => {
                  const cat = getCategoryBySlug(slug);
                  if (!cat) return null;
                  const Icon = cat.icon;
                  const cov = categoryCoverage(cat.slug);
                  return (
                    <Link
                      key={cat.slug}
                      href={`/laws/${cat.slug}`}
                      className="group card-heritage p-6"
                    >
                      <div className="flex items-start justify-between">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-saffron-50 text-saffron-700">
                          <Icon className="h-5 w-5" />
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-ink-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-saffron-600" />
                      </div>
                      <p className="devanagari mt-5 text-[11px] text-ink-400">
                        {cat.sanskrit}
                      </p>
                      <h3 className="mt-1 font-serif text-[20px] font-medium leading-tight tracking-tight text-ink-900">
                        {cat.title}
                      </h3>
                      <p className="mt-2 text-[13.5px] leading-relaxed text-ink-500 line-clamp-2">
                        {cat.description}
                      </p>
                      <div className="mt-5 flex items-center gap-2 border-t border-ink-100 pt-4 text-[11px] uppercase tracking-[0.15em] text-ink-400 tabular">
                        <span>{cov.total} acts</span>
                        <span>·</span>
                        <span>{cov.done} done</span>
                        {cov.showcase > 0 ? (
                          <>
                            <span>·</span>
                            <span>{cov.showcase}★</span>
                          </>
                        ) : null}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* All categories flat list - alphabetical */}
        <div className="mt-24 border-t border-ink-100 pt-12">
          <p className="eyebrow">A → Z</p>
          <h2 className="mt-3 font-serif text-2xl font-medium tracking-tight text-ink-900">
            Every category, alphabetically.
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {[...categories]
              .sort((a, b) => a.title.localeCompare(b.title))
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/laws/${c.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-ink-100 bg-paper-50 px-3.5 py-1.5 text-sm font-medium text-ink-500 transition hover:border-saffron-300 hover:bg-saffron-50 hover:text-saffron-700"
                >
                  {c.title}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
