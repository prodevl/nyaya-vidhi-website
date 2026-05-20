/**
 * The Dowry Prohibition Act, 1961 — Act No. 28 of 1961.
 *
 * Originally 10 sections; amendments in 1984 (Act 63 of 1984) and 1986
 * (Act 43 of 1986) inserted Sections 4A, 8A and 8B and toughened the regime.
 * Today the Act has 13 operative sections in a single chapter.
 */

import type { Statute } from "../_types";

const SOURCE_BASE = "/pdfs/Family%20%26%20Personal%20Laws/dowry_prohibition.pdf";
const SOURCE_FILE = "dowry_prohibition.pdf";

export const dowryProhibitionAct1961: Statute = {
  meta: {
    slug: "dowry-prohibition-act-1961",
    shortName: "Dowry Prohibition Act",
    fullName: "The Dowry Prohibition Act, 1961",
    year: 1961,
    sanskrit: "दहेज प्रतिषेध अधिनियम",
    tagline: "Giving, taking, demanding or advertising dowry — all criminal.",
    summary:
      "A thirteen-section penal statute that criminalises every angle of the dowry transaction. Originally a 1961 Act with a modest six-month maximum, hardened twice in 1984 and 1986 into a five-year minimum-imprisonment offence with the burden of proof reversed onto the accused. Runs alongside Section 80 BNS (dowry death) and the Protection of Women from Domestic Violence Act, 2005.",
    preamble:
      "An Act to prohibit the giving or taking of dowry.\n\nBE it enacted by Parliament in the Twelfth Year of the Republic of India as follows:—",
    categorySlug: "family-and-personal-laws",
    enactedOn: "1961-05-20",
    commencement: "Came into force 1 July 1961 (Notification S.O. 1410 dated 20 June 1961).",
    totalSections: 13,
    totalChapters: 1,
    sourcePdf: { pdfPath: SOURCE_BASE, pdfFile: SOURCE_FILE, pdfPage: 1 },
    coverage: "complete",
    tier: 1,
    amendments: [
      {
        year: 1984,
        shortName: "Dowry Prohibition (Amendment) Act, 1984 (Act 63 of 1984)",
        note:
          "Major overhaul effective 2 October 1985 — substituted Sections 3, 4, 6, 7, 8; inserted Section 8A (burden of proof on accused) and Section 8B (Dowry Prohibition Officers). Increased minimum imprisonment.",
      },
      {
        year: 1986,
        shortName: "Dowry Prohibition (Amendment) Act, 1986 (Act 43 of 1986)",
        note:
          "Effective 19 November 1986 — replaced 'or after the marriage' with 'or any time after the marriage' in Section 2; raised Section 3 minimum to 5 years and ₹15,000 / value of dowry; inserted Section 4A (advertisement ban); made offence non-bailable; inserted the 7-year unnatural-death proviso in Section 6(3).",
      },
      {
        year: 2023,
        shortName: "Bharatiya Nyaya Sanhita, 2023 — consequential",
        note:
          "Section 80 BNS (replacing Section 304B IPC) defines 'dowry death' — Section 2 of this Act remains the parent definition of 'dowry'.",
      },
    ],
  },

  chapters: [
    {
      slug: "the-act",
      number: "I",
      title: "The Act",
      range: ["1", "10"],
      intro:
        "The Act has 13 numbered sections, no chapter divisions in the source PDF. Section 1 sets territorial scope. Section 2 defines 'dowry' — the foundation of every other provision. Sections 3 and 4 are the flagship offences (giving / taking, demanding). Section 4A bans matrimonial dowry advertisements. Sections 5 and 6 invalidate dowry agreements and convert dowry into the woman's property. Sections 7–8B regulate cognizance, bail, burden of proof and Dowry Prohibition Officers. Sections 9 and 10 are the rule-making provisions.",
      sections: [
        {
          number: "1",
          label: "Section 1",
          marginalNote: "Short title, extent and commencement",
          importance: "operative",
          verbatim:
            "(1) This Act may be called the Dowry Prohibition Act, 1961.\n\n(2) It extends to the whole of India except the State of Jammu and Kashmir.\n\n(3) It shall come into force on such date as the Central Government may, by notification in the Official Gazette, appoint.",
          plainEnglish:
            "Section 1 sets the legal basics. Sub-section (1) names the Act. Sub-section (2) prints the original 1961 territorial reach — the whole of India except J&K. The source PDF preserves that text, but the J&K Reorganisation Act, 2019 (effective 31 October 2019) extended central laws to the UTs of J&K and Ladakh, so the Act now applies to the whole of India. Sub-section (3) left the date open; the Centre notified 1 July 1961 by S.O. 1410 dated 20 June 1961.",
          scenarios: [
            {
              title: "Pre-1961 dowry exchange",
              setup:
                "A wife claims back dowry given at her 1958 marriage in a 1965 partition suit, relying on Section 6 of the 1961 Act.",
              outcome:
                "Section 1(3) brought the Act into force on 1 July 1961. The 1958 dowry is outside the Act. Section 6 cannot reach back to it.",
              appliesUnder: "Section 1(3)",
            },
          ],
          faq: [
            {
              q: "Does the Act apply in J&K and Ladakh today?",
              a: "Yes. The J&K Reorganisation Act, 2019 (effective 31 October 2019) extended virtually all central laws to the UTs of J&K and Ladakh. The source PDF still prints the original exclusion as a historical record.",
            },
            {
              q: "Why was a separate commencement notification needed?",
              a: "Because Parliament wanted to give the Centre time to issue rules and prepare the Dowry Prohibition Officers' framework. The Centre then notified 1 July 1961 as the commencement date.",
            },
          ],
          source: { pdfPath: SOURCE_BASE, pdfFile: SOURCE_FILE, pdfPage: 1 },
        },

        {
          number: "2",
          label: "Section 2",
          marginalNote: "Definition of \"dowry\"",
          importance: "core",
          verbatim:
            "In this Act, \"dowry\" means any property or valuable security given or agreed to be given either directly or indirectly—\n\n(a) by one party to a marriage to the other party to the marriage; or\n\n(b) by the parents of either party to a marriage or by any other person, to either party to the marriage or to any other person;\n\nat or before or any time after the marriage in connection with the marriage of the said parties, but does not include dower or mahr in the case of persons to whom the Muslim Personal Law (Shariat) applies.\n\nExplanation II.—The expression \"valuable security\" has the same meaning as in section 30 of the Indian Penal Code (45 of 1860).",
          plainEnglish:
            "Section 2 is the keystone. The word 'dowry' is defined exceptionally widely. Any property — movable, immovable, money, jewellery, vehicles, share certificates — or 'valuable security' that is given, or even agreed to be given, directly or indirectly, between the parties or by parents or any third person, before, at or any time after the marriage, in connection with the marriage, counts as dowry.\n\nThree details matter. First, the 1986 amendment added 'or any time after the marriage', letting courts reach demands made years after the wedding — typical of post-marital harassment cases. Second, the phrase 'in connection with the marriage' is the controlling link — gifts given on Diwali or out of pure affection fall outside Section 2. Third, the carve-out: Muslim 'dower' (mahr) is excluded because mahr is a mandatory payment from husband to wife — the legal opposite of dowry.\n\n'Valuable security' carries the meaning of Section 30 IPC (now Section 2(33) BNS, 2023) — broadly, any document creating, extending, transferring or releasing legal rights.\n\nIn Pratibha Rani v. Suraj Kumar (1985), the Supreme Court held property given as dowry remains the woman's stridhan — refusal to return it is criminal breach of trust.",
          defines: [
            {
              term: "Dowry",
              definition:
                "Property or valuable security given or agreed to be given directly or indirectly by one party to the marriage to the other, or by parents or any third person, before, at or any time after the marriage, in connection with the marriage. Excludes Muslim dower / mahr.",
              sourceSection: "2",
            },
            {
              term: "Valuable security",
              definition:
                "Section 30 IPC / Section 2(33) BNS — any document creating, extending, transferring, restricting, extinguishing or releasing any legal right.",
              sourceSection: "2 Explanation II",
            },
          ],
          visuals: [
            {
              kind: "comparison-table",
              title: "Dowry vs. gift / stridhan / dower",
              caption: "All transfers around marriage are not dowry — Section 2 turns on connection and demand.",
              columns: ["Section 2 'dowry'", "Outside Section 2"],
              rows: [
                { left: "Demanded or agreed in connection with marriage", right: "Voluntary gifts unconnected with marriage" },
                { left: "Direct or indirect", right: "Stridhan presents to bride (no demand, listed under §3(2)(a))" },
                { left: "Before, at or any time after marriage", right: "Muslim dower / mahr (expressly excluded)" },
                { left: "Cash, property, valuable security — any form", right: "Customary presents to bridegroom within Section 3(2)(b)" },
              ],
            },
            {
              kind: "callout",
              tone: "info",
              title: "'Any time after the marriage'",
              body:
                "The 1986 amendment was specifically aimed at post-marital harassment. A demand made in 2024 for a marriage solemnised in 2010 is still 'in connection with the marriage' and within Section 2.",
            },
          ],
          cases: [
            {
              name: "Pratibha Rani v. Suraj Kumar",
              citation: "(1985) 2 SCC 370",
              court: "Supreme Court of India",
              year: 1985,
              ratio:
                "Property given to a married woman as dowry remains her stridhan; refusal by husband or in-laws to return it is criminal breach of trust under Section 405 IPC (now Section 314 BNS).",
            },
            {
              name: "Inder Raj Malik v. Sunita Malik",
              citation: "(1986) Cri LJ 1510",
              court: "Delhi High Court",
              year: 1986,
              ratio:
                "Continued demands after marriage fall within Section 2 read with Section 4 — the Section's reach is not confined to the moment of solemnisation.",
            },
          ],
          scenarios: [
            {
              title: "'Gift' of a car at the wedding",
              setup:
                "The bride's father gifts a luxury car to the groom 'as a wedding present', stating publicly that there was no demand from the in-laws.",
              outcome:
                "If genuinely without demand and entered on the rules-prescribed list, it may be a customary present under Section 3(2)(b) — provided not excessive relative to giver's means. If any demand preceded, or value is disproportionate, it is dowry under Section 2 and attracts Section 3.",
              appliesUnder: "Section 2 read with Section 3(2)(b)",
            },
            {
              title: "Demand for ₹5 lakh five years into marriage",
              setup:
                "Husband demands ₹5 lakh from the wife's family in 2024 for a flat, the marriage having been solemnised in 2019.",
              outcome:
                "Demand is 'in connection with the marriage' and made 'any time after marriage'. Section 2 catches it; Section 4 prosecution lies — minimum 6 months, up to 2 years, plus fine.",
              appliesUnder: "Section 2 read with Section 4",
              consequence: "Section 4 prosecution; possible Section 84 BNS for cruelty; protection orders under DV Act 2005.",
            },
          ],
          faq: [
            {
              q: "Why is Muslim dower (mahr) excluded?",
              a: "Because mahr is a payment from husband to wife — the legal opposite of dowry. It compensates the wife and gives her economic protection. Including it would defeat the structural intent of Muslim personal law.",
            },
            {
              q: "Are 'voluntary gifts' safe?",
              a: "Yes — provided they are genuinely voluntary, not in response to any demand, and entered on the list maintained under the Dowry Prohibition (Maintenance of Lists of Presents to the Bride and Bridegroom) Rules, 1985.",
            },
            {
              q: "Does the agreement need to be in writing?",
              a: "No. Section 2 says 'given or agreed to be given'. Oral undertakings or even tacit understandings are enough. Most prosecutions rest on oral evidence.",
            },
          ],
          source: { pdfPath: SOURCE_BASE, pdfFile: SOURCE_FILE, pdfPage: 1 },
        },

        {
          number: "3",
          label: "Section 3",
          marginalNote: "Penalty for giving or taking dowry",
          importance: "core",
          verbatim:
            "(1) If any person, after the commencement of this Act, gives or takes or abets the giving or taking of dowry, he shall be punishable with imprisonment for a term which shall not be less than five years, and with fine which shall not be less than fifteen thousand rupees or the amount of the value of such dowry, whichever is more:\n\nProvided that the Court may, for adequate and special reasons to be recorded in the judgment, impose a sentence of imprisonment for a term of less than five years.\n\n(2) Nothing in sub-section (1) shall apply to, or in relation to,—\n\n(a) presents which are given at the time of a marriage to the bride (without any demand having been made in that behalf):\n\nProvided that such presents are entered in a list maintained in accordance with the rules made under this Act;\n\n(b) presents which are given at the time of a marriage to the bridegroom (without any demand having been made in that behalf):\n\nProvided that such presents are entered in a list maintained in accordance with the rules made under this Act:\n\nProvided further that where such presents are made by or on behalf of the bride or any person related to the bride, such presents are of a customary nature and the value thereof is not excessive having regard to the financial status of the person by whom, or on whose behalf, such presents are given.",
          plainEnglish:
            "Section 3 is the central offence-creating provision. Sub-section (1) criminalises three acts: giving dowry, taking dowry, and abetting either. Both sides of the transaction are guilty — the bride's father who pays, the groom or his family who receive, and any matchmaker who arranges.\n\nThe punishment after the 1986 amendment is severe — minimum 5 years' imprisonment and fine of not less than ₹15,000 or the value of the dowry, whichever is higher. The Proviso allows reduction below the minimum for 'adequate and special reasons recorded'. Courts have read this strictly.\n\nSub-section (2) carves out two narrow safe harbours. Clause (a) covers presents to the bride at the marriage without any demand — provided entered in the rules-prescribed list. Clause (b) covers presents to the bridegroom on the same basis, with the additional safeguard that if from the bride's side, the presents must be 'customary' and 'not excessive' having regard to the giver's financial status.\n\nThe list-maintenance requirement is crucial. Without a contemporaneous signed list, the prosecution can refuse to treat the items as gifts.",
          penalties: [
            {
              offence: "Giving, taking or abetting dowry",
              punishment: "Minimum 5 years' imprisonment + minimum fine ₹15,000 or value of dowry (whichever more)",
              ref: "Section 3(1)",
              severity: "grave",
              flags: ["Cognizable for investigation", "Non-bailable", "Non-compoundable"],
            },
            {
              offence: "Mitigated sentence — adequate and special reasons recorded",
              punishment: "Imprisonment less than 5 years possible (Proviso)",
              ref: "Section 3(1) Proviso",
              severity: "serious",
            },
          ],
          visuals: [
            {
              kind: "callout",
              tone: "warning",
              title: "Maintain the presents list",
              body:
                "The single most important step for any wedding-side family that wishes to give substantial presents is to maintain the contemporaneous list under the 1985 Rules, signed by both sides. Without it, the safe harbour in Section 3(2) is gone.",
            },
          ],
          crossRefs: [
            {
              statute: "Dowry Prohibition (Maintenance of Lists of Presents) Rules, 1985",
              section: "Rules 2, 3",
              note: "Form, content and signature requirements for the present-list under Section 3(2).",
            },
            {
              statute: "Bharatiya Nyaya Sanhita, 2023",
              section: "Section 80",
              note: "Dowry death — uses Section 2 of this Act for 'dowry'.",
            },
          ],
          scenarios: [
            {
              title: "Bride's father caught between law and custom",
              setup:
                "The bride's father is told (informally) that the groom's family expects ₹10 lakh in cash and gold worth ₹15 lakh. He pays.",
              outcome:
                "Both giver (bride's father) and taker (groom / family) are guilty under Section 3(1). 'I had no choice' is no defence. Section 3 makes giving a substantive offence — Parliament wanted both demand and supply costly.",
              appliesUnder: "Section 3(1)",
              consequence: "Five-year minimum for all parties.",
            },
            {
              title: "Customary ornaments — what's 'excessive'?",
              setup:
                "Bride's family gives the groom a gold chain and ring worth ₹1.5 lakh, in line with community custom. Family's annual income ₹6 lakh.",
              outcome:
                "Section 3(2)(b) safe harbour can apply if (i) no demand, (ii) list maintained, (iii) presents customary and not excessive. A 25% annual-income gift is plausibly within bounds; the court considers all surrounding facts.",
              appliesUnder: "Section 3(2)(b)",
            },
          ],
          faq: [
            {
              q: "Are 'token' gifts safe?",
              a: "Generally yes — small customary gifts at the marriage with no demand and entered on the list are protected. The problem is when the 'token' grows large enough to amount to a substantial transfer.",
            },
            {
              q: "Can the giver claim duress as a defence?",
              a: "No. Section 3 punishes the act of giving without exempting compelled gifts. The Supreme Court has rejected the 'social compulsion' defence. The giver's remedy is to refuse and pursue Section 4 against the demanding side.",
            },
            {
              q: "When can a court go below 5 years?",
              a: "Only for 'adequate and special reasons recorded'. Courts have held this means more than ordinary mitigation — e.g., where the accused was a minor, the value was small, or the gift was offered without expectation under unique circumstances.",
            },
          ],
          source: { pdfPath: SOURCE_BASE, pdfFile: SOURCE_FILE, pdfPage: 1, pdfPageEnd: 2 },
        },

        {
          number: "4",
          label: "Section 4",
          marginalNote: "Penalty for demanding dowry",
          importance: "core",
          verbatim:
            "If any person demands, directly or indirectly, from the parents or other relatives or guardian of a bride or bridegroom, as the case may be, any dowry, he shall be punishable with imprisonment for a term which shall not be less than six months, but which may extend to two years and with fine which may extend to ten thousand rupees:\n\nProvided that the Court may, for adequate and special reasons to be mentioned in the judgment, impose a sentence of imprisonment for a term of less than six months.",
          plainEnglish:
            "Section 4 makes the act of demanding dowry — by itself, without any payment yet — a criminal offence. The demand can be direct or indirect, made to the parents, other relatives or guardian of the bride or bridegroom. Section 4 was redrafted in 1984 to catch the demanding side independently of the giving side under Section 3, because in practice it is the demand that drives the harassment.\n\nPunishment: minimum 6 months, up to 2 years, plus fine up to ₹10,000. Like Section 3, the Proviso allows reduction below 6 months for adequate and special reasons. Section 8A reverses the burden — once the prosecution shows a demand, the accused must prove he did not make it.\n\nSection 4 is regularly used alongside Section 84 BNS, 2023 (cruelty) when post-marital dowry demands accompany domestic violence.",
          penalties: [
            {
              offence: "Direct or indirect demand for dowry",
              punishment: "Imprisonment 6 months to 2 years + fine up to ₹10,000",
              ref: "Section 4",
              severity: "serious",
              flags: ["Cognizable for investigation", "Non-bailable", "Reverse burden under Section 8A"],
            },
          ],
          cases: [
            {
              name: "State of Himachal Pradesh v. Nikku Ram",
              citation: "(1995) 6 SCC 219",
              court: "Supreme Court of India",
              year: 1995,
              ratio:
                "Section 4 catches even an indirect demand made through relatives. The demand need not be addressed to the bride or bridegroom directly.",
            },
            {
              name: "Pawan Kumar v. State of Haryana",
              citation: "(1998) 3 SCC 309",
              court: "Supreme Court of India",
              year: 1998,
              ratio:
                "Section 4 + Section 304B IPC (now Section 80 BNS) operate together — a Section 4 demand close in time to the woman's death is a powerful evidentiary anchor for dowry death.",
            },
          ],
          scenarios: [
            {
              title: "WhatsApp message demanding gold",
              setup:
                "The groom's father sends a WhatsApp message to the bride's mother saying 'we expect 50 sovereigns of gold at the engagement; please confirm'.",
              outcome:
                "The message is a direct demand. Even without any transfer, Section 4 attracts — minimum 6 months. The forensic copy is admissible under the Bharatiya Sakshya Adhiniyam, 2023.",
              appliesUnder: "Section 4",
              consequence: "Criminal complaint + protection orders + reverse burden.",
            },
          ],
          faq: [
            {
              q: "Is the demand alone enough — without any payment?",
              a: "Yes. Section 4 punishes the demand. No transfer has to have happened. Most modern prosecutions are anchored on the demand because the giving side often refuses to pay.",
            },
            {
              q: "Can a single demand attract both Section 3 and Section 4?",
              a: "Section 3 punishes giving / taking; Section 4 punishes demanding. If a demand is made and then the dowry is given, both sections can be invoked — but principles against double jeopardy ensure punishment is not multiplied.",
            },
            {
              q: "Is Section 4 used in dowry-death cases?",
              a: "Almost always. The Section 4 demand, when coupled with the woman's death within 7 years, is the evidentiary backbone of a Section 80 BNS prosecution.",
            },
          ],
          source: { pdfPath: SOURCE_BASE, pdfFile: SOURCE_FILE, pdfPage: 2 },
        },

        {
          number: "4A",
          label: "Section 4A",
          marginalNote: "Ban on advertisement",
          importance: "operative",
          verbatim:
            "If any person—\n\n(a) offers, through any advertisement in any newspaper, periodical, journal or through any other media, any share in his property or of any money or both as a share in any business or other interest as consideration for the marriage of his son or daughter or any other relative,\n\n(b) prints or publishes or circulates any advertisement referred to in clause (a),\n\nhe shall be punishable with imprisonment for a term which shall not be less than six months, but which may extend to five years, or with fine which may extend to fifteen thousand rupees:\n\nProvided that the Court may, for adequate and special reasons to be recorded in the judgment, impose a sentence of imprisonment for a term of less than six months.",
          plainEnglish:
            "Section 4A — inserted in 1986 — targets matrimonial advertisements that openly offer property, money or business shares as consideration for marriage. The mischief is on both sides: the offeror under clause (a) and the medium that prints, publishes or circulates the advertisement under clause (b). The newspaper or matrimonial portal is therefore liable along with the family.\n\nPunishment is minimum 6 months, up to 5 years, or fine up to ₹15,000. The Proviso allows below-6-month sentencing for adequate reasons.\n\nIn the era of digital matrimonial portals, Section 4A reaches every online platform that hosts a matrimonial advertisement offering consideration. Compliance teams of newspapers and matrimonial sites routinely screen submissions for such offers.",
          penalties: [
            {
              offence: "Offering / printing / publishing / circulating matrimonial ad offering property or money as consideration",
              punishment: "Imprisonment 6 months to 5 years OR fine up to ₹15,000",
              ref: "Section 4A",
              severity: "serious",
              flags: ["Cognizable", "Non-bailable"],
            },
          ],
          scenarios: [
            {
              title: "Matrimonial portal accepts an ad offering 'share in business'",
              setup:
                "A businessman places an ad on a matrimonial portal offering 'equal share in our textile business' in exchange for marriage to his daughter. The portal publishes the ad.",
              outcome:
                "Businessman liable under Section 4A(a); portal liable under Section 4A(b). Both face minimum 6 months. The portal cannot plead ignorance — Section 4A imposes liability on publisher / circulator independently.",
              appliesUnder: "Section 4A(a) and (b)",
            },
          ],
          faq: [
            {
              q: "Does Section 4A catch private matrimonial WhatsApp groups?",
              a: "Section 4A speaks of 'any newspaper, periodical, journal or through any other media'. Courts have read 'any other media' broadly to include online platforms with indeterminate or large audiences. A community matrimonial WhatsApp group with hundreds of members would likely qualify.",
            },
            {
              q: "Is the standard 'good match' advertisement caught?",
              a: "No. Section 4A requires an explicit offer of property, money or business share as consideration. A neutral ad seeking 'an educated match' is outside Section 4A.",
            },
          ],
          source: { pdfPath: SOURCE_BASE, pdfFile: SOURCE_FILE, pdfPage: 2 },
        },

        {
          number: "5",
          label: "Section 5",
          marginalNote: "Agreement for giving or taking dowry to be void",
          importance: "operative",
          verbatim: "Any agreement for the giving or taking of dowry shall be void.",
          plainEnglish:
            "Section 5 is a one-liner with quiet legal power. Any agreement to give or take dowry is void from the beginning — it cannot be enforced in any civil court. So if the groom's father promises in writing to the bride's father that a piece of land will be transferred on the wedding day and reneges, the bride's father cannot sue on the contract for damages — the agreement itself has no legal standing.\n\nThe converse is also true: even if the dowry was paid, the giver cannot sue for return on the basis of the agreement. The civil remedy that does survive is Section 6 — the recipient holds the dowry in trust for the woman.",
          crossRefs: [
            {
              statute: "Indian Contract Act, 1872",
              section: "Section 23",
              note: "An agreement whose object is forbidden by law is void. Section 5 of this Act makes the position explicit for dowry agreements.",
            },
          ],
          scenarios: [
            {
              title: "Suit on an unpaid dowry promise",
              setup:
                "Groom's family had taken a promissory note for ₹15 lakh from the bride's father as part of the wedding settlement. After two years, they sue to enforce the note.",
              outcome:
                "The note is a 'dowry agreement' under Section 2. Section 5 makes it void. The suit fails at the threshold. The plaintiff is also exposed to Section 3 for having taken (or attempted) dowry.",
              appliesUnder: "Section 5",
            },
          ],
          faq: [
            {
              q: "Does Section 5 affect general gifts at the marriage?",
              a: "No. A genuine gift, with no contractual link and no demand, is not 'an agreement for giving or taking dowry'. Section 5 voids only dowry agreements within Section 2.",
            },
            {
              q: "Can the bride sue for return of dowry under Section 5?",
              a: "Section 5 itself only voids the agreement; it does not create a refund mechanism. Refund comes through Section 6 — the recipient holds the dowry in trust for the woman.",
            },
          ],
          source: { pdfPath: SOURCE_BASE, pdfFile: SOURCE_FILE, pdfPage: 2 },
        },

        {
          number: "6",
          label: "Section 6",
          marginalNote: "Dowry to be for the benefit of the wife or her heirs",
          importance: "core",
          verbatim:
            "(1) Where any dowry is received by any person other than the woman in connection with whose marriage it is given, that person shall transfer it to the woman—\n\n(a) if the dowry was received before marriage, within three months after the date of marriage; or\n\n(b) if the dowry was received at the time of or after the marriage, within three months after the date of its receipt; or\n\n(c) if the dowry was received when the woman was a minor, within three months after she has attained the age of eighteen years;\n\nand pending such transfer, shall hold it in trust for the benefit of the woman.\n\n(2) If any person fails to transfer any property as required by sub-section (1) within the time limit specified therefor or as required by sub-section (3), he shall be punishable with imprisonment for a term which shall not be less than six months, but which may extend to two years or with fine which shall not be less than five thousand rupees, but which may extend to ten thousand rupees or with both.\n\n(3) Where the woman entitled to any property under sub-section (1) dies before receiving it, the heirs of the woman shall be entitled to claim it from the person holding it for the time being:\n\nProvided that where such woman dies within seven years of her marriage, otherwise than due to natural causes, such property shall,—\n\n(a) if she has no children, be transferred to her parents, or\n\n(b) if she has children, be transferred to such children and pending such transfer, be held in trust for such children.\n\n(3A) Where a person convicted under sub-section (2) for failure to transfer any property as required by sub-section (1) or sub-section (3) has not, before his conviction under that sub-section, transferred such property to the woman entitled thereto or, as the case may be, her heirs, parents or children, the Court shall, in addition to awarding punishment under that sub-section, direct, by order in writing, that such person shall transfer the property to such woman or, as the case may be, her heirs, parents or children within such period as may be specified in the order, and if such person fails to comply with the direction within the period so specified, an amount equal to the value of the property may be recovered from him as if it were a fine imposed by such Court and paid to such woman or, as the case may be, her heirs, parents or children.\n\n(4) Nothing contained in this section shall affect the provisions of section 3 or section 4.",
          plainEnglish:
            "Section 6 is the restitution mechanism. Even though Section 3 makes giving and taking dowry criminal, Parliament recognised that women who survive a dowry marriage should not lose the property to a punishment-only regime. Section 6 converts the recipient — typically the husband or his family — into a statutory trustee of the dowry on behalf of the woman.\n\nSub-section (1) sets the transfer timeline: 3 months from marriage if dowry received before; 3 months from receipt if at or after marriage; or 3 months from her attaining 18 if she was a minor.\n\nSub-section (2) makes failure to transfer a separate criminal offence — minimum 6 months, up to 2 years, plus fine ₹5,000-₹10,000.\n\nSub-section (3) deals with death. If the woman dies before receiving the dowry, the heirs claim it. But the post-1986 Proviso adds a critical twist: if she dies within 7 years of marriage 'otherwise than due to natural causes' — i.e., suspicious or unnatural — the property goes to her parents (no children) or to her children, not to the in-laws. This was designed to defeat the typical post-dowry-death pattern of in-laws inheriting.\n\nSub-section (3A) gives the conviction court a corrective tool — it can order the convicted person to transfer the property within a specified period, and if he fails, the value is recoverable as a fine and paid to the woman / heirs / parents / children.\n\nSub-section (4) clarifies that Section 6 operates in addition to — not in place of — Sections 3 and 4 criminal liability.",
          visuals: [
            {
              kind: "process-flow",
              title: "Section 6 transfer timeline",
              caption: "Three months. Then criminal liability under Section 6(2).",
              nodes: [
                { id: "n1", label: "Dowry received", sub: "Before / at / after marriage" },
                { id: "n2", label: "Held in trust", sub: "By recipient for woman" },
                { id: "n3", label: "Transfer to woman", sub: "Within 3 months (or +18 if minor)" },
                { id: "n4", label: "Failure → §6(2)", sub: "6 mo–2 yrs + fine ₹5k-₹10k" },
                { id: "n5", label: "If woman dies — §6(3)", sub: "Heirs claim; 7-yr proviso → parents / children" },
                { id: "n6", label: "Court order §6(3A)", sub: "Force transfer or recover value as fine" },
              ],
              edges: [
                { from: "n1", to: "n2" },
                { from: "n2", to: "n3" },
                { from: "n3", to: "n4" },
                { from: "n2", to: "n5" },
                { from: "n4", to: "n6" },
              ],
            },
            {
              kind: "callout",
              tone: "warning",
              title: "The 7-year unnatural-death proviso",
              body:
                "If the woman dies within 7 years of marriage in unnatural circumstances, her dowry does not flow to the in-laws under the normal heirship rules — it goes to her parents (no children) or her children. Specifically designed to defeat dowry-death inheritance.",
            },
          ],
          penalties: [
            {
              offence: "Failure to transfer dowry to woman within prescribed period",
              punishment: "Imprisonment 6 months to 2 years + fine ₹5,000 to ₹10,000 (or both)",
              ref: "Section 6(2)",
              severity: "serious",
            },
          ],
          crossRefs: [
            {
              statute: "Bharatiya Nyaya Sanhita, 2023",
              section: "Section 80",
              note: "Dowry death — when invoked alongside Section 6's 7-year unnatural-death proviso, completes the legal response to dowry-driven deaths.",
            },
            {
              statute: "Bharatiya Nyaya Sanhita, 2023",
              section: "Section 84",
              note: "Cruelty by husband / relatives — often runs in parallel with Section 6 failure-to-transfer.",
            },
          ],
          scenarios: [
            {
              title: "Mother-in-law holds the wedding jewellery for 18 months",
              setup:
                "Two years into the marriage, the wife asks for her wedding jewellery (₹12 lakh) that her mother-in-law has been keeping 'for safekeeping'. The mother-in-law refuses.",
              outcome:
                "Section 6(1)(b) required transfer within 3 months — 15 months ago. Section 6(2) attracts: 6 months to 2 years + ₹5k-₹10k fine. Section 6(3A) lets the trial court also order transfer of the jewellery and recover its value as a fine if disobeyed.",
              appliesUnder: "Section 6(1)(b) and 6(2)",
            },
            {
              title: "Wife dies in suspicious fire 4 years after marriage",
              setup:
                "Four years after the wedding, the wife dies in a kitchen fire under suspicious circumstances. Wedding jewellery (₹15 lakh) and gifted flat are with the husband. Her parents claim them.",
              outcome:
                "The 7-year proviso applies — 'otherwise than due to natural causes'. Since the wife had no children, the property is to be transferred to her parents, not retained by the husband. Husband faces Section 6(2) prosecution if he resists, and potentially Section 80 BNS dowry-death charges separately.",
              appliesUnder: "Section 6(3) Proviso",
              consequence: "Property to parents; Section 80 BNS investigation likely.",
            },
          ],
          faq: [
            {
              q: "What if the woman waives her claim?",
              a: "Section 6 is a statutory trust, but its enforcement is at the woman's instance. A genuine, informed and voluntary waiver may bar her claim; but waivers obtained under coercion in a marital household are routinely disregarded.",
            },
            {
              q: "Does Section 6 apply to gifts entered on the presents list under Section 3(2)?",
              a: "Strictly, Section 6 applies to 'dowry' within Section 2. Gifts validly within Section 3(2) are by definition not dowry. But the underlying rule that the woman's stridhan belongs to her survives independently under personal law and Pratibha Rani v. Suraj Kumar.",
            },
            {
              q: "Can the woman recover dowry through a civil suit?",
              a: "Yes — and Section 6 makes the holder a constructive trustee, so the limitation period is extended. Civil suits for recovery routinely accompany Section 6 criminal prosecutions.",
            },
          ],
          source: { pdfPath: SOURCE_BASE, pdfFile: SOURCE_FILE, pdfPage: 2, pdfPageEnd: 3 },
        },

        {
          number: "7",
          label: "Section 7",
          marginalNote: "Cognizance of offences",
          importance: "operative",
          verbatim:
            "(1) Notwithstanding anything contained in the Code of Criminal Procedure, 1973 (2 of 1974),—\n\n(a) no Court inferior to that of a Metropolitan Magistrate or a Judicial Magistrate of the first class shall try any offence under this Act;\n\n(b) no court shall take cognizance of an offence under this Act except upon—\n\n(i) its own knowledge or a police report of the facts which constitute such offence, or\n\n(ii) a complaint by the person aggrieved by the offence or a parent or other relative of such person, or by any recognised welfare institution or organisation;\n\n(c) it shall be lawful for a Metropolitan Magistrate or a Judicial Magistrate of the first class to pass any sentence authorised by this Act on any person convicted of an offence under this Act.\n\nExplanation.—For the purposes of this sub-section, \"recognised welfare institution or organisation\" means a social welfare institution or organisation recognised in this behalf by the Central or State Government.\n\n(2) Nothing in Chapter XXXVI of the Code of Criminal Procedure, 1973 (2 of 1974), shall apply to any offence punishable under this Act.\n\n(3) Notwithstanding anything contained in any law for the time being in force a statement made by the person aggrieved by the offence shall not subject such person to a prosecution under this Act.",
          plainEnglish:
            "Section 7 controls who can take dowry cases. Sub-section (1)(a) keeps the offence at the level of a Metropolitan Magistrate or a Judicial Magistrate of the First Class — no lower court can try a dowry case. Sub-section (1)(c) gives those Magistrates full sentencing power.\n\nSub-section (1)(b) lays down who can set the prosecution in motion. The court can take cognizance only on (i) its own knowledge, (ii) a police report, or (iii) a complaint by the person aggrieved, her parent / relative, or a recognised welfare institution. The Explanation defines 'recognised welfare institution' — one recognised by the Central or State Government. This gives bodies like the National Commission for Women a direct prosecution route.\n\nSub-section (2) excludes Chapter XXXVI of the CrPC (now corresponding chapter of BNSS, 2023) — which contains limitation periods — from offences under this Act. Effect: there is no limitation period for filing a dowry prosecution. A complaint about a 2010 dowry can be filed in 2026.\n\nSub-section (3) — added in 1986 — is a victim-protection clause. A statement by the aggrieved person about the dowry will not, by itself, expose her to Section 3 prosecution as a 'giver' of dowry. Without this, the wife who came forward as a witness could herself face Section 3 — a serious structural disincentive to come forward.",
          visuals: [
            {
              kind: "callout",
              tone: "tip",
              title: "No limitation period",
              body:
                "Section 7(2) excludes the CrPC / BNSS limitation chapter. A dowry prosecution can be filed at any time after the offence — there is no cut-off period.",
            },
            {
              kind: "callout",
              tone: "info",
              title: "Victim shield",
              body:
                "Section 7(3) ensures the wife who testifies about the dowry cannot be prosecuted for having been a party to it. Inserted in 1986 to remove a structural disincentive for victims.",
            },
          ],
          crossRefs: [
            {
              statute: "Bharatiya Nagarik Suraksha Sanhita, 2023",
              section: "Chapter XXXIX (limitations)",
              note: "Excluded by Section 7(2) for dowry offences. The BNSS replaces the CrPC, 1973, but the exclusion carries over.",
            },
          ],
          scenarios: [
            {
              title: "NCW files a Section 4 complaint on behalf of a wife",
              setup:
                "A wife approaches the National Commission for Women with repeated dowry demands. NCW files a complaint in the Judicial Magistrate's court.",
              outcome:
                "NCW is a 'recognised welfare institution' under Section 7(1)(b)(ii). The Magistrate is empowered to take cognizance. The Section 4 prosecution proceeds.",
              appliesUnder: "Section 7(1)(b)(ii)",
            },
            {
              title: "Wife wants to file complaint about a 2008 marriage in 2025",
              setup:
                "In 2025, a wife wants to file a Section 4 + Section 6 complaint about dowry given at her 2008 marriage.",
              outcome:
                "Section 7(2) excludes the limitation chapter. The 17-year gap does not bar the complaint. The court takes cognizance under Section 7(1)(b)(ii).",
              appliesUnder: "Section 7(2)",
            },
          ],
          faq: [
            {
              q: "Why is there no limitation for dowry offences?",
              a: "Because dowry harassment often unfolds over many years and victims may not be able to come forward immediately. Parliament chose to disapply the limitation chapter so delay is not a defence.",
            },
            {
              q: "Can the police file a chargesheet without a separate complaint?",
              a: "Yes. Section 7(1)(b)(i) allows cognizance on a police report. So if the police file a chargesheet (typically alongside Section 84 BNS), the court can proceed.",
            },
          ],
          source: { pdfPath: SOURCE_BASE, pdfFile: SOURCE_FILE, pdfPage: 3 },
        },

        {
          number: "8",
          label: "Section 8",
          marginalNote: "Offences to be cognizable for certain purposes and to be bailable and non-compoundable",
          importance: "operative",
          verbatim:
            "(1) The Code of Criminal Procedure, 1973 (2 of 1974) shall apply to offences under this Act as if they were cognizable offences—\n\n(a) for the purposes of investigation of such offences; and\n\n(b) for the purposes of matters other than—\n\n(i) matters referred to in section 42 of that Code; and\n\n(ii) the arrest of a person without a warrant or without an order of a Magistrate.\n\n(2) Every offence under this Act shall be non-bailable and non-compoundable.",
          plainEnglish:
            "Section 8 controls the procedural classification. Sub-section (1) makes the offence cognizable for two purposes: (a) investigation by the police (no Magistrate's permission needed), and (b) all other CrPC / BNSS procedural matters except the two carve-outs — Section 42 CrPC matters and arrest without warrant. So the police can investigate freely but cannot arrest without a warrant — a Magistrate's order is required.\n\nSub-section (2) makes the offence non-bailable (1986 amendment — earlier bailable) and non-compoundable. Non-bailable means bail is not a matter of right; the court has discretion. Non-compoundable means the parties cannot 'settle' the case by mutual consent — it proceeds even if the wife and husband patch up.\n\nThe non-compoundable nature is significant. In Gian Singh v. State of Punjab (2012), the Supreme Court allowed the High Court under inherent power to quash dowry / matrimonial cases on genuine settlement — but this is by way of inherent jurisdiction, not compounding.",
          visuals: [
            {
              kind: "comparison-table",
              title: "Dowry offences — procedural classification",
              caption: "Section 8 + Section 8A combine to make dowry cases hard to escape.",
              columns: ["Attribute", "Position"],
              rows: [
                { left: "Cognizable for investigation", right: "Yes (Section 8(1)(a))" },
                { left: "Police can arrest without warrant", right: "No — Magistrate's warrant / order required (Section 8(1)(b)(ii))" },
                { left: "Bailable", right: "No — non-bailable (Section 8(2))" },
                { left: "Compoundable", right: "No — non-compoundable (Section 8(2))" },
                { left: "Limitation period", right: "None (Section 7(2))" },
                { left: "Burden of proof", right: "Reversed onto accused (Section 8A)" },
              ],
            },
          ],
          cases: [
            {
              name: "Arnesh Kumar v. State of Bihar",
              citation: "(2014) 8 SCC 273",
              court: "Supreme Court of India",
              year: 2014,
              ratio:
                "Although Section 498A IPC and dowry-related offences are 'cognizable', the arrest power should be exercised carefully. Checklist requirements before arrest in matrimonial cases. The principle extends to Dowry Prohibition Act prosecutions.",
            },
            {
              name: "Gian Singh v. State of Punjab",
              citation: "(2012) 10 SCC 303",
              court: "Supreme Court of India",
              year: 2012,
              ratio:
                "Non-compoundable offences in matrimonial cases can be quashed by the High Court under Section 482 CrPC (now Section 528 BNSS) where there is a genuine settlement and continued prosecution would be oppressive.",
            },
          ],
          scenarios: [
            {
              title: "Couple reconciles after a Section 4 FIR",
              setup:
                "An FIR under Section 4 + Section 84 BNS is registered. Six months later, the parties reconcile and want to withdraw.",
              outcome:
                "Section 8(2) makes it non-compoundable. The parties cannot settle out of court. The only route is a quashing petition before the High Court under Section 528 BNSS, citing Gian Singh principles. The High Court may quash if genuinely satisfied.",
              appliesUnder: "Section 8(2)",
            },
          ],
          faq: [
            {
              q: "Why are dowry offences not bailable?",
              a: "The 1986 amendment escalated the offence to non-bailable to signal Parliament's seriousness and to give victims immediate protection. In practice, courts grant bail liberally in non-violent dowry cases following Arnesh Kumar.",
            },
            {
              q: "Why are dowry offences non-compoundable?",
              a: "To prevent powerful in-law families from coercing or paying off the bride and her family to withdraw. The non-compoundable classification keeps the matter in the State's hands.",
            },
          ],
          source: { pdfPath: SOURCE_BASE, pdfFile: SOURCE_FILE, pdfPage: 3 },
        },

        {
          number: "8A",
          label: "Section 8A",
          marginalNote: "Burden of proof in certain cases",
          importance: "core",
          verbatim:
            "Where any person is prosecuted for taking or abetting the taking of any dowry under section 3, or the demanding of dowry under section 4, the burden of proving that he had not committed an offence under those sections shall be on him.",
          plainEnglish:
            "Section 8A — inserted in 1986 — is the reverse-burden clause and the procedural punch of the Act. In an ordinary criminal trial, the prosecution must prove every element beyond reasonable doubt. Under Section 8A, once the prosecution shows the basic facts of a Section 3 (taking / abetting) or Section 4 (demanding) prosecution, the burden shifts to the accused to prove that he did not commit the offence.\n\nThe practical effect: the accused must produce documentary evidence (presents list under Section 3(2), bank statements, correspondence) and witness testimony to negate the allegation. Silence or denial alone is no defence.\n\nThe Supreme Court has held the reverse-burden constitutional on the ground that the legislation deals with a social evil otherwise impossible to prove in the secret confines of a matrimonial relationship. The standard the accused must meet is preponderance of probabilities — not proof beyond reasonable doubt.",
          visuals: [
            {
              kind: "callout",
              tone: "warning",
              title: "Reverse burden — and why it matters",
              body:
                "Section 8A is one of the few reverse-burden clauses in Indian criminal law. Once the prosecution shows the basic ingredients, the accused must affirmatively prove innocence. Plead the presents-list, produce bank records, summon witnesses.",
            },
          ],
          scenarios: [
            {
              title: "Mother-in-law denies a Section 4 demand",
              setup:
                "Wife alleges in a Section 4 complaint that the mother-in-law made repeated demands for cash. The mother-in-law denies. Wife produces a WhatsApp message.",
              outcome:
                "Under Section 8A, once the prosecution shows the basic ingredient (demand), the burden shifts to the mother-in-law to prove she did not make the demand. A bare denial does not suffice; she must adduce affirmative evidence — phone forensics, witnesses, alibi.",
              appliesUnder: "Section 8A read with Section 4",
            },
          ],
          faq: [
            {
              q: "Is Section 8A constitutional?",
              a: "Yes. The Supreme Court has upheld reverse-burden clauses in social-welfare legislation. Section 8A is constitutional because dowry demands typically happen in private and the prosecution would otherwise be at an impossible evidentiary disadvantage.",
            },
            {
              q: "What standard must the accused meet?",
              a: "Preponderance of probabilities — same as in civil cases. The accused does not have to prove innocence beyond reasonable doubt; he has to make it more probable than not that he did not commit the offence.",
            },
          ],
          source: { pdfPath: SOURCE_BASE, pdfFile: SOURCE_FILE, pdfPage: 3 },
        },

        {
          number: "8B",
          label: "Section 8B",
          marginalNote: "Dowry Prohibition Officers",
          importance: "operative",
          verbatim:
            "(1) The State Government may appoint as many Dowry Prohibition Officers as it thinks fit and specify the areas in respect of which they shall exercise their jurisdiction and powers under this Act.\n\n(2) Every Dowry Prohibition Officer shall exercise and perform the following powers and functions, namely:—\n\n(a) to see that the provisions of this Act are complied with;\n\n(b) to prevent, as far as possible, the taking or abetting the taking of, or the demanding of, dowry;\n\n(c) to collect such evidence as may be necessary for the prosecution of persons committing offences under the Act; and\n\n(d) to perform such additional functions as may be assigned to him by the State Government, or as may be specified in the rules made under this Act.\n\n(3) The State Government may, by notification in the Official Gazette, confer such powers of a police officer as may be specified in the notification on the Dowry Prohibition Officer who shall exercise such powers subject to such limitations and conditions as may be specified by rules made under this Act.\n\n(4) The State Government may, for the purpose of advising and assisting Dowry Prohibition Officers in the efficient performance of their functions under this Act, appoint an advisory board consisting of not more than five social welfare workers (out of whom at least two shall be women) from the area in respect of which such Dowry Prohibition Officer exercises jurisdiction under sub-section (1).",
          plainEnglish:
            "Section 8B — inserted in 1984 — created a dedicated administrative cadre. State Governments appoint Dowry Prohibition Officers (DPOs) for areas they specify. Sub-section (2) sets four broad functions: (a) ensure compliance with the Act, (b) prevent taking / abetting / demanding of dowry, (c) collect evidence for prosecution, and (d) any additional functions notified by the State Government or in the rules.\n\nSub-section (3) allows the State to confer specified police powers on a DPO by Gazette notification, subject to rule-imposed limitations. So a DPO can be empowered to record statements, search and seize evidence — depending on the State's rule framework.\n\nSub-section (4) requires an advisory board of up to five social welfare workers (at least two women) per DPO area, to advise and assist. This is the community oversight layer.\n\nIn practice, DPOs have been notified unevenly across States. Where they exist (e.g., Tamil Nadu, Andhra Pradesh, Karnataka), they are often combined with the State Women and Child Welfare cadre or the Protection Officer role under the DV Act, 2005.",
          scenarios: [
            {
              title: "DPO investigates a wedding-side complaint",
              setup:
                "A neighbour files a complaint with the District DPO that a high-value wedding has been arranged with an expected ₹50 lakh dowry. The wedding is two weeks away.",
              outcome:
                "Under Section 8B(2)(b) and (c), the DPO can investigate, collect evidence and warn both families. If the State has notified police powers under Section 8B(3), the DPO can also record statements. If the dowry exchange is detected, prosecution under Section 3 / 4 follows.",
              appliesUnder: "Section 8B(2)",
            },
          ],
          faq: [
            {
              q: "Are DPOs functioning across India?",
              a: "Coverage is uneven. Tamil Nadu, Andhra Pradesh and Karnataka have functional DPO cadres. Many States have notified DPOs but rarely use them in practice; the Section 4 / Section 84 BNS combination through the police remains the dominant enforcement route.",
            },
            {
              q: "Can a DPO arrest a person?",
              a: "Only if the State has specifically conferred police powers under Section 8B(3) and only within the scope of the Gazette notification and the rules. Independent arrest power without such notification does not flow from Section 8B itself.",
            },
          ],
          source: { pdfPath: SOURCE_BASE, pdfFile: SOURCE_FILE, pdfPage: 4 },
        },

        {
          number: "9",
          label: "Section 9",
          marginalNote: "Power to make rules",
          importance: "operative",
          verbatim:
            "(1) The Central Government may, by notification in the Official Gazette, make rules for carrying out the purposes of this Act.\n\n(2) In particular, and without prejudice to the generality of the foregoing power, such rules may provide for—\n\n(a) the form and manner in which, and the persons by whom, any list of presents referred to in sub-section (2) of section 3 shall be maintained and all other matters connected therewith; and\n\n(b) the better co-ordination of policy and action with respect to the administration of this Act.\n\n(3) Every rule made under this section shall be laid as soon as may be after it is made before each House of Parliament while it is in session for a total period of thirty days which may be comprised in one session or in two or more successive sessions, and if, before the expiry of the session immediately following the session or the successive sessions aforesaid, both Houses agree in making any modification in the rule or both Houses agree that the rule should not be made, the rule shall thereafter have effect only in such modified form or be of no effect, as the case may be, so however that any such modification or annulment shall be without prejudice to the validity of anything previously done under that rule.",
          plainEnglish:
            "Section 9 is the Central Government's rule-making power. Sub-section (1) is the general clause; sub-section (2) lists two specific subjects — the form and maintenance of presents lists under Section 3(2), and the better co-ordination of policy and administration.\n\nThe most important rules under Section 9 are the Dowry Prohibition (Maintenance of Lists of Presents to the Bride and Bridegroom) Rules, 1985. These prescribe the form of the list, the timing, the signatures required from both parties, and the persons who must maintain custody. Without the list, the Section 3(2) safe harbour for non-demanded gifts at the marriage is unavailable.\n\nSub-section (3) is the standard parliamentary-laying clause — every rule must be laid before both Houses for 30 days; modifications or annulments by both Houses prevail; but actions already taken under the rule are validated.",
          crossRefs: [
            {
              statute: "Dowry Prohibition (Maintenance of Lists of Presents to the Bride and Bridegroom) Rules, 1985",
              section: "—",
              note: "The principal Central rules under Section 9 — prescribe form, timing and signature requirements for the presents list under Section 3(2).",
            },
          ],
          scenarios: [
            {
              title: "Family wants to know exactly what to record",
              setup:
                "A bride's family wants to give the bride personal jewellery worth ₹4 lakh and is told they must 'maintain a list under the rules'.",
              outcome:
                "Under the 1985 Rules, the list must be in writing, must contain a description of each present, its approximate value, the name of the giver, and the name of the recipient (bride or bridegroom). It must be prepared at or about the time of the marriage and signed by the bride and bridegroom (and their parents / guardians if either is a minor). Maintained correctly, the list anchors the Section 3(2) safe harbour.",
              appliesUnder: "Section 9 read with the 1985 Rules",
            },
          ],
          faq: [
            {
              q: "Are the 1985 Rules still in force?",
              a: "Yes. They have been amended occasionally but remain the principal rules under Section 9. Compliance with them is the legal foundation of the Section 3(2) safe harbour.",
            },
          ],
          source: { pdfPath: SOURCE_BASE, pdfFile: SOURCE_FILE, pdfPage: 4 },
        },

        {
          number: "10",
          label: "Section 10",
          marginalNote: "Power of the State Government to make rules",
          importance: "operative",
          verbatim:
            "(1) The State Government may, by notification in the Official Gazette, make rules for carrying out the purposes of this Act.\n\n(2) In particular, and without prejudice to the generality of the foregoing power, such rules may provide for all or any of the following matters, namely:—\n\n(a) the additional functions to be performed by the Dowry Prohibition Officers under sub-section (2) of section 8B;\n\n(b) limitations and conditions subject to which a Dowry Prohibition Officer may exercise his functions under sub-section (3) of section 8B.\n\n(3) Every rule made by the State Government under this section shall be laid as soon as may be after it is made before the State Legislature.",
          plainEnglish:
            "Section 10 — substituted by the 1986 amendment — is the State Government's rule-making power. It complements Section 9 (Central rules). Sub-section (1) is the general clause; sub-section (2) specifies two particular subjects, both connected to DPOs: (a) additional functions under Section 8B(2)(d), and (b) limitations / conditions for the DPO's exercise of conferred police powers under Section 8B(3).\n\nSub-section (3) requires every State rule to be laid before the State Legislature 'as soon as may be' — the State counterpart of the Section 9(3) parliamentary-laying clause. The procedure for legislative scrutiny is a matter for State legislative practice; it is normally less elaborate than the 30-day Central scheme.",
          scenarios: [
            {
              title: "State notifies a DPO with limited search powers",
              setup:
                "Karnataka issues a Gazette notification under Section 8B(3) conferring on the DPO of Bengaluru 'powers of a police officer for the purpose of recording statements and inspecting documents, subject to the conditions in the State Rules'.",
              outcome:
                "The notification is valid under Section 8B(3) read with Section 10(2)(b). The State must also have laid the rules before the Karnataka Legislature under Section 10(3). The DPO can record statements and inspect documents; he cannot arrest unless the notification expressly says so.",
              appliesUnder: "Section 10(2)(b) read with Section 8B(3)",
            },
          ],
          faq: [
            {
              q: "What is the practical effect of laying State rules before the Legislature?",
              a: "It ensures political accountability — the Legislature can amend or repeal a rule that is unwise or oppressive. In practice, State Legislatures rarely modify rules; the laying provision is mostly a constitutional formality.",
            },
            {
              q: "Why does the Act have both Central rules (Section 9) and State rules (Section 10)?",
              a: "Because dowry sits at the intersection of central legislation and State-level administration. Central rules govern the substantive presents-list scheme; State rules govern the operational reach of DPOs, who are State Government functionaries.",
            },
          ],
          source: { pdfPath: SOURCE_BASE, pdfFile: SOURCE_FILE, pdfPage: 4 },
        },
      ],

      scenarios: [
        {
          title: "Post-wedding harassment escalates over five years",
          setup:
            "After a 2019 wedding, the husband and his family repeatedly demand cash and a flat over five years. The wife is also subjected to physical cruelty. In 2024, she files an FIR.",
          outcome:
            "The FIR can invoke Section 4 (demand) and Section 84 BNS (cruelty). Section 8 makes the offences non-bailable and non-compoundable. Section 7(2) means the 5-year delay does not bar the case. Section 8A reverses the burden — the accused must prove no demand was made. The prosecution can also lodge Section 6 if any dowry was given and not transferred. If the State has notified a DPO under Section 8B, the DPO can collect supporting evidence.",
          appliesUnder: "Sections 4, 6, 7, 8, 8A, 8B",
        },
      ],
      faq: [
        {
          q: "How does the Act interact with Section 80 BNS / Section 304B IPC (dowry death)?",
          a: "The two regimes work in tandem. The 1961 Act provides the definition of 'dowry' (Section 2) and criminalises the giving / taking / demanding (Sections 3, 4). Section 80 BNS (replacing Section 304B IPC) is the dowry-death offence — it punishes the husband / in-laws if a married woman dies within 7 years in unnatural circumstances and there is evidence of cruelty or harassment in connection with a dowry demand. The 1961 Act's Section 4 demand is the evidentiary anchor of a Section 80 BNS prosecution.",
        },
        {
          q: "How does the Act interact with the Protection of Women from Domestic Violence Act, 2005?",
          a: "The DV Act provides civil remedies — protection orders, residence orders, monetary relief, custody — for any 'aggrieved person' in a domestic relationship. Dowry-related harassment is squarely within 'economic abuse' under Section 3 of the DV Act. So a wife typically files DV Act applications alongside the criminal prosecution under this Act.",
        },
        {
          q: "Why are conviction rates under the Act low?",
          a: "Because (i) dowry transactions happen in private, often documented only in the woman's own narrative; (ii) family pressure leads many women to settle informally; (iii) the police often combine charges with Section 84 BNS (cruelty) and pursue the latter; and (iv) trial delays are long. Section 8A's reverse burden helps but does not fully overcome these structural factors.",
        },
      ],
    },
  ],
};
