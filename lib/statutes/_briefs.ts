/**
 * Brief content for every Act that isn't yet authored at MVP / deep depth.
 *
 * Phase-2 pivot (May 2026): instead of section-by-section verbatim, every
 * non-showcase Act ships with:
 *   - a single-sentence "what is this law"
 *   - 3â€“6 headline punishments in plain English
 *   - a verifiable online source URL (Wikipedia / PRS India / India Code)
 *
 * Local source PDFs already live on `StatuteMeta.sourcePdf`; this file only
 * adds the lightweight summary + an online citation.
 *
 * Punishments are the *headline* offences only â€” not exhaustive. The point
 * is that a citizen reading this page in 30 seconds learns (a) what the law
 * is about and (b) what happens if you break it.
 */

import type { ActBrief } from "./_types";

export const actBriefs: Record<string, ActBrief> = {
  // ============================================================
  // Constitution
  // ============================================================
  "constitution-of-india": {
    oneLiner:
      "The supreme law of India â€” sets up the government, lists fundamental rights, and binds every other law to its basic structure.",
    punishments: [
      {
        offence: "Violation of fundamental rights by the State",
        punishment: "Law / executive action is void; remedy by writ under Article 32 (Supreme Court) or 226 (High Court).",
        section: "Article 13, 32, 226",
      },
      {
        offence: "Failure to act on a constitutional duty",
        punishment: "Mandamus or other writ; the Court can compel performance.",
        section: "Article 32, 226",
      },
    ],
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_India",
    secondarySourceName: "India Code",
    secondarySourceUrl: "https://www.indiacode.nic.in/handle/123456789/15240",
    penaltyTable: [
      { section: "Article 14", subSection: "-", lawInBrief: "Equality before law", punishment: "-", type: "structural" },
      { section: "Article 19", subSection: "-", lawInBrief: "Protection of certain rights regarding freedom of speech, etc.", punishment: "-", type: "right" },
      { section: "Article 21", subSection: "-", lawInBrief: "Protection of life and personal liberty", punishment: "-", type: "structural" },
      { section: "Article 13, 32, 226", subSection: "-", lawInBrief: "Violation of fundamental rights by the State", punishment: "Law / executive action is void; remedy by writ under Article 32 (Supreme Court) or 226 (High Court)", type: "compliance", severity: "low" },
      { section: "Article 32, 226", subSection: "-", lawInBrief: "Failure to act on a constitutional duty", punishment: "Mandamus or other writ; the Court can compel performance", type: "compliance", severity: "low" }
    ],
  },

  // ============================================================
  // Tax Laws
  // ============================================================
  "income-tax-act-1961": {
    oneLiner:
      "The main law on taxing income in India â€” who pays, on what income, at what rate, and what happens for evasion.",
    punishments: [
      {
        offence: "Wilful attempt to evade tax",
        punishment: "Rigorous imprisonment 6 months â€“ 7 years + fine (if tax sought to be evaded exceeds â‚¹25 lakh, minimum 6 months).",
        section: "Â§276C",
      },
      {
        offence: "Failure to file return of income",
        punishment: "Imprisonment 3 months â€“ 2 years + fine; up to 7 years where tax evaded exceeds â‚¹25 lakh.",
        section: "Â§276CC",
      },
      {
        offence: "False statement in verification or delivery of accounts",
        punishment: "Imprisonment 3 months â€“ 7 years + fine.",
        section: "Â§277",
      },
      {
        offence: "Failure to deduct or pay TDS",
        punishment: "Imprisonment 3 months â€“ 7 years + fine.",
        section: "Â§276B",
      },
      {
        offence: "Penalty for under-reporting of income",
        punishment: "50% of tax on under-reported income; 200% if mis-reported.",
        section: "Â§270A",
      },
    ],
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Income_Tax_Act,_1961",
    secondarySourceName: "Income Tax Department",
    secondarySourceUrl: "https://incometaxindia.gov.in/pages/acts/income-tax-act.aspx",
    penaltyTable: [
      { section: "4", subSection: "-", lawInBrief: "Charge of income-tax", punishment: "-", type: "structural" },
      { section: "10", subSection: "-", lawInBrief: "Incomes not included in total income", punishment: "-", type: "structural" },
      { section: "80C", subSection: "-", lawInBrief: "Deductions in respect of investments", punishment: "-", type: "structural" },
      { section: "139", subSection: "-", lawInBrief: "Return of income", punishment: "-", type: "structural" },
      { section: "276C", subSection: "-", lawInBrief: "Wilful attempt to evade tax", punishment: "Rigorous imprisonment 6 months – 7 years + fine (if tax sought to be evaded exceeds ₹25 lakh, minimum 6 months)", type: "criminal", severity: "high" },
      { section: "276CC", subSection: "-", lawInBrief: "Failure to file return of income", punishment: "Imprisonment 3 months – 2 years + fine; up to 7 years where tax evaded exceeds ₹25 lakh", type: "compliance", severity: "high" },
      { section: "277", subSection: "-", lawInBrief: "False statement in verification or delivery of accounts", punishment: "Imprisonment 3 months – 7 years + fine", type: "criminal", severity: "high" },
      { section: "276B", subSection: "-", lawInBrief: "Failure to deduct or pay TDS", punishment: "Imprisonment 3 months – 7 years + fine", type: "compliance", severity: "high" },
      { section: "270A", subSection: "-", lawInBrief: "Penalty for under-reporting of income", punishment: "50% of tax on under-reported income; 200% if mis-reported", type: "compliance", severity: "low" }
    ],
  },
  "gst-acts-2017": {
    oneLiner:
      "Replaced 17 indirect taxes with one nationwide Goods and Services Tax, levied jointly by the Centre (CGST) and States (SGST), with IGST on inter-state supply.",
    punishments: [
      {
        offence: "Tax evasion / wrong ITC / fake invoices (amount > â‚¹5 crore)",
        punishment: "Imprisonment up to 5 years + fine (cognizable & non-bailable).",
        section: "CGST Â§132(1)(i)",
      },
      {
        offence: "Tax evasion of â‚¹2 crore â€“ â‚¹5 crore",
        punishment: "Imprisonment up to 3 years + fine.",
        section: "CGST Â§132(1)(ii)",
      },
      {
        offence: "Tax evasion of â‚¹1 crore â€“ â‚¹2 crore",
        punishment: "Imprisonment up to 1 year + fine.",
        section: "CGST Â§132(1)(iii)",
      },
      {
        offence: "Failure to register / file returns / pay collected tax",
        punishment: "Penalty of â‚¹10,000 or amount of tax evaded, whichever is higher.",
        section: "CGST Â§122",
      },
      {
        offence: "General penalty (no specific punishment elsewhere)",
        punishment: "Up to â‚¹25,000.",
        section: "CGST Â§125",
      },
    ],
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Goods_and_Services_Tax_(India)",
    secondarySourceName: "CBIC GST",
    secondarySourceUrl: "https://cbic-gst.gov.in/CGST-bill-e.html",
    penaltyTable: [
      { section: "CGST 7", subSection: "-", lawInBrief: "Scope of supply", punishment: "-", type: "structural" },
      { section: "CGST 9", subSection: "-", lawInBrief: "Levy and collection of tax", punishment: "-", type: "structural" },
      { section: "CGST 16", subSection: "-", lawInBrief: "Eligibility and conditions for taking input tax credit", punishment: "-", type: "structural" },
      { section: "CGST 22", subSection: "-", lawInBrief: "Persons liable for registration", punishment: "-", type: "structural" },
      { section: "CGST 132", subSection: "1(i)", lawInBrief: "Tax evasion / wrong ITC / fake invoices (amount > ₹5 crore)", punishment: "Imprisonment up to 5 years + fine (cognizable & non-bailable)", type: "criminal", severity: "high", bailStatus: "Non-Bailable, Cognizable" },
      { section: "CGST 132", subSection: "1(ii)", lawInBrief: "Tax evasion of ₹2 crore – ₹5 crore", punishment: "Imprisonment up to 3 years + fine", type: "criminal", severity: "high" },
      { section: "CGST 132", subSection: "1(iii)", lawInBrief: "Tax evasion of ₹1 crore – ₹2 crore", punishment: "Imprisonment up to 1 year + fine", type: "criminal", severity: "high" },
      { section: "CGST 122", subSection: "-", lawInBrief: "Failure to register / file returns / pay collected tax", punishment: "Penalty of ₹10,000 or amount of tax evaded, whichever is higher", type: "compliance", severity: "low" },
      { section: "CGST 125", subSection: "-", lawInBrief: "General penalty (no specific punishment elsewhere)", punishment: "Up to ₹25,000", type: "compliance", severity: "low" }
    ],
  },
  "customs-act-1962": {
    oneLiner:
      "Controls what comes into and goes out of India â€” duty, valuation, smuggling, search, seizure and confiscation at the border.",
    punishments: [
      {
        offence: "Smuggling of goods (duty evaded > â‚¹50 lakh)",
        punishment: "Imprisonment up to 7 years + fine (cognizable, non-bailable for certain goods).",
        section: "Â§135(1)(i)",
      },
      {
        offence: "Smuggling generally / false declarations",
        punishment: "Imprisonment up to 3 years + fine.",
        section: "Â§135(1)(ii)",
      },
      {
        offence: "Improper importation / exportation",
        punishment: "Confiscation of goods + penalty up to the value of the goods or duty involved.",
        section: "Â§111â€“114, Â§112, Â§114",
      },
      {
        offence: "Obstructing customs officer",
        punishment: "Imprisonment up to 2 years + fine.",
        section: "Â§133",
      },
    ],
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Customs_Act,_1962",
    secondarySourceName: "CBIC",
    secondarySourceUrl: "https://www.cbic.gov.in/entities/customs-act-1962",
    penaltyTable: [
      { section: "12", subSection: "-", lawInBrief: "Dutiable goods", punishment: "-", type: "structural" },
      { section: "46", subSection: "-", lawInBrief: "Entry of goods on importation", punishment: "-", type: "structural" },
      { section: "50", subSection: "-", lawInBrief: "Entry of goods for exportation", punishment: "-", type: "structural" },
      { section: "135", subSection: "1(i)", lawInBrief: "Smuggling of goods (duty evaded > ₹50 lakh)", punishment: "Imprisonment up to 7 years + fine (cognizable, non-bailable for certain goods)", type: "criminal", severity: "high", bailStatus: "Non-Bailable, Cognizable" },
      { section: "135", subSection: "1(ii)", lawInBrief: "Smuggling generally / false declarations", punishment: "Imprisonment up to 3 years + fine", type: "criminal", severity: "high" },
      { section: "111–114", subSection: "-", lawInBrief: "Improper importation / exportation", punishment: "Confiscation of goods + penalty up to the value of the goods or duty involved", type: "civil", severity: "medium" },
      { section: "133", subSection: "-", lawInBrief: "Obstructing customs officer", punishment: "Imprisonment up to 2 years + fine", type: "criminal", severity: "high" }
    ],
  },

  // ============================================================
  // Real Estate
  // ============================================================
  "rera-act-2016": {
    oneLiner:
      "Regulates real-estate projects â€” builders must register every project, escrow 70% of buyer money, and finish on time, with a state authority hearing buyer complaints.",
    punishments: [
      {
        offence: "Non-registration of a real-estate project",
        punishment: "Penalty up to 10% of estimated project cost; continued default â†’ imprisonment up to 3 years and/or further fine up to 10%.",
        section: "Â§59",
      },
      {
        offence: "False / incorrect information in registration application",
        punishment: "Penalty up to 5% of estimated project cost.",
        section: "Â§60",
      },
      {
        offence: "Promoter contravenes other RERA provisions",
        punishment: "Penalty up to 5% of estimated project cost.",
        section: "Â§61",
      },
      {
        offence: "Failure to comply with Appellate Tribunal order",
        punishment: "Imprisonment up to 3 years and/or fine up to 10% of estimated project cost.",
        section: "Â§64",
      },
      {
        offence: "Agent operates without registration",
        punishment: "Daily penalty up to â‚¹10,000, max 5% of cost of plot/apartment.",
        section: "Â§62",
      },
    ],
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Real_Estate_(Regulation_and_Development)_Act,_2016",
    secondarySourceName: "PRS India",
    secondarySourceUrl: "https://prsindia.org/billtrack/the-real-estate-regulation-and-development-bill-2013",
    penaltyTable: [
      { section: "3", subSection: "-", lawInBrief: "Prior registration of real estate project", punishment: "-", type: "structural" },
      { section: "11", subSection: "-", lawInBrief: "Functions and duties of promoter", punishment: "-", type: "structural" },
      { section: "18", subSection: "-", lawInBrief: "Return of amount and compensation", punishment: "-", type: "structural" },
      { section: "31", subSection: "-", lawInBrief: "Filing of complaints with the Authority", punishment: "-", type: "structural" },
      { section: "59", subSection: "-", lawInBrief: "Non-registration of a real-estate project", punishment: "Penalty up to 10% of estimated project cost; continued default → imprisonment up to 3 years and/or further fine up to 10%", type: "criminal", severity: "high" },
      { section: "60", subSection: "-", lawInBrief: "False / incorrect information in registration application", punishment: "Penalty up to 5% of estimated project cost", type: "civil", severity: "medium" },
      { section: "61", subSection: "-", lawInBrief: "Promoter contravenes other RERA provisions", punishment: "Penalty up to 5% of estimated project cost", type: "civil", severity: "medium" },
      { section: "64", subSection: "-", lawInBrief: "Failure to comply with Appellate Tribunal order", punishment: "Imprisonment up to 3 years and/or fine up to 10% of estimated project cost", type: "compliance", severity: "high" },
      { section: "62", subSection: "-", lawInBrief: "Agent operates without registration", punishment: "Daily penalty up to ₹10,000, max 5% of cost of plot/apartment", type: "civil", severity: "low" }
    ],
  },

  // ============================================================
  // Property Laws
  // ============================================================
  "transfer-of-property-act-1882": {
    oneLiner:
      "The general law for how property changes hands between living persons â€” sale, mortgage, lease, exchange and gift, and what makes each one valid.",
    punishments: [
      {
        offence: "Transfer in fraud of creditors",
        punishment: "Transfer is voidable at the option of any defrauded creditor; no criminal penalty under this Act (civil consequence only).",
        section: "Â§53",
      },
      {
        offence: "Transfer by an unauthorised person",
        punishment: "Transfer fails unless the transferor later acquires the right; transferee can claim refund / damages.",
        section: "Â§43",
      },
      {
        offence: "Breach of covenants by lessor/lessee",
        punishment: "Civil remedies â€” forfeiture, damages, injunction; the Act prescribes no imprisonment.",
        section: "Â§108, Â§111",
      },
    ],
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Transfer_of_Property_Act_1882",
    secondarySourceName: "India Code",
    secondarySourceUrl: "https://www.indiacode.nic.in/handle/123456789/2338",
    penaltyTable: [
      { section: "5", subSection: "-", lawInBrief: "Transfer of property defined", punishment: "-", type: "definition" },
      { section: "54", subSection: "-", lawInBrief: "Sale defined", punishment: "-", type: "definition" },
      { section: "58", subSection: "-", lawInBrief: "Mortgage defined", punishment: "-", type: "definition" },
      { section: "105", subSection: "-", lawInBrief: "Lease defined", punishment: "-", type: "definition" },
      { section: "53", subSection: "-", lawInBrief: "Transfer in fraud of creditors", punishment: "Transfer is voidable at the option of any defrauded creditor; no criminal penalty under this Act (civil consequence only)", type: "civil", severity: "medium" },
      { section: "43", subSection: "-", lawInBrief: "Transfer by an unauthorised person", punishment: "Transfer fails unless the transferor later acquires the right; transferee can claim refund / damages", type: "civil", severity: "medium" },
      { section: "108, 111", subSection: "-", lawInBrief: "Breach of covenants by lessor/lessee", punishment: "Civil remedies — forfeiture, damages, injunction; the Act prescribes no imprisonment", type: "criminal", severity: "high" }
    ],
  },
  "registration-act-1908": {
    oneLiner:
      "Says which documents must be registered (sale deeds, gift deeds, leases > 1 year, etc.), how, and what happens if you don't.",
    punishments: [
      {
        offence: "Making false statements / false copies in a registered document",
        punishment: "Imprisonment up to 7 years and/or fine.",
        section: "Â§82",
      },
      {
        offence: "Non-registration of a document required to be registered",
        punishment: "Document is inadmissible as evidence of the transaction and confers no rights in immovable property (civil consequence).",
        section: "Â§49",
      },
      {
        offence: "Delay in presenting document for registration",
        punishment: "Fine up to 10 times the registration fee (within 4-month grace window).",
        section: "Â§25",
      },
    ],
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Registration_Act,_1908",
    secondarySourceName: "India Code",
    secondarySourceUrl: "https://www.indiacode.nic.in/handle/123456789/2440",
    penaltyTable: [
      { section: "17", subSection: "-", lawInBrief: "Documents of which registration is compulsory", punishment: "-", type: "structural" },
      { section: "18", subSection: "-", lawInBrief: "Documents of which registration is optional", punishment: "-", type: "structural" },
      { section: "82", subSection: "-", lawInBrief: "Making false statements / false copies in a registered document", punishment: "Imprisonment up to 7 years and/or fine", type: "criminal", severity: "high" },
      { section: "49", subSection: "-", lawInBrief: "Non-registration of a document required to be registered", punishment: "Document is inadmissible as evidence of the transaction and confers no rights in immovable property (civil consequence)", type: "compliance", severity: "low" },
      { section: "25", subSection: "-", lawInBrief: "Delay in presenting document for registration", punishment: "Fine up to 10 times the registration fee (within 4-month grace window)", type: "civil", severity: "medium" }
    ],
  },
  "benami-property-act-1988": {
    oneLiner:
      "Bans holding property in someone else's name to hide the real owner â€” and lets the Government confiscate such property.",
    punishments: [
      {
        offence: "Entering into a benami transaction",
        punishment: "Rigorous imprisonment 1 â€“ 7 years + fine up to 25% of the fair market value of the property.",
        section: "Â§53",
      },
      {
        offence: "Giving false information to authorities",
        punishment: "Rigorous imprisonment 6 months â€“ 5 years + fine up to 10% of fair market value.",
        section: "Â§54",
      },
      {
        offence: "Benami property",
        punishment: "Confiscation by the Central Government; no compensation to the benamidar or beneficial owner.",
        section: "Â§5, Â§27",
      },
    ],
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Benami_Transactions_(Prohibition)_Act,_1988",
    secondarySourceName: "Income Tax Department",
    secondarySourceUrl: "https://incometaxindia.gov.in/pages/acts/benami-act.aspx",
    penaltyTable: [
      { section: "2(9)", subSection: "-", lawInBrief: "Definition of Benami Transaction", punishment: "-", type: "definition" },
      { section: "3", subSection: "-", lawInBrief: "Prohibition of benami transactions", punishment: "-", type: "structural" },
      { section: "53", subSection: "-", lawInBrief: "Entering into a benami transaction", punishment: "Rigorous imprisonment 1 – 7 years + fine up to 25% of the fair market value of the property", type: "criminal", severity: "high" },
      { section: "54", subSection: "-", lawInBrief: "Giving false information to authorities", punishment: "Rigorous imprisonment 6 months – 5 years + fine up to 10% of fair market value", type: "criminal", severity: "high" },
      { section: "5, 27", subSection: "-", lawInBrief: "Benami property", punishment: "Confiscation by the Central Government; no compensation to the benamidar or beneficial owner", type: "civil", severity: "medium" }
    ],
  },
  "land-acquisition-act-2013": {
    oneLiner:
      "When the Government takes land for public purpose, this Act fixes fair compensation, mandates consent, social-impact assessment and rehabilitation.",
    punishments: [
      {
        offence: "Officer falsifying records or fraudulently certifying",
        punishment: "Imprisonment up to 6 months and/or fine.",
        section: "Â§84",
      },
      {
        offence: "Company / requiring body fails to comply with award conditions",
        punishment: "Acquisition lapses; land returns to original owners (with retained compensation) under the 5-year rule.",
        section: "Â§24, Â§101",
      },
      {
        offence: "Contravention by a Government department",
        punishment: "Head of department deemed guilty unless due-diligence proved; departmental action under Â§87.",
        section: "Â§87",
      },
    ],
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Right_to_Fair_Compensation_and_Transparency_in_Land_Acquisition,_Rehabilitation_and_Resettlement_Act,_2013",
    secondarySourceName: "PRS India",
    secondarySourceUrl: "https://prsindia.org/billtrack/the-right-to-fair-compensation-and-transparency-in-land-acquisition-rehabilitation-and-resettlement-bill-2011",
    penaltyTable: [
      { section: "2", subSection: "-", lawInBrief: "Application of Act (Public purpose)", punishment: "-", type: "procedural" },
      { section: "4", subSection: "-", lawInBrief: "Preparation of Social Impact Assessment study", punishment: "-", type: "structural" },
      { section: "84", subSection: "-", lawInBrief: "Officer falsifying records or fraudulently certifying", punishment: "Imprisonment up to 6 months and/or fine", type: "criminal", severity: "high" },
      { section: "24, 101", subSection: "-", lawInBrief: "Company / requiring body fails to comply with award conditions", punishment: "Acquisition lapses; land returns to original owners (with retained compensation) under the 5-year rule", type: "compliance", severity: "low" },
      { section: "87", subSection: "-", lawInBrief: "Contravention by a Government department", punishment: "Head of department deemed guilty unless due-diligence proved; departmental action under §87", type: "compliance", severity: "low" }
    ],
  },

  // ============================================================
  // Consumer Rights
  // ============================================================
  "consumer-protection-act-2019": {
    oneLiner:
      "Lets consumers complain about defective goods, deficient services and unfair trade practices in District / State / National Commissions â€” and covers e-commerce.",
    punishments: [
      {
        offence: "Manufacture / sale / import of adulterated or spurious goods",
        punishment: "If injury: imprisonment up to 7 years + fine up to â‚¹5 lakh; if death: imprisonment 7 years to life + fine â‰¥ â‚¹10 lakh.",
        section: "Â§90, Â§91",
      },
      {
        offence: "Misleading advertisement (manufacturer / endorser)",
        punishment: "Imprisonment up to 2 years + fine up to â‚¹10 lakh; repeat â€” up to 5 years + â‚¹50 lakh.",
        section: "Â§89",
      },
      {
        offence: "Non-compliance with order of Consumer Commission",
        punishment: "Imprisonment 1 month â€“ 3 years and/or fine â‚¹25,000 â€“ â‚¹1 lakh.",
        section: "Â§72",
      },
      {
        offence: "Product liability (defective product causing harm)",
        punishment: "Compensation by the product manufacturer / seller / service provider â€” strict liability.",
        section: "Â§82â€“87",
      },
    ],
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Consumer_Protection_Act,_2019",
    secondarySourceName: "PRS India",
    secondarySourceUrl: "https://prsindia.org/billtrack/the-consumer-protection-bill-2018",
    penaltyTable: [
      { section: "2(7)", subSection: "-", lawInBrief: "Definition of Consumer", punishment: "-", type: "definition" },
      { section: "2(47)", subSection: "-", lawInBrief: "Unfair trade practice defined", punishment: "-", type: "definition" },
      { section: "10", subSection: "-", lawInBrief: "Central Consumer Protection Authority (CCPA)", punishment: "-", type: "structural" },
      { section: "34, 47, 58", subSection: "-", lawInBrief: "Jurisdiction of District, State, and National Commissions", punishment: "-", type: "structural" },
      { section: "84", subSection: "-", lawInBrief: "Liability of product manufacturer", punishment: "-", type: "structural" },
      { section: "90, 91", subSection: "-", lawInBrief: "Manufacture / sale / import of adulterated or spurious goods", punishment: "If injury: imprisonment up to 7 years + fine up to ₹5 lakh; if death: imprisonment 7 years to life + fine ≥ ₹10 lakh", type: "criminal", severity: "high" },
      { section: "89", subSection: "-", lawInBrief: "Misleading advertisement (manufacturer / endorser)", punishment: "Imprisonment up to 2 years + fine up to ₹10 lakh; repeat — up to 5 years + ₹50 lakh", type: "criminal", severity: "high" },
      { section: "72", subSection: "-", lawInBrief: "Non-compliance with order of Consumer Commission", punishment: "Imprisonment 1 month – 3 years and/or fine ₹25,000 – ₹1 lakh", type: "compliance", severity: "high" },
      { section: "82–87", subSection: "-", lawInBrief: "Product liability (defective product causing harm)", punishment: "Compensation by the product manufacturer / seller / service provider — strict liability", type: "compliance", severity: "low" }
    ],
  },

  // ============================================================
  // Criminal Laws
  // ============================================================
  "bharatiya-nyaya-sanhita-2023": {
    oneLiner:
      "India's new substantive criminal code (replacing the IPC, 1860) â€” defines every crime and its punishment, from theft to terrorism.",
    punishments: [
      {
        offence: "Murder",
        punishment: "Death or imprisonment for life + fine.",
        section: "Â§103",
      },
      {
        offence: "Rape",
        punishment: "Rigorous imprisonment 10 years to life + fine.",
        section: "Â§64",
      },
      {
        offence: "Mob lynching (murder by group on identity grounds)",
        punishment: "Death or imprisonment for life + fine.",
        section: "Â§103(2)",
      },
      {
        offence: "Terrorist act",
        punishment: "Death or imprisonment for life if it causes death; otherwise 5 years to life + fine.",
        section: "Â§113",
      },
      {
        offence: "Organised crime",
        punishment: "Death or imprisonment for life + fine â‰¥ â‚¹10 lakh if it causes death; else 5 years to life + â‰¥ â‚¹5 lakh.",
        section: "Â§111",
      },
      {
        offence: "Theft",
        punishment: "Imprisonment up to 3 years and/or fine (or community service for first-time petty theft up to â‚¹5,000).",
        section: "Â§303",
      },
    ],
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Bharatiya_Nyaya_Sanhita",
    secondarySourceName: "PRS India",
    secondarySourceUrl: "https://prsindia.org/billtrack/the-bharatiya-nyaya-sanhita-2023",
    penaltyTable: [
      { section: "4", subSection: "-", lawInBrief: "Punishments (death, imprisonment, forfeiture, fine, community service)", punishment: "-", type: "structural" },
      { section: "11", subSection: "-", lawInBrief: "Right of private defence", punishment: "-", type: "right" },
      { section: "63", subSection: "-", lawInBrief: "Definition of Rape", punishment: "-", type: "definition" },
      { section: "100", subSection: "-", lawInBrief: "Culpable homicide", punishment: "-", type: "structural" },
      { section: "103", subSection: "-", lawInBrief: "Murder", punishment: "Death or imprisonment for life + fine", type: "criminal", severity: "high" },
      { section: "64", subSection: "-", lawInBrief: "Rape", punishment: "Rigorous imprisonment 10 years to life + fine", type: "criminal", severity: "high" },
      { section: "103", subSection: "2", lawInBrief: "Mob lynching (murder by group on identity grounds)", punishment: "Death or imprisonment for life + fine", type: "criminal", severity: "high" },
      { section: "113", subSection: "-", lawInBrief: "Terrorist act", punishment: "Death or imprisonment for life if it causes death; otherwise 5 years to life + fine", type: "criminal", severity: "high" },
      { section: "111", subSection: "-", lawInBrief: "Organised crime", punishment: "Death or imprisonment for life + fine ≥ ₹10 lakh if it causes death; else 5 years to life + ≥ ₹5 lakh", type: "criminal", severity: "high" },
      { section: "303", subSection: "-", lawInBrief: "Theft", punishment: "Imprisonment up to 3 years and/or fine (or community service for first-time petty theft up to ₹5,000)", type: "criminal", severity: "high" }
    ],
  },
  "bharatiya-nagarik-suraksha-sanhita-2023": {
    oneLiner:
      "India's new criminal procedure code (replacing the CrPC, 1973) â€” governs FIR, arrest, investigation, bail, trial, sentencing and victim rights.",
    punishments: [
      {
        offence: "Disobedience to a public servant's order",
        punishment: "Triggers arrest powers under Â§35; substantive punishment is in BNS Â§223.",
        section: "Â§35",
      },
      {
        offence: "Failure to attend court when bound by bond",
        punishment: "Forfeiture of bond + arrest warrant; potential prosecution under BNS.",
        section: "Â§491, Â§493",
      },
      {
        offence: "Refusal to give specimen signature / handwriting / voice sample",
        punishment: "Adverse inference / contempt; failure to comply now expressly cognizable.",
        section: "Â§349",
      },
      {
        offence: "Trial procedure",
        punishment: "Time-bound: charges to be framed within 60 days; judgment within 30 days of arguments (extendable to 45 days).",
        section: "Â§251, Â§392",
      },
    ],
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Bharatiya_Nagarik_Suraksha_Sanhita",
    secondarySourceName: "PRS India",
    secondarySourceUrl: "https://prsindia.org/billtrack/the-bharatiya-nagarik-suraksha-sanhita-2023",
    penaltyTable: [
      { section: "43", subSection: "-", lawInBrief: "Arrest by private person", punishment: "-", type: "structural" },
      { section: "173", subSection: "-", lawInBrief: "Information in cognizable cases (FIR), including e-FIR", punishment: "-", type: "structural" },
      { section: "176", subSection: "-", lawInBrief: "Police investigation and forensics mandate", punishment: "-", type: "structural" },
      { section: "254", subSection: "-", lawInBrief: "Framing of charge (time-bound)", punishment: "-", type: "structural" },
      { section: "479", subSection: "-", lawInBrief: "Maximum period for which an undertrial prisoner can be detained", punishment: "-", type: "structural" },
      { section: "530", subSection: "-", lawInBrief: "Trial and proceedings in electronic mode", punishment: "-", type: "structural" },
      { section: "35", subSection: "-", lawInBrief: "Disobedience to a public servant's order", punishment: "Triggers arrest powers under §35; substantive punishment is in BNS §223", type: "compliance", severity: "low" },
      { section: "491, 493", subSection: "-", lawInBrief: "Failure to attend court when bound by bond", punishment: "Forfeiture of bond + arrest warrant; potential prosecution under BNS", type: "compliance", severity: "low" },
      { section: "349", subSection: "-", lawInBrief: "Refusal to give specimen signature / handwriting / voice sample", punishment: "Adverse inference / contempt; failure to comply now expressly cognizable", type: "compliance", severity: "low" },
      { section: "251, 392", subSection: "-", lawInBrief: "Trial procedure", punishment: "Time-bound: charges to be framed within 60 days; judgment within 30 days of arguments (extendable to 45 days)", type: "compliance", severity: "low" }
    ],
  },
  "bharatiya-sakshya-adhiniyam-2023": {
    oneLiner:
      "India's new evidence law (replacing the Indian Evidence Act, 1872) — what facts can be proved in court, how, and whose evidence counts.",
    punishments: [
      {
        offence: "False evidence in court",
        punishment: "Substantive offence under BNS §227 — imprisonment up to 7 years + fine.",
        section: "(via BNS §227)",
      },
      {
        offence: "Refusal to answer question by witness",
        punishment: "Adverse inference; possible action under BNSS for contempt.",
        section: "§132",
      },
      {
        offence: "Inadmissible confession to police",
        punishment: "Cannot be used in evidence against the accused.",
        section: "§23",
      },
    ],
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Bharatiya_Sakshya_Adhiniyam",
    secondarySourceName: "PRS India",
    secondarySourceUrl: "https://prsindia.org/billtrack/the-bharatiya-sakshya-bill-2023",
    penaltyTable: [
      { section: "2", subSection: "-", lawInBrief: "Definitions (Document expanded to include electronic/digital records)", punishment: "-", type: "definition" },
      { section: "22", subSection: "-", lawInBrief: "Confession caused by inducement, threat or promise", punishment: "-", type: "structural" },
      { section: "23", subSection: "-", lawInBrief: "Confession to police officer not to be proved", punishment: "-", type: "structural" },
      { section: "57", subSection: "-", lawInBrief: "Primary evidence", punishment: "-", type: "structural" },
      { section: "61", subSection: "-", lawInBrief: "Electronic or digital record", punishment: "-", type: "structural" },
      { section: "(via BNS 227)", subSection: "-", lawInBrief: "False evidence in court", punishment: "Substantive offence under BNS §227 — imprisonment up to 7 years + fine", type: "criminal", severity: "high" },
      { section: "132", subSection: "-", lawInBrief: "Refusal to answer question by witness", punishment: "Adverse inference; possible action under BNSS for contempt", type: "compliance", severity: "low" },
      { section: "23", subSection: "-", lawInBrief: "Inadmissible confession to police", punishment: "Cannot be used in evidence against the accused", type: "compliance", severity: "low" }
    ],
  },

  // ============================================================
  // Family & Personal Laws (only DV Act left after authoring)
  // ============================================================
  "protection-of-women-from-dv-act-2005": {
    oneLiner:
      "Civil law that protects women from physical, emotional, sexual and economic abuse in a domestic relationship â€” even live-in partners count.",
    punishments: [
      {
        offence: "Breach of a protection order by the respondent",
        punishment: "Imprisonment up to 1 year and/or fine up to â‚¹20,000 (cognizable and non-bailable).",
        section: "Â§31",
      },
      {
        offence: "Failure of Protection Officer to discharge duty",
        punishment: "Imprisonment up to 1 year and/or fine up to â‚¹20,000 (with prior sanction of the State Government).",
        section: "Â§33â€“34",
      },
      {
        offence: "Domestic violence (substantive)",
        punishment: "Court can pass protection orders, residence orders, monetary relief, custody and compensation orders.",
        section: "Â§18â€“22",
      },
    ],
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Protection_of_Women_from_Domestic_Violence_Act,_2005",
    secondarySourceName: "India Code",
    secondarySourceUrl: "https://www.indiacode.nic.in/handle/123456789/2031",
    penaltyTable: [
      { section: "3", subSection: "-", lawInBrief: "Definition of domestic violence", punishment: "-", type: "definition" },
      { section: "8", subSection: "-", lawInBrief: "Appointment of Protection Officers", punishment: "-", type: "structural" },
      { section: "12", subSection: "-", lawInBrief: "Application to Magistrate", punishment: "-", type: "procedural" },
      { section: "31", subSection: "-", lawInBrief: "Breach of a protection order by the respondent", punishment: "Imprisonment up to 1 year and/or fine up to ₹20,000 (cognizable and non-bailable)", type: "criminal", severity: "high", bailStatus: "Non-Bailable, Cognizable" },
      { section: "33–34", subSection: "-", lawInBrief: "Failure of Protection Officer to discharge duty", punishment: "Imprisonment up to 1 year and/or fine up to ₹20,000 (with prior sanction of the State Government)", type: "compliance", severity: "high" },
      { section: "18–22", subSection: "-", lawInBrief: "Domestic violence (substantive)", punishment: "Court can pass protection orders, residence orders, monetary relief, custody and compensation orders", type: "compliance", severity: "low" }
    ],
  },

  "indian-christian-marriage-act-1872": {
    oneLiner:
      "Christian marriages in India: who may solemnise, the notice/consent/registration workflow, and key offences for irregular or unauthorised marriages.",
    punishments: [
      {
        offence: "Unauthorised person solemnises or professes to solemnise a Christian marriage (without Registrar present)",
        punishment: "Imprisonment up to 10 years + fine.",
        section: "Â§68",
      },
      {
        offence: "Solemnising outside 6 a.m.â€“7 p.m. or without two witnesses (no Church licence exception)",
        punishment: "Imprisonment up to 3 years + fine.",
        section: "Â§69",
      },
      {
        offence: "Licensed Minister solemnises without written notice, or (minor without consent) within 14 days",
        punishment: "Imprisonment up to 3 years + fine.",
        section: "Â§70",
      },
      {
        offence: "Marriage Registrar issues certificate/marries without publishing notice; marries after 2 months; marries minor within 14 days/without sending copy; or issues despite prohibition",
        punishment: "Imprisonment up to 5 years + fine.",
        section: "Â§71",
      },
      {
        offence: "Unlicensed person grants certificate pretending to be licensed",
        punishment: "Imprisonment up to 5 years + fine.",
        section: "Â§74",
      },
      {
        offence: "Destroying or falsifying marriage register-books",
        punishment: "Imprisonment up to 7 years + fine.",
        section: "Â§75",
      },
      {
        offence: "False oath/declaration/notice/certificate to procure marriage",
        punishment: "Deemed IPC Â§193 (perjury): up to 3 years + fine.",
        section: "Â§66",
      },
    ],
    sourceName: "AdvocateKhoj (Bare Act)",
    sourceUrl:
      "https://www.advocatekhoj.com/library/bareacts/indianchristian/index.php?Title=Indian%20Christian%20Marriage%20Act,%201872",
    penaltyTable: [
      { section: "4", subSection: "-", lawInBrief: "Marriages to be solemnized according to Act", punishment: "-", type: "structural" },
      { section: "5", subSection: "-", lawInBrief: "Persons by whom marriages may be solemnized", punishment: "-", type: "structural" },
      { section: "12", subSection: "-", lawInBrief: "Notice of intended marriage", punishment: "-", type: "structural" },
      { section: "68", subSection: "-", lawInBrief: "Unauthorised person solemnises or professes to solemnise a Christian marriage", punishment: "Imprisonment up to 10 years + fine", type: "criminal", severity: "high" },
      { section: "69", subSection: "-", lawInBrief: "Solemnising outside 6 a.m.–7 p.m. or without two witnesses", punishment: "Imprisonment up to 3 years + fine", type: "criminal", severity: "high" },
      { section: "70", subSection: "-", lawInBrief: "Licensed Minister solemnises without written notice, or within 14 days", punishment: "Imprisonment up to 3 years + fine", type: "criminal", severity: "high" },
      { section: "71", subSection: "-", lawInBrief: "Marriage Registrar issues certificate/marries without publishing notice etc", punishment: "Imprisonment up to 5 years + fine", type: "criminal", severity: "high" },
      { section: "74", subSection: "-", lawInBrief: "Unlicensed person grants certificate pretending to be licensed", punishment: "Imprisonment up to 5 years + fine", type: "criminal", severity: "high" },
      { section: "75", subSection: "-", lawInBrief: "Destroying or falsifying marriage register-books", punishment: "Imprisonment up to 7 years + fine", type: "criminal", severity: "high" },
      { section: "66", subSection: "-", lawInBrief: "False oath/declaration/notice/certificate to procure marriage", punishment: "Deemed IPC §193 (perjury): up to 3 years + fine", type: "civil", severity: "medium" }
    ],
  },

  // ============================================================
  // Contracts & Commercial Law
  // ============================================================
  "indian-contract-act-1872": {
    oneLiner:
      "The grammar of every Indian contract â€” what makes an agreement enforceable (offer, acceptance, consideration, capacity, free consent, lawful object) and the consequences of breach.",
    punishments: [
      {
        offence: "Breach of contract",
        punishment: "Damages (compensation for loss naturally arising from breach); no imprisonment â€” purely civil remedy.",
        section: "Â§73",
      },
      {
        offence: "Failure to perform within agreed time (essence-of-time contracts)",
        punishment: "Contract becomes voidable at the option of the innocent party.",
        section: "Â§55",
      },
      {
        offence: "Agreement caused by coercion, fraud, misrepresentation or undue influence",
        punishment: "Voidable at the option of the wronged party; restitution of benefits.",
        section: "Â§19, Â§19A",
      },
      {
        offence: "Agreement with unlawful consideration or object",
        punishment: "Agreement is void; no enforcement; partial unlawfulness can taint the whole.",
        section: "Â§23, Â§24",
      },
    ],
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Indian_Contract_Act,_1872",
    secondarySourceName: "India Code",
    secondarySourceUrl: "https://www.indiacode.nic.in/handle/123456789/2187",
    penaltyTable: [
      { section: "2", subSection: "-", lawInBrief: "Interpretation-clause (Offer, Acceptance, Consideration)", punishment: "-", type: "structural" },
      { section: "10", subSection: "-", lawInBrief: "What agreements are contracts", punishment: "-", type: "structural" },
      { section: "11", subSection: "-", lawInBrief: "Who are competent to contract", punishment: "-", type: "structural" },
      { section: "25", subSection: "-", lawInBrief: "Agreement without consideration is void", punishment: "-", type: "structural" },
      { section: "27", subSection: "-", lawInBrief: "Agreement in restraint of trade is void", punishment: "-", type: "structural" },
      { section: "56", subSection: "-", lawInBrief: "Agreement to do impossible act (Frustration)", punishment: "-", type: "structural" },
      { section: "73", subSection: "-", lawInBrief: "Breach of contract", punishment: "Damages (compensation for loss naturally arising from breach); no imprisonment — purely civil remedy", type: "criminal", severity: "high" },
      { section: "55", subSection: "-", lawInBrief: "Failure to perform within agreed time (essence-of-time contracts)", punishment: "Contract becomes voidable at the option of the innocent party", type: "compliance", severity: "low" },
      { section: "19, 19A", subSection: "-", lawInBrief: "Agreement caused by coercion, fraud, misrepresentation or undue influence", punishment: "Voidable at the option of the wronged party; restitution of benefits", type: "compliance", severity: "low" },
      { section: "23, 24", subSection: "-", lawInBrief: "Agreement with unlawful consideration or object", punishment: "Agreement is void; no enforcement; partial unlawfulness can taint the whole", type: "compliance", severity: "low" }
    ],
  },
  "sale-of-goods-act-1930": {
    oneLiner:
      "Carves the special rules for buying and selling movable goods out of the Contract Act â€” title, delivery, conditions, warranties and the unpaid seller's rights.",
    punishments: [
      {
        offence: "Breach of a condition by the seller",
        punishment: "Buyer may reject the goods and treat the contract as repudiated, or claim damages.",
        section: "Â§12, Â§13",
      },
      {
        offence: "Breach of warranty by the seller",
        punishment: "Buyer cannot reject the goods, but can claim damages.",
        section: "Â§12(3), Â§59",
      },
      {
        offence: "Buyer wrongfully refuses to accept and pay",
        punishment: "Seller may sue for price (Â§55) or for damages for non-acceptance (Â§56); unpaid seller has lien, stoppage and resale rights.",
        section: "Â§45â€“54",
      },
    ],
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Sale_of_Goods_Act,_1930",
    secondarySourceName: "India Code",
    secondarySourceUrl: "https://www.indiacode.nic.in/handle/123456789/2390",
    penaltyTable: [
      { section: "4", subSection: "-", lawInBrief: "Sale and agreement to sell", punishment: "-", type: "structural" },
      { section: "14", subSection: "-", lawInBrief: "Implied undertaking as to title", punishment: "-", type: "structural" },
      { section: "15", subSection: "-", lawInBrief: "Sale by description", punishment: "-", type: "structural" },
      { section: "16", subSection: "-", lawInBrief: "Implied conditions as to quality or fitness", punishment: "-", type: "structural" },
      { section: "12, 13", subSection: "-", lawInBrief: "Breach of a condition by the seller", punishment: "Buyer may reject the goods and treat the contract as repudiated, or claim damages", type: "civil", severity: "medium" },
      { section: "12(3), 59", subSection: "-", lawInBrief: "Breach of warranty by the seller", punishment: "Buyer cannot reject the goods, but can claim damages", type: "civil", severity: "medium" },
      { section: "45–54", subSection: "-", lawInBrief: "Buyer wrongfully refuses to accept and pay", punishment: "Seller may sue for price (§55) or for damages for non-acceptance (§56); unpaid seller has lien, stoppage and resale rights", type: "civil", severity: "medium" }
    ],
  },
  "negotiable-instruments-act-1881": {
    oneLiner:
      "The law on cheques, promissory notes and bills of exchange â€” including the famous Section 138 that makes a bounced cheque a criminal offence.",
    punishments: [
      {
        offence: "Cheque dishonour for insufficient funds (Section 138)",
        punishment: "Imprisonment up to 2 years and/or fine up to twice the cheque amount.",
        section: "Â§138",
      },
      {
        offence: "Offences by companies",
        punishment: "Person in charge at the time deemed guilty unless due diligence proven.",
        section: "Â§141",
      },
      {
        offence: "Dishonour of electronic fund transfer for insufficient funds",
        punishment: "Same as Â§138 â€” up to 2 years' imprisonment + fine up to twice the amount.",
        section: "Â§138 (extended)",
      },
    ],
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Negotiable_Instruments_Act,_1881",
    secondarySourceName: "India Code",
    secondarySourceUrl: "https://www.indiacode.nic.in/handle/123456789/2189",
    penaltyTable: [
      { section: "4", subSection: "-", lawInBrief: "Promissory note defined", punishment: "-", type: "definition" },
      { section: "5", subSection: "-", lawInBrief: "Bill of exchange defined", punishment: "-", type: "definition" },
      { section: "6", subSection: "-", lawInBrief: "Cheque defined", punishment: "-", type: "definition" },
      { section: "15", subSection: "-", lawInBrief: "Indorsement", punishment: "-", type: "structural" },
      { section: "138", subSection: "-", lawInBrief: "Cheque dishonour for insufficient funds (Section 138)", punishment: "Imprisonment up to 2 years and/or fine up to twice the cheque amount", type: "criminal", severity: "high" },
      { section: "141", subSection: "-", lawInBrief: "Offences by companies", punishment: "Person in charge at the time deemed guilty unless due diligence proven", type: "compliance", severity: "low" },
      { section: "138 (extended)", subSection: "-", lawInBrief: "Dishonour of electronic fund transfer for insufficient funds", punishment: "Same as §138 — up to 2 years' imprisonment + fine up to twice the amount", type: "criminal", severity: "high" }
    ],
  },
  "arbitration-and-conciliation-act-1996": {
    oneLiner:
      "Lets parties resolve disputes through private arbitration instead of court â€” and lays down how arbitral awards are enforced, including foreign ones.",
    punishments: [
      {
        offence: "Non-compliance with an arbitral award",
        punishment: "Enforceable as a decree of court under Â§36; contempt action possible.",
        section: "Â§36",
      },
      {
        offence: "Court interference outside the Act's grounds",
        punishment: "Award protected â€” courts can intervene only on Â§34 grounds (e.g., fraud, public policy, lack of jurisdiction).",
        section: "Â§5, Â§34",
      },
      {
        offence: "Bias / failure to disclose by an arbitrator",
        punishment: "Termination of mandate under Â§12â€“14; award may be set aside.",
        section: "Â§12â€“14",
      },
    ],
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Arbitration_and_Conciliation_Act,_1996",
    secondarySourceName: "India Code",
    secondarySourceUrl: "https://www.indiacode.nic.in/handle/123456789/1978",
    penaltyTable: [
      { section: "7", subSection: "-", lawInBrief: "Arbitration agreement", punishment: "-", type: "structural" },
      { section: "8", subSection: "-", lawInBrief: "Power to refer parties to arbitration", punishment: "-", type: "structural" },
      { section: "11", subSection: "-", lawInBrief: "Appointment of arbitrators", punishment: "-", type: "structural" },
      { section: "34", subSection: "-", lawInBrief: "Application for setting aside arbitral award", punishment: "-", type: "procedural" },
      { section: "36", subSection: "-", lawInBrief: "Non-compliance with an arbitral award", punishment: "Enforceable as a decree of court under §36; contempt action possible", type: "compliance", severity: "low" },
      { section: "5, 34", subSection: "-", lawInBrief: "Court interference outside the Act's grounds", punishment: "Award protected — courts can intervene only on §34 grounds (e.g., fraud, public policy, lack of jurisdiction)", type: "compliance", severity: "low" },
      { section: "12–14", subSection: "-", lawInBrief: "Bias / failure to disclose by an arbitrator", punishment: "Termination of mandate under §12–14; award may be set aside", type: "compliance", severity: "low" }
    ],
  },
  "specific-relief-act-1963": {
    oneLiner:
      "Where money damages aren't enough, this Act lets a court order specific performance, possession, declaration or injunction.",
    punishments: [
      {
        offence: "Breach of contract (where damages inadequate)",
        punishment: "Specific performance of the contract is the rule, not the exception, after the 2018 amendment.",
        section: "Â§10",
      },
      {
        offence: "Wrongful possession of immovable property",
        punishment: "Recovery of possession to the rightful person within 6 months of dispossession (Â§6 suit).",
        section: "Â§5â€“8",
      },
      {
        offence: "Threatened breach of an obligation",
        punishment: "Permanent or temporary injunction; mandatory injunctions where appropriate.",
        section: "Â§36â€“42",
      },
    ],
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Specific_Relief_Act,_1963",
    secondarySourceName: "India Code",
    secondarySourceUrl: "https://www.indiacode.nic.in/handle/123456789/1573",
    penaltyTable: [
      { section: "10", subSection: "-", lawInBrief: "Breach of contract (where damages inadequate)", punishment: "Specific performance of the contract is the rule, not the exception, after the 2018 amendment", type: "compliance", severity: "low" },
      { section: "5–8", subSection: "-", lawInBrief: "Wrongful possession of immovable property", punishment: "Recovery of possession to the rightful person within 6 months of dispossession (§6 suit)", type: "compliance", severity: "low" },
      { section: "36–42", subSection: "-", lawInBrief: "Threatened breach of an obligation", punishment: "Permanent or temporary injunction; mandatory injunctions where appropriate", type: "compliance", severity: "low" }
    ],
  },

  // ============================================================
  // Labour & Employment Laws (only POSH is authored)
  // ============================================================
  "code-on-wages-2019": {
    oneLiner:
      "Consolidates the Minimum Wages, Payment of Wages, Payment of Bonus and Equal Remuneration laws â€” guarantees a minimum wage to every worker, paid on time.",
    punishments: [
      {
        offence: "Paying less than the minimum wage",
        punishment: "Fine up to â‚¹50,000; on repeat within 5 years â€” imprisonment up to 3 months and/or fine up to â‚¹1 lakh.",
        section: "Â§54",
      },
      {
        offence: "Non-payment / delayed payment of wages",
        punishment: "Fine up to â‚¹20,000; on repeat â€” imprisonment up to 1 month and/or fine up to â‚¹40,000.",
        section: "Â§54",
      },
      {
        offence: "Failure to maintain prescribed records",
        punishment: "Fine up to â‚¹10,000.",
        section: "Â§54(1)(c)",
      },
    ],
    sourceName: "PRS India",
    sourceUrl: "https://prsindia.org/billtrack/the-code-on-wages-2019",
    secondarySourceName: "Wikipedia",
    secondarySourceUrl: "https://en.wikipedia.org/wiki/Code_on_Wages,_2019",
    penaltyTable: [
      { section: "5", subSection: "-", lawInBrief: "Payment of minimum rate of wages", punishment: "-", type: "structural" },
      { section: "13", subSection: "-", lawInBrief: "Fixing hours of work for normal working day", punishment: "-", type: "structural" },
      { section: "15", subSection: "-", lawInBrief: "Wages for overtime work", punishment: "-", type: "structural" },
      { section: "26", subSection: "-", lawInBrief: "Eligibility for bonus", punishment: "-", type: "structural" },
      { section: "54", subSection: "-", lawInBrief: "Paying less than the minimum wage", punishment: "Fine up to ₹50,000; on repeat within 5 years — imprisonment up to 3 months and/or fine up to ₹1 lakh", type: "criminal", severity: "high" },
      { section: "54", subSection: "-", lawInBrief: "Non-payment / delayed payment of wages", punishment: "Fine up to ₹20,000; on repeat — imprisonment up to 1 month and/or fine up to ₹40,000", type: "criminal", severity: "high" },
      { section: "54(1)(c)", subSection: "-", lawInBrief: "Failure to maintain prescribed records", punishment: "Fine up to ₹10,000", type: "compliance", severity: "low" }
    ],
  },
  "industrial-relations-code-2020": {
    oneLiner:
      "Merges the Trade Unions, Standing Orders and Industrial Disputes Acts â€” covers trade unions, retrenchment, layoffs, strikes and dispute resolution.",
    punishments: [
      {
        offence: "Illegal strike or lock-out",
        punishment: "Worker: fine â‚¹1,000 â€“ â‚¹10,000 and/or imprisonment up to 1 month; Employer: fine â‚¹50,000 â€“ â‚¹10 lakh and/or imprisonment up to 1 month.",
        section: "Â§86",
      },
      {
        offence: "Retrenchment / lay-off / closure without permission (large units)",
        punishment: "Fine â‚¹1 lakh â€“ â‚¹10 lakh and continuing daily fine until compliance.",
        section: "Â§86(8)",
      },
      {
        offence: "Failure to make payment due under settlement / award",
        punishment: "Fine â‚¹50,000 â€“ â‚¹2 lakh; on repeat â€” imprisonment up to 3 months and/or fine up to â‚¹5 lakh.",
        section: "Â§86(5)",
      },
    ],
    sourceName: "PRS India",
    sourceUrl: "https://prsindia.org/billtrack/the-industrial-relations-code-2020",
    secondarySourceName: "Wikipedia",
    secondarySourceUrl: "https://en.wikipedia.org/wiki/Industrial_Relations_Code,_2020",
    penaltyTable: [
      { section: "14", subSection: "-", lawInBrief: "Registration of Trade Union", punishment: "-", type: "structural" },
      { section: "28", subSection: "-", lawInBrief: "Recognition of negotiating union", punishment: "-", type: "structural" },
      { section: "62", subSection: "-", lawInBrief: "Strikes and lock-outs", punishment: "-", type: "structural" },
      { section: "77", subSection: "-", lawInBrief: "Retrenchment of workmen", punishment: "-", type: "structural" },
      { section: "86", subSection: "-", lawInBrief: "Illegal strike or lock-out", punishment: "Worker: fine ₹1,000 – ₹10,000 and/or imprisonment up to 1 month; Employer: fine ₹50,000 – ₹10 lakh and/or imprisonment up to 1 month", type: "criminal", severity: "high" },
      { section: "86(8)", subSection: "-", lawInBrief: "Retrenchment / lay-off / closure without permission (large units)", punishment: "Fine ₹1 lakh – ₹10 lakh and continuing daily fine until compliance", type: "civil", severity: "medium" },
      { section: "86(5)", subSection: "-", lawInBrief: "Failure to make payment due under settlement / award", punishment: "Fine ₹50,000 – ₹2 lakh; on repeat — imprisonment up to 3 months and/or fine up to ₹5 lakh", type: "compliance", severity: "high" }
    ],
  },
  "occupational-safety-code-2020": {
    oneLiner:
      "Consolidates 13 labour laws on factories, mines, contract labour, migrant workers and welfare â€” sets working hours, safety standards, leave and welfare obligations.",
    punishments: [
      {
        offence: "Contravention causing death",
        punishment: "Imprisonment up to 2 years and/or fine up to â‚¹5 lakh (minimum â‚¹50,000 paid to legal heirs).",
        section: "Â§94",
      },
      {
        offence: "Contravention causing serious bodily injury",
        punishment: "Imprisonment up to 1 year and/or fine up to â‚¹3 lakh.",
        section: "Â§94",
      },
      {
        offence: "Failure to comply with safety / hours / welfare provisions",
        punishment: "Fine up to â‚¹3 lakh; on repeat â€” imprisonment up to 6 months and/or fine up to â‚¹4 lakh.",
        section: "Â§95",
      },
      {
        offence: "Obstructing inspector-cum-facilitator",
        punishment: "Imprisonment up to 3 months and/or fine up to â‚¹1 lakh.",
        section: "Â§95(3)",
      },
    ],
    sourceName: "PRS India",
    sourceUrl: "https://prsindia.org/billtrack/the-occupational-safety-health-and-working-conditions-code-2020",
    secondarySourceName: "Wikipedia",
    secondarySourceUrl: "https://en.wikipedia.org/wiki/Occupational_Safety,_Health_and_Working_Conditions_Code,_2020",
    penaltyTable: [
      { section: "6", subSection: "-", lawInBrief: "Duties of employer", punishment: "-", type: "structural" },
      { section: "17", subSection: "-", lawInBrief: "Duties of employees", punishment: "-", type: "structural" },
      { section: "23", subSection: "-", lawInBrief: "Working hours for adults", punishment: "-", type: "structural" },
      { section: "32", subSection: "-", lawInBrief: "Annual leave with wages", punishment: "-", type: "structural" },
      { section: "94", subSection: "-", lawInBrief: "Contravention causing death", punishment: "Imprisonment up to 2 years and/or fine up to ₹5 lakh (minimum ₹50,000 paid to legal heirs)", type: "criminal", severity: "high" },
      { section: "94", subSection: "-", lawInBrief: "Contravention causing serious bodily injury", punishment: "Imprisonment up to 1 year and/or fine up to ₹3 lakh", type: "criminal", severity: "high" },
      { section: "95", subSection: "-", lawInBrief: "Failure to comply with safety / hours / welfare provisions", punishment: "Fine up to ₹3 lakh; on repeat — imprisonment up to 6 months and/or fine up to ₹4 lakh", type: "compliance", severity: "high" },
      { section: "95(3)", subSection: "-", lawInBrief: "Obstructing inspector-cum-facilitator", punishment: "Imprisonment up to 3 months and/or fine up to ₹1 lakh", type: "criminal", severity: "high" }
    ],
  },
  "social-security-code-2020": {
    oneLiner:
      "Consolidates 9 social-security laws (PF, ESI, gratuity, maternity benefit, etc.) and extends benefits to gig and platform workers.",
    punishments: [
      {
        offence: "Failure to deposit employee's contribution after deduction",
        punishment: "Imprisonment 1 â€“ 3 years + fine of â‚¹1 lakh (mandatory minimum).",
        section: "Â§133",
      },
      {
        offence: "Falsifying records / making false statements",
        punishment: "Imprisonment up to 6 months and/or fine up to â‚¹50,000.",
        section: "Â§133",
      },
      {
        offence: "Failure to pay any other amount",
        punishment: "Imprisonment up to 1 year and/or fine up to â‚¹50,000.",
        section: "Â§133",
      },
      {
        offence: "Repeat offence",
        punishment: "Imprisonment 2 â€“ 5 years + fine of â‚¹3 lakh.",
        section: "Â§134",
      },
    ],
    sourceName: "PRS India",
    sourceUrl: "https://prsindia.org/billtrack/the-code-on-social-security-2020",
    secondarySourceName: "Wikipedia",
    secondarySourceUrl: "https://en.wikipedia.org/wiki/Code_on_Social_Security,_2020",
    penaltyTable: [
      { section: "14", subSection: "-", lawInBrief: "Employees' Provident Fund Scheme", punishment: "-", type: "structural" },
      { section: "32", subSection: "-", lawInBrief: "Employees' State Insurance Corporation", punishment: "-", type: "structural" },
      { section: "53", subSection: "-", lawInBrief: "Payment of gratuity", punishment: "-", type: "structural" },
      { section: "59", subSection: "-", lawInBrief: "Maternity benefit", punishment: "-", type: "structural" },
      { section: "114", subSection: "-", lawInBrief: "Framing of schemes for unorganised workers", punishment: "-", type: "structural" },
      { section: "133", subSection: "-", lawInBrief: "Failure to deposit employee's contribution after deduction", punishment: "Imprisonment 1 – 3 years + fine of ₹1 lakh (mandatory minimum)", type: "compliance", severity: "high" },
      { section: "133", subSection: "-", lawInBrief: "Falsifying records / making false statements", punishment: "Imprisonment up to 6 months and/or fine up to ₹50,000", type: "criminal", severity: "high" },
      { section: "133", subSection: "-", lawInBrief: "Failure to pay any other amount", punishment: "Imprisonment up to 1 year and/or fine up to ₹50,000", type: "compliance", severity: "high" },
      { section: "134", subSection: "-", lawInBrief: "Repeat offence", punishment: "Imprisonment 2 – 5 years + fine of ₹3 lakh", type: "criminal", severity: "high" }
    ],
  },

  // ============================================================
  // Financial Markets & Banking
  // ============================================================
  "rbi-act-1934": {
    oneLiner:
      "Establishes the Reserve Bank of India as the central bank â€” issuing currency, running monetary policy and regulating NBFCs.",
    punishments: [
      {
        offence: "Carrying on NBFC business without registration",
        punishment: "Imprisonment 1 â€“ 5 years + fine â‚¹1 lakh â€“ â‚¹5 lakh.",
        section: "Â§58B(4A)",
      },
      {
        offence: "Failure to comply with RBI directions to NBFCs",
        punishment: "Fine up to â‚¹5 lakh + continuing daily fine up to â‚¹25,000.",
        section: "Â§58B",
      },
      {
        offence: "Counterfeiting / mutilating currency",
        punishment: "Punishable under BNS; RBI may seize the notes.",
        section: "Â§28",
      },
    ],
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Reserve_Bank_of_India_Act,_1934",
    secondarySourceName: "RBI",
    secondarySourceUrl: "https://www.rbi.org.in/Scripts/OccasionalPublications.aspx?head=Reserve%20Bank%20of%20India%20Act",
    penaltyTable: [
      { section: "22", subSection: "-", lawInBrief: "Right to issue bank notes", punishment: "-", type: "right" },
      { section: "42", subSection: "-", lawInBrief: "Cash reserves of scheduled banks", punishment: "-", type: "structural" },
      { section: "45ZA", subSection: "-", lawInBrief: "Inflation target", punishment: "-", type: "structural" },
      { section: "45ZB", subSection: "-", lawInBrief: "Monetary Policy Committee", punishment: "-", type: "structural" },
      { section: "58B(4A)", subSection: "-", lawInBrief: "Carrying on NBFC business without registration", punishment: "Imprisonment 1 – 5 years + fine ₹1 lakh – ₹5 lakh", type: "criminal", severity: "high" },
      { section: "58B", subSection: "-", lawInBrief: "Failure to comply with RBI directions to NBFCs", punishment: "Fine up to ₹5 lakh + continuing daily fine up to ₹25,000", type: "compliance", severity: "medium" },
      { section: "28", subSection: "-", lawInBrief: "Counterfeiting / mutilating currency", punishment: "Punishable under BNS; RBI may seize the notes", type: "compliance", severity: "low" }
    ],
  },
  "banking-regulation-act-1949": {
    oneLiner:
      "Licenses banks, sets their capital, business and audit rules, and lets the RBI inspect, supersede boards or wind them up if they fail.",
    punishments: [
      {
        offence: "Carrying on banking business without a licence",
        punishment: "Fine up to â‚¹1 crore; continuing offence â€” additional â‚¹1 lakh per day.",
        section: "Â§46(4)",
      },
      {
        offence: "False statement in returns / balance sheet",
        punishment: "Imprisonment up to 3 years + fine.",
        section: "Â§46(1)",
      },
      {
        offence: "Default in maintaining cash reserve / SLR",
        punishment: "Penal interest above bank rate on the shortfall; persistent default â€” additional penalty.",
        section: "Â§42 (RBI Act) / Â§24",
      },
      {
        offence: "Non-compliance with RBI directions",
        punishment: "Fine up to â‚¹1 crore; continuing â€” â‚¹1 lakh per day.",
        section: "Â§47A",
      },
    ],
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Banking_Regulation_Act,_1949",
    secondarySourceName: "RBI",
    secondarySourceUrl: "https://www.rbi.org.in/Scripts/OccasionalPublications.aspx?head=Banking%20Regulation%20Act%2C%201949",
    penaltyTable: [
      { section: "21", subSection: "-", lawInBrief: "Power of Reserve Bank to control advances", punishment: "-", type: "structural" },
      { section: "22", subSection: "-", lawInBrief: "Licensing of banking companies", punishment: "-", type: "structural" },
      { section: "35", subSection: "-", lawInBrief: "Inspection", punishment: "-", type: "structural" },
      { section: "35A", subSection: "-", lawInBrief: "Power of the Reserve Bank to give directions", punishment: "-", type: "structural" },
      { section: "46(4)", subSection: "-", lawInBrief: "Carrying on banking business without a licence", punishment: "Fine up to ₹1 crore; continuing offence — additional ₹1 lakh per day", type: "civil", severity: "medium" },
      { section: "46(1)", subSection: "-", lawInBrief: "False statement in returns / balance sheet", punishment: "Imprisonment up to 3 years + fine", type: "criminal", severity: "high" },
      { section: "42 (RBI Act) / 24", subSection: "-", lawInBrief: "Default in maintaining cash reserve / SLR", punishment: "Penal interest above bank rate on the shortfall; persistent default — additional penalty", type: "compliance", severity: "medium" },
      { section: "47A", subSection: "-", lawInBrief: "Non-compliance with RBI directions", punishment: "Fine up to ₹1 crore; continuing — ₹1 lakh per day", type: "compliance", severity: "medium" }
    ],
  },
  "fema-1999": {
    oneLiner:
      "Civil law (replacing FERA) that manages foreign-exchange transactions â€” what you can remit, hold or invest abroad, and what penalties apply for breach.",
    punishments: [
      {
        offence: "Contravention of FEMA / rules / directions",
        punishment: "Penalty up to 3Ã— the amount involved (if quantifiable) or â‚¹2 lakh; continuing â€” additional â‚¹5,000 per day.",
        section: "Â§13(1)",
      },
      {
        offence: "Non-payment of penalty within 90 days",
        punishment: "Civil imprisonment up to 6 months to 3 years (based on amount).",
        section: "Â§14",
      },
      {
        offence: "Holding / acquiring foreign exchange without permission",
        punishment: "Confiscation by the Adjudicating Authority + penalty under Â§13.",
        section: "Â§13(2)",
      },
    ],
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Foreign_Exchange_Management_Act",
    secondarySourceName: "RBI",
    secondarySourceUrl: "https://www.rbi.org.in/Scripts/Fema.aspx",
    penaltyTable: [
      { section: "3", subSection: "-", lawInBrief: "Dealing in foreign exchange", punishment: "-", type: "structural" },
      { section: "4", subSection: "-", lawInBrief: "Holding of foreign exchange", punishment: "-", type: "structural" },
      { section: "6", subSection: "-", lawInBrief: "Capital account transactions", punishment: "-", type: "structural" },
      { section: "10", subSection: "-", lawInBrief: "Authorised person", punishment: "-", type: "structural" },
      { section: "13(1)", subSection: "-", lawInBrief: "Contravention of FEMA / rules / directions", punishment: "Penalty up to 3× the amount involved (if quantifiable) or ₹2 lakh; continuing — additional ₹5,000 per day", type: "civil", severity: "medium" },
      { section: "14", subSection: "-", lawInBrief: "Non-payment of penalty within 90 days", punishment: "Civil imprisonment up to 6 months to 3 years (based on amount)", type: "criminal", severity: "high" },
      { section: "13(2)", subSection: "-", lawInBrief: "Holding / acquiring foreign exchange without permission", punishment: "Confiscation by the Adjudicating Authority + penalty under §13", type: "civil", severity: "medium" }
    ],
  },
  "pmla-2002": {
    oneLiner:
      "Targets the proceeds of crime â€” lets the Enforcement Directorate attach property, prosecute laundering, and seek confiscation to the Government.",
    punishments: [
      {
        offence: "Money-laundering (general)",
        punishment: "Rigorous imprisonment 3 â€“ 7 years + fine.",
        section: "Â§4",
      },
      {
        offence: "Money-laundering involving narcotics (NDPS scheduled offence)",
        punishment: "Rigorous imprisonment 3 â€“ 10 years + fine.",
        section: "Â§4 proviso",
      },
      {
        offence: "Property involved in laundering",
        punishment: "Provisional attachment up to 180 days â†’ confirmation by Adjudicating Authority â†’ confiscation to Central Government on conviction.",
        section: "Â§5, Â§8",
      },
      {
        offence: "False information / failure to give information by reporting entity",
        punishment: "Fine â‚¹10,000 â€“ â‚¹1 lakh per failure.",
        section: "Â§13",
      },
    ],
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Prevention_of_Money_Laundering_Act,_2002",
    secondarySourceName: "Enforcement Directorate",
    secondarySourceUrl: "https://enforcementdirectorate.gov.in/pmla",
    penaltyTable: [
      { section: "3", subSection: "-", lawInBrief: "Offence of money-laundering", punishment: "-", type: "structural" },
      { section: "12", subSection: "-", lawInBrief: "Reporting entity to maintain records", punishment: "-", type: "structural" },
      { section: "17", subSection: "-", lawInBrief: "Search and seizure", punishment: "-", type: "structural" },
      { section: "24", subSection: "-", lawInBrief: "Burden of proof", punishment: "-", type: "structural" },
      { section: "4", subSection: "-", lawInBrief: "Money-laundering (general)", punishment: "Rigorous imprisonment 3 – 7 years + fine", type: "criminal", severity: "high" },
      { section: "4 proviso", subSection: "-", lawInBrief: "Money-laundering involving narcotics (NDPS scheduled offence)", punishment: "Rigorous imprisonment 3 – 10 years + fine", type: "criminal", severity: "high" },
      { section: "5, 8", subSection: "-", lawInBrief: "Property involved in laundering", punishment: "Provisional attachment up to 180 days → confirmation by Adjudicating Authority → confiscation to Central Government on conviction", type: "civil", severity: "medium" },
      { section: "13", subSection: "-", lawInBrief: "False information / failure to give information by reporting entity", punishment: "Fine ₹10,000 – ₹1 lakh per failure", type: "compliance", severity: "low" }
    ],
  },
  "sebi-act-1992": {
    oneLiner:
      "Creates SEBI as the watchdog of India's securities markets â€” registers intermediaries, polices fraud, and protects investors.",
    punishments: [
      {
        offence: "Insider trading",
        punishment: "Penalty â‚¹10 lakh â€“ â‚¹25 crore or 3Ã— the profit made, whichever is higher.",
        section: "Â§15G",
      },
      {
        offence: "Fraudulent / unfair trade practices",
        punishment: "Penalty â‚¹5 lakh â€“ â‚¹25 crore or 3Ã— the profit made.",
        section: "Â§15HA",
      },
      {
        offence: "Failure to comply with SEBI directions",
        punishment: "Imprisonment up to 10 years and/or fine up to â‚¹25 crore.",
        section: "Â§24",
      },
      {
        offence: "Failure to file required disclosure / return",
        punishment: "Penalty â‚¹1 lakh per day, max â‚¹1 crore.",
        section: "Â§15A",
      },
    ],
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Securities_and_Exchange_Board_of_India_Act,_1992",
    secondarySourceName: "SEBI",
    secondarySourceUrl: "https://www.sebi.gov.in/legal/acts/jan-2013/the-securities-and-exchange-board-of-india-act-1992_22667.html",
    penaltyTable: [
      { section: "11", subSection: "-", lawInBrief: "Functions of Board", punishment: "-", type: "structural" },
      { section: "12", subSection: "-", lawInBrief: "Registration of stock brokers, sub-brokers, share transfer agents, etc.", punishment: "-", type: "structural" },
      { section: "12A", subSection: "-", lawInBrief: "Prohibition of manipulative and deceptive devices, insider trading", punishment: "-", type: "structural" },
      { section: "15G", subSection: "-", lawInBrief: "Insider trading", punishment: "Penalty ₹10 lakh – ₹25 crore or 3× the profit made, whichever is higher", type: "civil", severity: "medium" },
      { section: "15HA", subSection: "-", lawInBrief: "Fraudulent / unfair trade practices", punishment: "Penalty ₹5 lakh – ₹25 crore or 3× the profit made", type: "civil", severity: "medium" },
      { section: "24", subSection: "-", lawInBrief: "Failure to comply with SEBI directions", punishment: "Imprisonment up to 10 years and/or fine up to ₹25 crore", type: "compliance", severity: "high" },
      { section: "15A", subSection: "-", lawInBrief: "Failure to file required disclosure / return", punishment: "Penalty ₹1 lakh per day, max ₹1 crore", type: "compliance", severity: "medium" }
    ],
  },

  // ============================================================
  // IT & Digital Laws
  // ============================================================
  "it-act-2000": {
    oneLiner:
      "India's foundational digital law â€” recognises e-records and digital signatures, and criminalises hacking, identity theft and obscene content online.",
    punishments: [
      {
        offence: "Hacking / unauthorised access to a computer",
        punishment: "Imprisonment up to 3 years and/or fine up to â‚¹5 lakh.",
        section: "Â§66",
      },
      {
        offence: "Identity theft (dishonest use of password / digital signature)",
        punishment: "Imprisonment up to 3 years and fine up to â‚¹1 lakh.",
        section: "Â§66C",
      },
      {
        offence: "Cheating by personation using a computer resource",
        punishment: "Imprisonment up to 3 years and fine up to â‚¹1 lakh.",
        section: "Â§66D",
      },
      {
        offence: "Publishing / transmitting obscene material electronically",
        punishment: "First conviction: up to 3 years + fine up to â‚¹5 lakh; subsequent: up to 5 years + fine up to â‚¹10 lakh.",
        section: "Â§67",
      },
      {
        offence: "Publishing sexually explicit material",
        punishment: "First: up to 5 years + â‚¹10 lakh; subsequent: up to 7 years + â‚¹10 lakh.",
        section: "Â§67A",
      },
      {
        offence: "Cyber-terrorism",
        punishment: "Imprisonment up to life.",
        section: "Â§66F",
      },
    ],
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Information_Technology_Act,_2000",
    secondarySourceName: "MeitY",
    secondarySourceUrl: "https://www.meity.gov.in/content/information-technology-act",
  },
  "dpdp-act-2023": {
    oneLiner:
      "India's first comprehensive data-protection law â€” companies need your consent to use your personal data, must protect it, and answer to a Data Protection Board.",
    punishments: [
      {
        offence: "Failure to take reasonable security safeguards / data breach",
        punishment: "Penalty up to â‚¹250 crore.",
        section: "Schedule (entry 1)",
      },
      {
        offence: "Failure to notify a personal-data breach",
        punishment: "Penalty up to â‚¹200 crore.",
        section: "Schedule (entry 2)",
      },
      {
        offence: "Non-compliance with children-data obligations",
        punishment: "Penalty up to â‚¹200 crore.",
        section: "Schedule (entry 3)",
      },
      {
        offence: "Non-compliance with significant data fiduciary duties",
        punishment: "Penalty up to â‚¹150 crore.",
        section: "Schedule (entry 4)",
      },
      {
        offence: "Breach of other provisions by data fiduciary",
        punishment: "Penalty up to â‚¹50 crore.",
        section: "Schedule (entry 6)",
      },
    ],
    sourceName: "PRS India",
    sourceUrl: "https://prsindia.org/billtrack/digital-personal-data-protection-bill-2023",
    secondarySourceName: "MeitY",
    secondarySourceUrl: "https://www.meity.gov.in/content/digital-personal-data-protection-act-2023",
    penaltyTable: [
      { section: "1", lawInBrief: "Short title and commencement", punishment: "-", type: "structural" },
      { section: "2", lawInBrief: "Definitions", punishment: "-", type: "definition" },
      { section: "3", lawInBrief: "Application of Act", punishment: "-", type: "procedural" },
      { section: "4", lawInBrief: "Grounds for processing personal data", punishment: "-", type: "structural" },
      { section: "5", lawInBrief: "Notice", punishment: "-", type: "structural" },
      { section: "6", lawInBrief: "Consent", punishment: "-", type: "structural" },
      { section: "7", lawInBrief: "Certain legitimate uses", punishment: "-", type: "structural" },
      { section: "8", lawInBrief: "General obligations of Data Fiduciary", punishment: "See Schedule", type: "compliance", severity: "low" },
      { section: "9", lawInBrief: "Processing of personal data of children", punishment: "See Schedule", type: "compliance", severity: "low" },
      { section: "10", lawInBrief: "Additional obligations of Significant Data Fiduciary", punishment: "See Schedule", type: "compliance", severity: "low" },
      { section: "11", lawInBrief: "Right to access information about personal data", punishment: "-", type: "right" },
      { section: "12", lawInBrief: "Right to correction and erasure of personal data", punishment: "-", type: "right" },
      { section: "13", lawInBrief: "Right of grievance redressal", punishment: "-", type: "right" },
      { section: "14", lawInBrief: "Right to nominate", punishment: "-", type: "right" },
      { section: "15", lawInBrief: "Duties of Data Principal", punishment: "See Schedule", type: "compliance", severity: "low" },
      { section: "16", lawInBrief: "Processing of personal data outside India", punishment: "-", type: "structural" },
      { section: "17", lawInBrief: "Exemptions", punishment: "-", type: "structural" },
      { section: "18", lawInBrief: "Establishment of Board", punishment: "-", type: "structural" },
      { section: "19", lawInBrief: "Composition and qualifications of Board Members", punishment: "-", type: "structural" },
      { section: "20", lawInBrief: "Salary, allowances and term of office", punishment: "-", type: "structural" },
      { section: "21", lawInBrief: "Disqualifications for Board Members", punishment: "-", type: "structural" },
      { section: "22", lawInBrief: "Resignation and filling of vacancy", punishment: "-", type: "structural" },
      { section: "23", lawInBrief: "Proceedings of Board", punishment: "-", type: "structural" },
      { section: "24", lawInBrief: "Officers and employees of Board", punishment: "-", type: "structural" },
      { section: "25", lawInBrief: "Members and officers to be public servants", punishment: "-", type: "structural" },
      { section: "26", lawInBrief: "Powers of Chairperson", punishment: "-", type: "structural" },
      { section: "27", lawInBrief: "Powers and functions of Board", punishment: "-", type: "structural" },
      { section: "28", lawInBrief: "Procedure to be followed by Board", punishment: "-", type: "procedural" },
      { section: "29", lawInBrief: "Appeal to Appellate Tribunal", punishment: "-", type: "structural" },
      { section: "30", lawInBrief: "Orders of Appellate Tribunal executable as decree", punishment: "-", type: "structural" },
      { section: "31", lawInBrief: "Alternate dispute resolution", punishment: "-", type: "structural" },
      { section: "32", lawInBrief: "Voluntary undertaking", punishment: "See Schedule", type: "compliance", severity: "low" },
      { section: "33", lawInBrief: "Financial penalties", punishment: "-", type: "structural" },
      { section: "34", lawInBrief: "Crediting penalties to Consolidated Fund of India", punishment: "-", type: "structural" },
      { section: "35", lawInBrief: "Protection of action taken in good faith", punishment: "-", type: "structural" },
      { section: "36", lawInBrief: "Power to call for information", punishment: "-", type: "structural" },
      { section: "37", lawInBrief: "Power of Central Government to issue directions", punishment: "-", type: "structural" },
      { section: "38", lawInBrief: "Consistency with other laws", punishment: "-", type: "structural" },
      { section: "39", lawInBrief: "Bar of jurisdiction", punishment: "-", type: "structural" },
      { section: "40", lawInBrief: "Power to make rules", punishment: "-", type: "structural" },
      { section: "41", lawInBrief: "Laying of rules and notifications", punishment: "-", type: "structural" },
      { section: "42", lawInBrief: "Power to amend Schedule", punishment: "-", type: "structural" },
      { section: "43", lawInBrief: "Power to remove difficulties", punishment: "-", type: "structural" },
      { section: "44", lawInBrief: "Amendments to certain Acts", punishment: "-", type: "structural" },
      { section: "Schedule", subSection: "1", lawInBrief: "Failure to take reasonable security safeguards / data breach", punishment: "Penalty up to ₹250 crore", type: "compliance", severity: "medium" },
      { section: "Schedule", subSection: "2", lawInBrief: "Failure to notify a personal-data breach", punishment: "Penalty up to ₹200 crore", type: "compliance", severity: "medium" },
      { section: "Schedule", subSection: "3", lawInBrief: "Non-compliance with children-data obligations", punishment: "Penalty up to ₹200 crore", type: "compliance", severity: "medium" },
      { section: "Schedule", subSection: "4", lawInBrief: "Non-compliance with significant data fiduciary duties", punishment: "Penalty up to ₹150 crore", type: "compliance", severity: "medium" },
      { section: "Schedule", subSection: "5", lawInBrief: "Breach in observance of the duties under section 15", punishment: "Penalty up to ₹10,000", type: "civil", severity: "low" },
      { section: "Schedule", subSection: "6", lawInBrief: "Breach of any term of voluntary undertaking or any other provision", punishment: "Penalty up to ₹50 crore", type: "civil", severity: "medium" }
    ],
  },
  "it-intermediary-rules-2021": {
    oneLiner:
      "Subordinate rules under the IT Act â€” social media platforms, OTT services and digital news must run grievance redressal, comply with takedown orders and follow a Code of Ethics.",
    punishments: [
      {
        offence: "Loss of safe-harbour protection",
        punishment: "Intermediary loses Â§79 immunity â€” can be prosecuted under IT Act / BNS for user content.",
        section: "Rule 7",
      },
      {
        offence: "Failure to appoint Grievance / Compliance / Nodal officers (Significant Social Media Intermediary)",
        punishment: "Liable to action under Â§69A / Â§79; potential takedown of platform.",
        section: "Rule 4",
      },
      {
        offence: "Non-compliance with takedown order within timelines (24 / 36 hours)",
        punishment: "Loss of safe harbour + prosecution under IT Act Â§ Â§69A / Â§79.",
        section: "Rule 3(1)(d)",
      },
    ],
    sourceName: "PRS India",
    sourceUrl: "https://prsindia.org/billtrack/the-information-technology-intermediary-guidelines-and-digital-media-ethics-code-rules-2021",
    secondarySourceName: "MeitY",
    secondarySourceUrl: "https://www.meity.gov.in/content/notification-dated-25th-february-2021-gsr-139e-information-technology-intermediary",
    penaltyTable: [
      { section: "Rule 3", subSection: "1(d)", lawInBrief: "Non-compliance with takedown order within timelines (24 / 36 hours)", punishment: "Loss of safe harbour + prosecution under IT Act §69A / §79", type: "compliance", severity: "low" },
      { section: "Rule 4", subSection: "-", lawInBrief: "Failure to appoint Grievance / Compliance / Nodal officers", punishment: "Liable to action under §69A / §79; potential takedown of platform", type: "compliance", severity: "low" },
      { section: "Rule 7", subSection: "-", lawInBrief: "Loss of safe-harbour protection", punishment: "Intermediary loses §79 immunity — can be prosecuted under IT Act / BNS for user content", type: "compliance", severity: "low" }
    ],
  },

  // ============================================================
  // Intellectual Property
  // ============================================================
  "copyright-act-1957": {
    oneLiner:
      "Gives authors exclusive rights over their original books, music, films, software and art â€” and criminalises piracy.",
    punishments: [
      {
        offence: "Copyright infringement (commercial)",
        punishment: "Imprisonment 6 months â€“ 3 years + fine â‚¹50,000 â€“ â‚¹2 lakh.",
        section: "Â§63",
      },
      {
        offence: "Second / subsequent infringement",
        punishment: "Imprisonment 1 â€“ 3 years + fine â‚¹1 lakh â€“ â‚¹2 lakh.",
        section: "Â§63A",
      },
      {
        offence: "Use of infringing copy of computer programme",
        punishment: "Imprisonment 7 days â€“ 3 years + fine â‚¹50,000 â€“ â‚¹2 lakh.",
        section: "Â§63B",
      },
      {
        offence: "Circumvention of technological measures (DRM)",
        punishment: "Imprisonment up to 2 years + fine.",
        section: "Â§65A",
      },
      {
        offence: "Removal / alteration of rights-management information",
        punishment: "Imprisonment up to 2 years + fine.",
        section: "Â§65B",
      },
    ],
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Copyright_Act,_1957",
    secondarySourceName: "Copyright Office",
    secondarySourceUrl: "https://copyright.gov.in/Documents/CopyrightRules1957.pdf",
    penaltyTable: [
      { section: "13", subSection: "-", lawInBrief: "Works in which copyright subsists", punishment: "-", type: "right" },
      { section: "14", subSection: "-", lawInBrief: "Meaning of copyright", punishment: "-", type: "definition" },
      { section: "17", subSection: "-", lawInBrief: "First owner of copyright", punishment: "-", type: "right" },
      { section: "52", subSection: "-", lawInBrief: "Certain acts not to be infringement of copyright (Fair Dealing)", punishment: "-", type: "right" },
      { section: "63", subSection: "-", lawInBrief: "Copyright infringement (commercial)", punishment: "Imprisonment 6 months – 3 years + fine ₹50,000 – ₹2 lakh", type: "criminal", severity: "high" },
      { section: "63A", subSection: "-", lawInBrief: "Second / subsequent infringement", punishment: "Imprisonment 1 – 3 years + fine ₹1 lakh – ₹2 lakh", type: "criminal", severity: "high" },
      { section: "63B", subSection: "-", lawInBrief: "Use of infringing copy of computer programme", punishment: "Imprisonment 7 days – 3 years + fine ₹50,000 – ₹2 lakh", type: "criminal", severity: "high" },
      { section: "65A", subSection: "-", lawInBrief: "Circumvention of technological measures (DRM)", punishment: "Imprisonment up to 2 years + fine", type: "criminal", severity: "high" },
      { section: "65B", subSection: "-", lawInBrief: "Removal / alteration of rights-management information", punishment: "Imprisonment up to 2 years + fine", type: "criminal", severity: "high" }
    ],
  },
  "designs-act-2000": {
    oneLiner:
      "Protects the look of a product â€” shape, configuration, pattern or ornamentation â€” once registered, for up to 15 years.",
    punishments: [
      {
        offence: "Piracy of registered design",
        punishment: "Liable to pay â‚¹25,000 per contravention (max â‚¹50,000 per design) to the registered proprietor; injunction and damages.",
        section: "Â§22",
      },
      {
        offence: "Falsely marking design as registered",
        punishment: "Fine up to â‚¹500 (offence under Â§49).",
        section: "Â§49",
      },
    ],
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Designs_Act,_2000",
    secondarySourceName: "IPR India",
    secondarySourceUrl: "https://ipindia.gov.in/designs.htm",
    penaltyTable: [
      { section: "4", subSection: "-", lawInBrief: "Prohibition of registration of certain designs", punishment: "-", type: "structural" },
      { section: "5", subSection: "-", lawInBrief: "Registration of designs", punishment: "-", type: "structural" },
      { section: "11", subSection: "-", lawInBrief: "Copyright on registration", punishment: "-", type: "right" },
      { section: "22", subSection: "-", lawInBrief: "Piracy of registered design", punishment: "Liable to pay ₹25,000 per contravention (max ₹50,000 per design) to the registered proprietor; injunction and damages", type: "civil", severity: "medium" },
      { section: "49", subSection: "-", lawInBrief: "Falsely marking design as registered", punishment: "Fine up to ₹500", type: "civil", severity: "medium" }
    ],
  },
  "geographical-indications-act-1999": {
    oneLiner:
      "Protects goods linked to a geographic origin â€” like Darjeeling tea or Banarasi sari â€” from being passed off by outsiders.",
    punishments: [
      {
        offence: "Falsifying a registered GI / applying false GI to goods",
        punishment: "Imprisonment 6 months â€“ 3 years + fine â‚¹50,000 â€“ â‚¹2 lakh.",
        section: "Â§39",
      },
      {
        offence: "Selling goods to which false GI is applied",
        punishment: "Imprisonment 6 months â€“ 3 years + fine â‚¹50,000 â€“ â‚¹2 lakh.",
        section: "Â§40",
      },
      {
        offence: "Subsequent offence",
        punishment: "Imprisonment 1 â€“ 3 years + fine â‚¹1 lakh â€“ â‚¹2 lakh.",
        section: "Â§41",
      },
      {
        offence: "Falsely representing GI as registered",
        punishment: "Imprisonment up to 3 years and/or fine.",
        section: "Â§42",
      },
    ],
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Geographical_Indications_of_Goods_(Registration_and_Protection)_Act,_1999",
    secondarySourceName: "IPR India",
    secondarySourceUrl: "https://ipindia.gov.in/girs.htm",
    penaltyTable: [
      { section: "8", subSection: "-", lawInBrief: "Registration of geographical indications", punishment: "-", type: "structural" },
      { section: "21", subSection: "-", lawInBrief: "Rights conferred by registration", punishment: "-", type: "right" },
      { section: "22", subSection: "-", lawInBrief: "Infringement of registered geographical indications", punishment: "-", type: "structural" },
      { section: "39", subSection: "-", lawInBrief: "Falsifying a registered GI / applying false GI to goods", punishment: "Imprisonment 6 months – 3 years + fine ₹50,000 – ₹2 lakh", type: "criminal", severity: "high" },
      { section: "40", subSection: "-", lawInBrief: "Selling goods to which false GI is applied", punishment: "Imprisonment 6 months – 3 years + fine ₹50,000 – ₹2 lakh", type: "criminal", severity: "high" },
      { section: "41", subSection: "-", lawInBrief: "Subsequent offence", punishment: "Imprisonment 1 – 3 years + fine ₹1 lakh – ₹2 lakh", type: "criminal", severity: "high" },
      { section: "42", subSection: "-", lawInBrief: "Falsely representing GI as registered", punishment: "Imprisonment up to 3 years and/or fine", type: "criminal", severity: "high" }
    ],
  },
  "patents-act-1970": {
    oneLiner:
      "Grants a 20-year monopoly on a true invention in exchange for full public disclosure â€” and lists what cannot be patented (e.g., software per se, business methods).",
    punishments: [
      {
        offence: "Contravention of secrecy directions (national security inventions)",
        punishment: "Imprisonment up to 2 years and/or fine.",
        section: "Â§118",
      },
      {
        offence: "Falsification of entries in the Register of Patents",
        punishment: "Imprisonment up to 2 years and/or fine.",
        section: "Â§119",
      },
      {
        offence: "Unauthorised claim of patent rights / falsely marking as patented",
        punishment: "Fine up to â‚¹1 lakh.",
        section: "Â§120",
      },
      {
        offence: "Refusal / failure to supply Controller with required information",
        punishment: "Fine up to â‚¹10 lakh; continuing â€” daily fine up to â‚¹1,000.",
        section: "Â§122",
      },
    ],
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Indian_Patents_Act",
    secondarySourceName: "IPR India",
    secondarySourceUrl: "https://ipindia.gov.in/patents.htm",
    penaltyTable: [
      { section: "3", subSection: "-", lawInBrief: "What are not inventions", punishment: "-", type: "structural" },
      { section: "48", subSection: "-", lawInBrief: "Rights of patentees", punishment: "-", type: "right" },
      { section: "84", subSection: "-", lawInBrief: "Compulsory licences", punishment: "-", type: "structural" },
      { section: "118", subSection: "-", lawInBrief: "Contravention of secrecy directions (national security inventions)", punishment: "Imprisonment up to 2 years and/or fine", type: "criminal", severity: "high" },
      { section: "119", subSection: "-", lawInBrief: "Falsification of entries in the Register of Patents", punishment: "Imprisonment up to 2 years and/or fine", type: "criminal", severity: "high" },
      { section: "120", subSection: "-", lawInBrief: "Unauthorised claim of patent rights / falsely marking as patented", punishment: "Fine up to ₹1 lakh", type: "civil", severity: "medium" },
      { section: "122", subSection: "-", lawInBrief: "Refusal / failure to supply Controller with required information", punishment: "Fine up to ₹10 lakh; continuing — daily fine up to ₹1,000", type: "compliance", severity: "medium" }
    ],
  },
  "trade-marks-act-1999": {
    oneLiner:
      "Lets brands register and protect their names, logos and slogans â€” and criminalises selling fake or imitation goods under a registered mark.",
    punishments: [
      {
        offence: "Falsifying a trade mark / applying false trade mark to goods",
        punishment: "Imprisonment 6 months â€“ 3 years + fine â‚¹50,000 â€“ â‚¹2 lakh.",
        section: "Â§103",
      },
      {
        offence: "Selling goods bearing a false trade mark",
        punishment: "Imprisonment 6 months â€“ 3 years + fine â‚¹50,000 â€“ â‚¹2 lakh.",
        section: "Â§104",
      },
      {
        offence: "Subsequent conviction",
        punishment: "Imprisonment 1 â€“ 3 years + fine â‚¹1 lakh â€“ â‚¹2 lakh.",
        section: "Â§105",
      },
      {
        offence: "Falsely representing trade mark as registered",
        punishment: "Imprisonment up to 3 years and/or fine.",
        section: "Â§107",
      },
    ],
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Trade_Marks_Act,_1999",
    secondarySourceName: "IPR India",
    secondarySourceUrl: "https://ipindia.gov.in/trade-marks.htm",
    penaltyTable: [
      { section: "9", subSection: "-", lawInBrief: "Absolute grounds for refusal of registration", punishment: "-", type: "structural" },
      { section: "11", subSection: "-", lawInBrief: "Relative grounds for refusal of registration", punishment: "-", type: "structural" },
      { section: "27", subSection: "-", lawInBrief: "No action for infringement of unregistered trade mark (Passing off)", punishment: "-", type: "structural" },
      { section: "28", subSection: "-", lawInBrief: "Rights conferred by registration", punishment: "-", type: "right" },
      { section: "29", subSection: "-", lawInBrief: "Infringement of registered trade marks", punishment: "-", type: "structural" },
      { section: "103", subSection: "-", lawInBrief: "Falsifying a trade mark / applying false trade mark to goods", punishment: "Imprisonment 6 months – 3 years + fine ₹50,000 – ₹2 lakh", type: "criminal", severity: "high" },
      { section: "104", subSection: "-", lawInBrief: "Selling goods bearing a false trade mark", punishment: "Imprisonment 6 months – 3 years + fine ₹50,000 – ₹2 lakh", type: "criminal", severity: "high" },
      { section: "105", subSection: "-", lawInBrief: "Subsequent conviction", punishment: "Imprisonment 1 – 3 years + fine ₹1 lakh – ₹2 lakh", type: "criminal", severity: "high" },
      { section: "107", subSection: "-", lawInBrief: "Falsely representing trade mark as registered", punishment: "Imprisonment up to 3 years and/or fine", type: "criminal", severity: "high" }
    ],
  },

  // ============================================================
  // Company Formation & Governance
  // ============================================================
  "companies-act-2013": {
    oneLiner:
      "The full life-cycle law for Indian companies â€” incorporation, share capital, directors, audit, CSR, mergers, oppression / mismanagement and winding up.",
    punishments: [
      {
        offence: "Fraud (involving public interest / amount â‰¥ â‚¹10 lakh or 1% of turnover)",
        punishment: "Imprisonment 6 months â€“ 10 years + fine = amount of fraud (up to 3Ã—).",
        section: "Â§447",
      },
      {
        offence: "False statement in any return / report / certificate",
        punishment: "Fraud penalties under Â§447.",
        section: "Â§448",
      },
      {
        offence: "Failure to file annual return / financial statement",
        punishment: "Company: fine â‚¹10,000 + â‚¹100/day (max â‚¹2 lakh); officer in default: fine â‚¹10,000 + â‚¹100/day (max â‚¹50,000).",
        section: "Â§92(5), Â§137(3)",
      },
      {
        offence: "Contravention with no specific penalty",
        punishment: "Fine up to â‚¹10,000 + â‚¹1,000/day (max â‚¹2 lakh for company / â‚¹50,000 for officer).",
        section: "Â§450",
      },
      {
        offence: "Director or KMP making default in CSR",
        punishment: "Penalty up to â‚¹2 lakh on company + â‚¹50,000 on officer (CSR shifted from criminal to civil by 2020 amendment).",
        section: "Â§135(7)",
      },
    ],
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Companies_Act_2013",
    secondarySourceName: "MCA",
    secondarySourceUrl: "https://www.mca.gov.in/content/mca/global/en/acts-rules/ebooks/acts.html",
    penaltyTable: [
      { section: "3", subSection: "-", lawInBrief: "Formation of company", punishment: "-", type: "structural" },
      { section: "7", subSection: "-", lawInBrief: "Incorporation of company", punishment: "-", type: "structural" },
      { section: "135", subSection: "-", lawInBrief: "Corporate Social Responsibility (CSR)", punishment: "-", type: "structural" },
      { section: "139", subSection: "-", lawInBrief: "Appointment of Auditors", punishment: "-", type: "structural" },
      { section: "149", subSection: "-", lawInBrief: "Board of Directors (Independent Directors, Women Director)", punishment: "-", type: "structural" },
      { section: "166", subSection: "-", lawInBrief: "Duties of Directors", punishment: "-", type: "structural" },
      { section: "230", subSection: "-", lawInBrief: "Compromise, arrangements and amalgamations (M&A)", punishment: "-", type: "structural" },
      { section: "241", subSection: "-", lawInBrief: "Oppression and mismanagement", punishment: "-", type: "structural" },
      { section: "447", subSection: "-", lawInBrief: "Fraud (involving public interest / amount ≥ ₹10 lakh or 1% of turnover)", punishment: "Imprisonment 6 months – 10 years + fine = amount of fraud (up to 3×)", type: "criminal", severity: "high" },
      { section: "448", subSection: "-", lawInBrief: "False statement in any return / report / certificate", punishment: "Fraud penalties under §447", type: "compliance", severity: "low" },
      { section: "92(5), 137(3)", subSection: "-", lawInBrief: "Failure to file annual return / financial statement", punishment: "Company: fine ₹10,000 + ₹100/day (max ₹2 lakh); officer in default: fine ₹10,000 + ₹100/day (max ₹50,000)", type: "compliance", severity: "low" },
      { section: "450", subSection: "-", lawInBrief: "Contravention with no specific penalty", punishment: "Fine up to ₹10,000 + ₹1,000/day (max ₹2 lakh for company / ₹50,000 for officer)", type: "civil", severity: "low" },
      { section: "135(7)", subSection: "-", lawInBrief: "Director or KMP making default in CSR", punishment: "Penalty up to ₹2 lakh on company + ₹50,000 on officer (CSR shifted from criminal to civil by 2020 amendment)", type: "compliance", severity: "medium" }
    ],
  },
  "ibc-2016": {
    oneLiner:
      "A 330-day, time-bound process to resolve stressed companies and individuals through the NCLT and insolvency professionals â€” or liquidate them.",
    punishments: [
      {
        offence: "Concealment of property / fraud by a corporate debtor's officer",
        punishment: "Imprisonment 3 â€“ 5 years and fine â‚¹1 lakh â€“ â‚¹1 crore.",
        section: "Â§68",
      },
      {
        offence: "Transactions defrauding creditors",
        punishment: "Imprisonment 1 â€“ 5 years and fine â‚¹1 lakh â€“ â‚¹1 crore.",
        section: "Â§69",
      },
      {
        offence: "Furnishing false information in application",
        punishment: "Imprisonment 3 â€“ 5 years and fine â‚¹1 lakh â€“ â‚¹1 crore.",
        section: "Â§75, Â§77",
      },
      {
        offence: "Insolvency professional discharging duties fraudulently",
        punishment: "Imprisonment up to 6 months and/or fine â‚¹1 lakh â€“ â‚¹5 lakh.",
        section: "Â§70",
      },
      {
        offence: "Contravention with no specific punishment",
        punishment: "Fine â‚¹1 lakh â€“ â‚¹2 crore.",
        section: "Â§235A",
      },
    ],
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Insolvency_and_Bankruptcy_Code,_2016",
    secondarySourceName: "IBBI",
    secondarySourceUrl: "https://ibbi.gov.in/legal-framework/act",
    penaltyTable: [
      { section: "7", subSection: "-", lawInBrief: "Initiation of CIRP by financial creditor", punishment: "-", type: "structural" },
      { section: "9", subSection: "-", lawInBrief: "Initiation of CIRP by operational creditor", punishment: "-", type: "structural" },
      { section: "12", subSection: "-", lawInBrief: "Time-limit for completion of insolvency resolution process", punishment: "-", type: "structural" },
      { section: "14", subSection: "-", lawInBrief: "Moratorium", punishment: "-", type: "structural" },
      { section: "29A", subSection: "-", lawInBrief: "Persons not eligible to be resolution applicant", punishment: "-", type: "structural" },
      { section: "68", subSection: "-", lawInBrief: "Concealment of property / fraud by a corporate debtor's officer", punishment: "Imprisonment 3 – 5 years and fine ₹1 lakh – ₹1 crore", type: "criminal", severity: "high" },
      { section: "69", subSection: "-", lawInBrief: "Transactions defrauding creditors", punishment: "Imprisonment 1 – 5 years and fine ₹1 lakh – ₹1 crore", type: "criminal", severity: "high" },
      { section: "75, 77", subSection: "-", lawInBrief: "Furnishing false information in application", punishment: "Imprisonment 3 – 5 years and fine ₹1 lakh – ₹1 crore", type: "criminal", severity: "high" },
      { section: "70", subSection: "-", lawInBrief: "Insolvency professional discharging duties fraudulently", punishment: "Imprisonment up to 6 months and/or fine ₹1 lakh – ₹5 lakh", type: "criminal", severity: "high" },
      { section: "235A", subSection: "-", lawInBrief: "Contravention with no specific punishment", punishment: "Fine ₹1 lakh – ₹2 crore", type: "civil", severity: "medium" }
    ],
  },
  "llp-act-2008": {
    oneLiner:
      "Creates the LLP â€” a body corporate that gives partners limited liability and perpetual succession, governed by an LLP agreement.",
    punishments: [
      {
        offence: "Carrying on business with intent to defraud creditors",
        punishment: "Imprisonment up to 2 years + fine â‚¹50,000 â€“ â‚¹5 lakh.",
        section: "Â§30",
      },
      {
        offence: "False statement in any document filed with Registrar",
        punishment: "Imprisonment up to 2 years + fine â‚¹1 lakh â€“ â‚¹5 lakh.",
        section: "Â§37",
      },
      {
        offence: "Failure to file annual return / statement of accounts",
        punishment: "Fine â‚¹25,000 â€“ â‚¹5 lakh on LLP + â‚¹10,000 â€“ â‚¹1 lakh on each designated partner.",
        section: "Â§35, Â§34",
      },
      {
        offence: "Default in maintaining proper books of account",
        punishment: "Fine â‚¹25,000 â€“ â‚¹5 lakh on LLP + â‚¹10,000 â€“ â‚¹1 lakh on designated partner.",
        section: "Â§34",
      },
    ],
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Limited_Liability_Partnership_Act,_2008",
    secondarySourceName: "MCA",
    secondarySourceUrl: "https://www.mca.gov.in/content/mca/global/en/acts-rules/ebooks/acts.html",
    penaltyTable: [
      { section: "11", subSection: "-", lawInBrief: "Incorporation document", punishment: "-", type: "structural" },
      { section: "23", subSection: "-", lawInBrief: "Relationship of partners", punishment: "-", type: "structural" },
      { section: "27", subSection: "-", lawInBrief: "Extent of liability of LLP", punishment: "-", type: "structural" },
      { section: "55", subSection: "-", lawInBrief: "Conversion from firm to LLP", punishment: "-", type: "structural" },
      { section: "30", subSection: "-", lawInBrief: "Carrying on business with intent to defraud creditors", punishment: "Imprisonment up to 2 years + fine ₹50,000 – ₹5 lakh", type: "criminal", severity: "high" },
      { section: "37", subSection: "-", lawInBrief: "False statement in any document filed with Registrar", punishment: "Imprisonment up to 2 years + fine ₹1 lakh – ₹5 lakh", type: "criminal", severity: "high" },
      { section: "35, 34", subSection: "-", lawInBrief: "Failure to file annual return / statement of accounts", punishment: "Fine ₹25,000 – ₹5 lakh on LLP + ₹10,000 – ₹1 lakh on each designated partner", type: "compliance", severity: "low" },
      { section: "34", subSection: "-", lawInBrief: "Default in maintaining proper books of account", punishment: "Fine ₹25,000 – ₹5 lakh on LLP + ₹10,000 – ₹1 lakh on designated partner", type: "compliance", severity: "low" }
    ],
  },
  "partnership-act-1932": {
    oneLiner:
      "Governs traditional partnerships â€” what makes one, what the partners owe each other, and what happens on dissolution.",
    punishments: [
      {
        offence: "Suing on behalf of an unregistered firm",
        punishment: "Suit barred â€” partner cannot enforce contractual rights against third parties or the firm.",
        section: "Â§69",
      },
      {
        offence: "Partner using firm property for personal benefit",
        punishment: "Must account to the firm for the benefit (civil remedy).",
        section: "Â§16",
      },
      {
        offence: "Partner competing with the firm in similar business",
        punishment: "Must account for and pay over all profits to the firm.",
        section: "Â§16(b)",
      },
    ],
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Indian_Partnership_Act_1932",
    secondarySourceName: "India Code",
    secondarySourceUrl: "https://www.indiacode.nic.in/handle/123456789/2382",
    penaltyTable: [
      { section: "4", subSection: "-", lawInBrief: "Definition of partnership, partner, firm and firm name", punishment: "-", type: "definition" },
      { section: "9", subSection: "-", lawInBrief: "General duties of partners", punishment: "-", type: "structural" },
      { section: "13", subSection: "-", lawInBrief: "Mutual rights and liabilities", punishment: "-", type: "right" },
      { section: "30", subSection: "-", lawInBrief: "Minors admitted to the benefits of partnership", punishment: "-", type: "structural" },
      { section: "58", subSection: "-", lawInBrief: "Application for registration", punishment: "-", type: "procedural" },
      { section: "69", subSection: "-", lawInBrief: "Suing on behalf of an unregistered firm", punishment: "Suit barred — partner cannot enforce contractual rights against third parties or the firm", type: "compliance", severity: "low" },
      { section: "16", subSection: "-", lawInBrief: "Partner using firm property for personal benefit", punishment: "Must account to the firm for the benefit (civil remedy)", type: "compliance", severity: "low" },
      { section: "16(b)", subSection: "-", lawInBrief: "Partner competing with the firm in similar business", punishment: "Must account for and pay over all profits to the firm", type: "compliance", severity: "low" }
    ],
  },
};

/**
 * Helper: get the brief for a slug (or `undefined` if none exists).
 */
export function getBrief(slug: string) {
  return actBriefs[slug];
}

/**
 * Helper: does this Act have a brief?
 */
export function hasBrief(slug: string): boolean {
  return slug in actBriefs;
}


