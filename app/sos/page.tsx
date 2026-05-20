import type { Metadata } from "next";
import Link from "next/link";
import {
  Siren,
  Phone,
  ShieldCheck,
  Heart,
  CarFront,
  ScrollText,
  Smartphone,
  HandHeart,
  ArrowRight,
  ShieldAlert,
  Quote,
} from "lucide-react";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "SOS — Emergency Rights Card",
  description:
    "If you have 30 seconds — what to do right now. Arrest, accident, harassment, online fraud and medical emergency. Save it, print it, share it.",
};

type Card = {
  id: string;
  title: string;
  oneLine: string;
  helpline: { name: string; number: string };
  steps: string[];
  donts?: string[];
  icon: any;
  tone: "saffron" | "india" | "terracotta" | "nile";
};

const cards: Card[] = [
  {
    id: "arrest",
    title: "If you are being arrested",
    oneLine:
      "Stay calm. Do not run, do not resist. Use your three rights — name, reason, and one phone call.",
    helpline: { name: "Police", number: "112" },
    icon: ShieldAlert,
    tone: "india",
    steps: [
      "Ask the officer's name, designation and station — note it.",
      "Ask why you are being arrested. Police MUST tell you.",
      "Inform one family member or a lawyer — you have a right to.",
      "Do not sign blank papers. Read everything. Ask for a copy.",
      "Demand to be produced before a Magistrate within 24 hours.",
    ],
    donts: [
      "Never confess in the police station — it is not valid evidence.",
      "Do not pay anyone — bail is a court order, not cash to police.",
    ],
  },
  {
    id: "harassment",
    title: "If a woman is being harassed",
    oneLine:
      "Stay close to people, make noise, and reach a safe place. Then file the complaint while it is fresh.",
    helpline: { name: "Women Helpline", number: "181" },
    icon: HandHeart,
    tone: "saffron",
    steps: [
      "Call 112 or 181 immediately. Both work 24×7 across India.",
      "Move toward the nearest shop, crowd, woman, or guard.",
      "Note: face, height, clothes, vehicle number, time, place.",
      "At the police station — Zero FIR is your right. Any station can register.",
      "Section 173(1) proviso BNSS — a woman cannot be summoned to a station after sunset.",
    ],
  },
  {
    id: "online-fraud",
    title: "If you lost money in an online scam",
    oneLine:
      "Speed matters. The faster you report, the faster the money can be held at the receiver's bank.",
    helpline: { name: "Cyber Crime", number: "1930" },
    icon: Smartphone,
    tone: "nile",
    steps: [
      "Call 1930 within hours — they freeze the receiver account.",
      "File on cybercrime.gov.in within 24–72 hours.",
      "Inform your bank — RBI rules give zero liability for fast reports.",
      "Save: transaction reference, screenshots, fraudster's UPI / number.",
      "Block cards, change passwords, enable 2FA on email.",
    ],
    donts: [
      "Do not click 'helpline' numbers from Google — many are fake.",
      "Never share OTP — the bank never asks for it.",
    ],
  },
  {
    id: "accident",
    title: "If you are in a road accident",
    oneLine:
      "Help the injured first. Photograph the scene. Then call police and insurer — in that order.",
    helpline: { name: "Ambulance", number: "108" },
    icon: CarFront,
    tone: "terracotta",
    steps: [
      "Get yourself and the injured to a safe spot. Call 108.",
      "Click photos / videos before vehicles are moved.",
      "Note the other vehicle's number, driver's name, witnesses.",
      "Call 112 — police is needed for FIR, insurance and a fair version.",
      "Inform your insurer within 24 hours. Keep all medical bills.",
    ],
  },
  {
    id: "medical",
    title: "If a hospital refuses to admit you",
    oneLine:
      "In a real medical emergency, NO hospital can refuse stabilising care — public or private.",
    helpline: { name: "Health Helpline", number: "104" },
    icon: Heart,
    tone: "terracotta",
    steps: [
      "Quote the Supreme Court order in Parmanand Katara vs Union of India.",
      "Insist on stabilising treatment — money formalities can wait.",
      "Call 112 or 108. Police are duty-bound to escort medico-legal cases.",
      "Record the refusal in writing — name and time of the doctor.",
      "Free care under PMJAY for eligible families — keep card handy.",
    ],
  },
  {
    id: "fir-refused",
    title: "If police refuses to register your FIR",
    oneLine:
      "It is your right — and there are three escalation routes, in order.",
    helpline: { name: "Police Superintendent", number: "112" },
    icon: ScrollText,
    tone: "india",
    steps: [
      "Submit your written complaint at the same station — get a stamped acknowledgement.",
      "Send the same complaint by speed post to the SP / DCP.",
      "File a private complaint to the Magistrate under Section 175(3) BNSS.",
      "For grave offences, approach the High Court under Article 226.",
    ],
  },
];

const toneStyle: Record<Card["tone"], string> = {
  saffron: "from-saffron-500/20 to-saffron-100/40 border-saffron-300 text-saffron-700",
  india: "from-india-500/20 to-india-100/40 border-india-300 text-india-700",
  terracotta: "from-terracotta-500/15 to-saffron-100/30 border-terracotta-500/40 text-terracotta-500",
  nile: "from-nile-500/15 to-paper-100 border-nile-500/40 text-nile-500",
};

const allHelplines = [
  { name: "Emergency (Police / Fire / Ambulance)", number: "112" },
  { name: "Women Helpline", number: "181" },
  { name: "Childline (children in distress)", number: "1098" },
  { name: "Cyber Crime", number: "1930" },
  { name: "Ambulance", number: "108" },
  { name: "Health Helpline", number: "104" },
  { name: "Senior Citizens Helpline (Elderline)", number: "14567" },
  { name: "RBI Banking Ombudsman", number: "14448" },
  { name: "Consumer Helpline", number: "1915" },
  { name: "Anti-Drug Helpline", number: "1933" },
  { name: "Mental Health (KIRAN)", number: "1800-599-0019" },
  { name: "Free Legal Aid (NALSA)", number: "15100" },
];

