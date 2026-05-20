"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Quote, RefreshCw, Share2 } from "lucide-react";

type Wisdom = {
  hindi?: string;
  text: string;
  source: string;
  cta?: { label: string; href: string };
};

/**
 * A small daily-rotating wisdom card.
 * Uses the day-of-year as a stable index so the same wisdom
 * appears the whole day, even across reloads (no API needed).
 */
const wisdoms: Wisdom[] = [
  {
    hindi: "धर्मो रक्षति रक्षितः",
    text: "Dharma protects those who protect dharma — including the law itself.",
    source: "Manusmriti · classical maxim",
  },
  {
    text: "An FIR is your right, not a favour. For any cognizable offence, police must register it.",
    source: "Lalita Kumari v. State of UP, 2013",
    cta: { label: "Read: Filing an FIR", href: "/ask" },
  },
  {
    text: "Article 21 has been read by the Supreme Court to include privacy, livelihood, shelter, health and even sleep.",
    source: "Justice K.S. Puttaswamy, 2017",
    cta: { label: "Explore the Constitution", href: "/laws/constitution-and-fundamental-rights" },
  },
  {
    text: "A cheque bouncing is not just embarrassing — it is a criminal offence under Section 138 NI Act.",
    source: "Negotiable Instruments Act, 1881",
    cta: { label: "Use the notice generator", href: "/toolkit#cheque-bounce" },
  },
  {
    text: "You can be arrested for many things — but not for refusing to confess. Article 20(3) is a shield.",
    source: "Constitution of India, Article 20(3)",
    cta: { label: "SOS — if arrested", href: "/sos#arrest" },
  },
  {
    text: "If a builder delays your flat, RERA lets you walk away with a full refund plus interest.",
    source: "RERA Act, Section 18",
    cta: { label: "Real Estate laws", href: "/laws/real-estate" },
  },
  {
    text: "Daughters are coparceners by birth — equal share in ancestral property since the 2005 amendment.",
    source: "Hindu Succession Act, Section 6",
    cta: { label: "Family & Personal Laws", href: "/laws/family-and-personal-laws" },
  },
  {
    text: "For a cyber fraud, every minute matters. Call 1930 first — banks can hold the receiver account.",
    source: "Cybercrime helpline",
    cta: { label: "SOS — online fraud", href: "/sos#online-fraud" },
  },
  {
    text: "Maternity leave is 26 weeks paid. Termination during the leave is illegal.",
    source: "Maternity Benefit Act, 1961",
  },
  {
    text: "No hospital — private or public — can refuse emergency stabilising treatment.",
    source: "Parmanand Katara v. Union of India, 1989",
    cta: { label: "SOS — hospital refusal", href: "/sos#medical" },
  },
  {
    text: "On 1 July 2024, the IPC was replaced by the Bharatiya Nyaya Sanhita. Section 302 became 103.",
    source: "Bharatiya Nyaya Sanhita, 2023",
    cta: { label: "IPC → BNS Mapper", href: "/ipc-bns" },
  },
  {
    text: "A 'sale agreement' is only a promise to sell. Title transfers only with a registered 'sale deed'.",
    source: "Transfer of Property Act, 1882",
    cta: { label: "Glossary: Sale Deed", href: "/glossary?q=Sale%20Deed" },
  },
  {
    text: "Recovery agents cannot call you before 8 am or after 7 pm. They cannot threaten or visit you at work.",
    source: "RBI Master Direction on recovery",
  },
  {
    text: "Even after divorce, a wife who has not remarried can claim maintenance under Section 144 BNSS.",
    source: "BNSS, 2023, Section 144",
    cta: { label: "Ask Nyaya Mitra", href: "/ask" },
  },
  {
    text: "Lok Adalat awards are final. No appeal — but they are faster, free, and binding on both sides.",
    source: "Legal Services Authorities Act, 1987",
  },
];

function dayOfYear(d = new Date()) {
  const start = new Date(d.getFullYear(), 0, 0);
  const diff = d.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export default function DailyWisdom() {
  const todayIndex = useMemo(() => dayOfYear() % wisdoms.length, []);
  const [index, setIndex] = useState(todayIndex);
  const [shared, setShared] = useState(false);

  useEffect(() => {
    setIndex(todayIndex);
  }, [todayIndex]);

  const w = wisdoms[index];

  const share = async () => {
    const text = `${w.text}\n— ${w.source}\n\nvia Nyaya Vidhi`;
    try {
      if (navigator.share) {
        await navigator.share({ title: "Nyaya Vidhi · Daily Wisdom", text });
      } else {
        await navigator.clipboard.writeText(text);
      }
      setShared(true);
      setTimeout(() => setShared(false), 1500);
    } catch {}
  };

  return (
    <section className="relative py-20">
      <div className="container-narrow">
        <div className="mb-8 flex flex-col items-center text-center">
          <p className="eyebrow">सूत्र · Daily Wisdom</p>
          <h2 className="mt-2 font-serif text-display-md font-medium text-balance text-ink-900">
            One law-truth. Every day.
          </h2>
        </div>

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-saffron-200 bg-gradient-to-br from-paper-100 via-paper-50 to-saffron-50 p-8 sm:p-12"
        >
          <Quote className="absolute -left-4 -top-4 h-24 w-24 text-saffron-200/80" />
          <div className="relative">
            {w.hindi && (
              <p className="devanagari text-center text-lg text-saffron-700 sm:text-xl">
                {w.hindi}
              </p>
            )}
            <p className="mx-auto mt-4 max-w-2xl text-center font-serif text-2xl font-medium leading-snug text-balance text-ink-900 sm:text-3xl">
              "{w.text}"
            </p>
            <p className="mt-5 text-center text-[12.5px] uppercase tracking-[0.16em] text-ink-500">
              — {w.source}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {w.cta && (
                <Link href={w.cta.href} className="btn-saffron">
                  {w.cta.label}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              )}
              <button
                onClick={() => setIndex((i) => (i + 1) % wisdoms.length)}
                className="inline-flex items-center gap-1.5 rounded-full border border-ink-100 bg-paper-50/80 px-4 py-2 text-[13px] font-medium text-ink-900 transition hover:border-saffron-300 hover:text-saffron-700"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                Another one
              </button>
              <button
                onClick={share}
                className="inline-flex items-center gap-1.5 rounded-full border border-ink-100 bg-paper-50/80 px-4 py-2 text-[13px] font-medium text-ink-900 transition hover:border-saffron-300 hover:text-saffron-700"
              >
                <Share2 className="h-3.5 w-3.5" />
                {shared ? "Shared!" : "Share"}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
