import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  monogramOnly?: boolean;
};

/**
 * Nyaya Vidhi logomark — a stylized scale of justice
 * fused with a chakra-inspired 24-spoke ring.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-9 w-9", className)}
      aria-hidden="true"
    >
      {/* Outer chakra ring */}
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.25" opacity="0.35" />
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="0.75" opacity="0.2" />

      {/* 24 spokes (Ashoka chakra) */}
      <g stroke="currentColor" strokeWidth="0.75" opacity="0.55">
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          return (
            <line
              key={i}
              x1="24"
              y1="6"
              x2="24"
              y2="10"
              transform={`rotate(${angle} 24 24)`}
            />
          );
        })}
      </g>

      {/* Inner scale of justice */}
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <line x1="24" y1="14" x2="24" y2="34" />
        <line x1="14" y1="20" x2="34" y2="20" />
        {/* left pan */}
        <path d="M14 20 L11 26 L17 26 Z" fill="currentColor" fillOpacity="0.12" />
        {/* right pan */}
        <path d="M34 20 L31 26 L37 26 Z" fill="currentColor" fillOpacity="0.12" />
        {/* base */}
        <line x1="20" y1="34" x2="28" y2="34" />
      </g>

      {/* Center dot */}
      <circle cx="24" cy="20" r="1.4" fill="currentColor" />
    </svg>
  );
}

export default function Logo({ className, monogramOnly = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 text-ink-900 dark:text-white shrink-0",
        className
      )}
      aria-label="Nyaya Vidhi — Home"
    >
      <span className="text-saffron-600 dark:text-saffron-500 transition-transform duration-500 group-hover:rotate-12 shrink-0">
        <LogoMark />
      </span>
      {!monogramOnly && (
        <span className="flex flex-col leading-none shrink-0 whitespace-nowrap">
          <span className="font-serif text-[17px] font-semibold tracking-tight">
            Nyaya Vidhi
          </span>
          <span className="devanagari mt-1 text-[10px] tracking-wide text-ink-400 dark:text-zinc-400">
            न्याय विधि · Indian Law, Lucid
          </span>
        </span>
      )}
    </Link>
  );
}
