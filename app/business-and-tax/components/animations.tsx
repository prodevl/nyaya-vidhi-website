"use client";

import { motion } from "framer-motion";
import React from "react";

export const EntityArbitrageAnimation = () => {
  return (
    <div className="w-full h-[300px] flex items-center justify-center relative">
      <div className="flex w-full max-w-2xl justify-between items-center relative">
        {/* Main Company */}
        <motion.div 
          className="flex flex-col items-center z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-900/40 border border-red-500/30 flex items-center justify-center backdrop-blur-md">
            <span className="text-red-400 font-bold text-lg">Pvt Ltd</span>
          </div>
          <span className="text-zinc-400 text-sm mt-3">30% Tax Bracket</span>
        </motion.div>

        {/* Transfer Path */}
        <div className="flex-1 relative h-24 mx-4 flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
            <motion.line 
              x1="0" y1="50" x2="100" y2="50"
              stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="5,5"
            />
            <motion.path 
              d="M 10 50 Q 50 10 90 50"
              fill="none"
              stroke="rgba(245,158,11,0.5)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </svg>
          <motion.div 
            className="px-3 py-1 bg-saffron-500/20 text-saffron-400 text-xs rounded-full border border-saffron-500/30 whitespace-nowrap absolute -top-4"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Lease / Salary / Consultancy
          </motion.div>
        </div>

        {/* HUF/LLP */}
        <motion.div 
          className="flex flex-col items-center z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-900/40 border border-emerald-500/30 flex items-center justify-center backdrop-blur-md relative">
            <span className="text-emerald-400 font-bold text-lg">HUF/LLP</span>
            <motion.div 
              className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
            >
              <span className="text-white text-[10px] font-bold">0%</span>
            </motion.div>
          </div>
          <span className="text-zinc-400 text-sm mt-3">Basic Exemption</span>
        </motion.div>
      </div>
    </div>
  );
};

export const TaxHarvestingAnimation = () => {
  return (
    <div className="w-full h-[300px] flex items-center justify-center relative">
      <div className="w-full max-w-lg h-48 relative border-b border-l border-white/10">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Grid lines */}
          {[25, 50, 75].map((y) => (
            <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
          ))}
          {/* Safe Zone */}
          <rect x="0" y="50" width="100" height="50" fill="rgba(16,185,129,0.1)" />
          <text x="5" y="90" fill="rgba(16,185,129,0.5)" fontSize="4" fontWeight="bold">₹1.25L Tax Free Zone</text>

          {/* Graph Line */}
          <motion.path 
            d="M 0 100 Q 20 80 40 40 L 40 100 L 45 100 L 45 40 Q 70 20 100 10"
            fill="none"
            stroke="rgba(245,158,11,0.8)"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />

          {/* Harvesting Events */}
          <motion.circle cx="40" cy="40" r="2" fill="#10B981" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5 }} />
          <motion.circle cx="45" cy="40" r="2" fill="#3B82F6" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.6 }} />
          
          <motion.text x="35" y="30" fill="white" fontSize="4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>SELL</motion.text>
          <motion.text x="45" y="30" fill="white" fontSize="4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>BUY</motion.text>
        </svg>
      </div>
    </div>
  );
};

export const Section54FAnimation = () => {
  return (
    <div className="w-full h-[300px] flex flex-col sm:flex-row items-center justify-center gap-8 relative">
      <motion.div 
        className="w-32 h-32 rounded-xl bg-amber-500/20 border border-amber-500/30 flex flex-col items-center justify-center"
        initial={{ scale: 0 }} animate={{ scale: 1 }}
      >
        <span className="text-3xl mb-2">📈</span>
        <span className="text-amber-400 font-bold text-sm">₹5 Cr Stocks</span>
        <span className="text-red-400 text-xs line-through mt-1">₹56L Tax</span>
      </motion.div>

      <div className="relative w-24 h-12 flex items-center justify-center">
        <motion.div 
          className="h-1 w-full bg-gradient-to-r from-amber-500/50 to-emerald-500/50 rounded-full"
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1 }}
        />
        <motion.div 
          className="absolute text-xs bg-ink-950 px-2 text-zinc-300 font-medium"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
        >
          Sec 54F Reinvest
        </motion.div>
      </div>

      <motion.div 
        className="w-32 h-32 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex flex-col items-center justify-center"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5 }}
      >
        <span className="text-3xl mb-2">🏠</span>
        <span className="text-emerald-400 font-bold text-sm">Real Estate</span>
        <span className="text-emerald-300 font-bold text-xs mt-1 bg-emerald-900/50 px-2 py-0.5 rounded">0% TAX</span>
      </motion.div>
    </div>
  );
};

