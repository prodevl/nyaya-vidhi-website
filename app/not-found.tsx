import Link from "next/link";
import { ArrowLeft, ScrollText } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-saffron-50 text-saffron-700">
        <ScrollText className="h-6 w-6" />
      </div>
      <p className="devanagari text-sm text-ink-400">पृष्ठं न प्राप्तम्</p>
      <h1 className="mt-3 font-serif text-display-lg font-medium tracking-tight text-ink-900">
        404 — Page not found
      </h1>
      <p className="mt-4 max-w-md text-pretty text-[15px] leading-relaxed text-ink-500">
        The clause you're looking for might still be in Phase 2. Head back to the index — the rest of the library is open.
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/" className="btn-primary">
          <ArrowLeft className="h-3.5 w-3.5" />
          Back home
        </Link>
        <Link href="/laws" className="btn-outline">
          Browse all laws
        </Link>
      </div>
    </section>
  );
}
