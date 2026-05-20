import { Statute } from "../_types";

export const transferOfPropertyAct1882: Statute = {
  meta: {
    slug: "transfer-of-property-act-1882",
    categorySlug: "property-laws",
    shortName: "Transfer of Property Act",
    fullName: "The Transfer of Property Act, 1882",
    year: 1882,
    tagline: "How property changes hands — sale, mortgage, lease, gift.",
    summary:
      "The general law on transfer of immovable and movable property between living persons. Defines core forms — sale, mortgage, lease, exchange, gift — and their essentials.",
    preamble:
      "An Act to amend the law relating to the Transfer of Property by act of Parties.",
    tier: 1,
    coverage: "mvp",
    totalSections: 137,
    totalChapters: 8,
    sourcePdf: {
      pdfPath: "/pdfs/Property%20Laws/Transfer%20of%20Property%20Act%201882.pdf",
      pdfFile: "Transfer of Property Act 1882.pdf",
      pdfPage: 1
    }
  },
  chapters: [],
  penaltyTable: [
    {
      section: "54",
      subSection: "-",
      lawInBrief: "Sale of Immovable Property",
      punishment: "-",
      type: "structural",
      actionRequired: "A sale of property worth ₹100 or more MUST be made by a registered instrument. An oral agreement is legally invalid.",
      authority: "Sub-Registrar of Assurances"
    },
    {
      section: "58",
      subSection: "-",
      lawInBrief: "Mortgages and Types",
      punishment: "-",
      type: "structural",
      actionRequired: "To create a valid mortgage (other than by deposit of title deeds), you must register the mortgage deed, signed by the mortgagor and attested by two witnesses."
    },
    {
      section: "106",
      subSection: "-",
      lawInBrief: "Duration of certain leases in absence of written contract",
      punishment: "-",
      type: "civil",
      timeLimit: "To terminate a month-to-month tenancy (residential), you must give a 15-day notice. For agricultural/manufacturing, a 6-month notice is required.",
      actionRequired: "Send a formal legal notice to quit via registered post before initiating eviction proceedings."
    },
    {
      section: "122",
      subSection: "-",
      lawInBrief: "Gift of Property",
      punishment: "-",
      type: "structural",
      actionRequired: "A gift must be accepted during the lifetime of the donor. If the donee dies before acceptance, the gift is void.",
      defences: "A gift deed can be revoked only if an express revocation clause was agreed upon (and not purely at the whim of the donor)."
    }
  ]
};
