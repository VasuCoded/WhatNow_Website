import type { ReactNode } from "react";
import { pageMeta, guideJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "IMU CET — Preparation Strategy & Study Material | WhatNow",
  description:
    "Subject-wise prep strategy, recommended study materials, previous papers, and shipping company sponsorship interview tips.",
  path: "/exams/imu-cet/prep",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          title: "IMU CET — Preparation Strategy & Study Material | WhatNow",
          description:
            "Subject-wise prep strategy, recommended study materials, previous papers, and shipping company sponsorship interview tips.",
          path: "/exams/imu-cet/prep",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "IMU CET", path: "/exams/imu-cet" },
            { name: "Preparation", path: "/exams/imu-cet/prep" },
          ],
        })}
      />
      {children}
    </>
  );
}
