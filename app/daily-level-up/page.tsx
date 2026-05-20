import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Sun,
  BookOpenCheck,
  Brain,
  Flame,
  CalendarDays,
  CheckCircle2,
  Zap,
  Mail,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Daily Level-Up · Your Knowledge",
  description:
    "One law, one rule, one right — every day. Three-minute reads to grow your legal literacy without overwhelm. Streaks, quizzes, and a weekly recap.",
};

const today = {
  date: "Today · Wednesday",
  topic: "Section 138 — Negotiable Instruments Act, 1881",
  category: "Banking & Cheques",
  question:
    "When does a dishonoured cheque become a criminal offence — and what window do you have to act?",
  bullets: [
    "Cheque must be drawn for legally enforceable debt or liability.",
    "Bank returns it unpaid for insufficient funds (or stop-payment without cause).",
    "Payee must send legal notice within 30 days of the bank memo.",
    "Drawer has 15 days to pay; on default, complaint must be filed within 30 days.",
  ],
  readMinutes: 3,
};

const week = [
  {
    day: "Mon",
    topic: "Right to be forgotten",
    tag: "DPDP Act, 2023",
    done: true,
  },
  {
    day: "Tue",
    topic: "What is a 'reasonable restriction'?",
    tag: "Article 19(2)",
    done: true,
  },
  {
    day: "Wed",
    topic: "Section 138 — Cheque bounce",
    tag: "NI Act",
    done: false,
    today: true,
  },
  {
    day: "Thu",
    topic: "Notice period under RERA",
    tag: "Real Estate",
    done: false,
  },
  {
    day: "Fri",
    topic: "When can police search without warrant?",
    tag: "BNSS, 2023",
    done: false,
  },
  {
    day: "Sat",
    topic: "Anticipatory bail — basics",
    tag: "Criminal Procedure",
    done: false,
  },
  {
    day: "Sun",
    topic: "Weekly recap quiz",
    tag: "Recap",
    done: false,
  },
];

const tracks = [
  {
    icon: BookOpenCheck,
    title: "30-Day Constitutional Primer",
    description:
      "From the Preamble to Article 370 — one Article a day, in plain English with citations.",
    items: 30,
    level: "Beginner",
  },
  {
    icon: Brain,
    title: "Citizen's Rights Bootcamp",
    description:
      "Stops, arrests, FIRs, consumer complaints, RTI, workplace harassment — what to say, what to file.",
    items: 21,
    level: "Beginner → Intermediate",
  },
  {
    icon: Zap,
    title: "Tax Literacy in 14 Days",
    description:
      "Income tax, GST, capital gains, TDS — the everyday tax vocabulary every adult should own.",
    items: 14,
    level: "Intermediate",
  },
  {
    icon: Sparkles,
    title: "Landmark Judgments Sprint",
    description:
      "Ten cases. Ten days. The doctrines that quietly run modern India.",
    items: 10,
    level: "Intermediate",
  },
];

const stats = [
  { label: "Day streak", value: "7", sub: "Keep it going" },
  { label: "Concepts learned", value: "23", sub: "This month" },
  { label: "Quizzes passed", value: "5/6", sub: "83% accuracy" },
  { label: "Time invested", value: "1h 12m", sub: "Avg. 3 min/day" },
];

