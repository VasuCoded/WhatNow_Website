"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    crumbExams: "Exams",
    crumbJee: "JEE Paper 3",
    crumbHere: "Resources",
    headerTitle: "JEE Paper 3 — Resources & Study Plan",
    sectionLabel: "Section",
    s1Title: "Recommended Books & Preparation Guides",
    s1Body:
      "Unlike B.Tech preparation which demands heavy coaching, JEE Main Paper 3 (B.Planning) can be cracked with self-study. The following resources are highly recommended by SPA graduates:",
    book1Title: "Self-Study Guide for B.Arch & B.Planning (PK Mishra / Arihant Publications)",
    book1Body:
      "The primary reference guide covering both general aptitude and mock planning questions. Includes past papers with detailed explanations of design and planning logic.",
    book2Title: "Class XI & XII Geography NCERTs (Human Geography & Indian Economy)",
    book2Body:
      "Essential for Part III. Covers urban settlements, transportation patterns, demographics, rural-urban migration models, and resources in India. Almost 40% of Part III planning questions are directly derived from these textbooks.",
    book3Title: "NTA Past Year Question Papers (2020 - 2025)",
    book3Body:
      "Available on the official NTA website. Practicing past papers is the single most effective way to understand Part III questions since the planning syllabus is highly objective and repeats specific themes.",
    s2Title: "Section-wise Self-Study Strategy",
    s2P1Title: "Part I: Mathematics (100 Marks)",
    s2P1Body: "Since Math is highly competitive, prioritize topics that require less calculation time but have high accuracy:",
    s2P1Items: [
      "Matrices & Determinants: Scoring and relatively easy to practice.",
      "Mathematical Reasoning & Statistics: Usually yields 2 direct questions that are highly scoring.",
      "Vector Algebra & 3D Geometry: Highly visual and has consistent question formats every year.",
    ],
    s2P2Title: "Part II: Aptitude (200 Marks)",
    s2P2Body: "This is the highest-scoring section of the exam. Do not skip it:",
    s2P2Items: [
      "Practice 3D object visualization (identifying top, front, and side views of structures) using online puzzle sets and PK Mishra guides.",
      "Memorize famous monuments, major dams, national parks, and metropolitan plans in India.",
      "Create a cheatsheet of famous architects/urban planners (e.g., Le Corbusier for Chandigarh, Edwin Lutyens for Delhi, Charles Correa) and their landmark projects.",
    ],
    s2P3Title: "Part III: Planning (100 Marks)",
    s2P3Body: "Score 80+ in this section with targeted general awareness:",
    s2P3Items: [
      "Read summaries of MoHUA (Ministry of Housing and Urban Affairs) guidelines on Smart Cities and AMRUT.",
      "Study basic concepts of Green Architecture (LEED, GRIHA rating parameters, solar passive design).",
      "Understand maps: Learn how to read RF scales (e.g., converting 1:50,000 scale to ground distance) and standard map legend symbols.",
    ],
    s3Title: "12-Week Prep Roadmap",
    s3Body: "A balanced preparation timetable alongside regular school or board exams:",
    s3Phase1Title: "Weeks 1 - 4: Core Concepts & Aptitude",
    s3Phase1Body:
      "Complete NCERT geography readings. Start practicing 10-15 3D-visualization questions daily. Review Class XII Math chapters like Matrices and Vectors.",
    s3Phase2Title: "Weeks 5 - 8: Planning & Architecture GK",
    s3Phase2Body:
      "Make notes on Indian development schemes and environmental science basics. Work on scale conversion questions. Solve math sectional tests.",
    s3Phase3Title: "Weeks 9 - 12: Mock Tests & Time Management",
    s3Phase3Body:
      "Solve full-length JEE Paper 3 papers under a 3-hour timer. Focus on speed in Math and precision in Planning MCQs to minimize negative marks.",
  },
  hi: {
    crumbExams: "परीक्षाएँ",
    crumbJee: "JEE पेपर 3",
    crumbHere: "संसाधन",
    headerTitle: "JEE पेपर 3 — संसाधन और अध्ययन योजना",
    sectionLabel: "खंड",
    s1Title: "अनुशंसित किताबें और तैयारी गाइड",
    s1Body:
      "B.Tech तैयारी के विपरीत जिसमें भारी कोचिंग चाहिए, JEE Main पेपर 3 (B.Planning) स्व-अध्ययन से क्रैक किया जा सकता है। SPA स्नातकों द्वारा निम्न संसाधन अत्यधिक अनुशंसित हैं:",
    book1Title: "Self-Study Guide for B.Arch & B.Planning (PK Mishra / Arihant Publications)",
    book1Body:
      "मुख्य संदर्भ गाइड जो सामान्य एप्टीट्यूड और मॉक प्लानिंग प्रश्न दोनों कवर करती है। इसमें डिज़ाइन और प्लानिंग तर्क की विस्तृत व्याख्या के साथ पिछले पेपर शामिल हैं।",
    book2Title: "कक्षा 11 और 12 भूगोल NCERT (मानव भूगोल और भारतीय अर्थव्यवस्था)",
    book2Body:
      "भाग III के लिए आवश्यक। शहरी बस्तियाँ, परिवहन पैटर्न, जनसांख्यिकी, ग्रामीण-शहरी प्रवास मॉडल, और भारत में संसाधन कवर करती है। भाग III के लगभग 40% प्लानिंग प्रश्न सीधे इन पाठ्यपुस्तकों से लिए जाते हैं।",
    book3Title: "NTA पिछले वर्षों के प्रश्नपत्र (2020 - 2025)",
    book3Body:
      "आधिकारिक NTA वेबसाइट पर उपलब्ध। पिछले पेपर हल करना भाग III के प्रश्न समझने का सबसे प्रभावी तरीका है, क्योंकि प्लानिंग सिलेबस अत्यधिक वस्तुनिष्ठ है और विशिष्ट विषयों को दोहराता है।",
    s2Title: "खंड-वार स्व-अध्ययन रणनीति",
    s2P1Title: "भाग I: गणित (100 अंक)",
    s2P1Body: "चूँकि गणित बेहद प्रतिस्पर्धी है, उन टॉपिक को प्राथमिकता दें जिनमें कम गणना समय लगे पर सटीकता अधिक हो:",
    s2P1Items: [
      "आव्यूह और सारणिक: स्कोरिंग और अभ्यास में अपेक्षाकृत आसान।",
      "गणितीय तर्क और सांख्यिकी: आमतौर पर 2 सीधे प्रश्न देता है जो खूब स्कोरिंग हैं।",
      "सदिश बीजगणित और 3D ज्यामिति: अत्यधिक दृश्य और हर साल एकसमान प्रश्न प्रारूप वाला।",
    ],
    s2P2Title: "भाग II: एप्टीट्यूड (200 अंक)",
    s2P2Body: "यह परीक्षा का सबसे अधिक स्कोरिंग खंड है। इसे न छोड़ें:",
    s2P2Items: [
      "ऑनलाइन पज़ल सेट और PK Mishra गाइड का उपयोग करके 3D वस्तु विज़ुअलाइज़ेशन (संरचनाओं के ऊपर, सामने और बगल के दृश्य पहचानना) का अभ्यास करें।",
      "भारत के प्रसिद्ध स्मारक, प्रमुख बाँध, राष्ट्रीय उद्यान और महानगरीय योजनाएँ याद करें।",
      "प्रसिद्ध आर्किटेक्ट/अर्बन प्लानर (जैसे चंडीगढ़ के लिए Le Corbusier, दिल्ली के लिए Edwin Lutyens, Charles Correa) और उनकी लैंडमार्क परियोजनाओं की एक चीटशीट बनाएँ।",
    ],
    s2P3Title: "भाग III: प्लानिंग (100 अंक)",
    s2P3Body: "लक्षित सामान्य जागरूकता से इस खंड में 80+ स्कोर करें:",
    s2P3Items: [
      "Smart Cities और AMRUT पर MoHUA (Ministry of Housing and Urban Affairs) दिशानिर्देशों के सारांश पढ़ें।",
      "ग्रीन आर्किटेक्चर (LEED, GRIHA रेटिंग मापदंड, सोलर पैसिव डिज़ाइन) की बुनियादी अवधारणाएँ पढ़ें।",
      "मानचित्र समझें: RF स्केल पढ़ना सीखें (जैसे 1:50,000 स्केल को ज़मीनी दूरी में बदलना) और मानक मानचित्र लीजेंड चिह्न।",
    ],
    s3Title: "12-सप्ताह तैयारी रोडमैप",
    s3Body: "नियमित स्कूल या बोर्ड परीक्षाओं के साथ-साथ एक संतुलित तैयारी समय-सारणी:",
    s3Phase1Title: "सप्ताह 1 - 4: मूल अवधारणाएँ और एप्टीट्यूड",
    s3Phase1Body:
      "NCERT भूगोल का पठन पूरा करें। रोज़ 10-15 3D-विज़ुअलाइज़ेशन प्रश्नों का अभ्यास शुरू करें। आव्यूह और सदिश जैसे कक्षा 12 गणित अध्यायों की समीक्षा करें।",
    s3Phase2Title: "सप्ताह 5 - 8: प्लानिंग और आर्किटेक्चर GK",
    s3Phase2Body:
      "भारतीय विकास योजनाओं और पर्यावरण विज्ञान की बुनियादी बातों पर नोट्स बनाएँ। स्केल रूपांतरण प्रश्नों पर काम करें। गणित सेक्शनल टेस्ट हल करें।",
    s3Phase3Title: "सप्ताह 9 - 12: मॉक टेस्ट और समय प्रबंधन",
    s3Phase3Body:
      "3 घंटे के टाइमर के साथ पूर्ण-लंबाई वाले JEE पेपर 3 हल करें। नकारात्मक अंक कम करने के लिए गणित में गति और प्लानिंग MCQ में सटीकता पर ध्यान दें।",
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
          <pattern id="jee-resources-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0d9488" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#jee-resources-grid)" />
      </svg>
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[60px]" />

      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="jee-res-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d9488" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="jee-res-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#jee-res-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#jee-res-wave-grad-2)" />
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

export default function JeePaper3ResourcesPage() {
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

          <div className="space-y-6">
            <div className="flex gap-4 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-6 rounded-2xl shadow-sm">
              <div className="text-teal-600">
                <Icon icon="solar:book-bookmark-bold-duotone" className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-black text-slate-800 dark:text-slate-100 text-lg">{t.book1Title}</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-1 text-sm font-semibold">
                  {t.book1Body}
                </p>
              </div>
            </div>

            <div className="flex gap-4 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-6 rounded-2xl shadow-sm">
              <div className="text-teal-600">
                <Icon icon="solar:map-bold-duotone" className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-black text-slate-800 dark:text-slate-100 text-lg">{t.book2Title}</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-1 text-sm font-semibold">
                  {t.book2Body}
                </p>
              </div>
            </div>

            <div className="flex gap-4 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-6 rounded-2xl shadow-sm">
              <div className="text-teal-600">
                <Icon icon="solar:document-text-bold-duotone" className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-black text-slate-800 dark:text-slate-100 text-lg">{t.book3Title}</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-1 text-sm font-semibold">
                  {t.book3Body}
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section number="02" label={t.sectionLabel} title={t.s2Title}>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-black text-teal-800 mb-2">{t.s2P1Title}</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-4">
                {t.s2P1Body}
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300 text-sm font-semibold">
                {t.s2P1Items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-6">
              <h3 className="text-xl font-black text-teal-800 mb-2">{t.s2P2Title}</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-4">
                {t.s2P2Body}
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300 text-sm font-semibold">
                {t.s2P2Items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-6">
              <h3 className="text-xl font-black text-teal-800 mb-2">{t.s2P3Title}</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-4">
                {t.s2P3Body}
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300 text-sm font-semibold">
                {t.s2P3Items.map((item, i) => (
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
          <div className="relative border-l border-teal-200 dark:border-teal-900/40 ml-4 space-y-8">
            <div className="relative pl-6">
              <div className="absolute -left-2 top-1.5 w-4 h-4 bg-teal-500 rounded-full" />
              <h4 className="font-black text-slate-800 dark:text-slate-100">{t.s3Phase1Title}</h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium mt-1">
                {t.s3Phase1Body}
              </p>
            </div>
            <div className="relative pl-6">
              <div className="absolute -left-2 top-1.5 w-4 h-4 bg-teal-500 rounded-full" />
              <h4 className="font-black text-slate-800 dark:text-slate-100">{t.s3Phase2Title}</h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium mt-1">
                {t.s3Phase2Body}
              </p>
            </div>
            <div className="relative pl-6">
              <div className="absolute -left-2 top-1.5 w-4 h-4 bg-teal-500 rounded-full" />
              <h4 className="font-black text-slate-800 dark:text-slate-100">{t.s3Phase3Title}</h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium mt-1">
                {t.s3Phase3Body}
              </p>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}
