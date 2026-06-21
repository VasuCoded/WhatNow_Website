"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    crumbExams: "Exams",
    crumbImuCet: "IMU CET",
    crumbHere: "Entry Paths",
    headerTitle: "IMU CET — Entry Paths Compared",
    sectionLabel: "Section",
    s1Title: "DNS vs B.Sc vs B.Tech: Duration, Fees & Sea-Time",
    s1Body:
      "Entering the Merchant Navy requires choosing one of three primary pre-sea training courses approved by the Directorate General of Shipping (DGS). These courses vary greatly in their academic duration, tuition cost, and the sea-time needed to sit for Officer competency examinations.",
    thCourse: "Course Path",
    thDuration: "Duration & Training",
    thCost: "Approx. Total Cost (Academic)",
    thSeaTime: "Onboard Training (Sea-Time)",
    rows: [
      {
        course: "Diploma in Nautical Science (DNS)",
        duration: "1 Year Pre-Sea Academy",
        cost: "₹4.5L – ₹6.5L",
        seaTime: "18 Months (mandatory)",
      },
      {
        course: "B.Sc Nautical Science (Deck Officer)",
        duration: "3 Years Degree Course",
        cost: "₹6.0L – ₹9.0L",
        seaTime: "12 Months (mandatory)",
      },
      {
        course: "B.Tech Marine Engineering (Engine Officer)",
        duration: "4 Years Degree Course",
        cost: "₹9.0L – ₹14.0L",
        seaTime: "6 Months (mandatory)",
      },
    ],
    s2Title: "Sponsorships and Financial Concessions",
    s2BodyPre:
      "Unlike other careers, the standard scholarship in the Merchant Navy is ",
    s2BodyStrong: "Company Sponsorship",
    s2BodyPost:
      ". Securing a sponsorship means a commercial shipping company finances or guarantees your placement, training, and employment prior to your course commencement.",
    noteLabel: "Note:",
    card1Title: "Company Sponsorship",
    card1Type: "Merchant Navy Priority",
    card1Audience: "Open to all candidates clearing company entrance exams & medical rounds.",
    card1Desc:
      "The most secure financing mechanism. Prominent shipping lines (e.g. Anglo-Eastern, Synergy Maritime, Fleet Management, Great Eastern Shipping) conduct examinations and interviews. Sponsored cadets are guaranteed 12–18 months of onboard training, a monthly stipend during sea-time, and automatic employment.",
    card1Note: "Never join a DNS course without securing a shipping company's sponsorship beforehand.",
    card2Title: "IMU Female Cadet Tuition Subsidy",
    card2Type: "Institutional Subsidy",
    card2Audience: "All female candidates enrolled in IMU Campuses.",
    card2Desc:
      "To improve gender diversity in maritime professions, the Indian Maritime University offers a tuition fee waiver of ₹25,000 per semester to all female cadets admitted to its campuses for maritime programs.",
    card2Note: "Applied automatically at the time of fee payment for female candidates.",
    card3Title: "Maritime Training Trust (MTT) Scholarship",
    card3Type: "Trust Grant",
    card3Audience: "Deserving Indian female cadets pursuing pre-sea courses.",
    card3Desc:
      "The Maritime Training Trust provides financial support ranging from ₹50,000 to ₹1,00,000 per year to outstanding female deck and engine cadets to assist with academy tuition and boarding fees.",
    card3Note: "Requires an application submission through the academy dean's office with academic certificates.",
    s3Title: "The Honest ROI Picture",
    s3Heading: "Return on Investment: cadet stipend vs officer wage",
    s3Body1Pre:
      "While training is intensive and costly, the Merchant Navy offers an exceptionally quick recovery of education costs. As a deck cadet during your 12–18 months of sea-time, you earn a monthly stipend of ",
    s3Body1Strong: "$300–$600 USD (₹25,000–₹50,000)",
    s3Body1Post: " with free food and accommodation on board.",
    s3Body2Pre:
      "Once you pass the MMD Second Mate/Class IV written and oral examinations and receive your Licence (CoC), you join as a Third Officer or Fourth Engineer. Your starting salary jumps to ",
    s3Body2Strong: "$2,000–$3,500 USD per month (₹1.6L–₹3L/mo) tax-free",
    s3Body2Post:
      ". Most cadets recover their full educational loans within their first 12–18 months of sailing as a licensed officer.",
    seeAlso: "See also:",
    seeAlso1: "Career-framed Entry Routes guide →",
    seeAlso2: "IMU CET overview →",
    seeAlso3: "Medical & eligibility →",
  },
  hi: {
    crumbExams: "परीक्षाएँ",
    crumbImuCet: "IMU CET",
    crumbHere: "प्रवेश रास्ते",
    headerTitle: "IMU CET — प्रवेश रास्तों की तुलना",
    sectionLabel: "खंड",
    s1Title: "DNS बनाम B.Sc बनाम B.Tech: अवधि, फीस और सी-टाइम",
    s1Body:
      "मर्चेंट नेवी में प्रवेश के लिए नौवहन महानिदेशालय (DGS) द्वारा अनुमोदित तीन मुख्य प्री-सी प्रशिक्षण कोर्सों में से एक चुनना आवश्यक है। ये कोर्स अपनी शैक्षणिक अवधि, ट्यूशन लागत और ऑफिसर योग्यता परीक्षा में बैठने के लिए आवश्यक सी-टाइम में काफ़ी भिन्न होते हैं।",
    thCourse: "कोर्स रास्ता",
    thDuration: "अवधि और प्रशिक्षण",
    thCost: "अनुमानित कुल लागत (शैक्षणिक)",
    thSeaTime: "ऑनबोर्ड प्रशिक्षण (सी-टाइम)",
    rows: [
      {
        course: "डिप्लोमा इन नॉटिकल साइंस (DNS)",
        duration: "1 वर्ष प्री-सी अकादमी",
        cost: "₹4.5L – ₹6.5L",
        seaTime: "18 महीने (अनिवार्य)",
      },
      {
        course: "B.Sc नॉटिकल साइंस (डेक ऑफिसर)",
        duration: "3 वर्ष डिग्री कोर्स",
        cost: "₹6.0L – ₹9.0L",
        seaTime: "12 महीने (अनिवार्य)",
      },
      {
        course: "B.Tech मरीन इंजीनियरिंग (इंजन ऑफिसर)",
        duration: "4 वर्ष डिग्री कोर्स",
        cost: "₹9.0L – ₹14.0L",
        seaTime: "6 महीने (अनिवार्य)",
      },
    ],
    s2Title: "स्पॉन्सरशिप और वित्तीय रियायतें",
    s2BodyPre:
      "अन्य करियर के विपरीत, मर्चेंट नेवी में मानक छात्रवृत्ति ",
    s2BodyStrong: "कंपनी स्पॉन्सरशिप",
    s2BodyPost:
      " होती है। स्पॉन्सरशिप हासिल करने का मतलब है कि एक वाणिज्यिक शिपिंग कंपनी आपके कोर्स शुरू होने से पहले ही आपके प्लेसमेंट, प्रशिक्षण और रोज़गार का वित्तपोषण या गारंटी देती है।",
    noteLabel: "नोट:",
    card1Title: "कंपनी स्पॉन्सरशिप",
    card1Type: "मर्चेंट नेवी प्राथमिकता",
    card1Audience: "कंपनी प्रवेश परीक्षा और मेडिकल राउंड पास करने वाले सभी उम्मीदवारों के लिए खुली।",
    card1Desc:
      "सबसे सुरक्षित वित्तपोषण तंत्र। प्रमुख शिपिंग लाइनें (जैसे Anglo-Eastern, Synergy Maritime, Fleet Management, Great Eastern Shipping) परीक्षाएँ और साक्षात्कार आयोजित करती हैं। स्पॉन्सर किए गए कैडेटों को 12–18 महीने का ऑनबोर्ड प्रशिक्षण, सी-टाइम के दौरान मासिक स्टाइपेंड और स्वचालित रोज़गार की गारंटी होती है।",
    card1Note: "किसी शिपिंग कंपनी की स्पॉन्सरशिप पहले से हासिल किए बिना कभी भी DNS कोर्स में शामिल न हों।",
    card2Title: "IMU महिला कैडेट ट्यूशन सब्सिडी",
    card2Type: "संस्थागत सब्सिडी",
    card2Audience: "IMU कैंपस में नामांकित सभी महिला उम्मीदवार।",
    card2Desc:
      "मैरीटाइम पेशों में लैंगिक विविधता बढ़ाने के लिए, इंडियन मैरीटाइम यूनिवर्सिटी अपने कैंपस में मैरीटाइम कार्यक्रमों में प्रवेश पाने वाली सभी महिला कैडेटों को प्रति सेमेस्टर ₹25,000 की ट्यूशन फीस छूट देती है।",
    card2Note: "महिला उम्मीदवारों के लिए फीस भुगतान के समय स्वचालित रूप से लागू।",
    card3Title: "मैरीटाइम ट्रेनिंग ट्रस्ट (MTT) छात्रवृत्ति",
    card3Type: "ट्रस्ट अनुदान",
    card3Audience: "प्री-सी कोर्स कर रहीं योग्य भारतीय महिला कैडेट।",
    card3Desc:
      "मैरीटाइम ट्रेनिंग ट्रस्ट उत्कृष्ट महिला डेक और इंजन कैडेटों को अकादमी ट्यूशन और बोर्डिंग फीस में मदद के लिए प्रति वर्ष ₹50,000 से ₹1,00,000 तक की वित्तीय सहायता प्रदान करता है।",
    card3Note: "शैक्षणिक प्रमाणपत्रों के साथ अकादमी के डीन कार्यालय के ज़रिए आवेदन जमा करना आवश्यक है।",
    s3Title: "ईमानदार ROI तस्वीर",
    s3Heading: "निवेश पर प्रतिफल: कैडेट स्टाइपेंड बनाम ऑफिसर वेतन",
    s3Body1Pre:
      "हालाँकि प्रशिक्षण गहन और महँगा है, मर्चेंट नेवी शिक्षा लागत की असाधारण रूप से तेज़ वसूली प्रदान करती है। अपने 12–18 महीने के सी-टाइम के दौरान डेक कैडेट के रूप में, आप ",
    s3Body1Strong: "$300–$600 USD (₹25,000–₹50,000)",
    s3Body1Post: " का मासिक स्टाइपेंड कमाते हैं, साथ ही जहाज़ पर मुफ़्त भोजन और आवास मिलता है।",
    s3Body2Pre:
      "जब आप MMD सेकंड मेट/क्लास IV लिखित और मौखिक परीक्षाएँ पास कर लेते हैं और अपना लाइसेंस (CoC) प्राप्त कर लेते हैं, तो आप थर्ड ऑफिसर या फोर्थ इंजीनियर के रूप में शामिल होते हैं। आपका शुरुआती वेतन ",
    s3Body2Strong: "$2,000–$3,500 USD प्रति माह (₹1.6L–₹3L/माह) टैक्स-फ्री",
    s3Body2Post:
      " तक उछल जाता है। अधिकांश कैडेट लाइसेंस प्राप्त ऑफिसर के रूप में नौकायन के अपने पहले 12–18 महीनों के भीतर अपने पूरे शैक्षणिक ऋण वसूल कर लेते हैं।",
    seeAlso: "यह भी देखें:",
    seeAlso1: "करियर-केंद्रित प्रवेश रास्ते गाइड →",
    seeAlso2: "IMU CET अवलोकन →",
    seeAlso3: "मेडिकल और पात्रता →",
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
          <pattern id="imucet-entry-paths-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ea580c" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#imucet-entry-paths-grid)" />
      </svg>
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-sky-500/5 rounded-full blur-[60px]" />

      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="imucet-ep-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="imucet-ep-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#imucet-ep-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#imucet-ep-wave-grad-2)" />
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
      <div className="inline-block px-3 py-1 bg-orange-50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-300 text-xs font-black uppercase tracking-wider rounded-full mb-4">
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

export default function ImuCetEntryPathsPage() {
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

          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl my-8">
            <table className="w-full text-left border-collapse min-w-[600px] bg-white dark:bg-slate-800/50">
              <thead className="bg-slate-50 dark:bg-slate-800/40">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    {t.thCourse}
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    {t.thDuration}
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    {t.thCost}
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    {t.thSeaTime}
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
                        {row.course}
                      </td>
                      <td className={`p-4 text-slate-700 dark:text-slate-300 font-medium ${border}`}>
                        {row.duration}
                      </td>
                      <td className={`p-4 text-orange-600 font-black ${border}`}>
                        {row.cost}
                      </td>
                      <td className={`p-4 text-slate-600 dark:text-slate-400 font-bold ${border}`}>
                        {row.seaTime}
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
            {t.s2BodyPre}<strong>{t.s2BodyStrong}</strong>{t.s2BodyPost}
          </p>

          <ScholarshipCard
            title={t.card1Title}
            type={t.card1Type}
            audience={t.card1Audience}
            description={t.card1Desc}
            noteLabel={t.noteLabel}
            note={t.card1Note}
          />

          <ScholarshipCard
            title={t.card2Title}
            type={t.card2Type}
            audience={t.card2Audience}
            description={t.card2Desc}
            noteLabel={t.noteLabel}
            note={t.card2Note}
          />

          <ScholarshipCard
            title={t.card3Title}
            type={t.card3Type}
            audience={t.card3Audience}
            description={t.card3Desc}
            noteLabel={t.noteLabel}
            note={t.card3Note}
          />
        </Section>

        <Section number="03" label={t.sectionLabel} title={t.s3Title}>
          <div className="p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40 mb-6">
            <h3 className="text-xl font-black text-neutral-dark mb-4">
              {t.s3Heading}
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-4">
              {t.s3Body1Pre}<strong>{t.s3Body1Strong}</strong>{t.s3Body1Post}
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
              {t.s3Body2Pre}<strong>{t.s3Body2Strong}</strong>{t.s3Body2Post}
            </p>
          </div>
        </Section>

        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            <strong className="text-slate-700 dark:text-slate-300">{t.seeAlso}</strong>{" "}
            <Link href="/careers/merchant-navy/entry-routes" className="text-orange-600 hover:underline font-bold">{t.seeAlso1}</Link>{" "}
            ·{" "}
            <Link href="/exams/imu-cet" className="text-orange-600 hover:underline font-bold">{t.seeAlso2}</Link>{" "}
            ·{" "}
            <Link href="/exams/imu-cet/medical" className="text-orange-600 hover:underline font-bold">{t.seeAlso3}</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
