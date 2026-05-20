/**
 * The Hindu Succession Act, 1956 — Act No. 30 of 1956.
 *
 * Phase 2 coverage: MVP (verbatim + 1-line summary + source PDF page per
 * section). Every operative section is authored; the omitted §§23–24 and
 * repealed §31 are listed for completeness.
 *
 * Source PDF: c:/Users/Debabrata Barman/Documents/The law & order/
 *   Family & Personal Laws/Hindu Succession Act 1956.pdf
 * Raw extract: lib/statutes/_raw/hindu-succession-act-1956.txt
 */

import type { Statute } from "../_types";

const SOURCE_BASE =
  "/pdfs/Family%20%26%20Personal%20Laws/Hindu%20Succession%20Act%201956.pdf";
const SOURCE_FILE = "Hindu Succession Act 1956.pdf";

const src = (page: number, pageEnd?: number) => ({
  pdfPath: `${SOURCE_BASE}#page=${page}`,
  pdfFile: SOURCE_FILE,
  pdfPage: page,
  ...(pageEnd ? { pdfPageEnd: pageEnd } : {}),
});

export const hinduSuccessionAct1956: Statute = {
  meta: {
    slug: "hindu-succession-act-1956",
    shortName: "Hindu Succession Act",
    fullName: "The Hindu Succession Act, 1956",
    year: 1956,
    sanskrit: "हिन्दू उत्तराधिकार अधिनियम",
    tagline: "Who inherits — for Hindu families.",
    summary:
      "Act 30 of 1956 — codifies intestate succession among Hindus, Buddhists, Jainas and Sikhs. Defines Class I and Class II heirs (in the Schedule), abolished limited 'stridhana' to make every female Hindu an absolute owner under §14, and — after the landmark 2005 amendment — gave daughters equal coparcenary rights by birth under the recast §6. Covers special tarwad/aliyasantana rules, disqualifications (murderer, convert's descendants), testamentary disposition under §30 and escheat to the State under §29.",
    preamble:
      "An Act to amend and codify the law relating to intestate succession among Hindus.",
    categorySlug: "family-and-personal-laws",
    enactedOn: "1956-06-17",
    commencement: "17 June 1956 (date of assent).",
    totalSections: 30,
    totalChapters: 4,
    sourcePdf: { pdfPath: SOURCE_BASE, pdfFile: SOURCE_FILE, pdfPage: 1 },
    coverage: "mvp",
    tier: 1,
    amendments: [
      { year: 2005, shortName: "Hindu Succession (Amendment) Act, 2005 (Act 39 of 2005)", note: "Recast §6 to make daughters coparceners by birth equal to sons; omitted §§23 (dwelling-house) and 24 (widow remarrying)." },
      { year: 2019, shortName: "Act 34 of 2019 (J&K Reorganisation)", note: "Removed J&K exclusion from §1(2); Act now extends to the whole of India." },
    ],
  },

  chapters: [
    // ============================================================
    // Chapter I — Preliminary
    // ============================================================
    {
      slug: "ch-1-preliminary",
      number: "I",
      title: "Preliminary",
      range: ["1", "4"],
      intro:
        "Four foundational sections. §1 names the Act and extends it across India. §2 defines who is a 'Hindu' for this Act (same religion-and-domicile test as the Hindu Marriage Act, 1955). §3 carries the dictionary — 'agnate', 'cognate', 'heir', 'intestate', 'full/half/uterine blood', plus special definitions for marumakkattayam, aliyasantana and nambudri laws. §4 sweeps away pre-1956 Hindu law and inconsistent statutes.",
      sections: [
        {
          number: "1",
          label: "Section 1",
          marginalNote: "Short title and extent",
          source: src(3),
          summary:
            "Names the Act and extends it to the whole of India.",
          verbatim: `(1) This Act may be called the Hindu Succession Act, 1956.

(2) It extends to the whole of India.`,
        },
        {
          number: "2",
          label: "Section 2",
          marginalNote: "Application of Act",
          source: src(3),
          summary:
            "Applies to Hindus, Buddhists, Jainas and Sikhs (by religion, upbringing or conversion); excludes Muslims, Christians, Parsis and Jews; Scheduled Tribes only if the Centre notifies.",
          verbatim: `(1) This Act applies—
(a) to any person, who is a Hindu by religion in any of its forms or developments, including a Virashaiva, a Lingayat or a follower of the Brahmo, Prarthana or Arya Samaj,
(b) to any person who is a Buddhist, Jaina or Sikh by religion, and
(c) to any other person who is not a Muslim, Christian, Parsi or Jew by religion, unless it is proved that any such person would not have been governed by the Hindu law or by any custom or usage as part of that law in respect of any of the matters dealt with herein if this Act had not been passed.

Explanation.—The following persons are Hindus, Buddhists, Jainas or Sikhs by religion, as the case may be:—
(a) any child, legitimate or illegitimate, both of whose parents are Hindus, Buddhists, Jainas or Sikhs by religion;
(b) any child, legitimate or illegitimate, one of whose parents is a Hindu, Buddhist, Jaina or Sikh by religion and who is brought up as a member of the tribe, community, group or family to which such parent belongs or belonged;
(c) any person who is a convert or reconvert to the Hindu, Buddhist, Jaina or Sikh religion.

(2) Notwithstanding anything contained in sub-section (1), nothing contained in this Act shall apply to the members of any Scheduled Tribe within the meaning of clause (25) of article 366 of the Constitution unless the Central Government, by notification in the Official Gazette, otherwise directs.

(3) The expression "Hindu" in any portion of this Act shall be construed as if it included a person who, though not a Hindu by religion, is, nevertheless, a person to whom this Act applies by virtue of the provisions contained in this section.`,
        },
        {
          number: "3",
          label: "Section 3",
          marginalNote: "Definitions and interpretation",
          source: src(3, 4),
          summary:
            "The Act's dictionary — agnate (related through males only), cognate (related not wholly through males), heir, intestate, full/half/uterine blood, marumakkattayam, aliyasantana, nambudri and the meaning of 'related' (legitimate kinship, with mother-line legitimacy for non-marital children).",
          verbatim: `(1) In this Act, unless the context otherwise requires,—
(a) "agnate"—one person is said to be an "agnate" of another if the two are related by blood or adoption wholly through males;
(b) "aliyasantana law" means the system of law applicable to persons who, if this Act had not been passed, would have been governed by the Madras Aliyasantana Act, 1949, (Madras Act 9 of 1949) or by the customary aliyasantana law with respect to the matters for which provision is made in this Act;
(c) "cognate"—one person is said to be a "cognate" of another if the two are related by blood or adoption but not wholly through males;
(d) the expressions "custom" and "usage" signify any rule which, having been continuously and uniformly observed for a long time, has obtained the force of law among Hindus in any local area, tribe, community, group or family:
Provided that the rule is certain and not unreasonable or opposed to public policy: and
Provided further that in the case of a rule applicable only to a family it has not been discontinued by the family;
(e) full blood "half blood" and "uterine blood"—
(i) two persons are said to be related to each other by full blood when they are descended from a common ancestor by the same wife, and by half blood when they are descended from a common ancestor but by different wives;
(ii) two persons are said to be related to each other by uterine blood when they are descended from a common ancestress but by different husbands;
Explanation.—In this clause "ancestor" includes the father and "ancestress" the mother;
(f) "heir" means any person, male or female, who is entitled to succeed to the property of an intestate under this Act;
(g) "intestate"—a person is deemed to die intestate in respect of property of which he or she has not made a testamentary disposition capable of taking effect;
(h) "marumakkattayam law" means the system of law applicable to persons—
(a) who, if this Act had not been passed, would have been governed by the Madras Marumakkattayam Act, 1932 (Madras Act 22 of 1933); the Travancore Nayar Act (2 of 1100K); the Travancore Ezhava Act (3 of 1100K); the Travancore Nanjinad Vellala Act (6 of 1101K); the Travancore Kshatriya Act (7 of 1108K); the Travancore Krishnanvaka Marumakkathayee (Act 7 of 1115K); the Cochin Marumakkathayam Act (33 of 1113K); or the Cochin Nayar Act (29 of 1113K); with respect to the matters for which provision is made in this Act; or
(b) who belong to any community, the members of which are largely domiciled in the State of Travancore Cochin or Madras as it existed immediately before the 1st November, 1956, and who, if this Act had not been passed, would have been governed with respect to the matters for which provision is made in this Act by any system of inheritance in which descent is traced through the female line;
but does not include the aliyasantana law;
(i) "nambudri law" means the system of law applicable to persons who, if this Act had not been passed, would have been governed by the Madras Nambudri Act, 1932 Madras Act (21 of 1933); the Cochin Nambudri Act (17 of 111K); or the Travancore Malayala Brahmin Act (3 of 1106K); with respect to the matters for which provision is made in this Act;
(j) "related" means related by legitimate kinship:
Provided that illegitimate children shall be deemed to be related to their mother and to one another, and their legitimate descendants shall be deemed to be related to them and to one another;
and any word expressing relationship or denoting a relative shall be construed accordingly.

(2) In this Act, unless the context otherwise requires, words importing the masculine gender shall not be taken to include females.`,
        },
        {
          number: "4",
          label: "Section 4",
          marginalNote: "Overriding effect of Act",
          source: src(5),
          summary:
            "Sweeps away pre-1956 Hindu law, custom and usage on any matter the Act covers, and overrides every other inconsistent statute then in force in so far as Hindus are concerned.",
          verbatim: `(1) Save as otherwise expressly provided in this Act,—
(a) any text, rule or interpretation of Hindu law or any custom or usage as part of that law in force immediately before the commencement of this Act shall cease to have effect with respect to any matter for which provision is made in this Act;
(b) any other law in force immediately before the commencement of this Act shall cease to apply to Hindus in so far as it is inconsistent with any of the provisions contained in this Act.`,
        },
      ],
    },

    // ============================================================
    // Chapter II — Intestate Succession
    // ============================================================
    {
      slug: "ch-2-intestate-succession",
      number: "II",
      title: "Intestate Succession",
      range: ["5", "29"],
      intro:
        "The substantive heart of the Act. §5 carves out certain estates the Act will not touch. §6 (recast in 2005) makes daughters coparceners by birth in Mitakshara joint family property — equal in right, share and liability to sons. §§7–8 deal with tarwad/aliyasantana property and general male-Hindu succession (Class I → Class II → agnates → cognates, per the Schedule). §§9–13 set the order and rules of distribution among heirs and degrees of relationship. §14 is the famous 'female absolute owner' clause that destroyed limited 'stridhana'. §§15–17 fix succession for a female Hindu and for marumakkattayam/aliyasantana persons. §§18–22 set general rules — full blood preferred, per capita not per stirpes, the unborn child's rights, simultaneous-death presumption, and pre-emption between Class I heirs. §§23–24 stand omitted (2005 amendment). §§25–28 list disqualifications (murderer, convert's descendants) and clarify that disease or defect is not a bar. §29 escheats the property to the Government when there is no qualified heir.",
      sections: [
        {
          number: "5",
          label: "Section 5",
          marginalNote: "Act not to apply to certain properties",
          source: src(5),
          summary:
            "The Act does not apply to property governed by §21 of the Special Marriage Act, 1954 (where the Indian Succession Act applies), single-heir-impartible estates under treaty or pre-1956 statute, or the Valiamma Thampuran Kovilagam Estate/Cochin Palace Fund.",
          verbatim: `This Act shall not apply to—
(i) any property succession to which is regulated by the Indian Succession Act, 1925 (39 of 1925), by reason of the provisions contained in section 21 of the Special Marriage Act, 1954 (43 of 1954);
(ii) any estate which descends to a single heir by the terms of any covenant or agreement entered into by the Ruler of any Indian State with the Government of India or by the terms of any enactment passed before the commencement of this Act;
(iii) the Valiamma Thampuran Kovilagam Estate and the Palace Fund administered by the Palace Administration Board by reason of the powers conferred by Proclamation (IX of 1124) dated 29th June, 1949, promulgated by the Maharaja of Cochin.`,
        },
        {
          number: "6",
          label: "Section 6",
          marginalNote: "Devolution of interest in coparcenary property",
          source: src(5, 6),
          summary:
            "Post-2005, the daughter of a Mitakshara coparcener is a coparcener by birth — equal share, equal rights, equal liability with sons. On death after 9 September 2005, a coparcener's interest devolves by testamentary or intestate succession (not survivorship), notional partition treating daughters equally. Pious-obligation suits against sons for the father's debts are abolished prospectively. Saves pre-20 Dec 2004 dispositions and registered/decree partitions.",
          verbatim: `(1) On and from the commencement of the Hindu Succession (Amendment) Act, 2005 (39 of 2005), in a Joint Hindu family governed by the Mitakshara law, the daughter of a coparcener shall,—
(a) by birth become a coparcener in her own right the same manner as the son;
(b) have the same rights in the coparcenery property as she would have had if she had been a son;
(c) be subject to the same liabilities in respect of the said coparcenery property as that of a son,
and any reference to a Hindu Mitakshara coparcener shall be deemed to include a reference to a daughter of a coparcener:
Provided that nothing contained in this sub-section shall affect or invalidate any disposition or alienation including any partition or testamentary disposition of property which had taken place before the 20th day of December, 2004.

(2) Any property to which a female Hindu becomes entitled by virtue of sub-section (1) shall be held by her with the incidents of coparcenary ownership and shall be regarded, notwithstanding anything contained in this Act or any other law for the time being in force, as property capable of being disposed of by her by testamentary disposition.

(3) Where a Hindu dies after the commencement of the Hindu Succession (Amendment) Act, 2005 (39 of 2005), his interest in the property of a Joint Hindu family governed by the Mitakshara law, shall devolve by testamentary or intestate succession, as the case may be, under this Act and not by survivorship, and the coparcenery property shall be deemed to have been divided as if a partition had taken place and,—
(a) the daughter is allotted the same share as is allotted to a son;
(b) the share of the pre-deceased son or a pre-deceased daughter, as they would have got had they been alive at the time of partition, shall be allotted to the surviving child of such pre-deceased son or of such pre-deceased daughter; and
(c) the share of the pre-deceased child of a pre-deceased son or of a pre-deceased daughter, as such child would have got had he or she been alive at the time of the partition, shall be allotted to the child of such pre-deceased child of the pre-deceased son or a pre-deceased daughter, as the case may be.

Explanation.—For the purposes of this sub-section, the interest of a Hindu Mitakshara coparcener shall be deemed to be the share in the property that would have been allotted to him if a partition of the property had taken place immediately before his death, irrespective of whether he was entitled to claim partition or not.

(4) After the commencement of the Hindu Succession (Amendment) Act, 2005 (39 of 2005), no court shall recognise any right to proceed against a son, grandson or great-grandson for the recovery of any debt due from his father, grandfather or great-grandfather solely on the ground of the pious obligation under the Hindu law, of such son, grandson or great-grandson to discharge any such debt:
Provided that in the case of any debt contracted before the commencement of the Hindu Succession (Amendment) Act, 2005 (39 of 2005), nothing contained in this sub-section shall affect—
(a) the right of any creditor to proceed against the son, grandson or great-grandson, as the case may be; or
(b) any alienation made in respect of or in satisfaction of, any such debt, and any such right or alienation shall be enforceable under the rule of pious obligation in the same manner and to the same extent as it would have been enforceable as if the Hindu Succession (Amendment) Act, 2005 (39 of 2005) had not been enacted.
Explanation.—For the purposes of clause (a), the expression "son", "grandson" or "great-grandson" shall be deemed to refer to the son, grandson or great-grandson, as the case may be, who was born or adopted prior to the commencement of the Hindu Succession (Amendment) Act, 2005 (39 of 2005).

(5) Nothing contained in this section shall apply to a partition, which has been effected before the 20th day of December, 2004.
Explanation.—For the purposes of this section "partition" means any partition made by execution of a deed of partition duly registered under the Registration Act, 1908 (16 of 1908) or partition effected by a decree of a court.`,
        },
        {
          number: "7",
          label: "Section 7",
          marginalNote: "Devolution of interest in the property of a tarwad, tavazhi, kutumba, kavaru or illom",
          source: src(7, 8),
          summary:
            "For Hindus who would have been governed by marumakkattayam, nambudri or aliyasantana law, the interest in tarwad/tavazhi/illom/kutumba/kavaru property devolves under this Act, treating the deceased as having got a per-capita share immediately before death; sthanam property devolves on the family and the sthanamdar's heirs as if partitioned per-capita.",
          verbatim: `(1) When a Hindu to whom the marumakkattayam or nambudri law would have applied if this Act had not been passed dies after the commencement of this Act, having at the time of his or her death an interest in the property of a tarwad, tavazhi or illom, as the case may be, his or her interest in the property shall devolve by testamentary or intestate succession, as the case may be, under this Act and not according to the marumakkattayam or nambudri law.
Explanation.—For the purposes of this sub-section, the interest of a Hindu in the property of a tarwad, tavazhi or illom shall be deemed to be the share in the property of the tarwad, tavazhi or illom, as the case may be, that would have fallen to him or her if a partition of that property per capita had been made immediately before his or her death among all the members of the tarwad, tavazhi or illom, as the case may be, then living, whether he or she was entitled to claim such partition or not under the marumakkattayam or nambudri law applicable to him or her, and such share shall be deemed to have been allotted to him or her absolutely.

(2) When a Hindu to whom the aliyasantana law would have applied if this Act had not been passed dies after the commencement of this Act, having at the time of his or her death an undivided interest in the property of a kutumba or kavaru, as the case may be, his or her interest in the property shall devolve by testamentary or intestate succession, as the case may be, under this Act and not according to the aliyasantana law.
Explanation.—For the purposes of this sub-section, the interest of a Hindu in the property of a kutumba or kavaru shall be deemed to be the share in the property of the kutumba or kavaru, as the case may be, that would have fallen to him or her if a partition of that property per capita had been made immediately before his or her death among all the members of the kutumba or kavaru, as the case may be, then living, whether he or she was entitled to claim such partition or not under the aliyasantana law, and such share shall be deemed to have been allotted to him or her absolutely.

(3) Notwithstanding anything contained in sub-section (1), when a sthanamdar dies after the commencement of this Act, the sthanam property held by him shall devolve upon the members of the family to which the sthanamdar belonged and the heirs of the sthanamdar as if the sthanam property had been divided per capita immediately before the death of the sthanamdar among himself and all the members of his family then living, and the shares falling to the members of his family and the heirs of the sthanamdar shall be held by them as their separate property.
Explanation.—For the purposes of this sub-section, the family of a sthanamdar shall include every branch of that family, whether divided or undivided, the male members of which would have been entitled by any custom or usage to succeed to the position of sthanamdar if this Act had not been passed.`,
        },
        {
          number: "8",
          label: "Section 8",
          marginalNote: "General rules of succession in the case of males",
          source: src(8),
          summary:
            "A male Hindu's intestate property devolves first on Class I heirs of the Schedule, failing which on Class II heirs, then on agnates, and lastly on cognates.",
          verbatim: `The property of a male Hindu dying intestate shall devolve according to the provisions of this Chapter:—
(a) firstly, upon the heirs, being the relatives specified in class I of the Schedule;
(b) secondly, if there is no heir of class I, then upon the heirs, being the relatives specified in class II of the Schedule;
(c) thirdly, if there is no heir of any of the two classes, then upon the agnates of the deceased; and
(d) lastly, if there is no agnate, then upon the cognates of the deceased.`,
        },
        {
          number: "9",
          label: "Section 9",
          marginalNote: "Order of succession among heirs in the Schedule",
          source: src(8),
          summary:
            "All Class I heirs take simultaneously and exclude every other heir; within Class II, an earlier entry is preferred to a later one.",
          verbatim: `Among the heirs specified in the Schedule, those in class I shall take simultaneously and to the exclusion of all other heirs; those in the first entry in class II shall be preferred to those in the second entry; those in the second entry shall be preferred to those in the third entry; and so on in succession.`,
        },
        {
          number: "10",
          label: "Section 10",
          marginalNote: "Distribution of property among heirs in class I of the Schedule",
          source: src(8, 9),
          summary:
            "Class I distribution rules — widow(s) take one share; surviving sons, daughters and the mother each take one share; the branch of each pre-deceased son or daughter takes one combined share, distributed equally within the branch.",
          verbatim: `The property of an intestate shall be divided among the heirs in class I of the Schedule in accordance with the following rules:—
Rule 1.—The intestate's widow, or if there are more widows than one, all the widows together, shall take one share.
Rule 2.—The surviving sons and daughters and the mother of the intestate shall each take one share.
Rule 3.—The heirs in the branch of each pre-deceased son or each pre-deceased daughter of the intestate shall take between them one share.
Rule 4.—The distribution of the share referred to in Rule 3—
(i) among the heirs in the branch of the pre-deceased son shall be so made that his widow (or widows together) and the surviving sons and daughters get equal portions; and the branch of his pre-deceased sons gets the same portion;
(ii) among the heirs in the branch of the pre-deceased daughter shall be so made that the surviving sons and daughters get equal portions.`,
        },
        {
          number: "11",
          label: "Section 11",
          marginalNote: "Distribution of property among heirs in class II of the Schedule",
          source: src(9),
          summary:
            "Within any one entry of Class II of the Schedule, heirs share the property equally.",
          verbatim: `The property of an intestate shall be divided between the heirs specified in any one entry in class II of the Schedule so that they share equally.`,
        },
        {
          number: "12",
          label: "Section 12",
          marginalNote: "Order of succession among agnates and cognates",
          source: src(9),
          summary:
            "Among agnates or cognates: prefer the heir with fewer (or no) degrees of ascent; if tied, prefer fewer (or no) degrees of descent; if still tied, take simultaneously.",
          verbatim: `The order of succession among agnates or cognates, as the case may be, shall be determined in accordance with the rules of preference laid down hereunder:—
Rule 1.—Of two heirs, the one who has fewer or no degrees of ascent is preferred.
Rule 2.—Where the number of degrees of ascent is the same or none, that heir is preferred who has fewer or no degrees of descent.
Rule 3.—Where neither heir is entitled to be preferred to the other under Rule 1 or Rule 2 they take simultaneously.`,
        },
        {
          number: "13",
          label: "Section 13",
          marginalNote: "Computation of degrees",
          source: src(9),
          summary:
            "Relationship is reckoned from intestate to heir in degrees of ascent, descent or both; both are computed inclusive of the intestate, and every generation counts as one degree.",
          verbatim: `(1) For the purposes of determining the order of succession among agnates or cognates, relationship shall be reckoned from the intestate to the heir in terms of degrees of ascent or degrees of descent or both, as the case may be.

(2) Degrees of ascent and degrees of descent shall be computed inclusive of the intestate.

(3) Every generation constitutes a degree either ascending or descending.`,
        },
        {
          number: "14",
          label: "Section 14",
          marginalNote: "Property of a female Hindu to be her absolute property",
          source: src(9),
          summary:
            "Every property possessed by a female Hindu — inherited, partition share, maintenance, gift, earnings, stridhana, or any source — is held by her as full absolute owner, not a limited owner; restricted estates created by gift, will, decree or award remain limited.",
          verbatim: `(1) Any property possessed by a female Hindu, whether acquired before or after the commencement of this Act, shall be held by her as full owner thereof and not as a limited owner.
Explanation.—In this sub-section, "property" includes both movable and immovable property acquired by a female Hindu by inheritance or devise, or at a partition, or in lieu of maintenance or arrears of maintenance, or by gift from any person, whether a relative or not, before, at or after her marriage, or by her own skill or exertion, or by purchase or by prescription, or in any other manner whatsoever, and also any such property held by her as stridhana immediately before the commencement of this Act.

(2) Nothing contained in sub-section (1) shall apply to any property acquired by way of gift or under a will or any other instrument or under a decree or order of a civil court or under an award where the terms of the gift, will or other instrument or the decree, order or award prescribe a restricted estate in such property.`,
        },
        {
          number: "15",
          label: "Section 15",
          marginalNote: "General rules of succession in the case of female Hindus",
          source: src(9, 10),
          summary:
            "A female Hindu's intestate property devolves on (a) children + pre-deceased children's children + husband; (b) heirs of the husband; (c) parents; (d) heirs of the father; (e) heirs of the mother. Parental-source property goes back to father's heirs in absence of own children; husband/father-in-law-source property goes back to husband's heirs.",
          verbatim: `(1) The property of a female Hindu dying intestate shall devolve according to the rules set out in section 16,—
(a) firstly, upon the sons and daughters (including the children of any pre-deceased son or daughter) and the husband;
(b) secondly, upon the heirs of the husband;
(c) thirdly, upon the mother and father;
(d) fourthly, upon the heirs of the father; and
(e) lastly, upon the heirs of the mother.

(2) Notwithstanding anything contained in sub-section (1),—
(a) any property inherited by a female Hindu from her father or mother shall devolve, in the absence of any son or daughter of the deceased (including the children of any pre-deceased son or daughter) not upon the other heirs referred in sub-section (1) in the order specified therein, but upon the heirs of the father; and
(b) any property inherited by a female Hindu from her husband or from her father-in-law shall devolve, in the absence of any son or daughter of the deceased (including the children of any pre-deceased son or daughter) not upon the other heirs referred to in sub-section (1) in the order specified therein, but upon the heirs of the husband.`,
        },
        {
          number: "16",
          label: "Section 16",
          marginalNote: "Order of succession and manner of distribution among heirs of a female Hindu",
          source: src(10),
          summary:
            "Earlier §15(1) entries are preferred to later ones; same-entry heirs take simultaneously; pre-deceased son/daughter's children take their parent's share between them; succession through husband/father/mother heirs follows the rules applicable to that source as if the source-relative had died intestate immediately after the female intestate.",
          verbatim: `The order of succession among the heirs referred to in section 15 shall be, and the distribution of the intestate's property among those heirs shall take place according to the following rules, namely:—
Rule 1.—Among the heirs specified in sub-section (1) of section 15, those in one entry shall be preferred to those in any succeeding entry, and those included in the same entry shall take simultaneously.
Rule 2.—If any son or daughter of the intestate had pre-deceased the intestate leaving his or her own children alive at the time of the intestate's death, the children of such son or daughter shall take between them the share which such son or daughter would have taken if living at the intestate's death.
Rule 3.—The devolution of the property of the intestate on the heirs referred to in clauses (b), (d) and (e) of sub-section (1) and in sub-section (2) of section 15 shall be in the same order and according to the same rules as would have applied if the property had been the father's or the mother's or the husband's as the case may be, and such person had died intestate in respect thereof immediately after the intestate's death.`,
        },
        {
          number: "17",
          label: "Section 17",
          marginalNote: "Special provisions respecting persons governed by marumakkattayam and aliyasantana laws",
          source: src(10),
          summary:
            "For persons who would have been governed by marumakkattayam or aliyasantana law, §§8, 10, 15 and 23 are read with modifications — male Class III becomes 'relatives, agnates or cognates'; female Hindu order is recast (children + mother → father + husband → mother's heirs → father's heirs → husband's heirs); §15(2)(a) and §23 stand omitted in that application.",
          verbatim: `The provisions of sections 8, 10, 15 and 23 shall have effect in relation to persons who would have been governed by the marumakkattayam law or aliyasantana law if this Act had not been passed as if—
(i) for sub-clauses (c) and (d) of section 8, the following had been substituted, namely:—
"(c) thirdly, if there is no heir of any of the two classes, then upon his relatives, whether agnates or cognates.";
(ii) for clauses (a) to (e) of sub-section (1) of section 15, the following had been substituted, namely:—
"(a) firstly, upon the sons and daughters (including the children of any pre-deceased son or daughter) and the mother;
(b) secondly, upon the father and the husband;
(c) thirdly, upon the heirs of the mother;
(d) fourthly, upon the heirs of the father; and
(e) lastly, upon the heirs of the husband.";
(iii) clause (a) of sub-section (2) of section 15 had been omitted;
(iv) section 23 had been omitted.`,
        },
        {
          number: "18",
          label: "Section 18",
          marginalNote: "Full blood preferred to half blood",
          source: src(10),
          summary:
            "Where the nature of relationship is otherwise the same, heirs related by full blood are preferred to those related by half blood.",
          verbatim: `Heirs related to an intestate by full blood shall be preferred to heirs related by half blood, if the nature of the relationship is the same in every other respect.`,
        },
        {
          number: "19",
          label: "Section 19",
          marginalNote: "Mode of succession of two or more heirs",
          source: src(10),
          summary:
            "When two or more heirs succeed together, they take per capita (not per stirpes) and as tenants-in-common (not joint tenants), unless the Act expressly provides otherwise.",
          verbatim: `If two or more heirs succeed together to the property of an intestate, they shall take the property,—
(a) save as otherwise expressly provided in this Act, per capita and not per stirpes; and
(b) as tenants-in-common and not as joint tenants.`,
        },
        {
          number: "20",
          label: "Section 20",
          marginalNote: "Right of child in womb",
          source: src(10),
          summary:
            "A child who was in the womb at the intestate's death and is later born alive inherits as if born before the death; the inheritance vests retrospectively from the date of death.",
          verbatim: `A child who was in the womb at the time of the death of an intestate and who is subsequently born alive shall have the same right to inherit to the intestate as if he or she had been born before the death of the intestate, and the inheritance shall be deemed to vest in such a case with effect from the date of the death of the intestate.`,
        },
        {
          number: "21",
          label: "Section 21",
          marginalNote: "Presumption in cases of simultaneous deaths",
          source: src(10, 11),
          summary:
            "When two persons die in circumstances making it uncertain who survived whom, the younger is presumed (until the contrary is proved) to have survived the elder for all succession purposes.",
          verbatim: `Where two persons have died in circumstances rendering it uncertain whether either of them, and if so which, survived the other, then, for all purposes affecting succession to property, it shall be presumed, until the contrary is proved, that the younger survived the elder.`,
        },
        {
          number: "22",
          label: "Section 22",
          marginalNote: "Preferential right to acquire property in certain cases",
          source: src(11),
          summary:
            "When two or more Class I heirs inherit an interest in immovable property or a business, and one proposes to transfer it, the other Class I heirs have a preferential right to acquire it; the court fixes consideration in absence of agreement; the highest-bidding heir is preferred.",
          verbatim: `(1) Where, after the commencement of this Act, an interest in any immovable property of an intestate, or in any business carried on by him or her, whether solely or in conjunction with others, devolves upon two or more heirs specified in class I of the Schedule, and any one of such heirs proposes to transfer his or her interest in the property or business, the other heirs shall have a preferential right to acquire the interest proposed to be transferred.

(2) The consideration for which any interest in the property of the deceased may be transferred under this section shall, in the absence of any agreement between the parties, be determined by the court on application being made to it in this behalf, and if any person proposing to acquire the interest is not willing to acquire it for the consideration so determined, such person shall be liable to pay all costs of or incident to the application.

(3) If there are two or more heirs specified in class I of the Schedule proposing to acquire any interest under this section, that heir who offers the highest consideration for the transfer shall be preferred.

Explanation.—In this section, "court" means the court within the limits of whose jurisdiction the immovable property is situate or the business is carried on, and includes any other court which the State Government may, by notification in the Official Gazette, specify in this behalf.`,
        },
        {
          number: "23",
          label: "Section 23",
          marginalNote: "[Special provision respecting dwelling-houses]",
          source: src(11),
          summary:
            "Omitted by the Hindu Succession (Amendment) Act, 2005 with effect from 9 September 2005 — the bar on a female Class I heir's right to claim partition of the family dwelling-house is gone.",
          verbatim: `[Special provision respecting dwelling-houses].—Omitted by the Hindu Succession (Amendment) Act, 2005 (39 of 2005), s. 4 (w.e.f. 9-9-2005).`,
        },
        {
          number: "24",
          label: "Section 24",
          marginalNote: "[Certain widows re-marrying may not inherit as widows]",
          source: src(11),
          summary:
            "Omitted by the Hindu Succession (Amendment) Act, 2005 with effect from 9 September 2005 — the bar on a remarrying son's widow, brother's widow or father's widow inheriting is gone.",
          verbatim: `[Certain widows re-marrying may not inherit as widows].—Omitted by s. 5, ibid. (w.e.f. 9-9-2005).`,
        },
        {
          number: "25",
          label: "Section 25",
          marginalNote: "Murderer disqualified",
          source: src(11),
          summary:
            "A person who commits or abets the murder of the propositus is disqualified from inheriting the deceased's property — or any other property the succession to which is in furtherance of that murder.",
          verbatim: `A person who commits murder or abets the commission of murder shall be disqualified from inheriting the property of the person murdered, or any other property in furtherance of the succession to which he or she committed or abetted the commission of the murder.`,
        },
        {
          number: "26",
          label: "Section 26",
          marginalNote: "Convert's descendants disqualified",
          source: src(11),
          summary:
            "A Hindu's children born after the Hindu converts to another religion (and their descendants) cannot inherit from Hindu relatives — unless they themselves are Hindus at the time succession opens.",
          verbatim: `Where, before or after the commencement of this Act, a Hindu has ceased or ceases to be a Hindu by conversion to another religion, children born to him or her after such conversion and their descendants shall be disqualified from inheriting the property of any of their Hindu relatives, unless such children or descendants are Hindus at the time when the succession opens.`,
        },
        {
          number: "27",
          label: "Section 27",
          marginalNote: "Succession when heir disqualified",
          source: src(11),
          summary:
            "Where an heir is disqualified, the property devolves as if that person had died before the intestate — i.e., the chain skips the disqualified heir and moves to the next heir.",
          verbatim: `If any person is disqualified from inheriting any property under this Act, it shall devolve as if such person had died before the intestate.`,
        },
        {
          number: "28",
          label: "Section 28",
          marginalNote: "Disease, defect, etc., not to disqualify",
          source: src(11),
          summary:
            "No person is disqualified from inheriting on the ground of any disease, defect or deformity — or, except as the Act itself provides, on any other ground.",
          verbatim: `No person shall be disqualified from succeeding to any property on the ground of any disease, defect or deformity, or save as provided in this Act, on any other ground whatsoever.`,
        },
        {
          number: "29",
          label: "Section 29",
          marginalNote: "Failure of heirs",
          source: src(11),
          summary:
            "If an intestate leaves no qualified heir under the Act, the property escheats to the Government, which takes it subject to all the obligations and liabilities the heir would have been subject to.",
          verbatim: `If an intestate has left no heir qualified to succeed to his or her property in accordance with the provisions of this Act, such property shall devolve on the Government; and the Government shall take the property subject to all the obligations and liabilities to which an heir would have been subject.`,
        },
      ],
    },

    // ============================================================
    // Chapter III — Testamentary Succession
    // ============================================================
    {
      slug: "ch-3-testamentary-succession",
      number: "III",
      title: "Testamentary Succession",
      range: ["30", "30"],
      intro:
        "A single section. §30 lets any Hindu dispose of any property capable of being disposed of, by will or other testamentary instrument, under the Indian Succession Act, 1925; the Explanation expressly makes Mitakshara coparcenary interest and tarwad/tavazhi/illom/kutumba/kavaru interests fall within that capacity.",
      sections: [
        {
          number: "30",
          label: "Section 30",
          marginalNote: "Testamentary succession",
          source: src(13),
          summary:
            "Any Hindu may by will dispose of any property capable of being so disposed of, in accordance with the Indian Succession Act, 1925 or any other applicable law; Mitakshara coparcenary interests and tarwad/tavazhi/illom/kutumba/kavaru interests count as testamentarily-disposable property.",
          verbatim: `Any Hindu may dispose of by will or other testamentary disposition any property, which is capable of being so disposed of by him or by her, in accordance with the provisions of the Indian Succession Act, 1925 (39 of 1925), or any other law for the time being in force and applicable to Hindus.

Explanation.—The interest of a male Hindu in a Mitakshara coparcenary property or the interest of a member of a tarwad, tavazhi, illom, kutumba or kavaru in the property of the tarwad, tavazhi, illom, kutumba or kavaru shall, notwithstanding anything contained in this Act or in any other law for the time being in force, be deemed to be property capable of being disposed of by him or by her within the meaning of this section.`,
        },
      ],
    },

    // ============================================================
    // Chapter IV — Repeals
    // ============================================================
    {
      slug: "ch-4-repeals",
      number: "IV",
      title: "Repeals",
      range: ["31", "31"],
      intro:
        "A single section. §31 has been repealed by the Repealing and Amending Act, 1960 — once the pre-1956 enactments it had repealed were folded into the general statute book, this clean-up section was itself swept away.",
      sections: [
        {
          number: "31",
          label: "Section 31",
          marginalNote: "[Repeals]",
          source: src(13),
          summary:
            "Repealed by the Repealing and Amending Act, 1960 (58 of 1960) with effect from 26 December 1960.",
          verbatim: `[Repeals].—Rep. by the Repealing and Amending Act, 1960 (58 of 1960), s. 2 and the First Schedule (w.e.f. 26-12-1960).`,
        },
      ],
    },
  ],
};
