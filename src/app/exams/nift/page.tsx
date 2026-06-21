"use client";

import React from 'react';
import Link from 'next/link';
import VisualAnalytics from '@/components/ui/VisualAnalytics';
import { Icon } from '@iconify/react';
import { useLanguage } from "@/context/LanguageContext";

const niftAnalyticsData = {
  trends: [
    { year: 2022, applicants: 17000, seats: 2600 },
    { year: 2023, applicants: 18500, seats: 2700 },
    { year: 2024, applicants: 20000, seats: 2800 },
    { year: 2025, applicants: 20000, seats: 2800 },
    { year: 2026, applicants: 22000, seats: 2800 }
  ],
  seatFunnel: {
    applicants: 22000,
    seats: 2800
  }
};

const translations = {
  en: {
    crumbExams: "Exams",
    crumbNift: "NIFT",
    headerTitlePre: "NIFT Entrance — Fashion Design at ",
    headerTitleEm: "India's Premier Institutes",
    headerLede:
      "The gateway into Bachelor of Design (B.Des) and Bachelor of Fashion Technology (B.FTech) programs across all 16 NIFT campuses. ~20,000 aspirants. Two stages: Creative Ability Test (CAT) and General Ability Test (GAT). This is everything you need — no coaching centre bias.",
    lastReviewed: "Last reviewed: May 2026 · Based on NIFT 2026 official prospectus",
    statExamWindow: "Exam Window",
    statExamWindowPre: "Feb",
    statExamWindowYear: " 2026",
    statTotalMarks: "Total Marks",
    statDuration: "Duration",
    statDurationVal: "3+3 hrs",
    statSeats: "Total Seats (B.Des)",
    statCampuses: "Campuses",
    statAspirants: "Aspirants",
    relatedCareer: "Related Career Guide: Fashion Design",
    viewCareer: "View Career",
    whatIsHeading: "What is NIFT Entrance",
    whatIsP1:
      "The NIFT Entrance Exam is India's most recognized gateway into fashion and textile education. Conducted by the National Institute of Fashion Technology every February, it opens doors to B.Des (Fashion Design, Textile Design, Knitwear Design, Leather Design, Accessory Design) and B.FTech (Apparel Production) programs across 16 campuses nationwide.",
    whatIsP2:
      "The exam has two distinct papers: the Creative Ability Test (CAT) — which evaluates your drawing, spatial sense, colour understanding, and design thinking — and the General Ability Test (GAT), covering quantitative ability, communication, English, and general knowledge. For B.Des, both scores matter. For B.FTech, only GAT is considered.",
    whatIsP3:
      "Unlike engineering entrances, NIFT rewards creative portfolios and visual thinking. However, the GAT is no walkover — most aspirants underestimate its weightage and lose out. Coaching centres push CAT prep heavily but often neglect GAT strategy, which costs candidates real ranks.",
    campuses: [
      'NIFT Delhi — Flagship Campus', 'NIFT Mumbai — 280 seats', 'NIFT Bengaluru', 'NIFT Hyderabad', 'NIFT Chennai', 'NIFT Kolkata', 'NIFT Gandhinagar', 'NIFT Patna', 'NIFT Raebareli', 'NIFT Shillong', 'NIFT Bhopal', 'NIFT Jodhpur', 'NIFT Kangra', 'NIFT Kannur', 'NIFT Srinagar', 'NIFT Daman'
    ],
    situationLabel: "Situation test alert:",
    situationBody:
      " Shortlisted B.Des candidates are called for a Situation Test — a hands-on studio test where you build models from materials provided. This is conducted at NIFT campuses and is a make-or-break stage that coaching centres rarely prepare you for. Your material handling, 3D thinking, and time management under pressure matter more than drawing skill here.",
    guidesHeading: "Everything on NIFT — WhatNow Guides",
    readyToRead: "✓ Ready to read",
    card1Title: "What It Is — The complete breakdown",
    card1Body:
      "Everything about the NIFT entrance: CAT and GAT paper patterns, marking scheme, eligibility criteria (age limits, stream requirements), all 16 campus profiles, seat matrix by category, counselling process, and what closing ranks actually look like.",
    card2Title: "Is It For You — Suitability Check",
    card2Body:
      "Should you actually target NIFT? What kind of students thrive here versus regret it? The reality of fashion industry jobs, salary expectations, and whether the investment makes sense for your financial background. Honest self-assessment before you commit.",
    card3Title: "Resources — CAT, GAT & Situation Test Prep",
    card3Body:
      "Detailed syllabus breakdowns for CAT (drawing, colour theory, spatial reasoning) and GAT (quant, verbal, GK). Past papers, mock tests, coaching vs. self-study analysis, and a practical week-by-week preparation roadmap. Plus: how to actually prepare for the Situation Test.",
    card4Title: "Fees, Scholarships & ROI",
    card4Body:
      "Complete fee structures across all 16 campuses, government scholarship schemes, category-wise fee waivers, education loan options, and an honest return-on-investment analysis: what a NIFT graduate actually earns in years 1, 3, and 5 across different specialisations.",
    card5Title: "Convince Your Parents — With actual data",
    card5Body:
      "Fashion isn't a gamble — but you need to show them the math. This guide equips you with placement stats, buying house starting packages, and how to handle objections about job stability.",
  },
  hi: {
    crumbExams: "परीक्षाएँ",
    crumbNift: "NIFT",
    headerTitlePre: "NIFT प्रवेश परीक्षा — फ़ैशन डिज़ाइन ",
    headerTitleEm: "भारत के प्रमुख संस्थानों में",
    headerLede:
      "सभी 16 NIFT कैंपसों में बैचलर ऑफ़ डिज़ाइन (B.Des) और बैचलर ऑफ़ फ़ैशन टेक्नोलॉजी (B.FTech) कार्यक्रमों का प्रवेश-द्वार। ~20,000 अभ्यर्थी। दो चरण: क्रिएटिव एबिलिटी टेस्ट (CAT) और जनरल एबिलिटी टेस्ट (GAT)। आपको जो कुछ चाहिए, सब यहीं है — किसी कोचिंग सेंटर के पक्षपात के बिना।",
    lastReviewed: "अंतिम समीक्षा: मई 2026 · NIFT 2026 आधिकारिक प्रॉस्पेक्टस पर आधारित",
    statExamWindow: "परीक्षा अवधि",
    statExamWindowPre: "फ़र",
    statExamWindowYear: " 2026",
    statTotalMarks: "कुल अंक",
    statDuration: "अवधि",
    statDurationVal: "3+3 घंटे",
    statSeats: "कुल सीटें (B.Des)",
    statCampuses: "कैंपस",
    statAspirants: "अभ्यर्थी",
    relatedCareer: "संबंधित करियर गाइड: फ़ैशन डिज़ाइन",
    viewCareer: "करियर देखें",
    whatIsHeading: "NIFT प्रवेश परीक्षा क्या है",
    whatIsP1:
      "NIFT प्रवेश परीक्षा भारत में फ़ैशन और टेक्सटाइल शिक्षा का सबसे प्रतिष्ठित प्रवेश-द्वार है। नेशनल इंस्टीट्यूट ऑफ़ फ़ैशन टेक्नोलॉजी द्वारा हर फ़रवरी में आयोजित यह परीक्षा देशभर के 16 कैंपसों में B.Des (फ़ैशन डिज़ाइन, टेक्सटाइल डिज़ाइन, निटवियर डिज़ाइन, लेदर डिज़ाइन, एक्सेसरी डिज़ाइन) और B.FTech (अपैरल प्रोडक्शन) कार्यक्रमों के द्वार खोलती है।",
    whatIsP2:
      "परीक्षा में दो अलग-अलग पेपर होते हैं: क्रिएटिव एबिलिटी टेस्ट (CAT) — जो आपकी ड्रॉइंग, स्थानिक समझ, रंगों की समझ और डिज़ाइन सोच को परखता है — और जनरल एबिलिटी टेस्ट (GAT), जो मात्रात्मक योग्यता, संचार, अंग्रेज़ी और सामान्य ज्ञान को कवर करता है। B.Des के लिए दोनों स्कोर मायने रखते हैं। B.FTech के लिए केवल GAT पर विचार किया जाता है।",
    whatIsP3:
      "इंजीनियरिंग प्रवेश परीक्षाओं के विपरीत, NIFT रचनात्मक पोर्टफ़ोलियो और विज़ुअल सोच को महत्व देता है। हालाँकि GAT आसान नहीं है — अधिकांश अभ्यर्थी इसके भारांक को कम आँकते हैं और पिछड़ जाते हैं। कोचिंग सेंटर CAT की तैयारी पर ज़्यादा ज़ोर देते हैं पर अक्सर GAT रणनीति की अनदेखी करते हैं, जिससे अभ्यर्थियों की असली रैंक गिर जाती है।",
    campuses: [
      'NIFT दिल्ली — फ़्लैगशिप कैंपस', 'NIFT मुंबई — 280 सीटें', 'NIFT बेंगलुरु', 'NIFT हैदराबाद', 'NIFT चेन्नई', 'NIFT कोलकाता', 'NIFT गांधीनगर', 'NIFT पटना', 'NIFT रायबरेली', 'NIFT शिलॉन्ग', 'NIFT भोपाल', 'NIFT जोधपुर', 'NIFT कांगड़ा', 'NIFT कन्नूर', 'NIFT श्रीनगर', 'NIFT दमन'
    ],
    situationLabel: "सिचुएशन टेस्ट चेतावनी:",
    situationBody:
      " शॉर्टलिस्ट हुए B.Des अभ्यर्थियों को सिचुएशन टेस्ट के लिए बुलाया जाता है — एक प्रैक्टिकल स्टूडियो टेस्ट जिसमें आप दी गई सामग्री से मॉडल बनाते हैं। यह NIFT कैंपसों में होता है और एक निर्णायक चरण है जिसके लिए कोचिंग सेंटर शायद ही तैयारी कराते हैं। यहाँ ड्रॉइंग कौशल से ज़्यादा आपकी सामग्री संभालने की क्षमता, 3D सोच और दबाव में समय प्रबंधन मायने रखता है।",
    guidesHeading: "NIFT पर सब कुछ — WhatNow गाइड्स",
    readyToRead: "✓ पढ़ने के लिए तैयार",
    card1Title: "यह क्या है — पूरा ब्यौरा",
    card1Body:
      "NIFT प्रवेश परीक्षा के बारे में सब कुछ: CAT और GAT पेपर पैटर्न, अंकन योजना, पात्रता मानदंड (आयु सीमा, स्ट्रीम आवश्यकताएँ), सभी 16 कैंपस प्रोफ़ाइल, श्रेणी-वार सीट मैट्रिक्स, काउंसलिंग प्रक्रिया, और क्लोज़िंग रैंक असल में कैसी दिखती हैं।",
    card2Title: "क्या यह आपके लिए है — उपयुक्तता जाँच",
    card2Body:
      "क्या आपको वाकई NIFT का लक्ष्य रखना चाहिए? यहाँ किस तरह के छात्र फलते-फूलते हैं और किन्हें पछतावा होता है? फ़ैशन इंडस्ट्री की नौकरियों की हकीकत, वेतन की उम्मीदें, और क्या यह निवेश आपकी आर्थिक पृष्ठभूमि के लिए सही है। प्रतिबद्ध होने से पहले एक ईमानदार आत्म-मूल्यांकन।",
    card3Title: "संसाधन — CAT, GAT और सिचुएशन टेस्ट तैयारी",
    card3Body:
      "CAT (ड्रॉइंग, रंग सिद्धांत, स्थानिक तर्क) और GAT (मात्रात्मक, मौखिक, सामान्य ज्ञान) के लिए विस्तृत सिलेबस ब्रेकडाउन। पिछले पेपर, मॉक टेस्ट, कोचिंग बनाम सेल्फ़-स्टडी विश्लेषण, और एक व्यावहारिक सप्ताह-दर-सप्ताह तैयारी रोडमैप। साथ ही: सिचुएशन टेस्ट की असल तैयारी कैसे करें।",
    card4Title: "फ़ीस, स्कॉलरशिप और ROI",
    card4Body:
      "सभी 16 कैंपसों की पूरी फ़ीस संरचना, सरकारी स्कॉलरशिप योजनाएँ, श्रेणी-वार फ़ीस छूट, एजुकेशन लोन विकल्प, और एक ईमानदार रिटर्न-ऑन-इन्वेस्टमेंट विश्लेषण: एक NIFT स्नातक विभिन्न विशेषज्ञताओं में 1, 3 और 5 साल में असल में कितना कमाता है।",
    card5Title: "अपने माता-पिता को मनाएँ — असली डेटा के साथ",
    card5Body:
      "फ़ैशन कोई जुआ नहीं है — पर आपको उन्हें गणित दिखाना होगा। यह गाइड आपको प्लेसमेंट आँकड़े, बाइंग हाउस के शुरुआती पैकेज, और नौकरी की स्थिरता पर आपत्तियों को संभालने का तरीका देती है।",
  },
} as const;

