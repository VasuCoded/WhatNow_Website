"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

const translations = {
  en: {
    back: "Go Back",
    home: "Go to Home",
    search: "Search Index",
    switchLang: "हिन्दी में बदलें",
    scrollToTop: "Scroll to Top",
    copyLink: "Copy Page URL",
    copied: "URL Copied!",
  },
  hi: {
    back: "वापस जाएं",
    home: "मुख्य पृष्ठ",
    search: "खोजें (⌘K)",
    switchLang: "Switch to English",
    scrollToTop: "सबसे ऊपर जाएं",
    copyLink: "लिंक कॉपी करें",
    copied: "लिंक कॉपी हो गया!",
  }
};

export default function ContextMenu() {
  const { language, setLanguage } = useLanguage();
  const router = useRouter();
  const t = translations[language];

  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [copied, setCopied] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      // Allow default menu on inputs, textareas, elements that are editable, or if shift key is pressed
      const target = e.target as HTMLElement;
      if (
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("[contenteditable='true']") ||
        e.shiftKey
      ) {
        return;
      }

      e.preventDefault();
      setCoords({ x: e.clientX, y: e.clientY });
      setIsOpen(true);
      setCopied(false);
    };

    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("click", handleClick);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", () => setIsOpen(false));

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", () => setIsOpen(false));
    };
  }, []);

  // Position calculation to avoid screen overflow
  const getMenuPosition = () => {
    if (typeof window === "undefined") return { top: 0, left: 0 };
    const menuWidth = 210;
    const menuHeight = 280;
    
    let left = coords.x;
    let top = coords.y;

    if (coords.x + menuWidth > window.innerWidth) {
      left = window.innerWidth - menuWidth - 10;
    }
    if (coords.y + menuHeight > window.innerHeight) {
      top = window.innerHeight - menuHeight - 10;
    }

    return { top, left };
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setIsOpen(false);
      }, 1000);
    }
  };

  const handleToggleLanguage = () => {
    setLanguage(language === "en" ? "hi" : "en");
    setIsOpen(false);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  const { top, left } = getMenuPosition();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.12, ease: "easeOut" }}
          style={{ top: `${top}px`, left: `${left}px` }}
          className="fixed z-[100] w-[210px] bg-white/70 backdrop-blur-md border border-slate-200/80 shadow-[0_12px_45px_rgba(0,0,0,0.12)] rounded-2xl p-1.5 select-none"
        >
          {/* Navigation Options */}
          <button
            onClick={() => {
              router.back();
              setIsOpen(false);
            }}
            className="w-full text-left hover:bg-primary/5 hover:text-primary transition-all duration-150 rounded-xl px-3 py-2 flex items-center gap-2.5 text-xs font-bold text-slate-700 cursor-pointer"
          >
            <Icon icon="solar:arrow-left-bold-duotone" className="w-4 h-4 text-slate-400 group-hover:text-primary" />
            <span>{t.back}</span>
          </button>

          <button
            onClick={() => {
              router.push("/");
              setIsOpen(false);
            }}
            className="w-full text-left hover:bg-primary/5 hover:text-primary transition-all duration-150 rounded-xl px-3 py-2 flex items-center gap-2.5 text-xs font-bold text-slate-700 cursor-pointer"
          >
            <Icon icon="solar:home-2-bold-duotone" className="w-4 h-4 text-slate-400" />
            <span>{t.home}</span>
          </button>

          <div className="h-[1px] bg-slate-100 my-1" />

          {/* Interactive Utilities */}
          <button
            onClick={() => {
              setIsOpen(false);
              window.dispatchEvent(new CustomEvent("open-search"));
            }}
            className="w-full text-left hover:bg-primary/5 hover:text-primary transition-all duration-150 rounded-xl px-3 py-2 flex items-center gap-2.5 text-xs font-bold text-slate-700 cursor-pointer"
          >
            <Icon icon="solar:magnifer-bold-duotone" className="w-4 h-4 text-slate-400" />
            <span>{t.search}</span>
          </button>

          <button
            onClick={handleToggleLanguage}
            className="w-full text-left hover:bg-primary/5 hover:text-primary transition-all duration-150 rounded-xl px-3 py-2 flex items-center gap-2.5 text-xs font-bold text-slate-700 cursor-pointer"
          >
            <Icon icon="solar:global-bold-duotone" className="w-4 h-4 text-slate-400" />
            <span>{t.switchLang}</span>
          </button>

          <div className="h-[1px] bg-slate-100 my-1" />

          {/* Page Actions */}
          <button
            onClick={handleScrollToTop}
            className="w-full text-left hover:bg-primary/5 hover:text-primary transition-all duration-150 rounded-xl px-3 py-2 flex items-center gap-2.5 text-xs font-bold text-slate-700 cursor-pointer"
          >
            <Icon icon="solar:double-alt-arrow-up-bold-duotone" className="w-4 h-4 text-slate-400" />
            <span>{t.scrollToTop}</span>
          </button>

          <button
            onClick={handleCopyLink}
            disabled={copied}
            className={`w-full text-left transition-all duration-150 rounded-xl px-3 py-2 flex items-center gap-2.5 text-xs font-bold cursor-pointer ${
              copied 
                ? "bg-emerald-50 text-emerald-600 border border-emerald-100/50" 
                : "hover:bg-primary/5 hover:text-primary text-slate-700"
            }`}
          >
            {copied ? (
              <>
                <Icon icon="solar:check-circle-bold-duotone" className="w-4 h-4 text-emerald-500" />
                <span>{t.copied}</span>
              </>
            ) : (
              <>
                <Icon icon="solar:copy-bold-duotone" className="w-4 h-4 text-slate-400" />
                <span>{t.copyLink}</span>
              </>
            )}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
