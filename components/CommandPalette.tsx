"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRightLeft,
  BookOpen,
  Calculator,
  Command as CommandIcon,
  Compass,
  CornerDownLeft,
  HelpCircle,
  Search,
  Siren,
  Sparkles,
  X,
} from "lucide-react";
import { categories } from "@/lib/categories";
import { glossary } from "@/lib/glossary";
import { ipcToBns } from "@/lib/ipc-bns";
import { cn } from "@/lib/utils";

type CommandItem = {
  id: string;
  title: string;
  subtitle?: string;
  href: string;
  group:
    | "Quick"
    | "Laws"
    | "Glossary"
    | "BNS Sections"
    | "Tools";
  icon: any;
  hint?: string;
};

/* ---------------------------------------------------------------- */
/* Context to open the palette from anywhere                          */
/* ---------------------------------------------------------------- */
type Ctx = { open: () => void };
const CommandPaletteCtx = createContext<Ctx | null>(null);

export function useCommandPalette() {
  const ctx = useContext(CommandPaletteCtx);
  if (!ctx) {
    return { open: () => {} };
  }
  return ctx;
}

/* ---------------------------------------------------------------- */
/* Provider                                                           */
/* ---------------------------------------------------------------- */
export default function CommandPaletteProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Cmd/Ctrl + K global shortcut
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((v) => !v);
      }
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const value = useMemo(() => ({ open: () => setIsOpen(true) }), []);

  return (
    <CommandPaletteCtx.Provider value={value}>
      {children}
      <Palette isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </CommandPaletteCtx.Provider>
  );
}

/* ---------------------------------------------------------------- */
/* Palette UI                                                         */
/* ---------------------------------------------------------------- */

function buildItems(): CommandItem[] {
  const quick: CommandItem[] = [
    {
      id: "q-ask",
      title: "Ask Nyaya Mitra",
      subtitle: "Guided assistant — answer 1-2 questions, get the law",
      href: "/ask",
      group: "Quick",
      icon: HelpCircle,
      hint: "guided",
    },
    {
      id: "q-toolkit",
      title: "Open Legal Toolkit",
      subtitle: "Calculators · Document drafts · Notice generators",
      href: "/toolkit",
      group: "Quick",
      icon: Calculator,
      hint: "tools",
    },
    {
      id: "q-sos",
      title: "SOS — Emergency Rights Card",
      subtitle: "What to do in the first 30 seconds",
      href: "/sos",
      group: "Quick",
      icon: Siren,
      hint: "emergency",
    },
    {
      id: "q-rights",
      title: "Know Your Rights",
      subtitle: "Scenario library — arrest, FIR, refund, leave",
      href: "/know-your-rights",
      group: "Quick",
      icon: Compass,
    },
    {
      id: "q-ipc",
      title: "IPC → BNS Section Mapper",
      subtitle: "Old IPC section to new Bharatiya Nyaya Sanhita",
      href: "/ipc-bns",
      group: "Quick",
      icon: ArrowRightLeft,
    },
    {
      id: "q-glossary",
      title: "Glossary",
      subtitle: "Big words, small explanations",
      href: "/glossary",
      group: "Quick",
      icon: BookOpen,
    },
    {
      id: "q-daily",
      title: "Daily Level-Up",
      subtitle: "5-minute lesson, every day",
      href: "/daily-level-up",
      group: "Quick",
      icon: Sparkles,
    },
  ];

  const laws: CommandItem[] = categories.map((c) => ({
    id: `cat-${c.slug}`,
    title: c.title,
    subtitle: c.tagline,
    href: `/laws/${c.slug}`,
    group: "Laws",
    icon: c.icon,
  }));

  const gloss: CommandItem[] = glossary.map((g) => ({
    id: `gl-${g.term}`,
    title: g.term,
    subtitle: g.short,
    href: `/glossary?q=${encodeURIComponent(g.term)}`,
    group: "Glossary",
    icon: BookOpen,
  }));

  const sections: CommandItem[] = ipcToBns.map((s, i) => ({
    id: `sec-${s.ipc}-${i}`,
    title: `IPC ${s.ipc} → BNS ${s.bns}`,
    subtitle: s.bnsTitle,
    href: `/ipc-bns?q=${encodeURIComponent(s.ipc)}`,
    group: "BNS Sections",
    icon: ArrowRightLeft,
  }));

  const tools: CommandItem[] = [
    { id: "t-tax", title: "Old vs New Tax Regime", href: "/toolkit#tax-regime", group: "Tools", icon: Calculator },
    { id: "t-hra", title: "HRA Exemption Calculator", href: "/toolkit#hra", group: "Tools", icon: Calculator },
    { id: "t-stamp", title: "Stamp Duty Estimator", href: "/toolkit#stamp-duty", group: "Tools", icon: Calculator },
    { id: "t-grat", title: "Gratuity Calculator", href: "/toolkit#gratuity", group: "Tools", icon: Calculator },
    { id: "t-cheque", title: "Cheque Bounce Notice Generator", href: "/toolkit#cheque-bounce", group: "Tools", icon: Calculator },
    { id: "t-rti", title: "RTI Application Generator", href: "/toolkit#rti", group: "Tools", icon: Calculator },
    { id: "t-rent", title: "Rent Agreement (Quick)", href: "/toolkit#rent", group: "Tools", icon: Calculator },
    { id: "t-fir", title: "FIR Complaint Draft", href: "/toolkit#fir-draft", group: "Tools", icon: Calculator },
  ];

  return [...quick, ...laws, ...tools, ...gloss, ...sections];
}

