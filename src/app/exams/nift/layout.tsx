import type { ReactNode } from "react";
import { pageMeta, guideJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "NIFT Entrance — Fashion Design at India's Premier Institutes | WhatNow",
  description:
    "The entrance exam for Bachelor of Design (B.Des) and Bachelor of Fashion Technology (B.FTech) programs at all 16 NIFT campuses across India.",
  path: "/exams/nift",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          title: "NIFT Entrance — Fashion Design at India's Premier Institutes | WhatNow",
          description:
            "The entrance exam for Bachelor of Design (B.Des) and Bachelor of Fashion Technology (B.FTech) programs at all 16 NIFT campuses across India.",
          path: "/exams/nift",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "NIFT", path: "/exams/nift" },
          ],
        })}
      />
      {children}
    </>
  );
}
