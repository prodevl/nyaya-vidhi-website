import type { Statute } from "../_types";

const SOURCE_BASE = "/pdfs/Information%20Technology%20%26%20Digital%20Laws/IT%20Act,%202000%20amended%202008.pdf";
const SOURCE_FILE = "IT Act, 2000 amended 2008.pdf";

export const itAct2000: Statute = {
  meta: {
    slug: "it-act-2000",
    shortName: "IT Act",
    fullName: "The Information Technology Act, 2000",
    year: 2000,
    tagline: "India's foundational digital law.",
    summary:
      "Recognises electronic records and digital signatures, defines cyber-offences, establishes the Adjudicating Officer and Cyber Appellate Tribunal. It was significantly amended in 2008 to address cyber terrorism, data protection, and intermediary liability.",
    preamble:
      "An Act to provide legal recognition for transactions carried out by means of electronic data interchange and other means of electronic communication, commonly referred to as \"electronic commerce\", which involve the use of alternatives to paper-based methods of communication and storage of information...",
    categorySlug: "information-technology-and-digital-laws",
    totalSections: 94,
    totalChapters: 13,
    sourcePdf: { pdfPath: SOURCE_BASE, pdfFile: SOURCE_FILE, pdfPage: 1 },
    coverage: "complete",
    tier: 2,
    amendments: [
      {
        year: 2008,
        shortName: "Information Technology (Amendment) Act, 2008",
        note: "Major overhaul to address cyber crime, data protection (Section 43A), cyber terrorism (Section 66F), and intermediary safe harbour (Section 79).",
      },
    ],
  },

  chapters: [
    {
      slug: "preliminary",
      number: "I",
      title: "Preliminary",
      range: ["1", "2"],
      intro: "Sets the territorial scope, including its extra-territorial reach for offences involving computers in India, and defines key digital terms.",
      sections: [
        {
          number: "1",
          label: "Section 1",
          marginalNote: "Short title, extent, commencement and application",
          importance: "operative",
          verbatim:
            "(1) This Act may be called the Information Technology Act, 2000.\n\n(2) It shall extend to the whole of India and, save as otherwise provided in this Act, it applies also to any offence or contravention thereunder committed outside India by any person.\n\n(3) It shall come into force on such date as the Central Government may, by notification, appoint...",
          plainEnglish:
            "Section 1 names the Act and sets its wide territorial reach. Crucially, sub-section (2) gives the Act extra-territorial jurisdiction: it applies to offences committed outside India by anyone, provided the act involves a computer system or network located in India.",
          source: { pdfPath: SOURCE_BASE, pdfFile: SOURCE_FILE, pdfPage: 1 },
          scenarios: [
            {
              title: "Hacker sitting outside India",
              setup: "A foreign national sitting in Europe hacks into a bank server located in Mumbai.",
              outcome: "The IT Act applies because the target computer is in India, establishing extra-territorial jurisdiction.",
              appliesUnder: "Section 1(2)",
            },
          ],
        },
        {
          number: "2",
          label: "Section 2",
          marginalNote: "Definitions",
          importance: "core",
          verbatim:
            "(1) In this Act, unless the context otherwise requires,—\n\n(a) \"access\" with its grammatical variations and cognate expressions means gaining entry into, instructing or communicating with the logical, arithmetical, or memory function resources of a computer, computer system or computer network;\n\n... (i) \"computer\" means any electronic, magnetic, optical or other high-speed data processing device or system which performs logical, arithmetic, and memory functions by manipulations of electronic, magnetic or optical impulses...",
          plainEnglish:
            "Section 2 defines the foundational vocabulary of the digital world for Indian law. The definition of 'computer' is intentionally broad enough to cover smartphones, smart TVs, and IoT devices, not just traditional PCs.",
          source: { pdfPath: SOURCE_BASE, pdfFile: SOURCE_FILE, pdfPage: 2 },
          defines: [
            {
              term: "Computer",
              definition: "Any electronic, magnetic, optical or other high-speed data processing device or system performing logical, arithmetic and memory functions.",
              sourceSection: "2(1)(i)",
            },
          ],
        },
      ],
    },
    {
      slug: "penalties-compensation",
      number: "IX",
      title: "Penalties, Compensation and Adjudication",
      range: ["43", "47"],
      intro: "Provides civil remedies and compensation for damage to computers and failure to protect sensitive personal data.",
      sections: [
        {
          number: "43",
          label: "Section 43",
          marginalNote: "Penalty and compensation for damage to computer, computer system, etc.",
          importance: "core",
          verbatim:
            "If any person without permission of the owner or any other person who is incharge of a computer, computer system or computer network,—\n\n(a) accesses or secures access to such computer, computer system or computer network or computer resource;\n\n(b) downloads, copies or extracts any data, computer data base or information from such computer, computer system or computer network... he shall be liable to pay damages by way of compensation to the person so affected.",
          plainEnglish:
            "Section 43 is the primary civil remedy for unauthorised access (hacking), downloading data, or introducing viruses. If someone accesses a system without permission and causes damage or steals data, they must pay compensation to the victim.",
          source: { pdfPath: SOURCE_BASE, pdfFile: SOURCE_FILE, pdfPage: 15 },
          penalties: [
            {
              offence: "Unauthorised access or data extraction",
              punishment: "Payment of damages by way of compensation.",
              ref: "Section 43",
            },
          ],
        },
        {
          number: "43A",
          label: "Section 43A",
          marginalNote: "Compensation for failure to protect data",
          importance: "core",
          verbatim:
            "Where a body corporate, possessing, dealing or handling any sensitive personal data or information in a computer resource which it owns, controls or operates, is negligent in implementing and maintaining reasonable security practices and procedures and thereby causes wrongful loss or wrongful gain to any person, such body corporate shall be liable to pay damages by way of compensation to the person so affected.",
          plainEnglish:
            "Introduced in 2008, Section 43A forces companies to implement 'reasonable security practices' when handling sensitive personal data. If they are negligent and a data breach causes wrongful loss, they must compensate the victims.",
          source: { pdfPath: SOURCE_BASE, pdfFile: SOURCE_FILE, pdfPage: 16 },
        },
      ],
    },
    {
      slug: "offences",
      number: "XI",
      title: "Offences",
      range: ["65", "78"],
      intro: "The penal core of the Act, defining cyber crimes ranging from identity theft and privacy violations to cyber terrorism and publishing obscene material.",
      sections: [
        {
          number: "66",
          label: "Section 66",
          marginalNote: "Computer related offences",
          importance: "core",
          verbatim:
            "If any person, dishonestly or fraudulently, does any act referred to in section 43, he shall be punishable with imprisonment for a term which may extend to three years or with fine which may extend to five lakh rupees or with both.",
          plainEnglish:
            "Section 66 turns the civil wrongs of Section 43 (like unauthorised access) into criminal offences if they are done 'dishonestly or fraudulently'. This is the standard charging section for hacking and data theft.",
          source: { pdfPath: SOURCE_BASE, pdfFile: SOURCE_FILE, pdfPage: 22 },
          penalties: [
            {
              offence: "Dishonest/fraudulent unauthorised access (hacking)",
              punishment: "Imprisonment up to 3 years and/or fine up to ₹5 lakh.",
              ref: "Section 66",
              severity: "serious",
            },
          ],
        },
        {
          number: "66C",
          label: "Section 66C",
          marginalNote: "Punishment for identity theft",
          importance: "core",
          verbatim:
            "Whoever, fraudulently or dishonestly make use of the electronic signature, password or any other unique identification feature of any other person, shall be punished with imprisonment of either description for a term which may extend to three years and shall also be liable to fine which may extend to rupees one lakh.",
          plainEnglish:
            "Section 66C criminalises identity theft. If you use someone else's password, digital signature, or any unique ID feature dishonestly, it attracts up to 3 years imprisonment.",
          source: { pdfPath: SOURCE_BASE, pdfFile: SOURCE_FILE, pdfPage: 23 },
          penalties: [
            {
              offence: "Identity theft (using someone's password/ID)",
              punishment: "Imprisonment up to 3 years + fine up to ₹1 lakh.",
              ref: "Section 66C",
              severity: "serious",
            },
          ],
        },
        {
          number: "66E",
          label: "Section 66E",
          marginalNote: "Punishment for violation of privacy",
          importance: "core",
          verbatim:
            "Whoever, intentionally or knowingly captures, publishes or transmits the image of a private area of any person without his or her consent, under circumstances violating the privacy of that person, shall be punished with imprisonment which may extend to three years or with fine not exceeding two lakh rupees, or with both.",
          plainEnglish:
            "Section 66E is a powerful privacy protection. It criminalises taking or sharing photos/videos of a person's 'private areas' without their consent.",
          source: { pdfPath: SOURCE_BASE, pdfFile: SOURCE_FILE, pdfPage: 23 },
          penalties: [
            {
              offence: "Violation of privacy (capturing/transmitting images of private areas)",
              punishment: "Imprisonment up to 3 years or fine up to ₹2 lakh, or both.",
              ref: "Section 66E",
              severity: "serious",
            },
          ],
        },
      ],
    },
  ],
  penaltyTable: [
    { section: "3", subSection: "-", lawInBrief: "Authentication of electronic records (Digital Signatures)", punishment: "-", type: "structural" },
    { section: "4", subSection: "-", lawInBrief: "Legal recognition of electronic records", punishment: "-", type: "structural" },
    { section: "5", subSection: "-", lawInBrief: "Legal recognition of electronic signatures", punishment: "-", type: "structural" },
    { section: "43", subSection: "-", lawInBrief: "Penalty and compensation for damage to computer, computer system, etc.", punishment: "Penalty and compensation up to ₹1 Crore", type: "civil", severity: "medium", actionRequired: "File a complaint with the Adjudicating Officer (IT) of your state to claim civil compensation.", authority: "Adjudicating Officer (IT Secretary of the State)" },
    { section: "43A", subSection: "-", lawInBrief: "Compensation for failure to protect data (Reasonable security practices)", punishment: "Compensation as determined by adjudicating officer", type: "compliance", severity: "medium", actionRequired: "If a company leaks your sensitive data (like bank details), you can claim compensation.", authority: "Adjudicating Officer (IT Secretary)" },
    { section: "65", subSection: "-", lawInBrief: "Tampering with computer source documents", punishment: "Up to 3 years or fine up to ₹2 Lakhs, or both", type: "civil", severity: "medium" },
    { section: "66", subSection: "-", lawInBrief: "Computer-related offences (dishonest/fraudulent acts)", punishment: "Up to 3 years or fine up to ₹5 Lakhs, or both", type: "civil", severity: "medium" },
    { section: "66B", subSection: "-", lawInBrief: "Dishonestly receiving stolen computer resource", punishment: "Up to 3 years or fine up to ₹1 Lakh, or both", type: "criminal", severity: "medium" },
    { section: "66C", subSection: "-", lawInBrief: "Identity theft (using another’s password/digital signature)", punishment: "Up to 3 years or fine up to ₹1 Lakh, or both", type: "criminal", severity: "high", actionRequired: "File an FIR at your local cyber cell or the national cyber crime portal immediately.", authority: "Cyber Police / Judicial Magistrate" },
    { section: "66D", subSection: "-", lawInBrief: "Cheating by personation using computer resource", punishment: "Up to 3 years or fine up to ₹1 Lakh, or both", type: "criminal", severity: "high", actionRequired: "Used for phishing scams. Report to the bank to freeze the transaction and file a cyber complaint." },
    { section: "66E", subSection: "-", lawInBrief: "Violation of privacy", punishment: "Up to 3 years or fine up to ₹2 Lakhs, or both", type: "civil", severity: "medium" },
    { section: "66F", subSection: "-", lawInBrief: "Cyber Terrorism", punishment: "Imprisonment up to life", type: "criminal", severity: "high", bailStatus: "Non-Bailable, Cognizable", authority: "NIA / Specialized Anti-Terror Units" },
    { section: "67", subSection: "-", lawInBrief: "Publishing/transmitting obscene material", punishment: "Up to 3 years and fine up to ₹5 Lakhs (1st conviction)", type: "criminal", severity: "high", actionRequired: "Commonly used against revenge porn or non-consensual sharing of intimate images." },
    { section: "67A", subSection: "-", lawInBrief: "Publishing/transmitting sexually explicit material", punishment: "Up to 5 years and fine up to ₹10 Lakhs (1st conviction)", type: "criminal", severity: "high" },
    { section: "67B", subSection: "-", lawInBrief: "Child pornography/exploitation", punishment: "Up to 5 years and fine up to ₹10 Lakhs", type: "civil", severity: "medium" },
    { section: "69", subSection: "-", lawInBrief: "Power to issue directions for interception or monitoring or decryption", punishment: "Up to 7 years imprisonment for non-compliance", type: "criminal", severity: "high" },
    { section: "69A", subSection: "-", lawInBrief: "Power to issue directions for blocking for public access", punishment: "Up to 7 years imprisonment + fine for non-compliance", type: "criminal", severity: "high", actionRequired: "Intermediaries (like ISPs/Social Media) must block content. Users cannot directly invoke this, only the Government can.", timeLimit: "Typically 36 hours for intermediaries to comply", authority: "MeitY / Designated Officer" },
    { section: "79", subSection: "-", lawInBrief: "Exemption from liability of intermediary (Safe Harbour)", punishment: "-", type: "structural", actionRequired: "Intermediaries must appoint a Grievance Officer and publish terms of use.", defences: "Provides absolute immunity to platforms (like YouTube/X) for user-generated content, provided they follow due diligence and don't initiate the transmission." }
  ]
};
