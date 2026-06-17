import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Editorial Guidelines" };

export default function EditorialGuidelinesPage() {
  return (
    <LegalPage titleEn="Editorial Guidelines" titleHi="संपादकीय दिशानिर्देश" updated="2026-06-17" draft={false}>
      <p>
        WhatNow exists because the honest version of this information was hard to find when we were 17 and
        confused. These guidelines are how we keep it honest. They are public on purpose — they&rsquo;re the proof
        behind &ldquo;<strong>no coaching agenda</strong>.&rdquo;
      </p>

      <h2>1. Independence is non-negotiable</h2>
      <p>
        Every guide is <strong>sponsor-free</strong>. No college, coaching institute, or brand can pay to appear,
        rank higher, or soften a downside. If money ever enters the picture, it will be disclosed loudly and will
        not influence a recommendation.
      </p>

      <h2>2. Written by people who took the path</h2>
      <p>
        Career and exam guides are built from the lived experience of seniors who actually did them — combined
        with official data. We&rsquo;d rather say &ldquo;we don&rsquo;t have a guide yet&rdquo; than publish a
        guess. That&rsquo;s why some sections read &ldquo;under curation.&rdquo;
      </p>

      <h2>3. Show the trade-offs</h2>
      <p>
        Every path has a cost — money, years, risk, lifestyle. A guide that only lists upsides is marketing. We
        name the downsides as plainly as the upsides, so you can decide with open eyes.
      </p>

      <h2>4. Source the facts, date them</h2>
      <p>
        Fees, cut-offs, seat counts, and deadlines come from official sources and are dated, because they go
        stale. When a fact is time-sensitive, we point you to the authority to re-check before you act.
      </p>

      <h2>5. Plain language, both languages</h2>
      <p>
        We write the way a straight-talking senior would — concrete, dry, no hype — and we publish in English and
        हिंदी so language isn&rsquo;t a barrier.
      </p>

      <h2>6. Correct openly</h2>
      <p>
        When we get something wrong, we fix it and note material corrections. Found an error or want to
        contribute your own experience? <a href="/contact">Reach out</a> — guides get better when the people who
        lived them weigh in.
      </p>
    </LegalPage>
  );
}
