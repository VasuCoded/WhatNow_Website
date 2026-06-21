import type { ReactNode } from "react";
import { pageMeta, guideJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "NIFT Entrance — Preparation Guides & Study Material | WhatNow",
  description:
    "Detailed syllabus breakdowns for CAT & GAT, Situation Test prep kits, recommended prep books, and mock strategies.",
  path: "/exams/nift/resources",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          title: "NIFT Entrance — Preparation Guides & Study Material | WhatNow",
          description:
            "Detailed syllabus breakdowns for CAT & GAT, Situation Test prep kits, recommended prep books, and mock strategies.",
          path: "/exams/nift/resources",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "NIFT", path: "/exams/nift" },
            { name: "Resources", path: "/exams/nift/resources" },
          ],
        })}
      />
      {children}
    </>
  );
}
