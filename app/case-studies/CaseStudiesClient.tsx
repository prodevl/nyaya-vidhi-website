"use client";

import { useState } from "react";
import { ArrowRight, BookOpen, ChevronDown, Filter } from "lucide-react";
import Link from "next/link";
import { categories, scenarios } from "./data";
import { cn } from "@/lib/utils";

export default function CaseStudiesClient() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [expandedId, setExpandedId] = useState<string | null>(scenarios[0].id);

  const filteredScenarios =
    activeCategory === "All"
      ? scenarios
      : scenarios.filter((s) => s.category === activeCategory);

  return (
    <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 pb-24">
      {/* Sidebar - Sticky Categories */}
      <aside className="lg:col-span-3 lg:sticky lg:top-32 space-y-8">
        <div>
          <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-400 mb-4">
            <Filter className="h-3.5 w-3.5" /> Filter by Category
          </h3>
          <nav className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
            <button
              onClick={() => setActiveCategory("All")}
              className={cn(
                "rounded-lg px-3 py-2 text-left text-sm font-medium transition-all duration-200",
                activeCategory === "All"
                  ? "bg-saffron-50 text-saffron-700 shadow-sm ring-1 ring-saffron-200/50"
                  : "text-ink-600 hover:bg-paper-100 hover:text-ink-900"
              )}
            >
              All Scenarios
              <span className="ml-2 text-xs font-normal opacity-60">
                ({scenarios.length})
              </span>
            </button>
            {categories.map((cat) => {
              const count = scenarios.filter((s) => s.category === cat).length;
              if (count === 0) return null;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "rounded-lg px-3 py-2 text-left text-sm font-medium transition-all duration-200",
                    activeCategory === cat
                      ? "bg-saffron-50 text-saffron-700 shadow-sm ring-1 ring-saffron-200/50"
                      : "text-ink-600 hover:bg-paper-100 hover:text-ink-900"
                  )}
                >
                  {cat}
                  <span className="ml-2 text-xs font-normal opacity-60">
                    ({count})
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content - Scenarios List */}
      <div className="lg:col-span-9 space-y-6">
        {filteredScenarios.map((scenario) => {
          const Icon = scenario.icon;
          const isExpanded = expandedId === scenario.id;

          return (
            <div
              key={scenario.id}
              className={cn(
                "group relative overflow-hidden rounded-2xl border transition-all duration-300",
                isExpanded
                  ? "border-saffron-300 bg-white shadow-lg shadow-saffron-100/50"
                  : "border-ink-100 bg-paper-50 hover:border-saffron-200 hover:bg-white hover:shadow-md"
              )}
            >
              {/* Header / Clickable Area */}
              <button
                onClick={() => setExpandedId(isExpanded ? null : scenario.id)}
                className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300",
                      isExpanded
                        ? "bg-saffron-100 text-saffron-700"
                        : "bg-paper-200 text-ink-500 group-hover:bg-saffron-50 group-hover:text-saffron-600"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-saffron-600 mb-1">
                      {scenario.category}
                    </p>
                    <h2 className="font-serif text-xl font-medium text-ink-900 sm:text-2xl">
                      {scenario.title}
                    </h2>
                  </div>
                </div>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-ink-400 transition-transform duration-300",
                    isExpanded ? "rotate-180 text-saffron-600" : "group-hover:text-ink-600"
                  )}
                />
              </button>

              {/* Expandable Content */}
              <div
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-saffron-100/50 bg-gradient-to-b from-transparent to-saffron-50/20 p-5 sm:p-8 pt-6">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
                      
                      {/* Left Column: Situation & Laws */}
                      <div className="md:col-span-5 space-y-8">
                        <div>
                          <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink-400 mb-3">
                            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-ink-100 text-ink-700">1</span>
                            The Situation
                          </h3>
                          <p className="text-[15px] leading-relaxed text-ink-700">
                            {scenario.situation}
                          </p>
                        </div>

                        <div>
                          <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink-400 mb-3">
                            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-ink-100 text-ink-700">2</span>
                            Laws to Invoke
                          </h3>
                          <div className="space-y-3">
                            {scenario.laws.map((law, lIdx) => (
                              <div key={lIdx} className="rounded-xl border border-saffron-100 bg-white p-3.5 shadow-sm">
                                <p className="font-medium text-sm text-ink-900 mb-1">{law.act}</p>
                                <p className="text-xs text-ink-600 leading-snug">{law.sections}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Column: Action Steps */}
                      <div className="md:col-span-7">
                        <div className="rounded-2xl border border-saffron-200 bg-white p-6 shadow-sm">
                          <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-saffron-700 mb-5">
                            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-saffron-100 text-saffron-800">3</span>
                            How to Fight Back
                          </h3>
                          <ul className="space-y-5">
                            {scenario.actionSteps.map((step, sIdx) => (
                              <li key={sIdx} className="flex items-start gap-3">
                                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-saffron-50 border border-saffron-200 text-xs font-medium text-saffron-600">
                                  {sIdx + 1}
                                </div>
                                <span className="text-[15px] leading-relaxed text-ink-700">{step}</span>
                              </li>
                            ))}
                          </ul>
                          {(scenario.sourceLink) && (
                            <div className="mt-6 flex justify-end">
                              <a 
                                href={scenario.sourceLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-saffron-600 hover:text-saffron-700 hover:underline transition-colors"
                              >
                                Source / Read More <ArrowRight className="h-3 w-3" />
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {filteredScenarios.length === 0 && (
          <div className="rounded-2xl border border-ink-100 bg-paper-50 p-12 text-center">
            <p className="text-ink-500">No scenarios found for this category.</p>
            <button
              onClick={() => setActiveCategory("All")}
              className="mt-4 text-saffron-600 font-medium hover:underline"
            >
              View all scenarios
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 rounded-3xl bg-gradient-to-br from-ink-900 to-ink-950 p-8 sm:p-12 text-center shadow-xl">
          <BookOpen className="mx-auto h-8 w-8 text-saffron-400" />
          <h3 className="mt-5 font-serif text-2xl font-medium tracking-tight text-white">
            Need advice for a specific situation?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-ink-200">
            While this guide provides general legal steps, every situation is unique. Explore our statutes section or consult with a legal professional to take action.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/laws" className="rounded-full bg-saffron-500 px-6 py-3 text-sm font-semibold text-ink-950 transition hover:bg-saffron-400">
              Browse Indian Laws
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
