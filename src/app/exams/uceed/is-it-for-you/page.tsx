import React from "react";
import Link from "next/link";

export const metadata = {
  title: "UCEED — Is It For You? | WhatNow",
  description: "An honest suitability assessment and check to see if pursuing a B.Des degree at an IIT aligns with your interest, skills, and daily work preferences.",
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

export default function UceedIsItForYouPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50 min-h-screen">
      <PageHeader
        title="UCEED — Is Design at an IIT For You?"
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
            <span className="text-primary">Is It For You?</span>
          </>
        }
      />

      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 pb-24">
        <Section number="01" title="Busting the 'Sketching' Myth">
          <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
            The most common misconception about design is that it is only for fine artists or sketchers. While UCEED tests basic visual and spatial thinking in Part B, a career in design is about **cognitive problem solving**.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 space-y-4 mb-6">
            <h3 className="font-black text-xl text-neutral-dark">Design is 80% Logic, 20% Aesthetics</h3>
            <p className="text-slate-650 leading-relaxed font-semibold">
              UI/UX design, product design, and interaction design require analyzing user behavior, drafting layouts, testing screen micro-interactions, and coding prototypes. If you enjoy psychology, logic, mapping systems, and layout coordination, you will excel in design, regardless of whether you can paint a canvas.
            </p>
          </div>
        </Section>

        <Section number="02" title="The Honest Suitability Checklist">
          <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
            Ask yourself these questions to determine if design at an IIT matches your interests:
          </p>
          <div className="space-y-6">
            <div className="border border-slate-200 p-6 rounded-2xl bg-white">
              <h4 className="font-black text-lg text-neutral-dark mb-2">1. Do you prefer subjective solving over objective formulas?</h4>
              <p className="text-slate-600 font-semibold leading-relaxed">
                In engineering, a mathematical equation has one correct answer. In design, a product interface has infinite solutions. You must be comfortable with ambiguity, open feedback sessions, and constant revisions based on user research.
              </p>
            </div>
            <div className="border border-slate-200 p-6 rounded-2xl bg-white">
              <h4 className="font-black text-lg text-neutral-dark mb-2">2. Are you detail-oriented with digital interfaces?</h4>
              <p className="text-slate-600 font-semibold leading-relaxed">
                If you look at apps (like Spotify or Instagram) and constantly think about why buttons are placed in specific areas, how a swipe transition feels, or how a booking process could be simplified, you already possess design aptitude.
              </p>
            </div>
            <div className="border border-slate-200 p-6 rounded-2xl bg-white">
              <h4 className="font-black text-lg text-neutral-dark mb-2">3. Can you handle constructive feedback?</h4>
              <p className="text-slate-600 font-semibold leading-relaxed">
                Design education is built around "Jury reviews" where peers and professors critique your portfolios openly. If you take criticism personally, the design studio environment can feel highly stressful.
              </p>
            </div>
          </div>
        </Section>

        <Section number="03" title="The Industrial Realities">
          <div className="p-6 md:p-8 rounded-2xl border border-slate-200 bg-slate-50">
            <h3 className="text-xl font-black text-neutral-dark mb-4">
              What does life look like after IIT B.Des?
            </h3>
            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-4">
              Fresh B.Des graduates from IITs primarily enter tech sectors as Associate Product Designers or UI/UX Designers. The starting packages match standard B.Tech ranges, stretching from **₹8L to ₹20L per annum**.
            </p>
            <p className="text-lg text-slate-750 font-medium leading-relaxed">
              However, the job demands high mental agility. Tech evolves rapidly, and you will need to constantly learn new software (Figma, Blender, Framer), manage stakeholder reviews, and coordinate with software engineers. If you crave creative autonomy coupled with tech-adjacent salaries, design is an exceptional path.
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}
