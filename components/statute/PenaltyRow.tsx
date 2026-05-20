"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, Clock, Landmark, AlertTriangle, CheckCircle2 } from "lucide-react";
import type { BriefPenaltyRow } from "@/lib/statutes/_types";

export default function PenaltyRow({ row }: { row: BriefPenaltyRow }) {
  const [expanded, setExpanded] = useState(false);
  const hasEliteData = !!(row.actionRequired || row.timeLimit || row.authority || row.defences);

  const typeConfig: Record<string, string> = {
    definition: "bg-purple-50 text-purple-700 ring-purple-600/20",
    structural: "bg-blue-50 text-blue-700 ring-blue-600/20",
    right: "bg-green-50 text-green-700 ring-green-600/20",
    civil: "bg-orange-50 text-orange-700 ring-orange-600/20",
    criminal: "bg-red-50 text-red-700 ring-red-600/10",
    procedural: "bg-cyan-50 text-cyan-700 ring-cyan-600/20",
    compliance: "bg-teal-50 text-teal-700 ring-teal-600/20",
  };
  const typeClass = row.type && typeConfig[row.type] ? typeConfig[row.type] : "bg-ink-50 text-ink-700 ring-ink-600/20";

  return (
    <>
      <tr
        onClick={() => hasEliteData && setExpanded(!expanded)}
        className={`transition-colors ${hasEliteData ? 'cursor-pointer hover:bg-paper-50' : 'hover:bg-paper-50/50'}`}
      >
        <td className="px-5 py-4 font-mono font-medium text-ink-900 whitespace-nowrap">
          §{row.section}
          {row.subSection && row.subSection.trim() !== "-" && `(${row.subSection})`}
        </td>
        <td className="px-5 py-4">
          {row.type ? (
            <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${typeClass} capitalize`}>
              {row.type.replace("_", " ")}
            </span>
          ) : (
            <span className="text-ink-400 text-xs">-</span>
          )}
        </td>
        <td className="px-5 py-4 font-medium text-ink-800">
          <div className="flex items-center justify-between gap-4">
            <span>{row.lawInBrief}</span>
            {hasEliteData && (
              <span className="text-ink-400">
                {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </span>
            )}
          </div>
        </td>
        <td className="px-5 py-4 text-[13px] text-ink-600">
          {row.applicableTo || "-"}
        </td>
        <td className="px-5 py-4">
          <span className="text-ink-600">
            {row.punishment === "-" ? <span className="italic text-ink-400">Administrative / Structural</span> : row.punishment}
          </span>
          {(row.bailStatus || row.severity) && (
            <div className="mt-2 flex flex-wrap gap-2">
              {row.bailStatus && (
                <span className="inline-flex items-center rounded-md bg-stone-100 px-2 py-1 text-[10px] font-semibold text-stone-600 uppercase tracking-wider">
                  {row.bailStatus}
                </span>
              )}
              {row.severity && (
                <span className={`inline-flex items-center rounded-md px-2 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                  row.severity === "high" ? "bg-red-50 text-red-700" :
                  row.severity === "medium" ? "bg-orange-50 text-orange-700" :
                  "bg-blue-50 text-blue-700"
                }`}>
                  {row.severity} RISK
                </span>
              )}
            </div>
          )}
        </td>
      </tr>
      
      {/* Elite Expanded Data Row */}
      {expanded && hasEliteData && (
        <tr className="bg-paper-50/50">
          <td colSpan={5} className="p-0 border-t-0">
            <div className="px-5 py-4 border-l-2 border-saffron-500 m-2 rounded-r-lg bg-white shadow-sm">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {row.actionRequired && (
                  <div className="space-y-1">
                    <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-400"><CheckCircle2 className="h-3.5 w-3.5" /> Practical Action</p>
                    <p className="text-[13px] font-medium leading-relaxed text-ink-900">{row.actionRequired}</p>
                  </div>
                )}
                {row.timeLimit && (
                  <div className="space-y-1">
                    <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-400"><Clock className="h-3.5 w-3.5" /> Time Limit</p>
                    <p className="text-[13px] font-medium leading-relaxed text-ink-900">{row.timeLimit}</p>
                  </div>
                )}
                {row.authority && (
                  <div className="space-y-1">
                    <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-400"><Landmark className="h-3.5 w-3.5" /> Authority</p>
                    <p className="text-[13px] font-medium leading-relaxed text-ink-900">{row.authority}</p>
                  </div>
                )}
                {row.defences && (
                  <div className="space-y-1">
                    <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-400"><AlertTriangle className="h-3.5 w-3.5" /> Defences & Exceptions</p>
                    <p className="text-[13px] font-medium leading-relaxed text-ink-900">{row.defences}</p>
                  </div>
                )}
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
