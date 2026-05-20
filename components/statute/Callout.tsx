import { Info, Lightbulb, AlertTriangle } from "lucide-react";
import type { CalloutVisual } from "@/lib/statutes/_types";

const tones = {
  info: {
    icon: Info,
    border: "border-india-200",
    bg: "bg-india-50/60",
    iconBg: "bg-india-100 text-india-700",
    label: "Note",
  },
  tip: {
    icon: Lightbulb,
    border: "border-saffron-200",
    bg: "bg-saffron-50/60",
    iconBg: "bg-saffron-100 text-saffron-700",
    label: "Tip",
  },
  warning: {
    icon: AlertTriangle,
    border: "border-red-200",
    bg: "bg-red-50/70",
    iconBg: "bg-red-100 text-red-700",
    label: "Watch out",
  },
};

export default function Callout({ visual }: { visual: CalloutVisual }) {
  const t = tones[visual.tone];
  const I = t.icon;
  return (
    <aside
      className={`my-6 flex gap-4 rounded-2xl border ${t.border} ${t.bg} p-5`}
    >
      <span
        className={`mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${t.iconBg}`}
      >
        <I className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500">
          {t.label}
        </p>
        <p className="mt-1 font-serif text-[16px] font-medium leading-tight text-ink-900">
          {visual.title}
        </p>
        <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
          {visual.body}
        </p>
      </div>
    </aside>
  );
}
