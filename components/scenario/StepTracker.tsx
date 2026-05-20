"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, ListChecks, Sparkles } from "lucide-react";

type Step = { title: string; description: string };

export default function StepTracker({
  slug,
  steps,
}: {
  slug: string;
  steps: Step[];
}) {
  const storageKey = `nv-progress-${slug}`;
  const [done, setDone] = useState<number[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setDone(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, [storageKey]);

  const persist = (next: number[]) => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(next));
    } catch {}
  };

  const toggle = (i: number) => {
    setDone((d) => {
      const next = d.includes(i) ? d.filter((x) => x !== i) : [...d, i];
      persist(next);
      return next;
    });
  };

  const reset = () => {
    setDone([]);
    try {
      localStorage.removeItem(storageKey);
    } catch {}
  };

  const completedCount = done.length;
  const total = steps.length;
  const pct = total > 0 ? Math.round((completedCount / total) * 100) : 0;
  const allDone = hydrated && completedCount === total && total > 0;

  return (
    <section
      aria-labelledby="steps-heading"
      className="card-heritage overflow-hidden"
    >
      <header className="border-b border-ink-100 bg-ink-50/40 px-6 py-5 sm:px-8">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <ListChecks className="h-5 w-5 text-ink-600" />
            <h2
              id="steps-heading"
              className="font-serif text-xl font-medium text-ink-900"
            >
              Steps to take
            </h2>
          </div>
          <span className="tabular text-[12px] font-medium text-ink-500">
            {completedCount} of {total} done
          </span>
        </div>

        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-ink-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-saffron-400 via-saffron-500 to-saffron-600 transition-[width] duration-500 ease-out"
            style={{ width: `${pct}%` }}
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={pct}
          />
        </div>

        {allDone && (
          <div className="mt-3 flex items-center gap-2 rounded-lg bg-india-50 px-3 py-2 text-[12.5px] font-medium text-india-600">
            <Sparkles className="h-3.5 w-3.5 shrink-0" />
            <span className="flex-1">All steps complete — you're well prepared.</span>
            <button
              onClick={reset}
              className="text-[11px] text-india-600/70 underline-offset-2 hover:text-india-600 hover:underline"
            >
              Reset
            </button>
          </div>
        )}

        <p className="mt-3 hidden text-[12px] text-ink-400 print:hidden md:block">
          Tip: tick steps as you complete them — your progress saves automatically on this device.
        </p>
      </header>

      <ol className="divide-y divide-ink-100">
        {steps.map((step, i) => {
          const isDone = done.includes(i);
          return (
            <li key={i}>
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-pressed={isDone}
                className="group flex w-full items-start gap-4 px-6 py-5 text-left transition-colors hover:bg-paper-100/60 sm:px-8"
              >
                <span
                  className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[12px] font-semibold transition-all duration-200 ${
                    isDone
                      ? "border-india-500 bg-india-500 text-white"
                      : "border-ink-200 bg-white text-ink-400 group-hover:border-saffron-400 group-hover:text-saffron-600"
                  }`}
                >
                  {isDone ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <span>{i + 1}</span>
                  )}
                </span>
                <div className="min-w-0 flex-1">
                  <h3
                    className={`text-[16px] font-medium leading-tight transition-colors ${
                      isDone ? "text-ink-400 line-through" : "text-ink-900"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`mt-1 text-[14.5px] leading-relaxed ${
                      isDone ? "text-ink-300" : "text-ink-600"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </button>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
