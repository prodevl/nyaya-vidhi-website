"use client";

import { useCallback, useEffect, useState } from "react";
import {
  ArrowUp,
  Bookmark,
  BookmarkCheck,
  Check,
  Headphones,
  Pause,
  Printer,
  Share2,
} from "lucide-react";

type Props = {
  slug: string;
  title: string;
  description: string;
};

const BOOKMARKS_KEY = "nv-bookmarks";

export default function ScenarioToolbar({ slug, title, description }: Props) {
  const [bookmarked, setBookmarked] = useState(false);
  const [shared, setShared] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [showTop, setShowTop] = useState(false);

  // Load bookmark state + scroll listener for back-to-top.
  useEffect(() => {
    try {
      const list: string[] = JSON.parse(
        localStorage.getItem(BOOKMARKS_KEY) || "[]"
      );
      setBookmarked(list.includes(slug));
    } catch {}

    const onScroll = () => setShowTop(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [slug]);

  // Cancel any speech when navigating away.
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const toggleBookmark = useCallback(() => {
    try {
      const list: string[] = JSON.parse(
        localStorage.getItem(BOOKMARKS_KEY) || "[]"
      );
      const idx = list.indexOf(slug);
      if (idx === -1) list.push(slug);
      else list.splice(idx, 1);
      localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(list));
      setBookmarked(idx === -1);
    } catch {}
  }, [slug]);

  const share = useCallback(async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (typeof navigator !== "undefined" && (navigator as any).share) {
      try {
        await (navigator as any).share({ title, text: description, url });
        return;
      } catch {
        // user cancelled — fall through to clipboard
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setShared(true);
      setTimeout(() => setShared(false), 1800);
    } catch {}
  }, [title, description]);

  const print = useCallback(() => {
    if (typeof window !== "undefined") window.print();
  }, []);

  const toggleSpeak = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    const root = document.querySelector<HTMLElement>("[data-scenario-content]");
    const text = root?.innerText?.trim() || description;
    if (!text) return;
    // Chunk long text into utterances of ~200 chars to avoid TTS cutoff.
    const chunks = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text];
    window.speechSynthesis.cancel();
    chunks.forEach((chunk, i) => {
      const u = new SpeechSynthesisUtterance(chunk.trim());
      u.lang = "en-IN";
      u.rate = 1;
      u.pitch = 1;
      if (i === chunks.length - 1) u.onend = () => setSpeaking(false);
      window.speechSynthesis.speak(u);
    });
    setSpeaking(true);
  }, [speaking, description]);

  const scrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 print:hidden md:inset-x-auto md:bottom-auto md:right-6 md:top-1/2 md:-translate-y-1/2 md:justify-end md:px-0">
      <div className="flex items-center gap-1 rounded-full border border-ink-100 bg-white/95 p-1.5 shadow-elevated backdrop-blur-md md:flex-col md:gap-1.5 md:p-2">
        <ToolbarBtn
          label={bookmarked ? "Saved" : "Save for later"}
          onClick={toggleBookmark}
          active={bookmarked}
        >
          {bookmarked ? (
            <BookmarkCheck className="h-4 w-4" />
          ) : (
            <Bookmark className="h-4 w-4" />
          )}
        </ToolbarBtn>

        <ToolbarBtn label={shared ? "Link copied!" : "Share"} onClick={share}>
          {shared ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
        </ToolbarBtn>

        <ToolbarBtn
          label={speaking ? "Stop reading" : "Listen"}
          onClick={toggleSpeak}
          active={speaking}
        >
          {speaking ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Headphones className="h-4 w-4" />
          )}
        </ToolbarBtn>

        <ToolbarBtn label="Print or save as PDF" onClick={print}>
          <Printer className="h-4 w-4" />
        </ToolbarBtn>

        <div
          className={`hidden md:block transition-all duration-300 ${
            showTop ? "max-h-12 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <ToolbarBtn label="Back to top" onClick={scrollTop}>
            <ArrowUp className="h-4 w-4" />
          </ToolbarBtn>
        </div>
      </div>
    </div>
  );
}

function ToolbarBtn({
  children,
  onClick,
  label,
  active,
}: {
  children: React.ReactNode;
  onClick: () => void;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={label}
      aria-label={label}
      className={`group relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 ${
        active
          ? "bg-saffron-500 text-white shadow-glow"
          : "text-ink-700 hover:bg-paper-200 hover:text-ink-900"
      }`}
    >
      {children}
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-ink-900 px-2 py-1 text-[11px] font-medium text-white opacity-0 shadow-soft transition-opacity duration-200 group-hover:opacity-100 md:inline-block">
        {label}
      </span>
    </button>
  );
}
