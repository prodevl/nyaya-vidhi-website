import Link from "next/link";
import { Book, Link2, Scale } from "lucide-react";
import type {
  CaseRef,
  CrossRef,
  Definition,
  ProcedureStep,
} from "@/lib/statutes/_types";

// ---------- Definitions list ----------

export function DefinitionList({ defines }: { defines?: Definition[] }) {
  if (!defines?.length) return null;
  return (
    <div className="my-6 rounded-2xl border border-ink-100 bg-paper-50 p-5">
      <p className="eyebrow">Defined terms</p>
      <h4 className="mt-2 font-serif text-lg font-medium text-ink-900">
        How the Act defines the words it uses
      </h4>
      <dl className="mt-4 divide-y divide-ink-100">
        {defines.map((d, i) => (
          <div key={i} className="grid grid-cols-12 gap-4 py-3 first:pt-0 last:pb-0">
            <dt className="col-span-12 font-mono text-[12px] font-semibold uppercase tracking-wider text-saffron-700 sm:col-span-3">
              {d.term}
              {d.sourceSection && (
                <span className="ml-1.5 text-ink-400">§{d.sourceSection}</span>
              )}
            </dt>
            <dd className="col-span-12 text-[14px] leading-relaxed text-ink-500 sm:col-span-9">
              {d.definition}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

// ---------- Procedure ----------

export function ProcedureList({ steps }: { steps?: ProcedureStep[] }) {
  if (!steps?.length) return null;
  return (
    <div className="my-6">
      <p className="eyebrow">Step by step</p>
      <h4 className="mt-2 font-serif text-xl font-medium tracking-tight text-ink-900">
        How the procedure works
      </h4>
      <ol className="mt-5 space-y-4">
        {steps.map((s) => (
          <li key={s.step} className="flex items-start gap-4">
            <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-saffron-200 bg-saffron-50 font-serif text-base font-semibold text-saffron-700 tabular">
              {s.step}
            </span>
            <div>
              <p className="font-serif text-[16px] font-medium leading-tight text-ink-900">
                {s.title}
              </p>
              <p className="mt-1 text-[14px] leading-relaxed text-ink-500">
                {s.body}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5 text-[11px]">
                {s.actor && (
                  <span className="inline-flex items-center rounded-full border border-ink-100 bg-paper-50 px-2 py-0.5 text-ink-500">
                    Actor: <strong className="ml-1 font-medium text-ink-900">{s.actor}</strong>
                  </span>
                )}
                {s.timeline && (
                  <span className="inline-flex items-center rounded-full border border-saffron-200 bg-saffron-50 px-2 py-0.5 text-saffron-700">
                    {s.timeline}
                  </span>
                )}
                {s.ref && (
                  <span className="inline-flex items-center rounded-full border border-india-200 bg-india-50 px-2 py-0.5 font-mono uppercase tracking-wider text-india-700">
                    {s.ref}
                  </span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

// ---------- Cross references ----------

export function CrossRefChips({ refs }: { refs?: CrossRef[] }) {
  if (!refs?.length) return null;
  return (
    <div className="my-6">
      <p className="eyebrow">Cross-references</p>
      <h4 className="mt-2 font-serif text-lg font-medium text-ink-900">
        Read this alongside
      </h4>
      <ul className="mt-4 flex flex-wrap gap-2">
        {refs.map((r, i) => (
          <li
            key={i}
            className="inline-flex items-center gap-2 rounded-full border border-ink-100 bg-paper-50 px-3 py-1.5 text-[12.5px] text-ink-500"
          >
            <Link2 className="h-3.5 w-3.5 text-saffron-600" />
            <span className="font-medium text-ink-900">{r.statute}</span>
            <span className="font-mono text-saffron-700">§{r.section}</span>
            <span className="text-ink-400">·</span>
            <span>{r.note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ---------- Cases ----------

export function CaseList({ cases }: { cases?: CaseRef[] }) {
  if (!cases?.length) return null;
  return (
    <div className="my-6">
      <p className="eyebrow">Landmark cases</p>
      <h4 className="mt-2 font-serif text-xl font-medium tracking-tight text-ink-900">
        How the courts have read this
      </h4>
      <ul className="mt-4 space-y-3">
        {cases.map((c, i) => (
          <li key={i} className="card-heritage flex items-start gap-4 p-5">
            <Scale className="mt-1 h-5 w-5 shrink-0 text-saffron-600" />
            <div className="min-w-0">
              <p className="font-serif text-[16px] font-medium italic leading-tight text-ink-900">
                {c.name}
              </p>
              <p className="mt-1 text-[12px] uppercase tracking-wider text-ink-400 tabular">
                {c.court} · {c.year} · {c.citation}
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
                {c.ratio}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
