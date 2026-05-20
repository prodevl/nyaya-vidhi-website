"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Compass,
  Gavel,
  HelpingHand,
  Phone,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Triangle,
} from "lucide-react";
import {
  getAnswer,
  getNode,
  isAnswer,
  type AskAnswer,
  type AskNode,
} from "@/lib/ask-flow";
import { cn } from "@/lib/utils";

const categoryStyle: Record<string, string> = {
  Criminal: "bg-india-50 text-india-700 border-india-200",
  Family: "bg-saffron-50 text-saffron-700 border-saffron-200",
  Money: "bg-marigold-500/10 text-saffron-700 border-marigold-500/30",
  Work: "bg-nile-500/10 text-nile-500 border-nile-500/30",
  Consumer: "bg-terracotta-500/10 text-terracotta-500 border-terracotta-500/30",
  Digital: "bg-ink-100 text-ink-700 border-ink-200",
  Property: "bg-saffron-100 text-saffron-800 border-saffron-200",
  Tax: "bg-india-100 text-india-700 border-india-200",
  General: "bg-ink-100 text-ink-600 border-ink-200",
};

export default function AskClient() {
  const [history, setHistory] = useState<string[]>(["root"]);
  const currentId = history[history.length - 1];

  const node = useMemo(() => getNode(currentId), [currentId]);
  const answer = useMemo(
    () => (isAnswer(currentId) ? getAnswer(currentId) : undefined),
    [currentId]
  );

  const goNext = (next: string) => {
    setHistory((h) => [...h, next]);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goBack = () => {
    if (history.length > 1) setHistory((h) => h.slice(0, -1));
  };

  const reset = () => setHistory(["root"]);

  return (
    <div className="relative">
      {/* Soft ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-saffron-50/60 via-paper-100/40 to-transparent" />
        <div className="absolute -top-24 left-1/2 h-72 w-[800px] -translate-x-1/2 rounded-full bg-saffron-200/20 blur-3xl" />
      </div>

      <div className="container-narrow pt-12 pb-24 lg:pt-20 lg:pb-32">
        {/* Header */}
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-saffron-200 bg-paper-50/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-saffron-700 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Nyaya Mitra · आपका मित्र
          </span>
          <h1 className="mt-5 font-serif text-display-lg font-medium tracking-tight text-balance text-ink-900">
            Tell us what is <span className="italic text-saffron-600">happening</span> —
            we will show you the law.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-[16px] leading-relaxed text-ink-500">
            A friendly, step-by-step assistant. No legal vocabulary needed. Pick what's closest to your situation,
            and we will walk you to the right answer with steps, sections, and helplines.
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-ink-400">
          <span>Step</span>
          <span className="tabular text-ink-700">{history.length}</span>
          <span>of</span>
          <span className="tabular text-ink-700">{answer ? history.length : history.length + 1}</span>
          <div className="ml-3 h-1 flex-1 overflow-hidden rounded-full bg-ink-100">
            <motion.div
              className="h-full bg-gradient-to-r from-saffron-500 to-saffron-600"
              animate={{
                width: answer ? "100%" : `${(history.length / 3) * 100}%`,
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>

        {/* Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentId}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-ink-100 bg-paper-50/95 p-6 shadow-soft backdrop-blur sm:p-10"
          >
            {node && <NodeView node={node} onPick={goNext} />}
            {answer && <AnswerView answer={answer} />}

            {/* Footer controls */}
            <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-ink-100 pt-6">
              <button
                onClick={goBack}
                disabled={history.length <= 1}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-ink-500 transition disabled:opacity-40 hover:text-ink-900"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back
              </button>
              <div className="flex items-center gap-2">
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-1.5 rounded-full border border-ink-100 bg-paper-100 px-3 py-1.5 text-xs font-medium text-ink-700 transition hover:border-saffron-300 hover:text-saffron-700"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Start over
                </button>
                {answer && (
                  <button
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-1.5 rounded-full border border-ink-100 bg-paper-100 px-3 py-1.5 text-xs font-medium text-ink-700 transition hover:border-saffron-300 hover:text-saffron-700"
                  >
                    Save / Print
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Trust-strip */}
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-3 text-center text-[11px] text-ink-400">
          <Pill icon={<ShieldCheck className="h-3.5 w-3.5" />} text="Cited sections" />
          <Pill icon={<HelpingHand className="h-3.5 w-3.5" />} text="Plain English" />
          <Pill icon={<BookOpen className="h-3.5 w-3.5" />} text="Educational only" />
        </div>

        <p className="mt-6 text-center text-[12px] leading-relaxed text-ink-400">
          Nyaya Mitra gives you a starting point — not a final opinion. For complex or urgent cases, please
          consult a qualified advocate.
          {" "}
          <Link href="/disclaimer" className="underline-offset-2 hover:underline">
            Read disclaimer
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

function Pill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <span className="inline-flex items-center justify-center gap-1.5 rounded-full border border-ink-100 bg-paper-50 px-3 py-1.5">
      <span className="text-saffron-600">{icon}</span>
      {text}
    </span>
  );
}

/* ---------- Node (question) view ---------- */
function NodeView({
  node,
  onPick,
}: {
  node: AskNode | undefined;
  onPick: (next: string) => void;
}) {
  if (!node) return null;
  return (
    <div>
      <h2 className="font-serif text-2xl font-medium tracking-tight text-ink-900 sm:text-3xl">
        {node.question}
      </h2>
      {node.subtitle && (
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-500">
          {node.subtitle}
        </p>
      )}

      <div className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {node.options.map((opt) => (
          <motion.button
            key={opt.next}
            onClick={() => onPick(opt.next)}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="group flex items-center gap-3 rounded-2xl border border-ink-100 bg-paper-50 px-4 py-4 text-left transition-all duration-300 hover:border-saffron-300 hover:bg-saffron-50/50 hover:shadow-soft"
          >
            {opt.emoji && (
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-saffron-50 to-paper-100 text-xl">
                {opt.emoji}
              </span>
            )}
            <span className="flex-1 text-[14.5px] font-medium leading-snug text-ink-900">
              {opt.label}
            </span>
            <ChevronRight className="h-4 w-4 shrink-0 text-ink-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-saffron-600" />
          </motion.button>
        ))}
      </div>
    </div>
  );
}

/* ---------- Answer view ---------- */
function AnswerView({ answer }: { answer: AskAnswer }) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]",
            categoryStyle[answer.category] ?? categoryStyle.General
          )}
        >
          <Gavel className="h-3 w-3" />
          {answer.category}
        </span>
        <span className="text-[11px] uppercase tracking-[0.18em] text-ink-400">
          Your answer
        </span>
      </div>

      <h2 className="mt-4 font-serif text-2xl font-medium tracking-tight text-ink-900 sm:text-3xl">
        {answer.title}
      </h2>

      {answer.stayCalm && (
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-saffron-200 bg-saffron-50/70 p-4 text-[14px] text-saffron-800">
          <Triangle className="mt-0.5 h-4 w-4 shrink-0 fill-saffron-500 text-saffron-500" />
          <p className="leading-relaxed">
            <strong className="font-semibold">First — </strong> {answer.stayCalm}
          </p>
        </div>
      )}

      <p className="mt-5 text-pretty text-[16px] leading-relaxed text-ink-700">
        {answer.oneLiner}
      </p>

      {/* Steps */}
      <Section title="What to do — step by step" eyebrow="कदम · Steps">
        <ol className="space-y-4">
          {answer.steps.map((s, i) => (
            <li key={i} className="flex gap-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink-900 text-[12px] font-semibold tabular text-paper-50">
                {i + 1}
              </span>
              <div>
                <p className="font-medium text-ink-900">{s.title}</p>
                <p className="mt-1 text-[14.5px] leading-relaxed text-ink-500">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Laws */}
      <Section title="The law in your corner" eyebrow="विधि · Law">
        <div className="space-y-3">
          {answer.laws.map((l, i) => (
            <div
              key={i}
              className="rounded-xl border border-ink-100 bg-paper-100/50 p-4"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-medium text-ink-900">{l.name}</span>
                {l.section && (
                  <span className="rounded-full bg-saffron-100/70 px-2 py-0.5 text-[11px] font-semibold tabular text-saffron-700">
                    {l.section}
                  </span>
                )}
              </div>
              <p className="mt-1.5 text-[14px] leading-relaxed text-ink-500">{l.note}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Documents */}
      {answer.documents && (
        <Section title="Papers to keep ready" eyebrow="दस्तावेज़ · Documents">
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {answer.documents.map((d, i) => (
              <li
                key={i}
                className="flex items-start gap-2 rounded-xl border border-ink-100 bg-paper-100/40 p-3 text-[14px] text-ink-700"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-india-500" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* Helplines */}
      {answer.helplines && answer.helplines.length > 0 && (
        <Section title="Helplines you can call" eyebrow="सहायता · Helplines">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {answer.helplines.map((h, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl border border-india-200 bg-india-50/60 p-3"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-india-500/15 text-india-700">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-ink-400">
                    {h.name}
                  </p>
                  <p className="font-serif text-lg font-medium tabular text-ink-900">
                    {h.number}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Warnings */}
      {answer.warnings && (
        <Section title="Common mistakes to avoid" eyebrow="सावधान · Watch out">
          <ul className="space-y-2">
            {answer.warnings.map((w, i) => (
              <li key={i} className="flex items-start gap-3 text-[14.5px] leading-relaxed text-ink-700">
                <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta-500" />
                {w}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* Related */}
      {answer.related && (
        <Section title="Read deeper" eyebrow="आगे · Continue">
          <div className="flex flex-wrap gap-2">
            {answer.related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-ink-100 bg-paper-50 px-3 py-1.5 text-[13px] font-medium text-ink-900 transition hover:border-saffron-300 hover:bg-saffron-50 hover:text-saffron-700"
              >
                <Compass className="h-3.5 w-3.5" />
                {r.label}
                <ArrowRight className="h-3 w-3" />
              </Link>
            ))}
          </div>
        </Section>
      )}
    </div>
  );
}

function Section({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-9">
      <p className="eyebrow">{eyebrow}</p>
      <h3 className="mt-2 font-serif text-lg font-medium tracking-tight text-ink-900">
        {title}
      </h3>
      <div className="mt-4">{children}</div>
    </section>
  );
}
