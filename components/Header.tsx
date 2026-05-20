"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { 
  Search, Menu, X, ChevronDown, ArrowRight, BookOpen, Compass, 
  ScrollText, Target, FileText, Sparkles, Building2
} from "lucide-react";
import Logo from "./Logo";
import { categories, megaMenuGroups, getCategoryBySlug } from "@/lib/categories";
import { cn } from "@/lib/utils";

const navStructure = [
  { id: "laws", label: "Laws & Acts", href: "/laws", type: "mega" },
  { id: "learn", label: "Academy", href: "/learn", type: "link" },
  { id: "rights", label: "Rights", href: "/know-your-rights", type: "link" },
  { 
    id: "resources", 
    label: "Resources", 
    href: "#", 
    type: "dropdown",
    items: [
      { label: "Case Studies", href: "/case-studies", desc: "Real-world legal breakdowns", icon: BookOpen },
      { label: "Daily Level-Up", href: "/daily-level-up", desc: "Bite-sized daily lessons", icon: Target },
      { label: "Glossary", href: "/glossary", desc: "Legal terminology explained", icon: FileText },
      { label: "About Us", href: "/about", desc: "Our mission and story", icon: Compass }
    ]
  },
  { id: "pro", label: "Enterprise", href: "/business-and-tax", type: "link", isPremium: true },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleMouseLeave = () => {
    setActiveMenu(null);
    setHoveredItem(null);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-700 flex justify-center px-4 lg:px-6 pointer-events-none",
          scrolled ? "pt-4" : "pt-6"
        )}
      >
        <div 
          className={cn(
            "pointer-events-auto relative w-full flex items-center justify-between transition-all duration-700 ease-out",
            scrolled 
              ? "max-w-5xl rounded-[2rem] bg-white/70 dark:bg-ink-950/80 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.8)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)] border border-white/40 dark:border-white/10 h-16 px-5" 
              : "max-w-7xl mx-auto rounded-full bg-transparent border border-transparent h-16 px-2"
          )}
          onMouseLeave={handleMouseLeave}
        >
          <Logo className="scale-[0.95] origin-left transition-transform duration-500 hover:scale-100" />

          {/* Desktop nav */}
          <nav 
            ref={navRef}
            className="hidden items-center gap-1.5 lg:flex absolute left-1/2 -translate-x-1/2" 
            aria-label="Primary"
          >
            {navStructure.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href + "/"));
              const isHovered = hoveredItem === item.id;
              const isMenuOpen = activeMenu === item.id;

              return (
                <div 
                  key={item.id} 
                  className="relative flex items-center justify-center h-10"
                  onMouseEnter={() => {
                    setHoveredItem(item.id);
                    if (item.type !== "link") setActiveMenu(item.id);
                    else setActiveMenu(null);
                  }}
                >
                  {/* Hover Pill Background */}
                  {isHovered && (
                    <motion.div
                      layoutId="nav-hover-pill"
                      className="absolute inset-0 z-0 rounded-full bg-ink-100/50 dark:bg-white/10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  {item.isPremium ? (
                    <Link
                      href={item.href}
                      className={cn(
                        "relative z-10 flex items-center gap-1.5 rounded-full px-4 py-2 text-[13.5px] font-semibold tracking-wide transition-all duration-300 whitespace-nowrap",
                        isActive || isHovered
                          ? "text-saffron-700 dark:text-saffron-400"
                          : "text-ink-700 dark:text-zinc-300 hover:text-saffron-600 dark:hover:text-saffron-400"
                      )}
                    >
                      {/* Premium gradient border/background */}
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-saffron-100/80 via-saffron-50/80 to-amber-100/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="absolute inset-0 rounded-full border border-saffron-200/60 shadow-[0_0_10px_rgba(245,158,11,0.15)]" />
                      <Building2 className="relative z-10 h-3.5 w-3.5" />
                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  ) : item.type !== "link" ? (
                    <button
                      className={cn(
                        "relative z-10 inline-flex items-center gap-1 rounded-full px-4 py-2 text-[13.5px] font-medium tracking-wide transition-colors duration-300 whitespace-nowrap",
                        (isActive || isMenuOpen || isHovered) ? "text-ink-900 dark:text-white" : "text-ink-600 dark:text-zinc-400"
                      )}
                      aria-expanded={isMenuOpen}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 opacity-60 transition-transform duration-500 ease-out",
                          isMenuOpen && "rotate-180"
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "relative z-10 rounded-full px-4 py-2 text-[13.5px] font-medium tracking-wide transition-colors duration-300 whitespace-nowrap",
                        isActive ? "text-ink-900 dark:text-white font-semibold" : "text-ink-600 dark:text-zinc-400",
                        isHovered ? "text-ink-900 dark:text-white" : ""
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="hidden h-9 w-9 items-center justify-center shrink-0 rounded-full text-ink-500 dark:text-zinc-400 transition-all duration-300 hover:bg-ink-100 dark:hover:bg-white/10 hover:text-ink-900 dark:hover:text-white lg:inline-flex"
              aria-label="Search"
            >
              <Search className="h-4.5 w-4.5" />
            </button>
            <Link
              href="/learn"
              className="hidden lg:inline-flex shrink-0 whitespace-nowrap items-center justify-center gap-1.5 rounded-full bg-ink-900 text-white px-5 py-2 text-[13.5px] font-semibold tracking-wide shadow-[0_4px_14px_rgba(0,0,0,0.15)] transition-all duration-300 hover:bg-ink-800 hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 active:scale-95"
            >
              Start Learning
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

            {/* Mobile toggle */}
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink-900 dark:text-white hover:bg-ink-100/80 dark:hover:bg-white/10 transition-colors lg:hidden"
              aria-label="Open menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Futuristic Mega Menu Dropdown */}
          <AnimatePresence>
            {activeMenu && (
              <motion.div
                initial={{ opacity: 0, y: 10, x: "-50%", scale: 0.98, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, x: "-50%", scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 10, x: "-50%", scale: 0.98, filter: "blur(10px)" }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "absolute top-[calc(100%+16px)] left-1/2 hidden lg:block overflow-hidden",
                  "rounded-[24px] border border-white/40 dark:border-white/10 bg-white/95 dark:bg-ink-950/95 backdrop-blur-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.6)] dark:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)]",
                  activeMenu === "laws" ? "w-[900px]" : "w-[340px]"
                )}
                onMouseEnter={() => setActiveMenu(activeMenu)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Decorative glowing orb in background */}
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-saffron-300/20 rounded-full blur-[60px] pointer-events-none" />
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-india-300/10 rounded-full blur-[60px] pointer-events-none" />

                {activeMenu === "laws" && (
                  <div className="p-8 grid grid-cols-12 gap-8 relative z-10">
                    {/* Left intro panel */}
                    <div className="col-span-4 flex flex-col justify-between">
                      <div>
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-ink-100/50 dark:bg-white/10 px-3 py-1 text-xs font-semibold text-ink-600 dark:text-zinc-300 mb-4">
                          <Sparkles className="h-3 w-3" />
                          <span>Index of Laws</span>
                        </div>
                        <h3 className="font-serif text-2xl font-medium leading-snug text-ink-900 dark:text-white tracking-tight">
                          The comprehensive legal index.
                        </h3>
                        <p className="mt-3 text-[14px] leading-relaxed text-ink-500 dark:text-zinc-400">
                          Explore 15 domains and hundreds of clauses — simplified into plain English with exact citations.
                        </p>
                      </div>
                      
                      <Link
                        href="/laws"
                        className="mt-8 inline-flex items-center gap-1.5 text-[14px] font-semibold text-saffron-600 dark:text-saffron-400 hover:text-saffron-700 dark:hover:text-saffron-300 transition-colors group w-fit"
                      >
                        Explore all domains
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>

                    {/* Right grid categories */}
                    <div className="col-span-8 grid grid-cols-2 gap-x-6 gap-y-8 pl-4 border-l border-ink-100/40 dark:border-white/10">
                      {megaMenuGroups.map((group) => (
                        <div key={group.label} className="relative">
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink-400 dark:text-zinc-500 mb-3">
                            {group.label}
                          </p>
                          <ul className="space-y-1">
                            {group.items.map((slug) => {
                              const cat = getCategoryBySlug(slug);
                              if (!cat) return null;
                              const Icon = cat.icon;
                              return (
                                <li key={cat.slug}>
                                  <Link
                                    href={`/laws/${cat.slug}`}
                                    className="group flex items-center gap-3 rounded-xl px-2.5 py-2 -mx-2.5 transition-all duration-300 hover:bg-paper-200/60 dark:hover:bg-white/5"
                                  >
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white dark:bg-white/5 shadow-sm border border-ink-100/50 dark:border-white/10 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-md group-hover:border-saffron-200 dark:group-hover:border-saffron-500/50">
                                      <Icon className="h-4 w-4 text-ink-500 dark:text-zinc-400 transition-colors duration-300 group-hover:text-saffron-500 dark:group-hover:text-saffron-400" />
                                    </div>
                                    <span className="text-[13.5px] font-medium text-ink-700 dark:text-zinc-300 group-hover:text-ink-900 dark:group-hover:text-white transition-colors">
                                      {cat.title}
                                    </span>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeMenu === "resources" && (
                  <div className="p-3 relative z-10 flex flex-col gap-1">
                    {navStructure.find(n => n.id === "resources")?.items?.map((item, i) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group flex items-start gap-3.5 rounded-xl p-3 transition-all duration-300 hover:bg-ink-50/80 dark:hover:bg-white/5"
                      >
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white dark:bg-white/5 shadow-sm border border-ink-100/50 dark:border-white/10 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-md">
                          {item.icon && <item.icon className="h-4 w-4 text-ink-600 dark:text-zinc-400 transition-colors duration-300 group-hover:text-ink-900 dark:group-hover:text-white" />}
                        </div>
                        <div>
                          <p className="text-[14px] font-semibold text-ink-900 dark:text-white">
                            {item.label}
                          </p>
                          <p className="mt-0.5 text-[12.5px] text-ink-500 dark:text-zinc-400 leading-tight">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Mobile sheet overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ink-900/20 backdrop-blur-sm lg:hidden pt-20"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-4 top-24 rounded-3xl bg-white/95 dark:bg-ink-950/95 backdrop-blur-xl border border-white dark:border-white/10 shadow-2xl dark:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden p-2"
            >
              <div className="max-h-[75vh] overflow-y-auto p-4 space-y-2 no-scrollbar">
                {navStructure.map((item) => (
                  <div key={item.id}>
                    {item.type === "link" ? (
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 rounded-2xl px-4 py-3.5 text-[15px] font-semibold transition-colors",
                          pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href + "/"))
                            ? "bg-ink-100/80 dark:bg-white/10 text-ink-900 dark:text-white" 
                            : "text-ink-700 dark:text-zinc-300 hover:bg-ink-50 dark:hover:bg-white/5",
                          item.isPremium && "bg-gradient-to-r from-saffron-50 to-amber-50 dark:from-saffron-900/20 dark:to-amber-900/20 text-saffron-800 dark:text-saffron-400 border border-saffron-100 dark:border-saffron-500/20"
                        )}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.isPremium && <Building2 className="h-4.5 w-4.5" />}
                        {item.label}
                      </Link>
                    ) : item.type === "mega" ? (
                      <div className="rounded-2xl bg-ink-50/50 dark:bg-white/5 p-2">
                        <p className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-ink-500 dark:text-zinc-500">
                          {item.label}
                        </p>
                        <div className="grid grid-cols-1 gap-1 mt-1">
                          {categories.map((cat) => {
                            const Icon = cat.icon;
                            return (
                              <Link
                                key={cat.slug}
                                href={`/laws/${cat.slug}`}
                                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] font-medium text-ink-700 dark:text-zinc-300 transition-colors hover:bg-white dark:hover:bg-white/10 hover:shadow-sm"
                                onClick={() => setMobileOpen(false)}
                              >
                                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white dark:bg-white/10 shadow-sm border border-ink-100 dark:border-white/10">
                                  <Icon className="h-3.5 w-3.5 text-ink-600 dark:text-zinc-400" />
                                </div>
                                {cat.title}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ) : item.type === "dropdown" ? (
                      <div className="rounded-2xl bg-ink-50/50 dark:bg-white/5 p-2">
                        <p className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-ink-500 dark:text-zinc-500">
                          {item.label}
                        </p>
                        <div className="grid grid-cols-1 gap-1 mt-1">
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] font-medium text-ink-700 dark:text-zinc-300 transition-colors hover:bg-white dark:hover:bg-white/10 hover:shadow-sm"
                              onClick={() => setMobileOpen(false)}
                            >
                              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white dark:bg-white/10 shadow-sm border border-ink-100 dark:border-white/10">
                                {subItem.icon && <subItem.icon className="h-3.5 w-3.5 text-ink-600 dark:text-zinc-400" />}
                              </div>
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                ))}
                
                <Link
                  href="/learn"
                  onClick={() => setMobileOpen(false)}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-ink-900 px-5 py-4 text-[15px] font-semibold text-white shadow-lg transition-transform active:scale-95"
                >
                  Start Learning
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer so content sits below fixed header */}
      <div className="h-20 lg:h-24" aria-hidden="true" />
    </>
  );
}

