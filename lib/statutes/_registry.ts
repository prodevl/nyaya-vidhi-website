/**
 * Master registry of every statute we plan to author in Phase 2.
 *
 * Every Act has a STUB entry from day 1 (so the navigation, category pages,
 * and progress dashboard can render the placeholder). As Acts are authored,
 * we replace the stub with the imported Statute object and flip
 * `coverage` from "not-started" → "in-progress" → "complete".
 */

import type { Statute, StatuteMeta, Coverage } from "./_types";
import { hasBrief } from "./_briefs";

// ============================================================
// As Acts get authored, import them here and replace the stub.
// ============================================================

import { forestConservationAct1980 } from "./environment-and-land/forest-conservation-act-1980";
import { environmentProtectionAct1986 } from "./environment-and-land/environment-protection-act-1986";
import { muslimPersonalLawShariatAct1937 } from "./family-and-personal-laws/muslim-personal-law-shariat-act-1937";
import { dowryProhibitionAct1961 } from "./family-and-personal-laws/dowry-prohibition-act-1961";
import { poshAct2013 } from "./labour-and-employment-laws/posh-act-2013";
import { wildLifeProtectionAct1972 } from "./environment-and-land/wild-life-protection-act-1972";
import { hinduMarriageAct1955 } from "./family-and-personal-laws/hindu-marriage-act-1955";
import { hinduSuccessionAct1956 } from "./family-and-personal-laws/hindu-succession-act-1956";
import { specialMarriageAct1954 } from "./family-and-personal-laws/special-marriage-act-1954";
import { guardiansAndWardsAct1890 } from "./family-and-personal-laws/guardians-and-wards-act-1890";
import { indianChristianMarriageAct1872 } from "./family-and-personal-laws/indian-christian-marriage-act-1872";
import { itAct2000 } from "./information-technology-and-digital-laws/it-act-2000";
import { bns2023 } from "./criminal-laws/bns-2023";
import { bnss2023 } from "./criminal-laws/bnss-2023";
import { bsa2023 } from "./criminal-laws/bsa-2023";

// ============================================================
// Stub helper
// ============================================================

type StubArgs = {
  slug: string;
  shortName: string;
  fullName: string;
  year: number;
  sanskrit?: string;
  tagline: string;
  summary: string;
  categorySlug: string;
  totalSections: number;
  totalChapters: number;
  pdfPath: string;
  pdfFile: string;
  tier: 1 | 2 | 3 | 4;
  coverage?: Coverage;
};

function stub(a: StubArgs): StatuteMeta {
  return {
    slug: a.slug,
    shortName: a.shortName,
    fullName: a.fullName,
    year: a.year,
    sanskrit: a.sanskrit,
    tagline: a.tagline,
    summary: a.summary,
    preamble: "",
    categorySlug: a.categorySlug,
    totalSections: a.totalSections,
    totalChapters: a.totalChapters,
    sourcePdf: {
      pdfPath: a.pdfPath,
      pdfFile: a.pdfFile,
      pdfPage: 1,
    },
    coverage: a.coverage ?? "not-started",
    tier: a.tier,
  };
}

// ============================================================
// All statutes — one entry per PDF
// ============================================================

