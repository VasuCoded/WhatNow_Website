"use client";

import Marquee from "./Marquee";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    kicker: "Unbiased careers & exams, in plain language",
    pre: "Every option after",
    grade: "12th grade",
    tagline: "Mapped by the seniors who took it",
    subtitle:
      "No paywall, no email gate, no upsell — just honest roadmaps for the careers and exams your counsellor skipped.",
    explore: "Explore Careers",
    browseExams: "Browse Exams",
    trust1: "100% sponsor-free",
    trust2: "₹0, forever",
    trust3: "Written by seniors who did it",
    alt: "Students weighing their options after Class 12",
  },
  hi: {
    kicker: "निष्पक्ष करियर और परीक्षाएं, सीधी भाषा में",
    pre: "12वीं के बाद",
    grade: "हर विकल्प",
    tagline: "उन्हीं सीनियर्स से जिन्होंने इसे चुना",
    subtitle:
      "कोई पेवॉल नहीं, कोई ईमेल गेट नहीं, कोई अपसेल नहीं — बस उन करियर और परीक्षाओं के लिए ईमानदार रोडमैप जो आपके काउंसलर ने छोड़ दिए।",
    explore: "करियर खोजें",
    browseExams: "परीक्षाएं देखें",
    trust1: "100% प्रायोजक-मुक्त",
    trust2: "₹0, हमेशा के लिए",
    trust3: "उन सीनियर्स द्वारा लिखित जिन्होंने यह किया",
    alt: "12वीं के बाद अपने विकल्पों पर विचार करते छात्र",
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
      <section className="relative overflow-hidden">
        {/* Hero background: a blurred scenery photo over a soft colour base.
            Drop a landscape at /public/hero-bg.jpg; until then the colour base
            + drifting blobs show through. */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
          {/* soft colour base (also the fallback when no photo is present) */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/80 via-sky-50/50 to-white" />
          {/* blurred scenery — scaled up so the blur has no hard edges */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-110 blur-2xl opacity-70"
            style={{ backgroundImage: "url(/hero-bg.jpg)" }}
          />
          {/* drifting colour blobs for extra life */}
          <div className="aurora-blob absolute -top-24 -left-24 w-[440px] h-[440px] rounded-full bg-primary/25 blur-[120px]" />
          <div className="aurora-blob absolute -top-10 right-[-80px] w-[520px] h-[520px] rounded-full bg-secondary/20 blur-[130px]" style={{ animationDelay: "-7s" }} />
          <div className="aurora-blob absolute bottom-[-140px] left-1/4 w-[420px] h-[420px] rounded-full bg-highlight/20 blur-[130px]" style={{ animationDelay: "-13s" }} />
          {/* left-to-right white wash so the headline stays legible over the scene */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/35 to-transparent" />
          {/* fade into the white below so it blends into the marquee */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 lg:pt-12 lg:pb-0 relative z-10">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
          {/* Left — content */}
          <div className="flex flex-col items-start order-2 lg:order-1">
            {/* Kicker */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-secondary shrink-0" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-secondary">
                {t.kicker}
              </span>
            </div>

            {/* Headline — blocky Horizon title ("12th grade" in blue) + a
                smaller all-caps blue tagline, all in the Horizon display face. */}
            <h1 className="max-w-xl">
              <span className="font-title block text-[2rem] leading-[1.04] sm:text-4xl lg:text-[2.9rem] xl:text-[3.3rem] text-neutral-dark">
                {t.pre}
              </span>
              <span className="font-title block text-[2rem] leading-[1.04] sm:text-4xl lg:text-[2.9rem] xl:text-[3.3rem] text-primary">
                {t.grade}
              </span>
              <span className="font-heading block mt-3.5 text-primary font-semibold text-lg sm:text-xl lg:text-2xl tracking-wide">
                {t.tagline}
              </span>
            </h1>

            {/* Subhead */}
            <p className="mt-7 text-gray-600 text-base lg:text-lg max-w-lg leading-relaxed font-medium">
              {t.subtitle}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-row flex-wrap items-center gap-4">
              <Link href="/careers">
                <Button variant="primary" icon={<ArrowIcon />}>
                  {t.explore}
                </Button>
              </Link>
              <Link href="/exams">
                <Button variant="outline">{t.browseExams}</Button>
              </Link>
            </div>

            {/* Trust row */}
            <ul className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-slate-200/70 pt-6 w-full max-w-lg list-none p-0">
              {trust.map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <Icon icon={item.icon} className={`w-5 h-5 ${item.color}`} />
                  <span className="text-sm font-bold text-slate-700">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — image */}
          <div className="order-1 lg:order-2 w-full flex justify-center relative">
            <div className="relative w-full max-w-[520px] lg:max-w-none aspect-[4/3] lg:aspect-auto lg:h-[560px]">
              <Image
                src="/hero.png"
                alt={t.alt}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-contain object-center lg:object-right"
              />
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Marquee — the homepage's single signature motion */}
      <div className="w-full mt-2 mb-16 lg:mb-24">
        <Marquee />
      </div>
    </main>
  );
}
