"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    crumbExams: "Exams",
    crumbNift: "NIFT",
    crumbHere: "Fees & Scholarships",
    headerTitle: "NIFT — Fees, Scholarships & ROI",
    sectionLabel: "Section",
    s1Title: "What does NIFT actually cost?",
    s1Body:
      "Course fees at NIFT are structured semester-wise. The tuition fee is the primary component, which escalates around 10% annually. Hostel fee, mess charges, and security deposits are billed separately.",
    thYear: "Academic Year",
    thTuition: "Tuition Fees (Per Year)",
    thOther: "Other Component Estimates",
    rows: [
      { y: "Year 1 (Sem 1 & 2)", t: "~₹2.90 lakhs", o: "+ ~₹35,000 (deposits, library, exam fee)", oAccent: true },
      { y: "Year 2 (Sem 3 & 4)", t: "~₹3.05 lakhs", o: "Hostel & Mess extra (~₹80K - 1.2L per year)", oAccent: false },
      { y: "Year 3 (Sem 5 & 6)", t: "~₹3.25 lakhs", o: "Varies by campus (Metro vs. Non-metro)", oAccent: false },
      { y: "Year 4 (Sem 7 & 8)", t: "~₹3.45 lakhs", o: "Total Tuition: ~₹12.65 lakhs (4 years)", oAccent: true },
    ],
    s2Title: "Sarthak Financial Assistance Scheme",
    s2Body:
      "NIFT's flagship financial aid policy, Sarthak, provides fee concessions to students from lower-income backgrounds based on parental income slabs.",
    noteLabel: "Note:",
    cards: [
      {
        title: "75% Concession",
        type: "Sarthak Scheme",
        audience: "Parental income below ₹1.5 lakhs per annum.",
        description: "Eligible undergraduate students receive a 75% waiver on their tuition fees. This significantly reduces the total academic fee load, bringing Year 1 tuition down to ~₹72,000.",
        note: "Applicable to B.Des students. B.FTech students receive a 50% waiver in this slab.",
      },
      {
        title: "50% Concession",
        type: "Sarthak Scheme",
        audience: "Parental income between ₹1.5L and ₹2.5L per annum.",
        description: "Eligible undergraduate students receive a 50% waiver on their annual tuition fees. Helpful for middle-income design aspirants.",
        note: "Applicable to B.Des students. B.FTech students receive a 35% waiver in this slab.",
      },
      {
        title: "25% Concession",
        type: "Sarthak Scheme",
        audience: "Parental income between ₹2.5L and ₹4.0L per annum.",
        description: "Provides a 25% waiver on the annual tuition fee. B.FTech students receive a 25% waiver in this income range as well.",
        note: "Must maintain a good academic record to sustain the scholarship annually.",
      },
    ],
    s3Title: "The Honest ROI Picture",
    s3CardTitle: "Return on Investment (ROI) reality",
    s3CardBody:
      "Starting salaries in fashion design range from ₹3.5L to ₹6.0L per annum for fresh graduates. If you pay the full fees (~₹13L academic + ~₹4L living costs) without aid, the financial payback is slow. However, if you qualify for the Sarthak Scholarship, the overall education cost drops dramatically, yielding a much higher and healthier return on investment.",
  },
  hi: {
    crumbExams: "परीक्षाएँ",
    crumbNift: "NIFT",
    crumbHere: "फ़ीस और स्कॉलरशिप",
    headerTitle: "NIFT — फ़ीस, स्कॉलरशिप और ROI",
    sectionLabel: "खंड",
    s1Title: "NIFT पर असल में कितना खर्च आता है?",
    s1Body:
      "NIFT में कोर्स फ़ीस सेमेस्टर-वार संरचित होती है। ट्यूशन फ़ीस मुख्य घटक है, जो हर साल लगभग 10% बढ़ती है। हॉस्टल फ़ीस, मेस शुल्क और सिक्योरिटी डिपॉज़िट अलग से लिए जाते हैं।",
    thYear: "शैक्षणिक वर्ष",
    thTuition: "ट्यूशन फ़ीस (प्रति वर्ष)",
    thOther: "अन्य घटकों का अनुमान",
    rows: [
      { y: "वर्ष 1 (सेम 1 और 2)", t: "~₹2.90 लाख", o: "+ ~₹35,000 (डिपॉज़िट, लाइब्रेरी, परीक्षा फ़ीस)", oAccent: true },
      { y: "वर्ष 2 (सेम 3 और 4)", t: "~₹3.05 लाख", o: "हॉस्टल और मेस अतिरिक्त (~₹80K - 1.2L प्रति वर्ष)", oAccent: false },
      { y: "वर्ष 3 (सेम 5 और 6)", t: "~₹3.25 लाख", o: "कैंपस के अनुसार भिन्न (मेट्रो बनाम नॉन-मेट्रो)", oAccent: false },
      { y: "वर्ष 4 (सेम 7 और 8)", t: "~₹3.45 लाख", o: "कुल ट्यूशन: ~₹12.65 लाख (4 वर्ष)", oAccent: true },
    ],
    s2Title: "सार्थक वित्तीय सहायता योजना",
    s2Body:
      "NIFT की प्रमुख वित्तीय सहायता नीति, सार्थक, माता-पिता की आय स्लैब के आधार पर निम्न-आय पृष्ठभूमि के छात्रों को फ़ीस में छूट देती है।",
    noteLabel: "ध्यान दें:",
    cards: [
      {
        title: "75% छूट",
        type: "सार्थक योजना",
        audience: "माता-पिता की वार्षिक आय ₹1.5 लाख से कम।",
        description: "पात्र स्नातक छात्रों को अपनी ट्यूशन फ़ीस पर 75% छूट मिलती है। इससे कुल शैक्षणिक फ़ीस का बोझ काफ़ी घट जाता है, और वर्ष 1 की ट्यूशन ~₹72,000 तक आ जाती है।",
        note: "B.Des छात्रों पर लागू। इस स्लैब में B.FTech छात्रों को 50% छूट मिलती है।",
      },
      {
        title: "50% छूट",
        type: "सार्थक योजना",
        audience: "माता-पिता की वार्षिक आय ₹1.5L और ₹2.5L के बीच।",
        description: "पात्र स्नातक छात्रों को अपनी वार्षिक ट्यूशन फ़ीस पर 50% छूट मिलती है। मध्यम-आय वाले डिज़ाइन अभ्यर्थियों के लिए सहायक।",
        note: "B.Des छात्रों पर लागू। इस स्लैब में B.FTech छात्रों को 35% छूट मिलती है।",
      },
      {
        title: "25% छूट",
        type: "सार्थक योजना",
        audience: "माता-पिता की वार्षिक आय ₹2.5L और ₹4.0L के बीच।",
        description: "वार्षिक ट्यूशन फ़ीस पर 25% छूट देती है। इस आय सीमा में B.FTech छात्रों को भी 25% छूट मिलती है।",
        note: "स्कॉलरशिप हर साल बनाए रखने के लिए अच्छा शैक्षणिक रिकॉर्ड बनाए रखना ज़रूरी है।",
      },
    ],
    s3Title: "ईमानदार ROI तस्वीर",
    s3CardTitle: "रिटर्न ऑन इन्वेस्टमेंट (ROI) की हकीकत",
    s3CardBody:
      "फ़ैशन डिज़ाइन में नए स्नातकों के लिए शुरुआती वेतन ₹3.5L से ₹6.0L प्रति वर्ष के बीच होते हैं। अगर आप बिना किसी सहायता के पूरी फ़ीस (~₹13L शैक्षणिक + ~₹4L रहन-सहन का खर्च) भरते हैं, तो वित्तीय वापसी धीमी होती है। हालाँकि, अगर आप सार्थक स्कॉलरशिप के लिए पात्र हैं, तो कुल शिक्षा लागत नाटकीय रूप से घट जाती है, जिससे कहीं अधिक और स्वस्थ रिटर्न ऑन इन्वेस्टमेंट मिलता है।",
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
          <pattern id="nift-scholarships-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ec4899" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#nift-scholarships-grid)" />
      </svg>

      {/* Layered glowing blobs */}
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-[#ff5a1f]/5 rounded-full blur-[60px]" />

      {/* Smooth vector paths */}
      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="nift-sch-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="nift-sch-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff5a1f" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#ff5a1f" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#nift-sch-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#nift-sch-wave-grad-2)" />
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

const ScholarshipCard = ({
  title,
  type,
  audience,
  description,
  note,
  noteLabel,
}: {
  title: string;
  type: string;
  audience: string;
  description: React.ReactNode;
  note?: string;
  noteLabel: string;
}) => (
  <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 bg-white dark:bg-slate-800/50 shadow-sm mb-6 flex flex-col md:flex-row gap-8">
    <div className="md:w-1/3">
      <div className="inline-block px-3 py-1 bg-pink-50 dark:bg-pink-950/30 text-pink-600 dark:text-pink-300 text-xs font-black uppercase tracking-wider rounded-full mb-4">
        {type}
      </div>
      <h3 className="text-2xl font-black text-neutral-dark dark:text-slate-100 mb-2">{title}</h3>
      <p className="text-sm font-bold text-slate-500 dark:text-slate-400 italic">{audience}</p>
    </div>
    <div className="md:w-2/3 flex flex-col justify-center">
      <div className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-4">
        {description}
      </div>
      {note && (
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-sm font-bold text-slate-500 dark:text-slate-400">
          {noteLabel} {note}
        </div>
      )}
    </div>
  </div>
);

export default function NiftScholarshipsPage() {
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

          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl my-8">
            <table className="w-full text-left border-collapse min-w-[600px] bg-white dark:bg-slate-800/50">
              <thead className="bg-slate-50 dark:bg-slate-800/40">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    {t.thYear}
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    {t.thTuition}
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    {t.thOther}
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
                        {row.y}
                      </td>
                      <td className={`p-4 text-slate-700 dark:text-slate-300 font-medium ${border}`}>
                        {row.t}
                      </td>
                      <td className={`p-4 ${row.oAccent ? "text-pink-600 font-black" : "text-slate-400 dark:text-slate-400 font-medium"} ${border}`}>
                        {row.o}
                      </td>
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

          {t.cards.map((card, i) => (
            <ScholarshipCard
              key={i}
              title={card.title}
              type={card.type}
              audience={card.audience}
              description={card.description}
              note={card.note}
              noteLabel={t.noteLabel}
            />
          ))}
        </Section>

        <Section number="03" label={t.sectionLabel} title={t.s3Title}>
          <div className="p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40 mb-6">
            <h3 className="text-xl font-black text-neutral-dark dark:text-slate-100 mb-4">
              {t.s3CardTitle}
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
              {t.s3CardBody}
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}
