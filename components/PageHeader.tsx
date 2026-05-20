import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Crumb = { label: string; href?: string };

type PageHeaderProps = {
  eyebrow?: string;
  sanskrit?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  className?: string;
  align?: "left" | "center";
};

export default function PageHeader({
  eyebrow,
  sanskrit,
  title,
  description,
  crumbs,
  className,
  align = "left",
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        "relative overflow-hidden pt-12 pb-14 lg:pt-20 lg:pb-20",
        className
      )}
    >
      {/* background ornament */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-saffron-50/60 to-transparent" />
        <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-saffron-200/30 blur-3xl" />
        <div className="absolute inset-0 pattern-jaali-fine mask-fade-b opacity-30" />
      </div>

      <div className="container-page">
        {crumbs && crumbs.length > 0 && (
          <nav
            className="mb-6 flex items-center gap-1.5 text-xs text-ink-400"
            aria-label="Breadcrumb"
          >
            {crumbs.map((c, i) => (
              <span key={i} className="inline-flex items-center gap-1.5">
                {c.href ? (
                  <Link href={c.href} className="hover:text-saffron-600">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-ink-500">{c.label}</span>
                )}
                {i < crumbs.length - 1 && (
                  <ChevronRight className="h-3 w-3 text-ink-400" />
                )}
              </span>
            ))}
          </nav>
        )}

        <div className={cn(align === "center" && "mx-auto max-w-3xl text-center")}>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {sanskrit && (
            <p className="devanagari mt-4 text-sm text-ink-400">{sanskrit}</p>
          )}
          <h1
            className={cn(
              "font-serif font-medium tracking-tight text-balance text-ink-900",
              "mt-3 text-display-lg",
              align === "center" && "mx-auto"
            )}
          >
            {title}
          </h1>
          {description && (
            <p
              className={cn(
                "mt-5 max-w-2xl text-pretty text-[17px] leading-relaxed text-ink-500",
                align === "center" && "mx-auto"
              )}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}
