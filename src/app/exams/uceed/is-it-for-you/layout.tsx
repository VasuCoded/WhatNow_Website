import type { ReactNode } from "react";
import { pageMeta, guideJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "UCEED — Is It For You? | WhatNow",
  description:
    "An honest suitability assessment and check to see if pursuing a B.Des degree at an IIT aligns with your interest, skills, and daily work preferences.",
  path: "/exams/uceed/is-it-for-you",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          title: "UCEED — Is It For You? | WhatNow",
          description:
            "An honest suitability assessment and check to see if pursuing a B.Des degree at an IIT aligns with your interest, skills, and daily work preferences.",
          path: "/exams/uceed/is-it-for-you",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "UCEED", path: "/exams/uceed" },
            { name: "Is It For You", path: "/exams/uceed/is-it-for-you" },
          ],
        })}
      />
      {children}
    </>
  );
}
