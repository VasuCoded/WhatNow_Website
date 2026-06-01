"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import notices from "@/data/admin-notices.json";

type NoticeType = "feature" | "update" | "announcement" | "fix" | "new";

interface AdminNotice {
  id: string;
  type: NoticeType;
  title: string;
  body: string;
  date: string;
  link?: string;
  isNew?: boolean;
}

const typeMeta: Record<NoticeType, { label: string; icon: string; classes: string }> = {
  feature: {
    label: "New Feature",
    icon: "solar:magic-stick-3-bold-duotone",
    classes: "bg-violet-50 text-violet-600 border-violet-100",
  },
  new: {
    label: "New Guide",
    icon: "solar:book-bold-duotone",
    classes: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  update: {
    label: "Update",
    icon: "solar:refresh-bold-duotone",
    classes: "bg-blue-50 text-blue-600 border-blue-100",
  },
  announcement: {
    label: "Announcement",
    icon: "solar:megaphone-bold-duotone",
    classes: "bg-amber-50 text-amber-600 border-amber-100",
  },
  fix: {
    label: "Fix",
    icon: "solar:bug-bold-duotone",
    classes: "bg-rose-50 text-rose-600 border-rose-100",
  },
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

const STORAGE_KEY = "whatnow-admin-notices-read";

export default function AdminNoticeBoard() {
  const [isOpen, setIsOpen] = useState(false);
  const [readIds, setReadIds] = useState<string[]>([]);

  const allNotices = notices as AdminNotice[];

  // Load read IDs from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setReadIds(JSON.parse(stored));
    } catch {
      // ignore
    }
  }, []);

  // Listen for open event (from Navbar or anywhere)
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-admin-notices", handleOpen);
    return () => window.removeEventListener("open-admin-notices", handleOpen);
  }, []);

  const unreadCount = allNotices.filter((n) => !readIds.includes(n.id) && n.isNew).length;

  const markAllRead = () => {
    const newIds = allNotices.map((n) => n.id);
    setReadIds(newIds);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newIds));
    } catch {
      // ignore
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    markAllRead();
  };

  return (
    <>
      {/* Floating Trigger Button — bottom-left */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            onClick={handleOpen}
            className="fixed bottom-6 left-6 z-40 flex items-center gap-2.5 bg-white border border-slate-200 shadow-xl shadow-slate-900/10 rounded-2xl px-4 py-2.5 cursor-pointer hover:shadow-2xl hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300 group"
            title="WhatNow Updates & Changelog"
          >
            <div className="relative">
              <Icon
                icon="solar:notebook-bold-duotone"
                className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300"
              />
              {unreadCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-[16px] h-4 px-1 text-[9px] font-black bg-red-500 text-white rounded-full flex items-center justify-center leading-none">
                  {unreadCount}
                </span>
              )}
            </div>
            <span className="text-xs font-black text-slate-700 group-hover:text-primary transition-colors tracking-tight">
              Site Updates
            </span>
            <Icon
              icon="ph:arrow-up-right-bold"
              className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary transition-colors"
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/30 backdrop-blur-xs z-50"
            />

            {/* Panel — slides from bottom-left */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed bottom-6 left-6 z-50 w-full max-w-[22rem] bg-white rounded-3xl shadow-2xl shadow-slate-900/15 border border-slate-100 flex flex-col overflow-hidden"
              style={{ maxHeight: "calc(100vh - 120px)" }}
            >
              {/* Header */}
              <div className="px-5 pt-5 pb-4 border-b border-slate-100 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon icon="solar:notebook-bold-duotone" className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-heading font-black text-[15px] text-neutral-dark tracking-tight leading-tight">
                      WhatNow Updates
                    </h2>
                    <p className="text-[10px] text-slate-400 font-semibold">
                      From the team · {allNotices.length} entries
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                >
                  <Icon icon="solar:close-circle-bold" className="w-5 h-5" />
                </button>
              </div>

              {/* Notices list */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
                {allNotices.map((notice, idx) => {
                  const meta = typeMeta[notice.type] || typeMeta.announcement;
                  const isUnread = !readIds.includes(notice.id) && notice.isNew;

                  return (
                    <motion.div
                      key={notice.id}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 }}
                      className={`relative p-4 rounded-2xl border transition-all duration-200 ${
                        isUnread
                          ? "bg-primary/[0.03] border-primary/20"
                          : "bg-white border-slate-100 hover:border-slate-200"
                      }`}
                    >
                      {/* Unread dot */}
                      {isUnread && (
                        <span className="absolute top-4 right-4 flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                        </span>
                      )}

                      {/* Type badge + date */}
                      <div className="flex items-center gap-2 mb-2.5">
                        <span
                          className={`inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border ${meta.classes}`}
                        >
                          <Icon icon={meta.icon} className="w-3 h-3" />
                          {meta.label}
                        </span>
                        <span className="text-[10px] text-slate-400 font-semibold ml-auto">
                          {formatDate(notice.date)}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-extrabold text-[13px] text-neutral-dark leading-snug mb-1.5">
                        {notice.title}
                      </h3>

                      {/* Body */}
                      <p className="text-[11.5px] text-slate-500 leading-relaxed font-medium">
                        {notice.body}
                      </p>

                      {/* Link if provided */}
                      {notice.link && (
                        <a
                          href={notice.link}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1 mt-2.5 text-[11px] font-black text-primary hover:text-primary-hover transition-colors"
                        >
                          View guide
                          <Icon icon="ph:arrow-right-bold" className="w-3 h-3" />
                        </a>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="px-5 py-3.5 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between shrink-0">
                <p className="text-[10px] text-slate-400 font-bold flex items-center gap-1">
                  <Icon icon="solar:shield-check-bold" className="w-3.5 h-3.5 text-emerald-500" />
                  Official WhatNow team updates
                </p>
                <a
                  href="https://discord.gg/whatnow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-black text-primary hover:text-primary-hover transition-colors flex items-center gap-0.5"
                >
                  Join Discord
                  <Icon icon="ph:arrow-square-out-bold" className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
