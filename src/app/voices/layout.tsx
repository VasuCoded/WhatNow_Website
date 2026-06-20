import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Real Voices | WhatNow" },
  description:
    "First-person, unfiltered interviews with professionals in non-traditional careers — salaries, daily grinds, steps, and real challenges.",
  alternates: { canonical: "/voices" },
  openGraph: {
    title: "Real Voices | WhatNow",
    description:
      "First-person, unfiltered interviews with professionals in non-traditional careers — salaries, daily grinds, steps, and real challenges.",
    url: "https://whatnowindia.vercel.app/voices",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Voices | WhatNow",
    description:
      "First-person, unfiltered interviews with professionals in non-traditional careers — salaries, daily grinds, steps, and real challenges.",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
