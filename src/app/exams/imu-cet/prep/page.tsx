"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    crumbExams: "Exams",
    crumbImuCet: "IMU CET",
    crumbHere: "Prep",
    headerTitle: "IMU CET — Preparation Strategy",
    sectionLabel: "Section",
    s1Title: "Core Academic Preparation (Class 11 & 12 NCERT)",
    s1Body:
      "Since IMU CET is heavily based on state board and CBSE syllabi, candidates do not need separate coaching modules. Master these foundational elements:",
    cards: [
      {
        label: "Maths & Physics",
        title: "NCERT Class 11 & 12",
        body: "Re-solve textbook examples. Focus on Mechanics, Electromagnetism, Optics, Trigonometry, Calculus, and Coordinate Geometry.",
      },
      {
        label: "Maritime Reference",
        title: "Subodh Kumar Prep Guide",
        body: "The most widely read guide for IMU CET. Contains compiled GAT papers, sample maritime aptitude questions, and general science questions.",
      },
      {
        label: "General English",
        title: "Wren & Martin Grammar",
        body: "Practice basic grammar exercises, active/passive voice conversions, vocabulary synonyms, and spelling checks tested in the GAT English section.",
      },
    ],
    s2Title: "Shipping Company Sponsorship Interview Preparation",
    s2Body:
      "Securing a sponsorship requires clearing the shipping company's own online test and interview. The exam rank alone is not enough — most serious candidates pursue sponsorship in parallel with their IMU CET prep.",
    s2Heading: "Interview Key Areas:",
    s2BoxBody:
      "Prepare for basic physics/machinery questions (e.g. how a 4-stroke engine works, buoyancy principles, gears, and pulley systems). The interviewer will evaluate your communication skills, physical discipline, and suitability for long isolation onboard cargo ships. Show confidence, clear speech, and solid posture.",
    s2CalloutStrong: "Coaching is not necessary for IMU CET.",
    s2CalloutBody:
      " The exam tests Class 11–12 PCM fundamentals. Candidates with a solid board-exam foundation and 3–4 months of focused self-study can clear it without coaching centres. Save that money for the sponsorship hunt instead.",
    seeAlso: "See also:",
    seeAlso1: "Full exam breakdown →",
    seeAlso2: "DNS vs B.Sc vs B.Tech →",
    seeAlso3: "Medical & eligibility →",
  },
  hi: {
    crumbExams: "परीक्षाएँ",
    crumbImuCet: "IMU CET",
    crumbHere: "तैयारी",
    headerTitle: "IMU CET — तैयारी रणनीति",
    sectionLabel: "खंड",
    s1Title: "मूल शैक्षणिक तैयारी (कक्षा 11 और 12 NCERT)",
    s1Body:
      "चूँकि IMU CET काफ़ी हद तक राज्य बोर्ड और CBSE पाठ्यक्रम पर आधारित है, उम्मीदवारों को अलग कोचिंग मॉड्यूल की ज़रूरत नहीं है। इन बुनियादी तत्वों में महारत हासिल करें:",
    cards: [
      {
        label: "गणित और भौतिकी",
        title: "NCERT कक्षा 11 और 12",
        body: "पाठ्यपुस्तक के उदाहरण फिर से हल करें। मैकेनिक्स, इलेक्ट्रोमैग्नेटिज़्म, ऑप्टिक्स, त्रिकोणमिति, कैलकुलस और निर्देशांक ज्यामिति पर ध्यान दें।",
      },
      {
        label: "मैरीटाइम संदर्भ",
        title: "Subodh Kumar प्रेप गाइड",
        body: "IMU CET के लिए सबसे व्यापक रूप से पढ़ी जाने वाली गाइड। इसमें संकलित GAT पेपर, नमूना मैरीटाइम अभिक्षमता प्रश्न और सामान्य विज्ञान प्रश्न शामिल हैं।",
      },
      {
        label: "सामान्य अंग्रेज़ी",
        title: "Wren & Martin व्याकरण",
        body: "GAT अंग्रेज़ी खंड में परखे जाने वाले बुनियादी व्याकरण अभ्यास, सक्रिय/निष्क्रिय वाच्य रूपांतरण, शब्दावली पर्यायवाची और वर्तनी जाँच का अभ्यास करें।",
      },
    ],
    s2Title: "शिपिंग कंपनी स्पॉन्सरशिप साक्षात्कार की तैयारी",
    s2Body:
      "स्पॉन्सरशिप हासिल करने के लिए शिपिंग कंपनी की अपनी ऑनलाइन परीक्षा और साक्षात्कार पास करना आवश्यक है। अकेले परीक्षा रैंक पर्याप्त नहीं है — अधिकांश गंभीर उम्मीदवार अपनी IMU CET तैयारी के साथ-साथ स्पॉन्सरशिप का प्रयास करते हैं।",
    s2Heading: "साक्षात्कार के मुख्य क्षेत्र:",
    s2BoxBody:
      "बुनियादी भौतिकी/मशीनरी प्रश्नों के लिए तैयारी करें (जैसे 4-स्ट्रोक इंजन कैसे काम करता है, उत्प्लावन सिद्धांत, गियर और पुली सिस्टम)। साक्षात्कारकर्ता आपके संचार कौशल, शारीरिक अनुशासन और कार्गो जहाज़ों पर लंबे अकेलेपन के लिए उपयुक्तता का मूल्यांकन करेगा। आत्मविश्वास, स्पष्ट वाणी और मज़बूत मुद्रा दिखाएँ।",
    s2CalloutStrong: "IMU CET के लिए कोचिंग ज़रूरी नहीं है।",
    s2CalloutBody:
      " परीक्षा कक्षा 11–12 PCM की बुनियादी बातें परखती है। मज़बूत बोर्ड-परीक्षा नींव और 3–4 महीने के केंद्रित स्व-अध्ययन वाले उम्मीदवार इसे कोचिंग सेंटरों के बिना पास कर सकते हैं। वह पैसा स्पॉन्सरशिप की तलाश के लिए बचाएँ।",
    seeAlso: "यह भी देखें:",
    seeAlso1: "पूरा परीक्षा ब्यौरा →",
    seeAlso2: "DNS बनाम B.Sc बनाम B.Tech →",
    seeAlso3: "मेडिकल और पात्रता →",
  },
} as const;

