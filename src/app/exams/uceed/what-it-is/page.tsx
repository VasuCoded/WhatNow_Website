"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

// --- Translations ---

const translations = {
  en: {
    pageTitle: "UCEED — What It Is",
    crumbExams: "Exams",
    crumbUceed: "UCEED",
    crumbWhatItIs: "What It Is",

    s01Title: "The basics",
    s01Intro:
      "UCEED — Undergraduate Common Entrance Exam for Design — is conducted by IIT Bombay every January. It's the only standardised entrance exam that opens the door to Bachelor of Design (B.Des) programs at IITs at the undergraduate level. If you want to study design at an IIT, this is the one exam you write.",
    s01Card1Label: "Exam Format",
    s01Card1Title: "Part A + Part B",
    s01Card1Value: "Computer based + Pen & Paper",
    s01Card2Label: "Total Seats",
    s01Card2Title: "245 Seats",
    s01Card2Value: "Across 7 participating institutes",
    s01BoxStrong: "Crucial difference from JEE:",
    s01BoxText:
      "You do not need to be a Science student. UCEED is open to all streams — Science, Commerce, and Arts.",

    s02Title: "Eligibility",
    s02Intro: "Three criteria. You must meet all three to write the exam.",
    s02Crit1Title: "Age limit",
    s02Crit1Text:
      "For General, EWS, and OBC-NCL candidates: born on or after October 1, 2001. For SC, ST, and PwD candidates: born on or after October 1, 1996.",
    s02Crit2Title: "Number of attempts",
    s02Crit2Text:
      "Maximum of two attempts. They must be in consecutive years. You can write it in your Class XII year, and the year immediately after. That's it.",
    s02Crit3Title: "Qualifying exam",
    s02Crit3Text:
      "You must have passed Class XII (or equivalent) in 2025, or be appearing for it in 2026. All streams (Science, Commerce, Arts & Humanities) are eligible.",
    s02BoxHeading: "The 70% Board Requirement",
    s02BoxTextPre:
      "There is no minimum aggregate for writing the UCEED exam itself. However, IITs internally mandate a minimum of ",
    s02BoxTextStrong: "70% in Class XII",
    s02BoxTextPost:
      " for admission (65% for SC/ST/PwD candidates). A strong UCEED rank will not override this board requirement.",

    s03Title: "Exam Structure",
    s03Intro:
      "One paper. Three hours total. 300 marks. Two mandatory parts — both must be attempted. Missing either Part A or Part B is not an option.",
    s03Card1Label: "Part A (Computer-based)",
    s03Card1Title: "2 Hours / 200 Marks",
    s03Card1Value:
      "Tests spatial reasoning, visual dynamics, and analytical skills through MCQ, MSQ, and NAT formats.",
    s03Card2Label: "Part B (Pen & Paper)",
    s03Card2Title: "1 Hour / 100 Marks",
    s03Card2Value:
      "Tests drawing, sketching, and design aptitude. Only evaluated if you clear the Part A cutoff.",
    s03BoxHeading: "Part B Discrepancy Rule",
    s03BoxPre:
      "Part B is evaluated manually by two independent evaluators. If their scores differ by more than ",
    s03BoxStrong: "20 marks",
    s03BoxPost:
      ", a third evaluator is brought in. Do not use generic shading techniques; originality is aggressively rewarded.",

    s04Title: "Marking Scheme",
    s04ColType: "Question Type",
    s04ColCorrect: "Correct",
    s04ColPartial: "Partial",
    s04ColIncorrect: "Incorrect",
    s04Rows: [
      ["NAT (Numerical)", "+4", "None", "0"],
      ["MSQ (Multiple Select)", "+4", "+3 / +2 / +1", "-1"],
      ["MCQ (Multiple Choice)", "+3", "None", "-0.71"],
    ],

    s05Title: "Syllabus — what actually appears",
    s05Intro:
      "IIT Bombay explicitly states that the syllabus is exhaustive and indicative — meaning nothing outside these topics will appear, but not all topics are tested every year.",
    s05PartAHeading: "Part A topics",
    s05PartACol1: "Topic area",
    s05PartACol2: "What it actually tests",
    s05PartARows: [
      [
        "Visualization and Spatial Reasoning",
        "Rotating and transforming 2D shapes and 3D objects mentally. Folding/unfolding, mirror images, pattern completion, spatial relationships.",
      ],
      [
        "Practical and Scientific Knowledge",
        "How everyday objects work — mechanisms, materials, physics of daily life. Basic engineering and science intuition, not textbook formulae.",
      ],
      [
        "Observation and Design Sensitivity",
        "Noticing what most people tune out. Visual hierarchies, anomalies in images, what's wrong here, attention to detail. This is developed through habit, not mugging.",
      ],
      [
        "Environment and Society",
        "General awareness of how design intersects with environmental issues, culture, and society. Indian crafts, sustainability, socially relevant design.",
      ],
      [
        "Analytical and Logical Reasoning",
        "Verbal and non-verbal reasoning, sequences, pattern recognition, quantitative reasoning.",
      ],
      [
        "Language",
        "Reading and understanding standard English. Comprehension passages, vocabulary in context.",
      ],
      [
        "Creativity",
        "Analogies (verbal and non-verbal), metaphors, signs and symbols. Lateral thinking and novel associations.",
      ],
    ],
    s05PartBHeading: "Part B topics",
    s05PartBCol1: "Sub-section",
    s05PartBCol2: "What it tests in practice",
    s05PartBRows: [
      [
        "Drawing",
        "Draw products, people, or scenes in proportion. Tests line quality, composition, perspective, shading, and your ability to communicate visually. Annotation matters — explain what you're drawing and why. A clean, labelled, well-composed drawing will outscore a technically polished one that's poorly explained.",
      ],
      [
        "Design Aptitude",
        "A structured design problem. You're asked to identify a real-world issue, propose a solution, and justify your thinking. Think about: user, context, materials, ergonomics, feasibility. Drawing quality matters less here than structured reasoning. This section is worth 50 marks and significantly underprepped by most students.",
      ],
    ],

    s06Title: "The cutoff system — two walls, not one",
    s06Intro:
      "Most students think cutoff means the rank you need to get into an IIT. There are actually two separate cutoffs. Failing the first one means your Part B drawing never even gets evaluated.",
    s06Wall1Heading: "Wall 1 — Part A qualifying cutoff",
    s06Wall1Text:
      "After Part A is scored, IIT Bombay calculates a qualifying cutoff using the mean and standard deviation of all Part A scores. Only candidates who clear this mark have their Part B evaluated and receive a rank.",
    s06Box1Heading:
      "UCEED 2026 Part A stats (official, released February 5, 2026):",
    s06Box1Line1Pre: "Mean score: ",
    s06Box1Line1Mid: "70.86",
    s06Box1Line1Sep: " · Standard deviation: ",
    s06Box1Line1SD: "25.77",
    s06Box1Line2:
      "Formula: Cutoff (delta) = mean (mu) + 0.5 x standard deviation (sigma)",
    s06Box1Line3Pre: "General cutoff — ",
    s06Box1Line3Strong: "83.74 marks",
    s06Box1Line3Post: " out of 200",
    s06Box1Line3b: "OBC-NCL / EWS: 0.9 x delta  |  SC / ST / PwD: 0.5 x delta",
    s06Wall1Text2:
      "In 2025, approximately 15,986 students appeared, and only around 5,703 — roughly 36% — cleared the Part A cutoff and received a rank. If you don't clear Part A, your Part B answer booklet isn't evaluated and your scorecard only shows Part A marks.",
    s06Wall2Heading: "Wall 2 — Admission closing ranks",
    s06Wall2Text:
      "Getting a rank doesn't guarantee admission. Seats are filled in five counselling rounds based on All India Rank. The table below shows approximate closing ranks (General/Open category) based on 2026 Round 1 data and historical trends.",
    s06TableCol1: "Institute",
    s06TableCol2: "Approx. closing rank (Open, 2026)",
    s06TableCol3: "Seats (Open)",
    s06ClosingRanks: [
      ["IIT Bombay", "~14 (Round 1, 2026)", "14"],
      ["IIT Delhi", "~30-40", "8"],
      ["IIT Hyderabad", "~40-55", "11"],
      ["IIT Guwahati", "~70-80", "22"],
      ["IIT Roorkee", "~90-110", "8"],
      ["IIT Indore", "~100-130", "6"],
      ["IIITDM Jabalpur", "~150-200", "25"],
    ],
    s06Box2Strong: "Note:",
    s06Box2Text:
      " These are General/Open category closing ranks. SC, ST, OBC-NCL, EWS, and PwD candidates have separate rank lists with different cutoffs — generally more accessible. Always plan around your own category rank, not just AIR.",
    s06GuideHeading: "Score-to-outcome rough guide",
    s06ScoreGuide: [
      {
        range: "200+",
        outcome:
          "Serious IIT Bombay territory. The 2025 topper scored 230.16 out of 300.",
      },
      {
        range: "170-200",
        outcome:
          "IIT Delhi to IIT Guwahati range. Competitive for any top program outside Bombay.",
      },
      {
        range: "150-170",
        outcome:
          "IIT Hyderabad, IIT Roorkee, IIT Indore, IIITDM Jabalpur in reach.",
      },
      {
        range: "120-150",
        outcome:
          "May qualify Part A; IIITDM Jabalpur possible. Also look at result-sharing institutes.",
      },
    ],

    s07Title: "The seven institutes — what each one actually is",
    institutes: [
      {
        name: "IIT Bombay",
        seats: "37 seats",
        dept: "IDC School of Design, Mumbai",
        paras: [
          "The oldest and most recognised design program in the country. IDC — Industrial Design Centre — has been running since 1969 and has built the strongest alumni network in Indian design. The B.Des program runs eight semesters with heavy project-based learning. In year three, students can choose to shift to a five-year dual-degree B.Des + M.Des.",
          "Specialisations available at IDC include Industrial Design, Communication Design, Animation Design, Interaction Design, and Mobility and Vehicle Design.",
        ],
        note: "Stream restriction: All streams eligible · Fees: ~₹8.83 lakhs total (4 years)",
      },
      {
        name: "IIT Delhi",
        seats: "20 seats",
        dept: "Department of Design, New Delhi",
        paras: [
          "The capital gives IIT Delhi a location advantage no other institute has — direct access to government, policy, and every major consultancy and firm in India. The B.Des program is explicitly human-centred: studio-based learning, multidisciplinary collaborations, and strong industry interface.",
          "Small intake (20 seats) means intense peer competition and close faculty attention. Open category closes around rank 15-40 consistently — it's the second most competitive design program in India.",
        ],
        note: "Stream restriction: All streams eligible",
      },
      {
        name: "IIT Guwahati",
        seats: "56 seats",
        dept: "Department of Design, Guwahati",
        paras: [
          "The largest seat pool among the participating IITs — 56 seats — which makes it a strong destination for students in the rank range of 50-100. The program focuses on the intersection of technology and experience design, with interdisciplinary research cutting across engineering, design, and social sciences. Located on the Brahmaputra, the campus environment is unlike any urban IIT.",
        ],
        note: "Stream restriction: Physics, Chemistry, Mathematics required — Arts/Commerce students NOT eligible",
      },
      {
        name: "IIT Hyderabad",
        seats: "30 seats",
        dept: "Department of Design, Hyderabad",
        paras: [
          "Established in 2014 with an interdisciplinary approach at its core. The B.Des curriculum is structured in four levels — broad foundation in year one to specialisation by year three. Students can specialise in Product Design, Visual Design, Interaction Design, UX Design, or Film and Animation.",
          "Hyderabad as a city is increasingly relevant for design — strong startup ecosystem, major tech firms, and a growing creative industry.",
        ],
        note: "Stream restriction: All streams eligible",
      },
      {
        name: "IIT Indore",
        seats: "16 seats",
        dept: "School of Innovation, Indore",
        paras: [
          "The newest program in this list — first batch joined in 2025. IIT Indore frames design through innovation, with four specialisation areas: Urban System Innovation, Educational Technologies, Healthcare Systems, and Sustainable Energy Systems. Less traditional design school, more innovation-focused — which suits students who want to work on large systems problems.",
          "Only 16 seats makes this a smaller, tighter cohort. Given how new it is, there's limited alumni data on placements — factor this in.",
        ],
        note: "Stream restriction: All streams eligible · Program started 2025 — placement data limited",
      },
      {
        name: "IIT Roorkee",
        seats: "20 seats",
        dept: "Department of Design, Roorkee",
        paras: [
          "India's oldest technical institution (1847) now offering design. The B.Des curriculum combines design with computing, engineering, and manufacturing — covering product design, user experience, materials, ergonomics, and sustainability. More industrially grounded than most other IIT design programs.",
        ],
        note: "Stream restriction: Physics, Chemistry, Mathematics required — Arts/Commerce students NOT eligible",
      },
      {
        name: "IIITDM Jabalpur",
        seats: "66 seats",
        dept: "Design Discipline, Jabalpur",
        paras: [
          "The largest seat count of any participating institute — 66 seats — and consistently the most accessible in terms of closing rank (~150-200 for Open category). The curriculum covers multiple design areas in initial semesters before specialising in product, space, or communication design.",
          "Not an IIT — it's an IIITDM (Indian Institute of Information Technology Design and Manufacturing). The distinction matters when comparing prestige and alumni networks, but the program quality is solid. It also conducts spot admission rounds if seats remain vacant after counselling, unlike the IITs.",
        ],
        note: "Stream restriction: Physics, Chemistry, Mathematics or Biology required",
      },
    ],

    s08Title: "Seat matrix — category-wise breakdown",
    s08Intro:
      "245 total seats. The table below is from the UCEED 2026 seat matrix.",
    s08HeaderInstitute: "Institute",
    s08HeaderTotal: "Total",
    s08Names: [
      "IIT Bombay",
      "IIT Delhi",
      "IIT Guwahati",
      "IIT Hyderabad",
      "IIT Indore",
      "IIT Roorkee",
      "IIITDM Jabalpur",
    ],
    s08TotalRowLabel: "Total",
    s08Footnote:
      "*PwD seats are horizontal — distributed within each category (Open, EWS, OBC-NCL, SC, ST), not separate from them. EWS certificates issued on or after April 1, 2026 are accepted. OBC-NCL certificates must also be dated April 1, 2026 or later.",

    s09Title: "Important dates — UCEED 2026 timeline",
    s09Dates: [
      {
        date: "Oct 1, 2025",
        event: "Registration opens",
        detail: "Online at uceed.iitb.ac.in (1:00 PM onwards)",
      },
      {
        date: "Nov 5, 2025",
        event: "Regular registration closes",
        detail: "Late fee period: Nov 5-10",
      },
      {
        date: "Nov 10, 2025",
        event: "Late registration closes",
        detail: "5:00 PM. Portal shuts automatically.",
      },
      {
        date: "Jan 2, 2026",
        event: "Admit card available",
        detail: "Download from candidate portal",
      },
      {
        date: "Jan 8, 2026",
        event: "Last date to report discrepancies",
        detail: "In admit card (5:00 PM)",
      },
      {
        date: "Jan 18, 2026",
        event: "UCEED 2026 exam",
        detail: "Sunday, 9:00 AM to 12:00 noon. Reporting from 7:00 AM.",
      },
      {
        date: "Jan 20, 2026",
        event: "Draft answer key released",
        detail: "Part A responses also available for download until results",
      },
      {
        date: "Feb 5, 2026",
        event: "Part A cutoff announced",
        detail: "Mean and standard deviation released",
      },
      {
        date: "Mar 6, 2026",
        event: "Results declared",
        detail: "Rank list published",
      },
      {
        date: "Mar 14 - Apr 10",
        event: "B.Des application window",
        detail: "Apply separately for institute admission",
      },
      {
        date: "Apr 21, 2026",
        event: "Round 1 seat allotment",
        detail: "",
      },
      {
        date: "Jul 31, 2026",
        event: "Last date to download scorecard",
        detail: "",
      },
    ],
    s09BoxStrong: "Important:",
    s09BoxText:
      " UCEED and B.Des admission are two separate processes. Qualifying the exam and getting a rank does not automatically enrol you. You must separately apply for B.Des admission through the IIT Bombay Admissions Portal between March 14 and April 10. Application processing fee: ₹4,000 (non-refundable).",

    s10Title: "Counselling — how seats get allocated",
    s10Intro:
      "Five rounds of seat allotment. Based on your AIR, your category, and the order of institutes you listed in your preference. You will receive allotment letters by email. Each round has a payment deadline — missing it cancels your seat.",
    s10Steps: [
      {
        title: "Apply for admission",
        desc: "After results, apply separately via the IIT Bombay Admissions Portal (March 14 - April 10). Fill your institute preferences in order. You can edit until the deadline — your final submission is locked.",
      },
      {
        title: "Round 1 allotment (April 21)",
        desc: "You receive a provisional allotment. If you get your first-choice institute: ACCEPT (freeze) or DECLINE. If you get a lower-preference institute: ACCEPT and FREEZE, or ACCEPT and FLOAT.",
      },
      {
        title: "Freeze or Float",
        desc: "Freeze = accept the current allotment, exit the process. Float = accept the current allotment but stay in the pool for subsequent rounds. If a higher-preference seat becomes available in a later round, it is automatically allocated to you and you lose the earlier one. Float is active until Round 4.",
      },
      {
        title: "Pay the Seat Acceptance Fee",
        desc: "₹60,000 for General/EWS/OBC-NCL. ₹15,000 for SC/ST/PwD. Pay only once — it's adjusted against institute fees at joining. Miss the payment window and your seat is cancelled; you're out of all further rounds.",
      },
      {
        title: "Rounds 2-5 (May-July)",
        desc: "Vacant seats from declined or forfeited allotments are redistributed. Rounds 3-5 fill residual vacancies. If you paid in Round 1 and chose Float, you may be upgraded in later rounds automatically.",
      },
    ],
    s10BoxStrong: "On withdrawals:",
    s10BoxText:
      " Candidates who accepted seats in Rounds 1 or 2 can withdraw before the Round 2 withdrawal deadline for a partial refund (₹55,000 back for General; ₹10,000 back for SC/ST/PwD — ₹5,000 cancellation charge is deducted). After the Round 2 withdrawal deadline, fees from Rounds 3-5 are non-refundable.",

    s11Title: "Exam day — what to bring and expect",
    s11ReportHeading: "Reporting and entry",
    s11ReportText:
      "Reporting from 7:00 AM. Exam starts at 9:00 AM sharp — no entry after that. Bring a printed copy of your admit card and an original photo ID. Biometric data (thumb impression, photo) is captured on exam day and may be re-verified at admission.",
    s11BringHeading: "What you can bring",
    s11BringList: [
      "Pencils (black shades only) in a transparent packet",
      "A writing board of A4 size (optional but useful for Part B)",
      "Admit card (printed)",
      "Original photo ID",
    ],
    s11CannotHeading: "What you cannot bring",
    s11CannotList: [
      "Mobile phones, smartwatches, or any electronic device",
      "Sketch pens, colour pencils, poster colours, or any colouring material",
      "Geometry boxes, log books, calculators",
      "Any study material of any kind",
    ],
    s11PartAHeading: "Part A logistics",
    s11PartAText:
      "Computer-based. The exam interface is the same system IIT Bombay uses for other CBT exams — practise it beforehand using the official sample interface at uceed.iitb.ac.in. Technical issues are handled by invigilators and time lost to technical problems is automatically compensated. You cannot leave during the exam.",
    s11PartBHeading: "Part B logistics",
    s11PartBText:
      "The questions appear on your computer screen. You draw and write answers in the physical answer booklet provided by the invigilator. Booklets are collected at the end of the examination. Do not leave early — you must remain in the hall for the full three hours.",
    s11BoxStrong: "Exam cities (27 in 2026):",
    s11BoxText:
      " Ahmedabad, Bengaluru, Bhopal, Bhubaneswar, Chandigarh/Mohali, Chennai, Coimbatore, Dehradun, Delhi, Ernakulam, Guwahati, Hubballi, Hyderabad, Jaipur, Kolkata, Kozhikode, Lucknow, Mumbai, Nagpur, Noida, Panaji, Patna, Pune, Raipur, Thiruvananthapuram, Thrissur, Visakhapatnam.",
    s11BoxText2:
      "Pick three cities in preference order at registration. City change requests are not accepted after registration is complete.",
  },
  hi: {
    pageTitle: "UCEED — yah kya hai",
    crumbExams: "परीक्षाएं",
    crumbUceed: "UCEED",
    crumbWhatItIs: "यह क्या है",

    s01Title: "बुनियादी बातें",
    s01Intro:
      "UCEED — Undergraduate Common Entrance Exam for Design — हर जनवरी में IIT Bombay द्वारा आयोजित की जाती है। यह एकमात्र मानकीकृत प्रवेश परीक्षा है जो स्नातक स्तर पर IITs में Bachelor of Design (B.Des) कार्यक्रमों का दरवाजा खोलती है। अगर आप किसी IIT में डिज़ाइन पढ़ना चाहते हैं, तो आपको यही एक परीक्षा देनी होती है।",
    s01Card1Label: "परीक्षा प्रारूप",
    s01Card1Title: "Part A + Part B",
    s01Card1Value: "कंप्यूटर आधारित + पेन और पेपर",
    s01Card2Label: "कुल सीटें",
    s01Card2Title: "245 सीटें",
    s01Card2Value: "7 भाग लेने वाले संस्थानों में",
    s01BoxStrong: "JEE से अहम अंतर:",
    s01BoxText:
      "आपका साइंस का छात्र होना ज़रूरी नहीं है। UCEED सभी स्ट्रीम के लिए खुली है — Science, Commerce, और Arts।",

    s02Title: "पात्रता",
    s02Intro: "तीन मानदंड। परीक्षा देने के लिए आपको तीनों को पूरा करना होगा।",
    s02Crit1Title: "आयु सीमा",
    s02Crit1Text:
      "General, EWS, और OBC-NCL उम्मीदवारों के लिए: 1 अक्टूबर 2001 को या उसके बाद जन्म। SC, ST, और PwD उम्मीदवारों के लिए: 1 अक्टूबर 1996 को या उसके बाद जन्म।",
    s02Crit2Title: "प्रयासों की संख्या",
    s02Crit2Text:
      "अधिकतम दो प्रयास। ये लगातार वर्षों में होने चाहिए। आप इसे अपने Class XII वाले वर्ष में, और उसके ठीक बाद वाले वर्ष में दे सकते हैं। बस इतना ही।",
    s02Crit3Title: "अर्हक परीक्षा",
    s02Crit3Text:
      "आपको 2025 में Class XII (या समकक्ष) पास होना चाहिए, या 2026 में इसमें बैठने वाले होना चाहिए। सभी स्ट्रीम (Science, Commerce, Arts & Humanities) पात्र हैं।",
    s02BoxHeading: "70% बोर्ड की शर्त",
    s02BoxTextPre:
      "UCEED परीक्षा देने के लिए खुद कोई न्यूनतम कुल प्रतिशत नहीं है। हालांकि, IITs आंतरिक रूप से प्रवेश के लिए न्यूनतम ",
    s02BoxTextStrong: "Class XII में 70%",
    s02BoxTextPost:
      " अनिवार्य करते हैं (SC/ST/PwD उम्मीदवारों के लिए 65%)। एक मजबूत UCEED रैंक इस बोर्ड की शर्त को नहीं हटा सकती।",

    s03Title: "परीक्षा संरचना",
    s03Intro:
      "एक पेपर। कुल तीन घंटे। 300 अंक। दो अनिवार्य भाग — दोनों का प्रयास करना ज़रूरी है। Part A या Part B में से किसी को छोड़ना कोई विकल्प नहीं है।",
    s03Card1Label: "Part A (कंप्यूटर आधारित)",
    s03Card1Title: "2 घंटे / 200 अंक",
    s03Card1Value:
      "MCQ, MSQ, और NAT प्रारूपों के ज़रिए स्थानिक तर्क, दृश्य गतिशीलता, और विश्लेषणात्मक कौशल की परख करता है।",
    s03Card2Label: "Part B (पेन और पेपर)",
    s03Card2Title: "1 घंटा / 100 अंक",
    s03Card2Value:
      "ड्राइंग, स्केचिंग, और डिज़ाइन अभिरुचि की परख करता है। यह तभी जांचा जाता है जब आप Part A का कटऑफ पार करते हैं।",
    s03BoxHeading: "Part B विसंगति नियम",
    s03BoxPre:
      "Part B का मूल्यांकन दो स्वतंत्र मूल्यांकनकर्ताओं द्वारा हाथ से किया जाता है। अगर उनके अंकों में ",
    s03BoxStrong: "20 अंक",
    s03BoxPost:
      " से ज़्यादा का अंतर होता है, तो एक तीसरा मूल्यांकनकर्ता लाया जाता है। आम शेडिंग तकनीकों का इस्तेमाल न करें; मौलिकता को ज़ोरदार तरीके से पुरस्कृत किया जाता है।",

    s04Title: "अंकन योजना",
    s04ColType: "प्रश्न प्रकार",
    s04ColCorrect: "सही",
    s04ColPartial: "आंशिक",
    s04ColIncorrect: "गलत",
    s04Rows: [
      ["NAT (न्यूमेरिकल)", "+4", "कोई नहीं", "0"],
      ["MSQ (मल्टीपल सेलेक्ट)", "+4", "+3 / +2 / +1", "-1"],
      ["MCQ (मल्टीपल चॉइस)", "+3", "कोई नहीं", "-0.71"],
    ],

    s05Title: "पाठ्यक्रम — असल में क्या आता है",
    s05Intro:
      "IIT Bombay स्पष्ट रूप से कहता है कि पाठ्यक्रम exhaustive and indicative है — यानी इन विषयों के बाहर कुछ नहीं आएगा, लेकिन हर साल सभी विषय नहीं पूछे जाते।",
    s05PartAHeading: "Part A विषय",
    s05PartACol1: "विषय क्षेत्र",
    s05PartACol2: "असल में क्या परखा जाता है",
    s05PartARows: [
      [
        "Visualization and Spatial Reasoning",
        "2D आकृतियों और 3D वस्तुओं को मन में घुमाना और रूपांतरित करना। मोड़ना/खोलना, दर्पण प्रतिबिंब, पैटर्न पूरा करना, स्थानिक संबंध।",
      ],
      [
        "Practical and Scientific Knowledge",
        "रोज़मर्रा की वस्तुएं कैसे काम करती हैं — तंत्र, सामग्री, दैनिक जीवन का भौतिकी। बुनियादी इंजीनियरिंग और विज्ञान की समझ, न कि किताबी सूत्र।",
      ],
      [
        "Observation and Design Sensitivity",
        "जिसे ज़्यादातर लोग अनदेखा कर देते हैं उसे नोटिस करना। दृश्य पदानुक्रम, छवियों में विसंगतियां, what's wrong here, बारीकियों पर ध्यान। यह आदत से विकसित होता है, रटने से नहीं।",
      ],
      [
        "Environment and Society",
        "डिज़ाइन कैसे पर्यावरणीय मुद्दों, संस्कृति, और समाज से जुड़ता है इसकी सामान्य जागरूकता। भारतीय शिल्प, स्थिरता, सामाजिक रूप से प्रासंगिक डिज़ाइन।",
      ],
      [
        "Analytical and Logical Reasoning",
        "मौखिक और गैर-मौखिक तर्क, अनुक्रम, पैटर्न पहचान, मात्रात्मक तर्क।",
      ],
      [
        "Language",
        "मानक English को पढ़ना और समझना। बोधगम्यता गद्यांश, संदर्भ में शब्दावली।",
      ],
      [
        "Creativity",
        "उपमाएं (मौखिक और गैर-मौखिक), रूपक, संकेत और प्रतीक। पार्श्व चिंतन और नए संबंध।",
      ],
    ],
    s05PartBHeading: "Part B विषय",
    s05PartBCol1: "उप-खंड",
    s05PartBCol2: "व्यवहार में क्या परखा जाता है",
    s05PartBRows: [
      [
        "Drawing",
        "उत्पादों, लोगों, या दृश्यों को अनुपात में बनाएं। यह रेखा की गुणवत्ता, संयोजन, परिप्रेक्ष्य, शेडिंग, और दृश्य रूप से संप्रेषित करने की आपकी क्षमता परखता है। एनोटेशन मायने रखता है — समझाएं कि आप क्या बना रहे हैं और क्यों। एक साफ, लेबल किया हुआ, अच्छी तरह संयोजित ड्राइंग एक तकनीकी रूप से परिष्कृत लेकिन ठीक से न समझाई गई ड्राइंग से ज़्यादा अंक पाएगी।",
      ],
      [
        "Design Aptitude",
        "एक संरचित डिज़ाइन समस्या। आपसे एक वास्तविक दुनिया की समस्या पहचानने, समाधान सुझाने, और अपनी सोच को सही ठहराने को कहा जाता है। इन पर सोचें: user, context, सामग्री, ergonomics, व्यवहार्यता। यहां ड्राइंग की गुणवत्ता से ज़्यादा संरचित तर्क मायने रखता है। यह खंड 50 अंकों का है और ज़्यादातर छात्रों द्वारा काफी कम तैयार किया जाता है।",
      ],
    ],

    s06Title: "कटऑफ प्रणाली — एक नहीं, दो दीवारें",
    s06Intro:
      "ज़्यादातर छात्र सोचते हैं कि cutoff का मतलब वह रैंक है जो आपको किसी IIT में जाने के लिए चाहिए। असल में दो अलग-अलग कटऑफ होते हैं। पहली को पार न करने का मतलब है कि आपकी Part B ड्राइंग का मूल्यांकन कभी होता ही नहीं।",
    s06Wall1Heading: "Wall 1 — Part A अर्हक कटऑफ",
    s06Wall1Text:
      "Part A के अंक आने के बाद, IIT Bombay सभी Part A अंकों के माध्य और मानक विचलन का उपयोग करके एक अर्हक कटऑफ निकालता है। केवल वही उम्मीदवार जो यह अंक पार करते हैं, उनके Part B का मूल्यांकन होता है और उन्हें रैंक मिलती है।",
    s06Box1Heading:
      "UCEED 2026 Part A आंकड़े (आधिकारिक, 5 फरवरी 2026 को जारी):",
    s06Box1Line1Pre: "माध्य स्कोर: ",
    s06Box1Line1Mid: "70.86",
    s06Box1Line1Sep: " · मानक विचलन: ",
    s06Box1Line1SD: "25.77",
    s06Box1Line2:
      "सूत्र: Cutoff (delta) = माध्य (mu) + 0.5 x मानक विचलन (sigma)",
    s06Box1Line3Pre: "General कटऑफ — ",
    s06Box1Line3Strong: "83.74 अंक",
    s06Box1Line3Post: " 200 में से",
    s06Box1Line3b: "OBC-NCL / EWS: 0.9 x delta  |  SC / ST / PwD: 0.5 x delta",
    s06Wall1Text2:
      "2025 में, करीब 15,986 छात्र बैठे, और केवल लगभग 5,703 — मोटे तौर पर 36% — ने Part A का कटऑफ पार किया और रैंक पाई। अगर आप Part A पार नहीं करते, तो आपकी Part B उत्तर पुस्तिका का मूल्यांकन नहीं होता और आपके स्कोरकार्ड पर केवल Part A अंक दिखते हैं।",
    s06Wall2Heading: "Wall 2 — प्रवेश क्लोज़िंग रैंक",
    s06Wall2Text:
      "रैंक मिलने से प्रवेश की गारंटी नहीं मिलती। सीटें All India Rank के आधार पर पांच काउंसलिंग राउंड में भरी जाती हैं। नीचे दी गई तालिका 2026 Round 1 के आंकड़ों और ऐतिहासिक रुझानों के आधार पर अनुमानित क्लोज़िंग रैंक (General/Open श्रेणी) दिखाती है।",
    s06TableCol1: "Institute",
    s06TableCol2: "अनुमानित क्लोज़िंग रैंक (Open, 2026)",
    s06TableCol3: "सीटें (Open)",
    s06ClosingRanks: [
      ["IIT Bombay", "~14 (Round 1, 2026)", "14"],
      ["IIT Delhi", "~30-40", "8"],
      ["IIT Hyderabad", "~40-55", "11"],
      ["IIT Guwahati", "~70-80", "22"],
      ["IIT Roorkee", "~90-110", "8"],
      ["IIT Indore", "~100-130", "6"],
      ["IIITDM Jabalpur", "~150-200", "25"],
    ],
    s06Box2Strong: "ध्यान दें:",
    s06Box2Text:
      " ये General/Open श्रेणी की क्लोज़िंग रैंक हैं। SC, ST, OBC-NCL, EWS, और PwD उम्मीदवारों की अलग रैंक सूचियां होती हैं जिनके कटऑफ अलग होते हैं — आमतौर पर अधिक सुलभ। हमेशा सिर्फ AIR नहीं, बल्कि अपनी श्रेणी रैंक के हिसाब से योजना बनाएं।",
    s06GuideHeading: "स्कोर-से-परिणाम मोटा अनुमान",
    s06ScoreGuide: [
      {
        range: "200+",
        outcome:
          "गंभीर IIT Bombay का दायरा। 2025 के टॉपर ने 300 में से 230.16 अंक पाए।",
      },
      {
        range: "170-200",
        outcome:
          "IIT Delhi से IIT Guwahati का दायरा। Bombay के बाहर किसी भी टॉप कार्यक्रम के लिए प्रतिस्पर्धी।",
      },
      {
        range: "150-170",
        outcome:
          "IIT Hyderabad, IIT Roorkee, IIT Indore, IIITDM Jabalpur पहुंच में।",
      },
      {
        range: "120-150",
        outcome:
          "Part A अर्हता मिल सकती है; IIITDM Jabalpur संभव। परिणाम-साझा करने वाले संस्थानों को भी देखें।",
      },
    ],

    s07Title: "सात संस्थान — हर एक असल में क्या है",
    institutes: [
      {
        name: "IIT Bombay",
        seats: "37 सीटें",
        dept: "IDC School of Design, Mumbai",
        paras: [
          "देश का सबसे पुराना और सबसे मान्यता प्राप्त डिज़ाइन कार्यक्रम। IDC — Industrial Design Centre — 1969 से चल रहा है और इसने भारतीय डिज़ाइन में सबसे मजबूत एल्युमनाई नेटवर्क बनाया है। B.Des कार्यक्रम आठ सेमेस्टर का होता है जिसमें भारी प्रोजेक्ट-आधारित सीख होती है। तीसरे वर्ष में, छात्र पांच-वर्षीय डुअल-डिग्री B.Des + M.Des में जाने का चुनाव कर सकते हैं।",
          "IDC में उपलब्ध विशेषज्ञताओं में Industrial Design, Communication Design, Animation Design, Interaction Design, और Mobility and Vehicle Design शामिल हैं।",
        ],
        note: "स्ट्रीम प्रतिबंध: सभी स्ट्रीम पात्र · फीस: ~₹8.83 लाख कुल (4 वर्ष)",
      },
      {
        name: "IIT Delhi",
        seats: "20 सीटें",
        dept: "Department of Design, New Delhi",
        paras: [
          "राजधानी होने से IIT Delhi को एक ऐसा स्थान लाभ मिलता है जो किसी और संस्थान के पास नहीं — सरकार, नीति, और भारत की हर बड़ी कंसल्टेंसी व फर्म तक सीधी पहुंच। B.Des कार्यक्रम स्पष्ट रूप से मानव-केंद्रित है: स्टूडियो-आधारित सीख, बहु-विषयक सहयोग, और मजबूत उद्योग संपर्क।",
          "छोटा प्रवेश (20 सीटें) मतलब तीव्र साथी प्रतिस्पर्धा और करीबी फैकल्टी ध्यान। Open श्रेणी लगातार करीब रैंक 15-40 पर बंद होती है — यह भारत का दूसरा सबसे प्रतिस्पर्धी डिज़ाइन कार्यक्रम है।",
        ],
        note: "स्ट्रीम प्रतिबंध: सभी स्ट्रीम पात्र",
      },
      {
        name: "IIT Guwahati",
        seats: "56 सीटें",
        dept: "Department of Design, Guwahati",
        paras: [
          "भाग लेने वाले IITs में सबसे बड़ी सीट संख्या — 56 सीटें — जो इसे 50-100 के रैंक दायरे वाले छात्रों के लिए एक मजबूत गंतव्य बनाती है। यह कार्यक्रम तकनीक और अनुभव डिज़ाइन के संगम पर केंद्रित है, जिसमें इंजीनियरिंग, डिज़ाइन, और सामाजिक विज्ञान को जोड़ते हुए अंतर-विषयक शोध है। ब्रह्मपुत्र के किनारे स्थित, यह कैंपस माहौल किसी भी शहरी IIT से अलग है।",
        ],
        note: "स्ट्रीम प्रतिबंध: Physics, Chemistry, Mathematics ज़रूरी — Arts/Commerce छात्र पात्र नहीं",
      },
      {
        name: "IIT Hyderabad",
        seats: "30 सीटें",
        dept: "Department of Design, Hyderabad",
        paras: [
          "2014 में एक अंतर-विषयक दृष्टिकोण को मूल में रखकर स्थापित। B.Des पाठ्यक्रम चार स्तरों में संरचित है — पहले वर्ष में व्यापक नींव से लेकर तीसरे वर्ष तक विशेषज्ञता। छात्र Product Design, Visual Design, Interaction Design, UX Design, या Film and Animation में विशेषज्ञता ले सकते हैं।",
          "एक शहर के रूप में Hyderabad डिज़ाइन के लिए तेज़ी से प्रासंगिक होता जा रहा है — मजबूत स्टार्टअप इकोसिस्टम, बड़ी टेक फर्में, और बढ़ता रचनात्मक उद्योग।",
        ],
        note: "स्ट्रीम प्रतिबंध: सभी स्ट्रीम पात्र",
      },
      {
        name: "IIT Indore",
        seats: "16 सीटें",
        dept: "School of Innovation, Indore",
        paras: [
          "इस सूची में सबसे नया कार्यक्रम — पहला बैच 2025 में आया। IIT Indore डिज़ाइन को नवाचार के ज़रिए देखता है, जिसमें चार विशेषज्ञता क्षेत्र हैं: Urban System Innovation, Educational Technologies, Healthcare Systems, और Sustainable Energy Systems। पारंपरिक डिज़ाइन स्कूल से कम, नवाचार-केंद्रित ज़्यादा — जो उन छात्रों को सूट करता है जो बड़ी सिस्टम समस्याओं पर काम करना चाहते हैं।",
          "सिर्फ 16 सीटें इसे एक छोटा, सघन समूह बनाती हैं। यह कितना नया है इसे देखते हुए, प्लेसमेंट पर सीमित एल्युमनाई डेटा है — इसे ध्यान में रखें।",
        ],
        note: "स्ट्रीम प्रतिबंध: सभी स्ट्रीम पात्र · कार्यक्रम 2025 में शुरू हुआ — प्लेसमेंट डेटा सीमित",
      },
      {
        name: "IIT Roorkee",
        seats: "20 सीटें",
        dept: "Department of Design, Roorkee",
        paras: [
          "भारत की सबसे पुरानी तकनीकी संस्था (1847) अब डिज़ाइन की पेशकश कर रही है। B.Des पाठ्यक्रम डिज़ाइन को कंप्यूटिंग, इंजीनियरिंग, और विनिर्माण के साथ जोड़ता है — product design, user experience, सामग्री, ergonomics, और स्थिरता को कवर करते हुए। ज़्यादातर अन्य IIT डिज़ाइन कार्यक्रमों की तुलना में अधिक औद्योगिक रूप से ज़मीनी।",
        ],
        note: "स्ट्रीम प्रतिबंध: Physics, Chemistry, Mathematics ज़रूरी — Arts/Commerce छात्र पात्र नहीं",
      },
      {
        name: "IIITDM Jabalpur",
        seats: "66 सीटें",
        dept: "Design Discipline, Jabalpur",
        paras: [
          "किसी भी भाग लेने वाले संस्थान की सबसे बड़ी सीट संख्या — 66 सीटें — और क्लोज़िंग रैंक के मामले में लगातार सबसे सुलभ (Open श्रेणी के लिए ~150-200)। पाठ्यक्रम शुरुआती सेमेस्टर में कई डिज़ाइन क्षेत्रों को कवर करता है, फिर product, space, या communication design में विशेषज्ञता।",
          "यह IIT नहीं है — यह एक IIITDM (Indian Institute of Information Technology Design and Manufacturing) है। प्रतिष्ठा और एल्युमनाई नेटवर्क की तुलना करते समय यह अंतर मायने रखता है, लेकिन कार्यक्रम की गुणवत्ता ठोस है। यह काउंसलिंग के बाद सीटें खाली रहने पर स्पॉट प्रवेश राउंड भी आयोजित करता है, IITs के विपरीत।",
        ],
        note: "स्ट्रीम प्रतिबंध: Physics, Chemistry, Mathematics या Biology ज़रूरी",
      },
    ],

    s08Title: "सीट मैट्रिक्स — श्रेणी-वार विभाजन",
    s08Intro:
      "कुल 245 सीटें। नीचे दी गई तालिका UCEED 2026 सीट मैट्रिक्स से है।",
    s08HeaderInstitute: "Institute",
    s08HeaderTotal: "कुल",
    s08Names: [
      "IIT Bombay",
      "IIT Delhi",
      "IIT Guwahati",
      "IIT Hyderabad",
      "IIT Indore",
      "IIT Roorkee",
      "IIITDM Jabalpur",
    ],
    s08TotalRowLabel: "कुल",
    s08Footnote:
      "*PwD सीटें क्षैतिज होती हैं — हर श्रेणी (Open, EWS, OBC-NCL, SC, ST) के भीतर वितरित, उनसे अलग नहीं। 1 अप्रैल 2026 को या उसके बाद जारी EWS प्रमाणपत्र स्वीकार्य हैं। OBC-NCL प्रमाणपत्र भी 1 अप्रैल 2026 या उसके बाद की तारीख के होने चाहिए।",

    s09Title: "महत्वपूर्ण तिथियां — UCEED 2026 समयरेखा",
    s09Dates: [
      {
        date: "Oct 1, 2025",
        event: "पंजीकरण शुरू",
        detail: "uceed.iitb.ac.in पर ऑनलाइन (1:00 PM से)",
      },
      {
        date: "Nov 5, 2025",
        event: "नियमित पंजीकरण बंद",
        detail: "विलंब शुल्क अवधि: Nov 5-10",
      },
      {
        date: "Nov 10, 2025",
        event: "विलंबित पंजीकरण बंद",
        detail: "5:00 PM. पोर्टल अपने आप बंद हो जाता है।",
      },
      {
        date: "Jan 2, 2026",
        event: "एडमिट कार्ड उपलब्ध",
        detail: "उम्मीदवार पोर्टल से डाउनलोड करें",
      },
      {
        date: "Jan 8, 2026",
        event: "विसंगति रिपोर्ट करने की अंतिम तिथि",
        detail: "एडमिट कार्ड में (5:00 PM)",
      },
      {
        date: "Jan 18, 2026",
        event: "UCEED 2026 परीक्षा",
        detail: "रविवार, 9:00 AM से 12:00 दोपहर। रिपोर्टिंग 7:00 AM से।",
      },
      {
        date: "Jan 20, 2026",
        event: "ड्राफ्ट उत्तर कुंजी जारी",
        detail: "Part A उत्तर भी परिणाम तक डाउनलोड के लिए उपलब्ध",
      },
      {
        date: "Feb 5, 2026",
        event: "Part A कटऑफ घोषित",
        detail: "माध्य और मानक विचलन जारी",
      },
      {
        date: "Mar 6, 2026",
        event: "परिणाम घोषित",
        detail: "रैंक सूची प्रकाशित",
      },
      {
        date: "Mar 14 - Apr 10",
        event: "B.Des आवेदन विंडो",
        detail: "संस्थान प्रवेश के लिए अलग से आवेदन करें",
      },
      {
        date: "Apr 21, 2026",
        event: "Round 1 सीट आवंटन",
        detail: "",
      },
      {
        date: "Jul 31, 2026",
        event: "स्कोरकार्ड डाउनलोड करने की अंतिम तिथि",
        detail: "",
      },
    ],
    s09BoxStrong: "महत्वपूर्ण:",
    s09BoxText:
      " UCEED और B.Des प्रवेश दो अलग प्रक्रियाएं हैं। परीक्षा पास करना और रैंक पाना आपको अपने आप नामांकित नहीं करता। आपको 14 मार्च से 10 अप्रैल के बीच IIT Bombay Admissions Portal के ज़रिए B.Des प्रवेश के लिए अलग से आवेदन करना होगा। आवेदन प्रसंस्करण शुल्क: ₹4,000 (गैर-वापसी योग्य)।",

    s10Title: "काउंसलिंग — सीटें कैसे आवंटित होती हैं",
    s10Intro:
      "सीट आवंटन के पांच राउंड। आपकी AIR, आपकी श्रेणी, और आपकी वरीयता में सूचीबद्ध संस्थानों के क्रम के आधार पर। आपको ईमेल से आवंटन पत्र मिलेंगे। हर राउंड की एक भुगतान समय-सीमा होती है — चूकने पर आपकी सीट रद्द हो जाती है।",
    s10Steps: [
      {
        title: "प्रवेश के लिए आवेदन करें",
        desc: "परिणामों के बाद, IIT Bombay Admissions Portal के ज़रिए अलग से आवेदन करें (14 मार्च - 10 अप्रैल)। अपनी संस्थान वरीयताएं क्रम में भरें। आप समय-सीमा तक संपादित कर सकते हैं — आपका अंतिम सबमिशन लॉक हो जाता है।",
      },
      {
        title: "Round 1 आवंटन (21 अप्रैल)",
        desc: "आपको एक अस्थायी आवंटन मिलता है। अगर आपको अपना पहला पसंदीदा संस्थान मिलता है: ACCEPT (freeze) या DECLINE। अगर आपको कम-वरीयता वाला संस्थान मिलता है: ACCEPT and FREEZE, या ACCEPT and FLOAT।",
      },
      {
        title: "Freeze या Float",
        desc: "Freeze = मौजूदा आवंटन स्वीकार करें, प्रक्रिया से बाहर निकलें। Float = मौजूदा आवंटन स्वीकार करें लेकिन अगले राउंड के लिए पूल में बने रहें। अगर बाद के किसी राउंड में उच्च-वरीयता वाली सीट उपलब्ध होती है, तो वह अपने आप आपको आवंटित हो जाती है और आप पहली वाली खो देते हैं। Float, Round 4 तक सक्रिय रहता है।",
      },
      {
        title: "Seat Acceptance Fee का भुगतान करें",
        desc: "General/EWS/OBC-NCL के लिए ₹60,000। SC/ST/PwD के लिए ₹15,000। केवल एक बार भुगतान करें — यह जॉइन करते समय संस्थान फीस के विरुद्ध समायोजित होता है। भुगतान विंडो चूकने पर आपकी सीट रद्द हो जाती है; आप आगे के सभी राउंड से बाहर हो जाते हैं।",
      },
      {
        title: "Rounds 2-5 (मई-जुलाई)",
        desc: "अस्वीकृत या जब्त आवंटनों से खाली सीटें पुनर्वितरित की जाती हैं। Rounds 3-5 शेष रिक्तियों को भरते हैं। अगर आपने Round 1 में भुगतान किया और Float चुना, तो आपको बाद के राउंड में अपने आप अपग्रेड किया जा सकता है।",
      },
    ],
    s10BoxStrong: "वापसी के बारे में:",
    s10BoxText:
      " जिन उम्मीदवारों ने Round 1 या 2 में सीटें स्वीकार कीं, वे Round 2 की वापसी समय-सीमा से पहले आंशिक धनवापसी के लिए वापस ले सकते हैं (General के लिए ₹55,000 वापस; SC/ST/PwD के लिए ₹10,000 वापस — ₹5,000 रद्दीकरण शुल्क काटा जाता है)। Round 2 की वापसी समय-सीमा के बाद, Rounds 3-5 की फीस गैर-वापसी योग्य है।",

    s11Title: "परीक्षा का दिन — क्या लाना है और क्या उम्मीद करें",
    s11ReportHeading: "रिपोर्टिंग और प्रवेश",
    s11ReportText:
      "रिपोर्टिंग 7:00 AM से। परीक्षा ठीक 9:00 AM पर शुरू होती है — उसके बाद कोई प्रवेश नहीं। अपने एडमिट कार्ड की एक प्रिंटेड प्रति और एक मूल फोटो ID लाएं। बायोमेट्रिक डेटा (अंगूठे का निशान, फोटो) परीक्षा के दिन लिया जाता है और प्रवेश के समय फिर से सत्यापित किया जा सकता है।",
    s11BringHeading: "आप क्या ला सकते हैं",
    s11BringList: [
      "पेंसिलें (केवल काले शेड) एक पारदर्शी पैकेट में",
      "A4 आकार का एक राइटिंग बोर्ड (वैकल्पिक लेकिन Part B के लिए उपयोगी)",
      "एडमिट कार्ड (प्रिंटेड)",
      "मूल फोटो ID",
    ],
    s11CannotHeading: "आप क्या नहीं ला सकते",
    s11CannotList: [
      "मोबाइल फोन, स्मार्टवॉच, या कोई भी इलेक्ट्रॉनिक उपकरण",
      "स्केच पेन, रंगीन पेंसिलें, पोस्टर कलर, या कोई भी रंग भरने वाली सामग्री",
      "ज्यामिति बॉक्स, लॉग बुक, कैलकुलेटर",
      "किसी भी तरह की कोई अध्ययन सामग्री",
    ],
    s11PartAHeading: "Part A व्यवस्था",
    s11PartAText:
      "कंप्यूटर आधारित। परीक्षा इंटरफेस वही सिस्टम है जो IIT Bombay अन्य CBT परीक्षाओं के लिए इस्तेमाल करता है — इसे पहले से uceed.iitb.ac.in पर आधिकारिक सैंपल इंटरफेस का उपयोग करके अभ्यास करें। तकनीकी समस्याओं को निरीक्षक संभालते हैं और तकनीकी समस्याओं में खोया समय अपने आप क्षतिपूर्ति किया जाता है। आप परीक्षा के दौरान बाहर नहीं जा सकते।",
    s11PartBHeading: "Part B व्यवस्था",
    s11PartBText:
      "प्रश्न आपकी कंप्यूटर स्क्रीन पर दिखाई देते हैं। आप निरीक्षक द्वारा दी गई भौतिक उत्तर पुस्तिका में बनाते और उत्तर लिखते हैं। पुस्तिकाएं परीक्षा के अंत में एकत्र की जाती हैं। जल्दी न जाएं — आपको पूरे तीन घंटे हॉल में रहना होगा।",
    s11BoxStrong: "परीक्षा शहर (2026 में 27):",
    s11BoxText:
      " Ahmedabad, Bengaluru, Bhopal, Bhubaneswar, Chandigarh/Mohali, Chennai, Coimbatore, Dehradun, Delhi, Ernakulam, Guwahati, Hubballi, Hyderabad, Jaipur, Kolkata, Kozhikode, Lucknow, Mumbai, Nagpur, Noida, Panaji, Patna, Pune, Raipur, Thiruvananthapuram, Thrissur, Visakhapatnam.",
    s11BoxText2:
      "पंजीकरण के समय वरीयता क्रम में तीन शहर चुनें। पंजीकरण पूरा होने के बाद शहर बदलने के अनुरोध स्वीकार नहीं किए जाते।",
  },
} as const;

