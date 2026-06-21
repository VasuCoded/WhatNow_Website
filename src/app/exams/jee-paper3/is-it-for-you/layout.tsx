import type { ReactNode } from "react";
import { pageMeta, guideJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "JEE Main Paper 3 — Is It For You? (Suitability Check) | WhatNow",
  description:
    "Evaluate your planning aptitude, interest in city development and policy, and decide if B.Plan is the right fit.",
  path: "/exams/jee-paper3/is-it-for-you",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          title: "JEE Main Paper 3 — Is It For You? (Suitability Check) | WhatNow",
          description:
            "Evaluate your planning aptitude, interest in city development and policy, and decide if B.Plan is the right fit.",
          path: "/exams/jee-paper3/is-it-for-you",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "JEE Paper 3", path: "/exams/jee-paper3" },
            { name: "Is It For You", path: "/exams/jee-paper3/is-it-for-you" },
          ],
        })}
      />
      {children}
    </>
  );
}
