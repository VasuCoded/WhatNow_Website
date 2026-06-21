import type { ReactNode } from "react";
import { pageMeta, guideJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "UCEED — Design at an IIT | WhatNow",
  description:
    "The one exam that gets you into the Bachelor of Design (B.Des) programs at IIT Bombay, IIT Delhi, IIT Guwahati, and four other IITs.",
  path: "/exams/uceed",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          title: "UCEED — Design at an IIT | WhatNow",
          description:
            "The one exam that gets you into the Bachelor of Design (B.Des) programs at IIT Bombay, IIT Delhi, IIT Guwahati, and four other IITs.",
          path: "/exams/uceed",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "UCEED", path: "/exams/uceed" },
          ],
        })}
      />
      {children}
    </>
  );
}
