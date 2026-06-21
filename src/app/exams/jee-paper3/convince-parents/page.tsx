"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    crumbExams: "Exams",
    crumbJee: "JEE Paper 3",
    crumbHere: "Convince Parents",
    headerTitle: "JEE Paper 3 — Talking to Your Parents",
    sectionLabel: "Section",
    s1Title: "Objection 1: 'What is B.Planning? Is it a sub-degree or a real career?'",
    s1Body:
      "Many parents have never heard of a B.Plan degree and assume it is either a vocational program or a lesser version of Civil Engineering.",
    s1CounterHeading: "The Counter-Argument:",
    s1CounterBody:
      "B.Planning is a highly professional, AICTE-approved 4-year degree. It is recognized by the Institute of Town Planners, India (ITPI). With India building 100 Smart Cities and investing Rs 10+ Lakh Crores in urban infrastructure (Metro systems, logistics parks, AMRUT sewage lines), the need for specialized planners who understand zoning laws, economic feasibility, and GIS mapping is at an all-time high. Traditional civil engineers do not study these policy frameworks.",
    s2Title: "Objection 2: 'Do planners get corporate jobs, or is it only government contracts?'",
    s2Body:
      "Parents often assume that urban planning jobs are strictly government-appointed and hard to get without public sector exams.",
    thSector: "Employer Sector",
    thRoles: "Sample Roles & Clients",
    thSalary: "Starting Salary Range",
    salaryRows: [
      {
        sector: "Real Estate Consultancies (JLL, Knight Frank, Cushman)",
        roles: "Valuation Analyst, Feasibility Advisory",
        salary: "Rs 5.0L - Rs 8.0L/yr",
      },
      {
        sector: "Infrastructure Developers (L&T, Tata Projects)",
        roles: "Transport Network Planner, Smart City Executive",
        salary: "Rs 6.0L - Rs 9.0L/yr",
      },
      {
        sector: "Policy Research & NGOs (WRI India, NIUA, World Bank projects)",
        roles: "Research Associate, Sustainable City Policy Officer",
        salary: "Rs 4.5L - Rs 7.0L/yr",
      },
    ],
    s3Title: "ROI & College Affordability Argument",
    s3Heading: "Talking about financial investments",
    s3P1:
      "If you secure admission in the School of Planning and Architecture (SPA Delhi, Bhopal, or Vijayawada), tuition fees are heavily subsidized by the Central Government (~Rs 1.8L - Rs 2.5L per year).",
    s3P2:
      "This makes B.Planning at SPAs one of the most high-ROI degrees in the country compared to private engineering colleges that charge Rs 15L - Rs 20L with similar or lower starting salary packages. Merit-cum-means scholarships further reduce fees for eligible students.",
  },
  hi: {
    crumbExams: "परीक्षाएँ",
    crumbJee: "JEE पेपर 3",
    crumbHere: "माता-पिता को मनाएँ",
    headerTitle: "JEE पेपर 3 — अपने माता-पिता से बात करना",
    sectionLabel: "खंड",
    s1Title: "आपत्ति 1: 'B.Planning क्या है? क्या यह कोई उप-डिग्री है या असली करियर?'",
    s1Body:
      "कई माता-पिता ने B.Plan डिग्री के बारे में कभी नहीं सुना और मान लेते हैं कि यह या तो कोई वोकेशनल प्रोग्राम है या सिविल इंजीनियरिंग का घटिया संस्करण।",
    s1CounterHeading: "जवाबी तर्क:",
    s1CounterBody:
      "B.Planning एक अत्यधिक पेशेवर, AICTE-अनुमोदित 4-वर्षीय डिग्री है। इसे Institute of Town Planners, India (ITPI) द्वारा मान्यता प्राप्त है। भारत के 100 Smart Cities बनाने और शहरी इन्फ्रास्ट्रक्चर (मेट्रो सिस्टम, लॉजिस्टिक्स पार्क, AMRUT सीवेज लाइनें) में Rs 10+ लाख करोड़ के निवेश के साथ, ज़ोनिंग कानून, आर्थिक व्यवहार्यता और GIS मैपिंग समझने वाले विशेष प्लानरों की माँग सर्वकालिक उच्च स्तर पर है। पारंपरिक सिविल इंजीनियर इन पॉलिसी ढाँचों का अध्ययन नहीं करते।",
    s2Title: "आपत्ति 2: 'क्या प्लानरों को कॉर्पोरेट नौकरियाँ मिलती हैं, या केवल सरकारी ठेके?'",
    s2Body:
      "माता-पिता अक्सर मान लेते हैं कि अर्बन प्लानिंग नौकरियाँ सख़्ती से सरकार-नियुक्त होती हैं और सार्वजनिक क्षेत्र की परीक्षाओं के बिना मिलना मुश्किल है।",
    thSector: "नियोक्ता क्षेत्र",
    thRoles: "नमूना भूमिकाएँ और क्लाइंट",
    thSalary: "शुरुआती वेतन सीमा",
    salaryRows: [
      {
        sector: "रियल एस्टेट कंसल्टेंसी (JLL, Knight Frank, Cushman)",
        roles: "Valuation Analyst, Feasibility Advisory",
        salary: "Rs 5.0L - Rs 8.0L/वर्ष",
      },
      {
        sector: "इन्फ्रास्ट्रक्चर डेवलपर (L&T, Tata Projects)",
        roles: "Transport Network Planner, Smart City Executive",
        salary: "Rs 6.0L - Rs 9.0L/वर्ष",
      },
      {
        sector: "पॉलिसी रिसर्च और NGO (WRI India, NIUA, World Bank परियोजनाएँ)",
        roles: "Research Associate, Sustainable City Policy Officer",
        salary: "Rs 4.5L - Rs 7.0L/वर्ष",
      },
    ],
    s3Title: "ROI और कॉलेज वहनीयता का तर्क",
    s3Heading: "वित्तीय निवेश के बारे में बात करना",
    s3P1:
      "अगर आप School of Planning and Architecture (SPA Delhi, Bhopal, या Vijayawada) में प्रवेश पा लेते हैं, तो ट्यूशन फीस केंद्र सरकार द्वारा अत्यधिक रियायती होती है (~Rs 1.8L - Rs 2.5L प्रति वर्ष)।",
    s3P2:
      "यह SPA में B.Planning को देश की सबसे उच्च-ROI डिग्रियों में से एक बना देता है, उन निजी इंजीनियरिंग कॉलेजों की तुलना में जो Rs 15L - Rs 20L लेते हैं और समान या उससे कम शुरुआती वेतन पैकेज देते हैं। merit-cum-means छात्रवृत्तियाँ पात्र छात्रों के लिए फीस और कम कर देती हैं।",
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
          <pattern id="jee-cp-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0d9488" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#jee-cp-grid)" />
      </svg>
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[60px]" />

      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="jee-cp-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d9488" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="jee-cp-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#jee-cp-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#jee-cp-wave-grad-2)" />
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

export default function JeePaper3ConvinceParentsPage() {
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
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 space-y-4 mb-6">
            <h4 className="font-black text-xl text-neutral-dark">{t.s1CounterHeading}</h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
              {t.s1CounterBody}
            </p>
          </div>
        </Section>

        <Section number="02" label={t.sectionLabel} title={t.s2Title}>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            {t.s2Body}
          </p>
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl my-8 bg-white dark:bg-slate-800/50">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead className="bg-slate-50 dark:bg-slate-800/40">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    {t.thSector}
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    {t.thRoles}
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    {t.thSalary}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.salaryRows.map((row, i) => {
                  const border =
                    i < t.salaryRows.length - 1
                      ? "border-b border-slate-100 dark:border-slate-800"
                      : "";
                  return (
                    <tr key={i}>
                      <td className={`p-4 text-slate-700 dark:text-slate-300 font-black ${border}`}>
                        {row.sector}
                      </td>
                      <td className={`p-4 text-slate-600 dark:text-slate-400 font-medium ${border}`}>
                        {row.roles}
                      </td>
                      <td className={`p-4 text-emerald-600 dark:text-emerald-300 font-black ${border}`}>
                        {row.salary}
                      </td>
                    </tr>
                  );
                })}
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
