"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    crumbExams: "Exams",
    crumbJee: "JEE Paper 3",
    crumbHere: "What It Is",
    headerTitle: "JEE Paper 3 — Exam Structure & Syllabus",
    sectionLabel: "Section",
    s1Title: "Exam Structure & Question Distribution",
    s1Body:
      "JEE Main Paper 3 is a 3-hour Computer-Based Test (CBT) consisting of 105 questions, totaling 400 marks. The exam structure evaluates both scientific analytical thinking and specialized creative skills suited for urban planning.",
    partILabel: "Part I",
    partITitle: "Mathematics",
    partIBody: "30 Questions (20 MCQs + 10 Numerical Value questions, out of which 5 are to be attempted).",
    partIMarks: "100 Marks",
    partIILabel: "Part II",
    partIITitle: "Aptitude Test",
    partIIBody: "50 Questions (MCQs only). Tests 2D/3D visualization, mental capability, spatial reasoning, and architectural/planning history.",
    partIIMarks: "200 Marks",
    partIIILabel: "Part III",
    partIIITitle: "Planning Questions",
    partIIIBody: "25 Questions (MCQs only). Specialized questions based on urban development, environmental science, and policy awareness.",
    partIIIMarks: "100 Marks",
    markingHeading: "Marking Scheme:",
    markingPre: "Every correct answer yields ",
    markingPlus: "+4 marks",
    markingMid: ". Correct numerical value questions also get +4. Incorrect answers carry a penalty of ",
    markingMinus: "-1 mark",
    markingPost: " (both for MCQs and Numerical Value questions). Unattempted questions receive 0.",
    s2Title: "Part I: Mathematics Syllabus",
    s2Body:
      "This section is identical to the Mathematics section of JEE Main Paper 1 (B.Tech) and Paper 2 (B.Arch). The level of difficulty is high, requiring strong conceptual clarity in Class XI and XII mathematics.",
    s2Col1Heading: "High Weightage Topics",
    s2Col1Items: [
      "Coordinate Geometry (Straight Lines, Circles, Conics)",
      "Calculus (Limits, Continuity, Derivatives, Definite Integrals)",
      "Vectors & Three-Dimensional Geometry",
      "Probability & Statistics",
    ],
    s2Col2Heading: "Algebra & Trigonometry",
    s2Col2Items: [
      "Matrices and Determinants",
      "Complex Numbers & Quadratic Equations",
      "Sequences and Series (AP, GP, HP)",
      "Trigonometric Equations and Identities",
    ],
    s3Title: "Part II: General Aptitude Syllabus",
    s3Body: "The Aptitude section tests visualization, design thinking, analytical abilities, and general knowledge.",
    s3Card1Title: "1. Visual & Spatial Aptitude",
    s3Card1Body:
      "Visualizing 3D views of objects from 2D orthographic projections. Counting surfaces, vertices, and edges of complex geometric models. Rotation, unfolding, and mirror-imaging of block designs.",
    s3Card2Title: "2. Analytical Reasoning & Mental Ability",
    s3Card2Body:
      "Pattern recognition, series completions, logical deductions, blood relation puzzles, coding-decoding, and Venn diagrams.",
    s3Card3Title: "3. Architecture, Cities & History GK",
    s3Card3Body:
      "Identifying famous national and international monuments, landmarks, and city shapes. Basic knowledge of architectural history, famous architects/planners, materials, and structural elements.",
    s4Title: "Part III: Planning-Based Questions (Specialized)",
    s4Body:
      "This section makes Paper 3 unique. It tests awareness of social, economic, and physical aspects of communities, cities, and national growth.",
    s4Card1Title: "Government Schemes & Programs",
    s4Card1Body:
      "Deep questions about Indian government flagship missions: Smart Cities Mission, AMRUT (Atal Mission for Rejuvenation and Urban Transformation), HRIDAY (Heritage City Development and Augmentation Yojana), PMAY (Pradhan Mantri Awas Yojana), and Swachh Bharat Abhiyan. Understand their launch years, target populations, and primary objectives.",
    s4Card2Title: "Environmental Planning & Sustainability",
    s4Card2Body:
      "Concepts of Green Buildings (GRIHA, LEED ratings), global warming, carbon footprint, solid waste management, water harvesting techniques, renewable energy sources, and sustainable development goals (SDGs).",
    s4Card3Title: "Urban Geography & Scale Mapping",
    s4Card3Body:
      "Reading maps, understanding topological signs, interpreting bar diagrams, reading scales (RF - Representative Fraction calculations), and basic demographic data metrics (population density, sex ratio, decadal growth rates).",
  },
  hi: {
    crumbExams: "परीक्षाएँ",
    crumbJee: "JEE पेपर 3",
    crumbHere: "यह क्या है",
    headerTitle: "JEE पेपर 3 — परीक्षा संरचना और सिलेबस",
    sectionLabel: "खंड",
    s1Title: "परीक्षा संरचना और प्रश्न वितरण",
    s1Body:
      "JEE Main पेपर 3 एक 3 घंटे का Computer-Based Test (CBT) है जिसमें 105 प्रश्न होते हैं, कुल 400 अंक। परीक्षा संरचना वैज्ञानिक विश्लेषणात्मक सोच और अर्बन प्लानिंग के लिए उपयुक्त विशेष रचनात्मक कौशल — दोनों परखती है।",
    partILabel: "भाग I",
    partITitle: "गणित",
    partIBody: "30 प्रश्न (20 MCQ + 10 Numerical Value प्रश्न, जिनमें से 5 करने होते हैं)।",
    partIMarks: "100 अंक",
    partIILabel: "भाग II",
    partIITitle: "एप्टीट्यूड टेस्ट",
    partIIBody: "50 प्रश्न (केवल MCQ)। 2D/3D विज़ुअलाइज़ेशन, मानसिक क्षमता, स्थानिक तर्क, और आर्किटेक्चरल/प्लानिंग इतिहास परखता है।",
    partIIMarks: "200 अंक",
    partIIILabel: "भाग III",
    partIIITitle: "प्लानिंग प्रश्न",
    partIIIBody: "25 प्रश्न (केवल MCQ)। शहरी विकास, पर्यावरण विज्ञान और पॉलिसी जागरूकता पर आधारित विशेष प्रश्न।",
    partIIIMarks: "100 अंक",
    markingHeading: "अंकन योजना:",
    markingPre: "हर सही उत्तर पर मिलते हैं ",
    markingPlus: "+4 अंक",
    markingMid: "। सही Numerical Value प्रश्नों पर भी +4 मिलता है। गलत उत्तरों पर जुर्माना है ",
    markingMinus: "-1 अंक",
    markingPost: " (MCQ और Numerical Value दोनों के लिए)। बिना प्रयास वाले प्रश्नों पर 0 अंक मिलते हैं।",
    s2Title: "भाग I: गणित सिलेबस",
    s2Body:
      "यह खंड JEE Main पेपर 1 (B.Tech) और पेपर 2 (B.Arch) के गणित खंड के समान है। कठिनाई स्तर ऊँचा है, जिसके लिए कक्षा 11 और 12 के गणित में मज़बूत वैचारिक स्पष्टता ज़रूरी है।",
    s2Col1Heading: "अधिक भारांक वाले टॉपिक",
    s2Col1Items: [
      "निर्देशांक ज्यामिति (सरल रेखाएँ, वृत्त, शांकव)",
      "कैलकुलस (सीमा, सततता, अवकलज, निश्चित समाकलन)",
      "सदिश और त्रिविमीय ज्यामिति",
      "प्रायिकता और सांख्यिकी",
    ],
    s2Col2Heading: "बीजगणित और त्रिकोणमिति",
    s2Col2Items: [
      "आव्यूह और सारणिक",
      "सम्मिश्र संख्याएँ और द्विघात समीकरण",
      "अनुक्रम और श्रेणी (AP, GP, HP)",
      "त्रिकोणमितीय समीकरण और सर्वसमिकाएँ",
    ],
    s3Title: "भाग II: सामान्य एप्टीट्यूड सिलेबस",
    s3Body: "एप्टीट्यूड खंड विज़ुअलाइज़ेशन, डिज़ाइन सोच, विश्लेषणात्मक क्षमता और सामान्य ज्ञान परखता है।",
    s3Card1Title: "1. दृश्य और स्थानिक एप्टीट्यूड",
    s3Card1Body:
      "2D ऑर्थोग्राफिक प्रक्षेपणों से वस्तुओं के 3D दृश्य की कल्पना करना। जटिल ज्यामितीय मॉडलों की सतहों, शीर्षों और किनारों की गिनती। ब्लॉक डिज़ाइन का घुमाव, खोलना और दर्पण-प्रतिबिंब।",
    s3Card2Title: "2. विश्लेषणात्मक तर्क और मानसिक क्षमता",
    s3Card2Body:
      "पैटर्न पहचान, श्रेणी पूर्ति, तार्किक निष्कर्ष, रक्त संबंध पहेलियाँ, कोडिंग-डिकोडिंग, और वेन आरेख।",
    s3Card3Title: "3. आर्किटेक्चर, शहर और इतिहास GK",
    s3Card3Body:
      "प्रसिद्ध राष्ट्रीय और अंतरराष्ट्रीय स्मारकों, लैंडमार्क और शहरी आकृतियों की पहचान। आर्किटेक्चरल इतिहास, प्रसिद्ध आर्किटेक्ट/प्लानर, सामग्री और संरचनात्मक तत्वों की बुनियादी जानकारी।",
    s4Title: "भाग III: प्लानिंग-आधारित प्रश्न (विशेष)",
    s4Body:
      "यही खंड पेपर 3 को अनूठा बनाता है। यह समुदायों, शहरों और राष्ट्रीय विकास के सामाजिक, आर्थिक और भौतिक पहलुओं की जागरूकता परखता है।",
    s4Card1Title: "सरकारी योजनाएँ और कार्यक्रम",
    s4Card1Body:
      "भारत सरकार के प्रमुख मिशनों पर गहरे प्रश्न: Smart Cities Mission, AMRUT (Atal Mission for Rejuvenation and Urban Transformation), HRIDAY (Heritage City Development and Augmentation Yojana), PMAY (Pradhan Mantri Awas Yojana), और Swachh Bharat Abhiyan। इनके आरंभ वर्ष, लक्षित आबादी और मुख्य उद्देश्य समझें।",
    s4Card2Title: "पर्यावरण प्लानिंग और सस्टेनेबिलिटी",
    s4Card2Body:
      "ग्रीन बिल्डिंग्स (GRIHA, LEED रेटिंग), ग्लोबल वार्मिंग, कार्बन फुटप्रिंट, ठोस अपशिष्ट प्रबंधन, जल संचयन तकनीक, नवीकरणीय ऊर्जा स्रोत, और सतत विकास लक्ष्य (SDGs) की अवधारणाएँ।",
    s4Card3Title: "अर्बन भूगोल और स्केल मैपिंग",
    s4Card3Body:
      "मानचित्र पढ़ना, टोपोलॉजिकल चिह्न समझना, बार आरेख की व्याख्या, स्केल पढ़ना (RF - Representative Fraction गणनाएँ), और बुनियादी जनसांख्यिकीय डेटा मापदंड (जनसंख्या घनत्व, लिंगानुपात, दशकीय वृद्धि दर)।",
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
          <pattern id="jee-what-it-is-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0d9488" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#jee-what-it-is-grid)" />
      </svg>
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[60px]" />

      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="jee-wii-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d9488" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="jee-wii-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#jee-wii-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#jee-wii-wave-grad-2)" />
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80" stroke="#0d9488" strokeWidth="1.5" strokeOpacity="0.1" />
        <path d="M0,240 C480,120 960,320 1440,160" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.05" strokeDasharray="6 6" />
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
      <div className="text-teal-600 font-black text-sm uppercase tracking-widest mb-4">
        {label} {number}
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
    className={`p-6 md:p-8 my-8 rounded-2xl border-l-4 ${type === "info" ? "bg-teal-50 dark:bg-teal-950/30 border-teal-500" : "bg-orange-50 dark:bg-orange-950/30 border-accent"}`}
  >
    {children}
  </div>
);

