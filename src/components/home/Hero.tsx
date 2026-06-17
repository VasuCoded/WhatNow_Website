"use client";

import Marquee from "./Marquee";
import Button from "../ui/Button";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    kicker: "Unbiased careers & exams, in plain language",
    pre: "Every option after Class 12,",
    highlight: "mapped by the seniors who took it.",
    subtitle:
      "No paywall, no email gate, no upsell — just honest roadmaps for the careers and exams your counsellor skipped.",
    explore: "Explore Careers",
    browseExams: "Browse Exams",
    trust1: "100% sponsor-free",
    trust2: "₹0, forever",
    trust3: "Written by seniors who did it",
  },
  hi: {
    kicker: "निष्पक्ष करियर और परीक्षाएं, सीधी भाषा में",
    pre: "12वीं के बाद हर विकल्प —",
    highlight: "उन्हीं सीनियर्स से जिन्होंने इसे चुना।",
    subtitle:
      "कोई पेवॉल नहीं, कोई ईमेल गेट नहीं, कोई अपसेल नहीं — बस उन करियर और परीक्षाओं के लिए ईमानदार रोडमैप जो आपके काउंसलर ने छोड़ दिए।",
    explore: "करियर खोजें",
    browseExams: "परीक्षाएं देखें",
    trust1: "100% प्रायोजक-मुक्त",
    trust2: "₹0, हमेशा के लिए",
    trust3: "उन सीनियर्स द्वारा लिखित जिन्होंने यह किया",
  },
};

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.33331 8H12.6666M12.6666 8L7.99998 3.33334M12.6666 8L7.99998 12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  const trust = [
    { icon: "solar:verified-check-bold-duotone", label: t.trust1, color: "text-secondary" },
    { icon: "solar:banknote-bold-duotone", label: t.trust2, color: "text-emerald-600" },
    { icon: "solar:users-group-rounded-bold-duotone", label: t.trust3, color: "text-primary" },
  ];

  return (
    <main className="flex-1">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 lg:pt-20 lg:pb-20">
        {/* Kicker */}
        <div className="flex items-center gap-3 mb-7">
          <span className="h-px w-8 sm:w-10 bg-secondary shrink-0" />
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-secondary font-sans">
            {t.kicker}
          </span>
        </div>

        {/* Display headline */}
        <h1 className="font-heading text-[2.6rem] leading-[1.06] sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-black text-neutral-dark max-w-5xl">
          {t.pre}{" "}
          <span className="relative inline-block">
            <span className="hero-highlight italic font-medium text-secondary">{t.highlight}</span>
            <svg
              className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-2.5 sm:h-3 text-secondary pointer-events-none"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M 2 4 Q 50 8 98 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
              <path d="M 6 6 Q 50 9 94 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
            </svg>
          </span>
        </h1>

        {/* Subhead */}
        <p className="mt-8 text-gray-600 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed font-sans font-medium">
          {t.subtitle}
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-row flex-wrap items-center gap-4">
          <Link href="/careers">
            <Button variant="primary" icon={<ArrowIcon />}>
              {t.explore}
            </Button>
          </Link>
          <Link href="/exams">
            <Button variant="outline">{t.browseExams}</Button>
          </Link>
        </div>

        {/* Trust motif — replaces the stock hero image with authored credibility */}
        <ul className="mt-12 lg:mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-slate-200/70 pt-7 max-w-3xl list-none p-0 font-sans">
          {trust.map((item) => (
            <li key={item.label} className="flex items-center gap-2.5">
              <Icon icon={item.icon} className={`w-5 h-5 ${item.color}`} />
              <span className="text-sm font-bold text-slate-700">{item.label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Marquee Section — the homepage's single signature motion */}
      <div className="w-full mb-16 lg:mb-24">
        <Marquee />
      </div>
    </main>
  );
}
