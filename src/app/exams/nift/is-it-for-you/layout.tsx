import type { ReactNode } from "react";
import { pageMeta, guideJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "NIFT — Is It For You? | WhatNow",
  description:
    "An honest check to see if pursuing a career in fashion design, apparel production, or merchandising at NIFT fits your interests and work style.",
  path: "/exams/nift/is-it-for-you",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          title: "NIFT — Is It For You? | WhatNow",
          description:
            "An honest check to see if pursuing a career in fashion design, apparel production, or merchandising at NIFT fits your interests and work style.",
          path: "/exams/nift/is-it-for-you",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "NIFT", path: "/exams/nift" },
            { name: "Is It For You", path: "/exams/nift/is-it-for-you" },
          ],
        })}
      />
      {children}
    </>
  );
}
