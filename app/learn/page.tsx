import Link from "next/link";
import { ArrowRight, BookMarked, Clock } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { learningPaths, type LearningPath } from "@/lib/learning-paths";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Learning Paths",
  description:
    "Curated, goal-based learning journeys for Indian law — beginner to advanced.",
};

const levelStyle: Record<LearningPath["level"], string> = {
  Beginner: "bg-india-50 text-india-700 border-india-200",
  Intermediate: "bg-saffron-50 text-saffron-700 border-saffron-200",
  Advanced: "bg-[#F4DDD0] text-terracotta-500 border-terracotta-500/30",
};

export default function LearnPage() {
  const grouped: Record<LearningPath["level"], LearningPath[]> = {
    Beginner: [],
    Intermediate: [],
    Advanced: [],
  };
  learningPaths.forEach((p) => grouped[p.level].push(p));

  return (
    <>
      <PageHeader
        eyebrow="मार्ग · Paths"
        sanskrit="यथा बीजं तथा अंकुरः · As is the seed, so is the sprout"
        title="Learning paths"
        description="Goal-oriented journeys that braid clauses from multiple laws into something useful. Pick by where you are — and where you want to be."
        crumbs={[{ label: "Home", href: "/" }, { label: "Learn" }]}
      />

      <section className="container-page pb-24 space-y-20">
        {(Object.keys(grouped) as LearningPath["level"][]).map((level) => (
          <div key={level}>
            <div className="mb-6 flex items-center gap-4">
              <span
                className={cn(
                  "rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-wider",
                  levelStyle[level]
                )}
              >
                {level}
              </span>
              <div className="h-px flex-1 bg-ink-100" />
              <span className="text-xs uppercase tracking-[0.18em] text-ink-400 tabular">
                {grouped[level].length} paths
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {grouped[level].map((path, i) => {
                const Icon = path.icon;
                return (
                  <Link
                    key={path.slug}
                    href={`/learn/${path.slug}`}
                    className="group card-heritage relative overflow-hidden p-6"
                  >
                    <span className="absolute right-5 top-3 font-serif text-5xl font-light tabular text-ink-100 transition-colors group-hover:text-saffron-200">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-saffron-50 text-saffron-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-serif text-xl font-medium leading-tight tracking-tight text-ink-900">
                      {path.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-[13.5px] text-ink-500">
                      {path.subtitle}
                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-ink-100 pt-4 text-[11px] text-ink-400">
                      <span className="inline-flex items-center gap-1 tabular">
                        <Clock className="h-3 w-3" /> {path.duration}
                      </span>
                      <span className="inline-flex items-center gap-1 tabular">
                        <BookMarked className="h-3 w-3" /> {path.lessons} lessons
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:text-saffron-600" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
