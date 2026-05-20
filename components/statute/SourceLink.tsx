import Link from "next/link";
import { ExternalLink, FileText } from "lucide-react";
import type { Source } from "@/lib/statutes/_types";

type Props = {
  source: Source;
  /** Optional override label, e.g. "Read source PDF" */
  label?: string;
  /** "compact" renders inline; "card" renders the full card */
  variant?: "card" | "compact";
};

/**
 * Outbound link to the source PDF, anchored to the relevant page.
 * Browsers (and most PDF viewers) honour the `#page=N` fragment.
 */
export default function SourceLink({ source, label, variant = "card" }: Props) {
  const href = `${source.pdfPath}#page=${source.pdfPage}`;
  const pageLabel =
    source.pdfPageEnd && source.pdfPageEnd !== source.pdfPage
      ? `pp. ${source.pdfPage}–${source.pdfPageEnd}`
      : `p. ${source.pdfPage}`;

  if (variant === "compact") {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-[12px] font-medium text-saffron-700 hover:text-saffron-600"
      >
        <FileText className="h-3.5 w-3.5" />
        Source · {pageLabel}
        <ExternalLink className="h-3 w-3" />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-4 rounded-2xl border border-ink-100 bg-paper-50 p-5 transition-all hover:border-saffron-300 hover:bg-paper-100"
    >
      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-saffron-50 text-saffron-700 group-hover:bg-saffron-100">
        <FileText className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-400">
          {label ?? "Read the source"}
        </p>
        <p className="mt-1 truncate font-serif text-[15px] font-medium leading-tight text-ink-900">
          {source.pdfFile}
        </p>
        <p className="mt-1.5 text-[12px] text-ink-500 tabular">
          Page {source.pdfPage}
          {source.pdfPageEnd && source.pdfPageEnd !== source.pdfPage
            ? `–${source.pdfPageEnd}`
            : ""}
          {" · "} opens in new tab
        </p>
      </div>
      <ExternalLink className="h-4 w-4 shrink-0 text-ink-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-saffron-600" />
    </Link>
  );
}
