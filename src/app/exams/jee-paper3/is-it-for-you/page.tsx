"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    crumbExams: "Exams",
    crumbJee: "JEE Paper 3",
    crumbHere: "Is It For You?",
    headerTitle: "JEE Paper 3 — Is It For You?",
    sectionLabel: "Section",
    s1Title: "Honest Comparison: Planning vs. Architecture vs. Civil Engineering",
    s1Body:
      "Many students mistake B.Planning for a sub-branch of Architecture or Civil Engineering. In reality, they are fundamentally different in scope, tools, and scale.",
    thFeature: "Feature",
    thBplan: "Bachelor of Planning (B.Plan)",
    thBarch: "Bachelor of Architecture (B.Arch)",
    thCivil: "Civil Engineering (B.Tech)",
    rows: [
      {
        feature: "Primary Scale",
        bplan: "Macro (City, Region, Transit corridors)",
        barch: "Micro (Individual buildings, sites)",
        civil: "Structural (Materials, soil mechanics, load)",
      },
      {
        feature: "Core Focus",
        bplan: "Policy, zoning laws, traffic patterns, sustainability",
        barch: "Aesthetics, spatial design, material detailing",
        civil: "Construction feasibility, structural safety",
      },
      {
        feature: "Key Software Tools",
        bplan: "ArcGIS, QGIS, AutoCAD Map 3D, SPSS (statistics)",
        barch: "Revit, Rhino, SketchUp, Photoshop",
        civil: "STAAD.Pro, ETABS, MS Project, Primavera",
      },
      {
        feature: "Drawing Requirement",
        bplan: "None. No drawing test is conducted for B.Plan admissions.",
        barch: "High. Freehand sketching and scale drawing are core.",
        civil: "None. Focused strictly on physics and mathematics.",
      },
    ],
    s2Title: "The Skill Assessment Check",
    s2Body: "Answer the following questions to see if you have the mental makeup of an urban planner:",
    s2Q1: "Are you fascinated by how cities operate? (e.g., how metro routing is decided, why certain zones are residential, and how water supply grids are planned).",
    s2Q2: "Do you enjoy analyzing data, demographics, and map layers over sketching artistic building elevations?",
    s2Q3: "Are you interested in public policy, climate change, and sustainability guidelines?",
    s2Q4: "Do you want a career that involves interacting with government bodies, environmental agencies, and community stakeholders?",
    s2Concl: "If you answered Yes to 3 or more of these, B.Planning is an excellent fit. You will enjoy the analytical, data-centric, and socio-economic aspects of the field.",
    s3Title: "Professional Realities & Growth Path",
    s3Body: "What does life after B.Planning look like?",
    s3Card1Title: "1. Typical Work Environment",
    s3Card1Body:
      "Planners work in offices analyzing geographic spatial layers (GIS) and writing development regulations, interspersed with field surveys to study traffic volumes, housing conditions, or pollution indices.",
    s3Card2Title: "2. Career Evolution",
    s3Card2Body:
      "Starting as a GIS Analyst or Associate Planner, you progress to Lead Urban Planner or Infrastructure Policy Adviser. Many graduates pursue Master's (M.Plan) programs in Environmental Planning, Transport Planning, or Housing from SPAs or European institutes to lead multi-million dollar projects.",
    s3BoxHeading: "Corporate placements vs. Government pathways:",
    s3BoxBody:
      "Private consultancies like JLL, Cushman & Wakefield, Knight Frank, L&T Infrastructure, and PwC actively recruit B.Plan graduates for real estate advisory and city transit proposals. Government options include state development authorities (e.g., DDA, CIDCO) and municipal corporations, which require clearing state-level Town Planner recruitment exams.",
  },
  hi: {
    crumbExams: "परीक्षाएँ",
    crumbJee: "JEE पेपर 3",
    crumbHere: "क्या यह आपके लिए है?",
    headerTitle: "JEE पेपर 3 — क्या यह आपके लिए है?",
    sectionLabel: "खंड",
    s1Title: "ईमानदार तुलना: प्लानिंग बनाम आर्किटेक्चर बनाम सिविल इंजीनियरिंग",
    s1Body:
      "कई छात्र B.Planning को आर्किटेक्चर या सिविल इंजीनियरिंग की उप-शाखा समझ लेते हैं। हकीकत में, ये दायरे, उपकरणों और पैमाने में मौलिक रूप से अलग हैं।",
    thFeature: "विशेषता",
    thBplan: "Bachelor of Planning (B.Plan)",
    thBarch: "Bachelor of Architecture (B.Arch)",
    thCivil: "सिविल इंजीनियरिंग (B.Tech)",
    rows: [
      {
        feature: "मुख्य पैमाना",
        bplan: "मैक्रो (शहर, क्षेत्र, ट्रांज़िट कॉरिडोर)",
        barch: "माइक्रो (व्यक्तिगत इमारतें, स्थल)",
        civil: "संरचनात्मक (सामग्री, मृदा यांत्रिकी, भार)",
      },
      {
        feature: "मुख्य फोकस",
        bplan: "पॉलिसी, ज़ोनिंग कानून, ट्रैफ़िक पैटर्न, सस्टेनेबिलिटी",
        barch: "सौंदर्यशास्त्र, स्थानिक डिज़ाइन, सामग्री विवरण",
        civil: "निर्माण व्यवहार्यता, संरचनात्मक सुरक्षा",
      },
      {
        feature: "मुख्य सॉफ़्टवेयर टूल",
        bplan: "ArcGIS, QGIS, AutoCAD Map 3D, SPSS (सांख्यिकी)",
        barch: "Revit, Rhino, SketchUp, Photoshop",
        civil: "STAAD.Pro, ETABS, MS Project, Primavera",
      },
      {
        feature: "ड्रॉइंग आवश्यकता",
        bplan: "कोई नहीं। B.Plan प्रवेश के लिए कोई ड्रॉइंग टेस्ट नहीं होता।",
        barch: "अधिक। फ़्रीहैंड स्केचिंग और स्केल ड्रॉइंग मुख्य हैं।",
        civil: "कोई नहीं। पूरी तरह फिज़िक्स और गणित पर केंद्रित।",
      },
    ],
    s2Title: "कौशल मूल्यांकन जाँच",
    s2Body: "यह देखने के लिए कि क्या आपमें एक अर्बन प्लानर की मानसिकता है, निम्न प्रश्नों के उत्तर दें:",
    s2Q1: "क्या आप इस बात से मोहित हैं कि शहर कैसे काम करते हैं? (जैसे, मेट्रो रूटिंग कैसे तय होती है, कुछ क्षेत्र आवासीय क्यों होते हैं, और जल आपूर्ति ग्रिड कैसे प्लान होते हैं)।",
    s2Q2: "क्या आपको कलात्मक इमारत के एलिवेशन बनाने की बजाय डेटा, जनसांख्यिकी और मानचित्र परतों का विश्लेषण करना पसंद है?",
    s2Q3: "क्या आपकी रुचि सार्वजनिक नीति, जलवायु परिवर्तन और सस्टेनेबिलिटी दिशानिर्देशों में है?",
    s2Q4: "क्या आप ऐसा करियर चाहते हैं जिसमें सरकारी निकायों, पर्यावरण एजेंसियों और सामुदायिक हितधारकों के साथ बातचीत हो?",
    s2Concl: "अगर आपने इनमें से 3 या अधिक का उत्तर हाँ में दिया, तो B.Planning एक बेहतरीन विकल्प है। आपको इस क्षेत्र के विश्लेषणात्मक, डेटा-केंद्रित और सामाजिक-आर्थिक पहलू पसंद आएँगे।",
    s3Title: "पेशेवर हकीकत और विकास मार्ग",
    s3Body: "B.Planning के बाद जीवन कैसा दिखता है?",
    s3Card1Title: "1. सामान्य कार्य वातावरण",
    s3Card1Body:
      "प्लानर दफ़्तरों में भौगोलिक स्थानिक परतों (GIS) का विश्लेषण करते हैं और विकास नियम लिखते हैं, बीच-बीच में ट्रैफ़िक मात्रा, आवास स्थिति या प्रदूषण सूचकांकों के अध्ययन के लिए फ़ील्ड सर्वे करते हैं।",
    s3Card2Title: "2. करियर विकास",
    s3Card2Body:
      "GIS Analyst या Associate Planner के रूप में शुरुआत करके आप Lead Urban Planner या Infrastructure Policy Adviser तक पहुँचते हैं। कई स्नातक SPA या यूरोपीय संस्थानों से Environmental Planning, Transport Planning, या Housing में मास्टर (M.Plan) करते हैं ताकि करोड़ों डॉलर की परियोजनाओं का नेतृत्व कर सकें।",
    s3BoxHeading: "कॉर्पोरेट प्लेसमेंट बनाम सरकारी मार्ग:",
    s3BoxBody:
      "JLL, Cushman & Wakefield, Knight Frank, L&T Infrastructure, और PwC जैसी निजी कंसल्टेंसी B.Plan स्नातकों को रियल एस्टेट सलाह और शहरी ट्रांज़िट प्रस्तावों के लिए सक्रिय रूप से भर्ती करती हैं। सरकारी विकल्पों में राज्य विकास प्राधिकरण (जैसे DDA, CIDCO) और नगर निगम शामिल हैं, जिनके लिए राज्य-स्तरीय Town Planner भर्ती परीक्षा पास करनी होती है।",
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
          <pattern id="jee-is-it-for-you-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0d9488" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#jee-is-it-for-you-grid)" />
      </svg>
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[60px]" />

      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="jee-ify-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d9488" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="jee-ify-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#jee-ify-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#jee-ify-wave-grad-2)" />
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

export default function JeePaper3IsItForYouPage() {
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

          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-2xl my-8 bg-white dark:bg-slate-800/50">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead className="bg-slate-50 dark:bg-slate-800/40">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">{t.thFeature}</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-teal-700 dark:text-teal-300 border-b border-slate-200 dark:border-slate-700">{t.thBplan}</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">{t.thBarch}</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">{t.thCivil}</th>
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
                      <td className={`p-4 font-black text-slate-700 dark:text-slate-300 ${border}`}>{row.feature}</td>
                      <td className={`p-4 text-teal-700 dark:text-teal-300 font-bold ${border}`}>{row.bplan}</td>
                      <td className={`p-4 text-slate-600 dark:text-slate-400 font-semibold ${border}`}>{row.barch}</td>
                      <td className={`p-4 text-slate-600 dark:text-slate-400 font-semibold ${border}`}>{row.civil}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Section>

        <Section number="02" label={t.sectionLabel} title={t.s2Title}>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            {t.s2Body}
          </p>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700">
              <Icon icon="solar:check-circle-bold" className="w-6 h-6 text-teal-600 flex-shrink-0" />
              <p className="text-slate-700 dark:text-slate-300 font-medium">
                {t.s2Q1}
              </p>
            </div>
            <div className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700">
              <Icon icon="solar:check-circle-bold" className="w-6 h-6 text-teal-600 flex-shrink-0" />
              <p className="text-slate-700 dark:text-slate-300 font-medium">
                {t.s2Q2}
              </p>
            </div>
            <div className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700">
              <Icon icon="solar:check-circle-bold" className="w-6 h-6 text-teal-600 flex-shrink-0" />
              <p className="text-slate-700 dark:text-slate-300 font-medium">
                {t.s2Q3}
              </p>
            </div>
            <div className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700">
              <Icon icon="solar:check-circle-bold" className="w-6 h-6 text-teal-600 flex-shrink-0" />
              <p className="text-slate-700 dark:text-slate-300 font-medium">
                {t.s2Q4}
              </p>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 font-medium mt-6 leading-relaxed">
            {t.s2Concl}
          </p>
        </Section>

        <Section number="03" label={t.sectionLabel} title={t.s3Title}>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            {t.s3Body}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 bg-white dark:bg-slate-800/50">
              <h4 className="font-black text-slate-800 dark:text-slate-100 text-lg mb-3">{t.s3Card1Title}</h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-semibold">
                {t.s3Card1Body}
              </p>
            </div>
            <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 bg-white dark:bg-slate-800/50">
              <h4 className="font-black text-slate-800 dark:text-slate-100 text-lg mb-3">{t.s3Card2Title}</h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-semibold">
                {t.s3Card2Body}
              </p>
            </div>
          </div>
          <InfoBox type="info">
            <h4 className="font-black text-teal-700 mb-2">{t.s3BoxHeading}</h4>
            <p className="text-slate-700 dark:text-slate-300 font-medium">
              {t.s3BoxBody}
            </p>
          </InfoBox>
        </Section>
      </div>
    </main>
  );
}
