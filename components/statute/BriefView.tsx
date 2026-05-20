"use client";
import Link from "next/link";
import { ExternalLink, FileText, Gavel, ShieldAlert, Globe } from "lucide-react";
import PenaltyTable from "./PenaltyTable";
import type { ActBrief, StatuteMeta } from "@/lib/statutes/_types";

type Props = {
  brief: ActBrief;
  meta: StatuteMeta;
};

/**
 * Lightweight statute view used when an Act has a `brief` but isn't authored
 * at MVP/deep depth. Shows:
 *   - one-line "what is this law"
 *   - headline punishments
 *   - optional section-by-section penalty matrix (when brief.penaltyTable exists)
 *   - both sources (local PDF + online citation)
 */
export default function BriefView({ brief, meta }: Props) {
  const pdf = meta.sourcePdf;
  return (
    <div className="space-y-14">
      {/* One-liner */}
      <section id="what-is-this">
        <p className="eyebrow">In one line</p>
        <h2 className="mt-3 font-serif text-3xl font-medium leading-tight tracking-tight text-ink-900">
          What this Act says
        </h2>
        <blockquote className="mt-6 border-l-2 border-saffron-500 bg-paper-100/60 px-6 py-5 font-serif text-[18px] leading-[1.6] text-ink-900">
          {brief.oneLiner}
        </blockquote>
      </section>

      {/* Headline punishments */}
      <section id="punishments">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Penalties</p>
            <h2 className="mt-3 font-serif text-3xl font-medium leading-tight tracking-tight text-ink-900">
              What happens if you break it
            </h2>
          </div>
          <span className="hidden text-xs uppercase tracking-[0.18em] text-ink-400 tabular sm:inline">
            {brief.punishments.length} headline offence
            {brief.punishments.length === 1 ? "" : "s"}
          </span>
        </div>

        <ul className="space-y-3">
          {brief.punishments.map((p, i) => (
            <li key={i} className="card-heritage flex items-start gap-4 p-5">
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-saffron-50 text-saffron-700">
                <Gavel className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <p className="font-serif text-[16px] font-medium leading-snug text-ink-900">
                    {p.offence}
                  </p>
                  {p.section && (
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-saffron-700 tabular">
                      {p.section}
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-[14px] leading-relaxed text-ink-500">
                  {p.punishment}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-5 flex items-start gap-2 text-[12px] leading-relaxed text-ink-400">
          <ShieldAlert className="mt-0.5 h-3.5 w-3.5 shrink-0 text-saffron-600" />
          <span>
            Headline offences only — not exhaustive. For the full text and every
            section, open the source PDF or the official link below.
          </span>
        </p>
      </section>

      {/* Penalty matrix — section-by-section table */}
      {brief.penaltyTable && brief.penaltyTable.length > 0 && (
        <PenaltyTable rows={brief.penaltyTable} shortName={meta.shortName} />
      )}

      {/* Sources */}
      <section id="source">
        <p className="eyebrow">Sources</p>
        <h2 className="mt-3 font-serif text-3xl font-medium leading-tight tracking-tight text-ink-900">
          Read the Act yourself
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-500">
          We always show you the local source PDF and at least one verifiable
          online reference, so you can check anything we say.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Link
            href={pdf.pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 rounded-2xl border border-ink-100 bg-paper-50 p-5 transition-all hover:border-saffron-300 hover:bg-paper-100"
          >
            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-saffron-50 text-saffron-700 group-hover:bg-saffron-100">
              <FileText className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-400">
                Source PDF
              </p>
              <p className="mt-1 truncate font-serif text-[15px] font-medium leading-tight text-ink-900">
                {pdf.pdfFile}
              </p>
              <p className="mt-1.5 text-[12px] text-ink-500 tabular">
                Full text · opens in new tab
              </p>
            </div>
            <ExternalLink className="h-4 w-4 shrink-0 text-ink-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-saffron-600" />
          </Link>

          <Link
            href={brief.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 rounded-2xl border border-ink-100 bg-paper-50 p-5 transition-all hover:border-saffron-300 hover:bg-paper-100"
          >
            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-saffron-50 text-saffron-700 group-hover:bg-saffron-100">
              <Globe className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-400">
                Reference
              </p>
              <p className="mt-1 truncate font-serif text-[15px] font-medium leading-tight text-ink-900">
                {brief.sourceName}
              </p>
              <p className="mt-1.5 truncate text-[12px] text-ink-500">
                {hostnameOf(brief.sourceUrl)} · opens in new tab
              </p>
            </div>
            <ExternalLink className="h-4 w-4 shrink-0 text-ink-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-saffron-600" />
          </Link>
        </div>

        {brief.secondarySourceUrl && brief.secondarySourceName && (
          <Link
            href={brief.secondarySourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium text-saffron-700 hover:text-saffron-600"
          >
            <Globe className="h-3.5 w-3.5" />
            Also see: {brief.secondarySourceName}
            <ExternalLink className="h-3 w-3" />
          </Link>
        )}
      </section>
    </div>
  );
}

function hostnameOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}
