"use client";

import { useEffect, useState } from "react";
import { Heart, ThumbsDown, ThumbsUp } from "lucide-react";

type Vote = "up" | "down" | null;

export default function HelpfulFeedback({ slug }: { slug: string }) {
  const storageKey = `nv-helpful-${slug}`;
  const [vote, setVote] = useState<Vote>(null);

  useEffect(() => {
    try {
      const v = localStorage.getItem(storageKey);
      if (v === "up" || v === "down") setVote(v);
    } catch {}
  }, [storageKey]);

  const cast = (v: Exclude<Vote, null>) => {
    setVote(v);
    try {
      localStorage.setItem(storageKey, v);
    } catch {}
  };

  const change = () => {
    setVote(null);
    try {
      localStorage.removeItem(storageKey);
    } catch {}
  };

  if (vote) {
    return (
      <div className="card-heritage flex flex-col items-center gap-3 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <Heart
            className={`h-5 w-5 ${
              vote === "up" ? "text-india-500" : "text-saffron-500"
            }`}
            strokeWidth={2}
          />
          <p className="text-[14.5px] text-ink-700">
            {vote === "up"
              ? "Thanks — glad this helped you find your footing."
              : "Thanks — we'll keep improving this guide."}
          </p>
        </div>
        <button
          onClick={change}
          className="text-[12px] text-ink-400 underline-offset-2 hover:text-ink-700 hover:underline"
        >
          Change response
        </button>
      </div>
    );
  }

  return (
    <div className="card-heritage flex flex-col items-center gap-4 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
      <div>
        <h3 className="font-serif text-[17px] font-medium text-ink-900">
          Was this guide helpful?
        </h3>
        <p className="mt-0.5 text-[13px] text-ink-500">
          Anonymous feedback helps us improve every scenario.
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => cast("up")}
          className="flex items-center gap-1.5 rounded-full border border-ink-100 bg-paper-50 px-4 py-2 text-[13px] font-medium text-ink-700 transition-colors hover:border-india-300 hover:bg-india-50 hover:text-india-700"
        >
          <ThumbsUp className="h-3.5 w-3.5" /> Yes
        </button>
        <button
          type="button"
          onClick={() => cast("down")}
          className="flex items-center gap-1.5 rounded-full border border-ink-100 bg-paper-50 px-4 py-2 text-[13px] font-medium text-ink-700 transition-colors hover:border-saffron-300 hover:bg-saffron-50 hover:text-saffron-700"
        >
          <ThumbsDown className="h-3.5 w-3.5" /> Not quite
        </button>
      </div>
    </div>
  );
}
