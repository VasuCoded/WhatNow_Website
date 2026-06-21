import type { ReactNode } from "react";
import { pageMeta, guideJsonLd, faqJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "NIFT — Convince Parents | WhatNow",
  description:
    "Equipping students with retail industry placements statistics, career stability metrics, and logical talking points to align parents on fashion careers.",
  path: "/exams/nift/convince-parents",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          title: "NIFT — Convince Parents | WhatNow",
          description:
            "Equipping students with retail industry placements statistics, career stability metrics, and logical talking points to align parents on fashion careers.",
          path: "/exams/nift/convince-parents",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "NIFT", path: "/exams/nift" },
            { name: "Convince Parents", path: "/exams/nift/convince-parents" },
          ],
        })}
      />
      <JsonLd
        data={faqJsonLd({
          faqs: [
            { q: "Fashion has no job security", a: "India is the world's second-largest textile exporter. NIFT is an institute set up under the Act of Parliament (Ministry of Textiles). Brand groups like Reliance Retail, Aditya Birla Fashion, Landmark, and Shahi Exports operate multi-billion dollar retail logistics chains that depend on NIFT graduates to manage merchandising, purchasing, and production." },
            { q: "Is the pay too low?", a: "A Fashion Merchandiser / Buyer starts at ₹4.5L - ₹7.0L/yr and reaches ₹9.0L - ₹15.0L/yr mid-career. An Apparel Production Manager starts at ₹4.0L - ₹6.5L/yr (₹8.0L - ₹12.0L/yr mid-career), and a Visual Merchandiser / Retail Planner starts at ₹3.5L - ₹5.5L/yr (₹7.5L - ₹11.5L/yr mid-career)." },
            { q: "Is there career longevity in fashion?", a: "Frame your course selection (especially B.FTech or Fashion Management/Merchandising) as a Retail Operations & Logistics degree. You will be managing material flow, vendor negotiation, and purchase planning. At a premier campus (NIFT Delhi, Mumbai, Bengaluru), campus placements are highly institutionalized, offering security and a clear corporate growth trajectory." },
          ],
        })}
      />
      {children}
    </>
  );
}