function Palette({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const items = useMemo(() => buildItems(), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items.slice(0, 30);
    const score = (txt: string) => {
      const t = txt.toLowerCase();
      if (t === q) return 4;
      if (t.startsWith(q)) return 3;
      if (t.includes(q)) return 2;
      return 0;
    };
    return items
      .map((it) => ({
        it,
        s:
          score(it.title) * 3 +
          score(it.subtitle || "") +
          score(it.group),
      }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 30)
      .map((x) => x.it);
  }, [query, items]);

  // Group results
  const grouped = useMemo(() => {
    const map = new Map<string, CommandItem[]>();
    for (const item of filtered) {
      if (!map.has(item.group)) map.set(item.group, []);
      map.get(item.group)!.push(item);
    }
    return Array.from(map.entries());
  }, [filtered]);

  // Reset active when results change
  useEffect(() => {
    setActive(0);
  }, [query, isOpen]);

  // Focus input
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navigate = useCallback(
    (href: string) => {
      onClose();
      router.push(href);
    },
    [onClose, router]
  );

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(filtered.length - 1, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(0, i - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = filtered[active];
      if (item) navigate(item.href);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[100] flex items-start justify-center bg-ink-900/30 backdrop-blur-sm p-4 pt-[14vh]"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl overflow-hidden rounded-2xl border border-white/50 bg-paper-50/95 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            onKeyDown={onKey}
          >
            {/* Input row */}
            <div className="flex items-center gap-3 border-b border-ink-100 px-4 py-3">
              <Search className="h-4 w-4 shrink-0 text-ink-400" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search laws, sections, terms, tools…"
                className="flex-1 bg-transparent text-[15px] text-ink-900 placeholder:text-ink-400 focus:outline-none"
              />
              <span className="hidden items-center gap-1 rounded-md border border-ink-100 px-1.5 py-0.5 text-[10px] font-medium text-ink-500 sm:inline-flex">
                ESC
              </span>
              <button
                onClick={onClose}
                className="rounded-md p-1 text-ink-400 hover:bg-ink-50 hover:text-ink-900"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Results */}
            <div
              ref={listRef}
              className="max-h-[60vh] overflow-y-auto p-2"
            >
              {grouped.length === 0 ? (
                <div className="flex flex-col items-center justify-center gap-3 p-10 text-center">
                  <Sparkles className="h-6 w-6 text-saffron-500" />
                  <div>
                    <p className="font-serif text-base text-ink-900">No matches</p>
                    <p className="mt-1 text-[13px] text-ink-500">
                      Try shorter words like "bail", "GST", "FIR".
                    </p>
                  </div>
                </div>
              ) : (
                grouped.map(([group, list]) => (
                  <div key={group} className="mb-2">
                    <p className="px-3 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                      {group}
                    </p>
                    <ul>
                      {list.map((it) => {
                        const Icon = it.icon;
                        const idx = filtered.indexOf(it);
                        const isActive = idx === active;
                        return (
                          <li key={it.id}>
                            <button
                              type="button"
                              onClick={() => navigate(it.href)}
                              onMouseEnter={() => setActive(idx)}
                              className={cn(
                                "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition",
                                isActive
                                  ? "bg-saffron-50/80"
                                  : "hover:bg-paper-100/50"
                              )}
                            >
                              <span
                                className={cn(
                                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-paper-50 transition",
                                  isActive
                                    ? "border-saffron-300 text-saffron-700"
                                    : "border-ink-100 text-ink-500"
                                )}
                              >
                                <Icon className="h-4 w-4" />
                              </span>
                              <span className="min-w-0 flex-1">
                                <span className="block truncate text-[14px] font-medium text-ink-900">
                                  {it.title}
                                </span>
                                {it.subtitle && (
                                  <span className="block truncate text-[12.5px] text-ink-500">
                                    {it.subtitle}
                                  </span>
                                )}
                              </span>
                              {isActive && (
                                <CornerDownLeft className="h-3.5 w-3.5 shrink-0 text-ink-400" />
                              )}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-ink-100 px-4 py-2 text-[11px] text-ink-400">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1">
                  <Kbd>↑</Kbd>
                  <Kbd>↓</Kbd> navigate
                </span>
                <span className="inline-flex items-center gap-1">
                  <Kbd>↵</Kbd> open
                </span>
              </div>
              <div className="inline-flex items-center gap-1">
                <CommandIcon className="h-3 w-3" />
                <span>Nyaya Vidhi</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-4 min-w-[16px] items-center justify-center rounded border border-ink-100 bg-paper-100 px-1 text-[10px] font-medium text-ink-700">
      {children}
    </span>
  );
}

/* ---------------------------------------------------------------- */
/* A small button users can drop into the Header                      */
/* ---------------------------------------------------------------- */
export function CommandPaletteTrigger({ className }: { className?: string }) {
  const { open } = useCommandPalette();
  return (
    <button
      type="button"
      onClick={open}
      aria-label="Open quick search"
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-ink-100 bg-paper-50/80 px-3 py-1.5 text-[12px] text-ink-500 transition hover:border-saffron-300 hover:text-ink-900",
        className
      )}
    >
      <Search className="h-3.5 w-3.5" />
      <span className="hidden sm:inline">Search…</span>
      <span className="hidden items-center gap-1 sm:inline-flex">
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </span>
    </button>
  );
}
