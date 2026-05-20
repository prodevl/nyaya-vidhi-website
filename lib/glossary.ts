/**
 * A friendly Indian-law glossary.
 *
 * Each entry is written so a 15-year-old can read it.
 * Use the `simple` field everywhere except a "formal definition" section.
 */

export type GlossaryEntry = {
  term: string;
  hindi?: string;          // Devanagari name where helpful
  short: string;           // 5-12 word ultra-short meaning
  simple: string;          // 1–2 sentence plain English
  example?: string;        // a one-line example
  alsoSee?: string[];      // related terms
  tag: string;             // category for filtering
};

export const glossary: GlossaryEntry[] = [
  // Constitutional
  {
    term: "Fundamental Rights",
    hindi: "मौलिक अधिकार",
    short: "Rights every citizen has — from the Constitution.",
    simple:
      "These are six basic rights given to every Indian by Part III of the Constitution — equality, freedom, against exploitation, religion, culture, and constitutional remedies. The State cannot take them away by an ordinary law.",
    example: "Right to free speech under Article 19(1)(a) is a fundamental right.",
    alsoSee: ["Writ", "Article 21"],
    tag: "Constitution",
  },
  {
    term: "Writ",
    hindi: "रिट",
    short: "A direct order from the High Court or Supreme Court.",
    simple:
      "When a fundamental right is violated, you can ask the High Court (Article 226) or the Supreme Court (Article 32) for a writ — a fast, direct order. There are five — Habeas Corpus, Mandamus, Prohibition, Certiorari, and Quo Warranto.",
    example: "A habeas corpus writ asks the court to produce a person held illegally.",
    tag: "Constitution",
  },
  {
    term: "Article 21",
    short: "Right to life — and dignity, privacy, and so much more.",
    simple:
      "A short Article that the Supreme Court has read very widely — including the right to privacy, livelihood, shelter, education, health, fair trial, clean environment and dying with dignity.",
    tag: "Constitution",
  },
  {
    term: "Basic Structure Doctrine",
    short: "Parliament cannot change the soul of the Constitution.",
    simple:
      "Even with a 2/3 majority, Parliament cannot amend things like democracy, secularism, judicial review, or federalism. Born in the Kesavananda Bharati case, 1973.",
    tag: "Constitution",
  },
  // Criminal
  {
    term: "FIR",
    hindi: "प्राथमिकी",
    short: "First Information Report — your formal complaint at a police station.",
    simple:
      "It is the first written record of a cognizable offence. Police MUST register it for serious offences. Now governed by Section 173 of the BNSS, 2023. Ask for a free copy — it is your right.",
    alsoSee: ["Cognizable Offence", "Zero FIR"],
    tag: "Criminal",
  },
  {
    term: "Zero FIR",
    short: "An FIR any police station can register, regardless of where the crime happened.",
    simple:
      "If the crime took place in Pune but you reach a station in Delhi, the Delhi station must still register a Zero FIR and forward it to Pune. Important in urgent cases — especially against women.",
    tag: "Criminal",
  },
  {
    term: "Cognizable Offence",
    short: "Serious crime — police can arrest without a warrant.",
    simple:
      "Crimes like theft, assault, rape, murder. Police do not need permission from the magistrate to investigate or arrest. FIR registration is mandatory.",
    alsoSee: ["Non-Cognizable Offence", "FIR"],
    tag: "Criminal",
  },
  {
    term: "Non-Cognizable Offence",
    short: "Minor offence — police need court permission first.",
    simple:
      "Like defamation, public nuisance, simple assault. Police make a 'Non-Cognizable Report' (NCR), and need the magistrate's order to investigate or arrest.",
    tag: "Criminal",
  },
  {
    term: "Bail",
    hindi: "जमानत",
    short: "Release of an arrested person while the case continues.",
    simple:
      "Bail can be 'regular' (after arrest), 'anticipatory' (before arrest, in non-bailable cases), or 'interim' (short-term). For bailable offences, it is your right — even at the police station.",
    alsoSee: ["Anticipatory Bail", "Default Bail"],
    tag: "Criminal",
  },
  {
    term: "Anticipatory Bail",
    short: "Bail granted before arrest, in non-bailable cases.",
    simple:
      "If you fear arrest in a false or unfair case, apply to the Sessions Court or High Court under Section 482 of the BNSS. The court may add conditions like surrendering passport or cooperating with investigation.",
    tag: "Criminal",
  },
  {
    term: "Default Bail",
    short: "Bail because the police didn't file a chargesheet in time.",
    simple:
      "If the chargesheet is not filed within 60 or 90 days (depending on the offence), you have an automatic right to be released on bail under Section 187(3) BNSS.",
    tag: "Criminal",
  },
  {
    term: "Chargesheet",
    hindi: "आरोप-पत्र",
    short: "The police's final report — after investigation, sent to the court.",
    simple:
      "It contains the case facts, statements, evidence and the sections of law that apply. If the police find no case, they file a 'closure report' instead.",
    tag: "Criminal",
  },
  {
    term: "Summons & Warrant",
    short: "Two ways the court calls you.",
    simple:
      "A summons is a written notice asking you to come on a date. A warrant is more serious — it allows the police to arrest and produce you. A 'non-bailable warrant' is the strictest.",
    tag: "Criminal",
  },
  {
    term: "Bharatiya Nyaya Sanhita (BNS)",
    hindi: "भारतीय न्याय संहिता",
    short: "Replaced the IPC in 2023.",
    simple:
      "India's new general criminal law. It rewrites old offences, adds new ones (organised crime, mob lynching, terrorism), and reorganises sections. Came into force on 1 July 2024.",
    alsoSee: ["BNSS", "BSA"],
    tag: "Criminal",
  },
  {
    term: "Bharatiya Nagarik Suraksha Sanhita (BNSS)",
    short: "Replaced the CrPC in 2023.",
    simple:
      "The new criminal procedure law — covering arrest, FIR, investigation, bail, trial, judgment, appeal. Adds e-FIR, video-based recording, and tighter timelines.",
    tag: "Criminal",
  },
  {
    term: "Bharatiya Sakshya Adhiniyam (BSA)",
    short: "Replaced the Indian Evidence Act, 1872.",
    simple:
      "Lays down what evidence is admissible and how it should be proved. Explicitly recognises electronic and digital evidence as primary.",
    tag: "Criminal",
  },
  // Civil & Procedure
  {
    term: "Plaintiff & Defendant",
    short: "The one who sues, and the one who is sued.",
    simple:
      "The 'plaintiff' files the case. The 'defendant' is the one against whom the case is filed. In criminal cases the words are 'complainant' and 'accused'.",
    tag: "Civil",
  },
  {
    term: "Cause of Action",
    short: "The reason for going to court — a bundle of facts.",
    simple:
      "All the facts the plaintiff must show to ask for a remedy. If there is no clear cause of action, the case can be dismissed at the very first step.",
    tag: "Civil",
  },
  {
    term: "Jurisdiction",
    hindi: "क्षेत्राधिकार",
    short: "Whether the court has the power to hear your case.",
    simple:
      "Two checks — (a) place of the cause of action (territorial), and (b) money value / subject matter (pecuniary). If both fit, the court has jurisdiction.",
    tag: "Civil",
  },
  {
    term: "Limitation",
    hindi: "परिसीमा",
    short: "The time window inside which you must file the case.",
    simple:
      "Set by the Limitation Act, 1963 — e.g., 3 years for most money suits, 12 years for recovery of immovable property, 1 year for defamation. After the window, the right is usually lost.",
    tag: "Civil",
  },
  {
    term: "Injunction",
    short: "A court order to do something — or stop doing it.",
    simple:
      "'Temporary' injunction is granted during the case; 'permanent' injunction is part of the final judgment. Granted under the Specific Relief Act and Order 39 CPC.",
    tag: "Civil",
  },
  {
    term: "Decree & Order",
    short: "The court's final word, and its in-between rulings.",
    simple:
      "A 'decree' decides the rights of the parties (final). An 'order' decides interim matters (procedural). Different appeal routes apply to each.",
    tag: "Civil",
  },
  {
    term: "Vakalatnama",
    hindi: "वकालतनामा",
    short: "A short paper that lets a lawyer represent you.",
    simple:
      "Without it, no lawyer can appear in court for you. Sign it carefully — read who the lawyer is and which case.",
    tag: "Procedure",
  },
  {
    term: "Affidavit",
    hindi: "शपथ-पत्र",
    short: "A sworn written statement.",
    simple:
      "A statement made on oath, signed before a notary. Lying in an affidavit is a separate criminal offence.",
    tag: "Procedure",
  },
  {
    term: "Vakil / Advocate / Senior Advocate",
    short: "Three rungs of legal representation.",
    simple:
      "Anyone with a law degree and a Bar Council registration is an 'advocate'. A 'senior advocate' is designated by the High Court or Supreme Court for experience. 'Vakil' is the everyday Hindi/Urdu word for an advocate.",
    tag: "Procedure",
  },
  {
    term: "Lok Adalat",
    hindi: "लोक अदालत",
    short: "People's court — quick, free, and final.",
    simple:
      "An informal forum for settling small disputes (traffic challans, cheque bounce, bank loans, family) by consent. The award is binding and not appealable.",
    tag: "Procedure",
  },
  {
    term: "Plea Bargaining",
    short: "An admit-and-reduce-sentence option.",
    simple:
      "Available for some offences under Chapter XXIII BNSS — the accused admits guilt in return for a lower sentence. The victim must agree. Not available for crimes against women or children below 14.",
    tag: "Procedure",
  },
  // Contract / Commercial
  {
    term: "Consideration",
    short: "Whatever each side gives in a contract.",
    simple:
      "It can be money, a service, or even a promise. Without consideration on both sides, a contract is usually not enforceable.",
    tag: "Contract",
  },
  {
    term: "Specific Performance",
    short: "Forcing someone to actually do what they promised.",
    simple:
      "When money won't fix it (e.g., a land sale), the court orders the defaulting party to perform the contract. Stronger after the 2018 amendment to the Specific Relief Act.",
    tag: "Contract",
  },
  {
    term: "Force Majeure",
    short: "Acts of God / unforeseen events excuse a contract.",
    simple:
      "A clause that suspends or ends a contract when something extraordinary happens — war, earthquake, pandemic. Must be in the contract.",
    tag: "Contract",
  },
  {
    term: "Liquidated Damages",
    short: "Pre-agreed amount paid for a breach.",
    simple:
      "Section 74 of the Contract Act allows reasonable pre-fixed damages — courts will trim it if it looks like a penalty.",
    tag: "Contract",
  },
  {
    term: "Arbitration",
    hindi: "मध्यस्थता",
    short: "Settling a commercial dispute privately, without court.",
    simple:
      "Both sides agree to a neutral arbitrator. Faster, more confidential. The 'award' has the force of a court decree under the Arbitration and Conciliation Act, 1996.",
    tag: "Contract",
  },
  {
    term: "MoU (Memorandum of Understanding)",
    short: "A 'we-agree-to-agree' document.",
    simple:
      "Not always legally binding — depends on the language and intent. Best for early-stage talks before a full contract.",
    tag: "Contract",
  },
  // Money / Tax
  {
    term: "TDS",
    short: "Tax Deducted at Source — paid by the deductor.",
    simple:
      "When someone (employer, bank, builder) pays you, they cut tax and deposit it with the government. You see it in Form 26AS and AIS — and can claim credit while filing returns.",
    tag: "Tax",
  },
  {
    term: "Form 26AS",
    short: "Your tax credit statement.",
    simple:
      "A consolidated annual statement showing all TDS / TCS, advance tax, refunds and high-value transactions tied to your PAN.",
    tag: "Tax",
  },
  {
    term: "Section 80C",
    short: "Most popular deduction — up to ₹1.5 lakh.",
    simple:
      "Covers PPF, EPF, ELSS, life insurance premium, NPS, home loan principal, children's school fees, and more. Only under the old regime.",
    tag: "Tax",
  },
  {
    term: "HRA",
    short: "House Rent Allowance — partly tax-free.",
    simple:
      "The exemption is the least of three values — actual HRA, rent minus 10% of salary, and 50%/40% of salary (metro/non-metro). Old regime only.",
    alsoSee: ["Section 80C"],
    tag: "Tax",
  },
  {
    term: "Capital Gains — LTCG / STCG",
    short: "Profit on selling an asset.",
    simple:
      "Short-term if held under the threshold (e.g., 12 months for listed equity), long-term if held longer. Rates and indexation differ — and changed materially in Budget 2024.",
    tag: "Tax",
  },
  {
    term: "GST",
    short: "Goods and Services Tax — one indirect tax across India.",
    simple:
      "Charged at every value-add. Slabs are 0, 5, 12, 18 and 28%. Input Tax Credit lets a business deduct GST paid on purchases from GST collected on sales.",
    tag: "Tax",
  },
  {
    term: "ITR",
    short: "Income Tax Return — the yearly summary filing.",
    simple:
      "Mandatory if income crosses the basic exempt limit or you have any of several specified transactions. Due date is usually 31 July for individuals.",
    tag: "Tax",
  },
  // Family
  {
    term: "Maintenance",
    short: "Monthly support for a dependent.",
    simple:
      "Wife (even after divorce, if not remarried), minor children and old parents who cannot maintain themselves can claim it. Section 144 of BNSS is religion-neutral.",
    tag: "Family",
  },
  {
    term: "Streedhan",
    hindi: "स्त्रीधन",
    short: "A woman's own property — fully hers.",
    simple:
      "Includes gifts at marriage, jewellery, savings, salary. Her husband or in-laws have no right over it. Demanding or refusing to return it can be a criminal offence.",
    tag: "Family",
  },
  {
    term: "Coparcener",
    short: "Member of a Hindu joint family with a birth-right.",
    simple:
      "Since the 2005 amendment, daughters are coparceners by birth — equal shares in ancestral property.",
    tag: "Family",
  },
  // Consumer
  {
    term: "Deficiency in Service",
    short: "Poor service — covered by consumer law.",
    simple:
      "Any shortcoming, imperfection or inadequacy in the quality, nature and manner of performance of a service. You can claim refund and compensation under the Consumer Protection Act, 2019.",
    tag: "Consumer",
  },
  {
    term: "Product Liability",
    short: "Company is liable for harm caused by a faulty product.",
    simple:
      "Introduced by the 2019 Act — the manufacturer, seller and service provider can all be made liable for personal injury, property damage and mental distress.",
    tag: "Consumer",
  },
  {
    term: "Class Action",
    short: "Many consumers, one common case.",
    simple:
      "Section 35 of the Consumer Protection Act allows a group with a common interest to file a single complaint — saves cost and gives more bargaining power.",
    tag: "Consumer",
  },
  // Property
  {
    term: "Sale Deed",
    hindi: "विक्रय-पत्र",
    short: "The document that actually transfers ownership.",
    simple:
      "Signed, registered, and stamped — this is the legal proof of who owns the property. Different from a 'sale agreement' (which is only a promise to sell).",
    tag: "Property",
  },
  {
    term: "Encumbrance Certificate (EC)",
    short: "A clean-title record from the registrar.",
    simple:
      "Shows all transactions on a property over a period — sales, mortgages, court attachments. A clean EC is essential before buying.",
    tag: "Property",
  },
  {
    term: "Mutation",
    hindi: "नामांतरण",
    short: "Updating municipal records in your name after a sale.",
    simple:
      "Without mutation, you may still be the owner — but property tax records show the old name. Always do mutation after registration.",
    tag: "Property",
  },
  {
    term: "RERA",
    short: "Real Estate Regulation Authority — the buyer's shield.",
    simple:
      "Under the 2016 Act, every project of a certain size must register. The buyer gets remedies — refund with interest, possession with interest, or compensation.",
    tag: "Property",
  },
  // IP / Digital
  {
    term: "Trademark",
    short: "A logo, word or design that identifies your brand.",
    simple:
      "Registered for 10 years (renewable) under the Trade Marks Act, 1999. Use the ™ before registration and ® after.",
    tag: "IP",
  },
  {
    term: "Patent",
    short: "A 20-year monopoly on a new invention.",
    simple:
      "Granted for novel, useful and non-obvious inventions. Software per se is not patentable in India — but technical inventions involving software can be.",
    tag: "IP",
  },
  {
    term: "Copyright",
    short: "Automatic right over your original creative work.",
    simple:
      "Books, music, films, software code, art. Lasts up to 60 years after the author's death. Registration is not mandatory but useful as evidence.",
    tag: "IP",
  },
  {
    term: "DPDP Act, 2023",
    short: "India's first standalone data privacy law.",
    simple:
      "Rights to access, correct, delete and complain about your personal data. Strict consent, purpose-limit and breach-reporting rules. Penalty up to ₹250 crore.",
    tag: "IP",
  },
  // Misc
  {
    term: "Public Interest Litigation (PIL)",
    short: "A case filed for the public, not for yourself.",
    simple:
      "Any citizen can move the Supreme Court (Article 32) or a High Court (Article 226) for a matter affecting the public — pollution, prisoner rights, education.",
    tag: "Constitution",
  },
  {
    term: "Lok Sabha & Rajya Sabha",
    short: "House of the People & Council of States.",
    simple:
      "Lok Sabha is directly elected (5-year term). Rajya Sabha is elected by State legislatures (rolling 6-year terms). A Bill usually needs both to become law.",
    tag: "Constitution",
  },
  {
    term: "Doctrine of Pith and Substance",
    short: "Look at the soul of the law, not just the words.",
    simple:
      "When a law overlaps Centre and State lists, courts ask — what is the 'true nature' of the law? It is judged by that, not by incidental encroachments.",
    tag: "Constitution",
  },
];

export const glossaryTags = Array.from(new Set(glossary.map((g) => g.tag))).sort();
