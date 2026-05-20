import { Statute } from "../_types";

export const bsa2023: Statute = {
  meta: {
    slug: "bharatiya-sakshya-adhiniyam-2023",
    categorySlug: "criminal-laws",
    shortName: "Bharatiya Sakshya Adhiniyam (BSA)",
    fullName: "The Bharatiya Sakshya Adhiniyam, 2023",
    year: 2023,
    sanskrit: "भारतीय साक्ष्य अधिनियम",
    tagline: "The law of evidence — replacing the IEA.",
    totalSections: 170,
    totalChapters: 12,
    coverage: "mvp",
    preamble: "An Act to consolidate and to provide for general rules and principles of evidence for fair trial.",
    summary:
      "Replaces the Indian Evidence Act, 1872. Modernises rules on relevancy, admissibility, electronic evidence, and judicial notice.",
    tier: 1,
    sourcePdf: {
      pdfPath: "/pdfs/Criminal%20Laws%20pdf/BSA%202023.pdf",
      pdfFile: "BSA 2023.pdf",
      pdfPage: 1
    }
  },
  chapters: [],
  penaltyTable: [
    {
      section: "61",
      subSection: "-",
      lawInBrief: "Admissibility of electronic records",
      punishment: "-",
      type: "procedural",
      actionRequired: "To submit WhatsApp chats, emails, or CCTV footage in court, you must provide a compliance certificate under Section 63.",
      authority: "Trial Court"
    },
    {
      section: "121",
      subSection: "-",
      lawInBrief: "Burden of proof",
      punishment: "-",
      type: "procedural",
      actionRequired: "Whoever makes a claim in court must prove it. The burden usually lies on the prosecution or the person filing the suit.",
      defences: "In some specific laws (like dowry death or POCSO), the burden shifts to the accused (Reverse Burden of Proof)."
    }
  ]
};
