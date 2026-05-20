"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowRightLeft,
  Calculator,
  HelpCircle,
  Siren,
} from "lucide-react";

const tools = [
  {
    title: "Ask Nyaya Mitra",
    sanskrit: "मित्र",
    body: "Tell us what is happening. Get the law, the steps, and the helpline — in plain English.",
    href: "/ask",
    icon: HelpCircle,
    accent: "saffron",
  },
  {
    title: "Legal Toolkit",
    sanskrit: "उपकरण",
    body: "Calculators and ready-to-print documents — taxes, HRA, stamp duty, RTI, cheque bounce notice.",
    href: "/toolkit",
    icon: Calculator,
    accent: "india",
  },
  {
    title: "SOS — 30-second card",
    sanskrit: "आपात्",
    body: "If you have only seconds, this is what to do — arrest, accident, harassment, online fraud.",
    href: "/sos",
    icon: Siren,
    accent: "terracotta",
  },
  {
    title: "IPC → BNS Mapper",
    sanskrit: "नई संहिता",
    body: "Old IPC section to new Bharatiya Nyaya Sanhita 2023 — punishments and what changed.",
    href: "/ipc-bns",
    icon: ArrowRightLeft,
    accent: "nile",
  },
];

const accentMap: Record<string, string> = {
  saffron: "from-saffron-100 to-saffron-50/40 text-saffron-700",
  india: "from-india-100/80 to-paper-100/60 text-india-700",
  terracotta: "from-terracotta-500/15 to-saffron-50 text-terracotta-500",
  nile: "from-nile-500/10 to-paper-100/60 text-nile-500",
};

export default function ToolsStrip() {
  return (
    <section className="relative py-24 lg:py-28">
      <div className="container-page">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">सहायक · Tools that help</p>
            <h2 className="mt-3 font-serif text-display-md font-medium text-balance text-ink-900">
              Real tools for real moments.
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-ink-500">
              Not just articles — interactive tools, ready letters, and emergency cards. Made so you can act today,
              not after a month of reading.
            </p>
          </div>
          <Link
            href="/toolkit"
            className="inline-flex items-center gap-2 rounded-full border border-ink-100 bg-paper-50 px-4 py-2 text-sm font-medium text-ink-900 transition hover:border-saffron-300 hover:bg-saffron-50 hover:text-saffron-700"
          >
            All tools →
          </Link>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          {tools.map((t) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.href}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                <Link
                  href={t.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink-100 bg-paper-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-saffron-300 hover:shadow-elevated"
                >
                  <div
                    className={`pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-gradient-to-br opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 ${accentMap[t.accent]}`}
                  />
                  <div className="flex items-start justify-between">
                    <div
                      className={`relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${accentMap[t.accent]}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="devanagari text-[12px] text-ink-400">{t.sanskrit}</span>
                  </div>
                  <h3 className="mt-6 font-serif text-2xl font-medium leading-tight tracking-tight text-ink-900">
                    {t.title}
                  </h3>
                  <p className="mt-2 max-w-md text-[14.5px] leading-relaxed text-ink-500">
                    {t.body}
                  </p>
                  <div className="mt-6 flex items-center gap-1.5 text-[13.5px] font-semibold text-saffron-700 transition-transform group-hover:translate-x-0.5">
                    Open
                    <ArrowRight className="h-3.5 w-3.5" />
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
