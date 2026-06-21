import type { ReactNode } from "react";
import { pageMeta, guideJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "IMU CET — DNS vs B.Sc vs B.Tech: Which Path? | WhatNow",
  description:
    "Comparing duration, fees, sea-time, placements, sponsorships, and ROI for Diploma in Nautical Science (DNS) vs B.Sc Nautical Science vs B.Tech Marine Engineering.",
  path: "/exams/imu-cet/entry-paths",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          title: "IMU CET — DNS vs B.Sc vs B.Tech: Which Path? | WhatNow",
          description:
            "Comparing duration, fees, sea-time, placements, sponsorships, and ROI for Diploma in Nautical Science (DNS) vs B.Sc Nautical Science vs B.Tech Marine Engineering.",
          path: "/exams/imu-cet/entry-paths",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "IMU CET", path: "/exams/imu-cet" },
            { name: "Entry Paths", path: "/exams/imu-cet/entry-paths" },
          ],
        })}
      />
      {children}
    </>
  );
}
