import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BookMarked, CheckCircle2, Clock, PlayCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { learningPaths } from "@/lib/learning-paths";

type Props = { params: Promise<{ path: string }> };

export function generateStaticParams() {
  return learningPaths.map((p) => ({ path: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { path: slug } = await params;
  const path = learningPaths.find((p) => p.slug === slug);
  if (!path) return { title: "Not Found" };
  return { title: path.title, description: path.subtitle };
}

export default async function LearningPathPage({ params }: Props) {
  const { path: slug } = await params;
  const path = learningPaths.find((p) => p.slug === slug);
  if (!path) return notFound();
  const Icon = path.icon;

  return (
    <>
      <PageHeader
        eyebrow={`${path.level} · ${path.duration} · ${path.lessons} lessons`}
        title={path.title}
        description={path.subtitle}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Learn", href: "/learn" },
          { label: path.title },
        ]}
      />

      <section className="container-page pb-24 grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Sticky enrol card */}
        <aside className="lg:col-span-4 lg:order-2">
          <div className="lg:sticky lg:top-32">
            <div className="card-heritage p-7">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-saffron-500 text-white shadow-glow">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-medium tracking-tight text-ink-900">
                Start this path
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-500">
                Track your progress, bookmark chapters, and revisit anytime — all without signup in Phase 1.
              </p>
              <button className="btn-saffron mt-5 w-full justify-center">
                <PlayCircle className="h-4 w-4" />
                Begin Lesson 1
              </button>
              <ul className="mt-6 space-y-2 border-t border-ink-100 pt-5 text-[13px] text-ink-500">
                <li className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-saffron-600" />
                  {path.duration} · {path.lessons} lessons
                </li>
                <li className="flex items-center gap-2">
                  <BookMarked className="h-3.5 w-3.5 text-saffron-600" />
                  Beginner-friendly
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-india-600" />
                  Certificate (Phase 2)
                </li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Lessons list */}
        <div className="lg:col-span-8 lg:order-1">
          <p className="eyebrow">Curriculum</p>
          <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-ink-900">
            What you'll learn
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-500">
            Each lesson is a focused 8–15 minute read or interactive walkthrough. Phase 2 will populate the actual content; the structure is set today.
          </p>

          <ol className="mt-10 space-y-3">
            {Array.from({ length: path.lessons }).map((_, i) => (
              <li key={i}>
                <Link
                  href="#"
                  className="group card-heritage flex items-start gap-5 p-5"
                >
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-saffron-200 bg-saffron-50 font-serif text-base font-semibold text-saffron-700 tabular">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-serif text-[17px] font-medium leading-snug text-ink-900">
                      Lesson {i + 1} · placeholder title
                    </p>
                    <p className="mt-1 text-[13px] text-ink-500">
                      Description of what this lesson teaches. Phase 2 will replace this text with the actual chapter outline.
                    </p>
                    <div className="mt-2 flex items-center gap-3 text-[11px] text-ink-400 tabular">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {6 + ((i * 3) % 9)} min
                      </span>
                      <span>·</span>
                      <span>Reading + quiz</span>
                    </div>
                  </div>
                  <ArrowRight className="mt-2 h-4 w-4 text-ink-400 transition group-hover:translate-x-1 group-hover:text-saffron-600" />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
