import type { ReactNode } from "react";
import { pageMeta, guideJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "CLAT — Preparation Strategy & Recommended Books | WhatNow",
  description:
    "Curated self-study roadmap, legal reasoning guides, mock analysis plans, and recommended books for CLAT aspirants.",
  path: "/exams/clat/resources",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          title: "CLAT — Preparation Strategy & Recommended Books | WhatNow",
          description:
            "Curated self-study roadmap, legal reasoning guides, mock analysis plans, and recommended books for CLAT aspirants.",
          path: "/exams/clat/resources",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "CLAT", path: "/exams/clat" },
            { name: "Prep & Resources", path: "/exams/clat/resources" },
          ],
        })}
      />
      {children}
    </>
  );
}
