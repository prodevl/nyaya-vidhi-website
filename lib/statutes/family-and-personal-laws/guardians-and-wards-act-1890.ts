/**
 * The Guardians and Wards Act, 1890 — Act No. 8 of 1890.
 *
 * Phase 2 coverage: MVP (verbatim + 1-line summary + source PDF page per
 * section). Every operative section from §1 to §51 is authored, plus the
 * inserted §§4A and 34A. The repealed §§2, 52, 53 and the omitted §5 are
 * stubbed for completeness so the section navigator never has a gap.
 *
 * Source PDF: c:/Users/Debabrata Barman/Documents/The law & order/
 *   Family & Personal Laws/Guardians & Wards Act, 1890.pdf
 * Raw extract: lib/statutes/_raw/guardians-and-wards-act-1890.txt
 */

import type { Statute } from "../_types";

const SOURCE_BASE =
  "/pdfs/Family%20%26%20Personal%20Laws/Guardians%20%26%20Wards%20Act,%201890.pdf";
const SOURCE_FILE = "Guardians & Wards Act, 1890.pdf";

const src = (page: number, pageEnd?: number) => ({
  pdfPath: `${SOURCE_BASE}#page=${page}`,
  pdfFile: SOURCE_FILE,
  pdfPage: page,
  ...(pageEnd ? { pdfPageEnd: pageEnd } : {}),
});

