import type { ReactNode } from "react";
import { pageMeta, guideJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "JEE Main Paper 3 — B.Planning Entrance Exam | WhatNow",
  description:
    "Gateway to Bachelor of Planning (B.Plan) programs at School of Planning and Architecture (SPA Delhi, Bhopal, Vijayawada) and top NITs.",
  path: "/exams/jee-paper3",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          title: "JEE Main Paper 3 — B.Planning Entrance Exam | WhatNow",
          description:
            "Gateway to Bachelor of Planning (B.Plan) programs at School of Planning and Architecture (SPA Delhi, Bhopal, Vijayawada) and top NITs.",
          path: "/exams/jee-paper3",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "JEE Paper 3", path: "/exams/jee-paper3" },
          ],
        })}
      />
      {children}
    </>
  );
}
