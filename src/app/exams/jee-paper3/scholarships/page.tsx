"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    crumbExams: "Exams",
    crumbJee: "JEE Paper 3",
    crumbHere: "Fees & Seats",
    headerTitle: "JEE Paper 3 — SPA Fees & Seats",
    sectionLabel: "Section",
    s1Title: "Subsidized SPA Fee Structure",
    s1Body:
      "The School of Planning and Architecture (SPAs) are institutes of national importance funded directly by the Central Government. As a result, B.Planning education at SPAs is highly subsidized, costing approximately Rs 1.0L to Rs 1.8L per annum in tuition and academic charges.",
    thInstitute: "Institute Name",
    thSemFee: "Tuition Fees (Per Semester)",
    thTotalFee: "Approx. Total Fees (4 Years)",
    feeRows: [
      { institute: "SPA Delhi", sem: "~Rs 45,000 / semester", total: "~Rs 4.80 lakhs total" },
      { institute: "SPA Bhopal", sem: "~Rs 50,000 / semester", total: "~Rs 5.10 lakhs total" },
      { institute: "SPA Vijayawada", sem: "~Rs 45,000 / semester", total: "~Rs 4.80 lakhs total" },
      { institute: "Top NITs (e.g. NIT Calicut, VNIT Nagpur)", sem: "~Rs 62,500 / semester", total: "~Rs 6.20 lakhs total" },
    ],
    s2Title: "Available Scholarships & Fee Relief",
    s2Body:
      "B.Planning aspirants admitted through JoSAA/CSAB counselling can access a series of fee waivers and merit-cum-means financial aid.",
    noteLabel: "Note:",
    sch1Title: "SC, ST and PwD Tuition Waiver",
    sch1Type: "Government Policy",
    sch1Audience: "All SC, ST, and PwD candidates in Central Government Technical Institutes.",
    sch1Desc:
      "Under Central Ministry mandates, all SC, ST, and PwD students admitted to SPAs and NITs receive a complete (100%) waiver on their tuition fees. They are only responsible for hostel rent, mess fees, and security deposits.",
    sch1Note: "No income barrier applies for the category tuition waiver.",
    sch2Title: "Central Sector Top Class SC/ST Scheme",
    sch2Type: "Government Policy",
    sch2Audience: "Category candidates with household income below Rs 8.0 lakhs per annum.",
    sch2Desc:
      "Covers full tuition fees at SPAs and NITs. Also provides a monthly hostel/boarding allowance (up to Rs 3,000/mo), books and stationery allowance of Rs 3,000/year, and a one-time computer grant of Rs 45,000.",
    sch2Note: "Applied directly via the National Scholarship Portal with valid category and income certificates.",
    sch3Title: "SPA Merit-cum-Means (MCM) Scholarship",
    sch3Type: "Institutional Award",
    sch3Audience: "General and OBC category students. Need-based.",
    sch3Desc:
      "Offered directly by SPA Delhi, Bhopal, and Vijayawada. It grants a tuition fee waiver to up to 25% of UG students whose parental income does not exceed Rs 4.5 lakhs per annum.",
    sch3Note: "Must maintain a cumulative CGPA of 6.0 or above with zero active backlogs to continue the waiver.",
    s3Title: "The Honest ROI Picture",
    s3Heading: "Return on Investment for B.Plan graduates",
    s3P1:
      "Urban planning is a specialized profession. SPA graduates are hired by real estate consulting firms (JLL, CBRE, Knight Frank), infrastructure giants (L&T, Tata Consulting Engineers), and consulting agencies (PwC, EY). Starting salaries average Rs 5L to Rs 8L per annum.",
    s3P2:
      "Because SPA tuition fees are heavily subsidized (~Rs 4.8L for 4 years), the debt burden is low, leading to a quick payback period. For students from lower-income backgrounds, utilizing the institutional MCM waivers or government schemes makes B.Planning one of the most cost-effective and financially secure creative-technical paths in the country.",
  },
  hi: {
    crumbExams: "परीक्षाएँ",
    crumbJee: "JEE पेपर 3",
    crumbHere: "फीस और सीटें",
    headerTitle: "JEE पेपर 3 — SPA फीस और सीटें",
    sectionLabel: "खंड",
    s1Title: "रियायती SPA फीस संरचना",
    s1Body:
      "School of Planning and Architecture (SPA) राष्ट्रीय महत्व के संस्थान हैं जिन्हें केंद्र सरकार सीधे वित्तपोषित करती है। नतीजतन, SPA में B.Planning शिक्षा अत्यधिक रियायती है, जिसमें ट्यूशन और शैक्षणिक शुल्क लगभग Rs 1.0L से Rs 1.8L प्रति वर्ष आता है।",
    thInstitute: "संस्थान का नाम",
    thSemFee: "ट्यूशन फीस (प्रति सेमेस्टर)",
    thTotalFee: "अनुमानित कुल फीस (4 वर्ष)",
    feeRows: [
      { institute: "SPA Delhi", sem: "~Rs 45,000 / सेमेस्टर", total: "~Rs 4.80 लाख कुल" },
      { institute: "SPA Bhopal", sem: "~Rs 50,000 / सेमेस्टर", total: "~Rs 5.10 लाख कुल" },
      { institute: "SPA Vijayawada", sem: "~Rs 45,000 / सेमेस्टर", total: "~Rs 4.80 लाख कुल" },
      { institute: "टॉप NIT (जैसे NIT Calicut, VNIT Nagpur)", sem: "~Rs 62,500 / सेमेस्टर", total: "~Rs 6.20 लाख कुल" },
    ],
    s2Title: "उपलब्ध छात्रवृत्तियाँ और फीस राहत",
    s2Body:
      "JoSAA/CSAB काउंसलिंग के ज़रिए प्रवेश पाने वाले B.Planning अभ्यर्थी कई फीस माफ़ी और merit-cum-means वित्तीय सहायता का लाभ ले सकते हैं।",
    noteLabel: "नोट:",
    sch1Title: "SC, ST और PwD ट्यूशन माफ़ी",
    sch1Type: "सरकारी नीति",
    sch1Audience: "केंद्र सरकार के तकनीकी संस्थानों में सभी SC, ST और PwD अभ्यर्थी।",
    sch1Desc:
      "केंद्रीय मंत्रालय के आदेशों के तहत, SPA और NIT में प्रवेश पाने वाले सभी SC, ST और PwD छात्रों को उनकी ट्यूशन फीस पर पूर्ण (100%) माफ़ी मिलती है। वे केवल हॉस्टल किराया, मेस शुल्क और सुरक्षा जमा के लिए ज़िम्मेदार होते हैं।",
    sch1Note: "श्रेणी ट्यूशन माफ़ी के लिए कोई आय सीमा लागू नहीं होती।",
    sch2Title: "Central Sector Top Class SC/ST योजना",
    sch2Type: "सरकारी नीति",
    sch2Audience: "Rs 8.0 लाख प्रति वर्ष से कम घरेलू आय वाले श्रेणी अभ्यर्थी।",
    sch2Desc:
      "SPA और NIT में पूरी ट्यूशन फीस कवर करती है। साथ ही मासिक हॉस्टल/बोर्डिंग भत्ता (Rs 3,000/माह तक), Rs 3,000/वर्ष किताब व स्टेशनरी भत्ता, और Rs 45,000 का एकमुश्त कंप्यूटर अनुदान देती है।",
    sch2Note: "वैध श्रेणी और आय प्रमाणपत्रों के साथ सीधे National Scholarship Portal के ज़रिए आवेदन किया जाता है।",
    sch3Title: "SPA Merit-cum-Means (MCM) छात्रवृत्ति",
    sch3Type: "संस्थागत पुरस्कार",
    sch3Audience: "सामान्य और OBC श्रेणी के छात्र। आवश्यकता-आधारित।",
    sch3Desc:
      "SPA Delhi, Bhopal और Vijayawada द्वारा सीधे दी जाती है। यह उन 25% तक UG छात्रों को ट्यूशन फीस माफ़ी देती है जिनकी माता-पिता की आय Rs 4.5 लाख प्रति वर्ष से अधिक नहीं है।",
    sch3Note: "माफ़ी जारी रखने के लिए शून्य सक्रिय बैकलॉग के साथ 6.0 या उससे अधिक की संचयी CGPA बनाए रखनी होगी।",
    s3Title: "ईमानदार ROI तस्वीर",
    s3Heading: "B.Plan स्नातकों के लिए निवेश पर प्रतिफल",
    s3P1:
      "अर्बन प्लानिंग एक विशेष पेशा है। SPA स्नातकों को रियल एस्टेट कंसल्टिंग फर्म (JLL, CBRE, Knight Frank), इन्फ्रास्ट्रक्चर दिग्गज (L&T, Tata Consulting Engineers), और कंसल्टिंग एजेंसियाँ (PwC, EY) भर्ती करती हैं। शुरुआती वेतन औसतन Rs 5L से Rs 8L प्रति वर्ष होता है।",
    s3P2:
      "चूँकि SPA ट्यूशन फीस अत्यधिक रियायती है (~Rs 4.8L 4 वर्षों के लिए), कर्ज़ का बोझ कम होता है, जिससे जल्दी पेबैक अवधि मिलती है। कम-आय पृष्ठभूमि के छात्रों के लिए, संस्थागत MCM माफ़ी या सरकारी योजनाओं का उपयोग B.Planning को देश के सबसे किफ़ायती और वित्तीय रूप से सुरक्षित रचनात्मक-तकनीकी मार्गों में से एक बना देता है।",
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
          <pattern id="jee-scholarships-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0d9488" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#jee-scholarships-grid)" />
      </svg>
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[60px]" />

      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="jee-sch-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d9488" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="jee-sch-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#jee-sch-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#jee-sch-wave-grad-2)" />
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

const ScholarshipCard = ({
  title,
  type,
  audience,
  description,
  noteLabel,
  note,
}: {
  title: string;
  type: string;
  audience: string;
  description: React.ReactNode;
  noteLabel: string;
  note?: string;
}) => (
  <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 bg-white dark:bg-slate-800/50 shadow-sm mb-6 flex flex-col md:flex-row gap-8">
    <div className="md:w-1/3">
      <div className="inline-block px-3 py-1 bg-teal-50 dark:bg-teal-950/30 text-teal-600 dark:text-teal-300 text-xs font-black uppercase tracking-wider rounded-full mb-4">
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

export default function JeePaper3ScholarshipsPage() {
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

          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl my-8">
            <table className="w-full text-left border-collapse min-w-[600px] bg-white dark:bg-slate-800/50">
              <thead className="bg-slate-50 dark:bg-slate-800/40">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    {t.thInstitute}
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    {t.thSemFee}
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    {t.thTotalFee}
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
                        {row.institute}
                      </td>
                      <td className={`p-4 text-slate-700 dark:text-slate-300 font-medium ${border}`}>
                        {row.sem}
                      </td>
                      <td className={`p-4 text-teal-600 dark:text-teal-300 font-black ${border}`}>
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
            {t.s2Body}
          </p>

          <ScholarshipCard
            title={t.sch1Title}
            type={t.sch1Type}
            audience={t.sch1Audience}
            description={t.sch1Desc}
            noteLabel={t.noteLabel}
            note={t.sch1Note}
          />

          <ScholarshipCard
            title={t.sch2Title}
            type={t.sch2Type}
            audience={t.sch2Audience}
            description={t.sch2Desc}
            noteLabel={t.noteLabel}
            note={t.sch2Note}
          />

          <ScholarshipCard
            title={t.sch3Title}
            type={t.sch3Type}
            audience={t.sch3Audience}
            description={t.sch3Desc}
            noteLabel={t.noteLabel}
            note={t.sch3Note}
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