export default function JeePaper3WhatItIsPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C] min-h-screen">
      <PageHeader
        title={t.headerTitle}
        breadcrumbs={
          <>
            <Link href="/exams" className="hover:text-teal-600 transition-colors">
              {t.crumbExams}
            </Link>{" "}
            <span>›</span>
            <Link href="/exams/jee-paper3" className="hover:text-teal-600 transition-colors">
              {t.crumbJee}
            </Link>{" "}
            <span>›</span>
            <span className="text-teal-600">{t.crumbHere}</span>
          </>
        }
      />

      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 pb-24">
        <Section number="01" label={t.sectionLabel} title={t.s1Title}>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            {t.s1Body}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 rounded-2xl p-6 shadow-sm">
              <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400">{t.partILabel}</span>
              <h3 className="text-xl font-black text-teal-600 mt-1 mb-3">{t.partITitle}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
                {t.partIBody}
              </p>
              <div className="text-lg font-black text-slate-700 dark:text-slate-300 mt-4">{t.partIMarks}</div>
            </div>

            <div className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 rounded-2xl p-6 shadow-sm">
              <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400">{t.partIILabel}</span>
              <h3 className="text-xl font-black text-teal-600 mt-1 mb-3">{t.partIITitle}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
                {t.partIIBody}
              </p>
              <div className="text-lg font-black text-slate-700 dark:text-slate-300 mt-4">{t.partIIMarks}</div>
            </div>

            <div className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 rounded-2xl p-6 shadow-sm">
              <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400">{t.partIIILabel}</span>
              <h3 className="text-xl font-black text-teal-600 mt-1 mb-3">{t.partIIITitle}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
                {t.partIIIBody}
              </p>
              <div className="text-lg font-black text-slate-700 dark:text-slate-300 mt-4">{t.partIIIMarks}</div>
            </div>
          </div>

          <InfoBox type="info">
            <h4 className="font-black text-teal-700 mb-2">{t.markingHeading}</h4>
            <p className="text-slate-700 dark:text-slate-300 font-medium">
              {t.markingPre}<span className="font-bold text-teal-700">{t.markingPlus}</span>{t.markingMid}<span className="font-bold text-red-600">{t.markingMinus}</span>{t.markingPost}
            </p>
          </InfoBox>
        </Section>

        <Section number="02" label={t.sectionLabel} title={t.s2Title}>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            {t.s2Body}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8">
            <div>
              <h4 className="font-black text-slate-800 dark:text-slate-100 mb-2">{t.s2Col1Heading}</h4>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300 font-semibold text-sm">
                {t.s2Col1Items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-black text-slate-800 dark:text-slate-100 mb-2">{t.s2Col2Heading}</h4>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300 font-semibold text-sm">
                {t.s2Col2Items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section number="03" label={t.sectionLabel} title={t.s3Title}>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            {t.s3Body}
          </p>
          <div className="space-y-6">
            <div className="border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800/50 p-6 rounded-xl shadow-sm">
              <h4 className="font-black text-slate-800 dark:text-slate-100 text-lg mb-2">{t.s3Card1Title}</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-semibold text-sm">
                {t.s3Card1Body}
              </p>
            </div>
            <div className="border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800/50 p-6 rounded-xl shadow-sm">
              <h4 className="font-black text-slate-800 dark:text-slate-100 text-lg mb-2">{t.s3Card2Title}</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-semibold text-sm">
                {t.s3Card2Body}
              </p>
            </div>
            <div className="border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800/50 p-6 rounded-xl shadow-sm">
              <h4 className="font-black text-slate-800 dark:text-slate-100 text-lg mb-2">{t.s3Card3Title}</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-semibold text-sm">
                {t.s3Card3Body}
              </p>
            </div>
          </div>
        </Section>

        <Section number="04" label={t.sectionLabel} title={t.s4Title}>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            {t.s4Body}
          </p>
          <div className="border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40 rounded-2xl p-6 md:p-8 space-y-6">
            <div>
              <h4 className="font-black text-teal-800 text-lg mb-2">{t.s4Card1Title}</h4>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium text-sm">
                {t.s4Card1Body}
              </p>
            </div>
            <div>
              <h4 className="font-black text-teal-800 text-lg mb-2">{t.s4Card2Title}</h4>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium text-sm">
                {t.s4Card2Body}
              </p>
            </div>
            <div>
              <h4 className="font-black text-teal-800 text-lg mb-2">{t.s4Card3Title}</h4>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium text-sm">
                {t.s4Card3Body}
              </p>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}
