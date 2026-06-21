"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    crumbExams: "Exams",
    crumbHere: "Is It For You?",
    sectionLabel: "Section",
    headerTitle: "UCEED — Is Design at an IIT For You?",
    s1Title: "What kind of person actually ends up here",
    s1p1: "Most people who end up at a B.Des program at an IIT didn't follow a straight path to it. Some found design early — through drawing, through noticing how things are made, through frustration with how apps or products work. Others found it by elimination — they knew they didn't want pure engineering, but they didn't want to lose the IIT option either.",
    s1p2: "Both are valid starting points. But they lead to very different experiences. If design is the thing you're actually drawn to, the program feeds it. If you're there because you wanted the IIT tag and this seemed like a less competitive route, it's a miserable four years.",
    s1p3: "This page is about helping you figure out which one you are — before you spend a year preparing.",
    s1Quote: "The first time I came across UCEED, I was around 13. I had joined a portrait course at what I later found out was a design coaching. I just kept drawing after that and made up my mind about a creative field. UCEED was my main goal because I wasn't much interested in fashion, and NID wasn't as well-known — my parents would've been harder to convince.",
    s1QuoteAttr: "— A UCEED 2026 qualifier, in conversation with WhatNow",
    s2Title: "Four honest questions to ask yourself",
    q1Title: "1. Do you notice the world, or just move through it?",
    q1Body: "UCEED Part A has a section on observation and design sensitivity. It asks you to look at an image and catch what most people miss — a structural anomaly, a visual inconsistency, something that doesn't belong. This isn't a skill you can mug up. It's a habit of noticing. If you tend to look at a product and think about why it's shaped that way, or look at a poster and think about why the text is placed where it is, you already have this. If you've never thought about it before, it's worth asking whether you'll enjoy developing it.",
    q2Title: "2. Are you drawn to making things, or to figuring things out — or both?",
    q2Body: "B.Des covers a wide range: product design, communication design, interaction design, animation, spatial design. The common thread is that you're either making something or solving a problem that results in something made. You don't have to be a great technical draughtsperson, but you have to care about the output — the object, the interface, the image, the space.",
    q3Title: "3. Can you sit with a bad drawing and keep going?",
    q3Body: "Part B has a drawing question. If you've never drawn anything in your life, you'll need to build this skill — and it takes more than a few weeks. But drawing ability is not fixed talent. What separates people who improve from people who don't is tolerance for the early phase of being bad at something and continuing anyway.",
    q4Title: "4. What specifically draws you to design? Can you answer this in one sentence?",
    q4Body: "You don't need a polished answer. But if you have no answer at all — if you can't point to a thing you like, a type of problem you want to work on, a kind of output you find satisfying — that's worth paying attention to. Not as a disqualifier, but as a signal to explore more before committing a year to preparation.",
    s3Title: "What the program is actually like",
    s3p1: "B.Des at an IIT is studio-based learning. That means project work, critiques, iteration, and a lot of time working on things that don't have one correct answer. It is not lecture-heavy. The workload is real — design projects take time in ways that are different from solving problem sets — but the stress is creative rather than exam-based.",
    s3p2: "Most B.Des programs at IITs cover a broad design foundation in years one and two before you specialise. The disciplines available vary by institute — IIT Bombay's IDC covers industrial design, communication design, animation, interaction design, and mobility design. IIT Hyderabad's B.Des has specialisation tracks across product design, visual design, interaction design, and film and animation. IIT Indore's program is framed around innovation systems — urban, healthcare, education, energy.",
    s3p3: "On careers: fresh B.Des graduates from IITs primarily enter tech sectors, design consultancies, and product companies. Starting salary ranges are broadly comparable to B.Tech graduates from the same institutes — ₹8–20 lakhs per annum at placement, with variation by role, company, and specialisation. The honest version: the floor is good, the ceiling is high, and the trajectory depends heavily on what you build during the four years.",
    s4Title: "If you're from Arts or Commerce",
    s4p1: "You can write UCEED. And you can get into IIT Bombay, IIT Delhi, IIT Hyderabad, and IIT Indore — which includes the most prestigious design program in the country (IDC, IIT Bombay). The PCM stream restriction applies only to IIT Guwahati, IIT Roorkee, and IIITDM Jabalpur.",
    s4p2: "This is not a consolation prize. Arts and Commerce students bring something to design programs that Science students often have to work to develop — comfort with ambiguity, cultural awareness, a different relationship with visual language.",
    s4p3: "What you will need to prepare for: Part A tests logical reasoning, spatial ability, and English comprehension — none of which requires a Science background. Part B tests drawing and design thinking. Neither section has Physics, Chemistry, or Mathematics as prerequisites.",
  },
  hi: {
    crumbExams: "परीक्षाएँ",
    crumbHere: "क्या यह आपके लिए है?",
    sectionLabel: "खंड",
    headerTitle: "UCEED — क्या किसी IIT में डिज़ाइन आपके लिए है?",
    s1Title: "किस तरह का व्यक्ति वाकई यहाँ पहुँचता है",
    s1p1: "जो लोग किसी IIT के B.Des प्रोग्राम तक पहुँचते हैं, उनमें से ज़्यादातर ने सीधा रास्ता नहीं अपनाया। कुछ ने डिज़ाइन को जल्दी पा लिया — ड्रॉइंग के ज़रिए, चीज़ें कैसे बनती हैं यह देखकर, या ऐप्स और प्रोडक्ट कैसे काम करते हैं इससे चिढ़कर। कुछ ने इसे छँटाई से पाया — उन्हें पता था कि उन्हें शुद्ध इंजीनियरिंग नहीं चाहिए, पर वे IIT का विकल्प भी नहीं खोना चाहते थे।",
    s1p2: "दोनों ही जायज़ शुरुआती बिंदु हैं। लेकिन ये बहुत अलग अनुभवों की ओर ले जाते हैं। अगर डिज़ाइन ही वह चीज़ है जिसकी ओर आप सचमुच खिंचते हैं, तो प्रोग्राम उसे पोसता है। अगर आप वहाँ इसलिए हैं कि आपको IIT का टैग चाहिए था और यह कम प्रतिस्पर्धी रास्ता लगा, तो ये चार साल बेहद तकलीफ़देह होते हैं।",
    s1p3: "यह पेज आपकी मदद करने के लिए है कि आप पहचानें कि आप इनमें से कौन हैं — इससे पहले कि आप तैयारी में एक साल लगा दें।",
    s1Quote: "जब मैंने पहली बार UCEED के बारे में सुना, मैं करीब 13 साल का था। मैंने एक पोर्ट्रेट कोर्स जॉइन किया था, जो बाद में पता चला कि एक डिज़ाइन कोचिंग थी। उसके बाद मैं बस ड्रॉइंग करता रहा और किसी क्रिएटिव फ़ील्ड के बारे में मन बना लिया। UCEED मेरा मुख्य लक्ष्य था क्योंकि फैशन में मेरी ज़्यादा दिलचस्पी नहीं थी, और NID इतना मशहूर नहीं था — मेरे माता-पिता को मनाना और मुश्किल होता।",
    s1QuoteAttr: "— एक UCEED 2026 क्वालिफ़ायर, WhatNow से बातचीत में",
    s2Title: "खुद से पूछने के लिए चार ईमानदार सवाल",
    q1Title: "1. क्या आप दुनिया पर ग़ौर करते हैं, या बस उसमें से गुज़र जाते हैं?",
    q1Body: "UCEED Part A में अवलोकन और डिज़ाइन संवेदनशीलता पर एक खंड होता है। यह आपसे किसी इमेज को देखकर वह पकड़ने को कहता है जो ज़्यादातर लोग चूक जाते हैं — कोई संरचनात्मक विसंगति, कोई विज़ुअल असंगति, कोई ऐसी चीज़ जो वहाँ फिट नहीं बैठती। यह कोई ऐसी कुशलता नहीं जिसे रट लिया जाए। यह ग़ौर करने की आदत है। अगर आप किसी प्रोडक्ट को देखकर सोचते हैं कि उसका आकार ऐसा क्यों है, या किसी पोस्टर को देखकर सोचते हैं कि टेक्स्ट वहीं क्यों रखा गया है, तो यह आपके पास पहले से है। अगर आपने इस बारे में कभी सोचा ही नहीं, तो यह पूछना ठीक है कि क्या आप इसे विकसित करने में मज़ा लेंगे।",
    q2Title: "2. क्या आप चीज़ें बनाने की ओर खिंचते हैं, या समस्याएँ सुलझाने की ओर — या दोनों?",
    q2Body: "B.Des एक विस्तृत दायरा समेटता है: product design, communication design, interaction design, animation, spatial design। साझा सूत्र यह है कि आप या तो कुछ बना रहे होते हैं या ऐसी समस्या सुलझा रहे होते हैं जिसका नतीजा कोई बनी हुई चीज़ होती है। आपका बेहतरीन तकनीकी ड्राफ़्ट्समैन होना ज़रूरी नहीं, पर आपको आउटपुट की परवाह होनी चाहिए — वस्तु, इंटरफ़ेस, इमेज, स्पेस।",
    q3Title: "3. क्या आप एक खराब ड्रॉइंग के साथ बैठकर भी आगे बढ़ते रह सकते हैं?",
    q3Body: "Part B में एक ड्रॉइंग सवाल होता है। अगर आपने ज़िंदगी में कभी कुछ नहीं बनाया, तो आपको यह कुशलता बनानी होगी — और इसमें कुछ हफ़्तों से ज़्यादा लगता है। पर ड्रॉइंग की क्षमता कोई जमी-जमाई प्रतिभा नहीं है। जो लोग सुधरते हैं और जो नहीं, उनमें फ़र्क इस बात का है कि कोई किसी चीज़ में शुरू में खराब होने के दौर को कितना सह पाता है और फिर भी जारी रखता है।",
    q4Title: "4. डिज़ाइन की ओर आपको ख़ास तौर पर क्या खींचता है? क्या आप इसे एक वाक्य में बता सकते हैं?",
    q4Body: "आपको कोई चमका हुआ जवाब नहीं चाहिए। पर अगर आपके पास कोई जवाब ही नहीं — अगर आप किसी ऐसी चीज़ की ओर इशारा नहीं कर सकते जो आपको पसंद हो, किसी तरह की समस्या जिस पर आप काम करना चाहें, किसी तरह का आउटपुट जो आपको संतोष देता हो — तो यह ध्यान देने लायक है। अयोग्य ठहराने के तौर पर नहीं, बल्कि एक संकेत के तौर पर कि तैयारी में एक साल लगाने से पहले और खोजबीन करें।",
    s3Title: "प्रोग्राम असल में कैसा होता है",
    s3p1: "किसी IIT में B.Des स्टूडियो-आधारित सीखना है। इसका मतलब है प्रोजेक्ट वर्क, क्रिटीक, बार-बार दोहराव, और ऐसी चीज़ों पर खूब समय लगाना जिनका कोई एक सही जवाब नहीं होता। यह लेक्चर-प्रधान नहीं है। काम का बोझ असली है — डिज़ाइन प्रोजेक्ट उस तरह से समय लेते हैं जो प्रॉब्लम सेट हल करने से अलग है — पर तनाव परीक्षा-आधारित न होकर रचनात्मक होता है।",
    s3p2: "IITs में ज़्यादातर B.Des प्रोग्राम पहले और दूसरे साल में एक व्यापक डिज़ाइन बुनियाद कवर करते हैं, उसके बाद आप स्पेशलाइज़ करते हैं। उपलब्ध विषय संस्थान दर संस्थान अलग होते हैं — IIT Bombay का IDC industrial design, communication design, animation, interaction design, और mobility design कवर करता है। IIT Hyderabad के B.Des में product design, visual design, interaction design, और film and animation में स्पेशलाइज़ेशन ट्रैक हैं। IIT Indore का प्रोग्राम इनोवेशन सिस्टम्स के इर्द-गिर्द बना है — शहरी, स्वास्थ्य, शिक्षा, ऊर्जा।",
    s3p3: "करियर के बारे में: IITs से ताज़ा B.Des ग्रेजुएट मुख्य रूप से टेक सेक्टर, डिज़ाइन कंसल्टेंसी, और प्रोडक्ट कंपनियों में जाते हैं। शुरुआती सैलरी रेंज मोटे तौर पर उन्हीं संस्थानों के B.Tech ग्रेजुएट्स के बराबर होती है — प्लेसमेंट पर ₹8–20 लाख सालाना, जो भूमिका, कंपनी, और स्पेशलाइज़ेशन के हिसाब से बदलती है। ईमानदार बात: निचला स्तर अच्छा है, ऊपरी स्तर ऊँचा है, और रास्ता काफ़ी हद तक इस पर निर्भर करता है कि आप इन चार सालों में क्या बनाते हैं।",
    s4Title: "अगर आप Arts या Commerce से हैं",
    s4p1: "आप UCEED दे सकते हैं। और आप IIT Bombay, IIT Delhi, IIT Hyderabad, और IIT Indore में दाखिला पा सकते हैं — जिनमें देश का सबसे प्रतिष्ठित डिज़ाइन प्रोग्राम (IDC, IIT Bombay) शामिल है। PCM स्ट्रीम प्रतिबंध सिर्फ़ IIT Guwahati, IIT Roorkee, और IIITDM Jabalpur पर लागू होता है।",
    s4p2: "यह कोई सांत्वना पुरस्कार नहीं है। Arts और Commerce के छात्र डिज़ाइन प्रोग्राम में कुछ ऐसा लाते हैं जिसे Science के छात्रों को अक्सर मेहनत से विकसित करना पड़ता है — अनिश्चितता के साथ सहजता, सांस्कृतिक जागरूकता, विज़ुअल भाषा के साथ एक अलग रिश्ता।",
    s4p3: "आपको जिसकी तैयारी करनी होगी: Part A तार्किक तर्क, स्थानिक क्षमता, और English कॉम्प्रिहेंशन परखता है — इनमें से किसी के लिए Science पृष्ठभूमि ज़रूरी नहीं। Part B ड्रॉइंग और डिज़ाइन थिंकिंग परखता है। किसी भी खंड में Physics, Chemistry, या Mathematics पूर्व-शर्त नहीं है।",
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
          <pattern id="uceed-is-it-for-you-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#5563ED" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#uceed-is-it-for-you-grid)" />
      </svg>
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-[#5563ED]/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-[#ff5a1f]/5 rounded-full blur-[60px]" />

      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="uceed-wii-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5563ED" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#5563ED" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="uceed-wii-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff5a1f" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#ff5a1f" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#uceed-wii-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#uceed-wii-wave-grad-2)" />
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

export default function UceedIsItForYouPage() {
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
            {t.s1p1}
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            {t.s1p2}
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-medium">
            {t.s1p3}
          </p>
          <blockquote className="border-l-4 border-primary bg-indigo-50 dark:bg-indigo-950/30 rounded-r-2xl p-6 md:p-8 my-8">
            <p className="text-slate-700 dark:text-slate-300 italic font-medium leading-relaxed mb-4">
              {t.s1Quote}
            </p>
            <footer className="text-primary font-black text-sm not-italic">
              {t.s1QuoteAttr}
            </footer>
          </blockquote>
        </Section>

        <Section number="02" label={t.sectionLabel} title={t.s2Title}>
          <div className="space-y-6">
            <div className="border border-slate-200 dark:border-slate-700 p-6 rounded-2xl bg-white dark:bg-slate-800/50">
              <h4 className="font-black text-lg text-neutral-dark mb-2">{t.q1Title}</h4>
              <p className="text-slate-600 dark:text-slate-400 font-semibold leading-relaxed">
                {t.q1Body}
              </p>
            </div>
            <div className="border border-slate-200 dark:border-slate-700 p-6 rounded-2xl bg-white dark:bg-slate-800/50">
              <h4 className="font-black text-lg text-neutral-dark mb-2">{t.q2Title}</h4>
              <p className="text-slate-600 dark:text-slate-400 font-semibold leading-relaxed">
                {t.q2Body}
              </p>
            </div>
            <div className="border border-slate-200 dark:border-slate-700 p-6 rounded-2xl bg-white dark:bg-slate-800/50">
              <h4 className="font-black text-lg text-neutral-dark mb-2">{t.q3Title}</h4>
              <p className="text-slate-600 dark:text-slate-400 font-semibold leading-relaxed">
                {t.q3Body}
              </p>
            </div>
            <div className="border border-slate-200 dark:border-slate-700 p-6 rounded-2xl bg-white dark:bg-slate-800/50">
              <h4 className="font-black text-lg text-neutral-dark mb-2">{t.q4Title}</h4>
              <p className="text-slate-600 dark:text-slate-400 font-semibold leading-relaxed">
                {t.q4Body}
              </p>
            </div>
          </div>
        </Section>

        <Section number="03" label={t.sectionLabel} title={t.s3Title}>
          <div className="p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40">
            <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-4">
              {t.s3p1}
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-4">
              {t.s3p2}
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
              {t.s3p3}
            </p>
          </div>
        </Section>

        <Section number="04" label={t.sectionLabel} title={t.s4Title}>
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
