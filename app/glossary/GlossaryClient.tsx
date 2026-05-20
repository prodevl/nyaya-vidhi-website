"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { BookOpen, Search, Sparkles } from "lucide-react";
import { glossary, glossaryTags, type GlossaryEntry } from "@/lib/glossary";
import { cn } from "@/lib/utils";

const tagColor: Record<string, string> = {
  Constitution: "bg-saffron-50 text-saffron-700 border-saffron-200",
  Criminal: "bg-india-50 text-india-700 border-india-200",
  Civil: "bg-ink-50 text-ink-700 border-ink-200",
  Procedure: "bg-paper-200/60 text-ink-700 border-ink-200",
  Contract: "bg-nile-500/10 text-nile-500 border-nile-500/30",
  Tax: "bg-marigold-500/10 text-saffron-700 border-marigold-500/30",
  Family: "bg-saffron-50 text-saffron-700 border-saffron-200",
  Consumer: "bg-terracotta-500/10 text-terracotta-500 border-terracotta-500/30",
  Property: "bg-india-50 text-india-700 border-india-200",
  IP: "bg-ink-50 text-ink-700 border-ink-200",
};

export default function GlossaryClient() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return glossary
      .filter((g) => (tag ? g.tag === tag : true))
      .filter((g) =>
        q
          ? g.term.toLowerCase().includes(q) ||
            (g.hindi && g.hindi.includes(q)) ||
            g.short.toLowerCase().includes(q) ||
            g.simple.toLowerCase().includes(q)
          : true
      )
      .sort((a, b) => a.term.localeCompare(b.term));
  }, [query, tag]);

  const grouped = useMemo(() => {
    const map = new Map<string, GlossaryEntry[]>();
    for (const e of filtered) {
      const letter = e.term[0].toUpperCase();
      if (!map.has(letter)) map.set(letter, []);
      map.get(letter)!.push(e);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-paper-200/40 via-paper-100/30 to-transparent" />
      </div>

      <div className="container-page pt-12 pb-24 lg:pt-20 lg:pb-32">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink-100 bg-paper-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-700">
            <BookOpen className="h-3.5 w-3.5" />
            Glossary · शब्दकोश
          </span>
          <h1 className="mt-5 font-serif text-display-lg font-medium tracking-tight text-balance text-ink-900">
            Big legal words — <span className="italic text-saffron-600">small explanations.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-[16px] leading-relaxed text-ink-500">
            Every legal term you'll see in this site — explained in two friendly sentences and a real-life example. Click any word to expand.
          </p>
        </div>

        {/* Search + filters */}
        <div className="sticky top-24 z-20 mt-10">
          <div className="mx-auto max-w-3xl rounded-2xl border border-ink-100 bg-paper-50/95 p-3 shadow-soft backdrop-blur">
            <div className="flex items-center gap-2 rounded-xl border border-ink-100 bg-paper-100/40 px-3">
              <Search className="h-4 w-4 text-ink-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search a word — try 'bail', 'HRA', 'writ', 'RERA'…"
                className="flex-1 bg-transparent py-2.5 text-[14.5px] text-ink-900 placeholder:text-ink-400 focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="rounded-full px-2 py-0.5 text-xs text-ink-500 hover:text-ink-900"
                >
                  Clear
                </button>
              )}
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => setTag(null)}
                className={cn(
                  "rounded-full border px-2.5 py-1 text-[11.5px] font-medium transition",
                  tag === null
                    ? "border-ink-900 bg-ink-900 text-paper-50"
                    : "border-ink-100 bg-paper-50 text-ink-700 hover:border-ink-200"
                )}
              >
                All
              </button>
              {glossaryTags.map((t) => (
                <button
                  key={t}
                  onClick={() => setTag(t === tag ? null : t)}
                  className={cn(
                    "rounded-full border px-2.5 py-1 text-[11.5px] font-medium transition",
                    tag === t
                      ? "border-saffron-400 bg-saffron-50 text-saffron-700"
                      : "border-ink-100 bg-paper-50 text-ink-700 hover:border-saffron-300 hover:text-saffron-700"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Empty state */}
        {grouped.length === 0 && (
          <div className="mx-auto mt-16 max-w-md rounded-2xl border border-ink-100 bg-paper-50 p-8 text-center">
            <Sparkles className="mx-auto h-6 w-6 text-saffron-500" />
            <p className="mt-3 font-serif text-lg text-ink-900">No word matches that.</p>
            <p className="mt-1 text-[14px] text-ink-500">
              Try a different spelling, or browse by category above.
            </p>
          </div>
        )}

        {/* Letter sections */}
        <div className="mt-10 space-y-12">
          {grouped.map(([letter, entries]) => (
            <section key={letter}>
              <div className="mb-5 flex items-baseline gap-4">
                <h2 className="font-serif text-5xl font-medium tabular text-saffron-500/70">
                  {letter}
                </h2>
                <span className="text-[11px] uppercase tracking-[0.18em] text-ink-400">
                  {entries.length} {entries.length === 1 ? "term" : "terms"}
                </span>
                <div className="h-px flex-1 bg-ink-100" />
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {entries.map((e) => (
                  <details
                    key={e.term}
                    className="group rounded-2xl border border-ink-100 bg-paper-50 p-5 transition hover:border-saffron-300 hover:shadow-soft"
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-3">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="font-serif text-[18px] font-medium leading-tight text-ink-900">
                            {e.term}
                          </p>
                          {e.hindi && (
                            <span className="devanagari text-[13px] text-ink-400">
                              {e.hindi}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-[13.5px] text-ink-500">{e.short}</p>
                      </div>
                      <span
                        className={cn(
                          "shrink-0 rounded-full border px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-[0.12em]",
                          tagColor[e.tag] ?? "bg-ink-50 text-ink-700 border-ink-100"
                        )}
                      >
                        {e.tag}
                      </span>
                    </summary>
                    <div className="mt-4 border-t border-ink-100 pt-3 text-[14px] leading-relaxed text-ink-700">
                      <p>{e.simple}</p>
                      {e.example && (
                        <p className="mt-2 rounded-lg bg-paper-100/40 px-3 py-2 text-[13px] italic text-ink-500">
                          Example: {e.example}
                        </p>
                      )}
                      {e.alsoSee && (
                        <p className="mt-3 text-[12.5px] text-ink-500">
                          See also:{" "}
                          {e.alsoSee.map((s, i) => (
                            <span key={s}>
                              <button
                                onClick={() => setQuery(s)}
                                className="underline-offset-2 text-saffron-700 hover:underline"
                              >
                                {s}
                              </button>
                              {i < (e.alsoSee?.length ?? 0) - 1 ? ", " : ""}
                            </span>
                          ))}
                        </p>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Suggest a word CTA */}
        <div className="mt-20 rounded-3xl border border-ink-100 bg-paper-50 p-8 text-center">
          <h3 className="font-serif text-2xl text-ink-900">
            Found a word that needs explaining?
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-[14.5px] text-ink-500">
            Tell us — we will add it to the glossary, in plain English, with a real-life example. The simpler we make the law, the more useful it becomes.
          </p>
          <Link
            href="/about"
            className="btn-outline mt-5 inline-flex"
          >
            Suggest a term
          </Link>
        </div>
      </div>
    </div>
  );
}
