import React from "react";
import Link from "next/link";

export const metadata = {
  title: "UCEED — Resources | WhatNow",
};

// --- Components ---

const PageHeader = ({
  title,
  breadcrumbs,
}: {
  title: string;
  breadcrumbs: React.ReactNode;
}) => (
  <section className="relative overflow-hidden bg-white border-b border-slate-200/60 pt-24 pb-16 md:pt-32 md:pb-20">
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
    </div>

    <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 relative z-10">
      <div className="flex items-center gap-2 text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-500 mb-8">
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
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12 mb-12 shadow-sm relative overflow-hidden">
    <div className="absolute top-0 right-0 p-8 text-[6rem] font-black text-slate-50 leading-none select-none z-0">
      {number}
    </div>
    <div className="relative z-10">
      <div className="text-primary font-black text-sm uppercase tracking-widest mb-4">
        Section {number}
      </div>
      <h2 className="text-3xl md:text-4xl font-black mb-8 text-neutral-dark tracking-tight">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

const InfoBox = ({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: "info" | "warning";
}) => (
  <div
    className={`p-6 md:p-8 my-8 rounded-2xl border-l-4 ${type === "info" ? "bg-indigo-50 border-primary" : "bg-orange-50 border-accent"}`}
  >
    {children}
  </div>
);

export default function UceedResourcesPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50 min-h-screen">
      <PageHeader
        title="UCEED — Resources"
        breadcrumbs={
          <>
            <Link
              href="/exams"
              className="hover:text-primary transition-colors"
            >
              Exams
            </Link>{" "}
            <span>›</span>
            <Link
              href="/exams/uceed"
              className="hover:text-primary transition-colors"
            >
              UCEED
            </Link>{" "}
            <span>›</span>
            <span className="text-primary">Resources</span>
          </>
        }
      />

      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 pb-24">
        <Section number="01" title="Prep Materials & Books">
          <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
            This section will outline the exact books, study guides, sketching pads, and online tutorials that top-ranked seniors actually used to clear the entrance exam.
          </p>
          <InfoBox type="info">
            <h4 className="font-black mb-2">Curation in Progress</h4>
            <p className="text-slate-750 font-medium">
              We are working hard with design graduates from IIT Bombay and IIT Delhi to bring you a realistic, hype-free suitability guide. Check back shortly for the final content.
            </p>
          </InfoBox>
        </Section>
      </div>
    </main>
  );
}
