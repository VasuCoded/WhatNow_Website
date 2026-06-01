"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

interface Scholarship {
  id: string;
  name: string;
  field: "design" | "fashion" | "law" | "maritime" | "planning" | "general";
  coverage: string;
  eligibility: string;
  process: string;
  details: string;
}

const scholarshipsData: Scholarship[] = [
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
    eligibility: "Admitted to a National Law University (NLU). Annual parental income under ₹3.0 Lakhs (varies slightly by state) and top CLAT rank/CGPA.",
    process: "Submit application directly to the NLU student welfare office after admissions are finalized. Requires income proof and CLAT rank scorecard.",
    details: "Individual NLUs (like NLSIU Bangalore, NALSAR Hyderabad, NUJS Kolkata) manage their own MCM corpuses funded by state governments and alumni. Covers between 25% and 100% of the tuition costs."
  },
  {
    id: "imu-mtt",
    name: "Maritime Training Trust (MTT) Scholarship for Female Cadets",
    field: "maritime",
    coverage: "₹50,000 to ₹1,00,000 per annum direct stipend assistance",
    eligibility: "Female Indian nationals enrolled in pre-sea courses (B.Sc. Nautical Science, B.Tech Marine Engineering, DNS) at IMU campuses.",
    process: "Apply through the IMU campus administration. Nominations are verified by the Directorate General of Shipping (DGS) and credited directly to tuition accounts.",
    details: "Initiated by the Maritime Training Trust to promote gender diversity in merchant shipping. Female cadets maintain eligibility by passing all semester exams in the first attempt."
  },
  {
    id: "spa-mcm",
    name: "SPA Merit-Cum-Means Scholarship Scheme",
    field: "planning",
    coverage: "Full tuition fee waiver plus monthly pocket allowance",
    eligibility: "Bachelor of Planning (B.Plan) students at SPA Delhi, Bhopal, or Vijayawada. Parental annual income below ₹4.5 Lakhs.",
    process: "Applications open in August/September. Submit the application format along with a certified income certificate from the competent revenue authority.",
    details: "Funded by the Ministry of Education. Selection is based on the JEE Main Paper 3 rank for 1st-year students, and semester GPA for subsequent years."
  },
  {
    id: "nid-financial-aid",
    name: "NID Financial Aid Scheme",
    field: "design",
    coverage: "Partial to Full Tuition Fee Waivers",
    eligibility: "B.Des students at NID Ahmedabad, Gandhinagar, Bengaluru, Haryana, AP, MP, or Assam. Annual parental income below ₹6.0 Lakhs.",
    process: "Apply at the time of admission or at the start of subsequent semesters. Requires IT Returns of parents for the last two financial years.",
    details: "Awarded based on financial need. The scholarship is subject to satisfactory performance in the design jury reviews and clean academic track records."
  },
  {
    id: "central-sector",
    name: "Central Sector Scheme of Scholarship for College and University Students",
    field: "general",
    coverage: "₹12,000 per annum for graduation, ₹20,000 for post-graduation",
    eligibility: "Students scoring above the 80th percentile of successful candidates in the relevant stream from Class XII. Family income below ₹4.5 Lakhs per annum.",
    process: "Apply online through the National Scholarship Portal (NSP) under the Ministry of Education tab. Requires Aadhaar seeding and college verification.",
    details: "A general scholarship program that can be clubbed with professional degrees at NLUs, SPAs, NIDs, or IMU if you meet the state-board percentile cuts."
  }
];

export default function ScholarshipsPage() {
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

  const getFieldTheme = (field: string) => {
    switch (field) {
      case "design":
        return { bg: "bg-indigo-50 text-indigo-700 border-indigo-100", label: "Design" };
      case "fashion":
        return { bg: "bg-pink-50 text-pink-700 border-pink-100", label: "Fashion" };
      case "law":
        return { bg: "bg-emerald-50 text-emerald-700 border-emerald-100", label: "Law" };
      case "maritime":
        return { bg: "bg-orange-50 text-orange-700 border-orange-100", label: "Maritime" };
      case "planning":
        return { bg: "bg-teal-50 text-teal-700 border-teal-100", label: "Planning" };
      default:
        return { bg: "bg-slate-100 text-slate-700 border-slate-200", label: "General Aid" };
    }
  };

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
            Financial Aid & Scholarships Directory
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-6 text-neutral-dark">
            Scholarship Directory
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed font-medium">
            Find merit-cum-means assistance programs, tuition fee waivers, and state allowances available across leading Design, Fashion, Law, Maritime, and City Planning institutes in India.
          </p>
        </div>
      </section>

      {/* ─── FILTER & SEARCH BAR ─── */}
      <section className="max-w-5xl mx-auto w-full px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row gap-4 mb-10 items-stretch md:items-center">
          <div className="flex-1 relative">
            <Icon icon="solar:magnifer-bold" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by scholarship name, eligibility, or income slab..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 font-medium text-slate-700 shadow-sm"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Slabs", icon: "solar:widget-bold-duotone" },
              { id: "design", label: "Design", icon: "solar:pen-tool-bold-duotone" },
              { id: "fashion", label: "Fashion", icon: "solar:hanger-bold-duotone" },
              { id: "law", label: "Law", icon: "solar:scale-bold-duotone" },
              { id: "maritime", label: "Maritime", icon: "solar:anchor-bold-duotone" },
              { id: "planning", label: "Planning", icon: "solar:compass-bold-duotone" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedField(tab.id as any)}
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

        {/* ─── SCHOLARSHIPS DIRECTORY INDEX ─── */}
        {filteredScholarships.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {filteredScholarships.map((sch) => {
              const theme = getFieldTheme(sch.field);
              return (
                <div
                  key={sch.id}
                  className="bg-white border border-slate-200 rounded-[2rem] p-6 md:p-10 shadow-sm relative overflow-hidden transition-all hover:border-slate-300"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <span className={`px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider border ${theme.bg}`}>
                      {theme.label}
                    </span>
                    <span className="text-xs font-bold text-slate-400">Institutional Grant</span>
                  </div>

                  <h3 className="text-2xl font-black text-neutral-dark mb-4 leading-tight">
                    {sch.name}
                  </h3>

                  <p className="text-slate-600 font-semibold mb-6 leading-relaxed">
                    {sch.details}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Financial Benefit</h4>
                      <p className="text-sm font-black text-emerald-600">{sch.coverage}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Who is Eligible</h4>
                      <p className="text-sm font-medium text-slate-705 leading-relaxed">{sch.eligibility}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">How to Apply</h4>
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
            <h3 className="text-xl font-black text-slate-700 mb-2">No matching scholarships found</h3>
            <p className="text-slate-400 text-sm font-medium">Try adjusting your filters or search keywords.</p>
          </div>
        )}
      </section>
    </main>
  );
}
