"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useLanguage } from "@/context/LanguageContext";

interface Scholarship {
  id: string;
  name: string;
  field: "design" | "fashion" | "law" | "maritime" | "planning" | "general";
  coverage: string;
  eligibility: string;
  process: string;
  details: string;
}

const SCHOLARSHIPS_DATA: Record<"en" | "hi", Scholarship[]> = {
  en: [
    {
      id: "nift-sarthak",
      name: "SARTHAK NIFT Financial Assistance Scheme",
      field: "fashion",
      coverage: "Up to 75% Tuition Fee Waiver (based on family income)",
      eligibility: "Parental income up to ₹8.0 Lakhs per annum. Student must maintain minimum GPA/attendance and not repeat a year.",
      process: "Apply at the campus during the start of the academic year with certified income certificates and tax filing documents.",
      details: "Established to support students from lower and middle-income families across all NIFT campuses. Waiver slabs: 75% for income ≤ ₹2.5L, 50% for income ₹2.5L - ₹4L, and 25% for income ₹4L - ₹8L."
    },
    {
      id: "nlu-mcm",
      name: "NLU Merit-Cum-Means (MCM) Scholarship",
      field: "law",
      coverage: "Partial to Full Tuition Fee Waivers, study material grants",
      eligibility: "Admitted to a National Law University (NLU). Annual parental income under ₹3.0 Lakhs and top CLAT rank/CGPA.",
      process: "Submit application directly to the NLU student welfare office after admissions are finalized. Requires income proof and CLAT rank scorecard.",
      details: "Individual NLUs manage their own MCM funds funded by state governments and alumni. Covers between 25% and 100% of tuition costs."
    },
    {
      id: "imu-mtt",
      name: "Maritime Training Trust (MTT) Scholarship for Female Cadets",
      field: "maritime",
      coverage: "₹50,000 to ₹1,00,000 per annum direct stipend assistance",
      eligibility: "Female Indian nationals enrolled in pre-sea courses at IMU campuses.",
      process: "Apply through the IMU campus administration. Nominations are verified by the Directorate General of Shipping and credited directly to tuition accounts.",
      details: "Initiated by the Maritime Training Trust to promote gender diversity in merchant shipping. Female cadets maintain eligibility by passing semester exams in the first attempt."
    },
    {
      id: "spa-mcm",
      name: "SPA Merit-Cum-Means Scholarship Scheme",
      field: "planning",
      coverage: "Full tuition fee waiver plus monthly pocket allowance",
      eligibility: "B.Plan students at SPA Delhi, Bhopal, or Vijayawada. Parental annual income below ₹4.5 Lakhs.",
      process: "Applications open in August/September. Submit the application format along with a certified income certificate from the competent authority.",
      details: "Funded by the Ministry of Education. Selection is based on JEE Main Paper 3 rank for first-year students and GPA for subsequent years."
    },
    {
      id: "nid-financial-aid",
      name: "NID Financial Aid Scheme",
      field: "design",
      coverage: "Partial to Full Tuition Fee Waivers",
      eligibility: "B.Des students at NID campuses with annual parental income below ₹6.0 Lakhs.",
      process: "Apply at admission or at the start of subsequent semesters. Requires parents' IT returns for the last two financial years.",
      details: "Awarded based on financial need. The scholarship depends on satisfactory jury performance and a clean academic record."
    },
    {
      id: "central-sector",
      name: "Central Sector Scheme of Scholarship for College and University Students",
      field: "general",
      coverage: "₹12,000 per annum for graduation, ₹20,000 for post-graduation",
      eligibility: "Students scoring above the 80th percentile in Class XII for their stream. Family income below ₹4.5 Lakhs per annum.",
      process: "Apply online through the National Scholarship Portal under the Ministry of Education tab. Requires Aadhaar seeding and college verification.",
      details: "A general scholarship program that can be combined with professional degrees at NLUs, SPAs, NIDs, or IMU if state-board percentile cuts are met."
    }
  ],
  hi: [
    {
      id: "nift-sarthak",
      name: "SARTHAK NIFT वित्तीय सहायता योजना",
      field: "fashion",
      coverage: "परिवार की आय के आधार पर 75% तक ट्यूशन फीस में छूट",
      eligibility: "माता-पिता की वार्षिक आय ₹8.0 लाख तक। छात्र को न्यूनतम GPA/उपस्थिति बनाए रखनी होगी और वर्ष नहीं दोहराना होगा।",
      process: "अकादमिक वर्ष की शुरुआत में कैंपस में प्रमाणित आय प्रमाणपत्र और टैक्स दस्तावेज़ के साथ आवेदन करें।",
      details: "यह योजना NIFT के सभी परिसरों में निम्न और मध्य आय वर्ग के छात्रों का समर्थन करने के लिए बनाई गई है। 75% छूट ₹2.5L या उससे कम आय के लिए, 50% ₹2.5L - ₹4L के बीच, और 25% ₹4L - ₹8L के बीच होती है।"
    },
    {
      id: "nlu-mcm",
      name: "NLU मेरिट-कम-मीन्स (MCM) छात्रवृत्ति",
      field: "law",
      coverage: "आंशिक से पूर्ण ट्यूशन फीस छूट, अध्ययन सामग्री अनुदान",
      eligibility: "राष्ट्रीय कानून विश्वविद्यालय में प्रवेशित। माता-पिता की वार्षिक आय ₹3.0 लाख से कम और शीर्ष CLAT रैंक/CGPA।",
      process: "प्रवेश सुनिश्चित होने के बाद NLU छात्र कल्याण कार्यालय में सीधे आवेदन करें। आय प्रमाण और CLAT रैंक स्कोरकार्ड आवश्यक है।",
      details: "व्यक्तिगत NLU राज्य सरकार और पूर्व छात्रों द्वारा वित्त पोषित अपने स्वयं के MCM कोषों का प्रबंधन करते हैं। यह 25% से 100% तक ट्यूशन लागत को कवर करता है।"
    },
    {
      id: "imu-mtt",
      name: "Maritime Training Trust (MTT) महिला कैडेट छात्रवृत्ति",
      field: "maritime",
      coverage: "₹50,000 से ₹1,00,000 प्रति वर्ष प्रत्यक्ष अनुदान",
      eligibility: "IMU परिसरों में प्री-सी कोर्सेज में नामांकित महिला भारतीय नागरिक।",
      process: "IMU कैंपस प्रशासन के माध्यम से आवेदन करें। नामांकन DGS द्वारा सत्यापित किया जाता है और सीधे ट्यूशन खाते में जमा किया जाता है।",
      details: "Maritime Training Trust द्वारा महिला विविधता बढ़ाने के लिए शुरू की गई। पात्रता बनाए रखने के लिए कैडेट को सभी सेमेस्टर परीक्षा पहली बार पास करनी होती है।"
    },
    {
      id: "spa-mcm",
      name: "SPA मेरिट-कम-मीन्स छात्रवृत्ति योजना",
      field: "planning",
      coverage: "पूर्ण ट्यूशन फीस छूट और मासिक वॉलेट भत्ता",
      eligibility: "SPA दिल्ली, भोपाल, या विजयवाड़ा में B.Plan छात्र। माता-पिता की वार्षिक आय ₹4.5 लाख से कम।",
      process: "आवेदन अगस्त/सितंबर में खुलते हैं। आवेदन पत्र के साथ मान्य आय प्रमाण पत्र जमा करें।",
      details: "शिक्षा मंत्रालय द्वारा वित्त पोषित। चयन पहले वर्ष के छात्रों के लिए JEE Main Paper 3 रैंक और बाद के वर्षों के लिए GPA के आधार पर होता है।"
    },
    {
      id: "nid-financial-aid",
      name: "NID वित्तीय सहायता योजना",
      field: "design",
      coverage: "आंशिक से पूर्ण ट्यूशन फीस छूट",
      eligibility: "NID परिसरों के B.Des छात्रों के लिए माता-पिता की वार्षिक आय ₹6.0 लाख से कम।",
      process: "प्रवेश के समय या बाद के सेमेस्टर की शुरुआत में आवेदन करें। पिछली दो वित्तीय वर्षों की आईटी रिटर्न आवश्यक हैं।",
      details: "आर्थिक आवश्यकता के आधार पर प्रदान की जाती है। यह डिज़ाइन जूरी प्रदर्शन और साफ़ अकादमिक रिकॉर्ड पर निर्भर करती है।"
    },
    {
      id: "central-sector",
      name: "केंद्रीय क्षेत्र छात्रवृत्ति योजना",
      field: "general",
      coverage: "स्नातक के लिए ₹12,000 प्रति वर्ष, स्नातकोत्तर के लिए ₹20,000",
      eligibility: "सम्बंधित धारा में Class XII में 80वीं प्रतिशतक से ऊपर अंक प्राप्त करने वाले छात्र। परिवार की आय ₹4.5 लाख प्रति वर्ष से कम।",
      process: "राष्ट्रीय छात्रवृत्ति पोर्टल के माध्यम से ऑनलाइन आवेदन करें। आधार सीडिंग और कॉलेज सत्यापन आवश्यक है।",
      details: "यह सामान्य छात्रवृत्ति कार्यक्रम NLUs, SPAs, NIDs, या IMU में पेशेवर डिग्रियों के साथ जोड़ी जा सकती है यदि आप राज्य- बोर्ड प्रतिशतक कट दर्ज कराते हैं।"
    }
  ]
};

