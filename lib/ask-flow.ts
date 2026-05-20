/**
 * Nyaya Mitra — guided legal problem solver.
 *
 * A simple decision tree that walks a user from "I have a problem" to
 * "here is your answer, what to do now, and the law section".
 *
 * No AI. Just careful, plain-English mapping of common Indian-life
 * legal situations to the right clauses, steps, and helplines.
 *
 * Designed so anyone — student, parent, shopkeeper, employee — can
 * use it without legal vocabulary.
 */

export type AskOption = {
  label: string;
  hint?: string;
  next: string; // either another node id, or an answer id prefixed with "ans:"
  emoji?: string;
};

export type AskNode = {
  id: string;
  question: string;
  subtitle?: string;
  options: AskOption[];
};

export type AskAnswer = {
  id: string; // "ans:..." prefix
  title: string;
  oneLiner: string; // the plain-English short answer
  stayCalm?: string; // one calm sentence at the top
  steps: { title: string; body: string }[];
  laws: { name: string; section?: string; note: string }[];
  documents?: string[];
  helplines?: { name: string; number: string }[];
  warnings?: string[];
  related?: { label: string; href: string }[];
  category: string; // for color tagging
};

/* ---------------------------------------------------------------- */
/* The decision tree                                                  */
/* ---------------------------------------------------------------- */

export const askNodes: Record<string, AskNode> = {
  root: {
    id: "root",
    question: "What is happening with you right now?",
    subtitle:
      "Pick the box that feels closest. We will ask one or two more easy questions, and then give you the law in plain English.",
    options: [
      { label: "Police, FIR, or arrest", emoji: "🚔", next: "police" },
      { label: "Family — marriage, divorce, custody", emoji: "👨‍👩‍👧", next: "family" },
      { label: "Money owed, cheque, or loan", emoji: "💸", next: "money" },
      { label: "Work, job, salary, or harassment", emoji: "💼", next: "work" },
      { label: "Shopping, refund, or fraud", emoji: "🛒", next: "consumer" },
      { label: "Online or phone problem", emoji: "📱", next: "digital" },
      { label: "House, rent, builder, or land", emoji: "🏠", next: "property" },
      { label: "Notice from tax or government", emoji: "📨", next: "notice" },
    ],
  },

  police: {
    id: "police",
    question: "Which of these is closest?",
    options: [
      { label: "Someone is being arrested right now", next: "ans:arrest-now" },
      { label: "Police will not register my FIR", next: "ans:fir-refused" },
      { label: "I need to apply for bail", next: "ans:bail" },
      { label: "Police called me to the station", next: "ans:police-summon" },
    ],
  },

  family: {
    id: "family",
    question: "What is the family matter?",
    options: [
      { label: "I want to file for divorce", next: "ans:divorce" },
      { label: "I need maintenance / monthly support", next: "ans:maintenance" },
      { label: "Custody of my child", next: "ans:custody" },
      { label: "Domestic violence at home", next: "ans:domestic-violence" },
    ],
  },

  money: {
    id: "money",
    question: "What kind of money issue?",
    options: [
      { label: "A cheque given to me bounced", next: "ans:cheque-bounce" },
      { label: "Someone has not returned my loan", next: "ans:loan-recovery" },
      { label: "Bank loan recovery agents are harassing me", next: "ans:recovery-harassment" },
      { label: "I want to recover money from a company", next: "ans:money-suit" },
    ],
  },

  work: {
    id: "work",
    question: "What is the work issue?",
    options: [
      { label: "Salary not paid", next: "ans:salary-not-paid" },
      { label: "Sexual harassment at workplace", next: "ans:posh" },
      { label: "Unfair termination", next: "ans:termination" },
      { label: "Maternity leave denied", next: "ans:maternity" },
    ],
  },

  consumer: {
    id: "consumer",
    question: "Pick the closest one",
    options: [
      { label: "Product is defective or not delivered", next: "ans:consumer-defect" },
      { label: "Service was bad (hospital, telco, airline, etc.)", next: "ans:consumer-service" },
      { label: "I was cheated by a seller / fake product", next: "ans:consumer-fraud" },
      { label: "An online refund is stuck", next: "ans:online-refund" },
    ],
  },

  digital: {
    id: "digital",
    question: "What happened online?",
    options: [
      { label: "I lost money in an online fraud / UPI scam", next: "ans:cyber-fraud" },
      { label: "Someone is blackmailing me with photos", next: "ans:sextortion" },
      { label: "Fake account is using my name / photo", next: "ans:fake-account" },
      { label: "A company is misusing my personal data", next: "ans:dpdp" },
    ],
  },

  property: {
    id: "property",
    question: "Pick the closest one",
    options: [
      { label: "Builder is delaying my flat possession", next: "ans:rera-delay" },
      { label: "Landlord is troubling me / not returning deposit", next: "ans:landlord" },
      { label: "Someone is illegally on my land", next: "ans:trespass" },
      { label: "Property dispute with family", next: "ans:family-property" },
    ],
  },

  notice: {
    id: "notice",
    question: "What kind of notice?",
    options: [
      { label: "Income Tax notice", next: "ans:it-notice" },
      { label: "GST notice / show cause", next: "ans:gst-notice" },
      { label: "Legal notice from a lawyer / company", next: "ans:legal-notice" },
      { label: "Traffic / police challan", next: "ans:challan" },
    ],
  },
};

/* ---------------------------------------------------------------- */
/* Answer cards                                                       */
/* ---------------------------------------------------------------- */

