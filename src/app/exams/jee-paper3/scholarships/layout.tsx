import type { ReactNode } from "react";
import { pageMeta, guideJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "JEE Main Paper 3 — SPA Fees, Seat Matrix & ROI | WhatNow",
  description:
    "Seat distribution across SPA Delhi, Bhopal, Vijayawada, fee guidelines, and financial support schemes.",
  path: "/exams/jee-paper3/scholarships",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          title: "JEE Main Paper 3 — SPA Fees, Seat Matrix & ROI | WhatNow",
          description:
            "Seat distribution across SPA Delhi, Bhopal, Vijayawada, fee guidelines, and financial support schemes.",
          path: "/exams/jee-paper3/scholarships",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "JEE Paper 3", path: "/exams/jee-paper3" },
            { name: "Scholarships", path: "/exams/jee-paper3/scholarships" },
          ],
        })}
      />
      {children}
    </>
  );
}
