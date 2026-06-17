import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <LegalPage titleEn="Privacy Policy" titleHi="गोपनीयता नीति" updated="2026-06-17">
      <p>
        WhatNow (&ldquo;<strong>we</strong>,&rdquo; &ldquo;<strong>us</strong>&rdquo;) is a free, unbiased
        careers and exams guide for Indian students. We are built to need as little of your data as possible.
        This policy explains what we collect, why, and your rights — including under India&rsquo;s
        <strong> Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li><strong>No accounts.</strong> WhatNow has no sign-up, no login, and no email gate. We do not ask you for your name, email, or phone number to read anything.</li>
        <li><strong>Anonymous analytics.</strong> We use privacy-respecting, aggregated analytics to understand which guides are useful (page views, rough region, device type). This is not tied to your identity.</li>
        <li><strong>Language preference.</strong> Your EN/हि choice is stored locally in your browser (localStorage), not on our servers. See the <a href="/cookie-policy">Cookie Policy</a>.</li>
      </ul>

      <h2>What we do NOT do</h2>
      <ul>
        <li>We do not sell, rent, or trade your personal data — ever.</li>
        <li>We do not run sponsored placements or share data with colleges, coaching institutes, or advertisers.</li>
        <li>We do not build advertising profiles of you.</li>
      </ul>

      <h2>Third-party services</h2>
      <p>
        Some pages link out to external services we do not control — our <strong>Discord community</strong>,
        Instagram, and YouTube. When you follow those links, their own privacy policies apply. Embedded
        content (e.g. fonts or icons) may be served by third parties; we choose providers that do not track you
        for advertising.
      </p>

      <h2>Your rights under the DPDP Act</h2>
      <p>
        As a Data Principal you have the right to access, correct, and erase personal data we hold about you,
        to withdraw consent, and to grievance redressal. Because we keep almost no identifiable data, most
        requests are simple. To exercise any right, contact us (below).
      </p>

      <h2>Children</h2>
      <p>
        Our audience includes students under 18. We do not knowingly collect identifiable personal data from
        minors. Where the DPDP Act requires verifiable parental consent for processing a child&rsquo;s data, we
        avoid such processing entirely rather than collect it.
      </p>

      <h2>Changes &amp; contact</h2>
      <p>
        We&rsquo;ll post any material changes on this page with a new &ldquo;last updated&rdquo; date.
        Questions or data requests: <a href="/contact">reach out to us</a> at
        <strong> indiawhatnow@gmail.com</strong>. The data fiduciary is <strong>the WhatNow team</strong>.
      </p>
    </LegalPage>
  );
}
