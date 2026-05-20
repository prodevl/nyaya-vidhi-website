"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Search, BookOpen, Scale } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 lg:pt-20 lg:pb-32">
      {/* Background ornaments */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-saffron-glow opacity-90" />
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 mandala-bg animate-slow-spin opacity-60" />
        <div className="absolute inset-0 pattern-jaali-fine mask-fade-b opacity-30" />
        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-saffron-200/30 blur-3xl" />
        <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-india-100/40 blur-3xl" />
      </div>

      <div className="container-page relative">
        <div className="flex flex-col items-center text-center">
          {/* Announcement pill */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full border border-saffron-200 bg-paper-50/70 px-3 py-1.5 text-xs font-medium text-saffron-700 backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" />
            New: Bharatiya Nyaya Sanhita explainer — live
            <span className="text-saffron-400">·</span>
            <Link href="/laws/criminal-laws/bns-overview" className="underline-offset-4 hover:underline">
              Read it →
            </Link>
          </motion.div>

          {/* Devanagari accent */}
          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="devanagari mt-8 text-base text-ink-400"
          >
            न्याय · विधि · ज्ञान
          </motion.p>

          {/* Main headline */}
          <motion.h1
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-4 max-w-4xl font-serif text-display-xl font-medium text-balance text-ink-900"
          >
            Indian law,
            <br />
            <span className="italic text-saffron-600">made lucid.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-2xl text-pretty text-[17px] leading-relaxed text-ink-500 sm:text-lg"
          >
            From the Constitution to consumer rights, GST to GST, criminal to commercial — every Indian law explained from <span className="text-ink-900 font-medium">beginner to advanced</span>, with plain English and cited clauses.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Link href="/laws" className="btn-primary">
              Explore all laws
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link href="/learn" className="btn-outline">
              <BookOpen className="h-3.5 w-3.5" />
              Pick a learning path
            </Link>
          </motion.div>

          {/* Search bar */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-12 w-full max-w-xl"
          >
            <div className="group flex items-center gap-2 rounded-2xl border border-ink-100 bg-paper-50/95 p-2 shadow-elevated backdrop-blur transition focus-within:border-saffron-400 focus-within:shadow-glow">
              <span className="pl-3 text-ink-400">
                <Search className="h-4 w-4" />
              </span>
              <input
                type="search"
                placeholder="Try: 'maternity leave', 'cheque bounce', 'Section 138'…"
                className="flex-1 bg-transparent px-2 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none"
                aria-label="Search laws"
              />
              <button className="rounded-xl bg-ink-900 px-4 py-2.5 text-sm font-medium text-paper-50 hover:bg-ink-500">
                Search
              </button>
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 text-[12px] text-ink-400">
              <span className="mr-1">Popular:</span>
              {["FIR", "RERA", "ITR", "POSH", "Article 21", "GST"].map((q) => (
                <button
                  key={q}
                  className="rounded-full border border-ink-100 bg-paper-50 px-2.5 py-1 text-ink-500 hover:border-saffron-300 hover:text-saffron-700"
                >
                  {q}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            custom={6}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-6 border-y border-ink-100 py-6 sm:grid-cols-4"
          >
            {[
              { v: "15", l: "Domains" },
              { v: "200+", l: "Topics" },
              { v: "1.2k+", l: "Clauses" },
              { v: "8", l: "Learning paths" },
            ].map((s) => (
              <div key={s.l} className="flex flex-col items-center">
                <p className="font-serif text-3xl font-medium tabular text-ink-900">
                  {s.v}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-ink-400">
                  {s.l}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom ornamental divider */}
      <div className="container-page mt-20">
        <div className="divider-ornament">
          <Scale className="h-4 w-4" />
        </div>
      </div>
    </section>
  );
}
