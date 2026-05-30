"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function NotFound() {
  const handleSearchTrigger = () => {
    window.dispatchEvent(new CustomEvent("open-search"));
  };

  return (
    <main className="flex-grow flex flex-col items-center justify-center bg-slate-50 min-h-[85vh] relative overflow-hidden px-6 py-12">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {/* Subtle grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.12] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="not-found-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#5563ED" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#not-found-grid)" />
        </svg>
        {/* Layered glowing blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#5563ED]/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#ff5a1f]/3 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-md w-full text-center relative z-10 flex flex-col items-center">
        {/* SVG Broken Wires Illustration */}
        <div className="w-full max-w-[280px] sm:max-w-[320px] aspect-[2/1] mb-10 select-none">
          <svg
            viewBox="0 0 400 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* Left wire */}
            <path
              d="M 10 100 C 50 100, 100 120, 150 100"
              stroke="#5563ED"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              d="M 10 100 C 50 100, 100 120, 150 100"
              stroke="#8F9BFF"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.8"
            />
            {/* Exposed copper on left */}
            <path d="M 150 100 L 158 96" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 150 100 L 160 102" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
            <path d="M 150 100 L 156 106" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" />

            {/* Right wire */}
            <path
              d="M 390 100 C 350 100, 300 80, 250 100"
              stroke="#ff5a1f"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              d="M 390 100 C 350 100, 300 80, 250 100"
              stroke="#ffaa80"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.8"
            />
            {/* Exposed copper on right */}
            <path d="M 250 100 L 242 97" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 250 100 L 240 101" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
            <path d="M 250 100 L 244 105" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" />

            {/* Sparks (Animated via Framer Motion) */}
            {/* Spark 1 */}
            <motion.path
              d="M 175 90 L 180 98 L 170 100 L 178 110"
              stroke="#F59E0B"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{
                opacity: [0, 1, 0, 1, 0],
                scale: [0.8, 1.2, 0.9, 1.1, 0.8],
                x: [0, -5, 2, -2, 0],
                y: [0, 2, -4, 3, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Spark 2 */}
            <motion.path
              d="M 225 110 L 220 102 L 230 100 L 222 90"
              stroke="#ff5a1f"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{
                opacity: [1, 0, 1, 0, 1],
                scale: [1, 0.7, 1.2, 0.8, 1],
                x: [0, 4, -2, 3, 0],
                y: [0, -3, 2, -2, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Neon glowing particles */}
            <motion.circle
              cx="190"
              cy="80"
              r="3"
              fill="#5563ED"
              animate={{
                y: [0, -20],
                x: [0, -10],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
            <motion.circle
              cx="210"
              cy="120"
              r="4"
              fill="#ff5a1f"
              animate={{
                y: [0, 20],
                x: [0, 10],
                opacity: [0, 0.9, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeOut",
                delay: 0.5,
              }}
            />
            <motion.circle
              cx="200"
              cy="95"
              r="2.5"
              fill="#F59E0B"
              animate={{
                y: [0, -15],
                x: [0, 15],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeOut",
                delay: 0.2,
              }}
            />
            <motion.circle
              cx="170"
              cy="115"
              r="2"
              fill="#5563ED"
              animate={{
                y: [0, 10],
                x: [0, -15],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeOut",
                delay: 0.8,
              }}
            />

            {/* Dotted arch between them to represent disconnected current */}
            <path
              d="M 160 100 Q 200 120 240 100"
              stroke="#D97706"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              opacity="0.3"
            />
          </svg>
        </div>

        {/* Status Code */}
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-500 bg-red-50 border border-red-100 px-4 py-1.5 rounded-full mb-6">
          Error 404
        </span>

        {/* Content */}
        <h1 className="text-3xl sm:text-4xl font-black text-neutral-dark mb-4 tracking-tight leading-tight">
          This page is off the grid.
        </h1>
        
        <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium mb-10 max-w-sm">
          We couldn&apos;t connect you to the requested URL. The link might be broken, or this roadmap has been permanently relocated.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
          <Link
            href="/"
            className="group flex items-center justify-center gap-2 bg-neutral-dark hover:bg-neutral-dark/95 border border-neutral-dark text-white rounded-2xl px-6 py-4 w-full text-sm font-black uppercase tracking-wider transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
          >
            <Icon icon="solar:home-2-linear" className="w-5 h-5" />
            <span>Return Home</span>
          </Link>

          <button
            onClick={handleSearchTrigger}
            className="group flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-800 rounded-2xl px-6 py-4 w-full text-sm font-black uppercase tracking-wider transition-all shadow-sm cursor-pointer"
          >
            <Icon icon="solar:magnifer-linear" className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors" />
            <span>Search Resource</span>
          </button>
        </div>
      </div>
    </main>
  );
}
