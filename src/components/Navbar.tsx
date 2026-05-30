"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    careers: "Careers",
    exams: "Exams",
    reads: "Reads",
    scholarships: "Scholarships",
    new: "NEW",
    convinceParents: "Convince Parents",
    about: "About",
    login: "Login",
    join: "Join for Free",
    searchTitle: "Search (Ctrl+K)",
    searchMobile: "Search",
  },
  hi: {
    careers: "करियर",
    exams: "परीक्षाएं",
    reads: "लेख",
    scholarships: "छात्रवृत्ति",
    new: "नया",
    convinceParents: "माता-पिता को मनाएं",
    about: "हमारे बारे में",
    login: "लॉगिन",
    join: "मुफ़्त में शामिल हों",
    searchTitle: "खोजें (Ctrl+K)",
    searchMobile: "खोजें",
  }
};

export default function Navbar() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-slate-200/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex gap-2 items-center">
            <div className="relative h-12 w-12">
              <Image
                src="/logo.png"
                alt="WhatNow Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            <div className="inline-block">
              <span className="font-heading font-black text-2xl text-neutral-dark tracking-tight">What</span>
              <span className="font-heading font-black text-2xl text-primary tracking-tight">Now</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-5 text-sm">
            <Link href="/careers" className="font-semibold text-neutral-dark hover:text-primary transition-colors flex items-center gap-1">
              {t.careers}
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/exams" className="font-semibold text-neutral-dark hover:text-primary transition-colors flex items-center gap-1">
              {t.exams}
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/reads" className="font-semibold text-neutral-dark hover:text-primary transition-colors flex items-center gap-1">
              {t.reads}
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/scholarships" className="font-semibold text-neutral-dark hover:text-primary transition-colors flex items-center gap-1.5">
              {t.scholarships} <span className="bg-primary/10 text-primary text-[10px] font-extrabold px-1.5 py-0.5 rounded-sm">{t.new}</span>
            </Link>
            <Link href="/convince-parents" className="font-semibold text-neutral-dark hover:text-primary transition-colors">
              {t.convinceParents}
            </Link>
            <Link href="/about" className="font-semibold text-neutral-dark hover:text-primary transition-colors">
              {t.about}
            </Link>
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent("open-search"))}
              className="text-gray-600 hover:text-gray-900 transition-colors p-2 cursor-pointer flex items-center gap-1.5"
              title={t.searchTitle}
            >
              <span className="sr-only">{t.searchMobile}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <kbd className="hidden xl:inline-block text-[10px] font-bold text-slate-400 border border-slate-200 rounded px-1.5 py-0.5 bg-slate-50 font-sans">
                ⌘K
              </kbd>
            </button>
            <Link href="#" className="font-medium text-neutral-dark bg-white border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-xl transition-colors">
              {t.login}
            </Link>
            <Link href="#" className="font-medium text-white bg-secondary hover:bg-secondary-hover px-4 py-2 rounded-xl transition-colors">
              {t.join}
            </Link>
          </div>

          {/* Mobile menu button and search */}
          <div className="flex lg:hidden items-center gap-2">
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent("open-search"))}
              className="text-gray-600 hover:text-gray-900 p-2 cursor-pointer"
              title={t.searchMobile}
            >
              <span className="sr-only">{t.searchMobile}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="text-gray-600 hover:text-gray-900 p-2">
              <span className="sr-only">Open main menu</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
