"use client";

import React from 'react';
import Link from 'next/link';
import VisualAnalytics from '@/components/ui/VisualAnalytics';
import { Icon } from '@iconify/react';
import { useLanguage } from "@/context/LanguageContext";

const jeePaper3AnalyticsData = {
  trends: [
    { year: 2022, applicants: 22000, seats: 850 },
    { year: 2023, applicants: 24000, seats: 900 },
    { year: 2024, applicants: 26000, seats: 950 },
    { year: 2025, applicants: 28000, seats: 950 },
    { year: 2026, applicants: 30000, seats: 950 }
  ],
  seatFunnel: {
    applicants: 30000,
    seats: 950
  }
};

const translations = {
  en: {
    crumbExams: "Exams",
    crumbHere: "JEE Paper 3 (B.Planning)",
    heroTitlePre: "JEE Paper 3 — Entry into ",
    heroTitleEm: "Top Planning Schools",
    heroBody:
      "JEE Main Paper 3 is the exclusive national-level entrance exam for Bachelor of Planning (B.Plan) programs at the prestigious School of Planning and Architecture (SPAs) and select NITs. If you want to design sustainable city spaces, transit routes, and policy infrastructure, this is your primary gateway.",
    lastReviewed: "Last reviewed: May 2026 · Based on National Testing Agency (NTA) guidelines",
    statExamWindowLabel: "Exam Window",
    statExamWindowValue: "Jan & Apr",
    statQuestionsLabel: "Total Questions",
    statQuestionsValue: "105",
    statDurationLabel: "Duration",
    statDurationValue: "3 hrs",
    statSeatsLabel: "Total Seats",
    statSeatsValue: "~950",
    statInstitutesLabel: "Institutes",
    statInstitutesValue: "SPAs, NITs & GFTIs",
    statAspirantsLabel: "Aspirants",
    statAspirantsValue: "~30K",
    relatedCareerLabel: "Related Career Guide: Urban Planning",
    relatedCareerCta: "View Career",
    whatHeading: "What is JEE Main Paper 3",
    whatP1:
      "JEE Main Paper 3 is a separate entrance exam conducted by the National Testing Agency (NTA) for admission to undergraduate Bachelor of Planning (B.Plan) programs. While JEE Paper 1 is for B.Tech and Paper 2 is for B.Arch, Paper 3 is specifically crafted to evaluate a candidate's aptitude for urban planning, sustainability, general geography, and numerical skills.",
    whatP2:
      "The exam is a 3-hour computer-based test containing three sections: Mathematics (Part I), Aptitude Test (Part II), and Planning-based Questions (Part III). It consists of 105 questions in total, carrying 400 marks. Part III is highly specialized and focuses on general awareness of social, economic, and political aspects of development, environmental issues, city planning elements, and basic map reading.",
    whatP3:
      "Admission to premium government planning schools, such as the Schools of Planning and Architecture (SPA Delhi, SPA Bhopal, SPA Vijayawada), as well as central and state-funded institutes, is allocated through JoSAA (Joint Seat Allocation Authority) counselling based entirely on the JEE Paper 3 rank.",
    institutes: ['SPA Delhi', 'SPA Bhopal', 'SPA Vijayawada', 'CEPT University Ahmedabad', 'NIT Bhopal', 'MANIT Bhopal', 'Amity School of Planning', 'JoSAA Counselling'],
    streamFlexLabel: "Stream Flexibility:",
    streamFlexPre: " Unlike traditional B.Tech streams that strictly require Chemistry and Physics, candidates from any stream (Science, Commerce, or Arts) who have studied ",
    streamFlexBold: "Mathematics in Class XII",
    streamFlexPost: " are eligible to write JEE Main Paper 3 and qualify for JoSAA seat allocation.",
    guidesHeading: "Everything on JEE Paper 3 — WhatNow Guides",
    ready: "Ready to read",
    card1Title: "Exam Pattern & Syllabus Breakdown",
    card1Body:
      "Deep dive into the 105-question format: Mathematics, general aptitude, and the 25 planning-specific questions. Understanding MSQ, MCQ formats and marking.",
    card2Title: "SPA Fees, Seat Matrix & ROI",
    card2Body:
      "JoSAA seat matrix for B.Plan, reservation classifications, tuition fees at SPA Delhi, Bhopal, and Vijayawada, and merit-cum-means scholarships.",
    card3Title: "Resources & Self-Study Guides",
    card3Body:
      "Self-prep guidelines without expensive classes. Key books for Part III planning, sample questions, free mock resources, and official syllabus guidelines.",
    card4Title: "B.Plan Suitability & Self-Assessment",
    card4Body:
      "Should you write JEE Paper 3? Honest comparison of B.Plan vs B.Arch vs Civil Engineering. Exit paths, salaries, and career realities in urban growth.",
    card5Title: "Convince Your Parents — With actual data",
    card5Body:
      "Planning is a critical infrastructure career in a rapidly urbanizing India. Equip yourself with placement facts, fee/ROI comparisons, and how to handle stability worries.",
  },
  hi: {
    crumbExams: "परीक्षाएँ",
    crumbHere: "JEE पेपर 3 (B.Planning)",
    heroTitlePre: "JEE पेपर 3 — प्रवेश ",
    heroTitleEm: "टॉप प्लानिंग स्कूलों में",
    heroBody:
      "JEE Main पेपर 3 प्रतिष्ठित School of Planning and Architecture (SPA) और चुनिंदा NIT में Bachelor of Planning (B.Plan) कार्यक्रमों के लिए विशेष राष्ट्रीय-स्तरीय प्रवेश परीक्षा है। अगर आप टिकाऊ शहरी स्थान, ट्रांज़िट रूट और पॉलिसी इन्फ्रास्ट्रक्चर डिज़ाइन करना चाहते हैं, तो यही आपका मुख्य द्वार है।",
    lastReviewed: "अंतिम समीक्षा: मई 2026 · National Testing Agency (NTA) दिशानिर्देशों पर आधारित",
    statExamWindowLabel: "परीक्षा अवधि",
    statExamWindowValue: "जनवरी और अप्रैल",
    statQuestionsLabel: "कुल प्रश्न",
    statQuestionsValue: "105",
    statDurationLabel: "अवधि",
    statDurationValue: "3 घंटे",
    statSeatsLabel: "कुल सीटें",
    statSeatsValue: "~950",
    statInstitutesLabel: "संस्थान",
    statInstitutesValue: "SPA, NIT और GFTI",
    statAspirantsLabel: "अभ्यर्थी",
    statAspirantsValue: "~30 हज़ार",
    relatedCareerLabel: "संबंधित करियर गाइड: अर्बन प्लानिंग",
    relatedCareerCta: "करियर देखें",
    whatHeading: "JEE Main पेपर 3 क्या है",
    whatP1:
      "JEE Main पेपर 3 National Testing Agency (NTA) द्वारा आयोजित एक अलग प्रवेश परीक्षा है, जो स्नातक Bachelor of Planning (B.Plan) कार्यक्रमों में प्रवेश के लिए होती है। जहाँ JEE पेपर 1 B.Tech के लिए और पेपर 2 B.Arch के लिए है, वहीं पेपर 3 खास तौर पर अर्बन प्लानिंग, सस्टेनेबिलिटी, सामान्य भूगोल और गणितीय कौशल की योग्यता परखने के लिए बनाया गया है।",
    whatP2:
      "यह परीक्षा 3 घंटे का कंप्यूटर-आधारित टेस्ट है जिसमें तीन खंड होते हैं: गणित (भाग I), एप्टीट्यूड टेस्ट (भाग II), और प्लानिंग-आधारित प्रश्न (भाग III)। इसमें कुल 105 प्रश्न होते हैं, जो 400 अंकों के होते हैं। भाग III बेहद विशिष्ट है और विकास के सामाजिक, आर्थिक व राजनीतिक पहलुओं, पर्यावरणीय मुद्दों, शहरी योजना तत्वों और बुनियादी मानचित्र पठन की सामान्य जागरूकता पर केंद्रित है।",
    whatP3:
      "प्रमुख सरकारी प्लानिंग स्कूलों — जैसे Schools of Planning and Architecture (SPA Delhi, SPA Bhopal, SPA Vijayawada) — के साथ-साथ केंद्र और राज्य द्वारा वित्तपोषित संस्थानों में प्रवेश JoSAA (Joint Seat Allocation Authority) काउंसलिंग के ज़रिए, पूरी तरह JEE पेपर 3 रैंक के आधार पर दिया जाता है।",
    institutes: ['SPA Delhi', 'SPA Bhopal', 'SPA Vijayawada', 'CEPT University Ahmedabad', 'NIT Bhopal', 'MANIT Bhopal', 'Amity School of Planning', 'JoSAA Counselling'],
    streamFlexLabel: "स्ट्रीम लचीलापन:",
    streamFlexPre: " पारंपरिक B.Tech स्ट्रीम के विपरीत जिनमें केमिस्ट्री और फिज़िक्स अनिवार्य हैं, किसी भी स्ट्रीम (साइंस, कॉमर्स या आर्ट्स) के वे अभ्यर्थी जिन्होंने ",
    streamFlexBold: "कक्षा 12 में गणित",
    streamFlexPost: " पढ़ा है, JEE Main पेपर 3 देने और JoSAA सीट आवंटन के लिए पात्र हैं।",
    guidesHeading: "JEE पेपर 3 पर सब कुछ — WhatNow गाइड",
    ready: "पढ़ने के लिए तैयार",
    card1Title: "परीक्षा पैटर्न और सिलेबस ब्रेकडाउन",
    card1Body:
      "105-प्रश्न प्रारूप की गहराई से जानकारी: गणित, सामान्य एप्टीट्यूड, और 25 प्लानिंग-विशिष्ट प्रश्न। MSQ, MCQ प्रारूप और अंकन को समझना।",
    card2Title: "SPA फीस, सीट मैट्रिक्स और ROI",
    card2Body:
      "B.Plan के लिए JoSAA सीट मैट्रिक्स, आरक्षण वर्गीकरण, SPA Delhi, Bhopal और Vijayawada में ट्यूशन फीस, और merit-cum-means छात्रवृत्तियाँ।",
    card3Title: "संसाधन और स्व-अध्ययन गाइड",
    card3Body:
      "महंगी कोचिंग के बिना खुद तैयारी के दिशानिर्देश। भाग III प्लानिंग के लिए ज़रूरी किताबें, नमूना प्रश्न, मुफ़्त मॉक संसाधन और आधिकारिक सिलेबस गाइडलाइन।",
    card4Title: "B.Plan उपयुक्तता और स्व-मूल्यांकन",
    card4Body:
      "क्या आपको JEE पेपर 3 देना चाहिए? B.Plan बनाम B.Arch बनाम सिविल इंजीनियरिंग की ईमानदार तुलना। शहरी विकास में निकास मार्ग, वेतन और करियर की हकीकत।",
    card5Title: "अपने माता-पिता को मनाएँ — असली डेटा के साथ",
    card5Body:
      "तेज़ी से शहरीकरण कर रहे भारत में प्लानिंग एक अहम इन्फ्रास्ट्रक्चर करियर है। प्लेसमेंट तथ्यों, फीस/ROI तुलना, और स्थिरता की चिंताओं से निपटने के तरीकों से खुद को लैस करें।",
  },
} as const;