export default function SOSPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-india-100/40 via-paper-100/30 to-transparent" />
      </div>

      <div className="container-page pt-12 pb-24 lg:pt-20 lg:pb-32">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-india-300 bg-india-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-india-700">
            <Siren className="h-3.5 w-3.5" />
            SOS · Emergency Rights Card
          </span>
          <h1 className="mt-5 font-serif text-display-lg font-medium tracking-tight text-balance text-ink-900">
            If you have <span className="italic text-saffron-600">30 seconds</span> —
            this is what to do.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-[16px] leading-relaxed text-ink-500">
            Save this page. Print it. Send it to your family. In the moment, you will not remember
            sections — you will remember pictures, helplines, and one or two clear steps.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <PrintButton label="Print this card" />
            <a
              href="#helplines"
              className="inline-flex items-center gap-1.5 rounded-full border border-ink-100 bg-paper-50 px-4 py-2 text-[13px] font-semibold text-ink-900 transition hover:border-saffron-300 hover:text-saffron-700"
            >
              All helplines
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <article
                key={c.id}
                id={c.id}
                className="relative overflow-hidden rounded-3xl border border-ink-100 bg-paper-50 p-6 shadow-soft sm:p-7"
              >
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br ${toneStyle[c.tone]} opacity-50 blur-2xl`}
                />
                <div className="relative">
                  <div className="flex items-start gap-3">
                    <span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border bg-gradient-to-br ${toneStyle[c.tone]}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h2 className="font-serif text-[19px] font-medium leading-tight tracking-tight text-ink-900">
                        {c.title}
                      </h2>
                      <p className="mt-1 text-[14px] leading-relaxed text-ink-500">{c.oneLine}</p>
                    </div>
                  </div>

                  {/* Helpline strip */}
                  <a
                    href={`tel:${c.helpline.number}`}
                    className="mt-5 flex items-center justify-between rounded-2xl border border-india-200 bg-india-50/60 px-4 py-3 transition hover:bg-india-50"
                  >
                    <div>
                      <p className="text-[10.5px] uppercase tracking-[0.16em] text-india-700">
                        Tap to call
                      </p>
                      <p className="font-serif text-xl tabular text-ink-900">
                        {c.helpline.number}
                      </p>
                    </div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-india-500/15 text-india-700">
                      <Phone className="h-4 w-4" />
                    </span>
                  </a>

                  {/* Steps */}
                  <ol className="mt-5 space-y-2.5">
                    {c.steps.map((s, i) => (
                      <li key={i} className="flex gap-3 text-[14px] leading-relaxed text-ink-700">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink-900 text-[10.5px] font-bold text-paper-50">
                          {i + 1}
                        </span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ol>

                  {c.donts && (
                    <div className="mt-4 rounded-xl border border-terracotta-500/30 bg-terracotta-500/5 p-3">
                      <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-terracotta-500">
                        Don't
                      </p>
                      <ul className="mt-1.5 space-y-1.5">
                        {c.donts.map((d, i) => (
                          <li key={i} className="flex gap-2 text-[13px] leading-snug text-ink-700">
                            <span className="mt-1 inline-block h-1 w-1 shrink-0 rounded-full bg-terracotta-500" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Article 21 callout */}
        <div className="mt-16 rounded-3xl border border-saffron-200 bg-saffron-50/50 p-8 lg:p-12">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center">
            <Quote className="h-10 w-10 shrink-0 text-saffron-500" />
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-saffron-700">
                Article 21 of the Constitution
              </p>
              <p className="mt-2 font-serif text-2xl text-ink-900 sm:text-3xl">
                "No person shall be deprived of his life or personal liberty
                <br className="hidden sm:block" /> except according to procedure established by law."
              </p>
              <p className="mt-3 max-w-3xl text-[14.5px] leading-relaxed text-ink-500">
                The Supreme Court has read into this single line — the right to dignity, privacy, livelihood,
                shelter, health, education and a fair trial. When in doubt, this is the article that protects you.
              </p>
            </div>
          </div>
        </div>

        {/* Helpline directory */}
        <section id="helplines" className="mt-16 scroll-mt-32">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="eyebrow">सहायता · Helplines</p>
              <h2 className="mt-2 font-serif text-2xl font-medium text-ink-900 sm:text-3xl">
                Helpline directory — save these once.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {allHelplines.map((h) => (
              <a
                key={h.number}
                href={`tel:${h.number.replace(/\D/g, "")}`}
                className="group flex items-center gap-3 rounded-2xl border border-ink-100 bg-paper-50 p-4 transition hover:border-saffron-300 hover:bg-saffron-50/30"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-paper-100 text-saffron-700 transition group-hover:bg-saffron-100">
                  <Phone className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[12px] text-ink-500">{h.name}</p>
                  <p className="font-serif text-[18px] tabular text-ink-900">{h.number}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CTA bottom */}
        <div className="mt-16 rounded-3xl border border-ink-100 bg-paper-50 p-8 text-center">
          <ShieldCheck className="mx-auto h-8 w-8 text-india-600" />
          <h3 className="mt-3 font-serif text-2xl text-ink-900">
            Got more time? Walk through your full situation.
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-[14.5px] leading-relaxed text-ink-500">
            Nyaya Mitra asks one or two simple questions and gives you the steps, law and helplines specific to your case.
          </p>
          <Link
            href="/ask"
            className="btn-primary mt-5 inline-flex"
          >
            Open Nyaya Mitra
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
