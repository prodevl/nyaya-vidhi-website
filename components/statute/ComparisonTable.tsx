import { ArrowRight } from "lucide-react";
import type { ComparisonTableVisual } from "@/lib/statutes/_types";

/**
 * Two-column "old vs new" comparison (e.g., IPC ↔ BNS).
 */
export default function ComparisonTable({
  visual,
}: {
  visual: ComparisonTableVisual;
}) {
  const [leftHead, rightHead] = visual.columns;

  return (
    <figure className="my-8 overflow-hidden rounded-3xl border border-ink-100 bg-paper-50">
      <figcaption className="border-b border-ink-100 px-6 py-5">
        <p className="eyebrow">Old vs new</p>
        <h4 className="mt-2 font-serif text-xl font-medium tracking-tight text-ink-900">
          {visual.title}
        </h4>
        {visual.caption && (
          <p className="mt-1.5 max-w-2xl text-[13.5px] leading-relaxed text-ink-500">
            {visual.caption}
          </p>
        )}
      </figcaption>

      <div className="grid grid-cols-12 gap-3 border-b border-ink-100 bg-paper-100/60 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-400">
        <div className="col-span-5">{leftHead}</div>
        <div className="col-span-2 text-center">→</div>
        <div className="col-span-5">{rightHead}</div>
      </div>

      <ul className="divide-y divide-ink-100">
        {visual.rows.map((row, i) => (
          <li
            key={i}
            className="grid grid-cols-12 gap-3 px-6 py-4 transition-colors hover:bg-paper-100"
          >
            <div className="col-span-5 text-[14px] leading-relaxed text-ink-500">
              {row.left}
            </div>
            <div className="col-span-2 flex items-center justify-center text-saffron-500">
              <ArrowRight className="h-4 w-4" />
            </div>
            <div className="col-span-5 text-[14px] leading-relaxed text-ink-900">
              {row.right}
            </div>
            {row.note && (
              <p className="col-span-12 mt-1 text-[12.5px] italic text-ink-400">
                {row.note}
              </p>
            )}
          </li>
        ))}
      </ul>
    </figure>
  );
}
