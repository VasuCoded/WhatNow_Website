import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Content Policy" };

export default function ContentPolicyPage() {
  return (
    <LegalPage titleEn="Content Policy" titleHi="सामग्री नीति" updated="2026-06-17">
      <p>
        This policy explains the standards every WhatNow guide is held to. It is the companion to our
        <a href="/editorial-guidelines"> Editorial Guidelines</a>, which describe <em>how</em> we make guides.
      </p>

      <h2>Independence first</h2>
      <ul>
        <li><strong>Sponsor-free.</strong> No paid placements, no referral commissions, no &ldquo;recommended&rdquo; colleges in exchange for money.</li>
        <li><strong>No hidden incentives.</strong> If we ever mention a paid product, it will be clearly labelled and chosen on merit, not payment.</li>
      </ul>

      <h2>Accuracy &amp; sourcing</h2>
      <ul>
        <li>Time-sensitive facts (fees, cut-offs, dates, seat counts) are sourced from official bodies and dated.</li>
        <li>Lived-experience claims come from named or described seniors who actually took that path.</li>
        <li>We distinguish fact from opinion, and we say when something is our judgement.</li>
      </ul>

      <h2>Corrections</h2>
      <p>
        We will get things wrong sometimes — patterns change and we&rsquo;re human. When we do, we fix it and,
        for material corrections, note the change. Spotted an error? <a href="/contact">Tell us</a>; it genuinely
        helps the next student.
      </p>

      <h2>What we won&rsquo;t publish</h2>
      <ul>
        <li>Fear-based or guilt-based pressure tactics.</li>
        <li>Guaranteed-outcome or &ldquo;crack it in 30 days&rdquo; claims.</li>
        <li>Content that pushes one institute for reasons other than student benefit.</li>
      </ul>
    </LegalPage>
  );
}
