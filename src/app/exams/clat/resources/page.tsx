"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    crumbExams: "Exams",
    crumbClat: "CLAT",
    crumbHere: "Resources & Prep",
    sectionLabel: "Section",
    headerTitle: "CLAT — Self-Study Blueprint",
    s1Title: "Self-Prep Books Worth Buying",
    s1Intro:
      "Instead of spending ₹1L on corporate coaching packages, you can build legal reasoning and analytical speed using standard publications:",
    s1aTag: "Legal Reasoning",
    s1aTitle: "Legal Awareness & Reasoning",
    s1aBody:
      "By AP Bhardwaj. Exceptional guide for learning legal terminology, constitution basics, torts, contracts, and solving previous years' legal problem passages.",
    s1bTag: "Logical Reasoning",
    s1bTitle: "Analytical Reasoning",
    s1bBody:
      "By MK Pandey. Highly recommended for critical logical analysis: identifying arguments, premises, fallacies, and assumptions tested in the logic section.",
    s1cTag: "Quantitative Aptitude",
    s1cTitle: "Quantitative Aptitude",
    s1cBody:
      "By RS Aggarwal. Practice data interpretation chapters (graphs, tables, pie charts) which make up 10% of the CLAT paper.",
    s2Title: "The Daily Reading Ritual",
    s2Intro:
      "Since CLAT consists of ~15,000 words across all passages to read in 120 minutes, your reading speed is your primary asset.",
    s2Heading: "How to build speed:",
    s2Body:
      "Read the Editorial and Opinion pages of The Hindu or The Indian Express daily. Highlight the central argument, trace how the author supports it, and summarize the passage in two sentences. This directly mirrors the reading comprehension and logical reasoning questions.",
    s3Title: "Mock Log & Error Analysis",
    s3Intro:
      "Attempt at least 30 full-length mocks. For each mock, maintain an error tracker separating mistakes into:",
    s3aBadge: "A",
    s3aTitle: "Conceptual Errors",
    s3aBody:
      "You didn't know the legal principle (e.g. difference between theft and extortion). Revise theory.",
    s3bBadge: "B",
    s3bTitle: "Silly Mistakes",
    s3bBody:
      "Misread the word NOT in the option. Focus on deliberate, calm reading during tests.",
    s3cBadge: "C",
    s3cTitle: "Time Penalties",
    s3cBody:
      "Stuck on a GK question for 3 minutes. Practice immediate skipping; you cannot afford to waste seconds.",
  },
  hi: {
    crumbExams: "परीक्षाएँ",
    crumbClat: "CLAT",
    crumbHere: "संसाधन और तैयारी",
    sectionLabel: "खंड",
    headerTitle: "CLAT — स्व-अध्ययन ब्लूप्रिंट",
    s1Title: "खरीदने लायक स्व-तैयारी की किताबें",
    s1Intro:
      "कॉर्पोरेट कोचिंग पैकेज पर ₹1L खर्च करने के बजाय, आप मानक प्रकाशनों का उपयोग करके विधिक तर्क और विश्लेषणात्मक गति बना सकते हैं:",
    s1aTag: "विधिक तर्क",
    s1aTitle: "Legal Awareness & Reasoning",
    s1aBody:
      "लेखक AP Bhardwaj। विधिक शब्दावली, संविधान की मूल बातें, टॉर्ट्स, अनुबंध सीखने और पिछले वर्षों के विधिक समस्या पैसेज हल करने के लिए बेहतरीन गाइड।",
    s1bTag: "तार्किक तर्क",
    s1bTitle: "Analytical Reasoning",
    s1bBody:
      "लेखक MK Pandey। क्रिटिकल लॉजिकल विश्लेषण के लिए अत्यधिक अनुशंसित: लॉजिक खंड में परखे जाने वाले तर्क, आधार, भ्रांतियाँ और मान्यताएँ पहचानना।",
    s1cTag: "मात्रात्मक अभिक्षमता",
    s1cTitle: "Quantitative Aptitude",
    s1cBody:
      "लेखक RS Aggarwal। डेटा इंटरप्रिटेशन अध्याय (ग्राफ़, तालिकाएँ, पाई चार्ट) का अभ्यास करें जो CLAT पेपर का 10% हैं।",
    s2Title: "रोज़ाना पढ़ने की दिनचर्या",
    s2Intro:
      "चूँकि CLAT में सभी पैसेज मिलाकर लगभग 15,000 शब्द 120 मिनट में पढ़ने होते हैं, इसलिए आपकी पठन गति आपकी मुख्य ताकत है।",
    s2Heading: "गति कैसे बनाएँ:",
    s2Body:
      "रोज़ाना The Hindu या The Indian Express के संपादकीय और ओपिनियन पेज पढ़ें। केंद्रीय तर्क को हाइलाइट करें, देखें कि लेखक उसका समर्थन कैसे करता है, और पैसेज को दो वाक्यों में सारांशित करें। यह सीधे पठन-समझ और तार्किक तर्क प्रश्नों जैसा है।",
    s3Title: "मॉक लॉग और त्रुटि विश्लेषण",
    s3Intro:
      "कम से कम 30 पूर्ण-लंबाई के मॉक हल करें। हर मॉक के लिए एक एरर ट्रैकर रखें जो गलतियों को इनमें बाँटे:",
    s3aBadge: "A",
    s3aTitle: "अवधारणात्मक त्रुटियाँ",
    s3aBody:
      "आपको विधिक सिद्धांत नहीं पता था (जैसे चोरी और जबरन वसूली का अंतर)। थ्योरी दोहराएँ।",
    s3bBadge: "B",
    s3bTitle: "लापरवाही की गलतियाँ",
    s3bBody:
      "विकल्प में NOT शब्द गलत पढ़ा। टेस्ट के दौरान सोच-समझकर, शांत होकर पढ़ने पर ध्यान दें।",
    s3cBadge: "C",
    s3cTitle: "समय की हानि",
    s3cBody:
      "एक GK प्रश्न पर 3 मिनट अटके रहे। तुरंत छोड़ने का अभ्यास करें; आप सेकंड बर्बाद नहीं कर सकते।",
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
          <pattern id="clat-resources-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#10b981" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#clat-resources-grid)" />
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

export default function ClatResourcesPage() {
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
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
            <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 bg-white dark:bg-slate-800/50 shadow-xs">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-600 block mb-2">{t.s1cTag}</span>
              <h4 className="font-black text-lg text-neutral-dark mb-2">{t.s1cTitle}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                {t.s1cBody}
              </p>
            </div>
          </div>
        </Section>

        <Section number="02" label={t.sectionLabel} title={t.s2Title}>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            {t.s2Intro}
          </p>
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 space-y-4">
            <h4 className="font-black text-xl text-neutral-dark">{t.s2Heading}</h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
              {t.s2Body}
            </p>
          </div>
        </Section>

        <Section number="03" label={t.sectionLabel} title={t.s3Title}>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            {t.s3Intro}
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 dark:border-slate-700 p-4 rounded-xl bg-white dark:bg-slate-800/50 flex items-start gap-4">
              <span className="h-6 w-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-black shrink-0 text-xs">{t.s3aBadge}</span>
              <div>
                <h5 className="font-black text-slate-700 dark:text-slate-300">{t.s3aTitle}</h5>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">{t.s3aBody}</p>
              </div>
            </div>
            <div className="border border-slate-200 dark:border-slate-700 p-4 rounded-xl bg-white dark:bg-slate-800/50 flex items-start gap-4">
              <span className="h-6 w-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-black shrink-0 text-xs">{t.s3bBadge}</span>
              <div>
                <h5 className="font-black text-slate-700 dark:text-slate-300">{t.s3bTitle}</h5>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">{t.s3bBody}</p>
              </div>
            </div>
            <div className="border border-slate-200 dark:border-slate-700 p-4 rounded-xl bg-white dark:bg-slate-800/50 flex items-start gap-4">
              <span className="h-6 w-6 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center font-black shrink-0 text-xs">{t.s3cBadge}</span>
              <div>
                <h5 className="font-black text-slate-700 dark:text-slate-300">{t.s3cTitle}</h5>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">{t.s3cBody}</p>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}
