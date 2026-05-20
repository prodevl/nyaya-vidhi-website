import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { scenariosData, type ScenarioDetail } from "@/app/know-your-rights/data";

const colorMap: Record<string, string> = {
  saffron: "bg-saffron-50 text-saffron-700 group-hover:bg-saffron-100",
  india: "bg-india-50 text-india-700 group-hover:bg-india-100",
  terracotta: "bg-[#F4DDD0] text-terracotta-500 group-hover:bg-[#EFC5B0]",
  marigold: "bg-marigold-400/20 text-saffron-700 group-hover:bg-marigold-400/30",
};

function pickRelated(current: ScenarioDetail, n = 3): ScenarioDetail[] {
  const sameTag = scenariosData.filter(
    (s) => s.slug !== current.slug && s.tag === current.tag
  );
  const sameColor = scenariosData.filter(
    (s) =>
      s.slug !== current.slug &&
      s.color === current.color &&
      s.tag !== current.tag
  );
  const seen = new Set<string>([current.slug]);
  const out: ScenarioDetail[] = [];
  for (const s of [...sameTag, ...sameColor]) {
    if (!seen.has(s.slug)) {
      out.push(s);
      seen.add(s.slug);
      if (out.length === n) return out;
    }
  }
  // Fallback: top-of-list scenarios
  for (const s of scenariosData) {
    if (!seen.has(s.slug)) {
      out.push(s);
      seen.add(s.slug);
      if (out.length === n) return out;
    }
  }
  return out;
}

export default function RelatedScenarios({
  scenario,
}: {
  scenario: ScenarioDetail;
}) {
  const related = pickRelated(scenario);
  if (related.length === 0) return null;

  return (
    <section aria-labelledby="related-heading" className="mt-4">
      <div className="mb-5 flex items-end justify-between gap-4">
        <h2
          id="related-heading"
          className="font-serif text-[20px] font-medium text-ink-900"
        >
          People also explore
        </h2>
        <Link
          href="/know-your-rights"
          className="text-[13px] font-medium text-saffron-700 underline-offset-4 hover:underline"
        >
          Browse all
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((s) => {
          const Icon = s.iconName;
          return (
            <Link
              key={s.slug}
              href={`/know-your-rights/${s.slug}`}
              className="group card-heritage p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <div
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                    colorMap[s.color]
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <span className="tag">{s.tag}</span>
              </div>
              <p className="mt-4 font-serif text-[15.5px] font-medium leading-snug text-ink-900">
                {s.title}
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-[12px] font-medium text-saffron-700 opacity-0 transition-opacity group-hover:opacity-100">
                Open card
                <ArrowRight className="h-3 w-3" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
