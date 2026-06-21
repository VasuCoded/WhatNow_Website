import type { ReactNode } from "react";
import { pageMeta, guideJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "IMU CET — Medical Test & DG Shipping Norms | WhatNow",
  description:
    "Mandatory DG Shipping medical fitness rules, eyesight constraints, colour blindness limitations, and the truth about the LASIK myth — check your eyes before you commit.",
  path: "/exams/imu-cet/medical",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          title: "IMU CET — Medical Test & DG Shipping Norms | WhatNow",
          description:
            "Mandatory DG Shipping medical fitness rules, eyesight constraints, colour blindness limitations, and the truth about the LASIK myth — check your eyes before you commit.",
          path: "/exams/imu-cet/medical",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "IMU CET", path: "/exams/imu-cet" },
            { name: "Medical", path: "/exams/imu-cet/medical" },
          ],
        })}
      />
      {children}
    </>
  );
}
