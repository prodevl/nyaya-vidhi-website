import Link from "next/link";
import { Mail, Send, Github, Twitter, Linkedin } from "lucide-react";
import Logo from "./Logo";
import { categories } from "@/lib/categories";

const footerSections = [
  {
    title: "Explore",
    links: [
      { label: "All Laws", href: "/laws" },
      { label: "Know Your Rights", href: "/know-your-rights" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Daily Level-Up", href: "/daily-level-up" },
      { label: "Business & Tax", href: "/business-and-tax" },
    ],
  },
  {
    title: "Popular Topics",
    links: [
      { label: "Income Tax Basics", href: "/laws/tax-laws/income-tax-basics" },
      { label: "RERA Act", href: "/laws/real-estate/rera-act" },
      { label: "Consumer Complaints", href: "/laws/consumer-rights/filing-a-complaint" },
      { label: "Rights on Arrest", href: "/laws/criminal-laws/your-rights-on-arrest" },
      { label: "Section 138 NI Act", href: "/laws/financial-markets-and-banking/negotiable-instruments-act" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-ink-100/70 dark:border-white/5 bg-paper-200/60 dark:bg-ink-950">
      {/* Decorative jaali pattern */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-saffron-400 dark:via-saffron-500/50 to-transparent" />
      <div className="pointer-events-none absolute inset-0 pattern-jaali-fine opacity-40 dark:opacity-[0.03] mask-fade-b" />

      <div className="container-page relative pt-20 pb-10">
        {/* Newsletter band */}
        <div className="grid grid-cols-1 gap-10 border-b border-ink-100 dark:border-white/10 pb-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">समाचार · Dispatch</p>
            <h2 className="mt-3 font-serif text-4xl font-medium leading-[1.05] tracking-tight text-ink-900 dark:text-white sm:text-5xl">
              Get the weekly{" "}
              <span className="italic text-saffron-600 dark:text-saffron-400">law brief</span>.
            </h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ink-400 dark:text-zinc-400">
              New judgments, statute updates, and one practical clause every Sunday.
              No noise. No paywalls. Unsubscribe anytime.
            </p>
          </div>
          <div className="lg:col-span-5">
            <form className="group flex items-center gap-2 rounded-full border border-ink-100 dark:border-white/10 bg-paper-50 dark:bg-white/5 p-1.5 shadow-soft dark:shadow-none transition focus-within:border-saffron-400 dark:focus-within:border-saffron-500/50 focus-within:shadow-glow dark:focus-within:shadow-none">
              <span className="pl-3 text-ink-400 dark:text-zinc-500">
                <Mail className="h-4 w-4" />
              </span>
              <input
                type="email"
                placeholder="you@inbox.in"
                className="flex-1 bg-transparent px-2 py-2.5 text-sm text-ink-900 dark:text-white placeholder:text-ink-400 dark:placeholder:text-zinc-500 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 rounded-full bg-ink-900 dark:bg-white px-4 py-2 text-sm font-medium text-paper-50 dark:text-ink-950 hover:bg-ink-500 dark:hover:bg-zinc-200"
              >
                Subscribe
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
            <p className="mt-3 pl-3 text-xs text-ink-400 dark:text-zinc-500">
              By subscribing you agree to our privacy policy.
            </p>
          </div>
        </div>

        {/* Sitemap */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-400 dark:text-zinc-400">
              <span className="devanagari mb-1 block text-ink-500 dark:text-zinc-500">
                यतो धर्मस्ततो जयः
              </span>
              Where there is dharma, there is victory. A modern, beginner-to-advanced library of Indian law.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-100 dark:border-white/10 bg-paper-50 dark:bg-white/5 text-ink-500 dark:text-zinc-400 transition hover:border-saffron-300 dark:hover:border-saffron-500/50 hover:bg-saffron-50 dark:hover:bg-saffron-500/10 hover:text-saffron-700 dark:hover:text-saffron-400"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 gap-8 md:grid-cols-3">
            {footerSections.map((section) => (
              <div key={section.title}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-400 dark:text-zinc-500">
                  {section.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-ink-500 dark:text-zinc-400 transition-colors hover:text-saffron-600 dark:hover:text-saffron-400"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Categories strip */}
        <div className="mt-14 rounded-2xl border border-ink-100 dark:border-white/5 bg-paper-50/70 dark:bg-white/[0.02] p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-400 dark:text-zinc-500">
            All Categories
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/laws/${c.slug}`}
                className="rounded-full border border-ink-100 dark:border-white/10 bg-paper-100 dark:bg-white/5 px-3 py-1.5 text-xs font-medium text-ink-500 dark:text-zinc-400 transition hover:border-saffron-300 dark:hover:border-saffron-500/50 hover:bg-saffron-50 dark:hover:bg-saffron-500/10 hover:text-saffron-700 dark:hover:text-saffron-400"
              >
                {c.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-ink-100 dark:border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-400 dark:text-zinc-500">
            © {new Date().getFullYear()} Nyaya Vidhi · Crafted in Bhārat
          </p>
          <p className="max-w-xl text-[11px] leading-relaxed text-ink-400 dark:text-zinc-500">
            <span className="font-semibold text-ink-500 dark:text-zinc-400">Disclaimer:</span> Content is educational, not legal advice. Always consult a qualified advocate for case-specific guidance.
          </p>
        </div>
      </div>
    </footer>
  );
}
