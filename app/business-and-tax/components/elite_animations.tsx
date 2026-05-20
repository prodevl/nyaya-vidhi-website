"use client";

import { motion } from "framer-motion";
import React from "react";

export const NovelDebtLoopholeAnimation = () => {
  return (
    <div className="w-full h-[350px] flex items-center justify-center relative overflow-hidden text-xs sm:text-sm">
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 400">
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(245, 158, 11, 0)" />
            <stop offset="50%" stopColor="rgba(245, 158, 11, 0.8)" />
            <stop offset="100%" stopColor="rgba(245, 158, 11, 0)" />
          </linearGradient>
        </defs>

        {/* Circular Flow Paths */}
        <motion.path d="M 200 150 Q 400 -50 600 150" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3" strokeDasharray="5,5" />
        <motion.path d="M 200 150 Q 400 350 600 150" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3" strokeDasharray="5,5" />
        
        {/* Token/Data particles */}
        <motion.circle r="4" fill="#A855F7" initial={{ cx: 200, cy: 150 }} animate={{ cx: 600, cy: 150 }} transition={{ duration: 3, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }} />
        <motion.circle r="4" fill="#10B981" initial={{ cx: 600, cy: 150 }} animate={{ cx: 200, cy: 150 }} transition={{ duration: 3, repeat: Infinity, repeatType: "loop", ease: "easeInOut", delay: 1.5 }} />
        
        {/* Connection to Bank */}
        <motion.path d="M 600 150 L 600 300" fill="none" stroke="rgba(16,185,129,0.3)" strokeWidth="2" strokeDasharray="5,5" />
        <motion.path d="M 600 300 L 200 300" fill="none" stroke="rgba(16,185,129,0.3)" strokeWidth="2" strokeDasharray="5,5" />
        <motion.path d="M 200 300 L 200 150" fill="none" stroke="rgba(16,185,129,0.3)" strokeWidth="2" strokeDasharray="5,5" />

        <motion.circle r="4" fill="#F59E0B" initial={{ cx: 600, cy: 150 }} animate={{ cx: 600, cy: 300 }} transition={{ duration: 1, repeat: Infinity }} />
        <motion.circle r="4" fill="#F59E0B" initial={{ cx: 600, cy: 300 }} animate={{ cx: 200, cy: 300 }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.circle r="4" fill="#F59E0B" initial={{ cx: 200, cy: 300 }} animate={{ cx: 200, cy: 150 }} transition={{ duration: 1, repeat: Infinity }} />
      </svg>

      <div className="absolute top-[80px] left-[15%] w-32 h-32 bg-ink-950/80 border border-zinc-700/50 rounded-2xl backdrop-blur-md flex flex-col items-center justify-center p-4 z-10 shadow-2xl">
        <span className="text-2xl mb-2">🏢</span>
        <span className="text-white font-bold">Indian OpCo</span>
        <span className="text-zinc-500 text-[10px] text-center mt-1">Pays 100% Royalty, 0% Tax</span>
      </div>

      <div className="absolute top-[80px] right-[15%] w-32 h-32 bg-ink-950/80 border border-purple-500/30 rounded-2xl backdrop-blur-md flex flex-col items-center justify-center p-4 z-10 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
        <span className="text-2xl mb-2">🌴</span>
        <span className="text-purple-400 font-bold text-center">Offshore Trust<br/>(Bahamas)</span>
        <span className="text-purple-300/50 text-[10px] text-center mt-1">Perpetual Zero-Coupon Bond</span>
      </div>

      <div className="absolute top-[250px] right-[15%] w-32 h-20 bg-ink-950/80 border border-emerald-500/30 rounded-xl backdrop-blur-md flex flex-col items-center justify-center z-10">
        <span className="text-emerald-400 font-bold">SBLC Guarantee</span>
        <span className="text-emerald-500/50 text-[10px]">Collateral pledged</span>
      </div>

      <div className="absolute top-[250px] left-[15%] w-32 h-20 bg-gradient-to-br from-emerald-500/20 to-emerald-900/40 border border-emerald-500/50 rounded-xl backdrop-blur-md flex flex-col items-center justify-center z-10 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
        <span className="text-emerald-400 font-bold">₹50 Cr Loan</span>
        <span className="text-white text-[10px]">100% Tax-Free Cash</span>
      </div>

      {/* Floating Labels */}
      <div className="absolute top-[30px] left-1/2 -translate-x-1/2 text-purple-400 font-medium text-xs bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
        IP Transfer & Tokenization
      </div>
      <div className="absolute top-[180px] left-1/2 -translate-x-1/2 text-zinc-400 font-medium text-xs bg-white/5 px-3 py-1 rounded-full border border-white/10">
        100% Deductible Royalty Exiting India
      </div>
      <div className="absolute top-[320px] left-1/2 -translate-x-1/2 text-emerald-400 font-medium text-xs bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
        Tax-Free Bank Loan Returning to Promoter
      </div>
    </div>
  );
};

export const TrustShieldAnimation = () => {
  return (
    <div className="w-full h-[300px] flex items-center justify-center relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      <div className="w-48 h-48 rounded-full border-2 border-blue-500/30 flex items-center justify-center relative z-10 backdrop-blur-sm bg-blue-500/5">
        <motion.div 
          className="absolute inset-0 rounded-full border border-blue-400/50"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ borderStyle: "dashed" }}
        />
        <div className="text-center">
          <span className="text-4xl">🛡️</span>
          <h4 className="text-blue-400 font-bold mt-2">Discretionary Trust</h4>
          <p className="text-[10px] text-blue-200/50">Asset Protection Shield</p>
        </div>
        
        {/* Floating assets inside */}
        <motion.div className="absolute top-4 left-8 text-xl" animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>🏢</motion.div>
        <motion.div className="absolute bottom-8 right-6 text-xl" animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity }}>📈</motion.div>
        <motion.div className="absolute top-1/2 -left-4 text-xl" animate={{ x: [0, 10, 0] }} transition={{ duration: 3.5, repeat: Infinity }}>💰</motion.div>
      </div>

      {/* External Threats */}
      <motion.div 
        className="absolute left-4 top-1/4 bg-red-500/10 border border-red-500/30 text-red-400 px-3 py-1 rounded-full text-xs font-bold"
        animate={{ x: [0, 20, 0] }} transition={{ duration: 2, repeat: Infinity }}
      >
        Litigation
      </motion.div>
      <motion.div 
        className="absolute right-4 bottom-1/4 bg-red-500/10 border border-red-500/30 text-red-400 px-3 py-1 rounded-full text-xs font-bold"
        animate={{ x: [0, -20, 0] }} transition={{ duration: 2.5, repeat: Infinity }}
      >
        Estate Tax
      </motion.div>
    </div>
  );
};

