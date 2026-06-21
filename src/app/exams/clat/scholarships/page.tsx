"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    crumbExams: "Exams",
    crumbClat: "CLAT",
    crumbHere: "Fees & Scholarships",
    sectionLabel: "Section",
    noteLabel: "Note:",
    headerTitle: "CLAT — NLU Fees & Scholarships",
    s1Title: "What does studying at an NLU cost?",
    s1Intro:
      "National Law Universities (NLUs) are autonomous public institutions, but they receive minimal state funding compared to IITs. Consequently, NLU fee structures are relatively high, averaging ₹2.5L to ₹3.5L annually. This covers tuition, library access, residential facilities, and university utilities.",
    thCampus: "NLU Campus",
    thTuition: "Tuition Fees (Per Year)",
    thTotal: "Approx. Total Annual Cost (Inc. Hostel & Mess)",
    feeRows: [
      { campus: "NLSIU Bangalore (Tier 1)", tuition: "~₹2.75 lakhs", total: "~₹3.50 lakhs/year" },
      { campus: "NALSAR Hyderabad (Tier 1)", tuition: "~₹2.40 lakhs", total: "~₹3.10 lakhs/year" },
      { campus: "WBNUJS Kolkata (Tier 1)", tuition: "~₹2.50 lakhs", total: "~₹3.20 lakhs/year" },
      { campus: "NLU Jodhpur / GNLU Gandhinagar", tuition: "~₹2.50 lakhs", total: "~₹3.25 lakhs/year" },
    ],
    s2Title: "Available Scholarships & Financial Aid",
    s2Intro:
      "To ensure economic constraints do not stop deserving candidates from pursuing law, multiple central, state, and institutional support mechanisms exist.",
    sch1Title: "Aditya Birla Scholarship",
    sch1Type: "Private Merit Scheme",
    sch1Audience: "Top 20 rankers of CLAT joining NLSIU, NALSAR, NUJS, NLU Jodhpur.",
    sch1Desc:
      "Highly prestigious merit-based scholarship that covers up to ₹1.80 lakhs per annum of the tuition fee. Selection is based on the CLAT rank list followed by a detailed application review and interview round.",
    sch1Note: "Must maintain top academic standing and clean conduct during the 5-year B.A. LL.B. course.",
    sch2Title: "Central Sector Top Class SC/ST Scheme",
    sch2Type: "Government Policy",
    sch2Audience: "SC and ST students with parental income below ₹8.0 lakhs per annum.",
    sch2Desc:
      "Funded by the Ministry of Social Justice and Empowerment. It covers the full tuition fees of the candidate at all NLUs, along with a living expenses allowance of ₹3,000/month, books allowance of ₹5,000/year, and a one-time laptop computer allowance of ₹45,000.",
    sch2Note: "Applied directly through the National Scholarship Portal (NSP) with valid income and category certificates.",
    sch3Title: "NLU Merit-cum-Means (MCM) Waivers",
    sch3Type: "Institutional Aid",
    sch3Audience: "Economically weaker students based on household income slabs.",
    sch3Desc:
      "Offered individually by top NLUs (e.g. NLSIU Financial Aid Scheme, NALSAR Need-based Scholarships). These schemes waive tuition fees up to 100% depending on parental income (typically under slabs of ₹3.0L, ₹5.0L, and ₹8.0L per annum).",
    sch3Note: "Applications open in the first semester at individual university administration offices.",
    s3Title: "The Honest ROI Picture",
    s3Heading: "Is NLU tuition worth the high cost?",
    s3P1:
      "If you secure a seat in a Tier-1 NLU (top 5-6 campuses), the return on investment is extremely strong. Top law firms (Cyril Amarchand Mangaldas, Shardul Amarchand Mangaldas, Khaitan & Co, Trilegal) recruit heavily from these campuses, with starting salaries for associates ranging from ₹12L to ₹18L per annum.",
    s3P2:
      "For lower-tier NLUs, salaries start around ₹5L - ₹8L, and placement rates are less certain. In such cases, qualifying for State Scholarships or MCM waivers is highly recommended to keep your student debt low and secure a favorable financial outcome.",
  },
  hi: {
    crumbExams: "परीक्षाएँ",
    crumbClat: "CLAT",
    crumbHere: "फीस और छात्रवृत्ति",
    sectionLabel: "खंड",
    noteLabel: "नोट:",
    headerTitle: "CLAT — NLU फीस और छात्रवृत्ति",
    s1Title: "NLU में पढ़ाई का खर्च कितना है?",
    s1Intro:
      "National Law Universities (NLUs) स्वायत्त सार्वजनिक संस्थान हैं, लेकिन IITs की तुलना में इन्हें बहुत कम राज्य अनुदान मिलता है। इसके परिणामस्वरूप NLU की फीस अपेक्षाकृत अधिक है, औसतन सालाना ₹2.5L से ₹3.5L। इसमें ट्यूशन, लाइब्रेरी एक्सेस, आवासीय सुविधाएँ और विश्वविद्यालय की सुविधाएँ शामिल हैं।",
    thCampus: "NLU कैंपस",
    thTuition: "ट्यूशन फीस (प्रति वर्ष)",
    thTotal: "अनुमानित कुल वार्षिक लागत (हॉस्टल और मेस सहित)",
    feeRows: [
      { campus: "NLSIU Bangalore (Tier 1)", tuition: "~₹2.75 लाख", total: "~₹3.50 लाख/वर्ष" },
      { campus: "NALSAR Hyderabad (Tier 1)", tuition: "~₹2.40 लाख", total: "~₹3.10 लाख/वर्ष" },
      { campus: "WBNUJS Kolkata (Tier 1)", tuition: "~₹2.50 लाख", total: "~₹3.20 लाख/वर्ष" },
      { campus: "NLU Jodhpur / GNLU Gandhinagar", tuition: "~₹2.50 लाख", total: "~₹3.25 लाख/वर्ष" },
    ],
    s2Title: "उपलब्ध छात्रवृत्ति और वित्तीय सहायता",
    s2Intro:
      "यह सुनिश्चित करने के लिए कि आर्थिक बाधाएँ योग्य उम्मीदवारों को लॉ पढ़ने से न रोकें, कई केंद्रीय, राज्य और संस्थागत सहायता तंत्र मौजूद हैं।",
    sch1Title: "Aditya Birla Scholarship",
    sch1Type: "निजी मेरिट योजना",
    sch1Audience: "NLSIU, NALSAR, NUJS, NLU Jodhpur में दाखिला लेने वाले CLAT के टॉप 20 रैंकर।",
    sch1Desc:
      "अत्यधिक प्रतिष्ठित मेरिट-आधारित छात्रवृत्ति जो ट्यूशन फीस का सालाना ₹1.80 लाख तक कवर करती है। चयन CLAT रैंक सूची के आधार पर होता है, उसके बाद विस्तृत आवेदन समीक्षा और इंटरव्यू राउंड होता है।",
    sch1Note: "5-वर्षीय B.A. LL.B. पाठ्यक्रम के दौरान शीर्ष शैक्षणिक स्थिति और स्वच्छ आचरण बनाए रखना अनिवार्य है।",
    sch2Title: "Central Sector Top Class SC/ST Scheme",
    sch2Type: "सरकारी नीति",
    sch2Audience: "ऐसे SC और ST छात्र जिनके माता-पिता की आय सालाना ₹8.0 लाख से कम है।",
    sch2Desc:
      "Ministry of Social Justice and Empowerment द्वारा वित्तपोषित। यह सभी NLUs में उम्मीदवार की पूरी ट्यूशन फीस कवर करती है, साथ ही ₹3,000/माह निर्वाह भत्ता, ₹5,000/वर्ष पुस्तक भत्ता, और एक बार का ₹45,000 लैपटॉप कंप्यूटर भत्ता देती है।",
    sch2Note: "वैध आय और श्रेणी प्रमाणपत्रों के साथ सीधे National Scholarship Portal (NSP) के माध्यम से आवेदन किया जाता है।",
    sch3Title: "NLU Merit-cum-Means (MCM) Waivers",
    sch3Type: "संस्थागत सहायता",
    sch3Audience: "पारिवारिक आय स्लैब के आधार पर आर्थिक रूप से कमज़ोर छात्र।",
    sch3Desc:
      "शीर्ष NLUs द्वारा अलग-अलग दी जाती है (जैसे NLSIU Financial Aid Scheme, NALSAR Need-based Scholarships)। ये योजनाएँ माता-पिता की आय के आधार पर ट्यूशन फीस में 100% तक की छूट देती हैं (आमतौर पर ₹3.0L, ₹5.0L और ₹8.0L सालाना के स्लैब के अंतर्गत)।",
    sch3Note: "आवेदन पहले सेमेस्टर में संबंधित विश्वविद्यालय के प्रशासन कार्यालयों में खुलते हैं।",
    s3Title: "ईमानदार ROI तस्वीर",
    s3Heading: "क्या NLU ट्यूशन की ऊँची लागत इसके लायक है?",
    s3P1:
      "यदि आप किसी Tier-1 NLU (टॉप 5-6 कैंपस) में सीट पा लेते हैं, तो निवेश पर रिटर्न बेहद मज़बूत है। शीर्ष लॉ फर्म (Cyril Amarchand Mangaldas, Shardul Amarchand Mangaldas, Khaitan & Co, Trilegal) इन कैंपस से बड़ी संख्या में भर्ती करती हैं, जहाँ एसोसिएट्स का शुरुआती वेतन सालाना ₹12L से ₹18L तक होता है।",
    s3P2:
      "निचले स्तर के NLUs के लिए वेतन लगभग ₹5L - ₹8L से शुरू होता है, और प्लेसमेंट दर कम निश्चित होती है। ऐसे मामलों में, छात्र ऋण कम रखने और बेहतर वित्तीय परिणाम सुनिश्चित करने के लिए State Scholarships या MCM छूट के लिए योग्य होना अत्यधिक अनुशंसित है।",
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
          <pattern id="clat-scholarships-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#10b981" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#clat-scholarships-grid)" />
      </svg>
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-teal-500/5 rounded-full blur-[60px]" />

      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="clat-sch-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="clat-sch-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#clat-sch-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#clat-sch-wave-grad-2)" />
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
      <div className="inline-block px-3 py-1 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-300 text-xs font-black uppercase tracking-wider rounded-full mb-4">
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

export default function ClatScholarshipsPage() {
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

          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl my-8">
            <table className="w-full text-left border-collapse min-w-[600px] bg-white dark:bg-slate-800/50">
              <thead className="bg-slate-50 dark:bg-slate-800/40">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    {t.thCampus}
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    {t.thTuition}
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    {t.thTotal}
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
                        {row.campus}
                      </td>
                      <td className={`p-4 text-slate-700 dark:text-slate-300 font-medium ${border}`}>
                        {row.tuition}
                      </td>
                      <td className={`p-4 text-emerald-600 font-black ${border}`}>
                        {row.total}
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
            {t.s2Intro}
          </p>

          <ScholarshipCard
            title={t.sch1Title}
            type={t.sch1Type}
            audience={t.sch1Audience}
            description={t.sch1Desc}
            note={t.sch1Note}
            noteLabel={t.noteLabel}
          />

          <ScholarshipCard
            title={t.sch2Title}
            type={t.sch2Type}
            audience={t.sch2Audience}
            description={t.sch2Desc}
            note={t.sch2Note}
            noteLabel={t.noteLabel}
          />

          <ScholarshipCard
            title={t.sch3Title}
            type={t.sch3Type}
            audience={t.sch3Audience}
            description={t.sch3Desc}
            note={t.sch3Note}
            noteLabel={t.noteLabel}
          />
        </Section>

        <Section number="03" label={t.sectionLabel} title={t.s3Title}>
          <div className="p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40 mb-6">
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
