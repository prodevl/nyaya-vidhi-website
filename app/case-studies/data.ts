import {
  ShieldAlert,
  Briefcase,
  ShoppingCart,
  HeartCrack,
  Stethoscope,
  Building,
  Car,
  CreditCard,
  Lightbulb,
  Home,
  BadgeAlert,
  VolumeX,
  GraduationCap,
  Plane,
  Baby,
  Scale,
  Activity,
  FileWarning,
  Shield,
  Smartphone
} from "lucide-react";

export const categories = [
  "Cybercrime & Digital",
  "Employment & Workplace",
  "Consumer Rights",
  "Family & Personal",
  "Medical & Healthcare",
  "Property & Real Estate",
  "Traffic & Transport",
  "Banking & Insurance",
  "Civil Rights & Police",
];

export type Scenario = {
  id: string;
  icon: any;
  category: string;
  title: string;
  situation: string;
  laws: {
    act: string;
    sections: string;
  }[];
  actionSteps: string[];
  sourceLink?: string;
};

export const scenarios: Scenario[] = [
  // Cybercrime & Digital
  {
    id: "online-defamation",
    icon: ShieldAlert,
    category: "Cybercrime & Digital",
    title: "Online Defamation & Morphing",
    situation:
      "A young woman discovers that someone has created a fake profile using her name on a social media platform. The imposter is posting morphed, obscene pictures of her and sending defamatory, threatening messages to her friends and family.",
    laws: [
      {
        act: "Information Technology Act, 2000",
        sections: "Sec 66E (Violation of privacy) & Sec 67/67A (Publishing obscene material)."
      },
      {
        act: "Bharatiya Nyaya Sanhita (BNS), 2023",
        sections: "Sec 79 (Insulting modesty), Sec 356 (Defamation), and Sec 351 (Criminal Intimidation)."
      }
    ],
    actionSteps: [
      "Take screenshots of the fake profile, posts, and messages, including the URL of the profile.",
      "File a formal complaint immediately on the National Cyber Crime Reporting Portal (cybercrime.gov.in).",
      "Visit the nearest police station's Cyber Cell to file an FIR.",
      "Send a legal notice to the social media platform's Grievance Officer in India to take down the content under the IT Rules, 2021."
    ],
    sourceLink: "/pdfs/Information%20Technology%20%26%20Digital%20Laws/IT%20Act%2C%202000%20amended%202008.pdf"
  },
  {
    id: "cyber-stalking",
    icon: Smartphone,
    category: "Cybercrime & Digital",
    title: "Cyber Stalking & Blackmail",
    situation:
      "An individual is receiving continuous emails, texts, and calls from an anonymous person who claims to have hacked their webcam and is threatening to release private videos unless a ransom is paid in cryptocurrency.",
    laws: [
      {
        act: "Bharatiya Nyaya Sanhita (BNS), 2023",
        sections: "Sec 308 (Extortion) and Sec 78 (Stalking)."
      },
      {
        act: "Information Technology Act, 2000",
        sections: "Sec 66 (Computer related offences) and Sec 66D (Cheating by personation by using computer resource)."
      }
    ],
    actionSteps: [
      "Do NOT pay the ransom. Block and ignore the sender without deleting the messages.",
      "Preserve all digital evidence including email headers and cryptocurrency wallet addresses.",
      "Report the extortion attempt on the National Cyber Crime Portal.",
      "Inform the local police cyber cell and request them to track the IP address."
    ],
    sourceLink: "/pdfs/Criminal%20Laws%20pdf/Bharatiya%20Nyaya%20Sanhita%20(BNS)%202023.pdf"
  },

  // Employment & Workplace
  {
    id: "wrongful-termination",
    icon: Briefcase,
    category: "Employment & Workplace",
    title: "Wrongful Termination & Unpaid Dues",
    situation:
      "An employee is terminated without prior notice. The company refuses to pay the pending salary for the last two months, severance pay, and encashment of earned leaves.",
    laws: [
      {
        act: "Industrial Disputes Act, 1947",
        sections: "Sec 2A (Dismissal of workman) and Sec 25F (Conditions precedent to retrenchment)."
      },
      {
        act: "Payment of Wages Act, 1936",
        sections: "Sec 15 (Claims arising out of deductions or delay in payment)."
      }
    ],
    actionSteps: [
      "Send a formal legal notice to the employer demanding clearance of dues within 15 days.",
      "If classified as a 'workman', approach the Labour Commissioner for conciliation.",
      "File a case in the Labour Court if conciliation fails.",
      "For non-workmen, file a summary civil suit under Order XXXVII of CPC."
    ],
    sourceLink: "/pdfs/Labour%20and%20Employment%20Laws/Industrial%20Relations%20Code%2C%202020.pdf"
  },
  {
    id: "sexual-harassment",
    icon: Shield,
    category: "Employment & Workplace",
    title: "Workplace Sexual Harassment",
    situation:
      "A female employee faces persistent unwelcome sexual advances and inappropriate remarks from her manager. When she complains informally, HR ignores it and she is threatened with a poor performance review.",
    laws: [
      {
        act: "Sexual Harassment of Women at Workplace (POSH) Act, 2013",
        sections: "Sec 3 (Prevention of sexual harassment), Sec 9 (Conciliation), and Sec 10 (Inquiry into complaint)."
      },
      {
        act: "Bharatiya Nyaya Sanhita (BNS), 2023",
        sections: "Sec 74 (Sexual harassment) and Sec 75 (Assault or use of criminal force to woman with intent to outrage her modesty)."
      }
    ],
    actionSteps: [
      "File a formal written complaint to the company's Internal Complaints Committee (ICC).",
      "If the company has no ICC, file the complaint with the Local Complaints Committee (LCC) set up by the district administration.",
      "Simultaneously, file an FIR under the BNS if the harassment involves physical assault or severe outraging of modesty.",
      "Maintain a log of incidents, emails, and any witness testimonies."
    ],
    sourceLink: "/pdfs/Labour%20and%20Employment%20Laws/Sexual%20Harassment%20at%20Workplace%20(POSH)%20Act%2C%202013.pdf"
  },
  {
    id: "maternity-denial",
    icon: Baby,
    category: "Employment & Workplace",
    title: "Denial of Maternity Benefits",
    situation:
      "A pregnant employee applies for maternity leave, but her employer denies the paid leave, stating she hasn't worked long enough, and forces her to resign to avoid paying the benefits.",
    laws: [
      {
        act: "Maternity Benefit Act, 1961",
        sections: "Sec 5 (Right to payment of maternity benefit) and Sec 12 (Dismissal during absence of pregnancy)."
      }
    ],
    actionSteps: [
      "Do not submit a resignation letter.",
      "Write to HR citing Section 5 of the Act (requires 80 days of work in the past 12 months).",
      "If terminated, send a legal notice for unlawful termination under Section 12.",
      "File a complaint with the Labour Inspector or Labour Court for reinstatement and back wages."
    ],
    sourceLink: "/pdfs/Labour%20and%20Employment%20Laws/Social%20Security%20Code%2C%202020.pdf"
  },

  // Consumer Rights
  {
    id: "ecommerce-fraud",
    icon: ShoppingCart,
    category: "Consumer Rights",
    title: "E-Commerce Fraud & Counterfeit Goods",
    situation:
      "A customer orders a ₹80,000 smartphone but receives a bar of soap. The e-commerce platform refuses a refund, claiming their records show the correct item was delivered.",
    laws: [
      {
        act: "Consumer Protection Act, 2019",
        sections: "Sec 2(47) (Unfair Trade Practice) and Sec 35 (Manner of complaint)."
      },
      {
        act: "Bharatiya Nyaya Sanhita (BNS), 2023",
        sections: "Sec 318 (Cheating) and Sec 316 (Criminal breach of trust)."
      }
    ],
    actionSteps: [
      "Keep the unboxing video, invoice, and delivery receipt safe.",
      "Register a grievance on the National Consumer Helpline (NCH).",
      "Send a legal notice to the e-commerce entity and the seller.",
      "File a complaint via the e-Daakhil portal in the District Consumer Disputes Redressal Commission."
    ],
    sourceLink: "/pdfs/Consumer%20Rights/Consumer%20Protection%20Act%202019.pdf"
  },
  {
    id: "defective-vehicle",
    icon: Car,
    category: "Consumer Rights",
    title: "Defective Vehicle (Lemon Law Equivalent)",
    situation:
      "A newly purchased car breaks down multiple times within the first month due to an inherent manufacturing defect. The dealer only offers endless repairs but refuses a replacement or refund.",
    laws: [
      {
        act: "Consumer Protection Act, 2019",
        sections: "Sec 2(10) (Defect in goods) and Sec 39 (Findings of the District Commission - replace or refund)."
      },
      {
        act: "Sale of Goods Act, 1930",
        sections: "Sec 16 (Implied conditions as to quality or fitness)."
      }
    ],
    actionSteps: [
      "Stop accepting patch-up repairs. Get an independent mechanic's report documenting the manufacturing defect.",
      "Send a legal notice to both the dealership and the car manufacturer demanding a complete replacement or full refund.",
      "File a consumer case in the appropriate Consumer Commission based on the vehicle's value.",
      "Demand compensation for mental agony and loss of use."
    ],
    sourceLink: "/pdfs/Consumer%20Rights/Consumer%20Protection%20Act%202019.pdf"
  },
  {
    id: "airline-baggage",
    icon: Plane,
    category: "Consumer Rights",
    title: "Airline Losing Baggage",
    situation:
      "A passenger's checked-in baggage, containing expensive electronics and important documents, is lost by the airline. The airline offers a meager standard compensation based on weight, ignoring the actual value.",
    laws: [
      {
        act: "Carriage by Air Act, 1972",
        sections: "Rules concerning liability of carrier for destruction, loss or damage to checked baggage."
      },
      {
        act: "Consumer Protection Act, 2019",
        sections: "Sec 2(11) (Deficiency in service)."
      }
    ],
    actionSteps: [
      "File a Property Irregularity Report (PIR) before leaving the airport.",
      "Declare the value of the goods to the airline in writing within 7 days.",
      "Send a legal notice citing deficiency in service if the airline refuses fair compensation.",
      "File a consumer complaint for the actual value of goods and mental harassment."
    ],
    sourceLink: "/pdfs/Consumer%20Rights/Consumer%20Protection%20Act%202019.pdf"
  },
  {
    id: "food-poisoning",
    icon: Activity,
    category: "Consumer Rights",
    title: "Food Poisoning at a Restaurant",
    situation:
      "After dining at a high-end restaurant, a family suffers severe food poisoning resulting in hospitalization. The restaurant denies responsibility and refuses to cover medical bills.",
    laws: [
      {
        act: "Food Safety and Standards Act, 2006",
        sections: "Sec 59 (Punishment for unsafe food) and Sec 65 (Compensation in case of injury or death)."
      },
      {
        act: "Consumer Protection Act, 2019",
        sections: "Sec 2(11) (Deficiency in service) and Sec 84 (Product liability action)."
      }
    ],
    actionSteps: [
      "Retain the restaurant bill, payment receipt, and all medical records detailing the diagnosis of food poisoning.",
      "File a complaint with the local Food Safety Officer (FSO) to inspect the restaurant's hygiene.",
      "Send a legal notice demanding compensation for medical expenses and trauma.",
      "File a consumer court case for deficiency in service and product liability."
    ],
    sourceLink: "/pdfs/Consumer%20Rights/Consumer%20Protection%20Act%202019.pdf"
  },

  // Family & Personal
  {
    id: "domestic-violence",
    icon: HeartCrack,
    category: "Family & Personal",
    title: "Domestic Violence & Dowry Demands",
    situation:
      "A married woman faces physical and mental abuse for dowry. Her in-laws restrict her movement, confiscate her salary, and threaten to throw her out of her matrimonial home.",
    laws: [
      {
        act: "Protection of Women from Domestic Violence Act, 2005",
        sections: "Sec 12 (Application to Magistrate), Sec 17 (Right to reside in shared household), and Sec 18-20 (Protection & Monetary orders)."
      },
      {
        act: "Bharatiya Nyaya Sanhita (BNS), 2023",
        sections: "Sec 85 (Cruelty by husband or relative)."
      }
    ],
    actionSteps: [
      "Contact the local Protection Officer or Women's Helpline (1091 / 181).",
      "File an FIR under Section 85 of the BNS for cruelty.",
      "File a petition under Section 12 of the DV Act for a Residence and Protection Order.",
      "Collect medical reports, abusive texts, and bank statements as evidence."
    ],
    sourceLink: "/pdfs/Family%20%26%20Personal%20Laws/Protection%20of%20Women%20from%20DV%20Act%2C%202005.pdf"
  },

  // Medical & Healthcare
  {
    id: "surgical-error",
    icon: Stethoscope,
    category: "Medical & Healthcare",
    title: "Surgical Error & Gross Negligence",
    situation:
      "A surgeon negligently leaves a surgical sponge inside a patient's abdomen during routine surgery. The patient requires emergency corrective surgery, suffering intense trauma and financial loss.",
    laws: [
      {
        act: "Consumer Protection Act, 2019",
        sections: "Sec 2(11) (Deficiency in service in medical services)."
      },
      {
        act: "Bharatiya Nyaya Sanhita (BNS), 2023",
        sections: "Sec 125 (Act endangering life or personal safety)."
      }
    ],
    actionSteps: [
      "Secure the complete set of medical records from both surgeries.",
      "File a complaint with the State Medical Council against the doctor for professional misconduct.",
      "Send a legal notice to the doctor and hospital management.",
      "File a complaint before the State/National Consumer Commission for medical negligence compensation."
    ],
    sourceLink: "/pdfs/Consumer%20Rights/Consumer%20Protection%20Act%202019.pdf"
  },
  {
    id: "counterfeit-medicine",
    icon: FileWarning,
    category: "Medical & Healthcare",
    title: "Sale of Counterfeit Medicines",
    situation:
      "A local pharmacy sells a patient counterfeit life-saving medication. The patient's condition worsens drastically, and lab tests later confirm the drug lacked the active ingredient.",
    laws: [
      {
        act: "Drugs and Cosmetics Act, 1940",
        sections: "Sec 17B (Spurious drugs) and Sec 27 (Penalty for manufacture, sale, etc., of drugs in contravention)."
      },
      {
        act: "Bharatiya Nyaya Sanhita (BNS), 2023",
        sections: "Sec 274 (Adulteration of drugs) and Sec 275 (Sale of adulterated drugs)."
      }
    ],
    actionSteps: [
      "Keep the remaining medicines, original packaging, and the pharmacy purchase bill securely.",
      "Lodge a formal complaint with the State Drug Controller or CDSCO (Central Drugs Standard Control Organisation).",
      "File an FIR at the local police station under the BNS.",
      "File a consumer complaint for heavy compensation due to the severe risk to life."
    ],
    sourceLink: "/pdfs/Criminal%20Laws%20pdf/Bharatiya%20Nyaya%20Sanhita%20(BNS)%202023.pdf"
  },

  // Property & Real Estate
  {
    id: "builder-delay",
    icon: Building,
    category: "Property & Real Estate",
    title: "Builder Delaying Possession",
    situation:
      "A homebuyer has paid 90% of the flat's value, but the builder has delayed possession by 3 years beyond the agreed date. The builder refuses to pay delay penalties and demands extra 'maintenance' charges.",
    laws: [
      {
        act: "Real Estate (Regulation and Development) Act, 2016 (RERA)",
        sections: "Sec 18 (Return of amount and compensation if promoter fails to complete or is unable to give possession)."
      },
      {
        act: "Consumer Protection Act, 2019",
        sections: "Sec 2(11) (Deficiency in housing construction service)."
      }
    ],
    actionSteps: [
      "Send a formal legal notice demanding immediate possession with the agreed delay penalty or a full refund with interest.",
      "File a complaint with the state's RERA authority online.",
      "Alternatively, approach the National Consumer Disputes Redressal Commission (NCDRC) if you want to file a class-action suit with other buyers.",
      "Stop paying any illegal 'extra' demands not mentioned in the builder-buyer agreement."
    ],
    sourceLink: "/pdfs/Real%20Estate/RERA%20Act%2C%202016%20(Real%20Estate%20Regulation).pdf"
  },
  {
    id: "unlawful-eviction",
    icon: Home,
    category: "Property & Real Estate",
    title: "Unlawful Eviction by Landlord",
    situation:
      "A tenant who has been paying rent on time is suddenly locked out of their apartment by the landlord without any legal notice, and the landlord holds the tenant's belongings hostage to extort a higher rent.",
    laws: [
      {
        act: "State Rent Control Act",
        sections: "Provisions protecting tenants from arbitrary eviction and requiring due process (e.g., 30 days notice)."
      },
      {
        act: "Specific Relief Act, 1963",
        sections: "Sec 6 (Suit by person dispossessed of immovable property)."
      },
      {
        act: "Bharatiya Nyaya Sanhita (BNS), 2023",
        sections: "Sec 329 (Criminal trespass) and Sec 351 (Criminal Intimidation)."
      }
    ],
    actionSteps: [
      "Call the police immediately to report criminal trespass and illegal lock-out.",
      "File a suit under Section 6 of the Specific Relief Act in the civil court to quickly regain possession.",
      "File a police complaint for extortion and criminal intimidation.",
      "Send a legal notice for damages regarding mental harassment and illegal detention of goods."
    ],
    sourceLink: "/pdfs/Contracts%20%26%20Commercial%20Law/Specific%20Relief%20Act%2C%201963.pdf"
  },
  {
    id: "property-encroachment",
    icon: Scale,
    category: "Property & Real Estate",
    title: "Property Encroachment by Neighbor",
    situation:
      "A neighbor starts constructing a boundary wall that encroaches 5 feet into an individual's legally owned land. Despite verbal warnings and showing property documents, the neighbor continues construction.",
    laws: [
      {
        act: "Specific Relief Act, 1963",
        sections: "Sec 38 (Perpetual injunction) and Sec 39 (Mandatory injunction to demolish)."
      },
      {
        act: "Bharatiya Nyaya Sanhita (BNS), 2023",
        sections: "Sec 329 (Criminal trespass)."
      }
    ],
    actionSteps: [
      "Take time-stamped photographs and videos of the illegal construction.",
      "File a police complaint for criminal trespass to halt the construction temporarily.",
      "Immediately approach a Civil Court to get an ex-parte 'Stay Order' (temporary injunction) against the neighbor.",
      "File a civil suit for a mandatory injunction to demolish the encroached structure and restore boundaries."
    ],
    sourceLink: "/pdfs/Contracts%20%26%20Commercial%20Law/Specific%20Relief%20Act%2C%201963.pdf"
  },

  // Traffic & Transport
  {
    id: "fake-challan",
    icon: Car,
    category: "Traffic & Transport",
    title: "Fake Traffic Challan & Harassment",
    situation:
      "A driver receives a hefty e-challan for jumping a red light in a city they have never visited. The photo on the challan shows a different car with a manipulated number plate.",
    laws: [
      {
        act: "Motor Vehicles Act, 1988",
        sections: "Sec 133 (Duty of owner to give information) and dispute resolution mechanisms."
      },
      {
        act: "Bharatiya Nyaya Sanhita (BNS), 2023",
        sections: "Sec 336 (Forgery) regarding the fake number plate."
      }
    ],
    actionSteps: [
      "Do not pay the fine immediately.",
      "Log into the Parivahan e-challan portal and raise a grievance disputing the challan with evidence (e.g., CCTV from your residence showing your car was elsewhere).",
      "Email the Traffic Police department of that specific city with the proof.",
      "If unresolved, contest it in the virtual traffic court or regular traffic court."
    ],
    sourceLink: "/pdfs/Criminal%20Laws%20pdf/Bharatiya%20Nyaya%20Sanhita%20(BNS)%202023.pdf"
  },
  {
    id: "illegal-towing",
    icon: Car,
    category: "Traffic & Transport",
    title: "Illegal Towing & Damage to Vehicle",
    situation:
      "A car parked in a legally designated parking spot is towed away by traffic police. During the towing process, the car's bumper and undercarriage are severely damaged.",
    laws: [
      {
        act: "Motor Vehicles Act, 1988",
        sections: "Rules regarding authorized towing and liability."
      },
      {
        act: "Law of Torts / Civil Law",
        sections: "Claim for damages due to negligence by state agents."
      }
    ],
    actionSteps: [
      "Take photos of the legal parking sign and the damaged car at the impound lot before moving it.",
      "Pay the fine 'under protest' to release the vehicle, ensuring you get a receipt.",
      "File a written complaint with the Deputy Commissioner of Police (Traffic).",
      "Send a legal notice claiming repair costs and, if denied, approach a civil court or Lok Adalat."
    ],
    sourceLink: "/pdfs/Criminal%20Laws%20pdf/Bharatiya%20Nyaya%20Sanhita%20(BNS)%202023.pdf"
  },

  // Banking & Insurance
  {
    id: "unauthorized-transaction",
    icon: CreditCard,
    category: "Banking & Insurance",
    title: "Unauthorized Credit Card Transaction",
    situation:
      "A customer notices an international transaction of ₹50,000 on their credit card which they never authorized. They still have the physical card and never shared an OTP.",
    laws: [
      {
        act: "Reserve Bank of India (RBI) Guidelines",
        sections: "Circular on Customer Protection – Limiting Liability of Customers in Unauthorised Electronic Banking Transactions."
      },
      {
        act: "Information Technology Act, 2000",
        sections: "Sec 43 (Penalty and compensation for damage to computer, computer system, etc)."
      }
    ],
    actionSteps: [
      "Call the bank immediately (within 3 days) to block the card and report the fraud. Under RBI rules, reporting within 3 days ensures ZERO liability for the customer.",
      "File a complaint on the National Cyber Crime Reporting Portal.",
      "Submit the dispute form with the bank.",
      "If the bank refuses to reverse the charge, file a complaint with the RBI Banking Ombudsman."
    ],
    sourceLink: "/pdfs/Information%20Technology%20%26%20Digital%20Laws/IT%20Act%2C%202000%20amended%202008.pdf"
  },
  {
    id: "health-insurance-rejection",
    icon: Activity,
    category: "Banking & Insurance",
    title: "Unjustified Health Insurance Rejection",
    situation:
      "A patient's cashless health insurance claim for a valid emergency surgery is rejected by the TPA citing a vague 'pre-existing condition' clause, forcing the patient to pay out of pocket.",
    laws: [
      {
        act: "Insurance Regulatory and Development Authority of India (IRDAI) Regulations",
        sections: "Health Insurance Regulations protecting policyholders."
      },
      {
        act: "Consumer Protection Act, 2019",
        sections: "Sec 2(11) (Deficiency in service)."
      }
    ],
    actionSteps: [
      "Collect a detailed letter from the treating doctor explicitly stating the condition was not pre-existing.",
      "File an official grievance with the Insurance Company's Grievance Redressal Officer.",
      "If unresolved within 15 days, escalate to the IRDAI's Bima Bharosa portal.",
      "If still unresolved, approach the Insurance Ombudsman or file a case in the Consumer Court."
    ],
    sourceLink: "/pdfs/Consumer%20Rights/Consumer%20Protection%20Act%202019.pdf"
  },
  {
    id: "recovery-agent-harassment",
    icon: BadgeAlert,
    category: "Banking & Insurance",
    title: "Harassment by Loan Recovery Agents",
    situation:
      "A borrower misses two EMI payments due to job loss. The bank sends goons to the borrower's house who use abusive language, publicly humiliate them, and threaten physical violence.",
    laws: [
      {
        act: "Reserve Bank of India (RBI) Guidelines",
        sections: "Fair Practices Code regarding recovery of loans."
      },
      {
        act: "Bharatiya Nyaya Sanhita (BNS), 2023",
        sections: "Sec 351 (Criminal Intimidation) and Sec 356 (Defamation)."
      }
    ],
    actionSteps: [
      "Record audio/video of the agents' behavior and note down their names and agency details.",
      "File a police complaint against the agents for criminal intimidation and trespassing.",
      "Send a legal notice to the bank for violating RBI's Fair Practices Code.",
      "File a complaint with the RBI Banking Ombudsman against the bank for employing coercive recovery tactics."
    ],
    sourceLink: "/pdfs/Financial%20Markets%20%26%20Banking/RBI%20Act%2C%201934.pdf"
  },

  // Civil Rights & Police
  {
    id: "refusal-to-fir",
    icon: ShieldAlert,
    category: "Civil Rights & Police",
    title: "Police Refusal to Register FIR",
    situation:
      "A citizen goes to the police station to report a cognizable offense (e.g., theft or assault), but the Station House Officer (SHO) outright refuses to register the First Information Report (FIR).",
    laws: [
      {
        act: "Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023",
        sections: "Sec 173(1) (Information in cognizable cases) and Sec 173(3) (Sending complaint to SP/DCP)."
      },
      {
        act: "Bharatiya Nyaya Sanhita (BNS), 2023",
        sections: "Sec 253 (Public servant disobeying direction of law with intent to save person from punishment)."
      }
    ],
    actionSteps: [
      "Do not argue aggressively. Send the written complaint via registered post to the Superintendent of Police (SP) or Deputy Commissioner of Police (DCP) under BNSS 173(3).",
      "If the SP/DCP does not act, file an application before the Judicial Magistrate under BNSS 175(3) to direct the police to register the FIR.",
      "You can also approach the State Human Rights Commission or Police Complaints Authority."
    ],
    sourceLink: "/pdfs/Criminal%20Laws%20pdf/Bharatiya_Nagarik_Suraksha_Sanhita%2C_2023.pdf"
  },
  {
    id: "noise-pollution",
    icon: VolumeX,
    category: "Civil Rights & Police",
    title: "Severe Noise Pollution in Residential Area",
    situation:
      "An open-air venue next to a residential colony plays deafeningly loud music via DJ setups past midnight every weekend, severely disrupting the sleep and health of senior citizens and children.",
    laws: [
      {
        act: "Noise Pollution (Regulation and Control) Rules, 2000",
        sections: "Rule 5 (Restrictions on the use of loud speakers/public address system)."
      },
      {
        act: "Bharatiya Nyaya Sanhita (BNS), 2023",
        sections: "Sec 270 (Public nuisance)."
      }
    ],
    actionSteps: [
      "Call the police control room (100/112) while the nuisance is happening to get an immediate response.",
      "Record the noise levels using a decibel meter app as preliminary evidence.",
      "File a written complaint with the local police station and the State Pollution Control Board.",
      "If inaction continues, file a Public Interest Litigation (PIL) or petition the National Green Tribunal (NGT)."
    ],
    sourceLink: "/pdfs/Criminal%20Laws%20pdf/Bharatiya%20Nyaya%20Sanhita%20(BNS)%202023.pdf"
  },
  {
    id: "school-withholding-certs",
    icon: GraduationCap,
    category: "Civil Rights & Police",
    title: "School Withholding Transfer Certificates",
    situation:
      "A student's parents decide to change schools, but the old private school refuses to issue the Transfer Certificate (TC) and report cards until an arbitrary, illegal 'exit fee' is paid.",
    laws: [
      {
        act: "Right of Children to Free and Compulsory Education (RTE) Act, 2009",
        sections: "Sec 5(2) (Right of transfer to other school) and Sec 5(3) (Delay in producing TC shall not be a ground for denying admission)."
      },
      {
        act: "Consumer Protection Act, 2019",
        sections: "Deficiency in service and unfair trade practices."
      }
    ],
    actionSteps: [
      "Submit a formal written request for the TC, retaining an acknowledged copy.",
      "Send a legal notice to the school principal stating that withholding educational certificates is illegal.",
      "File a complaint with the District Education Officer (DEO) or the State Education Board (CBSE/ICSE regional office).",
      "File a case in the Consumer Court claiming compensation for mental agony and jeopardizing the child's academic future."
    ],
    sourceLink: "/pdfs/Consumer%20Rights/Consumer%20Protection%20Act%202019.pdf"
  },

  // Intellectual Property
  {
    id: "copyright-infringement",
    icon: Lightbulb,
    category: "Intellectual Property",
    title: "Copyright Infringement by Competitor",
    situation:
      "A freelance designer discovers that a large marketing agency has stolen their original website design and portfolio graphics, passing it off as their own work for a major client.",
    laws: [
      {
        act: "Copyright Act, 1957",
        sections: "Sec 14 (Meaning of copyright), Sec 51 (When copyright infringed), and Sec 63 (Offence of infringement)."
      },
      {
        act: "Information Technology Act, 2000",
        sections: "Sec 66 (Computer related offences)."
      }
    ],
    actionSteps: [
      "Gather evidence: original source files with timestamps, published URLs, and screenshots of the infringing work.",
      "Send a Cease and Desist (C&D) legal notice to the agency demanding immediate removal and compensation.",
      "File a DMCA takedown notice with the web host of the infringing agency to get the content removed from the internet.",
      "If they refuse, file a civil suit for an injunction and damages, and potentially a criminal complaint for copyright infringement."
    ],
    sourceLink: "/pdfs/Intellectual%20Property/Copyright%20Act%2C%201957.pdf"
  },
  {
    id: "trademark-squatting",
    icon: Shield,
    category: "Intellectual Property",
    title: "Trademark Squatting by Ex-Employee",
    situation:
      "A small business owner finds out that a disgruntled ex-employee has secretly registered the business's brand name and logo as a trademark under their own name, and is now sending legal notices to stop the original owner from using it.",
    laws: [
      {
        act: "Trade Marks Act, 1999",
        sections: "Sec 9 (Absolute grounds for refusal of registration), Sec 11 (Relative grounds), and Sec 47 (Removal from register for non-use)."
      },
      {
        act: "Bharatiya Nyaya Sanhita (BNS), 2023",
        sections: "Sec 318 (Cheating)."
      }
    ],
    actionSteps: [
      "Gather proof of prior use: invoices, marketing material, social media pages, and domain registration showing you used the brand first.",
      "File a Rectification Petition before the Trademark Registry or High Court to cancel the fraudulent registration.",
      "Send a strong reply to the ex-employee's legal notice asserting 'prior use' rights (which supersede registration in India).",
      "File a civil suit for 'passing off' and seek an injunction against the ex-employee."
    ],
    sourceLink: "/pdfs/Intellectual%20Property/Trade%20Marks%20Act%2C%201999.pdf"
  },
  
  // Futuristic, Edge-Case & Unique Scenarios
  {
    id: "ai-deepfake-heist",
    icon: Smartphone,
    category: "Cybercrime & Digital",
    title: "AI Deepfake Corporate Heist",
    situation: "A financial officer transfers ₹50 Crores after receiving a video call from the 'CEO' ordering the transfer. It is later discovered the CEO's voice and video were completely AI-generated deepfakes by a cyber syndicate.",
    laws: [
      {
        act: "Information Technology Act, 2000",
        sections: "Sec 66D (Cheating by personation by using computer resource)."
      },
      {
        act: "Bharatiya Nyaya Sanhita (BNS), 2023",
        sections: "Sec 318(4) (Cheating and dishonestly inducing delivery of property) and Sec 336 (Forgery)."
      }
    ],
    actionSteps: [
      "Immediately freeze the corporate accounts and notify the bank's fraud department to reverse the wire transfer.",
      "File a complaint with the National Cyber Crime Reporting Portal under 'financial fraud'.",
      "Engage forensic experts to analyze the deepfake call logs, IPs, and server metadata.",
      "Report the incident to CERT-In (Computer Emergency Response Team) for critical infrastructure review."
    ],
    sourceLink: "/pdfs/Information%20Technology%20%26%20Digital%20Laws/IT%20Act%2C%202000%20amended%202008.pdf"
  },
  {
    id: "autonomous-car-crash",
    icon: Car,
    category: "Traffic & Transport",
    title: "Autonomous Vehicle Accident Liability",
    situation: "A fully self-driving car in 'autopilot' mode strikes a pedestrian. The manufacturer blames the human owner for not keeping hands on the wheel, while the owner blames the AI's sensor failure.",
    laws: [
      {
        act: "Motor Vehicles Act, 1988",
        sections: "Sec 161 (Duty to inform) and Sec 165/166 (Compensation in hit and run / motor accidents)."
      },
      {
        act: "Consumer Protection Act, 2019",
        sections: "Sec 84 (Product Liability Action against the manufacturer for defective software/hardware)."
      },
      {
        act: "Bharatiya Nyaya Sanhita (BNS), 2023",
        sections: "Sec 281 (Rash driving) and Sec 125 (Act endangering life)."
      }
    ],
    actionSteps: [
      "Call emergency services immediately to assist the injured pedestrian.",
      "Do not turn off the vehicle's telemetry system; request the manufacturer to immediately preserve the 'black box' data logs.",
      "File an FIR specifying that the vehicle was in autonomous mode at the time of the incident.",
      "File a Product Liability claim in the Consumer Court against the vehicle manufacturer for defective AI."
    ],
    sourceLink: "/pdfs/Criminal%20Laws%20pdf/Bharatiya%20Nyaya%20Sanhita%20(BNS)%202023.pdf"
  },
  {
    id: "smart-home-ransom",
    icon: Home,
    category: "Cybercrime & Digital",
    title: "Smart Home Hijacking & Ransom",
    situation: "A hacker gains control over a family's fully automated smart home. They lock the electronic doors, turn up the thermostat to dangerous levels, and demand cryptocurrency via the smart speakers to release them.",
    laws: [
      {
        act: "Information Technology Act, 2000",
        sections: "Sec 66 (Computer related offences) and Sec 43 (Damage to computer systems)."
      },
      {
        act: "Bharatiya Nyaya Sanhita (BNS), 2023",
        sections: "Sec 340 (Wrongful confinement) and Sec 308 (Extortion)."
      }
    ],
    actionSteps: [
      "Use a mechanical override or physically break a window/door if life is in immediate danger.",
      "Disconnect the home's main internet router to sever the hacker's remote access.",
      "File an FIR for wrongful confinement and cyber extortion.",
      "Sue the smart home security provider in Consumer Court for gross deficiency in cybersecurity standards."
    ],
    sourceLink: "/pdfs/Information%20Technology%20%26%20Digital%20Laws/IT%20Act%2C%202000%20amended%202008.pdf"
  },
  {
    id: "genetic-data-insurance",
    icon: Activity,
    category: "Medical & Healthcare",
    title: "Genetic Data Theft & Premium Hike",
    situation: "A user submits saliva to a DNA ancestry company. The company secretly sells this genetic profile to an insurance provider, who then drastically hikes the user's health insurance premium based on 'predicted future diseases'.",
    laws: [
      {
        act: "Digital Personal Data Protection Act, 2023",
        sections: "Provisions against processing personal data without explicit consent and data breach."
      },
      {
        act: "IRDAI Regulations",
        sections: "Guidelines on Standardization in Health Insurance (Protection against genetic discrimination)."
      }
    ],
    actionSteps: [
      "File a formal data breach complaint with the Data Protection Board of India against the DNA company.",
      "Lodge a grievance with the Insurance Company's redressal officer challenging the premium hike.",
      "Escalate to the Insurance Ombudsman if the insurer refuses to normalize the premium.",
      "Send a legal notice for heavy compensation for privacy violation and emotional distress."
    ],
    sourceLink: "/pdfs/Information%20Technology%20%26%20Digital%20Laws/DPDP%20Act%2C%202023.pdf"
  },
  {
    id: "metaverse-property-theft",
    icon: Building,
    category: "Cybercrime & Digital",
    title: "Metaverse Virtual Real Estate Theft",
    situation: "An investor purchases premium virtual land in the metaverse as an NFT worth lakhs of rupees. A hacker uses a phishing smart contract to drain the user's crypto wallet and steal the virtual property deed.",
    laws: [
      {
        act: "Information Technology Act, 2000",
        sections: "Sec 66 (Computer related offences) and Sec 43 (Unauthorized access)."
      },
      {
        act: "Bharatiya Nyaya Sanhita (BNS), 2023",
        sections: "Sec 318 (Cheating) and Sec 316 (Criminal breach of trust)."
      }
    ],
    actionSteps: [
      "Immediately revoke all token allowances connected to your crypto wallet.",
      "Trace the stolen NFT's transaction hash on the blockchain explorer.",
      "Report the theft on the National Cyber Crime Reporting Portal detailing the blockchain transaction IDs.",
      "Notify the Metaverse platform administrators to freeze the stolen asset or flag it as compromised."
    ],
    sourceLink: "/pdfs/Information%20Technology%20%26%20Digital%20Laws/IT%20Act%2C%202000%20amended%202008.pdf"
  },
  {
    id: "robotic-surgery-glitch",
    icon: Stethoscope,
    category: "Medical & Healthcare",
    title: "Robotic Surgery Firmware Glitch",
    situation: "During an intricate spinal surgery performed by a doctor using a robotic arm, the robot manufacturer pushes an over-the-air (OTA) software update that forces the arm to reboot, paralyzing the patient.",
    laws: [
      {
        act: "Consumer Protection Act, 2019",
        sections: "Sec 84 (Product liability against manufacturer) and Sec 2(11) (Deficiency in service against hospital)."
      },
      {
        act: "Bharatiya Nyaya Sanhita (BNS), 2023",
        sections: "Sec 125 (Act endangering life or personal safety)."
      }
    ],
    actionSteps: [
      "Ensure the hospital's IT department secures the robotic machine's system logs to prove the unprompted update.",
      "File a complaint with the State Medical Council against the hospital for inadequate IT protocols during surgery.",
      "File a Product Liability claim in the National Consumer Commission against the robotics manufacturer.",
      "Demand massive compensation for permanent disability and loss of livelihood."
    ],
    sourceLink: "/pdfs/Consumer%20Rights/Consumer%20Protection%20Act%202019.pdf"
  },
  {
    id: "bci-mind-reading",
    icon: ShieldAlert,
    category: "Employment & Workplace",
    title: "Mind-Reading Tech in the Workplace",
    situation: "An employer mandates workers to wear Brain-Computer Interface (BCI) headbands to 'track focus'. An employee discovers the device is also recording their emotional states, stress levels, and private subvocalizations without consent.",
    laws: [
      {
        act: "Constitution of India",
        sections: "Article 21 (Fundamental Right to Privacy)."
      },
      {
        act: "Digital Personal Data Protection Act, 2023",
        sections: "Processing of personal biological data without valid, informed consent."
      }
    ],
    actionSteps: [
      "Refuse to wear the device and formally document the objection via an email to HR.",
      "Gather evidence of the data being tracked (manuals, IT logs, or software dashboards).",
      "File a complaint with the Data Protection Board of India for invasive biometric tracking.",
      "If terminated for refusing, file a case in the Labour Court for wrongful termination and violation of fundamental privacy."
    ],
    sourceLink: "/pdfs/Information%20Technology%20%26%20Digital%20Laws/DPDP%20Act%2C%202023.pdf"
  },
  {
    id: "drone-delivery-crash",
    icon: Plane,
    category: "Property & Real Estate",
    title: "Drone Delivery Crash & Fire",
    situation: "An automated heavy-duty delivery drone belonging to an e-commerce giant malfunctions, crashing through a homeowner's glass roof. The lithium battery explodes, causing severe fire damage to the living room.",
    laws: [
      {
        act: "Drone Rules, 2021",
        sections: "Regulations regarding third-party insurance and liability for drone operators."
      },
      {
        act: "Law of Torts",
        sections: "Strict Liability and Trespass to Property."
      },
      {
        act: "Bharatiya Nyaya Sanhita (BNS), 2023",
        sections: "Sec 280 (Rash navigation of vessel/aircraft) and Sec 329 (Criminal trespass)."
      }
    ],
    actionSteps: [
      "Call the fire department immediately and ensure family safety.",
      "Do not touch the drone wreckage. Photograph the debris, identifying markings, and the damage caused.",
      "File an FIR against the drone operator/company for rash navigation and endangering life.",
      "Claim compensation from the company's mandatory drone third-party insurance and file a civil suit for property damages."
    ],
    sourceLink: "/pdfs/Criminal%20Laws%20pdf/Bharatiya%20Nyaya%20Sanhita%20(BNS)%202023.pdf"
  },
  {
    id: "ai-hiring-bias",
    icon: Briefcase,
    category: "Employment & Workplace",
    title: "Algorithmic Discrimination in Hiring",
    situation: "A massive tech firm uses an AI HR screening tool. It is leaked that the algorithm automatically trashes resumes of female candidates and people from certain regions because it was trained on historically biased company data.",
    laws: [
      {
        act: "Constitution of India",
        sections: "Article 14 & 15 (Right to Equality and non-discrimination)."
      },
      {
        act: "Equal Remuneration Act, 1976",
        sections: "Prohibition of discrimination in recruitment based on gender."
      }
    ],
    actionSteps: [
      "Collect any leaked internal memos, emails, or whistle-blower testimonies proving the algorithmic bias.",
      "File a complaint with the National Commission for Women (NCW) or relevant human rights bodies.",
      "Lodge a grievance with the Ministry of Labour and Employment.",
      "File a Public Interest Litigation (PIL) in the High Court seeking a ban on unregulated, biased AI hiring tools."
    ],
    sourceLink: "/pdfs/the_constitution_of_india.pdf"
  },
  {
    id: "cryonics-inheritance",
    icon: Scale,
    category: "Family & Personal",
    title: "Cryonics & The 'Frozen' Inheritance",
    situation: "A billionaire freezes their body in a cryonics lab immediately upon clinical death, placing their entire estate into a trust for their 'revival'. The children sue to break the trust, arguing the billionaire is legally dead.",
    laws: [
      {
        act: "Indian Succession Act, 1925",
        sections: "Rules regarding execution of Wills and distribution of estate upon death."
      },
      {
        act: "Transfer of Property Act, 1882",
        sections: "Sec 14 (Rule against perpetuity - property cannot be tied up indefinitely)."
      }
    ],
    actionSteps: [
      "The heirs must file a probate petition in the High Court declaring the individual legally and medically dead.",
      "Challenge the trust deed citing the 'Rule against perpetuity', arguing a trust cannot wait indefinitely for a sci-fi revival.",
      "Seek a court order to freeze the trust's assets pending the trial.",
      "Request a medical board declaration that 'cryonic suspension' does not equate to 'living'."
    ],
    sourceLink: "/pdfs/Property%20Laws/Transfer%20of%20Property%20Act%201882.pdf"
  },
  {
    id: "deepfake-divorce-evidence",
    icon: HeartCrack,
    category: "Family & Personal",
    title: "Deepfake Adultery 'Evidence' in Divorce",
    situation: "During a bitter divorce battle, a husband submits hyper-realistic deepfake audio and video to the Family Court, falsely depicting his wife committing adultery, to deny her alimony and take child custody.",
    laws: [
      {
        act: "Bharatiya Nyaya Sanhita (BNS), 2023",
        sections: "Sec 336 (Forgery), Sec 344 (Using forged document as genuine), and Sec 356 (Defamation)."
      },
      {
        act: "Information Technology Act, 2000",
        sections: "Sec 66E (Violation of privacy) and Sec 67A."
      }
    ],
    actionSteps: [
      "Immediately file an application in the Family Court objecting to the evidence and demanding a forensic digital analysis.",
      "Engage an independent cyber-forensic expert to prove the video/audio is AI-generated (looking for deepfake artifacts).",
      "File a criminal FIR against the spouse for forgery, perjury, and using fabricated evidence in a judicial proceeding.",
      "Sue for severe defamation and criminal intimidation."
    ],
    sourceLink: "/pdfs/Criminal%20Laws%20pdf/Bharatiya%20Nyaya%20Sanhita%20(BNS)%202023.pdf"
  },
  {
    id: "space-tourism-injury",
    icon: Plane,
    category: "Consumer Rights",
    title: "Space Tourism Negligence",
    situation: "A civilian pays ₹5 Crores for a sub-orbital space flight. Due to the private company's negligence regarding cabin pressure, the passenger suffers ruptured eardrums and permanent hearing loss during atmospheric reentry.",
    laws: [
      {
        act: "Consumer Protection Act, 2019",
        sections: "Sec 2(11) (Deficiency in service) and Sec 84 (Product/Service liability)."
      },
      {
        act: "Carriage by Air Act, 1972",
        sections: "(Extrapolated) Liability of carrier for injury to passengers."
      }
    ],
    actionSteps: [
      "Obtain immediate medical attention and secure all medical reports detailing the barotrauma.",
      "Demand the flight telemetry and cabin pressure logs from the space tourism company.",
      "Challenge any 'liability waiver' signed before the flight, as waivers for gross negligence are generally void in Indian courts.",
      "File a massive compensation claim in the National Consumer Disputes Redressal Commission (NCDRC)."
    ],
    sourceLink: "/pdfs/Consumer%20Rights/Consumer%20Protection%20Act%202019.pdf"
  },
  {
    id: "3d-printed-gun",
    icon: FileWarning,
    category: "Civil Rights & Police",
    title: "3D Printed Weapon Threat",
    situation: "A college student downloads a digital blueprint and uses a 3D printer to manufacture a functioning, untraceable plastic firearm (a 'ghost gun'). They use it to threaten a classmate on campus.",
    laws: [
      {
        act: "Arms Act, 1959",
        sections: "Sec 3 (License for acquisition/possession of firearms) and Sec 25 (Punishment for offences)."
      },
      {
        act: "Bharatiya Nyaya Sanhita (BNS), 2023",
        sections: "Sec 351 (Criminal Intimidation) and Sec 109 (Attempt to murder/threat)."
      }
    ],
    actionSteps: [
      "Evacuate the immediate area and call the police emergency number instantly.",
      "Ensure campus security locks down the premises and isolates the individual safely if possible.",
      "The police must seize the 3D printer, the weapon, and the computer used to download the blueprint for forensic analysis.",
      "File an FIR under the Arms Act (illegal manufacturing) and the BNS (Criminal Intimidation)."
    ],
    sourceLink: "/pdfs/Criminal%20Laws%20pdf/Bharatiya%20Nyaya%20Sanhita%20(BNS)%202023.pdf"
  },
  {
    id: "smart-contract-drain",
    icon: CreditCard,
    category: "Banking & Insurance",
    title: "Rogue Smart Contract Draining Funds",
    situation: "A freelance developer signs a blockchain-based 'smart contract' with a decentralized organization (DAO). A bug in the smart contract's code automatically and irreversibly drains ₹10 Lakhs from the developer's wallet instead of paying them.",
    laws: [
      {
        act: "Indian Contract Act, 1872",
        sections: "Sec 20 (Liability to return money paid by mistake) and Sec 72."
      },
      {
        act: "Information Technology Act, 2000",
        sections: "Sec 43 (Damage to computer system) and Sec 66 (Computer related offences)."
      }
    ],
    actionSteps: [
      "Document the exact blockchain transaction ID, wallet addresses, and the smart contract's source code.",
      "Identify the creators or primary operators of the DAO (even if anonymous, track their digital footprint).",
      "File a complaint with the Cyber Crime Cell for electronic fraud and unauthorized transfer.",
      "Send a legal notice to the DAO's identifiable entities demanding restitution under the Contract Act for 'money paid by mistake'."
    ],
    sourceLink: "/pdfs/Information%20Technology%20%26%20Digital%20Laws/IT%20Act%2C%202000%20amended%202008.pdf"
  },
  {
    id: "biohacking-implant-injury",
    icon: Activity,
    category: "Medical & Healthcare",
    title: "Defective Bio-Hacking Implant",
    situation: "A tech enthusiast purchases a DIY subdermal NFC/RFID chip implant kit online to unlock doors with their hand. The uncertified chip leaks toxic battery fluid under their skin, causing severe necrosis.",
    laws: [
      {
        act: "Consumer Protection Act, 2019",
        sections: "Sec 84 (Product liability) against the online seller/manufacturer."
      },
      {
        act: "Drugs and Cosmetics Act, 1940",
        sections: "Regulations regarding unapproved medical devices."
      }
    ],
    actionSteps: [
      "Seek emergency surgical removal of the implant and get a detailed toxicology/medical report.",
      "Preserve the original packaging, purchase invoice, and the extracted chip as physical evidence.",
      "File a complaint with the Central Drugs Standard Control Organisation (CDSCO) regarding the sale of unapproved invasive devices.",
      "Sue the e-commerce platform and the manufacturer in the Consumer Court for selling hazardous, uncertified biomedical products."
    ],
    sourceLink: "/pdfs/Consumer%20Rights/Consumer%20Protection%20Act%202019.pdf"
  }
];

