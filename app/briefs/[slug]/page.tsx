import React from "react";
import GlassBriefTable from "../../../components/statute/GlassBriefTable";
import { actBriefs } from "../../../lib/statutes/_briefs";
import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

export default function BriefPage({ params }: Props) {
  const brief = actBriefs[params.slug];
  if (!brief) return notFound();

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px" }}>
      <section style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 28, margin: 0 }}>{slugToTitle(params.slug)}</h1>
        <p style={{ marginTop: 10, opacity: 0.8 }}>{brief.oneLiner}</p>
        <a
          href={brief.sourceUrl}
          target="_blank"
          rel="noreferrer"
          style={{ color: "#8ab4ff", textDecoration: "none" }}
        >
          Source: {brief.sourceName}
        </a>
        {brief.secondarySourceUrl ? (
          <>
            <span style={{ margin: "0 6px", opacity: 0.6 }}>|</span>
            <a
              href={brief.secondarySourceUrl}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#8ab4ff", textDecoration: "none" }}
            >
              {brief.secondarySourceName}
            </a>
          </>
        ) : null}
      </section>
      <GlassBriefTable rows={brief.punishments} />
    </main>
  );
}

function slugToTitle(slug: string) {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}
