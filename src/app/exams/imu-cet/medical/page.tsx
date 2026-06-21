"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    crumbExams: "Exams",
    crumbImuCet: "IMU CET",
    crumbHere: "Medical",
    headerTitle: "IMU CET — Medical Test & DG Shipping Norms",
    sectionLabel: "Section",
    s1Title: "Mandatory DGS Eyesight & Physical Criteria",
    s1Body:
      "Unlike other professional courses where any student can register, the Merchant Navy enforces strict medical regulations mandated by the Directorate General of Shipping (DGS). If you do not meet these, you cannot join, regardless of your IMU CET rank.",
    deckLabel: "Deck Cadet (DNS / B.Sc)",
    deckHeading: "Eyesight & Vision",
    deckBodyPre: "Must have ",
    deckBodyStrong1: "6/6 vision in each eye",
    deckBodyMid:
      " (uncorrected, or corrected to 6/6 by surgery done and healed before admission). Glasses are not permitted for deck officers at sea. Candidates must have ",
    deckBodyStrong2: "no colour blindness",
    deckBodyPost: " whatsoever — navigation lights require reliable colour distinction.",
    engineLabel: "Engine Cadet (B.Tech / GME)",
    engineHeading: "Eyesight & Vision",
    engineBodyPre: "Minor corrective glasses up to ",
    engineBodyStrong1: "6/12",
    engineBodyMid:
      " are allowed in each eye. However, candidates must have ",
    engineBodyStrong2: "no colour blindness",
    engineBodyPost: " — electrical wiring and alarm systems use colour coding that is safety-critical.",
    s1CalloutStrong: "Get checked before you prepare.",
    s1CalloutBody:
      " A full DG-standard eye and medical examination takes a few hours and costs very little compared to a year of coaching fees or course fees. Do not invest a year planning around this career without confirming you clear the medical first. Confirm current eyesight rules on the DG Shipping website — they are periodically revised.",
    s2Title: "The Isolation Self-Check",
    s2Body: "Beyond physical fitness, assess your psychological readiness for seafaring:",
    checks: [
      "Are you okay spending 4 to 9 months continuously offshore with minimal internet access (satellite limits) and limited contact with family?",
      "Can you work under military-style authority, tight watch schedules, and intensive manual or engine-room labour?",
      "Are you comfortable in high-stress weather events (rough seas, storms) far from shore facilities?",
      "Do you have interests or habits you can sustain alone, indefinitely, with no audience?",
    ],
    s3Title: "The 'Fix Your Eyes Later' Myth — Read This First",
    s3Body:
      "A claim circulates in forums and WhatsApp groups that you can skip the medical via company sponsorship and simply do LASIK after your course. Do not build a plan on this.",
    lieLabel: "The Lie — Named & Refuted",
    lieStrong1:
      "You will hear that some companies sponsor cadets who haven't cleared the medical, and that you can do LASIK afterwards. Do not build a plan on it.",
    lieMid1:
      " DG Shipping medical fitness — including vision and colour-vision standards — is mandatory before you can sail, sponsorship or not. LASIK is age-gated and must be done ",
    lieEm1: "and",
    lieMid2: " healed to standard ",
    lieEm2: "before",
    lieMid3:
      " admission or sea service — not after you have sunk a year and lakhs into the course. Get a full DG-standard eye and medical check ",
    lieStrong2: "before",
    lieEnd:
      " you commit. Confirm current eyesight rules on the DG Shipping site — they are periodically revised.",
    s3Closer:
      "The reason this myth persists: a small number of candidates in grey-area situations have described unofficial workarounds in online communities. These accounts are not evidence of a reliable path — they are exceptions that occasionally end badly. A plan built on \"maybe they'll let it slide\" is not a plan.",
    seeAlso: "See also:",
    seeAlso1: "Is it for you — the full reality check →",
    seeAlso2: "DNS vs B.Sc vs B.Tech →",
    seeAlso3: "IMU CET overview →",
  },
  hi: {
    crumbExams: "परीक्षाएँ",
    crumbImuCet: "IMU CET",
    crumbHere: "मेडिकल",
    headerTitle: "IMU CET — मेडिकल टेस्ट और DG Shipping मानदंड",
    sectionLabel: "खंड",
    s1Title: "अनिवार्य DGS दृष्टि और शारीरिक मानदंड",
    s1Body:
      "अन्य पेशेवर कोर्सों के विपरीत, जहाँ कोई भी छात्र पंजीकरण कर सकता है, मर्चेंट नेवी नौवहन महानिदेशालय (DGS) द्वारा अनिवार्य सख़्त मेडिकल नियमों को लागू करती है। यदि आप इन्हें पूरा नहीं करते, तो आपकी IMU CET रैंक चाहे जो भी हो, आप शामिल नहीं हो सकते।",
    deckLabel: "डेक कैडेट (DNS / B.Sc)",
    deckHeading: "दृष्टि और नज़र",
    deckBodyPre: "प्रत्येक आँख में ",
    deckBodyStrong1: "6/6 दृष्टि",
    deckBodyMid:
      " होनी चाहिए (बिना सुधार के, या प्रवेश से पहले की गई और ठीक हो चुकी सर्जरी द्वारा 6/6 तक सुधारी गई)। समुद्र में डेक ऑफिसरों के लिए चश्मे की अनुमति नहीं है। उम्मीदवारों में ",
    deckBodyStrong2: "कोई रंग अंधता नहीं",
    deckBodyPost: " होनी चाहिए — नेविगेशन लाइटों के लिए विश्वसनीय रंग पहचान आवश्यक है।",
    engineLabel: "इंजन कैडेट (B.Tech / GME)",
    engineHeading: "दृष्टि और नज़र",
    engineBodyPre: "प्रत्येक आँख में ",
    engineBodyStrong1: "6/12",
    engineBodyMid:
      " तक मामूली सुधारक चश्मे की अनुमति है। हालाँकि, उम्मीदवारों में ",
    engineBodyStrong2: "कोई रंग अंधता नहीं",
    engineBodyPost: " होनी चाहिए — इलेक्ट्रिकल वायरिंग और अलार्म सिस्टम सुरक्षा-महत्वपूर्ण रंग कोडिंग का उपयोग करते हैं।",
    s1CalloutStrong: "तैयारी से पहले जाँच करा लें।",
    s1CalloutBody:
      " एक पूर्ण DG-मानक नेत्र और मेडिकल परीक्षा में कुछ घंटे लगते हैं और एक साल की कोचिंग फीस या कोर्स फीस की तुलना में बहुत कम खर्च होता है। पहले यह पुष्टि किए बिना कि आप मेडिकल पास करते हैं, इस करियर के इर्द-गिर्द योजना बनाने में एक साल न लगाएँ। DG Shipping वेबसाइट पर मौजूदा दृष्टि नियमों की पुष्टि करें — इन्हें समय-समय पर संशोधित किया जाता है।",
    s2Title: "अकेलेपन की स्व-जाँच",
    s2Body: "शारीरिक फिटनेस के अलावा, समुद्री जीवन के लिए अपनी मनोवैज्ञानिक तैयारी का आकलन करें:",
    checks: [
      "क्या आप न्यूनतम इंटरनेट पहुँच (सैटेलाइट सीमाएँ) और परिवार से सीमित संपर्क के साथ 4 से 9 महीने लगातार समुद्र में बिताने के लिए तैयार हैं?",
      "क्या आप सैन्य-शैली के अनुशासन, सख़्त वॉच शेड्यूल और गहन शारीरिक या इंजन-रूम श्रम के तहत काम कर सकते हैं?",
      "क्या आप तट की सुविधाओं से दूर अत्यधिक तनावपूर्ण मौसम स्थितियों (उग्र समुद्र, तूफ़ान) में सहज हैं?",
      "क्या आपके पास ऐसी रुचियाँ या आदतें हैं जिन्हें आप अकेले, अनिश्चित काल तक, बिना किसी दर्शक के बनाए रख सकते हैं?",
    ],
    s3Title: "'आँखें बाद में ठीक करा लेंगे' मिथक — पहले यह पढ़ें",
    s3Body:
      "फ़ोरम और WhatsApp ग्रुप में एक दावा फैलता है कि आप कंपनी स्पॉन्सरशिप के ज़रिए मेडिकल को छोड़ सकते हैं और कोर्स के बाद बस LASIK करा सकते हैं। इस पर कोई योजना न बनाएँ।",
    lieLabel: "झूठ — नाम लेकर खंडन",
    lieStrong1:
      "आप सुनेंगे कि कुछ कंपनियाँ ऐसे कैडेटों को स्पॉन्सर करती हैं जिन्होंने मेडिकल पास नहीं किया, और आप बाद में LASIK करा सकते हैं। इस पर कोई योजना न बनाएँ।",
    lieMid1:
      " DG Shipping मेडिकल फिटनेस — दृष्टि और रंग-दृष्टि मानकों सहित — नौकायन से पहले अनिवार्य है, स्पॉन्सरशिप हो या न हो। LASIK आयु-सीमित है और इसे प्रवेश या समुद्री सेवा से ",
    lieEm1: "पहले",
    lieMid2: " कराया ",
    lieEm2: "और",
    lieMid3:
      " मानक के अनुसार ठीक होना ज़रूरी है — कोर्स में एक साल और लाखों रुपये लगाने के बाद नहीं। प्रतिबद्ध होने से ",
    lieStrong2: "पहले",
    lieEnd:
      " एक पूर्ण DG-मानक नेत्र और मेडिकल जाँच करा लें। DG Shipping साइट पर मौजूदा दृष्टि नियमों की पुष्टि करें — इन्हें समय-समय पर संशोधित किया जाता है।",
    s3Closer:
      "यह मिथक क्यों बना रहता है: ग्रे-एरिया स्थितियों में कुछ उम्मीदवारों ने ऑनलाइन समुदायों में अनौपचारिक जुगाड़ों का वर्णन किया है। ये विवरण किसी विश्वसनीय रास्ते का प्रमाण नहीं हैं — ये अपवाद हैं जो कभी-कभी बुरी तरह समाप्त होते हैं। \"शायद वे छूट दे देंगे\" पर बनी योजना कोई योजना नहीं है।",
    seeAlso: "यह भी देखें:",
    seeAlso1: "क्या यह आपके लिए है — पूरी वास्तविकता जाँच →",
    seeAlso2: "DNS बनाम B.Sc बनाम B.Tech →",
    seeAlso3: "IMU CET अवलोकन →",
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
          <pattern id="imucet-medical-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ea580c" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#imucet-medical-grid)" />
      </svg>
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-sky-500/5 rounded-full blur-[60px]" />

      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="imucet-med-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="imucet-med-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#imucet-med-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#imucet-med-wave-grad-2)" />
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

export default function ImuCetMedicalPage() {
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 bg-white dark:bg-slate-800/50 shadow-sm">
              <span className="text-xs font-black uppercase tracking-wider text-orange-600 block mb-2">{t.deckLabel}</span>
              <h4 className="font-black text-lg text-neutral-dark mb-2">{t.deckHeading}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-semibold leading-relaxed">
                {t.deckBodyPre}<strong>{t.deckBodyStrong1}</strong>{t.deckBodyMid}<strong>{t.deckBodyStrong2}</strong>{t.deckBodyPost}
              </p>
            </div>
            <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 bg-white dark:bg-slate-800/50 shadow-sm">
              <span className="text-xs font-black uppercase tracking-wider text-orange-600 block mb-2">{t.engineLabel}</span>
              <h4 className="font-black text-lg text-neutral-dark mb-2">{t.engineHeading}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-semibold leading-relaxed">
                {t.engineBodyPre}<strong>{t.engineBodyStrong1}</strong>{t.engineBodyMid}<strong>{t.engineBodyStrong2}</strong>{t.engineBodyPost}
              </p>
            </div>
          </div>

          <div className="bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-500 p-6 rounded-r-xl mt-4">
            <p className="text-slate-800 dark:text-slate-300 leading-relaxed font-medium">
              <strong className="font-black text-orange-700">{t.s1CalloutStrong}</strong>{t.s1CalloutBody}
            </p>
          </div>
        </Section>

        <Section number="02" label={t.sectionLabel} title={t.s2Title}>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            {t.s2Body}
          </p>
          <ul className="space-y-4">
            {t.checks.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 font-medium">
                <span className="text-orange-500 font-black mt-0.5 flex-shrink-0">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section number="03" label={t.sectionLabel} title={t.s3Title}>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            {t.s3Body}
          </p>

          <div className="bg-slate-900 text-slate-100 rounded-2xl p-6 md:p-8 my-8">
            <div className="text-amber-400 font-black text-xs uppercase tracking-widest mb-3">
              {t.lieLabel}
            </div>
            <p className="leading-relaxed font-medium text-slate-200">
              <strong className="text-white">{t.lieStrong1}</strong>{t.lieMid1}<em>{t.lieEm1}</em>{t.lieMid2}<em>{t.lieEm2}</em>{t.lieMid3}<strong className="text-white">{t.lieStrong2}</strong>{t.lieEnd}
            </p>
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            {t.s3Closer}
          </p>
        </Section>

        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            <strong className="text-slate-700 dark:text-slate-300">{t.seeAlso}</strong>{" "}
            <Link href="/careers/merchant-navy/is-it-for-you" className="text-orange-600 hover:underline font-bold">{t.seeAlso1}</Link>{" "}
            ·{" "}
            <Link href="/exams/imu-cet/entry-paths" className="text-orange-600 hover:underline font-bold">{t.seeAlso2}</Link>{" "}
            ·{" "}
            <Link href="/exams/imu-cet" className="text-orange-600 hover:underline font-bold">{t.seeAlso3}</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