// --- Components ---

const PageHeader = ({
  title,
  breadcrumbs,
}: {
  title: string;
  breadcrumbs: React.ReactNode;
}) => (
  <section className="relative overflow-hidden bg-white dark:bg-[#0E111E] border-b border-slate-200/60 dark:border-slate-700 pt-24 pb-16 md:pt-32 md:pb-20">
    {/* SVG Hero Background */}
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* Subtle grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="uceed-what-it-is-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#5563ED" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#uceed-what-it-is-grid)" />
      </svg>

      {/* Layered glowing blobs */}
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-[#5563ED]/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-[#ff5a1f]/5 rounded-full blur-[60px]" />

      {/* Smooth vector paths */}
      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="uceed-wii-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5563ED" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#5563ED" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="uceed-wii-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff5a1f" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#ff5a1f" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#uceed-wii-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#uceed-wii-wave-grad-2)" />
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80" stroke="#5563ED" strokeWidth="1.5" strokeOpacity="0.1" />
        <path d="M0,240 C480,120 960,320 1440,160" stroke="#ff5a1f" strokeWidth="1.5" strokeOpacity="0.05" strokeDasharray="6 6" />
      </svg>
    </div>

    <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 relative z-10">
      <div className="flex items-center gap-2 text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mb-8">
        {breadcrumbs}
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-black leading-[1.1] tracking-tight mb-6 text-neutral-dark">
        {title}
      </h1>
    </div>
  </section>
);

const Section = ({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-[2rem] p-8 md:p-12 mb-12 shadow-sm relative overflow-hidden">
    <div className="absolute top-0 right-0 p-8 text-[6rem] font-black text-slate-50 dark:text-slate-800 leading-none select-none z-0">
      {number}
    </div>
    <div className="relative z-10">
      <div className="text-primary font-black text-sm uppercase tracking-widest mb-4">
        Section {number}
      </div>
      <h2 className="text-3xl md:text-4xl font-black mb-8 text-neutral-dark tracking-tight">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

const InfoBox = ({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: "info" | "warning";
}) => (
  <div
    className={`p-6 md:p-8 my-8 rounded-2xl border-l-4 ${type === "info" ? "bg-indigo-50 dark:bg-indigo-950/30 border-primary" : "bg-orange-50 dark:bg-orange-950/30 border-accent"}`}
  >
    {children}
  </div>
);

const BentoGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">{children}</div>
);

const BentoCard = ({
  title,
  value,
  label,
  primary = false,
}: {
  title: string;
  value: string;
  label: string;
  primary?: boolean;
}) => (
  <div
    className={`border rounded-2xl p-8 relative overflow-hidden ${primary ? "bg-primary text-white border-primary" : "bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 text-neutral-dark"}`}
  >
    <div
      className={`text-sm font-bold uppercase tracking-wider mb-8 ${primary ? "text-indigo-200" : "text-slate-500 dark:text-slate-400"}`}
    >
      {label}
    </div>
    <div className="text-2xl font-black mb-2">{title}</div>
    <div className={primary ? "text-white" : "text-primary"}>{value}</div>
  </div>
);

export default function UceedWhatItIsPage() {
  const { language } = useLanguage();
  const t = translations[language];

  // Structural style flags (not text) — paired by index with t.institutes
  const instituteFlags = [
    { noteRed: false, accent: false },
    { noteRed: false, accent: false },
    { noteRed: true, accent: false },
    { noteRed: false, accent: false },
    { noteRed: false, accent: false },
    { noteRed: true, accent: false },
    { noteRed: true, accent: true },
  ];

  // Structural dark flag (not text) — paired by index with t.s06ScoreGuide
  const scoreGuideDark = [false, true, false, true];

  // Numeric seat-matrix rows (numbers need no translation); names come from t.s08Names
  const seatRows = [
    ["14", "4", "9", "5", "3", "2", "37"],
    ["8", "2", "5", "3", "1", "1", "20"],
    ["22", "6", "15", "7", "3", "3", "56"],
    ["11", "3", "8", "4", "2", "2", "30"],
    ["6", "2", "4", "2", "1", "1", "16"],
    ["8", "2", "4", "3", "2", "1", "20"],
    ["25", "6", "18", "10", "4", "3", "66"],
  ];

  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C] min-h-screen">
      <PageHeader
        title={t.pageTitle}
        breadcrumbs={
          <>
            <Link
              href="/exams"
              className="hover:text-primary transition-colors"
            >
              {t.crumbExams}
            </Link>{" "}
            <span>›</span>
            <Link
              href="/exams/uceed"
              className="hover:text-primary transition-colors"
            >
              {t.crumbUceed}
            </Link>{" "}
            <span>›</span>
            <span className="text-primary">{t.crumbWhatItIs}</span>
          </>
        }
      />

      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 pb-24">
        <Section number="01" title={t.s01Title}>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            {t.s01Intro}
          </p>
          <BentoGrid>
            <BentoCard
              label={t.s01Card1Label}
              title={t.s01Card1Title}
              value={t.s01Card1Value}
              primary={true}
            />
            <BentoCard
              label={t.s01Card2Label}
              title={t.s01Card2Title}
              value={t.s01Card2Value}
            />
          </BentoGrid>
          <InfoBox type="warning">
            <p className="text-slate-800 dark:text-slate-300 leading-relaxed font-medium">
              <strong className="font-black text-accent">
                {t.s01BoxStrong}
              </strong>{" "}
              {t.s01BoxText}
            </p>
          </InfoBox>
        </Section>

        <Section number="02" title={t.s02Title}>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            {t.s02Intro}
          </p>

          <div className="space-y-6 mt-8">
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-6 rounded-2xl flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary font-black shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-dark mb-2">
                  {t.s02Crit1Title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium">
                  {t.s02Crit1Text}
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-6 rounded-2xl flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary font-black shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-dark mb-2">
                  {t.s02Crit2Title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium">
                  {t.s02Crit2Text}
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-6 rounded-2xl flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary font-black shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-dark mb-2">
                  {t.s02Crit3Title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium">
                  {t.s02Crit3Text}
                </p>
              </div>
            </div>
          </div>

          <InfoBox type="info">
            <h4 className="font-black mb-2">{t.s02BoxHeading}</h4>
            <p className="text-slate-700 dark:text-slate-300 font-medium">
              {t.s02BoxTextPre}
              <strong>{t.s02BoxTextStrong}</strong>
              {t.s02BoxTextPost}
            </p>
          </InfoBox>
        </Section>

        <Section number="03" title={t.s03Title}>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            {t.s03Intro}
          </p>

          <BentoGrid>
            <BentoCard
              label={t.s03Card1Label}
              title={t.s03Card1Title}
              value={t.s03Card1Value}
              primary={true}
            />
            <BentoCard
              label={t.s03Card2Label}
              title={t.s03Card2Title}
              value={t.s03Card2Value}
            />
          </BentoGrid>

          <InfoBox type="warning">
            <h4 className="font-black mb-2">{t.s03BoxHeading}</h4>
            <p className="text-slate-700 dark:text-slate-300 font-medium">{t.s03BoxPre}<strong>{t.s03BoxStrong}</strong>{t.s03BoxPost}</p>
          </InfoBox>
        </Section>

        <Section number="04" title={t.s04Title}>
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl my-8">
            <table className="w-full text-left border-collapse min-w-[600px] bg-white dark:bg-slate-800/50">
              <thead className="bg-slate-50 dark:bg-slate-800/40">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">{t.s04ColType}</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">{t.s04ColCorrect}</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">{t.s04ColPartial}</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">{t.s04ColIncorrect}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-black">{t.s04Rows[0][0]}</td>
                  <td className="p-4 text-emerald-600 border-b border-slate-100 dark:border-slate-800 font-black">{t.s04Rows[0][1]}</td>
                  <td className="p-4 text-slate-400 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-medium">{t.s04Rows[0][2]}</td>
                  <td className="p-4 text-slate-400 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-medium">{t.s04Rows[0][3]}</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-black">{t.s04Rows[1][0]}</td>
                  <td className="p-4 text-emerald-600 border-b border-slate-100 dark:border-slate-800 font-black">{t.s04Rows[1][1]}</td>
                  <td className="p-4 text-primary border-b border-slate-100 dark:border-slate-800 font-black">{t.s04Rows[1][2]}</td>
                  <td className="p-4 text-red-500 border-b border-slate-100 dark:border-slate-800 font-black">{t.s04Rows[1][3]}</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 font-black">{t.s04Rows[2][0]}</td>
                  <td className="p-4 text-emerald-600 font-black">{t.s04Rows[2][1]}</td>
                  <td className="p-4 text-slate-400 dark:text-slate-400 font-medium">{t.s04Rows[2][2]}</td>
                  <td className="p-4 text-red-500 font-black">{t.s04Rows[2][3]}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section number="05" title={t.s05Title}>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            {t.s05Intro}
          </p>

          <h3 className="text-xl font-black text-neutral-dark mt-8 mb-4">{t.s05PartAHeading}</h3>
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl my-4">
            <table className="w-full text-left border-collapse min-w-[600px] bg-white dark:bg-slate-800/50">
              <thead className="bg-slate-50 dark:bg-slate-800/40">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">{t.s05PartACol1}</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">{t.s05PartACol2}</th>
                </tr>
              </thead>
              <tbody>
                {t.s05PartARows.map(([area, tests], i, arr) => (
                  <tr key={i}>
                    <td className={`p-4 text-slate-700 dark:text-slate-300 font-black align-top ${i < arr.length - 1 ? "border-b border-slate-100 dark:border-slate-800" : ""}`}>{area}</td>
                    <td className={`p-4 text-slate-600 dark:text-slate-400 font-medium ${i < arr.length - 1 ? "border-b border-slate-100 dark:border-slate-800" : ""}`}>{tests}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-black text-neutral-dark mt-10 mb-4">{t.s05PartBHeading}</h3>
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl my-4">
            <table className="w-full text-left border-collapse min-w-[500px] bg-white dark:bg-slate-800/50">
              <thead className="bg-slate-50 dark:bg-slate-800/40">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">{t.s05PartBCol1}</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">{t.s05PartBCol2}</th>
                </tr>
              </thead>
              <tbody>
                {t.s05PartBRows.map(([sub, tests], i, arr) => (
                  <tr key={i}>
                    <td className={`p-4 text-slate-700 dark:text-slate-300 font-black align-top ${i < arr.length - 1 ? "border-b border-slate-100 dark:border-slate-800" : ""}`}>{sub}</td>
                    <td className={`p-4 text-slate-600 dark:text-slate-400 font-medium ${i < arr.length - 1 ? "border-b border-slate-100 dark:border-slate-800" : ""}`}>{tests}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section number="06" title={t.s06Title}>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            {t.s06Intro}
          </p>

          <h3 className="text-xl font-black text-neutral-dark mt-8 mb-4">{t.s06Wall1Heading}</h3>
          <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-4">
            {t.s06Wall1Text}
          </p>
          <InfoBox type="info">
            <p className="font-black text-neutral-dark mb-2">{t.s06Box1Heading}</p>
            <p className="text-slate-700 dark:text-slate-300 font-medium mb-1">{t.s06Box1Line1Pre}<strong>{t.s06Box1Line1Mid}</strong>{t.s06Box1Line1Sep}<strong>{t.s06Box1Line1SD}</strong></p>
            <p className="text-slate-700 dark:text-slate-300 font-medium mb-3">{t.s06Box1Line2}</p>
            <p className="text-slate-700 dark:text-slate-300 font-medium">
              {t.s06Box1Line3Pre}<strong>{t.s06Box1Line3Strong}</strong>{t.s06Box1Line3Post}<br />
              {t.s06Box1Line3b}
            </p>
          </InfoBox>
          <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-8">
            {t.s06Wall1Text2}
          </p>

          <h3 className="text-xl font-black text-neutral-dark mt-8 mb-4">{t.s06Wall2Heading}</h3>
          <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-4">
            {t.s06Wall2Text}
          </p>
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl my-4">
            <table className="w-full text-left border-collapse min-w-[500px] bg-white dark:bg-slate-800/50">
              <thead className="bg-slate-50 dark:bg-slate-800/40">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">{t.s06TableCol1}</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">{t.s06TableCol2}</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">{t.s06TableCol3}</th>
                </tr>
              </thead>
              <tbody>
                {t.s06ClosingRanks.map(([inst, rank, seats], i, arr) => (
                  <tr key={inst}>
                    <td className={`p-4 text-slate-700 dark:text-slate-300 font-black ${i < arr.length - 1 ? "border-b border-slate-100 dark:border-slate-800" : ""}`}>{inst}</td>
                    <td className={`p-4 text-primary font-black ${i < arr.length - 1 ? "border-b border-slate-100 dark:border-slate-800" : ""}`}>{rank}</td>
                    <td className={`p-4 text-slate-600 dark:text-slate-400 font-medium ${i < arr.length - 1 ? "border-b border-slate-100 dark:border-slate-800" : ""}`}>{seats}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <InfoBox type="info">
            <p className="text-slate-700 dark:text-slate-300 font-medium">
              <strong className="font-black">{t.s06Box2Strong}</strong>{t.s06Box2Text}
            </p>
          </InfoBox>

          <h3 className="text-xl font-black text-neutral-dark mt-8 mb-4">{t.s06GuideHeading}</h3>
          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden my-4">
            {t.s06ScoreGuide.map(({ range, outcome }, i, arr) => (
              <div key={range} className={`flex items-center gap-6 p-5 ${i < arr.length - 1 ? "border-b border-slate-100 dark:border-slate-800" : ""} ${scoreGuideDark[i] ? "bg-slate-50 dark:bg-slate-800/40" : "bg-white dark:bg-slate-800/50"}`}>
                <div className="text-2xl font-black text-neutral-dark min-w-[110px] shrink-0">{range}</div>
                <div className="text-slate-600 dark:text-slate-400 font-medium">{outcome}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section number="07" title={t.s07Title}>
          <div className="space-y-6">
            {t.institutes.map(({ name, seats, dept, paras, note }, idx) => {
              const { noteRed, accent } = instituteFlags[idx];
              return (
                <div key={name} className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8">
                  <div className="flex justify-between items-start mb-3 gap-4">
                    <h3 className="text-xl font-black text-neutral-dark">{name}</h3>
                    <span className={`text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg shrink-0 ${accent ? "bg-accent" : "bg-primary"}`}>{seats}</span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold italic mb-4">{dept}</p>
                  {paras.map((para, i) => (
                    <p key={i} className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-3 last:mb-4">{para}</p>
                  ))}
                  <div className={`border-t border-slate-100 dark:border-slate-800 pt-4 text-sm font-semibold ${noteRed ? "text-red-500 font-black" : "text-slate-500 dark:text-slate-400"}`}>{note}</div>
                </div>
              );
            })}
          </div>
        </Section>

        <Section number="08" title={t.s08Title}>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            {t.s08Intro}
          </p>
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl my-4">
            <table className="w-full text-left border-collapse min-w-[700px] bg-white dark:bg-slate-800/50">
              <thead className="bg-slate-50 dark:bg-slate-800/40">
                <tr>
                  {[t.s08HeaderInstitute, "Open", "EWS", "OBC-NCL", "SC", "ST", "PwD*", t.s08HeaderTotal].map((h) => (
                    <th key={h} className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {seatRows.map((cols, ri) => (
                  <tr key={t.s08Names[ri]}>
                    <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-black">{t.s08Names[ri]}</td>
                    {cols.slice(0, -1).map((v, i) => (
                      <td key={i} className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-medium">{v}</td>
                    ))}
                    <td className="p-4 text-primary border-b border-slate-100 dark:border-slate-800 font-black">{cols[cols.length - 1]}</td>
                  </tr>
                ))}
                <tr className="bg-slate-900 text-white">
                  <td className="p-4 font-black">{t.s08TotalRowLabel}</td>
                  {["94", "25", "63", "34", "17", "13"].map((v) => (
                    <td key={v} className="p-4 font-black">{v}</td>
                  ))}
                  <td className="p-4 text-accent font-black">245</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-3 leading-relaxed">
            {t.s08Footnote}
          </p>
        </Section>

        <Section number="09" title={t.s09Title}>
          <div className="mt-4 space-y-0">
            {t.s09Dates.map(({ date, event, detail }, i) => (
              <div key={i} className="flex gap-6 pb-6 last:pb-0">
                <div className="min-w-[140px] text-sm font-black text-primary pt-1 shrink-0">{date}</div>
                <div className="border-l-2 border-slate-200 dark:border-slate-700 pl-6 pb-2">
                  <p className="font-black text-neutral-dark text-base">{event}</p>
                  {detail && <p className="text-slate-500 dark:text-slate-400 font-medium text-sm mt-1">{detail}</p>}
                </div>
              </div>
            ))}
          </div>
          <InfoBox type="info">
            <p className="text-slate-700 dark:text-slate-300 font-medium">
              <strong className="font-black">{t.s09BoxStrong}</strong>{t.s09BoxText}
            </p>
          </InfoBox>
        </Section>

        <Section number="10" title={t.s10Title}>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-medium">
            {t.s10Intro}
          </p>
          <div className="space-y-6">
            {t.s10Steps.map(({ title, desc }, i) => (
              <div key={i} className="flex gap-5 items-start">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-black text-sm shrink-0 mt-1">{i + 1}</div>
                <div>
                  <h4 className="font-black text-neutral-dark text-base mb-1">{title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <InfoBox type="warning">
            <p className="text-slate-800 dark:text-slate-300 font-medium leading-relaxed">
              <strong className="font-black text-accent">{t.s10BoxStrong}</strong>{t.s10BoxText}
            </p>
          </InfoBox>
        </Section>

        <Section number="11" title={t.s11Title}>
          <h3 className="text-xl font-black text-neutral-dark mt-2 mb-3">{t.s11ReportHeading}</h3>
          <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-6">
            {t.s11ReportText}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40 rounded-2xl p-6">
              <h4 className="font-black text-neutral-dark mb-4">{t.s11BringHeading}</h4>
              <ul className="space-y-3">
                {t.s11BringList.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400 font-medium items-start">
                    <span className="text-emerald-600 font-black shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40 rounded-2xl p-6">
              <h4 className="font-black text-neutral-dark mb-4">{t.s11CannotHeading}</h4>
              <ul className="space-y-3">
                {t.s11CannotList.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400 font-medium items-start">
                    <span className="text-red-500 font-black shrink-0 mt-0.5">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-black text-neutral-dark mt-8 mb-3">{t.s11PartAHeading}</h3>
          <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-6">
            {t.s11PartAText}
          </p>

          <h3 className="text-xl font-black text-neutral-dark mt-6 mb-3">{t.s11PartBHeading}</h3>
          <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-6">
            {t.s11PartBText}
          </p>

          <InfoBox type="info">
            <p className="text-slate-700 dark:text-slate-300 font-medium mb-2">
              <strong className="font-black">{t.s11BoxStrong}</strong>{t.s11BoxText}
            </p>
            <p className="text-slate-700 dark:text-slate-300 font-medium">
              {t.s11BoxText2}
            </p>
          </InfoBox>
        </Section>
      </div>
    </main>
  );
}
