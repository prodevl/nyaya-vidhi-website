import { Gavel, ShieldAlert, AlertTriangle, Flame } from "lucide-react";
import type { PenaltyMatrixVisual, PenaltyEntry } from "@/lib/statutes/_types";

const severityStyles: Record<
  NonNullable<PenaltyEntry["severity"]>,
  { dot: string; chip: string; icon: typeof Gavel }
> = {
  minor: {
    dot: "bg-india-200 ring-india-300",
    chip: "border-india-200 bg-india-50 text-india-700",
    icon: Gavel,
  },
  moderate: {
    dot: "bg-saffron-200 ring-saffron-300",
    chip: "border-saffron-200 bg-saffron-50 text-saffron-700",
    icon: AlertTriangle,
  },
  serious: {
    dot: "bg-saffron-500 ring-saffron-400",
    chip: "border-saffron-400 bg-saffron-100 text-saffron-800",
    icon: ShieldAlert,
  },
  grave: {
    dot: "bg-red-500 ring-red-400",
    chip: "border-red-300 bg-red-50 text-red-700",
    icon: Flame,
  },
};

export default function PenaltyMatrix({
  visual,
}: {
  visual: PenaltyMatrixVisual;
}) {
  return (
    <figure className="my-8 overflow-hidden rounded-3xl border border-ink-100 bg-paper-50">
      <figcaption className="border-b border-ink-100 px-6 py-5">
        <p className="eyebrow">Penalty matrix</p>
        <h4 className="mt-2 font-serif text-xl font-medium tracking-tight text-ink-900">
          {visual.title}
        </h4>
        {visual.caption && (
          <p className="mt-1.5 max-w-2xl text-[13.5px] leading-relaxed text-ink-500">
            {visual.caption}
          </p>
        )}
      </figcaption>

      <ul className="divide-y divide-ink-100">
        {visual.entries.map((e, i) => {
          const sev = severityStyles[e.severity ?? "moderate"];
          const Icon = sev.icon;
          return (
            <li
              key={i}
              className="grid grid-cols-12 gap-4 px-6 py-4 transition-colors hover:bg-paper-100"
            >
              <div className="col-span-12 flex items-start gap-3 sm:col-span-5">
                <span
                  className={`mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-paper-100 ${sev.chip} border`}
                >
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <div className="min-w-0">
                  <p className="font-serif text-[15.5px] font-medium leading-tight text-ink-900">
                    {e.offence}
                  </p>
                  <p className="mt-1 inline-flex font-mono text-[10.5px] font-semibold uppercase tracking-wider text-ink-400">
                    {e.ref}
                  </p>
                </div>
              </div>
              <div className="col-span-12 text-[14px] leading-relaxed text-ink-500 sm:col-span-7">
                {e.punishment}
                {e.flags && e.flags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {e.flags.map((f) => (
                      <span
                        key={f}
                        className="inline-flex items-center rounded-full border border-ink-100 bg-paper-50 px-2 py-0.5 text-[10.5px] uppercase tracking-wider text-ink-500"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </figure>
  );
}
