/**
 * The Environment (Protection) Act, 1986 — Act No. 29 of 1986.
 *
 * India's umbrella environmental statute, enacted in the aftermath of the
 * Bhopal gas tragedy (Dec 1984). The Act gives the Central Government broad
 * powers — far broader than under the water and air pollution Acts — to take
 * "all such measures" to protect and improve the environment.
 *
 * Source PDF: c:/Users/Debabrata Barman/Documents/The law & order/
 *   Environment & Land/Environment Protection Act, 1986.pdf
 *
 * Verbatim text below is reproduced exactly as the source PDF prints it,
 * including footnote markers (rendered as plain numbers) and the punctuation
 * the typesetter used.
 */

import type { Statute } from "../_types";

const SOURCE_BASE = "/pdfs/Environment%20%26%20Land/Environment%20Protection%20Act,%201986.pdf";
const SOURCE_FILE = "Environment Protection Act, 1986.pdf";

export const environmentProtectionAct1986: Statute = {
  meta: {
    slug: "environment-protection-act-1986",
    shortName: "Environment Protection Act",
    fullName: "The Environment (Protection) Act, 1986",
    year: 1986,
    sanskrit: "पर्यावरण संरक्षण अधिनियम",
    tagline: "India's umbrella law for environmental protection.",
    summary:
      "Born after the Bhopal gas disaster, this Act gives the Central Government the broadest possible powers to protect and improve the environment — setting standards, restricting industries, regulating hazardous substances, and prosecuting offenders. With just 26 sections in four chapters, it remains the legal foundation for the Environment Impact Assessment regime, the Coastal Regulation Zone, the National Ambient Air Quality Standards, the hazardous waste rules and dozens of other subordinate regulations.",
    preamble:
      "An Act to provide for the protection and improvement of environment and for matters connected there with:\n\nWHEREAS the decisions were taken at the United Nations Conference on the Human Environment held at Stockholm in June, 1972, in which India participated, to take appropriate steps for the protection and improvement of human environment;\n\nAND WHEREAS it is considered necessary further to implement the decisions aforesaid in so far as they relate to the protection and improvement of environment and the prevention of hazards to human beings, other living creatures, plants and property;\n\nBE it enacted by Parliament in the Thirty-seventh Year of the Republic of India as follows:—",
    categorySlug: "environment-and-land",
    enactedOn: "1986-05-23",
    commencement:
      "Came into force in the whole of India on 19 November 1986 (Notification No. G.S.R. 1198(E) dated 12-11-1986).",
    totalSections: 26,
    totalChapters: 4,
    sourcePdf: {
      pdfPath: SOURCE_BASE,
      pdfFile: SOURCE_FILE,
      pdfPage: 1,
    },
    coverage: "complete",
    tier: 1,
    amendments: [
      {
        year: 1991,
        shortName: "Environment (Protection) Amendment Act, 1991",
        note:
          "Inserted clarifications in the directions and entry powers and aligned the Act with the Public Liability Insurance Act, 1991.",
      },
      {
        year: 2010,
        shortName: "National Green Tribunal Act, 2010 — consequential",
        note:
          "Established the NGT as the principal forum for civil environmental disputes; courts now read Section 22 of EPA together with the NGT Act when ousting civil-court jurisdiction.",
      },
      {
        year: 2024,
        shortName: "Jan Vishwas (Amendment of Provisions) Act, 2023 — effective 2024",
        note:
          "Decriminalised several offences under Section 15 by replacing imprisonment with monetary penalties (for non-grave contraventions), introduced an adjudicating officer regime and an Environment Protection Fund. Important real-world shift — the user's source PDF still prints the original Section 15.",
      },
    ],
  },

  chapters: [
    // ============================================================
    // CHAPTER I — PRELIMINARY
    // ============================================================
    {
      slug: "chapter-1-preliminary",
      number: "I",
      title: "Preliminary",
      range: ["1", "2"],
      intro:
        "Chapter I does the legal housekeeping. Section 1 names the Act and sets the date it switches on. Section 2 then defines the seven terms — environment, environmental pollutant, environmental pollution, handling, hazardous substance, occupier and prescribed — that every other section reads back into. The definitions are deliberately wide: 'environment' here includes the inter-relationship between water, air, land, people, animals, plants and even property. That breadth is what lets the rest of the Act reach almost any human activity that touches the natural world.",
      sections: [
        {
          number: "1",
          label: "Section 1",
          marginalNote: "Short title, extent and commencement",
          importance: "operative",
          verbatim:
            "(1) This Act may be called the Environment (Protection) Act, 1986.\n\n(2) It extends to the whole of India.\n\n(3) It shall come into force on such date as the Central Government may, by notification in the Official Gazette, appoint and different dates may be appointed for different provisions of this Act and for different areas.",
          plainEnglish:
            "Section 1 settles three preliminary matters. Sub-section (1) gives the Act its formal name — \"The Environment (Protection) Act, 1986\" — the title every court order, notice, RTI application and Ministry circular must use.\n\nSub-section (2) tells us the Act covers \"the whole of India\". Unlike many laws of the 1980s, this one did not carve out Jammu and Kashmir; from day one it applied uniformly across every State and Union Territory.\n\nSub-section (3) is the commencement clause. Parliament left the actual start-date open. The Central Government later notified 19 November 1986 (vide G.S.R. 1198(E) dated 12-11-1986) — that is the operational birthday of the Act. The same sub-section also lets the Centre stagger the start-date for different provisions or different regions; this flexibility is used to phase in new schedules, for instance the noise-pollution norms or the National Ambient Air Quality Standards.",
          scenarios: [
            {
              title: "Reading a 1986 industrial-discharge case",
              setup:
                "A factory was discharging effluents in August 1986. A criminal complaint under Section 15 of the Act is filed in 1988 in respect of that discharge.",
              outcome:
                "The defence will rely on Section 1(3) — the Act only came into force on 19 November 1986. Any conduct before that date cannot attract Section 15. The complaint can only target the post-commencement discharges.",
              appliesUnder: "Section 1(3)",
              consequence: "Pre-commencement conduct insulated from prosecution under EPA.",
            },
          ],
          faq: [
            {
              q: "Does the Act apply in Jammu and Kashmir and Ladakh?",
              a: "Yes. Section 1(2) extends the Act to the whole of India, with no Article-370 carve-out at the time of enactment. After the J&K Reorganisation Act, 2019, EPA continues to apply to both Union Territories.",
            },
            {
              q: "Why does Sub-section (3) let the Centre fix different start dates for different provisions?",
              a: "Because EPA is an enabling statute that drives standards, rules and notifications across many sectors. Parliament wanted the Centre to be able to roll out, for example, the noise rules or the EIA Notification in stages without having to wait for every provision to be operationally ready. This staggered commencement is why so many EPA-derived Rules carry different effective dates.",
            },
            {
              q: "Is the short title legally important?",
              a: "Yes. Pleadings, FIRs, NGT applications, show-cause notices and CPCB directions must cite the Act by its formal name. A mis-citation can be used by the opposite side to argue that the wrong statute is being invoked.",
            },
          ],
          crossRefs: [
            {
              statute: "Notification G.S.R. 1198(E) dated 12-11-1986",
              section: "—",
              note: "The notification under Section 1(3) that brought the Act into force on 19 November 1986.",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 2,
          },
        },
        {
          number: "2",
          label: "Section 2",
          marginalNote: "Definitions",
          importance: "core",
          verbatim:
            "In this Act, unless the context otherwise requires,—\n\n(a) \"environment\" includes water, air and land and the inter-relationship which exists among and between water, air and land, and human beings, other living creatures, plants, micro-organism and property;\n\n(b) \"environmental pollutant\" means any solid, liquid or gaseous substance present in such concentration as may be, or tend to be, injurious to environment;\n\n(c) \"environmental pollution\" means the presence in the environment of any environmental pollutant;\n\n(d) \"handling\", in relation to any substance, means the manufacture, processing, treatment, package, storage, transportation, use, collection, destruction, conversion, offering for sale, transfer or the like of such substance;\n\n(e) \"hazardous substance\" means any substance or preparation which, by reason of its chemical or physico-chemical properties or handling, is liable to cause harm to human beings, other living creatures, plant, micro-organism, property or the environment;\n\n(f) \"occupier\", in relation to any factory or premises, means a person who has, control over the affairs of the factory or the premises and includes in relation to any substance, the person in possession of the substance;\n\n(g) \"prescribed\" means prescribed by rules made under this Act.",
          plainEnglish:
            "Section 2 is the dictionary that the rest of the Act reads back into. Each defined term is deliberately written wide so that the substantive provisions — particularly Sections 3, 5, 7, 8 and 15 — can stretch over the widest possible range of conduct.\n\n\"Environment\" is not just air, water and land — it explicitly includes the inter-relationship between those media and humans, animals, plants, micro-organisms and even property. So degrading a wetland's hydrology or harming a coral reef is just as much harm to the 'environment' as smoke from a chimney.\n\n\"Environmental pollutant\" turns on concentration, not on the substance itself. Anything in a quantity that is, or even tends to be, injurious counts. That is why mercury at 0.001 mg/L can be lawful while at 0.01 mg/L it becomes a pollutant.\n\n\"Environmental pollution\" simply means the presence of any such pollutant — no separate harm threshold has to be proved, just the prescribed-limit overshoot under Section 7.\n\n\"Handling\" is the most expansive verb in the Act. It covers manufacture, processing, treatment, packaging, storage, transport, use, collection, destruction, conversion, sale, transfer — basically every commercial step. Plug that into Section 8 and almost any business touching a hazardous substance is governed by EPA.\n\n\"Hazardous substance\" is keyed to harm potential — not a static list. If the chemistry, physico-chemistry or handling pattern is liable to cause harm, the substance is hazardous. This is why the Centre's Hazardous Wastes Rules and Manufacture, Storage and Import of Hazardous Chemicals Rules sit comfortably under Section 2(e).\n\n\"Occupier\" picks up a concept already familiar from the Factories Act, 1948 — the person who controls the affairs. Importantly, for substances, the occupier is the person in possession. This is what lets enforcement agencies pin liability on the factory manager, the warehouse operator or the transporter, depending on where the substance happens to be.\n\n\"Prescribed\" is shorthand: anywhere the Act says 'prescribed', it means rules made under Section 25 — and the principal subordinate legislation is the Environment (Protection) Rules, 1986.",
          defines: [
            {
              term: "Environment",
              definition:
                "Includes water, air and land and the inter-relationship which exists among and between water, air and land, and human beings, other living creatures, plants, micro-organism and property.",
              sourceSection: "2(a)",
            },
            {
              term: "Environmental pollutant",
              definition:
                "Any solid, liquid or gaseous substance present in such concentration as may be, or tend to be, injurious to environment.",
              sourceSection: "2(b)",
            },
            {
              term: "Environmental pollution",
              definition: "The presence in the environment of any environmental pollutant.",
              sourceSection: "2(c)",
            },
            {
              term: "Handling",
              definition:
                "In relation to any substance, manufacture, processing, treatment, package, storage, transportation, use, collection, destruction, conversion, offering for sale, transfer or the like of such substance.",
              sourceSection: "2(d)",
            },
            {
              term: "Hazardous substance",
              definition:
                "Any substance or preparation which, by reason of its chemical or physico-chemical properties or handling, is liable to cause harm to human beings, other living creatures, plant, micro-organism, property or the environment.",
              sourceSection: "2(e)",
            },
            {
              term: "Occupier",
              definition:
                "In relation to any factory or premises, a person who has control over the affairs of the factory or the premises and includes in relation to any substance, the person in possession of the substance.",
              sourceSection: "2(f)",
            },
            {
              term: "Prescribed",
              definition: "Prescribed by rules made under this Act — primarily the Environment (Protection) Rules, 1986.",
              sourceSection: "2(g)",
            },
          ],
          visuals: [
            {
              kind: "callout",
              tone: "tip",
              title: "Why these definitions matter",
              body:
                "Section 2 is where most environmental disputes are won or lost. Whether a substance is a 'hazardous substance', whether an activity is 'handling', whether your client is an 'occupier' — answer those three questions first; the rest of the Act flows from them.",
            },
            {
              kind: "comparison-table",
              title: "Pollutant vs. Pollution — read carefully",
              caption: "EPA distinguishes between the substance and its presence in the environment.",
              columns: ["Environmental pollutant (§2(b))", "Environmental pollution (§2(c))"],
              rows: [
                {
                  left: "Any solid, liquid or gaseous substance",
                  right: "Presence of any such pollutant in the environment",
                },
                {
                  left: "Threshold: concentration must be (or tend to be) injurious",
                  right: "Threshold: mere presence — once you have a pollutant, you have pollution",
                },
                {
                  left: "Used in Section 7 (no emission in excess of standards)",
                  right: "Used as a defined target throughout — Section 3, Rules, etc.",
                },
              ],
            },
          ],
          scenarios: [
            {
              title: "Is a tannery's chrome-laden effluent a 'hazardous substance'?",
              setup:
                "A leather-tanning unit discharges effluent containing trivalent and hexavalent chromium into a public drain that joins a river. The owner argues chrome compounds are routine industrial inputs.",
              outcome:
                "Section 2(e) turns on whether the substance is 'liable to cause harm' through its chemistry or handling. Hexavalent chromium plainly is — it is mutagenic and toxic at low concentrations. The effluent therefore squarely fits 'hazardous substance', triggering Section 8 procedural safeguards and Section 15 penalties for any breach.",
              appliesUnder: "Section 2(e) read with Section 8",
            },
            {
              title: "Who is the 'occupier' of a hired warehouse storing pesticides?",
              setup:
                "A pesticide manufacturer rents a warehouse and parks 14 tonnes of imported chemicals there awaiting onward sale. The warehouse is leased and operated by a third-party logistics provider.",
              outcome:
                "Section 2(f) makes the occupier the person in 'control of the affairs' of the premises and in 'possession' of the substance. Both the warehousing company (premises control) and the manufacturer (substance possession) qualify. Liability under Sections 8, 9 and 15 attaches to both — they cannot point at each other to escape.",
              appliesUnder: "Section 2(f)",
            },
          ],
          faq: [
            {
              q: "If the substance is below the prescribed concentration, is it still a 'pollutant'?",
              a: "Read Section 2(b) carefully — a substance qualifies if its concentration 'may be, or tend to be, injurious'. Even below the headline limit, a substance can be a pollutant if it is trending towards harm. In practice, prosecution under Section 7 is anchored on the prescribed standards in the Environment (Protection) Rules, but Section 5 directions can target sub-threshold conduct using the wider Section 2(b) language.",
            },
            {
              q: "Does 'environment' under EPA cover the marine environment and the sea-bed?",
              a: "Yes. 'Environment' includes water and the inter-relationships within it. Coastal Regulation Zone notifications, off-shore drilling conditions and marine-plastic rules are all issued under EPA on the strength of Section 2(a).",
            },
            {
              q: "What is the practical difference between 'handling' and 'manufacture'?",
              a: "'Manufacture' is a single step. 'Handling' under Section 2(d) covers the entire lifecycle — from receiving raw materials, through processing, packaging, transport, storage and sale, to disposal. EPA does not stop at the factory gate; it follows the substance.",
            },
            {
              q: "Is the term 'environmental pollutant' limited to chemicals?",
              a: "No. The definition speaks of any solid, liquid or gaseous substance. Noise (regulated under the Noise Pollution Rules), particulate matter, and even certain biological agents have all been treated as environmental pollutants when their concentrations were injurious.",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 2,
            pdfPageEnd: 3,
          },
        },
      ],
      scenarios: [
        {
          title: "A new lab tests itself against EPA before opening",
          setup:
            "A pharmaceutical start-up wants to set up a small synthesis lab. Before signing the lease, the founders want to know whether they will be 'caught' by EPA.",
          outcome:
            "Three questions answer it: (i) Will any 'environmental pollutant' (§2(b)) be released? (ii) Will any 'hazardous substance' (§2(e)) be 'handled' (§2(d))? (iii) Who is the 'occupier' (§2(f))? If yes to (i) or (ii), the lab is squarely within EPA — they must plan compliance with Sections 7, 8, 9 from day one. Section 2 is the gateway, and most disputes are decided here.",
          appliesUnder: "Section 2",
        },
      ],
      faq: [
        {
          q: "Why does EPA define 'environment' so broadly?",
          a: "Because Parliament wanted one umbrella statute that could be stretched as new environmental concerns arose without having to be re-enacted. The Stockholm Declaration of 1972 had referred to the 'inter-relationship' of natural systems; the Indian Parliament lifted that vocabulary almost verbatim. As a result, EPA has been used over the years to regulate noise, GMOs, marine pollution, e-waste and even single-use plastics — all under the same Section 2(a) umbrella.",
        },
        {
          q: "Are the definitions in Section 2 closed lists?",
          a: "Mostly inclusive. The Section opens with 'unless the context otherwise requires'. Within each clause, words like 'includes' and 'in relation to' signal that the lists are illustrative, not exhaustive. Courts have read the definitions purposively to advance environmental protection.",
        },
        {
          q: "Where does the Environment (Protection) Rules, 1986 fit in?",
          a: "Section 2(g) defines 'prescribed' as 'prescribed by rules made under this Act'. The Centre exercises that power under Sections 6 and 25, and the principal subordinate legislation is the Environment (Protection) Rules, 1986. Most operative numbers — emission limits, noise levels, ambient quality standards — sit in the Schedules to those Rules, not in the Act itself.",
        },
      ],
    },

    // ============================================================
    // CHAPTER II — GENERAL POWERS OF THE CENTRAL GOVERNMENT
    // ============================================================
    {
      slug: "chapter-2-general-powers-of-the-central-government",
      number: "II",
      title: "General Powers of the Central Government",
      range: ["3", "6"],
      intro:
        "Chapter II is where the Act stops describing things and starts arming the Central Government. Section 3 is the master enabling clause — \"all such measures\" the Centre considers necessary. Section 4 lets it deploy officers. Section 5 gives it the famous power of written directions (closure, prohibition, regulation of any industry, with the option of cutting electricity or water). Section 6 anchors the rule-making power. Together, these four sections are the engine that drives the Environment (Protection) Rules, the EIA Notification, the CRZ Notification, the Hazardous Wastes Rules and a long list of other subordinate regulations.",
      sections: [
        {
          number: "3",
          label: "Section 3",
          marginalNote: "Power of Central Government to take measures to protect and improve environment",
          importance: "core",
          verbatim:
            "(1) Subject to the provisions of this Act, the Central Government, shall have the power to take all such measures as it deems necessary or expedient for the purpose of protecting and improving the quality of the environment and preventing controlling and abating environmental pollution.\n\n(2) In particular, and without prejudice to the generality of the provisions of sub-section (1), such measures may include measures with respect to all or any of the following matters, namely:—\n\n(i) co-ordination of actions by the State Governments, officers and other authorities—\n  (a) under this Act, or the rules made thereunder, or\n  (b) under any other law for the time being in force which is relatable to the objects of this Act;\n\n(ii) planning and execution of a nation-wide programme for the prevention, control and abatement of environmental pollution;\n\n(iii) laying down standards for the quality of environment in its various aspects;\n\n(iv) laying down standards for emission or discharge of environmental pollutants from various sources whatsoever:\n\nProvided that different standards for emission or discharge may be laid down under this clause from different sources having regard to the quality or composition of the emission or discharge of environmental pollutants from such sources;\n\n(v) restriction of areas in which any industries, operations or processes or class of industries, operations or processes shall not be carried out or shall be carried out subject to certain safeguards;\n\n(vi) laying down procedures and safeguards for the prevention of accidents which may cause environmental pollution and remedial measures for such accidents;\n\n(vii) laying down procedures and safeguards for the handling of hazardous substances;\n\n(viii) examination of such manufacturing processes, materials and substances as are likely to cause environmental pollution;\n\n(ix) carrying out and sponsoring investigations and research relating to problems of environmental pollution;\n\n(x) inspection of any premises, plant, equipment, machinery, manufacturing or other processes, materials or substances and giving, by order, of such directions to such authorities, officers or persons as it may consider necessary to take steps for the prevention, control and abatement of environmental pollution;\n\n(xi) establishment or recognition of environmental laboratories and institutes to carry out the functions entrusted to such environmental laboratories and institutes under this Act;\n\n(xii) collection and dissemination of information in respect of matters relating to environmental pollution;\n\n(xiii) preparation of manuals, codes or guides relating to the prevention, control and abatement of environmental pollution;\n\n(xiv) such other matters as the Central Government deems necessary or expedient for the purpose of securing the effective implementation of the provisions of this Act.\n\n(3) The Central Government may, if it considers it necessary or expedient so to do for the purpose of this Act, by order, published in the Official Gazette, constitute an authority or authorities by such name or names as may be specified in the order for the purpose of exercising and performing such of the powers and functions (including the power to issue directions under section 5) of the Central Government under this Act and for taking measures with respect to such of the matters referred to in sub-section (2) as may be mentioned in the order and subject to the supervision and control of the Central Government and the provisions of such order, such authority or authorities may exercise the powers or perform the functions or take the measures so mentioned in the order as if such authority or authorities had been empowered by this Act to exercise those powers or perform those functions or take such measures.",
          plainEnglish:
            "Section 3 is the cornerstone of the Act. Sub-section (1) does something rare in Indian statutes: it gives the Central Government a general, open-ended power to take 'all such measures' it considers necessary or expedient to protect and improve environmental quality. The phrase 'all such measures' is what makes EPA an 'umbrella' law — virtually every environmental notification of the last three decades has been issued under this single sub-section.\n\nSub-section (2) does not narrow that power; it illustrates it. Fourteen sub-clauses spell out specific things the Centre may do — coordinate State action (clause i), launch a nation-wide pollution programme (ii), set environmental quality standards (iii) and emission standards (iv), declare no-go and restricted zones (v), prescribe accident safeguards (vi), regulate hazardous-substance handling (vii), study harmful materials (viii), fund research (ix), inspect premises and issue directions (x), set up laboratories (xi), publish information (xii), prepare manuals and codes (xiii), and as a final catch-all, do 'such other matters' as it considers necessary (xiv).\n\nClause (v) is the legal anchor for the Coastal Regulation Zone Notification, the Eco-Sensitive Zone notifications around protected areas, and the no-development zones around airports and heritage sites. Clause (iv) anchors the National Ambient Air Quality Standards (NAAQS) and the Industry-specific Effluent Standards in Schedule I of the EP Rules. Clause (vi) anchors the Manufacture, Storage and Import of Hazardous Chemicals Rules. The famous Environment Impact Assessment Notification of 2006 is justified under clauses (iii), (iv) and (v) read together.\n\nSub-section (3) lets the Centre create dedicated authorities to wield its powers. This is how the Central Pollution Control Board, the National Coastal Zone Management Authority, the Environment Pollution (Prevention and Control) Authority for the NCR (EPCA, since dissolved), and the Commission for Air Quality Management have at various points received their teeth.",
          visuals: [
            {
              kind: "callout",
              tone: "info",
              title: "Section 3 is the 'umbrella'",
              body:
                "If you ever wonder which provision a fresh environmental notification — e-waste, plastic waste, single-use plastics, electric-vehicle norms — is issued under, the answer is almost always Section 3 read with Section 5 and Section 25.",
            },
          ],
          procedure: [
            {
              step: 1,
              title: "Centre identifies an environmental problem",
              body: "MoEFCC, CPCB or a court direction surfaces a problem — e.g., rising NO₂ in metros, an unregulated chemical, a new e-waste stream.",
              actor: "Central Government / CPCB",
            },
            {
              step: 2,
              title: "Choose the lever",
              body: "Section 3(2)(iii) for a quality standard, (iv) for an emission limit, (v) for area-based restriction, (vii) for hazardous-substance procedure.",
              actor: "MoEFCC",
              ref: "Section 3(2)",
            },
            {
              step: 3,
              title: "Notification or Rule",
              body: "Draft notification published in the Official Gazette, often after a 60-day public-comment window.",
              actor: "MoEFCC",
            },
            {
              step: 4,
              title: "Final notification",
              body: "After considering objections, a final notification is gazetted and the standard / restriction comes into force.",
              actor: "MoEFCC",
            },
            {
              step: 5,
              title: "Enforcement",
              body: "Operationalised through Section 7 (no excess emission), Section 8 (handling safeguards), Section 15 (penalty), Section 5 (directions).",
              actor: "CPCB, SPCBs, authorised officers",
            },
          ],
          cases: [
            {
              name: "Vellore Citizens Welfare Forum v. Union of India",
              citation: "(1996) 5 SCC 647",
              court: "Supreme Court of India",
              year: 1996,
              ratio:
                "Section 3 read with the Constitutional duty under Articles 48A and 51A(g) imports the precautionary principle and the polluter-pays principle into Indian environmental law. The Centre's powers under Section 3 must be exercised consistent with these principles.",
            },
            {
              name: "Indian Council for Enviro-Legal Action v. Union of India (Bichhri case)",
              citation: "(1996) 3 SCC 212",
              court: "Supreme Court of India",
              year: 1996,
              ratio:
                "Section 3(1) and 3(2)(v) empower the Centre to close or restrict polluting industries — and where it fails to do so, the writ courts will issue mandamus to compel action and recover remediation costs from the polluter.",
            },
          ],
          crossRefs: [
            {
              statute: "Environment (Protection) Rules, 1986",
              section: "Rule 3 and Schedule I",
              note: "Lays down standards for emission and discharge under Section 3(2)(iv).",
            },
            {
              statute: "EIA Notification, 2006 (S.O. 1533(E))",
              section: "—",
              note: "Major notification issued under Section 3(2)(iii)–(v) requiring prior environmental clearance for listed projects.",
            },
            {
              statute: "Coastal Regulation Zone Notification, 2019",
              section: "—",
              note: "Restricts development along the coast under Section 3(2)(v).",
            },
          ],
          scenarios: [
            {
              title: "MoEFCC issues a new hazardous-chemical schedule overnight",
              setup:
                "After a chemical accident at a port, MoEFCC notifies a new schedule of restricted chemicals and requires every importer to obtain prior consent before bringing the chemical into India.",
              outcome:
                "This is a textbook exercise of Section 3(2)(vii) and (v). Importers cannot challenge the power; their only challenge is on procedural fairness (public consultation, reasonableness of the safeguards). The Centre can act under Section 3 alone — it does not need a fresh legislative basis.",
              appliesUnder: "Section 3(2)(v) and (vii)",
            },
          ],
          faq: [
            {
              q: "Can a State Government use Section 3?",
              a: "No. Section 3 vests the power in the Central Government alone. States act through their own delegations — for instance, Section 5 directions have been delegated to most States under Section 23. But the master power of taking 'all such measures' stays with the Centre.",
            },
            {
              q: "Is the Centre's discretion under Section 3 reviewable?",
              a: "Yes. Although the language ('all such measures as it deems necessary') is broad, the discretion is amenable to judicial review on Wednesbury grounds — irrationality, ignoring relevant factors, considering irrelevant ones, or failing to apply the precautionary principle. The NGT and High Courts have repeatedly reviewed Section 3 notifications.",
            },
            {
              q: "Can the Centre delegate Section 3 powers?",
              a: "Section 3(3) lets the Centre constitute authorities to exercise specified powers, and Section 23 lets it delegate, but two powers cannot be delegated: (a) the power to constitute an authority under Section 3(3) itself, and (b) the rule-making power under Section 25. Everything else can be passed down.",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 3,
            pdfPageEnd: 5,
          },
        },

        {
          number: "4",
          label: "Section 4",
          marginalNote: "Appointment of officers and their powers and functions",
          importance: "operative",
          verbatim:
            "(1) Without prejudice to the provisions of sub-section (3) of section 3, the Central Government may appoint officers with such designation as it thinks fit for the purposes of this Act and may entrust to them such of the powers and functions under this Act as it may deem fit.\n\n(2) The officers appointed under sub-section (1) shall be subject to the general control and direction of the Central Government or, if so directed by that Government, also of the authority or authorities, if any, constituted under sub-section (3) of section 3 or of any other authority or officer.",
          plainEnglish:
            "Section 4 is the staffing clause. Sub-section (1) lets the Centre appoint officers with whatever designation it pleases and entrust to them whatever EPA powers it considers fit. So when a notification creates 'Environmental Engineers', 'Authorised Officers' or 'Adjudicating Officers', Section 4 is the legal source.\n\nSub-section (2) puts the chain of command in place: every officer appointed under Section 4 acts under the Centre's general control — and, if the Centre so directs, also under any Section 3(3) authority or any other officer. In practice, most field-level officers under EPA work through the State Pollution Control Boards even though their statutory basis is Section 4.",
          scenarios: [
            {
              title: "Authority of a Sub-Divisional Environment Officer",
              setup:
                "A State PCB officer designated as 'Sub-Divisional Environmental Engineer' issues a Section 5 direction to a polluting unit, citing his Section 4 appointment notification.",
              outcome:
                "Valid, provided the Centre's notification under Section 4 actually entrusts him with the power to issue directions. The first cross-examination question in the appeal will be: 'Show me the notification.' Without it, the direction is open to challenge as ultra vires.",
              appliesUnder: "Section 4(1)",
            },
          ],
          faq: [
            {
              q: "Are State pollution-control officials 'officers' under Section 4?",
              a: "Sometimes yes, sometimes no. Officers of the CPCB and the SPCBs derive their primary status from the Water Act, 1974 and the Air Act, 1981. Where the Centre has separately appointed or recognised them under Section 4 of EPA, they enjoy EPA powers too. Authority must be checked notification-by-notification.",
            },
            {
              q: "Can an officer appointed under Section 4 issue a closure direction?",
              a: "Only if the Centre has expressly entrusted that power. Section 5 closure powers are usually retained at the Centre or delegated to senior State authorities, not field officers. Always read the entrustment notification together with the empowering Section 5 delegation.",
            },
          ],
          crossRefs: [
            {
              statute: "Notification S.O. 83(E) dated 16-2-1987",
              section: "—",
              note: "Empowered 64 officers under Section 10 — read with Section 4 for their full chain of authority.",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 5,
          },
        },

        {
          number: "5",
          label: "Section 5",
          marginalNote: "Power to give directions",
          importance: "core",
          verbatim:
            "Notwithstanding anything contained in any other law but subject to the provisions of this Act, the Central Government may, in the exercise of its powers and performance of its functions under this Act, issue directions in writing to any person, officer or any authority and such person, officer or authority shall be bound to comply with such directions.\n\nExplanation—For the avoidance of doubts, it is hereby declared that the power to issue directions under this section includes the power to direct—\n\n(a) the closure, prohibition or regulation of any industry, operation or process; or\n\n(b) stoppage or regulation of the supply of electricity or water or any other service.",
          plainEnglish:
            "Section 5 is the iron fist of EPA. In a single sentence Parliament gives the Central Government the power to issue, by written direction, an order on 'any person, officer or any authority' that the recipient is 'bound to comply with'. The 'notwithstanding' clause means the direction overrides any inconsistent State law.\n\nThe Explanation removes any doubt about how far the power reaches. The Centre can direct (a) the closure, prohibition or regulation of any industry, operation or process and (b) the stoppage or regulation of electricity, water or any other service. So the Centre can order an Electricity Distribution Company to cut a polluting unit's power supply — a remedy not available under most other Indian environmental statutes.\n\nAlthough the section vests the power in the Centre, almost every State Government has been delegated this power under Section 23, so in practice it is State Environment Departments and SPCBs that issue most Section 5 directions. Procedural rules — minimum notice, opportunity of being heard — appear in Rule 4 of the Environment (Protection) Rules, 1986.",
          visuals: [
            {
              kind: "process-flow",
              title: "Anatomy of a Section 5 direction",
              caption: "From show-cause to closure — the procedural fairness path under Rule 4 of the EP Rules.",
              nodes: [
                { id: "n1", label: "Trigger", sub: "Inspection / complaint / monitoring data" },
                { id: "n2", label: "Show-cause notice", sub: "Rule 4 — minimum 15 days" },
                { id: "n3", label: "Reply / hearing", sub: "Opportunity to be heard" },
                { id: "n4", label: "Reasoned direction", sub: "In writing, under Section 5" },
                { id: "n5", label: "Closure / power cut", sub: "Per Explanation (a) or (b)" },
                { id: "n6", label: "Appeal to NGT", sub: "Section 16, NGT Act 2010" },
              ],
              edges: [
                { from: "n1", to: "n2" },
                { from: "n2", to: "n3" },
                { from: "n3", to: "n4" },
                { from: "n4", to: "n5" },
                { from: "n5", to: "n6" },
              ],
            },
            {
              kind: "callout",
              tone: "warning",
              title: "Power to cut electricity & water",
              body:
                "The Explanation to Section 5 is unusual. Most environmental statutes can only fine or prosecute. Under Section 5, the Centre (or its delegate) can directly instruct a DISCOM or water utility to stop service to a polluter — a far more effective lever than a long-running prosecution.",
            },
          ],
          cases: [
            {
              name: "M.C. Mehta v. Union of India (Tannery case)",
              citation: "(1997) 2 SCC 411",
              court: "Supreme Court of India",
              year: 1996,
              ratio:
                "Section 5 directions, including closure of polluting industries, are valid when issued after due process. Courts will not interfere with bona-fide Section 5 directions merely because they cause economic loss to the unit.",
            },
            {
              name: "Pravinbhai Jashbhai Patel v. State of Gujarat",
              citation: "(1995) 2 GLR 1210",
              court: "Gujarat High Court",
              year: 1995,
              ratio:
                "A Section 5 direction must be preceded by an opportunity to be heard. A direction issued in violation of natural justice is liable to be quashed in writ jurisdiction.",
            },
          ],
          crossRefs: [
            {
              statute: "Environment (Protection) Rules, 1986",
              section: "Rule 4",
              note: "Lays down the procedure for issuing directions under Section 5 — show-cause notice, reply and reasoned order.",
            },
            {
              statute: "National Green Tribunal Act, 2010",
              section: "Section 16",
              note: "Section 5 directions are appealable to the NGT within 30 days.",
            },
          ],
          scenarios: [
            {
              title: "DISCOM ordered to cut power to a stone-crusher",
              setup:
                "A stone-crushing unit on the outskirts of a town has been repeatedly found violating particulate-matter standards. After a show-cause notice and hearing under Rule 4, the SPCB (delegated Section 5 power) directs the local DISCOM to disconnect the unit's electricity supply.",
              outcome:
                "Valid under Section 5 Explanation (b). The DISCOM is bound to comply notwithstanding the contractual relationship with the consumer. The crusher's remedy is an appeal to the NGT under Section 16 of the NGT Act, 2010, not a civil suit (Section 22 EPA bars civil suits).",
              appliesUnder: "Section 5 Explanation (b)",
              consequence: "Plant shutdown; potential compensation if direction is later set aside.",
            },
            {
              title: "Direction issued without any hearing",
              setup:
                "An emergency closure direction is issued late on a Friday evening citing an imminent toxic discharge. No prior show-cause notice is given.",
              outcome:
                "Section 5 itself does not mandate a hearing, but Rule 4 of the EP Rules read with natural-justice principles does — except in cases of imminent risk. The Centre/State must record reasons for the emergency. If reasons stand up to scrutiny, the direction will be upheld; if not, the NGT will set it aside.",
              appliesUnder: "Section 5 read with Rule 4(2)",
            },
          ],
          faq: [
            {
              q: "Can a Section 5 direction be challenged?",
              a: "Yes. Appeal lies to the National Green Tribunal under Section 16 of the NGT Act, 2010 within 30 days. The High Court can also entertain a writ if there is a question of jurisdiction or gross violation of natural justice.",
            },
            {
              q: "Does the recipient have to obey before challenging?",
              a: "Section 5 says compliance is mandatory. Practically, the recipient must apply for a stay from the NGT (or High Court) before the closure date kicks in. A self-help refusal will not stand and may attract Section 15 prosecution.",
            },
            {
              q: "Is Section 5 different from a Show-Cause Notice under the Water Act or Air Act?",
              a: "Yes — and more powerful. Sections 33A of the Water Act and 31A of the Air Act allow similar directions, but only Section 5 of EPA explicitly authorises stoppage of electricity, water and other services. Section 5 is also unconstrained by state-board structures; the Centre or its delegate can act directly.",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 6,
          },
        },

        {
          number: "6",
          label: "Section 6",
          marginalNote: "Rules to regulate environmental pollution",
          importance: "operative",
          verbatim:
            "(1) The Central Government may, by notification in the Official Gazette, make rules in respect of all or any of the matters referred to in section 3.\n\n(2) In particular, and without prejudice to the generality of the foregoing power, such rules may provide for all or any of the following matters, namely:—\n\n(a) the standards of quality of air, water or soil for various areas and purposes;\n\n(b) the maximum allowable limits of concentration of various environmental pollutants (including noise) for different areas;\n\n(c) the procedures and safeguards for the handling of hazardous substances;\n\n(d) the prohibition and restrictions on the handling of hazardous substances in different areas;\n\n(e) the prohibition and restriction on the location of industries and the carrying on process and operations in different areas;\n\n(f) the procedures and safeguards for the prevention of accidents which may cause environmental pollution and for providing for remedial measures for such accidents.",
          plainEnglish:
            "Section 6 is the specific rule-making twin of Section 3. Sub-section (1) lets the Centre make rules in respect of any matter listed in Section 3. Sub-section (2) then lists six headings under which rules may be made — air/water/soil quality standards (a), pollutant concentration limits including noise (b), hazardous-substance handling procedures (c), area-based restrictions on hazardous-substance handling (d), location-based industry restrictions (e), and accident prevention and remediation procedures (f).\n\nThis is the legal authority for almost every operative number in Indian environmental law. The Schedules to the Environment (Protection) Rules, 1986 fill in Section 6(2)(a) and (b). The Hazardous Wastes Rules fill in (c) and (d). The MSIHC (Manufacture, Storage and Import of Hazardous Chemicals) Rules fill in (f). The Noise Pollution (Regulation and Control) Rules, 2000 sit under (b).\n\nSection 6 differs from Section 25 in two ways. Section 6 deals specifically with anti-pollution rules — quality standards, limits, safeguards — and is procedurally lighter. Section 25 is the broader rule-making clause that catches all other procedural and administrative rules. Both routes converge in the Environment (Protection) Rules, 1986 but the legal vires of each rule depends on which section it is issued under.",
          visuals: [
            {
              kind: "comparison-table",
              title: "Section 6 vs. Section 25 — both make rules, but for different things",
              caption: "Read the relevant Schedule before relying on a rule — its vires depends on which section it stands on.",
              columns: ["Section 6", "Section 25"],
              rows: [
                { left: "Substantive anti-pollution rules", right: "All rules generally, incl. procedural" },
                { left: "Quality standards, concentration limits, handling safeguards", right: "Sample procedures, lab functions, complaint procedures" },
                { left: "Tracks the subjects in Section 3", right: "Tracks the operative sections (7, 8, 9, 11, 12, 13, 19, 20)" },
                { left: "Notification in Official Gazette", right: "Notification + lay before Parliament (Section 26)" },
              ],
            },
          ],
          crossRefs: [
            {
              statute: "Environment (Protection) Rules, 1986",
              section: "Rule 3 + Schedules I–VII",
              note: "The chief subordinate legislation made under Section 6 — contains the actual emission and ambient standards.",
            },
            {
              statute: "Noise Pollution (Regulation and Control) Rules, 2000",
              section: "—",
              note: "Made under Section 6(2)(b) to regulate noise as an environmental pollutant.",
            },
            {
              statute: "Hazardous and Other Wastes (Management and Transboundary Movement) Rules, 2016",
              section: "—",
              note: "Made under Section 6(2)(c) and (d) for hazardous-waste handling and area restrictions.",
            },
          ],
          scenarios: [
            {
              title: "Question on a rule's parent provision",
              setup:
                "A petitioner before the NGT challenges a notification capping diesel-generator noise at 75 dB(A) on the ground that it is not authorised by EPA.",
              outcome:
                "The Tribunal will examine whether the notification falls under Section 6(2)(b) ('maximum allowable limits of concentration of various environmental pollutants (including noise)'). Since noise is expressly included, the notification is intra vires. The petition will fail on this ground.",
              appliesUnder: "Section 6(2)(b)",
            },
          ],
          faq: [
            {
              q: "Are rules under Section 6 the same as the notifications issued under Section 3?",
              a: "No. Rules under Section 6 are subordinate legislation — they must follow the rule-making procedure, are laid before Parliament under Section 26, and can be modified or annulled by Parliament. Notifications under Section 3(3) or Section 5 are executive orders — they do not need parliamentary laying, although the courts can still review them.",
            },
            {
              q: "Can a Section 6 rule add a new offence?",
              a: "No. Offences must be created by the Act itself (Section 15). A rule can prescribe a standard, the breach of which is then punishable under Section 15. The rule cannot independently create a new criminal offence.",
            },
            {
              q: "Why do most environmental notifications cite both Section 3 and Section 6?",
              a: "Because the Centre frequently combines the broader 'all such measures' power (Section 3) with the specific rule-making power (Section 6) when issuing a notification. Citing both makes the notification defensible on either limb if one is challenged.",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 6,
            pdfPageEnd: 7,
          },
        },
      ],
      scenarios: [
        {
          title: "MoEFCC orchestrates a national plastic-waste regime",
          setup:
            "MoEFCC decides to phase out single-use plastics. It (i) sets quality and concentration standards (Section 3(2)(iii)–(iv)), (ii) restricts the geographical areas where SUPs may be sold (Section 3(2)(v)), (iii) issues directions to brand owners on Extended Producer Responsibility (Section 5), and (iv) makes the Plastic Waste Management Rules (Section 6).",
          outcome:
            "Every limb of the regime sits comfortably inside Chapter II. The Centre does not need new legislation; the Chapter II umbrella is wide enough. Industry can challenge individual elements before the NGT but cannot impeach the legislative basis itself.",
          appliesUnder: "Sections 3, 5 and 6",
        },
      ],
      faq: [
        {
          q: "Why is the Central Government given so much power and not the States?",
          a: "Because in 1986 Parliament wanted a uniform national environmental regime that would survive State-level resistance to closing polluting industries. The Bhopal disaster of 1984 had shown that fragmented State action was inadequate. Chapter II therefore concentrates power at the Centre, with Section 23 allowing selective delegation back to States.",
        },
        {
          q: "How are conflicts with State pollution laws resolved?",
          a: "Section 5 starts with 'Notwithstanding anything contained in any other law'. Section 24(1) further provides that EPA rules and orders prevail over inconsistent provisions of any other Act. So Chapter II overrides State environmental laws to the extent of inconsistency.",
        },
        {
          q: "Where do the actual numbers — like 40 µg/m³ for PM2.5 — live?",
          a: "Not in the Act. They live in the Schedules to the Environment (Protection) Rules, 1986 — Schedule III for ambient noise, Schedule VII for NAAQS, and so on. Chapter II is the legal pipe; the numbers are the water that flows through it.",
        },
      ],
    },

    // ============================================================
    // CHAPTER III — PREVENTION, CONTROL & ABATEMENT OF ENVIRONMENTAL POLLUTION
    // ============================================================
    {
      slug: "chapter-3-prevention-control-and-abatement",
      number: "III",
      title: "Prevention, Control and Abatement of Environmental Pollution",
      range: ["7", "17"],
      intro:
        "Chapter III is where Chapter II's powers become enforceable. Sections 7 and 8 lay down the two big substantive prohibitions — no discharge in excess of standards, no handling of hazardous substances without procedural safeguards. Sections 9 to 14 are the inspection-and-evidence machinery: accidents must be reported, premises can be entered, samples can be taken, laboratories analyse them, analysts certify them. Sections 15, 16 and 17 close the chapter with the penal sanctions — what happens if you break Section 7 or 8 (Section 15), how companies are caught (Section 16) and how Government departments are caught (Section 17).",
      sections: [
        {
          number: "7",
          label: "Section 7",
          marginalNote: "Persons carrying on industry, operation, etc., not to allow emission or discharge of environmental pollutants in excess of the standards",
          importance: "core",
          verbatim:
            "No person carrying on any industry, operation or process shall discharge or emit or permit to be discharged or emitted any environmental pollutants in excess of such standards as may be prescribed.",
          plainEnglish:
            "Section 7 is the single biggest substantive prohibition in Indian environmental law. In one sentence Parliament tells everyone running any 'industry, operation or process' that they cannot — directly or by permission — discharge or emit any environmental pollutant beyond the standards 'prescribed' (i.e., the limits fixed by rules made under Section 6 or Section 25 — see Section 2(g)).\n\nThree features make this section formidable. First, the duty is absolute: there is no need for the prosecution to prove harm. The mere fact of an exceedance is the offence. Second, the language is wide — 'any industry, operation or process' catches not only factories but also DG-sets, construction sites, hospitals, hotels, even municipal sewage treatment plants. Third, 'permit to be discharged' captures the principal as much as the actual discharger — so an owner who looks the other way while the operator violates norms is equally liable.\n\nBreach of Section 7 triggers Section 15 (punishment) and is the standard ground for closure directions under Section 5. Standards live in Schedule I (industry-specific effluent and emission limits), Schedule II (general effluent standards), Schedule III (noise limits), Schedule VI (general effluent standards) and Schedule VII (NAAQS) of the Environment (Protection) Rules, 1986.",
          visuals: [
            {
              kind: "callout",
              tone: "warning",
              title: "Strict-liability vibe",
              body:
                "Courts treat Section 7 as a strict-liability provision in spirit. Mens rea is not required for the actus — exceeding the prescribed limit is the offence. Companies should design compliance for the standard, not their estimate of what is 'reasonable'.",
            },
          ],
          penalties: [
            {
              offence: "Discharge or emission in excess of prescribed standards (single contravention)",
              punishment: "Imprisonment up to 5 years, or fine up to ₹1,00,000, or both",
              ref: "Section 15(1)",
              severity: "serious",
              flags: ["Cognizable on complaint", "Bailable"],
            },
            {
              offence: "Continuing contravention beyond first conviction",
              punishment: "Additional fine up to ₹5,000 per day during which the failure continues",
              ref: "Section 15(1)",
              severity: "serious",
            },
            {
              offence: "Contravention continuing beyond one year after first conviction",
              punishment: "Imprisonment up to 7 years",
              ref: "Section 15(2)",
              severity: "grave",
            },
          ],
          cases: [
            {
              name: "Sterlite Industries (I) Ltd. v. Union of India",
              citation: "(2013) 4 SCC 575",
              court: "Supreme Court of India",
              year: 2013,
              ratio:
                "Repeated breaches of prescribed standards (Section 7) justify closure under Section 5 and substantial environmental damages under the polluter-pays principle.",
            },
          ],
          crossRefs: [
            {
              statute: "Environment (Protection) Rules, 1986",
              section: "Rule 3 + Schedules I, II, III, VI, VII",
              note: "Source of the 'prescribed' standards referred to in Section 7.",
            },
            {
              statute: "Air (Prevention and Control of Pollution) Act, 1981",
              section: "Sections 21–22",
              note: "Air-pollution-specific consents — operate parallel to Section 7. The same conduct can engage both statutes; Section 24 of EPA decides which applies for prosecution.",
            },
            {
              statute: "Water (Prevention and Control of Pollution) Act, 1974",
              section: "Sections 24–25",
              note: "Water-pollution analogue. Parallel offence; choose forum carefully.",
            },
          ],
          scenarios: [
            {
              title: "A laundry chain runs a boiler 11% over the PM limit",
              setup:
                "Monitoring shows particulate emission of 167 mg/Nm³ vs. the prescribed 150 mg/Nm³ — a 11% exceedance.",
              outcome:
                "The exceedance, however small, is a Section 7 offence. Section 15 prosecution can follow; Section 5 direction (often warning + show-cause) is the more usual first step. Pleading 'minor' exceedance is no defence; what matters is compliance, not approximation.",
              appliesUnder: "Section 7 read with Schedule I",
              consequence: "Show-cause and possible closure under Section 5.",
            },
            {
              title: "Landlord rents to a polluting tenant",
              setup:
                "A landlord rents commercial premises to a chemical-trading business that is regularly found exceeding effluent standards.",
              outcome:
                "'Permit to be discharged' in Section 7 catches the landlord. The Centre/State can prosecute both tenant (as occupier under Section 2(f)) and landlord (as person permitting). Standard lease clauses requiring tenants to comply with environmental laws do not, by themselves, defeat liability.",
              appliesUnder: "Section 7 read with Section 2(f)",
            },
          ],
          faq: [
            {
              q: "Is good-faith effort to comply a defence under Section 7?",
              a: "Limited. Section 16(1) Proviso allows a director to escape personal liability by proving the offence happened 'without his knowledge' or that he exercised 'all due diligence'. But the company itself is liable — and the act of exceedance under Section 7 still stands.",
            },
            {
              q: "If no specific standard is prescribed for the pollutant, is Section 7 violated?",
              a: "Strictly read, Section 7 needs a 'prescribed' standard. If a substance is not covered by any Schedule, Section 7 cannot be invoked directly. The Centre's remedy is to (a) prescribe a standard under Section 6, or (b) issue a tailored Section 5 direction; the discharger's remedy is to point to the gap.",
            },
            {
              q: "Does Section 7 apply to a one-time accidental discharge?",
              a: "Yes — though Section 9 also kicks in for accidents. The plain words ('discharge or emit') do not require continuity. The accident must, however, be in excess of the prescribed standard for Section 7 to bite; otherwise it is governed only by Section 9.",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 7,
          },
        },

        {
          number: "8",
          label: "Section 8",
          marginalNote: "Persons handling hazardous substances to comply with procedural safeguards",
          importance: "core",
          verbatim:
            "No person shall handle or cause to be handled any hazardous substance except in accordance with such procedure and after complying with such safeguards as may be prescribed.",
          plainEnglish:
            "If Section 7 caps the discharge, Section 8 caps the conduct. Anyone who 'handles' (a very wide term — see Section 2(d)) any 'hazardous substance' (Section 2(e)) must follow the prescribed procedure and safeguards. The procedural framework sits in Rule 13 of the Environment (Protection) Rules, 1986 and in three principal subsidiary rules:\n\n• Hazardous and Other Wastes (Management and Transboundary Movement) Rules, 2016 — for hazardous wastes;\n• Manufacture, Storage and Import of Hazardous Chemicals Rules, 1989 — for hazardous chemicals;\n• Manufacture, Use, Import, Export and Storage of Hazardous Micro-organisms / Genetically Engineered Organisms or Cells Rules, 1989 — for GMOs.\n\nBecause 'handling' covers every commercial step from manufacture to sale (Section 2(d)), this section in practice means: no licence, no permit, no SOP, no Material Safety Data Sheet ⇒ no business with the substance. Non-compliance is, like Section 7, prosecutable under Section 15.",
          visuals: [
            {
              kind: "comparison-table",
              title: "Three sets of rules — which one applies?",
              caption: "Pick the correct rule before drafting a compliance manual; the procedural safeguards differ.",
              columns: ["Type of substance", "Applicable Rule"],
              rows: [
                { left: "Solid / liquid hazardous waste from industry", right: "Hazardous and Other Wastes (Management) Rules, 2016" },
                { left: "Hazardous chemicals (manufacture / storage / import)", right: "MSIHC Rules, 1989" },
                { left: "GMOs and engineered organisms", right: "Rules for GMOs, 1989" },
              ],
            },
          ],
          penalties: [
            {
              offence: "Handling a hazardous substance without prescribed safeguards",
              punishment: "Imprisonment up to 5 years and / or fine up to ₹1,00,000",
              ref: "Section 15(1)",
              severity: "serious",
            },
          ],
          crossRefs: [
            {
              statute: "Public Liability Insurance Act, 1991",
              section: "Section 4",
              note: "Mandates no-fault compensation insurance for handling of 'hazardous substances' — uses the same definition as Section 2(e) EPA.",
            },
            {
              statute: "Bhopal Gas Leak (Processing of Claims) Act, 1985",
              section: "—",
              note: "EPA's Section 8 was Parliament's structural response to the Bhopal tragedy of 1984.",
            },
          ],
          scenarios: [
            {
              title: "Chemical importer skips MSDS and packaging norms",
              setup:
                "An importer brings in 4 tonnes of an organic peroxide without sending the MSDS to the receiving warehouse and without complying with UN packaging norms required under the MSIHC Rules.",
              outcome:
                "Direct Section 8 violation. Even if no spill occurs, the absence of prescribed procedure is the offence. Customs can stop release; MoEFCC can issue Section 5 closure direction; Section 15 prosecution can run in parallel.",
              appliesUnder: "Section 8 read with MSIHC Rules, 1989",
              consequence: "Consignment held; cleanup or re-export; criminal liability.",
            },
          ],
          faq: [
            {
              q: "Is 'handling' the same as 'storing'?",
              a: "Storing is one of several forms of handling listed in Section 2(d). Handling is broader — it includes manufacture, transport, use, sale, even destruction. A safe-storage policy alone is not Section 8 compliance unless every other step is also covered.",
            },
            {
              q: "If the rules under Section 8 are silent on a particular safeguard, is the discharger off the hook?",
              a: "Not necessarily. Section 5 directions can fill the gap, and the Centre can issue interim guidance under Section 3(2)(vii). But where the Rules expressly govern the conduct, you must follow them; the silence has to be tested rule by rule.",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 7,
          },
        },

        {
          number: "9",
          label: "Section 9",
          marginalNote: "Furnishing of information to authorities and agencies in certain cases",
          importance: "operative",
          verbatim:
            "(1) Where the discharge of any environmental pollutant in excess of the prescribed standards occurs or is apprehended to occur due to any accident or other unforeseen act or event, the person responsible for such discharge and the person in charge of the place at which such discharge occurs or is apprehended to occur shall be bound to prevent or mitigate the environmental pollution caused as a result of such discharge and shall also forthwith—\n\n(a) intimate the fact of such occurrence or apprehension of such occurrence; and\n\n(b) be bound, if called upon, to render all assistance, to such authorities or agencies as may be prescribed.\n\n(2) On receipt of information with respect to the fact or apprehension of any occurrence of the nature referred to in sub-section (1), whether through intimation under that sub-section or otherwise, the authorities or agencies referred to in sub-section (1) shall, as early as practicable, cause such remedial measures to be taken as are necessary to prevent or mitigate the environmental pollution.\n\n(3) The expenses, if any, incurred by any authority or agency with respect to the remedial measures referred to in sub-section (2), together with interest (at such reasonable rate as the Government may, by order, fix) from the date when a demand for the expenses is made until it is paid, may be recovered by such authority or agency from the person concerned as arrears of land revenue or of public demand.",
          plainEnglish:
            "Section 9 is the accident-response clause. The moment an accidental or unforeseen pollutant discharge happens — or is even feared — the person responsible and the person in charge of the place have three immediate duties:\n\n(a) prevent or mitigate the pollution;\n(b) intimate the fact to the authorities listed in Rule 12 and Schedule V of the Environment (Protection) Rules, 1986 (typically the local SPCB, district magistrate, CPCB and MoEFCC);\n(c) when called upon, render all assistance.\n\nSub-section (2) puts a matching duty on the authorities: act 'as early as practicable' to take remedial measures.\n\nSub-section (3) is the polluter-pays bite. Any expense incurred by the authority for remediation, plus interest from the date of demand, is recoverable from the polluter as 'arrears of land revenue or of public demand'. So clean-up costs become a tax-recovery proceeding, bypassing the slow civil suit route.",
          visuals: [
            {
              kind: "process-flow",
              title: "First 24 hours after an accidental discharge",
              caption: "Section 9 reporting and remediation timeline.",
              nodes: [
                { id: "n1", label: "Accident / apprehension", sub: "Spill, leak, fire, runaway reaction" },
                { id: "n2", label: "Immediate mitigation", sub: "On-site containment" },
                { id: "n3", label: "Forthwith intimation", sub: "SPCB / DM / CPCB / MoEFCC" },
                { id: "n4", label: "Authority remediation", sub: "Section 9(2) — 'as early as practicable'" },
                { id: "n5", label: "Cost recovery", sub: "As arrears of land revenue under §9(3)" },
              ],
              edges: [
                { from: "n1", to: "n2" },
                { from: "n2", to: "n3" },
                { from: "n3", to: "n4" },
                { from: "n4", to: "n5" },
              ],
            },
          ],
          crossRefs: [
            {
              statute: "Environment (Protection) Rules, 1986",
              section: "Rule 12 + Schedule V",
              note: "Lists the authorities to which intimation must be given under Section 9(1)(a).",
            },
            {
              statute: "Public Liability Insurance Act, 1991",
              section: "Section 6",
              note: "No-fault compensation mechanism — operates alongside Section 9 for accident victims.",
            },
            {
              statute: "National Green Tribunal Act, 2010",
              section: "Section 14, 15",
              note: "Substantial-question-of-environment jurisdiction over remediation and compensation claims.",
            },
          ],
          scenarios: [
            {
              title: "A pipeline leak in the middle of the night",
              setup:
                "A high-pressure ammonia pipeline at a refrigeration plant springs a slow leak around 2 AM. The shift supervisor seals the section by 3 AM but does not inform the SPCB until 11 AM the next morning.",
              outcome:
                "Mitigation duty (Section 9(1)) was complied with promptly. But Section 9(1)(a) requires intimation 'forthwith'. The 8-hour delay is a separate breach prosecutable under Section 15. Best practice: SMS the SPCB within the first hour and follow up with a written report.",
              appliesUnder: "Section 9(1)(a)",
              consequence: "Section 15 prosecution; reputational harm; possible licence review.",
            },
          ],
          faq: [
            {
              q: "Is intimation under Section 9 self-incriminatory?",
              a: "The intimation is a statutory duty, not a confession. While the information furnished can feature in a Section 15 prosecution, refusal to intimate is itself a Section 15 offence. Lawyers usually advise immediate intimation along with internal preservation of root-cause documents.",
            },
            {
              q: "Who pays for downstream third-party damage?",
              a: "Section 9(3) only covers the cost incurred by the authority. Third-party victims claim under the Public Liability Insurance Act, 1991 (no-fault), or before the NGT under Sections 14–15 of the NGT Act, 2010, or in tort. EPA Section 9 is the State's lever; victim relief is found elsewhere.",
            },
            {
              q: "What is the standard of 'apprehension'?",
              a: "Reasonable, fact-based apprehension — not panic. A monitoring alarm exceeding threshold or a visible plume both qualify. The point is to trigger early reporting; the prosecution will not have to prove that the discharge ultimately happened.",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 8,
          },
        },

        {
          number: "10",
          label: "Section 10",
          marginalNote: "Powers of entry and inspection",
          importance: "operative",
          verbatim:
            "(1) Subject to the provisions of this section, any person empowered by the Central Government in this behalf shall have a right to enter, at all reasonable times with such assistance as he considers necessary, any place—\n\n(a) for the purpose of performing any of the functions of the Central Government entrusted to him;\n\n(b) for the purpose of determining whether and if so in what manner, any such functions are to be performed or whether any provisions of this Act or the rules made thereunder or any notice, order, direction or authorisation served, made, given or granted under this Act is being or has been complied with;\n\n(c) for the purpose of examining and testing any equipment, industrial plant, record, register, document or any other material object or for conducting a search of any building in which he has reason to believe that an offence under this Act or the rules made thereunder has been or is being or is about to be committed and for seizing any such equipment, industrial plant, record, register, document or other material object if he has reason to believe that it may furnish evidence of the commission of an offence punishable under this Act or the rules made thereunder or that such seizure is necessary to prevent or mitigate environmental pollution.\n\n(2) Every person carrying on any industry, operation or process of handling any hazardous substance shall be bound to render all assistance to the person empowered by the Central Government under sub-section (1) for carrying out the functions under that sub-section and if he fails to do so without any reasonable cause or excuse, he shall be guilty of an offence under this Act.\n\n(3) If any person wilfully delays or obstructs any persons empowered by the Central Government under sub-section (1) in the performance of his functions, he shall be guilty of an offence under this Act.\n\n(4) The provisions of the Code of Criminal Procedure, 1973, or, in relation to the State of Jammu and Kashmir, or an area in which that Code is not in force, the provisions of any corresponding law in force in that State or area shall, so far as may be, apply to any search or seizures under this section as they apply to any search or seizure made under the authority of a warrant issued under section 94 of the said Code or as the case may be, under the corresponding provision of the said law.",
          plainEnglish:
            "Section 10 is the inspection-and-search clause. Any officer notified by the Central Government (currently 64 officers listed in Notification S.O. 83(E) dated 16-2-1987, plus subsequent additions) can — at all reasonable times — enter any place to (a) perform Central Government functions, (b) check compliance with the Act, rules, notices, orders or directions, or (c) examine, test, search and seize equipment, records or material objects on a reason-to-believe that an offence has been, is being, or is about to be committed.\n\nSub-section (2) makes co-operation compulsory. Anyone running an industry or handling hazardous substances must assist; refusal without 'reasonable cause' is itself a Section 15 offence.\n\nSub-section (3) creates a separate, specific offence for wilful delay or obstruction.\n\nSub-section (4) imports the CrPC's search-warrant procedure (Section 94 / now equivalent under BNSS, 2023) into Section 10 searches — so the search must be conducted with witnesses, the seized items inventoried, and the records preserved as evidence.",
          visuals: [
            {
              kind: "callout",
              tone: "info",
              title: "CrPC procedure imported",
              body:
                "Section 10(4) imports CrPC search-warrant rules. Today, after the Bharatiya Nagarik Suraksha Sanhita, 2023 has replaced the CrPC, the corresponding BNSS provisions apply mutatis mutandis.",
            },
          ],
          penalties: [
            {
              offence: "Failure to render assistance to inspecting officer",
              punishment: "Imprisonment up to 5 years and / or fine up to ₹1,00,000",
              ref: "Section 10(2) + Section 15",
              severity: "moderate",
            },
            {
              offence: "Wilful delay or obstruction of inspection",
              punishment: "Imprisonment up to 5 years and / or fine up to ₹1,00,000",
              ref: "Section 10(3) + Section 15",
              severity: "moderate",
            },
          ],
          crossRefs: [
            {
              statute: "Notification S.O. 83(E) dated 16-2-1987",
              section: "—",
              note: "Empowered the first 64 officers under Section 10(1).",
            },
            {
              statute: "Code of Criminal Procedure, 1973 (now BNSS, 2023)",
              section: "Section 94 CrPC / corresponding BNSS",
              note: "Imported by Section 10(4) for search-and-seizure procedure.",
            },
          ],
          scenarios: [
            {
              title: "Plant manager locks the gate during a surprise inspection",
              setup:
                "A Section 10-notified officer arrives at a chemical plant for a surprise audit. The plant manager refuses entry on the ground that the visit is 'unannounced and disruptive'.",
              outcome:
                "Section 10(1) expressly authorises entry 'at all reasonable times' — there is no obligation of prior notice. Refusal is wilful obstruction under Section 10(3) and a Section 15 offence. The officer can also requisition police assistance and re-enter.",
              appliesUnder: "Section 10(3)",
              consequence: "Criminal complaint plus possibility of unit closure under Section 5.",
            },
          ],
          faq: [
            {
              q: "Can the inspecting officer take photos and samples?",
              a: "Yes. Examining and testing under clause (c) covers photographs, instrument readings and on-spot samples. Detailed sample procedure is governed by Section 11.",
            },
            {
              q: "Does the officer need to record reasons for seizure?",
              a: "Yes. Clause (c) requires 'reason to believe' that the seized object may furnish evidence or that seizure is necessary to prevent or mitigate pollution. Recording reasons protects the seizure from later challenge.",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 8,
            pdfPageEnd: 9,
          },
        },

        {
          number: "11",
          label: "Section 11",
          marginalNote: "Power to take sample and procedure to be followed in connection therewith",
          importance: "operative",
          verbatim:
            "(1) The Central Government or any officer empowered by it in this behalf, shall have power to take, for the purpose of analysis, samples of air, water, soil or other substance from any factory, premises or other place in such manner as may be prescribed.\n\n(2) The result of any analysis of a sample taken under sub-section (1) shall not be admissible in evidence in any legal proceeding unless the provisions of sub-sections (3) and (4) are complied with.\n\n(3) Subject to the provisions of sub-section (4), the person taking the sample under sub-section (1) shall—\n\n(a) serve on the occupier or his agent or person in charge of the place, a notice, then and there, in such form as may be prescribed, of his intention to have it so analysed;\n\n(b) in the presence of the occupier or his agent or person, collect a sample for analysis;\n\n(c) cause the sample to be placed in a container or containers which shall be marked and sealed and shall also be signed both by the person taking the sample and the occupier or his agent or person;\n\n(d) send without delay, the container or the containers to the laboratory established or recognised by the Central Government under section 12.\n\n(4) When a sample is taken for analysis under sub-section (1) and the person taking the sample serves on the occupier or his agent or person, a notice under clause (a) of sub-section (3), then,—\n\n(a) in a case where the occupier, his agent or person wilfully absents himself, the person taking the sample shall collect the sample for analysis to be placed in a container or containers which shall be marked and sealed and shall also be signed by the person taking the sample, and\n\n(b) in a case where the occupier or his agent or person present at the time of taking the sample refuses to sign the marked and sealed container or containers of the sample as required under clause (c) of sub-section (3), the marked and sealed container or containers shall be signed by the person taking the samples, and the container or containers shall be sent without delay by the person taking the sample for analysis to the laboratory established or recognised under section 12 and such person shall inform the Government Analyst appointed or recognised under section 13 in writing, about the wilful absence of the occupier or his agent or person, or, as the case may be, his refusal to sign the container or containers.",
          plainEnglish:
            "Section 11 is the evidentiary backbone of every EPA prosecution. Sub-section (1) authorises sampling of air, water, soil or any substance from any factory or place. Sub-section (2) is the catch — if the procedure in sub-sections (3) and (4) is not followed, the analytical result is inadmissible in evidence. That is the single most common reason EPA prosecutions collapse.\n\nSub-section (3) prescribes the four-step chain of custody: (a) notice in Form V of intention to send the sample for analysis, served then and there; (b) collection in the presence of the occupier or agent; (c) sealing, marking and signing of the container by both the officer and the occupier; (d) prompt despatch to a Section-12 laboratory.\n\nSub-section (4) provides for two edge cases — the occupier wilfully absents himself, or refuses to sign. In both, the officer alone signs and intimates the Government Analyst in writing about the absence or refusal. Failure to record this fact at the time defeats admissibility.\n\nRule 6 of the Environment (Protection) Rules, 1986 sets out the prescribed manner of taking samples; Rule 7 prescribes Form V for the Section 11(3)(a) notice.",
          visuals: [
            {
              kind: "process-flow",
              title: "Chain of custody — get this wrong and the case dies",
              caption: "Every box must be ticked for the lab report to be admissible under Section 11(2).",
              nodes: [
                { id: "n1", label: "Form V notice", sub: "Then and there; §11(3)(a)" },
                { id: "n2", label: "Sample in presence of occupier", sub: "§11(3)(b)" },
                { id: "n3", label: "Seal + mark + dual signature", sub: "§11(3)(c)" },
                { id: "n4", label: "Despatch to §12 lab", sub: "Without delay; §11(3)(d)" },
                { id: "n5", label: "Analyst report under §14", sub: "Evidence in §15 trial" },
              ],
              edges: [
                { from: "n1", to: "n2" },
                { from: "n2", to: "n3" },
                { from: "n3", to: "n4" },
                { from: "n4", to: "n5" },
              ],
            },
            {
              kind: "callout",
              tone: "warning",
              title: "Sub-section (2) is fatal",
              body:
                "If the Form V notice was not served then-and-there, or the occupier's signature is missing without recorded refusal, the lab result is inadmissible. Defence counsel routinely cross-examine on each step of Section 11(3).",
            },
          ],
          crossRefs: [
            {
              statute: "Environment (Protection) Rules, 1986",
              section: "Rules 6, 7, 8",
              note: "Manner of taking samples (Rule 6), Form V notice (Rule 7), submission of samples to laboratories (Rule 8).",
            },
          ],
          scenarios: [
            {
              title: "Occupier signs the container but no Form V notice was served",
              setup:
                "During an inspection, the officer collects a sample, seals it, signs it together with the occupier, but forgets to hand over Form V notice.",
              outcome:
                "Section 11(3)(a) requires Form V to be served 'then and there'. The omission breaches the procedure; under Section 11(2) the analytical result will be inadmissible. The accused will almost certainly secure acquittal on this ground alone.",
              appliesUnder: "Section 11(3)(a) read with 11(2)",
              consequence: "Prosecution likely to fail; departmental enquiry against the officer.",
            },
          ],
          faq: [
            {
              q: "What happens if the occupier deliberately leaves the site after Form V is served?",
              a: "Section 11(4)(a) covers exactly this — the officer collects, seals, signs alone and informs the Analyst in writing about the wilful absence. The result remains admissible.",
            },
            {
              q: "Can the company demand a counter-sample?",
              a: "Practice varies, but the Form V notice in Rule 7 envisages an opportunity for the occupier to send the sample to a designated lab. A formal counter-sample protocol is not prescribed by the Act itself — but providing one is usually a good-faith compliance signal.",
            },
            {
              q: "How long can the sample sit before despatch?",
              a: "Section 11(3)(d) says 'without delay'. Sample holding times depend on the parameter — pH, BOD, COD, oil-and-grease all have specific maximum hold times in Rule 8 and the relevant Schedules. Crossing these times can vitiate the analysis.",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 9,
            pdfPageEnd: 10,
          },
        },

        {
          number: "12",
          label: "Section 12",
          marginalNote: "Environmental laboratories",
          importance: "operative",
          verbatim:
            "(1) The Central Government may, by notification in the Official Gazette,—\n\n(a) establish one or more environmental laboratories;\n\n(b) recognise one or more laboratories or institutes as environmental laboratories to carry out the functions entrusted to an environmental laboratory under this Act.\n\n(2) The Central Government may, by notification in the Official Gazette, make rules specifying—\n\n(a) the functions of the environmental laboratory;\n\n(b) the procedure for the submission to the said laboratory of samples of air, water, soil or other substance for analysis or tests, the form of the laboratory report thereon and the fees payable for such report;\n\n(c) such other matters as may be necessary or expedient to enable that laboratory to carry out its functions.",
          plainEnglish:
            "Section 12 is the infrastructure clause. It empowers the Centre to set up its own environmental laboratories — or to recognise existing ones (typically CPCB's labs, NEERI, IIT environmental labs, and accredited private labs) — for testing samples taken under Section 11.\n\nSub-section (2) lets the Centre make rules on what the lab does, how samples reach it, the format of the report and the fees. These rules sit in Rules 8 and 9 of the Environment (Protection) Rules, 1986. Recognition of labs has been delegated by the Centre to the CPCB by Notification S.O. 145(E) dated 21-2-1991.\n\nWithout a Section 12 laboratory analysing the Section 11 sample, there is no admissible evidence under Section 11(2) — the entire prosecution chain rests on the laboratory's certification.",
          crossRefs: [
            {
              statute: "Environment (Protection) Rules, 1986",
              section: "Rules 8, 9",
              note: "Procedure for submission of samples (Rule 8) and functions of the environmental laboratory (Rule 9).",
            },
            {
              statute: "Notification S.O. 145(E) dated 21-2-1991",
              section: "—",
              note: "Centre's delegation to CPCB to recognise labs under Section 12(1)(b).",
            },
          ],
          scenarios: [
            {
              title: "Sample sent to an unrecognised lab",
              setup:
                "An over-stretched SPCB office sends a water sample to a nearby private lab that has not been notified under Section 12(1)(b).",
              outcome:
                "Section 11(3)(d) requires despatch to a laboratory 'established or recognised under section 12'. Analysis at an unrecognised lab is inadmissible under Section 11(2). The defect cannot be cured retrospectively.",
              appliesUnder: "Section 11(3)(d) read with Section 12",
              consequence: "Lab report inadmissible; prosecution likely to fail.",
            },
          ],
          faq: [
            {
              q: "Are NABL-accredited private labs automatically Section 12 labs?",
              a: "No. NABL accreditation is a separate quality-management certification. To be a Section 12 lab, the lab must be notified by the Centre (or by CPCB under the 1991 delegation). Many NABL labs are also Section 12 labs, but check the notification list before relying.",
            },
            {
              q: "Who fixes the testing fees?",
              a: "Rule 9 of the EP Rules empowers the Centre to fix fees by notification. Most labs publish a current fee schedule. Disputes about fees are typically resolved by reference to the rule and the lab's notification.",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 10,
            pdfPageEnd: 11,
          },
        },

        {
          number: "13",
          label: "Section 13",
          marginalNote: "Government Analysts",
          importance: "operative",
          verbatim:
            "The Central Government may by notification in the Official Gazette, appoint or recognise such persons as it thinks fit and having the prescribed qualifications to be Government Analysts for the purpose of analysis of samples of air, water, soil or other substance sent for analysis to any environmental laboratory established or recognised under sub-section (1) of section 12.",
          plainEnglish:
            "Section 13 deals with the person who actually conducts the analysis. The Centre notifies — or recognises — qualified persons as Government Analysts. The qualifications are set out in Rule 10 of the Environment (Protection) Rules, 1986 (graduate / post-graduate in chemistry, environmental sciences or allied disciplines, with prescribed work experience).\n\nIn practice, the Government Analyst is a senior scientific officer at a Section 12 lab. Their signed report is what bears evidentiary value under Section 14 — courts treat it as prima facie proof of the facts stated.",
          crossRefs: [
            {
              statute: "Environment (Protection) Rules, 1986",
              section: "Rule 10",
              note: "Prescribes qualifications for Government Analysts under Section 13.",
            },
          ],
          scenarios: [
            {
              title: "Analyst's qualification challenged",
              setup:
                "Defence counsel challenges the prosecution by pointing out that the Government Analyst who signed the lab report did not hold the qualifications prescribed in Rule 10 at the time of analysis.",
              outcome:
                "Section 13 ties admissibility to qualification. If the qualification is not made out, the Analyst's report loses its Section 14 evidentiary value. The prosecution must then prove the contents of the report through ordinary evidence — usually impossible.",
              appliesUnder: "Section 13 read with Rule 10",
              consequence: "Section 14 status of report lost.",
            },
          ],
          faq: [
            {
              q: "Can a recognised lab appoint its own Government Analyst?",
              a: "No. Appointment or recognition has to come from the Central Government (or its delegate — CPCB, under the 1991 delegation). Internal designations by a lab do not create a Government Analyst within Section 13.",
            },
            {
              q: "Is the Analyst called to court in every prosecution?",
              a: "Not always. Section 14 makes the signed report admissible without requiring oral testimony, but the court can summon the Analyst on the request of either side or on its own motion. Reliable prosecutions typically have the Analyst available as a witness.",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 11,
          },
        },

        {
          number: "14",
          label: "Section 14",
          marginalNote: "Reports of Government Analysts",
          importance: "operative",
          verbatim:
            "Any document purporting to be a report signed by a Government analyst may be used as evidence of the facts stated therein in any proceeding under this Act.",
          plainEnglish:
            "Section 14 is a single-sentence evidence rule but a powerful one. A document 'purporting to be a report signed by a Government Analyst' is, by itself, evidence of its contents in any proceeding under the Act. The court does not have to insist on oral testimony of the Analyst as a matter of course; the report is admissible on the strength of Section 14.\n\nThis is the legal cousin of Section 293 of the CrPC (now corresponding provision under BNSS, 2023), which makes scientific-officer reports admissible. The rule is rebuttable — the accused can summon the Analyst or attack the report — but the burden has shifted.\n\nNote the words 'purporting to be'. The court does not interrogate authorship at the threshold; it accepts the report on its face and lets the parties challenge it through evidence.",
          crossRefs: [
            {
              statute: "Indian Evidence Act, 1872 (now Bharatiya Sakshya Adhiniyam, 2023)",
              section: "Section 293 CrPC / 329 BNSS",
              note: "Analogous provision making scientific officer's report admissible without oral testimony.",
            },
          ],
          scenarios: [
            {
              title: "Defence does not summon the Analyst",
              setup:
                "In a Section 15 prosecution, the prosecution files a signed Government Analyst report. The defence does not summon the Analyst for cross-examination.",
              outcome:
                "Section 14 lets the court act on the report as prima facie evidence. The defence forfeits the chance to dent its weight by failing to cross-examine. Convictions can rest on the report alone where the chain of custody is intact.",
              appliesUnder: "Section 14",
            },
          ],
          faq: [
            {
              q: "Is the report conclusive proof?",
              a: "No. Section 14 makes it admissible 'evidence', not conclusive proof. The court can disregard the report if the chain of custody is broken (Section 11), the Analyst is not qualified (Section 13), or contrary evidence outweighs it.",
            },
            {
              q: "Can the accused tender his own private lab report?",
              a: "Yes — but its evidentiary weight depends on the witness producing it. A private report is not a 'Government Analyst' report and does not enjoy Section 14 admissibility. The private analyst must usually be examined as a witness.",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 11,
          },
        },

        {
          number: "15",
          label: "Section 15",
          marginalNote: "Penalty for contravention of the provisions of the Act and the rules, orders and directions",
          importance: "core",
          verbatim:
            "(1) Whoever fails to comply with or contravenes any of the provisions of this Act, or the rules made or orders or directions issued thereunder, shall, in respect of each such failure or contravention, be punishable with imprisonment for a term which may extend to five years with fine which may extend to one lakh rupees, or with both, and in case the failure or contravention continues, with additional fine which may extend to five thousand rupees for every day during which such failure or contravention continues after the conviction for the first such failure or contravention.\n\n(2) If the failure or contravention referred to in sub-section (1) continues beyond a period of one year after the date of conviction, the offender shall be punishable with imprisonment for a term which may extend to seven years.",
          plainEnglish:
            "Section 15 is the single penal clause of the Act — every operative section ultimately feeds into it. Any contravention of any provision of the Act, or of any rule, order or direction issued under it, attracts:\n\n• Sub-section (1): Imprisonment up to 5 years; or fine up to ₹1,00,000; or both. If the contravention continues, an additional fine up to ₹5,000 per day after the first conviction.\n• Sub-section (2): If the contravention continues for more than one year after the first conviction, imprisonment can rise to 7 years.\n\nThe original Section 15 has been the workhorse of EPA prosecutions since 1986. Important real-world update: the Jan Vishwas (Amendment of Provisions) Act, 2023 — operational from 2024 — has decriminalised many non-grave contraventions by replacing imprisonment with a monetary-penalty regime under an Adjudicating Officer. The grave / continuing offences (like the seven-year imprisonment under Section 15(2)) remain criminal. The user's source PDF prints only the original Section 15.",
          penalties: [
            {
              offence: "Single contravention of any provision, rule, order or direction",
              punishment: "Imprisonment up to 5 years and/or fine up to ₹1,00,000",
              ref: "Section 15(1)",
              severity: "serious",
              flags: ["Cognizable on complaint", "Bailable"],
            },
            {
              offence: "Continuing contravention after first conviction",
              punishment: "Additional fine up to ₹5,000 per day",
              ref: "Section 15(1)",
              severity: "serious",
            },
            {
              offence: "Continuing contravention beyond one year after first conviction",
              punishment: "Imprisonment up to 7 years",
              ref: "Section 15(2)",
              severity: "grave",
            },
          ],
          visuals: [
            {
              kind: "penalty-matrix",
              title: "Section 15 penalty ladder",
              caption: "The same Section 15 escalates from fine to seven-year imprisonment.",
              entries: [
                {
                  offence: "First-time contravention",
                  punishment: "Up to 5 yrs imprisonment, up to ₹1 lakh fine, or both",
                  ref: "Section 15(1)",
                  severity: "serious",
                },
                {
                  offence: "Continuing after first conviction",
                  punishment: "Extra ₹5,000 per day fine on top of base sentence",
                  ref: "Section 15(1)",
                  severity: "serious",
                },
                {
                  offence: "Continuing more than 1 year after conviction",
                  punishment: "Up to 7 yrs imprisonment",
                  ref: "Section 15(2)",
                  severity: "grave",
                },
              ],
            },
            {
              kind: "callout",
              tone: "info",
              title: "Jan Vishwas Act, 2023 — major change",
              body:
                "After commencement of the Jan Vishwas (Amendment of Provisions) Act, 2023 in 2024, many Section 15 contraventions have been decriminalised — replaced by monetary penalties imposed by an Adjudicating Officer with proceeds flowing into the new Environment Protection Fund. Serious and continuing offences remain criminal.",
            },
          ],
          cases: [
            {
              name: "U.P. Pollution Control Board v. Mohan Meakins Ltd.",
              citation: "(2000) 3 SCC 745",
              court: "Supreme Court of India",
              year: 2000,
              ratio:
                "Section 15 prosecutions must be tried strictly in accordance with the chain-of-custody requirements of Section 11. Procedural lapses are fatal to the prosecution.",
            },
          ],
          crossRefs: [
            {
              statute: "Jan Vishwas (Amendment of Provisions) Act, 2023",
              section: "Schedule — entries relating to EPA",
              note: "Decriminalises certain Section 15 contraventions and creates the Adjudicating Officer regime and Environment Protection Fund.",
            },
          ],
          scenarios: [
            {
              title: "Repeat offender after first conviction",
              setup:
                "A textile dye unit is convicted under Section 15(1) for effluent exceedance. It continues to discharge effluents above the limit for the next 14 months.",
              outcome:
                "Under Section 15(1), the unit attracts the ₹5,000/day continuing-fine for each day after conviction. Once the contravention crosses the one-year mark, Section 15(2) is triggered — the operator faces up to seven years' imprisonment. Closure under Section 5 is the inevitable parallel step.",
              appliesUnder: "Section 15(1) and 15(2)",
              consequence: "Long imprisonment + accumulating per-day fines + closure.",
            },
          ],
          faq: [
            {
              q: "Who can file a Section 15 prosecution?",
              a: "Section 19 controls — only the Centre, its authorised officer, or a private citizen who has given 60 days' prior notice. A direct complaint by an ordinary court or police on suo-motu basis is not maintainable.",
            },
            {
              q: "Is the offence cognizable?",
              a: "The Act is silent. Section 19 imposes a complaint requirement. So while officers may register information, prosecution requires a formal complaint by the authorities listed in Section 19. Practical effect: it operates like a non-cognizable but Magistrate-takeable offence.",
            },
            {
              q: "Can the company plead financial hardship?",
              a: "Financial hardship is not a defence to Section 15. It can be a mitigating factor for sentencing — fines may be reduced — but cannot defeat conviction.",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 11,
          },
        },

        {
          number: "16",
          label: "Section 16",
          marginalNote: "Offences by companies",
          importance: "operative",
          verbatim:
            "(1) Where any offence under this Act has been committed by a company, every person who, at the time the offence was committed, was directly in charge of, and was responsible to, the company for the conduct of the business of the company, as well as the company, shall be deemed to be guilty of the offence and shall be liable to be proceeded against and punished accordingly:\n\nProvided that nothing contained in this sub-section shall render any such person liable to any punishment provided in this Act, if he proves that the offence was committed without his knowledge or that he exercised all due diligence to prevent the commission of such offence.\n\n(2) Notwithstanding anything contained in sub-section (1), where an offence under this Act has been committed by a company and it is proved that the offence has been committed with the consent or connivance of, or is attributable to any neglect on the part of, any director, manager, secretary or other officer of the company, such director, manager, secretary or other officer shall also deemed to be guilty of that offence and shall be liable to be proceeded against and punished accordingly.\n\nExplanation—For the purposes of this section,—\n\n(a) \"company\" means any body corporate and includes a firm or other association of individuals;\n\n(b) \"director\", in relation to a firm, means a partner in the firm.",
          plainEnglish:
            "Section 16 lays out who in a company is personally liable when the company commits an EPA offence. Sub-section (1) catches the person 'in charge of and responsible to the company for the conduct of its business' — the CEO, MD, plant head or factory manager, depending on the case. Both the person and the company are deemed guilty.\n\nThe Proviso gives the individual a defence: prove that the offence was committed without your knowledge, or that you exercised 'all due diligence' to prevent it. This is the legal anchor for compliance programmes, environmental management systems, training records and internal audits — all documented diligence that the proviso protects.\n\nSub-section (2) reaches beyond the head of business. Where consent, connivance or neglect of a director, manager, secretary or other officer is proved, that individual is also personally liable — even if not 'in charge'.\n\nThe Explanation widens 'company' to any body corporate, firm or association of individuals; 'director' includes a partner in a firm. So LLPs and partnerships are squarely within Section 16.",
          visuals: [
            {
              kind: "process-flow",
              title: "Section 16 liability tree",
              caption: "Once the company is found guilty, the cascade is automatic — defence is on the individual.",
              nodes: [
                { id: "n1", label: "Company commits offence", sub: "Established under §15" },
                { id: "n2", label: "Person 'in charge' deemed guilty", sub: "§16(1)" },
                { id: "n3", label: "Proviso defence: no knowledge / due diligence", sub: "§16(1) Proviso" },
                { id: "n4", label: "Director / manager: consent / connivance / neglect", sub: "§16(2)" },
              ],
              edges: [
                { from: "n1", to: "n2" },
                { from: "n2", to: "n3" },
                { from: "n1", to: "n4" },
              ],
            },
          ],
          cases: [
            {
              name: "Sunil Bharti Mittal v. Central Bureau of Investigation",
              citation: "(2015) 4 SCC 609",
              court: "Supreme Court of India",
              year: 2015,
              ratio:
                "Even though decided in a 2G context, the Court's reasoning on 'directing mind and will' is routinely applied to Section 16 EPA prosecutions — only the individual whose role is established attracts personal liability.",
            },
          ],
          scenarios: [
            {
              title: "Independent director resists Section 16(1)",
              setup:
                "An effluent-discharge offence is committed by a listed company. Prosecution is filed against the entire board, including independent directors. The independent directors plead they had no role in the operational matters.",
              outcome:
                "Section 16(1) catches only those 'in charge of and responsible' — generally the MD and operational executives. Independent directors typically escape unless Section 16(2) (consent / connivance / neglect) is independently proved. The proviso of due diligence is also available.",
              appliesUnder: "Section 16(1) and (2)",
            },
          ],
          faq: [
            {
              q: "Is the company always automatically guilty?",
              a: "Section 16 deems both the company and the in-charge person guilty 'where any offence under this Act has been committed by a company'. The prosecution must first establish that the company committed the offence. Then individual liability flows from Section 16(1) and (2).",
            },
            {
              q: "How is 'due diligence' proved?",
              a: "Through documentary records — board approvals of environmental policy, evidence of compliance audits, training programmes, capital expenditure on pollution-control equipment, monitoring reports, third-party assessments. Mere assertions do not satisfy the Proviso.",
            },
            {
              q: "Does Section 16 apply to LLPs and partnership firms?",
              a: "Yes. The Explanation defines 'company' broadly to include any body corporate, firm or association of individuals. 'Director' in relation to a firm means a partner.",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 12,
          },
        },

        {
          number: "17",
          label: "Section 17",
          marginalNote: "Offences by Government departments",
          importance: "operative",
          verbatim:
            "(1) Where an offence under this Act has been committed by any Department of Government, the Head of the Department shall be deemed to be guilty of the offence and shall be liable to be proceeded against and punished accordingly.\n\nProvided that nothing contained in this section shall render such Head of the Department liable to any punishment if he proves that the offence was committed without his knowledge or that he exercise all due diligence to prevent the commission of such offence.\n\n(2) Notwithstanding anything contained in sub-section (1), where an offence under this Act has been committed by a Department of Government and it is proved that the offence has been committed with the consent or connivance of, or is attributable to any neglect on the part of, any officer, other than the Head of the Department, such officer shall also be deemed to be guilty of that offence and shall be liable to be proceeded against and punished accordingly.",
          plainEnglish:
            "Section 17 is Section 16's twin for Government departments. The Head of the Department is deemed personally guilty when the department commits an EPA offence — subject to the same 'no knowledge / due diligence' proviso. Sub-section (2) catches subordinate officers where consent, connivance or neglect is proved.\n\nThis section is what makes Pollution Control Boards, Municipal Corporations, PWDs and Railways accountable for their own pollution. Municipal sewage discharges, PWD road-construction dust, Railway diesel emissions, hospital incinerator fumes — all attract Section 17 if the department itself runs the facility.",
          visuals: [
            {
              kind: "callout",
              tone: "tip",
              title: "Government departments are not immune",
              body:
                "Section 17 is one of the few Indian penal provisions that directly catches the Head of a Government Department for the department's wrongdoing. Municipal STPs and railway workshops have been prosecuted under this provision.",
            },
          ],
          scenarios: [
            {
              title: "Municipal Corporation's untreated sewage outfall",
              setup:
                "A Municipal Corporation discharges 14 MLD of partly-treated sewage into a river, exceeding BOD norms.",
              outcome:
                "Section 7 contravention by the Corporation triggers Section 15 prosecution; Section 17(1) deems the Municipal Commissioner (Head of Department) personally guilty unless the Proviso defence is made out. Where engineers were aware of the breach and did nothing, Section 17(2) also catches them.",
              appliesUnder: "Section 7 read with Sections 15 and 17",
              consequence: "Municipal Commissioner faces personal prosecution; closure direction unlikely but compensation orders typical.",
            },
          ],
          faq: [
            {
              q: "Can the Government plead sovereign immunity?",
              a: "Largely no. Section 17 expressly contemplates prosecution of Government departments and their heads. Sovereign immunity does not cover commercial or proprietary functions of the State — the discharges that EPA targets typically fall outside any sovereign-function shield.",
            },
            {
              q: "Are PSUs covered under Section 17 or Section 16?",
              a: "Most PSUs are companies incorporated under the Companies Act and are therefore caught by Section 16. Section 17 applies to a 'Department of Government' in the classical sense — Ministries, Directorates and statutory departments. Government-controlled companies fall under Section 16.",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 12,
          },
        },
      ],

      scenarios: [
        {
          title: "Chemical plant inspection turns into Section 15 prosecution",
          setup:
            "A surprise Section-10 inspection reveals exceedance of Schedule I emission limits. The inspector serves Form V, takes a sample in the presence of the plant manager, seals the container, both sign, and sends it to a CPCB-recognised lab. The Government Analyst's report shows a 60% exceedance of the PM limit.",
          outcome:
            "Section 7 violation established by Section 14 evidence. Section 15(1) prosecution lies. Section 16(1) personally hooks the plant manager and the MD. Section 5 closure direction usually issued in parallel. The chain of Chapter III flows seamlessly from inspection to conviction.",
          appliesUnder: "Sections 7, 10, 11, 14, 15 and 16",
        },
        {
          title: "Where Chapter III protects the company",
          setup:
            "An inspector takes a sample without Form V, despatches it to a non-recognised lab, and files a Section 15 prosecution.",
          outcome:
            "Defence relies on Section 11(2) — without compliance with Section 11(3) and Section 12, the lab result is inadmissible. The Section 15 case collapses. Chapter III's procedural rigour cuts both ways: it powers genuine prosecutions and shields companies from sloppy ones.",
          appliesUnder: "Sections 11(2), 12 and 15",
        },
      ],
      faq: [
        {
          q: "Why is the chain of custody under Section 11 so important?",
          a: "Because the entire enforcement architecture of Chapter III ultimately depends on the lab report. If the sample was taken improperly, the Government Analyst's signature is worth nothing under Section 14. A meticulous compliance officer always demands a copy of Form V and notes any procedural irregularity at the time of sampling — it is the most effective defence against an over-eager prosecution.",
        },
        {
          q: "If a person is prosecuted under Section 15 EPA, can they also be prosecuted under the Water or Air Act?",
          a: "Section 24(2) of EPA prevents double prosecution. If the same act or omission is an offence under both EPA and another Act, the offender is to be punished under the other Act, not under EPA. So the prosecuting authority must choose its forum carefully.",
        },
        {
          q: "Does Section 16's 'due diligence' defence really work?",
          a: "Yes, when backed by documentary proof. Companies that maintain a documented Environmental Management System, annual third-party compliance audits, regular training and prompt remedial action have repeatedly succeeded in invoking the Proviso. Companies that produce only post-facto compliance affidavits typically fail.",
        },
        {
          q: "Are Government departments practically prosecuted under Section 17?",
          a: "Sparingly, but the threat is real. NGT orders have repeatedly directed prosecution of Municipal Commissioners for untreated sewage discharges, and of PWD officers for unauthorised dumping. The actual conviction rate is low, but the pressure to comply is significant.",
        },
      ],
    },

    // ============================================================
    // CHAPTER IV — MISCELLANEOUS
    // ============================================================
    {
      slug: "chapter-4-miscellaneous",
      number: "IV",
      title: "Miscellaneous",
      range: ["18", "26"],
      intro:
        "Chapter IV ties up the loose ends — protection for honest officers (Section 18), the unique citizen-complaint route (Section 19), reporting duties (Section 20), public-servant status for authority members (Section 21), bar of civil courts (Section 22), delegation (Section 23), interaction with other laws (Section 24), the general rule-making power (Section 25) and the parliamentary laying of rules (Section 26). Read in sequence, these nine sections are how Parliament balanced the Centre's enormous Chapter II–III powers with safeguards for officers, citizens and Parliament itself.",
      sections: [
        {
          number: "18",
          label: "Section 18",
          marginalNote: "Protection of action taken in good faith",
          importance: "operative",
          verbatim:
            "No suit, prosecution or other legal proceeding shall lie against the Government or any officer or other employee of the Government or any authority constituted under this Act or any member, officer or other employee of such authority in respect of anything which is done or intended to be done in good faith in pursuance of this Act or the rules made or orders or directions issued thereunder.",
          plainEnglish:
            "Section 18 is the personal-immunity shield. Anything done — or even intended to be done — in good faith under the Act, rules, orders or directions cannot be the subject of a suit, prosecution or legal proceeding against the Government, its officers, or members and employees of any authority constituted under the Act (such as the CPCB, SPCBs constituted under Section 3(3), or now the Commission for Air Quality Management).\n\n'Good faith' here imports the General Clauses Act standard — done honestly, whether negligently or not. So a Section-10 inspector who follows the law in spirit but makes an honest mistake about a fact is protected; an inspector who acts maliciously is not.\n\nThis is the section that lets pollution-control officials act decisively without fearing personal civil suits from aggrieved units.",
          scenarios: [
            {
              title: "Officer sued for damages after a Section 5 closure direction",
              setup:
                "A factory owner sues the SPCB Member-Secretary personally for damages after a Section 5 closure direction that was later set aside on technical grounds by the NGT.",
              outcome:
                "Section 18 bars the suit. The direction was issued in good faith — its later reversal does not retrospectively remove the good-faith status. The officer is personally immune, even though the direction itself is invalidated.",
              appliesUnder: "Section 18",
            },
          ],
          faq: [
            {
              q: "Does Section 18 protect officers from criminal prosecution?",
              a: "Yes — when the act is done in good faith. The protection extends to 'suit, prosecution or other legal proceeding'. But mala fide conduct, corruption or acts done for an extraneous purpose are not 'good faith' and are not protected.",
            },
            {
              q: "Is the State Government covered?",
              a: "Section 18 protects 'the Government'. This is read broadly to include both the Central and State Governments when they act under the Act or its delegations.",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 13,
          },
        },

        {
          number: "19",
          label: "Section 19",
          marginalNote: "Cognizance of offences",
          importance: "core",
          verbatim:
            "No court shall take cognizance of any offence under this Act except on a complaint made by—\n\n(a) the Central Government or any authority or officer authorised in this behalf by that Government, or\n\n(b) any person who has given notice of not less than sixty days, in the manner prescribed, of the alleged offence and of his intention to make a complaint, to the Central Government or the authority or officer authorised as aforesaid.",
          plainEnglish:
            "Section 19 is one of the most under-rated provisions of Indian environmental law: it gives ordinary citizens a direct entry point. No court can take cognizance of an EPA offence unless the complaint comes from (a) the Central Government or its authorised officer, or (b) any person who has given 60 days' prior notice in the prescribed form (Form II under Rule 11 of the Environment (Protection) Rules, 1986).\n\nThis means a citizen who notices a polluting unit can — after a sixty-day notice — file a complaint directly in the Magistrate's court, even if the SPCB has chosen not to act. The provision has been used by NGOs, RWAs and local activists to bring private criminal complaints when official enforcement has been slow.\n\nThe 60-day period gives the authorities a chance to step in first. If they prosecute, the citizen's path becomes academic. If they do nothing, the citizen-complaint proceeds.",
          visuals: [
            {
              kind: "process-flow",
              title: "Citizen complaint route under Section 19(b)",
              caption: "How an ordinary citizen forces prosecution under EPA.",
              nodes: [
                { id: "n1", label: "Citizen identifies offence", sub: "Pollution / hazardous-substance breach" },
                { id: "n2", label: "Form II notice", sub: "Rule 11; 60 days minimum" },
                { id: "n3", label: "Wait 60 days", sub: "Authorities can step in" },
                { id: "n4", label: "File complaint in Magistrate's Court", sub: "If authorities silent" },
                { id: "n5", label: "Magistrate takes cognizance", sub: "Section 19(b)" },
              ],
              edges: [
                { from: "n1", to: "n2" },
                { from: "n2", to: "n3" },
                { from: "n3", to: "n4" },
                { from: "n4", to: "n5" },
              ],
            },
          ],
          crossRefs: [
            {
              statute: "Environment (Protection) Rules, 1986",
              section: "Rule 11 + Form II",
              note: "Prescribes the form and manner of citizen's notice under Section 19(b).",
            },
          ],
          scenarios: [
            {
              title: "RWA forces a stone-crusher to face prosecution",
              setup:
                "A Residents Welfare Association notices a stone-crushing unit operating in a no-go zone. It writes to the SPCB but receives no action for two months. Following the procedure under Rule 11, the RWA sends a Form II notice and files a private complaint in the Judicial Magistrate's court after 60 days.",
              outcome:
                "Magistrate is empowered to take cognizance under Section 19(b). The RWA does not need official permission; the only condition is the 60-day notice. This is one of the few criminal-enforcement routes that an ordinary citizen can directly trigger.",
              appliesUnder: "Section 19(b) read with Rule 11",
            },
          ],
          faq: [
            {
              q: "Can a citizen complaint be filed if the SPCB has separately initiated prosecution?",
              a: "It can be filed, but the Magistrate may consolidate the proceedings or stay one in favour of the other. Practical guidance: where official prosecution is on foot and progressing, the citizen complaint is usually redundant.",
            },
            {
              q: "Is Section 19(b) a substitute for a writ?",
              a: "No. Section 19(b) is a criminal-complaint route — it triggers a Section 15 prosecution. A writ in the High Court or an NGT application targets administrative action. These remedies often run in parallel.",
            },
            {
              q: "What evidence must the citizen produce?",
              a: "Enough to satisfy the Magistrate that a Section 7, 8 or other contravention has occurred — typically a Section 12 lab report obtained on the citizen's own initiative, photographs, monitoring data, or eyewitness statements. The Magistrate can also summon official records.",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 13,
          },
        },

        {
          number: "20",
          label: "Section 20",
          marginalNote: "Information, reports or returns",
          importance: "operative",
          verbatim:
            "The Central Government may, in relation to its function under this Act, from time to time, require any person, officer, State Government or other authority to furnish to it or any prescribed authority or officer any reports, returns, statistics, accounts and other information and such person, officer, State Government or other authority shall be bound to do so.",
          plainEnglish:
            "Section 20 is the data-call power. The Centre can require any person — including a State Government — to furnish reports, returns, statistics, accounts or 'other information'. The duty to furnish is mandatory ('shall be bound to do so'). Failure attracts Section 15.\n\nThis is the statutory basis for the various environment statements, annual reports, online monitoring data uploads and pollution-load returns that industry has to file with CPCB and SPCBs. It is also the route by which the Centre obtains State-level compliance data.",
          scenarios: [
            {
              title: "Industry refuses to upload OCEMS data",
              setup:
                "A pulp-and-paper mill switches off its Online Continuous Emission Monitoring System (OCEMS) data feed to CPCB, citing 'technical issues' that persist for three months.",
              outcome:
                "OCEMS reporting is required by CPCB directions under Section 20 read with Section 5. Non-furnishing is a breach. Section 15 prosecution lies; the SPCB can also issue a Section 5 closure direction until reporting resumes.",
              appliesUnder: "Section 20 read with Section 5",
              consequence: "Closure direction; Section 15 prosecution.",
            },
          ],
          faq: [
            {
              q: "Can the Centre ask for commercially sensitive information?",
              a: "Yes, if it is relevant to environmental functions. RTI exemptions for commercial confidence (Section 8(1)(d) of the RTI Act) protect information from public disclosure, but the Centre's Section 20 power to obtain it from the company is not constrained.",
            },
            {
              q: "Does Section 20 apply to State Governments?",
              a: "Explicitly. The clause refers to 'any person, officer, State Government or other authority'. State Pollution Control Boards regularly furnish their data to CPCB under Section 20.",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 13,
          },
        },

        {
          number: "21",
          label: "Section 21",
          marginalNote: "Members, officers and employees of the authority constituted under section 3 to be public servants",
          importance: "operative",
          verbatim:
            "All the members of the authority, constituted, if any, under section 3 and all officers and other employees of such authority when acting or purporting to act in pursuance of any provisions of this Act or the rules made or orders or directions issued thereunder shall be deemed to be public servants within the meaning of section 21 of the Indian Penal Code (45 of 1860).",
          plainEnglish:
            "Section 21 deems every member, officer and employee of any Section-3(3) authority to be a 'public servant' under Section 21 IPC (now corresponding provision under Section 2(28) of the Bharatiya Nyaya Sanhita, 2023).\n\nTwo legal consequences flow. First, the criminal-law protections available to public servants — for example, the need for sanction under Section 197 CrPC (now Section 218 BNSS, 2023) before prosecution for acts done in official capacity — apply. Second, the criminal-law obligations also apply — bribery, criminal misconduct under the Prevention of Corruption Act, 1988 and the public-servant offences in the BNS all attach.",
          crossRefs: [
            {
              statute: "Indian Penal Code, 1860 (now Bharatiya Nyaya Sanhita, 2023)",
              section: "Section 21 IPC / Section 2(28) BNS",
              note: "Definition of 'public servant' that Section 21 of EPA borrows.",
            },
            {
              statute: "Prevention of Corruption Act, 1988",
              section: "Sections 7, 13",
              note: "Authority members deemed public servants attract anti-corruption offences.",
            },
          ],
          scenarios: [
            {
              title: "CAQM technical member taking a bribe",
              setup:
                "A technical member of the Commission for Air Quality Management is alleged to have demanded ₹5 lakh for facilitating a clearance.",
              outcome:
                "Section 21 deems him a public servant. The Prevention of Corruption Act, 1988 directly applies. Prosecution lies under Sections 7 and 13 of the PC Act.",
              appliesUnder: "Section 21 EPA read with PC Act 1988",
              consequence: "PC Act prosecution.",
            },
          ],
          faq: [
            {
              q: "Are CPCB and SPCB members covered by Section 21?",
              a: "Indirectly. CPCB and SPCBs are constituted under the Water Act, 1974 and Air Act, 1981 — not directly under Section 3(3) of EPA. Their public-servant status flows primarily from those Acts. Section 21 of EPA covers authorities specifically constituted under Section 3(3) — such as CAQM, the National Coastal Zone Management Authority, etc.",
            },
            {
              q: "Does Section 21 require sanction before prosecuting the officer?",
              a: "Sanction under Section 197 CrPC (now Section 218 BNSS, 2023) is required only for acts done in the officer's official capacity. Personal acts of corruption or assault do not need sanction. The trial court decides this on case-by-case basis.",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 13,
          },
        },

        {
          number: "22",
          label: "Section 22",
          marginalNote: "Bar of jurisdiction",
          importance: "core",
          verbatim:
            "No civil court shall have jurisdiction to entertain any suit or proceeding in respect of anything done, action taken or order or direction issued by the Central Government or any other authority or officer in pursuance of any power conferred by or in relation to its or his functions under this Act.",
          plainEnglish:
            "Section 22 ousts civil-court jurisdiction over anything done, action taken, or order/direction issued under the Act. So a company cannot file a civil suit to restrain a Section 5 direction or seek damages from a Section 11 sampling.\n\nThe ousted remedies have to be sought in (a) the National Green Tribunal under the NGT Act, 2010 (appeal against most EPA orders under Section 16 of that Act); or (b) the High Court in writ jurisdiction under Article 226 of the Constitution (which Section 22 cannot bar — Constitutional writ remedies are inviolable).\n\nWhat is barred: civil suits, declaratory suits, suits for injunction, and any other proceeding before a civil court in respect of EPA action. What is not barred: NGT appeals, writs in the High Court / Supreme Court, criminal proceedings under Section 19.",
          visuals: [
            {
              kind: "comparison-table",
              title: "Where can you challenge an EPA order?",
              caption: "Section 22 redirects litigation away from civil courts.",
              columns: ["Available forum", "Not available"],
              rows: [
                { left: "National Green Tribunal (Section 16 NGT Act)", right: "Civil suit before District Court" },
                { left: "High Court — Article 226 writ", right: "Suit for injunction" },
                { left: "Supreme Court — Article 32 / SLP", right: "Suit for declaratory relief" },
                { left: "Criminal complaint under Section 19", right: "Suit for damages against an officer (Section 18)" },
              ],
            },
          ],
          cases: [
            {
              name: "Andhra Pradesh Pollution Control Board v. Prof. M.V. Nayudu",
              citation: "(1999) 2 SCC 718",
              court: "Supreme Court of India",
              year: 1999,
              ratio:
                "Bar under environmental statutes does not preclude High Court / Supreme Court Constitutional remedies. The NGT Act, 2010 later channelled most challenges through the Tribunal.",
            },
          ],
          crossRefs: [
            {
              statute: "National Green Tribunal Act, 2010",
              section: "Sections 14, 15, 16",
              note: "The primary forum for civil environmental disputes after Section 22 ousts the civil court.",
            },
            {
              statute: "Constitution of India",
              section: "Articles 226 and 32",
              note: "Writ remedies — not barred by Section 22.",
            },
          ],
          scenarios: [
            {
              title: "Factory sues for damages in civil court",
              setup:
                "A factory hit with a Section 5 closure direction sues the SPCB and the State in civil court for ₹4 crore damages.",
              outcome:
                "Section 22 bars the suit at the threshold. The factory's correct remedies are (a) appeal to the NGT against the direction, and (b) writ in the High Court if there is a Constitutional question. The civil suit is liable to be returned at the plaint-presentation stage.",
              appliesUnder: "Section 22",
            },
          ],
          faq: [
            {
              q: "Can the High Court still hear the matter?",
              a: "Yes. Constitutional writ jurisdiction under Article 226 is part of the basic structure and cannot be ousted by ordinary legislation. Section 22 only bars civil suits.",
            },
            {
              q: "Is the NGT a 'civil court' for the purpose of Section 22?",
              a: "No. The NGT is a specialised tribunal under the NGT Act, 2010. Section 22 of EPA does not bar NGT proceedings; in fact, the NGT Act was enacted to channel exactly these disputes.",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 14,
          },
        },

        {
          number: "23",
          label: "Section 23",
          marginalNote: "Powers to delegate",
          importance: "operative",
          verbatim:
            "Without prejudice to the provisions of sub-section (3) of section 3, the Central Government may, by notification in the Official Gazette, delegate, subject to such conditions and limitations as may be specified in the notifications, such of its powers and functions under this Act [except the powers to constitute an authority under sub-section (3) of section 3 and to make rules under section 25] as it may deem necessary or expedient, to any officer, State Government or other authority.",
          plainEnglish:
            "Section 23 is the delegation pipeline. The Centre may delegate any of its EPA powers — except two — by notification in the Official Gazette to any officer, State Government or other authority.\n\nThe two non-delegable powers are: (a) the power to constitute an authority under Section 3(3); and (b) the power to make rules under Section 25. Everything else — Section 3(2) measures, Section 5 directions, Section 7 enforcement, Section 11 sampling, Section 20 data calls — can be delegated.\n\nThe most consequential delegation is the Centre's delegation of Section 5 directions to most State Governments (Notification S.O. 152(E) dated 10-2-1988 and subsequent notifications). That is why most Section 5 closure orders today are issued by State authorities, not by the Centre.",
          crossRefs: [
            {
              statute: "Notification S.O. 152(E) dated 10-2-1988",
              section: "—",
              note: "Centre's delegation of Section 5 powers to most State Governments.",
            },
            {
              statute: "Notification S.O. 145(E) dated 21-2-1991",
              section: "—",
              note: "Centre's delegation to CPCB of the power to recognise environmental laboratories under Section 12(1)(b) and to appoint Government Analysts under Section 13.",
            },
          ],
          scenarios: [
            {
              title: "Question on whether a State can re-delegate further",
              setup:
                "A State Government, having received delegated Section 5 powers from the Centre, further delegates those powers to a Sub-Divisional Magistrate.",
              outcome:
                "Sub-delegation is permissible only if the original notification permits it. Section 23 conditions delegation 'subject to such conditions and limitations as may be specified'. If the parent notification is silent, sub-delegation is open to challenge. Best practice: SDMs act on instructions from the State Environment Department under the original delegation.",
              appliesUnder: "Section 23",
            },
          ],
          faq: [
            {
              q: "Why can't rule-making be delegated?",
              a: "Section 23 expressly carves out Section 25 rule-making. Parliament reserved this power to the Centre because rules are subordinate legislation that need parliamentary laying (Section 26). Delegation to a State or officer would defeat that constitutional safeguard.",
            },
            {
              q: "Are State Government rules under EPA possible?",
              a: "No. Only the Centre can make rules under EPA. States make their own rules under their own State Acts (where relevant). The Environment (Protection) Rules, 1986 are entirely Central.",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 14,
          },
        },

        {
          number: "24",
          label: "Section 24",
          marginalNote: "Effect of other laws",
          importance: "core",
          verbatim:
            "(1) Subject to the provisions of sub-section (2), the provisions of this Act and the rules or orders made therein shall have effect notwithstanding anything inconsistent therewith contained in any enactment other than this Act.\n\n(2) Where any act or omission constitutes an offence punishable under this Act and also under any other Act then the offender found guilty of such offence shall be liable to be punished under the other Act and not under this Act.",
          plainEnglish:
            "Section 24 reconciles EPA with the larger statute book. Sub-section (1) is a wide non-obstante clause: EPA and its rules / orders override any inconsistent provision of any other Act. So if a State municipal law allows a discharge that EPA rules forbid, EPA wins.\n\nSub-section (2) is the double-punishment safeguard. If the same act or omission is an offence under both EPA and another Act, the offender is to be punished only under the other Act, not under EPA. The 'other Act' here typically means the Water Act, the Air Act or the Hazardous Substances Insurance Act.\n\nThe practical effect: prosecutors must choose the right statute carefully. Where the conduct is also a water-pollution offence, prosecute under the Water Act and not EPA. Where there is no overlap, EPA is available.",
          visuals: [
            {
              kind: "callout",
              tone: "warning",
              title: "No double punishment",
              body:
                "Section 24(2) bars conviction under EPA where the same conduct is punishable under another statute (e.g., Water Act, Air Act). Prosecutors must pick one; defendants should immediately move to quash the EPA prosecution if the conduct overlaps.",
            },
          ],
          crossRefs: [
            {
              statute: "Water (Prevention and Control of Pollution) Act, 1974",
              section: "Sections 24–25",
              note: "Frequent overlap with EPA Section 7 — Section 24(2) directs prosecution under the Water Act in such cases.",
            },
            {
              statute: "Air (Prevention and Control of Pollution) Act, 1981",
              section: "Sections 21–22",
              note: "Similar overlap with EPA Section 7 for air emissions.",
            },
          ],
          scenarios: [
            {
              title: "Effluent discharge into a river — pick the statute",
              setup:
                "A tannery's effluent discharge violates both Section 24 of the Water Act, 1974 and Section 7 of EPA. The Centre files prosecutions under both Acts.",
              outcome:
                "Section 24(2) of EPA bars conviction under EPA where the same act is also punishable under another Act. The prosecution under the Water Act may proceed; the EPA prosecution should be dropped. Failure to do so will see the EPA case quashed.",
              appliesUnder: "Section 24(2) read with Water Act §24/25",
            },
            {
              title: "Conflict between State municipal byelaw and EPA Schedule",
              setup:
                "A State municipal byelaw permits open-burning of certain solid waste below a quantity threshold, but EPA's Solid Waste Management Rules, 2016 prohibit it.",
              outcome:
                "Section 24(1) of EPA overrides. EPA's Rules prevail; the State byelaw is inconsistent and stands ousted to the extent of the inconsistency.",
              appliesUnder: "Section 24(1)",
            },
          ],
          faq: [
            {
              q: "Does Section 24(2) apply if the punishments differ?",
              a: "Yes. The trigger is that the same act or omission constitutes an offence under both. The relative severity of the punishments is irrelevant. The offender is punished under the 'other Act' regardless.",
            },
            {
              q: "Can a single act be split into Water Act prosecution + EPA prosecution for different aspects?",
              a: "Only if the aspects are truly distinct (e.g., effluent discharge under Water Act + reporting failure under EPA Section 20). If both prosecutions cover the same act, Section 24(2) bites.",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 14,
          },
        },

        {
          number: "25",
          label: "Section 25",
          marginalNote: "Power to make rules",
          importance: "operative",
          verbatim:
            "(1) The Central Government may, by notification in the Official Gazette, make rules for carrying out the purposes of this Act.\n\n(2) In particular, and without prejudice to the generality of the foregoing power, such rules may provide for all or any of the following matters, namely—\n\n(a) the standards in excess of which environmental pollutants shall not be discharged or emitted under section 7;\n\n(b) the procedure in accordance with and the safeguards in compliance with which hazardous substances shall be handled or caused to be handled under section 8;\n\n(c) the authorities or agencies to which intimation of the fact of occurrence or apprehension of occurrence of the discharge of any environmental pollutant in excess of the prescribed standards shall be given and to whom all assistance shall be bound to be rendered under sub-section (1) of section 9;\n\n(d) the manner in which samples of air, water, soil or other substance for the purpose of analysis shall be taken under sub-section (1) of section 11;\n\n(e) the form in which notice of intention to have a sample analysed shall be served under clause (a) of sub section (3) of section 11;\n\n(f) the functions of the environmental laboratories, the procedure for the submission to such laboratories of samples of air, water, soil and other substances for analysis or test; the form of laboratory report; the fees payable for such report and other matters to enable such laboratories to carry out their functions under sub-section (2) of section 12;\n\n(g) the qualifications of Government Analyst appointed or recognised for the purpose of analysis of samples of air, water, soil or other substances under section 13;\n\n(h) the manner in which notice of the offence and of the intention to make a complaint to the Central Government shall be given under clause (b) of section 19;\n\n(i) the authority of officer to whom any reports, returns, statistics, accounts and other information shall be furnished under section 20;\n\n(j) any other matter which is required to be, or may be, prescribed.",
          plainEnglish:
            "Section 25 is the general rule-making power. Sub-section (1) lets the Centre make rules to carry out the purposes of the Act. Sub-section (2) catalogues ten specific subjects — the standards under Section 7 (clause a), procedures under Section 8 (clause b), Section 9 reporting authorities (clause c), sampling manner under Section 11 (clause d), Form V notice (clause e), lab procedures under Section 12 (clause f), Government Analyst qualifications under Section 13 (clause g), Section 19 citizen-notice form (clause h), Section 20 reporting authorities (clause i), and a residual 'any other matter' (clause j).\n\nThis is the section under which the Environment (Protection) Rules, 1986 are made — the single most important piece of subordinate legislation in Indian environmental law. The Rules in turn carry the operative Schedules: emission limits (Schedule I), general effluent standards (Schedule VI), noise limits (Schedule III), NAAQS (Schedule VII), reporting authorities (Schedule V), and so on.",
          crossRefs: [
            {
              statute: "Environment (Protection) Rules, 1986",
              section: "—",
              note: "Principal rules made under Section 25.",
            },
            {
              statute: "Hazardous and Other Wastes (Management and Transboundary Movement) Rules, 2016",
              section: "—",
              note: "Specialised rules under Section 25 read with Section 8.",
            },
          ],
          scenarios: [
            {
              title: "Centre issues new e-waste rules",
              setup:
                "MoEFCC notifies the E-Waste (Management) Rules, 2022 imposing Extended Producer Responsibility (EPR) on electronics brand owners.",
              outcome:
                "The Rules are made under Section 25(1) read with Section 25(2)(j) (residual clause) and Section 3 (umbrella power). They have force of law and a breach is punishable under Section 15.",
              appliesUnder: "Section 25(1) and 25(2)(j)",
            },
          ],
          faq: [
            {
              q: "Why does Section 25 list ten specific subjects?",
              a: "The list provides clarity and shields rules made on those subjects from being struck down as 'beyond the Act'. The catch-all in clause (j) ensures the Centre can also make rules on any other matter that the Act requires or permits.",
            },
            {
              q: "Is there a difference between Section 6 rules and Section 25 rules?",
              a: "Section 6 is specifically about anti-pollution rules tied to Section 3 measures. Section 25 is broader — it covers procedural and administrative rules tied to specific operative sections (7, 8, 9, 11, 12, 13, 19, 20). The same rule may draw vires from both sections.",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 14,
            pdfPageEnd: 15,
          },
        },

        {
          number: "26",
          label: "Section 26",
          marginalNote: "Rules made under this Act to be laid before Parliament",
          importance: "operative",
          verbatim:
            "Every rule made under this Act shall be laid, as soon as may be after it is made, before each House of Parliament, while it is in session, for a total period of thirty days which may be comprised in one session or in two or more successive sessions, and if, before the expiry of the session immediately following the session or the successive sessions aforesaid, both Houses agree in making any modification in the rule or both Houses agree that the rule should not be made, the rule shall thereafter have effect only in such modified form or be of no effect, as the case may be; so, however, that any such modification or annulment shall be without prejudice to the validity of anything previously done under that rule.",
          plainEnglish:
            "Section 26 is the parliamentary-laying clause. Every rule made under the Act — whether under Section 6 or Section 25 — must be laid before both Houses of Parliament for thirty cumulative days. Within that period (and right after), if both Houses agree to modify or annul a rule, the rule is treated accordingly.\n\nThe last clause is a saving — any action taken under the rule before the modification or annulment remains valid. So a closure direction issued under a rule that Parliament later annuls is not retrospectively invalidated.\n\nThis is the standard 'laying-with-modification-power' formula seen in many Indian statutes. It is Parliament's residual control over the Centre's delegated legislation.",
          scenarios: [
            {
              title: "Parliament modifies a draft fast-track EIA rule",
              setup:
                "MoEFCC notifies a rule allowing certain projects below a threshold to skip the EIA public-consultation step. While the rule is being laid under Section 26, both Houses agree to remove the carve-out.",
              outcome:
                "From the date of the resolution, the rule operates only in the modified form (with the public-consultation step intact). But any project that secured clearance under the original carve-out before the modification stays valid under the saving clause of Section 26.",
              appliesUnder: "Section 26",
            },
          ],
          faq: [
            {
              q: "Can a rule come into force before being laid before Parliament?",
              a: "Yes. Section 26 says the rule 'shall be laid as soon as may be after it is made'. The rule is operative from the date of gazette notification; the laying is a subsequent parliamentary control. If the rule is later annulled, the saving clause protects acts done in good faith under it.",
            },
            {
              q: "What happens if Parliament does not act within the 30-day period?",
              a: "The rule continues in force. Parliamentary inaction is treated as acceptance. The modification or annulment power exists for affirmative parliamentary use; silence does not affect the rule.",
            },
            {
              q: "Is judicial review still available?",
              a: "Yes. Section 26 is a parliamentary safeguard, not a substitute for judicial review. A rule can still be challenged in court for being ultra vires, arbitrary or violative of fundamental rights.",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 15,
          },
        },
      ],

      scenarios: [
        {
          title: "A factory owner mounts a multi-pronged challenge to a Section 5 closure",
          setup:
            "After receiving a Section 5 closure direction, a factory owner explores all available avenues — civil suit, NGT appeal, writ in High Court, criminal complaint against the SPCB officer.",
          outcome:
            "Section 22 bars the civil suit. Section 18 bars the criminal complaint against the officer (good faith). The NGT appeal (Section 16 NGT Act, 2010) and Article 226 writ remain — and are the legitimate routes. Chapter IV thus channels environmental disputes into specialised forums while preserving Constitutional remedies.",
          appliesUnder: "Sections 18, 22",
        },
      ],
      faq: [
        {
          q: "Why does EPA bar civil-court jurisdiction under Section 22?",
          a: "Parliament wanted environmental disputes to be heard by specialised forums with technical expertise. Civil courts are not equipped to evaluate stack-emission readings or hazardous-waste classifications. The 2010 NGT Act later formalised this by creating a dedicated tribunal — so today Section 22 effectively channels disputes to the NGT.",
        },
        {
          q: "Is the citizen complaint under Section 19(b) actually used in practice?",
          a: "Sparingly but importantly. NGOs and resident groups use it as a credible threat to push the SPCB to act. The 60-day notice often triggers official action; when it does not, a private complaint in the Magistrate's court can directly secure prosecution. It is one of the few citizen-enforcement provisions in Indian environmental law.",
        },
        {
          q: "Does Section 24(2) make EPA a 'fallback' statute?",
          a: "In effect, yes. If a Water Act, Air Act or other specific statute also covers the conduct, Section 24(2) directs the prosecution there. EPA is invoked primarily where (i) there is no overlapping special statute, (ii) the conduct is novel or cross-medium (e.g., e-waste, plastics, GMOs), or (iii) the prosecution wants to leverage the broader Section 5 direction power.",
        },
      ],
    },
  ],
};
