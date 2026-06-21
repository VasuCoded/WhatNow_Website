import type { ReactNode } from "react";
import { pageMeta, guideJsonLd, faqJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "UCEED — Convince Parents | WhatNow",
  description:
    "Equipping students with real IIT placement statistics, average starting packages, and logical arguments to convince parents about design careers.",
  path: "/exams/uceed/convince-parents",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          title: "UCEED — Convince Parents | WhatNow",
          description:
            "Equipping students with real IIT placement statistics, average starting packages, and logical arguments to convince parents about design careers.",
          path: "/exams/uceed/convince-parents",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "UCEED", path: "/exams/uceed" },
            { name: "Convince Parents", path: "/exams/uceed/convince-parents" },
          ],
        })}
      />
      <JsonLd
        data={faqJsonLd({
          faqs: [
            {
              q: "Design is not a stable career",
              a: 'Every app, software, banking portal, and website requires digital designers to function. It is a core tech job. Frame it as "software engineering for the user interface." UI/UX design is one of the highest-paying and fastest-growing segments in the Indian IT sector.',
            },
            {
              q: "Why not B.Tech instead?",
              a: 'An IIT B.Des has a starting salary range of ₹10L - ₹18L per annum, carries the identical "IIT Graduate" tag, and is recruited by Google, Microsoft, Samsung, and Adobe.',
            },
            {
              q: "Is B.Des a real degree?",
              a: "Show your parents the official IIT placements portals. B.Des students share the same hostel rooms, same placement office, and same alumni network as B.Tech computer science students. Pursuing a B.Des at an IIT is a safe, high-paying, and prestigious career choice that offers immediate entry into top tech firms.",
            },
          ],
        })}
      />
      {children}
    </>
  );
}
