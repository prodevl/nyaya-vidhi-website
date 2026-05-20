"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-saffron-200 bg-gradient-to-br from-paper-100 via-paper-50 to-saffron-50 p-10 lg:p-20"
        >
          {/* Decorative chakra */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-saffron-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-india-100/50 blur-3xl" />
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -bottom-20 h-[400px] w-[400px] text-saffron-300 opacity-25 animate-slow-spin"
            viewBox="0 0 200 200"
            fill="none"
          >
            <circle cx="100" cy="100" r="98" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5" />
            {Array.from({ length: 24 }).map((_, i) => (
              <line
                key={i}
                x1="100"
                y1="20"
                x2="100"
                y2="40"
                stroke="currentColor"
                strokeWidth="0.7"
                transform={`rotate(${(i * 360) / 24} 100 100)`}
              />
            ))}
          </svg>

          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="eyebrow">शुरुआत · Begin</p>
              <h2 className="mt-3 font-serif text-display-lg font-medium leading-[1.05] tracking-tight text-balance text-ink-900">
                The law belongs to <span className="italic text-saffron-700">all of us</span>.
                <br className="hidden sm:block" /> Start understanding yours.
              </h2>
              <p className="mt-5 max-w-2xl text-pretty text-[17px] leading-relaxed text-ink-500">
                Free. Beginner-friendly. Always cited. Bookmark, search, follow paths — and walk into your next courtroom, contract, or conversation with clarity.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-4">
              <Link href="/laws" className="btn-saffron justify-between gap-3 px-6 py-3.5 text-base">
                <span className="flex items-center gap-2">
                  <Compass className="h-4 w-4" />
                  Browse all laws
                </span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/know-your-rights" className="btn-outline justify-between gap-3 px-6 py-3.5 text-base">
                Know your rights
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="mt-2 text-center text-xs text-ink-400">
                No signup needed · Educational use only
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
