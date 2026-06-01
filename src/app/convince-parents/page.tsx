"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

interface Objection {
  id: string;
  field: "design" | "fashion" | "law" | "maritime" | "planning";
  concern: string;
  reality: string;
  talkingPoints: string[];
  stats: { label: string; value: string }[];
}

const objectionsData: Objection[] = [
  {
    id: "design-security",
    field: "design",
    concern: "Design has no stable corporate jobs. It's just drawing and freelancing.",
    reality: "Modern design is heavily integrated into tech and corporate product cycles. UI/UX design, Product Design, and Communication design are highly paid corporate roles.",
    talkingPoints: [
      "Explain the role of UI/UX in tech startups, fintech, and enterprise software.",
      "Show them that every app they use (Paytm, WhatsApp, Zomato) has a team of highly-paid interaction designers.",
      "Mention that NIDs and IIT (IDC) have 90%+ institutional placement rates with companies like Google, Microsoft, and Tata Motors."
    ],
    stats: [
      { label: "NID/IIT UI/UX Starting", value: "₹8L - ₹18L/yr" },
      { label: "Mid-Career (5 Yrs)", value: "₹18L - ₹32L/yr" },
      { label: "Placement Rate", value: "90% - 95%" }
    ]
  },
  {
    id: "fashion-boutique",
    field: "fashion",
    concern: "Fashion design is only about boutique tailor shops or celebrity runway shows.",
    reality: "The apparel and retail sector is India's second-largest employer. Multi-billion dollar retail groups (Reliance Retail, Aditya Birla, Landmark) run extensive corporate supply chains.",
    talkingPoints: [
      "Frame the degree as 'Retail Operations, Merchandising & Supply Chain Logistics'.",
      "Explain that fashion merchandisers decide the volume, price, and fabric sourcing for millions of garments.",
      "Point out that NIFT was established under an Act of Parliament (Ministry of Textiles), making it a highly respected national institution."
    ],
    stats: [
      { label: "Merchandiser Starting", value: "₹4.5L - ₹7L/yr" },
      { label: "Apparel Export Market", value: "$40 Billion" },
      { label: "Top Brand Placements", value: "100+ Corporate Buyers" }
    ]
  },
  {
    id: "law-courtroom",
    field: "law",
    concern: "Law is only about lower courts, family disputes, and decades of low-paid clerkship.",
    reality: "The National Law Universities (NLUs) created a massive corporate law sector in India. Tier-1 law firms advise on multi-billion dollar mergers, acquisitions, and corporate finance.",
    talkingPoints: [
      "Show them starting packages at Tier-1 firms (Amarchand, Trilegal, Khaitan). These packages rival top IIM/IIT packages.",
      "Explain that corporate lawyers work in corporate offices, not crowded local courtrooms.",
      "Highlight the structured NLU campus placement process, where national and international firms hire directly."
    ],
    stats: [
      { label: "Tier-1 NLU Starting", value: "₹12L - ₹18L/yr" },
      { label: "In-House Counsel starting", value: "₹7L - ₹10L/yr" },
      { label: "NLU Admissions via CLAT", value: "Top 3,000 ranks get Tier-1" }
    ]
  },
  {
    id: "maritime-risk",
    field: "maritime",
    concern: "Merchant Navy is too risky, lonely, and lacks normal social/family life.",
    reality: "Modern commercial vessels have state-of-the-art satellite connectivity and highly regulated shift schedules. The financial returns are unmatched, offering completely tax-free savings at a very young age.",
    talkingPoints: [
      "Explain the rotational contract system (e.g., 4 months at sea, 4 months paid vacation at home).",
      "Highlight that earnings are completely tax-free under NRI status guidelines.",
      "Show them that cadets reach Officer ranks within 3-4 years, earning high USD salaries."
    ],
    stats: [
      { label: "Licensed 3rd Officer", value: "$2,500 - $4,000/mo" },
      { label: "Tax Obligation", value: "0% (NRI Status)" },
      { label: "Chief Engineer (10 Yrs)", value: "$10,000+/mo" }
    ]
  },
  {
    id: "planning-civil",
    field: "planning",
    concern: "B.Planning is just a lower branch of Civil Engineering. Planners won't find jobs.",
    reality: "Urban Planning is a policy-driven, regional-scale discipline distinct from engineering. With rapid urbanization, private consultancies and development authorities face a shortage of planners.",
    talkingPoints: [
      "Explain that planners decide 'where' to build and write policy guidelines, whereas engineers decide 'how' to construct.",
      "Show them private placement avenues like JLL, PwC, KPMG, and L&T Infrastructure.",
      "Point out the affordable fee structure at government SPAs (~₹2L/yr) compared to private engineering colleges."
    ],
    stats: [
      { label: "Private Consultancy starting", value: "₹5L - ₹8L/yr" },
      { label: "Indian Smart Cities", value: "100 Cities targeted" },
      { label: "SPA Tuition Fee per Year", value: "₹1.8L - ₹2.5L" }
    ]
  }
];

