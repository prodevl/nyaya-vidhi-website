import { Statute } from "../_types";

export const consumerProtectionAct2019: Statute = {
  meta: {
    slug: "consumer-protection-act-2019",
    categorySlug: "consumer-rights",
    shortName: "Consumer Protection Act",
    fullName: "The Consumer Protection Act, 2019",
    year: 2019,
    tagline: "Six rights. Three forums. One Act.",
    summary:
      "Replaces the 1986 Act. Creates the Central Consumer Protection Authority, the District/State/National Commissions, product liability, e-commerce rules, and mediation.",
    preamble:
      "An Act to provide for protection of the interests of consumers and for the said purpose, to establish authorities for timely and effective administration and settlement of consumers' disputes.",
    tier: 1,
    coverage: "mvp",
    totalSections: 107,
    totalChapters: 8,
    sourcePdf: {
      pdfPath: "/pdfs/Consumer%20Rights/Consumer%20Protection%20Act%202019.pdf",
      pdfFile: "Consumer Protection Act 2019.pdf",
      pdfPage: 1
    }
  },
  chapters: [],
  penaltyTable: [
    {
      section: "2(9)",
      subSection: "-",
      lawInBrief: "Consumer Rights (Definition)",
      punishment: "-",
      type: "right",
      actionRequired: "Consumers have the right to be protected against hazardous goods, the right to be informed of quality, and the right to seek redressal."
    },
    {
      section: "18",
      subSection: "-",
      lawInBrief: "Powers of Central Consumer Protection Authority (CCPA)",
      punishment: "-",
      type: "structural",
      actionRequired: "The CCPA can initiate class action suits, order recalls, and investigate violations suo moto.",
      authority: "CCPA"
    },
    {
      section: "21",
      subSection: "-",
      lawInBrief: "False or misleading advertisements",
      punishment: "Penalty up to ₹10 lakh (first offence); up to ₹50 lakh (subsequent). Endorsers can be banned for up to 3 years.",
      type: "civil",
      severity: "high",
      actionRequired: "Report false ads to the CCPA. Influencers must disclose sponsorships or face personal liability.",
      authority: "CCPA",
      defences: "Endorsers who exercised due diligence before promoting the product can be exempted."
    },
    {
      section: "35",
      subSection: "-",
      lawInBrief: "Filing a consumer complaint",
      punishment: "-",
      type: "procedural",
      actionRequired: "You can file a complaint electronically via the e-Daakhil portal or in the District Commission where you reside.",
      timeLimit: "Must file within 2 years from the date the cause of action arose.",
      authority: "District Commission (Claims up to ₹50 Lakh)"
    },
    {
      section: "84",
      subSection: "-",
      lawInBrief: "Product Liability Action",
      punishment: "Manufacturer, seller, or service provider must compensate for harm caused by defective product.",
      type: "civil",
      severity: "medium",
      actionRequired: "File a product liability claim. You no longer need to prove privity of contract with the manufacturer.",
      defences: "The product was modified by the user, or the user ignored clear warnings."
    },
    {
      section: "89",
      subSection: "-",
      lawInBrief: "Punishment for manufacturing or selling adulterated/spurious goods",
      punishment: "Imprisonment from 6 months up to Life Imprisonment + Fine up to ₹10 lakh (depending on harm caused)",
      type: "criminal",
      severity: "high",
      bailStatus: "Non-Bailable, Cognizable",
      actionRequired: "If adulterated goods cause grievous hurt or death, file an FIR immediately."
    }
  ]
};
