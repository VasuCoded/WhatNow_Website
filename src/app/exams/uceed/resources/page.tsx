"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    crumbExams: "Exams",
    crumbHere: "Resources & Prep",
    sectionLabel: "Section",
    headerTitle: "UCEED — Prep Plan & Study Material",
    s1Title: "Books Actually Worth Your Money",
    s1Intro: "You do not need ₹1L coaching packages to clear UCEED. In fact, most standard coaching study modules recycle standard aptitude questions. Invest in these three foundational books instead:",
    book1Tag: "Visual & Sketching",
    book1Title: "Design Drawing",
    book1Desc: "By Francis D.K. Ching. The absolute gold standard for learning perspective, orthographic projection, volumetric layouts, and line weights.",
    book2Tag: "Cognitive Design",
    book2Title: "The Design of Everyday Things",
    book2Desc: "By Don Norman. Essential reading for understanding industrial logic, human-centered design, mapping, and product feedback systems.",
    book3Tag: "Visual Aptitude",
    book3Title: "Universal Principles of Design",
    book3Desc: "By William Lidwell. Provides a clear breakdown of composition rules, gestalt laws, and structural ratios tested in Part A.",
    s2Title: "Part A & Part B Self-Study Timeline",
    partAHeading: "Part A Preparation Strategy (Computer Based)",
    partAIntro: "Part A carries 200 marks and acts as the screening filter. Focus heavily on:",
    partAList: [
      "Spatial Visualization: Practice folding/unfolding 3D cubes, paper cutting patterns, and identifying mirror projections.",
      "Gestalt Laws & Typography: Study visual composition, font weights, tracking/kerning principles, and color models (RGB vs CMYK).",
      "Mock Analysis: Attempt at least 15 previous years question papers under timed conditions to get used to the negative marking scheme.",
    ],
    topperHeading: "What actually worked — a topper's approach",
    topperQuote: "The best resource is definitely Google. Pick any question from the previous papers and research the heck out of it. Find out any related topics to it and research that too. Do this for all papers and all exams. This is honestly the best strategy to prepare for Part A.",
    qualifierAttr: "— A UCEED 2026 qualifier (AIR in the 30s), in conversation with WhatNow",
    topperP1: "This is one of the most useful pieces of advice we've collected. UCEED Part A is not a closed-universe syllabus exam. Questions touch on scientific principles, design history, everyday object mechanics, photography concepts like depth of field, geometry, and cultural references. The best way to map the territory is to work through every past year question and treat each unfamiliar topic as a starting point for deeper reading. One question about a Mobius strip becomes a 20-minute read on topology and how it appears in design. That's how the knowledge stacks.",
    topperP2: "Don't just solve PYQs — analyse them afterwards. There are question types that repeat across years. When you analyse them, you start to see how to approach them, and you pick up concepts along the way.",
    msqHeading: "MSQ strategy — the section that quietly destroys scores",
    msqQuote: "At first I only attempted the questions that I knew for sure and only marked the answers I knew for sure. Then I went back to the beginning of the section and solved for each question and option and only marked the answers I was absolutely sure about. I didn't want to risk losing marks unnecessarily.",
    msqP1: "The two-pass approach is a proven MSQ strategy. First pass: only mark questions where you are certain of all correct options and have not identified any wrong ones. Leave everything else blank. Second pass: go back and work through each remaining question methodically, option by option. The rule is strict: if you're not certain an option is correct, don't select it.",
    msqP2: "The risk-reward on MSQs is asymmetric — selecting one wrong option gives you -1 regardless of how many correct options you also selected. Conservative selection is not timidity, it is the correct strategy.",
    partBHeading: "Part B Preparation Strategy (Sketching)",
    partBIntro: "Part B carries 60 marks and is evaluated only if you clear the Part A cutoff. Focus on:",
    partBList: [
      "Perspective Drawing: Master 1-point, 2-point, and 3-point perspectives. Practice drawing everyday household scenes (kitchens, street views).",
      "Human Figures: Practice basic anatomy ratios (8-head rule) and posture sketching. Do not use coloring; keep sketches clean with pencil shading and linework.",
    ],
    timeHeading: "Time management on exam day",
    timeQuote: "I spent 45 minutes on the drawing question and 15 minutes on the aptitude question. Initially I had aimed to spend only 35 minutes on drawing but time slipped away. I had to do the aptitude question very hastily and I feel I did not do my best on that.",
    timeAttr: "— A UCEED 2026 qualifier (AIR in the 30s), in conversation with WhatNow",
    timeP1: "The design aptitude question is worth 50 marks — equal to the drawing question. Both together make up Part B's 100 marks, which is one-third of your total score. Losing effective time on the aptitude question because of overrun on drawing is one of the most common Part B mistakes.",
    timeP2: "Target: 35–40 minutes on the drawing question, 20–25 minutes on the design aptitude question. Practice this timing during preparation — not just the drawing itself. Timed Part B practice is a different skill from untimed drawing practice.",
    partBP1: "Being honest about this: existing drawing ability is an advantage in UCEED Part B. It doesn't determine your outcome, but it shortens your preparation timeline significantly. Students with strong aptitude and weaker drawing can improve in 6 months of consistent practice — but you cannot shortcut the time investment.",
    partBP2: "The more important underlying skill for Part B is observation — the ability to look at a thing and translate it accurately onto paper. Perspective, proportion, and composition can be learned. Observation has to be developed as a daily habit.",
    s3Title: "Free Online Material",
    s3Heading: "Official Question Papers & Tutorials",
    s3Body: "The official IIT Bombay UCEED website offers past papers dating back to 2015. Download all of them. Use free YouTube channels (like Stuff You Look At or Kaphal Studio) to learn perspective basics and watch mock paper solutions.",
    s3Cta: "Download Official Papers",
    s4Title: "Coaching vs self-study — the honest take",
    s4p1: "For Part A: self-study is genuinely viable if you work through the PYQs thoroughly and research each topic systematically. One of our interview contributors cracked a rank in the top 50 having studied only 5 past papers, practised 10 Part B questions, and done no mock tests.",
    s4p2: "For Part B: the limitation of self-study is feedback. Drawing improves faster when someone with trained eyes critiques your work — not because you can't self-assess, but because it's genuinely difficult to spot your own compositional or perspective errors. This doesn't require expensive coaching — it could be a mentor, a senior from a design background, or a community. But some form of external critique on Part B sketches is strongly recommended over purely solo practice.",
    s4p3: "On timeline: 6 months of focused preparation was sufficient for our interview contributor, who had a strong drawing background. For someone starting from weaker drawing ability, the same 6 months may produce different results depending on consistency of Part B practice. One year of structured preparation is the safer planning assumption for most students. The two-attempt limit — and the consecutive-year restriction — means there is no margin for a casual first attempt.",
  },
  hi: {
    crumbExams: "परीक्षाएँ",
    crumbHere: "रिसोर्सेज़ और तैयारी",
    sectionLabel: "खंड",
    headerTitle: "UCEED — तैयारी की योजना और अध्ययन सामग्री",
    s1Title: "जो किताबें वाकई आपके पैसे के लायक हैं",
    s1Intro: "UCEED पास करने के लिए आपको ₹1L वाले कोचिंग पैकेज की ज़रूरत नहीं है। दरअसल, ज़्यादातर मानक कोचिंग मॉड्यूल वही पुराने ऐप्टीट्यूड सवाल दोहराते रहते हैं। इसके बजाय इन तीन बुनियादी किताबों में निवेश करें:",
    book1Tag: "विज़ुअल और स्केचिंग",
    book1Title: "Design Drawing",
    book1Desc: "लेखक Francis D.K. Ching। परिप्रेक्ष्य (perspective), ऑर्थोग्राफ़िक प्रोजेक्शन, वॉल्यूमेट्रिक लेआउट, और लाइन वेट सीखने का बिल्कुल सर्वश्रेष्ठ मानक।",
    book2Tag: "कॉग्निटिव डिज़ाइन",
    book2Title: "The Design of Everyday Things",
    book2Desc: "लेखक Don Norman। औद्योगिक तर्क, मानव-केंद्रित डिज़ाइन, मैपिंग, और प्रोडक्ट फ़ीडबैक सिस्टम समझने के लिए ज़रूरी पठन।",
    book3Tag: "विज़ुअल ऐप्टीट्यूड",
    book3Title: "Universal Principles of Design",
    book3Desc: "लेखक William Lidwell। Part A में परखे जाने वाले कम्पोज़िशन नियमों, gestalt लॉ, और संरचनात्मक अनुपातों का स्पष्ट विश्लेषण देती है।",
    s2Title: "Part A और Part B सेल्फ-स्टडी टाइमलाइन",
    partAHeading: "Part A तैयारी रणनीति (कंप्यूटर आधारित)",
    partAIntro: "Part A में 200 अंक होते हैं और यह स्क्रीनिंग फ़िल्टर का काम करता है। इन पर ज़ोर दें:",
    partAList: [
      "स्थानिक विज़ुअलाइज़ेशन: 3D क्यूब को मोड़ने/खोलने, पेपर कटिंग पैटर्न, और मिरर प्रोजेक्शन पहचानने का अभ्यास करें।",
      "Gestalt लॉ और टाइपोग्राफ़ी: विज़ुअल कम्पोज़िशन, फ़ॉन्ट वेट, ट्रैकिंग/कर्निंग सिद्धांत, और कलर मॉडल (RGB बनाम CMYK) का अध्ययन करें।",
      "मॉक विश्लेषण: नेगेटिव मार्किंग स्कीम की आदत डालने के लिए समयबद्ध परिस्थितियों में कम से कम 15 पिछले वर्षों के प्रश्न पत्र हल करें।",
    ],
    topperHeading: "जो वाकई काम आया — एक टॉपर का तरीका",
    topperQuote: "सबसे अच्छा रिसोर्स निश्चित रूप से Google है। पिछले पेपरों से कोई भी सवाल चुनें और उस पर जमकर रिसर्च करें। उससे जुड़े किसी भी टॉपिक का पता लगाएँ और उस पर भी रिसर्च करें। सभी पेपरों और सभी परीक्षाओं के लिए यही करें। Part A की तैयारी के लिए ईमानदारी से यही सबसे अच्छी रणनीति है।",
    qualifierAttr: "— एक UCEED 2026 क्वालिफ़ायर (AIR 30 के आसपास), WhatNow से बातचीत में",
    topperP1: "यह उन सबसे उपयोगी सलाहों में से एक है जो हमने इकट्ठा की हैं। UCEED Part A कोई बंद-दायरे वाला सिलेबस एग्ज़ाम नहीं है। सवाल वैज्ञानिक सिद्धांतों, डिज़ाइन इतिहास, रोज़मर्रा की वस्तुओं की मैकेनिक्स, depth of field जैसे फ़ोटोग्राफ़ी कॉन्सेप्ट, ज्यामिति, और सांस्कृतिक संदर्भों को छूते हैं। इस इलाके का नक्शा बनाने का सबसे अच्छा तरीका है हर पिछले वर्ष के सवाल को हल करना और हर अपरिचित टॉपिक को गहरे पठन की शुरुआत मानना। Mobius strip के बारे में एक सवाल टोपोलॉजी और वह डिज़ाइन में कैसे दिखती है, इस पर 20 मिनट का पठन बन जाता है। इसी तरह ज्ञान जुड़ता जाता है।",
    topperP2: "सिर्फ़ PYQ हल मत करें — उसके बाद उनका विश्लेषण करें। कुछ सवालों के प्रकार सालों-साल दोहराए जाते हैं। जब आप उनका विश्लेषण करते हैं, तो आप समझने लगते हैं कि उन्हें कैसे हल करना है, और साथ-साथ कॉन्सेप्ट भी सीखते जाते हैं।",
    msqHeading: "MSQ रणनीति — वह खंड जो चुपके से स्कोर बर्बाद कर देता है",
    msqQuote: "शुरुआत में मैंने सिर्फ़ वही सवाल हल किए जो मुझे पक्के पता थे और सिर्फ़ वही जवाब मार्क किए जिनके बारे में मुझे पूरा यकीन था। फिर मैं खंड की शुरुआत में वापस गया और हर सवाल और विकल्प के लिए हल किया और सिर्फ़ वही जवाब मार्क किए जिनके बारे में मुझे पूरी तरह यकीन था। मैं बेवजह अंक गँवाने का जोखिम नहीं लेना चाहता था।",
    msqP1: "टू-पास तरीका एक आज़माई हुई MSQ रणनीति है। पहला पास: सिर्फ़ वही सवाल मार्क करें जहाँ आप सभी सही विकल्पों के बारे में निश्चित हैं और कोई गलत विकल्प नहीं पहचाना है। बाकी सब खाली छोड़ दें। दूसरा पास: वापस जाएँ और हर बचे हुए सवाल पर विकल्प-दर-विकल्प व्यवस्थित ढंग से काम करें। नियम सख़्त है: अगर आप निश्चित नहीं कि कोई विकल्प सही है, तो उसे न चुनें।",
    msqP2: "MSQ पर रिस्क-रिवॉर्ड असमान है — एक गलत विकल्प चुनने पर आपको -1 मिलता है, चाहे आपने कितने ही सही विकल्प साथ में चुने हों। संभलकर चुनाव करना कायरता नहीं, सही रणनीति है।",
    partBHeading: "Part B तैयारी रणनीति (स्केचिंग)",
    partBIntro: "Part B में 60 अंक होते हैं और इसका मूल्यांकन तभी होता है जब आप Part A कटऑफ़ पार करते हैं। इन पर ध्यान दें:",
    partBList: [
      "परिप्रेक्ष्य ड्रॉइंग: 1-point, 2-point, और 3-point परिप्रेक्ष्य में महारत हासिल करें। रोज़मर्रा के घरेलू दृश्य (रसोई, गली के दृश्य) बनाने का अभ्यास करें।",
      "मानव आकृतियाँ: बुनियादी शरीर रचना अनुपात (8-head नियम) और मुद्रा स्केचिंग का अभ्यास करें। रंग का इस्तेमाल न करें; स्केच को पेंसिल शेडिंग और लाइनवर्क के साथ साफ़ रखें।",
    ],
    timeHeading: "परीक्षा वाले दिन समय प्रबंधन",
    timeQuote: "मैंने ड्रॉइंग सवाल पर 45 मिनट और ऐप्टीट्यूड सवाल पर 15 मिनट लगाए। शुरू में मैंने ड्रॉइंग पर सिर्फ़ 35 मिनट लगाने का लक्ष्य रखा था पर समय निकल गया। मुझे ऐप्टीट्यूड सवाल बहुत जल्दबाज़ी में करना पड़ा और मुझे लगता है मैंने उस पर अपना सर्वश्रेष्ठ नहीं दिया।",
    timeAttr: "— एक UCEED 2026 क्वालिफ़ायर (AIR 30 के आसपास), WhatNow से बातचीत में",
    timeP1: "डिज़ाइन ऐप्टीट्यूड सवाल 50 अंक का होता है — ड्रॉइंग सवाल के बराबर। दोनों मिलकर Part B के 100 अंक बनाते हैं, जो आपके कुल स्कोर का एक-तिहाई है। ड्रॉइंग पर समय बढ़ जाने के कारण ऐप्टीट्यूड सवाल पर असरदार समय गँवाना Part B की सबसे आम गलतियों में से एक है।",
    timeP2: "लक्ष्य: ड्रॉइंग सवाल पर 35–40 मिनट, डिज़ाइन ऐप्टीट्यूड सवाल पर 20–25 मिनट। तैयारी के दौरान इस टाइमिंग का अभ्यास करें — सिर्फ़ ड्रॉइंग का नहीं। समयबद्ध Part B अभ्यास बिना समय के ड्रॉइंग अभ्यास से एक अलग कुशलता है।",
    partBP1: "इस बारे में ईमानदार रहें: मौजूदा ड्रॉइंग क्षमता UCEED Part B में एक फ़ायदा है। यह आपका नतीजा तय नहीं करती, पर आपकी तैयारी की समयसीमा को काफ़ी छोटा कर देती है। मज़बूत ऐप्टीट्यूड और कमज़ोर ड्रॉइंग वाले छात्र 6 महीने के लगातार अभ्यास में सुधर सकते हैं — पर आप समय के इस निवेश को छोटा नहीं कर सकते।",
    partBP2: "Part B के लिए ज़्यादा अहम अंतर्निहित कुशलता है अवलोकन — किसी चीज़ को देखकर उसे सटीकता से कागज़ पर उतारने की क्षमता। परिप्रेक्ष्य, अनुपात, और कम्पोज़िशन सीखे जा सकते हैं। अवलोकन को रोज़ की आदत के रूप में विकसित करना पड़ता है।",
    s3Title: "मुफ़्त ऑनलाइन सामग्री",
    s3Heading: "आधिकारिक प्रश्न पत्र और ट्यूटोरियल",
    s3Body: "आधिकारिक IIT Bombay UCEED वेबसाइट 2015 तक के पुराने पेपर देती है। उन सभी को डाउनलोड करें। परिप्रेक्ष्य की बुनियाद सीखने और मॉक पेपर सॉल्यूशन देखने के लिए मुफ़्त YouTube चैनल (जैसे Stuff You Look At या Kaphal Studio) का इस्तेमाल करें।",
    s3Cta: "आधिकारिक पेपर डाउनलोड करें",
    s4Title: "कोचिंग बनाम सेल्फ-स्टडी — ईमानदार राय",
    s4p1: "Part A के लिए: अगर आप PYQ को अच्छी तरह हल करते हैं और हर टॉपिक पर व्यवस्थित रिसर्च करते हैं, तो सेल्फ-स्टडी सचमुच कारगर है। हमारे एक इंटरव्यू सहयोगी ने सिर्फ़ 5 पुराने पेपर पढ़कर, 10 Part B सवालों का अभ्यास करके, और कोई मॉक टेस्ट दिए बिना टॉप 50 में रैंक हासिल की।",
    s4p2: "Part B के लिए: सेल्फ-स्टडी की सीमा फ़ीडबैक है। जब प्रशिक्षित नज़रों वाला कोई आपके काम की क्रिटीक करता है तो ड्रॉइंग तेज़ी से सुधरती है — इसलिए नहीं कि आप खुद आकलन नहीं कर सकते, बल्कि इसलिए कि अपनी ही कम्पोज़िशन या परिप्रेक्ष्य की गलतियाँ पकड़ना सचमुच मुश्किल है। इसके लिए महँगी कोचिंग की ज़रूरत नहीं — यह कोई मेंटर, डिज़ाइन पृष्ठभूमि का कोई सीनियर, या कोई कम्युनिटी हो सकती है। पर Part B स्केच पर किसी न किसी रूप में बाहरी क्रिटीक, पूरी तरह अकेले अभ्यास से ज़्यादा अनुशंसित है।",
    s4p3: "समयसीमा के बारे में: हमारे इंटरव्यू सहयोगी के लिए 6 महीने की केंद्रित तैयारी काफ़ी थी, जिसकी ड्रॉइंग पृष्ठभूमि मज़बूत थी। कमज़ोर ड्रॉइंग क्षमता से शुरू करने वाले के लिए, वही 6 महीने Part B अभ्यास की निरंतरता के हिसाब से अलग नतीजे दे सकते हैं। ज़्यादातर छात्रों के लिए एक साल की व्यवस्थित तैयारी ज़्यादा सुरक्षित योजना मानी जाती है। दो-प्रयास की सीमा — और लगातार-वर्ष का प्रतिबंध — का मतलब है कि लापरवाह पहले प्रयास की कोई गुंजाइश नहीं है।",
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
          <pattern id="uceed-resources-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#5563ED" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#uceed-resources-grid)" />
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

export default function UceedResourcesPage() {
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 bg-white dark:bg-slate-800/50 shadow-xs">
              <span className="text-xs font-black uppercase tracking-wider text-primary block mb-2">{t.book1Tag}</span>
              <h4 className="font-black text-lg text-neutral-dark mb-2">{t.book1Title}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                {t.book1Desc}
              </p>
            </div>
            <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 bg-white dark:bg-slate-800/50 shadow-xs">
              <span className="text-xs font-black uppercase tracking-wider text-primary block mb-2">{t.book2Tag}</span>
              <h4 className="font-black text-lg text-neutral-dark mb-2">{t.book2Title}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                {t.book2Desc}
              </p>
            </div>
            <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 bg-white dark:bg-slate-800/50 shadow-xs">
              <span className="text-xs font-black uppercase tracking-wider text-primary block mb-2">{t.book3Tag}</span>
              <h4 className="font-black text-lg text-neutral-dark mb-2">{t.book3Title}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                {t.book3Desc}
              </p>
            </div>
          </div>
        </Section>

        <Section number="02" label={t.sectionLabel} title={t.s2Title}>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h4 className="font-black text-lg text-neutral-dark mb-2">{t.partAHeading}</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-semibold mb-3">
                {t.partAIntro}
              </p>
              <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 font-semibold space-y-1">
                {t.partAList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="mt-8">
                <h5 className="font-black text-base text-neutral-dark mb-4">{t.topperHeading}</h5>
                <blockquote className="border-l-4 border-primary bg-indigo-50 dark:bg-indigo-950/30 rounded-r-2xl p-6 mb-4">
                  <p className="text-slate-700 dark:text-slate-300 italic font-medium leading-relaxed mb-3">
                    {t.topperQuote}
                  </p>
                  <footer className="text-primary font-black text-sm not-italic">{t.qualifierAttr}</footer>
                </blockquote>
                <p className="text-slate-600 dark:text-slate-400 font-semibold leading-relaxed text-sm mb-3">
                  {t.topperP1}
                </p>
                <p className="text-slate-600 dark:text-slate-400 font-semibold leading-relaxed text-sm">
                  {t.topperP2}
                </p>
              </div>
              <div className="mt-8">
                <h5 className="font-black text-base text-neutral-dark mb-4">{t.msqHeading}</h5>
                <blockquote className="border-l-4 border-primary bg-indigo-50 dark:bg-indigo-950/30 rounded-r-2xl p-6 mb-4">
                  <p className="text-slate-700 dark:text-slate-300 italic font-medium leading-relaxed mb-3">
                    {t.msqQuote}
                  </p>
                  <footer className="text-primary font-black text-sm not-italic">{t.qualifierAttr}</footer>
                </blockquote>
                <p className="text-slate-600 dark:text-slate-400 font-semibold leading-relaxed text-sm mb-3">
                  {t.msqP1}
                </p>
                <p className="text-slate-600 dark:text-slate-400 font-semibold leading-relaxed text-sm">
                  {t.msqP2}
                </p>
              </div>
            </div>
            <div className="border-l-4 border-orange-500 pl-6">
              <h4 className="font-black text-lg text-neutral-dark mb-2">{t.partBHeading}</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-semibold mb-3">
                {t.partBIntro}
              </p>
              <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 font-semibold space-y-1">
                {t.partBList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="mt-8">
                <h5 className="font-black text-base text-neutral-dark mb-4">{t.timeHeading}</h5>
                <blockquote className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-950/30 rounded-r-2xl p-6 mb-4">
                  <p className="text-slate-700 dark:text-slate-300 italic font-medium leading-relaxed mb-3">
                    {t.timeQuote}
                  </p>
                  <footer className="text-orange-600 font-black text-sm not-italic">{t.timeAttr}</footer>
                </blockquote>
                <p className="text-slate-600 dark:text-slate-400 font-semibold leading-relaxed text-sm mb-3">
                  {t.timeP1}
                </p>
                <p className="text-slate-600 dark:text-slate-400 font-semibold leading-relaxed text-sm">
                  {t.timeP2}
                </p>
              </div>
              <div className="mt-8">
                <p className="text-slate-600 dark:text-slate-400 font-semibold leading-relaxed text-sm mb-3">
                  {t.partBP1}
                </p>
                <p className="text-slate-600 dark:text-slate-400 font-semibold leading-relaxed text-sm">
                  {t.partBP2}
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section number="03" label={t.sectionLabel} title={t.s3Title}>
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-black text-neutral-dark mb-4">{t.s3Heading}</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-semibold mb-4">
              {t.s3Body}
            </p>
            <Link href="https://www.uceed.iitb.ac.in" className="inline-block bg-primary hover:bg-primary/95 text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3 rounded-xl shadow-md transition-all">
              {t.s3Cta}
            </Link>
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
