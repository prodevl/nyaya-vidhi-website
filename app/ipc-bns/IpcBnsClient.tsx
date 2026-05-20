"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowRightLeft, Gavel, Search, Sparkles } from "lucide-react";
import { ipcCategories, ipcToBns } from "@/lib/ipc-bns";
import { cn } from "@/lib/utils";

export default function IpcBnsClient() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ipcToBns
      .filter((s) => (cat ? s.category === cat : true))
      .filter((s) =>
        q
          ? s.ipc.toLowerCase().includes(q) ||
            s.bns.toLowerCase().includes(q) ||
            s.ipcTitle.toLowerCase().includes(q) ||
            s.bnsTitle.toLowerCase().includes(q)
          : true
      );
  }, [query, cat]);

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-saffron-50/60 via-paper-100/30 to-transparent" />
      </div>

      <div className="container-page pt-12 pb-24 lg:pt-20 lg:pb-32">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-india-200 bg-paper-50/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-india-700">
            <ArrowRightLeft className="h-3.5 w-3.5" />
            IPC → BNS · Section Mapper
          </span>
          <h1 className="mt-5 font-serif text-display-lg font-medium tracking-tight text-balance text-ink-900">
            Old section, <span className="italic text-saffron-600">new code.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-[16px] leading-relaxed text-ink-500">
            India's criminal law was rewritten in 2023. Type any old IPC number (like 302, 420, 498A)
            — see the new Bharatiya Nyaya Sanhita section, the punishment, and what changed.
          </p>
        </div>

        {/* Search & categories */}
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="flex items-center gap-2 rounded-2xl border border-ink-100 bg-paper-50/95 p-2 shadow-soft backdrop-blur">
            <span className="pl-3 text-ink-400">
              <Search className="h-4 w-4" />
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try '302', '420', 'cheating', 'rape'…"
              className="flex-1 bg-transparent px-2 py-2.5 text-[14.5px] text-ink-900 placeholder:text-ink-400 focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="rounded-full px-3 py-1.5 text-xs text-ink-500 hover:text-ink-900"
              >
                Clear
              </button>
            )}
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-1.5">
            <button
              onClick={() => setCat(null)}
              className={cn(
                "rounded-full border px-2.5 py-1 text-[11.5px] font-medium transition",
                cat === null
                  ? "border-ink-900 bg-ink-900 text-paper-50"
                  : "border-ink-100 bg-paper-50 text-ink-700 hover:border-ink-200"
              )}
            >
              All
            </button>
            {ipcCategories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c === cat ? null : c)}
                className={cn(
                  "rounded-full border px-2.5 py-1 text-[11.5px] font-medium transition",
                  cat === c
                    ? "border-saffron-400 bg-saffron-50 text-saffron-700"
                    : "border-ink-100 bg-paper-50 text-ink-700 hover:border-saffron-300 hover:text-saffron-700"
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <p className="mt-3 text-center text-[12px] text-ink-400">
            Showing {filtered.length} of {ipcToBns.length} mappings
          </p>
        </div>

        {/* Result list */}
        {filtered.length === 0 ? (
          <div className="mx-auto mt-16 max-w-md rounded-2xl border border-ink-100 bg-paper-50 p-8 text-center">
            <Sparkles className="mx-auto h-6 w-6 text-saffron-500" />
            <p className="mt-3 font-serif text-lg text-ink-900">Nothing matched.</p>
            <p className="mt-1 text-[14px] text-ink-500">
              We have 50+ common sections. If yours isn't here yet, tell us and we'll add it.
            </p>
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {filtered.map((s, i) => (
              <article
                key={`${s.ipc}-${s.bns}-${i}`}
                className="group overflow-hidden rounded-2xl border border-ink-100 bg-paper-50 transition hover:border-saffron-300 hover:shadow-soft"
              >
                {/* head strip */}
                <div className="flex items-center justify-between border-b border-ink-100 bg-paper-100/40 px-5 py-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-ink-900 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-paper-50">
                    <Gavel className="h-3 w-3" />
                    {s.category}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
                  {/* IPC */}
                  <div className="p-5">
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                      IPC · 1860
                    </p>
                    <p className="mt-2 font-serif text-3xl tabular text-ink-700">{s.ipc}</p>
                    <p className="mt-1.5 text-[13.5px] leading-snug text-ink-500">{s.ipcTitle}</p>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center justify-center px-2 md:border-l md:border-r md:border-ink-100">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-saffron-100 text-saffron-700 transition group-hover:bg-saffron-500 group-hover:text-paper-50">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>

                  {/* BNS */}
                  <div className="p-5">
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-saffron-700">
                      BNS · 2023
                    </p>
                    <p className="mt-2 font-serif text-3xl tabular text-ink-900">{s.bns}</p>
                    <p className="mt-1.5 text-[13.5px] leading-snug text-ink-700">{s.bnsTitle}</p>
                  </div>
                </div>

                <div className="border-t border-ink-100 px-5 py-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">
                    Punishment
                  </p>
                  <p className="mt-1 text-[13.5px] text-ink-700">{s.punishment}</p>
                  {s.whatChanged && (
                    <div className="mt-3 rounded-lg border border-saffron-200 bg-saffron-50/60 p-3">
                      <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-saffron-700">
                        What changed
                      </p>
                      <p className="mt-1 text-[13px] leading-relaxed text-ink-700">
                        {s.whatChanged}
                      </p>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Educational footer */}
        <div className="mx-auto mt-16 max-w-3xl rounded-3xl border border-ink-100 bg-paper-50 p-8">
          <p className="eyebrow">क्यों ज़रूरी · Why this matters</p>
          <h3 className="mt-2 font-serif text-2xl text-ink-900">
            India's biggest criminal-law reform in 160 years.
          </h3>
          <p className="mt-3 text-[14.5px] leading-relaxed text-ink-700">
            On 1 July 2024, the Indian Penal Code, the Code of Criminal Procedure, and the Indian Evidence Act
            were replaced by the Bharatiya Nyaya Sanhita (BNS), Bharatiya Nagarik Suraksha Sanhita (BNSS), and
            Bharatiya Sakshya Adhiniyam (BSA).
          </p>
          <p className="mt-2 text-[14.5px] leading-relaxed text-ink-700">
            New offences (organised crime, mob lynching, terrorism). New procedure (e-FIR, time-bound trials,
            video-based recording). And new evidence rules (digital evidence is now primary).
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link href="/laws/criminal-laws" className="btn-outline">
              Read the BNS guide
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link href="/ask" className="btn-saffron">
              Ask Nyaya Mitra
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
