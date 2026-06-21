import type { ReactNode } from "react";
import { pageMeta, guideJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "CLAT — Exam Pattern, Syllabus & Weightage | WhatNow",
  description:
    "Complete guide to the CLAT exam pattern: 120 questions, section-wise weightage, marking scheme, and eligibility guidelines.",
  path: "/exams/clat/what-it-is",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          title: "CLAT — Exam Pattern, Syllabus & Weightage | WhatNow",
          description:
            "Complete guide to the CLAT exam pattern: 120 questions, section-wise weightage, marking scheme, and eligibility guidelines.",
          path: "/exams/clat/what-it-is",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "CLAT", path: "/exams/clat" },
            { name: "What It Is", path: "/exams/clat/what-it-is" },
          ],
        })}
      />
      {children}
    </>
  );
}
