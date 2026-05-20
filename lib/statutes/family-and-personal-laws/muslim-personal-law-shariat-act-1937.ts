/**
 * The Muslim Personal Law (Shariat) Application Act, 1937 — Act No. 26 of 1937.
 *
 * A short statute of six sections (one of which has been repealed) that
 * directs Indian courts to apply the Muslim Personal Law (Shariat) — rather
 * than custom or usage — in specified personal-law disputes between Muslims.
 *
 * Source PDF: c:/Users/Debabrata Barman/Documents/The law & order/
 *   Family & Personal Laws/Muslim Personal Law (Shariat) Act, 1937.pdf
 *
 * Verbatim text reproduces the source PDF exactly, including the Pondicherry
 * proviso reference and the Kerala State amendment to Section 2.
 */

import type { Statute } from "../_types";

const SOURCE_BASE = "/pdfs/Family%20%26%20Personal%20Laws/Muslim%20Personal%20Law%20(Shariat)%20Act,%201937.pdf";
const SOURCE_FILE = "Muslim Personal Law (Shariat) Act, 1937.pdf";

export const muslimPersonalLawShariatAct1937: Statute = {
  meta: {
    slug: "muslim-personal-law-shariat-act-1937",
    shortName: "Muslim Personal Law (Shariat) Act",
    fullName: "The Muslim Personal Law (Shariat) Application Act, 1937",
    year: 1937,
    sanskrit: "मुस्लिम पर्सनल लॉ (शरीयत) अधिनियम",
    tagline: "When the parties are Muslims, the rule of decision is Shariat — not custom.",
    summary:
      "A six-section statute enacted in the last decade of British rule that displaced local Hindu-influenced custom in Muslim families and made the Muslim Personal Law (Shariat) the rule of decision in marriage, divorce (including talaq, khula and mubaraat), maintenance, dower, guardianship, gifts, trusts, wakfs and intestate succession. Section 3 adds an opt-in route to extend the same regime to adoption, wills and legacies. The Act is small but constitutionally significant — it is the principal entry point of Muslim personal law into the modern Indian legal system.",
    preamble:
      "An Act to make provision for the application of the Muslim Personal Law (Shariat) to Muslims.\n\nWHEREAS it is expedient to make provision for the application of the Muslim Personal Law (Shariat) to Muslims; It is hereby enacted as follows:—",
    categorySlug: "family-and-personal-laws",
    enactedOn: "1937-10-07",
    commencement: "On enactment, 7 October 1937.",
    totalSections: 6,
    totalChapters: 1,
    sourcePdf: {
      pdfPath: SOURCE_BASE,
      pdfFile: SOURCE_FILE,
      pdfPage: 1,
    },
    coverage: "complete",
    tier: 1,
    amendments: [
      {
        year: 1939,
        shortName: "Dissolution of Muslim Marriages Act, 1939 — consequential",
        note:
          "Section 6 of the 1939 Act repealed Section 5 of this Act (which had originally dealt with dissolution of marriage by Court in certain circumstances). Today, judicial dissolution of a Muslim marriage on grounds such as desertion, cruelty or impotence is governed by the 1939 Act, not by Section 5 here.",
      },
      {
        year: 1943,
        shortName: "Amending Act 16 of 1943",
        note:
          "Tweaked Sections 3, 4 and 6 — narrowed the scope of Section 3 to 'the provisions of this section' and refined the list of repealed provincial provisions in Section 6.",
      },
      {
        year: 1959,
        shortName: "Part-B States adaptation (Act 48 of 1959)",
        note:
          "Extended the Act's territorial reach by removing the Part-B States carve-out, w.e.f. 1 February 1960.",
      },
      {
        year: 1963,
        shortName: "Kerala State amendment (Kerala Act 42 of 1963)",
        note:
          "Substituted a new Section 2 in its application to Kerala — removing the agricultural-land exclusion so that even land-related personal-law disputes between Muslims are decided by Shariat in Kerala.",
      },
      {
        year: 1968,
        shortName: "Pondicherry (Act 26 of 1968)",
        note:
          "Carved out the 'Renoncants' of the Union Territory of Pondicherry — French-law citizens who had renounced personal law — from the application of this Act.",
      },
      {
        year: 1983,
        shortName: "Amending Act 20 of 1983",
        note:
          "Inserted Section 4(4), requiring State Government rules made under the Act to be laid before the State Legislature.",
      },
      {
        year: 2019,
        shortName: "J&K Reorganisation Act, 2019",
        note:
          "Section 95 + Fifth Schedule omitted the 'except the State of Jammu and Kashmir' phrase from Section 1(2) w.e.f. 31 October 2019. The Act now extends to the whole of India without exception.",
      },
    ],
  },

  chapters: [
    {
      slug: "the-act",
      number: "I",
      title: "The Act",
      range: ["1", "6"],
      intro:
        "The Act is short and self-contained — six numbered sections in a single PDF, no chapter divisions in the source. Despite its length it is the gateway through which Muslim personal law enters every Indian civil court. Section 2 is the heart: it tells the court that custom no longer prevails, the Shariat does. Sections 1 and 6 do the territorial and repealing housework. Section 3 lets a Muslim opt in to a wider personal-law regime that also covers adoption, wills and legacies. Section 4 lets State Governments make procedural rules. Section 5 is now a repealed shell — judicial divorce was carved out into a separate 1939 statute.",
      sections: [
        // ====================================================
        // Section 1 — Short title and extent
        // ====================================================
        {
          number: "1",
          label: "Section 1",
          marginalNote: "Short title and extent",
          importance: "operative",
          verbatim:
            "(1) This Act may be called the Muslim Personal Law (Shariat) Application Act, 1937.\n\n(2) It extends to the whole of India.",
          plainEnglish:
            "Section 1 does two pieces of housekeeping. Sub-section (1) gives the Act its formal name — 'The Muslim Personal Law (Shariat) Application Act, 1937' — which every pleading, judgment and Government circular must use.\n\nSub-section (2) sets the territorial reach: the whole of India. The source PDF you are reading still prints the footnoted history — the original Act was confined to the 'Provinces of India'; it later excluded Part-B States until 1960; the J&K exception was carried until 31 October 2019 when the Jammu and Kashmir Reorganisation Act, 2019 erased it. Today there is no carve-out. The only practical exception is the 'Renoncants' of the Union Territory of Pondicherry (inserted by Act 26 of 1968) — French-law citizens who had renounced personal law — who remain outside the Act in respect of Pondicherry.\n\nThere is no separate commencement clause — the Act came into force on enactment, 7 October 1937.",
          scenarios: [
            {
              title: "A 1939 Lahore High Court order today",
              setup:
                "A property dispute traces back to a 1939 order of the Lahore High Court that decided a Muslim succession question under custom rather than Shariat.",
              outcome:
                "The 1939 order was passed when the Act was already in force (post 7 October 1937). The court should have applied Section 2 — Shariat overrides custom. If the order rested on custom, it can be challenged today as being contrary to Section 2 of the Act read with Article 13 of the Constitution.",
              appliesUnder: "Section 1(1) read with Section 2",
            },
            {
              title: "Does this Act apply in Ladakh today?",
              setup:
                "Two Muslim brothers in Kargil dispute a 2024 inheritance and one of them argues that the Act does not apply because of the historic J&K exception.",
              outcome:
                "The J&K Reorganisation Act, 2019 omitted the 'except the State of Jammu and Kashmir' phrase from Section 1(2) w.e.f. 31 October 2019. The Act now applies to both Union Territories of J&K and Ladakh. The brother's argument fails.",
              appliesUnder: "Section 1(2) post-2019 amendment",
              consequence: "Shariat applies to the 2024 inheritance.",
            },
          ],
          faq: [
            {
              q: "Does the Act apply in Jammu and Kashmir and Ladakh?",
              a: "Yes, since 31 October 2019. The Jammu and Kashmir Reorganisation Act, 2019 (Section 95 + Fifth Schedule) removed the earlier carve-out. Before that date, both UTs ran on State-level Muslim personal-law adaptations.",
            },
            {
              q: "Are there any remaining territorial exclusions?",
              a: "Effectively only the 'Renoncants' of the Union Territory of Pondicherry — Tamil-French families who renounced personal law under the French Code Civil — who are outside the Act by virtue of Act 26 of 1968. The Renoncants are a vanishingly small population today.",
            },
            {
              q: "Why is the short title legally important?",
              a: "Pleadings, family-court applications, succession certificates, Government notifications and inheritance-related orders must cite the Act by its exact name. Mis-citation (for example, calling it the 'Muslim Personal Law Act') can be used by the opposite side to argue that the wrong statute has been invoked.",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 2,
          },
        },

        // ====================================================
        // Section 2 — Application of Personal Law to Muslims
        // ====================================================
        {
          number: "2",
          label: "Section 2",
          marginalNote: "Application of Personal Law to Muslims",
          importance: "core",
          verbatim:
            "Notwithstanding any custom or usage to the contrary, in all questions (save questions relating to agricultural land) regarding intestate succession, special property of females, including personal property inherited or obtained under contract or gift or any other provision of Personal Law, marriage, dissolution of marriage, including talaq, ila, zihar, lian, khula and mubaraat, maintenance, dower, guardianship, gifts, trusts and trust properties, and wakfs (other than charities and charitable institutions and charitable and religious endowments) the rule of decision in cases where the parties are Muslims shall be the Muslim Personal Law (Shariat).",
          plainEnglish:
            "Section 2 is the heart of the Act and one of the most consequential single sentences in Indian civil law. It tells every Indian court, every Sub-Registrar, every Tehsildar and every Family Court Judge that — when both parties are Muslims — the rule of decision in the listed matters is the Muslim Personal Law (Shariat). Custom or usage, however ancient or however well-documented in a Gazetteer, is displaced.\n\nThe list of subject-matters is long and deliberate. It covers: intestate succession (i.e., where there is no will); the 'special property of females', including dower payments, gifts and inherited assets; marriage; dissolution of marriage, expressly including talaq, ila, zihar, lian, khula and mubaraat (each of which is a distinct mode of divorce under classical Hanafi law); maintenance; dower (mahr); guardianship of person and property; gifts (hiba); trusts and trust properties; and wakfs (the Muslim equivalent of a religious-cum-charitable endowment), but only private wakfs — charities and charitable / religious endowments are excluded.\n\nTwo important carve-outs. First, the explicit exclusion of 'questions relating to agricultural land' — agricultural inheritance is left to State revenue laws, which historically protected customary tenures. Second, the exclusion of charities and charitable institutions and charitable / religious endowments from the wakf coverage — those are governed by the Wakf Act, 1995 and equivalent statutes.\n\nThe opening words 'Notwithstanding any custom or usage to the contrary' are the most important. Before 1937, in many parts of India — especially Punjab, North-West Frontier Province and parts of South India — Muslim families followed Hindu-influenced customs in succession and gift. After 1937, those customs lose their legal force in the listed matters.\n\nA notable State variant: Kerala (Act 42 of 1963) substituted a fresh Section 2 that drops the 'agricultural land' carve-out. So in Kerala, the Shariat governs even agricultural-land disputes between Muslims.",
          defines: [
            {
              term: "Talaq",
              definition: "Unilateral repudiation of marriage by the husband under classical Muslim personal law.",
              sourceSection: "2",
            },
            {
              term: "Ila",
              definition: "A husband's oath to abstain from sexual relations with his wife for at least four months; if maintained, it results in irrevocable divorce.",
              sourceSection: "2",
            },
            {
              term: "Zihar",
              definition: "A husband comparing his wife to a female relative within prohibited degrees of marriage; a form of constructive divorce unless expiation is performed.",
              sourceSection: "2",
            },
            {
              term: "Lian",
              definition: "Mutual imprecation — divorce proceedings where the husband accuses the wife of adultery and both swear oaths; leads to dissolution if confirmed by a court.",
              sourceSection: "2",
            },
            {
              term: "Khula",
              definition: "Dissolution of marriage at the wife's instance, typically in return for giving up dower; requires the husband's consent under classical Hanafi law (though Indian courts have liberalised this).",
              sourceSection: "2",
            },
            {
              term: "Mubaraat",
              definition: "Mutual divorce — dissolution by mutual consent of husband and wife, with no need for fault or expiation.",
              sourceSection: "2",
            },
            {
              term: "Dower (mahr)",
              definition: "A mandatory payment from husband to wife on marriage; the unpaid portion is recoverable by the wife as a debt and ranks above ordinary unsecured debts in the husband's estate.",
              sourceSection: "2",
            },
            {
              term: "Wakf",
              definition: "A permanent dedication of property for religious or charitable purposes by a Muslim under personal law. The 1937 Act covers only private (family) wakfs; public charitable wakfs are governed by the Wakf Act, 1995.",
              sourceSection: "2",
            },
          ],
          visuals: [
            {
              kind: "comparison-table",
              title: "What Section 2 covers — and what it does not",
              caption: "The list is exhaustive: courts apply Shariat only to the listed subjects.",
              columns: ["Covered by Section 2", "Outside Section 2"],
              rows: [
                { left: "Intestate succession (no will)", right: "Agricultural land (covered by State revenue law)" },
                { left: "Marriage and its dissolution (incl. talaq, khula, mubaraat)", right: "Testamentary succession unless opted in under §3" },
                { left: "Maintenance and dower (mahr)", right: "Adoption unless opted in under §3" },
                { left: "Guardianship", right: "Charities and charitable endowments (Wakf Act, 1995)" },
                { left: "Gifts (hiba), trusts, private wakfs", right: "Criminal matters (BNS / BNSS apply)" },
                { left: "Special property of females", right: "Public wakfs (Wakf Act, 1995)" },
              ],
            },
            {
              kind: "callout",
              tone: "warning",
              title: "Custom does not survive Section 2",
              body:
                "The opening 'Notwithstanding any custom or usage to the contrary' is the most important phrase in the Act. Even a centuries-old village custom of Hindu-style coparcenary in a Muslim family loses legal force from 1937 onwards in respect of the listed matters.",
            },
            {
              kind: "callout",
              tone: "info",
              title: "Kerala carve-in",
              body:
                "Kerala Act 42 of 1963 replaced Section 2 in its application to Kerala — dropping the 'agricultural land' exclusion. So a Muslim agricultural-land succession dispute in Kerala is decided by Shariat, while the same dispute in (say) Bihar is decided by the State revenue law.",
            },
          ],
          cases: [
            {
              name: "Shamim Ara v. State of Uttar Pradesh",
              citation: "(2002) 7 SCC 518",
              court: "Supreme Court of India",
              year: 2002,
              ratio:
                "Section 2 makes Shariat applicable to dissolution of marriage. But talaq must be pronounced for reasonable cause, preceded by attempts at reconciliation between two arbiters from each side — a mere allegation in a written statement is not enough.",
            },
            {
              name: "Shayara Bano v. Union of India",
              citation: "(2017) 9 SCC 1",
              court: "Supreme Court of India",
              year: 2017,
              ratio:
                "Although talaq is listed in Section 2, the practice of talaq-e-biddat (instantaneous triple talaq) was held to be no part of Shariat. It is unconstitutional and is no longer the rule of decision under Section 2.",
            },
            {
              name: "Mohd. Ahmed Khan v. Shah Bano Begum",
              citation: "(1985) 2 SCC 556",
              court: "Supreme Court of India",
              year: 1985,
              ratio:
                "Section 2 lists 'maintenance', but a Muslim wife's right to maintenance under Section 125 CrPC (now Section 144 BNSS, 2023) is a parallel statutory remedy that survives Section 2 of this Act.",
            },
            {
              name: "Danial Latifi v. Union of India",
              citation: "(2001) 7 SCC 740",
              court: "Supreme Court of India",
              year: 2001,
              ratio:
                "Reading the 1986 Muslim Women (Protection of Rights on Divorce) Act harmoniously with Section 2 of the 1937 Act — a divorced Muslim wife is entitled to fair and reasonable provision and maintenance extending beyond iddat from her former husband.",
            },
          ],
          procedure: [
            {
              step: 1,
              title: "Court identifies the parties as Muslims",
              body:
                "The first preliminary question — are both parties Muslim? If both are not Muslim, Section 2 cannot apply; the court turns to general law or the personal law of the non-Muslim party.",
              actor: "Court / Sub-Registrar / Tehsildar",
            },
            {
              step: 2,
              title: "Identify the subject-matter",
              body:
                "Is the dispute about marriage, divorce, dower, maintenance, guardianship, gift, trust, wakf or intestate succession? If yes, Section 2 is engaged. If it is about agricultural land, public wakf or testamentary succession (no §3 declaration), Section 2 steps aside.",
              actor: "Court",
              ref: "Section 2",
            },
            {
              step: 3,
              title: "Apply Shariat — not custom",
              body:
                "Once both filters are satisfied, the rule of decision is the Shariat. Custom or local usage, however well documented, is irrelevant on the merits.",
              actor: "Court",
            },
            {
              step: 4,
              title: "Identify the school (Hanafi / Shafi'i / Maliki / Hanbali / Shia)",
              body:
                "Indian courts apply the school to which the party belongs. Most Indian Sunnis are Hanafi; Shias follow the Jafari (Ithna Ashari) or Ismaili schools. The court takes evidence on the parties' school where doubt exists.",
              actor: "Court",
            },
          ],
          crossRefs: [
            {
              statute: "Dissolution of Muslim Marriages Act, 1939",
              section: "Section 2",
              note: "Lists the statutory grounds on which a Muslim wife may obtain judicial divorce — complements Section 2 of the 1937 Act on khula.",
            },
            {
              statute: "Muslim Women (Protection of Rights on Marriage) Act, 2019",
              section: "Sections 3 and 4",
              note: "Criminalised the pronouncement of talaq-e-biddat; reinforces the Shayara Bano ruling.",
            },
            {
              statute: "Muslim Women (Protection of Rights on Divorce) Act, 1986",
              section: "—",
              note: "Read alongside Section 2 — governs maintenance of divorced Muslim women.",
            },
            {
              statute: "Wakf Act, 1995",
              section: "—",
              note: "Governs public wakfs — outside the wakf coverage of Section 2.",
            },
            {
              statute: "Indian Succession Act, 1925",
              section: "Sections 57–58",
              note: "Wills by Muslims are governed by personal law (or §3 declaration), not by Part VI of the Succession Act.",
            },
          ],
          scenarios: [
            {
              title: "Punjab Muslim family follows Hindu-style coparcenary",
              setup:
                "A Muslim agricultural family in Punjab has, for generations, treated joint family land as coparcenary — sons taking by birth, daughters excluded. After 1937, the daughter of the deceased seeks her Shariat share in the non-agricultural assets.",
              outcome:
                "On the non-agricultural assets, Section 2 overrides the custom — the daughter takes her Shariat share (typically half of a son's share). On the agricultural land, Section 2 is silent because of the 'save questions relating to agricultural land' carve-out — the State revenue law applies and the custom may survive there.",
              appliesUnder: "Section 2",
              consequence: "Daughter wins on movable / urban property; agricultural land governed separately.",
            },
            {
              title: "Talaq pronounced in a fit of anger",
              setup:
                "A husband, during a quarrel, instantaneously pronounces 'talaq, talaq, talaq' and walks out. The wife approaches the court.",
              outcome:
                "Under Shayara Bano (2017) and the 2019 Act, talaq-e-biddat (instant triple talaq) is no part of Shariat. Section 2 does not validate it. The marriage subsists; the husband may also face criminal prosecution under the 2019 Act.",
              appliesUnder: "Section 2 read with Shayara Bano (2017) and 2019 Act",
              consequence: "Marriage subsists; criminal liability on husband.",
            },
            {
              title: "Conversion to escape Hindu Marriage Act",
              setup:
                "A Hindu husband, already married under the Hindu Marriage Act, 1955, converts to Islam and contracts a second marriage, relying on classical Sunni Hanafi permission of polygamy.",
              outcome:
                "Sarla Mudgal v. Union of India (1995) holds that the second marriage is void and the husband attracts bigamy under Section 494 IPC (now Section 82, BNS 2023). Section 2 of the 1937 Act does not validate a conversion-of-convenience that defrauds the first wife's rights.",
              appliesUnder: "Section 2 read with Sarla Mudgal (1995)",
            },
          ],
          faq: [
            {
              q: "Why is agricultural land excluded?",
              a: "In 1937 British India had strong State-level revenue regimes (the Punjab Alienation of Land Act, the United Provinces Tenancy Act, etc.) that protected tenant customs in agricultural holdings. Parliament chose not to disturb those regimes. Kerala alone has removed the carve-out for its territory via Act 42 of 1963.",
            },
            {
              q: "Does Section 2 govern criminal cases?",
              a: "No. Section 2 lists only civil personal-law subjects. Criminal liability — for cruelty, bigamy, dowry, domestic violence — is governed by the BNS, 2023 and the BNSS, 2023. The Muslim Women (Protection of Rights on Marriage) Act, 2019 also independently criminalises talaq-e-biddat.",
            },
            {
              q: "What if only one party is a Muslim?",
              a: "Section 2 says 'where the parties are Muslims'. If one party is not a Muslim, Section 2 cannot apply — the court turns to other law: the Special Marriage Act, 1954 if the marriage was solemnised under it; otherwise the applicable general law or non-Muslim party's personal law.",
            },
            {
              q: "Are public wakfs governed by Section 2?",
              a: "No. The closing words of Section 2 exclude 'charities and charitable institutions and charitable and religious endowments'. These are governed by the Wakf Act, 1995. Only private (family) wakfs sit under Section 2 of this Act.",
            },
            {
              q: "Which school of Muslim law does the court apply?",
              a: "The school to which the parties belong. For Sunnis in India, this is typically the Hanafi school; for Shias, the Jafari (Ithna Ashari) school or the Ismaili school for Khojas and Bohras. The court takes evidence of the school where there is doubt.",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 2,
          },
        },

        // ====================================================
        // Section 3 — Power to make a declaration
        // ====================================================
        {
          number: "3",
          label: "Section 3",
          marginalNote: "Power to make a declaration",
          importance: "operative",
          verbatim:
            "(1) Any person who satisfies the prescribed authority—\n\n(a) that he is a Muslim, and\n\n(b) that he is competent to contract within the meaning of section 11 of the Indian Contract Act, 1872 (9 of 1872), and\n\n(c) that he is a resident of the territories to which this Act extends,\n\nmay by declaration in the prescribed form and filed before the prescribed authority declare that he desires to obtain the benefit of the provisions of this section, and thereafter the provisions of section 2 shall apply to the declarant and all his minor children and their descendants as if in addition to the matters enumerated therein adoption, wills and legacies were also specified.\n\n(2) Where the prescribed authority refuses to accept a declaration under sub-section (1), the person desiring to make the same may appeal to such officer as the State Government may, by general or special order, appoint in this behalf, and such officer may, if he is satisfied that the appellant is entitled to make the declaration, order the prescribed authority to accept the same.",
          plainEnglish:
            "Section 3 is an opt-in mechanism. Section 2 deliberately leaves out three subjects — adoption, wills (testamentary disposition) and legacies. Section 3 lets an individual Muslim, by a one-time formal declaration before the prescribed authority, extend Section 2 to those three subjects as well. Once the declaration is accepted, Shariat governs adoption, wills and legacies for that person, his minor children and their descendants.\n\nThe declarant has to satisfy three preconditions: (a) he is a Muslim; (b) he is competent to contract under Section 11 of the Indian Contract Act, 1872 (i.e., he has attained majority, is of sound mind and is not disqualified from contracting by any law); and (c) he is a resident of the territories to which the Act extends — today, the whole of India.\n\nSub-section (2) provides an appellate safety valve. If the prescribed authority (typically a designated official under State rules made under Section 4) refuses to accept the declaration, the declarant can appeal to an officer appointed by the State Government. If the appellate officer is satisfied, he can direct the lower authority to accept the declaration.\n\nIn practice, Section 3 declarations are rare. Most Indian Muslims are content to leave wills and adoption to general principles of Muslim personal law (which restricts willed disposition to one-third of the estate and does not recognise full legal adoption in the Hindu sense). The opt-in is, however, a useful planning tool in mixed-tradition families.",
          visuals: [
            {
              kind: "process-flow",
              title: "How a Section 3 declaration works",
              caption: "Opting in extends Section 2 Shariat to adoption, wills and legacies for the declarant and his descendants.",
              nodes: [
                { id: "n1", label: "Check eligibility", sub: "Muslim · §11 ICA capacity · resident" },
                { id: "n2", label: "File declaration", sub: "Prescribed form before prescribed authority" },
                { id: "n3", label: "Authority accepts", sub: "§2 extended to adoption / wills / legacies" },
                { id: "n4", label: "If refused — appeal", sub: "To State-appointed officer (§3(2))" },
                { id: "n5", label: "Effect on family", sub: "Binds declarant + minor children + descendants" },
              ],
              edges: [
                { from: "n1", to: "n2" },
                { from: "n2", to: "n3" },
                { from: "n2", to: "n4" },
                { from: "n4", to: "n3" },
                { from: "n3", to: "n5" },
              ],
            },
          ],
          crossRefs: [
            {
              statute: "Indian Contract Act, 1872",
              section: "Section 11",
              note: "Defines who is 'competent to contract' for the purposes of Section 3(1)(b).",
            },
            {
              statute: "Juvenile Justice (Care and Protection of Children) Act, 2015",
              section: "Section 56",
              note: "Modern statutory route for adoption by persons of any religion — increasingly used by Muslims as an alternative to a Section 3 declaration.",
            },
          ],
          scenarios: [
            {
              title: "A Section 3 declarant predeceases his son",
              setup:
                "X, a Muslim, made a Section 3 declaration in 1985. He dies leaving a son (then aged 14) and a will bequeathing his entire estate to a charitable trust.",
              outcome:
                "Section 3 extends Section 2 to wills. The Shariat one-third rule applies — a Muslim cannot will away more than one-third of the estate without the consent of his heirs. The will is valid to the extent of one-third; the remaining two-thirds devolve by intestate succession under Shariat. The minor son is bound by the declaration but can also seek intestate share.",
              appliesUnder: "Section 3(1) read with Section 2",
              consequence: "Will limited to one-third; balance two-thirds devolves by Shariat intestate succession.",
            },
          ],
          faq: [
            {
              q: "Why opt in? Why not just leave the default in place?",
              a: "Because without a Section 3 declaration, adoption, wills and legacies fall outside the listed subjects of Section 2 — and are governed by general statute (Indian Succession Act, JJ Act for adoption) or by local custom. A Section 3 declaration locks in Shariat for those matters, which can be important in cosmopolitan families where the heirs might otherwise litigate the applicable law.",
            },
            {
              q: "Can the declaration be withdrawn?",
              a: "The Act is silent. Most commentators read the declaration as irrevocable once accepted — its consequences ripple forward to minor children and descendants. A subsequent declaration purporting to revoke it would normally be ineffective on the existing descendants who have already taken vested interests.",
            },
            {
              q: "Does the declaration affect a non-Muslim spouse?",
              a: "No. Section 2 (extended via Section 3) applies only 'where the parties are Muslims'. A Section 3 declaration cannot bind a non-Muslim spouse on questions to which the spouse is a party.",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 3,
          },
        },

        // ====================================================
        // Section 4 — Rule-making power
        // ====================================================
        {
          number: "4",
          label: "Section 4",
          marginalNote: "Rule-making power",
          importance: "operative",
          verbatim:
            "(1) The State Government may make rules to carry into effect the purposes of this Act.\n\n(2) In particular and without prejudice to the generality of the foregoing powers, such rules may provide for all or any of the following matters, namely:—\n\n(a) for prescribing the authority before whom and the form in which declaration under this Act shall be made;\n\n(b) for prescribing the fees to be paid for the filing of declarations and for the attendance at private residences of any person in the discharge of his duties under this Act; and for prescribing the times at which such fees shall be payable and the manner in which they shall be levied.\n\n(3) Rules made under the provisions of this section shall be published in the Official Gazette and shall thereupon have effect as if enacted in this Act.\n\n(4) Every rule made by the State Government under this Act shall be laid, as soon as it is made, before the State Legislature.",
          plainEnglish:
            "Section 4 is unusual in vesting the rule-making power in the State Governments rather than the Centre. The reason is constitutional: at the time of enactment (1937), 'Mahomedan Law and Hindu Law' was a Provincial Legislative List subject under the Government of India Act, 1935. Under the present Constitution, personal law sits in the Concurrent List (Entry 5 of List III), but Parliament has not displaced the State rule-making power.\n\nSub-section (1) is a general power to make rules to carry into effect the purposes of the Act. Sub-section (2) sets out the two specific matters: (a) the authority and form for Section 3 declarations; and (b) fees and times for filing declarations and for attendance at private residences.\n\nSub-section (3) gives the rules legislative force — they take effect 'as if enacted in this Act' once published in the State Official Gazette.\n\nSub-section (4) — inserted by Act 20 of 1983 — requires the State Government to lay every rule before the State Legislature, mirroring the parliamentary-control mechanism in most modern Indian statutes.",
          scenarios: [
            {
              title: "State has not notified a prescribed authority",
              setup:
                "A Muslim resident of a State that has not, since Independence, notified any prescribed authority under Section 4 wants to file a Section 3 declaration.",
              outcome:
                "Without a notified authority, the declaration cannot be filed in the prescribed form. The remedy is either (a) to file a writ of mandamus in the High Court directing the State to notify the authority, or (b) to file the declaration before the District Collector, who is treated by most States as a default prescribed authority.",
              appliesUnder: "Section 4(2)(a)",
            },
          ],
          faq: [
            {
              q: "Why are the rules made by State Governments and not the Centre?",
              a: "Historical reasons — the Act was passed under the 1935 Constitution where personal law was a Provincial subject. The post-1950 shift of personal law to the Concurrent List has not yet been used by Parliament to displace State rule-making here.",
            },
            {
              q: "Are State rules under Section 4 uniform across India?",
              a: "No. Each State has its own rules, often historical and dormant. This is one reason Section 3 declarations are rare — practical guidance from the prescribed authority varies State by State.",
            },
            {
              q: "What if a rule under Section 4 conflicts with the Act itself?",
              a: "The rule is ultra vires to the extent of conflict. Sub-section (3) gives rules the force of law only insofar as they are consistent with the Act. A rule that imposes substantive restrictions beyond what the Act envisages can be struck down by the High Court.",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 3,
          },
        },

        // ====================================================
        // Section 5 — Repealed
        // ====================================================
        {
          number: "5",
          label: "Section 5",
          marginalNote: "[Dissolution of marriage by Court in certain circumstances] — Repealed",
          importance: "transitional",
          verbatim:
            "5. [Dissolution of marriage by Court in certain circumstances.]—Rep. by the Dissolution of Muslim Marriages Act, 1939 (8 of 1939), s. 6 (w.e.f. 17-3-1939).",
          plainEnglish:
            "Section 5 has been a shell since 17 March 1939. It originally provided for judicial dissolution of a Muslim marriage in certain circumstances (such as desertion, cruelty, impotence and false accusation of adultery). Within two years of the Act's commencement, Parliament took that subject out and gave it a more elaborate, dedicated statute — the Dissolution of Muslim Marriages Act, 1939 — and repealed Section 5 of this Act as a consequential clean-up.\n\nToday, a Muslim wife seeking judicial divorce relies entirely on Section 2 of the 1939 Act, which lists nine grounds (whereabouts of husband unknown for four years, failure to maintain for two years, imprisonment for seven years or more, failure to perform marital obligations for three years without reasonable cause, impotence at the time of marriage, two-year insanity or leprosy or virulent venereal disease, marriage before fifteen with right of repudiation before eighteen, cruelty, and any other ground recognised under Muslim law). Section 5 here is preserved in the source PDF only as a historical anchor.",
          crossRefs: [
            {
              statute: "Dissolution of Muslim Marriages Act, 1939",
              section: "Section 2",
              note: "Replaces and expands the original Section 5 of this Act. Lists the nine statutory grounds on which a Muslim wife may obtain judicial dissolution of her marriage.",
            },
            {
              statute: "Dissolution of Muslim Marriages Act, 1939",
              section: "Section 6",
              note: "The provision by which Section 5 of this Act was repealed, with effect from 17 March 1939.",
            },
          ],
          scenarios: [
            {
              title: "Confused trial-court order citing Section 5",
              setup:
                "A trial court, in a 2020 dissolution petition, cites 'Section 5 of the 1937 Act' as authority for granting judicial divorce.",
              outcome:
                "Citing Section 5 is wrong — it has been repealed since 1939. The correct provision is Section 2 of the Dissolution of Muslim Marriages Act, 1939. The order may still be sustainable if the substantive analysis fits Section 2 of the 1939 Act; the citation defect alone is not fatal but invites appellate scrutiny.",
              appliesUnder: "Section 5 (repealed) — actual remedy under 1939 Act",
            },
          ],
          faq: [
            {
              q: "Why is the repealed section still printed in the source PDF?",
              a: "Indian official statute publishers retain repealed sections as placeholders so that subsequent numbering (Section 6) remains intact, and so that legal historians and litigators can trace amendments without referring to multiple gazettes. The substantive content sits in the Dissolution of Muslim Marriages Act, 1939.",
            },
            {
              q: "Can a Muslim husband seek divorce under the 1939 Act?",
              a: "No. The 1939 Act is for Muslim wives only. A husband's remedies are extra-judicial (talaq, ila, zihar, lian) governed by Section 2 of the 1937 Act and modern judicial scrutiny (especially Shamim Ara, 2002 and Shayara Bano, 2017).",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 3,
          },
        },

        // ====================================================
        // Section 6 — Repeals
        // ====================================================
        {
          number: "6",
          label: "Section 6",
          marginalNote: "Repeals",
          importance: "transitional",
          verbatim:
            "The under mentioned provisions of the Acts and Regulations mentioned below shall be repealed in so far as they are inconsistent with the provisions of this Act, namely:—\n\n(1) Section 26 of the Bombay Regulation IV of 1827;\n\n(2) Section 16 of the Madras Civil Courts Act, 1873 (3 of 1873);\n\n(4) Section 3 of the Oudh Laws Act, 1876 (18 of 1876);\n\n(5) Section 5 of the Punjab Laws Act, 1872 (4 of 1872);\n\n(6) Section 5 of the Central Provinces Laws Act, 1875 (20 of 1875); and\n\n(7) Section 4 of the Ajmere Laws Regulation, 1877 (3 of 1877).",
          plainEnglish:
            "Section 6 is a tidy-up clause. Before 1937, several Provincial statutes — the Bombay Regulation of 1827, the Madras Civil Courts Act of 1873, the Oudh Laws Act of 1876, the Punjab Laws Act of 1872, the Central Provinces Laws Act of 1875 and the Ajmere Laws Regulation of 1877 — each contained a provision that, in respect of personal-law disputes, directed the courts to apply 'usage' or 'custom' before personal law. Those provisions had been used over decades to apply Hindu-influenced custom to Muslim families in Punjab, Oudh, the Central Provinces and elsewhere.\n\nSection 6 repeals each of those provisions 'in so far as they are inconsistent' with this Act. The phrase 'in so far as' is important — the repeal is partial. The Provincial statutes survive for their other subjects; only their custom-priority clauses fall.\n\nEntry (3) of the original list was omitted by the 1943 amendment (it referred to a provision that had separately become redundant). The numbering in the source PDF therefore skips from (2) to (4).",
          visuals: [
            {
              kind: "comparison-table",
              title: "Pre-1937 custom-first clauses now repealed",
              caption: "Section 6 swept away six Provincial-era directions to apply custom before personal law.",
              columns: ["Provincial statute", "Provision repealed"],
              rows: [
                { left: "Bombay Regulation IV of 1827", right: "Section 26" },
                { left: "Madras Civil Courts Act, 1873", right: "Section 16" },
                { left: "Oudh Laws Act, 1876", right: "Section 3" },
                { left: "Punjab Laws Act, 1872", right: "Section 5" },
                { left: "Central Provinces Laws Act, 1875", right: "Section 5" },
                { left: "Ajmere Laws Regulation, 1877", right: "Section 4" },
              ],
            },
          ],
          scenarios: [
            {
              title: "Pre-1937 Punjab succession order resurrected",
              setup:
                "In a 2024 partition suit, one side relies on a pre-1937 Lahore Chief Court ruling that applied Punjab custom of male-only succession to a Muslim family.",
              outcome:
                "The Lahore ruling rested on Section 5 of the Punjab Laws Act, 1872 — which Section 6 of this Act has repealed in so far as inconsistent with the 1937 Act. The custom-priority basis is no longer law. Section 2 of the 1937 Act applies — Shariat governs, and the female heirs take their share.",
              appliesUnder: "Section 6 read with Section 2",
              consequence: "Female heirs admitted to share; pre-1937 custom ruling no longer binding.",
            },
          ],
          faq: [
            {
              q: "Why is the repeal 'in so far as inconsistent'?",
              a: "Because the Provincial statutes deal with many other subjects (court structure, jurisdiction, procedure) that have nothing to do with personal law. Parliament wanted to surgically remove only the custom-first clauses, not the whole statutes. The phrase 'in so far as inconsistent' confines the repeal to the personal-law-direction provisions.",
            },
            {
              q: "Does Section 6 affect any modern post-1937 State law that prioritises custom?",
              a: "No. Section 6 is a closed list — it only repealed the six listed pre-1937 provisions. A modern State law that purports to prioritise custom over Shariat in the listed subjects would face a different challenge — it would be inconsistent with Section 2 of this Act (and arguably also unconstitutional under Article 14) and would be struck down on that ground, not under Section 6.",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 3,
            pdfPageEnd: 4,
          },
        },
      ],

      scenarios: [
        {
          title: "A daughter's inheritance dispute in a Punjabi Muslim family",
          setup:
            "A Muslim landowner in Punjab dies intestate in 2024. The family runs a wholesale-cloth business, owns four shops in the town and farms 18 acres of agricultural land in the village. The sons argue that, by family custom, the daughters should be cut out of the business and shops; on the land, they say a male-line custom has always prevailed.",
          outcome:
            "Section 2 of the 1937 Act applies to the business and the shops — Shariat governs, the daughters take their share (typically half of a son's share). On the agricultural land, the carve-out in Section 2 ('save questions relating to agricultural land') means the Punjab Tenancy / Revenue law applies. Whether the male-line custom survives there depends on the State revenue law — a separate inquiry. The pre-1937 Punjab Laws Act, 1872 custom-first clause is gone under Section 6, so the brothers cannot resurrect it.",
          appliesUnder: "Sections 2 and 6",
        },
        {
          title: "Estate planning for a cosmopolitan Indian Muslim",
          setup:
            "A Mumbai-based Indian Muslim with assets in Mumbai, Bengaluru and Dubai wants to ensure that adoption, wills and legacies in his family are decided by Shariat, even decades from now.",
          outcome:
            "He files a Section 3 declaration before the prescribed authority in Maharashtra. Once accepted, Section 2 of the Act extends to adoption, wills and legacies for himself, his minor children and their descendants. His estate plan can then validly rest on Shariat's one-third bequest rule and on Hanafi rules of intestate succession. Dubai-situate assets are governed by UAE law, but Indian-situate assets follow Shariat by virtue of the declaration.",
          appliesUnder: "Section 3 read with Section 2",
        },
      ],
      faq: [
        {
          q: "Why was this Act needed at all in 1937?",
          a: "Because in the decades before 1937, Indian courts had developed an elaborate body of case-law applying 'custom' to Muslim families in Punjab, Oudh, the Central Provinces and parts of Madras. Customs often modelled on Hindu coparcenary or male-line primogeniture displaced classical Shariat in succession, gift and adoption. Muslim reformers — supported by the Jamiat-Ulema-i-Hind and modernist legislators like Muhammad Ali Jinnah — pushed for a statute that would restore Shariat as the rule of decision. The Act was the result.",
        },
        {
          q: "Is the Act constitutional?",
          a: "Repeatedly upheld. The Act's selective application to Muslims has been treated as a reasonable classification under Article 14 because it follows from religion-based personal law, which the Constitution recognises in Articles 25–28. Specific applications — like talaq-e-biddat in Shayara Bano (2017) — have been struck down, but the Act's basic operation has not been disturbed.",
        },
        {
          q: "Do criminal-law remedies coexist with the Act?",
          a: "Yes. Cruelty, domestic violence, dowry, bigamy and now talaq-e-biddat are all criminal offences governed by the BNS, 2023, the Domestic Violence Act, 2005 and the Muslim Women (Protection of Rights on Marriage) Act, 2019. The 1937 Act governs civil personal-law remedies; criminal remedies run on a separate track.",
        },
        {
          q: "How does the Act interact with the Uniform Civil Code debate?",
          a: "A Uniform Civil Code under Article 44 of the Constitution would, by definition, displace religion-specific personal-law statutes like this one for the listed subjects. As of today no UCC has been enacted at the Union level; Uttarakhand has enacted a State UCC in 2024 which restricts the operation of the 1937 Act within Uttarakhand's territory for those who fall under the UCC's scope.",
        },
      ],
    },
  ],
};
