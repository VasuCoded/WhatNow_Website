"use client";

import React from 'react';
import Link from 'next/link';
import VisualAnalytics from '@/components/ui/VisualAnalytics';
import { Icon } from '@iconify/react';
import { useLanguage } from "@/context/LanguageContext";

const imucetAnalyticsData = {
  trends: [
    { year: 2022, applicants: 18000, seats: 2500 },
    { year: 2023, applicants: 20000, seats: 2800 },
    { year: 2024, applicants: 22000, seats: 3000 },
    { year: 2025, applicants: 25000, seats: 3000 },
    { year: 2026, applicants: 27000, seats: 3000 }
  ],
  seatFunnel: {
    applicants: 27000,
    seats: 3000
  }
};

const translations = {
  en: {
    crumbExams: "Exams",
    crumbHere: "IMU CET",
    heroTitlePre: "IMU CET — Your Entry into the ",
    heroTitleEm: "Merchant Navy",
    heroTitlePost: "",
    heroIntro:
      "The Indian Maritime University Common Entrance Test is the primary gateway into B.Sc Nautical Science, B.Tech Marine Engineering, and Diploma in Nautical Science (DNS) programs. One exam, multiple career paths on the ocean. ~25,000 aspirants for ~3,000 seats.",
    heroMeta:
      "Last reviewed: June 2026 · Researched from first-hand accounts of serving and trainee mariners, plus DG Shipping & IMU official notifications.",
    statExamWindowLabel: "Exam Window",
    statExamWindowMonth: "Jun",
    statExamWindowYear: " 2026",
    statTotalMarksLabel: "Total Marks",
    statTotalMarksValue: "200",
    statDurationLabel: "Duration",
    statDurationValue: "3 hrs",
    statSeatsLabel: "Total Seats",
    statSeatsValue: "~3,000",
    statProgramsLabel: "Programs",
    statProgramsValue: "3",
    statAspirantsLabel: "Aspirants",
    statAspirantsValue: "~25K",
    relatedCareerLabel: "Related Career Guide: Merchant Navy",
    relatedCareerBtn: "View Career",
    whatIsHeading: "What is IMU CET",
    whatIsP1:
      "IMU CET (Indian Maritime University Common Entrance Test) is a national-level entrance exam conducted by the Indian Maritime University for admission into undergraduate maritime programs. It covers B.Sc Nautical Science (Deck side), B.Tech Marine Engineering (Engine side), and the accelerated DNS (Diploma in Nautical Science) course.",
    whatIsP2:
      "The exam tests Physics, Chemistry, Mathematics, English, and General Aptitude — all at the Class 12 level. It is a 3-hour computer-based test with 200 objective questions. There is no negative marking, which makes it significantly more forgiving than JEE or NEET. Most candidates who are serious about maritime careers and have a decent PCM foundation can clear IMU CET with 3-4 months of focused preparation.",
    whatIsP3:
      "IMU CET scores are accepted by IMU's own campuses (Chennai, Mumbai, Kolkata, Visakhapatnam, Cochin, Navi Mumbai) as well as over 100 DG Shipping-approved private maritime academies and training institutes. Your rank determines which campus and program you get — and the quality difference between top IMU campuses and low-tier private academies is enormous.",
    institutions: [
      'IMU Chennai — Flagship',
      'IMU Mumbai',
      'IMU Kolkata',
      'IMU Visakhapatnam',
      'IMU Cochin',
      'IMU Navi Mumbai',
      'AMET Chennai',
      'TMI Pune',
      'Tolani Mumbai',
      'Coimbatore Marine College',
      '100+ DG-approved academies',
    ],
    medicalCalloutStrong: "Medical fitness is non-negotiable:",
    medicalCalloutBody:
      " Even if you top IMU CET, you cannot join any maritime program without clearing the DG Shipping-mandated medical examination. Requirements include: 6/6 vision without glasses (or corrected to 6/6 with surgery pre-admission), normal colour vision, no chronic conditions, and BMI within range. Get your eyes and medical checked ",
    medicalCalloutEm: "before",
    medicalCalloutBodyEnd: " you start preparing — not after you get your rank.",
    guidesHeading: "Everything on IMU CET — WhatNow Guides",
    readyBadge: "Ready to read",
    card1Title: "What It Is — Full exam breakdown",
    card1Desc:
      "Paper pattern, subject-wise mark distribution (Physics, Chemistry, Maths, English, Aptitude), eligibility criteria, age limits, registration process, exam centres, and the complete counselling/allocation process.",
    card2Title: "DNS vs B.Sc vs B.Tech — Which path?",
    card2Desc:
      "Duration, cost, career trajectory, and earning potential compared across all three maritime entry paths. Which is fastest, which pays best long-term, and which suits PCM backgrounds.",
    card3Title: "Preparation Strategy — Self-study roadmap",
    card3Desc:
      "Subject-wise preparation strategy, best books, mock test resources, previous year paper analysis, and a 3-month preparation timeline. Coaching is not necessary for IMU CET — here is how to do it yourself.",
    card4Title: "Medical Test & DG Shipping Norms",
    card4Desc:
      "Complete guide to the mandatory medical fitness test: vision requirements (6/6 rule), colour blindness tests, BMI standards, and what disqualifies you.",
    card5Title: "Convince Your Parents — With actual data",
    card5Desc:
      "Merchant Navy pay is tax-free in USD, but parents need to see the safety regulations and company sponsorship placement guarantee details.",
  },
  hi: {
    crumbExams: "परीक्षाएँ",
    crumbHere: "IMU CET",
    heroTitlePre: "IMU CET — ",
    heroTitleEm: "मर्चेंट नेवी",
    heroTitlePost: " में आपका प्रवेश",
    heroIntro:
      "इंडियन मैरीटाइम यूनिवर्सिटी कॉमन एंट्रेंस टेस्ट B.Sc नॉटिकल साइंस, B.Tech मरीन इंजीनियरिंग और डिप्लोमा इन नॉटिकल साइंस (DNS) कार्यक्रमों में प्रवेश का मुख्य द्वार है। एक परीक्षा, समुद्र पर कई करियर रास्ते। लगभग 3,000 सीटों के लिए लगभग 25,000 उम्मीदवार।",
    heroMeta:
      "अंतिम समीक्षा: जून 2026 · सेवारत और प्रशिक्षु नाविकों के प्रत्यक्ष अनुभवों के साथ-साथ DG Shipping और IMU की आधिकारिक अधिसूचनाओं से शोधित।",
    statExamWindowLabel: "परीक्षा अवधि",
    statExamWindowMonth: "जून",
    statExamWindowYear: " 2026",
    statTotalMarksLabel: "कुल अंक",
    statTotalMarksValue: "200",
    statDurationLabel: "अवधि",
    statDurationValue: "3 घंटे",
    statSeatsLabel: "कुल सीटें",
    statSeatsValue: "~3,000",
    statProgramsLabel: "कार्यक्रम",
    statProgramsValue: "3",
    statAspirantsLabel: "उम्मीदवार",
    statAspirantsValue: "~25K",
    relatedCareerLabel: "संबंधित करियर गाइड: मर्चेंट नेवी",
    relatedCareerBtn: "करियर देखें",
    whatIsHeading: "IMU CET क्या है",
    whatIsP1:
      "IMU CET (इंडियन मैरीटाइम यूनिवर्सिटी कॉमन एंट्रेंस टेस्ट) इंडियन मैरीटाइम यूनिवर्सिटी द्वारा स्नातक स्तर के मैरीटाइम कार्यक्रमों में प्रवेश के लिए आयोजित एक राष्ट्रीय स्तर की प्रवेश परीक्षा है। इसमें B.Sc नॉटिकल साइंस (डेक साइड), B.Tech मरीन इंजीनियरिंग (इंजन साइड) और तेज़ DNS (डिप्लोमा इन नॉटिकल साइंस) कोर्स शामिल हैं।",
    whatIsP2:
      "परीक्षा भौतिकी, रसायन विज्ञान, गणित, अंग्रेज़ी और सामान्य अभिक्षमता को परखती है — सब कुछ कक्षा 12 के स्तर पर। यह 200 वस्तुनिष्ठ प्रश्नों वाली 3 घंटे की कंप्यूटर-आधारित परीक्षा है। इसमें कोई नकारात्मक अंकन नहीं है, जो इसे JEE या NEET की तुलना में काफ़ी अधिक उदार बनाता है। मैरीटाइम करियर को लेकर गंभीर और अच्छी PCM नींव वाले अधिकांश उम्मीदवार 3-4 महीने की केंद्रित तैयारी से IMU CET पास कर सकते हैं।",
    whatIsP3:
      "IMU CET स्कोर IMU के अपने कैंपस (चेन्नई, मुंबई, कोलकाता, विशाखापत्तनम, कोचीन, नवी मुंबई) के साथ-साथ 100 से अधिक DG Shipping-अनुमोदित निजी मैरीटाइम अकादमियों और प्रशिक्षण संस्थानों द्वारा स्वीकार किए जाते हैं। आपकी रैंक तय करती है कि आपको कौन-सा कैंपस और कार्यक्रम मिलेगा — और शीर्ष IMU कैंपस तथा निम्न-स्तरीय निजी अकादमियों के बीच गुणवत्ता का अंतर बहुत बड़ा है।",
    institutions: [
      'IMU चेन्नई — फ्लैगशिप',
      'IMU मुंबई',
      'IMU कोलकाता',
      'IMU विशाखापत्तनम',
      'IMU कोचीन',
      'IMU नवी मुंबई',
      'AMET चेन्नई',
      'TMI पुणे',
      'Tolani मुंबई',
      'कोयंबटूर मरीन कॉलेज',
      '100+ DG-अनुमोदित अकादमियाँ',
    ],
    medicalCalloutStrong: "मेडिकल फिटनेस पर कोई समझौता नहीं:",
    medicalCalloutBody:
      " भले ही आप IMU CET में टॉप कर लें, DG Shipping द्वारा अनिवार्य मेडिकल परीक्षा पास किए बिना आप किसी भी मैरीटाइम कार्यक्रम में शामिल नहीं हो सकते। आवश्यकताओं में शामिल हैं: बिना चश्मे के 6/6 दृष्टि (या प्रवेश से पहले सर्जरी द्वारा 6/6 तक ठीक की गई), सामान्य रंग दृष्टि, कोई पुरानी बीमारी नहीं, और BMI सीमा के भीतर। अपनी आँखों और मेडिकल की जाँच ",
    medicalCalloutEm: "पहले",
    medicalCalloutBodyEnd: " करा लें जब आप तैयारी शुरू करें — रैंक मिलने के बाद नहीं।",
    guidesHeading: "IMU CET पर सब कुछ — WhatNow गाइड",
    readyBadge: "पढ़ने के लिए तैयार",
    card1Title: "यह क्या है — पूरा परीक्षा ब्यौरा",
    card1Desc:
      "पेपर पैटर्न, विषयवार अंक वितरण (भौतिकी, रसायन, गणित, अंग्रेज़ी, अभिक्षमता), पात्रता मानदंड, आयु सीमा, पंजीकरण प्रक्रिया, परीक्षा केंद्र और पूरी काउंसलिंग/आवंटन प्रक्रिया।",
    card2Title: "DNS बनाम B.Sc बनाम B.Tech — कौन-सा रास्ता?",
    card2Desc:
      "तीनों मैरीटाइम प्रवेश रास्तों की अवधि, लागत, करियर दिशा और कमाई की संभावना की तुलना। कौन-सा सबसे तेज़ है, कौन-सा दीर्घावधि में सबसे अच्छा भुगतान करता है, और कौन-सा PCM पृष्ठभूमि के लिए उपयुक्त है।",
    card3Title: "तैयारी रणनीति — स्व-अध्ययन रोडमैप",
    card3Desc:
      "विषयवार तैयारी रणनीति, सर्वश्रेष्ठ किताबें, मॉक टेस्ट संसाधन, पिछले वर्षों के पेपर का विश्लेषण और 3 महीने की तैयारी समय-सारणी। IMU CET के लिए कोचिंग ज़रूरी नहीं है — इसे खुद कैसे करें यहाँ देखें।",
    card4Title: "मेडिकल टेस्ट और DG Shipping मानदंड",
    card4Desc:
      "अनिवार्य मेडिकल फिटनेस टेस्ट की पूरी गाइड: दृष्टि आवश्यकताएँ (6/6 नियम), रंग अंधता परीक्षण, BMI मानक, और क्या आपको अयोग्य ठहराता है।",
    card5Title: "अपने माता-पिता को समझाएँ — असली डेटा के साथ",
    card5Desc:
      "मर्चेंट नेवी की तनख़्वाह USD में टैक्स-फ्री होती है, लेकिन माता-पिता को सुरक्षा नियम और कंपनी स्पॉन्सरशिप प्लेसमेंट गारंटी का ब्यौरा देखना ज़रूरी है।",
  },
} as const;

