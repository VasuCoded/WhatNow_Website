import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Cookie Policy" };

export default function CookiePolicyPage() {
  return (
    <LegalPage titleEn="Cookie Policy" titleHi="कुकी नीति" updated="2026-06-17">
      <p>
        WhatNow uses very few cookies and similar browser storage. We never use them to build an advertising
        profile of you.
      </p>

      <h2>What we store</h2>
      <ul>
        <li>
          <strong>Preferences (essential).</strong> Your language choice (EN/हि) and chosen &ldquo;vibe theme&rdquo;
          are saved in your browser&rsquo;s <strong>localStorage</strong> so the site remembers them. This data never
          leaves your device.
        </li>
        <li>
          <strong>Analytics (aggregated).</strong> Privacy-respecting analytics may set a minimal cookie or use
          anonymous measurement to count page views. It does not identify you.
        </li>
      </ul>

      <h2>What we don&rsquo;t use</h2>
      <ul>
        <li>No advertising or cross-site tracking cookies.</li>
        <li>No third-party marketing pixels.</li>
      </ul>

      <h2>Managing cookies</h2>
      <p>
        You can clear or block cookies and site storage in your browser settings at any time. Clearing storage
        will reset your language and theme preferences, but the site will keep working.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? <a href="/contact">Reach out to us.</a> See also our
        <a href="/privacy"> Privacy Policy</a>.
      </p>
    </LegalPage>
  );
}
