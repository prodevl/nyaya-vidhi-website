/**
 * The Sexual Harassment of Women at Workplace
 * (Prevention, Prohibition and Redressal) Act, 2013 — Act No. 14 of 2013.
 *
 * Enacted to give legislative effect to the Vishaka guidelines (1997) and
 * India's CEDAW obligations. 30 sections across 8 chapters. The 2016
 * "Repealing and Amending" Act re-named the Local Complaints Committee
 * to "Local Committee" and the Internal Complaints Committee to "Internal
 * Committee" throughout.
 *
 * Source PDF: c:/Users/Debabrata Barman/Documents/The law & order/
 *   Labour and Employment Laws/Sexual Harassment at Workplace (POSH) Act, 2013.pdf
 */

import type { Statute } from "../_types";

const SOURCE_BASE =
  "/pdfs/Labour%20and%20Employment%20Laws/Sexual%20Harassment%20at%20Workplace%20(POSH)%20Act,%202013.pdf";
const SOURCE_FILE = "Sexual Harassment at Workplace (POSH) Act, 2013.pdf";

export const poshAct2013: Statute = {
  meta: {
    slug: "posh-act-2013",
    shortName: "POSH Act",
    fullName:
      "The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013",
    year: 2013,
    sanskrit: "महिलाओं का कार्यस्थल पर लैंगिक उत्पीड़न (निवारण, प्रतिषेध एवं प्रतितोष) अधिनियम",
    tagline: "A statutory shield for every woman at every workplace.",
    summary:
      "A 30-section statute that codified — and went beyond — the 1997 Vishaka guidelines. Defines 'sexual harassment' broadly (Section 2(n) and Section 3(2)), defines 'workplace' broadly (Section 2(o)), and covers every woman of any age, employed or not, contractor, intern, volunteer or domestic worker. Mandates an Internal Committee at every workplace with 10+ employees (Section 4) and a Local Committee at the District level (Section 6) for smaller workplaces and unorganised-sector complaints. Sets a strict 3-month complaint window (Section 9), a 90-day inquiry timeline (Section 11(4)), conciliation without monetary settlement (Section 10), interim relief during inquiry (Section 12), reporting and confidentiality (Sections 13-17) and an appeal route (Section 18). Imposes fines on non-compliant employers (Section 26) and operates in addition to BNS, 2023 criminal remedies (Section 28).",
    preamble:
      "An Act to provide protection against sexual harassment of women at workplace and for the prevention and redressal of complaints of sexual harassment and for matters connected therewith or incidental thereto.\n\nWHEREAS sexual harassment results in violation of the fundamental rights of a woman to equality under articles 14 and 15 of the Constitution of India and her right to life and to live with dignity under article 21 of the Constitution and right to practice any profession or to carry on any occupation, trade or business which includes a right to a safe environment free from sexual harassment;\n\nAND WHEREAS the protection against sexual harassment and the right to work with dignity are universally recognised human rights by international conventions and instruments such as Convention on the Elimination of all Forms of Discrimination against Women, which has been ratified on the 25th June, 1993 by the Government of India;\n\nAND WHEREAS it is expedient to make provisions for giving effect to the said Convention for protection of women against sexual harassment at workplace.\n\nBE it enacted by Parliament in the Sixty-fourth Year of the Republic of India as follows:—",
    categorySlug: "labour-and-employment-laws",
    enactedOn: "2013-04-22",
    commencement: "Came into force on 9 December 2013 (Notification S.O. 3606(E) dated 9 December 2013).",
    totalSections: 30,
    totalChapters: 8,
    sourcePdf: { pdfPath: SOURCE_BASE, pdfFile: SOURCE_FILE, pdfPage: 1 },
    coverage: "complete",
    tier: 1,
    amendments: [
      {
        year: 2016,
        shortName: "Repealing and Amending Act, 2016 (Act 23 of 2016)",
        note:
          "Renamed 'Local Complaints Committee' to 'Local Committee' and 'Internal Complaints Committee' to 'Internal Committee' throughout the Act, w.e.f. 6 May 2016. No substantive change.",
      },
      {
        year: 2023,
        shortName: "Bharatiya Nyaya Sanhita, 2023 — consequential",
        note:
          "Section 11(1) refers to 'Section 509 IPC'. The corresponding provision is now Section 79 of the BNS, 2023 (word, gesture or act intended to insult the modesty of a woman). Section 354A IPC (sexual harassment) has become Section 75 BNS, 2023. The POSH Act remains the principal civil-redressal regime.",
      },
    ],
  },

  chapters: [
    {
      slug: "chapter-1-preliminary",
      number: "I",
      title: "Preliminary",
      range: ["1", "3"],
      intro:
        "Chapter I is the foundation. Section 1 sets the title and territorial reach. Section 2 carries the long, deliberately broad definitions — every word ('aggrieved woman', 'employee', 'employer', 'workplace', 'sexual harassment', 'unorganised sector') was crafted to extend the Act far beyond the formal sector that the Vishaka guidelines had primarily addressed. Section 3 is the substantive prohibition: no woman shall be subjected to sexual harassment at any workplace, and lists five quid-pro-quo / hostile-environment circumstances that may amount to harassment.",
      sections: [
        {
          number: "1",
          label: "Section 1",
          marginalNote: "Short title, extent and commencement",
          importance: "operative",
          verbatim:
            "(1) This Act may be called the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013.\n\n(2) It extends to the whole of India.\n\n(3) It shall come into force on such date as the Central Government may, by notification in the Official Gazette, appoint.",
          plainEnglish:
            "Section 1 is short and standard. Sub-section (1) names the Act — note the order of the three operational verbs (Prevention → Prohibition → Redressal), which is a deliberate signal of scheme. Sub-section (2) extends the Act to the whole of India without exception (the original text had no J&K carve-out, so the 2019 Reorganisation question never arose). Sub-section (3) left the date open; the Centre notified 9 December 2013 as the commencement date by S.O. 3606(E).",
          scenarios: [
            {
              title: "An incident in November 2013",
              setup:
                "An employee alleges sexual harassment that occurred in November 2013 — before the Act commenced.",
              outcome:
                "The Act came into force on 9 December 2013. Conduct before that date is not within the Act. The remedies for pre-commencement conduct are: the Vishaka guidelines (which were judicial law before the Act), Section 354A IPC / Section 354 IPC, and any internal disciplinary regime. Post-9 December 2013, the Act applies.",
              appliesUnder: "Section 1(3)",
            },
          ],
          faq: [
            {
              q: "Does the Act apply in J&K and Ladakh?",
              a: "Yes. Section 1(2) extends the Act to the whole of India without exception. After the J&K Reorganisation Act, 2019, this includes the UTs of J&K and Ladakh.",
            },
            {
              q: "Does the Act apply to incidents abroad?",
              a: "Generally no — Indian statutes have territorial reach. But where the workplace is established / owned / controlled / financed by an Indian entity and the incident occurs at a place 'visited by the employee arising out of or during the course of employment' (Section 2(o)(v)), Indian Internal Committees have asserted jurisdiction even over overseas business-trip incidents.",
            },
          ],
          source: { pdfPath: SOURCE_BASE, pdfFile: SOURCE_FILE, pdfPage: 3 },
        },

        {
          number: "2",
          label: "Section 2",
          marginalNote: "Definitions",
          importance: "core",
          verbatim:
            "In this Act, unless the context otherwise requires,—\n\n(a) \"aggrieved woman\" means—\n(i) in relation to a workplace, a woman, of any age whether employed or not, who alleges to have been subjected to any act of sexual harassment by the respondent;\n(ii) in relation to dwelling place or house, a woman of any age who is employed in such a dwelling place or house;\n\n(b) \"appropriate Government\" means—\n(i) in relation to a workplace which is established, owned, controlled or wholly or substantially financed by funds provided directly or indirectly—\n(A) by the Central Government or the Union territory administration, the Central Government;\n(B) by the State Government, the State Government;\n(ii) in relation to any workplace not covered under sub-clause (i) and falling within its territory, the State Government;\n\n(c) \"Chairperson\" means the Chairperson of the Local Committee nominated under sub-section (1) of section 7;\n\n(d) \"District Officer\" means an officer notified under section 5;\n\n(e) \"domestic worker\" means a woman who is employed to do the household work in any household for remuneration whether in cash or kind, either directly or through any agency on a temporary, permanent, part time or full time basis, but does not include any member of the family of the employer;\n\n(f) \"employee\" means a person employed at a workplace for any work on regular, temporary, ad hoc or daily wage basis, either directly or through an agent, including a contractor, with or without the knowledge of the principal employer, whether for remuneration or not, or working on a voluntary basis or otherwise, whether the terms of employment are express or implied and includes a co-worker, a contract worker, probationer, trainee, apprentice or called by any other such name;\n\n(g) \"employer\" means—\n(i) in relation to any department, organisation, undertaking, establishment, enterprise, institution, office, branch or unit of the appropriate Government or a local authority, the head of that department, organisation, undertaking, establishment, enterprise, institution, office, branch or unit or such other officer as the appropriate Government or the local authority, as the case may be, may by an order specify in this behalf;\n(ii) in any workplace not covered under sub-clause (i), any person responsible for the management, supervision and control of the workplace.\nExplanation.—For the purposes of this sub-clause \"management\" includes the person or board or committee responsible for formulation and administration of polices for such organisation;\n(iii) in relation to workplace covered under sub-clauses (i) and (ii), the person discharging contractual obligations with respect to his or her employees;\n(iv) in relation to a dwelling place or house, a person or a household who employs or benefits from the employment of domestic worker, irrespective of the number, time period or type of such worker employed, or the nature of the employment or activities performed by the domestic worker;\n\n(h) \"Internal Committee\" means an Internal Complaints Committee constituted under section 4;\n\n(i) \"Local Committee\" means the Local Complaints Committee constituted under section 6;\n\n(j) \"Member\" means a Member of the Internal Committee or the Local Committee, as the case may be;\n\n(k) \"prescribed\" means prescribed by rules made under this Act;\n\n(l) \"Presiding Officer\" means the Presiding Officer of the Internal Complaints Committee nominated under sub-section (2) of section 4;\n\n(m) \"respondent\" means a person against whom the aggrieved woman has made a complaint under section 9;\n\n(n) \"sexual harassment\" includes any one or more of the following unwelcome acts or behavior (whether directly or by implication) namely:—\n(i) physical contact and advances; or\n(ii) a demand or request for sexual favours; or\n(iii) making sexually coloured remarks; or\n(iv) showing pornography; or\n(v) any other unwelcome physical, verbal or non-verbal conduct of sexual nature;\n\n(o) \"workplace\" includes—\n(i) any department, organisation, undertaking, establishment, enterprise, institution, office, branch or unit which is established, owned, controlled or wholly or substantially financed by funds provided directly or indirectly by the appropriate Government or the local authority or a Government company or a corporation or a co-operative society;\n(ii) any private sector organisation or a private venture, undertaking, enterprise, institution, establishment, society, trust, non-governmental organisation, unit or service provider carrying on commercial, professional, vocational, educational, entertainmental, industrial, health services or financial activities including production, supply, sale, distribution or service;\n(iii) hospitals or nursing homes;\n(iv) any sports institute, stadium, sports complex or competition or games venue, whether residential or not used for training, sports or other activities relating thereto;\n(v) any place visited by the employee arising out of or during the course of employment including transportation by the employer for undertaking such journey;\n(vi) a dwelling place or a house;\n\n(p) \"unorganised sector\" in relation to a workplace means an enterprise owned by individuals or self-employed workers and engaged in the production or sale of goods or providing service of any kind whatsoever, and where the enterprise employs workers, the number of such workers is less than ten.",
          plainEnglish:
            "Section 2 is unusually long because Parliament wanted the Act to reach as far as possible. Three definitions do most of the work.\n\n'Aggrieved woman' (clause (a)) is deliberately wide — any age, whether employed at the workplace or not. So a visitor, a vendor's representative, a job interviewee or a customer can file. For dwelling places, the protection extends to a woman 'employed' at the dwelling — domestic workers covered.\n\n'Employee' (clause (f)) covers regular, temporary, ad-hoc, daily-wage, contracted, co-worker, probationer, trainee, apprentice, intern, volunteer — anyone working at the workplace, with or without remuneration. The 'with or without the knowledge of the principal employer' phrase reaches outsourced workers whose vendor has dispatched them to the employer's premises.\n\n'Sexual harassment' (clause (n)) covers any one or more of five unwelcome acts: physical contact / advances, demand or request for sexual favours, sexually coloured remarks, showing pornography, or 'any other unwelcome physical, verbal or non-verbal conduct of sexual nature' — a residual catch-all. The definition is illustrative, not exhaustive (the word 'includes').\n\n'Workplace' (clause (o)) extends well beyond the office floor — it covers government and private organisations, NGOs, hospitals, sports institutes, any place visited 'arising out of or during the course of employment' including employer-provided transport, and dwellings. The 'arising out of or during the course of employment' phrase mirrors employees-compensation / industrial-disputes terminology and lets the Act reach off-site events, business trips, client meetings and conferences.\n\n'Employer' (clause (g)) is also wide — for government workplaces, it is the head of the unit; for private workplaces, it is the person responsible for management, supervision and control; for contracted workforce, it is the person discharging the contractual obligations; for domestic workers, it is the household head. So the duties under Section 19 attach across every employment configuration the Act recognises.\n\n'Domestic worker' (clause (e)) and 'unorganised sector' (clause (p)) together direct domestic-worker complaints and small-enterprise (under 10 workers) complaints to the Local Committee under Section 6.",
          defines: [
            { term: "Aggrieved woman", definition: "Any woman of any age, whether employed or not, alleging sexual harassment by the respondent at a workplace; for dwelling places, a woman employed there.", sourceSection: "2(a)" },
            { term: "Appropriate Government", definition: "Centre or State, depending on whether the workplace is established / owned / controlled / financed by Central or State funds; otherwise the State within whose territory the workplace falls.", sourceSection: "2(b)" },
            { term: "Domestic worker", definition: "A woman employed for household work for remuneration in cash or kind, directly or through an agency, on any basis; excludes family members of the employer.", sourceSection: "2(e)" },
            { term: "Employee", definition: "Any person — regular, temporary, ad hoc, daily wage, contractor, co-worker, probationer, trainee, apprentice, volunteer, intern — at a workplace, with or without remuneration.", sourceSection: "2(f)" },
            { term: "Employer", definition: "(i) Head of the government unit; (ii) person responsible for management, supervision and control of a private workplace; (iii) contracting party for outsourced workers; (iv) household head for domestic workers.", sourceSection: "2(g)" },
            { term: "Sexual harassment", definition: "Any one or more unwelcome acts (direct or implied): physical contact / advances; demand or request for sexual favours; sexually coloured remarks; showing pornography; any other unwelcome physical, verbal or non-verbal conduct of sexual nature.", sourceSection: "2(n)" },
            { term: "Workplace", definition: "Government and private offices, NGOs, hospitals, sports venues; any place visited by the employee arising out of or during the course of employment, including employer-provided transport; dwellings (for domestic workers).", sourceSection: "2(o)" },
            { term: "Unorganised sector", definition: "Enterprise owned by individuals / self-employed workers, engaged in production, sale or service, employing fewer than ten workers.", sourceSection: "2(p)" },
          ],
          visuals: [
            {
              kind: "comparison-table",
              title: "What 'workplace' covers under Section 2(o)",
              caption: "The definition extends well beyond the office floor — six categories cover virtually every work setting in India.",
              columns: ["Category", "Examples"],
              rows: [
                { left: "(i) Government / public-sector", right: "Ministries, PSUs, Government companies, co-operative societies, local authorities" },
                { left: "(ii) Private sector", right: "Companies, partnerships, NGOs, trusts, service providers, training institutes" },
                { left: "(iii) Hospitals / nursing homes", right: "Public and private healthcare facilities" },
                { left: "(iv) Sports", right: "Sports institutes, stadia, sports complexes, residential coaching centres" },
                { left: "(v) Off-site work", right: "Client visits, business trips, conferences, employer-provided transport" },
                { left: "(vi) Dwellings", right: "Households employing domestic workers" },
              ],
            },
            {
              kind: "callout",
              tone: "info",
              title: "The five-act definition of harassment",
              body:
                "Section 2(n) lists physical contact, demand for sexual favours, sexually coloured remarks, showing pornography, and the catch-all of any other unwelcome physical / verbal / non-verbal conduct of sexual nature. The word 'includes' makes the list illustrative — Internal Committees regularly find unlisted conduct to amount to sexual harassment.",
            },
          ],
          scenarios: [
            {
              title: "Job interviewee harassed by interviewer",
              setup:
                "A woman attends a job interview at a private company. The interviewer makes a sexually-coloured remark about her appearance during the interview.",
              outcome:
                "She is an 'aggrieved woman' under Section 2(a)(i) — 'a woman of any age whether employed or not'. The interview room is a 'workplace' under Section 2(o)(ii). The conduct is sexual harassment under Section 2(n)(iii). She can complain to the company's Internal Committee even though she was never on its payroll.",
              appliesUnder: "Section 2(a)(i), 2(n)(iii), 2(o)(ii)",
            },
            {
              title: "Domestic worker harassed by household head",
              setup:
                "A live-in domestic worker is harassed by the male head of the household.",
              outcome:
                "She is an 'aggrieved woman' under Section 2(a)(ii). The dwelling is a 'workplace' under Section 2(o)(vi). The household head is the 'employer' under Section 2(g)(iv). Since this is a private dwelling without an Internal Committee, she complains to the Local Committee under Section 6 — and the LC, on a prima facie case, forwards the complaint to the police under Section 11(1) for registration under Section 79 BNS, 2023 (formerly Section 509 IPC).",
              appliesUnder: "Section 2(a)(ii), 2(g)(iv), 2(o)(vi)",
            },
            {
              title: "Outsourced support staff at a private bank",
              setup:
                "A woman employed by a security agency is deployed at a private bank's branch and is harassed by a bank manager.",
              outcome:
                "She is an 'employee' under Section 2(f) — the definition expressly includes contract workers and 'with or without the knowledge of the principal employer'. The bank is the workplace; the manager is the respondent. She files with the bank's Internal Committee, which has jurisdiction even though she is not on the bank's payroll.",
              appliesUnder: "Section 2(f), 2(o)(ii)",
            },
          ],
          faq: [
            {
              q: "Does 'employee' include unpaid interns and volunteers?",
              a: "Yes. Section 2(f) expressly covers persons working 'on a voluntary basis or otherwise, whether the terms of employment are express or implied' and includes trainees, apprentices and probationers. Unpaid interns and volunteers are within the Act.",
            },
            {
              q: "Is a customer or visitor an 'aggrieved woman'?",
              a: "Yes — under Section 2(a)(i) she is a woman 'of any age whether employed or not' alleging harassment by the respondent. So a customer who is harassed by a salesperson, or a visitor harassed by a staff member, can file with the establishment's Internal Committee.",
            },
            {
              q: "Does 'workplace' cover work-from-home setups?",
              a: "Section 2(o) does not expressly mention WFH. But Section 2(o)(v) — 'any place visited by the employee arising out of or during the course of employment' — and the employer-supervised character of the WFH setting have led most Internal Committees to treat WFH harassment, especially over employer-mandated communication channels, as within the Act. Industry practice and ICs increasingly accept WFH as a workplace extension.",
            },
            {
              q: "Who is the 'appropriate Government' for a multinational with India offices?",
              a: "Under Section 2(b)(ii), the State within whose territory the workplace falls is the appropriate Government — unless the workplace is established / owned / controlled or substantially financed by the Centre or a UT (then the Centre) or the State (then the State). For a private MNC, the State Government in which the office is located is the appropriate Government.",
            },
          ],
          source: { pdfPath: SOURCE_BASE, pdfFile: SOURCE_FILE, pdfPage: 3, pdfPageEnd: 5 },
        },

        {
          number: "3",
          label: "Section 3",
          marginalNote: "Prevention of sexual harassment",
          importance: "core",
          verbatim:
            "(1) No woman shall be subjected to sexual harassment at any workplace.\n\n(2) The following circumstances, among other circumstances, if it occurs, or is present in relation to or connected with any act or behaviour of sexual harassment may amount to sexual harassment:—\n\n(i) implied or explicit promise of preferential treatment in her employment; or\n\n(ii) implied or explicit threat of detrimental treatment in her employment; or\n\n(iii) implied or explicit threat about her present or future employment status; or\n\n(iv) interference with her work or creating an intimidating or offensive or hostile work environment for her; or\n\n(v) humiliating treatment likely to affect her health or safety.",
          plainEnglish:
            "Section 3 is the substantive prohibition. Sub-section (1) is the rule: no woman shall be subjected to sexual harassment at any workplace. This is not merely directory; it founds the cause of action under Section 9 and the duty under Section 19.\n\nSub-section (2) lists five non-exhaustive 'circumstances' that, when present, may turn unwelcome conduct into sexual harassment under Section 2(n). The first three are classic quid-pro-quo harassment (preferential treatment, detrimental treatment, threat about future employment). The last two are hostile-environment harassment (interference with work / intimidating-offensive-hostile environment, humiliating treatment affecting health or safety).\n\nThe word 'circumstances among other circumstances' makes the list non-exhaustive. So an Internal Committee can find harassment in scenarios that don't fit any of the five categories — provided the basic Section 2(n) act is established.",
          visuals: [
            {
              kind: "comparison-table",
              title: "Quid-pro-quo vs. hostile environment under Section 3(2)",
              caption: "Both flavours are caught — Section 3(2)(i)-(iii) for quid-pro-quo, (iv)-(v) for hostile environment.",
              columns: ["Type", "Section 3(2) clauses"],
              rows: [
                { left: "Quid-pro-quo: promise of preferential treatment", right: "(i)" },
                { left: "Quid-pro-quo: threat of detrimental treatment", right: "(ii)" },
                { left: "Quid-pro-quo: threat about employment status", right: "(iii)" },
                { left: "Hostile environment: interference / hostility", right: "(iv)" },
                { left: "Hostile environment: humiliation, health / safety", right: "(v)" },
              ],
            },
          ],
          cases: [
            {
              name: "Vishaka v. State of Rajasthan",
              citation: "(1997) 6 SCC 241",
              court: "Supreme Court of India",
              year: 1997,
              ratio:
                "Pre-statutory foundation. The Court laid down binding guidelines on sexual harassment at workplace, drawing on CEDAW. Sections 2(n) and 3 of the 2013 Act substantially codify and expand those guidelines.",
            },
            {
              name: "Apparel Export Promotion Council v. A.K. Chopra",
              citation: "(1999) 1 SCC 759",
              court: "Supreme Court of India",
              year: 1999,
              ratio:
                "Even an attempt at physical contact, however brief, can amount to sexual harassment. The conduct need not be successful; the unwelcomeness and the intent matter.",
            },
            {
              name: "Medha Kotwal Lele v. Union of India",
              citation: "(2013) 1 SCC 297",
              court: "Supreme Court of India",
              year: 2013,
              ratio:
                "The pre-Act decision that prompted Parliament to legislate within months — clarified that Vishaka guidelines bind every workplace, public and private, and that absence of mechanism is no defence.",
            },
          ],
          scenarios: [
            {
              title: "Manager promises a promotion in exchange for a 'private dinner'",
              setup:
                "A manager tells a junior employee that her annual promotion depends on attending a 'private dinner' at his apartment.",
              outcome:
                "Section 3(2)(i) — implied promise of preferential treatment in employment. Combined with Section 2(n)(ii) (demand for sexual favours), this is a quid-pro-quo case under Section 3. The Internal Committee proceeds to inquiry under Section 11.",
              appliesUnder: "Section 3(2)(i) read with Section 2(n)(ii)",
            },
            {
              title: "Sexually-coloured remarks in a team WhatsApp group",
              setup:
                "A senior team member regularly posts sexually-coloured remarks in the team's WhatsApp group, making the woman team member uncomfortable.",
              outcome:
                "Section 2(n)(iii) — sexually coloured remarks. Combined with Section 3(2)(iv) — interference with work and creating a hostile work environment. The Internal Committee can take cognizance even though the harassment occurred in a virtual / digital space, because the WhatsApp group is a 'workplace' extension under Section 2(o)(v).",
              appliesUnder: "Section 3(2)(iv) read with Section 2(n)(iii) and 2(o)(v)",
            },
          ],
          faq: [
            {
              q: "Does Section 3 apply to female-on-female harassment?",
              a: "Section 3(1) speaks of 'sexual harassment' at workplace. The respondent's gender is not specified — the Act is gender-neutral as to the respondent. So a female-on-female complaint is within the Act. The aggrieved person, however, must be a woman — the Act protects women only, not men. Many private workplaces voluntarily extend internal mechanisms to all genders.",
            },
            {
              q: "Is the Section 3(2) list exhaustive?",
              a: "No. The phrase 'among other circumstances' makes it illustrative. An IC can find harassment in scenarios that don't fit any of the five clauses — provided the underlying Section 2(n) act is unwelcome.",
            },
            {
              q: "Does the Act require physical contact?",
              a: "No. Section 2(n) lists physical contact as one limb, but other limbs include demands, remarks, showing pornography, and 'non-verbal conduct of sexual nature'. Verbal / digital harassment is squarely within the Act.",
            },
          ],
          source: { pdfPath: SOURCE_BASE, pdfFile: SOURCE_FILE, pdfPage: 5 },
        },
      ],
    },

    {
      slug: "chapter-2-internal-committee",
      number: "II",
      title: "Constitution of Internal Complaints Committee",
      range: ["4", "4"],
      intro:
        "Chapter II is one section but the most consequential operational obligation in the Act. Section 4 mandates an Internal Committee at every workplace with ten or more employees, lays down its composition (including the gender-balance and external-member requirements) and tenure, and lists the four grounds for removal of members. Failure to constitute an Internal Committee under Section 4 attracts a fine of up to ₹50,000 under Section 26 — and on repeat default, cancellation of business licence and registration.",
      sections: [
        {
          number: "4",
          label: "Section 4",
          marginalNote: "Constitution of Internal Complaints Committee",
          importance: "core",
          verbatim:
            "(1) Every employer of a workplace shall, by an order in writing, constitute a Committee to be known as the \"Internal Complaints Committee\":\n\nProvided that where the offices or administrative units of the workplace are located at different places or divisional or sub-divisional level, the Internal Committee shall be constituted at all administrative units or offices.\n\n(2) The Internal Committee shall consist of the following members to be nominated by the employer, namely:—\n\n(a) a Presiding Officer who shall be a woman employed at a senior level at workplace from amongst the employees:\n\nProvided that in case a senior level woman employee is not available, the Presiding Officer shall be nominated from other offices or administrative units of the workplace referred to in sub-section (1):\n\nProvided further that in case the other offices or administrative units of the workplace do not have a senior level woman employee, the Presiding Officer shall be nominated from any other workplace of the same employer or other department or organisation;\n\n(b) not less than two Members from amongst employees preferably committed to the cause of women or who have had experience in social work or have legal knowledge;\n\n(c) one member from amongst non-governmental organisations or associations committed to the cause of women or a person familiar with the issues relating to sexual harassment:\n\nProvided that at least one-half of the total Members so nominated shall be women.\n\n(3) The Presiding Officer and every Member of the Internal Committee shall hold office for such period, not exceeding three years, from the date of their nomination as may be specified by the employer.\n\n(4) The Member appointed from amongst the non-governmental organisations or associations shall be paid such fees or allowances for holding the proceedings of the Internal Committee, by the employer, as may be prescribed.\n\n(5) Where the Presiding Officer or any Member of the Internal Committee,—\n\n(a) contravenes the provisions of section 16; or\n\n(b) has been convicted for an offence or an inquiry into an offence under any law for the time being in force is pending against him; or\n\n(c) he has been found guilty in any disciplinary proceedings or a disciplinary proceeding is pending against him; or\n\n(d) has so abused his position as to render his continuance in office prejudicial to the public interest,\n\nsuch Presiding Officer or Member, as the case may be, shall be removed from the Committee and the vacancy so created or any casual vacancy shall be filled by fresh nomination in accordance with the provisions of this section.",
          plainEnglish:
            "Section 4 is the bedrock duty of every employer. Sub-section (1) is the obligation: every employer 'shall' — not 'may' — by a written order, constitute an Internal Committee. The Proviso to sub-section (1) requires a separate Internal Committee at every administrative unit or branch — a multi-city company cannot run a single 'central' IC for all locations.\n\nSub-section (2) sets the composition. The Committee must have at least four members: (a) a Presiding Officer who is a senior-level woman employee at the workplace; (b) at least two members from among the employees, preferably committed to women's causes or with social-work / legal background; and (c) one external member from an NGO / association committed to women's causes or familiar with sexual-harassment issues. At least half the members must be women.\n\nThe Provisos to clause (a) handle the practical reality that smaller workplaces may not have a senior woman employee — the employer can then borrow from another administrative unit or another workplace of the same employer (or a different organisation).\n\nSub-section (3) caps the tenure at three years from the date of nomination, with the employer setting the actual term within that ceiling.\n\nSub-section (4) ensures the external member is paid prescribed fees — these are paid by the employer.\n\nSub-section (5) lays down four removal grounds: (a) violation of the Section 16 confidentiality rule; (b) conviction or pending criminal inquiry; (c) being found guilty in or facing disciplinary proceedings; or (d) abusing position prejudicial to public interest. On removal, the vacancy is filled by fresh nomination.",
          procedure: [
            { step: 1, title: "Identify whether 10+ employees", body: "Employers with 10 or more employees (across regular, contract, trainees, interns) must constitute an Internal Committee. Workplaces below 10 employees fall under the Local Committee at District level under Section 6.", actor: "Employer" },
            { step: 2, title: "Issue written order", body: "Section 4(1) requires an order in writing — typically signed by the head of the unit / CEO. The order must name each member.", actor: "Employer", ref: "Section 4(1)" },
            { step: 3, title: "Compose the Committee", body: "Senior-level woman as Presiding Officer + two employee-members + one external NGO member. At least half women.", actor: "Employer", ref: "Section 4(2)" },
            { step: 4, title: "Set tenure (max 3 years)", body: "Tenure cannot exceed 3 years. The employer can renew by a fresh nomination order.", actor: "Employer", ref: "Section 4(3)" },
            { step: 5, title: "Replicate at every branch", body: "Multi-city / multi-unit organisations must constitute an IC at each administrative unit, not a centralised IC.", actor: "Employer", ref: "Section 4(1) Proviso" },
            { step: 6, title: "Display constitution order publicly", body: "Section 19(b) requires the IC composition to be displayed at conspicuous places at the workplace, alongside the penal consequences of harassment.", actor: "Employer", ref: "Section 19(b)" },
          ],
          visuals: [
            {
              kind: "process-flow",
              title: "Section 4 — Internal Committee composition",
              caption: "At least four members; at least half women.",
              nodes: [
                { id: "n1", label: "Presiding Officer", sub: "Senior-level woman employee" },
                { id: "n2", label: "Member 1", sub: "Employee — women's cause / social work / legal" },
                { id: "n3", label: "Member 2", sub: "Employee — women's cause / social work / legal" },
                { id: "n4", label: "External Member", sub: "NGO / sexual-harassment expert" },
                { id: "n5", label: "Tenure", sub: "Max 3 years (Section 4(3))" },
                { id: "n6", label: "Removal grounds", sub: "§16 breach / criminal / disciplinary / abuse (§4(5))" },
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
              title: "Multi-branch employers — separate IC at each unit",
              body:
                "The Proviso to Section 4(1) is unforgiving — if the employer has offices at different places, divisional or sub-divisional levels, an Internal Committee must be constituted at each. A single 'central' IC covering all units is non-compliant and exposes the employer to Section 26 penalties.",
            },
          ],
          penalties: [
            { offence: "Failure to constitute Internal Committee under Section 4", punishment: "Fine up to ₹50,000", ref: "Section 26(1)(a)", severity: "moderate" },
            { offence: "Repeat failure", punishment: "Twice the punishment + cancellation of licence / registration", ref: "Section 26(2)", severity: "serious" },
          ],
          scenarios: [
            {
              title: "Startup with 12 employees doesn't constitute an IC",
              setup:
                "A 12-person tech startup has not constituted an Internal Committee, believing it is too small to need one.",
              outcome:
                "Section 4(1) applies — every employer of a workplace with 10+ employees must constitute an IC. Failure attracts a fine up to ₹50,000 under Section 26(1)(a). On repeat default, the licence / registration can be cancelled under Section 26(2).",
              appliesUnder: "Section 4(1) read with Section 26",
            },
            {
              title: "Manufacturing company with 7 plants — only one 'central IC'",
              setup:
                "A pan-India manufacturer with 7 plants in different States runs a single 'central' Internal Committee at the Head Office.",
              outcome:
                "Non-compliant. The Proviso to Section 4(1) requires an IC at every administrative unit. The company must constitute 7 separate Internal Committees — one per plant. The Head Office IC has no jurisdiction over a complaint arising at any of the plants.",
              appliesUnder: "Section 4(1) Proviso",
            },
            {
              title: "No senior woman employee available",
              setup:
                "A small branch office has no senior-level woman employee. The employer wants to nominate a senior male employee as Presiding Officer.",
              outcome:
                "Not permitted. Section 4(2)(a) requires the Presiding Officer to be a woman. If no senior woman is available at that branch, the employer must look at other administrative units (first proviso) or other workplaces / departments / organisations (second proviso) — but not a male Presiding Officer.",
              appliesUnder: "Section 4(2)(a) Provisos",
            },
          ],
          faq: [
            {
              q: "What is the threshold to constitute an Internal Committee?",
              a: "Section 4(1) speaks of 'every employer of a workplace'. Read with Section 6(1) — which deals with workplaces 'having less than ten workers' — the operational threshold is 10 or more employees. Below that, complaints go to the Local Committee under Section 6.",
            },
            {
              q: "Can the same external NGO member sit on multiple ICs?",
              a: "Yes. There is no statutory bar on a single NGO representative being the external member of multiple Internal Committees, provided she is paid the prescribed fee for each Committee under Section 4(4) and there is no conflict of interest.",
            },
            {
              q: "What happens if a member is removed mid-term?",
              a: "Section 4(5) says the vacancy 'shall be filled by fresh nomination in accordance with the provisions of this section'. The employer issues a fresh order. The fresh nominee's tenure starts afresh from the date of nomination, capped at 3 years.",
            },
            {
              q: "Are full-time employees of the workplace strictly required as Members under (b)?",
              a: "Yes. Section 4(2)(b) speaks of 'Members from amongst employees'. The Members must be employees of the same workplace. Only the external Member under clause (c) can be from outside.",
            },
          ],
          crossRefs: [
            { statute: "POSH Act, 2013", section: "Section 6", note: "Local Committee — covers workplaces with fewer than 10 employees and complaints against the employer himself." },
            { statute: "POSH Act, 2013", section: "Section 19(b)", note: "Employer must display the constitution order of the IC at a conspicuous place." },
            { statute: "POSH Act, 2013", section: "Section 26", note: "Penalty up to ₹50,000 for failure to constitute the IC; cancellation of licence on repeat default." },
            { statute: "Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Rules, 2013", section: "Rule 4", note: "Prescribes the fees / allowances payable to the external NGO member under Section 4(4) — typically ₹200/day plus travel." },
          ],
          source: { pdfPath: SOURCE_BASE, pdfFile: SOURCE_FILE, pdfPage: 5, pdfPageEnd: 6 },
        },
      ],
    },
  ],
};
