import type { ReactNode } from "react";
import { pageMeta, guideJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "NIFT Entrance — What It Is | WhatNow",
  description:
    "Learn about the NIFT Entrance Exam structure, CAT and GAT papers, eligibility, campuses, and selection process.",
  path: "/exams/nift/what-it-is",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          title: "NIFT Entrance — What It Is | WhatNow",
          description:
            "Learn about the NIFT Entrance Exam structure, CAT and GAT papers, eligibility, campuses, and selection process.",
          path: "/exams/nift/what-it-is",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "NIFT", path: "/exams/nift" },
            { name: "What It Is", path: "/exams/nift/what-it-is" },
          ],
        })}
      />
      {children}
    </>
  );
}
