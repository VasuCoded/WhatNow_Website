"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    crumbExams: "Exams",
    crumbClat: "CLAT",
    crumbHere: "Convince Parents",
    sectionLabel: "Section",
    headerTitle: "CLAT — Talking to Your Parents",
    s1Title: "Objection 1: 'Lawyers only succeed if they have family connections'",
    s1Intro:
      "This is true for traditional courtroom practice, but entirely false for Corporate Law Firms.",
    s1Heading: "The Counter-Argument:",
    s1Body:
      "Corporate firms function like multinational companies (MNCs). Hiring is purely meritocratic based on your NLU grades, internships, and moot performance. No family background or courtroom connections are needed to secure placements. Top firms recruit 70-80% of their associates directly from campus drives.",
    s2Title: "Objection 2: 'Do NLUs offer job security?'",
    s2Intro: "Parents compare law with software engineering B.Tech degrees for safety.",
    thMetric: "Metric",
    thNlu: "Tier-1 NLU B.A. LL.B.",
    thBtech: "Average B.Tech (Mid-Tier)",
    rowSalaryLabel: "Starting Salary Range",
    rowSalaryNlu: "₹12L - ₹18L per annum",
    rowSalaryBtech: "₹6L - ₹10L per annum",
    rowRecruiterLabel: "Recruiter Quality",
    rowRecruiterNlu: "Cyril Amarchand, Trilegal, Khaitan & Co.",
    rowRecruiterBtech: "TCS, Infosys, Cognizant",
    rowLongevityLabel: "Career Longevity",
    rowLongevityNlu: "High. Legal expertise is rare and non-replaceable by AI.",
    rowLongevityBtech: "Medium. Tech layoffs and AI tools impact entry coding.",
    s3Title: "Frame Top NLUs as the 'IITs of Law'",
    s3Heading: "Talking about status and prestige",
    s3P1:
      "Explain that the top NLUs (like NLSIU Bangalore, NALSAR Hyderabad, and NUJS Kolkata) enjoy the same elite institutional status under Indian law as IITs and IIMs.",
    s3P2:
      "Admission is extremely competitive (top 1% of ~70,000 aspirants). Clearing CLAT and entering a top-5 NLU is a highly respected achievement, guaranteeing immediate social standing, family pride, and strong financial outcomes.",
  },
  hi: {
    crumbExams: "परीक्षाएँ",
    crumbClat: "CLAT",
    crumbHere: "माता-पिता को मनाएँ",
    sectionLabel: "खंड",
    headerTitle: "CLAT — अपने माता-पिता से बात करना",
    s1Title: "आपत्ति 1: 'वकील केवल तभी सफल होते हैं जब उनके पारिवारिक संबंध हों'",
    s1Intro:
      "यह पारंपरिक कोर्टरूम प्रैक्टिस के लिए सच है, लेकिन कॉर्पोरेट लॉ फर्मों के लिए पूरी तरह गलत है।",
    s1Heading: "जवाबी तर्क:",
    s1Body:
      "कॉर्पोरेट फर्म बहुराष्ट्रीय कंपनियों (MNCs) की तरह काम करती हैं। भर्ती पूरी तरह योग्यता-आधारित होती है, जो आपके NLU ग्रेड, इंटर्नशिप और मूट प्रदर्शन पर निर्भर करती है। प्लेसमेंट पाने के लिए किसी पारिवारिक पृष्ठभूमि या कोर्टरूम संबंधों की ज़रूरत नहीं है। शीर्ष फर्म अपने 70-80% एसोसिएट्स सीधे कैंपस ड्राइव से भर्ती करती हैं।",
    s2Title: "आपत्ति 2: 'क्या NLUs नौकरी की सुरक्षा देते हैं?'",
    s2Intro: "माता-पिता सुरक्षा के लिए लॉ की तुलना सॉफ्टवेयर इंजीनियरिंग B.Tech डिग्री से करते हैं।",
    thMetric: "मापदंड",
    thNlu: "Tier-1 NLU B.A. LL.B.",
    thBtech: "औसत B.Tech (मिड-टियर)",
    rowSalaryLabel: "शुरुआती वेतन सीमा",
    rowSalaryNlu: "₹12L - ₹18L प्रति वर्ष",
    rowSalaryBtech: "₹6L - ₹10L प्रति वर्ष",
    rowRecruiterLabel: "भर्तीकर्ता गुणवत्ता",
    rowRecruiterNlu: "Cyril Amarchand, Trilegal, Khaitan & Co.",
    rowRecruiterBtech: "TCS, Infosys, Cognizant",
    rowLongevityLabel: "करियर दीर्घायु",
    rowLongevityNlu: "उच्च। विधिक विशेषज्ञता दुर्लभ है और AI द्वारा प्रतिस्थापन योग्य नहीं।",
    rowLongevityBtech: "मध्यम। टेक छँटनी और AI टूल्स प्रारंभिक कोडिंग को प्रभावित करते हैं।",
    s3Title: "शीर्ष NLUs को 'लॉ के IITs' के रूप में प्रस्तुत करें",
    s3Heading: "स्थिति और प्रतिष्ठा के बारे में बात करना",
    s3P1:
      "समझाएँ कि शीर्ष NLUs (जैसे NLSIU बैंगलोर, NALSAR हैदराबाद और NUJS कोलकाता) को भारतीय कानून के तहत IITs और IIMs जैसा ही एलीट संस्थागत दर्जा प्राप्त है।",
    s3P2:
      "प्रवेश बेहद प्रतिस्पर्धी है (लगभग 70,000 अभ्यर्थियों के टॉप 1%)। CLAT पास करना और टॉप-5 NLU में प्रवेश पाना एक अत्यधिक सम्मानित उपलब्धि है, जो तुरंत सामाजिक प्रतिष्ठा, पारिवारिक गर्व और मज़बूत वित्तीय परिणाम सुनिश्चित करती है।",
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
          <pattern id="clat-convince-parents-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#10b981" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#clat-convince-parents-grid)" />
      </svg>
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-teal-500/5 rounded-full blur-[60px]" />

      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="clat-cp-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="clat-cp-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#clat-cp-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#clat-cp-wave-grad-2)" />
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

export default function ClatConvinceParentsPage() {
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
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 space-y-4 mb-6">
            <h4 className="font-black text-xl text-neutral-dark">{t.s1Heading}</h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
              {t.s1Body}
            </p>
          </div>
        </Section>

        <Section number="02" label={t.sectionLabel} title={t.s2Title}>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            {t.s2Intro}
          </p>
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl my-8">
            <table className="w-full text-left border-collapse min-w-[600px] bg-white dark:bg-slate-800/50">
              <thead className="bg-slate-50 dark:bg-slate-800/40">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    {t.thMetric}
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    {t.thNlu}
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    {t.thBtech}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-black">
                    {t.rowSalaryLabel}
                  </td>
                  <td className="p-4 text-emerald-600 border-b border-slate-100 dark:border-slate-800 font-black">
                    {t.rowSalaryNlu}
                  </td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-medium">
                    {t.rowSalaryBtech}
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-black">
                    {t.rowRecruiterLabel}
                  </td>
                  <td className="p-4 text-emerald-600 border-b border-slate-100 dark:border-slate-800 font-black">
                    {t.rowRecruiterNlu}
                  </td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-medium">
                    {t.rowRecruiterBtech}
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 font-black">
                    {t.rowLongevityLabel}
                  </td>
                  <td className="p-4 text-emerald-600 font-black">
                    {t.rowLongevityNlu}
                  </td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 font-medium">
                    {t.rowLongevityBtech}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
