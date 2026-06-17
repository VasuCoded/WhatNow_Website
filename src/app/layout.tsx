import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import ContextMenu from "@/components/ContextMenu";
import NoticeBoard from "@/components/NoticeBoard";
import AdminNoticeBoard from "@/components/AdminNoticeBoard";
import { Anton, Oswald, Inter, Mukta } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

// Body face — Inter, highly readable at small sizes on mobile.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Title face — Anton, a heavy condensed display for the big blocky statement
// titles via the .font-title helper. Single weight (400, very bold by design).
const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// Heading face — Oswald, a tall condensed grotesk for subheads/other headings.
// Latin only; Hindi headings stay on Mukta (see globals.css).
const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mukta = Mukta({
  variable: "--font-mukta",
  subsets: ["devanagari"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | WhatNow",
    default: "WhatNow — You have options.",
  },
  description: "You have options. We help you find the right one.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} ${anton.variable} ${mukta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 font-medium pt-20">
        <LanguageProvider>
          <Navbar />

          {children}
          
          <Footer />
          <SearchModal />
          <ContextMenu />
          <NoticeBoard />
          <AdminNoticeBoard />
        </LanguageProvider>
      </body>
    </html>
  );
}
