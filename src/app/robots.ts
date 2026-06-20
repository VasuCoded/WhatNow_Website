import type { MetadataRoute } from "next";

const BASE = "https://whatnowindia.vercel.app";

export default function robots(): MetadataRoute.Robots {
  // Answer-engine / AI crawlers we explicitly welcome — WhatNow WANTS to be read
  // and cited in AI answers (GEO), so they get the same open access as everyone.
  const aiBots = [
    "GPTBot", "OAI-SearchBot", "ChatGPT-User",
    "ClaudeBot", "Claude-User", "anthropic-ai",
    "PerplexityBot", "Perplexity-User",
    "Google-Extended", "Applebot-Extended", "CCBot", "Meta-ExternalAgent",
  ];
  const base = { allow: "/", disallow: ["/coming-soon", "/demo"] };

  return {
    rules: [
      { userAgent: "*", ...base },
      ...aiBots.map((userAgent) => ({ userAgent, ...base })),
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
