"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    crumbExams: "Exams",
    crumbNift: "NIFT",
    crumbHere: "Resources & Prep",
    headerTitle: "NIFT — Prep Roadmap & Resources",
    sectionLabel: "Section",
    s1Title: "Syllabus Breakdown: CAT & GAT",
    s1Body:
      "The NIFT written entrance consists of two papers conducted on the same day: the Creative Ability Test (CAT) (50% weightage) and the General Ability Test (GAT) (30% weightage).",
    s1Card1Label: "CAT (Creative Ability Test)",
    s1Card1Title: "Drawing & Visualisation",
    s1Card1Body:
      "Tests design aptitude, color theory, product styling, and spatial illustration. Typical questions ask you to design a kitchen utility item, illustrate a festival scene from a bird's-eye view, or draw a poster representing environmental changes.",
    s1Card2Label: "GAT (General Ability Test)",
    s1Card2Title: "General Aptitude",
    s1Card2Body:
      "Objective MCQs testing English Comprehension, Quantitative Ability (standard Class 10 math), Analytical Reasoning, and General Knowledge (with a heavy focus on fashion industry news, brand acquisitions, and textile history).",
    s2Title: "Recommended Guides & Material Kits",
    s2Block1Title: "Primary Reference Books",
    s2Block1Body:
      "Use the Arihant NIFT Entrance Exam Guide or Dharmendra Mittal's Prep Book to study past question patterns and complete standard GAT verbal/non-verbal reasoning chapters.",
    s2Block2Title: "Situation Test Material Kit (20% Weightage)",
    s2Block2Body:
      "If you qualify the written round, you sit for the Situation Test, which involves building 3D models using a limited set of materials. Practice at home by creating models of kiosks, trophies, and bags using:",
    s2List: [
      "Cardboard, mount board, and colorful sheets.",
      "Copper wire, cotton wool, matchsticks, and thermocol.",
      "Clay, transparency sheets, thread, and standard adhesive.",
    ],
    s3Title: "Self-Prep Roadmap",
    s3CardTitle: "Timely Preparation Flow",
    s3CardBody:
      "Start by building basic sketching skills (proportion, light & shade, human anatomy) 4-6 months before the exam. Solve past 10 years of NIFT CAT and GAT papers under strict exam timelines. Keep tracking current developments in national and international fashion houses.",
  },
  hi: {
    crumbExams: "परीक्षाएँ",
    crumbNift: "NIFT",
    crumbHere: "संसाधन और तैयारी",
    headerTitle: "NIFT — तैयारी रोडमैप और संसाधन",
    sectionLabel: "खंड",
    s1Title: "सिलेबस ब्रेकडाउन: CAT और GAT",
    s1Body:
      "NIFT लिखित प्रवेश परीक्षा में एक ही दिन आयोजित दो पेपर होते हैं: क्रिएटिव एबिलिटी टेस्ट (CAT) (50% भारांक) और जनरल एबिलिटी टेस्ट (GAT) (30% भारांक)।",
    s1Card1Label: "CAT (क्रिएटिव एबिलिटी टेस्ट)",
    s1Card1Title: "ड्रॉइंग और विज़ुअलाइज़ेशन",
    s1Card1Body:
      "डिज़ाइन योग्यता, रंग सिद्धांत, प्रोडक्ट स्टाइलिंग और स्थानिक चित्रण को परखता है। आम सवालों में किचन की कोई उपयोगी वस्तु डिज़ाइन करना, किसी त्योहार के दृश्य को बर्ड्स-आई व्यू से चित्रित करना, या पर्यावरणीय बदलावों को दर्शाने वाला पोस्टर बनाना शामिल होता है।",
    s1Card2Label: "GAT (जनरल एबिलिटी टेस्ट)",
    s1Card2Title: "सामान्य योग्यता",
    s1Card2Body:
      "वस्तुनिष्ठ MCQ जो अंग्रेज़ी कॉम्प्रिहेंशन, मात्रात्मक योग्यता (मानक कक्षा 10 गणित), विश्लेषणात्मक तर्क और सामान्य ज्ञान (फ़ैशन इंडस्ट्री समाचार, ब्रांड अधिग्रहण और टेक्सटाइल इतिहास पर भारी ज़ोर के साथ) परखते हैं।",
    s2Title: "अनुशंसित गाइड और मटेरियल किट",
    s2Block1Title: "प्रमुख संदर्भ पुस्तकें",
    s2Block1Body:
      "पिछले प्रश्न पैटर्न का अध्ययन करने और मानक GAT वर्बल/नॉन-वर्बल रीज़निंग के अध्याय पूरे करने के लिए Arihant NIFT Entrance Exam Guide या Dharmendra Mittal की प्रेप बुक का उपयोग करें।",
    s2Block2Title: "सिचुएशन टेस्ट मटेरियल किट (20% भारांक)",
    s2Block2Body:
      "अगर आप लिखित राउंड क्वालिफ़ाई करते हैं, तो आप सिचुएशन टेस्ट देते हैं, जिसमें सीमित सामग्री का उपयोग करके 3D मॉडल बनाने होते हैं। घर पर इनका उपयोग करके कियोस्क, ट्रॉफ़ी और बैग के मॉडल बनाकर अभ्यास करें:",
    s2List: [
      "कार्डबोर्ड, माउंट बोर्ड और रंगीन शीट।",
      "तांबे का तार, रुई, माचिस की तीलियाँ और थर्मोकोल।",
      "क्ले, ट्रांसपेरेंसी शीट, धागा और मानक चिपकने वाला पदार्थ।",
    ],
    s3Title: "सेल्फ़-प्रेप रोडमैप",
    s3CardTitle: "समयबद्ध तैयारी का प्रवाह",
    s3CardBody:
      "परीक्षा से 4-6 महीने पहले बुनियादी स्केचिंग कौशल (अनुपात, प्रकाश और छाया, मानव शरीर रचना) बनाना शुरू करें। NIFT CAT और GAT के पिछले 10 साल के पेपर सख़्त परीक्षा समय-सीमा में हल करें। राष्ट्रीय और अंतरराष्ट्रीय फ़ैशन हाउसों में चल रहे ताज़ा घटनाक्रमों पर नज़र रखते रहें।",
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
          <pattern id="nift-resources-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ec4899" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#nift-resources-grid)" />
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

export default function NiftResourcesPage() {
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 bg-white dark:bg-slate-800/50 shadow-xs">
              <span className="text-xs font-black uppercase tracking-wider text-pink-600 block mb-2">{t.s1Card1Label}</span>
              <h4 className="font-black text-lg text-neutral-dark dark:text-slate-100 mb-2">{t.s1Card1Title}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                {t.s1Card1Body}
              </p>
            </div>
            <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 bg-white dark:bg-slate-800/50 shadow-xs">
              <span className="text-xs font-black uppercase tracking-wider text-pink-600 block mb-2">{t.s1Card2Label}</span>
              <h4 className="font-black text-lg text-neutral-dark dark:text-slate-100 mb-2">{t.s1Card2Title}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                {t.s1Card2Body}
              </p>
            </div>
          </div>
        </Section>

        <Section number="02" label={t.sectionLabel} title={t.s2Title}>
          <div className="space-y-6">
            <div className="border-l-4 border-pink-500/80 pl-6">
              <h4 className="font-black text-lg text-neutral-dark dark:text-slate-100 mb-2">{t.s2Block1Title}</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
                {t.s2Block1Body}
              </p>
            </div>
            <div className="border-l-4 border-emerald-500/80 pl-6">
              <h4 className="font-black text-lg text-neutral-dark dark:text-slate-100 mb-2">{t.s2Block2Title}</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-semibold mb-3">
                {t.s2Block2Body}
              </p>
              <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-400 font-semibold space-y-1">
                {t.s2List.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section number="03" label={t.sectionLabel} title={t.s3Title}>
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-black text-neutral-dark dark:text-slate-100 mb-4">{t.s3CardTitle}</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-semibold mb-4 text-sm">
              {t.s3CardBody}
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}
