/**
 * The Special Marriage Act, 1954 — Act No. 43 of 1954.
 *
 * Phase 2 coverage: MVP (verbatim + 1-line summary + source PDF page per
 * section). Every operative section from §1 to §51 is authored, including
 * the inserted §§21A, 27A, 39A, 40A–40C.
 *
 * Source PDF: c:/Users/Debabrata Barman/Documents/The law & order/
 *   Family & Personal Laws/Special Marriage Act, 1954.pdf
 * Raw extract: lib/statutes/_raw/special-marriage-act-1954.txt
 */

import type { Statute } from "../_types";

const SOURCE_BASE =
  "/pdfs/Family%20%26%20Personal%20Laws/Special%20Marriage%20Act,%201954.pdf";
const SOURCE_FILE = "Special Marriage Act, 1954.pdf";

const src = (page: number, pageEnd?: number) => ({
  pdfPath: `${SOURCE_BASE}#page=${page}`,
  pdfFile: SOURCE_FILE,
  pdfPage: page,
  ...(pageEnd ? { pdfPageEnd: pageEnd } : {}),
});

export const specialMarriageAct1954: Statute = {
  meta: {
    slug: "special-marriage-act-1954",
    shortName: "Special Marriage Act",
    fullName: "The Special Marriage Act, 1954",
    year: 1954,
    sanskrit: "विशेष विवाह अधिनियम",
    tagline: "Civil marriage — for any two persons, regardless of religion.",
    summary:
      "Act 43 of 1954 — a religion-neutral civil-marriage statute. Any two persons (including inter-faith and inter-caste couples) may marry by giving 30 days' notice to a Marriage Officer, after objections are resolved. Chapter III lets couples register marriages already celebrated in other forms. Marriage under this Act severs a Hindu/Buddhist/Sikh/Jain spouse from the undivided family (subject to §21A) and routes succession through the Indian Succession Act, 1925. Chapters V–VI carry the full divorce, judicial-separation, mutual-consent and nullity regime; Chapter VII supplies CPC-style procedure with day-to-day trial, 6-month disposal target and 90-day appeals.",
    preamble:
      "An Act to provide a special form of marriage in certain cases, for the registration of such and certain other marriages and for divorce.",
    categorySlug: "family-and-personal-laws",
    enactedOn: "1954-10-09",
    commencement: "1 January 1955 (vide notification S.R.O. 3606 of 17-12-1954).",
    totalSections: 51,
    totalChapters: 8,
    sourcePdf: { pdfPath: SOURCE_BASE, pdfFile: SOURCE_FILE, pdfPage: 1 },
    coverage: "mvp",
    tier: 1,
    repeals: ["Special Marriage Act, 1872 (3 of 1872)"],
    amendments: [
      { year: 1963, shortName: "Act 32 of 1963", note: "Recast §4(d) (prohibited relationships) and inserted the §4 'custom' Explanation." },
      { year: 1969, shortName: "Act 33 of 1969", note: "Re-engineered the J&K application: dropped 'outside the said territories' fiction and tied §3(2)/§4(e)/§10 to citizens domiciled in India who are in J&K." },
      { year: 1970, shortName: "Special Marriage (Amendment) Act, 1970 (29 of 1970)", note: "Inserted §27(2) — divorce after non-resumption following a §22/§23 decree." },
      { year: 1976, shortName: "Marriage Laws (Amendment) Act, 1976 (Act 68 of 1976)", note: "Major overhaul — recast §§4(b), 26, 27, 33, 34, 35, 36, 39; inserted §§21A, 27A, 28 (mutual consent), 39A, 40A–40C; cut 'three years' bar in §29 to one year." },
      { year: 1983, shortName: "Act 20 of 1983", note: "Inserted §50(3)–(4) — parliamentary/State-Legislature laying clauses for rules." },
      { year: 1999, shortName: "Act 39 of 1999", note: "Omitted 'or epilepsy' from §4(b)(iii)." },
      { year: 2001, shortName: "Act 49 of 2001", note: "Inserted 60-day disposal provisos in §§36 and 38." },
      { year: 2003, shortName: "Act 50 of 2003", note: "Inserted §31(iiia) (wife-petitioner's own residence); §39(4) appeal period raised from 30 to 90 days." },
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
      range: ["1", "3"],
      intro:
        "Three foundational sections. §1 names the Act and extends it across India. §2 carries the dictionary (degrees of prohibited relationship by reference to the First Schedule, full/half/uterine blood, district, district court, State Government). §3 empowers State Governments (and, for J&K-domiciled citizens, the Centre) to appoint Marriage Officers — the civil-registrar figure on whom the whole Act turns.",
      sections: [
        {
          number: "1",
          label: "Section 1",
          marginalNote: "Short title, extent and commencement",
          source: src(4),
          summary:
            "Names the Act, extends it to the whole of India and to citizens of India domiciled in India who are in J&K, and lets the Centre fix a commencement date by notification (done — 1 January 1955).",
          verbatim: `(1) This Act may be called the Special Marriage Act, 1954.

(2) It extends to the whole of India, and applies also to citizens of India domiciled in the territories to which this Act extends who are in the State of Jammu and Kashmir.

(3) It shall come into force on such date as the Central Government may, by notification in the Official Gazette, appoint.`,
        },
        {
          number: "2",
          label: "Section 2",
          marginalNote: "Definitions",
          source: src(4, 5),
          summary:
            "The Act's dictionary — 'degrees of prohibited relationship' (the First Schedule lists each side), 'district', 'district court', 'prescribed', 'State Government' (and four Explanations on full/half/uterine blood, illegitimate kinship and adoption).",
          verbatim: `In this Act, unless the context otherwise requires,—
(b) "degrees of prohibited relationship"—a man and any of the persons mentioned in Part I of the First Schedule and a woman and any of the persons mentioned in Part II of the said Schedule are within the degrees of prohibited relationship.
Explanation I.—Relationship includes,—
(a) relationship by half or uterine blood as well as by full blood;
(b) illegitimate blood relationship as well as legitimate;
(c) relationship by adoption as well as by blood;
and all terms of relationship in this Act shall be construed accordingly.
Explanation II.—"Full blood" and "half blood"—two persons are said to be related to each other by full blood when they are descended from a common ancestor by the same wife and by half blood when they are descended from a common ancestor but by different wives.
Explanation III.—"Uterine blood"—two persons are said to be related to each other by uterine blood when they are descended from a common ancestress but by different husbands.
Explanation IV.—In Explanations II and III, "ancestor" includes the father and "ancestress" the mother;

(d) "district" in relation to a Marriage Officer, means the area for which he is appointed as such under sub-section (1) or sub-section (2) of section 3;

(e) "district court" means, in any area for which there is a city civil court, that court, and in any other area, the principal civil court of original jurisdiction, and includes any other civil court which may be specified by the State Government by notification in the Official Gazette as having jurisdiction in respect of the matters dealt with in this Act;

(f) "prescribed" means prescribed by rules made under this Act;

(g) "State Government", in relation to a Union territory, means the administrator thereof.`,
        },
        {
          number: "3",
          label: "Section 3",
          marginalNote: "Marriage Officers",
          source: src(5),
          summary:
            "The State Government appoints one or more Marriage Officers for the State (or a part of it); for citizens domiciled in India who are in J&K, the Centre may notify central officers as Marriage Officers.",
          verbatim: `(1) For the purposes of this Act, the State Government may, by notification in the Official Gazette, appoint one or more Marriage Officers for the whole or any part of the State.

(2) For the purposes of this Act, in its application to citizens of India domiciled in the territories to which this Act extends who are in the State of Jammu and Kashmir, the Central Government may, by notification in the Official Gazette, specify such officers of the Central Government as it may think fit to be the Marriage Officers for the State or any part thereof.`,
        },
      ],
    },

    // ============================================================
    // Chapter II — Solemnization of Special Marriages
    // ============================================================
    {
      slug: "ch-2-solemnization",
      number: "II",
      title: "Solemnization of Special Marriages",
      range: ["4", "14"],
      intro:
        "The 30-day public-notice procedure that defines a 'special marriage'. §4 sets the four substantive conditions (no living spouse, sound mind, age 21/18, outside prohibited relationship). §5 requires written notice to the Marriage Officer where one party has lived 30+ days. §§6–7 publish the notice and allow any person to object on §4 grounds. §§8–10 fix the inquiry, costs for mala fide objections, and the procedure abroad. §§11–13 carry out the marriage itself (signed declaration, place and form, marriage certificate). §14 makes the notice lapse if marriage is not solemnised within three months.",
      sections: [
        {
          number: "4",
          label: "Section 4",
          marginalNote: "Conditions relating to solemnization of special marriages",
          source: src(5, 6),
          summary:
            "Five conditions for a valid special marriage — no living spouse; both sound-minded and fit for marriage; male 21, female 18; outside the First Schedule's prohibited degrees (custom may permit); for J&K solemnisations, both must be Indian citizens domiciled in the rest of India.",
          verbatim: `Notwithstanding anything contained in any other law for the time being in force relating to the solemnization of marriages, a marriage between any two persons may be solemnized under this Act, if at the time of the marriage the following conditions are fulfilled, namely:—
(a) neither party has a spouse living;
(b) neither party—
(i) is incapable of giving a valid consent to it in consequence of unsoundness of mind; or
(ii) though capable of giving a valid consent, has been suffering from mental disorder of such a kind or to such an extent as to be unfit for marriage and the procreation of children; or
(iii) has been subject to recurrent attacks of insanity;
(c) the male has completed the age of twenty-one years and the female the age of eighteen years;
(d) the parties are not within the degrees of prohibited relationship:
Provided that where a custom governing at least one of the parties permits of a marriage between them, such marriage may be solemnized, notwithstanding that they are within the degrees of prohibited relationship; and
(e) where the marriage is solemnized in the State of Jammu and Kashmir, both parties are citizens of India domiciled in the territories to which this Act extends.

Explanation.—In this section, "custom", in relation to a person belonging to any tribe, community, group or family, means any rule which the State Government may, by notification in the Official Gazette, specify in this behalf as applicable to members of that tribe, community, group or family:
Provided that no such notification shall be issued in relation to the members of any tribe, community, group or family, unless the State Government is satisfied—
(i) that such rule has been continuously and uniformly observed for a long time among those members;
(ii) that such rule is certain and not unreasonable or opposed to public policy; and
(iii) that such rule, if applicable only to a family, has not been discontinued by the family.`,
        },
        {
          number: "5",
          label: "Section 5",
          marginalNote: "Notice of intended marriage",
          source: src(6),
          summary:
            "Both parties must give written notice (Form in the Second Schedule) to the Marriage Officer of a district in which at least one of them has resided for 30+ days immediately preceding the notice.",
          verbatim: `When a marriage is intended to be solemnized under this Act, the parties to the marriage shall give notice thereof in writing in the form specified in the Second Schedule to the Marriage Officer of the district in which at least one of the parties to the marriage has resided for a period of not less than thirty days immediately preceding the date on which such notice is given.`,
        },
        {
          number: "6",
          label: "Section 6",
          marginalNote: "Marriage Notice Book and publication",
          source: src(6),
          summary:
            "The Marriage Officer enters every notice in a public 'Marriage Notice Book' open to inspection, displays a copy at the office, and (if either party permanently resides elsewhere) sends a copy to that other district's Marriage Officer for similar display.",
          verbatim: `(1) The Marriage Officer shall keep all notices given under section 5 with the records of his office and shall also forthwith enter a true copy of every such notice in a book prescribed for that purpose, to be called the Marriage Notice Book, and such book shall be open for inspection at all reasonable times, without fee, by any person desirous of inspecting the same.

(2) The Marriage Officer shall cause every such notice to be published by affixing a copy thereof to some conspicuous place in his office.

(3) Where either of the parties to an intended marriage is not permanently residing within the local limits of the district of the Marriage Officer to whom the notice has been given under section 5, the Marriage Officer shall also cause a copy of such notice to be transmitted to the Marriage Officer of the district within whose limits such party is permanently residing, and that Marriage Officer shall thereupon cause a copy thereof to be affixed to some conspicuous place in his office.`,
        },
        {
          number: "7",
          label: "Section 7",
          marginalNote: "Objection to marriage",
          source: src(6),
          summary:
            "Any person may object within 30 days of publication on the ground that the marriage breaches a §4 condition; after the 30-day window passes without objection, the marriage may be solemnised; objections are recorded, read over to the objector and signed.",
          verbatim: `(1) Any person may, before the expiration of thirty days from the date on which any such notice has been published under sub-section (2) of section 6, object to the marriage on the ground that it would contravene one or more of the conditions specified in section 4.

(2) After the expiration of thirty days from the date on which notice of an intended marriage has been published under sub-section (2) of section 6, the marriage may be solemnized, unless it has been previously objected to under sub-section (1).

(3) The nature of the objection shall be recorded in writing by the Marriage Officer in the Marriage Notice Book, be read over and explained if necessary, to the person making the objection and shall be signed by him or on his behalf.`,
        },
        {
          number: "8",
          label: "Section 8",
          marginalNote: "Procedure on receipt of objection",
          source: src(6),
          summary:
            "On objection, the Marriage Officer must inquire (capped at 30 days) and either solemnise (objection rejected/withdrawn) or refuse; either party may appeal a refusal to the district court within 30 days, and the court's decision is final.",
          verbatim: `(1) If an objection is made under section 7 to an intended marriage, the Marriage Officer shall not solemnize the marriage until he has inquired into the matter of the objection and is satisfied that it ought not to prevent the solemnization of the marriage or the objection is withdrawn by the person making it; but the Marriage Officer shall not take more than thirty days from the date of the objection for the purpose of inquiring into the matter of the objection and arriving at a decision.

(2) If the Marriage Officer upholds the objection and refuses to solemnize the marriage, either party to the intended marriage may, within a period of thirty days from the date of such refusal, prefer an appeal to the district court within the local limits of whose jurisdiction the Marriage Officer has his office, and the decision of the district court on such appeal shall be final, and the Marriage Officer shall act in conformity with the decision of the court.`,
        },
        {
          number: "9",
          label: "Section 9",
          marginalNote: "Powers of Marriage Officers in respect of inquiries",
          source: src(6, 7),
          summary:
            "For a §8 inquiry the Marriage Officer wields CPC civil-court powers (summons, discovery, document production, affidavit evidence, commissions); the proceeding is 'judicial' for IPC §193 perjury; mala fide objections can attract costs up to ₹1,000.",
          verbatim: `(1) For the purpose of any inquiry under section 8, the Marriage Officer shall have all the powers vested in a civil court under the Code of Civil Procedure, 1908 (5 of 1908), when trying a suit in respect of the following matters, namely:—
(a) summoning and enforcing the attendance of witnesses and examining them on oath;
(b) discovery and inspection;
(c) compelling the production of documents;
(d) reception of evidence of affidavits; and
(e) issuing commissions for the examination of witnesses;
and any proceeding before the Marriage Officer shall be deemed to be a judicial proceeding within the meaning of section 193 of the Indian Penal Code (45 of 1860).

Explanation.—For the purpose of enforcing the attendance of any person to give evidence, the local limits of the jurisdiction of the Marriage Officer shall be the local limits of his district.

(2) If it appears to the Marriage Officer that the objection made to an intended marriage is not reasonable and has not been made in good faith he may impose on the person objecting costs by way of compensation not exceeding one thousand rupees and award the whole or any part thereof, to the parties to the intended marriage, and any order for costs so made may be executed in the same manner as a decree passed by the district court within the local limits of whose jurisdiction the Marriage Officer has his office.`,
        },
        {
          number: "10",
          label: "Section 10",
          marginalNote: "Procedure on receipt of objection by Marriage Officer abroad",
          source: src(7),
          summary:
            "For a §7 objection in J&K (against a marriage intended in J&K), the Marriage Officer who entertains doubts must not solemnise but transmit the record to the Centre; the Centre's written decision binds the officer.",
          verbatim: `Where an objection is made under section 7 to a Marriage Officer in the State of Jammu and Kashmir in respect of an intended marriage in the State, and the Marriage Officer, after making such inquiry into the matter as he thinks fit, entertains a doubt in respect thereof, he shall not solemnize the marriage but shall transmit the record with such statement respecting the matter as he thinks fit to the Central Government, and the Central Government, after making such inquiry into the matter and after obtaining such advice as it thinks fit, shall give its decision thereon in writing to the Marriage Officer who shall act in conformity with the decision of the Central Government.`,
        },
        {
          number: "11",
          label: "Section 11",
          marginalNote: "Declaration by parties and witnesses",
          source: src(7),
          summary:
            "Before solemnisation, the two parties and three witnesses sign a declaration (Third Schedule) in the Marriage Officer's presence; the officer countersigns it.",
          verbatim: `Before the marriage is solemnized the parties and three witnesses shall, in the presence of the Marriage Officer, sign a declaration in the form specified in the Third Schedule to this Act, and the declaration shall be countersigned by the Marriage Officer.`,
        },
        {
          number: "12",
          label: "Section 12",
          marginalNote: "Place and form of solemnization",
          source: src(7),
          summary:
            "The marriage may be solemnised at the Marriage Officer's office or any other place within reasonable distance, in any form the parties choose — provided that each says to the other, in the Officer's and three witnesses' presence, 'I, (A), take the (B), to be my lawful wife (or husband)'.",
          verbatim: `(1) The marriage may be solemnized at the office of the Marriage Officer, or at such other place within a reasonable distance therefrom as the parties may desire, and upon such conditions and the payment of such additional fees as may be prescribed.

(2) The marriage may be solemnized in any form which the parties may choose to adopt:
Provided that it shall not be complete and binding on the parties unless each party says to the other in the presence of the Marriage Officer and the three witnesses and in any language understood by the parties,—"I, (A), take the (B), to be my lawful wife (or husband)".`,
        },
        {
          number: "13",
          label: "Section 13",
          marginalNote: "Certificate of marriage",
          source: src(7),
          summary:
            "The Marriage Officer enters a certificate (Fourth Schedule) in the Marriage Certificate Book, signed by the couple and three witnesses; the entry is conclusive evidence of the marriage and of compliance with witness-signature formalities.",
          verbatim: `(1) When the marriage has been solemnized, the Marriage Officer shall enter a certificate thereof in the form specified in the Fourth Schedule in a book to be kept by him for that purpose and to be called the Marriage Certificate Book and such certificate shall be signed by the parties to the marriage and the three witnesses.

(2) On a certificate being entered in the Marriage Certificate Book by the Marriage Officer, the Certificate shall be deemed to be conclusive evidence of the fact that a marriage under this Act has been solemnized and that all formalities respecting the signatures of witnesses have been complied with.`,
        },
        {
          number: "14",
          label: "Section 14",
          marginalNote: "New notice when marriage not solemnized within three months",
          source: src(7),
          summary:
            "If the marriage is not solemnised within 3 months from notice (or from a §8 appeal decision or §10 Central decision), the notice and all proceedings lapse — a fresh notice is needed.",
          verbatim: `Whenever a marriage is not solemnized within three calendar months from the date on which notice thereof has been given to the Marriage Officer as required by section 5, or where an appeal has been filed under sub-section (2) of section 8, within three months from the date of the decision of the district court on such appeal or, where the record of a case has been transmitted to the Central Government under section 10, within three months from the date of decision of the Central Government, the notice and all other proceedings arising therefrom shall be deemed to have lapsed, and no Marriage Officer shall solemnize the marriage until a new notice has been given in the manner laid down in this Act.`,
        },
      ],
    },

    // ============================================================
    // Chapter III — Registration of Marriages Celebrated in Other Forms
    // ============================================================
    {
      slug: "ch-3-registration-of-other-marriages",
      number: "III",
      title: "Registration of Marriages Celebrated in Other Forms",
      range: ["15", "18"],
      intro:
        "How a couple already married under religious or customary rites can convert their marriage into a 'Special-Marriage-Act marriage'. §15 lists six conditions (ceremony already performed and living as spouses since; no living spouse; sound mind; both 21+; outside prohibited degrees; 30-day local residence). §16 is the 30-day public-notice procedure for objections. §17 allows appeal to the district court within 30 days. §18 makes the registered marriage 'a marriage under this Act' from the date of entry — and secures children's legitimacy.",
      sections: [
        {
          number: "15",
          label: "Section 15",
          marginalNote: "Registration of marriages celebrated in other forms",
          source: src(7, 8),
          summary:
            "A pre-1954 or other-form marriage may be registered if the ceremony was performed and the parties have lived as spouses since; both are monogamous, sane, 21+, outside prohibited degrees; and both have lived in the Marriage Officer's district 30+ days.",
          verbatim: `Any marriage celebrated, whether before or after the commencement of this Act, other than a marriage solemnized under the Special Marriage Act, 1872 (3 of 1872), or under this Act, may be registered under this Chapter by a Marriage Officer in the territories to which this Act extends if the following conditions are fulfilled, namely:—
(a) a ceremony of marriage has been performed between the parties and they have been living together as husband and wife ever since;
(b) neither party has at the time of registration more than one spouse living;
(c) neither party is an idiot or a lunatic at the time of registration;
(d) the parties have completed the age of twenty-one years at the time of registration;
(e) the parties are not within the degrees of prohibited relationship:
Provided that in the case of a marriage celebrated before the commencement of this Act, this condition shall be subject to any law, custom or usage having the force of law governing each of them which permits of a marriage between the two; and
(f) the parties have been residing within the district of the Marriage Officer for a period of not less than thirty days immediately preceding the date on which the application is made to him for registration of the marriage.`,
        },
        {
          number: "16",
          label: "Section 16",
          marginalNote: "Procedure for registration",
          source: src(8),
          summary:
            "On a joint application, the Marriage Officer gives prescribed public notice, allows 30 days for objections, hears any received, and — if satisfied of §15 compliance — enters a certificate (Fifth Schedule) signed by the couple and three witnesses.",
          verbatim: `Upon receipt of an application signed by both the parties to the marriage for the registration of their marriage under this Chapter the Marriage Officer shall give public notice thereof in such manner as may be prescribed and after allowing a period of thirty days for objections and after hearing any objection received within that period, shall, if satisfied that all the conditions mentioned in section 15 are fulfilled, enter a certificate of the marriage in the Marriage Certificate Book in the form specified in the Fifth Schedule, and such certificate shall be signed by the parties to the marriage and by three witnesses.`,
        },
        {
          number: "17",
          label: "Section 17",
          marginalNote: "Appeals from orders under section 16",
          source: src(8),
          summary:
            "Any aggrieved person may appeal a refusal of registration to the district court within 30 days; the decision is final and binds the Marriage Officer.",
          verbatim: `Any person aggrieved by any order of a Marriage Officer refusing to register a marriage under this Chapter may, within thirty days from the date of the order, appeal against that order to the district court within the local limits of whose jurisdiction the Marriage Officer has his office, and the decision of the district court on such appeal shall be final, and the Marriage Officer to whom the application was made shall act in conformity with such decision.`,
        },
        {
          number: "18",
          label: "Section 18",
          marginalNote: "Effect of registration of marriage under this Chapter",
          source: src(8),
          summary:
            "From the date of entry the marriage is deemed solemnised under this Act; children born after the ceremony are legitimised (with the usual rights-against-third-party caveat); subject only to §24(2) which lets a wrongly-registered marriage be voided.",
          verbatim: `Subject to the provisions contained in sub-section (2) of section 24, where a certificate of marriage has been finally entered in the Marriage Certificate Book under this Chapter, the marriage shall, as from the date of such entry, be deemed to be a marriage solemnized under this Act, and all children born after the date of the ceremony of marriage (whose names shall also be entered in the Marriage Certificate Book) shall in all respects be deemed to be and always to have been the legitimate children of their parents:
Provided that nothing contained in this section shall be construed as conferring upon any such children any rights in or to the property of any person other than their parents in any case where, but for the passing of this Act, such children would have been incapable of possessing or acquiring any such rights by reason of their not being the legitimate children of their parents.`,
        },
      ],
    },

    // ============================================================
    // Chapter IV — Consequences of Marriage Under This Act
    // ============================================================
    {
      slug: "ch-4-consequences",
      number: "IV",
      title: "Consequences of Marriage Under This Act",
      range: ["19", "21A"],
      intro:
        "The 'side-effects' that a Special-Marriage-Act wedding produces. §19 severs a Hindu/Buddhist/Sikh/Jain spouse from the undivided family. §20 preserves rights of succession (and disabilities) the same as under the Caste Disabilities Removal Act. §21 routes succession of the couple's and issue's property through the Indian Succession Act, 1925, dropping the Parsi-Intestate special rules. §21A then carves Hindu/Buddhist/Sikh/Jain inter se SMA couples out of §§19, 20 and 21 — they retain their personal-law family-and-succession position.",
      sections: [
        {
          number: "19",
          label: "Section 19",
          marginalNote: "Effect of marriage on member of undivided family",
          source: src(8),
          summary:
            "Solemnisation under this Act of a member of an undivided Hindu, Buddhist, Sikh or Jain family severs that member from the family (subject to the §21A carve-out).",
          verbatim: `The marriage solemnized under this Act of any member of an undivided family who professes the Hindu, Buddhist, Sikh or Jaina religions shall be deemed to effect his severance from such family.`,
        },
        {
          number: "20",
          label: "Section 20",
          marginalNote: "Rights and disabilities not affected by Act",
          source: src(8),
          summary:
            "Subject to §19, an SMA spouse has the same succession rights (and disabilities) as a person to whom the Caste Disabilities Removal Act, 1850 applies.",
          verbatim: `Subject to the provisions of section 19, any person whose marriage is solemnized under this Act shall have the same rights and shall be subject to the same disabilities in regard to the right of succession to any property as a person to whom the Caste Disabilities Removal Act, 1850 (21 of 1850), applies.`,
        },
        {
          number: "21",
          label: "Section 21",
          marginalNote: "Succession to property of parties married under Act",
          source: src(8, 9),
          summary:
            "Succession to property of an SMA spouse — and of the issue of that marriage — is governed by the Indian Succession Act, 1925, with Chapter III of Part V (Parsi-Intestate special rules) treated as omitted.",
          verbatim: `Notwithstanding any restrictions contained in the Indian Succession Act, 1925 (39 of 1925), with respect to its application to members of certain communities, succession to the property of any person whose marriage is solemnized under this Act and to the property of the issue of such marriage shall be regulated by the provisions of the said Act and for the purposes of this Act shall have effect as if Chapter III of Part V (Special Rules for Parsi Intestates) had been omitted therefrom.`,
        },
        {
          number: "21A",
          label: "Section 21A",
          marginalNote: "Special provision in certain cases",
          source: src(9),
          summary:
            "Where both SMA spouses are Hindu, Buddhist, Sikh or Jain, §§19 and 21 do not apply, and the disability-creating portion of §20 also does not apply — i.e., their personal-law family and succession position is untouched.",
          verbatim: `Where the marriage is solemnized under this Act of any person who professes the Hindu, Buddhist, Sikh or Jaina religion with a person who professes the Hindu, Buddhist, Sikh or Jaina religion, section 19 and section 21 shall not apply and so much of section 20 as creates a disability shall also not apply.`,
        },
      ],
    },

    // ============================================================
    // Chapter V — Restitution of Conjugal Rights and Judicial Separation
    // ============================================================
    {
      slug: "ch-5-restitution-and-separation",
      number: "V",
      title: "Restitution of Conjugal Rights and Judicial Separation",
      range: ["22", "23"],
      intro:
        "Two pre-divorce reliefs. §22 lets the aggrieved spouse sue for restitution where the other has withdrawn from society without reasonable excuse — the burden of reasonable excuse is on the withdrawing party. §23 lets either spouse seek judicial separation on any §27(1) or §27(1A) divorce ground or on non-compliance with a §22 decree; the duty to cohabit is suspended and the court may rescind the decree on later application if just.",
      sections: [
        {
          number: "22",
          label: "Section 22",
          marginalNote: "Restitution of conjugal rights",
          source: src(9),
          summary:
            "Where one spouse has withdrawn from the society of the other without reasonable excuse, the aggrieved spouse may petition the district court for restitution; the burden of reasonable excuse rests on the withdrawing spouse.",
          verbatim: `When either the husband or the wife has, without reasonable excuse, withdrawn from the society of the other, the aggrieved party may apply by petition to the district court for restitution of conjugal rights, and the court, on being satisfied of the truth of the statements made in such petition, and that there is no legal ground why the application should not be granted, may decree restitution of conjugal rights accordingly.

Explanation.—Where a question arises whether there has been reasonable excuse for withdrawal from the society, the burden of proving reasonable excuse shall be on the person who has withdrawn from the society.`,
        },
        {
          number: "23",
          label: "Section 23",
          marginalNote: "Judicial separation",
          source: src(9),
          summary:
            "Either spouse may petition for judicial separation on any §27(1) or §27(1A) divorce ground, or on the ground of failure to comply with a §22 restitution decree; cohabitation ceases to be obligatory and the decree may be rescinded later if just.",
          verbatim: `(1) A petition for judicial separation may be presented to the district court either by the husband or the wife,—
(a) on any of the grounds specified in sub-section (1) and sub-section (1A) of section 27 on which a petition for divorce might have been presented; or
(b) on the ground of failure to comply with a decree for restitution of conjugal rights;
and the court, on being satisfied of the truth of the statements made in such petition, and that there is no legal ground why the application should not be granted, may decree judicial separation accordingly.

(2) Where the court grants a decree for judicial separation, it shall be no longer obligatory for the petitioner to cohabit with the respondent, but the court may, on the application by petition of either party and on being satisfied of the truth of the statements made in such petition, rescind the decree if it considers it just and reasonable to do so.`,
        },
      ],
    },

    // ============================================================
    // Chapter VI — Nullity of Marriage and Divorce
    // ============================================================
    {
      slug: "ch-6-nullity-and-divorce",
      number: "VI",
      title: "Nullity of Marriage and Divorce",
      range: ["24", "30"],
      intro:
        "The Act's matrimonial-relief catalogue. §24 makes a marriage null and void if any §4(a)–(d) condition was unmet, or if the respondent was impotent at marriage and at suit; §24(2) lets Chapter-III registrations be voided if §15(a)–(e) conditions were breached. §25 lists three voidable grounds — wilful refusal to consummate, pre-existing pregnancy by another, consent obtained by coercion or fraud — with strict time-limits. §26 secures the legitimacy of children of void and voidable marriages. §27 carries the full divorce regime (general grounds in §27(1); wife-only grounds in §27(1A); post-decree non-resumption in §27(2)). §27A lets the court grant judicial separation instead of divorce. §28 is divorce by mutual consent with the 6-to-18-month cooling window. §29 bars divorce in the first year (waivable for exceptional hardship/depravity). §30 says when a divorced person may remarry.",
      sections: [
        {
          number: "24",
          label: "Section 24",
          marginalNote: "Void marriages",
          source: src(9, 10),
          summary:
            "An SMA marriage is null and void if any §4(a)–(d) condition was unmet or if the respondent was impotent at marriage and at suit; Chapter-III registrations may be voided if §15(a)–(e) was breached — except where a §17 appeal has become final.",
          verbatim: `(1) Any marriage solemnized under this Act shall be null and void and may, on a petition presented by either party thereto against the other party, be so declared by a decree of nullity if—
(i) any of the conditions specified in clauses (a), (b), (c) and (d) of section 4 has not been fulfilled; or
(ii) the respondent was impotent at the time of the marriage and at the time of the institution of the suit.

(2) Nothing contained in this section shall apply to any marriage deemed to be solemnized under this Act within the meaning of section 18, but the registration of any such marriage under Chapter III may be declared to be of no effect if the registration was in contravention of any of the conditions specified in clauses (a) to (e) of section 15:
Provided that no such declaration shall be made in any case where an appeal has been preferred under section 17 and the decision of the district court has become final.`,
        },
        {
          number: "25",
          label: "Section 25",
          marginalNote: "Voidable marriages",
          source: src(10),
          summary:
            "Three voidable grounds — wilful refusal to consummate; respondent pregnant by another at marriage (proceedings within 1 year, petitioner ignorant of facts, no marital intercourse since discovery); consent obtained by coercion or fraud (proceedings within 1 year of cessation/discovery, no continued cohabitation after).",
          verbatim: `Any marriage solemnized under this Act shall be voidable and may be annulled by a decree of nullity if,—
(i) the marriage has not been consummated owing to the wilful refusal of the respondent to consummate the marriage; or
(ii) the respondent was at the time of the marriage pregnant by some person other than the petitioner; or
(iii) the consent of either party to the marriage was obtained by coercion or fraud, as defined in the Indian Contract Act, 1872 (9 of 1872):

Provided that, in the case specified in clause (ii), the court shall not grant a decree unless it is satisfied,—
(a) that the petitioner was at the time of the marriage ignorant of the facts alleged;
(b) that proceedings were instituted within a year from the date of the marriage; and
(c) that marital intercourse with the consent of the petitioner has not taken place since the discovery by the petitioner of the existence of the grounds for a decree:

Provided further that in the case specified in clause (iii), the court shall not grant a decree if,—
(a) proceedings have not been instituted within one year after the coercion had ceased or, as the case may be, the fraud had been discovered; or
(b) the petitioner has with his or her free consent lived with the other party to the marriage as husband and wife after the coercion had ceased or, as the case may be, the fraud had been discovered.`,
        },
        {
          number: "26",
          label: "Section 26",
          marginalNote: "Legitimacy of children of void and voidable marriages",
          source: src(10),
          summary:
            "Children of a §24-void or §25-voidable SMA marriage are deemed legitimate (whether born before or after the decree, and whether any decree is granted); but legitimacy reaches only the parents' property — not collateral relatives'.",
          verbatim: `(1) Notwithstanding that a marriage is null and void under section 24, any child of such marriage who would have been legitimate if the marriage had been valid, shall be legitimate, whether such child is born before or after the commencement of the Marriage Laws (Amendment) Act, 1976 (68 of 1976), and whether or not a decree of nullity is granted in respect of that marriage under this Act and whether or not the marriage is held to be void otherwise than on a petition under this Act.

(2) Where a decree of nullity is granted in respect of a voidable marriage under section 25, any child begotten or conceived before the decree is made, who would have been the legitimate child of the parties to the marriage if at the date of the decree it has been dissolved instead of being annulled, shall be deemed to be their legitimate child notwithstanding the decree of nullity.

(3) Nothing contained in sub-section (1) or sub-section (2) shall be construed as conferring upon any child of a marriage which is null and void or which is annulled by a decree of nullity under section 25, any rights in or to the property of any person, other than the parents, in any case where, but for the passing of this Act, such child would have been incapable of possessing or acquiring any such rights by reason of not his being the legitimate child of his parents.`,
        },
        {
          number: "27",
          label: "Section 27",
          marginalNote: "Divorce",
          source: src(10, 12),
          summary:
            "Divorce is available on adultery, 2-year desertion, 7-year imprisonment, cruelty, incurable unsound mind/mental disorder, communicable venereal disease, leprosy not contracted from petitioner, or presumed death (§27(1)); plus wife-only grounds — rape/sodomy/bestiality and §125 CrPC maintenance order (§27(1A)); plus 1-year non-resumption after a §22 or §23 decree (§27(2)).",
          verbatim: `(1) Subject to the provisions of this Act and to the rules made thereunder, a petition for divorce may be presented to the district court either by the husband or the wife on the ground that the respondent—
(a) has, after the solemnization of the marriage, had voluntary sexual intercourse with any person other than his or her spouse; or
(b) has deserted the petitioner for a continuous period of not less than two years immediately preceding the presentation of the petition; or
(c) is undergoing a sentence of imprisonment for seven years or more for an offence as defined in the Indian Penal Code (45 of 1860);
(d) has since the solemnization of the marriage treated the petitioner with cruelty; or
(e) has been incurably of unsound mind, or has been suffering continuously or intermittently from mental disorder of such a kind and to such an extent that the petitioner cannot reasonably be expected to live with the respondent.
Explanation.—In this clause,—
(a) the expression "mental disorder" means mental illness, arrested or incomplete development of mind, psychopathic disorder or any other disorder or disability of mind and includes schizophrenia;
(b) the expression "psychopathic disorder" means a persistent disorder or disability of mind (whether or not including sub-normality of intelligence) which results in abnormally aggressive or seriously irresponsible conduct on the part of the respondent, and whether or not it requires or is susceptible to medical treatment; or
(f) has been suffering from venereal disease in a communicable form; or
(g) has been suffering from leprosy, the disease not having been contacted from the petitioner; or
(h) has not been heard of as being alive for a period of seven years or more by those persons who would naturally have heard of the respondent if the respondent had been alive.
Explanation.—In this sub-section, the expression "desertion" means desertion of the petitioner by the other party to the marriage without reasonable cause and without the consent or against the wish of such party, and includes the wilful neglect of the petitioner by the other party to the marriage, and its grammatical variations and cognate expressions shall be construed accordingly.

(1A) A wife may also present a petition for divorce to the district court on the ground,—
(i) that her husband has, since the solemnization of the marriage, been guilty of rape, sodomy or bestiality;
(ii) that in a suit under section 18 of the Hindu Adoptions and Maintenance Act, 1956 (78 of 1956), or in a proceeding under section 125 of the Code of Criminal Procedure, 1973 (2 of 1974) (or under the corresponding section 488 of the Code of Criminal Procedure, 1898) (5 of 1898), a decree or order, as the case may be, has been passed against the husband awarding maintenance to the wife notwithstanding that she was living apart and that since the passing of such decree or order, cohabitation between the parties has not been resumed for one year or upwards.

(2) Subject to the provisions of this Act and to the rules made thereunder, either party to a marriage, whether solemnized before or after the commencement of the Special Marriage (Amendment) Act, 1970 (29 of 1970), may present a petition for divorce to the district court on the ground—
(i) that there has been no resumption of cohabitation as between the parties to the marriage for a period of one year or upwards after the passing of a decree for judicial separation in a proceeding to which they were parties; or
(ii) that there has been no restitution of conjugal rights as between the parties to the marriage for a period of one year or upwards after the passing of a decree for restitution of conjugal rights in a proceeding to which they were parties.`,
        },
        {
          number: "27A",
          label: "Section 27A",
          marginalNote: "Alternative relief in divorce proceedings",
          source: src(12),
          summary:
            "Except where divorce is sought on the presumption-of-death ground (§27(1)(h)), the court may, if just, grant judicial separation instead of divorce.",
          verbatim: `In any proceeding under this Act, on a petition for dissolution of marriage by a decree of divorce, except insofar as the petition is founded on the ground mentioned in clause (h) of sub-section (1) of section 27, the court may, if it considers it just so to do having regard to the circumstances of the case, pass instead a decree for judicial separation.`,
        },
        {
          number: "28",
          label: "Section 28",
          marginalNote: "Divorce by mutual consent",
          source: src(12),
          summary:
            "Both spouses, having lived separately 1+ year and agreed on dissolution, may jointly petition; the decree is granted on a second motion not before 6 and not later than 18 months — the cooling-off window.",
          verbatim: `(1) Subject to the provisions of this Act and to the rules made thereunder, a petition for divorce may be presented to the district court by both the parties together on the ground that they have been living separately for a period of one year or more, that they have not been able to live together and that they have mutually agreed that the marriage should be dissolved.

(2) On the motion of both the parties made not earlier than six months after the date of the presentation of the petition referred to in sub-section (1) and not later than eighteen months after the said date, if the petition is not withdrawn in the meantime, the district court shall, on being satisfied, after hearing the parties and after making such inquiry as it thinks fit, that a marriage has been solemnized under this Act, and that the averments in the petition are true, pass a decree declaring the marriage to be dissolved with effect from the date of the decree.`,
        },
        {
          number: "29",
          label: "Section 29",
          marginalNote: "Restriction on petitions for divorce during first one year after marriage",
          source: src(12),
          summary:
            "Divorce cannot be sought within the first year of marriage; the court may waive this on a showing of exceptional hardship or depravity, with safeguards against misrepresentation; the welfare of children and reconciliation chances are considered.",
          verbatim: `(1) No petition for divorce shall be presented to the district court unless at the date of the presentation of the petition one year has passed since the date of entering the certificate of marriage in the Marriage Certificate Book:
Provided that the district court may, upon application being made to it, allow a petition to be presented before one year has passed on the ground that the case is one of exceptional hardship suffered by the petitioner or of exceptional depravity on the part of the respondent, but if it appears to the district court at the hearing of the petition that the petitioner obtained leave to present the petition by any misrepresentation or concealment of the nature of the case, the district court may, if it pronounces a decree, do so subject to the condition that the decree shall not have effect until after the expiry of one year from the date of the marriage or may dismiss the petition, without prejudice to any petition, which may be brought after the expiration of the said one year upon the same, or substantially the same, facts as those proved in support of the petition so dismissed.

(2) In disposing of any application under this section for leave to present a petition for divorce before the expiration of one year from the date of the marriage, the district court shall have regard to the interests of any children of the marriage, and to the question whether there is a reasonable probability of a reconciliation between the parties before the expiration of the said one year.`,
        },
        {
          number: "30",
          label: "Section 30",
          marginalNote: "Remarriage of divorced persons",
          source: src(12, 13),
          summary:
            "Once there is no surviving right of appeal — appeal window expired, no appeal filed, or appeal filed and dismissed — either divorced spouse may remarry.",
          verbatim: `Where a marriage has been dissolved by a decree of divorce, and either there is no right of appeal against the decree or if there is such a right of appeal, the time for appealing has expired without an appeal having been presented, or an appeal has been presented but has been dismissed either party to the marriage may marry again.`,
        },
      ],
    },

    // ============================================================
    // Chapter VII — Jurisdiction and Procedure
    // ============================================================
    {
      slug: "ch-7-jurisdiction-and-procedure",
      number: "VII",
      title: "Jurisdiction and Procedure",
      range: ["31", "41"],
      intro:
        "How Chapter V and VI petitions are filed, tried and appealed. §31 fixes the forum (place of marriage, respondent's residence, last cohabitation, wife-petitioner's residence since 2003, or petitioner's residence in absconding-respondent cases) plus a 3-year residence ground for wife-petitioners. §32 covers pleadings and verification, and §33 keeps every proceeding in camera. §34 is the gate-keeping clause (ground exists, no condonation/connivance, no force-fraud-induced mutual consent, no collusion, no delay, no other legal bar) with a reconciliation duty. §§35–38 carry counter-claims, alimony pendente lite, permanent alimony and child custody (with 60-day disposal targets). §§39–40C cover appeals (90 days), CPC applicability, inter-court transfer, day-to-day trial within 6 months and the documentary-evidence shortcut. §41 lets the High Court make procedure rules.",
      sections: [
        {
          number: "31",
          label: "Section 31",
          marginalNote: "Court to which petition should be made",
          source: src(13),
          summary:
            "Any of five district courts can hear an SMA Chapter V/VI petition; plus a 3-year wife-resident-in-India special ground for nullity/divorce where the husband is not resident in India.",
          verbatim: `(1) Every petition under Chapter V or Chapter VI shall be presented to the district court within the local limits of whose original civil jurisdiction—
(i) the marriage was solemnized; or
(ii) the respondent, at the time of the presentation of the petition resides; or
(iii) the parties to the marriage last resided together; or
(iiia) in case the wife is the petitioner, where she is residing on the date of presentation of the petition; or
(iv) the petitioner is residing at the time of the presentation of the petition, in a case where the respondent is at that time residing outside the territories to which this Act extends, or has not been heard of as being alive for a period of seven years by those who would naturally have heard of him if he were alive.

(2) Without prejudice to any jurisdiction exercisable by the court under sub-section (1), the district court may, by virtue of this sub-section, entertain a petition by a wife domiciled in the territories to which this Act extends for nullity of marriage or for divorce if she is resident in the said territories and has been ordinarily resident therein for a period of three years immediately preceding the presentation of the petition and the husband is not resident in the said territories.`,
        },
        {
          number: "32",
          label: "Section 32",
          marginalNote: "Contents and verification of petitions",
          source: src(13),
          summary:
            "Every Chapter V/VI petition must state the facts founding the relief and that there is no collusion; verification is in plaint-form and the petition itself can be evidence at hearing.",
          verbatim: `(1) Every petition under Chapter V or Chapter VI shall state, as distinctly as the nature of the case permits the facts on which the claim to relief is founded, and shall also state that there is no collusion between the petitioner and the other party to the marriage.

(2) The statements contained in every such petition shall be verified by the petitioner or some other competent person in the manner required by law for the verification of plaints, and may, at the hearing, be referred to as evidence.`,
        },
        {
          number: "33",
          label: "Section 33",
          marginalNote: "Proceedings to be in camera and may not be printed or published",
          source: src(13),
          summary:
            "Every proceeding under the Act is held in camera, and only High Court/Supreme Court judgments may be printed or published (and only with the court's prior permission); breach attracts fine up to ₹1,000.",
          verbatim: `(1) Every proceeding under this Act shall be conducted in camera and it shall not be lawful for any person to print or publish any matter in relation to any such proceeding except a judgment of the High Court or of the Supreme Court printed or published with the previous permission of the Court.

(2) If any person prints or publishes any matter in contravention of the provisions contained in sub-section (1), he shall be punishable with fine which may extend to one thousand rupees.`,
        },
        {
          number: "34",
          label: "Section 34",
          marginalNote: "Duty of court in passing decrees",
          source: src(13, 14),
          summary:
            "Before any Chapter V/VI relief, the court must be satisfied of the ground, that there is no accessory-to or condonation or connivance at adultery/cruelty, no force-fraud-undue-influence in mutual consent, no collusion, no improper delay and no other legal bar; reconciliation is to be attempted first.",
          verbatim: `(1) In any proceeding under Chapter V or Chapter VI, whether defended or not, if the court is satisfied that,—
(a) any of the grounds for granting relief exists; and
(b) where the petition is founded on the ground specified in clause (a) of sub-section (1) of section 27, the petitioner has not in any manner been accessory to or connived at or condoned the act of sexual intercourse referred to therein, or, where the ground of the petition is cruelty, the petitioner has not in any manner condoned the cruelty; and
(c) when divorce is sought on the ground of mutual consent, such consent has not been obtained by force, fraud or undue influence; and
(d) the petition is not presented or prosecuted in collusion with the respondent; and
(e) there has not been any unnecessary or improper delay in instituting the proceedings; and
(f) there is no other legal ground why the relief should not be granted;
then, and in such a case, but not otherwise, the court shall decree such relief accordingly.

(2) Before proceeding to grant any relief under this Act it shall be the duty of the court in the first instance, in every case where it is possible so to do consistently with the nature and circumstances of the case, to make every endeavour to bring about a reconciliation between the parties:
Provided that nothing contained in this sub-section shall apply to any proceeding wherein relief is sought on any of the grounds specified in clause (c), clause (e), clause (f), clause (g) and clause (h) of sub-section (1) of section 27.

(3) For the purpose of aiding the court in bringing about such reconciliation, the court may, if the parties so desire or if the court thinks it just and proper so to do, adjourn the proceedings for a reasonable period not exceeding fifteen days and refer the matter to any person named by the parties in this behalf or to any person nominated by the court if the parties fail to name any person, with directions to report to the court as to whether reconciliation can be and has been, effected and the court shall in disposing of the proceeding have due regard to the report.

(4) In every case where a marriage is dissolved by a decree of divorce, the court passing the decree shall give a copy thereof free of cost to each of the parties.`,
        },
        {
          number: "35",
          label: "Section 35",
          marginalNote: "Relief for respondent in divorce and other proceedings",
          source: src(14),
          summary:
            "In divorce, judicial-separation or restitution suits, the respondent may oppose the relief and counter-claim on the petitioner's adultery, cruelty or desertion — and if proved, the court may grant the respondent any SMA relief.",
          verbatim: `In any proceeding for divorce or judicial separation or restitution of conjugal rights, the respondent may not only oppose the relief sought on the ground of petitioner's adultery, cruelty or desertion, but also make a counter-claim for any relief under this Act on that ground, and if the petitioner's adultery, cruelty or desertion is proved, the court may give to the respondent any relief under this Act to which he or she would have been entitled if he or she had presented a petition seeking such relief on that ground.`,
        },
        {
          number: "36",
          label: "Section 36",
          marginalNote: "Alimony pendente lite",
          source: src(14),
          summary:
            "Where the wife has no independent income sufficient for support and litigation expenses, the court may order the husband to pay her the expenses of the proceeding and a weekly/monthly sum during it; such applications must (as far as possible) be disposed of within 60 days.",
          verbatim: `Where in any proceeding under Chapter V or Chapter VI it appears to the district court that the wife has no independent income sufficient for her support and the necessary expenses of the proceeding, it may, on the application of the wife, order the husband to pay to her the expenses of the proceeding, and weekly or monthly during the proceeding such sum as having regard to the husband's income, it may seem to the court to be reasonable.

Provided that the application for the payment of the expenses of the proceeding and such weekly or monthly sum during the proceeding under Chapter V or Chapter VI, shall, as far as possible, be disposed of within sixty days from the date of service of notice on the husband.`,
        },
        {
          number: "37",
          label: "Section 37",
          marginalNote: "Permanent alimony and maintenance",
          source: src(14, 15),
          summary:
            "On or after any Chapter V/VI decree, the court may order the husband to secure maintenance for the wife (gross sum or periodical, up to life) — charged on his property if needed; orders may be varied on change of circumstance, and may be modified/rescinded on wife's remarriage or unchaste conduct.",
          verbatim: `(1) Any court exercising jurisdiction under Chapter V or Chapter VI may, at the time of passing any decree or at any time subsequent to the decree, on application made to it for the purpose, order that the husband shall secure to the wife for her maintenance and support, if necessary, by a charge on the husband's property such gross sum or such monthly or periodical payment of money for a term not exceeding her life, as, having regard to her own property, if any, her husband's property and ability the conduct of the parties and other circumstances of the case, it may seem to the court to be just.

(2) If the district court is satisfied that there is a change in the circumstances of either party at any time after it has made an order under sub-section (1), it may, at the instance of either party, vary, modify or rescind any such order in such manner as it may seem to the court to be just.

(3) If the district court is satisfied that the wife in whose favour an order has been made under this section has remarried or is not leading a chaste life, it may, at the instance of the husband vary, modify or rescind any such order and in such manner as the court may deem just.`,
        },
        {
          number: "38",
          label: "Section 38",
          marginalNote: "Custody of children",
          source: src(15),
          summary:
            "In any Chapter V/VI proceeding the court may pass interim or final orders for custody, maintenance and education of minor children — consistent with their wishes where possible — and vary them later; pending-litigation applications must, as far as possible, be disposed of within 60 days.",
          verbatim: `In any proceeding under Chapter V or Chapter VI the district court may, from time to time, pass such interim orders and make such provisions in the decree as it may seem to it to be just and proper with respect to the custody, maintenance and education of minor children, consistently with their wishes wherever possible, and may, after the decree, upon application by petition for the purpose, make, revoke, suspend or vary, from time to time, all such orders and provisions with respect to the custody, maintenance and education of such children as might have been made by such decree or interim orders in case the proceeding for obtaining such decree were still pending.

Provided that the application with respect to the maintenance and education of the minor children, during the proceeding, under Chapter V or Chapter VI, shall, as far as possible, be disposed of within sixty days from the date of service of notice on the respondent.`,
        },
        {
          number: "39",
          label: "Section 39",
          marginalNote: "Appeals from decrees and orders",
          source: src(15),
          summary:
            "Every Chapter V/VI decree is appealable like any original-civil decree; non-interim §37/§38 orders are also appealable; no appeal lies on costs alone; the appeal window is 90 days (raised from 30 by the 2003 amendment).",
          verbatim: `(1) All decrees made by the court in any proceeding under Chapter V or Chapter VI shall, subject to the provisions of sub-section (3), be appealable as decrees of the court made in the exercise of its original civil jurisdiction, and such appeal shall lie to the court to which appeals ordinarily lie from the decisions of the court given in the exercise of its original civil jurisdiction.

(2) Orders made by the court in any proceeding under this Act, under section 37 or section 38 shall, subject to the provisions of sub-section (3), be appealable if they are not interim orders, and every such appeal shall lie to the court to which appeals ordinarily lie from the decisions of the court given in the exercise of its original jurisdiction.

(3) There shall be no appeal under this section on the subject of costs only.

(4) Every appeal under this section shall be preferred within a period of ninety days from the date of the decree or order.`,
        },
        {
          number: "39A",
          label: "Section 39A",
          marginalNote: "Enforcement of decrees and orders",
          source: src(15),
          summary:
            "All Chapter V/VI decrees and orders are enforced in the same manner as decrees and orders of the court made in the exercise of its original civil jurisdiction for the time being.",
          verbatim: `All decrees and orders made by the court in any proceeding under Chapter V or Chapter VI shall be enforced in the like manner as the decrees and orders of the court made in the exercise of its original civil jurisdiction for the time being are enforced.`,
        },
        {
          number: "40",
          label: "Section 40",
          marginalNote: "Application of Act 5 of 1908",
          source: src(15),
          summary:
            "Subject to anything in this Act and to High Court rules, every proceeding under the Act is regulated, as far as may be, by the Code of Civil Procedure, 1908.",
          verbatim: `Subject to the other provisions contained in this Act, and to such rules as the High Court may make in this behalf, all proceedings under this Act shall be regulated, as far as may be, by the Code of Civil Procedure, 1908 (5 of 1908).`,
        },
        {
          number: "40A",
          label: "Section 40A",
          marginalNote: "Power to transfer petitions in certain cases",
          source: src(15, 16),
          summary:
            "When both spouses file separate §23 or §27 petitions, the later petition is consolidated with the earlier one — in the same court if both were filed there, otherwise transferred to the court of the first-filed petition.",
          verbatim: `(1) Where—
(a) a petition under this Act has been presented to the district court having jurisdiction, by a party to the marriage praying for a decree for judicial separation under section 23 or for a decree of divorce under section 27, and
(b) another petition under this Act has been presented thereafter by the other party to the marriage praying for decree for judicial separation under section 23, or for decree of divorce under section 27 on any ground whether in the same district court, or in a different district court, in the same State or in a different State, the petition shall be dealt with as specified in sub-section (2).

(2) In a case where sub-section (1) applies,—
(a) if the petitions are presented to the same district court, both the petitions shall be tried and heard together by that district court;
(b) if the petitions are presented to different district courts, the petitions presented later shall be transferred to the district court in which the earlier petition was presented and both the petitions shall be heard and disposed of together by the district court in which the earlier petition was presented.

(3) In a case where clause (b) of sub-section (2) applies, the court or the Government, as the case may be, competent under the Code of Civil Procedure, 1908 (5 of 1908), to transfer any suit or proceeding from the district court in which the later petition has been presented to the district court in which the earlier petition is pending, shall exercise its powers to transfer such later petition as if it had been empowered so to do under the said Code.`,
        },
        {
          number: "40B",
          label: "Section 40B",
          marginalNote: "Special provisions relating to trial and disposal of petitions under the Act",
          source: src(16),
          summary:
            "SMA trials run day-to-day so far as practicable, and the court must try to conclude within 6 months of service; appeals are similarly time-bound to 3 months from service.",
          verbatim: `(1) The trial of a petition under this Act shall, so far as is practicable consistently with the interests of justice in respect of the trial, be continued from day to day, until its conclusions, unless the court finds the adjournment of the trial beyond the following day to be necessary for reasons to be recorded.

(2) Every petition under this Act shall be tried as expeditiously as possible and endeavour shall be made to conclude the trial within six months from the date of service of notice of the petition on the respondent.

(3) Every appeal under this Act shall be heard as expeditiously as possible, and endeavour shall be made to conclude the hearing within three months from the date of service of notice of appeal on the respondent.`,
        },
        {
          number: "40C",
          label: "Section 40C",
          marginalNote: "Documentary evidence",
          source: src(16),
          summary:
            "Notwithstanding anything in any other law, no document is inadmissible at an SMA trial merely because it is not duly stamped or registered — a relaxation tailored to matrimonial disputes.",
          verbatim: `Notwithstanding anything contained in any enactment to the contrary, no document shall be inadmissible in evidence in any proceeding at the trial of a petition under this Act on the ground that it is not duly stamped or registered.`,
        },
        {
          number: "41",
          label: "Section 41",
          marginalNote: "Power of High Court to make rules regulating procedure",
          source: src(16),
          summary:
            "The High Court may make rules (consistent with this Act and the CPC) for Chapters V, VI and VII — including impleading the alleged adulterer as co-respondent, awarding damages, intervention by non-parties, the form of nullity/divorce petitions, and gap-filling from the Indian Divorce Act, 1869.",
          verbatim: `(1) The High Court shall, by notification in the Official Gazette, make such rules consistent with the provisions contained in this Act and the Code of Civil Procedure, 1908 (5 of 1908), as it may consider expedient for the purpose of carrying into effect the provisions of Chapters V, VI and VII.

(2) In particular, and without prejudice to the generality of the foregoing provision, such rules shall provide for,—
(a) the impleading by the petitioner of the adulterer as a co-respondent on a petition for divorce on the ground of adultery, and the circumstances in which the petitioner may be excused from doing so;
(b) the awarding of damages against any such co-respondent;
(c) the intervention in any proceeding under Chapter V or Chapter VI by any person not already a party thereto;
(d) the form and contents of petitions for nullity of marriage or for divorce and the payment of costs incurred by parties to such petitions; and
(e) any other matter for which no provision or no sufficient provision is made in this Act, and for which provision is made in the Indian Divorce Act, 1869 (4 of 1869).`,
        },
      ],
    },

    // ============================================================
    // Chapter VIII — Miscellaneous
    // ============================================================
    {
      slug: "ch-8-miscellaneous",
      number: "VIII",
      title: "Miscellaneous",
      range: ["42", "51"],
      intro:
        "Closing provisions. §42 is a saving — the Act does not invalidate non-SMA marriages or other modes of contracting marriage. §43 punishes a married person who marries again under this Act (IPC §494/§495). §44 punishes an SMA spouse who contracts another marriage. §45 punishes false declarations (IPC §199). §46 punishes a Marriage Officer who wilfully solemnises a marriage without notice, within 30 days of notice, or otherwise in breach of the Act. §47 keeps the Marriage Certificate Book open for inspection; §48 transmits copies to the State Registrar-General; §49 lets the Marriage Officer correct entry errors. §50 is the rule-making power. §51 repeals the Special Marriage Act, 1872 and saves marriages and pending proceedings under it.",
      sections: [
        {
          number: "42",
          label: "Section 42",
          marginalNote: "Saving",
          source: src(16),
          summary:
            "Nothing in this Act affects the validity of any marriage not solemnised under it, nor does the Act, directly or indirectly, affect the validity of any other mode of contracting marriage.",
          verbatim: `Nothing contained in this Act shall affect the validity of any marriage not solemnized under its provisions; nor shall this Act be deemed directly or indirectly to affect the validity of any mode of contracting marriage.`,
        },
        {
          number: "43",
          label: "Section 43",
          marginalNote: "Penalty on married person marrying again under this Act",
          source: src(16),
          summary:
            "Save the Chapter III registration carve-out, any already-married person who procures an SMA marriage of himself or herself is deemed to have committed bigamy under IPC §494 or §495, and the SMA marriage so solemnised is void.",
          verbatim: `Save as otherwise provided in Chapter III, every person who, being at the time married, procures a marriage of himself or herself to be solemnized under this Act shall be deemed to have committed an offence under section 494 or section 495 of the Indian Penal Code (45 of 1860), as the case may be, and the marriage so solemnized shall be void.`,
        },
        {
          number: "44",
          label: "Section 44",
          marginalNote: "Punishment of bigamy",
          source: src(17),
          summary:
            "Every SMA spouse who, during the lifetime of the other, contracts another marriage is liable under IPC §§494–495 (now BNS §82) and the second marriage is void.",
          verbatim: `Every person whose marriage is solemnized under this Act and who, during the lifetime of his or her wife or husband, contracts any other marriage shall be subject to the penalties provided in section 494 and section 495 of the Indian Penal Code (45 of 1860), for the offence of marrying again during the lifetime of a husband or wife, and the marriage so contracted shall be void.`,
        },
        {
          number: "45",
          label: "Section 45",
          marginalNote: "Penalty for signing false declaration or certificate",
          source: src(17),
          summary:
            "Making, signing or attesting a false declaration or certificate under the Act (knowingly or without believing it to be true) is punishable as an offence described in IPC §199.",
          verbatim: `Every person making, signing or attesting any declaration or certificate required by or under this Act containing a statement which is false and which he either knows or believes to be false or does not believe to be true shall be guilty of the offence described in section 199 of the Indian Penal Code (45 of 1860).`,
        },
        {
          number: "46",
          label: "Section 46",
          marginalNote: "Penalty for wrongful action of Marriage Officer",
          source: src(17),
          summary:
            "A Marriage Officer who knowingly and wilfully solemnises an SMA marriage without publishing the §5 notice, within 30 days of the notice, or otherwise in breach of the Act is liable to simple imprisonment up to 1 year, fine up to ₹500, or both.",
          verbatim: `Any Marriage Officer who knowingly and wilfully solemnizes a marriage under this Act,—
(1) without publishing a notice regarding such marriage as required by section 5, or
(2) within thirty days of the publication of the notice of such marriage, or
(3) in contravention of any other provision in this Act,
shall be punishable with simple imprisonment for a term which may extend to one year, or with fine which may extend to five hundred rupees, or with both.`,
        },
        {
          number: "47",
          label: "Section 47",
          marginalNote: "Marriage Certificate Book to be open to inspection",
          source: src(17),
          summary:
            "The Marriage Certificate Book is open for inspection at all reasonable times and is admissible as evidence; certified extracts are given by the Marriage Officer on payment of the prescribed fee.",
          verbatim: `(1) The Marriage Certificate Book kept under this Act shall at all reasonable times be open for inspection and shall be admissible as evidence of the statements therein contained.

(2) Certified extracts from the Marriage Certificate Book shall, on application, be given by the Marriage Officer to the applicant on payment by him of the prescribed fee.`,
        },
        {
          number: "48",
          label: "Section 48",
          marginalNote: "Transmission of copies of entries in marriage records",
          source: src(17),
          summary:
            "Every Marriage Officer must, at prescribed intervals and in prescribed form, transmit true copies of all entries since the last transmission to the State Registrar-General of Births, Deaths and Marriages (or to a Centre-specified authority, for offices outside India).",
          verbatim: `Every Marriage Officer in a State shall send to Registrar-General of Births, Deaths and Marriages of that State at such intervals and in such form as may be prescribed, a true copy of all entries made by him in the Marriage Certificate Book since the last of such intervals, and, in the case of Marriage Officers outside the territories to which this Act extends, the true copy shall be sent to such authority as the Central Government may specify in this behalf.`,
        },
        {
          number: "49",
          label: "Section 49",
          marginalNote: "Correction of errors",
          source: src(17, 18),
          summary:
            "Within one month of discovering an error, the Marriage Officer may correct it in the margin (without altering the original entry) in the presence of the married parties or two credible witnesses; the correction is dated, signed and (if already transmitted) reported separately to the Registrar-General.",
          verbatim: `(1) Any Marriage Officer who discovers any error in the form or substance of any entry in the Marriage Certificate Book may, within one month next after the discovery of such error, in the presence of the persons married or, in case of their death or absence, in the presence of two other credible witnesses, correct the error by entry in the margin without any alteration of the original entry and shall sign the marginal entry and add thereto the date of such correction and the Marriage Officer shall make the like marginal entry in the certificate thereof.

(2) Every correction made under this section shall be attested by the witnesses in whose presence it was made.

(3) Where a copy of any entry has already been sent under section 48 to the Registrar-General or other authority the Marriage Officer shall make and send in like manner a separate certificate of the original erroneous entry and of the marginal corrections therein made.`,
        },
        {
          number: "50",
          label: "Section 50",
          marginalNote: "Power to make rules",
          source: src(18),
          summary:
            "The Centre (for central Marriage Officers) and the State Government (otherwise) may make rules on Marriage-Officer duties and jurisdiction, inquiry procedure, record-keeping, fees, §16 public notice and §48 transmissions; central rules are laid before Parliament (30-day modification window) and State rules before the State Legislature.",
          verbatim: `(1) The Central Government, in the case of officers of the Central Government, and the State Government, in all other cases, may, by notification in the Official Gazette, make rules for carrying out the purposes of this Act.

(2) In particular, and without prejudice to the generality of the foregoing power, such rules may provide for all or any of the following matters, namely:—
(a) the duties and powers of Marriage Officers and the areas in which they may exercise jurisdiction;
(b) the manner in which a Marriage Officer may hold inquiries under this Act and the procedure therefor;
(c) the form and manner in which any books required by or under this Act shall be maintained;
(d) the fees that may be levied for the performance of any duty imposed upon a Marriage Officer under this Act;
(e) the manner in which public notice shall be given under section 16;
(f) the form in which, and the intervals within which, copies of entries in the Marriage Certificate Book shall be sent in pursuance of section 48;
(g) any other matter which may be or requires to be prescribed.

(3) Every rule made by the Central Government under this Act shall be laid, as soon as may be after it is made, before each House of Parliament, while it is in session, for a total period of thirty days which may be comprised in one session or in two or more successive sessions, and if, before the expiry of the session immediately following the session or the successive sessions aforesaid, both Houses agree in making any modification in the rule or both Houses agree that the rule should not be made, the rule shall thereafter have effect only in such modified form or be of no effect, as the case may be; so, however, that any such modification or annulment shall be without prejudice to the validity of anything previously done under that rule.

(4) Every rule made by the State Government under this Act shall be laid, as soon as it is made before the State Legislature.`,
        },
        {
          number: "51",
          label: "Section 51",
          marginalNote: "Repeals and savings",
          source: src(18),
          summary:
            "Repeals the Special Marriage Act, 1872 and corresponding Part B State laws; saves all marriages already solemnised under them (treated as SMA marriages) and pending matrimonial proceedings (continued as if instituted under this Act); General Clauses Act, 1897 §6 also applies.",
          verbatim: `(1) The Special Marriage Act, 1872 (3 of 1872), and any law corresponding to the Special Marriage Act, 1872 (3 of 1872), in force in any Part B State immediately before the commencement of this Act are hereby repealed.

(2) Notwithstanding such repeal,—
(a) all marriages duly solemnized under the Special Marriage Act, 1872 (3 of 1872), or any such corresponding law shall be deemed to have been solemnized under this Act;
(b) all suits and proceedings in causes and matters matrimonial which, when this Act comes into operation, are pending in any court, shall be dealt with and decided by such court, so far as may be, as if they had been originally instituted therein under this Act.

(3) The provisions of sub-section (2) shall be without prejudice to the provisions contained in section 6 of the General Clauses Act, 1897 (10 of 1897), which shall also apply to the repeal of the corresponding law as if such corresponding law had been an enactment.`,
        },
      ],
    },
  ],
};
