import type { ReactNode } from "react";
import { pageMeta, guideJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "UCEED — What It Is | WhatNow",
  description:
    "UCEED — the Undergraduate Common Entrance Exam for Design conducted by IIT Bombay — is the only standardised entrance exam for Bachelor of Design (B.Des) programs at the IITs.",
  path: "/exams/uceed/what-it-is",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          title: "UCEED — What It Is | WhatNow",
          description:
            "UCEED — the Undergraduate Common Entrance Exam for Design conducted by IIT Bombay — is the only standardised entrance exam for Bachelor of Design (B.Des) programs at the IITs.",
          path: "/exams/uceed/what-it-is",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "UCEED", path: "/exams/uceed" },
            { name: "What It Is", path: "/exams/uceed/what-it-is" },
          ],
        })}
      />
      {children}
    </>
  );
}
