"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    crumbExams: "Exams",
    crumbHere: "Convince Parents",
    sectionLabel: "Section",
    headerTitle: "UCEED — Talking to Your Parents",
    s1Title: "Objection 1: 'Design is not a stable career'",
    s1Intro: "Many parents associate the word design with boutique dressmakers or sketching logos. You must frame it as Creative Technology (UI/UX).",
    s1CounterHeading: "The Counter-Argument:",
    s1CounterBody: "Every app, software, banking portal, and website requires digital designers to function. It is a core tech job. Frame it as software engineering for the user interface. UI/UX design is one of the highest-paying and fastest-growing segments in the Indian IT sector.",
    s2Title: "Objection 2: 'Why not B.Tech instead?'",
    s2Intro: "In India, the IIT brand is highly prestigious. Parents feel B.Tech is the only real degree offered by IITs.",
    thMetric: "Metric",
    thBDes: "IIT B.Des (Design)",
    thBTech: "Average B.Tech (Mid-Tier)",
    rows: [
      { metric: "Starting Salary Range", bdes: "₹10L - ₹18L per annum", btech: "₹6L - ₹10L per annum" },
      { metric: "Brand Value", bdes: "Identical IIT Graduate Tag", btech: "State/Private college tag" },
      { metric: "Major Recruiters", bdes: "Google, Microsoft, Samsung, Adobe", btech: "TCS, Infosys, Cognizant" },
    ],
    s3Title: "Objection 3: 'Is B.Des a real degree?'",
    s3Heading: "Providing Institutional Security",
    s3p1: "Show your parents the official IIT placements portals. Highlight that B.Des students share the same hostel rooms, same placement office, and same alumni network as B.Tech computer science students.",
    s3p2: "If they qualify for fee concessions based on family income, the same rules apply. Pursuing a B.Des at an IIT is a safe, high-paying, and prestigious career choice that offers immediate entry into top tech firms.",
    s3WarnPre: "On the it's too expensive objection: SC/ST/PwD students get full tuition waiver — the four-year program at IIT Bombay costs roughly ₹82,500 total rather than the full ₹8.83 lakhs. For families with annual income under ₹5 lakh, the MCM scholarship covers full tuition regardless of category. See the ",
    s3WarnLink: "Scholarships page",
    s3WarnPost: " on this site for the complete breakdown.",
    s4Title: "When the counsellor argues your side",
    s4Quote: "My parents were very against UCEED from the start. I even went to join Allen. The counsellor there actually ended up convincing them. I even tried to say no, that I'd be fine doing engineering — but they were set on UCEED after whatever the counsellor said.",
    s4Attr: "— A UCEED 2026 qualifier, in conversation with WhatNow",
    s4p1: "The pushback on UCEED doesn't always come from parents being closed-minded. Sometimes it comes from genuine uncertainty — about stability, about prestige, about whether design is a real career. That uncertainty is reasonable.",
    s4p2: "What's interesting is that even traditional coaching institute counsellors — who have every financial incentive to push engineering preparation — sometimes see the value in design for the right student.",
    s4p3: "The implication: if your parents trust a specific authority figure — a family friend in a relevant field, a counsellor, a senior whose opinion they respect — that endorsement may carry more weight than your own argument. Find that person and have the conversation with them first.",
  },
  hi: {
    crumbExams: "परीक्षाएँ",
    crumbHere: "माता-पिता को मनाएँ",
    sectionLabel: "खंड",
    headerTitle: "UCEED — अपने माता-पिता से बात करना",
    s1Title: "आपत्ति 1: 'डिज़ाइन कोई स्थिर करियर नहीं है'",
    s1Intro: "कई माता-पिता डिज़ाइन शब्द को बुटीक के दर्ज़ी या लोगो स्केच करने से जोड़ते हैं। आपको इसे Creative Technology (UI/UX) के रूप में पेश करना होगा।",
    s1CounterHeading: "जवाबी तर्क:",
    s1CounterBody: "हर ऐप, सॉफ़्टवेयर, बैंकिंग पोर्टल, और वेबसाइट को चलने के लिए डिजिटल डिज़ाइनर चाहिए। यह एक मूल टेक नौकरी है। इसे यूज़र इंटरफ़ेस के लिए सॉफ़्टवेयर इंजीनियरिंग के रूप में पेश करें। UI/UX डिज़ाइन भारतीय IT सेक्टर के सबसे ज़्यादा वेतन वाले और सबसे तेज़ी से बढ़ते क्षेत्रों में से एक है।",
    s2Title: "आपत्ति 2: 'B.Tech क्यों नहीं?'",
    s2Intro: "भारत में, IIT ब्रांड बेहद प्रतिष्ठित है। माता-पिता को लगता है कि B.Tech ही IITs द्वारा दी जाने वाली एकमात्र असली डिग्री है।",
    thMetric: "मापदंड",
    thBDes: "IIT B.Des (Design)",
    thBTech: "औसत B.Tech (मिड-टियर)",
    rows: [
      { metric: "शुरुआती सैलरी रेंज", bdes: "₹10L - ₹18L सालाना", btech: "₹6L - ₹10L सालाना" },
      { metric: "ब्रांड वैल्यू", bdes: "वही IIT Graduate टैग", btech: "राज्य/निजी कॉलेज टैग" },
      { metric: "प्रमुख रिक्रूटर", bdes: "Google, Microsoft, Samsung, Adobe", btech: "TCS, Infosys, Cognizant" },
    ],
    s3Title: "आपत्ति 3: 'क्या B.Des असली डिग्री है?'",
    s3Heading: "संस्थागत सुरक्षा देना",
    s3p1: "अपने माता-पिता को आधिकारिक IIT प्लेसमेंट पोर्टल दिखाएँ। यह बताएँ कि B.Des छात्र वही हॉस्टल कमरे, वही प्लेसमेंट ऑफ़िस, और वही एल्युमनाई नेटवर्क साझा करते हैं जो B.Tech कंप्यूटर साइंस के छात्र करते हैं।",
    s3p2: "अगर वे पारिवारिक आय के आधार पर फीस रियायत के पात्र हैं, तो वही नियम लागू होते हैं। किसी IIT में B.Des करना एक सुरक्षित, ज़्यादा वेतन वाला, और प्रतिष्ठित करियर विकल्प है जो शीर्ष टेक फ़र्मों में तुरंत प्रवेश देता है।",
    s3WarnPre: "यह बहुत महँगा है वाली आपत्ति पर: SC/ST/PwD छात्रों को पूरी ट्यूशन छूट मिलती है — IIT Bombay में चार-वर्षीय प्रोग्राम की लागत पूरी ₹8.83 लाख के बजाय करीब ₹82,500 कुल पड़ती है। ₹5 लाख से कम वार्षिक आय वाले परिवारों के लिए, MCM छात्रवृत्ति कैटेगरी की परवाह किए बिना पूरी ट्यूशन कवर करती है। पूरे ब्यौरे के लिए इस साइट पर ",
    s3WarnLink: "छात्रवृत्ति पेज",
    s3WarnPost: " देखें।",
    s4Title: "जब काउंसलर आपके पक्ष में बहस करता है",
    s4Quote: "मेरे माता-पिता शुरू से ही UCEED के बहुत खिलाफ़ थे। मैं तो Allen जॉइन करने भी गया था। वहाँ के काउंसलर ने ही आख़िरकार उन्हें मना लिया। मैंने तो कहने की कोशिश भी की कि नहीं, मैं इंजीनियरिंग करके भी ठीक रहूँगा — पर काउंसलर ने जो कुछ कहा उसके बाद वे UCEED पर अड़ गए।",
    s4Attr: "— एक UCEED 2026 क्वालिफ़ायर, WhatNow से बातचीत में",
    s4p1: "UCEED पर विरोध हमेशा माता-पिता के संकीर्ण सोच से नहीं आता। कभी-कभी यह असली अनिश्चितता से आता है — स्थिरता को लेकर, प्रतिष्ठा को लेकर, इस बात को लेकर कि क्या डिज़ाइन एक असली करियर है। वह अनिश्चितता वाजिब है।",
    s4p2: "दिलचस्प बात यह है कि पारंपरिक कोचिंग संस्थान के काउंसलर भी — जिनके पास इंजीनियरिंग की तैयारी को बढ़ावा देने का हर आर्थिक कारण है — सही छात्र के लिए कभी-कभी डिज़ाइन में मूल्य देख लेते हैं।",
    s4p3: "इसका मतलब: अगर आपके माता-पिता किसी ख़ास प्राधिकारी पर भरोसा करते हैं — संबंधित क्षेत्र का कोई पारिवारिक मित्र, कोई काउंसलर, कोई सीनियर जिसकी राय वे आदर करते हैं — तो वह समर्थन आपके अपने तर्क से ज़्यादा वज़न रख सकता है। उस व्यक्ति को ढूँढें और पहले उनसे बात करें।",
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
          <pattern id="uceed-convince-parents-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ff5a1f" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#uceed-convince-parents-grid)" />
      </svg>
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-[#ff5a1f]/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[60px]" />

      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="uceed-cp-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff5a1f" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ff5a1f" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="uceed-cp-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d97706" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#uceed-cp-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#uceed-cp-wave-grad-2)" />
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80" stroke="#ff5a1f" strokeWidth="1.5" strokeOpacity="0.1" />
        <path d="M0,240 C480,120 960,320 1440,160" stroke="#d97706" strokeWidth="1.5" strokeOpacity="0.05" strokeDasharray="6 6" />
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

export default function UceedConvinceParentsPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C] min-h-screen">
      <PageHeader
        title={t.headerTitle}
        breadcrumbs={
          <>
            <Link href="/exams" className="hover:text-primary transition-colors">
              {t.crumbExams}
            </Link>{" "}
            <span>›</span>
            <Link href="/exams/uceed" className="hover:text-primary transition-colors">
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
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 space-y-4 mb-6">
            <h4 className="font-black text-xl text-neutral-dark">{t.s1CounterHeading}</h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
              {t.s1CounterBody}
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
                    {t.thBDes}
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    {t.thBTech}
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
                        {row.metric}
                      </td>
                      <td className={`p-4 text-emerald-600 font-black ${border}`}>
                        {row.bdes}
                      </td>
                      <td className={`p-4 text-slate-600 dark:text-slate-400 font-medium ${border}`}>
                        {row.btech}
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
              {t.s3p1}
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
              {t.s3p2}
            </p>
          </div>
          <div className="border-l-4 border-orange-400 bg-orange-50 dark:bg-orange-950/30 rounded-r-2xl p-5 mt-6">
            <p className="text-slate-700 dark:text-slate-300 font-semibold leading-relaxed text-sm">
              {t.s3WarnPre}
              <Link href="/exams/uceed/scholarships" className="text-primary font-black underline underline-offset-2 hover:text-primary/80 transition-colors">
                {t.s3WarnLink}
              </Link>
              {t.s3WarnPost}
            </p>
          </div>
        </Section>

        <Section number="04" label={t.sectionLabel} title={t.s4Title}>
          <blockquote className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-950/30 rounded-r-2xl p-6 md:p-8 my-8">
            <p className="text-slate-700 dark:text-slate-300 italic font-medium leading-relaxed mb-4">
              {t.s4Quote}
            </p>
            <footer className="text-orange-600 font-black text-sm not-italic">
              {t.s4Attr}
            </footer>
          </blockquote>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            {t.s4p1}
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            {t.s4p2}
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            {t.s4p3}
          </p>
        </Section>
      </div>
    </main>
  );
}