export default function JeePaper3HubPage() {
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
              <pattern id="jee-paper3-hub-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0d9488" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#jee-paper3-hub-grid)" />
          </svg>

          <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[80px]" />
          <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[60px]" />

          <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <linearGradient id="jee-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0d9488" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="jee-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.02" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#jee-wave-grad-1)" />
            <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#wave-grad-2)" />
            <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80" stroke="#0d9488" strokeWidth="1.5" strokeOpacity="0.1" />
            <path d="M0,240 C480,120 960,320 1440,160" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.05" strokeDasharray="6 6" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto w-full px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mb-8">
            <Link href="/exams" className="hover:text-primary transition-colors">{t.crumbExams}</Link>
            <span>›</span>
            <span className="text-teal-600">{t.crumbHere}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-8 text-neutral-dark">
            {t.heroTitlePre}<em className="text-teal-600 not-italic">{t.heroTitleEm}</em>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed font-medium mb-6">
            {t.heroBody}
          </p>

          <div className="text-sm font-bold text-slate-400 dark:text-slate-400">
            {t.lastReviewed}
          </div>
        </div>
      </section>

      <div className="px-6 lg:px-12 pb-20 md:pb-32 max-w-4xl mx-auto w-full space-y-20 mt-12">

        {/* ─── STAT BAR ─── */}
        <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 shadow-sm">
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">{t.statExamWindowLabel}</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark"><span className="text-teal-600">{t.statExamWindowValue}</span></span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">{t.statQuestionsLabel}</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">{t.statQuestionsValue}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">{t.statDurationLabel}</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">{t.statDurationValue}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">{t.statSeatsLabel}</span>
            <span className="text-2xl md:text-3xl font-black text-teal-600">{t.statSeatsValue}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">{t.statInstitutesLabel}</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">{t.statInstitutesValue}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">{t.statAspirantsLabel}</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">{t.statAspirantsValue}</span>
          </div>
        </div>

        {/* ─── RELATED CAREER LINK ─── */}
        <div className="bg-teal-50 dark:bg-teal-950/30 border border-teal-100 dark:border-teal-900/40 rounded-2xl p-6 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <Icon icon="solar:compass-bold-duotone" className="w-8 h-8 text-teal-600" />
            <span className="font-bold text-neutral-dark text-sm md:text-base">{t.relatedCareerLabel}</span>
          </div>
          <Link href="/careers/urban-planning" className="bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs uppercase tracking-wider px-4 py-2 rounded-xl transition-all shadow-sm">
            {t.relatedCareerCta}
          </Link>
        </div>

        {/* ─── VISUAL ANALYTICS ─── */}
        <VisualAnalytics type="exam" data={jeePaper3AnalyticsData} colorTheme="teal" />

        {/* ─── WHAT IS JEE MAIN PAPER 3 ─── */}
        <section>
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 border-b-2 border-slate-200 dark:border-slate-700 pb-4 mb-8">
            {t.whatHeading}
          </h2>

          <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-12">
            <p>{t.whatP1}</p>
            <p>{t.whatP2}</p>
            <p>{t.whatP3}</p>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {t.institutes.map(inst => (
              <span key={inst} className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm px-4 py-2 rounded-lg shadow-sm">
                {inst}
              </span>
            ))}
          </div>

          <div className="bg-teal-50 dark:bg-teal-950/30 border-l-4 border-teal-500 p-6 rounded-r-xl">
            <p className="text-slate-800 dark:text-slate-300 leading-relaxed font-medium">
              <strong className="font-black text-teal-700">{t.streamFlexLabel}</strong>{t.streamFlexPre}<strong>{t.streamFlexBold}</strong>{t.streamFlexPost}
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
            <Link href="/exams/jee-paper3/what-it-is" className="group flex flex-col md:flex-row gap-6 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-teal-300 hover:bg-white/90 dark:hover:bg-slate-800/70 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-teal-500/5 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-teal-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300">01</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-teal-600 transition-colors duration-300">{t.card1Title}</h3>
                <div className="text-teal-600 text-xs font-semibold font-mono mb-4">/exams/jee-paper3/what-it-is</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  {t.card1Body}
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/40 shadow-sm">✓ {t.ready}</span>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/exams/jee-paper3/scholarships" className="group flex flex-col md:flex-row gap-6 bg-emerald-50/40 dark:bg-emerald-950/30 backdrop-blur-sm border border-emerald-200/60 dark:border-emerald-900/40 rounded-[2rem] p-6 md:p-8 hover:border-emerald-400/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1 relative overflow-hidden">
              <Icon
                icon="solar:diploma-bold-duotone"
                className="absolute -right-6 -bottom-6 w-36 h-36 text-emerald-500 opacity-[0.15] -rotate-12 pointer-events-none select-none"
              />
              <div className="text-4xl md:text-5xl font-black text-emerald-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300 relative z-10">02</div>
              <div className="flex-1 relative z-10">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-emerald-600 transition-colors duration-300">{t.card2Title}</h3>
                <div className="text-emerald-600 text-xs font-semibold font-mono mb-4">/exams/jee-paper3/scholarships</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  {t.card2Body}
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/40 shadow-sm">✓ {t.ready}</span>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/exams/jee-paper3/resources" className="group flex flex-col md:flex-row gap-6 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-teal-300 hover:bg-white/90 dark:hover:bg-slate-800/70 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-teal-500/5 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-teal-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300">03</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-teal-600 transition-colors duration-300">{t.card3Title}</h3>
                <div className="text-teal-600 text-xs font-semibold font-mono mb-4">/exams/jee-paper3/resources</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  {t.card3Body}
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/40 shadow-sm">✓ {t.ready}</span>
              </div>
            </Link>

            {/* Card 4 */}
            <Link href="/exams/jee-paper3/is-it-for-you" className="group flex flex-col md:flex-row gap-6 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-teal-300 hover:bg-white/90 dark:hover:bg-slate-800/70 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-teal-500/5 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-teal-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300">04</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-teal-600 transition-colors duration-300">{t.card4Title}</h3>
                <div className="text-teal-600 text-xs font-semibold font-mono mb-4">/exams/jee-paper3/is-it-for-you</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  {t.card4Body}
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/40 shadow-sm">✓ {t.ready}</span>
              </div>
            </Link>

            {/* Card 5 */}
            <Link href="/exams/jee-paper3/convince-parents" className="group flex flex-col md:flex-row gap-6 bg-amber-50/40 dark:bg-amber-950/30 backdrop-blur-sm border border-amber-200/60 dark:border-amber-900/40 rounded-[2rem] p-6 md:p-8 hover:border-amber-400/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1 relative overflow-hidden">
              <Icon
                icon="solar:users-group-two-rounded-bold-duotone"
                className="absolute -right-6 -bottom-6 w-36 h-36 text-amber-500 opacity-[0.15] -rotate-12 pointer-events-none select-none"
              />
              <div className="text-4xl md:text-5xl font-black text-amber-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300 relative z-10">05</div>
              <div className="flex-1 relative z-10">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-amber-600 transition-colors duration-300">{t.card5Title}</h3>
                <div className="text-amber-600 text-xs font-semibold font-mono mb-4">/exams/jee-paper3/convince-parents</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  {t.card5Body}
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/40 shadow-sm">✓ {t.ready}</span>
              </div>
            </Link>

          </div>
        </section>

      </div>
    </main>
  );
}
