import type { ReactNode } from "react";
import { pageMeta, guideJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "CLAT — NLU Seat Matrix, Fees & Scholarships | WhatNow",
  description:
    "Complete guide to fee structures across top NLUs, available Central Sector schemes, Aditya Birla scholarships, and NLU financial waivers.",
  path: "/exams/clat/scholarships",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          title: "CLAT — NLU Seat Matrix, Fees & Scholarships | WhatNow",
          description:
            "Complete guide to fee structures across top NLUs, available Central Sector schemes, Aditya Birla scholarships, and NLU financial waivers.",
          path: "/exams/clat/scholarships",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "CLAT", path: "/exams/clat" },
            { name: "Fees & Scholarships", path: "/exams/clat/scholarships" },
          ],
        })}
      />
      {children}
    </>
  );
}
