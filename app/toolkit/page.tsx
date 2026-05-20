import type { Metadata } from "next";
import Link from "next/link";
import {
  Calculator,
  FileText,
  Receipt,
  Home,
  Wallet,
  ScrollText,
  Building2,
  Hourglass,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";
import ToolkitClient from "./ToolkitClient";

export const metadata: Metadata = {
  title: "Legal Toolkit — Calculators, generators, and ready papers",
  description:
    "Free, instant tools — tax calculators, HRA, stamp duty, cheque bounce notice, RTI application, legal notice drafts, and more.",
};

const featured = [
  {
    id: "tax-regime",
    title: "Old vs New Tax Regime",
    body: "Find which regime saves you more — in 30 seconds.",
    icon: Wallet,
    badge: "Most used",
  },
  {
    id: "hra",
    title: "HRA Exemption Calculator",
    body: "How much of your HRA is actually tax-free?",
    icon: Receipt,
  },
  {
    id: "stamp-duty",
    title: "Stamp Duty Estimator",
    body: "State-wise stamp duty and registration fees on property.",
    icon: Home,
  },
  {
    id: "cheque-bounce",
    title: "Cheque Bounce — Notice Generator",
    body: "Section 138 NI Act statutory legal notice in seconds.",
    icon: FileText,
    badge: "Most asked",
  },
  {
    id: "rti",
    title: "RTI Application Generator",
    body: "A ready-to-print RTI application in plain English.",
    icon: ScrollText,
  },
  {
    id: "rent",
    title: "Rent Agreement (Quick Draft)",
    body: "11-month rent agreement template with deposit, notice, and rules.",
    icon: Building2,
  },
  {
    id: "gratuity",
    title: "Gratuity Calculator",
    body: "Your gratuity amount on resignation or retirement.",
    icon: Calculator,
  },
  {
    id: "notice-period",
    title: "Notice Period Calculator",
    body: "How much notice do you owe? How much salary should you get?",
    icon: Hourglass,
  },
  {
    id: "fir-draft",
    title: "FIR Complaint — Quick Draft",
    body: "A simple complaint format you can take to the police station.",
    icon: ShieldAlert,
  },
];

export default function ToolkitPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-saffron-50/50 via-paper-100/30 to-transparent" />
      </div>

      <div className="container-page pt-12 pb-24 lg:pt-20 lg:pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-india-200 bg-paper-50/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-india-700">
            <Calculator className="h-3.5 w-3.5" />
            Toolkit · उपकरण
          </span>
          <h1 className="mt-5 font-serif text-display-lg font-medium tracking-tight text-balance text-ink-900">
            Free tools that save you <span className="italic text-saffron-600">time and money.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-[16px] leading-relaxed text-ink-500">
            Calculators, document drafts, and ready legal letters. No login. No data leaves your browser.
            Just click, fill, and use.
          </p>
        </div>

        {/* Quick pills */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-2">
          {featured.slice(0, 6).map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-ink-100 bg-paper-50 px-3 py-1.5 text-[12px] font-medium text-ink-700 transition hover:border-saffron-300 hover:text-saffron-700"
            >
              {t.title}
            </a>
          ))}
        </div>

        {/* Cards grid */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((tool) => {
            const Icon = tool.icon;
            return (
              <a
                key={tool.id}
                href={`#${tool.id}`}
                className="card-heritage group p-6"
              >
                <div className="flex items-start justify-between">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-saffron-50 to-paper-100 text-saffron-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  {tool.badge && (
                    <span className="rounded-full bg-india-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-india-700">
                      {tool.badge}
                    </span>
                  )}
                </div>
                <h3 className="mt-5 font-serif text-[19px] font-medium leading-tight tracking-tight text-ink-900">
                  {tool.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-500">
                  {tool.body}
                </p>
                <div className="mt-5 flex items-center text-[13px] font-medium text-saffron-700">
                  Open tool
                  <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </a>
            );
          })}
        </div>

        {/* The interactive tools */}
        <ToolkitClient />

        {/* Footer note */}
        <div className="mx-auto mt-20 max-w-3xl rounded-2xl border border-ink-100 bg-paper-50/70 p-6 text-center">
          <p className="text-[14px] leading-relaxed text-ink-500">
            <strong className="text-ink-900">A note on accuracy:</strong> These tools are designed to be
            useful and conservative. Tax slabs and rates change every year — always confirm with a CA or
            tax professional before filing.{" "}
            <Link href="/disclaimer" className="text-saffron-700 underline-offset-2 hover:underline">
              Full disclaimer
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
