import type { ReactNode } from "react";
import { pageMeta, guideJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "UCEED — Resources & Prep Plan | WhatNow",
  description:
    "Curated self-study guides, recommended design books, previous year papers, and Part A & Part B prep strategies without expensive coaching.",
  path: "/exams/uceed/resources",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          title: "UCEED — Resources & Prep Plan | WhatNow",
          description:
            "Curated self-study guides, recommended design books, previous year papers, and Part A & Part B prep strategies without expensive coaching.",
          path: "/exams/uceed/resources",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "UCEED", path: "/exams/uceed" },
            { name: "Resources", path: "/exams/uceed/resources" },
          ],
        })}
      />
      {children}
    </>
  );
}
