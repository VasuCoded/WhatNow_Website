import type { ReactNode } from "react";
import { pageMeta, guideJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "NIFT Entrance — Fees, Scholarships & ROI | WhatNow",
  description:
    "Detailed analysis of NIFT course fees, available Sarthak financial assistance schemes, and honest career return-on-investment.",
  path: "/exams/nift/scholarships",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          title: "NIFT Entrance — Fees, Scholarships & ROI | WhatNow",
          description:
            "Detailed analysis of NIFT course fees, available Sarthak financial assistance schemes, and honest career return-on-investment.",
          path: "/exams/nift/scholarships",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "NIFT", path: "/exams/nift" },
            { name: "Scholarships", path: "/exams/nift/scholarships" },
          ],
        })}
      />
      {children}
    </>
  );
}
