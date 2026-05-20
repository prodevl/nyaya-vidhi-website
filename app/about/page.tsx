"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  BookOpen,
  History,
  Compass,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Scale,
  ShieldCheck,
  Eye,
  ScrollText,
  Clock,
  MapPin,
  Mail,
  FileText,
  Award
} from "lucide-react";

// Interactive Clause Examples
const clauseExamples = [
  {
    id: "cheque",
    title: "Section 138 · Cheque Bounce",
    act: "Negotiable Instruments Act, 1881",
    verbatim: "Where any cheque drawn by a person on an account maintained by him with a banker for payment of any amount of money to another person from out of that account for the discharge, in whole or in part, of any debt or other liability, is returned by the bank unpaid, either because of the amount of money standing to the credit of that account is insufficient to satisfy the cheque or that it exceeds the amount arranged to be paid from that account by an agreement made with that bank, such person shall be deemed to have committed an offence and shall, without prejudice to any other provisions of this Act, be punished with imprisonment for a term which may be extended to two years, or with fine which may extend to twice the amount of the cheque, or with both...",
    lucid: "If a cheque you deposited bounces due to insufficient funds, it is a criminal offence. The drawer can be jailed for up to 2 years, fined double the cheque amount, or both.",
    rules: [
      "Must be for a legally enforceable debt.",
      "You must send a formal written notice to the drawer within 30 days of receiving the bounce memo.",
      "The drawer has 15 days from notice receipt to pay; if they default, you have 30 days to file a criminal complaint."
    ],
    punishment: "Up to 2 years prison + Fine up to 2x cheque value",
    citation: "§ 138, Act 26 of 1881"
  },
  {
    id: "dpdp",
    title: "Section 43 · Right of Erasure",
    act: "DPDP Act, 2023",
    verbatim: "A Data Principal shall have the right to obtain from the Data Fiduciary the correction, completion, update and erasure of her personal data for the processing of which she has previously given her consent, in accordance with the provisions of this Act and the rules made thereunder, and upon receipt of a request in this regard, the Data Fiduciary shall correct, complete, update or erase the personal data...",
    lucid: "You have the absolute right to ask any company to completely delete, correct, or update the personal data they hold about you if you previously consented to its collection.",
    rules: [
      "Applies to all digital personal data collected in India.",
      "The company (Data Fiduciary) must stop processing and legally erase the data.",
      "An exception applies only if keeping the data is required by an independent law."
    ],
    punishment: "Failure to comply can attract statutory civil penalties for the company",
    citation: "§ 43, Act 40 of 2023"
  },
  {
    id: "dowry",
    title: "Section 3 · Dowry Penalty",
    act: "Dowry Prohibition Act, 1961",
    verbatim: "If any person, after the commencement of this Act, gives or takes or abets the giving or taking of dowry, he shall be punishable with imprisonment for a term which shall not be less than five years, and with fine which shall not be less than fifteen thousand rupees or the amount of the value of such dowry, whichever is more...",
    lucid: "Giving, taking, or helping someone give or take dowry is a severe non-bailable crime. The law imposes mandatory minimum prison sentences and heavy proportional fines.",
    rules: [
      "Minimum prison term is 5 years.",
      "Minimum fine is ₹15,000 or the exact value of the dowry given/taken (whichever is higher).",
      "Traditional wedding presents are exempted ONLY if cataloged without demand in a signed list."
    ],
    punishment: "Min. 5 years prison + Fine equal to dowry value (min. ₹15,000)",
    citation: "§ 3, Act 28 of 1961"
  }
];

