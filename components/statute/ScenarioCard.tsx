import { ArrowRight, Sparkles } from "lucide-react";
import type { Scenario } from "@/lib/statutes/_types";

type Props = {
  scenario: Scenario;
  /** "panel" = full block, "compact" = single column */
  variant?: "panel" | "compact";
};

/**
 * "Imagine this happens to you" walkthrough card.
 * Setup → Outcome → which section answers it.
 */
export default function ScenarioCard({ scenario, variant = "panel" }: Props) {
  const compact = variant === "compact";

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-india-200 bg-india-50/40 p-5 transition-all hover:border-india-400/60 hover:bg-india-50/70 ${
        compact ? "" : "sm:p-6"
      }`}
    >
      <div className="flex items-center gap-2 text-india-600">
        <Sparkles className="h-3.5 w-3.5" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">
          Real-life scenario
        </span>
      </div>
      <h4 className="mt-3 font-serif text-[18px] font-medium leading-tight text-ink-900">
        {scenario.title}
      </h4>
      <p className="mt-3 text-[14.5px] leading-relaxed text-ink-500">
        <span className="font-medium text-ink-900">Setup. </span>
        {scenario.setup}
      </p>
      <p className="mt-3 text-[14.5px] leading-relaxed text-ink-500">
        <span className="font-medium text-ink-900">What the law does. </span>
        {scenario.outcome}
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-india-200/60 pt-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-india-100 px-2.5 py-1 text-[11px] font-medium text-india-700">
          Applies under {scenario.appliesUnder}
        </span>
        {scenario.consequence && (
          <span className="text-[12px] text-ink-500">
            {scenario.consequence}
          </span>
        )}
      </div>
    </article>
  );
}

export function ScenarioGrid({ scenarios }: { scenarios: Scenario[] }) {
  if (!scenarios.length) return null;
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {scenarios.map((s, i) => (
        <ScenarioCard key={i} scenario={s} />
      ))}
    </div>
  );
}