const translations = {
  en: {
    pageHeaderBadge: "Financial Aid & Scholarships Directory",
    pageTitle: "Scholarship Directory",
    pageDescription: "Find merit-cum-means assistance programs, tuition fee waivers, and state allowances available across leading Design, Fashion, Law, Maritime, and City Planning institutes in India.",
    searchPlaceholder: "Search by scholarship name, eligibility, or income slab...",
    allSlabs: "All Slabs",
    design: "Design",
    fashion: "Fashion",
    law: "Law",
    maritime: "Maritime",
    planning: "Planning",
    noResultsTitle: "No matching scholarships found",
    noResultsDescription: "Try adjusting your filters or search keywords.",
    institutionalGrant: "Institutional Grant",
    financialBenefit: "Financial Benefit",
    eligibleLabel: "Who is Eligible",
    applyLabel: "How to Apply",
  },
  hi: {
    pageHeaderBadge: "वित्तीय सहायता और छात्रवृत्ति निर्देशिका",
    pageTitle: "छात्रवृत्ति निर्देशिका",
    pageDescription: "भारत के प्रमुख डिज़ाइन, फ़ैशन, क़ानून, समुद्री और शहरी योजना संस्थानों में उपलब्ध मेरिट-कम-मीन्स सहायता कार्यक्रम, ट्यूशन फी वाउचर और राज्य भत्तों को खोजें।",
    searchPlaceholder: "छात्रवृत्ति नाम, पात्रता, या आय श्रेणी के अनुसार खोजें...",
    allSlabs: "सभी श्रेणियाँ",
    design: "डिज़ाइन",
    fashion: "फ़ैशन",
    law: "क़ानून",
    maritime: "समुद्र वाहन",
    planning: "योजना",
    noResultsTitle: "कोई मिलती-जुलती छात्रवृत्ति नहीं मिली",
    noResultsDescription: "अपने फ़िल्टर या खोज शब्दों को समायोजित करके पुनः प्रयास करें।",
    institutionalGrant: "संस्थागत अनुदान",
    financialBenefit: "वित्तीय लाभ",
    eligibleLabel: "पात्र कौन है",
    applyLabel: "कैसे आवेदन करें",
  }
};

