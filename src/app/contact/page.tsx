import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <LegalPage titleEn="Get in touch" titleHi="संपर्क करें" updated="2026-06-17" draft={false}>
      <p>
        WhatNow is built by a small team that actually reads its messages. Whether you&rsquo;ve spotted a mistake,
        want to contribute your experience, or just have a question — reach out.
      </p>

      <h2>The fastest way: our community</h2>
      <p>
        Join the <a href="/discord">WhatNow Discord</a>. It&rsquo;s where students, contributors, and the team
        talk day to day — ask a question and you&rsquo;ll usually get a real answer.
      </p>

      <h2>Email</h2>
      <p>
        For corrections, contributions, or anything private:
        <strong> indiawhatnow@gmail.com</strong>.
      </p>

      <h2>Social</h2>
      <ul>
        <li><a href="https://instagram.com/whatnow.in">Instagram — @whatnow.in</a></li>
        <li><a href="https://www.youtube.com/@indiawhatnow">YouTube — @indiawhatnow</a></li>
      </ul>

      <h2>Want to contribute?</h2>
      <p>
        If you work in a field we cover or cracked a relevant exam, you can help write or review a guide. That&rsquo;s
        how WhatNow stays honest and specific — see the <a href="/editorial-guidelines">Editorial Guidelines</a> for
        the bar we hold content to.
      </p>
    </LegalPage>
  );
}
