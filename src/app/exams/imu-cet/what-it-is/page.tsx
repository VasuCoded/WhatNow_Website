"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    crumbExams: "Exams",
    crumbImuCet: "IMU CET",
    crumbHere: "What It Is",
    headerTitle: "IMU CET — The Maritime Entrance",
    sectionLabel: "Section",
    s1Title: "The 200-Question CBT Pattern",
    s1Body:
      "IMU CET is a computer-based online test (CBT) consisting of 200 multiple-choice questions to be solved in 3 hours (180 minutes). The paper tests PCM knowledge at the Class 11 and 12 levels along with English and logical aptitude.",
    thSubject: "Subject Section",
    thQuestions: "Questions Count",
    thLevel: "Syllabus Level",
    rows: [
      { s: "Mathematics", q: "50 questions", l: "Class 11 & 12" },
      { s: "Physics", q: "50 questions", l: "Class 11 & 12" },
      { s: "Chemistry", q: "20 questions", l: "Class 11 & 12" },
      { s: "General Aptitude", q: "30 questions", l: "Logical Reasoning & Data" },
      { s: "English", q: "25 questions", l: "Grammar & Vocabulary" },
      { s: "General Knowledge", q: "25 questions", l: "Basic Geography & Civics" },
    ],
    s2Title: "Marking Scheme & Counselling",
    s2Heading: "No Negative Marking",
    s2Body:
      "Each correct answer awards +1 mark. There is no negative marking for incorrect answers. This makes time management critical: you should attempt all 200 questions within the 3 hours. Online registration usually opens in April/May, and the exam is conducted in June. DGS counseling processes allocate seats across IMU campuses and affiliated private colleges.",
  },
  hi: {
    crumbExams: "परीक्षाएँ",
    crumbImuCet: "IMU CET",
    crumbHere: "यह क्या है",
    headerTitle: "IMU CET — मैरीटाइम प्रवेश परीक्षा",
    sectionLabel: "खंड",
    s1Title: "200 प्रश्नों वाला CBT प्रारूप",
    s1Body:
      "IMU CET एक कंप्यूटर-आधारित ऑनलाइन परीक्षा (CBT) है जिसमें 3 घंटे (180 मिनट) में हल करने के लिए 200 बहुविकल्पीय प्रश्न होते हैं। पेपर कक्षा 11 और 12 स्तर के PCM ज्ञान के साथ-साथ अंग्रेज़ी और तार्किक अभिक्षमता को परखता है।",
    thSubject: "विषय खंड",
    thQuestions: "प्रश्नों की संख्या",
    thLevel: "पाठ्यक्रम स्तर",
    rows: [
      { s: "गणित", q: "50 प्रश्न", l: "कक्षा 11 और 12" },
      { s: "भौतिकी", q: "50 प्रश्न", l: "कक्षा 11 और 12" },
      { s: "रसायन विज्ञान", q: "20 प्रश्न", l: "कक्षा 11 और 12" },
      { s: "सामान्य अभिक्षमता", q: "30 प्रश्न", l: "तार्किक तर्क और डेटा" },
      { s: "अंग्रेज़ी", q: "25 प्रश्न", l: "व्याकरण और शब्दावली" },
      { s: "सामान्य ज्ञान", q: "25 प्रश्न", l: "बुनियादी भूगोल और नागरिक शास्त्र" },
    ],
    s2Title: "अंकन योजना और काउंसलिंग",
    s2Heading: "कोई नकारात्मक अंकन नहीं",
    s2Body:
      "हर सही उत्तर पर +1 अंक मिलता है। गलत उत्तरों के लिए कोई नकारात्मक अंकन नहीं है। इससे समय प्रबंधन महत्वपूर्ण हो जाता है: आपको 3 घंटे के भीतर सभी 200 प्रश्न हल करने का प्रयास करना चाहिए। ऑनलाइन पंजीकरण आमतौर पर अप्रैल/मई में खुलता है, और परीक्षा जून में आयोजित होती है। DGS काउंसलिंग प्रक्रियाएँ IMU कैंपस और संबद्ध निजी कॉलेजों में सीटें आवंटित करती हैं।",
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
          <pattern id="imucet-what-it-is-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ea580c" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#imucet-what-it-is-grid)" />
      </svg>
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-sky-500/5 rounded-full blur-[60px]" />

      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="imucet-wii-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="imucet-wii-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#imucet-wii-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#imucet-wii-wave-grad-2)" />
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

export default function ImuCetWhatItIsPage() {
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
                    {t.thLevel}
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
                      <td className={`p-4 text-orange-600 font-black ${border}`}>
                        {row.l}
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
      </div>
    </main>
  );
}
