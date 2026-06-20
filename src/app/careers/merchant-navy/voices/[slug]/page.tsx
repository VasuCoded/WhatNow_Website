import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getVoice, publishedVoices } from "@/data/voices";
import { SITE_URL } from "@/lib/seo";
import VoiceReader from "@/components/VoiceReader";

const VERTICAL = "merchant-navy";
const isDev = process.env.NODE_ENV !== "production";

export function generateStaticParams() {
  return publishedVoices(VERTICAL).map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const v = getVoice(slug);
  if (!v) return {};
  const draft = v.status !== "published" || !v.consent;
  const path = `/careers/${VERTICAL}/voices/${slug}`;
  const title = `${v.name} — ${v.rank} | Real Voices`;
  const ogTitle = `Real Voices: ${v.name}, ${v.rank}`;
  return {
    title,
    description: v.pullQuote,
    robots: draft ? { index: false, follow: false } : undefined,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description: v.pullQuote,
      url: `${SITE_URL}${path}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: v.pullQuote,
    },
  };
}

export default async function VoicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const v = getVoice(slug);
  const published = v && v.status === "published" && v.consent;

  // Public only sees published+consented voices. Drafts render in dev for review.
  if (!v || v.vertical !== VERTICAL || (!published && !isDev)) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: `Real Voices: ${v.name}, ${v.rank}`,
    description: v.pullQuote,
    author: { "@type": "Person", name: v.name },
    publisher: { "@type": "Organization", name: "WhatNow", url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}/careers/${VERTICAL}/voices/${slug}`,
    inLanguage: "en-IN",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VoiceReader voice={v} />
    </>
  );
}
