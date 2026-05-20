"use client";

import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { FaqItem } from "@/lib/statutes/_types";

type Props = {
  items: FaqItem[];
  /** Optional eyebrow label override */
  eyebrow?: string;
  /** Heading text */
  title?: string;
};

export default function FaqAccordion({
  items,
  eyebrow = "Frequently asked",
  title,
}: Props) {
  if (!items?.length) return null;
  return (
    <div>
      {(eyebrow || title) && (
        <div className="mb-5">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {title && (
            <h3 className="mt-3 font-serif text-2xl font-medium tracking-tight text-ink-900">
              {title}
            </h3>
          )}
        </div>
      )}
      <ul className="space-y-3">
        {items.map((item, i) => (
          <FaqRow key={i} item={item} index={i} />
        ))}
      </ul>
    </div>
  );
}

function FaqRow({ item, index }: { item: FaqItem; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <li
      className={`overflow-hidden rounded-2xl border bg-paper-50 transition-colors ${
        open ? "border-saffron-300" : "border-ink-100"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="flex items-center gap-3">
          <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-saffron-50 text-saffron-700">
            <HelpCircle className="h-3.5 w-3.5" />
          </span>
          <span className="font-medium text-ink-900">{item.q}</span>
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-ink-400 transition-transform ${
            open ? "rotate-180 text-saffron-600" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-ink-100 bg-paper-100/50 px-5 py-4 text-[14.5px] leading-relaxed text-ink-500">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