export default function ConvinceParentsPage() {
  const [selectedField, setSelectedField] = useState<
    "all" | "design" | "fashion" | "law" | "maritime" | "planning"
  >("all");

  const filteredObjections =
    selectedField === "all"
      ? objectionsData
      : objectionsData.filter((obj) => obj.field === selectedField);

  return (
    <main className="flex-grow flex flex-col bg-slate-50 min-h-screen">
      {/* ─── PAGE HEADER ─── */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200/60 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.12] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="parents-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#6366f1" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#parents-grid)" />
          </svg>
          <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[80px]" />
          <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[60px]" />
        </div>

        <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 relative z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-black uppercase tracking-wider mb-6">
            <Icon icon="solar:users-group-two-rounded-bold" className="w-4 h-4" />
            Family Alignment Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-6 text-neutral-dark">
            How to Talk to Your Parents About <br />
            <span className="text-indigo-600">Non-Traditional Careers</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed font-medium">
            Parents worry because they want you to be secure. This guide equips you with institutional statistics, industry placement realities, and structured talking points to replace anxiety with facts.
          </p>
        </div>
      </section>

      {/* ─── THE CORE BLUEPRINT ─── */}
      <section className="max-w-5xl mx-auto w-full px-6 lg:px-12 py-12 md:py-16">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12 shadow-sm relative overflow-hidden mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-neutral-dark mb-8 tracking-tight">
            The Parent Conversation Blueprint
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black text-lg">
                1
              </div>
              <h3 className="font-black text-slate-800 text-lg">Acknowledge Their Concern</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Do not react defensively. Understand that their worries about stability stem from love and their own experiences of economic shifts. Acknowledge this before presenting data.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black text-lg">
                2
              </div>
              <h3 className="font-black text-slate-800 text-lg">Show the Math (ROI)</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Bring real numbers. Compare the tuition fees of premier national institutes (like SPAs, NIDs, NLUs, or IMU) against private engineering/management colleges. Show them that premium non-traditional hubs offer far better returns.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black text-lg">
                3
              </div>
              <h3 className="font-black text-slate-800 text-lg">Cite Institutional Authority</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Highlight that these institutes are established by Acts of Parliament, Ministry of Textiles, Ministry of Ports, Shipping and Waterways, or Ministry of Education. This immediately legitimizes the path.
              </p>
            </div>
          </div>
        </div>

        {/* ─── INTERACTIVE OBJECTION FILTER ─── */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-neutral-dark mb-6 tracking-tight">
            Filter Objections by Career Field
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {[
              { id: "all", label: "All Fields", icon: "solar:widget-bold-duotone" },
              { id: "design", label: "Design (NID/IIT)", icon: "solar:pen-tool-bold-duotone" },
              { id: "fashion", label: "Fashion (NIFT)", icon: "solar:hanger-bold-duotone" },
              { id: "law", label: "Law (NLU)", icon: "solar:scale-bold-duotone" },
              { id: "maritime", label: "Maritime (IMU)", icon: "solar:anchor-bold-duotone" },
              { id: "planning", label: "Planning (SPA)", icon: "solar:compass-bold-duotone" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedField(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all shadow-sm ${
                  selectedField === tab.id
                    ? "bg-indigo-600 text-white"
                    : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                <Icon icon={tab.icon} className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ─── OBJECTION LIST ─── */}
        <div className="space-y-6">
          {filteredObjections.map((obj) => (
            <div
              key={obj.id}
              className="bg-white border border-slate-200 rounded-[2rem] p-6 md:p-10 shadow-sm relative overflow-hidden transition-all hover:border-slate-300"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
                <span className="text-xs font-black uppercase tracking-widest text-indigo-600">
                  {obj.field}
                </span>
                <span className="text-xs font-bold text-slate-400">Objection Resolver</span>
              </div>

              <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-4 leading-tight">
                Parents Worry: &ldquo;{obj.concern}&rdquo;
              </h3>

              <div className="space-y-4 mb-6">
                <h4 className="font-black text-slate-800 text-sm uppercase tracking-wider">The Reality:</h4>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed font-semibold">
                  {obj.reality}
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 md:p-8 space-y-4 mb-8">
                <h4 className="font-black text-slate-800 text-sm uppercase tracking-wider">
                  How to Explain to Parents:
                </h4>
                <ul className="space-y-3">
                  {obj.talkingPoints.map((point, index) => (
                    <li key={index} className="flex gap-3 text-sm text-slate-650 font-semibold leading-relaxed">
                      <span className="text-indigo-600 font-black">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-black text-slate-800 text-xs uppercase tracking-wider mb-4">
                  Key Supporting Data:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {obj.stats.map((stat, index) => (
                    <div key={index} className="border border-slate-200/60 rounded-xl p-4 bg-white shadow-sm flex flex-col justify-center">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{stat.label}</span>
                      <span className="text-lg font-black text-indigo-600">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
