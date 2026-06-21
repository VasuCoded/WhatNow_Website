"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    crumbExams: "Exams",
    crumbNift: "NIFT",
    crumbHere: "What It Is",
    headerTitle: "NIFT Entrance — What It Is",
    sectionLabel: "Section",
    s1Title: "The basics",
    s1Body:
      "The NIFT (National Institute of Fashion Technology) Entrance Exam is India's premier gateway for fashion and design education. Conducted annually in February, it opens doors to Bachelor of Design (B.Des) and Bachelor of Fashion Technology (B.FTech) programs across 16 campuses nationwide.",
    s1Card1Label: "Exam Format",
    s1Card1Title: "Stage 1: CAT + GAT",
    s1Card1Value: "Creative Ability Test (Pen/Paper) + General Ability Test (CBT)",
    s1Card2Label: "Total Seats",
    s1Card2Title: "~2,800 Seats (B.Des)",
    s1Card2Value: "Across 16 NIFT campuses",
    s1KeyLabel: "Key Distinction:",
    s1KeyBody:
      " Like UCEED, the B.Des program is open to students from all streams (Arts, Science, Commerce). The B.FTech program, however, specifically requires Physics, Chemistry, and Mathematics in Class XII.",
    s2Title: "Eligibility",
    s2Body: "Candidates must satisfy the following criteria to apply:",
    s2Item1Title: "Age limit",
    s2Item1Body:
      "Maximum age must be 24 years as of August 1st of the admission year. Upper age limit is relaxed by 5 years for SC, ST, and PwD candidates.",
    s2Item2Title: "Academic qualifications",
    s2Item2Body:
      "Must have passed Class XII or equivalent. Candidates appearing for Class XII in the admission year are also eligible to sit for the exam.",
    s3Title: "Exam Structure",
    s3Body:
      "Stage 1 comprises two tests on the same day. Both tests are mandatory for design aspirants.",
    s3Card1Label: "CAT (Creative Ability Test)",
    s3Card1Title: "3 Hours / 100 Marks",
    s3Card1Value: "Tests drawing skills, observation, design concept originality, and color sensibilities on paper.",
    s3Card2Label: "GAT (General Ability Test)",
    s3Card2Title: "2 Hours / 100 Marks",
    s3Card2Value: "Tests English comprehension, quantitative abilities, analytical reasoning, and general knowledge.",
    s4Title: "Weightage & Selection",
    s4Body:
      "For Bachelor of Design (B.Des), admission relies on a three-stage weightage scheme. Shortlisted candidates from Stage 1 are invited for Stage 2 (Situation Test).",
    thComponent: "Component",
    thWeightage: "Weightage (B.Des)",
    thFormat: "Format",
    rows: [
      { c: "Stage 1: CAT", w: "50%", f: "Paper-based drawing test" },
      { c: "Stage 1: GAT", w: "30%", f: "Computer-based multiple-choice test" },
      { c: "Stage 2: Situation Test", w: "20%", f: "Hands-on material model making in NIFT studios" },
    ],
    s4InfoTitle: "What is the Situation Test?",
    s4InfoBody:
      "Candidates are given a set of raw materials (clay, wire, board, paper, etc.) and must construct a 3D model addressing a specific prompt under a strict 2-hour limit. They also write a short explanation of the concept. This test evaluates practical material execution and design thinking under pressure.",
  },
  hi: {
    crumbExams: "परीक्षाएँ",
    crumbNift: "NIFT",
    crumbHere: "यह क्या है",
    headerTitle: "NIFT प्रवेश परीक्षा — यह क्या है",
    sectionLabel: "खंड",
    s1Title: "मूल बातें",
    s1Body:
      "NIFT (नेशनल इंस्टीट्यूट ऑफ़ फ़ैशन टेक्नोलॉजी) प्रवेश परीक्षा भारत में फ़ैशन और डिज़ाइन शिक्षा का सबसे प्रतिष्ठित प्रवेश-द्वार है। हर साल फ़रवरी में आयोजित, यह देशभर के 16 कैंपसों में बैचलर ऑफ़ डिज़ाइन (B.Des) और बैचलर ऑफ़ फ़ैशन टेक्नोलॉजी (B.FTech) कार्यक्रमों के द्वार खोलती है।",
    s1Card1Label: "परीक्षा प्रारूप",
    s1Card1Title: "चरण 1: CAT + GAT",
    s1Card1Value: "क्रिएटिव एबिलिटी टेस्ट (पेन/पेपर) + जनरल एबिलिटी टेस्ट (CBT)",
    s1Card2Label: "कुल सीटें",
    s1Card2Title: "~2,800 सीटें (B.Des)",
    s1Card2Value: "16 NIFT कैंपसों में",
    s1KeyLabel: "मुख्य अंतर:",
    s1KeyBody:
      " UCEED की तरह, B.Des कार्यक्रम सभी स्ट्रीम (आर्ट्स, साइंस, कॉमर्स) के छात्रों के लिए खुला है। हालाँकि B.FTech कार्यक्रम के लिए कक्षा 12 में फ़िज़िक्स, केमिस्ट्री और मैथमेटिक्स विशेष रूप से आवश्यक हैं।",
    s2Title: "पात्रता",
    s2Body: "आवेदन के लिए उम्मीदवारों को निम्नलिखित मानदंड पूरे करने होंगे:",
    s2Item1Title: "आयु सीमा",
    s2Item1Body:
      "प्रवेश वर्ष की 1 अगस्त को अधिकतम आयु 24 वर्ष होनी चाहिए। SC, ST और PwD उम्मीदवारों के लिए अधिकतम आयु सीमा में 5 वर्ष की छूट है।",
    s2Item2Title: "शैक्षणिक योग्यता",
    s2Item2Body:
      "कक्षा 12 या समकक्ष उत्तीर्ण होना चाहिए। प्रवेश वर्ष में कक्षा 12 में बैठने वाले उम्मीदवार भी परीक्षा देने के पात्र हैं।",
    s3Title: "परीक्षा संरचना",
    s3Body:
      "चरण 1 में एक ही दिन दो टेस्ट होते हैं। डिज़ाइन अभ्यर्थियों के लिए दोनों टेस्ट अनिवार्य हैं।",
    s3Card1Label: "CAT (क्रिएटिव एबिलिटी टेस्ट)",
    s3Card1Title: "3 घंटे / 100 अंक",
    s3Card1Value: "कागज़ पर ड्रॉइंग कौशल, अवलोकन, डिज़ाइन अवधारणा की मौलिकता और रंगों की समझ को परखता है।",
    s3Card2Label: "GAT (जनरल एबिलिटी टेस्ट)",
    s3Card2Title: "2 घंटे / 100 अंक",
    s3Card2Value: "अंग्रेज़ी कॉम्प्रिहेंशन, मात्रात्मक योग्यता, विश्लेषणात्मक तर्क और सामान्य ज्ञान को परखता है।",
    s4Title: "भारांक और चयन",
    s4Body:
      "बैचलर ऑफ़ डिज़ाइन (B.Des) के लिए प्रवेश तीन-चरणीय भारांक योजना पर निर्भर करता है। चरण 1 से शॉर्टलिस्ट हुए उम्मीदवारों को चरण 2 (सिचुएशन टेस्ट) के लिए बुलाया जाता है।",
    thComponent: "घटक",
    thWeightage: "भारांक (B.Des)",
    thFormat: "प्रारूप",
    rows: [
      { c: "चरण 1: CAT", w: "50%", f: "पेपर-आधारित ड्रॉइंग टेस्ट" },
      { c: "चरण 1: GAT", w: "30%", f: "कंप्यूटर-आधारित बहुविकल्पीय टेस्ट" },
      { c: "चरण 2: सिचुएशन टेस्ट", w: "20%", f: "NIFT स्टूडियो में हैंड्स-ऑन मटेरियल मॉडल बनाना" },
    ],
    s4InfoTitle: "सिचुएशन टेस्ट क्या है?",
    s4InfoBody:
      "उम्मीदवारों को कच्ची सामग्री का एक सेट (क्ले, तार, बोर्ड, कागज़ आदि) दिया जाता है और उन्हें एक निश्चित प्रॉम्प्ट के अनुसार 2 घंटे की सख़्त समय-सीमा में एक 3D मॉडल बनाना होता है। साथ ही वे अवधारणा की एक संक्षिप्त व्याख्या भी लिखते हैं। यह टेस्ट दबाव में व्यावहारिक सामग्री निष्पादन और डिज़ाइन सोच का मूल्यांकन करता है।",
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
          <pattern id="nift-what-it-is-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ec4899" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#nift-what-it-is-grid)" />
      </svg>

      {/* Layered glowing blobs */}
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-[#ff5a1f]/5 rounded-full blur-[60px]" />

      {/* Smooth vector paths */}
      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="nift-wii-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="nift-wii-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff5a1f" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#ff5a1f" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#nift-wii-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#nift-wii-wave-grad-2)" />
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80" stroke="#ec4899" strokeWidth="1.5" strokeOpacity="0.1" />
        <path d="M0,240 C480,120 960,320 1440,160" stroke="#ff5a1f" strokeWidth="1.5" strokeOpacity="0.05" strokeDasharray="6 6" />
      </svg>
    </div>

    <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 relative z-10">
      <div className="flex items-center gap-2 text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mb-8">
        {breadcrumbs}
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-black leading-[1.1] tracking-tight mb-6 text-neutral-dark dark:text-slate-100">
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
    <div className="absolute top-0 right-0 p-8 text-[6rem] font-black text-slate-50 dark:text-slate-800 leading-none select-none z-0">
      {number}
    </div>
    <div className="relative z-10">
      <div className="text-pink-600 font-black text-sm uppercase tracking-widest mb-4">
        {label} {number}
      </div>
      <h2 className="text-3xl md:text-4xl font-black mb-8 text-neutral-dark dark:text-slate-100 tracking-tight">
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
    className={`p-6 md:p-8 my-8 rounded-2xl border-l-4 ${type === "info" ? "bg-pink-50 dark:bg-pink-950/30 border-pink-500" : "bg-orange-50 dark:bg-orange-950/30 border-accent"}`}
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
    className={`border rounded-2xl p-8 relative overflow-hidden ${primary ? "bg-pink-600 text-white border-pink-600" : "bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 text-neutral-dark dark:text-slate-100"}`}
  >
    <div
      className={`text-sm font-bold uppercase tracking-wider mb-8 ${primary ? "text-pink-200" : "text-slate-500 dark:text-slate-400"}`}
    >
      {label}
    </div>
    <div className="text-2xl font-black mb-2">{title}</div>
    <div className={primary ? "text-white" : "text-pink-600"}>{value}</div>
  </div>
);

export default function NiftWhatItIsPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C] min-h-screen">
      <PageHeader
        title={t.headerTitle}
        breadcrumbs={
          <>
            <Link href="/exams" className="hover:text-pink-600 transition-colors">
              {t.crumbExams}
            </Link>{" "}
            <span>›</span>
            <Link href="/exams/nift" className="hover:text-pink-600 transition-colors">
              {t.crumbNift}
            </Link>{" "}
            <span>›</span>
            <span className="text-pink-600">{t.crumbHere}</span>
          </>
        }
      />

      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 pb-24">
        <Section number="01" label={t.sectionLabel} title={t.s1Title}>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            {t.s1Body}
          </p>
          <BentoGrid>
            <BentoCard
              label={t.s1Card1Label}
              title={t.s1Card1Title}
              value={t.s1Card1Value}
              primary={true}
            />
            <BentoCard
              label={t.s1Card2Label}
              title={t.s1Card2Title}
              value={t.s1Card2Value}
            />
          </BentoGrid>
          <InfoBox type="warning">
            <p className="text-slate-800 dark:text-slate-300 leading-relaxed font-medium">
              <strong className="font-black text-accent">
                {t.s1KeyLabel}
              </strong>
              {t.s1KeyBody}
            </p>
          </InfoBox>
        </Section>

        <Section number="02" label={t.sectionLabel} title={t.s2Title}>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            {t.s2Body}
          </p>

          <div className="space-y-6 mt-8">
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-6 rounded-2xl flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-pink-600 font-black shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-dark dark:text-slate-100 mb-2">
                  {t.s2Item1Title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium">
                  {t.s2Item1Body}
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-6 rounded-2xl flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-pink-600 font-black shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-dark dark:text-slate-100 mb-2">
                  {t.s2Item2Title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium">
                  {t.s2Item2Body}
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section number="03" label={t.sectionLabel} title={t.s3Title}>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            {t.s3Body}
          </p>

          <BentoGrid>
            <BentoCard
              label={t.s3Card1Label}
              title={t.s3Card1Title}
              value={t.s3Card1Value}
              primary={true}
            />
            <BentoCard
              label={t.s3Card2Label}
              title={t.s3Card2Title}
              value={t.s3Card2Value}
            />
          </BentoGrid>
        </Section>

        <Section number="04" label={t.sectionLabel} title={t.s4Title}>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            {t.s4Body}
          </p>

          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl my-8">
            <table className="w-full text-left border-collapse min-w-[600px] bg-white dark:bg-slate-800/50">
              <thead className="bg-slate-50 dark:bg-slate-800/40">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">{t.thComponent}</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">{t.thWeightage}</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">{t.thFormat}</th>
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
                      <td className={`p-4 text-slate-700 dark:text-slate-300 font-black ${border}`}>{row.c}</td>
                      <td className={`p-4 text-pink-600 font-black ${border}`}>{row.w}</td>
                      <td className={`p-4 text-slate-500 dark:text-slate-400 font-medium ${border}`}>{row.f}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <InfoBox type="info">
            <h4 className="font-black mb-2">{t.s4InfoTitle}</h4>
            <p className="text-slate-700 dark:text-slate-300 font-medium">
              {t.s4InfoBody}
            </p>
          </InfoBox>
        </Section>
      </div>
    </main>
  );
}
