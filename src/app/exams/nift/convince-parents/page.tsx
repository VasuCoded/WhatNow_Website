"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    crumbExams: "Exams",
    crumbNift: "NIFT",
    crumbHere: "Convince Parents",
    headerTitle: "NIFT — Talking to Your Parents",
    sectionLabel: "Section",
    s1Title: "Objection 1: 'Fashion has no job security'",
    s1Body:
      "Many parents associate fashion design with boutique tailor shops. Highlight the size of the Indian Apparel Export and Retail sectors.",
    s1CardTitle: "The Counter-Argument:",
    s1CardBody:
      "India is the world's second-largest textile exporter. NIFT is an institute set up under the Act of Parliament (Ministry of Textiles). Brand groups like Reliance Retail, Aditya Birla Fashion, Landmark, and Shahi Exports operate multi-billion dollar retail logistics chains that depend on NIFT graduates to manage merchandising, purchasing, and production.",
    s2Title: "Objection 2: 'Is the pay too low?'",
    s2Body: "Parents worry starting packages are too low to sustain metro city living.",
    thRole: "Role at Brand / Export House",
    thStart: "Starting Salary Range",
    thMid: "Mid-Career Salary (5 Yrs Exp)",
    rows: [
      { role: "Fashion Merchandiser / Buyer", start: "₹4.5L - ₹7.0L/yr", mid: "₹9.0L - ₹15.0L/yr" },
      { role: "Apparel Production Manager", start: "₹4.0L - ₹6.5L/yr", mid: "₹8.0L - ₹12.0L/yr" },
      { role: "Visual Merchandiser / Retail Planner", start: "₹3.5L - ₹5.5L/yr", mid: "₹7.5L - ₹11.5L/yr" },
    ],
    s3Title: "Frame it as Retail Management",
    s3CardTitle: "Talking about career longevity",
    s3CardP1:
      "Objection-handling tip: Frame your course selection (especially B.FTech or Fashion Management/Merchandising) as a Retail Operations & Logistics degree. Explain that you will be managing material flow, vendor negotiation, and purchase planning.",
    s3CardP2:
      "If you study at a premier campus (NIFT Delhi, Mumbai, Bengaluru), campus placements are highly institutionalized, offering security and a clear corporate growth trajectory.",
  },
  hi: {
    crumbExams: "परीक्षाएँ",
    crumbNift: "NIFT",
    crumbHere: "माता-पिता को मनाएँ",
    headerTitle: "NIFT — अपने माता-पिता से बात करना",
    sectionLabel: "खंड",
    s1Title: "आपत्ति 1: 'फ़ैशन में नौकरी की कोई सुरक्षा नहीं'",
    s1Body:
      "कई माता-पिता फ़ैशन डिज़ाइन को बुटीक टेलर की दुकानों से जोड़ते हैं। भारतीय अपैरल एक्सपोर्ट और रिटेल सेक्टर के आकार को उजागर करें।",
    s1CardTitle: "जवाबी तर्क:",
    s1CardBody:
      "भारत दुनिया का दूसरा सबसे बड़ा टेक्सटाइल निर्यातक है। NIFT संसद के अधिनियम (वस्त्र मंत्रालय) के तहत स्थापित एक संस्थान है। Reliance Retail, Aditya Birla Fashion, Landmark और Shahi Exports जैसे ब्रांड समूह अरबों डॉलर की रिटेल लॉजिस्टिक्स चेन चलाते हैं, जो मर्चेंडाइज़िंग, परचेज़िंग और प्रोडक्शन संभालने के लिए NIFT स्नातकों पर निर्भर हैं।",
    s2Title: "आपत्ति 2: 'क्या वेतन बहुत कम है?'",
    s2Body: "माता-पिता को चिंता रहती है कि शुरुआती पैकेज मेट्रो शहर में रहने के लिए बहुत कम हैं।",
    thRole: "ब्रांड / एक्सपोर्ट हाउस में भूमिका",
    thStart: "शुरुआती वेतन सीमा",
    thMid: "मिड-करियर वेतन (5 वर्ष अनुभव)",
    rows: [
      { role: "फ़ैशन मर्चेंडाइज़र / बायर", start: "₹4.5L - ₹7.0L/वर्ष", mid: "₹9.0L - ₹15.0L/वर्ष" },
      { role: "अपैरल प्रोडक्शन मैनेजर", start: "₹4.0L - ₹6.5L/वर्ष", mid: "₹8.0L - ₹12.0L/वर्ष" },
      { role: "विज़ुअल मर्चेंडाइज़र / रिटेल प्लानर", start: "₹3.5L - ₹5.5L/वर्ष", mid: "₹7.5L - ₹11.5L/वर्ष" },
    ],
    s3Title: "इसे रिटेल मैनेजमेंट के रूप में पेश करें",
    s3CardTitle: "करियर की दीर्घायु के बारे में बात करना",
    s3CardP1:
      "आपत्ति-निपटान युक्ति: अपने कोर्स चयन (विशेषकर B.FTech या फ़ैशन मैनेजमेंट/मर्चेंडाइज़िंग) को रिटेल ऑपरेशंस और लॉजिस्टिक्स डिग्री के रूप में पेश करें। समझाएँ कि आप मटेरियल फ़्लो, वेंडर मोलभाव और परचेज़ प्लानिंग संभालेंगे।",
    s3CardP2:
      "अगर आप किसी प्रमुख कैंपस (NIFT दिल्ली, मुंबई, बेंगलुरु) में पढ़ते हैं, तो कैंपस प्लेसमेंट अत्यधिक संस्थागत होते हैं, जो सुरक्षा और एक स्पष्ट कॉर्पोरेट वृद्धि का रास्ता प्रदान करते हैं।",
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
          <pattern id="nift-convince-parents-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ec4899" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#nift-convince-parents-grid)" />
      </svg>
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-pink-500/5 rounded-full blur-[60px]" />

      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="nift-cp-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="nift-cp-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff5a1f" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#ff5a1f" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#nift-cp-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#nift-cp-wave-grad-2)" />
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

export default function NiftConvinceParentsPage() {
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
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 space-y-4 mb-6">
            <h4 className="font-black text-xl text-neutral-dark dark:text-slate-100">{t.s1CardTitle}</h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
              {t.s1CardBody}
            </p>
          </div>
        </Section>

        <Section number="02" label={t.sectionLabel} title={t.s2Title}>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            {t.s2Body}
          </p>
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl my-8">
            <table className="w-full text-left border-collapse min-w-[600px] bg-white dark:bg-slate-800/50">
              <thead className="bg-slate-50 dark:bg-slate-800/40">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    {t.thRole}
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    {t.thStart}
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    {t.thMid}
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
                        {row.role}
                      </td>
                      <td className={`p-4 text-emerald-600 font-black ${border}`}>
                        {row.start}
                      </td>
                      <td className={`p-4 text-slate-600 dark:text-slate-400 font-medium ${border}`}>
                        {row.mid}
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
            <h3 className="text-xl font-black text-neutral-dark dark:text-slate-100 mb-4">
              {t.s3CardTitle}
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-4">
              {t.s3CardP1}
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
              {t.s3CardP2}
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}
