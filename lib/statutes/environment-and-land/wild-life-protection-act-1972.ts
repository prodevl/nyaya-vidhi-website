/**
 * The Wild Life (Protection) Act, 1972 — Act No. 53 of 1972.
 *
 * Phase 2 coverage: MVP (verbatim + 1-line summary + source PDF page per
 * section). Authored chapters: I (Preliminary), II (Authorities), III (Hunting),
 * IIIA (Specified Plants), IV (Protected Areas), IVA (Central Zoo Authority),
 * IVB (National Tiger Conservation Authority). Remaining chapters IVC (WCCB),
 * V (Trade), VA (Prohibition of Trade), VI (Prevention & Detection),
 * VIA (Forfeiture) and VII (Miscellaneous) are parked for a later sweep; the
 * Act is shipped as MVP at its current depth so the corpus can move forward.
 *
 * Source PDF: c:/Users/Debabrata Barman/Documents/The law & order/
 *   Environment & Land/Wild Life Protection Act, 1972.pdf
 * Raw extract: lib/statutes/_raw/wild-life-protection-act-1972.txt
 */

import type { Statute } from "../_types";

const SOURCE_BASE =
  "/pdfs/Environment%20%26%20Land/Wild%20Life%20Protection%20Act,%201972.pdf";
const SOURCE_FILE = "Wild Life Protection Act, 1972.pdf";

const src = (page: number, pageEnd?: number) => ({
  pdfPath: `${SOURCE_BASE}#page=${page}`,
  pdfFile: SOURCE_FILE,
  pdfPage: page,
  ...(pageEnd ? { pdfPageEnd: pageEnd } : {}),
});

