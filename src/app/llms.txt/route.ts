// Served at /llms.txt — a plain-text map of the site for LLMs / answer engines
// (the emerging "GEO" convention, see llmstxt.org). Keep links absolute.

const BASE = "https://whatnowindia.vercel.app";

const CONTENT = `# WhatNow

> Free, honest, non-sponsored career and entrance-exam guidance for Indian students after Class 10/12. Bilingual (English / हिन्दी). No coaching agenda and no affiliate links — the guidance comes from people who don't earn a cut when a student chooses. Every factual claim is meant to be traceable to an official source.

## Exams
- [Exams overview](${BASE}/exams): Structured guides to Indian entrance exams — pattern, prep, fees, scholarships, and how to convince parents.
- [CLAT — Law entrance](${BASE}/exams/clat): The Common Law Admission Test for the National Law Universities (NLUs); 5-year integrated BA/BBA LLB.
- [CLAT — exam pattern & syllabus](${BASE}/exams/clat/what-it-is): 120 questions in 2 hours, section weightage, marking scheme, eligibility.
- [CLAT — is it for you? (vs AILET)](${BASE}/exams/clat/is-it-for-you): Suitability for law, corporate vs litigation lifestyle, CLAT vs AILET.
- [CLAT — prep & books](${BASE}/exams/clat/resources): Self-study roadmap, legal-reasoning guides, mock-analysis plans, recommended books.
- [CLAT — NLU seats, fees & scholarships](${BASE}/exams/clat/scholarships): Fee structures across NLUs, Central Sector schemes, and waivers.
- [CLAT — convince parents](${BASE}/exams/clat/convince-parents): NLU placement stats and corporate-law recruiter data for the family conversation.
- [IMU CET (maritime entrance)](${BASE}/exams/imu-cet): Indian Maritime University Common Entrance Test for nautical/marine-engineering programs.
- [NIFT, UCEED, JEE Paper 3](${BASE}/exams): Design and architecture entrance guides.

## Careers
- [Careers overview](${BASE}/careers): Honest deep-dives into non-traditional careers — entry routes, colleges, salaries, reality checks.
- [Law as a career](${BASE}/careers/law): Corporate law vs litigation, NLU ROI, integrated LLB routes.

## Reads
- [Editorial reads](${BASE}/reads): Long-form, honest articles on the decisions nobody explains — drop years, talking creative fields with parents, moving cities for work.

## About
- [About WhatNow](${BASE}/about): The mission — free, honest, non-sponsored guidance.
- [Editorial guidelines](${BASE}/editorial-guidelines): How we research, source, and correct.
- [FAQ](${BASE}/faq): Is it free, who's behind it, how accurate the data is.
- [Contact](${BASE}/contact): How to reach the team.
`;

export const dynamic = "force-static";

export function GET() {
  return new Response(CONTENT, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
