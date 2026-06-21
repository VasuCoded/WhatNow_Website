import type { ReactNode } from "react";
import { pageMeta, guideJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "JEE Main Paper 3 — Exam Pattern & Syllabus Breakdown | WhatNow",
  description:
    "Detailed breakdown of the B.Planning entrance exam syllabus: Mathematics, general aptitude, and planning-specific topics.",
  path: "/exams/jee-paper3/what-it-is",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          title: "JEE Main Paper 3 — Exam Pattern & Syllabus Breakdown | WhatNow",
          description:
            "Detailed breakdown of the B.Planning entrance exam syllabus: Mathematics, general aptitude, and planning-specific topics.",
          path: "/exams/jee-paper3/what-it-is",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "JEE Paper 3", path: "/exams/jee-paper3" },
            { name: "What It Is", path: "/exams/jee-paper3/what-it-is" },
          ],
        })}
      />
      {children}
    </>
  );
}