export const Section44ADAAnimation = () => {
  return (
    <div className="w-full h-[300px] flex items-center justify-center relative">
      <div className="flex flex-col items-center w-full max-w-md">
        <div className="w-full h-12 bg-white/5 border border-white/10 rounded-full overflow-hidden flex relative mb-4">
          <motion.div 
            className="h-full bg-emerald-500/40 flex items-center justify-center border-r border-emerald-500/50"
            initial={{ width: "0%" }}
            animate={{ width: "50%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <span className="text-emerald-300 font-bold text-sm">50% Presumptive Expenses</span>
          </motion.div>
          <motion.div 
            className="h-full bg-red-500/40 flex items-center justify-center flex-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <span className="text-red-300 font-bold text-sm">50% Taxable Base</span>
          </motion.div>
        </div>
        
        <motion.div 
          className="w-1/2 ml-auto mt-4 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <div className="flex justify-between text-sm mb-1">
            <span className="text-zinc-400">80C/80D Deductions</span>
            <span className="text-amber-400">-₹2.0L</span>
          </div>
          <div className="flex justify-between text-sm mb-2 border-b border-white/10 pb-2">
            <span className="text-zinc-400">87A Rebate</span>
            <span className="text-amber-400">Applicable</span>
          </div>
          <div className="flex justify-between font-bold">
            <span className="text-emerald-400">Final Tax</span>
            <span className="text-emerald-400">₹0</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export const GlobalRoutingAnimation = () => {
  return (
    <div className="w-full h-[300px] flex items-center justify-center relative">
      <svg className="w-full max-w-2xl h-full" viewBox="0 0 400 200">
        <motion.path d="M 50 100 Q 200 -50 350 100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="5,5" />
        <motion.path d="M 50 100 Q 200 250 350 100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="5,5" />
        
        <motion.circle cx="50" cy="100" r="30" fill="rgba(59,130,246,0.2)" stroke="rgba(59,130,246,0.5)" strokeWidth="2" />
        <text x="50" y="105" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">US Client</text>

        <motion.circle cx="200" cy="30" r="35" fill="rgba(16,185,129,0.2)" stroke="rgba(16,185,129,0.5)" strokeWidth="2" />
        <text x="200" y="35" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Dubai LLC</text>
        <text x="200" y="50" textAnchor="middle" fill="#10B981" fontSize="10" fontWeight="bold">0% Corporate Tax</text>

        <motion.circle cx="350" cy="100" r="30" fill="rgba(245,158,11,0.2)" stroke="rgba(245,158,11,0.5)" strokeWidth="2" />
        <text x="350" y="105" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">India (You)</text>

        {/* Money flow */}
        <motion.circle r="5" fill="#10B981" initial={{ cx: 50, cy: 100 }} animate={{ cx: 200, cy: 30 }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }} />
        <motion.circle r="5" fill="#F59E0B" initial={{ cx: 200, cy: 30 }} animate={{ cx: 350, cy: 100 }} transition={{ duration: 2, repeat: Infinity, delay: 2, repeatDelay: 1 }} />
        
        <text x="125" y="55" fill="white" fontSize="10" opacity="0.7">$100k Payment</text>
        <text x="275" y="55" fill="white" fontSize="10" opacity="0.7">Tax-Free Dividend</text>
      </svg>
    </div>
  );
}

export const EmptyAnimation = () => null;
