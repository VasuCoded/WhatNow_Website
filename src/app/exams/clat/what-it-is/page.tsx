"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    crumbExams: "Exams",
    crumbClat: "CLAT",
    crumbHere: "What It Is",
    headerTitle: "CLAT — The Exam Breakdown",
    sectionLabel: "Section",
    s1Title: "The 120-Question Offline Format",
    s1Body:
      "CLAT is a pen-and-paper (offline) exam consisting of 120 multiple-choice questions to be solved in 2 hours (120 minutes). The paper is entirely comprehension-based, consisting of passage-based questions testing reading comprehension, analytical speed, and critical thinking.",
    thSubject: "Subject Section",
    thQuestions: "Approx. Questions",
    thWeightage: "Weightage (%)",
    rows: [
      { s: "Legal Reasoning (Passage-based)", q: "28 - 32 questions", w: "25%" },
      { s: "Current Affairs & General Knowledge", q: "28 - 32 questions", w: "25%" },
      { s: "English Language (Comprehension)", q: "22 - 26 questions", w: "20%" },
      { s: "Logical Reasoning (Critical Logic)", q: "22 - 26 questions", w: "20%" },
      { s: "Quantitative Techniques (Data Interpretation)", q: "10 - 14 questions", w: "10%" },
    ],
    s2Title: "Marking Rules & Negative Penalties",
    s2Heading: "Negative Marking is the Real Filter",
    s2Body:
      "Each correct answer awards +1 mark, while an incorrect answer penalizes you by -0.25 marks. Unanswered questions receive 0 marks. Because the paper is highly timed (one minute per question, including reading lengthy passages), accuracy and selection of which passages to attempt vs skip determine whether you cross the score threshold.",
    s3Title: "Eligibility & Registration Requirements",
    s3Body:
      "Candidates must have passed Class 12 or equivalent with a minimum of 45% marks (40% for SC/ST candidates). Candidates appearing in their Class 12 board exams are also eligible to register. There is no upper age limit for appearing in CLAT.",
  },
  hi: {
    crumbExams: "परीक्षाएँ",
    crumbClat: "CLAT",
    crumbHere: "यह क्या है",
    headerTitle: "CLAT — परीक्षा का पूरा ब्यौरा",
    sectionLabel: "खंड",
    s1Title: "120 प्रश्नों वाला ऑफ़लाइन प्रारूप",
    s1Body:
      "CLAT एक पेन-एंड-पेपर (ऑफ़लाइन) परीक्षा है जिसमें 2 घंटे (120 मिनट) में हल करने के लिए 120 बहुविकल्पीय प्रश्न होते हैं। पूरा पेपर कॉम्प्रिहेंशन-आधारित होता है — पैसेज पर आधारित प्रश्न जो पठन-समझ, विश्लेषणात्मक गति और आलोचनात्मक सोच को परखते हैं।",
    thSubject: "विषय खंड",
    thQuestions: "अनुमानित प्रश्न",
    thWeightage: "भारांक (%)",
    rows: [
      { s: "विधिक तर्क (पैसेज-आधारित)", q: "28 - 32 प्रश्न", w: "25%" },
      { s: "करंट अफेयर्स और सामान्य ज्ञान", q: "28 - 32 प्रश्न", w: "25%" },
      { s: "अंग्रेज़ी भाषा (कॉम्प्रिहेंशन)", q: "22 - 26 प्रश्न", w: "20%" },
      { s: "तार्किक तर्क (क्रिटिकल लॉजिक)", q: "22 - 26 प्रश्न", w: "20%" },
      { s: "मात्रात्मक तकनीक (डेटा इंटरप्रिटेशन)", q: "10 - 14 प्रश्न", w: "10%" },
    ],
    s2Title: "अंकन नियम और नकारात्मक अंकन",
    s2Heading: "नेगेटिव मार्किंग ही असली फ़िल्टर है",
    s2Body:
      "हर सही उत्तर पर +1 अंक मिलता है, जबकि गलत उत्तर पर -0.25 अंक काटे जाते हैं। बिना उत्तर वाले प्रश्नों पर 0 अंक मिलते हैं। चूँकि पेपर बेहद समयबद्ध है (हर प्रश्न के लिए लगभग एक मिनट, लंबे पैसेज पढ़ने सहित), इसलिए सटीकता और यह चुनना कि कौन-से पैसेज हल करें और कौन-से छोड़ें — यही तय करता है कि आप स्कोर थ्रेशोल्ड पार करेंगे या नहीं।",
    s3Title: "पात्रता और पंजीकरण आवश्यकताएँ",
    s3Body:
      "उम्मीदवारों को कक्षा 12 या समकक्ष न्यूनतम 45% अंकों के साथ उत्तीर्ण होना चाहिए (SC/ST के लिए 40%)। कक्षा 12 की बोर्ड परीक्षा में बैठने वाले उम्मीदवार भी पंजीकरण के पात्र हैं। CLAT में बैठने के लिए कोई अधिकतम आयु सीमा नहीं है।",
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
          <pattern id="clat-what-it-is-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#10b981" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#clat-what-it-is-grid)" />
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

export default function ClatWhatItIsPage() {
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
            {t.s1Body}
          </p>

          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl my-8 bg-white dark:bg-slate-800/50">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead className="bg-slate-50 dark:bg-slate-800/40">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    {t.thSubject}
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    {t.thQuestions}
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    {t.thWeightage}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.rows.map((row, i) => {
                  const border =
                    i < t.rows.length - 1
                      ? "border-b border-slate-100 dark:border-slate-800"
                      : "";
                  return (
                    <tr key={i}>
                      <td className={`p-4 text-slate-700 dark:text-slate-300 font-black ${border}`}>
                        {row.s}
                      </td>
                      <td className={`p-4 text-slate-700 dark:text-slate-300 font-medium ${border}`}>
                        {row.q}
                      </td>
                      <td className={`p-4 text-emerald-600 font-black ${border}`}>
                        {row.w}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Section>

        <Section number="02" label={t.sectionLabel} title={t.s2Title}>
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 space-y-4">
            <h3 className="font-black text-xl text-neutral-dark">{t.s2Heading}</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
              {t.s2Body}
            </p>
          </div>
        </Section>

        <Section number="03" label={t.sectionLabel} title={t.s3Title}>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
            {t.s3Body}
          </p>
        </Section>
      </div>
    </main>
  );
}
