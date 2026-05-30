import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'IMU CET — Merchant Navy Entrance Exam | WhatNow',
  description: 'Indian Maritime University Common Entrance Test for B.Sc Nautical Science, B.Tech Marine Engineering, and Diploma in Nautical Science programs across IMU campuses and affiliated academies.',
};

export default function ImuCetHubPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50">
      {/* ─── PAGE HEADER ─── */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200/60 pt-24 pb-16 md:pt-32 md:pb-20">
        {/* SVG Hero Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          <svg className="absolute inset-0 w-full h-full opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="imucet-hub-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ea580c" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#imucet-hub-grid)" />
          </svg>
          
          <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[80px]" />
          <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-sky-500/5 rounded-full blur-[60px]" />

          <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <linearGradient id="imucet-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ea580c" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="imucet-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.02" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#imucet-wave-grad-1)" />
            <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#imucet-wave-grad-2)" />
            <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80" stroke="#ea580c" strokeWidth="1.5" strokeOpacity="0.1" />
            <path d="M0,240 C480,120 960,320 1440,160" stroke="#0ea5e9" strokeWidth="1.5" strokeOpacity="0.05" strokeDasharray="6 6" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto w-full px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-500 mb-8">
            <Link href="/exams" className="hover:text-primary transition-colors">Exams</Link>
            <span>›</span>
            <span className="text-orange-600">IMU CET</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-8 text-neutral-dark">
            IMU CET — Your Entry into the <em className="text-orange-600 not-italic">Merchant Navy</em>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed font-medium mb-6">
            The Indian Maritime University Common Entrance Test is the primary gateway into B.Sc Nautical Science, B.Tech Marine Engineering, and Diploma in Nautical Science (DNS) programs. One exam, multiple career paths on the ocean. ~25,000 aspirants for ~3,000 seats.
          </p>

          <div className="text-sm font-bold text-slate-400">
            Last reviewed: May 2026 · Based on IMU CET 2026 official notification
          </div>
        </div>
      </section>

      <div className="px-6 lg:px-12 pb-20 md:pb-32 max-w-4xl mx-auto w-full space-y-20">

        {/* ─── STAT BAR ─── */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 shadow-sm">
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Exam Window</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark"><span className="text-orange-600">Jun</span> 2026</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Total Marks</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">200</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Duration</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">3 hrs</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Total Seats</span>
            <span className="text-2xl md:text-3xl font-black text-orange-600">~3,000</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Programs</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">3</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Aspirants</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">~25K</span>
          </div>
        </div>

        {/* ─── RELATED CAREER LINK ─── */}
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="font-bold text-neutral-dark text-sm md:text-base">Related Career Guide: Merchant Navy</span>
          </div>
          <Link href="/careers/merchant-navy" className="bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs uppercase tracking-wider px-4 py-2 rounded-xl transition-all shadow-sm">
            View Career
          </Link>
        </div>

        {/* ─── WHAT IS IMU CET ─── */}
        <section>
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 border-b-2 border-slate-200 pb-4 mb-8">
            What is IMU CET
          </h2>

          <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium mb-12">
            <p>
              IMU CET (Indian Maritime University Common Entrance Test) is a national-level entrance exam conducted by the Indian Maritime University for admission into undergraduate maritime programs. It covers B.Sc Nautical Science (Deck side), B.Tech Marine Engineering (Engine side), and the accelerated DNS (Diploma in Nautical Science) course.
            </p>
            <p>
              The exam tests Physics, Chemistry, Mathematics, English, and General Aptitude — all at the Class 12 level. It&apos;s a 3-hour computer-based test with 200 objective questions. There is no negative marking, which makes it significantly more forgiving than JEE or NEET. Most candidates who are serious about maritime careers and have a decent PCM foundation can clear IMU CET with 3-4 months of focused preparation.
            </p>
            <p>
              IMU CET scores are accepted by IMU&apos;s own campuses (Chennai, Mumbai, Kolkata, Visakhapatnam, Cochin, Navi Mumbai) as well as over 100 DG Shipping-approved private maritime academies and training institutes. Your rank determines which campus and program you get — and the quality difference between top IMU campuses and low-tier private academies is enormous.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {['IMU Chennai — Flagship', 'IMU Mumbai', 'IMU Kolkata', 'IMU Visakhapatnam', 'IMU Cochin', 'IMU Navi Mumbai', 'AMET Chennai', 'TMI Pune', 'Tolani Mumbai', 'Coimbatore Marine College', '100+ DG-approved academies'].map(inst => (
              <span key={inst} className="bg-white border border-slate-200 text-slate-700 font-bold text-sm px-4 py-2 rounded-lg shadow-sm">
                {inst}
              </span>
            ))}
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
            <p className="text-slate-800 leading-relaxed font-medium">
              <strong className="font-black">Medical fitness is non-negotiable:</strong> Even if you top IMU CET, you cannot join any maritime program without clearing the DG Shipping-mandated medical examination. Requirements include: 6/6 vision without glasses (or corrected to 6/6 with surgery pre-admission), normal colour vision, no chronic conditions, and BMI within range. Get your eyes and medical checked <em>before</em> you start preparing — not after you get your rank.
            </p>
          </div>
        </section>

        {/* ─── NAVIGATION TO SUBPAGES ─── */}
        <section>
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 border-b-2 border-slate-200 pb-4 mb-8">
            Everything on IMU CET — WhatNow Guides
          </h2>

          <div className="space-y-4">

            {/* Card 1 */}
            <div className="group flex flex-col md:flex-row gap-6 bg-white/60 backdrop-blur-sm border border-slate-200/80 rounded-[2rem] p-6 md:p-8 hover:border-slate-300 hover:bg-white/80 transition-all duration-300 shadow-sm">
              <div className="text-4xl md:text-5xl font-black text-slate-300 leading-none">01</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1">What It Is — Full exam breakdown</h3>
                <p className="text-slate-500 leading-relaxed mb-4 text-sm md:text-base">
                  Paper pattern, subject-wise mark distribution (Physics, Chemistry, Maths, English, Aptitude), eligibility criteria, age limits, registration process, exam centres, and the complete counselling/allocation process.
                </p>
                <span className="inline-block bg-orange-50/50 text-orange-600 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-orange-100">Coming soon</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group flex flex-col md:flex-row gap-6 bg-white/60 backdrop-blur-sm border border-slate-200/80 rounded-[2rem] p-6 md:p-8 hover:border-slate-300 hover:bg-white/80 transition-all duration-300 shadow-sm">
              <div className="text-4xl md:text-5xl font-black text-slate-300 leading-none">02</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1">DNS vs B.Sc vs B.Tech — Which path?</h3>
                <p className="text-slate-500 leading-relaxed mb-4 text-sm md:text-base">
                  Duration, cost, career trajectory, and earning potential compared across all three maritime entry paths. Which is fastest, which pays best long-term, and which suits PCM vs PCB backgrounds.
                </p>
                <span className="inline-block bg-orange-50/50 text-orange-600 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-orange-100">Coming soon</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group flex flex-col md:flex-row gap-6 bg-white/60 backdrop-blur-sm border border-slate-200/80 rounded-[2rem] p-6 md:p-8 hover:border-slate-300 hover:bg-white/80 transition-all duration-300 shadow-sm">
              <div className="text-4xl md:text-5xl font-black text-slate-300 leading-none">03</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1">Preparation Strategy — Self-study roadmap</h3>
                <p className="text-slate-500 leading-relaxed mb-4 text-sm md:text-base">
                  Subject-wise preparation strategy, best books, mock test resources, previous year paper analysis, and a 3-month preparation timeline. Coaching is not necessary for IMU CET — here is how to do it yourself.
                </p>
                <span className="inline-block bg-orange-50/50 text-orange-600 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-orange-100">Coming soon</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group flex flex-col md:flex-row gap-6 bg-white/60 backdrop-blur-sm border border-slate-200/80 rounded-[2rem] p-6 md:p-8 hover:border-slate-300 hover:bg-white/80 transition-all duration-300 shadow-sm">
              <div className="text-4xl md:text-5xl font-black text-slate-300 leading-none">04</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1">Medical Test & DG Shipping Norms</h3>
                <p className="text-slate-500 leading-relaxed mb-4 text-sm md:text-base">
                  Complete guide to the mandatory medical fitness test: vision requirements (6/6 rule), colour blindness tests, BMI standards, and what disqualifies you. Plus: LASIK eligibility, when to get checked, and the appeal process if you fail.
                </p>
                <span className="inline-block bg-orange-50/50 text-orange-600 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-orange-100">Coming soon</span>
              </div>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
