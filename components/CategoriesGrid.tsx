"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categories, type LawCategory } from "@/lib/categories";
import { cn } from "@/lib/utils";

const accentMap: Record<LawCategory["accent"], string> = {
  saffron: "from-saffron-100 to-saffron-50 text-saffron-700",
  india: "from-india-50 to-paper-100 text-india-700",
  nile: "from-[#E5F0EF] to-paper-100 text-nile-500",
  terracotta: "from-[#F4DDD0] to-paper-100 text-terracotta-500",
  marigold: "from-[#FDEBC4] to-paper-100 text-saffron-700",
};

const ringMap: Record<LawCategory["accent"], string> = {
  saffron: "group-hover:ring-saffron-300/60",
  india: "group-hover:ring-india-200",
  nile: "group-hover:ring-nile-500/30",
  terracotta: "group-hover:ring-terracotta-500/30",
  marigold: "group-hover:ring-marigold-500/40",
};

export default function CategoriesGrid() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container-page">
        {/* Section header */}
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">विषय · Domains</p>
            <h2 className="mt-3 font-serif text-display-md font-medium text-balance text-ink-900">
              Every law that shapes your life — organised, indexed, explained.
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-ink-500">
              Pick a domain to dive in, or follow a curated learning path. Every category will carry sub-topics, key sections, FAQs, and downloadable summaries.
            </p>
          </div>
          <Link
            href="/laws"
            className="inline-flex items-center gap-2 rounded-full border border-ink-100 bg-paper-50 px-4 py-2 text-sm font-medium text-ink-900 transition hover:border-saffron-300 hover:bg-saffron-50 hover:text-saffron-700"
          >
            View all 15 →
          </Link>
        </div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.slug}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                <Link
                  href={`/laws/${cat.slug}`}
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-paper-50 p-6 ring-1 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:border-ink-100 hover:shadow-elevated",
                    ringMap[cat.accent]
                  )}
                >
                  {/* Decorative corner glow */}
                  <div
                    className={cn(
                      "pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100",
                      accentMap[cat.accent]
                    )}
                  />
                  {/* Icon */}
                  <div
                    className={cn(
                      "relative mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br shadow-soft",
                      accentMap[cat.accent]
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Devanagari sub-label */}
                  <span className="devanagari text-[11px] tracking-wide text-ink-400">
                    {cat.sanskrit}
                  </span>

                  <h3 className="mt-1 font-serif text-[20px] font-medium leading-tight tracking-tight text-ink-900">
                    {cat.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-[13.5px] leading-relaxed text-ink-500">
                    {cat.tagline}
                  </p>

                  <div className="mt-5 flex items-center justify-between pt-4 border-t border-ink-100">
                    <span className="text-[11px] uppercase tracking-[0.15em] text-ink-400 tabular">
                      {cat.topicCount} topics
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-ink-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-saffron-600" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
