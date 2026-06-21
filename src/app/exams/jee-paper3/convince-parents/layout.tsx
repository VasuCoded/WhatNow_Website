import type { ReactNode } from "react";
import { pageMeta, guideJsonLd, faqJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "JEE Main Paper 3 — Convince Parents | WhatNow",
  description:
    "Equipping students with real-world urban planning placement statistics, career stability metrics, and logical talking points to align parents on B.Plan decisions.",
  path: "/exams/jee-paper3/convince-parents",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          title: "JEE Main Paper 3 — Convince Parents | WhatNow",
          description:
            "Equipping students with real-world urban planning placement statistics, career stability metrics, and logical talking points to align parents on B.Plan decisions.",
          path: "/exams/jee-paper3/convince-parents",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "JEE Paper 3", path: "/exams/jee-paper3" },
            { name: "Convince Parents", path: "/exams/jee-paper3/convince-parents" },
          ],
        })}
      />
      <JsonLd
        data={faqJsonLd({
          faqs: [
            {
              q: "What is B.Planning? Is it a sub-degree or a real career?",
              a: "B.Planning is a highly professional, AICTE-approved 4-year degree. It is recognized by the Institute of Town Planners, India (ITPI). With India building 100 Smart Cities and investing Rs 10+ Lakh Crores in urban infrastructure, the need for specialized planners who understand zoning laws, economic feasibility, and GIS mapping is at an all-time high. Traditional civil engineers do not study these policy frameworks.",
            },
            {
              q: "Do planners get corporate jobs, or is it only government contracts?",
              a: "No - planners are hired across the private sector. Real estate consultancies (JLL, Knight Frank, Cushman) hire valuation analysts at Rs 5.0L - Rs 8.0L/yr; infrastructure developers (L&T, Tata Projects) hire transport network planners and smart city executives at Rs 6.0L - Rs 9.0L/yr; and policy research bodies & NGOs (WRI India, NIUA, World Bank projects) hire research associates at Rs 4.5L - Rs 7.0L/yr.",
            },
            {
              q: "Is B.Planning a good financial investment?",
              a: "If you secure admission in the School of Planning and Architecture (SPA Delhi, Bhopal, or Vijayawada), tuition fees are heavily subsidized by the Central Government (~Rs 1.8L - Rs 2.5L per year). This makes B.Planning at SPAs one of the most high-ROI degrees in the country compared to private engineering colleges that charge Rs 15L - Rs 20L with similar or lower starting salary packages.",
            },
          ],
        })}
      />
      {children}
    </>
  );
}
