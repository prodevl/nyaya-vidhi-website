import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookOpen, Shield, HelpCircle, FileText, CheckCircle2, ChevronRight, Scale, ArrowRight } from "lucide-react";
import { scenariosData } from "../data";

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

const colorStyles: Record<string, { bg: string, text: string, border: string }> = {
  saffron: { bg: "bg-saffron-50", text: "text-saffron-700", border: "border-saffron-200" },
  india: { bg: "bg-india-50", text: "text-india-700", border: "border-india-200" },
  terracotta: { bg: "bg-[#F4DDD0]", text: "text-terracotta-500", border: "border-[#EFC5B0]" },
  marigold: { bg: "bg-marigold-400/20", text: "text-saffron-700", border: "border-marigold-300" },
};

export default async function ScenarioPage({ params }: Props) {
  const { slug } = await params;
  const scenario = scenariosData.find((s) => s.slug === slug);

  if (!scenario) {
    notFound();
  }

  const Icon = scenario.iconName;
  const colors = colorStyles[scenario.color] || colorStyles.saffron;

  return (
    <div className="min-h-screen bg-paper-50 pb-24 pt-12">
      <div className="container-page max-w-3xl">
        {/* Back navigation */}
        <Link
          href="/know-your-rights"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-ink-500 transition-colors hover:text-ink-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all scenarios
        </Link>

        {/* Header */}
        <div className="mb-12 rounded-3xl border border-ink-100 bg-white p-6 shadow-soft sm:p-10">
          <div className="flex flex-wrap items-center gap-4">
            <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${colors.bg} ${colors.text}`}>
              <Icon className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <span className="tag mb-2 inline-block">{scenario.tag}</span>
              <h1 className="font-serif text-3xl font-medium text-ink-900 sm:text-4xl">
                {scenario.title}
              </h1>
            </div>
          </div>
          
          <div className="mt-8 rounded-2xl bg-ink-50 p-5 text-ink-700 sm:p-6 sm:text-lg">
            {scenario.description}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Law & Remedy Card */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-heritage p-6">
              <div className="mb-4 flex items-center gap-3">
                <Scale className="h-5 w-5 text-saffron-600" />
                <h2 className="font-serif text-xl font-medium text-ink-900">The Law</h2>
              </div>
              <p className="text-[15px] leading-relaxed text-ink-700">{scenario.lawAndSection}</p>
            </div>
            
            <div className="card-heritage p-6">
              <div className="mb-4 flex items-center gap-3">
                <Shield className="h-5 w-5 text-saffron-600" />
                <h2 className="font-serif text-xl font-medium text-ink-900">Your Remedy</h2>
              </div>
              <p className="text-[15px] leading-relaxed text-ink-700">{scenario.remedy}</p>
            </div>
          </div>

          {/* Action Steps */}
          <div className="card-heritage overflow-hidden">
            <div className="border-b border-ink-100 bg-ink-50/50 px-6 py-5">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-ink-600" />
                <h2 className="font-serif text-xl font-medium text-ink-900">Steps to Take</h2>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <div className="relative border-l-2 border-ink-100 pl-6 sm:pl-8">
                {scenario.steps.map((step, index) => (
                  <div key={index} className="relative mb-8 last:mb-0">
                    <span className="absolute -left-[37px] flex h-7 w-7 items-center justify-center rounded-full bg-ink-900 text-xs font-bold text-white sm:-left-[45px]">
                      {index + 1}
                    </span>
                    <h3 className="mb-2 text-[17px] font-medium text-ink-900">{step.title}</h3>
                    <p className="text-[15px] leading-relaxed text-ink-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Docs & Destinations */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-heritage p-6">
              <div className="mb-4 flex items-center gap-3">
                <FileText className="h-5 w-5 text-ink-500" />
                <h2 className="font-serif text-[18px] font-medium text-ink-900">Required Documents</h2>
              </div>
              <ul className="space-y-2">
                {scenario.documents.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[14px] text-ink-700">
                    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-ink-300" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="card-heritage p-6">
              <div className="mb-4 flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-ink-500" />
                <h2 className="font-serif text-[18px] font-medium text-ink-900">Where to Go</h2>
              </div>
              <div className="rounded-xl bg-saffron-50 p-4 text-[15px] font-medium text-saffron-800">
                {scenario.whereToGo}
              </div>
            </div>
          </div>
          
          <div className="mt-12 rounded-2xl bg-ink-900 p-8 text-center sm:p-10">
            <h2 className="mb-3 font-serif text-2xl font-medium text-white">Need formal legal advice?</h2>
            <p className="mb-6 text-ink-200">While this guide helps you understand your rights, specific situations require proper legal consultation.</p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-medium text-ink-900 transition-colors hover:bg-ink-100"
            >
              Find a Lawyer <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}