// Timeline of Indian Law Codification
const timelineEvents = [
  {
    era: "1860s · The Victorian Drafts",
    title: "The Colonial Precedents",
    desc: "The Indian Penal Code, Contract Act, and Evidence Act are drafted in Victorian-era English. These statutes were designed for colonial administrators, not common citizens. For 160 years, they remained the foundation of Indian criminal and civil law, heavily locked in archaic phrasing.",
    align: "left",
    icon: Clock
  },
  {
    era: "1950 · The Sovereign Pledge",
    title: "The Constitution of India",
    desc: "We, the People of India, adopt the Constitution. It guarantees Fundamental Rights (Articles 12-35) and promises justice, liberty, and equality. However, the exact laws that execute these rights remain behind heavy books, inaccessible to the citizens they are meant to protect.",
    align: "right",
    icon: ScrollText
  },
  {
    era: "2023 · The Great Reset",
    title: "The New Sanhitas",
    desc: "The IPC, CrPC, and Evidence Act are entirely repealed and replaced by the Bharatiya Nyaya Sanhita (BNS), Bharatiya Nagarik Suraksha Sanhita (BNSS), and Bharatiya Sakshya Adhiniyam (BSA). A major transition sweeps through legal procedures and citizen rights.",
    align: "left",
    icon: Sparkles
  },
  {
    era: "Today · The Modern Era",
    title: "Nyaya Vidhi",
    desc: "Indian Law, Made Lucid. We map, extract, and explain every major statute, rights code, tax rule, and personal law in clean plain English. Every sentence is cross-checked against verbatim code and tied to a source PDF. Law is finally open, responsive, and legible to all.",
    align: "right",
    icon: Scale
  }
];

