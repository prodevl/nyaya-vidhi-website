"use client";

import { motion } from "framer-motion";
import {
  ScrollText,
  Compass,
  ShieldCheck,
  Layers,
  Bookmark,
  Languages,
} from "lucide-react";

const features = [
  {
    icon: ScrollText,
    title: "Plain English. Cited clauses.",
    body: "Every explainer pairs human language with the exact section, act, and judgment — never just one or the other.",
  },
  {
    icon: Compass,
    title: "Guided by goal, not by law.",
    body: "Curated learning paths braid clauses across acts so you learn how the law works in real situations.",
  },
  {
    icon: ShieldCheck,
    title: "Rights at a glance.",
    body: "Quick lookups for arrest, complaint, FIR, refund, leave, harassment — built for moments that matter.",
  },
  {
    icon: Layers,
    title: "Beginner → Advanced.",
    body: "Three depth tiers per topic: a 60-second primer, a working guide, and a deep-dive with case law.",
  },
  {
    icon: Bookmark,
    title: "Bookmark, annotate, revisit.",
    body: "Build your personal vault of clauses, summaries, and notes — synced across devices.",
  },
  {
    icon: Languages,
    title: "Bilingual where it matters.",
    body: "Legal-grade English with Hindi terms preserved — because words like 'dharma' and 'sakshi' don't translate cleanly.",
  },
];

export default function Features() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center"><span className="!before:hidden">&nbsp;</span>लक्षण · Why us</p>
          <h2 className="mt-3 font-serif text-display-md font-medium text-balance text-ink-900">
            Built like a textbook. Reads like a friend.
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-ink-500">
            We obsess over the bits that actually help — the right clause cited, the right scenario named, the right next step.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-ink-100 bg-ink-100/60 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="group relative bg-paper-50 p-8 transition-colors duration-300 hover:bg-paper-100"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-saffron-200 bg-saffron-50 text-saffron-700 transition-all duration-300 group-hover:rotate-6 group-hover:bg-saffron-100">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-xl font-medium tracking-tight text-ink-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-500">
                  {f.body}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
