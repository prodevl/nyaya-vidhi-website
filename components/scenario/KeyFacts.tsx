import { AlertTriangle, Clock, FileText, ListChecks, MapPin } from "lucide-react";
import type { ScenarioDetail } from "@/app/know-your-rights/data";

const URGENT_TAGS = new Set(["Criminal", "POSH"]);

function shortWhere(where: string): string {
  // Take the first comma/sentence segment, cap at 36 chars.
  const first = where.split(/[,.]/)[0]?.trim() || where;
  return first.length > 36 ? first.slice(0, 33) + "…" : first;
}

export default function KeyFacts({ scenario }: { scenario: ScenarioDetail }) {
  const urgent = URGENT_TAGS.has(scenario.tag);
  const readMins = Math.max(2, Math.ceil(scenario.steps.length * 0.8));

  return (
    <div className="flex flex-wrap items-center gap-2">
      {urgent && (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-saffron-200 bg-saffron-50 px-2.5 py-1 text-[11.5px] font-medium text-saffron-700">
          <AlertTriangle className="h-3 w-3" /> Time-sensitive
        </span>
      )}
      <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-100 bg-paper-50 px-2.5 py-1 text-[11.5px] text-ink-600">
        <ListChecks className="h-3 w-3" /> {scenario.steps.length} steps
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-100 bg-paper-50 px-2.5 py-1 text-[11.5px] text-ink-600">
        <FileText className="h-3 w-3" /> {scenario.documents.length} documents
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-100 bg-paper-50 px-2.5 py-1 text-[11.5px] text-ink-600">
        <Clock className="h-3 w-3" /> ~{readMins} min read
      </span>
      <span
        className="hidden items-center gap-1.5 rounded-full border border-ink-100 bg-paper-50 px-2.5 py-1 text-[11.5px] text-ink-600 sm:inline-flex"
        title={scenario.whereToGo}
      >
        <MapPin className="h-3 w-3" /> {shortWhere(scenario.whereToGo)}
      </span>
    </div>
  );
}