// Philosophy Cards
const philosophies = [
  {
    sanskrit: "सत्यमेव जयते",
    translation: "Truth Alone Triumphs",
    title: "Veracity First",
    desc: "We do not summarize from memory or rely on unchecked AI generation. Every plain-English clause is backed by a side-by-side verbatim citation, and linked directly to its official Gazette PDF page. Legal literacy requires zero margin of error.",
    accent: "border-saffron-300 dark:border-saffron-700 bg-saffron-50/20"
  },
  {
    sanskrit: "सरलता सुगमता च",
    translation: "Simplicity & Accessibility",
    title: "Radically Legible",
    desc: "Access to the law is a fundamental civil right. If a citizen cannot comprehend the rules that govern them, the system is fundamentally broken. We strip away nested sub-clauses and Latin legalese without losing statutory precision.",
    accent: "border-india-300 dark:border-india-700 bg-india-50/20"
  },
  {
    sanskrit: "लोककल्याणाय समर्पितम्",
    translation: "Dedicated to Public Welfare",
    title: "A Public Library",
    desc: "Nyaya Vidhi is entirely open, blazing fast, and designed to sit quietly on your screen. No invasive trackers, no aggressive marketing, and no paywalls. Built for students, entrepreneurs, elders, and every curious citizen of Bhārat.",
    accent: "border-ink-200 dark:border-white/10 bg-paper-200/50"
  }
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("cheque");
  const currentClause = clauseExamples.find((c) => c.id === activeTab) || clauseExamples[0];
  const [viewMode, setViewMode] = useState<"side" | "verbatim" | "lucid">("side");

  return (
    <>
      {/* Editorial Page Header */}
      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32 border-b border-ink-100/50 dark:border-white/5">
        {/* Decorative Background Jaali & Radial Glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-saffron-50/40 via-transparent to-transparent" />
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-saffron-200/20 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-india-200/10 blur-3xl" />
          <div className="absolute inset-0 pattern-jaali-fine mask-fade-b opacity-30" />
        </div>

        <div className="container-page">
          {/* Breadcrumbs */}
          <nav className="mb-8 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-ink-400 dark:text-zinc-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-saffron-600 transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-ink-900 dark:text-white">About Us</span>
          </nav>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-8">
              <p className="eyebrow">अस्माकं ध्येयम् · Our Mission</p>
              <h1 className="mt-4 font-serif text-display-xl font-medium tracking-tight text-ink-900 dark:text-white leading-[0.95]">
                Indian law, made <span className="italic text-saffron-600 dark:text-saffron-400">lucid</span> for all.
              </h1>
              <p className="mt-8 text-pretty text-xl font-medium leading-relaxed text-ink-500 dark:text-zinc-300 font-serif">
                Access to the law is a basic human right. Yet, statutory codes are hidden behind expensive walls, heavy books, and nested Victorian-era prose.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink-400 dark:text-zinc-400">
                Nyaya Vidhi is a modern, public library of Indian statutes, rebuilt from scratch. We translate verbatim clauses into plain-English gists, structure complex sentences into logical steps, and verify every single summary with absolute textual fidelity.
              </p>
            </div>
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              {/* Premium Heritage Card */}
              <div className="card-heritage p-8 bg-paper-50/80 dark:bg-ink-950/40 backdrop-blur-sm border-saffron-100 dark:border-white/5 shadow-elevated">
                <div className="devanagari text-2xl text-saffron-600 dark:text-saffron-400 mb-2 font-medium">
                  यतो धर्मस्ततो जयः
                </div>
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-ink-400 dark:text-zinc-500">
                  Mahabharata · Udyoga Parva
                </p>
                <div className="h-px bg-gradient-to-r from-saffron-300 via-saffron-100 to-transparent my-4" />
                <p className="font-serif text-base italic leading-relaxed text-ink-500 dark:text-zinc-300">
                  &ldquo;Where there is Dharma (Righteousness, Logic, Law), there is Victory.&rdquo;
                </p>
                <p className="mt-4 text-[13px] leading-relaxed text-ink-400 dark:text-zinc-400">
                  We believe that victory in a modern democracy belongs to the citizens who understand their rights and responsibilities. Our software is designed to serve that understanding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unforgettable Interactive Exhibit: The Anatomy of a Lucid Clause */}
      <section className="relative py-20 lg:py-28 bg-paper-100/40 dark:bg-ink-950/20 border-b border-ink-100/50 dark:border-white/5">
        <div className="container-page">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow">कठिनं सरलं च · Dense vs Lucid</p>
            <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-ink-900 dark:text-white sm:text-5xl">
              The anatomy of a <span className="italic text-saffron-600 dark:text-saffron-400">lucid clause</span>.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-500 dark:text-zinc-400">
              Interactive Exhibit — Click the tabs to select different laws, then toggle the buttons to contrast the dense, verbatim legal text with Nyaya Vidhi’s plain-English breakdown.
            </p>
          </div>

          {/* Interactive UI Wrapper */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Left controller tabs */}
            <div className="lg:col-span-4 flex flex-col gap-2.5">
              {clauseExamples.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-300 group relative overflow-hidden ${
                    activeTab === item.id
                      ? "bg-white dark:bg-white/5 border-saffron-300 dark:border-saffron-500/50 shadow-soft"
                      : "bg-transparent border-ink-100/40 dark:border-white/5 hover:border-saffron-200 dark:hover:border-white/10"
                  }`}
                >
                  {/* Tab background glow */}
                  {activeTab === item.id && (
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-saffron-500" />
                  )}
                  <p className="text-[11px] font-bold uppercase tracking-wider text-ink-400 dark:text-zinc-500 mb-1.5 group-hover:text-saffron-600 transition-colors">
                    {item.act}
                  </p>
                  <h4 className={`font-serif text-lg font-medium transition-colors ${
                    activeTab === item.id ? "text-ink-900 dark:text-white" : "text-ink-700 dark:text-zinc-400"
                  }`}>
                    {item.title}
                  </h4>
                </button>
              ))}

              <div className="mt-6 rounded-2xl bg-paper-200/50 dark:bg-white/[0.02] border border-ink-100/50 dark:border-white/5 p-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-400 dark:text-zinc-500 mb-2">
                  <ShieldCheck className="h-4 w-4 text-india-600 dark:text-india-400" />
                  <span>Verified Citation</span>
                </div>
                <p className="text-[12.5px] leading-relaxed text-ink-500 dark:text-zinc-400">
                  Every legal simplification contains a verbatim link to the actual act. Click any citation in our catalog to open its verified government gazette scan.
                </p>
              </div>
            </div>

            {/* Right comparison stage */}
            <div className="lg:col-span-8 flex flex-col">
              {/* Display Controls */}
              <div className="flex items-center justify-between border-b border-ink-100/50 dark:border-white/10 pb-4 mb-6">
                <span className="text-[12.5px] font-semibold text-ink-400 dark:text-zinc-500">
                  CITATION: <span className="text-ink-800 dark:text-zinc-300 font-mono">{currentClause.citation}</span>
                </span>
                
                {/* View switcher pills */}
                <div className="flex items-center gap-1 bg-paper-200/60 dark:bg-white/5 rounded-full p-1 border border-ink-100/40 dark:border-white/5">
                  <button
                    onClick={() => setViewMode("side")}
                    className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all ${
                      viewMode === "side"
                        ? "bg-white dark:bg-white/10 text-ink-900 dark:text-white shadow-sm"
                        : "text-ink-400 hover:text-ink-800 dark:text-zinc-400 dark:hover:text-white"
                    }`}
                  >
                    Side-by-Side
                  </button>
                  <button
                    onClick={() => setViewMode("verbatim")}
                    className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all ${
                      viewMode === "verbatim"
                        ? "bg-white dark:bg-white/10 text-ink-900 dark:text-white shadow-sm"
                        : "text-ink-400 hover:text-ink-800 dark:text-zinc-400 dark:hover:text-white"
                    }`}
                  >
                    Statute Only
                  </button>
                  <button
                    onClick={() => setViewMode("lucid")}
                    className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all ${
                      viewMode === "lucid"
                        ? "bg-white dark:bg-white/10 text-ink-900 dark:text-white shadow-sm"
                        : "text-ink-400 hover:text-ink-800 dark:text-zinc-400 dark:hover:text-white"
                    }`}
                  >
                    Lucid Only
                  </button>
                </div>
              </div>

              {/* Dynamic View Panel with smooth transition */}
              <div className="relative min-h-[360px] flex-1 bg-white dark:bg-ink-950 rounded-3xl border border-ink-100 dark:border-white/10 overflow-hidden shadow-elevated p-6 md:p-8">
                {/* Visual texture watermark */}
                <div className="absolute inset-0 pattern-jaali-fine opacity-20 pointer-events-none" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeTab}-${viewMode}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="relative z-10 h-full w-full"
                  >
                    {viewMode === "side" && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                        {/* Statute Column */}
                        <div className="flex flex-col border-b md:border-b-0 md:border-r border-ink-100/50 dark:border-white/10 pb-6 md:pb-0 md:pr-6">
                          <div className="flex items-center gap-2 mb-3 text-red-700 dark:text-red-400 text-xs font-bold uppercase tracking-wider">
                            <ScrollText className="h-3.5 w-3.5" />
                            <span>Verbatim Statute Code</span>
                          </div>
                          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                            <p className="font-mono text-[12.5px] leading-relaxed text-ink-400 dark:text-zinc-400 select-all whitespace-pre-line">
                              &ldquo;{currentClause.verbatim}&rdquo;
                            </p>
                          </div>
                        </div>

                        {/* Lucid Column */}
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2 mb-3 text-india-600 dark:text-india-400 text-xs font-bold uppercase tracking-wider">
                            <Sparkles className="h-3.5 w-3.5 text-saffron-500" />
                            <span>Nyaya Vidhi Gist</span>
                          </div>
                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                              <p className="font-serif text-[17px] font-medium leading-relaxed text-ink-900 dark:text-white text-pretty mb-5">
                                {currentClause.lucid}
                              </p>
                              <div className="space-y-2.5">
                                <p className="text-[11px] font-bold uppercase tracking-wider text-ink-400 dark:text-zinc-500">
                                  KEY PROTOCOLS / WINDOWS
                                </p>
                                <ul className="space-y-1.5">
                                  {currentClause.rules.map((rule, idx) => (
                                    <li key={idx} className="flex items-start gap-2.5 text-[13.5px] text-ink-500 dark:text-zinc-300">
                                      <CheckCircle2 className="h-4 w-4 text-saffron-500 shrink-0 mt-0.5" />
                                      <span>{rule}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Punishment badge */}
                            <div className="mt-6 border-t border-ink-100/50 dark:border-white/10 pt-4 flex items-center justify-between">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-ink-400 dark:text-zinc-500">
                                PENALTY MATRIX
                              </span>
                              <span className="inline-flex rounded-full bg-saffron-50 dark:bg-saffron-500/10 border border-saffron-200 dark:border-saffron-500/20 px-3 py-1 text-xs font-semibold text-saffron-700 dark:text-saffron-400">
                                {currentClause.punishment}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {viewMode === "verbatim" && (
                      <div className="flex flex-col h-full max-w-4xl mx-auto">
                        <div className="flex items-center gap-2 mb-4 text-red-700 dark:text-red-400 text-xs font-bold uppercase tracking-wider">
                          <ScrollText className="h-4 w-4" />
                          <span>Complete Statute Code ({currentClause.act})</span>
                        </div>
                        <p className="font-mono text-[14px] leading-relaxed text-ink-400 dark:text-zinc-400 select-all whitespace-pre-line border-l-2 border-red-500/30 pl-4 py-1">
                          &ldquo;{currentClause.verbatim}&rdquo;
                        </p>
                        <p className="mt-8 text-xs text-ink-400 dark:text-zinc-500 italic">
                          This is the verbatim clause text published in the official Central Gazette. In a court of law, this is the final authoritative text used for adjudication.
                        </p>
                      </div>
                    )}

                    {viewMode === "lucid" && (
                      <div className="flex flex-col h-full max-w-3xl mx-auto">
                        <div className="flex items-center gap-2 mb-4 text-india-600 dark:text-india-400 text-xs font-bold uppercase tracking-wider">
                          <Sparkles className="h-4 w-4 text-saffron-500" />
                          <span>Nyaya Vidhi Plain-English Breakdown</span>
                        </div>
                        <h3 className="font-serif text-2xl font-medium text-ink-900 dark:text-white leading-relaxed mb-6">
                          {currentClause.lucid}
                        </h3>

                        <div className="space-y-6">
                          <div>
                            <p className="text-[11px] font-bold uppercase tracking-wider text-ink-400 dark:text-zinc-500 mb-3">
                              STATUTORY COMPLIANCE CHECKLIST
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              {currentClause.rules.map((rule, idx) => (
                                <div key={idx} className="rounded-xl border border-ink-100/50 dark:border-white/5 bg-paper-100/50 dark:bg-white/[0.02] p-4 flex gap-3">
                                  <span className="h-5 w-5 shrink-0 rounded-full bg-saffron-100 dark:bg-saffron-500/20 text-saffron-700 dark:text-saffron-400 font-bold text-xs flex items-center justify-center">
                                    {idx + 1}
                                  </span>
                                  <span className="text-[13px] leading-snug text-ink-500 dark:text-zinc-300">
                                    {rule}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="border-t border-ink-100/50 dark:border-white/10 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div>
                              <p className="text-[11px] font-bold uppercase tracking-wider text-ink-400 dark:text-zinc-500 mb-1">
                                PENAL CONSEQUENCE
                              </p>
                              <p className="text-sm font-serif font-medium text-ink-900 dark:text-white">
                                {currentClause.punishment}
                              </p>
                            </div>
                            <span className="inline-flex rounded-full bg-india-50 dark:bg-india-500/10 border border-india-200 dark:border-india-500/20 px-3 py-1 text-xs font-semibold text-india-700 dark:text-india-400 self-start sm:self-center">
                              Citation: {currentClause.citation}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Story / Editorial Timeline of Indian Law */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-ink-100/50 dark:border-white/5">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-saffron-100/50 dark:bg-saffron-950/5 rounded-full blur-[120px]" />
          <div className="absolute inset-0 pattern-jaali-fine opacity-20" />
        </div>

        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="eyebrow">कालक्रमः · Historical Context</p>
            <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-ink-900 dark:text-white sm:text-5xl">
              From codification to <span className="italic text-saffron-600 dark:text-saffron-400">citizenship</span>.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-500 dark:text-zinc-400">
              The evolution of legal accessibility in Bhārat. Laws were originally codified to enforce state orders, but today they belong to the sovereign public.
            </p>
          </div>

          {/* Minimalist Timeline component */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center spine */}
            <div className="absolute left-4 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-saffron-400/80 via-ink-100 to-transparent -translate-x-1/2 dark:via-white/10 hidden md:block" />
            <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-saffron-400/80 via-ink-100 to-transparent -translate-x-1/2 dark:via-white/10 md:hidden" />

            <div className="space-y-14 md:space-y-20">
              {timelineEvents.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className={`relative flex flex-col md:flex-row items-start ${
                      item.align === "left" ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Bullet marker */}
                    <div className="absolute left-6 md:left-1/2 h-11 w-11 rounded-full border-2 border-saffron-400 bg-white dark:bg-ink-950 shadow-soft -translate-x-1/2 z-10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-saffron-600 dark:text-saffron-400" />
                    </div>

                    {/* Content Block */}
                    <div className="w-full md:w-1/2 pl-14 md:pl-0 md:px-12">
                      <div className={`p-6 rounded-3xl border border-ink-100/60 dark:border-white/5 bg-white/50 dark:bg-white/[0.02] backdrop-blur-sm shadow-soft transition-all duration-300 hover:border-saffron-200 dark:hover:border-white/10 ${
                        item.align === "left" ? "md:text-right" : "md:text-left"
                      }`}>
                        <span className="inline-flex rounded-full bg-saffron-50 dark:bg-saffron-500/10 border border-saffron-200/50 dark:border-saffron-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-saffron-700 dark:text-saffron-400 mb-4">
                          {item.era}
                        </span>
                        <h4 className="font-serif text-xl font-medium text-ink-900 dark:text-white leading-tight mb-2.5">
                          {item.title}
                        </h4>
                        <p className="text-[14px] leading-relaxed text-ink-500 dark:text-zinc-400 text-pretty">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Empty space for alignment */}
                    <div className="w-1/2 hidden md:block" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Values Section */}
      <section className="relative py-20 lg:py-28 bg-paper-150/40 dark:bg-ink-950/20">
        <div className="container-page">
          <div className="max-w-3xl mb-16">
            <p className="eyebrow">दर्शनम् · Our Philosophy</p>
            <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-ink-900 dark:text-white sm:text-5xl">
              The three columns of <span className="italic text-saffron-600 dark:text-saffron-400">Nyaya Vidhi</span>.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-500 dark:text-zinc-400">
              Our code represents a pact with our readers. We combine strict architectural standards, historical reverence, and legal precision to create a digital public good.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {philosophies.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-3xl border p-8 shadow-soft flex flex-col justify-between transition-all duration-300 hover:shadow-elevated hover:translate-y-[-2px] ${item.accent}`}
              >
                <div>
                  <div className="devanagari text-2xl text-saffron-600 dark:text-saffron-400 font-medium mb-1">
                    {item.sanskrit}
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-ink-400 dark:text-zinc-500 mb-6">
                    {item.translation}
                  </p>

                  <h4 className="font-serif text-xl font-medium text-ink-900 dark:text-white mb-2.5">
                    {item.title}
                  </h4>
                  <p className="text-[14px] leading-relaxed text-ink-500 dark:text-zinc-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authorship / Authenticity block */}
      <section className="relative py-20 lg:py-28 border-t border-ink-100/50 dark:border-white/5">
        <div className="container-page">
          <div className="rounded-4xl border border-ink-100 dark:border-white/10 bg-white/50 dark:bg-ink-950/50 backdrop-blur-sm p-8 md:p-14 lg:p-20 relative overflow-hidden">
            {/* Visual background glows */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-saffron-300/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-india-300/10 blur-3xl" />

            <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <p className="eyebrow">शुद्धता · Editorial Integrity</p>
                <h3 className="mt-3 font-serif text-3xl font-medium tracking-tight text-ink-900 dark:text-white sm:text-4xl">
                  A pure, independent <span className="italic text-saffron-600 dark:text-saffron-400">open library</span>.
                </h3>
                <p className="mt-6 text-[15.5px] leading-relaxed text-ink-500 dark:text-zinc-400 text-pretty">
                  Nyaya Vidhi is entirely open source, self-funded, and managed as a digital public library. Our team reads, extracts, and summarizes statutory codes by auditing each central gazette. Every plain-English summarization undergoes manual oversight and rigorous verification.
                </p>
                <p className="mt-4 text-[15.5px] leading-relaxed text-ink-500 dark:text-zinc-400 text-pretty">
                  Our code resides openly on GitHub, and our systems are designed to consume minimal tokens, execute static rendering, and deploy with zero tracking cookies. It is our humble attempt to build the standard library of Indian citizenship.
                </p>
                
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link href="/laws" className="btn-saffron">
                    Explore the statutes
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="mailto:contact@nyayavidhi.in"
                    className="btn-outline inline-flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    Write to us
                  </a>
                </div>
              </div>

              {/* Minimalist Grid of Stats */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-ink-100 bg-paper-50 dark:bg-white/[0.02] p-5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-saffron-50 dark:bg-saffron-500/15 mb-3 border border-saffron-100 dark:border-saffron-500/25">
                    <FileText className="h-4.5 w-4.5 text-saffron-600 dark:text-saffron-400" />
                  </div>
                  <div className="font-serif text-3xl font-medium text-ink-900 dark:text-white tabular tracking-tight">
                    51+
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-400 dark:text-zinc-500 mt-1">
                    Unique Statutes
                  </p>
                </div>

                <div className="rounded-2xl border border-ink-100 bg-paper-50 dark:bg-white/[0.02] p-5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-india-50 dark:bg-india-500/15 mb-3 border border-india-100 dark:border-india-500/25">
                    <Compass className="h-4.5 w-4.5 text-india-600 dark:text-india-400" />
                  </div>
                  <div className="font-serif text-3xl font-medium text-ink-900 dark:text-white tabular tracking-tight">
                    15
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-400 dark:text-zinc-500 mt-1">
                    Legal Domains
                  </p>
                </div>

                <div className="rounded-2xl border border-ink-100 bg-paper-50 dark:bg-white/[0.02] p-5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink-100 dark:bg-white/10 mb-3 border border-ink-200 dark:border-white/10">
                    <ScrollText className="h-4.5 w-4.5 text-ink-600 dark:text-zinc-400" />
                  </div>
                  <div className="font-serif text-3xl font-medium text-ink-900 dark:text-white tabular tracking-tight">
                    100%
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-400 dark:text-zinc-500 mt-1">
                    Verbatim Sourced
                  </p>
                </div>

                <div className="rounded-2xl border border-ink-100 bg-paper-50 dark:bg-white/[0.02] p-5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-saffron-50 dark:bg-saffron-500/15 mb-3 border border-saffron-100 dark:border-saffron-500/25">
                    <Award className="h-4.5 w-4.5 text-saffron-600 dark:text-saffron-400" />
                  </div>
                  <div className="font-serif text-3xl font-medium text-ink-900 dark:text-white tabular tracking-tight">
                    0
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-400 dark:text-zinc-500 mt-1">
                    Paywalls / Ads
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