export const askAnswers: Record<string, AskAnswer> = {
  "ans:arrest-now": {
    id: "ans:arrest-now",
    category: "Criminal",
    title: "Someone is being arrested right now",
    stayCalm: "Stay calm. Do not run, do not shout, do not resist.",
    oneLiner:
      "You have strong rights even while being arrested. Police must follow rules — and you can use those rules.",
    steps: [
      {
        title: "Ask the officer's name and station",
        body: "Politely ask the officer to show their identity card. They must wear a name tag. Note it down or have a witness remember it.",
      },
      {
        title: "Ask why you are being arrested",
        body: "Police must tell you the reason. They must tell you if the offence is bailable. Listen carefully and ask them to repeat it.",
      },
      {
        title: "Inform one person of your choice",
        body: "You have a right to inform a family member, friend or lawyer. Use your one phone call wisely — tell them which station you are being taken to.",
      },
      {
        title: "Sign nothing in panic",
        body: "Do not sign blank papers. Read every paper. Ask for a copy. If you do not understand the language, ask for a translation.",
      },
      {
        title: "Demand to be produced before a Magistrate in 24 hours",
        body: "This is a Constitutional right. Travel time to court is not counted. If 24 hours pass without you going to court, your arrest itself becomes illegal.",
      },
    ],
    laws: [
      {
        name: "Constitution of India",
        section: "Article 22",
        note: "Right to know grounds of arrest, right to a lawyer, and right to be produced before a magistrate within 24 hours.",
      },
      {
        name: "Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023",
        section: "Section 35 & 47",
        note: "Procedure for arrest — no needless force, female to be arrested by female officer (except in special cases), reasons must be recorded.",
      },
      {
        name: "D.K. Basu v. State of West Bengal (1997)",
        note: "Supreme Court's 11 guidelines for every arrest — memo of arrest, medical examination, intimation to family, etc.",
      },
    ],
    helplines: [
      { name: "Police (emergency)", number: "112" },
      { name: "Legal Services Authority (free lawyer)", number: "15100" },
    ],
    warnings: [
      "Never give a confession in the police station — under Section 23 of the new evidence law (BSA), it is not admissible.",
      "Never sign a paper you have not read fully.",
    ],
    related: [
      { label: "Read: Rights on Arrest", href: "/know-your-rights" },
      { label: "Learn BNSS basics", href: "/laws/criminal-laws" },
    ],
  },

  "ans:fir-refused": {
    id: "ans:fir-refused",
    category: "Criminal",
    title: "Police is refusing to register my FIR",
    oneLiner:
      "For a cognizable offence, police cannot refuse. You have three escalation routes — go up the ladder one by one.",
    steps: [
      {
        title: "Step 1 — Write a complaint and submit at the same station",
        body: "Write what happened in simple words, date, time, place, names, and what you want. Ask the officer to receive it with a stamp and signature. Keep one copy.",
      },
      {
        title: "Step 2 — Send it to the Superintendent of Police (SP)",
        body: "If the station refuses or does not act, send the same complaint by post (speed post with tracking) or in person to the SP / DCP of your district. Section 173(4) of BNSS allows this.",
      },
      {
        title: "Step 3 — Approach the Magistrate under Section 175(3) BNSS",
        body: "File a private complaint before the local Magistrate. The court can direct the police to register an FIR and investigate.",
      },
      {
        title: "Step 4 — Approach the High Court",
        body: "For very serious cases (rape, murder, missing person), you can directly file a writ petition under Article 226. This is fast but needs a lawyer.",
      },
    ],
    laws: [
      {
        name: "BNSS, 2023",
        section: "Section 173",
        note: "Police must record an FIR in every cognizable case (theft, assault, fraud above limit, etc.). New law also allows e-FIR for many offences.",
      },
      {
        name: "Lalita Kumari v. Govt. of UP (2013)",
        note: "Supreme Court — FIR registration is mandatory if information shows a cognizable offence. Preliminary inquiry is only for limited cases like matrimonial or commercial disputes.",
      },
    ],
    documents: [
      "Your written complaint (keep 2 copies)",
      "Any proof — photos, audio, messages, medical paper",
      "Identity proof (Aadhaar, voter ID, etc.)",
    ],
    helplines: [
      { name: "Police", number: "112" },
      { name: "Women Helpline", number: "181" },
    ],
    related: [
      { label: "Filing an FIR — guide", href: "/laws/criminal-laws" },
      { label: "Document toolkit", href: "/toolkit" },
    ],
  },

  "ans:bail": {
    id: "ans:bail",
    category: "Criminal",
    title: "I (or my relative) need bail",
    oneLiner:
      "Bail is not a favour — it is a right in most cases. Pick the type that fits your situation.",
    steps: [
      {
        title: "Know if the offence is bailable",
        body: "For bailable offences, bail is your right — the police themselves can grant it at the station. For non-bailable offences, only a court can grant it.",
      },
      {
        title: "Anticipatory bail — before arrest",
        body: "If you fear arrest in a non-bailable case (false case, dowry, fraud), apply to the Sessions Court or High Court under Section 482 BNSS. The court can pre-grant bail with conditions.",
      },
      {
        title: "Regular bail — after arrest",
        body: "Filed in the same court where the case is pending. Lawyer files a bail application; the court usually decides in 1–7 days. Conditions like surety, passport surrender, etc. may be added.",
      },
      {
        title: "Default bail — if chargesheet is delayed",
        body: "If the police do not file a chargesheet within 60 or 90 days (depending on offence), you automatically get a right to be released on bail under Section 187 BNSS.",
      },
    ],
    laws: [
      {
        name: "BNSS, 2023",
        section: "Sections 478–483",
        note: "Bail in bailable & non-bailable cases, and conditions courts may attach.",
      },
      {
        name: "BNSS, 2023",
        section: "Section 482",
        note: "Anticipatory bail — protection before arrest.",
      },
      {
        name: "BNSS, 2023",
        section: "Section 187(3)",
        note: "Default / statutory bail when chargesheet not filed in time.",
      },
    ],
    documents: [
      "Copy of FIR (or details of the case)",
      "Two sureties (people willing to vouch) with ID and address proof",
      "Lawyer's vakalatnama",
    ],
    related: [
      { label: "Bail — full explainer", href: "/laws/criminal-laws" },
    ],
  },

  "ans:police-summon": {
    id: "ans:police-summon",
    category: "Criminal",
    title: "Police called me to the station",
    oneLiner:
      "Cooperate, but know your rights. You are a witness, not an accused — until proven otherwise.",
    steps: [
      {
        title: "Confirm the notice is in writing",
        body: "Police should send a written notice under Section 35 BNSS, stating why you are called. A WhatsApp message is not enough — politely ask for a formal notice.",
      },
      {
        title: "Take a trusted person with you",
        body: "You may take a family member or a lawyer along (they need not enter the room, but can wait close by). For women, no police can ask you to come to a station after sunset or before sunrise.",
      },
      {
        title: "Answer truthfully, but only what you know",
        body: "You are not required to answer questions that may make you confess (Article 20(3) of the Constitution).",
      },
      {
        title: "Ask for a copy of your statement",
        body: "If they record what you say, ask to read it before signing.",
      },
    ],
    laws: [
      {
        name: "Constitution of India",
        section: "Article 20(3)",
        note: "Right against self-incrimination — you cannot be forced to be a witness against yourself.",
      },
      {
        name: "BNSS, 2023",
        section: "Section 35 & 179",
        note: "Procedure for summoning witnesses; women cannot be called outside daylight hours except in special situations.",
      },
    ],
  },

  /* ---------------- Family ---------------- */
  "ans:divorce": {
    id: "ans:divorce",
    category: "Family",
    title: "I want to file for divorce",
    oneLiner:
      "The law that applies depends on your religion. Pick the type — mutual or contested — and prepare your papers.",
    steps: [
      {
        title: "Try mutual consent first if possible",
        body: "If both sides agree, it is faster, cheaper and less painful. You need 6 months waiting period (the court may waive this in some cases).",
      },
      {
        title: "For contested divorce, you need a 'ground'",
        body: "Like cruelty, adultery, desertion (2 years), conversion, mental illness, or impotency. Save evidence — messages, medical, witness statements.",
      },
      {
        title: "File in the right family court",
        body: "Usually where you and your spouse last lived together, or where your spouse currently lives, or where you live (for women, this is helpful).",
      },
      {
        title: "Think of money & child issues together",
        body: "Maintenance, alimony, child custody and division of property are usually decided together to save repeated litigation.",
      },
    ],
    laws: [
      {
        name: "Hindu Marriage Act, 1955",
        section: "Sections 13 & 13B",
        note: "Grounds for divorce and mutual consent divorce for Hindus, Sikhs, Jains, Buddhists.",
      },
      {
        name: "Special Marriage Act, 1954",
        section: "Section 27",
        note: "For inter-faith or civil marriages.",
      },
      {
        name: "Muslim Personal Law",
        note: "Talaq-e-ahsan, khula, mubarat, or court-based divorce under the Dissolution of Muslim Marriages Act, 1939.",
      },
    ],
    documents: [
      "Marriage certificate (or proof of marriage like photos, invitation, witnesses)",
      "ID proofs of both",
      "Address proof",
      "Evidence of the ground you are alleging",
      "List of joint assets",
    ],
    helplines: [
      { name: "Women Helpline", number: "181" },
      { name: "Free Legal Aid", number: "15100" },
    ],
    related: [
      { label: "Family laws", href: "/laws/family-and-personal-laws" },
    ],
  },

  "ans:maintenance": {
    id: "ans:maintenance",
    category: "Family",
    title: "I need monthly maintenance / support",
    oneLiner:
      "Both wives and old parents can ask for maintenance — and the law is now faster than before.",
    steps: [
      {
        title: "File under Section 144 BNSS (was 125 CrPC)",
        body: "Quick, summary procedure in a Magistrate's court. Works for wife (including divorced wife who has not remarried), children, and parents who cannot maintain themselves.",
      },
      {
        title: "Show your spouse's income",
        body: "Bank statement, salary slip, ITR, lifestyle photos — anything that helps the court see real income. The court can ask for these too.",
      },
      {
        title: "Ask for interim maintenance immediately",
        body: "The court can order interim (temporary) maintenance very fast — sometimes in 60–90 days — so you don't have to wait years.",
      },
      {
        title: "If your spouse hides income or doesn't pay",
        body: "The court can attach property, salary, or even send them to jail (up to 1 month per default).",
      },
    ],
    laws: [
      {
        name: "BNSS, 2023",
        section: "Section 144",
        note: "Maintenance for wife, children, and parents — religion-neutral.",
      },
      {
        name: "Hindu Adoption & Maintenance Act, 1956",
        note: "Civil suit for higher and permanent maintenance for Hindu wife / aged parents.",
      },
      {
        name: "Protection of Women from Domestic Violence Act, 2005",
        note: "Allows monetary relief in addition to BNSS maintenance.",
      },
    ],
    related: [{ label: "Family laws", href: "/laws/family-and-personal-laws" }],
  },

  "ans:custody": {
    id: "ans:custody",
    category: "Family",
    title: "Custody of my child",
    oneLiner:
      "The court asks one question — what is best for the child. Age, schooling, safety, and emotional bond matter most.",
    steps: [
      {
        title: "Know the general rule",
        body: "For children under 5 years, mother is usually preferred. From 5–12, schooling and habits matter. Above 12, the child's own wish is given weight.",
      },
      {
        title: "Prepare a 'best interest' file",
        body: "Show stable income, safe home, school details, regular medical care, support network. Photos and report cards help.",
      },
      {
        title: "File in the Guardian Court / Family Court",
        body: "Apply under the Guardians and Wards Act, 1890, or personal-law specific provisions (HMG Act for Hindus).",
      },
      {
        title: "Visitation can be granted to both",
        body: "Even the parent who does not get custody can get fixed visitation rights — weekends, vacations, video calls.",
      },
    ],
    laws: [
      { name: "Guardians and Wards Act, 1890", note: "General law for guardianship and custody." },
      { name: "Hindu Minority and Guardianship Act, 1956", note: "Custody for Hindu minors." },
      {
        name: "Gaurav Nagpal v. Sumedha Nagpal (2008)",
        note: "Supreme Court — welfare of the child is the paramount consideration.",
      },
    ],
  },

  "ans:domestic-violence": {
    id: "ans:domestic-violence",
    category: "Family",
    title: "I am facing violence at home",
    stayCalm: "If you are in immediate danger, call 112 or 181 now.",
    oneLiner:
      "The Domestic Violence Act is a strong civil law — you can get protection, residence, money, and custody in one go.",
    steps: [
      {
        title: "Reach out to a Protection Officer or NGO first",
        body: "Every district has Protection Officers who help women file the case for free. Mahila Police Stations and One-Stop Centres (Sakhi) are also helpful.",
      },
      {
        title: "File a Domestic Incident Report (DIR)",
        body: "This form goes to the Magistrate. Mention all kinds of abuse — physical, mental, economic, verbal, and sexual.",
      },
      {
        title: "Ask for these four reliefs together",
        body: "Protection order (he cannot come near you), Residence order (you cannot be thrown out), Monetary relief (rent, medical, etc.), and Custody if you have minor children.",
      },
      {
        title: "Keep evidence safe",
        body: "Photos of injuries (with date), medical records, messages, audio, witness names. Save them online, not just on your phone.",
      },
    ],
    laws: [
      {
        name: "Protection of Women from Domestic Violence Act, 2005",
        note: "Civil remedies — protection, residence, monetary, custody, compensation.",
      },
      {
        name: "Bharatiya Nyaya Sanhita, 2023",
        section: "Section 85 & 86",
        note: "Criminal offence of cruelty by husband / relatives (was Section 498A IPC).",
      },
    ],
    helplines: [
      { name: "Women Helpline", number: "181" },
      { name: "Sakhi One-Stop Centre", number: "181" },
      { name: "Emergency", number: "112" },
    ],
  },

  /* ---------------- Money ---------------- */
  "ans:cheque-bounce": {
    id: "ans:cheque-bounce",
    category: "Money",
    title: "A cheque given to me has bounced",
    oneLiner:
      "Cheque bounce is a criminal offence under Section 138 NI Act. But you must follow strict deadlines.",
    steps: [
      {
        title: "Note the dishonour date",
        body: "Keep the cheque return memo from the bank. The clock starts from this date.",
      },
      {
        title: "Send a legal notice within 30 days",
        body: "Through a lawyer, by registered post or speed post, asking the issuer to pay within 15 days.",
      },
      {
        title: "Wait 15 days",
        body: "If payment does not come, you have 30 more days to file a complaint in the Magistrate's court where the cheque was presented.",
      },
      {
        title: "Penalty",
        body: "Up to 2 years jail and / or fine which may be twice the cheque amount. Most cases now settle, especially with online dispute resolution.",
      },
    ],
    laws: [
      {
        name: "Negotiable Instruments Act, 1881",
        section: "Section 138 & 142",
        note: "Cheque bounce offence, notice period, and jurisdiction.",
      },
    ],
    documents: [
      "Original bounced cheque",
      "Bank return memo (cheque dishonour memo)",
      "Copy of the legal notice with postal receipt",
      "Proof of the original transaction (invoice, agreement, loan document)",
    ],
    related: [
      { label: "Use the Cheque Bounce notice generator", href: "/toolkit#cheque-bounce" },
    ],
  },

  "ans:loan-recovery": {
    id: "ans:loan-recovery",
    category: "Money",
    title: "Someone has not returned my loan",
    oneLiner:
      "You have civil and (sometimes) criminal options. Pick based on whether you have a document.",
    steps: [
      {
        title: "Step 1 — Send a polite reminder",
        body: "WhatsApp / email asking for payment. This becomes evidence later. Keep screenshots.",
      },
      {
        title: "Step 2 — Send a legal demand notice",
        body: "Through a lawyer. Most people pay at this stage to avoid a court case.",
      },
      {
        title: "Step 3 — File a civil suit for recovery",
        body: "If the amount is up to ₹20 lakh — go to commercial court / small causes court (depends on state). Above that — district court.",
      },
      {
        title: "Step 4 — Summary suit (Order 37) for fast recovery",
        body: "If you have a written promise (cheque, promissory note, signed acknowledgment), Order 37 CPC gives a much faster judgment.",
      },
    ],
    laws: [
      { name: "Code of Civil Procedure, 1908", section: "Order 37", note: "Summary suit for liquidated demand." },
      { name: "Indian Contract Act, 1872", section: "Sections 73 & 74", note: "Damages and remedies for breach." },
    ],
  },

  "ans:recovery-harassment": {
    id: "ans:recovery-harassment",
    category: "Money",
    title: "Bank / loan app agents are harassing me",
    oneLiner:
      "RBI rules are strict — agents cannot call you outside 8 am–7 pm, abuse, threaten, or contact your relatives.",
    steps: [
      {
        title: "Record everything",
        body: "Save call recordings, SMS, WhatsApp. Note time, date, name and number of the agent.",
      },
      {
        title: "Complain to the bank / NBFC first",
        body: "Most banks have a 30-day window. File a written complaint and ask for a complaint number.",
      },
      {
        title: "Escalate to RBI Ombudsman online",
        body: "On cms.rbi.org.in — it is free and decisions come in a few months.",
      },
      {
        title: "For illegal loan apps — go straight to the police",
        body: "Cyber Crime Portal (cybercrime.gov.in) or 1930 helpline. Many apps have been banned by the government.",
      },
    ],
    laws: [
      { name: "RBI Master Directions", note: "Code of conduct for recovery agents — no calls before 8 am or after 7 pm, no abusive language, no contacting relatives." },
      { name: "BNS, 2023", section: "Sections 351 & 79", note: "Criminal intimidation and outraging modesty — for abusive agents." },
    ],
    helplines: [
      { name: "Cyber Crime", number: "1930" },
      { name: "RBI Ombudsman", number: "14448" },
    ],
  },

  "ans:money-suit": {
    id: "ans:money-suit",
    category: "Money",
    title: "Recover money from a company",
    oneLiner:
      "For business debts above ₹1 crore, IBC is the fastest. Below that, go to commercial court or MSME route.",
    steps: [
      {
        title: "If you are a small business (MSME) — use Section 18 of MSMED Act",
        body: "File a claim before MSME Samadhaan portal. Conciliation first, then arbitration. Interest is 3x bank rate — strong leverage.",
      },
      {
        title: "If amount is above ₹1 crore — IBC route",
        body: "Send a Section 8 demand notice. If the company does not pay or dispute in 10 days, file Section 9 application before NCLT.",
      },
      {
        title: "For other commercial debts",
        body: "Commercial courts handle disputes above ₹3 lakh in a fast-track manner under the Commercial Courts Act, 2015.",
      },
    ],
    laws: [
      { name: "MSMED Act, 2006", section: "Section 15 & 18", note: "Delayed payment to micro/small enterprises with statutory interest." },
      { name: "Insolvency and Bankruptcy Code, 2016", section: "Section 9", note: "Operational creditor's application." },
      { name: "Commercial Courts Act, 2015", note: "Fast-track commercial disputes." },
    ],
  },

  /* ---------------- Work ---------------- */
  "ans:salary-not-paid": {
    id: "ans:salary-not-paid",
    category: "Work",
    title: "My salary has not been paid",
    oneLiner:
      "You have three escalation routes. Start gentle — but the law gives you strong tools.",
    steps: [
      {
        title: "Send a written reminder to HR",
        body: "Mention exact months, amount, your bank account. Give 7 days. Keep this email as evidence.",
      },
      {
        title: "File under the Payment of Wages Act",
        body: "If your salary is up to ₹24,000 / month, you can file with the Labour Commissioner. They can recover salary + up to 10x penalty.",
      },
      {
        title: "Labour Court / civil suit for higher salaries",
        body: "If you earn more, file a civil suit for recovery of dues with interest. Courts grant interest at 12–18%.",
      },
      {
        title: "MSME route for freelancers / consultants",
        body: "If you are a registered MSME, use MSME Samadhaan portal for fast recovery with 3x bank rate interest.",
      },
    ],
    laws: [
      { name: "Code on Wages, 2019", note: "Replaces the Payment of Wages Act. Salary must be paid by 7th of the next month for establishments with up to 1000 workers." },
      { name: "Industrial Disputes Act, 1947", section: "Section 33C(2)", note: "Workman can recover money due in a summary way." },
    ],
  },

  "ans:posh": {
    id: "ans:posh",
    category: "Work",
    title: "Sexual harassment at workplace (POSH)",
    oneLiner:
      "Every workplace with 10+ workers must have an Internal Committee (IC). Complain to them in writing.",
    steps: [
      {
        title: "Write a complaint to the IC within 3 months of the incident",
        body: "The IC must have at least 4 members — half women, an external NGO/lawyer member, and a senior woman as Presiding Officer.",
      },
      {
        title: "IC must finish inquiry in 90 days",
        body: "They give you and the respondent a chance to be heard. They can record statements and call witnesses.",
      },
      {
        title: "Interim relief while inquiry is going on",
        body: "You can ask for: transfer of either of you, leave up to 3 months, or remote work. Your salary is not cut.",
      },
      {
        title: "Confidentiality and protection from retaliation",
        body: "Your name cannot be shared. Any revenge by the employer is itself an offence.",
      },
      {
        title: "If your office has no IC, go to the Local Committee",
        body: "The District Officer maintains a Local Committee for unorganised workers, domestic helpers, etc.",
      },
    ],
    laws: [
      { name: "Sexual Harassment of Women at Workplace Act, 2013", note: "The POSH Act — defines harassment, lays down the IC structure, inquiry, reliefs." },
      { name: "Bharatiya Nyaya Sanhita, 2023", section: "Section 75 & 79", note: "Criminal offences of sexual harassment and outraging modesty." },
    ],
    helplines: [
      { name: "She-Box (online portal)", number: "shebox.wcd.gov.in" },
      { name: "Women Helpline", number: "181" },
    ],
  },

  "ans:termination": {
    id: "ans:termination",
    category: "Work",
    title: "I was fired unfairly",
    oneLiner:
      "Indian law makes termination strict — notice, reason, dues, and (for workmen) prior permission for retrenchment.",
    steps: [
      {
        title: "Check your appointment letter",
        body: "Look at notice period, termination clause, and probation terms. If you were a 'permanent' employee, you have more protection.",
      },
      {
        title: "Confirm if you are a 'workman'",
        body: "If you do mostly clerical, technical, manual or supervisory (up to ₹18,000 / month) work, you are a 'workman' under the IDA — strong rights apply.",
      },
      {
        title: "Send a demand notice for full & final dues",
        body: "Salary till last day, leave encashment, gratuity (if 5 years), bonus, PF withdrawal — all must be cleared in 2 working days as per Code on Wages.",
      },
      {
        title: "Approach the Labour Commissioner / Industrial Tribunal",
        body: "File a dispute under Section 2A of the Industrial Disputes Act. Conciliation comes first, then tribunal. Reinstatement is a possible relief.",
      },
    ],
    laws: [
      { name: "Industrial Disputes Act, 1947", section: "Section 25F & 2A", note: "Conditions for retrenchment and individual dispute machinery." },
      { name: "Code on Wages, 2019", section: "Section 17", note: "All dues to be paid within 2 working days of termination." },
    ],
  },

  "ans:maternity": {
    id: "ans:maternity",
    category: "Work",
    title: "Maternity leave / benefits denied",
    oneLiner:
      "Every woman in an establishment with 10+ workers gets paid maternity leave. Denial is illegal.",
    steps: [
      {
        title: "Know your entitlement",
        body: "26 weeks paid leave for the first two children. 12 weeks for the third onwards. 12 weeks for adoptive / commissioning mothers (child under 3 months).",
      },
      {
        title: "Apply 8 weeks in advance with medical certificate",
        body: "Send a written application to HR. Keep a copy.",
      },
      {
        title: "Termination during maternity is illegal",
        body: "You cannot be fired while on maternity leave, or be denied benefits — except for proven gross misconduct.",
      },
      {
        title: "If denied — go to the Inspector",
        body: "File a complaint with the Inspector under the Maternity Benefit Act. Imprisonment up to 1 year for employer + fine.",
      },
    ],
    laws: [
      { name: "Maternity Benefit Act, 1961", note: "26 weeks paid leave, crèche facility (50+ workers), no termination during leave." },
    ],
  },

  /* ---------------- Consumer ---------------- */
  "ans:consumer-defect": {
    id: "ans:consumer-defect",
    category: "Consumer",
    title: "Product is defective or not delivered",
    oneLiner:
      "The Consumer Protection Act, 2019 is fast, cheap and you do not need a lawyer.",
    steps: [
      {
        title: "Try the company first",
        body: "Use their grievance helpline / app. Get a complaint number. Wait 30 days.",
      },
      {
        title: "Use the National Consumer Helpline first — it is free",
        body: "Call 1915 or use the NCH app / consumerhelpline.gov.in. Many complaints get resolved here without going to a forum.",
      },
      {
        title: "File on the e-Daakhil portal",
        body: "edaakhil.nic.in — fully online. Fees are very low (₹100–₹5,000) and you can file yourself.",
      },
      {
        title: "Pick the right forum based on value",
        body: "Up to ₹50 lakh — District Commission. ₹50 lakh – ₹2 crore — State Commission. Above ₹2 crore — National Commission.",
      },
    ],
    laws: [
      { name: "Consumer Protection Act, 2019", section: "Section 35", note: "Right to file a complaint for defective goods or deficient services." },
      { name: "Consumer Protection (E-Commerce) Rules, 2020", note: "Online platforms must clearly show return, refund, country of origin, etc." },
    ],
    documents: [
      "Invoice / order confirmation",
      "Payment proof",
      "All communication with the seller",
      "Photos / videos of the defect",
    ],
    helplines: [{ name: "National Consumer Helpline", number: "1915" }],
    related: [{ label: "Consumer Rights", href: "/laws/consumer-rights" }],
  },

  "ans:consumer-service": {
    id: "ans:consumer-service",
    category: "Consumer",
    title: "Bad service from a company (hospital, telco, airline...)",
    oneLiner:
      "'Deficient service' is also covered under the same Consumer Protection Act, 2019. The route is identical.",
    steps: [
      { title: "Send a formal complaint email", body: "Mention exact service, dates, what was promised, what was given, what you want." },
      { title: "Sector-specific ombudsman", body: "Banking — RBI Ombudsman. Insurance — IRDAI Bima Bharosa. Telecom — TRAI / DoT. Use these first if available." },
      { title: "File on e-Daakhil for compensation", body: "You can claim refund + compensation for mental harassment + costs." },
      { title: "Mediation can be requested", body: "Consumer Commissions have a mediation cell — it is faster than full litigation." },
    ],
    laws: [
      { name: "Consumer Protection Act, 2019", section: "Sections 2(11), 35", note: "Deficiency in service and remedies." },
    ],
    helplines: [{ name: "National Consumer Helpline", number: "1915" }],
  },

  "ans:consumer-fraud": {
    id: "ans:consumer-fraud",
    category: "Consumer",
    title: "I was cheated — fake product / fake seller",
    oneLiner:
      "This is both a consumer issue AND a criminal offence. Use both routes.",
    steps: [
      { title: "File a police complaint / FIR", body: "Under Section 318 BNS (cheating). For online fraud, the cyber portal is faster — cybercrime.gov.in or 1930." },
      { title: "Parallel consumer complaint", body: "On e-Daakhil for refund + compensation. The CrPC route is for punishment; the consumer route is for your money back." },
      { title: "Report to the platform", body: "If bought from Amazon, Flipkart, Meesho — file an A-to-Z claim or buyer protection ticket immediately. They often refund quickly." },
    ],
    laws: [
      { name: "Bharatiya Nyaya Sanhita, 2023", section: "Section 318", note: "Cheating — up to 7 years jail." },
      { name: "Consumer Protection Act, 2019", note: "Unfair trade practice and product liability." },
    ],
    helplines: [
      { name: "Cyber Crime", number: "1930" },
      { name: "Consumer Helpline", number: "1915" },
    ],
  },

  "ans:online-refund": {
    id: "ans:online-refund",
    category: "Consumer",
    title: "Online refund is stuck",
    oneLiner:
      "RBI has clear rules — failed transactions must be auto-refunded in 5–7 working days, with penalty for delay.",
    steps: [
      { title: "Wait the auto-reversal window", body: "For UPI / IMPS, banks must auto-reverse a failed transaction within T+1 day. For card transactions, up to 5 working days." },
      { title: "Raise a dispute with the bank", body: "Use net banking / app. Mention transaction reference (UTR/RRN). Keep the ticket number." },
      { title: "Penalty for delay", body: "RBI rules give you ₹100 per day after the auto-reversal window. Most banks pay this without a fight if you ask." },
      { title: "If bank does not act in 30 days — RBI Ombudsman", body: "cms.rbi.org.in — free, online, decisions in 60–90 days." },
    ],
    laws: [
      { name: "RBI Master Direction", note: "Turn Around Time (TAT) for failed transactions — circular dated 20 September 2019." },
    ],
    helplines: [{ name: "RBI Ombudsman", number: "14448" }],
  },

  /* ---------------- Digital ---------------- */
  "ans:cyber-fraud": {
    id: "ans:cyber-fraud",
    category: "Digital",
    title: "I lost money in an online / UPI fraud",
    stayCalm: "Speed matters. Reporting within 24 hours dramatically increases the chance of recovery.",
    oneLiner:
      "Call 1930. The faster you report, the faster the money can be frozen at the receiver's bank.",
    steps: [
      { title: "Call 1930 (national cyber helpline) immediately", body: "Have your UTR / transaction reference ready. They will start a hold on the receiving account." },
      { title: "File on cybercrime.gov.in", body: "Within 3 days ideally. Upload screenshots, SMS, fraudster's UPI ID / number / account." },
      { title: "Inform your bank", body: "Same day. Banks are required to reverse 'zero-liability' cases under RBI's Customer Liability circular if you report in time." },
      { title: "Disable card / change UPI PIN", body: "Block first, then complain. Reset all passwords. Check email recovery options." },
    ],
    laws: [
      { name: "IT Act, 2000", section: "Sections 43, 66, 66C, 66D", note: "Computer fraud, identity theft, cheating by personation." },
      { name: "BNS, 2023", section: "Section 318", note: "Cheating." },
      { name: "RBI Customer Liability circular (2017)", note: "Zero or limited liability if you report fraud quickly." },
    ],
    helplines: [
      { name: "Cyber Crime", number: "1930" },
      { name: "Bank fraud (RBI)", number: "14448" },
    ],
  },

  "ans:sextortion": {
    id: "ans:sextortion",
    category: "Digital",
    title: "Someone is blackmailing me with photos / videos",
    stayCalm:
      "You are the victim — not the criminal. Do not pay, do not panic, do not delete chats.",
    oneLiner:
      "Sextortion is a serious offence with strong police support. Anonymous reporting is allowed.",
    steps: [
      { title: "Do NOT pay — they will ask for more", body: "Most extortionists give up if payment stops. Cut off contact gracefully — block, then preserve evidence." },
      { title: "Preserve all evidence", body: "Screenshots of chats, profile, payment requests, video call screenshot if possible. Note their username and any phone numbers." },
      { title: "Report on the National Cyber Crime Portal", body: "cybercrime.gov.in — you can report anonymously. Use the women & child reporting portal if applicable." },
      { title: "Get the content taken down", body: "Use the platform's report feature. For non-consensual intimate content, platforms must take it down within 24 hours under IT Rules 2021." },
    ],
    laws: [
      { name: "BNS, 2023", section: "Section 308 & 351", note: "Extortion and criminal intimidation." },
      { name: "IT Act, 2000", section: "Sections 66E, 67, 67A", note: "Violation of privacy, transmitting obscene material." },
      { name: "IT Rules, 2021", section: "Rule 3(2)(b)", note: "Platforms must remove non-consensual intimate content within 24 hours of reporting." },
    ],
    helplines: [
      { name: "Cyber Crime", number: "1930" },
      { name: "Women / Child Cyber Cell", number: "1098 (CHILDLINE for minors)" },
    ],
  },

  "ans:fake-account": {
    id: "ans:fake-account",
    category: "Digital",
    title: "Someone made a fake account using my photo / name",
    oneLiner:
      "Impersonation is illegal. The fastest fix is platform takedown, but you can also file a case.",
    steps: [
      { title: "Report on the platform", body: "Instagram, Facebook, LinkedIn — all have 'impersonation' reporting. Upload your ID; takedown is usually within 48 hours." },
      { title: "Preserve the profile URL & screenshots", body: "Before reporting — the fake account often gets deleted, taking your evidence with it." },
      { title: "File a cyber complaint", body: "On cybercrime.gov.in under 'Other Cyber Crimes' → 'Online and Social Media Related Crime'." },
      { title: "Send a takedown notice to the platform", body: "Under Section 79 of the IT Act + Rule 3(2)(b) of the 2021 Rules — platforms must remove impersonating content within 24 hours of being notified." },
    ],
    laws: [
      { name: "IT Act, 2000", section: "Section 66C & 66D", note: "Identity theft and cheating by personation using a computer resource." },
      { name: "BNS, 2023", section: "Section 319", note: "Cheating by personation." },
    ],
    helplines: [{ name: "Cyber Crime", number: "1930" }],
  },

  "ans:dpdp": {
    id: "ans:dpdp",
    category: "Digital",
    title: "A company is misusing my personal data",
    oneLiner:
      "Under the new Digital Personal Data Protection Act, 2023, you have strong rights — and companies can be fined up to ₹250 crore.",
    steps: [
      { title: "Send a written request to the company's Data Protection Officer", body: "Ask them to (a) tell you what data they hold, (b) correct or delete it, (c) stop processing. They must respond in a reasonable time." },
      { title: "Withdraw consent in writing", body: "Once consent is withdrawn, they must stop processing unless another lawful ground exists." },
      { title: "Complain to the Data Protection Board", body: "If no proper response, you can file with the Board (online). Penalty for the company can be huge." },
      { title: "Parallel route — Right to be Forgotten", body: "Courts have already recognised this right under Article 21 (privacy)." },
    ],
    laws: [
      { name: "Digital Personal Data Protection Act, 2023", note: "Rights to access, correction, erasure, grievance redressal, and nominate." },
      { name: "Justice K.S. Puttaswamy v. Union of India (2017)", note: "Right to Privacy is a fundamental right under Article 21." },
    ],
  },

  /* ---------------- Property ---------------- */
  "ans:rera-delay": {
    id: "ans:rera-delay",
    category: "Property",
    title: "Builder is delaying my flat possession",
    oneLiner:
      "RERA gives strong remedies — refund with interest, possession with interest, or compensation. Pick the one that fits.",
    steps: [
      { title: "Check if the project is RERA-registered", body: "Search the state RERA website. Almost all ongoing residential projects must be registered." },
      { title: "Send a written notice referring to the BBA delivery date", body: "Mention the date promised in the Builder-Buyer Agreement, the delay, and ask for refund or possession with interest." },
      { title: "File a complaint with the state RERA Authority", body: "Online, low fees (~₹1,000–₹5,000), and decisions typically in 60 days." },
      { title: "Choose: refund with interest OR continue with delay interest", body: "Section 18 of RERA gives the buyer the option. Interest is paid at SBI MCLR + 2% (varies by state)." },
    ],
    laws: [
      { name: "RERA Act, 2016", section: "Section 18", note: "Buyer's option to withdraw with full refund + interest, or continue with delay interest." },
      { name: "Consumer Protection Act, 2019", note: "Parallel forum available — but RERA is usually faster." },
    ],
    related: [{ label: "Real Estate laws", href: "/laws/real-estate" }],
  },

  "ans:landlord": {
    id: "ans:landlord",
    category: "Property",
    title: "Landlord is troubling me / not returning deposit",
    oneLiner:
      "Most states have a Rent Control Act + a new Model Tenancy Act framework. The rules are clearer than you think.",
    steps: [
      { title: "Send a written notice for deposit return", body: "After vacating, the landlord must return your deposit (minus actual damages). 30 days is reasonable." },
      { title: "If they refuse — go to Rent Authority / civil court", body: "States that have adopted the Model Tenancy Act have a Rent Authority — fast and cheap. Otherwise, file a civil suit for recovery." },
      { title: "Avoid 'illegal eviction'", body: "Cutting off water / electricity, changing locks, or threatening you is illegal under the MTA and BNS." },
      { title: "Police complaint for harassment", body: "If the landlord enters without consent, threatens, or assaults — call 112 and file an FIR." },
    ],
    laws: [
      { name: "Model Tenancy Act, 2021", note: "Capped security deposit (2 months residential), Rent Authority, fast disputes." },
      { name: "State Rent Control Acts", note: "Vary by state — check your local Act." },
    ],
  },

  "ans:trespass": {
    id: "ans:trespass",
    category: "Property",
    title: "Someone is illegally on my land",
    oneLiner:
      "Move quickly. Adverse possession can be claimed after 12 years of open occupation. Do not delay.",
    steps: [
      { title: "Document the encroachment", body: "Photos, videos with date, witness statements, panchayat / society records. Get a fresh survey if possible." },
      { title: "Police complaint for criminal trespass", body: "Under Section 329 BNS — but police often treat this as a civil matter unless violence is involved." },
      { title: "Civil suit for possession + injunction", body: "Under Section 5 of the Specific Relief Act. Ask the court to also stop them from constructing further while the case is on." },
      { title: "Mutation & municipal complaint", body: "Update revenue records in your name, file a complaint with the municipal body for any illegal construction." },
    ],
    laws: [
      { name: "Specific Relief Act, 1963", section: "Section 5 & 6", note: "Recovery of possession of immovable property." },
      { name: "Limitation Act, 1963", section: "Article 65", note: "12 years to file a suit for possession based on title." },
      { name: "BNS, 2023", section: "Section 329", note: "Criminal trespass and house trespass." },
    ],
  },

  "ans:family-property": {
    id: "ans:family-property",
    category: "Property",
    title: "Property dispute with my own family",
    oneLiner:
      "Try mediation first — courts now strongly push for settlement. If that fails, file a partition suit.",
    steps: [
      { title: "Know your share clearly", body: "For Hindus, daughters have equal coparcenary rights since the 2005 amendment. List ancestral vs self-acquired property separately." },
      { title: "Try mediation through a family court / panchayat", body: "Even a written family settlement (Memorandum of Family Settlement) — properly stamped — is enforceable in court." },
      { title: "If that fails — file a partition suit", body: "In the district civil court. Court appoints a commissioner to physically divide property or order sale and distribution." },
      { title: "Protect the property during the case", body: "Apply for an injunction so no co-owner can sell or alienate while the case is going on." },
    ],
    laws: [
      { name: "Hindu Succession Act, 1956", section: "Section 6", note: "Daughters have equal coparcenary rights since 2005 amendment." },
      { name: "Partition Act, 1893", note: "Court can sell and distribute proceeds when physical division is impossible." },
    ],
    related: [{ label: "Property laws", href: "/laws/property-laws" }],
  },

  /* ---------------- Notices ---------------- */
  "ans:it-notice": {
    id: "ans:it-notice",
    category: "Tax",
    title: "I got an Income Tax notice",
    oneLiner:
      "Do not panic. Most notices are routine. Read the section — that tells you exactly what is needed.",
    steps: [
      { title: "Check authenticity", body: "Every genuine notice has a Document Identification Number (DIN). Verify on the e-filing portal under 'Authenticate notice'." },
      { title: "Find the section quoted in the notice", body: "143(1) = intimation, 139(9) = defective return, 142(1) = ask for documents, 148 = reassessment. Each has a different deadline." },
      { title: "Respond on the e-filing portal", body: "Inside the deadline (usually 30 days). Even a 'no further action needed' notice should be acknowledged." },
      { title: "Take a CA / lawyer for big notices", body: "143(3) full scrutiny, 148 reassessment, or anything alleging income above ₹50 lakh — get professional help." },
    ],
    laws: [
      { name: "Income Tax Act, 1961", section: "Sections 139, 142, 143, 148", note: "Filing, defective returns, inquiry, assessment, reassessment." },
    ],
    related: [{ label: "Tax laws", href: "/laws/tax-laws" }],
  },

  "ans:gst-notice": {
    id: "ans:gst-notice",
    category: "Tax",
    title: "I got a GST notice / show cause",
    oneLiner:
      "Most notices come on GST portal itself. Read the form number — that decides your deadline.",
    steps: [
      { title: "Check the notice form", body: "ASMT-10 = discrepancy, DRC-01 = show cause, DRC-01A = pre-show-cause hearing. Each has its own timeline (usually 7–30 days)." },
      { title: "Download all annexures from the GST portal", body: "Match GSTR-1 vs GSTR-3B, ITC vs 2B. Most disputes are mismatches that can be cleared with a reconciliation." },
      { title: "File reply with documents", body: "On the GST portal itself. Late filing leads to ex-parte order — much harder to fix later." },
      { title: "Appeal if order is wrong", body: "First appeal under Section 107 — within 3 months. Mandatory 10% pre-deposit of disputed tax." },
    ],
    laws: [
      { name: "CGST Act, 2017", section: "Sections 73, 74, 107", note: "Demand without fraud, with fraud, and appeal procedure." },
    ],
  },

  "ans:legal-notice": {
    id: "ans:legal-notice",
    category: "General",
    title: "I got a legal notice from a lawyer / company",
    oneLiner:
      "Do not ignore. Reply on time, in writing. Even if you disagree, a calm, fact-based reply is the best step.",
    steps: [
      { title: "Read the notice fully — twice", body: "Note the section quoted, the deadline (usually 15 or 30 days), and the exact claim." },
      { title: "Do not call angrily", body: "Anything you say can be used. Keep everything in writing." },
      { title: "Get a lawyer to draft a reply", body: "A clean, professional reply on the timeline often makes the other side drop the case — or settle." },
      { title: "Keep proof of dispatch", body: "Reply by speed post + email. Keep tracking and read receipts." },
    ],
    laws: [
      { name: "Code of Civil Procedure, 1908", section: "Section 80", note: "Notice before a civil suit against the government." },
      { name: "Specific Relief Act, 1963", note: "Often quoted for performance and injunction claims." },
    ],
  },

  "ans:challan": {
    id: "ans:challan",
    category: "General",
    title: "Traffic / police challan",
    oneLiner:
      "You can pay online — or contest. Many wrongly issued e-challans get cancelled at Lok Adalat or Virtual Court.",
    steps: [
      { title: "Check the challan online", body: "On the Parivahan portal (echallan.parivahan.gov.in). Verify the photo, location, and time." },
      { title: "If correct, pay online", body: "Discounts of up to 50% are sometimes offered at Lok Adalats organised every quarter." },
      { title: "If wrong — contest at Virtual Court", body: "Many states now have a Virtual Traffic Court — file objection with proof (photos showing your vehicle was elsewhere, etc.)." },
      { title: "Repeat offence = licence suspension", body: "Drunk driving and speeding can lead to disqualification under Section 19 of the MV Act." },
    ],
    laws: [
      { name: "Motor Vehicles Act, 1988 (as amended in 2019)", note: "Updated higher penalties for over-speeding, drunk driving, no helmet, etc." },
    ],
  },
};

/* ---------------------------------------------------------------- */
/* Helpers                                                             */
/* ---------------------------------------------------------------- */

export function getNode(id: string): AskNode | undefined {
  return askNodes[id];
}

export function getAnswer(id: string): AskAnswer | undefined {
  return askAnswers[id];
}

export function isAnswer(next: string): boolean {
  return next.startsWith("ans:");
}
