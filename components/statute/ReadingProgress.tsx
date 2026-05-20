"use client";

import { useEffect, useState } from "react";

/**
 * Top-of-page reading-progress bar tied to scroll depth.
 * Uses scrollY / scrollHeight rather than IntersectionObserver
 * so it works regardless of which element is the article body.
 */
export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      const doc = document.documentElement;
      const scrolled = doc.scrollTop;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? Math.min(100, (scrolled / max) * 100) : 0;
      setProgress(pct);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-x-0 top-0 z-50 h-0.5 bg-transparent"
    >
      <div
        className="h-full bg-gradient-to-r from-saffron-400 via-saffron-500 to-saffron-600 transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
