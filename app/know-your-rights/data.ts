import {
  AlertCircle,
  Building,
  Heart,
  Phone,
  ScrollText,
  ShieldCheck,
  Briefcase,
  Banknote,
  Users,
  MonitorSmartphone,
  Home,
  Scale,
  Car,
  Plane,
  ShoppingCart,
  CreditCard,
  FileText,
  FileWarning,
  Baby,
  Landmark,
  Lock,
  VolumeX,
  Shield,
  UserX,
  Stethoscope,
  TreePine,
  ShieldAlert
} from "lucide-react";

export type ScenarioStep = {
  title: string;
  description: string;
};

export type ScenarioDetail = {
  slug: string;
  title: string;
  tag: string;
  color: "saffron" | "india" | "terracotta" | "marigold";
  iconName: any;
  description: string;
  lawAndSection: string;
  remedy: string;
  steps: ScenarioStep[];
  documents: string[];
  whereToGo: string;
};

export const scenariosData: ScenarioDetail[] = [
  {
    "slug": "arrest",
    "title": "I'm being arrested",
    "tag": "Criminal",
    "color": "saffron",
    iconName: AlertCircle,
    "description": "You have been approached by the police for an arrest and you want to know your immediate rights and protections under the law.",
    "lawAndSection": "Section 35 to 60 of Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 (formerly CrPC). Article 22 of the Constitution of India.",
    "remedy": "Right to know the grounds of arrest, right to a lawyer, and right to be produced before a magistrate within 24 hours.",
    "steps": [
      {
        "title": "Ask for an Arrest Memo",
        "description": "The police must prepare an arrest memo detailing the time, date, and grounds of arrest, which must be countersigned by a witness."
      },
      {
        "title": "Inform a relative or friend",
        "description": "You have the right to notify a person of your choice about your arrest immediately."
      },
      {
        "title": "Request medical examination",
        "description": "You can request a medical examination to record any pre-existing injuries and ensure safety."
      },
      {
        "title": "Consult a lawyer",
        "description": "Invoke your right to consult an advocate of your choice during interrogation."
      }
    ],
    "documents": [
      "Arrest Memo",
      "Medical Report",
      "Identity Proof"
    ],
    "whereToGo": "Local Police Station, and then to the Judicial Magistrate within 24 hours."
  },
  {
    "slug": "consumer-order",
    "title": "My order didn't arrive",
    "tag": "Consumer",
    "color": "india",
    iconName: Phone,
    "description": "You ordered a product or service online, paid for it, but the seller hasn't delivered it and is unresponsive.",
    "lawAndSection": "Section 35 of the Consumer Protection Act, 2019.",
    "remedy": "Refund of the amount paid, along with compensation for deficiency in service and mental agony.",
    "steps": [
      {
        "title": "Send a written notice",
        "description": "Email or send a registered letter to the company's grievance officer demanding a refund within a stipulated time."
      },
      {
        "title": "File on National Consumer Helpline (NCH)",
        "description": "Register a grievance on the NCH portal or call 1915 for pre-litigation resolution."
      },
      {
        "title": "File a consumer complaint",
        "description": "If unresolved, file a formal complaint online via the e-Daakhil portal or at the District Consumer Commission."
      }
    ],
    "documents": [
      "Invoice/Receipt",
      "Payment Proof",
      "Emails/Chats with Customer Support"
    ],
    "whereToGo": "e-Daakhil Portal or District Consumer Commission."
  },
  {
    "slug": "rera-delay",
    "title": "My builder is delaying possession",
    "tag": "Real Estate",
    "color": "terracotta",
    iconName: Building,
    "description": "You bought a flat but the developer has crossed the promised delivery date mentioned in the agreement.",
    "lawAndSection": "Section 18 of the Real Estate (Regulation and Development) Act (RERA), 2016.",
    "remedy": "Right to claim a refund with interest, or claim delayed possession interest for every month of delay.",
    "steps": [
      {
        "title": "Check the RERA agreement",
        "description": "Review the date of possession and the grace period clause in your registered agreement for sale."
      },
      {
        "title": "Send a legal notice",
        "description": "Send a formal notice to the builder demanding possession or refund with interest."
      },
      {
        "title": "File a RERA complaint",
        "description": "File a complaint online on your state's RERA website against the promoter."
      }
    ],
    "documents": [
      "Registered Agreement for Sale",
      "Payment Receipts",
      "Allotment Letter",
      "Communication with Builder"
    ],
    "whereToGo": "State RERA Authority Portal."
  },
  {
    "slug": "divorce",
    "title": "I'm filing for divorce",
    "tag": "Family",
    "color": "saffron",
    iconName: Heart,
    "description": "You have decided to legally dissolve your marriage.",
    "lawAndSection": "Section 13 (Contested) or 13B (Mutual Consent) of the Hindu Marriage Act, 1955 (or respective personal laws).",
    "remedy": "Decree of divorce, alimony/maintenance, and child custody arrangements.",
    "steps": [
      {
        "title": "Decide the type of divorce",
        "description": "Determine if it will be a mutual consent divorce (both agree) or contested (based on cruelty, adultery, desertion, etc.)."
      },
      {
        "title": "Draft the petition",
        "description": "Engage a lawyer to draft the divorce petition detailing the grounds and terms."
      },
      {
        "title": "File in Family Court",
        "description": "Submit the petition to the Family Court where you last resided together or where the marriage took place."
      },
      {
        "title": "Attend counseling/mediation",
        "description": "Courts usually mandate a cooling-off period and mediation before granting the divorce."
      }
    ],
    "documents": [
      "Marriage Certificate",
      "Address Proof",
      "Photographs of Marriage",
      "Financial Disclosures (for alimony)"
    ],
    "whereToGo": "Family Court."
  },
  {
    "slug": "it-notice",
    "title": "Got a notice from IT Department",
    "tag": "Tax",
    "color": "marigold",
    iconName: ScrollText,
    "description": "You received a tax demand or scrutiny notice from the Income Tax Department.",
    "lawAndSection": "Section 143(1) (Intimation), 143(2) (Scrutiny), or 148 (Reassessment) of the Income Tax Act, 1961.",
    "remedy": "Respond online explaining the discrepancy or correcting your tax return.",
    "steps": [
      {
        "title": "Identify the notice type",
        "description": "Check the section under which the notice is issued and the deadline for response."
      },
      {
        "title": "Log into the e-Filing portal",
        "description": "Go to the Income Tax e-Filing portal, check the 'Pending Actions' or 'e-Proceedings' tab."
      },
      {
        "title": "Prepare your response",
        "description": "Gather Form 16, bank statements, and investment proofs to justify your filed return."
      },
      {
        "title": "Submit online",
        "description": "File your response or a revised return within the stipulated time (usually 15-30 days)."
      }
    ],
    "documents": [
      "ITR Copy",
      "Form 16/16A",
      "Bank Statements",
      "Investment Proofs"
    ],
    "whereToGo": "Income Tax e-Filing Portal (online)."
  },
  {
    "slug": "fired-without-notice",
    "title": "I was fired without notice",
    "tag": "Labour",
    "color": "india",
    iconName: Briefcase,
    "description": "Your employer terminated your employment immediately without providing the notice period or severance pay.",
    "lawAndSection": "Industrial Disputes Act, 1947 and State Shops & Establishments Acts. Employment Contract terms.",
    "remedy": "Payment in lieu of notice, unpaid dues, and potential reinstatement if termination was unlawful.",
    "steps": [
      {
        "title": "Review your contract",
        "description": "Check your appointment letter for the agreed notice period and termination clauses."
      },
      {
        "title": "Send an email to HR",
        "description": "Formally request a written reason for termination and ask for your full and final settlement."
      },
      {
        "title": "Send a legal notice",
        "description": "If they refuse to pay, have a lawyer send a legal notice demanding your dues."
      },
      {
        "title": "Approach Labour Court",
        "description": "If you fall under the definition of a 'workman', approach the Labour Commissioner."
      }
    ],
    "documents": [
      "Employment Contract",
      "Termination Letter/Email",
      "Salary Slips",
      "Bank Statement"
    ],
    "whereToGo": "Labour Commissioner's Office or Civil Court."
  },
  {
    "slug": "cheque-bounce",
    "title": "Cheque bounced on me",
    "tag": "Banking",
    "color": "marigold",
    iconName: Banknote,
    "description": "A cheque issued to you was returned unpaid by the bank due to insufficient funds.",
    "lawAndSection": "Section 138 of the Negotiable Instruments Act, 1881.",
    "remedy": "Recovery of the cheque amount, and potential imprisonment or fine for the issuer.",
    "steps": [
      {
        "title": "Get the Return Memo",
        "description": "Collect the original bounced cheque and the 'cheque return memo' from your bank."
      },
      {
        "title": "Send a Demand Notice",
        "description": "You MUST send a legal notice to the issuer within 30 days of receiving the return memo, demanding payment within 15 days."
      },
      {
        "title": "Wait 15 days",
        "description": "Give the issuer 15 days from the receipt of the notice to make the payment."
      },
      {
        "title": "File a complaint",
        "description": "If unpaid, file a criminal complaint in the Magistrate court within 30 days after the 15-day period expires."
      }
    ],
    "documents": [
      "Original Cheque",
      "Bank Return Memo",
      "Copy of Legal Notice",
      "Postal Receipt of Notice"
    ],
    "whereToGo": "Magistrate Court of your jurisdiction."
  },
  {
    "slug": "posh",
    "title": "Facing workplace harassment",
    "tag": "POSH",
    "color": "saffron",
    iconName: Users,
    "description": "You are experiencing sexual harassment at your workplace.",
    "lawAndSection": "Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 (POSH Act).",
    "remedy": "Disciplinary action against the perpetrator, transfer, and compensation.",
    "steps": [
      {
        "title": "Identify the IC",
        "description": "Find out the members of the Internal Committee (IC) at your workplace."
      },
      {
        "title": "Submit a written complaint",
        "description": "File a formal written complaint to the IC within 3 months of the incident."
      },
      {
        "title": "Opt for conciliation",
        "description": "You can choose to settle the matter through conciliation before an inquiry starts, but monetary settlement is not allowed."
      },
      {
        "title": "Participate in the inquiry",
        "description": "Provide evidence and witnesses. The IC must complete the inquiry within 90 days."
      }
    ],
    "documents": [
      "Written Complaint",
      "Emails/Messages proving harassment",
      "List of Witnesses"
    ],
    "whereToGo": "Internal Committee (IC) of your company, or Local Committee (LC) if IC doesn't exist."
  },
  {
    "slug": "data-leak",
    "title": "Someone leaked my data",
    "tag": "Digital",
    "color": "india",
    iconName: MonitorSmartphone,
    "description": "Your personal, sensitive, or financial information has been published or leaked online without your consent.",
    "lawAndSection": "Section 43A and 66E of the Information Technology Act, 2000. Digital Personal Data Protection Act, 2023.",
    "remedy": "Compensation for data breach and criminal prosecution of the leaker.",
    "steps": [
      {
        "title": "Preserve evidence",
        "description": "Take screenshots and archive links showing where and how your data was leaked."
      },
      {
        "title": "Report to the platform",
        "description": "Use the grievance mechanism of the website or app to take down the leaked data."
      },
      {
        "title": "File a Cyber Crime complaint",
        "description": "Register a complaint at cybercrime.gov.in or your local cyber police station."
      }
    ],
    "documents": [
      "Screenshots of Leak",
      "URLs/Links",
      "Communication with the Platform"
    ],
    "whereToGo": "National Cyber Crime Reporting Portal (cybercrime.gov.in)."
  },
  {
    "slug": "fir-refusal",
    "title": "Police won't file my FIR",
    "tag": "Criminal",
    "color": "saffron",
    iconName: ShieldCheck,
    "description": "The local police station is refusing to register your First Information Report (FIR) for a cognizable offense.",
    "lawAndSection": "Section 173 of Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 (formerly Section 154 CrPC).",
    "remedy": "Mandatory registration of FIR and investigation by the police.",
    "steps": [
      {
        "title": "Write to the SP/DCP",
        "description": "Send your complaint in writing via registered post to the Superintendent of Police or DCP."
      },
      {
        "title": "File online",
        "description": "Use the state police portal to file an e-FIR for certain offenses."
      },
      {
        "title": "Approach a Magistrate",
        "description": "If the SP does not act, hire a lawyer and file a complaint before the Judicial Magistrate under Section 175(3) BNSS to direct the police to register the FIR."
      }
    ],
    "documents": [
      "Written Complaint",
      "Proof of dispatch to SP",
      "Evidence of the offense"
    ],
    "whereToGo": "Office of the SP/DCP, or Judicial Magistrate Court."
  },
  {
    "slug": "dowry",
    "title": "Dowry harassment",
    "tag": "Family",
    "color": "terracotta",
    iconName: AlertCircle,
    "description": "You are being subjected to cruelty or demands for dowry by your husband or his relatives.",
    "lawAndSection": "Section 85 of Bharatiya Nyaya Sanhita (BNS), 2023 (formerly 498A IPC). Dowry Prohibition Act, 1961.",
    "remedy": "Arrest of the accused, protection orders, and recovery of stridhan.",
    "steps": [
      {
        "title": "Contact Women's Helpline",
        "description": "Call 1091 (Women Helpline) or 112 for immediate emergency assistance."
      },
      {
        "title": "File a police complaint",
        "description": "Submit a detailed written complaint at the local police station or Mahila Thana."
      },
      {
        "title": "File under DV Act",
        "description": "You can simultaneously file a case under the Protection of Women from Domestic Violence Act for residence, maintenance, and protection orders."
      }
    ],
    "documents": [
      "Medical reports of injuries",
      "List of Stridhan",
      "Audio/Video evidence",
      "Witness statements"
    ],
    "whereToGo": "Local Police Station (Mahila Thana) or Magistrate Court."
  },
  {
    "slug": "loan-recovery",
    "title": "Loan recovery agent threats",
    "tag": "Banking",
    "color": "marigold",
    iconName: Banknote,
    "description": "Recovery agents are using abusive language, threatening you, or calling at odd hours to recover a loan.",
    "lawAndSection": "RBI Guidelines on Fair Practices Code. Section 351 of Bharatiya Nyaya Sanhita (BNS), 2023 (Criminal Intimidation).",
    "remedy": "Immediate stop to harassment and compensation from the bank/NBFC.",
    "steps": [
      {
        "title": "Record the harassment",
        "description": "Record phone calls and save threatening messages or emails from the agents."
      },
      {
        "title": "Complain to the Bank",
        "description": "Lodge a formal grievance with the nodal officer of the bank or NBFC."
      },
      {
        "title": "Approach RBI Ombudsman",
        "description": "If the bank doesn't resolve it in 30 days, file a complaint on the RBI Ombudsman portal."
      },
      {
        "title": "File a Police Complaint",
        "description": "If there are threats to life or physical violence, file an FIR for criminal intimidation."
      }
    ],
    "documents": [
      "Call Recordings",
      "Screenshots of Messages",
      "Loan Account Details",
      "Bank Complaint Copy"
    ],
    "whereToGo": "Bank's Grievance Cell, RBI Ombudsman, or Local Police Station."
  },
  {
    "slug": "tenant-eviction",
    "title": "Tenant refusing to vacate",
    "tag": "Real Estate",
    "color": "terracotta",
    iconName: Home,
    "description": "Your lease agreement has expired or the tenant has breached terms, but they are refusing to vacate your property.",
    "lawAndSection": "Section 106 of Transfer of Property Act, 1882 & Respective State Rent Control Acts.",
    "remedy": "Eviction order from the court and recovery of unpaid rent or mesne profits.",
    "steps": [
      {
        "title": "Send a Legal Notice",
        "description": "Issue a formal legal notice granting them a specified time (usually 15-30 days) to vacate the premises."
      },
      {
        "title": "Do NOT use force",
        "description": "Do not disconnect electricity, water, or try to forcefully remove their belongings, as this can backfire legally."
      },
      {
        "title": "File an Eviction Suit",
        "description": "If they don't vacate after the notice period, file an eviction suit in the civil court or rent control court."
      }
    ],
    "documents": [
      "Registered Rent Agreement",
      "Copy of Legal Notice",
      "Postal Receipts",
      "Property Ownership Proof"
    ],
    "whereToGo": "Rent Control Court or District Civil Court."
  },
  {
    "slug": "security-deposit",
    "title": "Landlord won't return deposit",
    "tag": "Real Estate",
    "color": "terracotta",
    iconName: Banknote,
    "description": "You have vacated the rented property, but the landlord is refusing to refund your security deposit without valid reason.",
    "lawAndSection": "Indian Contract Act, 1872 & Respective State Rent Control Acts.",
    "remedy": "Refund of the security deposit along with interest for the delayed period.",
    "steps": [
      {
        "title": "Review the agreement",
        "description": "Check the clauses regarding deductions (like painting/repairs) and the timeline for returning the deposit."
      },
      {
        "title": "Send a Legal Notice",
        "description": "Have a lawyer send a notice demanding the refund within 15 days."
      },
      {
        "title": "File a Recovery Suit",
        "description": "File a summary suit for recovery of money or approach the Rent Control Authority/Consumer Forum."
      }
    ],
    "documents": [
      "Rent Agreement",
      "Proof of Deposit Payment",
      "Handover Documentation",
      "Photos of vacated property"
    ],
    "whereToGo": "Civil Court or State Rent Authority."
  },
  {
    "slug": "child-custody",
    "title": "I want to claim child custody",
    "tag": "Family",
    "color": "saffron",
    iconName: Baby,
    "description": "You are separating from your spouse and want to gain legal custody of your minor child.",
    "lawAndSection": "Section 26 of Hindu Marriage Act, 1955. Guardians and Wards Act, 1890.",
    "remedy": "Physical or joint custody of the child, and visitation rights.",
    "steps": [
      {
        "title": "Determine best interests",
        "description": "Courts prioritize the 'welfare of the child' above all else. Gather evidence showing you can provide a stable environment."
      },
      {
        "title": "File a Petition",
        "description": "File a custody petition in the Family Court under the relevant personal law or Guardians and Wards Act."
      },
      {
        "title": "Seek interim custody",
        "description": "You can apply for temporary custody or visitation rights while the main case is pending."
      }
    ],
    "documents": [
      "Child's Birth Certificate",
      "School Records",
      "Financial Stability Proof",
      "Proof of Spouse's Unfitness (if applicable)"
    ],
    "whereToGo": "Family Court having jurisdiction where the child ordinarily resides."
  },
  {
    "slug": "maternity-leave",
    "title": "Denied maternity leave",
    "tag": "Labour",
    "color": "india",
    iconName: Baby,
    "description": "Your employer is refusing to grant you paid maternity leave or is threatening to terminate you because of your pregnancy.",
    "lawAndSection": "Maternity Benefit (Amendment) Act, 2017.",
    "remedy": "26 weeks of paid maternity leave, protection from termination, and a medical bonus.",
    "steps": [
      {
        "title": "Check eligibility",
        "description": "You must have worked in the establishment for at least 80 days in the past 12 months."
      },
      {
        "title": "Notify Employer",
        "description": "Give written notice to your employer requesting maternity leave, supported by a medical certificate."
      },
      {
        "title": "File a Complaint",
        "description": "If denied or terminated, file a complaint with the Labour Inspector or Labour Court."
      }
    ],
    "documents": [
      "Medical Certificate of Pregnancy",
      "Employment Contract",
      "Written Notice to HR",
      "Payslips"
    ],
    "whereToGo": "Labour Commissioner's Office or Industrial Tribunal."
  },
  {
    "slug": "pf-default",
    "title": "Employer didn't deposit PF",
    "tag": "Labour",
    "color": "india",
    iconName: Landmark,
    "description": "Your employer is deducting Provident Fund (PF) from your salary but is not depositing it into your EPFO account.",
    "lawAndSection": "Employees' Provident Funds and Miscellaneous Provisions Act, 1952. Section 405 BNS (Criminal Breach of Trust).",
    "remedy": "Recovery of PF dues with interest and penal damages from the employer.",
    "steps": [
      {
        "title": "Check your EPF Passbook",
        "description": "Log into the EPFO member portal and download your passbook to verify the missing months."
      },
      {
        "title": "Raise Grievance on EPFiGMS",
        "description": "Register a complaint online on the EPFiGMS portal against your employer."
      },
      {
        "title": "File a Police Complaint",
        "description": "Non-deposit of deducted PF is a criminal offense. You can file an FIR for criminal breach of trust."
      }
    ],
    "documents": [
      "Salary Slips showing deductions",
      "EPF Passbook",
      "Bank Statements",
      "UAN Details"
    ],
    "whereToGo": "EPFO Grievance Portal (EPFiGMS) or Regional PF Commissioner."
  },
  {
    "slug": "medical-negligence",
    "title": "Medical negligence by doctor",
    "tag": "Consumer",
    "color": "india",
    iconName: Stethoscope,
    "description": "You or a family member suffered harm due to incorrect treatment, misdiagnosis, or negligence by a doctor or hospital.",
    "lawAndSection": "Consumer Protection Act, 2019. Section 106 of Bharatiya Nyaya Sanhita (BNS) for death by negligence.",
    "remedy": "Monetary compensation for damages, medical costs, mental agony, and suspension of the doctor's license.",
    "steps": [
      {
        "title": "Collect all medical records",
        "description": "Immediately secure all prescriptions, test reports, discharge summaries, and bills."
      },
      {
        "title": "Get an expert opinion",
        "description": "Consult an independent doctor to establish that standard medical protocols were breached."
      },
      {
        "title": "File complaints",
        "description": "File a consumer complaint for compensation, and report the doctor to the State Medical Council for disciplinary action."
      }
    ],
    "documents": [
      "Medical Prescriptions",
      "Test Reports",
      "Hospital Bills",
      "Independent Expert Opinion"
    ],
    "whereToGo": "District/State Consumer Commission and State Medical Council."
  },
  {
    "slug": "flight-delay",
    "title": "Flight was delayed/cancelled",
    "tag": "Consumer",
    "color": "marigold",
    iconName: Plane,
    "description": "Your domestic flight was significantly delayed, cancelled, or you were denied boarding due to overbooking.",
    "lawAndSection": "DGCA Civil Aviation Requirements (CAR) Section 3, Series M, Part IV.",
    "remedy": "Free meals, hotel accommodation, alternate flights, or monetary compensation up to ₹20,000.",
    "steps": [
      {
        "title": "Demand immediate assistance",
        "description": "For delays over 2-4 hours, airlines must provide free meals and refreshments. For longer delays, hotel accommodation."
      },
      {
        "title": "Ask for compensation",
        "description": "If cancelled without 24 hours notice or denied boarding, demand compensation as per DGCA matrix at the counter."
      },
      {
        "title": "Register on AirSewa",
        "description": "If the airline refuses, file a grievance on the Ministry of Civil Aviation's AirSewa portal or app."
      }
    ],
    "documents": [
      "Boarding Pass / Ticket",
      "Communication from Airline",
      "Receipts of expenses incurred due to delay"
    ],
    "whereToGo": "AirSewa Portal (airsewa.gov.in) or Consumer Court."
  },
  {
    "slug": "upi-fraud",
    "title": "Money deducted in UPI fraud",
    "tag": "Banking",
    "color": "marigold",
    iconName: MonitorSmartphone,
    "description": "You were scammed into scanning a QR code or entering your UPI PIN, and money was deducted from your account.",
    "lawAndSection": "RBI Guidelines on Customer Liability in Unauthorized Electronic Banking Transactions. IT Act, 2000.",
    "remedy": "Reversal of the defrauded amount if reported within 3 days.",
    "steps": [
      {
        "title": "Call 1930 immediately",
        "description": "Dial the National Cyber Crime Helpline (1930) as soon as possible to freeze the transaction."
      },
      {
        "title": "Report to your Bank",
        "description": "Inform your bank within 3 working days. Under RBI rules, your liability is zero if reported promptly."
      },
      {
        "title": "File a Cyber Complaint",
        "description": "Register a formal complaint on the National Cyber Crime Reporting Portal."
      }
    ],
    "documents": [
      "Bank Statement",
      "Transaction SMS/Email",
      "UPI App Screenshot",
      "Copy of Cyber Complaint"
    ],
    "whereToGo": "Bank's Nodal Officer and cybercrime.gov.in."
  },
  {
    "slug": "credit-card-fraud",
    "title": "Credit card wrongfully charged",
    "tag": "Banking",
    "color": "marigold",
    iconName: CreditCard,
    "description": "You noticed unauthorized international or domestic transactions on your credit card.",
    "lawAndSection": "RBI Guidelines on Limiting Liability of Customers in Unauthorized Electronic Banking Transactions.",
    "remedy": "Full reversal of the unauthorized amount (Zero Liability) if reported within 3 days.",
    "steps": [
      {
        "title": "Block the card",
        "description": "Immediately use your banking app or call customer care to permanently block the credit card."
      },
      {
        "title": "Report the fraud",
        "description": "File a dispute form with your bank within 3 days of the transaction."
      },
      {
        "title": "Escalate if needed",
        "description": "If the bank refuses to reverse the charge within 90 days, escalate to the RBI Ombudsman."
      }
    ],
    "documents": [
      "Credit Card Statement",
      "Fraud Dispute Form",
      "Copy of FIR/Cyber complaint"
    ],
    "whereToGo": "Card Issuing Bank, then RBI Ombudsman."
  },
  {
    "slug": "rti-application",
    "title": "Filing an RTI application",
    "tag": "Civil",
    "color": "india",
    iconName: FileText,
    "description": "You want to request official information, documents, or records from a government department or public authority.",
    "lawAndSection": "Section 6 of the Right to Information (RTI) Act, 2005.",
    "remedy": "Right to receive the requested information within 30 days (or 48 hours if it concerns life and liberty).",
    "steps": [
      {
        "title": "Identify the Public Authority",
        "description": "Determine which government department holds the information and find their Public Information Officer (PIO)."
      },
      {
        "title": "Draft the Application",
        "description": "Write a clear, specific application asking for the documents. Pay the nominal fee (usually ₹10)."
      },
      {
        "title": "Submit Online/Offline",
        "description": "Submit via the RTI Online portal (for central govt) or send via Speed Post to the PIO."
      },
      {
        "title": "File First Appeal",
        "description": "If no reply in 30 days or the reply is unsatisfactory, file a First Appeal with the Appellate Authority."
      }
    ],
    "documents": [
      "RTI Application",
      "Proof of Fee Payment",
      "Identity Proof (if requested)"
    ],
    "whereToGo": "RTI Online Portal (rtionline.gov.in) or specific Govt Department."
  },
  {
    "slug": "online-defamation",
    "title": "Someone defamed me online",
    "tag": "Criminal",
    "color": "saffron",
    iconName: UserX,
    "description": "Someone has posted false, malicious, or derogatory statements about you on social media, harming your reputation.",
    "lawAndSection": "Section 356 of Bharatiya Nyaya Sanhita (BNS), 2023 (formerly Sec 499/500 IPC). Section 66 of IT Act.",
    "remedy": "Removal of the content, compensation for damages, and criminal prosecution (imprisonment up to 2 years).",
    "steps": [
      {
        "title": "Preserve Evidence",
        "description": "Take screenshots, screen recordings, and archive URLs of the defamatory posts before they are deleted."
      },
      {
        "title": "Send a Legal Notice",
        "description": "Send a cease and desist notice demanding immediate takedown and an unconditional apology."
      },
      {
        "title": "File a Criminal Complaint",
        "description": "File a complaint before the Judicial Magistrate for criminal defamation, or a civil suit for damages."
      }
    ],
    "documents": [
      "Screenshots of Posts",
      "URLs",
      "Proof of identity/reputation damage",
      "Copy of Legal Notice"
    ],
    "whereToGo": "Judicial Magistrate Court or Civil Court."
  },
  {
    "slug": "traffic-harassment",
    "title": "Harassed by traffic police",
    "tag": "Criminal",
    "color": "saffron",
    iconName: Car,
    "description": "A traffic police officer is harassing you, forcefully taking your keys, abusing you, or demanding bribes.",
    "lawAndSection": "Motor Vehicles Act, 1988. Police Conduct Rules.",
    "remedy": "Disciplinary action against the officer and cancellation of wrongful challans.",
    "steps": [
      {
        "title": "Know your rights",
        "description": "Traffic police CANNOT physically abuse you, force you out of the vehicle, or take your keys out of the ignition."
      },
      {
        "title": "Record the incident",
        "description": "You have the legal right to record video of a public servant performing public duties. Ask for their name and buckle number."
      },
      {
        "title": "File a complaint",
        "description": "Report the officer to the Traffic Police Vigilance branch, DCP Traffic, or via the state's traffic police Twitter handle."
      }
    ],
    "documents": [
      "Video/Audio recording",
      "Officer's Name/Buckle Number",
      "Location and Time details"
    ],
    "whereToGo": "Traffic Police Vigilance Department or DCP Traffic Office."
  },
  {
    "slug": "hit-and-run",
    "title": "Victim of hit and run",
    "tag": "Criminal",
    "color": "saffron",
    iconName: Car,
    "description": "You or a loved one were injured in a road accident where the offending vehicle fled the scene without stopping.",
    "lawAndSection": "Section 161 of Motor Vehicles (Amendment) Act, 2019. Section 106 of BNS.",
    "remedy": "State compensation under the Hit and Run Solatium Scheme (₹2 Lakh for death, ₹50,000 for grievous hurt) plus police investigation.",
    "steps": [
      {
        "title": "Seek Medical Help",
        "description": "Rush to the nearest hospital. Hospitals cannot refuse emergency care under the Good Samaritan guidelines."
      },
      {
        "title": "File an FIR",
        "description": "Register an FIR at the jurisdictional police station immediately. Note any CCTV cameras nearby."
      },
      {
        "title": "Apply for Compensation",
        "description": "Apply through the Claims Enquiry Officer (usually the SDM or Tehsildar) of the district."
      }
    ],
    "documents": [
      "FIR Copy",
      "MLC/Medical Report",
      "Post-mortem report (in case of death)",
      "Aadhar Card"
    ],
    "whereToGo": "Local Police Station and District Claims Enquiry Officer (SDM)."
  },
  {
    "slug": "motor-accident-claim",
    "title": "Motor accident compensation",
    "tag": "Civil",
    "color": "terracotta",
    iconName: Scale,
    "description": "You suffered injuries or vehicle damage in an accident caused by someone else's rash driving.",
    "lawAndSection": "Section 166 of the Motor Vehicles Act, 1988.",
    "remedy": "Monetary compensation for medical bills, loss of income, pain and suffering, and vehicle damage.",
    "steps": [
      {
        "title": "File an FIR",
        "description": "An FIR against the offending driver is mandatory to claim compensation."
      },
      {
        "title": "Collect Insurance Details",
        "description": "Note down the registration number of the offending vehicle to trace its third-party insurance."
      },
      {
        "title": "File a MACT Petition",
        "description": "Engage a lawyer to file a claim petition in the Motor Accidents Claims Tribunal (MACT)."
      }
    ],
    "documents": [
      "FIR",
      "Charge-sheet",
      "Medical Bills",
      "Discharge Summary",
      "Proof of Income/Salary"
    ],
    "whereToGo": "Motor Accidents Claims Tribunal (MACT)."
  },
  {
    "slug": "anticipatory-bail",
    "title": "Fearing false arrest",
    "tag": "Criminal",
    "color": "saffron",
    iconName: Shield,
    "description": "You have reason to believe that a false criminal case (like 498A, cheating, etc.) is being filed against you and you fear imminent arrest.",
    "lawAndSection": "Section 482 of Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 (formerly Section 438 CrPC).",
    "remedy": "A court order directing the police to release you on bail in the event of your arrest.",
    "steps": [
      {
        "title": "Do not abscond",
        "description": "Running away weakens your case. Stay accessible but consult a criminal lawyer immediately."
      },
      {
        "title": "Draft the petition",
        "description": "Prepare an anticipatory bail application detailing why the allegations are false and proving you aren't a flight risk."
      },
      {
        "title": "File in Sessions/High Court",
        "description": "Move the application in the District Sessions Court or the High Court."
      }
    ],
    "documents": [
      "ID Proof",
      "Proof of Residence",
      "Any evidence showing the complaint is malicious/false"
    ],
    "whereToGo": "District Sessions Court or High Court."
  },
  {
    "slug": "land-encroachment",
    "title": "Neighbor encroached my land",
    "tag": "Real Estate",
    "color": "terracotta",
    iconName: Home,
    "description": "Someone has illegally occupied your plot, built a wall over your boundary, or taken possession of your property.",
    "lawAndSection": "Section 6 of Specific Relief Act. Section 329 BNS (Criminal Trespass).",
    "remedy": "Injunction to stop construction, order for demolition of illegal structures, and restoration of possession.",
    "steps": [
      {
        "title": "File a Police Complaint",
        "description": "File an FIR for criminal trespass and illegal land grabbing."
      },
      {
        "title": "Get a Stay Order",
        "description": "Immediately file a civil suit for a temporary injunction to stop any ongoing illegal construction."
      },
      {
        "title": "File for Possession",
        "description": "If they have already taken possession, file a suit for recovery of possession under the Specific Relief Act."
      }
    ],
    "documents": [
      "Title Deed/Sale Deed",
      "Property Tax Receipts",
      "Latest Photographs",
      "Approved site plan"
    ],
    "whereToGo": "Civil Court for injunction, Local Police for trespass."
  },
  {
    "slug": "fake-product",
    "title": "Received a fake product",
    "tag": "Consumer",
    "color": "india",
    iconName: ShoppingCart,
    "description": "An e-commerce platform or retail store sold you a counterfeit or duplicate product disguised as original.",
    "lawAndSection": "Consumer Protection Act, 2019 (Unfair Trade Practice). Trademarks Act, 1999.",
    "remedy": "Refund, replacement with original product, and compensation for cheating.",
    "steps": [
      {
        "title": "Document the unboxing",
        "description": "Always take an unboxing video. Take clear photos of the fake product comparing it to original markers."
      },
      {
        "title": "Contact the Seller/Platform",
        "description": "Raise a return/refund request citing 'counterfeit product'."
      },
      {
        "title": "Send Legal Notice",
        "description": "If refused, send a legal notice to the platform and the seller."
      },
      {
        "title": "File a Consumer Case",
        "description": "Approach the District Consumer Commission or file online on e-Daakhil."
      }
    ],
    "documents": [
      "Unboxing Video",
      "Invoice",
      "Photos of the fake product",
      "Communication with customer care"
    ],
    "whereToGo": "e-Daakhil Portal or District Consumer Commission."
  },
  {
    "slug": "misleading-ad",
    "title": "Misled by false advertisement",
    "tag": "Consumer",
    "color": "india",
    iconName: MonitorSmartphone,
    "description": "A brand made false claims about a product's benefits, pricing, or guarantees in a TV, print, or digital ad.",
    "lawAndSection": "Section 21 of Consumer Protection Act, 2019. CCPA Guidelines.",
    "remedy": "Takedown of the ad, penalty on the brand/endorser, and compensation to the consumer.",
    "steps": [
      {
        "title": "Capture the Ad",
        "description": "Take a screenshot, photo, or screen recording of the misleading advertisement."
      },
      {
        "title": "File complaint with ASCI",
        "description": "Report the ad to the Advertising Standards Council of India (ASCI) online."
      },
      {
        "title": "Complain to CCPA",
        "description": "File a grievance with the Central Consumer Protection Authority (CCPA) through the NCH portal."
      }
    ],
    "documents": [
      "Copy of the Advertisement",
      "Proof of Purchase (if applicable)",
      "Evidence proving the claim is false"
    ],
    "whereToGo": "Grievance Against Misleading Advertisements (GAMA) portal or CCPA."
  },
  {
    "slug": "insurance-rejection",
    "title": "Health insurance claim rejected",
    "tag": "Banking",
    "color": "marigold",
    iconName: FileWarning,
    "description": "Your health or life insurance provider wrongfully repudiated your legitimate claim citing flimsy grounds.",
    "lawAndSection": "IRDAI (Protection of Policyholders' Interests) Regulations, 2017. Consumer Protection Act.",
    "remedy": "Payment of the claim amount along with penal interest for the delay.",
    "steps": [
      {
        "title": "Review the Rejection Letter",
        "description": "Check the exact clause cited for rejection. Ensure you hadn't concealed pre-existing diseases during policy issuance."
      },
      {
        "title": "File grievance with Insurer",
        "description": "Write to the Grievance Redressal Officer (GRO) of the insurance company."
      },
      {
        "title": "Approach Insurance Ombudsman",
        "description": "If not resolved in 15 days, file a complaint with the Insurance Ombudsman (for claims under ₹30 Lakhs)."
      }
    ],
    "documents": [
      "Policy Document",
      "Rejection Letter",
      "Hospital Discharge Summary",
      "All Medical Bills"
    ],
    "whereToGo": "Office of the Insurance Ombudsman (Bima Bharosa portal) or Consumer Court."
  },
  {
    "slug": "school-admission",
    "title": "Denied RTE school admission",
    "tag": "Civil",
    "color": "india",
    iconName: Landmark,
    "description": "A private school is denying admission to your child under the 25% EWS quota mandated by the RTE Act.",
    "lawAndSection": "Section 12(1)(c) of the Right of Children to Free and Compulsory Education (RTE) Act, 2009.",
    "remedy": "Mandatory admission of the child without any capitation fee or screening procedure.",
    "steps": [
      {
        "title": "Ensure Eligibility",
        "description": "Ensure you have the valid EWS (Economically Weaker Section) or Disadvantaged Group certificate."
      },
      {
        "title": "Apply via State Portal",
        "description": "Most states have an online lottery system for RTE admissions. Apply through the official portal."
      },
      {
        "title": "Complain to BEO/DEO",
        "description": "If the school refuses admission after allotment, complain in writing to the Block or District Education Officer."
      }
    ],
    "documents": [
      "EWS/Income Certificate",
      "Child's Birth Certificate",
      "Allotment Letter from State Portal",
      "Address Proof"
    ],
    "whereToGo": "District Education Office or State Commission for Protection of Child Rights (SCPCR)."
  },
  {
    "slug": "succession-certificate",
    "title": "Claiming deceased's assets",
    "tag": "Family",
    "color": "terracotta",
    iconName: FileText,
    "description": "A family member passed away without a will, and banks or financial institutions are asking for a Succession Certificate to release funds.",
    "lawAndSection": "Section 372 of the Indian Succession Act, 1925.",
    "remedy": "A legal certificate establishing you as the rightful heir to claim the debts and securities.",
    "steps": [
      {
        "title": "Identify Assets",
        "description": "Make a detailed list of all bank accounts, FDs, mutual funds, and shares held by the deceased."
      },
      {
        "title": "Draft Petition",
        "description": "Engage a lawyer to draft a petition detailing the legal heirs and the specific assets."
      },
      {
        "title": "File in Civil Court",
        "description": "File the petition in the District Court. The court will issue a newspaper notice to invite objections for 45 days."
      },
      {
        "title": "Get the Certificate",
        "description": "If no objections are raised, the court issues the certificate upon payment of court fees."
      }
    ],
    "documents": [
      "Death Certificate",
      "List of Assets with Account Numbers",
      "Identity Proofs of all Legal Heirs"
    ],
    "whereToGo": "District Civil Court."
  },
  {
    "slug": "marriage-registration",
    "title": "Registering my marriage",
    "tag": "Family",
    "color": "saffron",
    iconName: Heart,
    "description": "You want to legally register your marriage to get a Marriage Certificate, which is essential for visas, joint accounts, and legal rights.",
    "lawAndSection": "Hindu Marriage Act, 1955 or Special Marriage Act, 1954 (for inter-faith/civil marriages).",
    "remedy": "A legally valid Marriage Certificate issued by the Government.",
    "steps": [
      {
        "title": "Choose the Act",
        "description": "If already married via religious rituals, register under HMA. If marrying directly in court, use SMA (requires 30-day notice)."
      },
      {
        "title": "Apply Online",
        "description": "Fill the application on your State's marriage registration portal and book an appointment."
      },
      {
        "title": "Visit the Registrar",
        "description": "Both spouses, along with 3 witnesses, must appear before the Sub-Divisional Magistrate (SDM) / Registrar."
      }
    ],
    "documents": [
      "Aadhar/Pan Cards",
      "Age Proofs",
      "Wedding Photos & Invitation Card",
      "Affidavits from Spouses & Witnesses"
    ],
    "whereToGo": "Office of the Sub-Divisional Magistrate (SDM) / Registrar of Marriages."
  },
  {
    "slug": "name-change",
    "title": "Changing my name legally",
    "tag": "Civil",
    "color": "india",
    iconName: FileText,
    "description": "You want to officially change your name (or surname after marriage) across all government documents.",
    "lawAndSection": "Guidelines of the Department of Publication, Government of India.",
    "remedy": "Publication of your new name in the Official Gazette of India, serving as absolute legal proof.",
    "steps": [
      {
        "title": "Make an Affidavit",
        "description": "Get a Name Change Affidavit drafted and notarized on a Non-Judicial Stamp Paper."
      },
      {
        "title": "Newspaper Publication",
        "description": "Publish a notice of your name change in two local newspapers (one English, one regional language)."
      },
      {
        "title": "Gazette Notification",
        "description": "Submit the affidavit, newspaper clippings, and application CD to the Department of Publication (Delhi) for printing in the Gazette."
      }
    ],
    "documents": [
      "Notarized Affidavit",
      "Original Newspaper Clippings",
      "Application Form",
      "Old ID Proof"
    ],
    "whereToGo": "Department of Publication, Civil Lines, Delhi (Can be done via post)."
  },
  {
    "slug": "cyberbullying",
    "title": "Facing cyberbullying/stalking",
    "tag": "Digital",
    "color": "india",
    iconName: Lock,
    "description": "Someone is continuously harassing you online, sending threats, or secretly monitoring your digital activity.",
    "lawAndSection": "Section 354D (Stalking) and Section 351 (Criminal Intimidation) of BNS. Section 67 of IT Act.",
    "remedy": "Arrest of the stalker, blocking of their accounts, and protection for the victim.",
    "steps": [
      {
        "title": "Do not delete",
        "description": "Do NOT delete the chat history or block them immediately. Take screenshots and export the chats as evidence."
      },
      {
        "title": "Report to Platform",
        "description": "Use the report/block features of the social media platform."
      },
      {
        "title": "File a Cyber Complaint",
        "description": "Register a complaint on cybercrime.gov.in. For immediate threat to physical safety, call 112 or Women's Helpline 1091."
      }
    ],
    "documents": [
      "Screenshots of chats/comments",
      "Profile URLs of the stalker",
      "Exported chat history"
    ],
    "whereToGo": "National Cyber Crime Reporting Portal (cybercrime.gov.in) or local Cyber Cell."
  },
  {
    "slug": "defective-car",
    "title": "Bought a defective car (Lemon)",
    "tag": "Consumer",
    "color": "india",
    iconName: Car,
    "description": "You purchased a new car or expensive appliance that has a severe manufacturing defect which the dealer cannot fix.",
    "lawAndSection": "Consumer Protection Act, 2019 (Defect in Goods).",
    "remedy": "Replacement of the vehicle, or full refund along with compensation for harassment.",
    "steps": [
      {
        "title": "Maintain repair logs",
        "description": "Keep all job cards and service center receipts showing how many times the vehicle went for the same repair."
      },
      {
        "title": "Send Legal Notice",
        "description": "Send a notice to both the Dealership and the Manufacturer (OEM) demanding replacement."
      },
      {
        "title": "File Consumer Case",
        "description": "File a case in the Consumer Commission. The court may appoint an independent automobile expert to inspect the car."
      }
    ],
    "documents": [
      "Purchase Invoice",
      "All Service Job Cards",
      "Email correspondence with OEM",
      "Warranty Book"
    ],
    "whereToGo": "District or State Consumer Disputes Redressal Commission."
  },
  {
    "slug": "wrong-cibil",
    "title": "Wrong CIBIL score reported",
    "tag": "Banking",
    "color": "marigold",
    iconName: ScrollText,
    "description": "Your credit report shows a loan you never took, or a default on a loan you already paid off, ruining your credit score.",
    "lawAndSection": "Credit Information Companies (Regulation) Act, 2005.",
    "remedy": "Correction of the credit report and compensation from the bank for negligence.",
    "steps": [
      {
        "title": "Pull your Credit Report",
        "description": "Download your detailed credit report from CIBIL, Experian, or Equifax."
      },
      {
        "title": "Raise a Dispute",
        "description": "File an online dispute directly on the Credit Bureau's website. They must resolve it within 30 days."
      },
      {
        "title": "Escalate to RBI",
        "description": "If the bank refuses to update the data, file a complaint against the Bank on the RBI Ombudsman portal."
      }
    ],
    "documents": [
      "Credit Report",
      "NOC/Closure Letter for loans",
      "Bank Statements proving payment"
    ],
    "whereToGo": "CIBIL Dispute Resolution Portal, then RBI Ombudsman."
  },
  {
    "slug": "it-refund-delay",
    "title": "Income Tax refund delayed",
    "tag": "Tax",
    "color": "marigold",
    iconName: Landmark,
    "description": "You have successfully filed your Income Tax Return (ITR), but your refund has been stuck for months.",
    "lawAndSection": "Section 143(1) and Section 244A of the Income Tax Act, 1961.",
    "remedy": "Issuance of the refund along with 0.5% interest per month for the delay.",
    "steps": [
      {
        "title": "Check processing status",
        "description": "Log into the IT portal and check if the ITR is processed under 143(1) and if any outstanding demands exist."
      },
      {
        "title": "Verify Bank Account",
        "description": "Ensure your bank account is pre-validated and PAN-linked on the IT portal."
      },
      {
        "title": "Raise a Grievance",
        "description": "Submit a grievance on the Income Tax e-Filing portal under the 'Refunds' category."
      },
      {
        "title": "Use CPGRAMS",
        "description": "If unresolved, escalate to the Centralized Public Grievance Redress and Monitoring System (CPGRAMS)."
      }
    ],
    "documents": [
      "ITR-V Acknowledgment",
      "Intimation under 143(1)",
      "Pre-validated Bank Account Details"
    ],
    "whereToGo": "Income Tax e-Filing Portal or CPGRAMS."
  },
  {
    "slug": "copyright-infringement",
    "title": "My creative work was stolen",
    "tag": "Civil",
    "color": "india",
    iconName: Scale,
    "description": "Someone copied your original photograph, written article, video, or software code without permission.",
    "lawAndSection": "Section 51 and 63 of the Copyright Act, 1957.",
    "remedy": "Injunction (takedown), damages/profits, and potential criminal prosecution.",
    "steps": [
      {
        "title": "Send a DMCA Takedown",
        "description": "If it's online, send a DMCA takedown notice to the hosting provider (like YouTube, Instagram, or the web host)."
      },
      {
        "title": "Send Legal Notice",
        "description": "Have a lawyer send a cease and desist notice demanding compensation."
      },
      {
        "title": "File a Suit",
        "description": "File a civil suit for copyright infringement in the District/Commercial Court."
      }
    ],
    "documents": [
      "Proof of Original Creation (Timestamps/Drafts)",
      "Copyright Registration (Optional but helpful)",
      "Screenshots of the infringing work"
    ],
    "whereToGo": "Platform's Copyright Team, or District Commercial Court."
  },
  {
    "slug": "lost-passport",
    "title": "Lost my passport",
    "tag": "Civil",
    "color": "india",
    iconName: FileWarning,
    "description": "You lost your Indian Passport or it was stolen.",
    "lawAndSection": "The Passports Act, 1967.",
    "remedy": "Re-issuance of a new passport.",
    "steps": [
      {
        "title": "File Police Report",
        "description": "Immediately file an FIR or a Lost Article Report (often available online) with the local police."
      },
      {
        "title": "Apply for Re-issue",
        "description": "Go to the Passport Seva portal, select 'Re-issue of Passport', and choose 'Lost/Stolen' as the reason."
      },
      {
        "title": "Visit PSK",
        "description": "Book an appointment and visit the Passport Seva Kendra with the police report and necessary documents."
      }
    ],
    "documents": [
      "Original Police FIR/Lost Report",
      "Copy of Old Passport (if available)",
      "Address Proof",
      "Aadhar Card"
    ],
    "whereToGo": "Local Police Station and Passport Seva Kendra (PSK)."
  },
  {
    "slug": "domestic-violence",
    "title": "Facing domestic violence",
    "tag": "Family",
    "color": "terracotta",
    iconName: ShieldAlert,
    "description": "You are facing physical, emotional, verbal, or economic abuse from your spouse or their relatives.",
    "lawAndSection": "Protection of Women from Domestic Violence Act (PWDVA), 2005. Section 85 BNS.",
    "remedy": "Protection orders, residence orders (right to stay in shared household), and monetary relief.",
    "steps": [
      {
        "title": "Call for Help",
        "description": "Call the Women Helpline (1091) or Police (112) immediately in an emergency."
      },
      {
        "title": "Contact a Protection Officer",
        "description": "Every district has appointed Protection Officers who help file a Domestic Incident Report (DIR)."
      },
      {
        "title": "File a case in court",
        "description": "Through a lawyer or Protection Officer, file an application before the Magistrate for protection and maintenance."
      }
    ],
    "documents": [
      "Medical records of injuries",
      "Bank statements (for economic abuse)",
      "Photographs/Messages showing abuse"
    ],
    "whereToGo": "District Protection Officer or Judicial Magistrate Court."
  },
  {
    "slug": "spouse-maintenance",
    "title": "Claiming spouse maintenance",
    "tag": "Family",
    "color": "saffron",
    iconName: Banknote,
    "description": "You are separated from your spouse, unable to maintain yourself, and your spouse is refusing to provide financial support.",
    "lawAndSection": "Section 144 of BNSS (formerly 125 CrPC). Section 24 of Hindu Marriage Act.",
    "remedy": "Monthly financial maintenance ordered by the court.",
    "steps": [
      {
        "title": "Gather Financial Proofs",
        "description": "Collect evidence of your spouse's income (salary slips, IT returns, lifestyle photos) and your own inability to earn."
      },
      {
        "title": "File the Petition",
        "description": "File an application for maintenance under BNSS Sec 144 in the Family Court."
      },
      {
        "title": "Seek Interim Maintenance",
        "description": "Ask the court to grant temporary monthly maintenance while the case goes through trial."
      }
    ],
    "documents": [
      "Marriage Proof",
      "Spouse's Income Proofs",
      "Your Bank Statements",
      "Affidavit of Assets and Liabilities"
    ],
    "whereToGo": "Family Court."
  },
  {
    "slug": "unpaid-salary",
    "title": "Company isn't paying my salary",
    "tag": "Labour",
    "color": "india",
    iconName: Banknote,
    "description": "Your employer has withheld your salary or full-and-final settlement without a valid legal reason.",
    "lawAndSection": "Payment of Wages Act, 1936. Insolvency and Bankruptcy Code (IBC).",
    "remedy": "Recovery of pending dues with interest, and potential winding up of the company if it's bankrupt.",
    "steps": [
      {
        "title": "Send a formal email",
        "description": "Write to HR/Management demanding your dues within a specific timeline."
      },
      {
        "title": "Send Legal Notice",
        "description": "Have a lawyer send a statutory demand notice."
      },
      {
        "title": "File a Case",
        "description": "If you are a 'workman', approach the Labour Commissioner. If it's a registered company, you can file an operational creditor petition in the NCLT."
      }
    ],
    "documents": [
      "Offer Letter",
      "Bank Statements",
      "Emails demanding salary",
      "Relieving Letter (if applicable)"
    ],
    "whereToGo": "Labour Commissioner or National Company Law Tribunal (NCLT)."
  },
  {
    "slug": "workplace-injury",
    "title": "Injured at the workplace",
    "tag": "Labour",
    "color": "india",
    iconName: Stethoscope,
    "description": "You suffered a physical injury or contracted an occupational disease while working during your employment.",
    "lawAndSection": "Employees' Compensation Act, 1923 (formerly Workmen's Compensation Act).",
    "remedy": "Mandatory financial compensation covering medical costs and loss of earning capacity.",
    "steps": [
      {
        "title": "Inform Employer Immediately",
        "description": "Notify your supervisor in writing as soon as the injury occurs."
      },
      {
        "title": "Get Medical Treatment",
        "description": "Seek immediate medical help and preserve all reports and bills."
      },
      {
        "title": "Claim Compensation",
        "description": "If the employer refuses to pay, file a claim petition before the Labour Commissioner."
      }
    ],
    "documents": [
      "Medical Reports",
      "FIR (if accident)",
      "Witness Statements",
      "Proof of Employment"
    ],
    "whereToGo": "Labour Commissioner's Office."
  },
  {
    "slug": "crypto-scam",
    "title": "Lost money in Crypto scam",
    "tag": "Digital",
    "color": "marigold",
    iconName: Lock,
    "description": "You invested in a fraudulent cryptocurrency scheme, fake exchange, or were phished out of your digital assets.",
    "lawAndSection": "Information Technology Act, 2000. Section 318 BNS (Cheating).",
    "remedy": "Criminal investigation to freeze the scammers' accounts and attempt recovery.",
    "steps": [
      {
        "title": "Trace the Transaction",
        "description": "Save the wallet addresses, transaction hashes (TxID), and platform details where the crypto was sent."
      },
      {
        "title": "Report to the Exchange",
        "description": "Contact the compliance team of the exchange (like Binance, WazirX) where the scammers transferred the funds to freeze the wallet."
      },
      {
        "title": "File Cyber Complaint",
        "description": "Register an FIR via the National Cyber Crime Reporting Portal. Provide all blockchain evidence."
      }
    ],
    "documents": [
      "Transaction Hashes",
      "Wallet Addresses",
      "Screenshots of chats with scammers",
      "Bank statements showing fiat transfer"
    ],
    "whereToGo": "National Cyber Crime Reporting Portal (cybercrime.gov.in)."
  },
  {
    "slug": "police-bribe",
    "title": "Police demanding a bribe",
    "tag": "Criminal",
    "color": "saffron",
    iconName: AlertCircle,
    "description": "A police officer or public servant is demanding money for doing their duty, like passport verification or filing an FIR.",
    "lawAndSection": "Section 7 of the Prevention of Corruption Act, 1988.",
    "remedy": "Arrest of the corrupt officer and completion of your lawful work.",
    "steps": [
      {
        "title": "Do not argue immediately",
        "description": "Pretend to agree to pay the bribe later. Try to record the conversation discreetly."
      },
      {
        "title": "Contact ACB/Vigilance",
        "description": "Contact the Anti-Corruption Bureau (ACB) or State Vigilance Department."
      },
      {
        "title": "Help lay a trap",
        "description": "The ACB will provide chemically treated currency notes and arrest the officer red-handed when they accept it."
      }
    ],
    "documents": [
      "Audio/Video recordings (if any)",
      "Details of the officer",
      "Details of pending official work"
    ],
    "whereToGo": "Anti-Corruption Bureau (ACB) or State Vigilance Directorate."
  },
  {
    "slug": "noise-pollution",
    "title": "Extreme noise from neighbors",
    "tag": "Civil",
    "color": "terracotta",
    iconName: VolumeX,
    "description": "Loud music, construction, or loudspeakers are disturbing your peace, especially late at night.",
    "lawAndSection": "Noise Pollution (Regulation and Control) Rules, 2000. Section 133 of BNSS (Public Nuisance).",
    "remedy": "Immediate stoppage of noise, seizure of equipment, and fines.",
    "steps": [
      {
        "title": "Call the Police",
        "description": "Loudspeakers are banned between 10 PM and 6 AM. Call 112 to complain."
      },
      {
        "title": "Complain to PCB",
        "description": "For persistent issues (like factories/generators), complain to the State Pollution Control Board."
      },
      {
        "title": "Approach Magistrate",
        "description": "File a petition under Sec 133 BNSS before the Sub-Divisional Magistrate for removal of public nuisance."
      }
    ],
    "documents": [
      "Audio/Video recordings",
      "Decibel meter app readings (indicative)",
      "Copy of written complaints to police"
    ],
    "whereToGo": "Local Police (112) or Sub-Divisional Magistrate (SDM)."
  },
  {
    "slug": "tree-cutting",
    "title": "Trees illegally cut",
    "tag": "Environment",
    "color": "terracotta",
    iconName: TreePine,
    "description": "Someone is illegally felling fully grown trees in your neighborhood without forest department permission.",
    "lawAndSection": "State-specific Tree Preservation Acts. Indian Forest Act, 1927.",
    "remedy": "Immediate halt to cutting, heavy fines, and mandatory replantation.",
    "steps": [
      {
        "title": "Demand to see permission",
        "description": "Ask the people cutting the tree to show the official permission letter from the Tree Officer."
      },
      {
        "title": "Call Forest Dept / Police",
        "description": "If no permission exists, immediately call the local police and the municipal Tree Officer."
      },
      {
        "title": "Take photos",
        "description": "Take photos of the chopped tree and the vehicle/individuals involved."
      }
    ],
    "documents": [
      "Photographs/Videos of the cutting",
      "Vehicle numbers",
      "Location details"
    ],
    "whereToGo": "Municipal Corporation (Tree Officer) or Local Police."
  },
  {
    "slug": "birth-certificate",
    "title": "Getting a birth certificate",
    "tag": "Civil",
    "color": "india",
    iconName: Baby,
    "description": "You need to apply for a birth certificate for your newborn, or get a delayed registration of birth.",
    "lawAndSection": "Registration of Births and Deaths Act, 1969.",
    "remedy": "Official birth certificate issued by the government.",
    "steps": [
      {
        "title": "Hospital Notification",
        "description": "If born in a hospital, they automatically send the birth record to the municipal body within 21 days."
      },
      {
        "title": "Apply Online/Offline",
        "description": "Apply at the local Municipal Corporation or Gram Panchayat with the hospital discharge slip."
      },
      {
        "title": "For delayed registration",
        "description": "If applying after 1 year, you need an order from the First Class Magistrate/SDM after police verification."
      }
    ],
    "documents": [
      "Hospital Discharge Summary",
      "Parents' Aadhar Cards",
      "Marriage Certificate",
      "Affidavit (if delayed)"
    ],
    "whereToGo": "Municipal Corporation or Gram Panchayat office."
  }
];
