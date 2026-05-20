"use client";

import { motion } from "framer-motion";
import type { TimelineVisual } from "@/lib/statutes/_types";

export default function Timeline({ visual }: { visual: TimelineVisual }) {
  return (
    <figure className="my-8 overflow-hidden rounded-3xl border border-ink-100 bg-paper-50 p-6 sm:p-8">
      <figcaption>
        <p className="eyebrow">Timeline</p>
        <h4 className="mt-2 font-serif text-xl font-medium tracking-tight text-ink-900">
          {visual.title}
        </h4>
        {visual.caption && (
          <p className="mt-1.5 max-w-2xl text-[13.5px] leading-relaxed text-ink-500">
            {visual.caption}
          </p>
        )}
      </figcaption>

      <ol className="relative mt-6 border-l border-ink-100 pl-6">
        {visual.items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="relative pb-7 last:pb-0"
          >
            <span className="absolute -left-[31px] top-1 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-paper-50 bg-saffron-500" />
            <div className="flex flex-wrap items-baseline gap-3">
              <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-saffron-700 tabular">
                {item.year}
              </span>
              <p className="font-serif text-[15.5px] font-medium leading-tight text-ink-900">
                {item.label}
              </p>
            </div>
            {item.note && (
              <p className="mt-1 text-[13.5px] leading-relaxed text-ink-500">
                {item.note}
              </p>
            )}
          </motion.li>
        ))}
      </ol>
    </figure>
  );
}
