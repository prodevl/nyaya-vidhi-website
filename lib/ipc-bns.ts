/**
 * Curated map of common IPC sections to their Bharatiya Nyaya Sanhita
 * (BNS) 2023 equivalents.
 *
 * Verified against the Government's "Section Mapping" table for the
 * three new criminal laws. This is a learning aid, not legal advice.
 */

export type SectionMap = {
  ipc: string;          // e.g. "302"
  ipcTitle: string;     // plain-English title in 1860 IPC
  bns: string;          // e.g. "103(1)"
  bnsTitle: string;     // BNS title (may differ slightly)
  category: string;     // grouping for the page
  punishment: string;   // current punishment (short)
  whatChanged?: string; // one-line plain English on the change
};

export const ipcToBns: SectionMap[] = [
  // ---- Against the body ----
  {
    ipc: "299",
    ipcTitle: "Culpable homicide",
    bns: "100",
    bnsTitle: "Culpable homicide",
    category: "Against the body",
    punishment: "10 years to life, plus fine",
  },
  {
    ipc: "300",
    ipcTitle: "Murder",
    bns: "101",
    bnsTitle: "Murder",
    category: "Against the body",
    punishment: "Death or life imprisonment + fine",
  },
  {
    ipc: "302",
    ipcTitle: "Punishment for murder",
    bns: "103(1)",
    bnsTitle: "Punishment for murder",
    category: "Against the body",
    punishment: "Death or life imprisonment + fine",
  },
  {
    ipc: "302/34",
    ipcTitle: "Common intention — murder by a group",
    bns: "103(2)",
    bnsTitle: "Mob lynching — murder by 5 or more on identity grounds",
    category: "Against the body",
    punishment: "Death or life imprisonment + fine",
    whatChanged:
      "Mob lynching is now a separate, named offence — harsher and clearer.",
  },
  {
    ipc: "304A",
    ipcTitle: "Causing death by negligence",
    bns: "106(1)",
    bnsTitle: "Causing death by negligence",
    category: "Against the body",
    punishment: "Up to 5 years + fine; 7 years for hit-and-run who doesn't report",
    whatChanged:
      "New aggravated form — leaving the spot of a road accident without reporting carries up to 10 years.",
  },
  {
    ipc: "304B",
    ipcTitle: "Dowry death",
    bns: "80",
    bnsTitle: "Dowry death",
    category: "Against the body",
    punishment: "7 years to life",
  },
  {
    ipc: "306",
    ipcTitle: "Abetment of suicide",
    bns: "108",
    bnsTitle: "Abetment of suicide",
    category: "Against the body",
    punishment: "Up to 10 years + fine",
  },
  {
    ipc: "307",
    ipcTitle: "Attempt to murder",
    bns: "109",
    bnsTitle: "Attempt to murder",
    category: "Against the body",
    punishment: "Up to 10 years + fine; life if hurt is caused",
  },
  {
    ipc: "319",
    ipcTitle: "Hurt",
    bns: "114",
    bnsTitle: "Hurt",
    category: "Against the body",
    punishment: "Up to 1 year or fine ₹10,000",
  },
  {
    ipc: "320",
    ipcTitle: "Grievous hurt",
    bns: "116",
    bnsTitle: "Grievous hurt",
    category: "Against the body",
    punishment: "Up to 7 years + fine",
  },
  {
    ipc: "323",
    ipcTitle: "Voluntarily causing hurt",
    bns: "115(2)",
    bnsTitle: "Voluntarily causing hurt",
    category: "Against the body",
    punishment: "Up to 1 year or fine ₹10,000",
  },
  {
    ipc: "326A",
    ipcTitle: "Acid attack",
    bns: "124(1)",
    bnsTitle: "Acid attack",
    category: "Against the body",
    punishment: "10 years to life + fine to victim",
  },
  {
    ipc: "354",
    ipcTitle: "Outraging modesty of a woman",
    bns: "74",
    bnsTitle: "Assault to outrage modesty",
    category: "Against women",
    punishment: "1 to 5 years + fine",
  },
  {
    ipc: "354A",
    ipcTitle: "Sexual harassment",
    bns: "75",
    bnsTitle: "Sexual harassment",
    category: "Against women",
    punishment: "Up to 3 years or fine — depending on the act",
  },
  {
    ipc: "354D",
    ipcTitle: "Stalking",
    bns: "78",
    bnsTitle: "Stalking",
    category: "Against women",
    punishment: "Up to 3 years (first); up to 5 years (repeat)",
  },
  {
    ipc: "375 / 376",
    ipcTitle: "Rape",
    bns: "63 / 64",
    bnsTitle: "Rape (definition and punishment)",
    category: "Against women",
    punishment: "10 years to life + fine",
  },
  {
    ipc: "376D",
    ipcTitle: "Gang rape",
    bns: "70(1)",
    bnsTitle: "Gang rape",
    category: "Against women",
    punishment: "Minimum 20 years to life + fine",
  },
  {
    ipc: "376DA",
    ipcTitle: "Gang rape of a girl under 16",
    bns: "70(2)",
    bnsTitle: "Gang rape of a child below 18",
    category: "Against women",
    punishment: "Life imprisonment or death + fine",
    whatChanged: "Age threshold raised from 16 to 18.",
  },
  {
    ipc: "498A",
    ipcTitle: "Cruelty by husband or relatives",
    bns: "85 & 86",
    bnsTitle: "Cruelty by husband or relatives — with explanation",
    category: "Against women",
    punishment: "Up to 3 years + fine",
    whatChanged:
      "Same offence — but now divided into two sections, with the explanation moved into its own provision.",
  },

  // ---- Property crimes ----
  {
    ipc: "378",
    ipcTitle: "Theft",
    bns: "303(1)",
    bnsTitle: "Theft",
    category: "Property",
    punishment: "Up to 3 years or fine; community service for first-time small theft",
    whatChanged: "Community service introduced for petty first-time thefts.",
  },
  {
    ipc: "379",
    ipcTitle: "Punishment for theft",
    bns: "303(2)",
    bnsTitle: "Punishment for theft",
    category: "Property",
    punishment: "Up to 3 years or fine; community service for petty repeat",
  },
  {
    ipc: "390",
    ipcTitle: "Robbery",
    bns: "309",
    bnsTitle: "Robbery",
    category: "Property",
    punishment: "Up to 10 years + fine",
  },
  {
    ipc: "392",
    ipcTitle: "Punishment for robbery",
    bns: "309(4)",
    bnsTitle: "Punishment for robbery",
    category: "Property",
    punishment: "Up to 10 years + fine",
  },
  {
    ipc: "395",
    ipcTitle: "Dacoity",
    bns: "310",
    bnsTitle: "Dacoity",
    category: "Property",
    punishment: "Life or up to 10 years + fine",
  },
  {
    ipc: "403",
    ipcTitle: "Dishonest misappropriation of property",
    bns: "314",
    bnsTitle: "Dishonest misappropriation of property",
    category: "Property",
    punishment: "Up to 2 years + fine",
  },
  {
    ipc: "405 / 406",
    ipcTitle: "Criminal breach of trust",
    bns: "316",
    bnsTitle: "Criminal breach of trust",
    category: "Property",
    punishment: "Up to 5 years + fine",
  },
  {
    ipc: "415 / 420",
    ipcTitle: "Cheating",
    bns: "318",
    bnsTitle: "Cheating",
    category: "Property",
    punishment: "Up to 7 years + fine",
  },
  {
    ipc: "441",
    ipcTitle: "Criminal trespass",
    bns: "329",
    bnsTitle: "Criminal trespass and house trespass",
    category: "Property",
    punishment: "Up to 3 months or fine",
  },
  {
    ipc: "499 / 500",
    ipcTitle: "Defamation",
    bns: "356",
    bnsTitle: "Defamation",
    category: "Reputation",
    punishment: "Up to 2 years or fine or both; community service introduced",
    whatChanged: "Community service is now an alternative punishment.",
  },

  // ---- State / public order ----
  {
    ipc: "121",
    ipcTitle: "Waging war against the Government of India",
    bns: "147",
    bnsTitle: "Waging war against the Government",
    category: "State & public",
    punishment: "Death or life imprisonment + fine",
  },
  {
    ipc: "124A",
    ipcTitle: "Sedition",
    bns: "152",
    bnsTitle: "Act endangering sovereignty, unity and integrity of India",
    category: "State & public",
    punishment: "Up to life imprisonment + fine",
    whatChanged:
      "The word 'sedition' is dropped. The new offence is narrower in language but punishments are tougher.",
  },
  {
    ipc: "153A",
    ipcTitle: "Promoting enmity between groups",
    bns: "196",
    bnsTitle: "Promoting enmity between groups",
    category: "State & public",
    punishment: "Up to 3 years + fine; 5 years if in a place of worship",
  },
  {
    ipc: "171B / 171E",
    ipcTitle: "Election bribery",
    bns: "171",
    bnsTitle: "Bribery during elections",
    category: "State & public",
    punishment: "Up to 1 year or fine or both",
  },

  // ---- New offences ----
  {
    ipc: "—",
    ipcTitle: "(No direct IPC equivalent)",
    bns: "111",
    bnsTitle: "Organised crime",
    category: "New offences",
    punishment: "Min 5 years to life; death where it results in death",
    whatChanged:
      "Brand-new offence — covers syndicates dealing in trafficking, cybercrime, contract killing, extortion.",
  },
  {
    ipc: "—",
    ipcTitle: "(No direct IPC equivalent)",
    bns: "112",
    bnsTitle: "Petty organised crime",
    category: "New offences",
    punishment: "1 to 7 years + fine",
    whatChanged:
      "Targets gangs of pickpockets, ticket scalpers, vehicle thieves operating in groups.",
  },
  {
    ipc: "—",
    ipcTitle: "(No direct IPC equivalent)",
    bns: "113",
    bnsTitle: "Terrorist act",
    category: "New offences",
    punishment: "Death or life imprisonment + fine",
    whatChanged: "Terrorism, earlier under UAPA, is now also in general law.",
  },
  {
    ipc: "417 (read with cheating)",
    ipcTitle: "Cheating by personation (broad)",
    bns: "69",
    bnsTitle: "Sexual intercourse by using deceitful means",
    category: "Against women",
    punishment: "Up to 10 years + fine",
    whatChanged:
      "Promising marriage with no intent, or false identity, to obtain sexual relations — now a separate offence.",
  },

  // ---- Miscellaneous everyday ----
  {
    ipc: "143",
    ipcTitle: "Unlawful assembly",
    bns: "189(2)",
    bnsTitle: "Unlawful assembly",
    category: "Public order",
    punishment: "Up to 6 months or fine",
  },
  {
    ipc: "147",
    ipcTitle: "Rioting",
    bns: "191(2)",
    bnsTitle: "Rioting",
    category: "Public order",
    punishment: "Up to 2 years + fine",
  },
  {
    ipc: "188",
    ipcTitle: "Disobeying a public servant's order",
    bns: "223",
    bnsTitle: "Disobedience to order duly promulgated",
    category: "Public order",
    punishment: "Up to 6 months or fine",
  },
  {
    ipc: "294",
    ipcTitle: "Obscene acts in public",
    bns: "296",
    bnsTitle: "Obscene acts",
    category: "Public order",
    punishment: "Up to 3 months or fine",
  },
  {
    ipc: "504",
    ipcTitle: "Intentional insult to provoke breach of peace",
    bns: "352",
    bnsTitle: "Intentional insult to provoke breach of peace",
    category: "Public order",
    punishment: "Up to 2 years or fine",
  },
  {
    ipc: "506",
    ipcTitle: "Criminal intimidation",
    bns: "351",
    bnsTitle: "Criminal intimidation",
    category: "Public order",
    punishment: "Up to 2 years + fine; 7 years if of death or grievous hurt",
  },
  {
    ipc: "509",
    ipcTitle: "Word, gesture intended to insult a woman",
    bns: "79",
    bnsTitle: "Word, gesture or act intended to insult modesty of a woman",
    category: "Against women",
    punishment: "Up to 3 years + fine",
  },
];

export const ipcCategories = Array.from(new Set(ipcToBns.map((s) => s.category)));
