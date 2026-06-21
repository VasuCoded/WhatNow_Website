import type { ReactNode } from "react";
import { pageMeta, guideJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "IMU CET — Merchant Navy Entrance Exam | WhatNow",
  description:
    "Indian Maritime University Common Entrance Test for B.Sc Nautical Science, B.Tech Marine Engineering, and Diploma in Nautical Science programs across IMU campuses and affiliated academies.",
  path: "/exams/imu-cet",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          title: "IMU CET — Merchant Navy Entrance Exam | WhatNow",
          description:
            "Indian Maritime University Common Entrance Test for B.Sc Nautical Science, B.Tech Marine Engineering, and Diploma in Nautical Science programs across IMU campuses and affiliated academies.",
          path: "/exams/imu-cet",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "IMU CET", path: "/exams/imu-cet" },
          ],
        })}
      />
      {children}
    </>
  );
}
