"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    crumbExams: "Exams",
    crumbImuCet: "IMU CET",
    crumbHere: "Convince Parents",
    headerTitle: "IMU CET — Talking to Your Parents",
    sectionLabel: "Section",
    s1Title: "Objection 1: 'Merchant Navy is physically risky and unsafe'",
    s1Body: "Parents worry about maritime accidents or health emergencies far from land.",
    s1CounterHeading: "The Counter-Argument:",
    s1CounterBody:
      "Modern cargo fleets operate under strict international safety regulations (SOLAS, MARPOL) set by the United Nations' IMO. Ships have advanced communication networks, medical training for officers, and dedicated onboard telemedicine services. Furthermore, physical screening rules prevent candidates with chronic medical issues from enrolling, ensuring a highly resilient and safe crew.",
    s2Title: "Objection 2: 'Is there career stability?'",
    s2Body: "Explain the Company Sponsorship security and the tax advantages:",
    thRank: "Sailing Rank",
    thSalary: "Monthly Salary (USD)",
    thTax: "Tax Status (NRI)",
    rows: [
      {
        rank: "Deck Cadet (During Sea Training)",
        salary: "$350 - $600/month",
        tax: "Tax-Free (stipend)",
      },
      {
        rank: "Third Officer / Fourth Engineer",
        salary: "$2,200 - $3,500/month",
        tax: "100% Tax-Free (under NRI status)",
      },
      {
        rank: "Chief Officer / Second Engineer",
        salary: "$6,000 - $8,500/month",
        tax: "100% Tax-Free",
      },
    ],
    s3Title: "Guaranteed Placement via Sponsorship",
    s3Heading: "Talking about employment security",
    s3Body1Pre:
      "Unlike normal college placement drives, if you secure a ",
    s3Body1Strong: "shipping company sponsorship",
    s3Body1Post:
      " before joining a Diploma in Nautical Science (DNS) or B.Sc course, your employment is legally secured by that shipping line.",
    s3Body2:
      "They pay for/subsidize your training and place you directly on their ships. This removes any job hunt stress, offering absolute peace of mind for middle-class parents concerned about placements.",
  },
  hi: {
    crumbExams: "परीक्षाएँ",
    crumbImuCet: "IMU CET",
    crumbHere: "माता-पिता को समझाएँ",
    headerTitle: "IMU CET — अपने माता-पिता से बात करना",
    sectionLabel: "खंड",
    s1Title: "आपत्ति 1: 'मर्चेंट नेवी शारीरिक रूप से जोखिमपूर्ण और असुरक्षित है'",
    s1Body: "माता-पिता समुद्री दुर्घटनाओं या ज़मीन से दूर स्वास्थ्य आपात स्थितियों को लेकर चिंतित होते हैं।",
    s1CounterHeading: "जवाबी तर्क:",
    s1CounterBody:
      "आधुनिक कार्गो बेड़े संयुक्त राष्ट्र के IMO द्वारा निर्धारित सख़्त अंतरराष्ट्रीय सुरक्षा नियमों (SOLAS, MARPOL) के तहत संचालित होते हैं। जहाज़ों में उन्नत संचार नेटवर्क, अधिकारियों के लिए मेडिकल प्रशिक्षण और समर्पित ऑनबोर्ड टेलीमेडिसिन सेवाएँ होती हैं। इसके अलावा, शारीरिक स्क्रीनिंग नियम पुरानी मेडिकल समस्याओं वाले उम्मीदवारों को नामांकन से रोकते हैं, जिससे एक अत्यंत मज़बूत और सुरक्षित चालक दल सुनिश्चित होता है।",
    s2Title: "आपत्ति 2: 'क्या करियर में स्थिरता है?'",
    s2Body: "कंपनी स्पॉन्सरशिप की सुरक्षा और टैक्स लाभों के बारे में समझाएँ:",
    thRank: "नौवहन रैंक",
    thSalary: "मासिक वेतन (USD)",
    thTax: "टैक्स स्थिति (NRI)",
    rows: [
      {
        rank: "डेक कैडेट (सी ट्रेनिंग के दौरान)",
        salary: "$350 - $600/माह",
        tax: "टैक्स-फ्री (स्टाइपेंड)",
      },
      {
        rank: "थर्ड ऑफिसर / फोर्थ इंजीनियर",
        salary: "$2,200 - $3,500/माह",
        tax: "100% टैक्स-फ्री (NRI स्थिति के तहत)",
      },
      {
        rank: "चीफ ऑफिसर / सेकंड इंजीनियर",
        salary: "$6,000 - $8,500/माह",
        tax: "100% टैक्स-फ्री",
      },
    ],
    s3Title: "स्पॉन्सरशिप के ज़रिए गारंटीड प्लेसमेंट",
    s3Heading: "रोज़गार सुरक्षा के बारे में बात करना",
    s3Body1Pre:
      "सामान्य कॉलेज प्लेसमेंट ड्राइव के विपरीत, यदि आप डिप्लोमा इन नॉटिकल साइंस (DNS) या B.Sc कोर्स में शामिल होने से पहले ",
    s3Body1Strong: "किसी शिपिंग कंपनी की स्पॉन्सरशिप",
    s3Body1Post:
      " हासिल कर लेते हैं, तो आपका रोज़गार उस शिपिंग लाइन द्वारा कानूनी रूप से सुरक्षित हो जाता है।",
    s3Body2:
      "वे आपके प्रशिक्षण का खर्च उठाते/सब्सिडी देते हैं और आपको सीधे अपने जहाज़ों पर तैनात करते हैं। इससे नौकरी ढूँढने का कोई तनाव नहीं रहता, जो प्लेसमेंट को लेकर चिंतित मध्यमवर्गीय माता-पिता के लिए पूर्ण मानसिक शांति देता है।",
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
          <pattern id="imucet-convince-parents-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ea580c" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#imucet-convince-parents-grid)" />
      </svg>
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-sky-500/5 rounded-full blur-[60px]" />

      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="imucet-cp-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="imucet-cp-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#imucet-cp-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#imucet-cp-wave-grad-2)" />
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80" stroke="#ea580c" strokeWidth="1.5" strokeOpacity="0.1" />
        <path d="M0,240 C480,120 960,320 1440,160" stroke="#0ea5e9" strokeWidth="1.5" strokeOpacity="0.05" strokeDasharray="6 6" />
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
      <div className="text-orange-600 font-black text-sm uppercase tracking-widest mb-4">
        {label} {number}
      </div>
      <h2 className="text-3xl md:text-4xl font-black mb-8 text-neutral-dark tracking-tight">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

export default function ImuCetConvinceParentsPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C] min-h-screen">
      <PageHeader
        title={t.headerTitle}
        breadcrumbs={
          <>
            <Link href="/exams" className="hover:text-orange-600 transition-colors">
              {t.crumbExams}
            </Link>{" "}
            <span>›</span>
            <Link href="/exams/imu-cet" className="hover:text-orange-600 transition-colors">
              {t.crumbImuCet}
            </Link>{" "}
            <span>›</span>
            <span className="text-orange-600">{t.crumbHere}</span>
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
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl my-8">
            <table className="w-full text-left border-collapse min-w-[600px] bg-white dark:bg-slate-800/50">
              <thead className="bg-slate-50 dark:bg-slate-800/40">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    {t.thRank}
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    {t.thSalary}
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    {t.thTax}
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
                        {row.rank}
                      </td>
                      <td className={`p-4 text-emerald-600 font-black ${border}`}>
                        {row.salary}
                      </td>
                      <td className={`p-4 text-slate-600 dark:text-slate-400 font-medium ${border}`}>
                        {row.tax}
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
              {t.s3Body1Pre}<strong className="font-black">{t.s3Body1Strong}</strong>{t.s3Body1Post}
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
              {t.s3Body2}
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}
