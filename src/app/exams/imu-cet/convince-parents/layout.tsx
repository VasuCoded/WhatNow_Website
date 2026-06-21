import type { ReactNode } from "react";
import { pageMeta, guideJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "IMU CET — Convince Parents | WhatNow",
  description:
    "Equipping students with cadet stipend records, tax-free salary figures, and logical arguments to convince parents about merchant navy careers.",
  path: "/exams/imu-cet/convince-parents",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          title: "IMU CET — Convince Parents | WhatNow",
          description:
            "Equipping students with cadet stipend records, tax-free salary figures, and logical arguments to convince parents about merchant navy careers.",
          path: "/exams/imu-cet/convince-parents",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "IMU CET", path: "/exams/imu-cet" },
            { name: "Convince Parents", path: "/exams/imu-cet/convince-parents" },
          ],
        })}
      />
      {children}
    </>
  );
}