export const AgriWashingAnimation = () => {
  return (
    <div className="w-full h-[250px] flex items-center justify-between px-4 sm:px-12 relative">
      <div className="flex flex-col items-center z-10 w-24">
        <span className="text-3xl mb-2">💵</span>
        <span className="text-red-400 font-bold text-xs text-center border border-red-500/30 bg-red-500/10 rounded px-2 py-1">Untaxed Cash</span>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative h-full">
        <motion.path 
          d="M 0 125 L 100 125" 
          stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4"
        />
        <motion.div 
          className="w-32 h-32 rounded-full border-4 border-emerald-500/50 flex items-center justify-center bg-emerald-500/10 shadow-[0_0_40px_rgba(16,185,129,0.2)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <span className="text-4xl" style={{ transform: "rotate(-360deg)" }}>🌾</span>
        </motion.div>
        <span className="absolute bottom-8 text-emerald-400 font-bold text-xs bg-ink-950 px-2">Section 10(1) Farm</span>
      </div>

      <div className="flex flex-col items-center z-10 w-24">
        <span className="text-3xl mb-2">🏦</span>
        <span className="text-emerald-400 font-bold text-xs text-center border border-emerald-500/30 bg-emerald-500/10 rounded px-2 py-1">0% Tax White Money</span>
      </div>

      {/* Moving Cash */}
      <motion.div 
        className="absolute top-1/2 left-[20%] text-sm"
        animate={{ x: ["0%", "300%"], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        💵
      </motion.div>
      <motion.div 
        className="absolute top-1/2 right-[30%] text-sm"
        animate={{ x: ["0%", "150%"], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      >
        ✨
      </motion.div>
    </div>
  );
};
