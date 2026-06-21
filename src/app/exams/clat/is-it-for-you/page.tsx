"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    crumbExams: "Exams",
    crumbClat: "CLAT",
    crumbHere: "Is It For You?",
    sectionLabel: "Section",
    headerTitle: "CLAT — Is Law the Right Choice?",
    s1Title: "Corporate Desk vs Courtroom Litigation",
    s1Intro:
      "Indian legal professions are divided into two distinct lifestyles. Ensure you understand what you are targeting before enrolling:",
    s1aTag: "Corporate Advisory",
    s1aTitle: "Corporate Law Firms",
    s1aBody:
      "Work involves mergers, acquisitions, regulatory compliance, contract drafting, and IP registration. Pay is immediate (₹12L-₹18L starting average at Tier-1 firms). The trade-off: 12-14 hour workdays at office desks with high corporate stress levels.",
    s1bTag: "Courtroom Litigation",
    s1bTitle: "Advocacy & Court Trials",
    s1bBody:
      "Traditional court litigation. Offers independence, prestige, and high long-term earning potential. The catch: years of low-paid apprenticeship (₹10,000 - ₹25,000/mo) under senior advocates before establishing a private practice.",
    s2Title: "The Suitability Check",
    s2Intro: "Law matches your personality if:",
    s2Item1: "You can read, digest, and summarize over 50 pages of complex documents daily.",
    s2Item2: "You enjoy structural logic, reasoning, debates, and looking up precise definitions.",
    s2Item3: "You have high mental endurance to deal with intensive workloads, research, and client deadlines.",
    s3Title: "CLAT vs AILET (NLU Delhi)",
    s3Heading: "NLU Delhi's Separate Entrance Exam",
    s3P1:
      "NLU Delhi does not accept CLAT scores. It conducts its own entrance exam: AILET (All India Law Entrance Test).",
    s3P2:
      "AILET consists of 150 questions in 120 minutes across three sections: English Language, General Knowledge, and Logical Reasoning. While legal knowledge is not tested directly in a separate section, it is integrated into the Logical Reasoning section. Competition is fierce as there are only ~110 seats available for UG candidates.",
  },
  hi: {
    crumbExams: "परीक्षाएँ",
    crumbClat: "CLAT",
    crumbHere: "क्या यह आपके लिए है?",
    sectionLabel: "खंड",
    headerTitle: "CLAT — क्या लॉ सही विकल्प है?",
    s1Title: "कॉर्पोरेट डेस्क बनाम कोर्टरूम लिटिगेशन",
    s1Intro:
      "भारतीय विधिक पेशे दो अलग-अलग जीवनशैलियों में बँटे हैं। दाखिले से पहले सुनिश्चित करें कि आप किसे लक्ष्य बना रहे हैं:",
    s1aTag: "कॉर्पोरेट सलाहकार",
    s1aTitle: "कॉर्पोरेट लॉ फर्म",
    s1aBody:
      "काम में मर्जर, अधिग्रहण, नियामक अनुपालन, अनुबंध लेखन और IP पंजीकरण शामिल हैं। वेतन तुरंत मिलता है (Tier-1 फर्मों में औसतन ₹12L-₹18L शुरुआती)। बदले में: ऑफिस डेस्क पर 12-14 घंटे के कार्यदिवस और उच्च कॉर्पोरेट तनाव स्तर।",
    s1bTag: "कोर्टरूम लिटिगेशन",
    s1bTitle: "वकालत और कोर्ट ट्रायल",
    s1bBody:
      "पारंपरिक कोर्ट लिटिगेशन। यह स्वतंत्रता, प्रतिष्ठा और उच्च दीर्घकालिक कमाई की संभावना देता है। पेच यह है: निजी प्रैक्टिस स्थापित करने से पहले वरिष्ठ अधिवक्ताओं के अधीन वर्षों की कम-वेतन इंटर्नशिप (₹10,000 - ₹25,000/माह)।",
    s2Title: "उपयुक्तता जाँच",
    s2Intro: "लॉ आपके व्यक्तित्व से मेल खाता है यदि:",
    s2Item1: "आप रोज़ाना 50 से अधिक पृष्ठों के जटिल दस्तावेज़ पढ़, समझ और सारांशित कर सकते हैं।",
    s2Item2: "आपको संरचनात्मक तर्क, रीज़निंग, वाद-विवाद और सटीक परिभाषाएँ खोजने में आनंद आता है।",
    s2Item3: "आपमें भारी कार्यभार, शोध और क्लाइंट डेडलाइन से निपटने की उच्च मानसिक सहनशक्ति है।",
    s3Title: "CLAT बनाम AILET (NLU दिल्ली)",
    s3Heading: "NLU दिल्ली की अलग प्रवेश परीक्षा",
    s3P1:
      "NLU दिल्ली CLAT स्कोर स्वीकार नहीं करता। यह अपनी खुद की प्रवेश परीक्षा आयोजित करता है: AILET (All India Law Entrance Test)।",
    s3P2:
      "AILET में तीन खंडों में 120 मिनट में 150 प्रश्न होते हैं: अंग्रेज़ी भाषा, सामान्य ज्ञान और तार्किक तर्क। हालाँकि विधिक ज्ञान को अलग खंड में सीधे नहीं परखा जाता, यह तार्किक तर्क खंड में शामिल है। प्रतिस्पर्धा कड़ी है क्योंकि UG उम्मीदवारों के लिए केवल ~110 सीटें उपलब्ध हैं।",
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
          <pattern id="clat-is-it-for-you-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#10b981" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#clat-is-it-for-you-grid)" />
      </svg>
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-teal-500/5 rounded-full blur-[60px]" />

      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="clat-wii-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="clat-wii-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#clat-wii-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#clat-wii-wave-grad-2)" />
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.1" />
        <path d="M0,240 C480,120 960,320 1440,160" stroke="#14b8a6" strokeWidth="1.5" strokeOpacity="0.05" strokeDasharray="6 6" />
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
      <div className="text-emerald-600 font-black text-sm uppercase tracking-widest mb-4">
        {label} {number}
      </div>
      <h2 className="text-3xl md:text-4xl font-black mb-8 text-neutral-dark tracking-tight">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

export default function ClatIsItForYouPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C] min-h-screen">
      <PageHeader
        title={t.headerTitle}
        breadcrumbs={
          <>
            <Link href="/exams" className="hover:text-emerald-600 transition-colors">
              {t.crumbExams}
            </Link>{" "}
            <span>›</span>
            <Link href="/exams/clat" className="hover:text-emerald-600 transition-colors">
              {t.crumbClat}
            </Link>{" "}
            <span>›</span>
            <span className="text-emerald-600">{t.crumbHere}</span>
          </>
        }
      />

      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 pb-24">
        <Section number="01" label={t.sectionLabel} title={t.s1Title}>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            {t.s1Intro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 bg-white dark:bg-slate-800/50 shadow-xs">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-600 block mb-2">{t.s1aTag}</span>
              <h4 className="font-black text-lg text-neutral-dark mb-2">{t.s1aTitle}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                {t.s1aBody}
              </p>
            </div>
            <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 bg-white dark:bg-slate-800/50 shadow-xs">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-600 block mb-2">{t.s1bTag}</span>
              <h4 className="font-black text-lg text-neutral-dark mb-2">{t.s1bTitle}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                {t.s1bBody}
              </p>
            </div>
          </div>
        </Section>

        <Section number="02" label={t.sectionLabel} title={t.s2Title}>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            {t.s2Intro}
          </p>
          <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 leading-relaxed font-semibold space-y-3">
            <li>{t.s2Item1}</li>
            <li>{t.s2Item2}</li>
            <li>{t.s2Item3}</li>
          </ul>
        </Section>

        <Section number="03" label={t.sectionLabel} title={t.s3Title}>
          <div className="p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40">
            <h3 className="text-xl font-black text-neutral-dark mb-4">
              {t.s3Heading}
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-4">
              {t.s3P1}
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
              {t.s3P2}
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}
