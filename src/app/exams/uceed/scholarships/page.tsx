"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    crumbExams: "Exams",
    crumbHere: "Scholarships",
    sectionLabel: "Section",
    headerTitle: "UCEED — Scholarships",
    s1Title: "What does B.Des at an IIT actually cost?",
    s1Intro: "The fee structure varies by institute. Here's a rough overview. The most important thing to understand: the tuition fee is the waiveable part — hostel, mess, and activity fees are separate and not typically waived.",
    thInstitute: "Institute",
    thTotalFees: "Approx. total fees (4 years)",
    thScFees: "SC/ST/PwD fees",
    feeRows: [
      { inst: "IIT Bombay", total: "₹8.83 lakhs (tuition ₹8L + other)", sc: "~₹82,500 total" },
      { inst: "IIT Delhi", total: "Similar to IIT Bombay range", sc: "Full tuition waiver applies" },
      { inst: "IIITDM Jabalpur", total: "Typically lower than IITs", sc: "Reduced fees apply" },
    ],
    s2Title: "Available Scholarships",
    card1Title: "Merit-cum-Means (MCM)",
    card1Type: "Institute Scholarship",
    card1Audience: "General, OBC-NCL, EWS students. Family income-based.",
    card1Desc: "The most significant scholarship available to non-SC/ST students. Offered by each IIT to eligible undergraduate students based on economic need and academic performance. The benefit is a tuition fee waiver — partial or full — plus a monthly stipend.",
    card1Note: "Maintain a minimum CPI/SPI of 6.0 each semester with no academic backlog.",
    card2Title: "SC, ST and PwD Waiver",
    card2Type: "Government Policy",
    card2Audience: "SC, ST, and PwD students at all IITs. Automatic.",
    card2Desc: "All SC, ST, and PwD students admitted to IITs receive a complete waiver of tuition fees. At IIT Bombay, SC/ST students pay approximately ₹82,500 total for the four-year B.Des program versus the full fee of ₹8.83 lakhs.",
    card2Note: "No separate application needed, applied automatically based on category.",
    noteLabel: "Note:",
    s3Title: "The Honest Picture",
    s3Heading: "The thing parents need to hear",
    s3Body: "Design at an IIT is not a financially risky choice. The same MCM scholarship framework that covers B.Tech students covers B.Des students. The fee structure is identical across programs at most IITs. If you qualify for fee relief on the basis of income, you get it regardless of which degree you're studying.",
  },
  hi: {
    crumbExams: "परीक्षाएँ",
    crumbHere: "छात्रवृत्तियाँ",
    sectionLabel: "खंड",
    headerTitle: "UCEED — छात्रवृत्तियाँ",
    s1Title: "किसी IIT में B.Des की असल लागत क्या है?",
    s1Intro: "फीस संरचना संस्थान दर संस्थान बदलती है। यहाँ एक मोटा खाका है। समझने की सबसे अहम बात: ट्यूशन फीस ही वह हिस्सा है जिसमें छूट मिल सकती है — हॉस्टल, मेस, और एक्टिविटी फीस अलग होती हैं और आम तौर पर माफ़ नहीं की जातीं।",
    thInstitute: "संस्थान",
    thTotalFees: "अनुमानित कुल फीस (4 साल)",
    thScFees: "SC/ST/PwD फीस",
    feeRows: [
      { inst: "IIT Bombay", total: "₹8.83 लाख (ट्यूशन ₹8L + अन्य)", sc: "~₹82,500 कुल" },
      { inst: "IIT Delhi", total: "IIT Bombay की रेंज जैसी", sc: "पूरी ट्यूशन छूट लागू" },
      { inst: "IIITDM Jabalpur", total: "आम तौर पर IITs से कम", sc: "घटी हुई फीस लागू" },
    ],
    s2Title: "उपलब्ध छात्रवृत्तियाँ",
    card1Title: "Merit-cum-Means (MCM)",
    card1Type: "संस्थान छात्रवृत्ति",
    card1Audience: "General, OBC-NCL, EWS छात्र। पारिवारिक आय-आधारित।",
    card1Desc: "non-SC/ST छात्रों के लिए उपलब्ध सबसे महत्वपूर्ण छात्रवृत्ति। हर IIT द्वारा पात्र अंडरग्रेजुएट छात्रों को आर्थिक ज़रूरत और शैक्षणिक प्रदर्शन के आधार पर दी जाती है। लाभ है ट्यूशन फीस में छूट — आंशिक या पूर्ण — साथ में मासिक वज़ीफ़ा।",
    card1Note: "हर सेमेस्टर में न्यूनतम 6.0 CPI/SPI बनाए रखें और कोई शैक्षणिक बैकलॉग न हो।",
    card2Title: "SC, ST और PwD छूट",
    card2Type: "सरकारी नीति",
    card2Audience: "सभी IITs में SC, ST, और PwD छात्र। स्वचालित।",
    card2Desc: "IITs में दाखिला पाने वाले सभी SC, ST, और PwD छात्रों को ट्यूशन फीस में पूरी छूट मिलती है। IIT Bombay में, SC/ST छात्र चार-वर्षीय B.Des प्रोग्राम के लिए ₹8.83 लाख की पूरी फीस के बजाय लगभग ₹82,500 कुल चुकाते हैं।",
    card2Note: "कोई अलग आवेदन ज़रूरी नहीं, कैटेगरी के आधार पर स्वतः लागू।",
    noteLabel: "नोट:",
    s3Title: "ईमानदार तस्वीर",
    s3Heading: "वह बात जो माता-पिता को सुननी चाहिए",
    s3Body: "किसी IIT में डिज़ाइन कोई आर्थिक रूप से जोखिम भरा चुनाव नहीं है। वही MCM छात्रवृत्ति ढाँचा जो B.Tech छात्रों को कवर करता है, B.Des छात्रों को भी कवर करता है। ज़्यादातर IITs में सभी प्रोग्राम में फीस संरचना एक जैसी है। अगर आप आय के आधार पर फीस राहत के पात्र हैं, तो आपको यह मिलती है, चाहे आप कोई भी डिग्री पढ़ रहे हों।",
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
          <pattern id="uceed-scholarships-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#5563ED" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#uceed-scholarships-grid)" />
      </svg>

      {/* Layered glowing blobs */}
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-[#5563ED]/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-[#ff5a1f]/5 rounded-full blur-[60px]" />

      {/* Smooth vector paths */}
      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="uceed-sch-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5563ED" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#5563ED" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="uceed-sch-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff5a1f" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#ff5a1f" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#uceed-sch-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#uceed-sch-wave-grad-2)" />
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80" stroke="#5563ED" strokeWidth="1.5" strokeOpacity="0.1" />
        <path d="M0,240 C480,120 960,320 1440,160" stroke="#ff5a1f" strokeWidth="1.5" strokeOpacity="0.05" strokeDasharray="6 6" />
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
    <div className="absolute top-0 right-0 p-8 text-[6rem] font-black text-slate-50 dark:text-slate-800 leading-none select-none z-0">
      {number}
    </div>
    <div className="relative z-10">
      <div className="text-primary font-black text-sm uppercase tracking-widest mb-4">
        {label} {number}
      </div>
      <h2 className="text-3xl md:text-4xl font-black mb-8 text-neutral-dark tracking-tight">
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
      <div className="inline-block px-3 py-1 bg-indigo-50 dark:bg-indigo-950/30 text-primary text-xs font-black uppercase tracking-wider rounded-full mb-4">
        {type}
      </div>
      <h3 className="text-2xl font-black text-neutral-dark mb-2">{title}</h3>
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

export default function UceedScholarshipsPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C] min-h-screen">
      <PageHeader
        title={t.headerTitle}
        breadcrumbs={
          <>
            <Link
              href="/exams"
              className="hover:text-primary transition-colors"
            >
              {t.crumbExams}
            </Link>{" "}
            <span>›</span>
            <Link
              href="/exams/uceed"
              className="hover:text-primary transition-colors"
            >
              UCEED
            </Link>{" "}
            <span>›</span>
            <span className="text-primary">{t.crumbHere}</span>
          </>
        }
      />

      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 pb-24">
        <Section number="01" label={t.sectionLabel} title={t.s1Title}>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            {t.s1Intro}
          </p>

          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl my-8">
            <table className="w-full text-left border-collapse min-w-[600px] bg-white dark:bg-slate-800/50">
              <thead className="bg-slate-50 dark:bg-slate-800/40">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    {t.thInstitute}
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    {t.thTotalFees}
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    {t.thScFees}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.feeRows.map((row, i) => {
                  const border =
                    i < t.feeRows.length - 1
                      ? "border-b border-slate-100 dark:border-slate-800"
                      : "";
                  return (
                    <tr key={i}>
                      <td className={`p-4 text-slate-700 dark:text-slate-300 font-black ${border}`}>
                        {row.inst}
                      </td>
                      <td className={`p-4 text-slate-700 dark:text-slate-300 font-medium ${border}`}>
                        {row.total}
                      </td>
                      <td className={`p-4 text-primary font-black ${border}`}>
                        {row.sc}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Section>

        <Section number="02" label={t.sectionLabel} title={t.s2Title}>
          <ScholarshipCard
            title={t.card1Title}
            type={t.card1Type}
            audience={t.card1Audience}
            description={t.card1Desc}
            note={t.card1Note}
            noteLabel={t.noteLabel}
          />

          <ScholarshipCard
            title={t.card2Title}
            type={t.card2Type}
            audience={t.card2Audience}
            description={t.card2Desc}
            note={t.card2Note}
            noteLabel={t.noteLabel}
          />
        </Section>

        <Section number="03" label={t.sectionLabel} title={t.s3Title}>
          <div className="p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40 mb-6">
            <h3 className="text-xl font-black text-neutral-dark mb-4">
              {t.s3Heading}
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
              {t.s3Body}
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}
