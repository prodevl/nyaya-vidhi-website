/**
 * The Indian Christian Marriage Act, 1872 — Act No. 15 of 1872.
 *
 * Phase 2 coverage: MVP (verbatim + 1-line summary + source PDF page per
 * section). All 88 sections authored (including those marked
 * Repealed/Omitted in the original text). Schedules I–V are described in a
 * single closing entry under Chapter VIII for completeness.
 *
 * Source PDF: c:/Users/Debabrata Barman/Documents/The law & order/
 *   Family & Personal Laws/Indian Christian Marriage Act, 1872.pdf
 * Raw extract: lib/statutes/_raw/indian-christian-marriage-act-1872.txt
 */

import type { Statute } from "../_types";

const SOURCE_BASE =
  "/pdfs/Family%20%26%20Personal%20Laws/Indian%20Christian%20Marriage%20Act,%201872.pdf";
const SOURCE_FILE = "Indian Christian Marriage Act, 1872.pdf";

const src = (page: number, pageEnd?: number) => ({
  pdfPath: `${SOURCE_BASE}#page=${page}`,
  pdfFile: SOURCE_FILE,
  pdfPage: page,
  ...(pageEnd ? { pdfPageEnd: pageEnd } : {}),
});

export const indianChristianMarriageAct1872: Statute = {
  meta: {
    slug: "indian-christian-marriage-act-1872",
    shortName: "Indian Christian Marriage Act",
    fullName: "The Indian Christian Marriage Act, 1872",
    year: 1872,
    tagline: "Solemnisation of Christian marriage in India.",
    summary:
      "Act 15 of 1872 — the consolidating statute for Christian marriage. Lists the five categories of persons who may solemnise (episcopally-ordained clergy, Church of Scotland clergy, licensed Ministers of Religion, Marriage Registrars, and §9-licensees for Indian-Christian marriages); fixes the time window (6 a.m. to 7 p.m.) and place (church or §11 special-licence venue); sets out the parallel notice/certificate procedures under Part III (before Ministers), Part V (before Marriage Registrars) and Part VI (between Indian Christians); requires consent of father, guardian or mother for any minor under 21; mandates registration with the Registrar General of Births, Deaths and Marriages; and supplies a graded penalty ladder in Part VII covering false notices, marriage out of hours, marriage of a minor without consent, unlicensed solemnisation and falsification of register-books.",
    preamble:
      "WHEREAS it is expedient to consolidate and amend the law relating to the solemnization in India of the marriages of persons professing the Christian religion; It is hereby enacted as follows:—",
    categorySlug: "family-and-personal-laws",
    enactedOn: "1872-07-18",
    commencement: "18 July 1872 (date of assent).",
    totalSections: 88,
    totalChapters: 8,
    sourcePdf: { pdfPath: SOURCE_BASE, pdfFile: SOURCE_FILE, pdfPage: 1 },
    coverage: "mvp",
    tier: 2,
    amendments: [
      { year: 1891, shortName: "Act 2 of 1891", note: "Recast §§6, 62, 66, 68; inserted savings for Church of Scotland." },
      { year: 1952, shortName: "Act 48 of 1952", note: "Raised minimum age under §60 from 16/13 to 18/15." },
      { year: 1978, shortName: "Child Marriage Restraint (Amendment) Act, 1978 (Act 2 of 1978)", note: "Further raised minimum age under §60 to 21 (male) / 18 (female) with effect from 1 October 1978." },
      { year: 1983, shortName: "Act 20 of 1983", note: "Added §83(2) laying clause for State Government rules." },
      { year: 2019, shortName: "Act 34 of 2019 (J&K Reorganisation)", note: "Removed J&K exclusion from §1; Act now extends to the whole of India (with limited Travancore-Cochin / Manipur carve-outs originally noted)." },
    ],
  },

  chapters: [
    // ============================================================
    // Preliminary (treated as Chapter I for routing)
    // ============================================================
    {
      slug: "preliminary",
      number: "I",
      title: "Preliminary",
      range: ["1", "3"],
      intro:
        "Three opening sections. §1 names the Act and fixes its territorial extent (now the whole of India after the 2019 J&K reorganisation, with limited historical carve-outs). §2 was repealed by the Repealing Act, 1938. §3 is the dictionary — defining 'Church of England', 'Church of Scotland', 'Church of Rome', 'Church', 'India', 'minor' (under 21 and not a widow/widower), 'Christians', 'Indian Christians' and the 'Registrar General of Births, Deaths and Marriages'.",
      sections: [
        {
          number: "1",
          label: "Section 1",
          marginalNote: "Short title and extent",
          source: src(5),
          summary:
            "Names the Act and extends it to the whole of India (Travancore-Cochin and Manipur historically excluded; J&K exclusion removed in 2019).",
          verbatim: `Short title.—This Act may be called the Indian Christian Marriage Act, 1872.

Extent.—It extends to the whole of India except the territories which, immediately before the 1st November, 1956, were comprised in the States of Travancore-Cochin, Manipur and [Jammu and Kashmir, omitted by Act 34 of 2019].`,
        },
        {
          number: "2",
          label: "Section 2",
          marginalNote: "Enactments repealed",
          source: src(5),
          summary:
            "Repealed by the Repealing Act, 1938.",
          verbatim: `[Enactments repealed.]—Rep. by the Repealing Act, 1938 (1 of 1938), s. 2 and the Schedule.`,
        },
        {
          number: "3",
          label: "Section 3",
          marginalNote: "Interpretation clause",
          source: src(5, 6),
          summary:
            "Dictionary section — defines Church of England, Church of Scotland, Church of Rome, Church, India, minor (under 21 and not widowed), Christians, Indian Christians and the Registrar General of Births, Deaths and Marriages.",
          verbatim: `Interpretation clause.—In this Act, unless there is something repugnant in the subject or context,—

"Church of England" and "Anglican".—mean and apply to the Church of England as by law established;
"Church of Scotland".—means the Church of Scotland as by law established;
"Church of Rome" and "Roman Catholic".—mean and apply to the Church which regards the Pope of Rome as its spiritual head;
"Church".—includes any chapel or other building generally used for public Christian worship;
"India".—means the territories to which this Act extends;
"minor".—"minor" means a person who has not completed the age of twenty-one years and who is not a widower or a widow;
the expression "Christians" means persons professing the Christian religion;
and the expression "Indian Christians" includes the Christian descendants of natives of India converted to Christianity, as well as such converts;
"Registrar General of Births, Deaths and Marriages".—means a Registrar General of Births, Deaths and Marriages appointed under the Births, Deaths and Marriages Registration Act, 1886 (6 of 1886).`,
        },
      ],
    },

    // ============================================================
    // Part I — The persons by whom marriages may be solemnized
    // ============================================================
    {
      slug: "part-1-persons-solemnizing",
      number: "II",
      title: "Part I — The persons by whom marriages may be solemnized",
      range: ["4", "9"],
      intro:
        "The 'who may marry whom' chapter. §4 makes Act-compliant solemnisation mandatory wherever even one party is Christian, on pain of voidness. §5 lists the five categories of persons authorised to solemnise: episcopally-ordained clergy, Clergymen of the Church of Scotland, Ministers of Religion licensed under the Act, Marriage Registrars, and persons licensed under §9 to certify marriages between Indian Christians. §§6–9 describe State Government licensing and revocation of those licences and the appointment of Marriage Registrars.",
      sections: [
        {
          number: "4",
          label: "Section 4",
          marginalNote: "Marriages to be solemnized according to Act",
          source: src(6),
          summary:
            "Any marriage where one or both parties is Christian must be solemnised under §5; otherwise it is void.",
          verbatim: `Marriages to be solemnized according to Act.—Every marriage between persons, one or both of whom is or are a Christian or Christians, shall be solemnized in accordance with the provisions of the next following section; and any such marriage solemnized otherwise than in accordance with such provisions shall be void.`,
        },
        {
          number: "5",
          label: "Section 5",
          marginalNote: "Persons by whom marriages may be solemnized",
          source: src(6),
          summary:
            "Five categories may solemnise: (1) episcopally-ordained clergy, (2) Church of Scotland clergy, (3) Ministers of Religion licensed under this Act, (4) Marriage Registrars, and (5) §9-licensees for Indian Christian marriages.",
          verbatim: `Persons by whom marriages may be solemnized.—Marriages may be solemnized in India—
(1) by any person who has received episcopal ordination, provided that the marriage be solemnized according to the rules, rites, ceremonies and customs of the Church of which he is a Minister;
(2) by any Clergyman of the Church of Scotland, provided that such marriage be solemnized according to the rules, rites, ceremonies and customs of the Church of Scotland;
(3) by any Minister of Religion licensed under this Act to solemnize marriages;
(4) by, or in the presence of, a Marriage Registrar appointed under this Act;
(5) by any person licensed under this Act to grant certificates of marriage between Indian Christians.`,
        },
        {
          number: "6",
          label: "Section 6",
          marginalNote: "Grant and revocation of licenses to solemnize marriages",
          source: src(6),
          summary:
            "The State Government may, by Official Gazette notification, grant and revoke licences to Ministers of Religion to solemnise marriages in its territory.",
          verbatim: `Grant and revocation of licenses to solemnize marriages.—The State Government, so far as regards the territories under its administration, may, by notification in the Official Gazette, grant licenses to Ministers of Religion to solemnize marriages within such territories and may, by a like notification revoke such licenses.`,
        },
        {
          number: "7",
          label: "Section 7",
          marginalNote: "Marriage Registrars",
          source: src(6, 7),
          summary:
            "State Government appoints one or more Christian Marriage Registrars per district; with multiple Registrars one is designated Senior; the District Magistrate fills any vacancy. (Karnataka substitutes 'District Magistrate' for 'Magistrate of the district'.)",
          verbatim: `Marriage Registrars.—The State Government may appoint one or more Christians, either by name or as holding any office for the time being, to be the Marriage Registrar or Marriage Registrars for any district subject to its administration.

Senior Marriage Registrar.—Where there are more Marriage Registrars than one in any district, the State Government shall appoint one of them to be the Senior Marriage Registrar.

Magistrate when to be Marriage Registrar.—When there is only one Marriage Registrar in a district, and such Registrar is absent from such district, or ill, or when his office is temporarily vacant, the Magistrate of the district shall act as, and be, Marriage Registrar thereof during such absence, illness, or temporary vacancy.

[State amendment — Karnataka: "Magistrate of the district" substituted by "District Magistrate" — Karnataka Act 13 of 1965, s. 67 and Schedule.]`,
        },
        {
          number: "8",
          label: "Section 8",
          marginalNote: "Marriage Registrars in Indian States",
          source: src(7),
          summary:
            "Repealed by the Adaptation of Laws Order, 1950.",
          verbatim: `[Marriage Registrars in Indian States.]—Rep., by the A. O. 1950.`,
        },
        {
          number: "9",
          label: "Section 9",
          marginalNote: "Licensing of persons to grant certificates of marriage between Indian Christians",
          source: src(6, 7),
          summary:
            "State Government may licence a Christian, by name or by office, to grant certificates of marriage between Indian Christians, and may revoke such licence by Gazette notification.",
          verbatim: `Licensing of persons to grant certificates of marriage between Indian Christians.—The State Government may grant a license to any Christian, either by name or as holding any office for the time being, authorizing him to grant certificates of marriage between Indian Christians.

Any such license may be revoked by the authority by which it was granted, and every such grant or revocation shall be notified in the Official Gazette.`,
        },
      ],
    },

    // ============================================================
    // Part II — Time and place
    // ============================================================
    {
      slug: "part-2-time-and-place",
      number: "III",
      title: "Part II — Time and place at which marriages may be solemnized",
      range: ["10", "11"],
      intro:
        "Two sections fix the when and where. §10 caps the solemnisation window at 6 a.m. to 7 p.m., with special-licence exceptions for the Anglican Bishop, the Roman Catholic Bishop and Church of Scotland clergy. §11 ties Anglican marriages to a registered Anglican worship place unless none lies within five miles or a Bishop's special licence (for a fee) authorises elsewhere.",
      sections: [
        {
          number: "10",
          label: "Section 10",
          marginalNote: "Time for solemnizing marriage; Exceptions",
          source: src(7, 8),
          summary:
            "Marriages must be solemnised between 6 a.m. and 7 p.m. — except Anglican special licences (anytime), Roman Catholic Bishop's licence (7 p.m.–6 a.m. permitted), and Church of Scotland clergy following Kirk customs.",
          verbatim: `Time for solemnizing marriage.—Every marriage under this Act shall be solemnized between the hours of six in the morning and seven in the evening:

Exceptions.—Provided that nothing in this section shall apply to—
(1) a Clergyman of the Church of England solemnizing a marriage under a special license permitting him to do so at any hour other than between six in the morning and seven in the evening, under the hand and seal of the Anglican Bishop of the Diocese or his Commissary, or
(2) a Clergyman of the Church of Rome solemnizing a marriage between the hours of seven in the evening and six in the morning, when he has received a general or special license in that behalf from the Roman Catholic Bishop of the Diocese or Vicariate in which such marriage is so solemnized, or from such person as the same Bishop has authorized to grant such license, or
(3) a Clergyman of the Church of Scotland solemnizing a marriage according to the rules, rites, ceremonies and customs of the Church of Scotland.`,
        },
        {
          number: "11",
          label: "Section 11",
          marginalNote: "Place for solemnizing marriage; Fee for special license",
          source: src(8),
          summary:
            "Anglican clergy may only marry in an Anglican worship-place unless none lies within five miles or the Bishop has issued a (fee-bearing) special licence to marry elsewhere.",
          verbatim: `Place for solemnizing marriage.—No Clergyman of the Church of England shall solemnize a marriage in any place other than a church where worship is generally held according to the forms of the Church of England,
unless there is no such church within five miles distance by the shortest road from such place, or unless he has received a special license authorizing him to do so under the hand and seal of the Anglican Bishop of the Diocese or his Commissary.

Fee for special license.—For such special license, the Registrar of the Diocese may charge such additional fee as the said Bishop from time to time authorizes.`,
        },
      ],
    },

    // ============================================================
    // Part III — Marriages solemnized by Ministers of Religion licensed under this Act
    // ============================================================
    {
      slug: "part-3-licensed-ministers",
      number: "IV",
      title: "Part III — Marriages solemnized by Ministers of Religion licensed under this Act",
      range: ["12", "26"],
      intro:
        "The 15-section workflow for marriages before a licensed Minister of Religion. One party files a §12 notice with the Minister, who publishes it (§13) — or forwards to the Marriage Registrar where the venue is a private dwelling (§14) or one party is a minor (§15). After a four-day waiting period the Minister issues a §17 certificate (longer in minority cases under §22), provided a §18 declaration has been made, parental/guardian consent under §19 is in place, and no §20 prohibition is pending. Minor-protective provisions (§§21, 22), Indian-Christian language safeguards (§23), the §24 certificate form and the §25 solemnisation procedure (two witnesses minimum) follow. §26 voids the certificate if the marriage is not solemnised within two months.",
      sections: [
        {
          number: "12",
          label: "Section 12",
          marginalNote: "Notice of intended marriage",
          source: src(8),
          summary:
            "One party gives the Minister written Schedule-I notice listing both parties' names, profession, dwelling-place, length of residence and intended marriage venue.",
          verbatim: `Notice of intended marriage.—Whenever a marriage is intended to be solemnized by a Minister of Religion licensed to solemnize marriages under this Act—
one of the persons intending marriage shall give notice in writing, according to the form contained in the First Schedule hereto annexed, or to the like effect, to the Minister of Religion whom he or she desires to solemnize the marriage, and shall state therein—
(a) the name and surname, and the profession or condition, of each of the persons intending marriage,
(b) the dwelling-place of each of them,
(c) the time during which each has dwelt there, and
(d) the church or private dwelling in which the marriage is to be solemnized:
Provided that, if either of such persons has dwelt in the place mentioned in the notice during more than one month, it may be stated therein that he or she has dwelt there one month and upwards.`,
        },
        {
          number: "13",
          label: "Section 13",
          marginalNote: "Publication of such notice; Return or transfer of notice",
          source: src(8, 9),
          summary:
            "If the chosen church falls within the Minister's officiating area he must affix the notice conspicuously; otherwise he either returns the notice or transfers it to a Minister entitled to officiate.",
          verbatim: `Publication of such notice.—If the persons intending marriage desire it to be solemnized in a particular church, and if the Minister of Religion to whom such notice has been delivered be entitled to officiate therein, he shall cause the notice to be affixed in some conspicuous part of such church.

Return or transfer of notice.—But if he is not entitled to officiate as a Minister in such church, he shall, at his option, either return the notice, to the person who delivered it to him, or deliver it to some other Minister entitled to officiate therein, who shall thereupon cause the notice to be affixed as aforesaid.`,
        },
        {
          number: "14",
          label: "Section 14",
          marginalNote: "Notice of intended marriage in private dwelling",
          source: src(8),
          summary:
            "Where the venue is a private dwelling, the Minister forwards the §12 notice to the district's Marriage Registrar, who affixes it in his office.",
          verbatim: `Notice of intended marriage in private dwelling.—If it be intended that the marriage shall be solemnized in a private dwelling, the Minister of Religion, on receiving the notice prescribed in section 12, shall forward it to the Marriage Registrar of the district, who shall affix the same to some conspicuous place in his own office.`,
        },
        {
          number: "15",
          label: "Section 15",
          marginalNote: "Sending copy of notice to Marriage Registrar when one party is a minor",
          source: src(9),
          summary:
            "If either party is a minor and the Minister has not returned the notice under §13 within 24 hours, he must post a copy to the district's Marriage Registrar (or Senior Marriage Registrar).",
          verbatim: `Sending copy of notice to Marriage Registrar when one party is a minor.—When one of the persons intending marriage is a minor, every Minister receiving such notice shall, unless within twenty-four hours after its receipt he returns the same under the provisions of section 13, send by the post or otherwise a copy of such notice to the Marriage Registrar of the district, or, if there be more than one Registrar of such district, to the Senior Marriage Registrar.`,
        },
        {
          number: "16",
          label: "Section 16",
          marginalNote: "Procedure on receipt of notice",
          source: src(9),
          summary:
            "On receipt the Marriage Registrar (or Senior Registrar) affixes the notice in his office and circulates copies to every other Registrar in the district for similar publication.",
          verbatim: `Procedure on receipt of notice.—The Marriage Registrar or Senior Marriage Registrar, as the case may be, on receiving any such notice, shall affix it to some conspicuous place in his own office, and the latter shall further cause a copy of the said notice to be sent to each of the other Marriage Registrars in the same district, who shall likewise publish the same in the manner above directed.`,
        },
        {
          number: "17",
          label: "Section 17",
          marginalNote: "Issue of certificate of notice given and declaration made; Proviso",
          source: src(9),
          summary:
            "Minister issues a certificate after the §18 declaration is made — but not within four days of receiving notice, not where an impediment is shown and not where issuance has been validly forbidden.",
          verbatim: `Issue of certificate of notice given and declaration made.—Any Minister of Religion consenting or intending to solemnize any such marriage as aforesaid, shall, on being required so to do by or on behalf of the person by whom the notice was given, and upon one of the persons intending marriage making the declaration herein after required, issue under his hand a certificate of such notice having been given and of such declaration having been made:

Proviso.—Provided—
(1) that no such certificate shall be issued until the expiration of four days after the date of the receipt of the notice by such Minister;
(2) that no lawful impediment be shown to his satisfaction why such certificate should not issue; and
(3) that the issue of such certificate has not been forbidden, in manner hereinafter mentioned, by any person authorized in that behalf.`,
        },
        {
          number: "18",
          label: "Section 18",
          marginalNote: "Declaration before issue of certificate",
          source: src(9),
          summary:
            "Before issuing the certificate, the Minister must take a personal declaration that there is no impediment of kindred, affinity or other lawful hindrance — and, if either party is a minor, that the required consent has been obtained or no consenting authority is resident in India.",
          verbatim: `Declaration before issue of certificate.—The certificate mentioned in section 17 shall not be issued until one of the persons intending marriage has appeared personally before the Minister and made a solemn declaration—
(a) that he or she believes that there is not any impediment of kindred or affinity, or other lawful hindrance, to the said marriage,
And, when either or both of the parties is or are a minor or minors,
(b) that the consent or consents required by law has or have been obtained thereto, or that there is no person resident in India having authority to give such consent, as the case may be.`,
        },
        {
          number: "19",
          label: "Section 19",
          marginalNote: "Consent of father, or guardian, or mother",
          source: src(9),
          summary:
            "For minors: father (if living) consents; if dead, the guardian; if no guardian, the mother. Consent is mandatory unless no authorised person is resident in India.",
          verbatim: `Consent of father, or guardian, or mother.—The father, if living, of any minor, or, if the father be dead the guardian of the person of such minor, and, in case there be no such guardian, then the mother of such minor, may give consent to the minor's marriage,
and such consent is hereby required for the same marriage, unless no person authorized to give such consent be resident in India.`,
        },
        {
          number: "20",
          label: "Section 20",
          marginalNote: "Power to prohibit by notice issue of certificate",
          source: src(9),
          summary:
            "Any §19 consenting authority may, before issuance, prohibit the certificate by written signed notice to the Minister stating name, address and the relationship justifying the prohibition.",
          verbatim: `Power to prohibit by notice issue of certificate.—Every person whose consent to a marriage is required under section 19, is hereby authorized to prohibit the issue of the certificate by any Minister, at any time before the issue of the same, by notice in writing to such Minister, subscribed by the person so authorized with his or her name and place of abode and position with respect to either of the persons intending marriage, by reason of which he or she is so authorized as aforesaid.`,
        },
        {
          number: "21",
          label: "Section 21",
          marginalNote: "Procedure on receipt of notice",
          source: src(9),
          summary:
            "On receiving a prohibition, the Minister must withhold the certificate and the marriage until he is satisfied that the objector has no lawful authority, or the notice is withdrawn.",
          verbatim: `Procedure on receipt of notice.—If any such notice be received by such Minister, he shall not issue his certificate and shall not solemnize the said marriage until he has examined into the matter of the said prohibition, and is satisfied that the person prohibiting the marriage has no lawful authority for such prohibition,
or until the said notice is withdrawn by the person who gave it.`,
        },
        {
          number: "22",
          label: "Section 22",
          marginalNote: "Issue of certificate in case of minority",
          source: src(9),
          summary:
            "When a party is a minor and the Minister is not satisfied that §19 consent exists, the certificate must be withheld for at least fourteen days after receiving the notice.",
          verbatim: `Issue of certificate in case of minority.—When either of the persons intending marriage is a minor, and the Minister is not satisfied that the consent of the person whose consent to such marriage is required by section 19 has been obtained, such Minister shall not issue such certificate until the expiration of fourteen days after the receipt by him of the notice of marriage.`,
        },
        {
          number: "23",
          label: "Section 23",
          marginalNote: "Issue of certificates to Indian Christians",
          source: src(10),
          summary:
            "Before issuing a certificate to an Indian Christian, the Minister must check the party understands the notice/certificate, and translate it into a language he understands if not.",
          verbatim: `Issue of certificates to Indian Christians.—When any Indian Christians about to be married takes a notice of marriage to a Minister of Religion, or applies for a certificate from such Minister under section 17, such Minister shall, before issuing the certificate, ascertain whether such Indian Christians is cognizant of the purport and effect of the said notice or certificate, as the case may be, and, if not, shall translate or cause to be translated the notice or certificate to such Indian Christian into some language which he understands.`,
        },
        {
          number: "24",
          label: "Section 24",
          marginalNote: "Form of certificate",
          source: src(10),
          summary:
            "The certificate must follow Schedule II to the Act or use a form to the like effect.",
          verbatim: `Form of certificate.—The certificate to be issued by such Minister shall be in the form contained in the Second Schedule hereto annexed, or to the like effect.`,
        },
        {
          number: "25",
          label: "Section 25",
          marginalNote: "Solemnization of marriage",
          source: src(10),
          summary:
            "After certificate issuance the marriage may be solemnised in such form/ceremony as the Minister thinks fit, but at least two witnesses (besides the Minister) must be present.",
          verbatim: `Solemnization of marriage.—After the issue of the certificate by the Minister, marriage may be solemnized between the persons therein described according to such form or ceremony as the Minister thinks fit to adopt:
Provided that the marriage be solemnized in the presence of at least two witnesses besides the Minister.`,
        },
        {
          number: "26",
          label: "Section 26",
          marginalNote: "Certificate void if marriage not solemnized within two months",
          source: src(10),
          summary:
            "Certificate (and all proceedings on it) is void if the marriage is not solemnised within two months; a fresh notice and certificate must then be obtained.",
          verbatim: `Certificate void if marriage not solemnized within two months.—Whenever a marriage is not solemnized within two months after the date of the certificate issued by such Minister as aforesaid, such certificate and all proceedings (if any) thereon shall be void,
and no person shall proceed to solemnize the said marriage until new notice has been given and a certificate thereof issued in manner aforesaid.`,
        },
      ],
    },

    // ============================================================
    // Part IV — Registration of marriages solemnized by Ministers of Religion
    // ============================================================
    {
      slug: "part-4-registration-by-ministers",
      number: "V",
      title: "Part IV — Registration of marriages solemnized by Ministers of Religion",
      range: ["27", "37"],
      intro:
        "Eleven sections wire every Christian marriage into the State birth-death-marriage register chain. §27 makes registration mandatory for every solemnised marriage outside Parts V/VI. §§28–31 prescribe denomination-specific registers and quarterly returns (Church of England via Archdeaconry; Church of Rome via the Bishop's nominee; Church of Scotland via the Senior Chaplain). §§32–36 set out the duplicate-register-book + counterfoil-certificate workflow for other episcopally-ordained clergy and licensed Ministers, with monthly transmission of certificates to the Registrar General. §37 governs marriages between Indian Christians solemnised by §§5(1)–(3) officiants — registered in a separate book that flows to the Registrar General when filled.",
      sections: [
        {
          number: "27",
          label: "Section 27",
          marginalNote: "Marriages when to be registered",
          source: src(10),
          summary:
            "Every Christian marriage in India (except those under Part V or Part VI) must be registered as prescribed by Part IV.",
          verbatim: `Marriages when to be registered.—All marriages hereafter solemnized in India between persons one or both of whom professes or profess the Christian religion, except marriages solemnized under Part V or Part VI of this Act, shall be registered in manner hereinafter prescribed.`,
        },
        {
          number: "28",
          label: "Section 28",
          marginalNote: "Registration of marriages solemnized by Clergymen of Church of England",
          source: src(10),
          summary:
            "Every Anglican Clergyman keeps a marriage register and records each Act-marriage according to the Schedule III tabular form.",
          verbatim: `Registration of marriages solemnized by Clergymen of Church of England.—Every Clergyman of the Church of England shall keep a register of marriages and shall register therein, according to the tabular form set forth in the Third Schedule hereto annexed, every marriage which he solemnizes under this Act.`,
        },
        {
          number: "29",
          label: "Section 29",
          marginalNote: "Quarterly returns to Archdeaconry; Contents of returns",
          source: src(10, 11),
          summary:
            "Anglican Clergymen send duplicate quarterly returns to the Archdeaconry Registrar covering Jan–Mar, Apr–Jun, Jul–Sep and Oct–Dec; the Registrar forwards a copy to the Registrar General within two weeks of each quarter.",
          verbatim: `Quarterly returns to Archdeaconry.—Every Clergyman of the Church of England shall send four times in every year returns in duplicate, authenticated by his signature, of the entries in the register of marriages solemnized at any place where he has any spiritual charge, to the Registrar of the Archdeaconry to which he is subject, or within the limits of which such place is situate.

Contents of returns.—Such quarterly returns shall contain all the entries of marriages contained in the said register from the first day of January to the thirty-first day of March, from the first day of April to the thirtieth day of June, from the first day of July to the thirtieth day of September, and from the first day of October to the thirty-first day of December, of each year, respectively, and shall be sent by such Clergyman within two weeks from the expiration of each of the quarters above specified.

The said Registrar upon receiving the said returns shall send one copy thereof to the Registrar General of Births, Deaths and Marriages.`,
        },
        {
          number: "30",
          label: "Section 30",
          marginalNote: "Registration and returns of marriages solemnized by Clergymen of Church of Rome",
          source: src(11),
          summary:
            "Roman Catholic marriages are registered by a person and in the form designated by the Diocesan Bishop, who forwards quarterly returns to the Registrar General.",
          verbatim: `Registration and returns of marriages solemnized by Clergymen of Church of Rome.—Every marriage solemnized by a Clergyman of the Church of Rome shall be registered by the person and according to the form directed in that behalf by the Roman Catholic Bishop of the Diocese or Vicariate in which such marriage is solemnized,
and such person shall forward quarterly to the Registrar General of Births, Deaths and Marriages returns of the entries of all marriages registered by him during the three months next preceding.`,
        },
        {
          number: "31",
          label: "Section 31",
          marginalNote: "Registration and returns of marriages solemnized by Clergymen of Church of Scotland",
          source: src(11),
          summary:
            "Church of Scotland Clergymen keep a Schedule-III register and route quarterly returns to the Registrar General through the Senior Chaplain of the Church of Scotland.",
          verbatim: `Registration and returns of marriages solemnized by Clergymen of Church of Scotland.—Every Clergyman of the Church of Scotland shall keep a register of marriages,
and shall register therein, according to the tabular form set forth in the Third Schedule hereto annexed, every marriage which he solemnizes under this Act,
and shall forward quarterly to the Registrar General of Births, Deaths and Marriages, through the Senior Chaplain of the Church of Scotland, returns, similar to those prescribed in section 29, of all such marriages.`,
        },
        {
          number: "32",
          label: "Section 32",
          marginalNote: "Certain marriages to be registered in duplicate",
          source: src(11),
          summary:
            "Every marriage solemnised by an episcopally-ordained non-Anglican / non-Roman clergyman or by a licensed Minister is registered in duplicate — once in a Schedule-IV register-book and once in a counterfoil certificate attached to it.",
          verbatim: `Certain marriages to be registered in duplicate.—Every marriage solemnized by any person who has received episcopal ordination, but who is not a Clergyman of the Church of England, or of the Church of Rome, or by any Minister of Religion licensed under this Act to solemnize marriages, shall immediately after the solemnization thereof, be registered in duplicate by the person solemnizing the same; (that is to say) in a marriage-register book to be kept by him for that purpose, according to the form contained in the Fourth Schedule hereto annexed, and also in a certificate attached to the marriage-register-book as a counterfoil.`,
        },
        {
          number: "33",
          label: "Section 33",
          marginalNote: "Entries of such marriages to be signed and attested",
          source: src(11),
          summary:
            "Both the certificate and the register-book entry must be signed by the solemniser, the parties married, and two credible witnesses; entries proceed in book order with certificate and entry numbers matching.",
          verbatim: `Entries of such marriages to be signed and attested.—The entry of such marriage in both the certificate and marriage-register-book shall be signed by the person solemnizing the marriage, and also by the persons married, and shall be attested by two credible witnesses, other than the person solemnizing the marriage, present at its solemnization.

Every such entry shall be made in order from the beginning to the end of the book, and the number of the certificate shall correspond with that of the entry in the marriage-register-book.`,
        },
        {
          number: "34",
          label: "Section 34",
          marginalNote: "Certificate to be forwarded to Marriage Registrar, copied and sent to Registrar General",
          source: src(11),
          summary:
            "Within one month of solemnisation the solemniser separates the certificate from the register-book and sends it to the district's Marriage Registrar (or Senior Marriage Registrar), who copies it and forwards the month's batch to the Registrar General.",
          verbatim: `Certificate to be forwarded to Marriage Registrar, copied and sent to Registrar General.—The person solemnizing the marriage shall forthwith separate the certificate from the marriage-register-book and send it, within one month from the time of the solemnization, to the Marriage Registrar of the district in which the marriage was solemnized, or, if there be more Marriage Registrars than one, to the Senior Marriage Registrar,
who shall cause such certificate to be copied into a book to be kept by him for that purpose,
and shall send all the certificates which he has received during the month, with such number and signature or initials added thereto as are hereinafter required, to the Registrar General of Births, Deaths and Marriages.`,
        },
        {
          number: "35",
          label: "Section 35",
          marginalNote: "Copies of certificates to be entered and numbered",
          source: src(11),
          summary:
            "Copies are entered in book order; each copy carries the original certificate number plus a Registrar-assigned entry number reflecting the order of receipt.",
          verbatim: `Copies of certificates to be entered and numbered.—Such copies shall be entered in order from the beginning to the end of the said book, and shall bear both the number of the certificate as copied, and also a number to be entered by the Marriage Registrar, indicating the number of the entry of the said copy in the said book, according to the order in which he receives each certificate.`,
        },
        {
          number: "36",
          label: "Section 36",
          marginalNote: "Registrar to add number of entry to certificate, and send to Registrar General",
          source: src(11),
          summary:
            "The Marriage Registrar adds the book-entry number plus his signature/initials to each original certificate and, at month-end, sends the batch to the Registrar General.",
          verbatim: `Registrar to add number of entry to certificate, and send to Registrar General.—The Marriage Registrar shall also add such last-mentioned number of the entry of the copy in the book to the certificate, with his signature or initials, and shall, at the end of every month, send the same to the Registrar General of Births, Deaths and Marriages.`,
        },
        {
          number: "37",
          label: "Section 37",
          marginalNote: "Registration of marriages between Indian Christians, by persons referred to in clauses (1), (2) and (3) of section 5; Custody and disposal of register-book",
          source: src(11, 12),
          summary:
            "When a §5(1)–(3) officiant (episcopal clergy, Church of Scotland clergy or licensed Minister) marries Indian Christians, he uses a dedicated register-book — not the §§28–36 procedure — and on filling it (or on leaving the district) the book passes to the Marriage Registrar and ultimately to the Registrar General.",
          verbatim: `Registration of marriages between Indian Christians, by persons referred to in clauses (1), (2) and (3) of section 5.—When any marriage between Indian Christians is solemnized by any such person, Clergyman or Minister of Religion as is referred to in clause (1), clause (2) or clause (3) of section 5, the person solemnizing the same shall, instead of proceeding in the manner provided by sections 28 to 36, both inclusive, register the marriage in a separate register-book, and shall keep it safely until it is filled, or, if he leave the district in which he solemnized the marriage before the said book is filled, shall make over the same to the person succeeding to his duties in the said district.

Custody and disposal of register-book.—Whoever has the control of the book at the time when it is filled, shall send it to the Marriage Registrar of the district, or, if there be more Marriage Registrars than one, to the Senior Marriage Registrar, who shall send it to the Registrar General of Births, Deaths and Marriages, to be kept by him with the records of his office.`,
        },
      ],
    },
    {
      slug: "part-7-penalties",
      number: "VIII",
      title: "Part VII — Penalties",
      range: ["66", "76"],
      intro:
        "Eleven penal provisions criminalising false oaths/notices, impersonation to block certificates, unauthorised or irregular solemnisation (time/witness/notice/minor‑consent breaches), Registrar lapses, unlicensed certification, register tampering, and a two‑year limitation.",
      sections: [
        {
          number: "66",
          label: "Section 66",
          marginalNote: "False oath, declaration, notice or certificate for procuring marriage",
          source: src(16),
          summary:
            "False oath/declaration or false notice/certificate to procure marriage is deemed IPC 193 (perjury): up to 3 years + fine.",
          verbatim: `False oath, declaration, notice or certificate for procuring marriage.—Whoever, for the purpose of procuring a marriage or license of marriage, intentionally,—
(a) where an oath or declaration is required by this Act, or by any rule or custom of a Church according to the rites and ceremonies of which a marriage is intended to be solemnized, such Church being the Church of England or of Scotland or of Rome, makes a false oath or declaration, or,
(b) where a notice or certificate is required by this Act, signs a false notice or certificate,
shall be deemed to have committed the offence punishable under section 193 of the Indian Penal Code (45 of 1860) with imprisonment of either description for a term which may extend to three years and, at the discretion of the Court, with fine.`,
          penalties: [
            {
              offence: "Intentionally making a false oath/declaration or signing a false notice/certificate to procure marriage",
              punishment: "Deemed IPC 193 (perjury): up to 3 years' imprisonment + fine",
              ref: "§66",
              severity: "moderate",
              flags: ["act→IPC deeming"],
            },
          ],
        },
        {
          number: "67",
          label: "Section 67",
          marginalNote: "Forbidding, by false personation issue of certificate by Marriage Registrar",
          source: src(16),
          summary:
            "Impersonating a consenting authority to forbid a Registrar’s certificate is IPC 205; mens rea: knows/believes representation false (or no reason to believe true).",
          verbatim: `Forbidding, by false personation issue of certificate by Marriage Registrar.—Whoever forbids the issue, by a Marriage Registrar, of a certificate, by falsely representing himself to be a person whose consent to the marriage is required by law, knowing or believing such representation to be false, or not having reason to believe it to be true, shall be deemed guilty of the offence described in section 205 of the Indian Penal Code (45 of 1860).`,
          penalties: [
            {
              offence: "False personation to forbid issue of certificate by Registrar",
              punishment: "Deemed IPC 205 offence (punishment per IPC)",
              ref: "§67",
              severity: "moderate",
              flags: ["act→IPC deeming"],
            },
          ],
        },
        {
          number: "68",
          label: "Section 68",
          marginalNote: "Solemnizing marriage without due authority",
          source: src(16),
          summary:
            "Unauthorised person solemnising/professing to solemnise (without district Registrar present): up to 10 years’ imprisonment + fine.",
          verbatim: `Solemnizing marriage without due authority.—Whoever, not being authorized by section 5 of this Act to solemnize marriages, solemnizes or professes to solemnize, in the absence of a Marriage Registrar of the district in which the ceremony takes place, a marriage between persons one or both of whom is or are a Christian or Christians, shall be punished with imprisonment which may extend to ten years, and shall also be liable to fine.`,
          penalties: [
            {
              offence: "Solemnising/professing to solemnise marriage without §5 authority and without Registrar present",
              punishment: "Imprisonment up to 10 years + fine",
              ref: "§68",
              severity: "grave",
            },
          ],
        },
        {
          number: "69",
          label: "Section 69",
          marginalNote: "Solemnizing marriage out of proper time, or without witnesses; Savings",
          source: src(16),
          summary:
            "Solemnises outside 6 a.m.–7 p.m. or without two witnesses: up to 3 years + fine; carve‑outs for Anglican special licence, Roman Catholic licence (night), and Church of Scotland.",
          verbatim: `Solemnizing marriage out of proper time, or without witnesses.—Whoever knowingly and wilfully solemnizes a marriage between persons, one or both of whom is or are a Christian or Christians, at any time other than between the hours of six in the morning and seven in the evening, or in the absence of at least two credible witnesses other than the person solemnizing the marriage, shall be punished with imprisonment for a term which may extend to three years, and shall also be liable to fine.

Saving of marriages solemnized under special licence.—This section does not apply to marriages solemnized under special licenses granted by the Anglican Bishop of the Diocese or by his Commissary, nor to marriages performed between the hours of seven in the evening and six in the morning by a Clergyman of the Church of Rome, when he has received the general or special license in that behalf mentioned in section 10. Nor does this section apply to marriages solemnized by a Clergyman of the Church of Scotland according to the rules, rites, ceremonies and customs of the Church of Scotland.`,
          penalties: [
            {
              offence: "Solemnising outside 6 a.m.–7 p.m. or without two credible witnesses (no applicable Church licence exception)",
              punishment: "Imprisonment up to 3 years + fine",
              ref: "§69",
              severity: "moderate",
            },
          ],
        },
        {
          number: "70",
          label: "Section 70",
          marginalNote: "Solemnizing without notice or within fourteen days after notice, marriage with minor",
          source: src(17),
          summary:
            "Licensed Minister under Part III marries without written notice, or (minor + required consent not obtained) within 14 days of notice: up to 3 years + fine.",
          verbatim: `Solemnizing without notice or within fourteen days after notice, marriage with minor.—Any Minister of Religion licensed to solemnize marriages under this Act, who, without a notice in writing, or, when one of the parties to the marriage is a minor and the required consent of the parents or guardians to such marriage has not been obtained, within fourteen days after the receipt by him of notice of such marriage, knowingly and wilfully solemnizes a marriage under Part III, shall be punished with imprisonment for a term which may extend to three years, and shall also be liable to fine.`,
          penalties: [
            {
              offence: "Licensed Minister solemnises without written notice or (minor, no consent) within 14 days of notice",
              punishment: "Imprisonment up to 3 years + fine",
              ref: "§70",
              severity: "moderate",
            },
          ],
        },
        {
          number: "71",
          label: "Section 71",
          marginalNote: "Registrar offences: without publication; marrying after expiry; minor within 14 days; issuing despite prohibition",
          source: src(17),
          summary:
            "Marriage Registrar’s four heads of breach (no publication; marriage after 2 months; minor before 14 days/without sending copy; issuing despite prohibition): up to 5 years + fine.",
          verbatim: `Issuing certificate, or marrying, without publication of notice.—A Marriage Registrar under this Act, who commits any of the following offences:—
(1) knowingly and wilfully issues any certificate for marriage, or solemnizes any marriage, without publishing the notice of such marriage as directed by this Act;
Marrying after expiry of notice.—(2) after the expiration of two months after the copy of the notice has been entered as required by section 40 in respect of any marriage, solemnizes such marriage;
Solemnizing marriage with minor within fourteen days, without authority of Court, or without sending copy of notice.—(3) solemnizes, without an order of a competent Court authorizing him to do so, any marriage, when one of the parties is a minor, before the expiration of fourteen days after the receipt of the notice of such marriage, or without sending, by the post or otherwise, a copy of such notice to the Senior Marriage Registrar of the district if there be more Marriage Registrars of the district than one, and if he himself be not the Senior Marriage Registrar;
Issuing certificate against authorized prohibition.—(4) issues any certificate the issue of which has been prohibited, as in this Act provided, by any person authorized to prohibit the issue thereof,
shall be punished with imprisonment for a term which may extend to five years, and shall also be liable to fine.`,
          penalties: [
            {
              offence: "Registrar: issues/marries without publication; marries after 2 months; marries minor within 14 days/without sending copy; issues despite prohibition",
              punishment: "Imprisonment up to 5 years + fine",
              ref: "§71",
              severity: "serious",
            },
          ],
        },
        {
          number: "72",
          label: "Section 72",
          marginalNote: "Registrar issuing certificate after expiry/within 14 days (minor)/despite prohibition",
          source: src(17),
          summary:
            "Registrar issues certificate after 2 months; in a minor case within 14 days without Court order; or despite prohibition → deemed IPC 166.",
          verbatim: `Issuing certificate after expiry of notice, or, in case of minor, within fourteen days after notice, or against authorized prohibition.—Any Marriage Registrar knowingly and wilfully issuing any certificate for marriage after the expiration of two months after the notice has been entered by him as aforesaid, or knowingly and wilfully issuing, without the order of a competent Court authorizing him so to do, any certificate for marriage, where one of the parties intending marriage is a minor, before the expiration of fourteen days after the entry of such notice, or any certificate the issue of which has been forbidden as aforesaid by any person authorized in this behalf, shall be deemed to have committed an offence under section 166 of the Indian Penal Code (45 of 1860).`,
          penalties: [
            {
              offence: "Registrar issues certificate after 2 months / for minor within 14 days without order / despite prohibition",
              punishment: "Deemed IPC 166 (public servant disobeying law)",
              ref: "§72",
              severity: "serious",
              flags: ["act→IPC deeming"],
            },
          ],
        },
        {
          number: "73",
          label: "Section 73",
          marginalNote: "Persons authorized to solemnize (other than Clergy of Churches of England, Scotland or Rome): offences",
          source: src(17, 18),
          summary:
            "Other authorised solemnizers (not CoE/Scotland/Rome): issuing/solemnising without publishing notice; after 2 months; minors before 14 days or without sending copy; issuing despite prohibition; or solemnising a forbidden marriage: up to 4 years + fine.",
          verbatim: `Persons authorized to solemnize marriage (other than Clergy of Churches of England, Scotland or Rome).—Whoever, being authorized under this Act to solemnize a marriage, and not being a Clergyman of the Church of England solemnizing a marriage after due publication of banns, or under a license from the Anglican Bishop of the Diocese or a Surrogate duly authorized in that behalf, or, not being a Clergyman of the Church of Scotland, solemnizing a marriage according to the rules, rites, ceremonies and customs of that church, or, not being a Clergyman of the Church of Rome, solemnizing a marriage according to the rites, rules, ceremonies and customs of that church,
issuing certificate, or marrying, without publishing notice, or after expiry of certificate;—knowingly and wilfully issues any certificate for marriage under this Act, or solemnizes any marriage between such persons as aforesaid, without publishing, or causing to be affixed, the notice of such marriage as directed in Part III of this Act, or after the expiration of two months after the certificate has been issued by him;
issuing certificate for, or solemnizing, marriage with minor, within fourteen days after notice.—or knowingly and wilfully issues any certificate for marriage, or solemnizes a marriage between such persons when one of the persons intending marriage is a minor, before the expiration of fourteen days after the receipt of notice of such marriage, or without sending, by the post or otherwise, a copy of such notice to the Marriage Registrar, or, if there be more Marriage Registrars than one, to the Senior Marriage Registrar of the district;
issuing certificate authorizedly forbidden:—or knowingly and wilfully issues any certificate the issue of which has been forbidden, under this Act, by any person authorized to forbid the issue;
solemnizing marriage authorizedly forbidden.—or knowingly and wilfully solemnizes any marriage forbidden by any person authorized to forbid the same; shall be punished with imprisonment for a term which may extend to four years, and shall also be liable to fine.`,
          penalties: [
            {
              offence: "Other authorised solemnizer breaches (notice/publication/expiry/minor/prohibition/forbidden marriage)",
              punishment: "Imprisonment up to 4 years + fine",
              ref: "§73",
              severity: "serious",
            },
          ],
        },
        {
          number: "74",
          label: "Section 74",
          marginalNote: "Unlicensed person granting certificate pretending to be licensed; licensed neglect under Part VI",
          source: src(18),
          summary:
            "Unlicensed person granting a Part VI certificate as if licensed: up to 5 years + fine; licensed person’s unjustified refusal/neglect/omission under Part VI: fine up to ₹100.",
          verbatim: `Unlicensed person granting certificate pretending to be licensed.—Whoever, not being licensed to grant a certificate of marriage under Part VI of this Act, grants such certificate intending thereby to make it appear that he is so licensed, shall be punished with imprisonment for a term which may extend to five years, and shall also be liable to fine.
Whoever, being licensed to grant certificates of marriage under Part VI of this Act, without just cause refuses, or wilfully neglects or omits, to perform any of the duties imposed upon him by that Part shall be punished with fine which may extend to one hundred rupees.`,
          penalties: [
            {
              offence: "Unlicensed person grants certificate as if licensed",
              punishment: "Imprisonment up to 5 years + fine",
              ref: "§74",
              severity: "serious",
            },
            {
              offence: "Licensed person under Part VI unjustifiably refuses/neglects/omits duties",
              punishment: "Fine up to ₹100",
              ref: "§74",
              severity: "minor",
            },
          ],
        },
        {
          number: "75",
          label: "Section 75",
          marginalNote: "Destroying or falsifying register-books",
          source: src(18),
          summary:
            "Wilful destruction/injury, counterfeit or false entry in marriage register-books/counterfoils/authenticated extracts: up to 7 years + fine.",
          verbatim: `Destroying or falsifying register-books.—Whoever, by himself or another, wilfully destroys or injures any register-book or the counterfoil certificates thereof, or any part thereof, or any authenticated extract therefrom, or falsely makes or counterfeits any part of such register-book or counterfoil certificates, or wilfully inserts any false entry in any such register-book or counterfoil certificate or authenticated extract, shall be punished with imprisonment for a term which may extend to seven years, and shall also be liable to fine.`,
          penalties: [
            {
              offence: "Destroying/injuring registers; counterfeiting; inserting false entries",
              punishment: "Imprisonment up to 7 years + fine",
              ref: "§75",
              severity: "grave",
            },
          ],
        },
        {
          number: "76",
          label: "Section 76",
          marginalNote: "Limitation of prosecutions under Act",
          source: src(18),
          summary:
            "Time bar: proceedings for any offence under this Act must commence within 2 years of the offence.",
          verbatim: `Limitation of prosecutions under Act.—The prosecution for every offence punishable under this Act shall be commenced within two years after the offence is committed.`,
          penalties: [
            {
              offence: "Limitation for prosecutions under the Act",
              punishment: "Proceedings must commence within 2 years of the offence",
              ref: "§76",
              severity: "minor",
            },
          ],
        },
      ],
    },
  ],
};
