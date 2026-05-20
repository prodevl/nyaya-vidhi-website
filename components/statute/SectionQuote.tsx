import { Quote } from "lucide-react";

type Props = {
  /** Verbatim text from the PDF — must match exactly */
  text: string;
  /** Optional citation, shown at the bottom-right, e.g. "Section 138, NI Act 1881" */
  citation?: string;
};

/**
 * Verbatim quote block — paper-textured, ornamental, deliberately distinct
 * from the plain-English explanation that follows it.
 */
export default function SectionQuote({ text, citation }: Props) {
  // Preserve paragraph breaks
  const paragraphs = text.split(/\n\s*\n/).filter(Boolean);

  return (
    <figure className="relative my-6 overflow-hidden rounded-2xl border border-saffron-200 bg-paper-100/60 p-6 sm:p-8">
      <div className="pointer-events-none absolute inset-0 opacity-30 pattern-jaali-fine" />
      <div className="relative">
        <div className="flex items-center gap-2 text-saffron-700">
          <Quote className="h-4 w-4" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">
            Verbatim from the Act
          </span>
        </div>
        <blockquote className="mt-4 space-y-3 font-serif text-[16.5px] leading-[1.75] text-ink-900">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-pretty">
              {p}
            </p>
          ))}
        </blockquote>
        {citation && (
          <figcaption className="mt-5 text-right text-[11px] uppercase tracking-[0.18em] text-ink-400">
            — {citation}
          </figcaption>
        )}
      </div>
    </figure>
  );
}
