"use client";

import { Printer } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PrintButton({
  label = "Print",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => typeof window !== "undefined" && window.print()}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-ink-900 px-4 py-2 text-[13px] font-semibold text-paper-50 transition hover:bg-ink-700",
        className
      )}
    >
      <Printer className="h-3.5 w-3.5" />
      {label}
    </button>
  );
}
