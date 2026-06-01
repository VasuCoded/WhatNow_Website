import React from "react";
import Link from "next/link";

export const metadata = {
  title: "UCEED — Resources & Prep Plan | WhatNow",
  description: "Curated self-study guides, recommended design books, previous year papers, and Part A & Part B prep strategies without expensive coaching.",
};

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

export default function UceedResourcesPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50 min-h-screen">
      <PageHeader
        title="UCEED — Prep Plan & Study Material"
        breadcrumbs={
          <>
            <Link href="/exams" className="hover:text-primary transition-colors">
              Exams
            </Link>{" "}
            <span>›</span>
            <Link href="/exams/uceed" className="hover:text-primary transition-colors">
              UCEED
            </Link>{" "}
            <span>›</span>
            <span className="text-primary">Resources & Prep</span>
          </>
        }
      />

      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 pb-24">
        <Section number="01" title="Books Actually Worth Your Money">
          <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
            You do not need ₹1L coaching packages to clear UCEED. In fact, most standard coaching study modules recycle standard aptitude questions. Invest in these three foundational books instead:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-xs">
              <span className="text-xs font-black uppercase tracking-wider text-primary block mb-2">Visual & Sketching</span>
              <h4 className="font-black text-lg text-neutral-dark mb-2">Design Drawing</h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                By Francis D.K. Ching. The absolute gold standard for learning perspective, orthographic projection, volumetric layouts, and line weights.
              </p>
            </div>
            <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-xs">
              <span className="text-xs font-black uppercase tracking-wider text-primary block mb-2">Cognitive Design</span>
              <h4 className="font-black text-lg text-neutral-dark mb-2">The Design of Everyday Things</h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                By Don Norman. Essential reading for understanding industrial logic, human-centered design, mapping, and product feedback systems.
              </p>
            </div>
            <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-xs">
              <span className="text-xs font-black uppercase tracking-wider text-primary block mb-2">Visual Aptitude</span>
              <h4 className="font-black text-lg text-neutral-dark mb-2">Universal Principles of Design</h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                By William Lidwell. Provides a clear breakdown of composition rules, gestalt laws, and structural ratios tested in Part A.
              </p>
            </div>
          </div>
        </Section>

        <Section number="02" title="Part A & Part B Self-Study Timeline">
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h4 className="font-black text-lg text-neutral-dark mb-2">Part A Preparation Strategy (Computer Based)</h4>
              <p className="text-slate-650 leading-relaxed font-semibold mb-3">
                Part A carries 240 marks and acts as the screening filter. Focus heavily on:
              </p>
              <ul className="list-disc list-inside text-sm text-slate-600 font-semibold space-y-1">
                <li>**Spatial Visualization**: Practice folding/unfolding 3D cubes, paper cutting patterns, and identifying mirror projections.</li>
                <li>**Gestalt Laws & Typography**: Study visual composition, font weights, tracking/kerning principles, and color models (RGB vs CMYK).</li>
                <li>**Mock Analysis**: Attempt at least 15 previous years question papers under timed conditions to get used to the negative marking scheme.</li>
              </ul>
            </div>
            <div className="border-l-4 border-orange-500 pl-6">
              <h4 className="font-black text-lg text-neutral-dark mb-2">Part B Preparation Strategy (Sketching)</h4>
              <p className="text-slate-650 leading-relaxed font-semibold mb-3">
                Part B carries 60 marks and is evaluated only if you clear the Part A cutoff. Focus on:
              </p>
              <ul className="list-disc list-inside text-sm text-slate-600 font-semibold space-y-1">
                <li>**Perspective Drawing**: Master 1-point, 2-point, and 3-point perspectives. Practice drawing everyday household scenes (kitchens, street views).</li>
                <li>**Human Figures**: Practice basic anatomy ratios (8-head rule) and posture sketching. Do not use coloring; keep sketches clean with pencil shading and linework.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section number="03" title="Free Online Material">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-black text-neutral-dark mb-4">Official Question Papers & Tutorials</h3>
            <p className="text-slate-650 leading-relaxed font-semibold mb-4">
              The official IIT Bombay UCEED website offers past papers dating back to 2015. Download all of them. Use free YouTube channels (like *Stuff You Look At* or *Kaphal Studio*) to learn perspective basics and watch mock paper solutions.
            </p>
            <Link href="https://www.uceed.iitb.ac.in" className="inline-block bg-primary hover:bg-primary/95 text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3 rounded-xl shadow-md transition-all">
              Download Official Papers
            </Link>
          </div>
        </Section>
      </div>
    </main>
  );
}
