import type { ReactNode } from "react";
import { pageMeta, guideJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "UCEED — Scholarships | WhatNow",
  description:
    "What a B.Des degree at an IIT actually costs, which fees are waiveable, and the scholarships and fee-waiver options that make studying design at an IIT affordable.",
  path: "/exams/uceed/scholarships",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          title: "UCEED — Scholarships | WhatNow",
          description:
            "What a B.Des degree at an IIT actually costs, which fees are waiveable, and the scholarships and fee-waiver options that make studying design at an IIT affordable.",
          path: "/exams/uceed/scholarships",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "UCEED", path: "/exams/uceed" },
            { name: "Scholarships", path: "/exams/uceed/scholarships" },
          ],
        })}
      />
      {children}
    </>
  );
}
