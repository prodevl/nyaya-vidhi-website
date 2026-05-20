import type { Coverage } from "@/lib/statutes/_types";

const styles: Record<Coverage, { dot: string; bg: string; text: string; label: string }> = {
  "not-started": {
    dot: "bg-ink-200",
    bg: "bg-ink-50 border-ink-100",
    text: "text-ink-500",
    label: "Not started",
  },
  brief: {
    dot: "bg-sky-500",
    bg: "bg-sky-50 border-sky-200",
    text: "text-sky-700",
    label: "Brief",
  },
  "in-progress": {
    dot: "bg-saffron-500 animate-pulse",
    bg: "bg-saffron-50 border-saffron-200",
    text: "text-saffron-700",
    label: "In progress",
  },
  mvp: {
    dot: "bg-emerald-500",
    bg: "bg-emerald-50 border-emerald-200",
    text: "text-emerald-700",
    label: "MVP",
  },
  complete: {
    dot: "bg-india-500",
    bg: "bg-india-50 border-india-200",
    text: "text-india-700",
    label: "Showcase",
  },
};

export default function StatuteStatusBadge({
  coverage,
  size = "sm",
}: {
  coverage: Coverage;
  size?: "sm" | "md";
}) {
  const s = styles[coverage];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border ${s.bg} ${s.text} ${
        size === "md" ? "px-3 py-1 text-[12px]" : "px-2.5 py-0.5 text-[11px]"
      } font-medium`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
      {s.label}
    </span>
  );
}