export default function ImuCetHubPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C]">
      {/* ─── PAGE HEADER ─── */}
      <section className="relative overflow-hidden bg-white dark:bg-[#0E111E] border-b border-slate-200/60 dark:border-slate-700 pt-24 pb-16 md:pt-32 md:pb-20">
        {/* SVG Hero Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          <svg className="absolute inset-0 w-full h-full opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="imucet-hub-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ea580c" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#imucet-hub-grid)" />
          </svg>

          <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[80px]" />
          <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-sky-500/5 rounded-full blur-[60px]" />

          <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <linearGradient id="imucet-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ea580c" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="imucet-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.02" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#imucet-wave-grad-1)" />
            <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#imucet-wave-grad-2)" />
            <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80" stroke="#ea580c" strokeWidth="1.5" strokeOpacity="0.1" />
            <path d="M0,240 C480,120 960,320 1440,160" stroke="#0ea5e9" strokeWidth="1.5" strokeOpacity="0.05" strokeDasharray="6 6" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto w-full px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mb-8">
            <Link href="/exams" className="hover:text-primary transition-colors">{t.crumbExams}</Link>
            <span>›</span>
            <span className="text-orange-600">{t.crumbHere}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-8 text-neutral-dark">
            {t.heroTitlePre}<em className="text-orange-600 not-italic">{t.heroTitleEm}</em>{t.heroTitlePost}
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed font-medium mb-6">
            {t.heroIntro}
          </p>

          <div className="text-sm font-bold text-slate-400 dark:text-slate-400">
            {t.heroMeta}
          </div>
        </div>
      </section>

      <div className="px-6 lg:px-12 pb-20 md:pb-32 max-w-4xl mx-auto w-full space-y-20">

        {/* ─── STAT BAR ─── */}
        <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 shadow-sm">
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">{t.statExamWindowLabel}</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark"><span className="text-orange-600">{t.statExamWindowMonth}</span>{t.statExamWindowYear}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">{t.statTotalMarksLabel}</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">{t.statTotalMarksValue}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">{t.statDurationLabel}</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">{t.statDurationValue}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">{t.statSeatsLabel}</span>
            <span className="text-2xl md:text-3xl font-black text-orange-600">{t.statSeatsValue}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">{t.statProgramsLabel}</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">{t.statProgramsValue}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">{t.statAspirantsLabel}</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">{t.statAspirantsValue}</span>
          </div>
        </div>

        {/* ─── RELATED CAREER LINK ─── */}
        <div className="bg-orange-50 dark:bg-orange-950/30 border border-orange-100 dark:border-orange-900/40 rounded-2xl p-6 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="font-bold text-neutral-dark text-sm md:text-base">{t.relatedCareerLabel}</span>
          </div>
          <Link href="/careers/merchant-navy" className="bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs uppercase tracking-wider px-4 py-2 rounded-xl transition-all shadow-sm">
            {t.relatedCareerBtn}
          </Link>
        </div>

        {/* ─── VISUAL ANALYTICS ─── */}
        <VisualAnalytics type="exam" data={imucetAnalyticsData} colorTheme="orange" />

        {/* ─── WHAT IS IMU CET ─── */}
        <section>
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 border-b-2 border-slate-200 dark:border-slate-700 pb-4 mb-8">
            {t.whatIsHeading}
          </h2>

          <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-12">
            <p>{t.whatIsP1}</p>
            <p>{t.whatIsP2}</p>
            <p>{t.whatIsP3}</p>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {t.institutions.map(inst => (
              <span key={inst} className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm px-4 py-2 rounded-lg shadow-sm">
                {inst}
              </span>
            ))}
          </div>

          <div className="bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-500 p-6 rounded-r-xl">
            <p className="text-slate-800 dark:text-slate-300 leading-relaxed font-medium">
              <strong className="font-black">{t.medicalCalloutStrong}</strong>{t.medicalCalloutBody}<em>{t.medicalCalloutEm}</em>{t.medicalCalloutBodyEnd}
            </p>
          </div>
        </section>

        {/* ─── NAVIGATION TO SUBPAGES ─── */}
        <section>
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 border-b-2 border-slate-200 dark:border-slate-700 pb-4 mb-8">
            {t.guidesHeading}
          </h2>

          <div className="space-y-4">

            {/* Card 1 */}
            <Link href="/exams/imu-cet/what-it-is" className="group flex flex-col md:flex-row gap-6 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-orange-300 hover:bg-white/90 dark:hover:bg-slate-800/70 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-orange-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300">01</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-orange-600 transition-colors duration-300">{t.card1Title}</h3>
                <div className="text-orange-600 text-xs font-semibold font-mono mb-4">/exams/imu-cet/what-it-is</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  {t.card1Desc}
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/40 shadow-sm">✓ {t.readyBadge}</span>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/exams/imu-cet/entry-paths" className="group flex flex-col md:flex-row gap-6 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-orange-300 hover:bg-white/90 dark:hover:bg-slate-800/70 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-orange-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300">02</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-orange-600 transition-colors duration-300">{t.card2Title}</h3>
                <div className="text-orange-600 text-xs font-semibold font-mono mb-4">/exams/imu-cet/entry-paths</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  {t.card2Desc}
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/40 shadow-sm">✓ {t.readyBadge}</span>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/exams/imu-cet/prep" className="group flex flex-col md:flex-row gap-6 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-orange-300 hover:bg-white/90 dark:hover:bg-slate-800/70 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-orange-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300">03</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-orange-600 transition-colors duration-300">{t.card3Title}</h3>
                <div className="text-orange-600 text-xs font-semibold font-mono mb-4">/exams/imu-cet/prep</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  {t.card3Desc}
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/40 shadow-sm">✓ {t.readyBadge}</span>
              </div>
            </Link>

            {/* Card 4 */}
            <Link href="/exams/imu-cet/medical" className="group flex flex-col md:flex-row gap-6 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-orange-300 hover:bg-white/90 dark:hover:bg-slate-800/70 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-orange-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300">04</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-orange-600 transition-colors duration-300">{t.card4Title}</h3>
                <div className="text-orange-600 text-xs font-semibold font-mono mb-4">/exams/imu-cet/medical</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  {t.card4Desc}
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/40 shadow-sm">✓ {t.readyBadge}</span>
              </div>
            </Link>

            {/* Card 5 */}
            <Link href="/exams/imu-cet/convince-parents" className="group flex flex-col md:flex-row gap-6 bg-amber-50/40 dark:bg-amber-950/30 backdrop-blur-sm border border-amber-200/60 dark:border-amber-900/40 rounded-[2rem] p-6 md:p-8 hover:border-amber-400/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1 relative overflow-hidden">
              <Icon
                icon="solar:users-group-two-rounded-bold-duotone"
                className="absolute -right-6 -bottom-6 w-36 h-36 text-amber-500 opacity-[0.15] -rotate-12 pointer-events-none select-none"
              />
              <div className="text-4xl md:text-5xl font-black text-amber-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300 relative z-10">05</div>
              <div className="flex-1 relative z-10">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-amber-600 transition-colors duration-300">{t.card5Title}</h3>
                <div className="text-amber-600 text-xs font-semibold font-mono mb-4">/exams/imu-cet/convince-parents</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  {t.card5Desc}
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/40 shadow-sm">✓ {t.readyBadge}</span>
              </div>
            </Link>

          </div>
        </section>

      </div>
    </main>
  );
}
