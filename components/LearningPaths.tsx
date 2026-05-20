"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, BookMarked, ArrowRight } from "lucide-react";
import { learningPaths, type LearningPath } from "@/lib/learning-paths";
import { cn } from "@/lib/utils";

const levelStyle: Record<LearningPath["level"], string> = {
  Beginner: "bg-india-50 text-india-700 border-india-200",
  Intermediate: "bg-saffron-50 text-saffron-700 border-saffron-200",
  Advanced: "bg-[#F4DDD0] text-terracotta-500 border-terracotta-500/30",
};

const accentBg: Record<LearningPath["accent"], string> = {
  saffron: "bg-saffron-50 text-saffron-700",
  india: "bg-india-50 text-india-700",
  marigold: "bg-marigold-400/15 text-saffron-700",
  terracotta: "bg-[#F4DDD0] text-terracotta-500",
};

export default function LearningPaths() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-ink-900" />
      <div className="absolute inset-0 -z-10 opacity-20 pattern-jaali" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-saffron-500 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-saffron-500 to-transparent" />
      <div className="absolute -left-40 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-saffron-500/10 blur-3xl" />
      <div className="absolute -right-40 top-1/3 -z-10 h-96 w-96 rounded-full bg-india-400/10 blur-3xl" />

      <div className="container-page relative text-paper-100">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow !text-marigold-400">मार्ग · Paths</p>
            <h2 className="mt-3 font-serif text-display-md font-medium text-balance text-paper-50">
              Learn by <span className="italic text-marigold-400">goal</span>, not by chapter.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-paper-300/80">
              Curated journeys that braid the right laws together. Whether you're saving tax, starting up, or buying a home — start here.
            </p>
          </div>
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 rounded-full border border-paper-50/15 bg-paper-50/5 px-4 py-2 text-sm font-medium text-paper-100 backdrop-blur transition hover:border-saffron-400 hover:bg-saffron-500/10 hover:text-saffron-300"
          >
            Browse all paths
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {learningPaths.map((path, i) => {
            const Icon = path.icon;
            return (
              <motion.div
                key={path.slug}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                <Link
                  href={`/learn/${path.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-paper-50/10 bg-paper-50/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-saffron-400/40 hover:bg-paper-50/[0.08]"
                >
                  {/* Number watermark */}
                  <span className="absolute right-4 top-3 font-serif text-5xl font-light tabular text-paper-50/5 transition-colors duration-300 group-hover:text-saffron-400/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div
                    className={cn(
                      "relative mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl",
                      accentBg[path.accent]
                    )}
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </div>

                  <h3 className="font-serif text-[19px] font-medium leading-tight tracking-tight text-paper-50">
                    {path.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-paper-300/70">
                    {path.subtitle}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-6">
                    <span
                      className={cn(
                        "rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider",
                        levelStyle[path.level]
                      )}
                    >
                      {path.level}
                    </span>
                    <div className="flex items-center gap-3 text-[11px] text-paper-300/70">
                      <span className="inline-flex items-center gap-1 tabular">
                        <Clock className="h-3 w-3" />
                        {path.duration}
                      </span>
                      <span className="inline-flex items-center gap-1 tabular">
                        <BookMarked className="h-3 w-3" />
                        {path.lessons} lessons
                      </span>
                    </div>
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
