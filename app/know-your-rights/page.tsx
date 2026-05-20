import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { scenariosData } from "./data";

export const metadata = {
  title: "Know Your Rights",
  description:
    "Scenario-first lookups for Indian law — find your clause, your remedy, your next step in 30 seconds.",
};

const colorMap: Record<string, string> = {
  saffron: "bg-saffron-50 text-saffron-700 group-hover:bg-saffron-100",
  india: "bg-india-50 text-india-700 group-hover:bg-india-100",
  terracotta: "bg-[#F4DDD0] text-terracotta-500 group-hover:bg-[#EFC5B0]",
  marigold: "bg-marigold-400/20 text-saffron-700 group-hover:bg-marigold-400/30",
};

export default function KnowYourRightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="अधिकार · Rights"
        sanskrit="स्वराज्यं समानं अधिकारस्य · Self-rule begins with equal rights"
        title="Find your clause in 30 seconds."
        description="Pick the moment you're in. We'll give you the law, the section, the steps, the documents, and where to go."
        crumbs={[{ label: "Home", href: "/" }, { label: "Know Your Rights" }]}
      />

      <section className="container-page pb-24">
        {/* Search */}
        <div className="mb-12">
          <div className="group flex items-center gap-2 rounded-2xl border border-ink-100 bg-paper-50 p-2 shadow-soft focus-within:border-saffron-400 focus-within:shadow-glow">
            <span className="pl-3 text-ink-400">
              <Search className="h-4 w-4" />
            </span>
            <input
              type="search"
              placeholder="Describe your situation in plain words…"
              className="flex-1 bg-transparent px-2 py-3 text-[15px] text-ink-900 placeholder:text-ink-400 focus:outline-none"
            />
            <button className="rounded-xl bg-ink-900 px-5 py-2.5 text-sm font-medium text-paper-50 hover:bg-ink-500">
              Find rights
            </button>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-1.5 text-[12px] text-ink-400">
            <span className="mr-1">Or try:</span>
            {[
              { label: "arrest", slug: "arrest" },
              { label: "FIR refusal", slug: "fir-refusal" },
              { label: "POSH", slug: "posh" },
              { label: "cheque bounce", slug: "cheque-bounce" },
              { label: "RERA delay", slug: "rera-delay" }
            ].map((q) => (
              <Link
                key={q.slug}
                href={`/know-your-rights/${q.slug}`}
                className="rounded-full border border-ink-100 bg-paper-50 px-2.5 py-1 hover:border-saffron-300 hover:text-saffron-700"
              >
                {q.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Scenarios grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {scenariosData.map((s) => {
            const Icon = s.iconName;
            return (
              <Link
                key={s.slug}
                href={`/know-your-rights/${s.slug}`}
                className="group card-heritage p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
                      colorMap[s.color]
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="tag">{s.tag}</span>
                </div>
                <p className="mt-5 font-serif text-[17px] font-medium leading-snug text-ink-900">
                  {s.title}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-[12.5px] font-medium text-saffron-700 opacity-0 transition-opacity group-hover:opacity-100">
                  Open rights card
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            );
          })}
        </div>

        <p className="mt-12 text-center text-sm text-ink-400">
          More scenarios coming in Phase 2. If yours isn't here,{" "}
          <Link href="/" className="text-saffron-700 underline-offset-4 hover:underline">
            tell us
          </Link>{" "}
          and we'll add it.
        </p>
      </section>
    </>
  );
}
