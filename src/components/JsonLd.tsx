// Renders a JSON-LD <script> for structured data (SEO / GEO). Server component —
// safe to drop anywhere in a page's JSX. Pass a plain object (e.g. from
// guideJsonLd() in lib/seo).
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
