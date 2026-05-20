import { Statute } from "../_types";

export const bnss2023: Statute = {
  meta: {
    slug: "bharatiya-nagarik-suraksha-sanhita-2023",
    categorySlug: "criminal-laws",
    shortName: "Bharatiya Nagarik Suraksha Sanhita (BNSS)",
    fullName: "The Bharatiya Nagarik Suraksha Sanhita, 2023",
    year: 2023,
    sanskrit: "भारतीय नागरिक सुरक्षा संहिता",
    tagline: "The procedural code — replacing the CrPC.",
    totalSections: 531,
    totalChapters: 39,
    coverage: "mvp",
    preamble: "An Act to consolidate and amend the law relating to criminal procedure.",
    summary:
      "Replaces the Code of Criminal Procedure, 1973. Restructures arrest, investigation, FIR, bail, trial, sentencing and victim rights.",
    tier: 1,
    sourcePdf: {
      pdfPath: "/pdfs/Criminal%20Laws%20pdf/BNSS%202023%20CRIMINAL%20LAWS.pdf",
      pdfFile: "BNSS 2023 CRIMINAL LAWS.pdf",
      pdfPage: 1
    }
  },
  chapters: [],
  penaltyTable: [
    {
      section: "35",
      subSection: "-",
      lawInBrief: "Arrest without warrant by police",
      punishment: "-",
      type: "procedural",
      actionRequired: "Demand to see the police officer's identification and the written grounds for arrest.",
      authority: "Police Officer"
    },
    {
      section: "173",
      subSection: "-",
      lawInBrief: "Information in cognizable cases (FIR)",
      punishment: "-",
      type: "right",
      actionRequired: "You can now file an e-FIR. Police must register it within 3 days and provide a free copy to the informant.",
      timeLimit: "E-FIR must be physically signed within 3 days to become an official record."
    },
    {
      section: "481",
      subSection: "-",
      lawInBrief: "Bail in bailable and non-bailable offences (Regular Bail)",
      punishment: "-",
      type: "right",
      actionRequired: "If arrested, file a regular bail application through your advocate.",
      authority: "Magistrate / Sessions Court"
    },
    {
      section: "482",
      subSection: "-",
      lawInBrief: "Anticipatory Bail",
      punishment: "-",
      type: "right",
      actionRequired: "If you apprehend arrest in a non-bailable case, apply for anticipatory bail immediately to prevent arrest.",
      authority: "Sessions Court / High Court"
    },
    {
      section: "47",
      subSection: "-",
      lawInBrief: "Right to be informed of grounds of arrest and of bail",
      punishment: "-",
      type: "right",
      actionRequired: "Insist that the police communicate full grounds of arrest in writing, and inform you whether the offence is bailable.",
      authority: "Arresting Officer"
    },
    {
      section: "58",
      subSection: "-",
      lawInBrief: "No detention beyond 24 hours without a Magistrate",
      punishment: "-",
      type: "right",
      actionRequired: "If not produced before a Magistrate within 24 hours of arrest, excluding travel time, the detention is illegal.",
      timeLimit: "24 hours from arrest",
      authority: "Nearest Judicial Magistrate"
    },
    {
      section: "187",
      subSection: "3",
      lawInBrief: "Default bail when charge-sheet is not filed in time",
      punishment: "-",
      type: "right",
      actionRequired: "If police fail to file the charge-sheet within the statutory limit, immediately apply for default bail before the Magistrate.",
      timeLimit: "60 days or 90 days, depending on the offence",
      authority: "Magistrate"
    },
    {
      section: "193",
      subSection: "-",
      lawInBrief: "Police report on completion of investigation",
      punishment: "-",
      type: "procedural",
      actionRequired: "After investigation, police file the final report before the Magistrate as a charge-sheet or closure report.",
      authority: "Officer in Charge / Magistrate"
    },
    {
      section: "223",
      subSection: "-",
      lawInBrief: "Accused must be heard before cognizance on a complaint",
      punishment: "-",
      type: "procedural",
      actionRequired: "If a private complaint is filed against you, the Magistrate must give you an opportunity of being heard before taking cognizance.",
      authority: "Magistrate"
    },
    {
      section: "262",
      subSection: "-",
      lawInBrief: "Plea bargaining for a lighter sentence",
      punishment: "-",
      type: "procedural",
      actionRequired: "For eligible offences, apply for plea bargaining to resolve the case with a reduced sentence.",
      authority: "Trial Court"
    },
    {
      section: "356",
      subSection: "-",
      lawInBrief: "Trial in absentia of a proclaimed offender",
      punishment: "-",
      type: "procedural",
      actionRequired: "Courts can proceed against absconding accused who have been declared proclaimed offenders after the required notice.",
      authority: "Trial Court"
    },
    {
      section: "398",
      subSection: "-",
      lawInBrief: "Witness Protection Scheme",
      punishment: "-",
      type: "right",
      actionRequired: "If you fear threats for testifying, seek protection under the State Witness Protection Scheme.",
      authority: "State Government / Trial Court"
    },
    {
      section: "530",
      subSection: "-",
      lawInBrief: "Trials and proceedings in electronic mode",
      punishment: "-",
      type: "structural",
      actionRequired: "Proceedings, evidence, summons and other court steps can be handled through electronic mode where permitted.",
      authority: "Concerned Court"
    }
  ]
};
