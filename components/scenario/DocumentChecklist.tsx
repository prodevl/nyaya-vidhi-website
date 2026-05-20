"use client";

import { useEffect, useState } from "react";
import { Check, FileText } from "lucide-react";

export default function DocumentChecklist({
  slug,
  documents,
}: {
  slug: string;
  documents: string[];
}) {
  const storageKey = `nv-docs-${slug}`;
  const [checked, setChecked] = useState<number[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setChecked(JSON.parse(raw));
    } catch {}
  }, [storageKey]);

  const toggle = (i: number) => {
    setChecked((c) => {
      const next = c.includes(i) ? c.filter((x) => x !== i) : [...c, i];
      try {
        localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  return (
    <div className="card-heritage p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <FileText className="h-5 w-5 text-ink-500" />
          <h2 className="font-serif text-[18px] font-medium text-ink-900">
            Documents to gather
          </h2>
        </div>
        <span className="tabular text-[12px] font-medium text-ink-500">
          {checked.length}/{documents.length}
        </span>
      </div>

      <ul className="space-y-1">
        {documents.map((doc, i) => {
          const isChecked = checked.includes(i);
          return (
            <li key={i}>
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-pressed={isChecked}
                className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left text-[14px] transition-colors hover:bg-paper-100"
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-all duration-200 ${
                    isChecked
                      ? "border-india-500 bg-india-500 text-white"
                      : "border-ink-200 bg-white"
                  }`}
                >
                  {isChecked && <Check className="h-3 w-3" strokeWidth={3} />}
                </span>
                <span
                  className={
                    isChecked ? "text-ink-400 line-through" : "text-ink-700"
                  }
                >
                  {doc}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
