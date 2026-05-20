/**
 * Master taxonomy of Indian law domains covered on Nyaya Vidhi.
 * This is the single source of truth for navigation, landing grid,
 * category landing pages, and search.
 *
 * NOTE: Subtopics here are intentionally structural placeholders only —
 * actual statutory content & data will be added in Phase 2.
 */

import type { LucideIcon } from "lucide-react";
import {
  Scale,
  Landmark,
  Home,
  Building2,
  ShoppingBag,
  Gavel,
  Trees,
  Lightbulb,
  Users,
  FileSignature,
  Briefcase,
  Banknote,
  Building,
  MonitorSmartphone,
  BookOpen,
} from "lucide-react";

export type LawSubtopic = {
  slug: string;
  title: string;
  blurb: string;
};

export type LawCategory = {
  slug: string;
  title: string;
  sanskrit: string; // Devanagari accent label
  tagline: string;
  description: string;
  icon: LucideIcon;
  accent: "saffron" | "india" | "nile" | "terracotta" | "marigold";
  topicCount: number;
  subtopics: LawSubtopic[];
};

export const categories: LawCategory[] = [
  {
    slug: "tax-laws",
    title: "Tax Laws",
    sanskrit: "कर विधि",
    tagline: "Save more. Pay smart.",
    description:
      "From ITR filing to GST compliance, capital gains to deductions — master direct and indirect taxation in India.",
    icon: Landmark,
    accent: "saffron",
    topicCount: 18,
    subtopics: [
      { slug: "income-tax-basics", title: "Income Tax Basics", blurb: "Slabs, regimes, ITR forms" },
      { slug: "gst-explained", title: "GST Explained", blurb: "Registration, returns, ITC" },
      { slug: "capital-gains", title: "Capital Gains", blurb: "STCG, LTCG, indexation" },
      { slug: "tax-deductions", title: "Tax Deductions", blurb: "80C, 80D, HRA, home loan" },
      { slug: "tds-and-tcs", title: "TDS & TCS", blurb: "Rates, returns, Form 26AS" },
      { slug: "tax-saving-strategies", title: "Tax Saving Strategies", blurb: "Legal optimisation playbook" },
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    sanskrit: "स्थावर सम्पदा",
    tagline: "Buy, sell, and build with confidence.",
    description:
      "RERA, sale deeds, builder-buyer agreements, possession delays, encumbrance, and homebuyer rights.",
    icon: Building2,
    accent: "india",
    topicCount: 14,
    subtopics: [
      { slug: "rera-act", title: "RERA Act 2016", blurb: "Builder accountability" },
      { slug: "sale-deed-vs-agreement", title: "Sale Deed vs Agreement", blurb: "Key differences" },
      { slug: "homebuyer-rights", title: "Homebuyer Rights", blurb: "Delay, refund, possession" },
      { slug: "stamp-duty-registration", title: "Stamp Duty & Registration", blurb: "State-wise rates" },
      { slug: "encumbrance-certificate", title: "Encumbrance Certificate", blurb: "Why it matters" },
    ],
  },
  {
    slug: "property-laws",
    title: "Property Laws",
    sanskrit: "सम्पत्ति विधि",
    tagline: "Own, inherit, transfer — by the book.",
    description:
      "Transfer of Property Act, inheritance, partition, adverse possession, gift deeds, and ancestral rights.",
    icon: Home,
    accent: "terracotta",
    topicCount: 16,
    subtopics: [
      { slug: "transfer-of-property", title: "Transfer of Property Act", blurb: "Sale, mortgage, lease" },
      { slug: "inheritance-and-succession", title: "Inheritance & Succession", blurb: "Hindu, Muslim, Christian" },
      { slug: "partition-of-property", title: "Partition", blurb: "Coparcener rights" },
      { slug: "gift-deed", title: "Gift Deed", blurb: "When and how" },
      { slug: "adverse-possession", title: "Adverse Possession", blurb: "12-year rule" },
    ],
  },
  {
    slug: "consumer-rights",
    title: "Consumer Rights",
    sanskrit: "उपभोक्ता अधिकार",
    tagline: "Know what you're owed.",
    description:
      "Consumer Protection Act 2019, complaints, e-commerce, defective goods, deficient services, and remedies.",
    icon: ShoppingBag,
    accent: "saffron",
    topicCount: 12,
    subtopics: [
      { slug: "consumer-protection-act-2019", title: "Consumer Protection Act 2019", blurb: "Your six rights" },
      { slug: "filing-a-complaint", title: "Filing a Complaint", blurb: "District to National" },
      { slug: "ecommerce-rules", title: "E-Commerce Rules", blurb: "Returns, refunds, liability" },
      { slug: "product-liability", title: "Product Liability", blurb: "Defective goods recourse" },
      { slug: "unfair-trade-practices", title: "Unfair Trade Practices", blurb: "Recognise & report" },
    ],
  },
  {
    slug: "criminal-laws",
    title: "Criminal Laws",
    sanskrit: "दंड विधि",
    tagline: "BNS, BNSS, BSA — the new code.",
    description:
      "Bharatiya Nyaya Sanhita, Bharatiya Nagarik Suraksha Sanhita, evidence, FIRs, bail, arrest rights.",
    icon: Gavel,
    accent: "india",
    topicCount: 22,
    subtopics: [
      { slug: "bns-overview", title: "Bharatiya Nyaya Sanhita", blurb: "Replacing the IPC" },
      { slug: "bnss-procedure", title: "BNSS Procedure", blurb: "Replacing the CrPC" },
      { slug: "bsa-evidence", title: "Bharatiya Sakshya Adhiniyam", blurb: "Replacing IEA" },
      { slug: "your-rights-on-arrest", title: "Rights on Arrest", blurb: "Article 22 protections" },
      { slug: "filing-an-fir", title: "Filing an FIR", blurb: "Section 173 BNSS" },
      { slug: "bail-types-and-process", title: "Bail — Types & Process", blurb: "Regular, anticipatory, interim" },
    ],
  },
  {
    slug: "environment-and-land",
    title: "Environment & Land",
    sanskrit: "पर्यावरण एवं भूमि",
    tagline: "Protect what sustains us.",
    description:
      "Environment Protection Act, NGT, forest rights, land acquisition, pollution control, and green tribunals.",
    icon: Trees,
    accent: "india",
    topicCount: 10,
    subtopics: [
      { slug: "environment-protection-act", title: "Environment Protection Act", blurb: "1986 framework" },
      { slug: "ngt-procedure", title: "National Green Tribunal", blurb: "Filing & jurisdiction" },
      { slug: "forest-rights-act", title: "Forest Rights Act", blurb: "Tribal & community rights" },
      { slug: "land-acquisition-act", title: "Land Acquisition Act 2013", blurb: "Compensation framework" },
    ],
  },
  {
    slug: "intellectual-property",
    title: "Intellectual Property",
    sanskrit: "बौद्धिक सम्पदा",
    tagline: "Guard ideas like assets.",
    description:
      "Patents, trademarks, copyrights, designs, geographical indications, and trade secrets in India.",
    icon: Lightbulb,
    accent: "marigold",
    topicCount: 14,
    subtopics: [
      { slug: "trademark-registration", title: "Trademark Registration", blurb: "Class, search, file" },
      { slug: "copyright-basics", title: "Copyright Basics", blurb: "Works covered, term" },
      { slug: "patent-filing", title: "Patent Filing", blurb: "Provisional to grant" },
      { slug: "design-registration", title: "Design Registration", blurb: "Industrial designs" },
      { slug: "geographical-indications", title: "Geographical Indications", blurb: "GI tag system" },
    ],
  },
  {
    slug: "family-and-personal-laws",
    title: "Family & Personal Laws",
    sanskrit: "पारिवारिक विधि",
    tagline: "Marriage, divorce, custody, succession.",
    description:
      "Hindu, Muslim, Christian, Parsi, and Special Marriage Act — covering marriage, divorce, maintenance, adoption.",
    icon: Users,
    accent: "saffron",
    topicCount: 20,
    subtopics: [
      { slug: "hindu-marriage-act", title: "Hindu Marriage Act", blurb: "Conditions, registration" },
      { slug: "muslim-personal-law", title: "Muslim Personal Law", blurb: "Nikah, talaq, mehr" },
      { slug: "special-marriage-act", title: "Special Marriage Act", blurb: "Inter-faith marriage" },
      { slug: "divorce-grounds-and-procedure", title: "Divorce — Grounds & Procedure", blurb: "Mutual & contested" },
      { slug: "child-custody", title: "Child Custody", blurb: "Best interest principle" },
      { slug: "maintenance-and-alimony", title: "Maintenance & Alimony", blurb: "Sections 125 BNSS, 24 HMA" },
      { slug: "adoption-law", title: "Adoption Law", blurb: "CARA & HAMA" },
    ],
  },
  {
    slug: "contracts-and-commercial-law",
    title: "Contracts & Commercial Law",
    sanskrit: "संविदा एवं वाणिज्य विधि",
    tagline: "Make agreements that hold up.",
    description:
      "Indian Contract Act, Sale of Goods, Specific Relief, partnership, agency, arbitration, and commercial courts.",
    icon: FileSignature,
    accent: "nile",
    topicCount: 18,
    subtopics: [
      { slug: "indian-contract-act", title: "Indian Contract Act", blurb: "Essentials of a contract" },
      { slug: "sale-of-goods-act", title: "Sale of Goods Act", blurb: "Title, warranty, delivery" },
      { slug: "specific-relief-act", title: "Specific Relief Act", blurb: "Performance & injunctions" },
      { slug: "partnership-and-llp", title: "Partnership & LLP", blurb: "Formation & dissolution" },
      { slug: "arbitration-and-conciliation", title: "Arbitration & Conciliation", blurb: "1996 Act overview" },
      { slug: "commercial-courts", title: "Commercial Courts Act", blurb: "Threshold & forum" },
    ],
  },
  {
    slug: "labour-and-employment-laws",
    title: "Labour & Employment Laws",
    sanskrit: "श्रम एवं रोजगार विधि",
    tagline: "Rights for workers and workplaces.",
    description:
      "Four labour codes, PF, ESI, gratuity, POSH, industrial disputes, contract labour, minimum wages.",
    icon: Briefcase,
    accent: "india",
    topicCount: 16,
    subtopics: [
      { slug: "four-labour-codes", title: "The Four Labour Codes", blurb: "Wages, IR, SS, OSH" },
      { slug: "posh-act", title: "POSH Act", blurb: "Workplace harassment" },
      { slug: "pf-and-esi", title: "PF & ESI", blurb: "Contributions & benefits" },
      { slug: "gratuity-act", title: "Payment of Gratuity Act", blurb: "Eligibility & calculation" },
      { slug: "industrial-disputes", title: "Industrial Disputes", blurb: "Retrenchment & lockout" },
    ],
  },
  {
    slug: "financial-markets-and-banking",
    title: "Financial Markets & Banking",
    sanskrit: "वित्तीय बाजार एवं बैंकिंग",
    tagline: "Markets, money, and regulation.",
    description:
      "SEBI, RBI, banking regulation, NBFCs, NI Act, insider trading, IBC, SARFAESI, and DRT.",
    icon: Banknote,
    accent: "marigold",
    topicCount: 18,
    subtopics: [
      { slug: "sebi-framework", title: "SEBI Framework", blurb: "Securities regulation" },
      { slug: "rbi-and-banking-regulation", title: "RBI & Banking Regulation", blurb: "Acts & circulars" },
      { slug: "insolvency-and-bankruptcy-code", title: "Insolvency & Bankruptcy Code", blurb: "IBC 2016" },
      { slug: "sarfaesi-act", title: "SARFAESI Act", blurb: "Secured asset recovery" },
      { slug: "negotiable-instruments-act", title: "Negotiable Instruments Act", blurb: "Section 138 cheque bounce" },
      { slug: "insider-trading", title: "Insider Trading Norms", blurb: "PIT Regulations 2015" },
    ],
  },
  {
    slug: "company-formation-and-governance",
    title: "Company Formation & Governance",
    sanskrit: "कम्पनी निर्माण एवं शासन",
    tagline: "Start, scale, and govern right.",
    description:
      "Companies Act 2013, MCA filings, directors' duties, ESOPs, CSR, related-party transactions, governance.",
    icon: Building,
    accent: "nile",
    topicCount: 16,
    subtopics: [
      { slug: "incorporating-a-company", title: "Incorporating a Company", blurb: "Pvt Ltd, OPC, LLP" },
      { slug: "directors-duties", title: "Directors' Duties", blurb: "Section 166 obligations" },
      { slug: "annual-roc-filings", title: "Annual ROC Filings", blurb: "MGT-7, AOC-4 cycle" },
      { slug: "esops-and-sweat-equity", title: "ESOPs & Sweat Equity", blurb: "Issue & taxation" },
      { slug: "csr-compliance", title: "CSR Compliance", blurb: "Section 135 thresholds" },
      { slug: "startup-india-benefits", title: "Startup India Benefits", blurb: "DPIIT recognition" },
    ],
  },
  {
    slug: "information-technology-and-digital-laws",
    title: "IT & Digital Laws",
    sanskrit: "सूचना प्रौद्योगिकी विधि",
    tagline: "Code, data, and the digital citizen.",
    description:
      "IT Act, DPDP Act 2023, cybercrime, intermediary rules, e-contracts, digital signatures, OTT regulation.",
    icon: MonitorSmartphone,
    accent: "saffron",
    topicCount: 14,
    subtopics: [
      { slug: "it-act-overview", title: "IT Act Overview", blurb: "2000 framework" },
      { slug: "dpdp-act-2023", title: "DPDP Act 2023", blurb: "Data Protection" },
      { slug: "cybercrime-and-reporting", title: "Cybercrime & Reporting", blurb: "Section 66 family & portal" },
      { slug: "intermediary-rules", title: "Intermediary Rules 2021", blurb: "Compliance for platforms" },
      { slug: "digital-signatures", title: "Digital Signatures", blurb: "DSC vs e-sign" },
    ],
  },
  {
    slug: "constitution-and-fundamental-rights",
    title: "Constitution & Fundamental Rights",
    sanskrit: "संविधान एवं मौलिक अधिकार",
    tagline: "The supreme law. Your shield.",
    description:
      "Part III rights, directive principles, writs, federalism, amendments, basic structure, citizenship.",
    icon: Scale,
    accent: "saffron",
    topicCount: 20,
    subtopics: [
      { slug: "fundamental-rights", title: "Fundamental Rights", blurb: "Articles 12 to 35" },
      { slug: "directive-principles", title: "Directive Principles", blurb: "Part IV roadmap" },
      { slug: "writs-and-remedies", title: "Writs & Remedies", blurb: "Article 32 & 226" },
      { slug: "basic-structure-doctrine", title: "Basic Structure Doctrine", blurb: "Kesavananda legacy" },
      { slug: "amendment-procedure", title: "Amendment Procedure", blurb: "Article 368" },
    ],
  },
];

export function getCategoryBySlug(slug: string): LawCategory | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return categories.map((c) => c.slug);
}

/**
 * Mega-menu grouping for the header navigation.
 * Groups the 15 categories into thematic columns.
 */
export const megaMenuGroups = [
  {
    label: "Daily Life",
    items: ["consumer-rights", "family-and-personal-laws", "criminal-laws", "constitution-and-fundamental-rights"],
  },
  {
    label: "Money & Property",
    items: ["tax-laws", "real-estate", "property-laws", "financial-markets-and-banking"],
  },
  {
    label: "Business & Work",
    items: [
      "company-formation-and-governance",
      "contracts-and-commercial-law",
      "labour-and-employment-laws",
      "intellectual-property",
    ],
  },
  {
    label: "Digital & Environment",
    items: ["information-technology-and-digital-laws", "environment-and-land"],
  },
] as const;
