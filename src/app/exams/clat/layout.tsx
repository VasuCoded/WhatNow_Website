import type { ReactNode } from "react";
import { pageMeta, guideJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "CLAT — Law Entrance Exam | WhatNow",
  description:
    "Common Law Admission Test for admission to 5-year integrated BA LLB and BBA LLB programs across 24 premium National Law Universities (NLUs) in India.",
  path: "/exams/clat",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          title: "CLAT — Law Entrance Exam | WhatNow",
          description:
            "Common Law Admission Test for admission to 5-year integrated BA LLB and BBA LLB programs across 24 premium National Law Universities (NLUs) in India.",
          path: "/exams/clat",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "CLAT", path: "/exams/clat" },
          ],
        })}
      />
      {children}
    </>
  );
}