export const statuteMetas: StatuteMeta[] = [
  // ------------- Constitution -------------
  stub({
    slug: "constitution-of-india",
    shortName: "Constitution of India",
    fullName: "The Constitution of India",
    year: 1950,
    sanskrit: "भारत का संविधान",
    tagline: "The supreme law of the land.",
    summary:
      "The longest written constitution in force, with 448 Articles in 25 Parts and 12 Schedules. It establishes the framework of Indian government, fundamental rights, directive principles, and the basic structure that no Parliament can erase.",
    categorySlug: "constitution-and-fundamental-rights",
    totalSections: 448,
    totalChapters: 25,
    pdfPath: "/pdfs/the_constitution_of_india.pdf",
    pdfFile: "the_constitution_of_india.pdf",
    tier: 4,
  }),

  // ------------- Tax Laws -------------
  stub({
    slug: "income-tax-act-1961",
    shortName: "Income Tax Act",
    fullName: "The Income-tax Act, 1961",
    year: 1961,
    tagline: "How India taxes income — every rupee, every taxpayer.",
    summary:
      "The principal direct-tax statute. Defines residents and non-residents, heads of income, computation, deductions, TDS, assessments, appeals, and penalties.",
    categorySlug: "tax-laws",
    totalSections: 298,
    totalChapters: 23,
    pdfPath: "/pdfs/Tax%20Laws/Income%20Tax%20Act,%201961.pdf",
    pdfFile: "Income Tax Act, 1961.pdf",
    tier: 4,
  }),
  stub({
    slug: "gst-acts-2017",
    shortName: "GST Acts (CGST/SGST/IGST)",
    fullName: "Central, State and Integrated Goods and Services Tax Acts, 2017",
    year: 2017,
    tagline: "One nation, one tax — and three statutes that make it work.",
    summary:
      "The GST framework: CGST levies central tax, SGST levies state tax on intra-state supply, and IGST handles inter-state and import supply. Together they replaced 17 indirect taxes.",
    categorySlug: "tax-laws",
    totalSections: 174,
    totalChapters: 21,
    pdfPath: "/pdfs/Tax%20Laws/GST%20Acts%20CGSTSGSTIGST,%202017.pdf",
    pdfFile: "GST Acts CGSTSGSTIGST, 2017.pdf",
    tier: 4,
  }),
  stub({
    slug: "customs-act-1962",
    shortName: "Customs Act",
    fullName: "The Customs Act, 1962",
    year: 1962,
    tagline: "What crosses the border, on what terms.",
    summary:
      "Governs import, export, customs duty, valuation, prohibitions, search, seizure, confiscation and offences related to cross-border trade.",
    categorySlug: "tax-laws",
    totalSections: 161,
    totalChapters: 17,
    pdfPath: "/pdfs/Tax%20Laws/Customs%20Act,%201962.pdf",
    pdfFile: "Customs Act, 1962.pdf",
    tier: 3,
  }),

  // ------------- Real Estate -------------
  stub({
    slug: "rera-act-2016",
    shortName: "RERA Act",
    fullName: "The Real Estate (Regulation and Development) Act, 2016",
    year: 2016,
    tagline: "Builders accountable. Buyers protected.",
    summary:
      "Establishes a state-level Regulatory Authority to register real-estate projects and agents, enforce timelines, and adjudicate homebuyer complaints.",
    categorySlug: "real-estate",
    totalSections: 92,
    totalChapters: 10,
    pdfPath: "/pdfs/Real%20Estate/RERA%20Act,%202016%20(Real%20Estate%20Regulation).pdf",
    pdfFile: "RERA Act, 2016 (Real Estate Regulation).pdf",
    tier: 2,
  }),

  // ------------- Property Laws -------------
  stub({
    slug: "transfer-of-property-act-1882",
    shortName: "Transfer of Property Act",
    fullName: "The Transfer of Property Act, 1882",
    year: 1882,
    tagline: "How property changes hands — sale, mortgage, lease, gift.",
    summary:
      "The general law on transfer of immovable and movable property between living persons. Defines core forms — sale, mortgage, lease, exchange, gift — and their essentials.",
    categorySlug: "property-laws",
    totalSections: 137,
    totalChapters: 8,
    pdfPath: "/pdfs/Property%20Laws/Transfer%20of%20Property%20Act%201882.pdf",
    pdfFile: "Transfer of Property Act 1882.pdf",
    tier: 2,
  }),
  stub({
    slug: "registration-act-1908",
    shortName: "Registration Act",
    fullName: "The Registration Act, 1908",
    year: 1908,
    tagline: "Make it registered. Make it stick.",
    summary:
      "Sets out which documents must be registered, the offices of registration, time limits, effect of non-registration, and registrar powers.",
    categorySlug: "property-laws",
    totalSections: 91,
    totalChapters: 15,
    pdfPath: "/pdfs/Property%20Laws/the_registration_act,1908.pdf",
    pdfFile: "the_registration_act,1908.pdf",
    tier: 2,
  }),
  stub({
    slug: "benami-property-act-1988",
    shortName: "Benami Property Act",
    fullName: "The Prohibition of Benami Property Transactions Act, 1988",
    year: 1988,
    tagline: "No more property held under someone else's name.",
    summary:
      "Prohibits benami transactions, creates the adjudicating authority, and provides for confiscation of benami property by the Government.",
    categorySlug: "property-laws",
    totalSections: 72,
    totalChapters: 9,
    pdfPath: "/pdfs/Property%20Laws/the_prohibition_of_benami_property_transactions_act,_1988.pdf",
    pdfFile: "the_prohibition_of_benami_property_transactions_act,_1988.pdf",
    tier: 1,
  }),
  stub({
    slug: "land-acquisition-act-2013",
    shortName: "Land Acquisition Act",
    fullName:
      "The Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement Act, 2013 (RFCTLARR)",
    year: 2013,
    tagline: "Fair price, fair process, when the State takes land.",
    summary:
      "Replaces the 1894 Act. Mandates social impact assessment, consent thresholds, compensation multiples, R&R entitlements, and time-bound procedures.",
    categorySlug: "property-laws",
    totalSections: 114,
    totalChapters: 13,
    pdfPath: "/pdfs/Property%20Laws/Land%20Acquisition%20Act%20(RFCTLARR),%202013.pdf",
    pdfFile: "Land Acquisition Act (RFCTLARR), 2013.pdf",
    tier: 2,
  }),

  // ------------- Consumer Rights -------------
  stub({
    slug: "consumer-protection-act-2019",
    shortName: "Consumer Protection Act",
    fullName: "The Consumer Protection Act, 2019",
    year: 2019,
    tagline: "Six rights. Three forums. One Act.",
    summary:
      "Replaces the 1986 Act. Creates the Central Consumer Protection Authority, the District/State/National Commissions, product liability, e-commerce rules, and mediation.",
    categorySlug: "consumer-rights",
    totalSections: 107,
    totalChapters: 8,
    pdfPath: "/pdfs/Consumer%20Rights/Consumer%20Protection%20Act%202019.pdf",
    pdfFile: "Consumer Protection Act 2019.pdf",
    tier: 2,
  }),

  // ------------- Criminal Laws -------------
  bns2023.meta,
  bnss2023.meta,
  bsa2023.meta,

  // ------------- Environment & Land -------------
  stub({
    slug: "forest-conservation-act-1980",
    shortName: "Forest Conservation Act",
    fullName: "The Forest (Conservation) Act, 1980",
    year: 1980,
    sanskrit: "वन संरक्षण अधिनियम",
    tagline: "No forest land diverted without the Centre's nod.",
    summary:
      "A short statute that places a federal check on de-reservation and diversion of forest land for non-forest purposes. Five operative sections, far-reaching consequences.",
    categorySlug: "environment-and-land",
    totalSections: 5,
    totalChapters: 1,
    pdfPath: "/pdfs/Environment%20%26%20Land/Forest%20Conservation%20Act,%201980.pdf",
    pdfFile: "Forest Conservation Act, 1980.pdf",
    tier: 1,
  }),
  stub({
    slug: "environment-protection-act-1986",
    shortName: "Environment Protection Act",
    fullName: "The Environment (Protection) Act, 1986",
    year: 1986,
    tagline: "An umbrella law for environmental protection.",
    summary:
      "Born after the Bhopal disaster. Empowers the Centre to take all measures to protect and improve the environment, including standards, restrictions, and offences.",
    categorySlug: "environment-and-land",
    totalSections: 26,
    totalChapters: 4,
    pdfPath: "/pdfs/Environment%20%26%20Land/Environment%20Protection%20Act,%201986.pdf",
    pdfFile: "Environment Protection Act, 1986.pdf",
    tier: 1,
  }),
  stub({
    slug: "wild-life-protection-act-1972",
    shortName: "Wild Life Protection Act",
    fullName: "The Wild Life (Protection) Act, 1972",
    year: 1972,
    tagline: "India's flagship wildlife law.",
    summary:
      "Protects wild animals, birds and plants; establishes National Parks, Sanctuaries and reserves; and prohibits hunting and trade in scheduled species.",
    categorySlug: "environment-and-land",
    totalSections: 66,
    totalChapters: 7,
    pdfPath: "/pdfs/Environment%20%26%20Land/Wild%20Life%20Protection%20Act,%201972.pdf",
    pdfFile: "Wild Life Protection Act, 1972.pdf",
    tier: 1,
  }),

  // ------------- Family & Personal Laws -------------
  stub({
    slug: "hindu-marriage-act-1955",
    shortName: "Hindu Marriage Act",
    fullName: "The Hindu Marriage Act, 1955",
    year: 1955,
    tagline: "Marriage, divorce and maintenance for Hindus.",
    summary:
      "Codifies the conditions, ceremonies, registration, restitution, judicial separation and grounds of divorce applicable to Hindus, Sikhs, Buddhists and Jains.",
    categorySlug: "family-and-personal-laws",
    totalSections: 30,
    totalChapters: 6,
    pdfPath: "/pdfs/Family%20%26%20Personal%20Laws/Hindu%20Marriage%20Act,%201955.pdf",
    pdfFile: "Hindu Marriage Act, 1955.pdf",
    tier: 1,
  }),
  stub({
    slug: "hindu-succession-act-1956",
    shortName: "Hindu Succession Act",
    fullName: "The Hindu Succession Act, 1956",
    year: 1956,
    tagline: "Who inherits — for Hindu families.",
    summary:
      "Establishes uniform rules of intestate succession for Hindus, including the 2005 amendment that gave daughters equal coparcenary rights.",
    categorySlug: "family-and-personal-laws",
    totalSections: 30,
    totalChapters: 4,
    pdfPath: "/pdfs/Family%20%26%20Personal%20Laws/Hindu%20Succession%20Act%201956.pdf",
    pdfFile: "Hindu Succession Act 1956.pdf",
    tier: 1,
  }),
  stub({
    slug: "special-marriage-act-1954",
    shortName: "Special Marriage Act",
    fullName: "The Special Marriage Act, 1954",
    year: 1954,
    tagline: "Civil marriage, regardless of religion.",
    summary:
      "Allows persons of any faith — or none — to marry through a civil ceremony. Includes inter-faith couples and provides for divorce, succession and registration.",
    categorySlug: "family-and-personal-laws",
    totalSections: 51,
    totalChapters: 8,
    pdfPath: "/pdfs/Family%20%26%20Personal%20Laws/Special%20Marriage%20Act,%201954.pdf",
    pdfFile: "Special Marriage Act, 1954.pdf",
    tier: 1,
  }),
  stub({
    slug: "indian-christian-marriage-act-1872",
    shortName: "Indian Christian Marriage Act",
    fullName: "The Indian Christian Marriage Act, 1872",
    year: 1872,
    tagline: "Solemnisation of Christian marriage in India.",
    summary:
      "Governs marriage where one party is a Christian, including who may solemnise, notice, registration and grounds for invalidity.",
    categorySlug: "family-and-personal-laws",
    totalSections: 88,
    totalChapters: 8,
    pdfPath: "/pdfs/Family%20%26%20Personal%20Laws/Indian%20Christian%20Marriage%20Act,%201872.pdf",
    pdfFile: "Indian Christian Marriage Act, 1872.pdf",
    tier: 2,
  }),
  stub({
    slug: "muslim-personal-law-shariat-act-1937",
    shortName: "Muslim Personal Law (Shariat) Act",
    fullName: "The Muslim Personal Law (Shariat) Application Act, 1937",
    year: 1937,
    tagline: "Application of Shariat to Muslims in personal matters.",
    summary:
      "A short statute that directs the application of Muslim personal law to Muslims in matters of marriage, divorce, succession, gift, waqf and adoption.",
    categorySlug: "family-and-personal-laws",
    totalSections: 6,
    totalChapters: 1,
    pdfPath: "/pdfs/Family%20%26%20Personal%20Laws/Muslim%20Personal%20Law%20(Shariat)%20Act,%201937.pdf",
    pdfFile: "Muslim Personal Law (Shariat) Act, 1937.pdf",
    tier: 1,
  }),
  stub({
    slug: "guardians-and-wards-act-1890",
    shortName: "Guardians & Wards Act",
    fullName: "The Guardians and Wards Act, 1890",
    year: 1890,
    tagline: "Guardianship, custody and welfare of minors.",
    summary:
      "Procedural statute for appointment, declaration and removal of guardians; binds all communities and operates alongside personal-law guardianship rules.",
    categorySlug: "family-and-personal-laws",
    totalSections: 53,
    totalChapters: 4,
    pdfPath: "/pdfs/Family%20%26%20Personal%20Laws/Guardians%20%26%20Wards%20Act,%201890.pdf",
    pdfFile: "Guardians & Wards Act, 1890.pdf",
    tier: 1,
  }),
  stub({
    slug: "protection-of-women-from-dv-act-2005",
    shortName: "Protection of Women from Domestic Violence Act",
    fullName: "The Protection of Women from Domestic Violence Act, 2005",
    year: 2005,
    tagline: "Civil remedies for domestic abuse.",
    summary:
      "Provides protection orders, residence orders, monetary relief, custody and compensation to women in domestic relationships, in addition to any criminal remedy.",
    categorySlug: "family-and-personal-laws",
    totalSections: 37,
    totalChapters: 5,
    pdfPath: "/pdfs/Family%20%26%20Personal%20Laws/Protection%20of%20Women%20from%20DV%20Act,%202005.pdf",
    pdfFile: "Protection of Women from DV Act, 2005.pdf",
    tier: 1,
  }),
  stub({
    slug: "dowry-prohibition-act-1961",
    shortName: "Dowry Prohibition Act",
    fullName: "The Dowry Prohibition Act, 1961",
    year: 1961,
    tagline: "Giving, taking or demanding dowry is a criminal offence.",
    summary:
      "Prohibits the giving and taking of dowry, prescribes punishment, and bars demands made directly or indirectly in connection with marriage.",
    categorySlug: "family-and-personal-laws",
    totalSections: 10,
    totalChapters: 1,
    pdfPath: "/pdfs/Family%20%26%20Personal%20Laws/dowry_prohibition.pdf",
    pdfFile: "dowry_prohibition.pdf",
    tier: 1,
  }),

  // ------------- Contracts & Commercial Law -------------
  stub({
    slug: "indian-contract-act-1872",
    shortName: "Indian Contract Act",
    fullName: "The Indian Contract Act, 1872",
    year: 1872,
    tagline: "The grammar of every Indian contract.",
    summary:
      "Defines what makes an agreement enforceable — offer, acceptance, consideration, capacity, free consent, lawful object — and the consequences of breach.",
    categorySlug: "contracts-and-commercial-law",
    totalSections: 238,
    totalChapters: 11,
    pdfPath: "/pdfs/Contracts%20%26%20Commercial%20Law/Indian%20Contract%20Act,%201872.pdf",
    pdfFile: "Indian Contract Act, 1872.pdf",
    tier: 3,
  }),
  stub({
    slug: "sale-of-goods-act-1930",
    shortName: "Sale of Goods Act",
    fullName: "The Sale of Goods Act, 1930",
    year: 1930,
    tagline: "Buying and selling goods — title, delivery, warranty.",
    summary:
      "Carves out the special law of sale of movable goods, originally part of the Indian Contract Act, including conditions, warranties, and unpaid-seller's rights.",
    categorySlug: "contracts-and-commercial-law",
    totalSections: 66,
    totalChapters: 7,
    pdfPath: "/pdfs/Contracts%20%26%20Commercial%20Law/Sale%20of%20Goods%20Act,%201930.pdf",
    pdfFile: "Sale of Goods Act, 1930.pdf",
    tier: 1,
  }),
  stub({
    slug: "negotiable-instruments-act-1881",
    shortName: "Negotiable Instruments Act",
    fullName: "The Negotiable Instruments Act, 1881",
    year: 1881,
    tagline: "Cheques, promissory notes, bills of exchange.",
    summary:
      "Defines and regulates negotiable instruments, with the famous Section 138 making cheque dishonour a criminal offence.",
    categorySlug: "contracts-and-commercial-law",
    totalSections: 147,
    totalChapters: 17,
    pdfPath: "/pdfs/Contracts%20%26%20Commercial%20Law/Negotiable%20Instruments%20Act,%201881.pdf",
    pdfFile: "Negotiable Instruments Act, 1881.pdf",
    tier: 2,
  }),
  stub({
    slug: "arbitration-and-conciliation-act-1996",
    shortName: "Arbitration & Conciliation Act",
    fullName: "The Arbitration and Conciliation Act, 1996",
    year: 1996,
    tagline: "Resolve disputes without going to court.",
    summary:
      "Codifies domestic and international commercial arbitration, conciliation, enforcement of foreign awards, and limited grounds for judicial intervention.",
    categorySlug: "contracts-and-commercial-law",
    totalSections: 89,
    totalChapters: 10,
    pdfPath: "/pdfs/Contracts%20%26%20Commercial%20Law/Arbitration%20%26%20Conciliation%20Act,%201996.pdf",
    pdfFile: "Arbitration & Conciliation Act, 1996.pdf",
    tier: 2,
  }),
  stub({
    slug: "specific-relief-act-1963",
    shortName: "Specific Relief Act",
    fullName: "The Specific Relief Act, 1963",
    year: 1963,
    tagline: "When damages aren't enough — perform the contract.",
    summary:
      "Provides specific performance, recovery of possession, declaratory relief, and injunctions where compensation cannot adequately remedy a wrong.",
    categorySlug: "contracts-and-commercial-law",
    totalSections: 44,
    totalChapters: 5,
    pdfPath: "/pdfs/Contracts%20%26%20Commercial%20Law/Specific%20Relief%20Act,%201963.pdf",
    pdfFile: "Specific Relief Act, 1963.pdf",
    tier: 1,
  }),

  // ------------- Labour & Employment -------------
  stub({
    slug: "posh-act-2013",
    shortName: "POSH Act",
    fullName: "The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013",
    year: 2013,
    tagline: "Every workplace must be safe.",
    summary:
      "Mandates Internal Complaints Committees, defines sexual harassment, prescribes complaint procedure, timelines and employer obligations.",
    categorySlug: "labour-and-employment-laws",
    totalSections: 30,
    totalChapters: 8,
    pdfPath: "/pdfs/Labour%20and%20Employment%20Laws/Sexual%20Harassment%20at%20Workplace%20(POSH)%20Act,%202013.pdf",
    pdfFile: "Sexual Harassment at Workplace (POSH) Act, 2013.pdf",
    tier: 1,
  }),
  stub({
    slug: "code-on-wages-2019",
    shortName: "Code on Wages",
    fullName: "The Code on Wages, 2019",
    year: 2019,
    tagline: "Minimum wages, payment, bonus — under one code.",
    summary:
      "Consolidates four wage-related Acts (Minimum Wages, Payment of Wages, Payment of Bonus, Equal Remuneration) into a single statute.",
    categorySlug: "labour-and-employment-laws",
    totalSections: 69,
    totalChapters: 9,
    pdfPath: "/pdfs/Labour%20and%20Employment%20Laws/Code%20on%20Wages,%202019.pdf",
    pdfFile: "Code on Wages, 2019.pdf",
    tier: 1,
  }),
  stub({
    slug: "industrial-relations-code-2020",
    shortName: "Industrial Relations Code",
    fullName: "The Industrial Relations Code, 2020",
    year: 2020,
    tagline: "Trade unions, disputes, retrenchment, strikes.",
    summary:
      "Consolidates the Trade Unions Act, the Industrial Employment (Standing Orders) Act, and the Industrial Disputes Act into a single code.",
    categorySlug: "labour-and-employment-laws",
    totalSections: 104,
    totalChapters: 14,
    pdfPath: "/pdfs/Labour%20and%20Employment%20Laws/Industrial%20Relations%20Code,%202020.pdf",
    pdfFile: "Industrial Relations Code, 2020.pdf",
    tier: 2,
  }),
  stub({
    slug: "occupational-safety-code-2020",
    shortName: "Occupational Safety, Health & Working Conditions Code",
    fullName: "The Occupational Safety, Health and Working Conditions Code, 2020",
    year: 2020,
    tagline: "Safe workplaces, hours, leave and welfare.",
    summary:
      "Consolidates 13 labour laws including the Factories Act, Mines Act, Contract Labour Act, Inter-State Migrant Workmen Act and more.",
    categorySlug: "labour-and-employment-laws",
    totalSections: 143,
    totalChapters: 14,
    pdfPath: "/pdfs/Labour%20and%20Employment%20Laws/Occupational%20Safety%20Code,%202020.pdf",
    pdfFile: "Occupational Safety Code, 2020.pdf",
    tier: 2,
  }),
  stub({
    slug: "social-security-code-2020",
    shortName: "Social Security Code",
    fullName: "The Code on Social Security, 2020",
    year: 2020,
    tagline: "PF, ESI, gratuity, maternity — under one umbrella.",
    summary:
      "Consolidates 9 central labour laws relating to provident fund, employee state insurance, gratuity, maternity benefit, and unorganised-worker welfare.",
    categorySlug: "labour-and-employment-laws",
    totalSections: 164,
    totalChapters: 14,
    pdfPath: "/pdfs/Labour%20and%20Employment%20Laws/Social%20Security%20Code,%202020.pdf",
    pdfFile: "Social Security Code, 2020.pdf",
    tier: 3,
  }),

  // ------------- Financial Markets & Banking -------------
  stub({
    slug: "rbi-act-1934",
    shortName: "RBI Act",
    fullName: "The Reserve Bank of India Act, 1934",
    year: 1934,
    tagline: "The constitution of India's central bank.",
    summary:
      "Establishes the Reserve Bank, defines its functions, currency-issue powers, monetary policy, and regulation of NBFCs.",
    categorySlug: "financial-markets-and-banking",
    totalSections: 61,
    totalChapters: 5,
    pdfPath: "/pdfs/Financial%20Markets%20%26%20Banking/RBI%20Act,%201934.pdf",
    pdfFile: "RBI Act, 1934.pdf",
    tier: 1,
  }),
  stub({
    slug: "banking-regulation-act-1949",
    shortName: "Banking Regulation Act",
    fullName: "The Banking Regulation Act, 1949",
    year: 1949,
    tagline: "How banks are licensed, supervised, resolved.",
    summary:
      "Governs banking companies — licensing, paid-up capital, business activities, audit, inspection, amalgamation and winding up.",
    categorySlug: "financial-markets-and-banking",
    totalSections: 56,
    totalChapters: 6,
    pdfPath: "/pdfs/Financial%20Markets%20%26%20Banking/Banking%20Regulation%20Act,%201949.pdf",
    pdfFile: "Banking Regulation Act, 1949.pdf",
    tier: 1,
  }),
  stub({
    slug: "fema-1999",
    shortName: "FEMA",
    fullName: "The Foreign Exchange Management Act, 1999",
    year: 1999,
    tagline: "Forex flows, simplified.",
    summary:
      "Replaces FERA. A civil-law framework for facilitating external trade and payments and orderly development of the foreign exchange market.",
    categorySlug: "financial-markets-and-banking",
    totalSections: 49,
    totalChapters: 7,
    pdfPath: "/pdfs/Financial%20Markets%20%26%20Banking/FEMA%20(Foreign%20Exchange),%201999.pdf",
    pdfFile: "FEMA (Foreign Exchange), 1999.pdf",
    tier: 1,
  }),
  stub({
    slug: "pmla-2002",
    shortName: "PMLA",
    fullName: "The Prevention of Money-laundering Act, 2002",
    year: 2002,
    tagline: "Trace, attach, confiscate proceeds of crime.",
    summary:
      "Defines money laundering, empowers ED to investigate, attach property, prosecute and confiscate proceeds of crime under scheduled offences.",
    categorySlug: "financial-markets-and-banking",
    totalSections: 75,
    totalChapters: 10,
    pdfPath: "/pdfs/Financial%20Markets%20%26%20Banking/PMLA%20(Money%20Laundering),%202002.pdf",
    pdfFile: "PMLA (Money Laundering), 2002.pdf",
    tier: 1,
  }),
  stub({
    slug: "sebi-act-1992",
    shortName: "SEBI Act",
    fullName: "The Securities and Exchange Board of India Act, 1992",
    year: 1992,
    tagline: "The watchdog of India's securities markets.",
    summary:
      "Establishes SEBI, its functions, powers of investigation, penalties, appellate tribunal, and the framework for protection of investor interests.",
    categorySlug: "financial-markets-and-banking",
    totalSections: 34,
    totalChapters: 7,
    pdfPath: "/pdfs/Financial%20Markets%20%26%20Banking/SEBI%20Act,%201992%20%20Regulations.pdf",
    pdfFile: "SEBI Act, 1992  Regulations.pdf",
    tier: 3,
  }),

  // ------------- IT & Digital -------------
  stub({
    slug: "it-act-2000",
    shortName: "IT Act",
    fullName: "The Information Technology Act, 2000 (as amended in 2008)",
    year: 2000,
    tagline: "India's foundational digital law.",
    summary:
      "Recognises electronic records and digital signatures, defines cyber-offences, establishes the Adjudicating Officer and Cyber Appellate Tribunal.",
    categorySlug: "information-technology-and-digital-laws",
    totalSections: 94,
    totalChapters: 13,
    pdfPath: "/pdfs/Information%20Technology%20%26%20Digital%20Laws/IT%20Act,%202000%20amended%202008.pdf",
    pdfFile: "IT Act, 2000 amended 2008.pdf",
    tier: 2,
  }),
  stub({
    slug: "dpdp-act-2023",
    shortName: "DPDP Act",
    fullName: "The Digital Personal Data Protection Act, 2023",
    year: 2023,
    tagline: "Your personal data, by your consent.",
    summary:
      "First comprehensive Indian data-protection law — defines data fiduciary obligations, data principal rights, consent, breach notice, and the Data Protection Board.",
    categorySlug: "information-technology-and-digital-laws",
    totalSections: 44,
    totalChapters: 9,
    pdfPath: "/pdfs/Information%20Technology%20%26%20Digital%20Laws/DPDP%20Act,%202023.pdf",
    pdfFile: "DPDP Act, 2023.pdf",
    tier: 1,
  }),
  stub({
    slug: "it-intermediary-rules-2021",
    shortName: "IT Intermediary Guidelines Rules",
    fullName: "The Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021",
    year: 2021,
    tagline: "Compliance rules for platforms, OTT and digital news.",
    summary:
      "Subordinate legislation under the IT Act prescribing due-diligence, grievance redressal, traceability, and code-of-ethics for digital intermediaries.",
    categorySlug: "information-technology-and-digital-laws",
    totalSections: 18,
    totalChapters: 4,
    pdfPath: "/pdfs/Information%20Technology%20%26%20Digital%20Laws/IT%20(Intermediary%20Guidelines)%20Rules,%202021.pdf",
    pdfFile: "IT (Intermediary Guidelines) Rules, 2021.pdf",
    tier: 4,
  }),

  // ------------- Intellectual Property -------------
  stub({
    slug: "copyright-act-1957",
    shortName: "Copyright Act",
    fullName: "The Copyright Act, 1957",
    year: 1957,
    tagline: "Protects authorship — books, music, film, software.",
    summary:
      "Confers copyright in original works, sets duration, exceptions, infringement remedies, criminal penalties, and the Copyright Board / Registrar.",
    categorySlug: "intellectual-property",
    totalSections: 78,
    totalChapters: 15,
    pdfPath: "/pdfs/Intellectual%20Property/Copyright%20Act,%201957.pdf",
    pdfFile: "Copyright Act, 1957.pdf",
    tier: 1,
  }),
  stub({
    slug: "designs-act-2000",
    shortName: "Designs Act",
    fullName: "The Designs Act, 2000",
    year: 2000,
    tagline: "Protect the look of a product.",
    summary:
      "Provides for registration and protection of industrial designs — features of shape, configuration, pattern, ornament or composition of lines or colours.",
    categorySlug: "intellectual-property",
    totalSections: 48,
    totalChapters: 11,
    pdfPath: "/pdfs/Intellectual%20Property/Designs%20Act,%202000.pdf",
    pdfFile: "Designs Act, 2000.pdf",
    tier: 1,
  }),
  stub({
    slug: "geographical-indications-act-1999",
    shortName: "Geographical Indications Act",
    fullName: "The Geographical Indications of Goods (Registration and Protection) Act, 1999",
    year: 1999,
    tagline: "Darjeeling tea. Banarasi sari. Protected by law.",
    summary:
      "Provides registration and protection for goods whose given quality or reputation is essentially attributable to their geographical origin.",
    categorySlug: "intellectual-property",
    totalSections: 87,
    totalChapters: 9,
    pdfPath: "/pdfs/Intellectual%20Property/Geographical%20Indications%20Act,%201999.pdf",
    pdfFile: "Geographical Indications Act, 1999.pdf",
    tier: 2,
  }),
  stub({
    slug: "patents-act-1970",
    shortName: "Patents Act",
    fullName: "The Patents Act, 1970",
    year: 1970,
    tagline: "Inventions, exclusively yours — for 20 years.",
    summary:
      "Governs grant of patents in India — patentable subject-matter, application, examination, opposition, infringement, compulsory licensing.",
    categorySlug: "intellectual-property",
    totalSections: 162,
    totalChapters: 23,
    pdfPath: "/pdfs/Intellectual%20Property/Patents%20Act,%201970.pdf",
    pdfFile: "Patents Act, 1970.pdf",
    tier: 3,
  }),
  stub({
    slug: "trade-marks-act-1999",
    shortName: "Trade Marks Act",
    fullName: "The Trade Marks Act, 1999",
    year: 1999,
    tagline: "Brands, logos and marks — registered and protected.",
    summary:
      "Replaces the 1958 Act. Provides for registration, opposition, removal, infringement, passing off, and offences relating to trade marks.",
    categorySlug: "intellectual-property",
    totalSections: 159,
    totalChapters: 13,
    pdfPath: "/pdfs/Intellectual%20Property/Trade%20Marks%20Act,%201999.pdf",
    pdfFile: "Trade Marks Act, 1999.pdf",
    tier: 3,
  }),

  // ------------- Company Formation & Governance -------------
  stub({
    slug: "companies-act-2013",
    shortName: "Companies Act",
    fullName: "The Companies Act, 2013",
    year: 2013,
    tagline: "How a company is born, run, and dissolved.",
    summary:
      "Replaces the 1956 Act. Governs incorporation, share capital, directors, audit, CSR, NCLT, mergers, oppression and management, and winding up.",
    categorySlug: "company-formation-and-governance",
    totalSections: 470,
    totalChapters: 29,
    pdfPath: "/pdfs/Company%20Formation%20%26%20Governance/Companies%20Act,%202013.pdf",
    pdfFile: "Companies Act, 2013.pdf",
    tier: 4,
  }),
  stub({
    slug: "ibc-2016",
    shortName: "Insolvency & Bankruptcy Code",
    fullName: "The Insolvency and Bankruptcy Code, 2016",
    year: 2016,
    tagline: "Time-bound resolution for stressed companies.",
    summary:
      "A unified framework for corporate insolvency, individual insolvency, and bankruptcy — with NCLT, IPs, and a 330-day resolution clock.",
    categorySlug: "company-formation-and-governance",
    totalSections: 255,
    totalChapters: 7,
    pdfPath: "/pdfs/Company%20Formation%20%26%20Governance/Insolvency%20%26%20Bankruptcy%20Code%20(IBC),%202016.pdf",
    pdfFile: "Insolvency & Bankruptcy Code (IBC), 2016.pdf",
    tier: 3,
  }),
  stub({
    slug: "llp-act-2008",
    shortName: "LLP Act",
    fullName: "The Limited Liability Partnership Act, 2008",
    year: 2008,
    tagline: "Partnership flexibility, company protection.",
    summary:
      "Creates the LLP — a body corporate with limited liability, perpetual succession, designated partners, and an LLP Agreement that governs internal affairs.",
    categorySlug: "company-formation-and-governance",
    totalSections: 81,
    totalChapters: 14,
    pdfPath: "/pdfs/Company%20Formation%20%26%20Governance/LLP%20Act,%202008.pdf",
    pdfFile: "LLP Act, 2008.pdf",
    tier: 2,
  }),
  stub({
    slug: "partnership-act-1932",
    shortName: "Partnership Act",
    fullName: "The Indian Partnership Act, 1932",
    year: 1932,
    tagline: "Two or more persons. One business. Shared liability.",
    summary:
      "Defines partnership, mutual rights and duties, registration, dissolution, and the consequences of an unregistered firm.",
    categorySlug: "company-formation-and-governance",
    totalSections: 74,
    totalChapters: 8,
    pdfPath: "/pdfs/Company%20Formation%20%26%20Governance/Partnership%20Act,%201932.pdf",
    pdfFile: "Partnership Act, 1932.pdf",
    tier: 1,
  }),
];

