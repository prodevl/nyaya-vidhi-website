import type { Metadata } from "next";
import GlossaryClient from "./GlossaryClient";

export const metadata: Metadata = {
  title: "Legal Glossary — Indian law words in plain English",
  description:
    "FIR, writ, bail, gratuity, RERA, DPDP — every common Indian legal term explained in simple, friendly words with examples.",
};

export default function GlossaryPage() {
  return <GlossaryClient />;
}
