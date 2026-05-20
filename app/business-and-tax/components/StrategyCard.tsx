"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Lightbulb, Lock, ArrowRight, TrendingUp, Building2, Landmark, Briefcase, Crown, Scale, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";

// Types
export type Category = 'business' | 'trader' | 'real-estate' | 'freelancer' | 'elite';

export interface LegalRef {
  act: string;
  section: string;
  url?: string;
}

export interface Strategy {
  title: string;
  difficulty: "Easy" | "Medium" | "Advanced" | "Expert";
  risk: "None" | "Low" | "Medium" | "High";
  impact: "Low" | "Medium" | "High" | "Extremely High";
  description: string;
  practicalApplication?: string;
  deepLoophole?: string;
  AnimationComponent?: React.FC;
  legalRefs?: LegalRef[];
}

export const categoriesList: { id: Category; label: string; icon: any }[] = [
  { id: 'business', label: 'Business Owners', icon: Building2 },
  { id: 'trader', label: 'Stock Traders', icon: TrendingUp },
  { id: 'real-estate', label: 'Real Estate', icon: Landmark },
  { id: 'freelancer', label: 'Freelancers & IT', icon: Briefcase },
  { id: 'elite', label: 'Ultra-HNI & Elite', icon: Crown },
];

export function StrategyCard({ 
  strategy
}: { 
  strategy: Strategy;
}) {
  const { title, difficulty, risk, impact, description, practicalApplication, deepLoophole, AnimationComponent } = strategy;
  
  return (
    <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 md:p-8 hover:bg-white/[0.04] transition-all duration-500 hover:border-white/10 group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
        <h3 className="text-2xl font-serif text-white flex-1">{title}</h3>
        
        <div className="flex flex-wrap gap-2 text-xs font-medium">
          <span className={cn(
            "px-2.5 py-1 rounded-md border",
            (difficulty === 'Easy' || difficulty === 'Medium') ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" :
            difficulty === 'Advanced' ? "bg-amber-500/10 border-amber-500/20 text-amber-400" :
            "bg-red-500/10 border-red-500/20 text-red-400"
          )}>
            Complexity: {difficulty}
          </span>
          <span className={cn(
            "px-2.5 py-1 rounded-md border",
            risk === 'None' ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" :
            risk === 'Low' ? "bg-amber-500/10 border-amber-500/20 text-amber-400" :
            "bg-red-500/10 border-red-500/20 text-red-400"
          )}>
            Risk: {risk}
          </span>
          <span className="px-2.5 py-1 rounded-md bg-saffron-500/10 border border-saffron-500/20 text-saffron-400">
            Impact: {impact}
          </span>
        </div>
      </div>
      
      <div className="relative z-10 space-y-6">
        <p className="text-zinc-300">{description}</p>
        
        {AnimationComponent && (
          <div className="my-8 rounded-xl overflow-hidden bg-black/40 border border-white/5 p-4 sm:p-8 relative">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:1rem_1rem] pointer-events-none" />
            <AnimationComponent />
          </div>
        )}

        {practicalApplication && (
          <div className="bg-white/[0.02] border border-white/5 p-5 rounded-xl space-y-4">
            <h4 className="font-medium text-saffron-400 flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> Practical Application</h4>
            <div className="text-zinc-400 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: practicalApplication }} />
          </div>
        )}

        {deepLoophole && (
          <div className="bg-white/[0.02] border border-emerald-500/20 p-5 rounded-xl space-y-4">
            <h4 className="font-medium text-white flex items-center gap-2"><Lock className="h-4 w-4 text-emerald-400"/> Deep Loophole</h4>
            <div className="text-zinc-400 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: deepLoophole }} />
          </div>
        )}

        {strategy.legalRefs && strategy.legalRefs.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-white/5">
            {strategy.legalRefs.map((ref, idx) => (
              <div key={idx} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300">
                <Scale className="h-3 w-3 text-saffron-400" />
                <span className="font-medium text-white">{ref.section}</span>
                <span className="text-zinc-400">of {ref.act}</span>
                {ref.url && (
                  <Link href={ref.url} target="_blank" className="ml-1 text-zinc-500 hover:text-saffron-400 transition-colors">
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