// ============================================================
// Authored statutes — these override the meta stub above
// ============================================================

/**
 * Map of statute-slug → fully authored Statute object.
 * As an Act gets authored, import its module and add it here.
 */
export const authoredStatutes: Record<string, Statute> = {
  [bns2023.meta.slug]: bns2023,
  [bnss2023.meta.slug]: bnss2023,
  [bsa2023.meta.slug]: bsa2023,
  [forestConservationAct1980.meta.slug]: forestConservationAct1980,
  [environmentProtectionAct1986.meta.slug]: environmentProtectionAct1986,
  [muslimPersonalLawShariatAct1937.meta.slug]: muslimPersonalLawShariatAct1937,
  [dowryProhibitionAct1961.meta.slug]: dowryProhibitionAct1961,
  [poshAct2013.meta.slug]: poshAct2013,
  [wildLifeProtectionAct1972.meta.slug]: wildLifeProtectionAct1972,
  [hinduMarriageAct1955.meta.slug]: hinduMarriageAct1955,
  [hinduSuccessionAct1956.meta.slug]: hinduSuccessionAct1956,
  [specialMarriageAct1954.meta.slug]: specialMarriageAct1954,
  [guardiansAndWardsAct1890.meta.slug]: guardiansAndWardsAct1890,
  [indianChristianMarriageAct1872.meta.slug]: indianChristianMarriageAct1872,
  [itAct2000.meta.slug]: itAct2000,
};

