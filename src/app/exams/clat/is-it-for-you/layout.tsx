import type { ReactNode } from "react";
import { pageMeta, guideJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "CLAT — Is It For You? & AILET Comparison | WhatNow",
  description:
    "Assess your suitability for law careers, understand the corporate law vs litigation lifestyle split, and compare CLAT with AILET.",
  path: "/exams/clat/is-it-for-you",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          title: "CLAT — Is It For You? & AILET Comparison | WhatNow",
          description:
            "Assess your suitability for law careers, understand the corporate law vs litigation lifestyle split, and compare CLAT with AILET.",
          path: "/exams/clat/is-it-for-you",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "CLAT", path: "/exams/clat" },
            { name: "Is It For You?", path: "/exams/clat/is-it-for-you" },
          ],
        })}
      />
      {children}
    </>
  );
}
