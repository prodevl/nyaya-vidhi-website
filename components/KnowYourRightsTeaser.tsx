"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AlertCircle, Phone, Building, Heart, ScrollText, ArrowRight } from "lucide-react";

const scenarios = [
  { icon: AlertCircle, title: "I'm being arrested", q: "What are my rights right now?", tag: "Criminal", slug: "arrest" },
  { icon: Phone, title: "My order didn't arrive", q: "How do I file a consumer complaint?", tag: "Consumer", slug: "consumer-order" },
  { icon: Building, title: "My builder is delaying possession", q: "What RERA remedies can I use?", tag: "Real Estate", slug: "rera-delay" },
  { icon: Heart, title: "I'm filing for divorce", q: "What grounds and procedure apply?", tag: "Family", slug: "divorce" },
  { icon: ScrollText, title: "Got a notice from IT Dept", q: "Section, deadline, response — explained.", tag: "Tax", slug: "it-notice" },
];

export default function KnowYourRightsTeaser() {
  return (
    <section className="relative py-24 lg:py-28">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Left intro */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow">अधिकार · Rights</p>
            <h2 className="mt-3 font-serif text-display-md font-medium text-balance text-ink-900">
              When life happens, <span className="italic text-saffron-600">find your clause in 30 seconds.</span>
            </h2>
            <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-ink-500">
              Know Your Rights is built for moments, not chapters. Pick a scenario — get the law, the section, the steps, the documents, and the helpline.
            </p>
            <Link
              href="/know-your-rights"
              className="mt-7 inline-flex btn-primary"
            >
              Open Know Your Rights
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Right scenarios stack */}
          <div className="lg:col-span-7 space-y-3">
            {scenarios.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={`/know-your-rights/${s.slug}`}
                    className="card-heritage flex items-center gap-5 p-5"
                  >
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-saffron-50 to-paper-100 text-saffron-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-ink-400">
                        {s.tag}
                      </p>
                      <p className="mt-0.5 font-serif text-[18px] font-medium leading-snug text-ink-900">
                        {s.title}
                      </p>
                      <p className="mt-1 text-[13.5px] text-ink-500">
                        {s.q}
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 shrink-0 text-ink-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-saffron-600" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
