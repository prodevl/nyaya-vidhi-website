"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type LegalSection = {
  id: string;
  number: string;
  title: string;
  body: React.ReactNode;
};

type LegalPageProps = {
  eyebrow: string;
  sanskrit?: string;
  title: string;
  description: string;
  effectiveDate: string;
  lastUpdated: string;
  version?: string;
  preamble?: React.ReactNode;
  sections: LegalSection[];
  governingLaw?: string;
};

export default function LegalPage({
  eyebrow,
  sanskrit,
  title,
  description,
  effectiveDate,
  lastUpdated,
  version = "1.0",
  preamble,
  sections,
  governingLaw,
}: LegalPageProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <>
      {/* Header */}
      <header className="relative overflow-hidden border-b border-ink-100/70 pb-14 pt-12 lg:pt-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-saffron-50/50 to-transparent" />
          <div className="absolute inset-0 pattern-jaali-fine mask-fade-b opacity-25" />
        </div>

        <div className="container-narrow">
          <nav
            className="mb-6 flex items-center gap-1.5 text-xs text-ink-400"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-saffron-600">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-ink-400" />
            <span className="text-ink-500">Legal</span>
            <ChevronRight className="h-3 w-3 text-ink-400" />
            <span className="text-ink-500">{eyebrow}</span>
          </nav>

          <p className="eyebrow">{eyebrow}</p>
          {sanskrit && (
            <p className="devanagari mt-4 text-sm text-ink-400">{sanskrit}</p>
          )}
          <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-[17px] leading-relaxed text-ink-500">
            {description}
          </p>

          {/* Meta strip */}
          <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-ink-100 pt-6 text-xs sm:grid-cols-4">
            <div>
              <dt className="font-semibold uppercase tracking-[0.14em] text-ink-400">
                Effective
              </dt>
              <dd className="mt-1 font-medium text-ink-900 tabular">
                {effectiveDate}
              </dd>
            </div>
            <div>
              <dt className="font-semibold uppercase tracking-[0.14em] text-ink-400">
                Last updated
              </dt>
              <dd className="mt-1 font-medium text-ink-900 tabular">
                {lastUpdated}
              </dd>
            </div>
            <div>
              <dt className="font-semibold uppercase tracking-[0.14em] text-ink-400">
                Version
              </dt>
              <dd className="mt-1 font-medium text-ink-900 tabular">
                v{version}
              </dd>
            </div>
            <div>
              <dt className="font-semibold uppercase tracking-[0.14em] text-ink-400">
                Jurisdiction
              </dt>
              <dd className="mt-1 font-medium text-ink-900">
                {governingLaw ?? "Republic of India"}
              </dd>
            </div>
          </dl>
        </div>
      </header>

      {/* Body */}
      <section className="container-page py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* TOC */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-400">
                Contents
              </p>
              <nav className="mt-4 border-l border-ink-100">
                <ol className="space-y-px">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className={cn(
                          "block border-l-2 -ml-px py-1.5 pl-4 text-[13px] leading-snug transition-colors",
                          activeId === s.id
                            ? "border-saffron-500 font-medium text-ink-900"
                            : "border-transparent text-ink-400 hover:border-ink-200 hover:text-ink-900"
                        )}
                      >
                        <span className="tabular text-ink-300 mr-2">
                          {s.number}
                        </span>
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </aside>

          {/* Content */}
          <article className="lg:col-span-9">
            {preamble && (
              <div className="mb-12 rounded-2xl border border-ink-100 bg-paper-50 p-6 sm:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-saffron-600">
                  Preamble
                </p>
                <div className="prose-legal mt-3">{preamble}</div>
              </div>
            )}

            <div className="prose-legal space-y-14">
              {sections.map((s) => (
                <section
                  key={s.id}
                  id={s.id}
                  className="scroll-mt-24"
                  aria-labelledby={`${s.id}-title`}
                >
                  <div className="flex items-baseline gap-3 border-b border-ink-100 pb-3">
                    <span className="font-serif text-base font-medium text-saffron-600 tabular">
                      §{s.number}
                    </span>
                    <h2
                      id={`${s.id}-title`}
                      className="font-serif text-2xl font-medium tracking-tight text-ink-900 sm:text-[28px]"
                    >
                      {s.title}
                    </h2>
                  </div>
                  <div className="mt-5">{s.body}</div>
                </section>
              ))}
            </div>

            {/* Footer note */}
            <div className="mt-16 rounded-2xl border border-ink-100 bg-paper-100/60 p-6 text-[13px] leading-relaxed text-ink-500">
              <p>
                <span className="font-semibold text-ink-900">Notice.</span>{" "}
                This document is governed by the laws of the Republic of India
                and is to be read in conjunction with our{" "}
                <Link
                  href="/disclaimer"
                  className="text-saffron-700 underline-offset-2 hover:underline"
                >
                  Disclaimer
                </Link>
                ,{" "}
                <Link
                  href="/privacy"
                  className="text-saffron-700 underline-offset-2 hover:underline"
                >
                  Privacy Policy
                </Link>
                , and{" "}
                <Link
                  href="/terms"
                  className="text-saffron-700 underline-offset-2 hover:underline"
                >
                  Terms of Use
                </Link>
                . If any provision is found unenforceable, the remaining
                provisions shall continue in full force and effect.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