const PageHeader = ({
  title,
  breadcrumbs,
}: {
  title: string;
  breadcrumbs: React.ReactNode;
}) => (
  <section className="relative overflow-hidden bg-white dark:bg-[#0E111E] border-b border-slate-200/60 dark:border-slate-700 pt-24 pb-16 md:pt-32 md:pb-20">
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
      <svg className="absolute inset-0 w-full h-full opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="imucet-prep-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ea580c" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#imucet-prep-grid)" />
      </svg>
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-sky-500/5 rounded-full blur-[60px]" />

      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="imucet-prep-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="imucet-prep-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#imucet-prep-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#imucet-prep-wave-grad-2)" />
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80" stroke="#ea580c" strokeWidth="1.5" strokeOpacity="0.1" />
        <path d="M0,240 C480,120 960,320 1440,160" stroke="#0ea5e9" strokeWidth="1.5" strokeOpacity="0.05" strokeDasharray="6 6" />
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
  label,
  title,
  children,
}: {
  number: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-[2rem] p-8 md:p-12 mb-12 shadow-sm relative overflow-hidden">
    <div className="absolute top-0 right-0 p-8 text-[6rem] font-black text-slate-50 leading-none select-none z-0">
      {number}
    </div>
    <div className="relative z-10">
      <div className="text-orange-600 font-black text-sm uppercase tracking-widest mb-4">
        {label} {number}
      </div>
      <h2 className="text-3xl md:text-4xl font-black mb-8 text-neutral-dark tracking-tight">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

export default function ImuCetPrepPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C] min-h-screen">
      <PageHeader
        title={t.headerTitle}
        breadcrumbs={
          <>
            <Link href="/exams" className="hover:text-orange-600 transition-colors">
              {t.crumbExams}
            </Link>{" "}
            <span>›</span>
            <Link href="/exams/imu-cet" className="hover:text-orange-600 transition-colors">
              {t.crumbImuCet}
            </Link>{" "}
            <span>›</span>
            <span className="text-orange-600">{t.crumbHere}</span>
          </>
        }
      />

      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 pb-24">
        <Section number="01" label={t.sectionLabel} title={t.s1Title}>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            {t.s1Body}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            {t.cards.map((card) => (
              <div key={card.title} className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 bg-white dark:bg-slate-800/50 shadow-sm">
                <span className="text-xs font-black uppercase tracking-wider text-orange-600 block mb-2">{card.label}</span>
                <h4 className="font-black text-lg text-neutral-dark mb-2">{card.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section number="02" label={t.sectionLabel} title={t.s2Title}>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            {t.s2Body}
          </p>
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 space-y-4">
            <h4 className="font-black text-xl text-neutral-dark">{t.s2Heading}</h4>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-semibold">
              {t.s2BoxBody}
            </p>
          </div>

          <div className="bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-500 p-6 rounded-r-xl mt-8">
            <p className="text-slate-800 dark:text-slate-300 leading-relaxed font-medium">
              <strong className="font-black text-orange-700">{t.s2CalloutStrong}</strong>{t.s2CalloutBody}
            </p>
          </div>
        </Section>

        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            <strong className="text-slate-700 dark:text-slate-300">{t.seeAlso}</strong>{" "}
            <Link href="/exams/imu-cet/what-it-is" className="text-orange-600 hover:underline font-bold">{t.seeAlso1}</Link>{" "}
            ·{" "}
            <Link href="/exams/imu-cet/entry-paths" className="text-orange-600 hover:underline font-bold">{t.seeAlso2}</Link>{" "}
            ·{" "}
            <Link href="/exams/imu-cet/medical" className="text-orange-600 hover:underline font-bold">{t.seeAlso3}</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
