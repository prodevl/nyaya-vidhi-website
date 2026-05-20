import { notFound } from "next/navigation";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  MapPin,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { scenariosData } from "../data";
import ReadingProgress from "@/components/statute/ReadingProgress";
import ScenarioToolbar from "@/components/scenario/ScenarioToolbar";
import StepTracker from "@/components/scenario/StepTracker";
import DocumentChecklist from "@/components/scenario/DocumentChecklist";
import HelpfulFeedback from "@/components/scenario/HelpfulFeedback";
import KeyFacts from "@/components/scenario/KeyFacts";
import EmergencyContacts from "@/components/scenario/EmergencyContacts";
import RelatedScenarios from "@/components/scenario/RelatedScenarios";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return scenariosData.map((scenario) => ({
    slug: scenario.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const scenario = scenariosData.find((s) => s.slug === slug);
  if (!scenario) return { title: "Scenario Not Found" };
  return {
    title: `${scenario.title} - Know Your Rights | Nyaya Vidhi`,
    description: scenario.description,
  };
}

const colorStyles: Record<
  string,
  { bg: string; text: string; ring: string }
> = {
  saffron: {
    bg: "bg-saffron-50",
    text: "text-saffron-700",
    ring: "ring-saffron-200",
  },
  india: {
    bg: "bg-india-50",
    text: "text-india-700",
    ring: "ring-india-200",
  },
  terracotta: {
    bg: "bg-[#F4DDD0]",
    text: "text-terracotta-500",
    ring: "ring-[#EFC5B0]",
  },
  marigold: {
    bg: "bg-marigold-400/20",
    text: "text-saffron-700",
    ring: "ring-marigold-300",
  },
};

const VERIFIED_LABEL = "Reviewed Nov 2025";

export default async function ScenarioPage({ params }: Props) {
  const { slug } = await params;
  const scenario = scenariosData.find((s) => s.slug === slug);

  if (!scenario) {
    notFound();
  }

  const Icon = scenario.iconName;
  const colors = colorStyles[scenario.color] || colorStyles.saffron;

  return (
    <div className="relative min-h-screen bg-paper-50 pb-32 pt-12">
      <ReadingProgress />
      <ScenarioToolbar
        slug={scenario.slug}
        title={scenario.title}
        description={scenario.description}
      />

      <div className="container-page max-w-3xl">
        {/* Back navigation */}
        <Link
          href="/know-your-rights"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-ink-500 transition-colors hover:text-ink-900 print:hidden"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all scenarios
        </Link>

        {/* Hero / Header */}
        <header
          data-scenario-content
          className="relative mb-10 overflow-hidden rounded-3xl border border-ink-100 bg-white p-6 shadow-soft animate-fade-up sm:p-10"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-0 bg-paper-grain opacity-60"
          />
          <div className="relative">
            <div className="flex flex-wrap items-start gap-4">
              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ring-1 ${colors.bg} ${colors.text} ${colors.ring}`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="tag">{scenario.tag}</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-india-100 bg-india-50/60 px-2.5 py-1 text-[11px] font-medium text-india-700">
                    <ShieldCheck className="h-3 w-3" /> {VERIFIED_LABEL}
                  </span>
                </div>
                <h1 className="font-serif text-3xl font-medium tracking-tight text-balance text-ink-900 sm:text-4xl">
                  {scenario.title}
                </h1>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-ink-50 p-5 text-[15.5px] leading-relaxed text-ink-700 sm:p-6 sm:text-[17px]">
              {scenario.description}
            </div>

            <div className="mt-5">
              <KeyFacts scenario={scenario} />
            </div>
          </div>
        </header>

        {/* Main content */}
        <div data-scenario-content className="space-y-8">
          {/* Law & Remedy */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-heritage p-6">
              <div className="mb-3 flex items-center gap-3">
                <Scale className="h-5 w-5 text-saffron-600" />
                <h2 className="font-serif text-xl font-medium text-ink-900">
                  The law
                </h2>
              </div>
              <p className="text-[15px] leading-relaxed text-ink-700">
                {scenario.lawAndSection}
              </p>
            </div>

            <div className="card-heritage p-6">
              <div className="mb-3 flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-india-600" />
                <h2 className="font-serif text-xl font-medium text-ink-900">
                  Your remedy
                </h2>
              </div>
              <p className="text-[15px] leading-relaxed text-ink-700">
                {scenario.remedy}
              </p>
            </div>
          </div>

          {/* Interactive step tracker */}
          <StepTracker slug={scenario.slug} steps={scenario.steps} />

          {/* Documents + Where to go */}
          <div className="grid gap-4 sm:grid-cols-2">
            <DocumentChecklist
              slug={scenario.slug}
              documents={scenario.documents}
            />

            <div className="card-heritage p-6">
              <div className="mb-3 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-ink-500" />
                <h2 className="font-serif text-[18px] font-medium text-ink-900">
                  Where to go
                </h2>
              </div>
              <div className="rounded-xl bg-saffron-50 p-4 text-[14.5px] font-medium leading-relaxed text-saffron-800">
                {scenario.whereToGo}
              </div>
              <p className="mt-3 text-[12px] text-ink-400">
                Jurisdiction varies by state — confirm exact venue with a local
                advocate.
              </p>
            </div>
          </div>

          {/* Emergency contacts */}
          <EmergencyContacts tag={scenario.tag} />

          {/* Disclaimer */}
          <aside className="rounded-2xl border border-saffron-200/70 bg-saffron-50/60 p-5 print:break-inside-avoid">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-saffron-600" />
              <div>
                <p className="text-[13.5px] font-semibold text-saffron-800">
                  Information, not legal advice
                </p>
                <p className="mt-1 text-[13px] leading-relaxed text-saffron-800/80">
                  This guide explains your rights in plain language. Specific
                  facts can change outcomes — always verify with a qualified
                  advocate before filing or signing anything.
                </p>
              </div>
            </div>
          </aside>

          {/* Helpful feedback */}
          <div className="print:hidden">
            <HelpfulFeedback slug={scenario.slug} />
          </div>

          {/* Talk to a lawyer CTA */}
          <div className="relative mt-2 overflow-hidden rounded-2xl bg-ink-900 p-8 text-center sm:p-10 print:hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-30 mandala-bg"
            />
            <div className="relative">
              <p className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-paper-200">
                Verified counsel
              </p>
              <h2 className="font-serif text-2xl font-medium text-white sm:text-3xl">
                Talk to a lawyer who handles this every day.
              </h2>
              <p className="mx-auto mt-3 max-w-md text-[14.5px] leading-relaxed text-ink-200">
                Get a 15-minute orientation call. We match you to an advocate
                who has filed cases like yours.
              </p>
              <Link
                href="/"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-medium text-ink-900 transition-colors hover:bg-paper-100"
              >
                Find a lawyer <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Related scenarios */}
        <div className="mt-16 print:hidden">
          <RelatedScenarios scenario={scenario} />
        </div>
      </div>
    </div>
  );
}