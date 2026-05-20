"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Gavel } from "lucide-react";
import PenaltyRow from "./PenaltyRow";
import type { BriefPenaltyRow } from "@/lib/statutes/_types";

const INITIAL_ROWS = 5;

type Props = {
  rows: BriefPenaltyRow[];
  shortName: string;
  sectionId?: string;
  footnote?: string;
};

export default function PenaltyTable({
  rows,
  shortName,
  sectionId = "penalty-table",
  footnote = "Maximum punishments as prescribed by the Act. Actual sentencing depends on facts, prior convictions and judicial discretion.",
}: Props) {
  const [showAll, setShowAll] = useState(false);
  const hasOverflow = rows.length > INITIAL_ROWS;
  const visibleRows = showAll || !hasOverflow ? rows : rows.slice(0, INITIAL_ROWS);
  const hiddenCount = rows.length - INITIAL_ROWS;

  return (
    <section id={sectionId}>
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Key Sections & Penalties</p>
          <h2 className="mt-3 font-serif text-3xl font-medium leading-tight tracking-tight text-ink-900">
            {shortName} at a Glance
          </h2>
        </div>
        <span className="hidden text-xs uppercase tracking-[0.18em] text-ink-400 tabular sm:inline">
          {hasOverflow && !showAll
            ? `Showing ${INITIAL_ROWS} of ${rows.length}`
            : `${rows.length} entries`}
        </span>
      </div>

      <div className="overflow-hidden rounded-xl border border-ink-100 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[14px] text-ink-700">
            <thead className="bg-paper-100/60 text-xs font-semibold uppercase tracking-wider text-ink-500">
              <tr>
                <th className="px-5 py-3.5 border-b border-ink-100 whitespace-nowrap">Section</th>
                <th className="px-5 py-3.5 border-b border-ink-100">Type</th>
                <th className="px-5 py-3.5 border-b border-ink-100">Provision</th>
                <th className="px-5 py-3.5 border-b border-ink-100">Applicability</th>
                <th className="px-5 py-3.5 border-b border-ink-100">Details / Penalty</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-50">
              {visibleRows.map((row, i) => (
                <PenaltyRow key={`${row.section}-${i}`} row={row} />
              ))}
            </tbody>
          </table>
        </div>

        {hasOverflow && (
          <div className="border-t border-ink-100 bg-paper-50/50">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="group flex w-full items-center justify-center gap-2 px-5 py-3.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-saffron-700 transition-colors hover:bg-paper-100/70"
              aria-expanded={showAll}
            >
              {showAll ? (
                <>
                  <ChevronUp className="h-4 w-4 transition group-hover:-translate-y-0.5" />
                  Show fewer sections
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4 transition group-hover:translate-y-0.5" />
                  View {hiddenCount} more section{hiddenCount === 1 ? "" : "s"}
                </>
              )}
            </button>
          </div>
        )}
      </div>

      <p className="mt-4 flex items-start gap-2 text-[12px] leading-relaxed text-ink-400">
        <Gavel className="mt-0.5 h-3.5 w-3.5 shrink-0 text-saffron-600" />
        <span>{footnote}</span>
      </p>
    </section>
  );
}