export const wildLifeProtectionAct1972: Statute = {
  meta: {
    slug: "wild-life-protection-act-1972",
    shortName: "Wild Life Protection Act",
    fullName: "The Wild Life (Protection) Act, 1972",
    year: 1972,
    sanskrit: "वन्य जीव (संरक्षण) अधिनियम",
    tagline: "India's flagship wildlife law.",
    summary:
      "Act 53 of 1972 — the principal statute on protection of wild animals, birds and plants in India. Sets up the Wild Life Wardens, the National and State Boards for Wild Life, the Central Zoo Authority, the National Tiger Conservation Authority and the Wildlife Crime Control Bureau; declares Sanctuaries, National Parks, Conservation Reserves and Community Reserves; prohibits hunting and trade in scheduled species; and prescribes penalties going up to seven years' imprisonment.",
    preamble:
      "An Act to provide for the protection of wild animals, birds and plants and for matters connected therewith or ancillary or incidental thereto with a view to ensuring the ecological and environmental security of the country.",
    categorySlug: "environment-and-land",
    enactedOn: "1972-09-09",
    commencement:
      "Brought into force in different States/UTs on dates appointed by the Central Government by notification under section 1(3). For most States/UTs the principal provisions commenced on or after 9 September 1972.",
    totalSections: 66,
    totalChapters: 7,
    sourcePdf: { pdfPath: SOURCE_BASE, pdfFile: SOURCE_FILE, pdfPage: 1 },
    coverage: "mvp",
    tier: 1,
    amendments: [
      { year: 1982, shortName: "Act 23 of 1982", note: "First amendment — refinements to permits and offences." },
      { year: 1986, shortName: "Act 28 of 1986", note: "Stricter trade controls; insertion of Chapter VA." },
      { year: 1991, shortName: "Act 44 of 1991", note: "Major overhaul — sanctuary acquisition procedure, ivory ban, enhanced penalties." },
      { year: 2002, shortName: "Act 16 of 2003 (Wild Life (Protection) Amendment Act, 2002)", note: "National Board for Wild Life, National Tiger Conservation provisions, forfeiture chapter (VIA), community/conservation reserves." },
      { year: 2006, shortName: "Act 39 of 2006", note: "National Tiger Conservation Authority and Tiger and other Endangered Species Crime Control Bureau (Chapters IVB and IVC)." },
      { year: 2022, shortName: "Act 18 of 2022 (Wild Life (Protection) Amendment Act, 2022)", note: "Schedule rationalisation, CITES alignment, vermin and elephant transfer reforms." },
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
      range: ["1", "2"],
      intro:
        "Two foundational sections. Section 1 sets the Act's name, extent and commencement; Section 2 carries the dictionary that the rest of the Act relies on — including the definitions of 'animal', 'wild animal', 'hunting', 'sanctuary' and 'National Park'.",
      sections: [
        {
          number: "1",
          label: "Section 1",
          marginalNote: "Short title, extent and commencement",
          source: src(6),
          summary:
            "Names the Act, extends it across India, and lets the Centre bring different provisions into force on different dates for different States and Union territories.",
          verbatim:
            "(1) This Act may be called the Wild Life (Protection) Act, 1972.\n\n" +
            "(2) It extends to the whole of India except the State of Jammu and Kashmir.\n\n" +
            "(3) It shall come into force in a State or Union territory to which it extends on such date as the Central Government may, by notification, appoint, and different dates may be appointed for different provisions of this Act or for different States or Union territories.",
        },
        {
          number: "2",
          label: "Section 2",
          marginalNote: "Definitions",
          source: src(6, 9),
          summary:
            "The Act's dictionary — 39 numbered clauses defining the operative vocabulary, from 'animal' and 'wild animal' through 'hunting', 'taxidermy', 'trophy', 'vehicle', 'weapon' and 'zoo'.",
          verbatim:
            "In this Act, unless the context otherwise requires,—\n\n" +
            "(1) “animal” includes amphibians, birds, mammals and reptiles and their young, and also includes, in the cases of birds and reptiles, their eggs;\n\n" +
            "(2) “animal article” means an article made from any captive animal or wild animal, other than vermin, and includes an article or object in which the whole or any part of such animal has been used, and ivory imported into India and an article made therefrom;\n\n" +
            "(4) “Board” means a State Board for Wild Life constituted under sub-section (1) of section 6;\n\n" +
            "(5) “captive animal” means any animal, specified in Schedule I, Schedule II, Schedule III or Schedule IV, which is captured or kept or bred in captivity;\n\n" +
            "(7) “Chief Wild Life Warden” means the person appointed as such under clause (a) of sub-section (1) of section 4;\n\n" +
            "(7A) “circus” means an establishment, whether stationary or mobile, where animals are kept or used wholly or mainly for the purpose of performing tricks or manoeuvres;\n\n" +
            "(9) “Collector” means the chief officer in charge of the revenue administration of a district or any other officer not below the rank of a Deputy Collector as may be appointed by the State Government under section 18B in this behalf;\n\n" +
            "(10) “commencement of this Act”, in relation to— (a) a State, means commencement of this Act in that State, (b) any provision of this Act, means the commencement of that provision in the concerned State;\n\n" +
            "(11) “dealer” in relation to any captive animal, animal article, trophy, uncured trophy, meat or specified plant, means a person, who carries on the business of buying or selling any such animal or article, and includes a person who undertakes business in any single transaction;\n\n" +
            "(12) “Director” means the person appointed as Director of Wild Life Preservation under clause (a) of sub-section (1) of section 3;\n\n" +
            "(12A) “Forest officer” means the Forest officer appointed under clause (2) of section 2 of the Indian Forest Act, 1927 or under any other Act for the time being in force in a State;\n" +
            "(12B) “forest produce” shall have the same meaning as in sub-clause (b) of clause (4) of section 2 of the Indian Forest Act, 1927;\n\n" +
            "(14) “Government property” means any property referred to in section 39 or section 17H;\n\n" +
            "(15) “habitat” includes land, water or vegetation which is the natural home of any wild animal;\n\n" +
            "(16) “hunting”, with its grammatical variations and cognate expressions, includes,— (a) killing or poisoning of any wild animal or captive animal and every attempt to do so; (b) capturing, coursing, snaring, trapping, driving or baiting any wild or captive animal and every attempt to do so; (c) injuring or destroying or taking any part of the body of any such animal or, in the case of wild birds or reptiles, damaging the eggs of such birds or reptiles, or disturbing the eggs or nests of such birds or reptiles;\n\n" +
            "(17) “land” includes canals, creeks and other water channels, reservoirs, rivers, streams and lakes, whether artificial or natural, marshes and wetlands and also includes boulders and rocks;\n\n" +
            "(18) “licence” means a licence granted under this Act;\n\n" +
            "(18A) “livestock” means farm animals and includes buffaloes, bulls, bullocks, camels, cows, donkeys, goats, sheep, horses, mules, yaks, pigs, ducks, geese, poultry and their young but does not include any animal specified in Schedules I to V;\n\n" +
            "(19) “manufacturer” means a person who manufactures articles from any animal or plant specified in Schedules I to V and VI, as the case may be;\n" +
            "(20) “meat” includes blood, bones, sinew, eggs, shell or carapace, fat and flesh with or without skin, whether raw or cooked, of any wild animal or captive animal, other than a vermin;\n" +
            "(20A) “National Board” means the National Board for Wild Life constituted under section 5A;\n\n" +
            "(21) “National Park” means an area declared, whether under section 35 or section 38, or deemed, under sub-section (3) of section 66, to be declared, as a National Park;\n\n" +
            "(22) “notification” means a notification published in the Official Gazette;\n\n" +
            "(23) “permit” means a permit granted under this Act or any rule made thereunder;\n\n" +
            "(24) “person” includes a firm;\n" +
            "(24A) “protected area” means a National Park, a sanctuary, a conservation reserve or a community reserve notified under sections 18, 35, 36A and 36C of the Act;\n\n" +
            "(25) “prescribed” means prescribed by rules made under this Act;\n" +
            "(25A) “recognised zoo” means a zoo recognised under section 38H;\n" +
            "(25B) “reserve forest” means the forest declared to be reserved by the State Government under section 20 of the Indian Forest Act, 1927, or declared as such under any other State Act;\n\n" +
            "(26) “sanctuary” means an area declared as a sanctuary by notification under the provisions of Chapter IV of this Act and shall also include a deemed sanctuary under sub-section (4) of section 66;\n\n" +
            "(27) “specified plant” means any plant specified in Schedule VI;\n\n" +
            "(29) “State Government”, in relation to a Union territory, means the Administrator of that Union territory appointed by the President under article 239 of the Constitution;\n\n" +
            "(30) “taxidermy”, with its grammatical variations and cognate expressions, means the curing, preparation or preservation or mounting of trophies;\n" +
            "(30A) “territorial waters” shall have the same meaning as in section 3 of the Territorial Waters, Continental Shelf, Exclusive Economic Zone and other Maritime Zones Act, 1976;\n\n" +
            "(31) “trophy” means the whole or any part of any captive animal or wild animal, other than vermin, which has been kept or preserved by any means, whether artificial or natural, and includes— (a) rugs, skins and specimens of such animal mounted in whole or in part through a process of taxidermy, and (b) antler, bone, carapace, shell, horn, rhinoceros horn, hair, feather, nail, tooth, tusk, musk, eggs, nests and honeycomb;\n\n" +
            "(32) “uncured trophy” means the whole or any part of any captive animal or wild animal, other than vermin, which has not undergone a process of taxidermy, and includes a freshly killed wild animal, ambergris, musk and other animal products;\n\n" +
            "(33) “vehicle” means any conveyance used for movement on land, water or air and includes buffalo, bull, bullock, camel, donkey, elephant, horse and mule;\n\n" +
            "(34) “vermin” means any wild animal specified in Schedule V;\n\n" +
            "(35) “weapon” includes ammunition, bows and arrows, explosives, firearms, hooks, knives, nets, poison, snares and traps and any instrument or apparatus capable of anaesthetizing, decoying, destroying, injuring or killing an animal;\n\n" +
            "(36) “wild animal” means any animal specified in Schedules I to IV and found wild in nature;\n\n" +
            "(37) “wild life” includes any animal, aquatic or land vegetation which forms part of any habitat;\n\n" +
            "(38) “Wild Life Warden” means the person appointed as such under clause (b) of sub-section (1) of section 4;\n\n" +
            "(39) “zoo” means an establishment, whether stationary or mobile, where captive animals are kept for exhibition to the public and includes a circus and rescue centres but does not include an establishment of a licensed dealer in captive animals.",
        },
      ],
    },

    // ============================================================
    // Chapter II — Authorities to be appointed or constituted
    // ============================================================
    {
      slug: "ch-2-authorities",
      number: "II",
      title: "Authorities to be appointed or constituted under the Act",
      range: ["3", "8"],
      intro:
        "Sets up every authority the Act will ever invoke. The Centre appoints a Director of Wild Life Preservation; every State appoints a Chief Wild Life Warden. Section 5A constitutes the National Board for Wild Life chaired by the Prime Minister; Section 6 constitutes the State Boards chaired by each Chief Minister.",
      sections: [
        {
          number: "3",
          label: "Section 3",
          marginalNote: "Appointment of Director and other officers",
          source: src(9),
          summary:
            "The Centre appoints the Director of Wild Life Preservation and supporting officers; the Director acts under the Central Government's directions and is assisted by those officers.",
          verbatim:
            "(1) The Central Government may, for the purposes of this Act, appoint,—\n(a) A Director of Wild Life Preservation;\n(c) such other officers and employees as may be necessary.\n\n" +
            "(2) In the performance of his duties and exercise of his powers by or under this Act, the Director shall be subject to such general or special directions, as the Central Government may, from time to time, give.\n\n" +
            "(3) The officers and other employees appointed under this section shall be required to assist the Director.",
        },
        {
          number: "4",
          label: "Section 4",
          marginalNote: "Appointment of Chief Wild Life Warden and other officers",
          source: src(9),
          summary:
            "Each State appoints a Chief Wild Life Warden, Wild Life Wardens, Honorary Wild Life Wardens and supporting officers; all rank under the Chief Wild Life Warden and act under State Government directions.",
          verbatim:
            "(1) The State Government may, for the purpose of this Act, appoint,—\n(a) a Chief Wild Life Warden;\n(b) Wild Life Wardens;\n(bb) Honorary Wild Life Wardens;\n(c) such other officers and employees as may be necessary.\n\n" +
            "(2) In the performance of his duties and exercise of his powers by or under this Act, the Chief Wild Life Warden shall be subject to such general or special directions, as the State Government may from time to time, give.\n\n" +
            "(3) The Wild Life Warden, the Honorary Wild Life Warden and other officers and employees appointed under this section shall be subordinate to the Chief Wild Life Warden.",
        },
        {
          number: "5",
          label: "Section 5",
          marginalNote: "Power to delegate",
          source: src(9),
          summary:
            "The Director and the Chief Wild Life Warden may delegate their powers (with Government approval) to subordinate officers; delegated powers operate as if conferred directly by the Act.",
          verbatim:
            "(1) The Director may, with the previous approval of the Central Government, by order in writing, delegate all or any of his powers and duties under this Act to any officer subordinate to him subject to such conditions, if any, as may be specified in the order.\n\n" +
            "(2) The Chief Wild Life Warden may, with the previous approval of the State Government, by order in writing, delegate all or any of his powers and duties under this Act, except those under clause (a) of sub-section (1) of section 11, to any officer subordinate to him subject to such conditions, if any, as may be specified in the order.\n\n" +
            "(3) Subject to any general or special direction given or condition imposed by the Director or the Chief Wild Life Warden, any person, authorised by the Director or the Chief Wild Life Warden to exercise any powers, may exercise those powers in the same manner and to the same effect as if they had been conferred on that person directly by this Act and not by way of delegation.",
        },
        {
          number: "5A",
          label: "Section 5A",
          marginalNote: "Constitution of the National Board for Wild Life",
          source: src(11),
          summary:
            "Chaired by the Prime Minister, the National Board for Wild Life is the apex policy body — with the Forests Minister as Vice-Chair, MPs, conservationists, top bureaucrats and the Director of Wild Life Preservation as Member-Secretary.",
          verbatim:
            "(1) The Central Government shall, within three months from the date of commencement of the Wild Life (Protection) Amendment Act, 2002, constitute the National Board for Wild Life consisting of the following members, namely:—\n" +
            "(a) the Prime Minister as Chairperson;\n" +
            "(b) the Minister in-charge of Forests and Wild Life as Vice-Chairperson;\n" +
            "(c) three members of Parliament of whom two shall be from the House of the People and one from the Council of States;\n" +
            "(d) Member, Planning Commission in-charge of Forests and Wild Life;\n" +
            "(e) five persons to represent non-governmental organizations to be nominated by the Central Government;\n" +
            "(f) ten persons to be nominated by the Central Government from amongst eminent conservationists, ecologists and environmentalists;\n" +
            "(g) the Secretary to the Government of India in-charge of the Ministry or Department of the Central Government dealing with Forests and Wild Life;\n" +
            "(h) the Chief of the Army Staff;\n" +
            "(i) the Secretary to the Government of India in-charge of the Ministry of Defence;\n" +
            "(j) the Secretary to the Government of India in-charge of the Ministry of Information and Broadcasting;\n" +
            "(k) the Secretary to the Government of India in-charge of the Department of Expenditure, Ministry of Finance;\n" +
            "(l) the Secretary to the Government of India, Ministry of Tribal Welfare;\n" +
            "(m) the Director-General of Forests in the Ministry or Department of the Central Government dealing with Forests and Wild Life;\n" +
            "(n) the Director-General of Tourism, Government of India;\n" +
            "(o) the Director-General, Indian Council for Forestry Research and Education, Dehradun;\n" +
            "(p) the Director, Wild Life Institute of India, Dehradun;\n" +
            "(q) the Director, Zoological Survey of India;\n" +
            "(r) the Director, Botanical Survey of India;\n" +
            "(s) the Director, Indian Veterinary Research Institute;\n" +
            "(t) the Member-Secretary, Central Zoo Authority;\n" +
            "(u) the Director, National Institute of Oceanography;\n" +
            "(v) one representative each from ten States and Union territories by rotation, to be nominated by the Central Government;\n" +
            "(w) the Director of Wild Life Preservation who shall be the Member-Secretary of the National Board.\n\n" +
            "(2) The term of office of the members other than those who are members ex officio, the manner of filling vacancies referred to in clauses (e), (f) and (v) of sub-section (1), and the procedure to be followed in the discharge of their functions by the members of the National Board shall be such, as may be prescribed.\n\n" +
            "(3) The members (except members ex officio) shall be entitled to receive such allowances in respect of expenses incurred in the performance of their duties as may be prescribed.\n\n" +
            "(4) Notwithstanding anything contained in any other law for the time being in force, the office of a member of the National Board shall not be deemed to be an office of profit.",
        },
        {
          number: "5B",
          label: "Section 5B",
          marginalNote: "Standing Committee of the National Board",
          source: src(12),
          summary:
            "The National Board may carve out a Standing Committee — Vice-Chair, Member-Secretary, and up to ten members — and may further spin out committees, sub-committees or study groups as needed.",
          verbatim:
            "(1) The National Board may, in its discretion, constitute a Standing Committee for the purpose of exercising such powers and performing such duties as may be delegated to the Committee by the National Board.\n\n" +
            "(2) The Standing Committee shall consist of the Vice-Chairperson, the Member-Secretary, and not more than ten members to be nominated by the Vice-Chairperson from amongst the members of the National Board.\n\n" +
            "(3) The National Board may constitute committees, sub-committees or study groups, as may be necessary, from time to time in proper discharge of the functions assigned to it.",
        },
        {
          number: "5C",
          label: "Section 5C",
          marginalNote: "Functions of the National Board",
          source: src(12),
          summary:
            "The National Board promotes wild life and forest conservation — framing policy, advising Centre and States, recommending parks and sanctuaries, vetting projects, reviewing progress and publishing a biennial status report.",
          verbatim:
            "(1) It shall be the duty of the National Board to promote the conservation and development of wild life and forests by such measures as it thinks fit.\n\n" +
            "(2) Without prejudice to the generality of the foregoing provision, the measures referred to therein may provide for—\n" +
            "(a) framing policies and advising the Central Government and the State Governments on the ways and means of promoting wild life conservation and effectively controlling poaching and illegal trade of wild life and its products;\n" +
            "(b) making recommendations on the setting up of and management of national parks, sanctuaries and other protected areas and on matters relating to restriction of activities in those areas;\n" +
            "(c) carrying out or causing to be carried out impact assessment of various projects and activities on wild life or its habitat;\n" +
            "(d) reviewing from time to time, the progress in the field of wild life conservation in the country and suggesting measures for improvement thereto; and\n" +
            "(e) preparing and publishing a status report at least once in two years on wild life in the country.",
        },
        {
          number: "6",
          label: "Section 6",
          marginalNote: "Constitution of State Board for Wild Life",
          source: src(12, 13),
          summary:
            "Each State constitutes its own Board for Wild Life — Chief Minister as Chair, State Forests Minister as Vice-Chair, three State legislators, NGOs, conservationists, key Secretaries, Police, Forest, Tribal Welfare, with the Chief Wild Life Warden as Member-Secretary.",
          verbatim:
            "(1) The State Government shall, within a period of six months from the date of commencement of the Wild Life (Protection) Amendment Act, 2002, constitute a State Board for Wild Life consisting of the following members, namely:—\n" +
            "(a) the Chief Minister of the State and in case of the Union territory, either Chief Minister or Administrator, as the case may be — Chairperson;\n" +
            "(b) the Minister in-charge of Forests and Wild Life — Vice-Chairperson;\n" +
            "(c) three members of the State Legislature or in the case of a Union territory with Legislature, two members of the Legislative Assembly of that Union territory;\n" +
            "(d) three persons to represent non-governmental organizations dealing with wild life to be nominated by the State Government;\n" +
            "(e) ten persons to be nominated by the State Government from amongst eminent conservationists, ecologists and environmentalists including at least two representatives of the Scheduled Tribes;\n" +
            "(f) the Secretary to the State Government or the Government of the Union territory, as the case may be, in-charge of Forests and Wild Life;\n" +
            "(g) the Officer in-charge of the State Forest Department;\n" +
            "(h) the Secretary to the State Government, Department of Tribal Welfare;\n" +
            "(i) the Managing Director, State Tourism Development Corporation;\n" +
            "(j) an officer of the State Police Department not below the rank of Inspector-General;\n" +
            "(k) a representative of the Armed Forces not below the rank of a Brigadier to be nominated by the Central Government;\n" +
            "(l) the Director, Department of Animal Husbandry of the State;\n" +
            "(m) the Director, Department of Fisheries of the State;\n" +
            "(n) an officer to be nominated by the Director, Wild Life Preservation;\n" +
            "(o) a representative of the Wild Life Institute of India, Dehradun;\n" +
            "(p) a representative of the Botanical Survey of India;\n" +
            "(q) a representative of the Zoological Survey of India;\n" +
            "(r) the Chief Wild Life Warden, who shall be the Member-Secretary.\n\n" +
            "(2) The term of office of the members other than those who are members ex officio and the manner of filling vacancies referred to in clauses (d) and (e) of sub-section (1) and procedure to be followed shall be such, as may be prescribed.\n\n" +
            "(3) The member (except members ex officio) shall be entitled to receive such allowances in respect of expenses incurred in the performance of their duties as may be prescribed.",
        },
        {
          number: "7",
          label: "Section 7",
          marginalNote: "Procedure to be followed by the Board",
          source: src(13),
          summary:
            "The State Board meets at least twice a year at a place fixed by the State Government, regulates its own procedure and quorum, and is not disabled by vacancies or constitutional defects.",
          verbatim:
            "(1) The Board shall meet at least twice a year at such place as the State Government may direct.\n\n" +
            "(2) The Board shall regulate its own procedure (including the quorum).\n\n" +
            "(3) No act or proceeding of the Board shall be invalid merely by reason of the existence of any vacancy therein or any defect in the constitution thereof or any irregularity in the procedure of the Board not affecting the merits of the case.",
        },
        {
          number: "8",
          label: "Section 8",
          marginalNote: "Duties of State Board for Wild Life",
          source: src(13),
          summary:
            "The State Board advises the State Government on protected-area selection, conservation policy, Schedule amendments, reconciling tribal/forest-dweller needs with conservation, and any other wildlife matter referred to it.",
          verbatim:
            "It shall be the duty of State Board for Wild Life to advise the State Government,—\n" +
            "(a) in the selection and management of areas to be declared as protected areas;\n" +
            "(b) in formulation of the policy for protection and conservation of the wild life and specified plants;\n" +
            "(c) in any matter relating to the amendment of any Schedule;\n" +
            "(cc) in relation to the measures to be taken for harmonising the needs of the tribals and other dwellers of the forest with the protection and conservation of wild life; and\n" +
            "(d) in any other matter connected with the protection of wild life, which may be referred to it by the State Government.",
        },
      ],
    },

    // ============================================================
    // Chapter III — Hunting of Wild Animals
    // ============================================================
    {
      slug: "ch-3-hunting",
      number: "III",
      title: "Hunting of Wild Animals",
      range: ["9", "17"],
      intro:
        "Hunting is the heart of the Act's prohibition regime. Section 9 absolutely bans hunting of any wild animal in Schedules I–IV. The two narrow exceptions — dangerous or terminally injured animals (§11) and special-purpose permits for education, science and snake-venom (§12) — are the only routes by which a lawful hunt can occur. Sections 13–17 were repealed in 1991; section 10 was deleted with them.",
      sections: [
        {
          number: "9",
          label: "Section 9",
          marginalNote: "Prohibition of hunting",
          source: src(13),
          summary:
            "The Act's cornerstone — a complete prohibition on hunting any wild animal listed in Schedules I, II, III or IV. The only escapes are §§11 and 12.",
          verbatim:
            "No person shall hunt any wild animal specified in Schedules I, II, III and IV except as provided under section 11 and section 12.",
        },
        {
          number: "10",
          label: "Section 10",
          marginalNote: "[Omitted] — Maintenance of records of wild animals killed or captured",
          source: src(13),
          summary:
            "Repealed by the Wild Life (Protection) Amendment Act, 1991. The earlier requirement to keep records of animals killed or captured is no longer on the statute book.",
          verbatim:
            "Omitted by the Wild Life (Protection) Amendment Act, 1991 (44 of 1991), section 10, with effect from 2 October 1991.",
        },
        {
          number: "11",
          label: "Section 11",
          marginalNote: "Hunting of wild animals to be permitted in certain cases",
          source: src(14),
          summary:
            "Two narrow escape routes from the §9 ban: dangerous-or-incurable animals can be hunted with a written Chief Wild Life Warden order (capture/tranquillisation must be tried first for Schedule I species), and self-defence killing in good faith is not an offence — but the carcass becomes Government property.",
          verbatim:
            "(1) Notwithstanding anything contained in any other law for the time being in force and subject to the provisions of Chapter IV,—\n" +
            "(a) the Chief Wild Life Warden may, if he is satisfied that any wild animal specified in Schedule I has become dangerous to human life or is so disabled or diseased as to be beyond recovery, by Order in writing and stating the reasons therefor, permit any person to hunt such animal or cause such animal to be hunted;\n\n" +
            "Provided that no wild animal shall be ordered to be killed unless the Chief Wild Life Warden is satisfied that such animal cannot be captured, tranquilised or translocated:\n\n" +
            "Provided further that no such captured animal shall be kept in captivity unless the Chief Wild Life Warden is satisfied that such animal cannot be rehabilitated in the wild and the reasons for the same are recorded in writing.\n\n" +
            "Explanation.—For the purposes of clause (a), the process of capture or translocation, as the case may be, of such animal shall be made in such manner as to cause minimum trauma to the said animal.\n\n" +
            "(b) the Chief Wild Life Warden or the authorised officer may, if he is satisfied that any wild animal specified in Schedule II, Schedule III, or Schedule IV, has become dangerous to human life or to property (including standing crops on any land) or is so disabled or diseased as to be beyond recovery, by order in writing and stating the reasons therefor, permit any person to hunt such animal or group of animals in a specified area or cause such animal or group of animals in that specified area to be hunted.\n\n" +
            "(2) The killing or wounding in good faith of any wild animal in defence of oneself or of any other person shall not be an offence:\n\n" +
            "Provided that nothing in this sub-section shall exonerate any person who, when such defence becomes necessary, was committing any act in contravention of any provision of this Act or any rule or order made thereunder.\n\n" +
            "(3) Any wild animal killed or wounded in defence of any person shall be Government property.",
        },
        {
          number: "12",
          label: "Section 12",
          marginalNote: "Grant of permit for special purposes",
          source: src(14, 15),
          summary:
            "The Chief Wild Life Warden can issue a written, fee-paid permit to hunt for education, scientific research, scientific management (translocation or non-lethal population control), zoo/museum specimens or snake-venom for life-saving drugs — but for any Schedule I animal Central Government clearance is mandatory.",
          verbatim:
            "Notwithstanding anything contained elsewhere in this Act, it shall be lawful for the Chief Wild Life Warden, to grant a permit, by an order in writing stating the reasons therefor, to any person, on payment of such fee as may be prescribed, which shall entitle the holder of such permit to hunt subject to such conditions as may be specified therein, any wild animal specified in such permit, for the purpose of,—\n" +
            "(a) education;\n" +
            "(b) scientific research;\n" +
            "(bb) scientific management.\n\n" +
            "Explanation.—For the purposes of clause (bb), the expression \"scientific management\" means—\n" +
            "(i) translocation of any wild animals to an alternative suitable habitat; or\n" +
            "(ii) population management of wildlife, without killing or poisoning or destroying any wild animals;\n\n" +
            "(c) collection of specimens—\n" +
            "(i) for recognised zoos subject to the permission under section 38-I; or\n" +
            "(ii) for museums and similar institutions;\n" +
            "(d) derivation, collection or preparation of snake-venom for the manufacture of life-saving drugs:\n\n" +
            "Provided that no such permit shall be granted—\n" +
            "(a) in respect of any wild animal specified in Schedule I, except with the previous permission of the Central Government, and\n" +
            "(b) in respect of any other wild animal, except with the previous permission of the State Government.",
        },
        {
          number: "13–17",
          label: "Sections 13–17",
          marginalNote: "[Omitted] — Licences, appeals, closed time, hunting restrictions",
          source: src(15),
          summary:
            "All five sections — licence suspension/cancellation (§13), appeals (§14), hunting of young/female animals (§15), closed-time declarations (§16) and restrictions on hunting (§17) — were repealed by the Wild Life (Protection) Amendment Act, 1991.",
          verbatim:
            "Sections 13, 14, 15, 16 and 17 were omitted by the Wild Life (Protection) Amendment Act, 1991 (44 of 1991), section 12, with effect from 2 October 1991. The earlier licensing scheme for hunting was abolished — replaced by the absolute prohibition in section 9 with the narrow exceptions in sections 11 and 12.",
        },
      ],
    },

    // ============================================================
    // Chapter IIIA — Protection of Specified Plants  (Inserted 1991)
    // ============================================================
    {
      slug: "ch-3a-specified-plants",
      number: "IIIA",
      title: "Protection of Specified Plants",
      range: ["17A", "17H"],
      intro:
        "Inserted by the 1991 amendment, this chapter protects plants listed in Schedule VI. It bans picking, uprooting, possessing, selling or transporting specified plants — unless under permit (§17B) for education, science, herbarium or propagation. Cultivation (§17C) and dealing (§17D) require licences from the Chief Wild Life Warden. Stocks must be declared (§17E), and every illegally held plant becomes Government property (§17H). Members of Scheduled Tribes retain a narrow personal-use protection.",
      sections: [
        {
          number: "17A",
          label: "Section 17A",
          marginalNote: "Prohibition of picking, uprooting, etc. of specified plant",
          source: src(15),
          summary:
            "Bans picking, uprooting, damaging, destroying, acquiring, collecting, possessing, selling, transporting or gifting any specified plant from forest land or any notified area — with a narrow carve-out for Scheduled Tribe members using such plants for bona fide personal use in their district.",
          verbatim: `Save as otherwise provided in this Chapter, no person shall—
(a) wilfully pick, uproot, damage, destroy, acquire or collect any specified plant from any forest land and any area specified, by notification, by the Central Government;
(b) possess, sell, offer for sale, or transfer by way of gift or otherwise, or transport any specified plant, whether alive or dead, or part or derivative thereof:

Provided that nothing in this section shall prevent a member of a scheduled tribe, subject to the provisions of Chapter IV, from picking, collecting or possessing in the district he resides any specified plant or part or derivative thereof for his bona fide personal use.`,
        },
        {
          number: "17B",
          label: "Section 17B",
          marginalNote: "Grants of permit for special purposes",
          source: src(15),
          summary:
            "The Chief Wild Life Warden may, with the State Government's prior permission, grant permits to pick, uproot, collect or transport specified plants for education, scientific research, herbarium collection in a scientific institution, or Central-Government-approved propagation.",
          verbatim: `The Chief Wild Life Warden may, with the previous permission of the State Government, grant to any person a permit to pick, uproot, acquire or collect from a forest land or the area specified under section 17A or transport, subject to such conditions as may be specified therein, any specified plant for the purpose of—
(a) education;
(b) scientific research;
(c) collection, preservation and display in a herbarium of any scientific institution; or
(d) propagation by a person or an institution approved by the Central Government in this regard.`,
        },
        {
          number: "17C",
          label: "Section 17C",
          marginalNote: "Cultivation of specified plants without licence prohibited",
          source: src(15),
          summary:
            "Specified plants can only be cultivated under a licence from the Chief Wild Life Warden. Pre-existing cultivators got a six-month grace window from the 1991 amendment to apply.",
          verbatim: `(1) No person shall cultivate a specified plant except under and in accordance with a licence granted by the Chief Wild Life Warden or any other officer authorised by the State Government in this behalf:

Provided that nothing in this section shall prevent a person, who immediately before the commencement of the Wild Life (Protection) (Amendment) Act, 1991, was cultivating a specified plant from carrying on such cultivation for a period of six months from such commencement or where he has made an application within that period for the grant of a licence to him, until the licence is granted to him or he is informed in writing that a licence cannot be granted to him.

(2) Every licence granted under this section shall specify the area in which and the conditions, if any, subject to which the licensee shall cultivate a specified plant.`,
        },
        {
          number: "17D",
          label: "Section 17D",
          marginalNote: "Dealing in specified plants without licence prohibited",
          source: src(15, 16),
          summary:
            "Commercial dealing in specified plants requires a licence from the Chief Wild Life Warden; pre-existing dealers got a sixty-day grace window from the 1991 amendment to apply.",
          verbatim: `(1) No person shall, except under and in accordance with a licence granted by the Chief Wild Life Warden or any other officer authorised by the State Government in this behalf, commence or carry on business or occupation as a dealer in a specified plant or part or derivative thereof:

Provided that nothing in this section shall prevent a person, who, immediately before the commencement of the Wild Life (Protection) (Amendment) Act, 1991, was carrying on such business or occupation, from carrying on such business or occupation for a period of sixty days from such commencement, or where he has made an application within that period for the grant of a licence to him, until the licence is granted to him or he is informed in writing that a licence cannot be granted to him.

(2) Every licence granted under this section shall specify the premises in which and the conditions, if any, subject to which the licensee shall carry on his business.`,
        },
        {
          number: "17E",
          label: "Section 17E",
          marginalNote: "Declaration of stock",
          source: src(16),
          summary:
            "Every cultivator or dealer in specified plants must declare existing stocks to the Chief Wild Life Warden within thirty days of the 1991 amendment's commencement; the licensing machinery of §§44(3)–(8), 45, 46 and 47 applies mutatis mutandis.",
          verbatim: `(1) Every person cultivating, or dealing in, a specified plant or part or derivative thereof shall, within thirty days from the date of commencement of the Wild Life (Protection) (Amendment) Act, 1991, declare to the Chief Wild Life Warden or any other officer authorised by the State Government in this behalf, his stocks of such plants and part or derivative thereof, as the case may be, on the date of such commencement.

(2) The provisions of sub-sections (3) to (8) (both inclusive) of section 44, section 45, section 46 and section 47 shall, as far as may be, apply in relation to an application and a licence referred to in section 17C and section 17D as they apply in relation to the licence or business in animals or animal articles.`,
        },
        {
          number: "17F",
          label: "Section 17F",
          marginalNote: "Possession, etc., of plants by licensee",
          source: src(16),
          summary:
            "A licensee may not hold undeclared or unlawfully acquired specified plants, and may not pick, uproot, collect, sell, possess or transport any specified plant except in strict compliance with the licence's conditions and the Act's rules.",
          verbatim: `No licensee under this Chapter shall—
(a) keep in his control, custody or possession—
(i) any specified plant, or part or derivative thereof in respect of which a declaration under the provisions of section 17E has to be made but has not been made;
(ii) any specified plant, or part or derivative thereof which has not been lawfully acquired under the provisions of this Act or any rule or order made thereunder;
(b) (i) pick, uproot, collect or acquire any specified plant, or
(ii) acquire, receive, keep in his control, custody or possession, or sell, offer for sale or transport any specified plant or part or derivative thereof,
except in accordance with the conditions subject to which the licence has been granted and such rules as may be made under this Act.`,
        },
        {
          number: "17G",
          label: "Section 17G",
          marginalNote: "Purchase, etc., of specified plants",
          source: src(16),
          summary:
            "Consumers can only purchase specified plants from a licensed dealer; the §17B permittees (education, research, herbarium, propagation) are excepted.",
          verbatim: `No person shall purchase, receive or acquire any specified plant or part or derivative thereof otherwise than from a licensed dealer:

Provided that nothing in this section shall apply to any person referred to in section 17B.`,
        },
        {
          number: "17H",
          label: "Section 17H",
          marginalNote: "Plants to be Government property",
          source: src(16),
          summary:
            "Every specified plant tied to an offence against the Act becomes State (or, if collected from a centrally declared protected area, Central) Government property. The procedural rules of §39(2)–(3) apply.",
          verbatim: `(1) Every specified plant or part or derivative thereof, in respect of which any offence against this Act or any rule or order made thereunder has been committed, shall be the property of the State Government, and, where such plant or part or derivative thereof has been collected or acquired from a sanctuary or National Park declared by the Central Government, such plant or part or derivative thereof shall be the property of the Central Government.

(2) The provisions of sub-sections (2) and (3) of section 39 shall, as far as may be, apply in relation to the specified plant or part or derivative thereof as they apply in relation to wild animals and articles referred to in sub-section (1) of that section.`,
        },
      ],
    },

    // ============================================================
    // Chapter IV — Protected Areas (Sanctuaries · National Parks · Conservation Reserves · Community Reserves)
    // ============================================================
    {
      slug: "ch-4-protected-areas",
      number: "IV",
      title: "Protected Areas",
      range: ["18", "38"],
      intro:
        "The Act's spatial protection regime. Sanctuaries are declared under §18 with a Collector-led rights-settlement under §§19–26 modelled on the Land Acquisition Act 1894, becoming final under §26A. Sections 27–34 lock down entry, activities, fire, weapons and arms-licensing inside the sanctuary. National Parks (§35) are the stricter sibling — even forest produce removal needs satisfaction of necessity. Conservation Reserves (§§36A–B) and Community Reserves (§§36C–D), inserted in 2003, broaden the toolkit to landscapes adjacent to protected areas and to community-volunteered habitats. Section 38 lets the Centre declare its own sanctuaries and parks on transferred land.",
      sections: [
        {
          number: "18",
          label: "Section 18",
          marginalNote: "Declaration of sanctuary",
          source: src(16, 17),
          summary:
            "The State Government, by notification, declares its intention to constitute an area (outside reserve forests and territorial waters) as a sanctuary if it has adequate ecological, faunal, floral, geomorphological, natural or zoological significance.",
          verbatim: `(1) The State Government may, by notification, declare its intention to constitute any area other than an area comprised within any reserve forest or the territorial waters as a sanctuary if it considers that such area is of adequate ecological, faunal, floral, geomorphological, natural or zoological significance, for the purpose of protecting, propagating or developing wild life or its environment.

(2) The notification referred to in sub-section (1) shall specify, as nearly as possible, the situation and limits of such area.

Explanation.—For the purposes of this section, it shall be sufficient to describe the area by roads, rivers, ridges or other well-known or readily intelligible boundaries.`,
        },
        {
          number: "18A",
          label: "Section 18A",
          marginalNote: "Protection to sanctuaries",
          source: src(17),
          summary:
            "The protective sections 27–33A trigger the moment the State declares intention to constitute a sanctuary; until rights settlement is complete, the State must arrange fuel, fodder and forest produce alternatives for affected people in accordance with their existing rights.",
          verbatim: `(1) When the State Government declares its intention under sub-section (1) of section 18 to constitute any area, not comprised within any reserve forest or territorial waters under that sub-section, as a sanctuary, the provisions of sections 27 to 33A (both inclusive) shall come into effect forthwith.

(2) Till such time as the rights of affected persons are finally settled under sections 19 to 24 (both inclusive), the State Government shall make alternative arrangements required for making available fuel, fodder and other forest produce to the persons affected, in terms of their rights as per the Government records.`,
        },
        {
          number: "18B",
          label: "Section 18B",
          marginalNote: "Appointment of Collectors",
          source: src(17),
          summary:
            "The State must appoint a Collector within 90 days of the 2003 amendment, or within 30 days of any §18 notification, to inquire into and determine the rights existing within the sanctuary's proposed limits.",
          verbatim: `The State Government shall appoint, an officer to act as Collector under the Act, within ninety days of coming into force of the Wild Life (Protection) Amendment Act, 2002, or within thirty days of the issue of notification under section 18, to inquire into and determine the existence, nature and extent of rights of any person in or over the land comprised within the limits of the sanctuary which may be notified under sub-section (1) of section 18.`,
        },
        {
          number: "19",
          label: "Section 19",
          marginalNote: "Collector to determine rights",
          source: src(17),
          summary:
            "After the §18 notification, the Collector inquires into and determines the existence, nature and extent of any rights any person may hold in or over the land within the proposed sanctuary.",
          verbatim: `When a notification has been issued under section 18, the Collector shall inquire into, and determine, the existence, nature and extent of the rights of any person in or over the land comprised within the limits of the sanctuary.`,
        },
        {
          number: "20",
          label: "Section 20",
          marginalNote: "Bar of accrual of rights",
          source: src(17),
          summary:
            "Once a §18 notification issues, no new rights can be acquired in the area — only succession (testamentary or intestate) is preserved.",
          verbatim: `After the issue of a notification under section 18, no right shall be acquired in, on or over the land comprised within the limits of the area specified in such notification, except by succession, testamentary or intestate.`,
        },
        {
          number: "21",
          label: "Section 21",
          marginalNote: "Proclamation by Collector",
          source: src(17),
          summary:
            "Within sixty days of the §18 notification, the Collector publishes a regional-language proclamation in every town and village in or near the sanctuary, calling on right-holders to prefer written claims within two months.",
          verbatim: `When a notification has been issued under section 18, the Collector shall within a period of sixty days publish in the regional language in every town and village in or in the neighbourhood of the area comprised therein, a proclamation—
(a) specifying, as nearly as possible, the situation and the limits of the sanctuary; and
(b) requiring any person, claiming any right mentioned in section 19, to prefer before the Collector, within two months from the date of such proclamation, a written claim in the prescribed form, specifying the nature and extent of such right with necessary details and the amount and particulars of compensation, if any, claimed in respect thereof.`,
        },
        {
          number: "22",
          label: "Section 22",
          marginalNote: "Inquiry by Collector",
          source: src(17),
          summary:
            "After serving the prescribed notice on the claimant, the Collector expeditiously investigates the claim and any unreported rights, drawing on State records and witness evidence.",
          verbatim: `The Collector shall, after service of the prescribed notice upon the claimant, expeditiously inquire into—
(a) the claim preferred before him under clause (b) of section 21, and
(b) the existence of any right mentioned in section 19 and not claimed under clause (b) of section 21,
so far as the same may be ascertainable from the records of the State Government and the evidence of any person acquainted with the same.`,
        },
        {
          number: "23",
          label: "Section 23",
          marginalNote: "Powers of Collector",
          source: src(18),
          summary:
            "For the §22 inquiry the Collector wields civil-court trial powers and can enter, survey, demarcate and map the land, either personally or through any officer he authorises.",
          verbatim: `For the purpose of such inquiry, the Collector may exercise the following powers, namely:—
(a) the power to enter in or upon any land and to survey, demarcate and make a map of the same or to authorise any other officer to do so;
(b) the same powers as are vested in a civil court for the trial of suits.`,
        },
        {
          number: "24",
          label: "Section 24",
          marginalNote: "Acquisition of rights",
          source: src(18),
          summary:
            "On admitted claims, the Collector may either exclude the land from the sanctuary, acquire it (or the rights) under the Land Acquisition Act 1894, or — post-1991 — allow the right to continue inside the sanctuary in consultation with the Chief Wild Life Warden.",
          verbatim: `(1) In the case of a claim to a right in or over any land referred to in section 19, the Collector shall pass an order admitting or rejecting the same in whole or in part.

(2) If such claim is admitted in whole or in part, the Collector may either—
(a) exclude such land from the limits of the proposed sanctuary, or
(b) proceed to acquire such land or rights, except where by an agreement between the owner of such land or holder of rights and the Government, the owner or holder of such rights has agreed to surrender his rights to the Government, in or over such land, and on payment of such compensation, as is provided in the Land Acquisition Act, 1894;
(c) allow, in consultation with the Chief Wild Life Warden, the continuation of any right of any person in or over any land within the limits of the sanctuary.`,
        },
        {
          number: "25",
          label: "Section 25",
          marginalNote: "Acquisition proceedings",
          source: src(18),
          summary:
            "Where rights are acquired, the Collector is treated as a Collector under the Land Acquisition Act 1894 — claimant becomes an §9 LAA party, compensation can be in land, money or both, and stoppage of public ways or common pasture must be replaced where practicable. The acquisition is deemed for a public purpose.",
          verbatim: `(1) For the purpose of acquiring such land, or rights in or over such land,—
(a) the Collector shall be deemed to be a Collector, proceeding under the Land Acquisition Act, 1894;
(b) the claimant shall be deemed to be a person interested and appearing before him in pursuance of a notice given under section 9 of that Act;
(c) the provisions of the sections, preceding section 9 of that Act, shall be deemed to have been complied with;
(d) where the claimant does not accept the award made in his favour in the matter of compensation, he shall be deemed, within the meaning of section 18 of that Act, to be a person interested who has not accepted the award, and shall be entitled to proceed to claim relief against the award under the provisions of Part III of that Act;
(e) the Collector, with the consent of the claimant, or the court, with the consent of both the parties, may award compensation in land or money or partly in land and partly in money; and
(f) in the case of the stoppage of a public way or a common pasture, the Collector may, with the previous sanction of the State Government, provide for an alternative public way or common pasture, as far as may be practicable or convenient.

(2) The acquisition under this Act of any land or interest therein shall be deemed to be acquisition for a public purpose.`,
        },
        {
          number: "25A",
          label: "Section 25A",
          marginalNote: "Time-limit for completion of acquisition proceedings",
          source: src(18),
          summary:
            "The Collector should complete §§19–25 proceedings within two years of the §18 notification — but missing the deadline does not lapse the notification.",
          verbatim: `(1) The Collector shall, as far as possible, complete the proceedings under sections 19 to 25 (both inclusive), within a period of two years from the date of notification of declaration of sanctuary under section 18.

(2) The notification shall not lapse if, for any reasons, the proceedings are not completed within a period of two years.`,
        },
        {
          number: "26",
          label: "Section 26",
          marginalNote: "Delegation of Collector's powers",
          source: src(18),
          summary:
            "The State may, by general or special order, transfer the Collector's §§19–25 powers and functions to any other specified officer.",
          verbatim: `The State Government may, by general or special order, direct that the powers exercisable or the functions to be performed by the Collector under sections 19 to 25 (both inclusive) may be exercised and performed by such other officer as may be specified in the order.`,
        },
        {
          number: "26A",
          label: "Section 26A",
          marginalNote: "Declaration of area as sanctuary",
          source: src(19),
          summary:
            "After claims have been disposed of (or where reserve forest / territorial waters are being added), the State issues the final notification fixing the sanctuary's limits and effective date. Territorial-waters inclusion needs Centre concurrence and the Chief Naval Hydrographer's input; innocent passage of vessels is preserved; boundaries cannot be altered without the National Board's recommendation.",
          verbatim: `(1) When—
(a) a notification has been issued under section 18 and the period for preferring claims has elapsed, and all claims, if any, made in relation to any land in an area intended to be declared as a sanctuary, have been disposed of by the State Government; or
(b) any area comprised within any reserve forest or any part of the territorial waters, which is considered by the State Government to be of adequate ecological, faunal, floral, geomorphological, natural or zoological significance for the purpose of protecting, propagating or developing wild life or its environment, is to be included in a sanctuary,
the State Government shall issue a notification specifying the limits of the area which shall be comprised within the sanctuary and declare that the said area shall be sanctuary on and from such date as may be specified in the notification:

Provided that where any part of the territorial waters is to be so included, prior concurrence of the Central Government shall be obtained by the State Government:

Provided further that the limits of the area of the territorial waters to be included in the sanctuary shall be determined in consultation with the Chief Naval Hydrographer of the Central Government and after taking adequate measures to protect the occupational interests of the local fishermen.

(2) Notwithstanding anything contained in sub-section (1), the right of innocent passage of any vessel or boat through the territorial waters shall not be affected by the notification issued under sub-section (1).

(3) No alteration of the boundaries of a sanctuary shall be made by the State Government except on a recommendation of the National Board.`,
      },
      {
        number: "27",
        label: "Section 27",
        marginalNote: "Restriction on entry in sanctuary",
        source: src(19, 20),
        summary:
          "Only public servants on duty, residents permitted by the Chief Wild Life Warden, immovable-property right-holders, public-highway users and their dependents may enter or reside in a sanctuary without a §28 permit. Residents must prevent offences, assist enforcement, report wild-animal deaths and fight fires. Damaging boundary marks, teasing animals or littering is barred.",
        verbatim: `(1) No person other than,—
(a) a public servant on duty,
(b) a person who has been permitted by the Chief Wild Life Warden or the authorised officer to reside within the limits of the sanctuary,
(c) a person who has any right over immovable property within the limits of the sanctuary,
(d) a person passing through the sanctuary along a public highway, and
(e) the dependants of the person referred to in clause (a), clause (b) or clause (c), shall enter or reside in the sanctuary, except under and in accordance with the conditions of a permit granted under section 28.

(2) Every person shall, so long as he resides in the sanctuary, be bound—
(a) to prevent the commission, in the sanctuary, of an offence against this Act;
(b) where there is reason to believe that any such offence against this Act has been committed in such sanctuary, to help in discovering and arresting the offender;
(c) to report the death of any wild animal and to safeguard its remains until the Chief Wild Life Warden or the authorised officer takes charge thereof;
(d) to extinguish any fire in such sanctuary of which he has knowledge or information and to prevent from spreading, by any lawful means in his power, any fire within the vicinity of such sanctuary of which he has knowledge or information; and
(e) to assist any forest officer, Chief Wild Life Warden, Wild Life Warden or police officer demanding his aid for preventing the commission of any offence against this Act or in the investigation of any such offence.

(3) No person shall, with intent to cause damage to any boundary-mark of a sanctuary or to cause wrongful gain as defined in the Indian Penal Code, 1860, alter, destroy, move or deface such boundary-mark.

(4) No person shall tease or molest any wild animal or litter the grounds of sanctuary.`,
      },
      {
        number: "28",
        label: "Section 28",
        marginalNote: "Grant of permit",
        source: src(20),
        summary:
          "The Chief Wild Life Warden may grant a fee-paid permit, on conditions, to enter or reside in a sanctuary for the study of wildlife, photography, scientific research, tourism, or lawful business with a resident.",
        verbatim: `(1) The Chief Wild Life Warden may, on application, grant to any person a permit to enter or reside in a sanctuary for all or any of the following purposes, namely:—
(a) investigation or study of wild life and purposes ancillary or incidental thereto;
(b) photography;
(c) scientific research;
(d) tourism;
(e) transaction of lawful business with any person residing in the sanctuary.

(2) A permit to enter or reside in a sanctuary shall be issued subject to such conditions and on payment of such fee as may be prescribed.`,
      },
      {
        number: "29",
        label: "Section 29",
        marginalNote: "Destruction, etc., in a sanctuary prohibited without a permit",
        source: src(20),
        summary:
          "No one may destroy, exploit or remove wildlife or forest produce, damage habitat, or divert/stop/enhance water flow in or out of a sanctuary except under a Chief Wild Life Warden permit. That permit needs State Government satisfaction (after consulting the Board) that the action is necessary for better wildlife management. Removed forest produce can only meet bona fide local personal needs — never commercial use.",
        verbatim: `No person shall destroy, exploit or remove any wild life including forest produce from a sanctuary or destroy or damage or divert the habitat of any wild animal by any act whatsoever or divert, stop or enhance the flow of water into or outside the sanctuary, except under and in accordance with a permit granted by the Chief Wild Life Warden, and no such permit shall be granted unless the State Government being satisfied in consultation with the Board that such removal of wild life from the sanctuary or the change in the flow of water into or outside the sanctuary is necessary for the improvement and better management of wild life therein, authorises the issue of such permit:

Provided that where the forest produce is removed from a sanctuary the same may be used for meeting the personal bona fide needs of the people living in and around the sanctuary and shall not be used for any commercial purpose.

Explanation.—For the purposes of this section, grazing or movement of livestock permitted under clause (d) of section 33 shall not be deemed to be an act prohibited under this section.`,
      },
      {
        number: "30",
        label: "Section 30",
        marginalNote: "Causing fire prohibited",
        source: src(20),
        summary:
          "No one may set fire to a sanctuary, kindle a fire, or leave any fire burning in it in a manner that endangers the sanctuary.",
        verbatim: `No person shall set fire to a sanctuary, or kindle any fire, or leave any fire burning, in a sanctuary, in such manner as to endanger such sanctuary.`,
      },
      {
        number: "31",
        label: "Section 31",
        marginalNote: "Prohibition of entry into sanctuary with weapon",
        source: src(20),
        summary:
          "Entry with any weapon requires the Chief Wild Life Warden's prior written permission.",
        verbatim: `No person shall enter a sanctuary with any weapon except with the previous permission in writing of the Chief Wild Life Warden or the authorised officer.`,
      },
      {
        number: "32",
        label: "Section 32",
        marginalNote: "Ban on use of injurious substances",
        source: src(20),
        summary:
          "Chemicals, explosives or any other substances that may injure or endanger wildlife may not be used inside a sanctuary.",
        verbatim: `No person shall use, in a sanctuary, chemicals, explosives or any other substances which may cause injury to, or endanger, any wild life in such sanctuary.`,
      },
      {
        number: "33",
        label: "Section 33",
        marginalNote: "Control of sanctuaries",
        source: src(20, 21),
        summary:
          "The Chief Wild Life Warden controls and maintains every sanctuary — building roads, bridges and fences (commercial tourist lodges, hotels, zoos and safari parks need National Board approval), securing wild animals, improving habitat and regulating or banning livestock grazing.",
        verbatim: `The Chief Wild Life Warden shall be the authority who shall control, manage and maintain all sanctuaries and for that purpose, within the limits of any sanctuary,—
(a) may construct such roads, bridges, buildings, fences or barrier gates, and carry out such other works as he may consider necessary for the purposes of such sanctuary:

Provided that no construction of commercial tourist lodges, hotels, zoos and safari parks shall be undertaken inside a sanctuary except with the prior approval of the National Board.

(b) shall take such steps as will ensure the security of wild animals in the sanctuary and the preservation of the sanctuary and wild animals therein;
(c) may take such measures, in the interests of wild life, as he may consider necessary for the improvement of any habitat;
(d) may regulate, control or prohibit, in keeping with the interests of wild life, the grazing or movement of livestock.`,
      },
      {
        number: "33A",
        label: "Section 33A",
        marginalNote: "Immunisation of live-stock",
        source: src(21),
        summary:
          "The Chief Wild Life Warden must arrange for livestock kept in or within 5 km of a sanctuary to be immunised against communicable diseases; no un-immunised livestock may enter a sanctuary.",
        verbatim: `(1) The Chief Wild Life Warden shall take such measures in such manner, as may be prescribed, for immunisation against communicable diseases of the live-stock kept in or within five kilometres of a sanctuary.

(2) No person shall take, or cause to be taken or grazed, any live-stock in a sanctuary without getting it immunised.`,
      },
      {
        number: "33B",
        label: "Section 33B",
        marginalNote: "Advisory Committee",
        source: src(21),
        summary:
          "Each State sets up an Advisory Committee headed by the Chief Wild Life Warden (or a Conservator of Forests) — with the local MLA, three Panchayati Raj reps, two NGOs, three conservationists, plus Home, Veterinary and the sanctuary's officer-in-charge — to advise on better conservation with people-participation.",
        verbatim: `(1) The State Government shall constitute an Advisory Committee consisting of the Chief Wild Life Warden or his nominee not below the rank of Conservator of Forests as its head and shall include a member of the State Legislature within whose constituency the sanctuary is situated, three representatives of Panchayati Raj Institutions, two representatives of non-governmental organisations and three individuals active in the field of wild life conservation, one representative each from departments dealing with Home and Veterinary matters, Honorary Wild Life Warden, if any, and the officer-in-charge of the sanctuary as Member-Secretary.

(2) The Committee shall render advice on measures to be taken for better conservation and management of the sanctuary including participation of the people living within and around the sanctuary.

(3) The Committee shall regulate its own procedure including quorum.`,
      },
      {
        number: "34",
        label: "Section 34",
        marginalNote: "Registration of certain persons in possession of arms",
        source: src(21),
        summary:
          "Within 3 months of a sanctuary's declaration, every Arms-Act licence-holder living in or within 10 km of it must apply to the Chief Wild Life Warden for registration. Fresh Arms-Act licences within 10 km of a sanctuary need the Chief Wild Life Warden's prior concurrence.",
        verbatim: `(1) Within three months from the declaration of any area as a sanctuary, every person residing in or within ten kilometres of any such sanctuary and holding a licence granted under the Arms Act, 1959, for the possession of arms or exempted from the provisions of that Act and possessing arms, shall apply in such form, on payment of such fee and within such time as may be prescribed, to the Chief Wild Life Warden or the authorised officer, for the registration of his name.

(2) On receipt of an application under sub-section (1), the Chief Wild Life Warden or the authorised officer shall register the name of the applicant in such manner as may be prescribed.

(3) No new licences under the Arms Act, 1959 shall be granted within a radius of ten kilometres of a sanctuary without the prior concurrence of the Chief Wild Life Warden.`,
      },
      {
        number: "35",
        label: "Section 35",
        marginalNote: "Declaration of National Parks",
        source: src(21, 22),
        summary:
          "The State declares a National Park by notification on ecological, faunal, floral, geomorphological or zoological grounds. The §§19–26A sanctuary rights-settlement applies (minus §24(2)(c)'s 'right continuation'). After claims and rights are settled and vested in the State, a final notification fixes the Park's limits and date. Boundaries cannot be altered without National Board recommendation. No grazing of livestock is permitted in a National Park. §§27, 28, 30–32, 33(a)/(b)/(c) and 33A apply mutatis mutandis.",
        verbatim: `(1) Whenever it appears to the State Government that an area, whether within a sanctuary or not, is, by reason of its ecological, faunal, floral, geomorphological or zoological association or importance, needed to be constituted as a National Park for the purpose of protecting, propagating or developing wild life therein or its environment, it may, by notification, declare its intention to constitute such area as a National Park.

Provided that where any part of the territorial waters is proposed to be included in such National Park, the provisions of section 26A shall, as far as may be, apply in relation to the declaration of a National Park as they apply in relation to the declaration of a sanctuary.

(2) The notification referred to in sub-section (1) shall define the limits of the area which is intended to be declared as a National Park.

(3) Where any area is intended to be declared as a National Park, the provisions of sections 19 to 26A (both inclusive except clause (c) of sub-section (2) of section 24) shall, as far as may be, apply to the investigation and determination of claims, and extinguishment of rights, in relation to any land in such area as they apply to the said matters in relation to any land in a sanctuary.

(4) When the following events have occurred, namely,—
(a) the period for preferring claims has elapsed, and all claims, if any, made in relation to any land in an area intended to be declared as a National Park, have been disposed of by the State Government, and
(b) all rights in respect of lands proposed to be included in the National Park have become vested in the State Government,
the State Government shall publish a notification specifying the limits of the area which shall be comprised within the National Park and declare that the said area shall be a National Park on and from such date as may be specified in the notification.

(5) No alteration of the boundaries of a National Park by the State Government shall be made except on a recommendation of the National Board.

(6) No person shall destroy, exploit or remove any wild life including forest produce from a National Park or destroy or damage or divert the habitat of any wild animal by any act whatsoever or divert, stop or enhance the flow of water into or outside the National Park, except under and in accordance with a permit granted by the Chief Wild Life Warden, and no such permit shall be granted unless the State Government being satisfied in consultation with the National Board that such removal of wild life from the National Park or the change in the flow of water into or outside the National Park is necessary for the improvement and better management of wild life therein, authorises the issue of such permit:

Provided that where the forest produce is removed from a National Park, the same may be used for meeting the personal bona fide needs of the people living in and around the National Park and shall not be used for any commercial purpose.

(7) No grazing of any live-stock shall be permitted in a National Park and no live-stock shall be allowed to enter therein except where such live-stock is used as a vehicle by a person authorised to enter such National Park.

(8) The provisions of sections 27 and 28, sections 30 to 32 (both inclusive), and clauses (a), (b) and (c) of section 33, section 33A shall, as far as may be, apply in relation to a National Park as they apply in relation to a sanctuary.

Explanation.—For the purposes of this section, in case of an area, whether within a sanctuary or not, where the rights have been extinguished and the land has become vested in the State Government under any Act or otherwise, such area may be notified by it, by a notification, as a National Park and the proceedings under sections 19 to 26 (both inclusive) and the provisions of sub-sections (3) and (4) of this section shall not apply.`,
      },
      {
        number: "36",
        label: "Section 36",
        marginalNote: "[Omitted] — Declaration of game reserve",
        source: src(22),
        summary:
          "Repealed by the Wild Life (Protection) Amendment Act, 1991. The earlier 'game reserve' category was abolished.",
        verbatim: `Omitted by the Wild Life (Protection) Amendment Act, 1991 (44 of 1991), section 24, with effect from 2 October 1991.`,
      },
      {
        number: "36A",
        label: "Section 36A",
        marginalNote: "Declaration and management of a conservation reserve",
        source: src(22, 23),
        summary:
          "The State, after consulting local communities, may declare Government-owned land adjacent to a National Park/sanctuary or linking two protected areas a conservation reserve for protecting landscapes, seascapes, flora, fauna and habitat. Central-Government land needs Centre concurrence. Key sanctuary provisions (§§18(2), 27(2)–(4), 30, 32, 33(b)–(c)) apply.",
        verbatim: `(1) The State Government may, after having consultations with the local communities, declare any area owned by the Government, particularly the areas adjacent to National Parks and sanctuaries and those areas which link one protected area with another, as a conservation reserve for protecting landscapes, seascapes, flora and fauna and their habitat:

Provided that where the conservation reserve includes any land owned by the Central Government, its prior concurrence shall be obtained before making such declaration.

(2) The provisions of sub-section (2) of section 18, sub-sections (2), (3) and (4) of section 27, sections 30, 32 and clauses (b) and (c) of section 33 shall, as far as may be, apply in relation to a conservation reserve as they apply in relation to a sanctuary.`,
      },
      {
        number: "36B",
        label: "Section 36B",
        marginalNote: "Conservation reserve management committee",
        source: src(23),
        summary:
          "Each conservation reserve gets a management committee chaired by a Forest/Wild Life officer (Member-Secretary), with one rep per Village Panchayat in jurisdiction, three NGOs in wildlife conservation, and one rep each from Agriculture and Animal Husbandry departments.",
        verbatim: `(1) The State Government shall constitute a conservation reserve management committee to advise the Chief Wild Life Warden to conserve, manage and maintain the conservation reserve.

(2) The committee shall consist of a representative of the forest or Wild Life Department, who shall be the Member-Secretary of the Committee, one representative of each Village Panchayat in whose jurisdiction the reserve is located, three representatives of non-governmental organisations working in the field of wild life conservation and one representative each from the Department of Agriculture and Animal Husbandry.

(3) The Committee shall regulate its own procedure including the quorum.`,
      },
      {
        number: "36C",
        label: "Section 36C",
        marginalNote: "Declaration and management of community reserve",
        source: src(23),
        summary:
          "Where a community or individual volunteers to conserve wildlife and habitat, the State may declare private or community land (outside a Park/sanctuary/conservation reserve) a community reserve for fauna, flora and traditional/cultural conservation. After notification, land-use change requires the management committee's resolution and State approval.",
        verbatim: `(1) The State Government may, where the community or an individual has volunteered to conserve wild life and its habitat, declare any private or community land not comprised within a National Park, sanctuary or a conservation reserve, as a community reserve, for protecting fauna, flora and traditional or cultural conservation values and practices.

(2) The provisions of sub-section (2) of section 18, sub-sections (2), (3) and (4) of section 27, sections 30, 32 and clauses (b) and (c) of section 33 shall, as far as may be, apply in relation to a community reserve as they apply in relation to a sanctuary.

(3) After the issue of notification under sub-section (1), no change in the land use pattern shall be made within the community reserve, except in accordance with a resolution passed by the management committee and approval of the same by the State Government.`,
      },
      {
        number: "36D",
        label: "Section 36D",
        marginalNote: "Community reserve management committee",
        source: src(23),
        summary:
          "The committee comprises five Panchayat (or Gram Sabha) nominees plus one Forest/Wild Life rep; it prepares and implements the management plan, protects wildlife, and elects a Chairman who is also the Honorary Wild Life Warden for the reserve.",
        verbatim: `(1) The State Government shall constitute a Community Reserve management committee, which shall be the authority responsible for conserving, maintaining and managing the community reserve.

(2) The committee shall consist of five representatives nominated by the Village Panchayat or where such Panchayat does not exist by the members of the Gram Sabha and one representative of the State Forests or Wild Life Department under whose jurisdiction the community reserve is located.

(3) The committee shall be the competent authority to prepare and implement the management plan for the community reserve and to take steps to ensure the protection of wild life and its habitat in the reserve.

(4) The committee shall elect a Chairman who shall also be the Honorary Wild Life Warden on the community reserve.

(5) The committee shall regulate its own procedure including the quorum.`,
      },
      {
        number: "37",
        label: "Section 37",
        marginalNote: "[Omitted] — Declaration of closed area",
        source: src(23),
        summary:
          "Repealed by the Wild Life (Protection) Amendment Act, 2002, with effect from 1 April 2003.",
        verbatim: `Omitted by the Wild Life (Protection) Amendment Act, 2002 (16 of 2003), section 21, with effect from 1 April 2003.`,
      },
      {
        number: "38",
        label: "Section 38",
        marginalNote: "Power of Central Government to declare areas as sanctuaries or National Parks",
        source: src(23, 24),
        summary:
          "Where the State leases or transfers an area to the Centre (outside an existing sanctuary), the Centre — if the §18 or §35 conditions are met — may itself declare it a sanctuary or National Park. For such central protected areas, the Director (or Director-authorised officer) exercises the Chief Wild Life Warden's powers, and references to the State Government and State Legislature read as Central Government and Parliament.",
        verbatim: `(1) Where the State Government leases or otherwise transfers any area under its control, not being an area within a sanctuary, to the Central Government, the Central Government may, if it is satisfied that the conditions specified in section 18 are fulfilled in relation to the area so transferred to it, declare such area, by notification, to be a sanctuary and the provisions of sections 18 to 35 (both inclusive), 54 and 55 shall apply in relation to such sanctuary as they apply in relation to a sanctuary declared by the State Government.

(2) The Central Government may, if it is satisfied that the conditions specified in section 35 are fulfilled in relation to any area referred to in sub-section (1), whether or not such area has been declared, to be a sanctuary by the Central Government or the State Government, declare such area, by notification, to be a National Park and the provisions of sections 35, 54 and 55 shall apply in relation to such National Park as they apply in relation to a National Park declared by the State Government.

(3) In relation to a sanctuary or National Park declared by the Central Government, the powers and duties of the Chief Wild Life Warden under the sections referred to in sub-sections (1) and (2), shall be exercised and discharged by the Director or by such other officer as may be authorised by the Director in this behalf and references, in the sections aforesaid, to the State Government shall be construed as references to the Central Government and reference therein to the Legislature of the State shall be construed as a reference to Parliament.`,
      },
    ],
  },

  // ============================================================
  // Chapter IVA — Central Zoo Authority and Recognition of Zoos (Inserted 1991)
  // ============================================================
  {
    slug: "ch-4a-central-zoo-authority",
    number: "IVA",
    title: "Central Zoo Authority and Recognition of Zoos",
    range: ["38A", "38J"],
    intro:
      "Inserted by the 1991 amendment after the 1990 Supreme Court directive in Animal Welfare Board v. Union of India, this chapter constitutes the Central Zoo Authority — a Central Government body of up to twelve members — to set minimum standards for housing, upkeep and veterinary care, recognise (and de-recognise) every zoo in the country, identify endangered species for captive breeding, coordinate stud-books, and provide technical assistance. After 2003, no zoo can be established without the Authority's prior approval, and no animal listed in Schedules I or II can move in or out of any zoo without its permission.",
    sections: [
      {
        number: "38A",
        label: "Section 38A",
        marginalNote: "Constitution of Central Zoo Authority",
        source: src(24),
        summary:
          "The Centre constitutes the Authority with a Chairperson, up to ten members, and a Member-Secretary — all appointed by the Central Government.",
        verbatim: `(1) The Central Government shall constitute a body to be known as the Central Zoo Authority (hereinafter in this Chapter referred to as the Authority), to exercise the powers conferred on, and to perform the functions assigned to it under this Act.

(2) The Authority shall consist of—
(a) chairperson;
(b) such number of members not exceeding ten; and
(c) Member-Secretary,
to be appointed by the Central Government.`,
      },
      {
        number: "38B",
        label: "Section 38B",
        marginalNote: "Term of office and conditions of service of Chairperson and members, etc.",
        source: src(24, 25),
        summary:
          "Chairperson and members serve up to three years; the Centre can remove on grounds of insolvency, moral-turpitude conviction, unsoundness of mind, refusal/incapacity, three-consecutive-meeting absence or office abuse — always after a hearing.",
        verbatim: `(1) The chairperson and every member other than the Member-Secretary shall hold office for such period, not exceeding three years, as may be specified by the Central Government in this behalf.

(2) The chairperson or a member may by writing under his hand addressed to the Central Government, resign from the office of chairperson or, as the case may be, of the member.

(3) The Central Government shall remove a person from the office of chairperson or member referred to in sub-section (2) if that person—
(a) becomes an undischarged insolvent;
(b) gets convicted and sentenced to imprisonment for an offence which in the opinion of the Central Government involves moral turpitude;
(c) becomes of unsound mind and stands so declared by a competent court;
(d) refuses to act or becomes incapable of acting;
(e) is, without obtaining leave of absence from the authority, absent from three consecutive meetings of the Authority; or
(f) in the opinion of the Central Government has so abused the position of chairperson or member as to render that person's continuance in office detrimental to the public interest:

Provided that no person shall be removed under this clause unless that person has been given a reasonable opportunity of being heard in the matter.

(4) A vacancy caused under sub-section (2) or otherwise shall be filled by fresh appointment.

(5) The salaries and allowances and other conditions of appointment of chairperson, members and Member-Secretary of the Authority shall be such as may be prescribed.

(6) The Authority shall, with the previous sanction of the Central Government, employ such officers and other employees as it deems necessary to carry out the purposes of the Authority.

(7) The terms and conditions of service of the officers and other employees of the Authority shall be such as may be prescribed.

(8) No act or proceeding of the Authority shall be questioned or shall be invalid on the ground merely of the existence of any vacancies or defect in the constitution of the Authority.`,
      },
      {
        number: "38C",
        label: "Section 38C",
        marginalNote: "Functions of the Authority",
        source: src(25),
        summary:
          "Sets minimum housing/veterinary standards, evaluates zoo performance, recognises or de-recognises zoos, identifies endangered species for captive breeding, runs stud-books, coordinates animal exchanges and training, and provides technical assistance.",
        verbatim: `The Authority shall perform the following functions, namely:—
(a) specify the minimum standards for housing, upkeep and veterinary care of the animals kept in a zoo;
(b) evaluate and assess the functioning of zoos with respect to the standards or the norms as may be prescribed;
(c) recognise or derecognise zoos;
(d) identify endangered species of wild animals for purposes of captive breeding and assigning responsibility in this regard to a zoo;
(e) co-ordinate the acquisition, exchange and loaning of animals for breeding purposes;
(f) ensure maintenance of stud-books of endangered species of wild animals bred in captivity;
(g) identify priorities and themes with regard to display of captive animals in a zoo;
(h) co-ordinate training of zoo personnel in India and outside India;
(i) co-ordinate research in captive breeding and educational programmes for the purposes of zoos;
(j) provide technical and other assistance to zoos for their proper management and development on scientific lines;
(k) perform such other functions as may be necessary to carry out the purposes of this Act with regard to zoos.`,
      },
      {
        number: "38D",
        label: "Section 38D",
        marginalNote: "Procedure to be regulated by the Authority",
        source: src(25),
        summary:
          "The Authority meets at the Chairperson's discretion, sets its own procedure, and authenticates its orders through the Member-Secretary or a duly authorised officer.",
        verbatim: `(1) The Authority shall meet as and when necessary and shall meet at such time and place as the chairperson may think fit.

(2) The Authority shall regulate its own procedure.

(3) All orders and decisions of the Authority shall be authenticated by the Member-Secretary or any other officer of the Authority duly authorised by the Member-Secretary in this behalf.`,
      },
      {
        number: "38E",
        label: "Section 38E",
        marginalNote: "Grants and loans to Authority and Constitution of Fund",
        source: src(25, 26),
        summary:
          "The Centre funds the Authority through grants and loans. A statutory \"Central Zoo Authority Fund\" pools all Government grants, loans, fees and charges — applied to salaries and the Authority's chapter-related functions. Accounts are audited by the CAG and laid before Parliament.",
        verbatim: `(1) The Central Government may, after due appropriation made by Parliament by law in this behalf, make to the Authority grants and loans of such sums of money as that Government may consider necessary.

(2) There shall be constituted a Fund to be called the Central Zoo Authority Fund and there shall be credited thereto any grants and loans made to the Authority by the Central Government, all fees and charges received by the Authority under this Act and all sums received by the Authority from such other sources as may be decided upon by the Central Government.

(3) The Fund referred to in sub-section (2) shall be applied for meeting salary, allowances and other remuneration of the members, officers and other employees of the Authority and the expenses of the Authority in the discharge of its functions under this Chapter and expenses on objects and for purposes authorised by this Act.

(4) The Authority shall maintain proper accounts and other relevant records and prepare an annual statement of accounts in such form as may be prescribed by the Central Government in consultation with the Comptroller and Auditor-General of India.

(5) The accounts of the Authority shall be audited by the Comptroller and Auditor-General at such intervals as may be specified by him and any expenditure incurred in connection with such audit shall be payable by the Authority to the Comptroller and Auditor-General.

(6) The Comptroller and Auditor-General and any person appointed by him in connection with the audit of the accounts of the Authority under this Act shall have the same rights and privileges and the authority in connection with such audit as the Comptroller and Auditor-General generally has in connection with the audit of the Government accounts and, in particular, shall have the right to demand the production of books, accounts, connected vouchers and other documents and papers and to inspect any of the offices of the Authority.

(7) The accounts of the Authority, as certified by the Comptroller and Auditor-General or any other person appointed by him in this behalf, together with the audit report thereon, shall be forwarded annually to the Central Government by the Authority.`,
      },
      {
        number: "38F",
        label: "Section 38F",
        marginalNote: "Annual report",
        source: src(26),
        summary:
          "The Authority prepares an annual report each financial year — in the prescribed form, by the prescribed date — and forwards it to the Centre.",
        verbatim: `The Authority shall prepare in such form and at such time, for each financial year, as may be prescribed, its annual report, giving a full account of its activities during the previous financial year and forward a copy thereof to the Central Government.`,
      },
      {
        number: "38G",
        label: "Section 38G",
        marginalNote: "Annual report and audit report to be laid before Parliament",
        source: src(26),
        summary:
          "The Centre lays the Authority's annual report (with an action-taken memorandum on every recommendation and reasons for any non-acceptance) and the audit report before both Houses of Parliament.",
        verbatim: `The Central Government shall cause the annual report together with a memorandum of action taken on the recommendations contained therein, in so far as they relate to the Central Government, and the reasons for the non-acceptance, if any, of any of such recommendations and the audit report to be laid as soon as may be after the reports are received before each House of Parliament.`,
      },
      {
        number: "38H",
        label: "Section 38H",
        marginalNote: "Recognition of zoos",
        source: src(26),
        summary:
          "No zoo can operate without Authority recognition. Pre-1991 zoos got grace windows; post-2003 zoos need Authority pre-approval before establishment. Recognition decisions are subject to a 30-day appeal to the Centre.",
        verbatim: `(1) No zoo shall be operated without being recognised by the Authority:

Provided that a zoo being operated immediately before the date of commencement of the Wild Life (Protection) (Amendment) Act, 1991 may continue to operate without being recognised for a period of eighteen months from the date of such commencement and if the application seeking recognition is made within that period, the zoo may continue to be operated until the said application is finally decided or withdrawn and in case of refusal for a further period of six months from the date of such refusal.

(1A) On and after the commencement of the Wild Life (Protection) Amendment Act, 2002, a zoo shall not be established without obtaining the prior approval of the Authority.

(2) Every application for recognition of a zoo shall be made to the Authority in such form and on payment of such fee as may be prescribed.

(3) Every recognition shall specify the conditions, if any, subject to which the applicant shall operate the zoo.

(4) No recognition to a zoo shall be granted unless the Authority, having due regard to the interests of protection and conservation of wild life, and such standards, norms and other matters as may be prescribed, is satisfied that recognition should be granted.

(5) No application for recognition of a zoo shall be rejected unless the applicant has been given a reasonable opportunity of being heard.

(6) The Authority may, for reasons to be recorded by it, suspend or cancel any recognition granted under sub-section (4):

Provided that no such suspension or cancellation shall be made except after giving the person operating the zoo a reasonable opportunity of being heard.

(7) An appeal from an order refusing to recognise a zoo under sub-section (5) or an order suspending or cancelling a recognition under sub-section (6) shall lie to the Central Government.

(8) An appeal under sub-section (7) shall be preferred within thirty days from the date of communication to the applicant of the order appealed against:

Provided that the Central Government may admit any appeal preferred after the expiry of the period aforesaid if it is satisfied that the appellant had sufficient cause for not preferring the appeal in time.`,
      },
      {
        number: "38-I",
        label: "Section 38-I",
        marginalNote: "Acquisition of animals by a zoo",
        source: src(27),
        summary:
          "No zoo may acquire, sell or transfer any Schedule I or II animal without the Authority's prior permission, and any such transfer must be between recognised zoos only.",
        verbatim: `(1) Subject to the other provisions of this Act, no zoo shall acquire, sell or transfer any wild animal or captive animal specified in Schedules I and II except with the previous permission of the Authority.

(2) No zoo shall acquire, sell or transfer any wild or captive animal except from or to a recognised zoo.`,
      },
      {
        number: "38J",
        label: "Section 38J",
        marginalNote: "Prohibition of teasing, etc., in a zoo",
        source: src(27),
        summary:
          "Teasing, molesting, injuring or feeding zoo animals — or disturbing them with noise — or littering zoo grounds is barred. The penalty (§51(1B)) is up to six months' jail or ₹2,000 fine, doubling on repeat offence.",
        verbatim: `No person shall tease, molest, injure or feed any animal or cause disturbance to the animals by noise or otherwise, or litter the grounds in a zoo.`,
      },
    ],
  },

  // ============================================================
  // Chapter IVB — National Tiger Conservation Authority (Inserted 2006)
  // ============================================================
  {
    slug: "ch-4b-tiger-conservation",
    number: "IVB",
    title: "National Tiger Conservation Authority",
    range: ["38K", "38X"],
    intro:
      "Inserted by the 2006 amendment after the Sariska crisis and the recommendations of the Tiger Task Force, this chapter statutorily constitutes the National Tiger Conservation Authority (NTCA) — chaired by the Environment & Forests Minister — and gives it powers to approve State Tiger Conservation Plans, notify tiger reserves with core (inviolate) and buffer zones, prevent ecologically unsustainable land use inside tiger reserves, and bar de-notification without National Board approval. Tribal and forest-dweller rights cannot be adversely affected without informed Gram Sabha consent and a complete relief-and-rehabilitation package. Each tiger reserve State must also set up a Tiger Conservation Foundation.",
    sections: [
      {
        number: "38K",
        label: "Section 38K",
        marginalNote: "Definitions",
        source: src(27),
        summary:
          "Defines five terms used throughout Chapter IVB: National Tiger Conservation Authority, Steering Committee, Tiger Conservation Foundation, tiger reserve State, and tiger reserve.",
        verbatim: `In this Chapter,—
(a) "National Tiger Conservation Authority" means the Tiger Conservation Authority constituted under section 38L;
(b) "Steering Committee" means the Committee constituted under section 38U;
(c) "Tiger Conservation Foundation" means the foundation established under section 38X;
(d) "tiger reserve State" means a State having tiger reserve;
(e) "tiger reserve" means the areas notified as such under section 38V.`,
      },
      {
        number: "38L",
        label: "Section 38L",
        marginalNote: "Constitution of National Tiger Conservation Authority",
        source: src(27, 28),
        summary:
          "The Environment & Forests Minister chairs the NTCA; the Minister of State is Vice-Chair. Membership includes three MPs, eight wildlife/tribal experts, key Secretaries, six rotating Chief Wild Life Wardens, the Chairpersons of the National Commissions for SCs and STs, and a Member-Secretary of Joint-Secretary rank.",
        verbatim: `(1) The Central Government shall constitute a body to be known as the National Tiger Conservation Authority (hereinafter in this Chapter referred to as the Tiger Conservation Authority), to exercise the powers conferred on, and to perform the functions assigned to it under this Act.

(2) The Tiger Conservation Authority shall consist of the following members, namely:—
(a) the Minister in charge of the Ministry of Environment and Forests — Chairperson;
(b) the Minister of State in the Ministry of Environment and Forests — Vice-Chairperson;
(c) three members of Parliament of whom two shall be elected by the House of the People and one by the Council of States;
(d) eight experts or professionals having prescribed qualifications and experience in conservation of wild life and welfare of people living in tiger reserve out of which at least two shall be from the field of tribal development;
(e) Secretary, Ministry of Environment and Forests;
(f) Director General of Forests and Special Secretary, Ministry of Environment and Forests;
(g) Director, Wild Life Preservation, Ministry of Environment and Forests;
(h) six Chief Wild Life Wardens from the tiger reserve States in rotation for three years;
(i) an officer not below the rank of Joint Secretary and Legislative Counsel from the Ministry of Law and Justice;
(j) Secretary, Ministry of Tribal Affairs;
(k) Secretary, Ministry of Social Justice and Empowerment;
(l) Chairperson, National Commission for the Scheduled Tribes;
(m) Chairperson, National Commission for the Scheduled Castes;
(n) Secretary, Ministry of Panchayati Raj;
(o) Inspector-General of Forests or an officer of the equivalent rank having at least ten years experience in a tiger reserve or wildlife management, who shall be the Member-Secretary,
to be notified by the Central Government, in the Official Gazette.

(3) It is hereby declared that the office of member of the Tiger Conservation Authority shall not disqualify its holder for being chosen as, or for being, a member of either House of Parliament.`,
      },
      {
        number: "38M",
        label: "Section 38M",
        marginalNote: "Term of office and conditions of service of members",
        source: src(28),
        summary:
          "Expert members serve up to three years; removable on grounds of insolvency, moral-turpitude conviction, unsoundness, refusal/incapacity, three-consecutive-meeting absence or office abuse — after hearing. Vacancies are filled by fresh appointment for the unexpired term.",
        verbatim: `(1) A member nominated under clause (d) of sub-section (2) of section 38L shall hold office for such period not exceeding three years:

Provided that a member may, by writing under his hand addressed to the Central Government, resign from his office.

(2) The Central Government shall remove a member referred to in clause (d) of sub-section (2) of section 38L, from office if he—
(a) is, or at any time has been, adjudicated as insolvent;
(b) has been convicted of an offence which, in the opinion of the Central Government, involves moral turpitude;
(c) is of unsound mind and stands so declared by a competent court;
(d) refuses to act or becomes incapable of acting;
(e) is, without obtaining leave of absence from the Tiger Conservation Authority, absent from three consecutive meetings of the said Authority; or
(f) has, in the opinion of the Central Government, so abused his position as to render his continuation in office detrimental to the public interest:

Provided that no member shall be removed under this sub-section unless he has been given a reasonable opportunity of being heard in the matter.

(3) Any vacancy in the office of a member shall be filled by fresh appointment and such member shall continue for the remainder of the term of the member in whose place he is appointed.

(4) The salaries and allowances and other conditions of appointment of the members of the Tiger Conservation Authority shall be such as may be prescribed.

(5) No act or proceeding of the Tiger Conservation Authority shall be questioned or shall be invalid on the ground merely of the existence of any vacancy or defect in the constitution of the Tiger Conservation Authority.`,
      },
      {
        number: "38N",
        label: "Section 38N",
        marginalNote: "Officers and employees of Tiger Conservation Authority",
        source: src(28),
        summary:
          "The NTCA may appoint officers and employees with Centre sanction. Existing Project Tiger staff carry over to the NTCA on the same tenure and conditions (with a six-month opt-out window).",
        verbatim: `(1) The Tiger Conservation Authority may, with the previous sanction of the Central Government, appoint such other officers and employees as it considers necessary for the efficient discharge of its functions under this Act:

Provided that the officers and employees holding office under the Directorate of Project Tiger and dealing with Project Tiger immediately before the date of constitution of the Tiger Conservation Authority shall continue to hold office in the said Authority by the same tenure and upon the same terms and conditions of service or until the expiry of the period of six months from that date if such employee opts not to be the employee of that Authority.

(2) The terms and conditions of service of the officers and other employees of the Tiger Conservation Authority shall be such as may be prescribed.`,
      },
      {
        number: "38-O",
        label: "Section 38-O",
        marginalNote: "Powers and functions of Tiger Conservation Authority",
        source: src(29),
        summary:
          "The NTCA's eleven powers — approve Tiger Conservation Plans, disallow mining/industry/projects inside tiger reserves, set tourism norms, manage man-animal conflict, monitor populations and habitat, coordinate research, protect tiger corridors from diversion, support eco-development, and issue binding directions for tiger protection (without affecting Scheduled-Tribe rights).",
        verbatim: `(1) The Tiger Conservation Authority shall have the following powers and perform the following functions, namely:—
(a) to approve the Tiger Conservation Plan prepared by the State Government under sub-section (5) of section 38V of this Act;
(b) evaluate and assess various aspects of sustainable ecology and disallow any ecologically unsustainable land use such as, mining, industry and other projects within the tiger reserves;
(c) lay down normative standards for tourism activities and guidelines for project tiger from time to time for tiger conservation in the buffer and core area of tiger reserves and ensure their due compliance;
(d) provide for management focus and measures for addressing conflicts of men and wild animals and to emphasise on co-existence in forest areas outside the National Parks, sanctuaries or tiger reserve, in the working plan code;
(e) provide information on protection measures including future conservation plan, estimation of population of tiger and its natural prey species, status of habitats, disease surveillance, mortality survey, patrolling, reports on untoward happenings and such other management aspects as it may deem fit including future plan conservation;
(f) approve, co-ordinate research and monitoring on tiger, co-predators, prey, habitat, related ecological and socio-economic parameters and their evaluation;
(g) ensure that the tiger reserves and areas linking one protected area or tiger reserve with another protected area or tiger reserve are not diverted for ecologically unsustainable uses, except in public interest and with the approval of the National Board for Wild Life and on the advice of the Tiger Conservation Authority;
(h) facilitate and support the tiger reserve management in the State for biodiversity conservation initiatives through eco-development and people's participation as per approved management plans and to support similar initiatives in adjoining areas consistent with the Central and State laws;
(i) ensure critical support including scientific, information technology and legal support for better implementation of the tiger conservation plan;
(j) facilitate ongoing capacity building programme for skill development of officers and staff of tiger reserves; and
(k) perform such other functions as may be necessary to carry out the purposes of this Act with regard to conservation of tigers and their habitat.

(2) The Tiger Conservation Authority may, in the exercise of its powers and performance of its functions under this Chapter, issue directions in writing to any person, officer or authority for the protection of tiger or tiger reserves and such person, officer or authority shall be bound to comply with the directions:

Provided that no such direction shall interfere with or affect the rights of local people particularly the Scheduled Tribes.`,
      },
      {
        number: "38P",
        label: "Section 38P",
        marginalNote: "Procedure to be regulated by Tiger Conservation Authority",
        source: src(29),
        summary:
          "The NTCA meets at the Chairperson's discretion (Vice-Chair presides in absence), sets its own procedure, and authenticates orders through the Member-Secretary.",
        verbatim: `(1) The Tiger Conservation Authority shall meet at such time and at such place as the Chairperson may think fit.

(2) The Chairperson or in his absence the Vice-Chairperson shall preside over the meetings of the Tiger Conservation Authority.

(3) The Tiger Conservation Authority shall regulate its own procedure.

(4) All orders and decisions of the Tiger Conservation Authority shall be authenticated by the Member-Secretary or any other officer of the said Authority duly authorised by the Member-Secretary in this behalf.`,
      },
      {
        number: "38Q",
        label: "Section 38Q",
        marginalNote: "Grants and loans to Tiger Conservation Authority and Constitution of Fund",
        source: src(30),
        summary:
          "The Centre funds the NTCA via grants and loans. The \"Tiger Conservation Authority Fund\" pools all Centre grants, fees and other authorised sums, applied solely to salaries, allowances and the NTCA's chapter functions.",
        verbatim: `(1) The Central Government may, after due appropriation made by Parliament by law in this behalf, make to the Tiger Conservation Authority grants and loans of such sums of money as that Government may consider necessary.

(2) There shall be constituted a Fund to be called the Tiger Conservation Authority Fund and there shall be credited thereto—
(i) any grants and loans made to the Tiger Conservation Authority by the Central Government;
(ii) all fees and charges received by the Tiger Conservation Authority under this Act; and
(iii) all sums received by the Authority from such other sources as may be decided upon by the Central Government.

(3) The Fund referred to in sub-section (2) shall be applied for meeting salary, allowances and other remuneration of the members, officers and other employees of the Tiger Conservation Authority and the expenses of the Tiger Conservation Authority incurred in the discharge of its functions under this Chapter.`,
      },
      {
        number: "38R",
        label: "Section 38R",
        marginalNote: "Accounts and audit of Tiger Conservation Authority",
        source: src(30),
        summary:
          "NTCA accounts are audited by the CAG with full civil-court-grade audit powers; certified accounts and the audit report are forwarded annually to the Centre.",
        verbatim: `(1) The Tiger Conservation Authority shall maintain proper accounts and other relevant records and prepare an annual statement of accounts in such form as may be prescribed by the Central Government in consultation with the Comptroller and Auditor-General of India.

(2) The accounts of the Tiger Conservation Authority shall be audited by the Comptroller and Auditor-General of India at such intervals as may be specified by him and any expenditure incurred in connection with such audit shall be payable by the Tiger Conservation Authority to the Comptroller and Auditor-General of India.

(3) The Comptroller and Auditor-General of India and any other person appointed by him in connection with the audit of the accounts of the Tiger Conservation Authority shall have the same rights and privileges and authority in connection with such audit as the Comptroller and Auditor-General generally has in connection with the audit of the Government accounts and, in particular, shall have the right to demand the production of books, accounts, connected vouchers and other documents and papers and to inspect the office of the Tiger Conservation Authority.

(4) The accounts of the Tiger Conservation Authority as certified by the Comptroller and Auditor-General of India or any other person appointed by him in this behalf together with the audit report thereon, shall be forwarded annually to the Central Government by the Tiger Conservation Authority.`,
      },
      {
        number: "38S",
        label: "Section 38S",
        marginalNote: "Annual report of Tiger Conservation Authority",
        source: src(30),
        summary:
          "The NTCA submits an annual report each financial year — in the prescribed form, by the prescribed date — to the Central Government.",
        verbatim: `The Tiger Conservation Authority shall prepare in such form and at such time, for each financial year, as may be prescribed, its annual report, giving a full account of its activities during the previous financial year and forward a copy thereof to the Central Government.`,
      },
      {
        number: "38T",
        label: "Section 38T",
        marginalNote: "Annual report and audit report to be laid before Parliament",
        source: src(30),
        summary:
          "The Centre lays the NTCA's annual report (with an action-taken memorandum and reasons for non-acceptance of any recommendation) and the audit report before each House of Parliament.",
        verbatim: `The Central Government shall cause the annual report together with a memorandum of action taken on the recommendations contained therein, insofar as they relate to the Central Government, and the reasons for the non-acceptance, if any, of any of such recommendations, and the audit report to be laid, as soon as may be after the reports are received, before each House of Parliament.`,
      },
      {
        number: "38U",
        label: "Section 38U",
        marginalNote: "Constitution of Steering Committee",
        source: src(30, 31),
        summary:
          "Each tiger-range State may constitute a Steering Committee — Chief Minister as Chair, Wild Life Minister as Vice-Chair — with Field Directors, tribal-affairs officials, wildlife/tribal experts, Tribal Advisory Council members, and the State Chief Wild Life Warden as ex officio Member-Secretary.",
        verbatim: `(1) The State Government may constitute a Steering Committee for ensuring co-ordination, monitoring, protection and conservation of tiger, co-predators and prey animals within the tiger range States.

(2) The Steering Committee shall consist of—
(a) the Chief Minister — Chairperson;
(b) the Minister in-charge of Wild Life — Vice-Chairperson;
(c) such number of official members not exceeding five including at least two Field Directors of tiger reserve or Director of National Park and one from the State Government's Departments dealing with tribal affairs;
(d) three experts or professionals having qualifications and experience in conservation of wild life of which at least one shall be from the field of tribal development;
(e) two members from the State's Tribal Advisory Council;
(f) one representative each from State Government's Departments dealing with Panchayati Raj and Social Justice and Empowerment;
(g) Chief Wild Life Warden of the State shall be the Member-Secretary, ex officio,
to be notified by the State Government, in the Official Gazette.`,
      },
      {
        number: "38V",
        label: "Section 38V",
        marginalNote: "Tiger Conservation Plan",
        source: src(31, 32),
        summary:
          "The State notifies a tiger reserve on NTCA recommendation. Each reserve has a \"core or critical tiger habitat\" (scientifically inviolate) and a peripheral buffer area for co-existence. The State prepares a Tiger Conservation Plan ensuring habitat protection, ecologically compatible land use and livelihood concerns. Scheduled Tribes and other forest dwellers cannot be resettled without complete rights recognition, expert ecological/social opinion, exhausted co-existence options, Gram Sabha consent, and a full R&R package.",
        verbatim: `(1) The State Government shall, on the recommendation of the Tiger Conservation Authority, notify an area as a tiger reserve.

(2) The provisions of sub-section (2) of section 18, sub-sections (2), (3) and (4) of section 27, sections 30, 32 and clauses (b) and (c) of section 33 of this Act shall, as far as may be, apply in relation to a tiger reserve as they apply in relation to a sanctuary.

(3) The State Government shall prepare a Tiger Conservation Plan including staff development and deployment plan for the proper management of each area referred to in sub-section (1), so as to ensure—
(a) protection of tiger reserve and providing site specific habitat inputs for a viable population of tigers, co-predators and prey animals without distorting the natural prey-predator ecological cycle in the habitat;
(b) ecologically compatible land uses in the tiger reserves and areas linking one protected area or tiger reserve with another for addressing the livelihood concerns of local people, so as to provide dispersal habitats and corridor for spill over population of wild animals from the designated core areas of tiger reserves or from tiger breeding habitats within other protected areas;
(c) the forestry operations of regular forest divisions and those adjoining tiger reserves are not incompatible with the needs of tiger conservation.

(4) Subject to the provisions contained in this Act, the State Government shall, while preparing a Tiger Conservation Plan, ensure the agricultural, livelihood, developmental and other interests of the people living in tiger bearing forests or a tiger reserve.

Explanation.—For the purposes of this section, the expression "tiger reserve" includes—
(i) core or critical tiger habitat areas of National Parks and sanctuaries, where it has been established, on the basis of scientific and objective criteria, that such areas are required to be kept as inviolate for the purposes of tiger conservation, without affecting the rights of the Scheduled Tribes or such other forest dwellers, and notified as such by the State Government in consultation with an Expert Committee constituted for the purpose;
(ii) buffer or peripheral area consisting of the area peripheral to critical tiger habitat or core area, identified and established in accordance with the provisions contained in Explanation (i) above, where a lesser degree of habitat protection is required to ensure the integrity of the critical tiger habitat with adequate dispersal for tiger species, and which aim at promoting co-existence between wildlife and human activity with due recognition of the livelihood, developmental, social and cultural rights of the local people, wherein the limits of such areas are determined on the basis of scientific and objective criteria in consultation with the concerned Gram Sabha and an Expert Committee constituted for the purpose.

(5) Save as for voluntary relocation on mutually agreed terms and conditions, provided that such terms and conditions satisfy the requirements laid down in this sub-section, no Scheduled Tribes or other forest dwellers shall be resettled or have their rights adversely affected for the purpose of creating inviolate areas for tiger conservation unless—
(i) the process of recognition and determination of rights and acquisition of land or forest rights of the Scheduled Tribes and such other forest dwelling persons is complete;
(ii) the concerned agencies of the State Government, in exercise of their powers under this Act, establishes with the consent of the Scheduled Tribes and such other forest dwellers in the area, and in consultation with an ecological and social scientist familiar with the area, that the activities of the Scheduled Tribes and other forest dwellers or the impact of their presence upon wild animals is sufficient to cause irreversible damage and shall threaten the existence of tigers and their habitat;
(iii) the State Government, after obtaining the consent of the Scheduled Tribes and other forest dwellers inhabiting the area, and in consultation with an independent ecological and social scientist familiar with the area, has come to a conclusion that other reasonable options of co-existence, are not available;
(iv) resettlement or alternative package has been prepared providing for livelihood for the affected individuals and communities and fulfils the requirements given in the National Relief and Rehabilitation Policy;
(v) the informed consent of the Gram Sabha concerned, and of the persons affected, to the resettlement programme has been obtained; and
(vi) the facilities and land allocation at the resettlement location are provided under the said programme, otherwise their existing rights shall not be interfered with.`,
      },
      {
        number: "38W",
        label: "Section 38W",
        marginalNote: "Alteration and de-notification of tiger reserves",
        source: src(32),
        summary:
          "Tiger reserve boundaries can only be altered on NTCA recommendation with National Board approval. De-notification requires public interest, NTCA approval AND National Board approval.",
        verbatim: `(1) No alteration in the boundaries of a tiger reserve shall be made except on a recommendation of the Tiger Conservation Authority and the approval of the National Board for Wild Life.

(2) No State Government shall de-notify a tiger reserve, except in public interest with the approval of the Tiger Conservation Authority and the National Board for Wild Life.`,
      },
      {
        number: "38X",
        label: "Section 38X",
        marginalNote: "Establishment of Tiger Conservation Foundation",
        source: src(32),
        summary:
          "Each tiger-reserve State establishes a Tiger Conservation Foundation to facilitate ecological/economic/social/cultural development inside reserves, promote eco-tourism with local stakeholders, create supporting assets, mobilise funding, and support research, training and environmental education.",
        verbatim: `(1) The State Government shall establish a Tiger Conservation Foundation for tiger reserves within the State in order to facilitate and support their management for conservation of tiger and biodiversity and, to take initiatives in eco-development by involvement of people in such development process.

(2) The Tiger Conservation Foundation shall, inter alia, have the following objectives:—
(a) to facilitate ecological, economic, social and cultural development in the tiger reserves;
(b) to promote eco-tourism with the involvement of local stake-holder communities and provide support to safeguard the natural environment in the tiger reserves;
(c) to facilitate the creation of, and or maintenance of, such assets as may be necessary for fulfilling the above said objectives;
(d) to solicit technical, financial, social, legal and other support required for the activities of the Foundation for achieving the above said objectives;
(e) to augment and mobilise financial resources including recycling of entry and such other fees received in a tiger reserve, to foster stake-holder development and eco-tourism;
(f) to support research, environmental education and training in the above related fields.`,
      },
    ],
  },

  // ============================================================
  // Chapter IVC — Tiger and Other Endangered Species Crime Control Bureau (Inserted 2006)
  // ============================================================
  {
    slug: "ch-4c-wildlife-crime-bureau",
    number: "IVC",
    title: "Tiger and Other Endangered Species Crime Control Bureau",
    range: ["38Y", "38Z"],
    intro:
      "Inserted by the 2006 amendment, this chapter sets up the Wildlife Crime Control Bureau (WCCB) — India's specialised national-level enforcement agency for wildlife and forest crime. The Bureau pools officers from the Wildlife, Police, Forest and Customs services and is tasked with intelligence collection, inter-State and international coordination, CITES implementation, capacity building, and policy advice.",
    sections: [
      {
        number: "38Y",
        label: "Section 38Y",
        marginalNote: "Constitution of Tiger and other Endangered Species Crime Control Bureau",
        source: src(32, 33),
        summary:
          "The Centre constitutes the Wildlife Crime Control Bureau by notification — headed by the Director of Wildlife Preservation, with senior officers drawn from Police, Forest and Customs as Additional/Joint Directors.",
        verbatim: `The Central Government may, for the purposes of this Act, by order published in the Official Gazette, constitute a Tiger and other Endangered Species Crime Control Bureau to be known as the Wildlife Crime Control Bureau consisting of—
(a) the Director of Wildlife Preservation—Director ex officio;
(b) the Inspector-General of Police—Additional Director;
(c) the Deputy Inspector-General of Police—Joint Director;
(d) the Deputy Inspector-General of Forests—Joint Director;
(e) the Additional Commissioner (Customs and Central Excise)—Joint Director; and
(f) such other officers as may be appointed from amongst the officers covered under sections 3 and 4 of this Act.`,
      },
      {
        number: "38Z",
        label: "Section 38Z",
        marginalNote: "Powers and functions of the Wildlife Crime Control Bureau",
        source: src(33),
        summary:
          "WCCB's six functions — gather and share organised-wildlife-crime intelligence, coordinate enforcement, implement CITES/international protocols, assist foreign agencies, build scientific investigation capacity, and advise the Centre. It may exercise §5(1), §50(1)/(8) and §55 powers as delegated.",
        verbatim: `(1) Subject to the provisions of this Act, the Wildlife Crime Control Bureau shall take measures with respect to—
(i) collect and collate intelligence related to organized wildlife crime activities and to disseminate the same to State and other enforcement agencies for immediate action, so as to apprehend the criminals and to establish a centralised wildlife crime data bank;
(ii) co-ordination of actions by various officers, State Governments and other authorities in connection with the enforcement of the provisions of this Act, either directly or through regional and border units set up by the Bureau;
(iii) implementation of obligations under the various international Conventions and protocols that are in force at present or which may be ratified or acceded to by India in future;
(iv) assistance to concerned authorities in foreign countries and concerned international organisations to facilitate co-ordination and universal action for wildlife crime control;
(v) develop infrastructure and capacity building for scientific and professional investigation into wildlife crimes and assist State Governments to ensure success in prosecutions related to wildlife crimes;
(vi) advice the Government of India on issues relating to wildlife crimes having national and international ramifications, and suggest changes required in relevant policy and laws from time to time.

(2) The Wildlife Crime Control Bureau shall exercise—
(i) such powers as may be delegated to it under sub-section (1) of section 5, sub-sections (1) and (8) of section 50 and section 55 of this Act; and
(ii) such other powers as may be prescribed.`,
      },
    ],
  },

  // ============================================================
  // Chapter V — Trade or Commerce in Wild Animals, Animal Articles and Trophies
  // ============================================================
  {
    slug: "ch-5-trade-and-commerce",
    number: "V",
    title: "Trade or Commerce in Wild Animals, Animal Articles and Trophies",
    range: ["39", "49"],
    intro:
      "Vests every illegally hunted or unlawfully held wild animal — and its article, trophy or meat — in the State (or Centre for Centre-declared sanctuaries/parks). Builds the country's wildlife-property regime: declarations of pre-existing stocks, certificates of ownership, inquiry and inventory by the Chief Wild Life Warden, controls on transfer, and the §44 licensing system for dealers, manufacturers, taxidermists, eating-houses and meat traders.",
    sections: [
      {
        number: "39",
        label: "Section 39",
        marginalNote: "Wild animals, etc., to be Government property",
        source: src(33, 34),
        summary:
          "Every illegally hunted, captive-bred or seized wild animal — plus its article, trophy, meat, ivory and the vehicle/weapon used — is State Government property (Centre's, if the sanctuary or park is Centre-declared). Finders must report within 48 hours; no acquisition or transfer without the Chief Wild Life Warden's written permission.",
        verbatim: `(1) Every—
(a) wild animal, other than vermin, which is hunted under section 11 or sub-section (1) of section 29 or sub-section (6) of section 35 or kept or bred in captivity or hunted in contravention of any provision of this Act or any rule or order made thereunder or found dead, or killed by mistake; and
(b) animal article, trophy or uncured trophy or meat derived from any wild animal referred to in clause (a) in respect of which any offence against this Act or any rule or order made thereunder has been committed,
(c) ivory imported into India and an article made from such ivory in respect of which any offence against this Act or any rule or order made thereunder has been committed;
(d) vehicle, vessel, weapon, trap or tool that has been used for committing an offence and has been seized under the provisions of this Act,
shall be the property of the State Government, and, where such animal is hunted in a sanctuary or National Park declared by the Central Government, such animal or any animal article, trophy, uncured trophy or meat derived from such animal or any vehicle, vessel, weapon, trap or tool used in such hunting shall be the property of the Central Government.

(2) Any person who obtains, by any means, the possession of Government property, shall, within forty-eight hours from obtaining such possession, make a report as to the obtaining of such possession to the nearest police station or the authorised officer and shall, if so required, hand over such property to the officer-in-charge of such police station or such authorised officer, as the case may be.

(3) No person shall, without the previous permission in writing of the Chief Wild Life Warden or the authorised officer—
(a) acquire or keep in his possession, custody or control, or
(b) transfer to any person, whether by way of gift, sale or otherwise, or
(c) destroy or damage, such Government property.`,
      },
      {
        number: "40",
        label: "Section 40",
        marginalNote: "Declarations",
        source: src(34, 35),
        summary:
          "Within 30 days of the Act's commencement, anyone holding a Schedule I / II Part II captive animal, article, trophy, dried skin, musk or rhino horn must declare it to the Chief Wild Life Warden. Post-Act, no acquisition or transfer of such items without the Warden's prior written permission; post-2003 only certificate-of-ownership holders may keep them, and live elephants are carved out.",
        verbatim: `(1) Every person having at the commencement of this Act the control, custody or possession of any captive animal specified in Schedule I or Part II of Schedule II, or animal article, trophy or uncured trophy derived from such animal or salted or dried skins of such animal or the musk of a musk deer or the horn of a rhinoceros, shall, within thirty days from the commencement of this Act, declare to the Chief Wild Life Warden or the authorised officer the number and description of the animal, or article of the foregoing description under his control, custody or possession and the place where such animal or article is kept.

(2) No person shall, after the commencement of this Act, acquire, receive, keep in his control, custody or possession, sell, offer for sale or otherwise transfer or transport any animal specified in Schedule I or Part II of Schedule II or any uncured trophy or meat derived from such animal, or the salted or dried skins of such animal or the musk of a musk deer or the horn of a rhinoceros, except with the previous permission in writing of the Chief Wild Life Warden or the authorised officer.

(2A) No person other than a person having a certificate of ownership, shall, after the commencement of the Wild Life (Protection) Amendment Act, 2002 (16 of 2003), acquire, receive, keep in his control, custody or possession any captive animal, animal article, trophy or uncured trophy specified in Schedule I or Part II of Schedule II, except by way of inheritance.

(2B) Every person inheriting any captive animal, animal article, trophy or uncured trophy under sub-section (2A) shall, within ninety days of such inheritance make a declaration to the Chief Wild Life Warden or the authorised officer and the provisions of sections 41 and 42 shall apply as if the declaration had been made under sub-section (1) of section 40:

Provided that nothing in sub-sections (2A) and (2B) shall apply to the live elephant.

(3) Nothing in sub-section (1) or sub-section (2) shall apply to a recognised zoo subject to the provisions of section 38-I or to a public museum.

(4) The State Government may, by notification, require any person to declare to the Chief Wild Life Warden or the authorised officer any animal or animal article or trophy (other than a musk of a musk deer or horn of a rhinoceros) or salted or dried skins derived from an animal specified in Schedule I or Part II of Schedule II in his control, custody or possession in such form, in such manner, and within such time, as may be prescribed.`,
      },
      {
        number: "40A",
        label: "Section 40A",
        marginalNote: "Immunity in certain cases",
        source: src(35),
        summary:
          "Inserted in 2003. The Centre may notify a fresh declaration window for previously undeclared Schedule I / II Part II items — pending §40 proceedings against pre-2003 violators abate, and post-declaration disposal is governed by prescribed conditions.",
        verbatim: `(1) Notwithstanding anything contained in sub-sections (2) and (4) of section 40 of this Act, the Central Government may, by notification, require any person to declare to the Chief Wild Life Warden or the authorised officer, any captive animal, animal article, trophy or uncured trophy derived from animals specified in Schedule I or Part II of Schedule II in his control, custody or possession, in respect of which no declaration had been made under sub-section (1) or sub-section (4) of section 40, in such form, in such manner and within such time as may be prescribed.

(2) Any action taken or purported to be taken for violation of section 40 of this Act at any time before the commencement of the Wild Life (Protection) Amendment Act, 2002 (16 of 2003) shall not be proceeded with and all pending proceedings shall stand abated.

(3) Any captive animal, animal article, trophy or uncured trophy declared under sub-section (1), shall be dealt with in such manner and subject to such conditions as may be prescribed.`,
      },
      {
        number: "41",
        label: "Section 41",
        marginalNote: "Inquiry and preparation of inventories",
        source: src(35),
        summary:
          "On receipt of a §40 declaration, the Chief Wild Life Warden may enter the premises after notice, make inquiries, prepare inventories of articles/trophies/skins/captive animals (Schedule I & II Part II), and affix identification marks. Obliterating or counterfeiting such marks is itself an offence.",
        verbatim: `(1) On receipt of a declaration made under section 40, the Chief Wild Life Warden or the authorised officer may, after such notice, in such manner and at such time, as may be prescribed,—
(a) enter upon the premises of a person referred to in section 40;
(b) make inquiries and prepare inventories of animal articles, trophies, uncured trophies, salted and dried skins and captive animals specified in Schedule I and Part II of Schedule II and found thereon; and
(c) affix upon the animals, animal articles, trophies or uncured trophies identification marks in such manner as may be prescribed.

(2) No person shall obliterate or counterfeit any identification mark referred to in this Chapter.`,
      },
      {
        number: "42",
        label: "Section 42",
        marginalNote: "Certificate of ownership",
        source: src(35),
        summary:
          "The Chief Wild Life Warden issues a certificate of ownership to anyone in lawful possession of a wild animal, article, trophy or uncured trophy, and may mark it for identification. For captive animals, the certificate issues only after the Warden is satisfied the applicant has adequate housing, maintenance and upkeep facilities.",
        verbatim: `The Chief Wild Life Warden may, for the purposes of section 40, issue a certificate of ownership in such form, as may be prescribed to any person who, in his opinion, is in lawful possession of any wild animal or any animal article, trophy, uncured trophy and may, where possible, mark, in the prescribed manner, such animal article, trophy or uncured trophy for purposes of identification.

Provided that before issuing the certificate of ownership in respect of any captive animal, the Chief Wild Life Warden shall ensure that the applicant has adequate facilities for housing, maintenance and upkeep of the animal.`,
      },
      {
        number: "43",
        label: "Section 43",
        marginalNote: "Regulation of transfer of animal, etc.",
        source: src(35, 36),
        summary:
          "Holders of a certificate of ownership cannot sell or commercially transfer a captive animal/article/trophy. Inter-State transfers or transports must be reported to the Chief Wild Life Warden within 30 days. Peacock-tail-feather articles and inter-zoo/zoo-museum transfers are exempt.",
        verbatim: `(1) No person having in his possession captive animal, animal article, trophy or uncured trophy in respect of which he has a certificate of ownership shall transfer by way of sale or offer for sale or by any other mode of consideration of commercial nature, such animal or article or trophy or uncured trophy.

(2) Where a person transfers or transports from the State in which he resides to another State or acquires by transfer from outside the State, any such animal, animal article, trophy or uncured trophy in respect of which he has a certificate of ownership, he shall, within thirty days of the transfer or transport, report the transfer or transport to the Chief Wild Life Warden or the authorised officer within whose jurisdiction the transfer or transport is effected.

(3) Nothing in this section shall apply—
(a) to tail feather of peacock and the animal article or trophies made therefrom;
(b) to transfer of captive animals between recognised zoos subject to the provisions of section 38-I, and transfer amongst zoos and public museums.`,
      },
      {
        number: "44",
        label: "Section 44",
        marginalNote: "Dealings in trophy and animal articles without licence prohibited",
        source: src(36, 37),
        summary:
          "Licensing regime for manufacturers, dealers, taxidermists, captive-animal dealers, meat dealers, eating-houses and snake-venom handlers. Stocks must be declared within 15 days, licences are valid one year, non-transferable and renewable. Renewal can be refused only on specific grounds after a hearing.",
        verbatim: `(1) Subject to the provisions of Chapter VA, no person shall, except under and in accordance with, a licence granted under sub-section (4)—
(a) commence or carry on the business as—
(i) a manufacturer of or dealer in, any animal article; or
(ii) a taxidermist; or
(iii) a dealer in trophy or uncured trophy; or
(iv) a dealer in captive animals; or
(v) a dealer in meat; or
(b) cook or serve meat in any eating-house;
(c) derive, collect or prepare or deal in snake venom;

Provided that nothing in this sub-section shall prevent a person, who, immediately before the commencement of this Act was carrying on the business or occupation specified in this sub-section, from carrying on such business or occupation for a period of thirty days from such commencement, or where he has made an application within that period for the grant of a licence to him, until the licence is granted to him or he is informed in writing that a licence cannot be granted to him:

Provided further that nothing in this sub-section shall apply to the dealers in tail feathers of peacock and articles made therefrom and the manufacturers of such articles.

Explanation.—For the purposes of this section, "eating-house" includes a hotel, restaurant or any other place where any eatable is served on payment, whether or not such payment is separately made for such eatable or is included in the amount charged for board and lodging.

(2) Every manufacturer of, or dealer in, animal article, or every dealer in captive animals, trophies or uncured trophies, or every taxidermist shall, within fifteen days from the commencement of this Act, declare to the Chief Wild Life Warden his stocks of animals articles, captive animals, trophies and uncured trophies, as the case may be, as on the date of such declaration and the Chief Wild Life Warden or the authorised officer may place an identification mark on every animal article, captive animal, trophy or uncured trophy, as the case may be.

(3) Every person referred to in sub-section (1) who intends to obtain a licence, shall make an application to the Chief Wild Life Warden or the authorised officer for the grant of a licence.

(4) (a) Every application referred to in sub-section (3) shall be made in such form and on payment of such fee as may be prescribed, to the Chief Wild Life Warden or the authorised officer.
(b) No licence referred to in sub-section (1) shall be granted unless the Chief Wild Life Warden or the authorised officer having regard to the antecedents and previous experience of the applicant, the implication which the grant of such licence would have on the status of wild life and to such other matters as may be prescribed in this behalf and after making such inquiry in respect of those matters as he may think fit, is satisfied that the licence should be granted.

(5) Every licence granted under this section shall specify the premises in which and the conditions, if any, subject to which the licensee shall carry on his business.

(6) Every licence granted under this section shall—
(a) be valid for one year from the date of its grant;
(b) not be transferable; and
(c) be renewable for a period not exceeding one year at a time.

(7) No application for the renewal of a licence shall be rejected unless the holder of such licence has been given a reasonable opportunity of presenting his case and unless the Chief Wild Life Warden or the authorised officer is satisfied that—
(i) the application for such renewal has been made after the expiry of the period specified therefor, or
(ii) any statement made by the applicant at the time of the grant or renewal of the licence was incorrect or false in material particulars, or
(iii) the applicant has contravened any term or condition of the licence or any provision of this Act or any rule made thereunder, or
(iv) the applicant does not fulfil the prescribed conditions.

(8) Every order granting or rejecting an application for the grant or renewal of a licence shall be made in writing.

(9) Nothing in the foregoing sub-sections shall apply in relation to vermin.`,
      },
      {
        number: "45",
        label: "Section 45",
        marginalNote: "Suspension or cancellation of licences",
        source: src(37),
        summary:
          "Subject to State Government direction, the Chief Wild Life Warden may suspend or cancel a §44 licence by written reasons — after a hearing.",
        verbatim: `Subject to any general or special order of the State Government, the Chief Wild Life Warden or the authorised officer may, for reasons to be recorded by him in writing, suspend or cancel any licence granted or renewed under section 44:

Provided that no such suspension or cancellation shall be made except after giving the holder of the licence a reasonable opportunity of being heard.`,
      },
      {
        number: "46",
        label: "Section 46",
        marginalNote: "Appeal",
        source: src(37),
        summary:
          "Orders refusing/renewing or suspending/cancelling a §44 licence are appealable — to the Chief Wild Life Warden if made by an authorised officer, or to the State Government if made by the Warden. A second appeal lies to the State Government. Appeals must be filed within 30 days, extendable for sufficient cause.",
        verbatim: `(1) An appeal from an order refusing to grant or renew a licence under section 44 or an order suspending or cancelling a licence under section 45 shall lie—
(a) if the order is made by the authorised officer, to the Chief Wild Life Warden; or
(b) if the order is made by the Chief Wild Life Warden, to the State Government.

(2) In the case of an order passed in appeal by the Chief Wild Life Warden under clause (a) of sub-section (1), a second appeal shall lie to the State Government.

(3) Subject as aforesaid, every order passed in appeal under this section shall be final.

(4) An appeal under this section shall be preferred within thirty days from the date of the communication, to the applicant, of the order appealed against:

Provided that the appellate authority may admit any appeal preferred after the expiry of the period aforesaid if it is satisfied that the appellant had sufficient cause for not preferring the appeal in time.`,
      },
      {
        number: "47",
        label: "Section 47",
        marginalNote: "Maintenance of records",
        source: src(37),
        summary:
          "Every §44 licensee must keep prescribed records, submit returns to the Director (or his nominee) and the Chief Wild Life Warden, and make those records available on demand for inspection.",
        verbatim: `A licensee under this Chapter shall—
(a) keep records, and submit such returns of his dealings, as may be prescribed,—
(i) to the Director or any other officer authorised by him in this behalf, and
(ii) to the Chief Wild Life Warden or the authorised officer; and
(b) make such records available on demand for inspection by such officers.`,
      },
      {
        number: "48",
        label: "Section 48",
        marginalNote: "Purchase of animals, etc., by licensee",
        source: src(37, 38),
        summary:
          "A §44 licensee cannot hold any undeclared §44(2) item or unlawfully acquired animal/article. Capture, acquisition, sale or transport of a Schedule I / II Part II captive animal or its meat/article needs rule compliance and — for inter-State movement — the Director's written prior permission.",
        verbatim: `No licensee under this Chapter shall—
(a) keep in his control, custody or possession,—
(i) any animal, animal article, trophy or uncured trophy in respect of which a declaration under the provisions of sub-section (2) of section 44 has to be made but has not been made;
(ii) any animal or animal article, trophy, uncured trophy or meat which has not been lawfully acquired under the provisions of this Act or any rule or order made thereunder;
(b) (i) capture any wild animal, or
(ii) acquire, receive keep in his control, custody or possession, or sell, offer for sale or transport, any captive animal specified in Schedule I or Part II of Schedule II or any animal article, trophy, uncured trophy or meat derived therefrom or serve such meat, or put under a process of taxidermy or make animal article containing part or whole of such animal,
except in accordance with such rules as may be made under this Act;

Provided that where the acquisition or, possession, control or custody of such animal or animal article, trophy or uncured trophy entails the transfer or transport from one State to another, no such transfer or transport shall be effected except with the previous permission in writing of the Director or any other officer authorised by him in this behalf:

Provided further that no such permission under the foregoing proviso shall be granted unless the Director or the officer authorised by him is satisfied that the animal or article aforesaid has been lawfully acquired.`,
      },
      {
        number: "48A",
        label: "Section 48A",
        marginalNote: "Restriction on transportation of wild life",
        source: src(38),
        summary:
          "Inserted in 1991. No one may accept a wild animal (other than vermin), animal article, specified plant or its part/derivative for transportation without first verifying that the Chief Wild Life Warden (or another State-authorised officer) has permitted that transport.",
        verbatim: `No person shall accept any wild animal (other than vermin), or any animal article, or any specified plant or part or derivative thereof, for transportation except after exercising due care to ascertain that permission from the Chief Wild Life Warden or any other officer authorised by the State Government in this behalf has been obtained for such transportation.`,
      },
      {
        number: "49",
        label: "Section 49",
        marginalNote: "Purchase of captive animal, etc., by a person other than a licensee",
        source: src(38),
        summary:
          "Non-licensees may purchase, receive or acquire a captive animal, non-vermin wild animal or its article/trophy/meat only from a §44 licensee or a person authorised to sell or transfer under the Act — recognised zoos and public museums are exempt.",
        verbatim: `No person shall purchase, receive or acquire any captive animal, wild animal, other than vermin, or any animal article, trophy, uncured trophy or meat derived therefrom otherwise than from a dealer or from a person authorised to sell or otherwise transfer the same under this Act:

Provided that nothing in this section shall apply to a recognised zoo subject to the provisions of section 38-I or to a public museum.`,
      },
    ],
  },

  // ============================================================
  // Chapter VA — Prohibition of Trade or Commerce in Trophies, Animal Articles, etc., Derived from Certain Animals (Inserted 1986)
  // ============================================================
  {
    slug: "ch-5a-prohibition-of-trade-in-scheduled-animals",
    number: "VA",
    title: "Prohibition of Trade or Commerce in Trophies, Animal Articles, etc., Derived from Certain Animals",
    range: ["49A", "49C"],
    intro:
      "Inserted by the 1986 amendment (and tightened in 1991 to bring imported ivory within its net). This chapter is the absolute trade ban on Schedule I and Schedule II Part II animals: after the 'specified date' no manufacture, dealing, taxidermy, eating-house service or meat trade in scheduled-animal articles is permitted — even existing §44 licences cannot save the activity. Pre-existing stocks must be declared, and only the Chief Wild Life Warden's certificate of ownership (with the Director's prior approval) permits bona fide personal use.",
    sections: [
      {
        number: "49A",
        label: "Section 49A",
        marginalNote: "Definitions",
        source: src(38, 39),
        summary:
          "Defines three terms for Chapter VA — 'Scheduled animal' (Schedule I and II Part II), 'Scheduled animal article' (any article made from such an animal, excluding peacock-tail-feather articles and snake venom), and 'Specified date' (two months from the 1986 amendment, or for imported ivory, six months from the 1991 amendment).",
        verbatim: `In this Chapter,—
(a) "Scheduled animal" means an animal specified for the time being in Schedule I or Part II of Schedule II;
(b) "Scheduled animal article" means an article made from any Scheduled animal and includes an article or object in which the whole or any part of such animal has been used but does not include tail feather of peacock, an article or trophy made therefrom and snake venom or its derivative;
(c) "Specified date" means—
(i) in relation to a scheduled animal on the commencement of the Wild Life (Protection) (Amendment) Act, 1986, the date of expiry of two months from such commencement;
(ii) in relation to any animal added or transferred to Schedule I or Part II of Schedule II at any time after such commencement, the date of expiry of two months from such addition or transfer;
(iii) in relation to ivory imported into India or an article made from such ivory, the date of expiry of six months from the commencement of the Wild Life (Protection) (Amendment) Act, 1991 (44 of 1991).`,
      },
      {
        number: "49B",
        label: "Section 49B",
        marginalNote: "Prohibition of dealings in trophies, animal articles, etc., derived from scheduled animals",
        source: src(39),
        summary:
          "From the specified date, no person may manufacture, deal, taxidermise, or cook/serve meat from a scheduled animal (or imported ivory). Existing §44 licences cease to authorise such activity. The Centre may, by Gazette order in the public interest, exempt a Centre-owned/financed corporation or society for export. State taxidermists may treat a scheduled animal only for Government or with the Warden's written authorisation for education/science.",
        verbatim: `(1) Subject to the other provisions of this Section, on and after the specified date, no person shall—
(a) commence or carry on the business as—
(i) a manufacturer of, or dealer in, scheduled animal articles; or
(ia) a dealer in ivory imported into India or articles made therefrom or a manufacturer of such articles; or
(ii) a taxidermist with respect to any scheduled animals or any parts of such animals; or
(iii) a dealer in trophy or uncured trophy derived from any scheduled animal; or
(iv) a dealer in any captive animals being scheduled animals; or
(v) a dealer in meat derived from any scheduled animal; or
(b) cook or serve meat derived from any scheduled animal in any eating-house.

Explanation.—For the purposes of this sub-section, "eating-house" has the same meaning as in the Explanation below sub-section (1) of Section 44.

(2) Subject to the other provisions of this section, no licence granted or renewed under Section 44 before the specified date shall entitle the holder thereof or any other person to commence or carry on the business referred to in clause (a) of sub-section (1) of this section or the occupation referred to in clause (b) of that sub-section after such date.

(3) Notwithstanding anything contained in sub-section (1) or sub-section (2), where the Central Government is satisfied that it is necessary or expedient so to do in the public interest, it may, by general or special order published in the official Gazette, exempt, for purposes of export, any corporation owned or controlled by the Central Government (including a Government company within the meaning of section 617 of the Companies Act, 1956 (1 of 1956), or any society registered under the Societies Registration Act, 1860 (21 of 1860), or any other law for the time being in force, wholly or substantially financed by the Central Government, from the provisions of sub-sections (1) and (2).

(4) Notwithstanding anything contained in sub-section (1) or sub-section (2), but subject to any rules which may be made in this behalf, a person holding a licence under Section 44 to carry on the business as a taxidermist may put under a process of taxidermy any scheduled animal or any part thereof—
(a) for or on behalf of the Government or any corporation or society exempted under sub-section (3), or
(b) with the previous authorisation in writing of the Chief Wild Life Warden, for and on behalf of any person for educational or scientific purposes.`,
      },
      {
        number: "49C",
        label: "Section 49C",
        marginalNote: "Declaration by dealers",
        source: src(39, 40),
        summary:
          "Within 30 days of the specified date, every dealer must declare stocks, storage places and bona-fide-personal-use retainments. The Warden may apply §41 inquiry/inventory steps. With the Director's prior approval the Warden issues a certificate of ownership for personal-use items (no commercial premises). Transfer or inter-State movement of certified items must be reported within 30 days; non-holders cannot keep, sell or transfer such items after the specified date.",
        verbatim: `(1) Every person carrying on the business or occupation referred to in sub-section (1) of Section 49B shall, within thirty days from the specified date declare to the Chief Wild Life Warden or the authorised officer—
(a) his stocks, if any, as at the end of the specified date of—
(i) scheduled animal articles;
(ii) scheduled animals and parts thereof;
(iii) trophies and uncured trophies derived from scheduled animals;
(iv) captive animals being scheduled animals;
(v) ivory imported into India or articles made therefrom;
(b) the place or places at which the stocks mentioned in the declaration are kept; and
(c) the description of such items, if any, the stocks mentioned in the declaration which he desires to retain with himself for his bona fide personal use.

(2) On receipt of a declaration under sub-section (1), the Chief Wild Life Warden or the authorised officer may take all or any of the measures specified in section 41 and for this purpose, the provisions of section 41 shall, so far as may be, apply.

(3) Where, in a declaration made under sub-section (1), the person making the declaration expresses his desire to retain with himself any of the items of the stocks specified in the declaration for his bona fide personal use, the Chief Wild Life Warden, with the prior approval of the Director, may, if he is satisfied that the person is in lawful possession of such items, issue certificates of ownership in favour of such person with respect to all, or as the case may be, such of the items as in the opinion of the Chief Wild Life Warden, are required for the bona fide personal use of such person and affix upon such items identification marks in such manner as may be prescribed:

Provided that no such item shall be kept in any commercial premises.

(4) No person shall obliterate or counterfeit any identification mark referred to in sub-section (3).

(5) An appeal shall lie against any refusal to grant certificate of ownership under sub-section (3) and the provisions of sub-sections (2), (3) and (4) of section 46 shall, so far as may be, apply in relation to appeals under this sub-section.

(6) Where a person who has been issued a certificate of ownership under sub-section (3) in respect of any item—
(a) transfers such item to any person, whether by way of gift, sale or otherwise, or
(b) transfers or transports from the State in which he resides to another State any such item,
he shall, within thirty days of such transfer or transport, report the transfer or transport to the Chief Wild Life Warden or the authorised officer within whose jurisdiction the transfer or transport is effected.

(7) No person, other than a person who has been issued a certificate of ownership under sub-section (3), shall on and after the specified date keep under his control, sell or offer for sale or transfer to any person any scheduled animal, a scheduled animal article, or ivory imported into India or any article made therefrom.`,
      },
    ],
  },

  // ============================================================
  // Chapter VI — Prevention and Detection of Offences
  // ============================================================
  {
    slug: "ch-6-prevention-and-detection",
    number: "VI",
    title: "Prevention and Detection of Offences",
    range: ["50", "58"],
    intro:
      "The Act's enforcement engine. Section 50 gives the Director, Chief Wild Life Warden, forest officers and police (sub-inspector and above) sweeping powers — entry, search, seizure, arrest without warrant, and (for senior officers) search-warrant, witness-attendance and evidence-recording powers. Section 51's penalty ladder runs up to seven years' imprisonment for Schedule I / II Part II offences. The chapter also carries bail conditions for repeat offenders, attempt and abetment liability, composition by senior officers, the §55 limited-prosecutor rule (with the 60-day citizen complaint route), and corporate liability for companies and their officers.",
    sections: [
      {
        number: "50",
        label: "Section 50",
        marginalNote: "Power of entry, search, arrest and detention",
        source: src(40, 42),
        summary:
          "Senior wildlife officers and police (sub-inspector and above) may demand inspection of animals/articles/licences, stop and search vehicles or premises, seize items connected to a §11/§35/§44 offence, and arrest without warrant if the suspect may abscond. A fisherman's net within 10 km of a sanctuary is protected. Seized animals can be released on bond. The Assistant Director (or equivalent) holds civil-court powers — search warrant, witness compulsion, document discovery, evidence on oath. Refusal to assist or to produce items is itself an offence.",
        verbatim: `(1) Notwithstanding anything contained in any other law for the time being in force, the Director or any other officer authorised by him in this behalf or the Chief Wild Life Warden or the authorised officer or any forest officer or any police officer not below the rank of a sub-inspector, may, if he has reasonable grounds for believing that any person has committed an offence against this Act,—
(a) require any such person to produce for inspection any captive animal, wild animal, animal article, meat, trophy, uncured trophy, specified plant or part or derivative thereof in his control, custody or possession, or any licence, permit or other document granted to him or required to be kept by him under the provisions of this Act;
(b) stop any vehicle or vessel in order to conduct search or inquiry or enter upon and search any premises, land, vehicle or vessel, in the occupation of such person, and open and search any baggage or other things in his possession;
(c) seize any captive animal, wild animal, animal article, meat, trophy or uncured trophy, or any specified plant or part or derivative thereof, in respect of which an offence against this Act appears to have been committed, in the possession of any person together with any trap, tool, vehicle, vessel or weapon used for committing any such offence and, unless he is satisfied that such person will appear and answer any charge which may be preferred against him, arrest him without warrant, and detain him:

Provided that where a fisherman, residing within ten kilometres of a sanctuary or National Park, inadvertently enters on a boat, not used for commercial fishing, in the territorial waters in that sanctuary or National Park, a fishing tackle or net on such boat shall not be seized.

(3) It shall be lawful for any of the officers referred to in sub-section (1) to stop and detain any person, whom he sees doing any act for which a licence or permit is required under the provisions of this Act, for the purposes of requiring such person to produce the licence or permit and if such person fails to produce the licence or permit, as the case may be, he may be arrested without warrant, unless he furnishes his name and address, and otherwise satisfies the officer arresting him that he will duly answer any summons or other proceedings which may be taken against him.

(3A) Any officer of a rank not inferior to that of an Assistant Director of Wild Life Preservation or an Assistant Conservator of Forests who, or whose subordinate, has seized any captive animal or wild animal under clause (c) of sub-section (1) may give the same for custody on the execution by any person of a bond for the production of such animal if and when so required, before the Magistrate having jurisdiction to try the offence on account of which the seizure has been made.

(4) Any person detained, or things seized under the foregoing power, shall forthwith be taken before a Magistrate to be dealt with according to law under intimation to the Chief Wild Life Warden or the officer authorised by him in this regard.

(5) Any person who, without reasonable cause, fails to produce anything, which he is required to produce under this section, shall be guilty of an offence against this Act.

(6) Where any meat, uncured trophy, specified plant or part or derivative thereof is seized under the provisions of this section, the Assistant Director of Wild Life Preservation or any other officer of a gazetted rank authorised by him in this behalf or the Chief Wild Life Warden or the authorised officer may arrange for the disposal of the same in such manner as may be prescribed.

(7) Whenever any person is approached by any of the officers referred to in sub-section (1) for assistance in the prevention or detection of an offence against this Act, or in apprehending persons charged with the violation of this Act, or for seizure in accordance with clause (c) of sub-section (1), it shall be the duty of such person or persons to render such assistance.

(8) Notwithstanding anything contained in any other law for the time being in force, any officer not below the rank of an Assistant Director of Wild Life Preservation or an officer not below the rank of Assistant Conservator of Forests authorised by the State Government in this behalf shall have the powers, for purposes of making investigation into any offence against any provision of this Act—
(a) to issue a search warrant;
(b) to enforce the attendance of witnesses;
(c) to compel the discovery and production of documents and material objects; and
(d) to receive and record evidence.

(9) Any evidence recorded under clause (d) of sub-section (8) shall be admissible in any subsequent trial before a Magistrate provided that it has been taken in the presence of the accused person.`,
      },
      {
        number: "51",
        label: "Section 51",
        marginalNote: "Penalties",
        source: src(42, 43),
        summary:
          "General offence — up to 3 years' jail or ₹25,000 fine or both. Schedule I / II Part II, sanctuary-/National-Park-hunting or boundary-alteration offences — 3 to 7 years' jail plus minimum ₹10,000 fine, escalating on repeat. Chapter VA offences — 3 to 7 years' jail plus ₹10,000+ fine. §38J zoo-teasing — up to 6 months / ₹2,000 (doubles on repeat). On conviction the court may order forfeiture of items, vehicle, weapon and cancellation of any §44 and Arms Act licences. Probation and §360 CrPC benefits are excluded for sanctuary-hunting or Chapter VA offenders aged 18+.",
        verbatim: `(1) Any person who contravenes any provision of this Act (except Chapter VA and section 38J) or any rule or order made thereunder or who commits a breach of any of the conditions of any licence or permit granted under this Act, shall be guilty of an offence against this Act, and shall, on conviction, be punishable with imprisonment for a term which may extend to three years, or with fine which may extend to twenty-five thousand rupees, or with both:

Provided that where the offence committed is in relation to any animal specified in Schedule I or Part II of Schedule II or meat of any such animal or animal article, trophy or uncured trophy derived from such animal or where the offence relates to hunting in a sanctuary or a National Park or altering the boundaries of a sanctuary or a National Park, such offence shall be punishable with imprisonment for a term which shall not be less than three years but may extend to seven years and also with fine which shall not be less than ten thousand rupees:

Provided further that in the case of a second or subsequent offence of the nature mentioned in this sub-section, the term of the imprisonment shall not be less than three years but may extend to seven years and also with fine which shall not be less than twenty-five thousand rupees.

(1A) Any person who contravenes any provisions of Chapter VA, shall be punishable with imprisonment for a term which shall not be less than three years but which may extend to seven years and also with fine which shall not be less than ten thousand rupees.

(1B) Any person who contravenes the provisions of section 38J, shall be punishable with imprisonment for a term which may extend to six months, or with fine which may extend to two thousand rupees, or with both:

Provided that in the case of a second or subsequent offence the term of imprisonment may extend to one year or the fine may extend to five thousand rupees.

(2) When any person is convicted of an offence against this Act, the Court trying the offence may order that any captive animal, wild animal, animal article, trophy, uncured trophy, meat, ivory imported into India or an article made from such ivory, any specified plant, or part or derivative thereof in respect of which the offence has been committed, and any trap, tool, vehicle, vessel or weapon, used in the commission of the said offence be forfeited to the State Government and that any licence or permit, held by such person under the provisions of this Act, be cancelled.

(3) Such cancellation of licence or permit or such forfeiture shall be in addition to any other punishment that may be awarded for such offence.

(4) Where any person is convicted of an offence against this Act, the Court may direct that the licence, if any, granted to such person under the Arms Act, 1959 (54 of 1959), for possession of any arm with which an offence against this Act has been committed, shall be cancelled and that such person shall not be eligible for a licence under the Arms Act, 1959, for a period of five years from the date of conviction.

(5) Nothing contained in section 360 of the Code of Criminal Procedure, 1973 (2 of 1974), or in the Probation of Offenders Act, 1958 (20 of 1958), shall apply to a person convicted of an offence with respect to hunting in a sanctuary or a National Park or of an offence against any provision of Chapter VA unless such person is under eighteen years of age.`,
      },
      {
        number: "51A",
        label: "Section 51A",
        marginalNote: "Certain conditions to apply while granting bail",
        source: src(43),
        summary:
          "Inserted in 2003. A previously-convicted accused of a Schedule I / II Part II offence, sanctuary-/park-hunting or boundary-alteration cannot be released on bail without (a) the Public Prosecutor being heard and (b) the court being satisfied of no prima facie guilt and no likely re-offence.",
        verbatim: `When any person accused of, the commission of any offence relating to Schedule I or Part II of Schedule II or offences relating to hunting inside the boundaries of National Park or wild life sanctuary or altering the boundaries of such parks and sanctuaries, is arrested under the provisions of the Act, then notwithstanding anything contained in the Code of Criminal Procedure, 1973 (2 of 1974) no such person who had been previously convicted of an offence under this Act shall, be released on bail unless—
(a) the Public Prosecutor has been given an opportunity of opposing the release on bail; and
(b) where the Public Prosecutor opposes the application, the Court is satisfied that there are reasonable grounds for believing that he is not guilty of such offence and that he is not likely to commit any offence while on bail.`,
      },
      {
        number: "52",
        label: "Section 52",
        marginalNote: "Attempts and abetment",
        source: src(43),
        summary:
          "Attempting or abetting any contravention of the Act, rule or order is treated as the contravention itself — same penalties apply.",
        verbatim: `Whoever attempts to contravene, or abets the contravention of, any of the provisions of this Act or of any rule or order made thereunder shall be deemed to have contravened that provision or rule or order, as the case may be.`,
      },
      {
        number: "53",
        label: "Section 53",
        marginalNote: "Punishment for wrongful seizure",
        source: src(43),
        summary:
          "An officer who vexatiously and unnecessarily seizes property under the pretence of a §50 seizure is punishable with up to 6 months' jail or ₹500 fine or both.",
        verbatim: `If any person, exercising powers under this Act, vexatiously and unnecessarily seizes the property of any other person on the pretence of seizing it for the reasons mentioned in section 50 he shall, on conviction, be punishable with imprisonment for a term which may extend to six months, or with fine which may extend to five hundred rupees, or with both.`,
      },
      {
        number: "54",
        label: "Section 54",
        marginalNote: "Power to compound offence",
        source: src(43),
        summary:
          "Senior officers (Centre — Director or Assistant Director; State — Chief Wild Life Warden or Deputy Conservator) may accept a composition sum (up to ₹25,000) from a suspect, discharging custody and ending proceedings. Licence/permit may also be cancelled. Offences carrying a minimum-imprisonment sentence under §51 are non-compoundable.",
        verbatim: `(1) The Central Government may, by notification, empower the Director of Wild Life Preservation or any other officer not below the rank of Assistant Director of Wild Life Preservation and in the case of a State Government in the similar manner, empower the Chief Wild Life Warden or any officer of a rank not below the rank of a Deputy Conservator of Forests, to accept from any person against whom a reasonable suspicion exists that he has committed an offence against this Act, payment of a sum of money by way of composition of the offence which such person is suspected to have committed.

(2) On payment of such sum of money to such officer, the suspected person, if in custody, shall be discharged and no further proceedings in respect of the offence shall be taken against such person.

(3) The officer compounding any offence may order the cancellation of any licence or permit granted under this Act to the offender, or if not empowered to do so, may approach an officer so empowered, for the cancellation of such licence or permit.

(4) The sum of money accepted or agreed to be accepted as composition under sub-section (1) shall, in no case, exceed the sum of twenty-five thousand rupees:

Provided that no offence, for which a minimum period of imprisonment has been prescribed in section 51, shall be compounded.`,
      },
      {
        number: "55",
        label: "Section 55",
        marginalNote: "Cognizance of offences",
        source: src(43, 44),
        summary:
          "Courts take cognizance only on complaint of: the Director or a Centre-authorised officer; CZA Member-Secretary (Chapter IVA); NTCA Member-Secretary or tiger-reserve Director; Chief Wild Life Warden or State-authorised officer; the zoo officer-in-charge (§38J); or any private person who has given 60 days' written notice of the offence and intent to complain.",
        verbatim: `No court shall take cognizance of any offence against this Act on the complaint of any person other than—
(a) the Director of Wild Life Preservation or any other officer authorised in this behalf by the Central Government; or
(aa) the Member-Secretary, Central Zoo Authority in matters relating to violation of the provisions of Chapter IVA; or
(ab) Member-Secretary, Tiger Conservation Authority; or
(ac) Director of the concerned tiger reserve; or
(b) the Chief Wild Life Warden, or any other officer authorised in this behalf by the State Government subject to such conditions as may be specified by that Government; or
(bb) the officer-in-charge of the zoo in respect of violation of provisions of section 38J; or
(c) any person who has given notice of not less than sixty days, in the manner prescribed, of the alleged offence and of his intention to make a complaint, to the Central Government or the State Government or the officer authorised as aforesaid.`,
      },
      {
        number: "56",
        label: "Section 56",
        marginalNote: "Operation of other laws not barred",
        source: src(44),
        summary:
          "This Act does not bar prosecution under any other law for the same act, and the higher punishment under such other law remains available. But no person may be punished twice for the same offence (double jeopardy safeguard).",
        verbatim: `Nothing in this Act shall be deemed to prevent any person from being prosecuted under any other law for the time being in force, for any act or omission which constitutes an offence against this Act or from being liable under such other law to any higher punishment or penalty than that provided by this Act: Provided that no person shall be punished twice for the same offence.`,
      },
      {
        number: "57",
        label: "Section 57",
        marginalNote: "Presumption to be made in certain cases",
        source: src(44),
        summary:
          "Reverse-burden clause: once the prosecution proves possession, custody or control of a captive animal, article, meat, trophy or specified plant, the law presumes it is unlawful — the accused must prove the contrary.",
        verbatim: `Where, in any prosecution for an offence against this Act, it is established that a person is in possession, custody or control of any captive animal, animal article, meat, trophy, uncured trophy, specified plant, or part or derivative thereof it shall be presumed, until the contrary is proved, the burden of proving which shall lie on the accused, that such person is in unlawful possession, custody or control of such captive animal, animal article, meat, trophy, uncured trophy, specified plant, or part or derivative thereof.`,
      },
      {
        number: "58",
        label: "Section 58",
        marginalNote: "Offences by Companies",
        source: src(44),
        summary:
          "Where a company commits an offence, every person in charge of and responsible for its business at that time is deemed guilty — but escapes if proving no knowledge or due diligence. Additionally, any director/manager/secretary with whose consent, connivance or neglect the offence was committed is also liable. 'Company' includes firms and associations; 'director' includes a firm partner.",
        verbatim: `(1) Where an offence against this Act has been committed by a company, every person who, at the time the offence was committed, was in charge of, and was responsible to, the company for the conduct of the business of the company as well as the company, shall be deemed to be guilty of the offence and shall be liable to be proceeded against and punished accordingly:

Provided that nothing contained in this sub-section shall render any such person liable to any punishment, if he proves that the offence was committed without his knowledge or that he exercised all due diligence to prevent the commission of such offence.

(2) Notwithstanding anything contained in sub-section (1), where an offence against this Act has been committed by a company and it is proved that the offence has been committed with the consent or connivance of, or is attributable to any neglect on the part of, any director, manager, secretary or other officer of the company, such director, manager, secretary or other officer shall also be deemed to be guilty of that offence and shall be liable to be proceeded against and punished accordingly.

Explanation.—For the purposes of this section,—
(a) "company" means any body corporate and includes a firm or other association of individuals; and
(b) "director", in relation to a firm, means a partner in the firm.`,
      },
    ],
  },
  ],
};