const FIELD_THEMES = {
  en: {
    design: { bg: "bg-indigo-50 text-indigo-700 border-indigo-100", label: "Design" },
    fashion: { bg: "bg-pink-50 text-pink-700 border-pink-100", label: "Fashion" },
    law: { bg: "bg-emerald-50 text-emerald-700 border-emerald-100", label: "Law" },
    maritime: { bg: "bg-orange-50 text-orange-700 border-orange-100", label: "Maritime" },
    planning: { bg: "bg-teal-50 text-teal-700 border-teal-100", label: "Planning" },
    general: { bg: "bg-slate-100 text-slate-700 border-slate-200", label: "General Aid" },
  },
  hi: {
    design: { bg: "bg-indigo-50 text-indigo-700 border-indigo-100", label: "डिज़ाइन" },
    fashion: { bg: "bg-pink-50 text-pink-700 border-pink-100", label: "फ़ैशन" },
    law: { bg: "bg-emerald-50 text-emerald-700 border-emerald-100", label: "क़ानून" },
    maritime: { bg: "bg-orange-50 text-orange-700 border-orange-100", label: "समुद्र वाहन" },
    planning: { bg: "bg-teal-50 text-teal-700 border-teal-100", label: "योजना" },
    general: { bg: "bg-slate-100 text-slate-700 border-slate-200", label: "जनरल सहायता" },
  }
};

