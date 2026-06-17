import LegalPage from "@/components/LegalPage";

export const metadata = { title: "FAQ" };

export default function FaqPage() {
  return (
    <LegalPage titleEn="Frequently Asked Questions" titleHi="अक्सर पूछे जाने वाले प्रश्न" updated="2026-06-17" draft={false}>
      <h2>Is WhatNow really free?</h2>
      <p>
        Yes — completely. No paywall, no email gate, no upsell. Every guide is free to read, and there is no
        account to create.
      </p>

      <h2>Who writes the guides?</h2>
      <p>
        Seniors and people who have actually taken these paths, working from official data. See our
        <a href="/editorial-guidelines"> Editorial Guidelines</a> for exactly how a guide is made and held to a
        standard.
      </p>

      <h2>Are you sponsored by any college or coaching institute?</h2>
      <p>
        No. WhatNow is <strong>100% sponsor-free</strong> — no paid placements, no referral commissions, no
        institute can pay to rank higher. That independence is the whole point.
      </p>

      <h2>Some pages say &ldquo;coming soon&rdquo; — why?</h2>
      <p>
        We only publish a guide once we can do it honestly and thoroughly. We&rsquo;d rather mark a section
        &ldquo;under curation&rdquo; than ship a shallow guess. You can ask us to prioritise a page from its
        placeholder.
      </p>

      <h2>Can I read it in Hindi?</h2>
      <p>
        Yes. Use the <strong>EN / हि</strong> toggle in the navigation bar to switch the whole site between English
        and हिंदी.
      </p>

      <h2>How do I contribute or report a mistake?</h2>
      <p>
        Please do — it genuinely helps the next student. Head to the <a href="/contact">contact page</a> or join
        our <a href="/discord">Discord community</a>. If you cracked a relevant exam or work in a field we cover,
        we&rsquo;d love your input.
      </p>

      <h2>Is this professional career advice?</h2>
      <p>
        No — it&rsquo;s honest, well-researched <em>information</em> to help you think clearly, not personalised
        professional advice. Always verify time-sensitive details with the official source. See our
        <a href="/terms"> Terms</a>.
      </p>
    </LegalPage>
  );
}
