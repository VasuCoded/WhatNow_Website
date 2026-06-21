"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    crumbExams: "Exams",
    crumbNift: "NIFT",
    crumbHere: "Is It For You?",
    headerTitle: "NIFT — Is Fashion For You?",
    sectionLabel: "Section",
    s1Title: "Runway Glamour vs Industrial Realities",
    s1Body:
      "Most students target NIFT dreaming of fashion weeks, celebrity styling, and luxury boutique launches. The reality: 95% of the fashion industry is raw manufacturing, sourcing, and logistics.",
    s1CardTitle: "The Back-End Grind",
    s1CardBody:
      "Daily tasks as a retail merchandiser or fashion technologist involve checking yarn count, auditing garment stitches, managing fabric shipments from mills, calculating material costs, and negotiating with export houses. If you think design is only drawing pretty garments, the day-to-day operations can be a rude awakening.",
    s2Title: "The Suitability Self-Check",
    s2Body: "Answer these questions honestly before enrolling:",
    s2Q1Title: "1. Are you okay with physical labor and long standing hours?",
    s2Q1Body:
      "NIFT classes require hours of pattern-making, garment stitching, fabric draping, and dyeing. In export houses and retail sectors, you will spend long days standing on factory floors auditing quality control.",
    s2Q2Title: "2. Do you have a head for numbers?",
    s2Q2Body:
      "Fashion Merchandising requires analyzing sales numbers, forecasting demand trends, planning purchase budgets, and pricing products. It is as much a mathematical and logical role as a creative one.",
    s2Q3Title: "3. Can you handle fast-paced, high-pressure environments?",
    s2Q3Body:
      "Fashion seasons change every few months. Tight deadlines, delay penalties in export shipments, and quick client reviews are standard stress-points.",
    s3Title: "The Career Payoff",
    s3CardTitle: "Starting Salaries & Growth",
    s3CardP1:
      "Starting salaries for NIFT graduates average ₹3.5L to ₹6.0L per annum for design, and ₹4L to ₹7L for apparel technology and management. Growth is highly portfolio-driven: as you build industry relations, transition to buying houses (e.g. Li & Fung) or major brands (Zara, Aditya Birla Fashion, Reliance Retail), salaries can cross ₹12L-₹15L in 5 years.",
    s3CardP2:
      "If you have a strong entrepreneurial drive, NIFT equips you with the technical manufacturing skills needed to launch your own brand. Make sure you align with the operational realities before committing.",
  },
  hi: {
    crumbExams: "परीक्षाएँ",
    crumbNift: "NIFT",
    crumbHere: "क्या यह आपके लिए है?",
    headerTitle: "NIFT — क्या फ़ैशन आपके लिए है?",
    sectionLabel: "खंड",
    s1Title: "रैंप का ग्लैमर बनाम औद्योगिक हकीकत",
    s1Body:
      "अधिकांश छात्र फ़ैशन वीक, सेलिब्रिटी स्टाइलिंग और लग्ज़री बुटीक लॉन्च के सपने देखते हुए NIFT का लक्ष्य रखते हैं। हकीकत: फ़ैशन इंडस्ट्री का 95% हिस्सा कच्चा मैन्युफ़ैक्चरिंग, सोर्सिंग और लॉजिस्टिक्स है।",
    s1CardTitle: "बैक-एंड की मेहनत",
    s1CardBody:
      "रिटेल मर्चेंडाइज़र या फ़ैशन टेक्नोलॉजिस्ट के रूप में रोज़मर्रा के कामों में यार्न काउंट जाँचना, गारमेंट की सिलाई का ऑडिट करना, मिलों से फ़ैब्रिक शिपमेंट संभालना, मटेरियल लागत की गणना करना, और एक्सपोर्ट हाउसों से मोलभाव करना शामिल है। अगर आपको लगता है कि डिज़ाइन सिर्फ़ सुंदर कपड़े बनाना है, तो रोज़मर्रा का काम एक कड़वा झटका हो सकता है।",
    s2Title: "उपयुक्तता आत्म-जाँच",
    s2Body: "दाख़िला लेने से पहले इन सवालों का ईमानदारी से जवाब दें:",
    s2Q1Title: "1. क्या आप शारीरिक श्रम और लंबे समय तक खड़े रहने के लिए तैयार हैं?",
    s2Q1Body:
      "NIFT की कक्षाओं में घंटों पैटर्न-मेकिंग, गारमेंट सिलाई, फ़ैब्रिक ड्रेपिंग और डाइंग करनी पड़ती है। एक्सपोर्ट हाउसों और रिटेल सेक्टर में आप क्वालिटी कंट्रोल का ऑडिट करते हुए फ़ैक्ट्री फ़्लोर पर खड़े होकर लंबे दिन बिताएँगे।",
    s2Q2Title: "2. क्या आपका दिमाग़ संख्याओं में चलता है?",
    s2Q2Body:
      "फ़ैशन मर्चेंडाइज़िंग में सेल्स के आँकड़ों का विश्लेषण, माँग के रुझानों का पूर्वानुमान, परचेज़ बजट की योजना और प्रोडक्ट की प्राइसिंग करनी होती है। यह जितनी रचनात्मक भूमिका है उतनी ही गणितीय और तार्किक भी।",
    s2Q3Title: "3. क्या आप तेज़-रफ़्तार, उच्च-दबाव वाले माहौल को संभाल सकते हैं?",
    s2Q3Body:
      "फ़ैशन के सीज़न हर कुछ महीनों में बदलते हैं। सख़्त डेडलाइन, एक्सपोर्ट शिपमेंट में देरी पर जुर्माना, और जल्दी-जल्दी क्लाइंट रिव्यू आम तनाव-बिंदु हैं।",
    s3Title: "करियर का प्रतिफल",
    s3CardTitle: "शुरुआती वेतन और वृद्धि",
    s3CardP1:
      "NIFT स्नातकों के शुरुआती वेतन डिज़ाइन के लिए औसतन ₹3.5L से ₹6.0L प्रति वर्ष, और अपैरल टेक्नोलॉजी व मैनेजमेंट के लिए ₹4L से ₹7L होते हैं। वृद्धि काफ़ी हद तक पोर्टफ़ोलियो-आधारित है: जैसे-जैसे आप इंडस्ट्री संबंध बनाते हैं, बाइंग हाउसों (जैसे Li & Fung) या बड़े ब्रांडों (Zara, Aditya Birla Fashion, Reliance Retail) में जाते हैं, वेतन 5 साल में ₹12L-₹15L पार कर सकता है।",
    s3CardP2:
      "अगर आपमें मज़बूत उद्यमशीलता है, तो NIFT आपको अपना ब्रांड लॉन्च करने के लिए ज़रूरी तकनीकी मैन्युफ़ैक्चरिंग कौशल देता है। प्रतिबद्ध होने से पहले सुनिश्चित करें कि आप परिचालन की हकीकत से तालमेल बिठाते हैं।",
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
          <pattern id="nift-is-it-for-you-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ec4899" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#nift-is-it-for-you-grid)" />
      </svg>
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-[#ff5a1f]/5 rounded-full blur-[60px]" />

      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="nift-wii-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="nift-wii-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff5a1f" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#ff5a1f" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#nift-wii-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#nift-wii-wave-grad-2)" />
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

export default function NiftIsItForYouPage() {
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
            <h3 className="font-black text-xl text-neutral-dark dark:text-slate-100">{t.s1CardTitle}</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
              {t.s1CardBody}
            </p>
          </div>
        </Section>

        <Section number="02" label={t.sectionLabel} title={t.s2Title}>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            {t.s2Body}
          </p>
          <div className="space-y-6">
            <div className="border border-slate-200 dark:border-slate-700 p-6 rounded-2xl bg-white dark:bg-slate-800/50">
              <h4 className="font-black text-lg text-neutral-dark dark:text-slate-100 mb-2">{t.s2Q1Title}</h4>
              <p className="text-slate-600 dark:text-slate-400 font-semibold leading-relaxed">
                {t.s2Q1Body}
              </p>
            </div>
            <div className="border border-slate-200 dark:border-slate-700 p-6 rounded-2xl bg-white dark:bg-slate-800/50">
              <h4 className="font-black text-lg text-neutral-dark dark:text-slate-100 mb-2">{t.s2Q2Title}</h4>
              <p className="text-slate-600 dark:text-slate-400 font-semibold leading-relaxed">
                {t.s2Q2Body}
              </p>
            </div>
            <div className="border border-slate-200 dark:border-slate-700 p-6 rounded-2xl bg-white dark:bg-slate-800/50">
              <h4 className="font-black text-lg text-neutral-dark dark:text-slate-100 mb-2">{t.s2Q3Title}</h4>
              <p className="text-slate-600 dark:text-slate-400 font-semibold leading-relaxed">
                {t.s2Q3Body}
              </p>
            </div>
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
