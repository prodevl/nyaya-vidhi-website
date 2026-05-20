import { Statute } from "../_types";

export const reraAct2016: Statute = {
  meta: {
    slug: "rera-act-2016",
    categorySlug: "real-estate",
    shortName: "RERA Act",
    fullName: "The Real Estate (Regulation and Development) Act, 2016",
    year: 2016,
    tagline: "Builders accountable. Buyers protected.",
    summary:
      "Establishes a state-level Regulatory Authority to register real-estate projects and agents, enforce timelines, and adjudicate homebuyer complaints.",
    preamble:
      "An Act to establish the Real Estate Regulatory Authority for regulation and promotion of the real estate sector and to ensure sale of plot, apartment or building in an efficient and transparent manner.",
    tier: 1,
    coverage: "mvp",
    totalSections: 92,
    totalChapters: 10,
    sourcePdf: {
      pdfPath: "/pdfs/Real%20Estate/RERA%20Act,%202016%20(Real%20Estate%20Regulation).pdf",
      pdfFile: "RERA Act, 2016 (Real Estate Regulation).pdf",
      pdfPage: 1
    }
  },
  chapters: [],
  penaltyTable: [
    {
      section: "3",
      subSection: "-",
      lawInBrief: "Prior registration of real estate project with RERA",
      punishment: "Penalty up to 10% of the estimated cost of the project.",
      type: "compliance",
      severity: "medium",
      actionRequired: "Before buying any under-construction property, verify the RERA registration number on the state RERA website.",
      authority: "State RERA Authority"
    },
    {
      section: "18",
      subSection: "-",
      lawInBrief: "Return of amount and compensation for delay in possession",
      punishment: "Builder must refund the entire amount with interest, or pay interest for every month of delay if buyer chooses not to withdraw.",
      type: "civil",
      severity: "high",
      actionRequired: "If possession is delayed beyond the date promised in the Agreement for Sale, file a complaint in RERA for a refund or interest.",
      defences: "Delay caused by Force Majeure (e.g., natural disasters) explicitly recognized by the Authority."
    },
    {
      section: "59",
      subSection: "-",
      lawInBrief: "Punishment for non-registration of project",
      punishment: "Imprisonment up to 3 years or fine up to 10% of project cost, or both.",
      type: "criminal",
      severity: "high",
      actionRequired: "File a complaint to RERA against builders marketing unregistered projects."
    },
    {
      section: "63",
      subSection: "-",
      lawInBrief: "Failure to comply with orders of Authority",
      punishment: "Penalty for every day of default, which may cumulatively extend up to 5% of the estimated cost of the project.",
      type: "compliance",
      severity: "high",
      actionRequired: "If a builder ignores a RERA order (like paying interest), file for execution proceedings to attach their assets/bank accounts.",
      authority: "Adjudicating Officer"
    }
  ]
};