export default function ScholarshipsPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const scholarshipsData = SCHOLARSHIPS_DATA[language];
  const fieldThemes = FIELD_THEMES[language];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedField, setSelectedField] = useState<
    "all" | "design" | "fashion" | "law" | "maritime" | "planning" | "general"
  >("all");

  const filteredScholarships = scholarshipsData.filter((sch) => {
    const matchesSearch =
      sch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sch.details.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sch.eligibility.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesField = selectedField === "all" || sch.field === selectedField;

    return matchesSearch && matchesField;
  });

  return (
    <main className="flex-grow flex flex-col bg-slate-50 min-h-screen">
      <section className="relative overflow-hidden bg-white border-b border-slate-200/60 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.12] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="scholarships-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#10b981" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#scholarships-grid)" />
          </svg>
          <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[80px]" />
          <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-teal-500/5 rounded-full blur-[60px]" />
        </div>

        <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 relative z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-black uppercase tracking-wider mb-6">
            <Icon icon="solar:diploma-bold" className="w-4 h-4" />
            {t.pageHeaderBadge}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-6 text-neutral-dark">
            {t.pageTitle}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed font-medium">
            {t.pageDescription}
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto w-full px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row gap-4 mb-10 items-stretch md:items-center">
          <div className="flex-1 relative">
            <Icon icon="solar:magnifer-bold" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 font-medium text-slate-700 shadow-sm"
            />
          </div>
          <div className="flex flex-wrap gap-2">
          {([
            { id: "all", label: t.allSlabs, icon: "solar:widget-bold-duotone" },
            { id: "design", label: t.design, icon: "solar:pen-tool-bold-duotone" },
            { id: "fashion", label: t.fashion, icon: "solar:hanger-bold-duotone" },
            { id: "law", label: t.law, icon: "solar:scale-bold-duotone" },
            { id: "maritime", label: t.maritime, icon: "solar:anchor-bold-duotone" },
            { id: "planning", label: t.planning, icon: "solar:compass-bold-duotone" }
          ] as const).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedField(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-sm ${
                selectedField === tab.id
                  ? "bg-emerald-600 text-white"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              <Icon icon={tab.icon} className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>
        </div>

        {filteredScholarships.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {filteredScholarships.map((sch) => {
              const theme = fieldThemes[sch.field];
              return (
                <div
                  key={sch.id}
                  className="bg-white border border-slate-200 rounded-[2rem] p-6 md:p-10 shadow-sm relative overflow-hidden transition-all hover:border-slate-300"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <span className={`px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider border ${theme.bg}`}>
                      {theme.label}
                    </span>
                    <span className="text-xs font-bold text-slate-400">{t.institutionalGrant}</span>
                  </div>

                  <h3 className="text-2xl font-black text-neutral-dark mb-4 leading-tight">
                    {sch.name}
                  </h3>

                  <p className="text-slate-600 font-semibold mb-6 leading-relaxed">
                    {sch.details}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">{t.financialBenefit}</h4>
                      <p className="text-sm font-black text-emerald-600">{sch.coverage}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">{t.eligibleLabel}</h4>
                      <p className="text-sm font-medium text-slate-705 leading-relaxed">{sch.eligibility}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">{t.applyLabel}</h4>
                      <p className="text-sm font-medium text-slate-700 leading-relaxed">{sch.process}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-slate-200 rounded-[2rem]">
            <Icon icon="solar:clipboard-remove-bold-duotone" className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-black text-slate-700 mb-2">{t.noResultsTitle}</h3>
            <p className="text-slate-400 text-sm font-medium">{t.noResultsDescription}</p>
          </div>
        )}
      </section>
    </main>
  );
}
