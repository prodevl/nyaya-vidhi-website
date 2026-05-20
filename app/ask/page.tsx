import type { Metadata } from "next";
import AskClient from "./AskClient";

export const metadata: Metadata = {
  title: "Nyaya Mitra — Tell us what's happening, get the law",
  description:
    "A simple, guided assistant for everyday legal problems in India. Pick what's happening to you, get the steps, the law, the helplines — in plain English.",
};

export default function AskPage() {
  return <AskClient />;
}