// ============================================================
// Helpers
// ============================================================

export function getStatuteMeta(slug: string): StatuteMeta | undefined {
  // If the Act is authored, prefer the live meta from there.
  const authored = authoredStatutes[slug];
  if (authored) return authored.meta;
  const stub = statuteMetas.find((m) => m.slug === slug);
  if (!stub) return undefined;
  // Auto-upgrade not-started stubs to "brief" if a brief entry exists.
  if (stub.coverage === "not-started" && hasBrief(slug)) {
    return { ...stub, coverage: "brief" };
  }
  return stub;
}

export function getStatute(slug: string): Statute | undefined {
  return authoredStatutes[slug];
}

export function getStatutesByCategory(categorySlug: string): StatuteMeta[] {
  return statuteMetas
    .filter((m) => m.categorySlug === categorySlug)
    .map((m) => getStatuteMeta(m.slug)!)
    .sort((a, b) => a.shortName.localeCompare(b.shortName));
}

export function getAllStatuteSlugs(): string[] {
  return statuteMetas.map((m) => m.slug);
}

export function isAuthored(slug: string): boolean {
  return Boolean(authoredStatutes[slug]);
}

export function categoryCoverage(categorySlug: string): {
  total: number;
  /** Count of Acts at brief-or-better coverage — "brief" + "mvp" + "complete" */
  done: number;
  /** Deep-render showcase Acts (subset of `done`). */
  showcase: number;
  /** MVP Acts (subset of `done`). */
  mvp: number;
  /** Brief-only Acts (subset of `done`). */
  brief: number;
  inProgress: number;
  notStarted: number;
} {
  const acts = statuteMetas.filter((m) => m.categorySlug === categorySlug);
  const cov = (slug: string) => getStatuteMeta(slug)!.coverage;
  return {
    total: acts.length,
    done: acts.filter((m) => {
      const c = cov(m.slug);
      return c === "complete" || c === "mvp" || c === "brief";
    }).length,
    showcase: acts.filter((m) => cov(m.slug) === "complete").length,
    mvp: acts.filter((m) => cov(m.slug) === "mvp").length,
    brief: acts.filter((m) => cov(m.slug) === "brief").length,
    inProgress: acts.filter((m) => cov(m.slug) === "in-progress").length,
    notStarted: acts.filter((m) => cov(m.slug) === "not-started").length,
  };
}

/** Total counts across the whole corpus — powers the global progress dashboard. */
export function overallCoverage(): {
  total: number;
  done: number;
  showcase: number;
  mvp: number;
  brief: number;
  inProgress: number;
  notStarted: number;
  percent: number;
} {
  const cov = (slug: string) => getStatuteMeta(slug)!.coverage;
  const total = statuteMetas.length;
  const showcase = statuteMetas.filter((m) => cov(m.slug) === "complete").length;
  const mvp = statuteMetas.filter((m) => cov(m.slug) === "mvp").length;
  const brief = statuteMetas.filter((m) => cov(m.slug) === "brief").length;
  const inProgress = statuteMetas.filter((m) => cov(m.slug) === "in-progress").length;
  const notStarted = statuteMetas.filter((m) => cov(m.slug) === "not-started").length;
  const done = showcase + mvp + brief;
  return {
    total,
    done,
    showcase,
    mvp,
    brief,
    inProgress,
    notStarted,
    percent: total === 0 ? 0 : Math.round((done / total) * 100),
  };
}
