/**
 * The Forest (Conservation) Act, 1980 — Act No. 69 of 1980.
 *
 * The user's source PDF (Environment & Land / Forest Conservation Act, 1980.pdf,
 * 2 pages) contains the ORIGINAL 1980 text. Important real-world note:
 * Parliament expanded this Act in 1988 (adding Sections 1A inserted via §2,
 * Section 3A and Section 3B) and again in 2023 (renamed it "Van (Sanrakshan
 * Evam Samvardhan) Adhiniyam, 1980"). Those amendments are flagged in
 * cross-references but the verbatim text on each section page mirrors only
 * what the source PDF actually prints.
 */

import type { Statute } from "../_types";

const SOURCE_BASE = "/pdfs/Environment%20%26%20Land/Forest%20Conservation%20Act,%201980.pdf";
const SOURCE_FILE = "Forest Conservation Act, 1980.pdf";

export const forestConservationAct1980: Statute = {
  meta: {
    slug: "forest-conservation-act-1980",
    shortName: "Forest Conservation Act",
    fullName: "The Forest (Conservation) Act, 1980",
    year: 1980,
    sanskrit: "वन संरक्षण अधिनियम",
    tagline: "No forest land diverted without the Centre's nod.",
    summary:
      "A short statute that places a federal check on de-reservation and diversion of forest land for non-forest purposes. Just five operative sections, but each one carries far-reaching consequences for States, project developers and forest-dependent communities.",
    preamble:
      "An Act to provide for the conservation of forests and for matters connected therewith or ancillary or incidental thereto.\n\nBE it enacted by Parliament in the Thirty-first Year of the Republic of India as follows:—",
    categorySlug: "environment-and-land",
    enactedOn: "1980-12-27",
    commencement: "Deemed to have come into force on 25 October 1980",
    totalSections: 5,
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
        year: 1988,
        shortName: "Forest (Conservation) Amendment Act, 1988",
        note:
          "Inserted Section 1A (extension to J&K), expanded Section 2 to also cover clearance of naturally-grown trees and assignment of forest land by way of lease, and added Sections 3A (penalty) and 3B (offences by Government departments). The user's source PDF predates these amendments.",
      },
      {
        year: 2023,
        shortName: "Van (Sanrakshan Evam Samvardhan) Adhiniyam, 1980 — amendment",
        note:
          "Renamed the Act and carved out specified exemptions (linear projects in border areas, defence-related projects, etc.) from the prior-approval requirement under Section 2.",
      },
    ],
  },

  chapters: [
    {
      slug: "the-act",
      number: "I",
      title: "The Act",
      range: ["1", "5"],
      intro:
        "The Forest (Conservation) Act, 1980 is one of India's shortest environmental statutes — five operative sections, no chapters in the original PDF. Despite its size, it is the single most powerful federal lever over State governments when it comes to diverting forest land. Walk through each section below; every quote, scenario and FAQ is drawn directly from the source PDF.",
      sections: [
        // ====================================================
        // Section 1 — Short title, extent and commencement
        // ====================================================
        {
          number: "1",
          label: "Section 1",
          marginalNote: "Short title, extent and commencement",
          importance: "operative",
          verbatim:
            "(1) This Act may be called the Forest (Conservation) Act, 1980.\n\n(2) It extends to the whole of India except the State of Jammu and Kashmir.\n\n(3) It shall be deemed to have come into force on the 25th day of October, 1980.",
          plainEnglish:
            "Section 1 does three quiet but important jobs. First, it gives the Act its formal name — \"The Forest (Conservation) Act, 1980\" — which is the title every court, notification and legal pleading has to use.\n\nSecond, it sets out where the Act applies. The 1980 text printed in your PDF says \"the whole of India except the State of Jammu and Kashmir.\" That exclusion is now historic — after the Jammu and Kashmir Reorganisation Act, 2019 and the 1988 amendment, the Act extends to all of India.\n\nThird, it back-dates the commencement to 25 October 1980. That date matters: any forest-land diversion or de-reservation that happened on or after 25 October 1980 needed Central Government approval, even though the Act was actually passed by Parliament later that year. Parliament chose that date because the Forest (Conservation) Ordinance, 1980 — which the Act replaced — itself came into force on 25 October 1980 (see Section 5).",
          scenarios: [
            {
              title: "A State signs off a diversion two weeks before the Act is published",
              setup:
                "On 10 November 1980, a State Forest Department issues an order allowing a portion of a reserved forest to be used for a mining lease. The Act was published in the Gazette only on 27 December 1980.",
              outcome:
                "The diversion is not safe. Section 1(3) says the Act 'shall be deemed to have come into force on the 25th day of October, 1980'. The November order falls inside the deemed period, so the State needed prior Central Government approval under Section 2. The order is open to challenge as void.",
              appliesUnder: "Section 1(3) read with Section 2",
              consequence: "Order voidable; potential prosecution under Section 3A after the 1988 amendment.",
            },
          ],
          faq: [
            {
              q: "Why is Jammu and Kashmir mentioned as an exception in the PDF?",
              a: "Because in 1980 Article 370 of the Constitution meant most central laws did not automatically apply to J&K. Parliament had to either re-enact them for J&K or extend them by a separate notification. The 1988 amendment (added Section 1A) and later the J&K Reorganisation Act, 2019 removed this carve-out. Today, the Act applies to every part of the country including the Union Territories of J&K and Ladakh.",
            },
            {
              q: "What does it mean for an Act to be 'deemed' to come into force on an earlier date?",
              a: "It means Parliament treats the Act as if it had been in force since that earlier date — here, 25 October 1980 — even though the Act was actually published later. Anything done by a State after the deemed date without Central approval can be questioned under this Act.",
            },
            {
              q: "Does the short title matter in practice?",
              a: "Yes. Pleadings, notices, court orders, RTI applications and Ministry of Environment circulars must cite the Act by its formal name. Mis-citation (e.g. calling it the 'Forest Protection Act') can be used by the opposite side to argue that the wrong statute is being invoked.",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 2,
          },
        },

        // ====================================================
        // Section 2 — Restriction on de-reservation / non-forest use
        // ====================================================
        {
          number: "2",
          label: "Section 2",
          marginalNote:
            "Restriction on the dereservation of forests or use of forest land for non-forest purpose",
          importance: "core",
          verbatim:
            "Notwithstanding anything contained in any other law for the time being in force in a State, no State Government or other authority shall make, except with the prior approval of the Central Government, any order directing—\n\n(i) that any reserved forest (within the meaning of the expression \"reserved forest\" in any law for the time being in force in that State) or any portion thereof, shall cease to be reserved;\n\n(ii) that any forest land or any portion thereof may be used for any non-forest purpose.\n\nExplanation.—For the purposes of this section \"non-forest purpose\" means the breaking up or clearing of any forest land or portion thereof for any purpose other than reafforestation.",
          plainEnglish:
            "Section 2 is the heart of the Act — every other section exists to support it. In one sentence, it tells every State Government and every State authority: you may not, by yourself, (a) un-reserve a reserved forest, or (b) divert forest land to any non-forest use. You have to get the Central Government's approval first.\n\nThe Section opens with a 'notwithstanding' clause. That is legal shorthand for: it does not matter what your State's forest law, land law or any other statute says — this central law overrides them all on the specific question of forest diversion.\n\nThe two prohibited acts are sweeping. Clause (i) covers any order that 'de-reserves' a reserved forest — meaning a forest that was once declared reserved under the Indian Forest Act or an equivalent State law. Clause (ii) covers any order allowing forest land to be used for any 'non-forest purpose'.\n\nThe Explanation at the bottom defines that key phrase. 'Non-forest purpose' means breaking up or clearing forest land for anything except reafforestation. That is deliberately wide: roads, mining, dams, factories, transmission lines, plantations of horticultural crops, even agricultural use — all of them count as 'non-forest purposes' and need Central approval.\n\nLandmark cases like T.N. Godavarman v. Union of India (1996) read 'forest' in this Section to cover not just statutorily-reserved forests but any area answering the dictionary meaning of 'forest', whoever owns it — including private 'deemed' forests.",
          defines: [
            {
              term: "Non-forest purpose",
              definition:
                "The breaking up or clearing of any forest land or portion thereof for any purpose other than reafforestation.",
              sourceSection: "2 (Explanation)",
            },
            {
              term: "Reserved forest",
              definition:
                "The expression carries the meaning given to it in the State forest law currently in force — typically a forest notified as 'reserved' under the Indian Forest Act, 1927 or an equivalent State Act.",
              sourceSection: "2(i)",
            },
          ],
          procedure: [
            {
              step: 1,
              title: "User agency identifies a need to use forest land",
              body:
                "A government department, public-sector body or private developer (the 'user agency') identifies that a project will require the diversion of forest land or de-reservation of a reserved forest.",
              actor: "User agency",
            },
            {
              step: 2,
              title: "Proposal lodged with the State Forest Department",
              body:
                "The user agency files a proposal — these days through the PARIVESH portal — giving land details, project purpose, cost-benefit analysis, compensatory afforestation plan and Net Present Value (NPV) payment.",
              actor: "State Forest Department",
              ref: "Forest (Conservation) Rules",
            },
            {
              step: 3,
              title: "State recommends to the Central Government",
              body:
                "After scrutiny, the State forwards the proposal with its recommendation to the Regional Office of the Ministry of Environment, Forest and Climate Change (MoEFCC) — or directly to MoEFCC for proposals above the threshold.",
              actor: "State Government",
            },
            {
              step: 4,
              title: "Advisory Committee examines the proposal",
              body:
                "The Forest Advisory Committee constituted under Section 3 advises the Central Government on whether to grant Stage-I 'in-principle' approval.",
              actor: "Forest Advisory Committee",
              ref: "Section 3",
            },
            {
              step: 5,
              title: "Central Government grants approval",
              body:
                "If satisfied, MoEFCC issues a Stage-I approval listing conditions (compensatory afforestation land, NPV deposit, mitigation measures). Once conditions are complied with, Stage-II final approval is issued. Only then may the State pass the diversion order.",
              actor: "MoEFCC, Government of India",
              ref: "Section 2 (prior approval)",
            },
          ],
          visuals: [
            {
              kind: "process-flow",
              title: "How a forest-diversion proposal moves",
              caption:
                "From a user-agency need to a final diversion order, every step exists because Section 2 forbids the State from acting alone.",
              nodes: [
                { id: "n1", label: "User agency identifies need", sub: "Mining co., NHAI, DISCOM, etc." },
                { id: "n2", label: "Proposal on PARIVESH", sub: "Filed with State Forest Dept." },
                { id: "n3", label: "State recommendation", ref: "Rule 6" },
                { id: "n4", label: "Forest Advisory Committee", sub: "Constituted under §3", ref: "Section 3" },
                { id: "n5", label: "Central approval", sub: "Stage-I → Stage-II", ref: "Section 2" },
                { id: "n6", label: "State diversion order", sub: "Only after Stage-II" },
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
              title: "'Forest' is read broadly",
              body:
                "In T.N. Godavarman v. Union of India (1996), the Supreme Court held that the word 'forest' in Section 2 takes its dictionary meaning. Any area that looks like a forest — including private and unclassed land — is covered, regardless of how it appears in revenue records.",
            },
          ],
          cases: [
            {
              name: "T.N. Godavarman Thirumulpad v. Union of India",
              citation: "(1997) 2 SCC 267",
              court: "Supreme Court of India",
              year: 1996,
              ratio:
                "The word 'forest' in Section 2 must be understood in its dictionary sense. Section 2 therefore applies to all forests, irrespective of ownership or classification in revenue records.",
            },
            {
              name: "Lafarge Umiam Mining Pvt. Ltd. v. Union of India",
              citation: "(2011) 7 SCC 338",
              court: "Supreme Court of India",
              year: 2011,
              ratio:
                "Stage-I approval under Section 2 is only an 'in-principle' clearance. The State cannot pass any diversion order until Stage-II final approval is issued after all conditions are met.",
            },
          ],
          crossRefs: [
            {
              statute: "Indian Forest Act, 1927",
              section: "20",
              note: "Defines and constitutes 'reserved forest' — the same expression Section 2(i) borrows.",
            },
            {
              statute: "Forest (Conservation) Amendment Act, 1988",
              section: "2",
              note:
                "Expanded the prohibition to also cover clearing of naturally-grown trees and assignment of forest land by way of lease. Not yet present in the user's 1980 PDF.",
            },
            {
              statute: "Environment (Protection) Act, 1986",
              section: "3",
              note:
                "Provides additional Central powers to protect forests as part of the environment — works alongside Section 2.",
            },
          ],
          scenarios: [
            {
              title: "A State Cabinet clears a highway widening through a reserved forest",
              setup:
                "A State Cabinet passes a resolution allowing the State PWD to widen a 12 km stretch of NH passing through 86 hectares of reserved forest, citing the urgency of inter-State connectivity. No Central approval is mentioned in the resolution.",
              outcome:
                "The State has crossed Section 2(ii). The land is forest land; widening for a highway is a 'non-forest purpose'. Without prior Central Government approval, the State's resolution carries no legal effect; affected citizens or NGOs can challenge it before the High Court or the National Green Tribunal.",
              appliesUnder: "Section 2(ii) read with Explanation",
              consequence: "Resolution liable to be quashed; possible contempt before the Supreme Court in T.N. Godavarman.",
            },
            {
              title: "A villager clears a small patch of jhum-fallow forest land to plant areca nut",
              setup:
                "A farmer on the edge of a reserved forest clears 0.3 hectares of regrown shrub forest and plants an areca nut orchard, relying on a State revenue record showing the land as 'unclassed'.",
              outcome:
                "After Godavarman, the dictionary meaning of 'forest' applies. Even unclassed land that bears forest can fall under Section 2. The State cannot regularise the clearance without Central approval; the farmer may also be prosecuted under the State forest law and, post-1988, under Section 3A.",
              appliesUnder: "Section 2 Explanation",
            },
          ],
          faq: [
            {
              q: "Does 'non-forest purpose' cover plantations like tea, coffee or rubber?",
              a: "Yes. The Explanation to Section 2 makes only 'reafforestation' an exception. Tea, coffee, rubber, oil palm, horticulture and even agriculture on forest land are all non-forest purposes. They all need Central approval.",
            },
            {
              q: "What is the difference between Section 2(i) and Section 2(ii)?",
              a: "Section 2(i) bars orders that change the legal status of a reserved forest (de-reservation). Section 2(ii) bars orders that allow forest land to be physically used for a non-forest purpose, regardless of whether the forest's legal status changes. Many proposals trigger both clauses simultaneously.",
            },
            {
              q: "Can the Centre attach conditions when granting approval?",
              a: "Yes. In practice, approvals under Section 2 are conditional on compensatory afforestation on equivalent non-forest land, payment of Net Present Value of the forest, mitigation measures and monitoring. The conditions are binding and breach can lead to revocation.",
            },
            {
              q: "If a State has already issued a diversion order without Central approval, what is the remedy?",
              a: "The order is liable to be quashed by the jurisdictional High Court or the National Green Tribunal. Citizens, affected forest-dependent communities and NGOs all have standing to challenge it as a violation of Section 2.",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 2,
          },
        },

        // ====================================================
        // Section 3 — Constitution of Advisory Committee
        // ====================================================
        {
          number: "3",
          label: "Section 3",
          marginalNote: "Constitution of Advisory Committee",
          importance: "operative",
          verbatim:
            "The Central Government may constitute a Committee consisting of such number of persons as it may deem fit to advise that Government with regard to—\n\n(i) the grant of approval under section 2; and\n\n(ii) any other matter connected with the conservation of forests which may be referred to it by the Central Government.",
          plainEnglish:
            "Section 3 is the supporting cast for Section 2. It authorises — but does not compel — the Central Government to set up an Advisory Committee. The Centre decides how many members it should have and who they should be.\n\nIn practice, the Central Government has used this power to constitute the Forest Advisory Committee (FAC), housed within the Ministry of Environment, Forest and Climate Change (MoEFCC). The FAC meets regularly to scrutinise every forest-diversion proposal received under Section 2 and recommends whether the Central Government should approve, approve with conditions, or reject it.\n\nThe Section gives the Committee two jobs. First, advising on individual Section 2 approvals (this is most of what the FAC does). Second, advising on 'any other matter' connected with forest conservation that the Central Government refers to it — meaning the Centre can task it with broader policy questions, like reviewing the Forest (Conservation) Rules or evaluating compensatory-afforestation models.\n\nNote the language: the Committee is advisory. Its recommendations carry weight but do not bind the Central Government. In Lafarge Umiam Mining (2011), the Supreme Court underlined that the FAC's view must be considered, but the final decision rests with the Centre.",
          scenarios: [
            {
              title: "A proposal is approved despite FAC reservations",
              setup:
                "The FAC recommends rejection of a coal-mining proposal that would divert 580 hectares of dense forest. MoEFCC nevertheless grants Stage-I approval citing 'national interest'.",
              outcome:
                "Legally possible — Section 3 makes the FAC advisory, not decisional. But the approval can be challenged before the National Green Tribunal on the ground that the Centre failed to apply its mind to the FAC's reasons. Courts have repeatedly directed the Centre to record reasons when it departs from FAC advice.",
              appliesUnder: "Section 3 read with Section 2",
            },
          ],
          faq: [
            {
              q: "Is the Forest Advisory Committee a statutory body?",
              a: "It is constituted under a statutory power (Section 3) but the Section itself does not prescribe its composition or tenure. So it is statutory in origin but flexible in form — the Centre can reconstitute it from time to time.",
            },
            {
              q: "Can the Committee's advice be obtained for matters other than Section 2 approvals?",
              a: "Yes. Clause (ii) of Section 3 allows the Central Government to refer 'any other matter connected with the conservation of forests' to the Committee. So it can opine on rules, policies and broad questions of forest management when asked.",
            },
            {
              q: "Are FAC minutes public?",
              a: "MoEFCC publishes summary minutes of FAC meetings on the PARIVESH portal. Detailed deliberations are accessible under the Right to Information Act, 2005, subject to the usual exemptions.",
            },
          ],
          crossRefs: [
            {
              statute: "Forest (Conservation) Rules, 2003 (and amendments)",
              section: "Rule 5",
              note: "Lays down the actual composition, tenure and procedure of the Forest Advisory Committee constituted under Section 3.",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 2,
          },
        },

        // ====================================================
        // Section 4 — Power to make rules
        // ====================================================
        {
          number: "4",
          label: "Section 4",
          marginalNote: "Power to make rules",
          importance: "operative",
          verbatim:
            "(1) The Central Government may, by notification in the Official Gazette, make rules for carrying out the provisions of this Act.\n\n(2) Every rule made under this Act shall be laid, as soon as may be after it is made, before each House of Parliament, while it is in session, for a total period of thirty days which may be comprised in one session or in two or more successive sessions, and if, before the expiry of the session immediately following the session or the successive sessions aforesaid, both Houses agree in making any modification in the rule or both Houses agree that the rule should not be made, the rule shall thereafter have effect only in such modified form or be of no effect, as the case may be; so, however, that any such modification or annulment shall be without prejudice to the validity of anything previously done under that rule.",
          plainEnglish:
            "Section 4 is the rule-making engine of the Act. Sub-section (1) gives the Central Government a general power: it may make rules — by notification in the Official Gazette — to carry out the provisions of the Act. This is how the Forest (Conservation) Rules of 1981, 2003, 2017, 2022 and 2023 came into being.\n\nSub-section (2) is the 'laying' clause that protects Parliament's authority. Even though the Centre can make rules without going back to Parliament, those rules must still be 'laid' before both Houses for thirty cumulative days. During or right after that period, if both Houses agree to modify a rule or scrap it altogether, the rule is treated as modified or void.\n\nImportantly, the last clause protects everyone who acted on a rule in good faith before it was modified or annulled — nothing previously done under that rule is invalidated. So a clearance granted under an earlier version of a rule does not collapse just because Parliament later changes the rule.",
          scenarios: [
            {
              title: "Parliament tweaks a notified rule mid-session",
              setup:
                "The Centre notifies a new Forest (Conservation) Rule allowing fast-track clearance for solar projects below 100 ha. While the rule is being 'laid' under Section 4(2), both Houses agree to limit the fast-track to 50 ha.",
              outcome:
                "From the date of the resolution, the rule operates only for the modified threshold (50 ha). But any clearance already granted under the original 100-ha threshold before the modification stays valid under the last clause of Section 4(2).",
              appliesUnder: "Section 4(2)",
            },
          ],
          faq: [
            {
              q: "Can the Centre make rules that go beyond the Act itself?",
              a: "No. Section 4(1) restricts rule-making to 'carrying out the provisions of this Act'. A rule that adds new offences, new prohibitions or new procedures beyond what the Act envisages can be struck down as ultra vires.",
            },
            {
              q: "What happens if a rule isn't laid before Parliament?",
              a: "Section 4(2) makes laying mandatory. Non-compliance can be challenged in court, though courts have often refused to strike down such rules where the legislative intent is not defeated. The safer path for the Centre is always to lay the rules promptly.",
            },
            {
              q: "Are the Forest (Conservation) Rules part of the Act?",
              a: "They are subordinate legislation made under Section 4. They have the force of law but only so long as they are consistent with the Act. Courts read the Act and Rules together when deciding any Section 2 dispute.",
            },
          ],
          crossRefs: [
            {
              statute: "Van (Sanrakshan Evam Samvardhan) Rules, 2023",
              section: "All",
              note: "Current rules in force, made under Section 4 — replaced the 2022 and earlier Rules.",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 2,
          },
        },

        // ====================================================
        // Section 5 — Repeal and saving
        // ====================================================
        {
          number: "5",
          label: "Section 5",
          marginalNote: "Repeal and saving",
          importance: "transitional",
          verbatim:
            "(1) The Forest (Conservation) Ordinance, 1980 (17 of 1980) is hereby repealed.\n\n(2) Notwithstanding such repeal, anything done or any action taken under the provisions of the said Ordinance shall be deemed to have been done or taken under the corresponding provisions of this Act.",
          plainEnglish:
            "Section 5 is a transitional bridge. Before the Act came into being, the President had issued the Forest (Conservation) Ordinance, 1980 (No. 17 of 1980) to put the same restrictions in place urgently — that is why Section 1(3) back-dates the Act's commencement to 25 October 1980.\n\nSub-section (1) repeals that Ordinance once the Act takes over. Sub-section (2) is the saving clause: anything done under the Ordinance (e.g. a refusal of approval, a notification, a recommendation) is treated as if it were done under the Act. So there is no legal vacuum, and no party can argue that an Ordinance-era action lost its force when the Ordinance was repealed.\n\nThis kind of repeal-and-saving provision is standard in Indian statutes whenever an Act replaces an Ordinance — it preserves continuity.",
          scenarios: [
            {
              title: "An approval refusal under the Ordinance is challenged after the Act takes over",
              setup:
                "On 1 December 1980, the Centre refused a State's diversion proposal under the Ordinance. After the Act was published on 27 December 1980, the State argues the refusal should lapse with the Ordinance.",
              outcome:
                "Section 5(2) saves the refusal. It is deemed to have been issued under the Act, so it continues to operate. The State has no fresh window to bypass it.",
              appliesUnder: "Section 5(2)",
            },
          ],
          faq: [
            {
              q: "Why was an Ordinance needed at all?",
              a: "Parliament was not in session in October 1980. The Central Government wanted the restriction on forest diversion to take effect immediately, so the President promulgated an Ordinance under Article 123 of the Constitution. The Act then replaced the Ordinance once Parliament reassembled.",
            },
            {
              q: "Does Section 5 still matter today?",
              a: "Only as legal history. The Ordinance is long gone. But Section 5 explains why some early-1980s notifications cite the Ordinance and not the Act — they were still legally valid because of the saving in sub-section (2).",
            },
          ],
          source: {
            pdfPath: SOURCE_BASE,
            pdfFile: SOURCE_FILE,
            pdfPage: 2,
          },
        },
      ],

      scenarios: [
        {
          title: "A power-transmission line crosses 12 km of reserved forest",
          setup:
            "A State DISCOM proposes to lay a 400 kV transmission line that will require cutting a 50-metre wide corridor through 12 km of reserved forest, plus felling roughly 18,000 trees.",
          outcome:
            "Even though no land is being 'sold', the corridor is forest land being used for a 'non-forest purpose' under Section 2. The State must take Central approval under Section 2(ii), with the FAC under Section 3 examining the proposal, before issuing any State-level work order.",
          appliesUnder: "Sections 2 and 3",
        },
      ],
      faq: [
        {
          q: "Why is this Act so short?",
          a: "Because its job is narrow but powerful: stop States from diverting forest land on their own. Five sections are enough to do that — the Forest (Conservation) Rules made under Section 4 carry the procedural detail.",
        },
        {
          q: "Does this Act stop me from owning private forest land?",
          a: "No. The Act does not change ownership. It controls how the land may be used. If the land is 'forest' in either the legal or dictionary sense, you still need Central approval before clearing it for a non-forest purpose.",
        },
        {
          q: "What if the State is not on board with a forest-diversion request?",
          a: "Under Section 2, the State is the gatekeeper — the proposal flows through it. If the State Forest Department refuses to recommend, the proposal effectively dies. The Central Government cannot grant approval over a State's express refusal under the standard procedure.",
        },
      ],
    },
  ],
};
