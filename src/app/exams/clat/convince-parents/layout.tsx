import type { ReactNode } from "react";
import { pageMeta, guideJsonLd, faqJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "CLAT — Convince Parents | WhatNow",
  description:
    "Equipping students with NLU placement statistics, corporate recruiter list, and logical arguments to align parents on corporate law careers.",
  path: "/exams/clat/convince-parents",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          title: "CLAT — Convince Parents | WhatNow",
          description:
            "Equipping students with NLU placement statistics, corporate recruiter list, and logical arguments to align parents on corporate law careers.",
          path: "/exams/clat/convince-parents",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "CLAT", path: "/exams/clat" },
            { name: "Convince Parents", path: "/exams/clat/convince-parents" },
          ],
        })}
      />
      <JsonLd
        data={faqJsonLd({
          faqs: [
            { q: "Lawyers only succeed if they have family connections", a: "This is true for traditional courtroom practice, but entirely false for Corporate Law Firms. Corporate firms function like multinational companies (MNCs). Hiring is purely meritocratic based on your NLU grades, internships, and moot performance. No family background or courtroom connections are needed to secure placements. Top firms recruit 70-80% of their associates directly from campus drives." },
            { q: "Do NLUs offer job security?", a: "A Tier-1 NLU B.A. LL.B. offers a starting salary range of ₹12L - ₹18L per annum with recruiters like Cyril Amarchand, Trilegal, and Khaitan & Co. Career longevity is high — legal expertise is rare and non-replaceable by AI." },
            { q: "Are top NLUs prestigious enough?", a: "The top NLUs (like NLSIU Bangalore, NALSAR Hyderabad, and NUJS Kolkata) enjoy the same elite institutional status under Indian law as IITs and IIMs. Admission is extremely competitive (top 1% of ~70,000 aspirants). Clearing CLAT and entering a top-5 NLU is a highly respected achievement, guaranteeing immediate social standing, family pride, and strong financial outcomes." },
          ],
        })}
      />
      {children}
    </>
  );
}