export default function DailyLevelUpPage() {
  return (
    <>
      <PageHeader
        eyebrow="दैनिक ज्ञान · Daily Level-Up"
        sanskrit="नित्यं नवं नवं ज्ञानम् · Each day, knowledge anew"
        title="Three minutes a day. A sharper citizen for life."
        description="One law, one rule, one right — delivered every morning. Bite-sized, cited, and quizzed. Build a streak; build legal literacy that actually sticks."
        crumbs={[{ label: "Home", href: "/" }, { label: "Daily Level-Up" }]}
      />

      <section className="container-page pb-24">
        {/* Today's lesson */}
        <article className="relative overflow-hidden rounded-3xl border border-india-200/70 bg-gradient-to-br from-paper-100 via-paper-50 to-india-50/40 p-8 lg:p-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-india-200/30 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-saffron-200/30 blur-3xl" />

          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-india-200 bg-paper-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-india-700">
                <Sun className="h-3.5 w-3.5" />
                {today.date}
              </div>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-saffron-700">
                {today.category}
              </p>
              <h2 className="mt-2 font-serif text-display-md font-medium leading-[1.05] tracking-tight text-balance text-ink-900">
                {today.topic}
              </h2>
              <p className="mt-5 max-w-2xl font-serif text-lg italic leading-snug text-ink-500">
                {today.question}
              </p>

              <ul className="mt-8 space-y-3">
                {today.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-saffron-200 bg-saffron-50 font-serif text-xs font-semibold text-saffron-700 tabular">
                      {i + 1}
                    </span>
                    <span className="text-[15px] leading-relaxed text-ink-500">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link href="/daily-level-up/today" className="btn-saffron">
                  Read full lesson
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link href="/daily-level-up/quiz" className="btn-outline">
                  Take 60-sec quiz
                </Link>
                <span className="ml-1 inline-flex items-center gap-1.5 text-xs text-ink-400">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {today.readMinutes} min read
                </span>
              </div>
            </div>

            {/* Streak card */}
            <aside className="lg:col-span-4">
              <div className="card-heritage p-6">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-400">
                    Your streak
                  </p>
                  <span className="inline-flex items-center gap-1 rounded-full bg-saffron-50 px-2.5 py-1 text-xs font-semibold text-saffron-700">
                    <Flame className="h-3.5 w-3.5" />
                    7 days
                  </span>
                </div>
                <p className="mt-4 font-serif text-4xl font-medium tracking-tight text-ink-900">
                  Day 7 of 30
                </p>
                <p className="mt-1 text-sm text-ink-400">
                  Constitutional Primer · 23% complete
                </p>

                <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-ink-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-saffron-400 to-india-500"
                    style={{ width: "23%" }}
                  />
                </div>

                <div className="mt-6 grid grid-cols-7 gap-1.5">
                  {week.map((d) => (
                    <div
                      key={d.day}
                      title={`${d.day} · ${d.topic}`}
                      className={
                        "flex aspect-square items-center justify-center rounded-md text-[10px] font-semibold uppercase tracking-wider " +
                        (d.done
                          ? "bg-saffron-500 text-paper-50"
                          : d.today
                          ? "border-2 border-saffron-500 bg-paper-50 text-saffron-700"
                          : "bg-paper-200 text-ink-400")
                      }
                    >
                      {d.day[0]}
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-[11px] text-ink-400">
                  Read 4 more days to unlock the weekly recap quiz.
                </p>
              </div>
            </aside>
          </div>
        </article>

        {/* This week */}
        <div className="mt-20">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">This week&apos;s plan</p>
              <h3 className="mt-3 font-serif text-3xl font-medium tracking-tight text-ink-900">
                Seven micro-lessons.
              </h3>
            </div>
            <Link
              href="/daily-level-up/archive"
              className="hidden text-sm font-medium text-saffron-600 hover:text-saffron-700 sm:inline-flex sm:items-center sm:gap-1.5"
            >
              See full archive
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <ol className="mt-8 divide-y divide-ink-100 overflow-hidden rounded-2xl border border-ink-100 bg-paper-50">
            {week.map((d) => (
              <li
                key={d.day}
                className={
                  "flex items-center gap-4 px-5 py-4 transition " +
                  (d.today ? "bg-saffron-50/60" : "hover:bg-paper-100")
                }
              >
                <div className="w-12 shrink-0 text-center">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">
                    {d.day}
                  </p>
                </div>
                <div className="flex-1">
                  <p className="font-serif text-base font-medium text-ink-900">
                    {d.topic}
                  </p>
                  <p className="mt-0.5 text-xs text-ink-400">{d.tag}</p>
                </div>
                {d.done ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-saffron-50 px-3 py-1 text-xs font-medium text-saffron-700">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Read
                  </span>
                ) : d.today ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-india-600 px-3 py-1 text-xs font-medium text-paper-50">
                    <Sparkles className="h-3.5 w-3.5" />
                    Today
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-100 bg-paper-100 px-3 py-1 text-xs font-medium text-ink-400">
                    Locked
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>

        {/* Stats */}
        <div className="mt-20 rounded-3xl border border-ink-100 bg-paper-200/60 p-8 lg:p-10">
          <p className="eyebrow">Your progress</p>
          <h3 className="mt-3 font-serif text-3xl font-medium tracking-tight text-ink-900">
            Small days, large compounding.
          </h3>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-ink-100 bg-paper-50 p-5"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-400">
                  {s.label}
                </p>
                <p className="mt-3 font-serif text-3xl font-medium tracking-tight text-ink-900 tabular">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-ink-400">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tracks */}
        <div className="mt-20">
          <p className="eyebrow">Pick a track</p>
          <h3 className="mt-3 font-serif text-display-md font-medium tracking-tight text-ink-900">
            Choose your pace.
          </h3>
          <p className="mt-3 max-w-2xl text-[15.5px] leading-relaxed text-ink-500">
            Every track is a curated daily playlist — short reads, citations, and a quick check at the end of each session.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {tracks.map((t) => {
              const I = t.icon;
              return (
                <article
                  key={t.title}
                  className="card-heritage group flex h-full flex-col p-7 transition hover:-translate-y-0.5 hover:shadow-glow"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-india-50 text-india-700">
                      <I className="h-5 w-5" />
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-400">
                      {t.items} lessons
                    </span>
                  </div>
                  <h4 className="mt-5 font-serif text-xl font-medium tracking-tight text-ink-900">
                    {t.title}
                  </h4>
                  <p className="mt-2 flex-1 text-[14.5px] leading-relaxed text-ink-500">
                    {t.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-ink-100 pt-4">
                    <span className="text-xs text-ink-400">{t.level}</span>
                    <Link
                      href={`/daily-level-up/${t.title
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/^-|-$/g, "")}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-saffron-600 group-hover:text-saffron-700"
                    >
                      Begin track
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Subscribe CTA */}
        <div className="mt-24 overflow-hidden rounded-3xl border border-saffron-200 bg-gradient-to-br from-saffron-50/60 via-paper-50 to-paper-100 p-10 lg:p-14">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow">Get it in your inbox</p>
              <h3 className="mt-3 font-serif text-3xl font-medium leading-tight tracking-tight text-ink-900 sm:text-4xl">
                One lesson, every morning at <span className="italic text-saffron-700">7 AM IST</span>.
              </h3>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-500">
                No ads. No noise. Just a three-minute read with the citation at the bottom — the way it should be.
              </p>
            </div>
            <form className="lg:col-span-5">
              <div className="flex items-center gap-2 rounded-full border border-ink-100 bg-paper-50 p-1.5 shadow-soft transition focus-within:border-saffron-400 focus-within:shadow-glow">
                <span className="pl-3 text-ink-400">
                  <Mail className="h-4 w-4" />
                </span>
                <input
                  type="email"
                  placeholder="you@inbox.in"
                  className="flex-1 bg-transparent px-2 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none"
                />
                <button type="submit" className="btn-saffron">
                  Subscribe
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
              <p className="mt-3 pl-3 text-xs text-ink-400">
                Unsubscribe in one click. We never share your email.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
