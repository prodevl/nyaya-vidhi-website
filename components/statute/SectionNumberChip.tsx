"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  /** e.g. "Section 138" or "Article 21" */
  label: string;
  /** e.g. "138" or "21" — used for the copy text */
  number: string;
  /** Optional statute short name appended on copy, e.g. "NI Act" */
  statuteShort?: string;
  className?: string;
};

/**
 * Big, prominent badge that displays the section/article number
 * at the top of every section page. Click to copy a citation-friendly string.
 */
export default function SectionNumberChip({
  label,
  number,
  statuteShort,
  className,
}: Props) {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    const text = statuteShort ? `${label}, ${statuteShort}` : label;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <button
      onClick={onCopy}
      title="Click to copy citation"
      className={cn(
        "group inline-flex items-center gap-3 rounded-2xl border border-saffron-200 bg-saffron-50 px-4 py-2.5 text-saffron-900 transition-all hover:border-saffron-300 hover:bg-saffron-100",
        className
      )}
    >
      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-saffron-700">
        {label.split(" ")[0]}
      </span>
      <span className="font-serif text-2xl font-medium tabular leading-none">
        {number}
      </span>
      <span className="ml-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-saffron-100 text-saffron-700 transition group-hover:bg-saffron-200">
        {copied ? (
          <Check className="h-3.5 w-3.5" />
        ) : (
          <Copy className="h-3.5 w-3.5" />
        )}
      </span>
    </button>
  );
}
