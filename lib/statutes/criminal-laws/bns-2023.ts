import { Statute } from "../_types";

export const bns2023: Statute = {
  meta: {
    slug: "bns-2023",
    categorySlug: "criminal-laws",
    shortName: "BNS 2023",
    fullName: "The Bharatiya Nyaya Sanhita, 2023",
    year: 2023,
    tier: 1,
    tagline: "India's new substantive criminal code — replacing the IPC.",
    totalSections: 358,
    totalChapters: 20,
    coverage: "mvp",
    summary:
      "The Bharatiya Nyaya Sanhita (BNS) replaces the Indian Penal Code (IPC), 1860. It modernises criminal law, introduces new offences like organised crime and mob lynching, deletes archaic laws like sedition (replacing it with acts endangering sovereignty), and emphasises community service as a punishment.",
    preamble:
      "An Act to consolidate and amend the provisions relating to offences and for matters connected therewith or incidental thereto.",
    sourcePdf: {
      pdfFile: "Bharatiya_Nyaya_Sanhita_2023.pdf",
      pdfPath: "/pdfs/bns-2023.pdf",
      pdfPage: 1,
    },
  },
  chapters: [], // We'll keep chapters empty for now to save space, but it's an Authored act format.
  penaltyTable: [
    {
      section: "14",
      subSection: "-",
      lawInBrief: "Right of private defence (Self-defence)",
      punishment: "-",
      type: "right",
      actionRequired: "Allows you to use proportionate force to protect yourself or others from bodily harm.",
      defences: "Absolute defence against criminal charges if the force used was necessary and proportionate to the threat."
    },
    {
      section: "69",
      subSection: "-",
      lawInBrief: "Sexual intercourse by employing deceitful means",
      punishment: "Imprisonment up to 10 years + fine",
      type: "criminal",
      severity: "high",
      bailStatus: "Non-Bailable, Cognizable",
      actionRequired: "Report to police immediately. Covers cases of sex under false promise to marry or false identity.",
      authority: "Police (FIR) / Sessions Court"
    },
    {
      section: "103",
      subSection: "-",
      lawInBrief: "Punishment for Murder (Replaces IPC 302)",
      punishment: "Death or imprisonment for life + fine",
      type: "criminal",
      severity: "high",
      bailStatus: "Non-Bailable, Cognizable",
      defences: "Exceptions include sudden provocation, private defence, or acting in good faith as a public servant."
    },
    {
      section: "103(2)",
      subSection: "-",
      lawInBrief: "Mob Lynching (Murder by a group of 5 or more on specific grounds)",
      punishment: "Death or imprisonment for life + fine",
      type: "criminal",
      severity: "high",
      bailStatus: "Non-Bailable, Cognizable",
      actionRequired: "A new specific offence targeting hate crimes and mob violence based on race, caste, or community."
    },
    {
      section: "111",
      subSection: "-",
      lawInBrief: "Organised Crime",
      punishment: "Death or life imprisonment (if death is caused), otherwise 5 years to life",
      type: "criminal",
      severity: "high",
      bailStatus: "Non-Bailable, Cognizable",
      actionRequired: "Targets syndicates, extortion rings, and cyber-crime cartels. Invoked by specialized police units."
    },
    {
      section: "113",
      subSection: "-",
      lawInBrief: "Terrorist Act",
      punishment: "Death or life imprisonment + fine",
      type: "criminal",
      severity: "high",
      bailStatus: "Non-Bailable, Cognizable",
      authority: "NIA / Specialized Anti-Terror Units"
    },
    {
      section: "152",
      subSection: "-",
      lawInBrief: "Act endangering sovereignty, unity and integrity of India (Replaces Sedition)",
      punishment: "Imprisonment for life, or up to 7 years + fine",
      type: "criminal",
      severity: "high",
      bailStatus: "Non-Bailable, Cognizable",
      defences: "Lawful criticism of government measures without inciting violence does not constitute this offence."
    },
    {
      section: "302",
      subSection: "-",
      lawInBrief: "Snatching (Theft with sudden force)",
      punishment: "Imprisonment up to 3 years + fine",
      type: "criminal",
      severity: "medium",
      bailStatus: "Non-Bailable, Cognizable",
      actionRequired: "Specifically targets chain-snatching and mobile snatching. File an FIR immediately."
    },
    {
      section: "318",
      subSection: "-",
      lawInBrief: "Cheating and dishonestly inducing delivery of property (Replaces IPC 420)",
      punishment: "Imprisonment up to 7 years + fine",
      type: "criminal",
      severity: "high",
      bailStatus: "Non-Bailable, Cognizable",
      actionRequired: "Applicable to financial frauds, scams, and deceptive contracts. Requires proof of deceptive intent from the beginning."
    },
    {
      section: "356",
      subSection: "-",
      lawInBrief: "Defamation (Replaces IPC 499/500)",
      punishment: "Simple imprisonment up to 2 years, or fine, or community service",
      type: "criminal",
      severity: "low",
      bailStatus: "Bailable, Non-Cognizable",
      actionRequired: "File a private criminal complaint before a Magistrate. Police will not register an FIR directly.",
      defences: "Truth published for public good, or expressing opinion in good faith on public conduct."
    }
  ]
};