export default function NiftHubPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C]">
      {/* ─── PAGE HEADER ─── */}
      <section className="relative overflow-hidden bg-white dark:bg-[#0E111E] border-b border-slate-200/60 dark:border-slate-700 pt-24 pb-16 md:pt-32 md:pb-20">
        {/* SVG Hero Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          {/* Subtle grid pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="nift-hub-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ec4899" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#nift-hub-grid)" />
          </svg>

          {/* Layered glowing blobs */}
          <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[80px]" />
          <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-[#ff5a1f]/5 rounded-full blur-[60px]" />

          {/* Smooth vector paths */}
          <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <linearGradient id="nift-hub-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="nift-hub-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff5a1f" stopOpacity="0.02" />
                <stop offset="100%" stopColor="#ff5a1f" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#nift-hub-wave-grad-1)" />
            <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#nift-hub-wave-grad-2)" />
            <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80" stroke="#ec4899" strokeWidth="1.5" strokeOpacity="0.1" />
            <path d="M0,240 C480,120 960,320 1440,160" stroke="#ff5a1f" strokeWidth="1.5" strokeOpacity="0.05" strokeDasharray="6 6" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto w-full px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mb-8">
            <Link href="/exams" className="hover:text-[#5563ED] transition-colors">{t.crumbExams}</Link>
            <span>›</span>
            <span className="text-pink-600">{t.crumbNift}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-8 text-neutral-dark dark:text-slate-100">
            {t.headerTitlePre}<em className="text-pink-600 not-italic">{t.headerTitleEm}</em>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed font-medium mb-6">
            {t.headerLede}
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
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">{t.statExamWindow}</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark dark:text-slate-100"><span className="text-pink-600">{t.statExamWindowPre}</span>{t.statExamWindowYear}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">{t.statTotalMarks}</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark dark:text-slate-100">200+200</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">{t.statDuration}</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark dark:text-slate-100">{t.statDurationVal}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">{t.statSeats}</span>
            <span className="text-2xl md:text-3xl font-black text-pink-600">~2,800</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">{t.statCampuses}</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark dark:text-slate-100">16</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">{t.statAspirants}</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark dark:text-slate-100">~20K</span>
          </div>
        </div>

        {/* ─── RELATED CAREER LINK ─── */}
        <div className="bg-pink-50 dark:bg-pink-950/30 border border-pink-100 dark:border-pink-900/40 rounded-2xl p-6 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <svg className="w-8 h-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="font-bold text-neutral-dark dark:text-slate-100 text-sm md:text-base">{t.relatedCareer}</span>
          </div>
          <Link href="/careers/fashion-design" className="bg-pink-600 hover:bg-pink-700 text-white font-extrabold text-xs uppercase tracking-wider px-4 py-2 rounded-xl transition-all shadow-sm">
            {t.viewCareer}
          </Link>
        </div>

        {/* ─── VISUAL ANALYTICS ─── */}
        <VisualAnalytics type="exam" data={niftAnalyticsData} colorTheme="pink" />

        {/* ─── WHAT IS NIFT ─── */}
        <section>
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 border-b-2 border-slate-200 dark:border-slate-700 pb-4 mb-8">
            {t.whatIsHeading}
          </h2>

          <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-12">
            <p>
              {t.whatIsP1}
            </p>
            <p>
              {t.whatIsP2}
            </p>
            <p>
              {t.whatIsP3}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {t.campuses.map(inst => (
              <span key={inst} className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm px-4 py-2 rounded-lg shadow-sm">
                {inst}
              </span>
            ))}
          </div>

          <div className="bg-orange-50 dark:bg-orange-950/30 border-l-4 border-pink-500 p-6 rounded-r-xl">
            <p className="text-slate-800 dark:text-slate-300 leading-relaxed font-medium">
              <strong className="font-black">{t.situationLabel}</strong>{t.situationBody}
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
            <Link href="/exams/nift/what-it-is" className="group flex flex-col md:flex-row gap-6 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-pink-300 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-pink-500/5 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-pink-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300">01</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark dark:text-slate-100 mb-1 group-hover:text-pink-600 transition-colors duration-300">{t.card1Title}</h3>
                <div className="text-pink-600 text-xs font-semibold font-mono mb-4">/exams/nift/what-it-is</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  {t.card1Body}
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm border border-emerald-100 dark:border-emerald-900/40">{t.readyToRead}</span>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/exams/nift/is-it-for-you" className="group flex flex-col md:flex-row gap-6 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-pink-300 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-pink-500/5 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-pink-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300">02</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark dark:text-slate-100 mb-1 group-hover:text-pink-600 transition-colors duration-300">{t.card2Title}</h3>
                <div className="text-pink-600 text-xs font-semibold font-mono mb-4">/exams/nift/is-it-for-you</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  {t.card2Body}
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/40 shadow-sm">{t.readyToRead}</span>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/exams/nift/resources" className="group flex flex-col md:flex-row gap-6 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-pink-300 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-pink-500/5 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-pink-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300">03</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark dark:text-slate-100 mb-1 group-hover:text-pink-600 transition-colors duration-300">{t.card3Title}</h3>
                <div className="text-pink-600 text-xs font-semibold font-mono mb-4">/exams/nift/resources</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  {t.card3Body}
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/40 shadow-sm">{t.readyToRead}</span>
              </div>
            </Link>

            {/* Card 4 */}
            <Link href="/exams/nift/scholarships" className="group flex flex-col md:flex-row gap-6 bg-emerald-50/40 dark:bg-emerald-950/30 backdrop-blur-sm border border-emerald-200/60 dark:border-emerald-900/40 rounded-[2rem] p-6 md:p-8 hover:border-emerald-400/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1 relative overflow-hidden">
              <Icon
                icon="solar:diploma-bold-duotone"
                className="absolute -right-6 -bottom-6 w-36 h-36 text-emerald-500 opacity-[0.15] -rotate-12 pointer-events-none select-none"
              />
              <div className="text-4xl md:text-5xl font-black text-emerald-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300 relative z-10">04</div>
              <div className="flex-1 relative z-10">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark dark:text-slate-100 mb-1 group-hover:text-emerald-600 transition-colors duration-300">{t.card4Title}</h3>
                <div className="text-emerald-600 text-xs font-semibold font-mono mb-4">/exams/nift/scholarships</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  {t.card4Body}
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm border border-emerald-100 dark:border-emerald-900/40">{t.readyToRead}</span>
              </div>
            </Link>

            {/* Card 5 */}
            <Link href="/exams/nift/convince-parents" className="group flex flex-col md:flex-row gap-6 bg-amber-50/40 dark:bg-amber-950/30 backdrop-blur-sm border border-amber-200/60 dark:border-amber-900/40 rounded-[2rem] p-6 md:p-8 hover:border-amber-400/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1 relative overflow-hidden">
              <Icon
                icon="solar:users-group-two-rounded-bold-duotone"
                className="absolute -right-6 -bottom-6 w-36 h-36 text-amber-500 opacity-[0.15] -rotate-12 pointer-events-none select-none"
              />
              <div className="text-4xl md:text-5xl font-black text-amber-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300 relative z-10">05</div>
              <div className="flex-1 relative z-10">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark dark:text-slate-100 mb-1 group-hover:text-amber-600 transition-colors duration-300">{t.card5Title}</h3>
                <div className="text-amber-600 text-xs font-semibold font-mono mb-4">/exams/nift/convince-parents</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  {t.card5Body}
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/40 shadow-sm">{t.readyToRead}</span>
              </div>
            </Link>

          </div>
        </section>

      </div>
    </main>
  );
}
