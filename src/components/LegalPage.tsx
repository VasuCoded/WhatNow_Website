"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useLanguage } from "@/context/LanguageContext";

interface LegalPageProps {
  titleEn: string;
  titleHi: string;
  /** ISO date string, e.g. "2026-06-17" */
  updated: string;
  /** Show the "working draft, pending review" banner (policies). Default true. */
  draft?: boolean;
  children: React.ReactNode;
}

export default function LegalPage({ titleEn, titleHi, updated, draft = true, children }: LegalPageProps) {
  const { language } = useLanguage();
  const isHi = language === "hi";

  const updatedLabel = new Date(updated + "T00:00:00").toLocaleDateString(isHi ? "hi-IN" : "en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-16 lg:py-24">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-500 hover:text-primary transition-colors mb-8"
      >
        <Icon icon="solar:arrow-left-linear" className="w-4 h-4" />
        {isHi ? "मुख्य पृष्ठ" : "Home"}
      </Link>

      <p className="flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase text-secondary mb-3">
        <span className="h-px w-8 bg-secondary" />
        {isHi ? "कानूनी" : "Legal"}
      </p>

      <h1 className="font-heading text-4xl sm:text-5xl font-black text-neutral-dark tracking-tight mb-3">
        {isHi ? titleHi : titleEn}
      </h1>
      <p className="text-sm text-slate-400 font-semibold mb-8">
        {isHi ? "अंतिम अपडेट" : "Last updated"}: {updatedLabel}
      </p>

      {draft && (
        <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3.5 text-sm text-amber-800 mb-10">
          <Icon icon="solar:info-circle-bold-duotone" className="w-5 h-5 shrink-0 mt-0.5 text-amber-500" />
          <span className="font-medium leading-relaxed">
            {isHi
              ? "यह एक कार्यशील मसौदा है, जो प्रकाशन से पहले मानवीय/कानूनी समीक्षा की प्रतीक्षा में है।"
              : "This is a working draft, pending human/legal review before publication."}
          </span>
        </div>
      )}

      {isHi && (
        <p className="text-sm text-slate-500 italic mb-8">
          इस पृष्ठ का पूर्ण हिंदी अनुवाद जल्द आ रहा है। नीचे का विवरण फिलहाल अंग्रेज़ी में है।
        </p>
      )}

      <div className="legal-body">{children}</div>
    </div>
  );
}