export const guardiansAndWardsAct1890: Statute = {
  meta: {
    slug: "guardians-and-wards-act-1890",
    shortName: "Guardians & Wards Act",
    fullName: "The Guardians and Wards Act, 1890",
    year: 1890,
    sanskrit: "संरक्षक एवं प्रतिपाल्य अधिनियम",
    tagline: "How courts appoint, supervise and remove guardians of minors.",
    summary:
      "Act 8 of 1890 — the procedural code for guardianship of a minor's person and property. It does not displace personal-law rules on who may be a natural guardian (Hindu / Muslim / Christian / Parsi); instead it gives the District Court power to appoint, declare, regulate, supervise and remove a guardian, with welfare of the minor as the controlling test (§17). Lays down who may apply (§8), forum (§9), pleading and notice (§§10–11), interim custody (§12), grounds for removal (§39), penalty for taking the ward out of jurisdiction (§§26, 44), and an appeal to the High Court on the major orders (§47).",
    preamble:
      "An Act to consolidate and amend the law relating to Guardian and Ward. WHEREAS it is expedient to consolidate and amend the law relating to guardian and ward; It is hereby enacted as follows:—",
    categorySlug: "family-and-personal-laws",
    enactedOn: "1890-03-21",
    commencement: "1 July 1890 (per §1(3)).",
    totalSections: 55,
    totalChapters: 4,
    sourcePdf: { pdfPath: SOURCE_BASE, pdfFile: SOURCE_FILE, pdfPage: 1 },
    coverage: "mvp",
    tier: 1,
    amendments: [
      { year: 1926, shortName: "Act 4 of 1926", note: "Recast §4(5) ('the Court' definition) and inserted §4A (jurisdiction conferred on subordinate judicial officers; transfer of proceedings)." },
      { year: 1929, shortName: "Act 17 of 1929", note: "Inserted §34A (power to award remuneration for auditing accounts) and the matching rule-making head in §50(ff)." },
      { year: 1938, shortName: "Repealing Act, 1938 (1 of 1938)", note: "Repealed §§2, 52 and the Schedule." },
      { year: 1948, shortName: "A.O. 1948", note: "Excised the words 'inclusive of British Baluchistan' from §1(2)." },
      { year: 1951, shortName: "Part B States (Laws) Act, 1951 (3 of 1951)", note: "Omitted §5 (parents' power to appoint for European British subjects) and §4(7), and adjusted territorial references throughout." },
      { year: 2010, shortName: "Personal Laws (Amendment) Act, 2010 (30 of 2010)", note: "Recast §19(b) so the Court cannot appoint a guardian of the person where either the father or the mother is alive and not unfit (replaces the old father-only bar)." },
      { year: 2019, shortName: "Act 34 of 2019 (J&K Reorganisation)", note: "Removed the words 'except the State of Jammu and Kashmir' from §1(2); Act now extends to the whole of India." },
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
      range: ["1", "4A"],
      intro:
        "Five sections set the stage. §1 names the Act and extends it to the whole of India (post-2019, after the J&K reorganisation). §2 was repealed by the Repealing Act, 1938. §3 keeps both Courts of Wards regimes and the original Chartered High Courts' inherent jurisdiction intact. §4 is the dictionary — 'minor', 'guardian', 'ward', 'District Court', 'the Court' (after the 1926 recast), 'Collector' and 'prescribed'. §4A (1926) lets a High Court empower subordinate judicial officers and lets a District Judge transfer guardianship proceedings to them.",
      sections: [
        {
          number: "1",
          label: "Section 1",
          marginalNote: "Title, extent and commencement",
          source: src(4),
          summary:
            "Names the Act, extends it to the whole of India (post-2019), and fixes 1 July 1890 as the commencement date.",
          verbatim: `(1) This Act may be called the Guardians and Wards Act, 1890.

(2) It extends to the whole of India.

(3) It shall come into force on the first day of July, 1890.`,
        },
        {
          number: "2",
          label: "Section 2",
          marginalNote: "[Repealed]",
          source: src(4),
          importance: "transitional",
          summary:
            "Repealed by the Repealing Act, 1938 (1 of 1938), §2 and the Schedule.",
          verbatim: `[Repeal.] Rep. by the Repealing Act, 1938 (1 of 1938), s. 2 and the Schedule.`,
        },
        {
          number: "3",
          label: "Section 3",
          marginalNote: "Saving of jurisdiction of Courts of Wards and Chartered High Courts",
          source: src(4),
          summary:
            "Read the Act subject to every Courts-of-Wards enactment; nothing here derogates from the inherent High Court guardianship jurisdiction or any Courts-of-Wards authority.",
          verbatim: `This Act shall be read subject to every enactment heretofore or hereafter passed relating to any Court of Wards by any competent legislature, authority or person in any State to which this Act extends, and nothing in this Act shall be construed to affect, or in any way derogate from the jurisdiction or authority of any Court of Wards, or to take away any power possessed by any High Court.`,
        },
        {
          number: "4",
          label: "Section 4",
          marginalNote: "Definitions",
          source: src(4, 5),
          summary:
            "Defines 'minor' (Indian Majority Act, 1875), 'guardian' (of person / property / both), 'ward', 'District Court' (CPC sense, includes a High Court in its ordinary original civil jurisdiction), 'the Court' (recast by Act 4 of 1926), 'Collector' and 'prescribed'. Clause (7) was omitted in 1951.",
          verbatim: `In this Act, unless there is something repugnant in the subject or context,—
(1) "minor" means a person who, under the provisions of the Indian Majority Act, 1875 (9 of 1875) is to be deemed not to have attained his majority:
(2) "guardian" means a person having the care of the person of a minor or of his property, or of both his person and property:
(3) "ward" means a minor for whose person or property, or both, there is a guardian:
(4) "District Court" has the meaning assigned to that expression in the Code of Civil Procedure (14 of 1882), and includes a High Court in the exercise of its ordinary original civil jurisdiction:
(5) "the Court" means—
(a) the District Court having jurisdiction to entertain an application under this Act for an order appointing or declaring a person to be a guardian; or
(b) where a guardian has been appointed or declared in pursuance of any such application—
(i) the Court which, or the Court of the officer who, appointed or declared the guardian or is under this Act deemed to have appointed or declared the guardian; or
(ii) in any matter relating to the person of the ward the District Court having jurisdiction in the place where the ward for the time being ordinarily resides; or
(c) in respect of any proceeding transferred under section 4A, the Court of the officer to whom such proceeding has been transferred:
(6) "Collector" means the chief officer in charge of the revenue-administration of a district, and includes any officer whom the State Government, by notification in the Official Gazette, may, by name or in virtue of his office, appoint to be a Collector in any local area, or with respect to any class of persons, for all or any of the purposes of this Act:
* * * * *; and
(8) "prescribed" means prescribed by rules made by the High Court under this Act.`,
        },
        {
          number: "4A",
          label: "Section 4A",
          marginalNote: "Power to confer jurisdiction on subordinate judicial officers and to transfer proceedings to such officers",
          source: src(5),
          summary:
            "High Court may empower subordinate civil officers to dispose of transferred guardianship proceedings; District Judge may transfer pending proceedings to such officers; the transferee Court may be deemed the appointing Court.",
          verbatim: `(1) The High Court may, by general or special order, empower any officer exercising original civil jurisdiction subordinate to a District Court, or authorise the Judge of any District Court to empower any such officer subordinate to him, to dispose of any proceedings under this Act transferred to such officer under the provisions of this section.

(2) The Judge of a District Court may, by order in writing, transfer at any stage any proceeding under this Act pending in his Court for disposal to any officer subordinate to him empowered under sub-section (1).

(3) The Judge of a District Court may at any stage transfer to his own Court or to any officer subordinate to him empowered under sub-section (1) any proceeding under this Act pending in the Court of any other such officer.

(4) When any proceedings are transferred under this section in any case in which a guardian has been appointed or declared, the Judge of the District Court may, by order in writing, declare that the Court of the Judge or officer to whom they are transferred shall, for all or any of the purposes of this Act, be deemed to be the Court which appointed or declared the guardian.`,
        },
      ],
    },

    // ============================================================
    // Chapter II — Appointment and Declaration of Guardians
    // ============================================================
    {
      slug: "ch-2-appointment-and-declaration",
      number: "II",
      title: "Appointment and Declaration of Guardians",
      range: ["5", "19"],
      intro:
        "The heart of the Act. §§7–18 lay down a complete procedural ladder for getting a guardian appointed or declared: who may apply (§8), the District Court that has jurisdiction (§9), the contents of the petition (§10), service and publication of notice (§11), interlocutory custody (§12), evidence (§13), simultaneous-proceedings stay (§14), multiple/joint guardians (§15), property outside the local jurisdiction (§16), the welfare-of-the-minor test (§17) and the Collector-by-virtue-of-office (§18). §19 is the all-important bar: the Court cannot appoint a guardian of the person of a minor whose father or mother is alive and not unfit (post-2010), and cannot touch a ward whose property is under a Court of Wards.",
      sections: [
        {
          number: "5",
          label: "Section 5",
          marginalNote: "[Omitted]",
          source: src(6),
          importance: "transitional",
          summary:
            "Old provision empowering parents to appoint a guardian for European British subjects — omitted by the Part B States (Laws) Act, 1951.",
          verbatim: `[Power of parents to appoint in case of European British subjects.] Omitted by the Part B States (Laws) Act, 1951 (3 of 1951), s. 3 and Schedule.`,
        },
        {
          number: "6",
          label: "Section 6",
          marginalNote: "Saving of power to appoint in other cases",
          source: src(6),
          summary:
            "Nothing in this Act takes away any power — valid under the personal law the minor is subject to — to appoint a guardian of the minor's person, property or both.",
          verbatim: `In the case of a minor, nothing in this Act shall be construed to take away or derogate from any power to appoint a guardian of his person or property, or both, which is valid by the law to which the minor is subject.`,
        },
        {
          number: "7",
          label: "Section 7",
          marginalNote: "Power of the Court to make order as to guardianship",
          source: src(6),
          summary:
            "If satisfied it is for the welfare of the minor, the Court may appoint or declare a guardian; the order implies removal of any non-instrument, non-Court-appointed guardian, and successor orders require the existing guardian's powers to have ceased.",
          verbatim: `(1) Where the Court is satisfied that it is for the welfare of a minor that an order should be made—
(a) appointing a guardian of his person or property, or both, or
(b) declaring a person to be such a guardian,
the Court may make an order accordingly.

(2) An order under this section shall imply the removal of any guardian who has not been appointed by will or other instrument or appointed or declared by the Court.

(3) Where a guardian has been appointed by will or other instrument or appointed or declared by the Court, an order under this section appointing or declaring another person to be guardian in his stead shall not be made until the powers of the guardian appointed or declared as aforesaid have ceased under the provisions of this Act.`,
        },
        {
          number: "8",
          label: "Section 8",
          marginalNote: "Persons entitled to apply for order",
          source: src(6, 7),
          summary:
            "Application can only come from the proposed guardian, a relative or friend of the minor, the Collector of the district where the minor resides or has property, or a Collector with class-jurisdiction over the minor.",
          verbatim: `An order shall not be made under the last foregoing section except on the application of—
(a) the person desirous of being, or claiming to be, the guardian of the minor, or
(b) any relative or friend of the minor, or
(c) the Collector of the district or other local area within which the minor ordinarily resides or in which he has property, or
(d) the Collector having authority with respect to the class to which the minor belongs.`,
        },
        {
          number: "9",
          label: "Section 9",
          marginalNote: "Court having jurisdiction to entertain application",
          source: src(7),
          summary:
            "For the person of the minor, only the District Court where the minor ordinarily resides. For property, either that Court or the one where the property lies; the latter may return the petition to a more convenient forum.",
          verbatim: `(1) If the application is with respect to the guardianship of the person of the minor, it shall be made to the District Court having jurisdiction in the place where the minor ordinarily resides.

(2) If the application is with respect to the guardianship of the property of the minor, it may be made either to the District Court having jurisdiction in the place where the minor ordinarily resides or to a District Court having jurisdiction in a place where he has property.

(3) If an application with respect to the guardianship of the property of a minor is made to a District Court other than that having jurisdiction in the place where the minor ordinarily resides, the Court may return the application if in its opinion the application would be disposed of more justly or conveniently by any other District Court having jurisdiction.`,
        },
        {
          number: "10",
          label: "Section 10",
          marginalNote: "Form of application",
          source: src(7),
          summary:
            "Petition (verified like a plaint) must state minor's name/sex/religion/DOB/residence, marital status if female, property details, custodian, near relations, existing guardianship history, what is sought, qualifications or grounds of claim, and reasons; a willingness-declaration signed by the proposed guardian and two witnesses must be annexed. A Collector applies by letter.",
          verbatim: `(1) If the application is not made by the Collector, it shall be by petition signed and verified in manner prescribed by the Code of Civil Procedure (14 of 1882) for the signing and verification of a plaint, and stating, so far as can be ascertained—
(a) the name, sex, religion, date of birth and ordinary residence of the minor;
(b) where the minor is a female, whether she is married, and, if so, the name and age of her husband;
(c) the nature, situation and approximate value of the property, if any, of the minor;
(d) the name and residence of the person having the custody or possession of the person or property of the minor;
(e) what near relations the minor has, and where they reside;
(f) whether a guardian of the person or property, or both, of the minor has been appointed by any person entitled or claiming to be entitled by the law to which the minor is subject to make such an appointment;
(g) whether an application has at any time been made to the Court or to any other Court with respect to the guardianship of the person or property, or both, of the minor, and, if so, when, to what Court and with what result;
(h) whether the application is for the appointment or declaration of a guardian of the person of the minor, or of his property, or of both;
(i) where the application is to appoint a guardian, the qualifications of the proposed guardian;
(j) where the application is to declare a person to be a guardian, the grounds on which that person claims;
(k) the causes which have led to the making of the applications; and
(l) such other particulars, if any, as may be prescribed or as the nature of the application renders it necessary to state.

(2) If the application is made by the Collector, it shall be by letter addressed to the Court and forwarded by post or in such other manner as may be found convenient, and shall state as far as possible the particulars mentioned in sub-section (1).

(3) The application must be accompanied by a declaration of the willingness of the proposed guardian to act and the declaration must be signed by him and attested by at least two witnesses.`,
        },
        {
          number: "11",
          label: "Section 11",
          marginalNote: "Procedure on admission of application",
          source: src(7, 8),
          summary:
            "On admission, the Court fixes a hearing date and serves notice on the parents (if resident in India), the custodian, the proposed guardian and any other necessary party, plus a posted notice; where Court-of-Wards land is in the property, the Collector is also notified — service of these latter notices is free.",
          verbatim: `(1) If the Court is satisfied that there is ground for proceeding on the application, it shall fix a day for the hearing thereof, and cause notice of the application and of the date fixed for the hearing—
(a) to be served in the manner directed in the Code of Civil Procedure (14 of 1882) on—
(i) the parents of the minor if they are residing in any State to which this Act extends,
(ii) the person, if any, named in the petition or letter as having the custody or possession of the person or property of the minor,
(iii) the person proposed in the application or letter to be appointed or declared guardian, unless that person is himself the applicant, and
(iv) any other person to whom, in the opinion of the Court, special notice of the application should be given; and
(b) to be posted on some conspicuous part of the court-house, and of the residence of the minor, and otherwise published in such manner as the Court, subject to any rules made by the High Court under this Act, thinks fit.

(2) The State Government may, by general or special order, require that, when any part of the property described in a petition under section 10, sub-section (1), is land of which a Court of Wards could assume the superintendence, the Court shall also cause a notice as aforesaid to be served on the Collector in whose district the minor ordinarily resides, and on every Collector in whose district any portion of the land is situate, and the Collector may cause the notice to be published in any manner he deems fit.

(3) No charge shall be made by the Court or the Collector for the service or publication of any notice served or published under sub-section (2).`,
        },
        {
          number: "12",
          label: "Section 12",
          marginalNote: "Power to make interlocutory order for production of minor and interim protection of person and property",
          source: src(8),
          summary:
            "Court may order production of the minor and pass interim custody / property-protection orders; a female minor entitled to purdah must be produced consistent with custom; husband-custody of a female minor is barred unless she is already in her husband's custody with parental consent.",
          verbatim: `(1) The Court may direct that the person, if any, having the custody of the minor shall produce him or cause him to be produced at such place and time and before such person as it appoints, and may make such order for the temporary custody and protection of the person or property of the minor as it thinks proper.

(2) If the minor is a female who ought not to be compelled to appear in public, the direction under sub-section (1) for her production shall require her to be produced in accordance with the customs and manners of the country.

(3) Nothing in this section shall authorise—
(a) the Court to place a female minor in the temporary custody of a person claiming to be her guardian on the ground of his being her husband, unless she is already in his custody with the consent of her parents, if any, or
(b) any person to whom the temporary custody and protection of the property of a minor is entrusted to dispossess otherwise than by due course of law any person in possession of any of the property.`,
        },
        {
          number: "13",
          label: "Section 13",
          marginalNote: "Hearing of evidence before making of order",
          source: src(8),
          summary:
            "On the date fixed, the Court hears any evidence — for or against the appointment — before deciding.",
          verbatim: `On the day fixed for the hearing of the application, or as soon afterwards as may be, the Court shall hear such evidence as may be adduced in support of or in opposition to the application.`,
        },
        {
          number: "14",
          label: "Section 14",
          marginalNote: "Simultaneous proceedings in different Courts",
          source: src(8),
          summary:
            "Parallel guardianship proceedings must be stayed once each Court learns of the other; same-High-Court Courts report up for assignment, otherwise they take direction from their respective State Governments.",
          verbatim: `(1) If proceedings for the appointment or declaration of a guardian of a minor are taken in more Courts than one, each of those Courts shall, on being apprised of the proceedings in the other Court or Courts, stay the proceedings before itself.

(2) If the Courts are both or all subordinate to the same High Court, they shall report the case to the High Court, and the High Court shall determine in which of the Courts the proceedings with respect to the appointment or declaration of a guardian of the minor shall be had.

(3) In any other case in which proceedings are stayed under sub-section (1), the Courts shall report the case to, and be guided by such orders as they may receive from, their respective State Governments.`,
        },
        {
          number: "15",
          label: "Section 15",
          marginalNote: "Appointment or declaration of several guardians",
          source: src(8),
          summary:
            "If the minor's personal law permits joint guardians, the Court may appoint or declare them; person and property may have separate guardians; separate guardians may be appointed for each property.",
          verbatim: `(1) If the law to which the minor is subject admits of his having two or more joint guardians of his person or property, or both, the Court may, if it thinks fit, appoint or declare them.

* * * * *

(4) Separate guardians may be appointed or declared of the person and of the property of a minor.

(5) If a minor has several properties, the Court may, if it thinks fit, appoint or declare a separate guardian for any one or more of the properties.`,
        },
        {
          number: "16",
          label: "Section 16",
          marginalNote: "Appointment or declaration of guardian for property beyond jurisdiction of the Court",
          source: src(8, 9),
          summary:
            "A guardianship order over property outside the appointing Court's jurisdiction is binding — the local Court must accept the certified copy and give effect to the order.",
          verbatim: `If the Court appoints or declares a guardian for any property situate beyond the local limits of its jurisdiction, the Court having jurisdiction in the place where the property is situate shall, on production of a certified copy of the order appointing or declaring the guardian, accept him as duly appointed or declared and give effect to the order.`,
        },
        {
          number: "17",
          label: "Section 17",
          marginalNote: "Matters to be considered by the Court in appointing guardian",
          source: src(9),
          summary:
            "Welfare of the minor is the paramount test — Court weighs age, sex, religion, the proposed guardian's character/kinship/relations and any deceased parent's wishes; an intelligent minor's own preference may be considered; no one shall be appointed against their will.",
          verbatim: `(1) In appointing or declaring the guardian of a minor, the Court shall, subject to the provisions of this section, be guided by what, consistently with the law to which the minor is subject, appears in the circumstances to be for the welfare of the minor.

(2) In considering what will be for the welfare of the minor, the Court shall have regard to the age, sex and religion of the minor, the character and capacity of the proposed guardian and his nearness of kin to the minor, the wishes, if any, of a deceased parent, and any existing or previous relations of the proposed guardian with the minor or his property.

(3) If the minor is old enough to form an intelligent preference, the Court may consider that preference.

* * * * *

(5) The Court shall not appoint or declare any person to be a guardian against his will.`,
        },
        {
          number: "18",
          label: "Section 18",
          marginalNote: "Appointment or declaration of Collector in virtue of office",
          source: src(9),
          summary:
            "When a Collector is appointed by virtue of office, the order authorises whoever holds that office for the time being to act as guardian — guardianship rides with the post, not the person.",
          verbatim: `Where a Collector is appointed or declared by the Court in virtue of his office to be guardian of the person or property, or both, of a minor, the order appointing or declaring him shall be deemed to authorize and require the person for the time being holding the office to act as guardian of the minor with respect to his person or property, or both, as the case may be.`,
        },
        {
          number: "19",
          label: "Section 19",
          marginalNote: "Guardian not to be appointed by the Court in certain cases",
          source: src(9),
          summary:
            "Court cannot appoint a guardian for property already under a Court of Wards, for the person of a married female minor whose husband is not unfit, or — after the 2010 amendment — for the person of any other minor whose father or mother is alive and not unfit.",
          verbatim: `Nothing in this Chapter shall authorise the Court to appoint or declare a guardian of the property of a minor whose property is under the superintendence of a Court of Wards, or to appoint or declare a guardian of the person—
(a) of a minor who is a married female and whose husband is not, in the opinion of the Court, unfit to be guardian of her person, or
(b) of a minor, other than a married female, whose father or mother is living and is not, in the opinion of the court, unfit to be guardian of the person of the minor, or
(c) of a minor whose property is under the superintendence of a Court of Wards competent to appoint a guardian of the person of the minor.`,
        },
      ],
    },

    // ============================================================
    // Chapter III — Duties, Rights and Liabilities of Guardians
    // ============================================================
    {
      slug: "ch-3-duties-rights-and-liabilities",
      number: "III",
      title: "Duties, Rights and Liabilities of Guardians",
      range: ["20", "42"],
      intro:
        "Four mini-sub-chapters. **General** (§§20–23): the guardian is a fiduciary (§20), a minor cannot be guardian save for own family (§21), remuneration (§22), Collector-as-guardian sits under State control (§23). **Guardian of the person** (§§24–26): custody, support, education (§24); enforced return of an absconding ward (§25); leave to remove the ward from jurisdiction (§26). **Guardian of property** (§§27–37): prudent-man duty (§27), testamentary-guardian powers and limitations (§28), the all-important §29 (no sale/mortgage/long-lease of immovable property without Court permission), voidability of contraventions (§30), §31 standards for granting permission, variation of powers (§32), advice from the Court (§33), accounting/bond obligations (§34, §34A), bond/non-bond suits (§§35–36), §37 keeps general trustee remedies alive. **Termination** (§§38–42): survivorship, ten grounds for removal (§39), discharge (§40), cessation triggers (§41), appointment of successors (§42).",
      sections: [
        {
          number: "20",
          label: "Section 20",
          marginalNote: "Fiduciary relation of guardian to ward",
          source: src(9),
          summary:
            "Guardian stands in a fiduciary relation — cannot profit from the office; the relation extends to purchases between guardian and ward, and to transactions soon after majority while the influence still lingers.",
          verbatim: `(1) A guardian stands in a fiduciary relation to his ward, and, save as provided by the will or other instrument, if any, by which he was appointed, or by this Act, he must not make any profit out of his office.

(2) The fiduciary relation of a guardian to his ward extends to and affects purchases by the guardian of the property of the ward, and by the ward of the property of the guardian, immediately or soon after the ward has ceased to be a minor, and generally all transactions between them while the influence of the guardian still lasts or is recent.`,
        },
        {
          number: "21",
          label: "Section 21",
          marginalNote: "Capacity of minors to act as guardians",
          source: src(9),
          summary:
            "A minor cannot be guardian of any other minor, with two exceptions — his own wife or child, and (where he is the managing member of an undivided Hindu family) the wife or child of another minor member of that family.",
          verbatim: `A minor is incompetent to act as guardian of any minor except his own wife or child or where he is the managing member of an undivided Hindu family, the wife or child of another minor Member of that family.`,
        },
        {
          number: "22",
          label: "Section 22",
          marginalNote: "Remuneration of guardian",
          source: src(9, 10),
          summary:
            "Court-appointed guardian gets such allowance for care and pains as the Court thinks fit; Government-officer guardians draw the fees the State Government, by general or special order, directs from the ward's property.",
          verbatim: `(1) A guardian appointed or declared by the Court shall be entitled to such allowance, if any, as the Court thinks fit for his care and paints in the execution of his duties.

(2) When an officer of the Government, as such officer, is so appointed or declared to be guardian, such fees shall be paid to the Government out of the property of the ward as the State Government, by general or special order, directs.`,
        },
        {
          number: "23",
          label: "Section 23",
          marginalNote: "Control of Collector as guardian",
          source: src(10),
          summary:
            "A Collector appointed by the Court as guardian acts under the control of the State Government — or any authority the State Government notifies — in all matters of guardianship.",
          verbatim: `A Collector appointed or declared by the Court to be guardian of the person or property, or both, of a minor shall, in all matters connected with the guardianship of his ward, be subject to the control of the State Government or of such authority as that Government, by notification in the Official Gazette, appoints in this behalf.`,
        },
        {
          number: "24",
          label: "Section 24",
          marginalNote: "Duties of guardian of the person",
          source: src(10),
          summary:
            "Custody, support, health, education and 'such other matters as the law to which the ward is subject requires' — the substantive duties of a guardian of the person, in one sentence.",
          verbatim: `A guardian of the person of a ward is charged with the custody of the ward and must look to his support, health and education, and such other matters as the law to which the ward is subject requires.`,
        },
        {
          number: "25",
          label: "Section 25",
          marginalNote: "Title of guardian to custody of ward",
          source: src(10),
          summary:
            "If the ward leaves or is removed, the Court — on a welfare assessment — may order the ward's return and may arrest the ward (using a CrPC §100-equivalent power) for that purpose; mere absentee residence does not end guardianship.",
          verbatim: `(1) If a ward leaves or is removed from the custody of a guardian of his person, the Court, if it is of opinion that it will be for the welfare of the ward to return to the custody of his guardian, may make an order for his return, and for the purpose of enforcing the order may cause the ward to be arrested and to be delivered into the custody of the guardian.

(2) For the purpose of arresting the ward, the Court may exercise the power conferred on a Magistrate of the first class by section 100 of the Code of Criminal Procedure, 1882 (10 of 1882).

(3) The residence of a ward against the will of his guardian with a person who is not his guardian does not of itself terminate the guardianship.`,
        },
        {
          number: "26",
          label: "Section 26",
          marginalNote: "Removal of ward from jurisdiction",
          source: src(10),
          summary:
            "Court-appointed guardian of the person (not the Collector, not a testamentary guardian) cannot remove the ward beyond the appointing Court's jurisdiction without that Court's leave (general or special), save for purposes prescribed by rule.",
          verbatim: `(1) A guardian of the person appointed or declared by the Court unless he is the Collector or is a guardian appointed by will or other instrument, shall not, without the leave of the Court by which he was appointed or declared, remove the ward from the limits of its jurisdiction except for such purposes as may be prescribed.

(2) The leave granted by the Court under sub-section (1) may be special or general, and may be defined by the order granting it.`,
        },
        {
          number: "27",
          label: "Section 27",
          marginalNote: "Duties of guardian of property",
          source: src(10),
          summary:
            "Prudent-man duty — deal with the ward's property as carefully as a man of ordinary prudence would deal with his own, and do all reasonable acts for its realisation, protection or benefit.",
          verbatim: `A guardian of the property of a ward is bound to deal therewith as carefully as a man of ordinary prudence would deal with it if it were his own, and, subject to the provisions of this Chapter, he may do all acts which are reasonable and proper for the realisation, protection or benefit of the property.`,
        },
        {
          number: "28",
          label: "Section 28",
          marginalNote: "Powers of testamentary guardian",
          source: src(10),
          summary:
            "A testamentary guardian's power to alienate the ward's immovable property is bounded by the appointing instrument — unless the Court, after declaring him guardian, permits a specific disposal by order in writing.",
          verbatim: `Where a guardian has been appointed by will or other instrument, his power to mortgage or charge, or transfer by sale, gift, exchange or otherwise, immovable property belonging to his ward is subject to any restriction which may be imposed by the instrument, unless he has under this Act been declared guardian and the Court which made the declaration permits him by an order in writing, notwithstanding the restriction, to dispose of any immovable property specified in the order in a manner permitted by the order.`,
        },
        {
          number: "29",
          label: "Section 29",
          marginalNote: "Limitation of powers of guardian of property appointed or declared by the Court",
          source: src(10, 11),
          summary:
            "A Court-appointed guardian (not the Collector, not a testamentary guardian) cannot — without prior Court permission — mortgage, charge or transfer the ward's immovable property by sale/gift/exchange, or lease it for more than 5 years or beyond 1 year past majority.",
          verbatim: `Where a person other than a Collector, or than a guardian appointed by will or other instrument, has been appointed or declared by the Court to be guardian of the property of a ward, he shall not, without the previous permission of the Court,—
(a) mortgage or charge, or transfer by sale, gift, exchange or otherwise, any part of the immovable property of his ward, or
(b) lease any part of that property for a term exceeding five years or for any term extending more than one year beyond the date on which the ward will cease to be a minor.`,
        },
        {
          number: "30",
          label: "Section 30",
          marginalNote: "Voidability of transfers made in contravention of section 28 or section 29",
          source: src(11),
          summary:
            "A disposal that breaches §28 or §29 is voidable at the instance of any other person affected — not void; protected purchasers and the ward both get the choice.",
          verbatim: `A disposal of immovable property by a guardian in contravention of either of the two last foregoing sections is voidable at the instance of any other person affected thereby.`,
        },
        {
          number: "31",
          label: "Section 31",
          marginalNote: "Practice with respect to permitting transfers under section 29",
          source: src(11),
          summary:
            "Permission under §29 is only for necessity or evident advantage to the ward; the order must recite the reason, describe the property, attach conditions (auction, premium-bar, Court deposit of proceeds, etc.), be in the Judge's own hand or dictated, and the Court may notify any relative/friend who should be heard.",
          verbatim: `(1) Permission to the guardian to do any of the acts mentioned in section 29 shall not be granted by the Court except in case of necessity or for an evident advantage to the ward.

(2) The order granting the permission shall recite the necessity or advantage, as the case may be, describe the property with respect to which the act permitted is to be done, and specify such conditions, if any, as the Court may see fit to attach to the permission; and it shall be recorded, dated and signed by the Judge of the Court with his own hand, or, when from any cause he is prevented from recording the order with his own hand, shall be taken down in writing from his dictation and be dated and signed by him.

(3) The Court may in its discretion attach to the permission the following among other conditions, namely:—
(a) that a sale shall not be completed without the sanction of the Court;
(b) that a sale shall be made to the highest bidder by public auction, before the Court or some person specially appointed by the Court for that purpose, at a time and place to be specified by the Court, after such proclamation of the intended sale as the Court, subject to any rules made under this Act by the High Court, directs;
(c) that a lease shall not be made in consideration of a premium or shall be made for such term of years and subject to such rents and covenants as the Court directs;
(d) that the whole or any part of the proceeds of the act permitted shall be paid into the Court by the guardian, to be disbursed therefrom or to be invested by the Court on prescribed securities or to be otherwise disposed of as the Court directs.

(4) Before granting permission to a guardian to do an act mentioned in section 29, the Court may cause notice of the application for the permission to be given to any relative or friend of the ward who should, in its opinion, receive notice thereof, and shall hear and record the statement of any person who appears in opposition to the application.`,
        },
        {
          number: "32",
          label: "Section 32",
          marginalNote: "Variation of powers of guardian of property appointed or declared by the Court",
          source: src(11),
          summary:
            "Where a guardian of property (other than the Collector) is Court-appointed, the Court may from time to time by order define, restrict or extend his powers — as the welfare of the ward and the applicable law require.",
          verbatim: `Where a guardian of the property of a ward has been appointed or declared by the Court and such guardian is not the Collector, the Court may, from time to time, by order, define, restrict or extend his powers with respect to the property of the ward in such manner and to such extent as it may consider to be for the advantage of the ward and consistent with the law to which the ward is subject.`,
        },
        {
          number: "33",
          label: "Section 33",
          marginalNote: "Right of guardian so appointed or declared to apply to the Court for opinion in management of property of ward",
          source: src(11, 12),
          summary:
            "A Court-appointed guardian may petition for the Court's opinion, advice or direction on a present management question; acting in good faith on the advice is, for own-responsibility purposes, a discharge of duty.",
          verbatim: `(1) A guardian appointed or declared by the Court may apply by petition to the Court which appointed or declared him for its opinion, advice or direction on any present question respecting the management or administration of the property of his ward.

(2) If the Court considers the question to be proper for summary disposal, it shall cause a copy of the petition to be served on, and the hearing thereof may be attended by, such of the persons interested in the application as the Court thinks fit.

(3) The guardian stating in good faith the facts in the petition and acting upon the opinion, advice or direction given by the Court shall be deemed, so far as regards his own responsibility, to have performed his duty as guardian in the subject-matter of the application.`,
        },
        {
          number: "34",
          label: "Section 34",
          marginalNote: "Obligations on guardian of property appointed or declared by the Court",
          source: src(12),
          summary:
            "Court-appointed property-guardian (not Collector) may be required to give a bond, file an inventory within six months, exhibit accounts on demand, deposit balances, and apply income to the ward's maintenance, education and ceremonies.",
          verbatim: `Where a guardian of the property of a ward has been appointed or declared by the Court and such guardian is not the Collector, he shall,—
(a) if so required by the Court, give a bond, as nearly as may be in the prescribed form, to the Judge of the Court to ensure for the benefit of the Judge for the time being, with or without sureties, as may be prescribed, engaging duly to account for what he may receive in respect of the property of the ward;
(b) if so required by the Court, deliver to the Court, within six months from the date of his appointment or declaration by the Court, or within such other time as the Court directs, a statement of the immovable property belonging to the ward, of the money and other movable property which he has received on behalf of the ward up to the date of delivering the statement, and of the debts due on that date to or from the ward;
(c) if so required by the Court, exhibit his accounts in the Court at such times and in such form as the Court from time to time directs;
(e) if so required by the Court, pay into the Court at such time as the Court directs the balance due from him on those accounts, or so much thereof as the Court directs; and
(f) apply for the maintenance, education and advancement of the ward and of such persons as are dependent on him, and for the celebration of ceremonies to which the ward or any of those persons may be a party, such portion of the income of the property of the ward as the Court from time to time directs, and, if the Court so directs, the whole or any part of that property.`,
        },
        {
          number: "34A",
          label: "Section 34A",
          marginalNote: "Power to award remuneration for auditing accounts",
          source: src(12),
          summary:
            "When a property-guardian exhibits accounts, the Court may appoint an auditor and direct that remuneration for the audit be paid out of the income of the ward's property.",
          verbatim: `When accounts are exhibited by a guardian of the property of a ward in pursuance of a requisition made under clause (c) of section 34 or otherwise, the Court may appoint a person to audit the accounts, and may direct that remuneration for the work be paid out of the income of the property.`,
        },
        {
          number: "35",
          label: "Section 35",
          marginalNote: "Suit against guardian where administration-bond was taken",
          source: src(12),
          summary:
            "If an admin-bond is in place and is breached, the Court may, on petition, assign the bond to a proper person who can then sue on it as trustee for the ward and recover damages.",
          verbatim: `Where a guardian appointed or declared by the Court has given a bond duly to account for what he may receive in respect of the property of his ward, the Court may, on application made by petition and on being satisfied that the engagement of the bond has not been kept, and upon such terms as to security, or providing that any money received be paid into the Court, or otherwise as the Court thinks fit, assign the bond to some proper person, who shall thereupon be entitled to sue on the bond in his own name as if the bond had been originally given to him instead of to the Judge of the Court, and shall be entitled to recover thereon, as trustee for the ward, in respect of any breach thereof.`,
        },
        {
          number: "36",
          label: "Section 36",
          marginalNote: "Suit against guardian where administration-bond was not taken",
          source: src(12, 13),
          summary:
            "Without a bond, any person may — with Court's leave, as next friend — sue the guardian (or his representative) during the ward's minority for an account of property received; subject to CPC §440 (now Order XXXII Rules 1 and 4(2)).",
          verbatim: `(1) Where a guardian appointed or declared by the Court has not given a bond as aforesaid, any person, with the leave of the Court, may, as next friend, at any time during the continuance of the minority of the ward, and upon such terms as aforesaid, institute a suit against the guardian, or, in case of his death, against his representative, for an account of what the guardian has received in respect of the property of the ward, and may recover in the suit, as trustee for the ward, such amount as may be found to be payable by the guardian or his representative, as the case may be.

(2) The provisions of sub-section (1) shall, so far as they relate to a suit against a guardian, be subject to the provisions of section 440 of the Code of Civil Procedure (14 of 1882) as amended by this Act.`,
        },
        {
          number: "37",
          label: "Section 37",
          marginalNote: "General liability of guardian as trustee",
          source: src(13),
          summary:
            "§§35 and 36 are without prejudice — the ward retains every remedy that a beneficiary would have against a trustee, in addition to anything those two sections specifically allow.",
          verbatim: `Nothing in either of the two last foregoing sections shall be construed to deprive a ward or his representative of any remedy against his guardian, or the representative of the guardian, which, not being expressly provided in either of those sections, any other beneficiary or his representative would have against his trustee or the representative of the trustee.`,
        },
        {
          number: "38",
          label: "Section 38",
          marginalNote: "Right of survivorship among joint guardians",
          source: src(13),
          summary:
            "On the death of one of two or more joint guardians, the guardianship continues to the survivor or survivors until the Court makes a fresh appointment.",
          verbatim: `On the death of one of two or more joint guardians, the guardianship continues to the survivor or survivors until a further appointment is made by the Court.`,
        },
        {
          number: "39",
          label: "Section 39",
          marginalNote: "Removal of guardian",
          source: src(13),
          summary:
            "Ten grounds for removal — abuse of trust, continued failure, incapacity, ill-treatment, contumacious disregard of Court orders, conviction showing defect of character, adverse interest, ceasing to reside in the jurisdiction, bankruptcy (property guardians), or personal-law cessation; testamentary guardians get two carve-outs.",
          verbatim: `The Court may, on the application of any person interested, or of its own motion, remove a guardian appointed or declared by the Court, or a guardian appointed by will or other instrument, for any of the following causes, namely:—
(a) for abuse of his trust;
(b) for continued failure to perform the duties of his trust;
(c) for incapacity to perform the duties of his trust;
(d) for ill-treatment, or neglect to take proper care, of his ward;
(e) for contumacious disregard of any provision of this Act or of any order of the Court;
(f) for conviction of an offence implying, in the opinion of the Court, a defect of character which unfits him to be the guardian of his ward;
(g) for having an interest adverse to the faithful performance of his duties;
(h) for ceasing to reside within the local limits of the jurisdiction of the Court;
(i) in the case of a guardian of the property, for bankruptcy or insolvency;
(j) by reason of the guardianship of the guardian ceasing, or being liable to cease, under the law to which the minor is subject:

Provided that a guardian appointed by will or other instrument, whether he has been declared under this Act or not, shall not be removed—
(a) for the cause mentioned in clause (g) unless the adverse interest accrued after the death of the person who appointed him, or it is shown that that person made and maintained the appointment in ignorance of the existence of the adverse interest, or
(b) for the cause mentioned in clause (h) unless such guardian has taken up such a residence as, in the opinion of the Court, renders it impracticable for him to discharge the functions of guardian.`,
        },
        {
          number: "40",
          label: "Section 40",
          marginalNote: "Discharge of guardian",
          source: src(13),
          summary:
            "Court-appointed guardian may apply to be discharged; the Court discharges him on finding sufficient reason; a Collector applying with State Government approval must in any case be discharged.",
          verbatim: `(1) If a guardian appointed or declared by the Court desires to resign his office, he may apply to the Court to be discharged.

(2) If the Court finds that there is sufficient reason for the application, it shall discharge him, and if the guardian making the application is the Collector and the State Government approves of his applying to be discharged, the Court shall in any case discharge him.`,
        },
        {
          number: "41",
          label: "Section 41",
          marginalNote: "Cessation of authority of guardian",
          source: src(13, 14),
          summary:
            "Powers of a guardian of the person end on death/removal/discharge, Court-of-Wards superintendence, the ward attaining majority, the female ward's marriage to a not-unfit husband, or the previously unfit father ceasing to be unfit. Property-guardian powers end on death/removal/discharge, Court-of-Wards superintendence, or majority. When powers cease, the Court may require delivery of property and accounts and may declare discharge of liability save for subsequently discovered fraud.",
          verbatim: `(1) The powers of a guardian of the person cease—
(a) by his death, removal or discharge;
(b) by the Court of Wards assuming superintendence of the person of the ward;
(c) by the ward ceasing to be a minor;
(d) in the case of a female ward, by her marriage to a husband who is not unfit to be guardian of her person or, if the guardian was appointed or declared by the Court, by her marriage to a husband who is not, in the opinion of the Court, so unfit; or
(e) in the case of a ward whose father was unfit to be guardian of the person of the ward, by the father ceasing to be so or, if the father was deemed by the Court to be so unfit, by his ceasing to be so in the opinion of the Court.

(2) The powers of a guardian of the property cease—
(a) by his death, removal or discharge;
(b) by the Court of Wards assuming superintendence of the property of the ward; or
(c) by the ward ceasing to be a minor.

(3) When for any cause the powers of a guardian cease, the Court may require him or, if he is dead, his representative to deliver as it directs any property in his possession or control belonging to the ward or any accounts in his possession or control relating to any past or present property of the ward.

(4) When he has delivered the property or accounts as required by the Court, the Court may declare him to be discharged from his liabilities save as regards any fraud which may subsequently be discovered.`,
        },
        {
          number: "42",
          label: "Section 42",
          marginalNote: "Appointment of successor to guardian dead, discharged or removed",
          source: src(14),
          summary:
            "If the existing guardian is discharged, ceases to be entitled to act, is removed or dies — and the ward is still a minor — the Court may, on its own motion or on a Chapter II application, appoint or declare a successor.",
          verbatim: `When a guardian appointed or declared by the Court is discharged, or, under the law to which the ward is subject, ceases to be entitled to act, or when any such guardian or a guardian appointed by will or other instrument is removed or dies, the Court, of its own motion or on application under Chapter II, may, if the ward is still a minor, appoint or declare another guardian of his person or property, or both, as the case may be.`,
        },
      ],
    },

    // ============================================================
    // Chapter IV — Supplemental Provisions
    // ============================================================
    {
      slug: "ch-4-supplemental-provisions",
      number: "IV",
      title: "Supplemental Provisions",
      range: ["43", "53"],
      intro:
        "Wrap-up machinery. §43 lets the Court regulate guardian conduct and resolve disagreements between joint guardians, enforceable as a CPC injunction. §§44–45 supply penalties (jurisdictional removal of the ward; contumacy in non-production, statement-filing or account-exhibition). §46 lets the Court call for Collector or subordinate-court reports. §47 lists the orders that carry an appeal to the High Court; §48 makes everything else final. §49 fixes costs, §50 gives the High Court the rule-making head. §51 ports older guardianship appointments into this Act, and §§52–53 (plus the Schedule) are repealed.",
      sections: [
        {
          number: "43",
          label: "Section 43",
          marginalNote: "Orders for regulating conduct or proceedings of guardians, and enforcement of those orders",
          source: src(14, 15),
          summary:
            "Court may regulate the conduct of any Court-appointed guardian and resolve disagreements between joint guardians; orders are enforceable like a CPC injunction (§§492–493 of CPC 1882). §43(1) does not apply to a Collector who is, as such, a guardian.",
          verbatim: `(1) The Court may, on the application of any person interested or of its own motion, make an order regulating the conduct or proceedings of any guardian appointed or declared by the Court.

(2) Where there are more guardians than one of a ward, and they are unable to agree upon a question affecting his welfare, any of them may apply to the Court for its direction, and the Court may make such order respecting the matter in difference as it thinks fit.

(3) Except where it appears that the object of making an order under sub-section (1) or sub-section (2) would be defeated by the delay, the Court shall, before making the order, direct notice of the application therefor or of the intention of the Court to make it, as the case may be, to be given, in a case under sub-section (1), to the guardian or, in a case under sub-section (2), to the guardian who has not made the application.

(4) In case of disobedience to an order made under sub-section (1) or sub-section (2), the order may be enforced in the same manner as an injunction granted under section 492 or section 493 of the Code of Civil Procedure (14 of 1882), in a case under sub-section (1), as if the ward were the plaintiff and the guardian were the defendant or, in a case under sub-section (2), as if the guardian who made the application were the plaintiff and the other guardian were the defendant.

(5) Except in a case under sub-section (2), nothing in this section shall apply to a Collector who is, as such, a guardian.`,
        },
        {
          number: "44",
          label: "Section 44",
          marginalNote: "Penalty for removal of ward from jurisdiction",
          source: src(15),
          summary:
            "A Court-appointed guardian who removes the ward outside the Court's jurisdiction in breach of §26 — to defeat the Court's authority — is liable to a fine up to ₹1,000 or civil-jail imprisonment up to six months.",
          verbatim: `If, for the purpose or with the effect of preventing the Court from exercising its authority with respect to a ward, a guardian appointed or declared by the Court removes the ward from the limits of the jurisdiction of the Court in contravention of the provisions of section 26, he shall be liable, by order of the Court, to find not exceeding one thousand rupees, or to imprisonment in the civil jail for a term which may extend to six months.`,
        },
        {
          number: "45",
          label: "Section 45",
          marginalNote: "Penalty for contumacy",
          source: src(15),
          summary:
            "Custodian who flouts a §12(1) production direction or §25(1) return order, or a guardian who fails to file the §34 statement, exhibit accounts, deposit the balance, or deliver property under §41(3), is liable to a ₹100 fine (plus ₹10/day continuing fine, capped at ₹500) and civil-jail detention until compliance.",
          verbatim: `(1) In the following cases, namely:—
(a) if a person having the custody of a minor fails to produce him or cause him to be produced in compliance with a direction under section 12, sub-section (1), or to do his utmost to compel the minor to return to the custody of his guardian in obedience to an order under section 25, sub-section (1), or
(b) if a guardian appointed or declared by the Court fails to deliver to the Court, within the time allowed by or under clause (b) of section 34, a statement required under that clause, or to exhibit accounts in compliance with a requisition under clause (c) of that section, or to pay into the Court the balance due from him on those accounts in compliance with a requisition under clause (d) of that section, or
(c) if a person who has ceased to be a guardian, or the representative of such a person, fails to deliver any property or accounts in compliance with a requisition under section 41, sub-section (3),
the person, guardian or representative, as the case may be, shall be liable, by order of the Court, to fine not exceeding one hundred rupees, and in case of recusancy to further fine not exceeding ten rupees for each day after the first during which the default continues, and not exceeding five hundred rupees in the aggregate, and to detention in the civil jail until he undertakes to produce the minor or cause him to be produced, or to compel his return, or to deliver the statement, or to exhibit the accounts, or to pay the balance, or to deliver the property or accounts, as the case may be.

(2) If a person who has been released from detention on giving an undertaking under sub-section (1) fails to carry out the undertaking within the time allowed by the Court, the Court may cause him to be arrested and re-committed to the civil jail.`,
        },
        {
          number: "46",
          label: "Section 46",
          marginalNote: "Reports by Collectors and subordinate Courts",
          source: src(15),
          summary:
            "Court may call on the Collector or a subordinate Court for a report on any matter in a guardianship proceeding and treat that report as evidence; the reporting officer enjoys CPC witness-summoning power for the inquiry.",
          verbatim: `(1) The Court may call upon the Collector, or upon any court subordinate to the Court, for a report on any matter arising in any proceeding under this Act and treat the report as evidence.

(2) For the purpose of preparing the report the Collector or the Judge of the subordinate Court as the case may be, shall make such inquiry as he deems necessary, and may for the purposes of the inquiry exercise any power of compelling the attendance of a witness to give evidence or produce a document which is conferred on a Court by the Code of Civil Procedure (14 of 1882).`,
        },
        {
          number: "47",
          label: "Section 47",
          marginalNote: "Orders appealable",
          source: src(15, 16),
          summary:
            "Appeal lies to the High Court from ten classes of order — §7 appointment/refusal, §9(3) return of application, §25 custody return, §26 leave to remove the ward, §28/§29 refusal of permission, §32 variation of powers, §39 removal, §40 refusal to discharge, §43 conduct/joint-guardian order, and §44/§45 penalties.",
          verbatim: `An appeal shall lie to the High Court from an order made by a Court,—
(a) under section 7, appointing or declaring or refusing to appoint or declare a guardian; or,
(b) under section 9, sub-section (3), returning an application; or,
(c) under section 25, making or refusing to make an order for the return of a ward to the custody of his guardian; or,
(d) under section 26, refusing leave for the removal of a ward from the limits of the jurisdiction of the Court, or imposing conditions with respect thereto; or,
(e) under section 28 or section 29, refusing permission to a guardian to do an act referred to in the section; or,
(f) under section 32, defining, restricting or extending the powers of a guardian; or,
(g) under section 39, removing a guardian; or,
(h) under section 40, refusing to discharge a guardian; or,
(i) under section 43, regulating the conduct or proceedings of a guardian or settling a matter in difference between joint guardians, or enforcing the order; or,
(j) under section 44 or section 45, imposing a penalty.`,
        },
        {
          number: "48",
          label: "Section 48",
          marginalNote: "Finality of other orders",
          source: src(16),
          summary:
            "Save for the §47 appeals and the CPC §622 revisional route (now §115 CPC 1908), every order under this Act is final and cannot be contested by suit or otherwise.",
          verbatim: `Save as provided by the last foregoing section and by section 622 of the Code of Civil Procedure (14 of 1882), an order made under this Act shall be final and shall not be liable to be contested by suit or otherwise.`,
        },
        {
          number: "49",
          label: "Section 49",
          marginalNote: "Costs",
          source: src(16),
          summary:
            "Costs of any proceeding under this Act — including the cost of maintaining a guardian or other person in civil jail — are in the Court's discretion, subject to High Court rules.",
          verbatim: `The costs of any proceeding under this Act, including the costs of maintaining a guardian or other person in the civil jail, shall, subject to any rules made by the High Court under this Act, be in the discretion of the Court in which the proceeding is had.`,
        },
        {
          number: "50",
          label: "Section 50",
          marginalNote: "Power of High Court to make rules",
          source: src(16),
          summary:
            "High Court may make rules on Collector-and-subordinate-Court reports, allowances and securities, transfer-permission practice, §34 requisitions, statements/accounts custody and inspection, §34A audit, custody and investment of ward's money, ward's education, and general guidance; rules under clauses (a) and (j) need State Government approval and all rules require gazette notification.",
          verbatim: `(1) In addition to any other power to make rules conferred expressly or impliedly by this Act, the High Court may from time to time make rules consistent with this Act—
(a) as to the matters respecting which, and the time at which, reports should be called for from Collectors and subordinate Courts;
(b) as to the allowances to be granted to, and the security to be required from, guardians, and the cases in which such allowances should be granted;
(c) as to the procedure to be followed with respect to applications of guardians for permission to do acts referred to in sections 28 and 29;
(d) as to the circumstances in which such requisitions as are mentioned in clauses (a), (b), (c) and (d) of section 34 should be made;
(e) as to the preservation of statements and accounts delivered and exhibited by guardians;
(ff) as to the inspection of those statements and accounts by persons interested;
(ff) as to the audit of accounts under section 34A, the class of persons who should be appointed to audit accounts, and the scales of remuneration to be granted to them;
(g) as to the custody of money, and securities for money, belonging to wards;
(h) as to the securities on which money belonging to wards may be invested;
(i) as to the education of wards for whom guardians, not being Collectors, have been appointed or declared by the Court; and,
(j) generally, for the guidance of the Courts in carrying out the purposes of this Act.

(2) Rules under clauses (a) and (j) of sub-section (1) shall not have effect until they have been approved by the State Government, nor shall any rule under this section have effect until it has been published in the Official Gazette.`,
        },
        {
          number: "51",
          label: "Section 51",
          marginalNote: "Applicability of Act to guardians already appointed by Court",
          source: src(17),
          summary:
            "A guardian appointed by — or holding a certificate of administration from — a Civil Court under any enactment repealed by this Act is, save as prescribed, subject to this Act and its rules as if he had been appointed or declared under Chapter II.",
          verbatim: `A guardian appointed by, or holding a certificate of administration from, a Civil Court under any enactment repealed by this Act shall, save as may be prescribed, be subject to the provisions of this Act, and of the rules made under it, as if he had been appointed or declared by the Court under Chapter II.`,
        },
        {
          number: "52",
          label: "Section 52",
          marginalNote: "[Repealed]",
          source: src(17),
          importance: "transitional",
          summary:
            "Repealed by the Repealing Act, 1938 (1 of 1938), §2 and the Schedule (originally amended the Indian Majority Act).",
          verbatim: `[Amendment of Indian Majority Act.] Rep. by the Repealing Act, 1938 (1 of 1938), s. 2 and the Schedule.`,
        },
        {
          number: "53",
          label: "Section 53",
          marginalNote: "[Repealed]",
          source: src(17),
          importance: "transitional",
          summary:
            "Repealed by the Code of Civil Procedure, 1908 (5 of 1908), §156 and the Fifth Schedule (originally amended Chapter XXXI of the 1882 CPC).",
          verbatim: `[Amendment of Chapter XXXI of the Code of Civil Procedure.] Rep. by the Code of Civil Procedure, 1908 (5 of 1908), s. 156 and the Fifth Schedule.`,
        },
      ],
    },
  ],
};
