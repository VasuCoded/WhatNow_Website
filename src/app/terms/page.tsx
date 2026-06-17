import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <LegalPage titleEn="Terms of Service" titleHi="सेवा की शर्तें" updated="2026-06-17">
      <p>
        These terms govern your use of WhatNow. By using the site you agree to them. We&rsquo;ve kept them short
        and in plain language.
      </p>

      <h2>What WhatNow is</h2>
      <p>
        WhatNow provides free, independent, educational guidance about careers and entrance exams for Indian
        students. Everything is free to read — no paywall, no email gate, no upsell.
      </p>

      <h2>Educational information, not professional advice</h2>
      <p>
        Our guides are researched in good faith and written by people who have been through these paths, but they
        are <strong>general information, not personalised career, legal, financial, or admissions advice</strong>.
        Exam patterns, fees, cut-offs, and rules change — always verify time-sensitive details with the official
        source (e.g. the conducting body or institute) before you act on them.
      </p>

      <h2>Acceptable use</h2>
      <ul>
        <li>Read, share, and learn from our content freely.</li>
        <li>Do not scrape the site at scale, misrepresent it, or republish guides as your own.</li>
        <li>Do not use the site to break the law or harm others.</li>
      </ul>

      <h2>Intellectual property</h2>
      <p>
        Guide text and original graphics are WhatNow&rsquo;s, shared so students can read and link to them.
        Brand names, exam names, and logos belong to their respective owners and are used only for identification.
      </p>

      <h2>External links</h2>
      <p>
        We link to official portals, communities, and resources we do not control. We are not responsible for
        their content or availability.
      </p>

      <h2>No warranty &amp; liability</h2>
      <p>
        The site is provided &ldquo;as is.&rdquo; We work hard for accuracy but do not warrant that every detail is
        current or error-free, and we are not liable for decisions made solely on the basis of the site. If you
        spot a mistake, please <a href="/contact">tell us</a> — corrections are part of how this works.
      </p>

      <h2>Changes &amp; contact</h2>
      <p>
        We may update these terms; the &ldquo;last updated&rdquo; date reflects the latest version. Questions:
        <a href="/contact"> contact us</a>. Operated by <strong>the WhatNow team</strong>,
        India. Governing law: India.
      </p>
    </LegalPage>
  );
}
