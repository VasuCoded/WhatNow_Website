import type { ReactNode } from "react";
import { pageMeta, guideJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "JEE Main Paper 3 — Study Material & Prep Guides | WhatNow",
  description:
    "Free preparation strategies for B.Planning entrance, syllabus guides, general geography maps, and previous mock tests.",
  path: "/exams/jee-paper3/resources",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          title: "JEE Main Paper 3 — Study Material & Prep Guides | WhatNow",
          description:
            "Free preparation strategies for B.Planning entrance, syllabus guides, general geography maps, and previous mock tests.",
          path: "/exams/jee-paper3/resources",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "JEE Paper 3", path: "/exams/jee-paper3" },
            { name: "Resources", path: "/exams/jee-paper3/resources" },
          ],
        })}
      />
      {children}
    </>
  );
}
