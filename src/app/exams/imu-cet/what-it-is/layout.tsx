import type { ReactNode } from "react";
import { pageMeta, guideJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "IMU CET — Syllabus, Pattern & Reg Guidelines | WhatNow",
  description:
    "Complete guide to the Indian Maritime University Common Entrance Test: exam pattern, subject weightage, and registration details.",
  path: "/exams/imu-cet/what-it-is",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          title: "IMU CET — Syllabus, Pattern & Reg Guidelines | WhatNow",
          description:
            "Complete guide to the Indian Maritime University Common Entrance Test: exam pattern, subject weightage, and registration details.",
          path: "/exams/imu-cet/what-it-is",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "IMU CET", path: "/exams/imu-cet" },
            { name: "What It Is", path: "/exams/imu-cet/what-it-is" },
          ],
        })}
      />
      {children}
    </>
  );
}
