
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, ArrowRight, HandCoins } from "lucide-react";
import { cn } from "@/lib/utils";
import { Category, categoriesList, StrategyCard } from "./components/StrategyCard";
import { allStrategiesMap } from "./components/data";

export default function BusinessAndTaxPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("business");

  useEffect(() => {
    // Force dark mode strictly for this page
    document.documentElement.classList.add("dark");
    document.body.style.backgroundColor = "#0F0B07"; // ink-950

    return () => {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="min-h-screen bg-ink-950 text-white selection:bg-saffron-500/30 font-sans pb-32 relative">
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-40 w-[800px] h-[400px] bg-saffron-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container-page relative z-10 flex flex-col items-center text-center">
          <div className="max-w-4xl flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-saffron-500/20 bg-saffron-500/10 text-saffron-400 text-xs font-medium tracking-wide mb-6"
            >
              <ShieldAlert className="h-3.5 w-3.5" />
              <span>Advanced Tax Intelligence</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="font-serif text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1] text-balance"
            >
              The Ultimate Tax Optimization Playbook
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="mt-6 text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl font-light text-balance"
            >
              We go beyond surface-level advice. This is a deep-dive analysis into complex legal loopholes, structural arbitrages, and advanced tax planning strategies for high-net-worth individuals, businesses, and aggressive investors in India.
            </motion.p>
          </div>
        </div>
      </header>

      {/* Category Navigator and Content Two-Column Layout */}
      <div className="container-page relative min-h-[600px] flex flex-col lg:flex-row gap-8 lg:gap-12 items-start mt-8 lg:mt-0">
        
        {/* Left Sidebar Navigator */}
        <div className="w-full lg:w-72 flex-shrink-0 sticky top-[100px] lg:top-[120px] z-40">
          <div className="-mx-4 px-4 sm:mx-0 sm:px-0">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring", bounce: 0.4 }}
              className="flex lg:flex-col items-start gap-1.5 p-1.5 lg:p-2 rounded-full lg:rounded-2xl bg-ink-950/80 backdrop-blur-xl border border-white/10 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] overflow-x-auto lg:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full scroll-smooth"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {categoriesList.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      "relative flex items-center gap-3 px-5 py-2.5 lg:px-4 lg:py-3.5 rounded-full lg:rounded-xl text-[14px] font-medium transition-colors whitespace-nowrap outline-none flex-shrink-0 group w-full text-left",
                      isActive ? "text-ink-950" : "text-zinc-400 hover:text-white"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-category-pill"
                        className="absolute inset-0 bg-gradient-to-r from-saffron-400 to-saffron-500 rounded-full lg:rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {!isActive && (
                      <span className="absolute inset-0 rounded-full lg:rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                    <span className="relative z-10 flex items-center gap-3 w-full">
                      <cat.icon className={cn("h-4 w-4", isActive ? "text-ink-950" : "text-zinc-500 group-hover:text-zinc-300")} />
                      {cat.label}
                    </span>
                  </button>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex-1 min-w-0 w-full pb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 30, scale: 0.98, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, scale: 0.98, filter: "blur(8px)" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12 max-w-4xl"
            >
              {activeCategory === "business" && (
                <div className="mb-12 lg:text-left text-center">
                  <h2 className="text-3xl font-serif text-white mb-4">Corporate Structuring & Business Arbitrage</h2>
                  <p className="text-zinc-400 max-w-2xl text-balance">Most businesses leak cash because they conflate personal wealth with corporate treasuries. By building multi-entity structures, you drastically reduce your effective tax rate from 30%+ to under 15%.</p>
                </div>
              )}
              {activeCategory === "trader" && (
                <div className="mb-12 lg:text-left text-center">
                  <h2 className="text-3xl font-serif text-white mb-4">Stock Market & F&O Tax Loopholes</h2>
                  <p className="text-zinc-400 max-w-2xl text-balance">Traders get crushed by STCG, LTCG, and business income slabs. But the law provides incredible mechanisms to absorb losses and entirely eliminate LTCG if you know where to route your capital.</p>
                </div>
              )}
              {activeCategory === "real-estate" && (
                <div className="mb-12 lg:text-left text-center">
                  <h2 className="text-3xl font-serif text-white mb-4">Real Estate Investment Optimization</h2>
                  <p className="text-zinc-400 max-w-2xl text-balance">Real estate is the playground of the wealthy. The Income Tax Act provides maximum relief here because it directly stimulates the economy. Here is how you compound it.</p>
                </div>
              )}
              {activeCategory === "freelancer" && (
                <div className="mb-12 lg:text-left text-center">
                  <h2 className="text-3xl font-serif text-white mb-4">Freelancers, Software Devs & Consultants</h2>
                  <p className="text-zinc-400 max-w-2xl text-balance">Software developers earning foreign remittance and high-ticket freelancers have access to the single greatest tax loophole in the Indian Tax Code.</p>
                </div>
              )}
              {activeCategory === "elite" && (
                <div className="mb-12 lg:text-left text-center">
                  <h2 className="text-3xl font-serif text-white mb-4">The Ultra-HNI, Corporate & Bureaucrat Playbook</h2>
                  <p className="text-zinc-400 max-w-2xl text-balance">This section delves into extremely complex, highly protected structural arbitrages used by top-tier conglomerates, bureaucrats, and multi-generational family offices. These mechanisms border on the bleeding edge of the law.</p>
                </div>
              )}

              <div className="space-y-8">
                {allStrategiesMap[activeCategory].map((strategy, idx) => (
                  <StrategyCard key={idx} strategy={strategy} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="container-page pb-24">
        {/* Advisory Upsell */}
        <div className="mt-12 rounded-3xl bg-gradient-to-br from-saffron-900/20 to-ink-950 border border-saffron-500/20 p-10 md:p-16 relative overflow-hidden max-w-5xl mx-auto">
          <div className="absolute top-0 right-0 p-32 opacity-20 pointer-events-none mix-blend-screen">
            <div className="w-64 h-64 bg-saffron-500 rounded-full blur-[100px]" />
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-saffron-500/30 bg-saffron-500/10 text-saffron-400 text-xs font-medium tracking-wide mb-6">
              <HandCoins className="h-3.5 w-3.5" />
              Private Structuring Advisory
            </div>
            <h3 className="font-serif text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">Need a Custom Structural Overhaul?</h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8 font-light">
              Every financial situation is unique. Our elite network of CAs and Corporate Lawyers can design a bespoke multi-entity structure tailored to your cash flow, ensuring absolute legal compliance while minimizing tax liabilities to the maximum extent.
            </p>
            <button className="inline-flex items-center justify-center rounded-full bg-saffron-600 text-white px-8 py-3.5 text-sm font-medium transition-all hover:bg-saffron-500 hover:scale-[1.02] active:scale-[0.98]">
              Request Private Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

