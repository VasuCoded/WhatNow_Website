# WhatNow — Forensic Design Audit & Humanization Plan

> **Confidential working document**

De-genericizing **whatnowindia.vercel.app** — and executing every change with Claude Code + GitHub + Vercel + VS Code.

*Prepared 15 June 2026 • Scope: homepage + site-wide foundations*

---

## Bottom line up front

Your copy is already the most human thing about the site. It largely passes. **Do not rewrite it to beat a detector.**

"AI detection" is an unreliable treadmill — 65–90% accuracy, heavy false positives, and a documented bias against Indian / non-native-English and structured writing. Chasing a score that is rigged against you and your audience is the wrong objective. **Optimize for craft and trust instead.**

The real, high-leverage problems are **visual and structural**: the generic hero image, likely-default typography, the seven placeholder `/coming-soon` pages (including Privacy & Terms), and undifferentiated layout/motion.

Yes — the toolchain you named is the right one. **Claude Code in VS Code, a GitHub repo, and Vercel preview deploys** is close to the ideal loop for this. The make-or-break detail is a `CLAUDE.md` design constitution plus screenshot-driven iteration, or the agent drifts back to generic within ~15 messages.

Scope it honestly: a focused P0/P1 pass is roughly **6–10 evening sessions**. A full rebuild is weeks — do not start that during Phase 1 unless you are consciously trading study/Veekh time for it.

---

## Contents

- [0. How to read this, and a scope warning](#0-how-to-read-this-and-a-scope-warning)
- [1. Reality check on the premise](#1-reality-check-on-the-premise)
  - [1.1 Why "evade the detector" is the wrong objective](#11-why-evade-the-detector-is-the-wrong-objective)
  - [1.2 Why the guide is still worth reading](#12-why-the-guide-is-still-worth-reading)
- [2. The framework, distilled and corrected](#2-the-framework-distilled-and-corrected)
  - [2.1 What actually signals "machine-made" in 2026](#21-what-actually-signals-machine-made-in-2026)
- [3. Forensic audit of WhatNow](#3-forensic-audit-of-whatnow)
  - [3.1 Copy — your strongest layer](#31-copy--your-strongest-layer)
  - [3.2 Visual — where the real work is](#32-visual--where-the-real-work-is)
  - [3.3 Technical, structural & trust](#33-technical-structural--trust)
- [4. Prioritized change list](#4-prioritized-change-list)
- [5. Is Claude Code + GitHub + Vercel + VS Code the right way? Yes.](#5-is-claude-code--github--vercel--vs-code-the-right-way-yes)
- [6. Execution guide](#6-execution-guide)
- [7. Realistic phasing for a one-hour project slot](#7-realistic-phasing-for-a-one-hour-project-slot)
- [Appendix A — CLAUDE.md design constitution (template)](#appendix-a--claudemd-design-constitution-template)
- [Appendix B — Design tokens (example)](#appendix-b--design-tokens-example)
- [Appendix C — Authored-vs-generic pre-merge checklist](#appendix-c--authored-vs-generic-pre-merge-checklist)
- [Appendix D — Sources & a note on the uploaded guide](#appendix-d--sources--a-note-on-the-uploaded-guide)

---

## 0. How to read this, and a scope warning

This document does three things, in order. First, it corrects the premise of the source guide you uploaded, because building toward a wrong objective wastes the limited project hours you have during a drop year. Second, it audits the live WhatNow homepage against the parts of that guide that are actually valid, separating what I could confirm from what you need to eyeball. Third, it gives you a concrete, command-level workflow to execute the changes with Claude Code, GitHub, Vercel, and VS Code.

### The scope warning, said plainly

You are in the early weeks of a drop year with one protected project hour a day, and WhatNow shares that hour with Veekh and vasudocs. A website redesign is exactly the kind of self-directed, satisfying, infinitely-polishable task that can quietly absorb far more time than it deserves. "Switching to projects when a chapter gets hard" is one of your named failure modes. So: if you find yourself reaching for this document the same week Electrostatics or Organic turns painful, that is the tell, not the plan.

I am not telling you to skip it. WhatNow is load-bearing and this is a bounded, finishable task, not an open-ended distraction. But treat it as a backlog with a hard ceiling: ship the P0 set, optionally the P1 set, and leave P2 for weekends or buffer days. Section 7 turns that into an explicit session plan so the work has an end.

### What I could and could not inspect

I read the live homepage's rendered HTML, its copy, its asset URLs, and its link structure — those findings are marked **CONFIRMED**. I could not run a live visual render of the site in this session (the browser tool was not connected), so anything depending on seeing pixels — exact palette, fonts, border radii, motion, spacing — is marked **VERIFY**. Each VERIFY item takes you about thirty seconds to check in your own browser or in the code.

---

## 1. Reality check on the premise

The source guide frames the task as "detect AI, then evade it." That framing is half wrong and half useful. Pull them apart before you spend an hour on either.

### 1.1 Why "evade the detector" is the wrong objective

AI text detectors are not reliable enough to optimize against, and the situation is worse for you specifically than for the average user. Three independent points from 2026 research:

- **They are inaccurate and inconsistent.** Real-world accuracy lands between 65% and 90% depending on the tool, false-positive rates run from roughly 3% to 18%, and the same text can score differently on the same tool on different days.
- **Light editing defeats them.** Restructuring sentences or adding domain terms drops detection accuracy by 20–30 percentage points, and genuinely hybrid human-AI text is detected at close to 0%. Whatever a detector says about a page is mostly noise once a human has touched it.
- **They are biased against you and your readers.** Non-native-English writers and technical / structured writing are flagged disproportionately, because the features detectors key on — lower lexical variance, predictable syntax — are exactly what Indian-English and clear instructional prose look like. A peer-reviewed 2026 study found accuracy on some text types collapsing toward the floor. You write in Indian English, for an Indian-English student audience. Optimizing for a metric that is structurally rigged against that is a bad use of your hours.

#### The reframe

Stop trying to make the site "score human." Make it **unmistakably authored** — by a specific person, for a specific audience — so a confused 17-year-old lands on it and feels "someone who actually did this made it," not "another content mill." That is a real, durable advantage. A detector score is not.

### 1.2 Why the guide is still worth reading

What the detectors are clumsily gesturing at is real: **genericness**. The thing the source guide calls "the template trap" and "visual elevator music" is a genuine commercial and trust problem, and it is the actual enemy here. The 2026 design consensus is blunt about it — AI-built sites "look professional but feel interchangeable," and in any market where people pattern-match across competitors, looking like everyone else is the loss condition. Your own tagline already stakes out the opposite position: **"Built like a senior, not like a brand."** Right now the copy delivers that promise and the visual layer only half-delivers it. Closing that gap is the whole job.

So: keep the design principles from the guide, drop the detector-chasing frame. The rest of this document is built on that split.

---

## 2. The framework, distilled and corrected

The source guide mixes genuine signal with vendor marketing and over-stated math. Here is what to keep, what to downgrade to a rough smell-test, and what to ignore.

| Claim in the source guide | Verdict | How to use it |
|---|---|---|
| Perplexity / burstiness math as a detection metric | **Over-stated** | Ignore as a target. Defeated by editing; not something you tune a website toward. |
| "GPT-era" word lists (delve, tapestry, meticulous, leverage…) | **Mild smell-test** | Useful only as a quick copy gut-check. Your copy does not read like this, so it barely applies. |
| Em-dash frequency, rule-of-three, "horror aequi" | **Mild smell-test** | You use em-dashes naturally and well. Do not over-correct good writing to satisfy a heuristic. |
| Generic stock / AI-generated imagery | **REAL — high priority** | This is your single biggest visual tell. Acted on in §3 and §4. |
| Template visual patterns (purple→blue gradients, uniform bento, glassmorphism, identical radii/padding, generic fade-ins, dead hover states) | **REAL — high priority** | This is where 2026 "AI slop" actually shows. The core of the visual audit. |
| Microinteractions / Dan Saffer trigger–rules–feedback–loop | **REAL — useful** | Good, concrete framework. Add 2–3 purposeful interactions, not motion on everything. |
| TCO tables, "Pangram 6/6," detector accuracy scores, conversion multipliers | **Vendor / marketing** | Do not rely on these numbers. They are sales copy, not measured fact. |

### 2.1 What actually signals "machine-made" in 2026

Synthesized from current design sources, the honest list of tells — the ones you should audit WhatNow against — is:

1. **Default typography.** System fonts or Inter at default tracking with no intentional pairing or type scale. This is the number-one tell. The fix is not "ban Inter" — it is to make a deliberate choice (display face + body face, a real scale, tightened display tracking).
2. **The off-the-shelf skeleton.** The same palette, the same rounded corners, the same hero-with-gradient layout that you can spot on the first scroll.
3. **Uniformity as flatness.** Identical border-radius, identical padding, identical card heights everywhere. Real design systems create hierarchy through deliberate variation; sameness reads as machine-made.
4. **Dead or generic motion.** Hover states that do nothing, buttons that snap instead of easing, and either no scroll motion or the identical fade-in on every block. Purposeful motion requires understanding intent, which is exactly what defaults lack.
5. **Stock / AI imagery.** Illustrations that are slightly too smooth, too symmetric, faintly plastic; or literal stock photos of "people doing the thing."
6. **The predictable section order.** Hero → logo strip → three feature cards → testimonial → CTA, with nothing anywhere that surprises.
7. **The generic headline.** "We help [people] [verb] [outcome]" in a font that carries no emotion.

#### The one principle under all seven

**Intentionality.** Every site that stands out in 2026 wins by choosing two or three deliberate directions and executing them with discipline — not by piling on trends. "Trends make a website feel current; judgment makes it work." For WhatNow the two or three directions are obvious: distinctive editorial typography, authored (non-stock) imagery, and one signature interaction. Nail those, leave the rest conventional, and the site stops reading as machine-made.

---

## 3. Forensic audit of WhatNow

Three layers: copy, visual, and technical/trust. Findings are tagged **CONFIRMED** (read from the live page) or **VERIFY** (you check in two minutes).

### 3.1 Copy — your strongest layer

#### Verdict

This is the layer that already does the heavy lifting. It largely passes. The entire linguistic job is one headline rewrite and one optional subhead tweak. **Do not run this site through a "humanizer"** and do not let any tool rewrite the good sections.

#### Keep, and protect

These lines have voice, concrete nouns, and varied rhythm — the opposite of slop. They are why the site already feels authored:

- "Built like a senior, not like a brand."
- "We made the thing we needed when we were 17 and confused."
- "The careers your career counselor forgot — written by people doing them."
- "No paywall, no email gate, no upsell."

Pin a rule in your `CLAUDE.md` (§6.2) telling the agent **never to touch these**. This is the asset you are protecting while you change everything around it.

#### Fix — the hero headline (CONFIRMED weak)

Current: *"You have options. We help you find the right one."* Structurally this is the exact generic pattern the design sources call out — "we help you [verb]." It is the least distinctive sentence on the page, and it is the first thing a visitor reads. The rest of your copy is sharper than your headline, which is backwards.

Write your own — the point is concreteness and your voice. Starting points, not final answers:

- "Picked a path you're not sure about? So were we at 17."
- "Every option after Class 12 — explained by people who actually took it."
- "Confused after Class 12? Start here. No coaching agenda, no upsell."

#### Optional — the subhead (CONFIRMED, mild)

Current: *"Unbiased guides, real stories, and clear roadmaps for every stage of your journey."* The rule-of-three plus "every stage of your journey" is a small abstraction smell. It is fine; if you tighten the headline you may not need to touch it. Lower priority than everything in §3.2 and §3.3.

### 3.2 Visual — where the real work is

#### Typography (VERIFY — likely your #1 cheap win)

Confirm whether headings and body are running on system defaults or Inter at default tracking. If so, this is the highest-leverage visual change you can make and it is cheap in Next.js. Choose an intentional pairing: a distinctive display face for headlines (a characterful grotesk, or an editorial serif that fits the "senior who reads" voice) and a clean, highly readable body face. Set a real type scale, tighten the display tracking, and consider a variable / expressive face for the hero — expressive typography is the defining 2026 move and reads as authored. Load it with `next/font` so there is no layout shift. Note the nuance: **Inter is not banned; undifferentiated default use of it is the tell.** An intentional pairing with a real scale is the fix.

#### Hero image (CONFIRMED — top priority)

The hero loads `/hero.png` at `w=3840` with alt text "Student making career choices." A 3840px-wide raster plus that generic alt text is the classic signature of stock or AI-generated imagery — and it is heavy. Two problems in one element: it reads as machine-made, and it almost certainly hurts mobile load.

Pick one direction and commit:

- **A real, specific photo.** Even a well-shot phone photo with a point of view beats generic stock. Authored over polished.
- **Drop the literal "student" image entirely.** Lean into a typographic or illustrative hero that matches the "senior, not brand" voice. Often the strongest choice for an editorial site.
- **A custom, on-brand illustration or motif.** One recurring visual device used with restraint.

Whatever you choose, serve a right-sized asset (you do not need 3840px) in AVIF/WebP via `next/image`, with `priority` set on the hero only and correct `sizes`. This is both a "looks authored" fix and a Core Web Vitals fix.

#### The exam / career ticker (CONFIRMED)

The marquee of exam and career names (JEE, NEET, UCEED, CLAT, NDA, NIFT, Merchant Navy, Urban Planning, Game Design, Agriculture…) is an infinite scrolling ticker. The risk is that it reads as filler motion. It is not fatal, and it can be charming — but only if it is the one loud motion element on the page and it earns its place. Decide deliberately: either keep it as your single signature motion and make it functional (pause on hover; click a term to jump to that guide), or cut it. What you must not do is keep the ticker and also have a dozen competing fade-ins; that is the "elements fighting for attention" failure.

#### Uniformity (VERIFY)

Check the guide cards and the 01/02/03 value-prop blocks for identical border-radius, identical padding, and identical heights. If everything is the same 12–16px radius and the same padding, the page will read flat. Introduce deliberate variation — hierarchy through size, weight, and space, not through sameness. You do not need many radii; you need them used with intent.

#### Motion & microinteractions (VERIFY)

Check three things: do cards, links, and buttons respond to hover; do buttons ease or snap; and is scroll motion purposeful, a single generic fade-in on every block, or absent. Then add two or three purposeful microinteractions following the **trigger → rules → feedback → loop** model: a guide-card hover that lifts and reveals read-time, a satisfying open animation on the ⌘K search, a subtle state on the "Coming soon" tags. Respect `prefers-reduced-motion`. Motion should serve navigation and storytelling — never decorate every container.

#### Palette & gradients (VERIFY)

Check for the purple→blue gradient plus glassmorphism default. If it is there, replace it with an intentional palette that means something for an Indian-student-careers brand and meets WCAG AA contrast. A restrained, distinctive palette beats a trendy gradient every time, and the gradient is itself now a recognized tell.

#### Overall structure (CONFIRMED — and fine)

The page order — hero, ticker, three guides, three value props, footer — is conventional. That is acceptable for an editorial site as long as the type, imagery, and one signature interaction make it feel authored. You do not need anti-design or brutalism; those suit agencies and fashion brands and actively fail for trust-first content, which is what WhatNow is. Aim for **"high-end editorial magazine,"** not "SaaS landing page": intentional whitespace, strong typographic hierarchy, and perhaps one asymmetric / anti-grid moment in a single section for character.

### 3.3 Technical, structural & trust

#### The biggest non-design problem on the site

Seven footer links resolve to `/coming-soon`: **Contact, Content Policy, FAQ, Privacy Policy, Terms of Service, Cookie Policy, and Editorial Guidelines.** For a site whose entire pitch is trust — "unbiased," "no agenda" — shipping real Privacy and Terms pages is table stakes, not polish. And for an India-facing site touching any user data (analytics, the Discord), a basic privacy policy is also a compliance matter under the **DPDP Act**.

There is upside hiding here too: a real Editorial Guidelines page is strategically on-brand. It is literal proof of the "no coaching agenda / unbiased" claim. Write it as a feature, not a chore.

#### Placeholder in the "three featured guides" slot (CONFIRMED)

One of the three guides featured under "Start here — three guides we wish we had" (NDA) is "Coming soon / Under curation." Featuring a placeholder in your single most important first-impression slot weakens it. Either finish that guide or feature a third finished one and move NDA to a separate "coming soon" rail.

#### Performance (CONFIRMED risk)

The 3840px hero is the most likely drag on mobile LCP, and your audience is overwhelmingly on phones, often on patchy data. Right-size the asset, serve AVIF/WebP, and set `priority` and `sizes` correctly. Run Lighthouse / PageSpeed Insights on the deployed site and target good Core Web Vitals: **LCP under 2.5s, CLS under 0.1, INP under 200ms.** This matters for SEO and for real students on slow connections.

#### SEO / information architecture (VERIFY)

Quiet authority signals worth confirming:

- Per-guide metadata (title, description) and per-guide Open Graph images, so shared links look authored rather than generic.
- Structured data (Article schema on guides, FAQ schema where relevant).
- A sitemap, and proper hreflang on the EN / हि bilingual routes.

#### Keep — the things that already work

- The **Next.js + Vercel stack**: fast, modern, and it gives you free preview deployments — the backbone of the workflow in §6.
- The **⌘K command-palette search**.
- The **EN / हि toggle** — audience-appropriate and, notably, not a generic-template feature. It works in your favour.
- Clear navigation: Careers / Exams / Reads / About.

---

## 4. Prioritized change list

Ordered by leverage-per-hour. Ship P0 first; pull P1 when you have slack; treat P2 as a weekend backlog.

### P0 — ship this week

| # | Change | Why | Done when |
|---|---|---|---|
| 1 | Replace the generic hero image; right-size & reformat | Top visual tell + biggest mobile-perf drag, in one element | Hero is authored (real/typographic/illustrative), served at a sane width in AVIF/WebP; LCP improves |
| 2 | Intentional typography (display + body pairing, real scale, display tracking) via `next/font` | The #1 machine-made tell; cheap to fix | Headings no longer read as default; visible, deliberate hierarchy |
| 3 | Rewrite the hero headline (+ optional subhead) in your voice | First sentence is currently the weakest, most generic copy on the page | First line is concrete and unmistakably yours |
| 4 | Ship real Privacy Policy + Terms (+ ideally Editorial Guidelines) | Trust is the brand; also DPDP-relevant. Biggest non-design gap | Those footer links resolve to real pages; no Privacy/Terms point to `/coming-soon` |

### P1 — next, when you have slack

| # | Change | Why | Done when |
|---|---|---|---|
| 5 | Add 2–3 purposeful microinteractions; make the ticker functional or cut it | Dead/generic motion is a tell; purposeful motion reads as authored | Cards/buttons respond with eased motion; ticker pauses on hover & links out, or is gone |
| 6 | Introduce deliberate layout variation; kill uniform radii/padding that flatten hierarchy | Sameness reads machine-made | Cards/sections vary intentionally; hierarchy comes from size/weight/space |
| 7 | Fix the "three featured guides" placeholder | Placeholder weakens the key first impression | All three featured guides are real, or NDA moves to a coming-soon rail |
| 8 | Per-guide OG images + metadata + Article/FAQ schema + sitemap + hreflang | Quiet authority + shareable links that look authored | Shared guide links render custom OG cards; schema validates |

### P2 — polish / later

1. Intentional palette pass, if the site is on a gradient default.
2. One editorial / anti-grid signature section for character.
3. Remaining placeholder pages (Contact, FAQ, Content Policy, Cookie Policy).
4. Performance hardening pass — Lighthouse to green across the board.

---

## 5. Is Claude Code + GitHub + Vercel + VS Code the right way? Yes.

Short answer: **yes**, and for this exact kind of incremental, design-focused front-end work on a Next.js / Vercel app it is arguably the ideal stack. You already deploy on Vercel, your repo is on GitHub, VS Code with the Claude Code extension gives you inline diffs and screenshot-driven iteration, and Vercel hands you a live preview URL for every branch so you can see each change before it touches production.

### Why it fits you specifically

You are solo, you learn by doing, and this loop keeps you in control: Claude Code proposes diffs, you read and learn from them, and nothing ships without your merge. That matches how you already treat your projects — Claude as an unblocking tool, not a code vending machine. It is also nearly free: your Claude subscription plus the free Vercel and GitHub tiers.

### The one thing that makes or breaks it

**Design direction.** The 2026 sources are unanimous: without an "identity anchor," an AI agent drifts back to generic-average within roughly fifteen messages. The fix is a `CLAUDE.md` design constitution, a tokens file, and screenshot-driven prompts. That is most of why §6 exists — the tooling is easy; the discipline is the point.

---

## 6. Execution guide

### 6.1 Prerequisites & install

One-time machine setup. Skip whatever you already have.

**Node.js 18+.** Check with the command below. Claude Code's native installer does not need Node, but your Next.js project does, so install it regardless.

```bash
node --version   # expect v18.x or newer
npm --version
```

**Git + GitHub.** Confirm git is installed and your WhatNow repo is cloned.

```bash
git --version
git clone https://github.com/<you>/whatnow.git
cd whatnow
```

**VS Code 1.85+.**

**Claude Code — two install options.** The native installer is Anthropic-recommended (no Node dependency, auto-updates). The npm install is the classic route and needs Node 18+.

```bash
# Option A — native installer (recommended; see docs.claude.com/en/docs/claude-code)
# follow the platform installer there

# Option B — npm (needs Node 18+). Do NOT use sudo.
npm install -g @anthropic-ai/claude-code

# First run, inside the project. Authenticate via OAuth (your Claude account) or an API key:
claude
```

If npm throws `EACCES` permission errors, set a user-owned prefix instead of using sudo:

```bash
mkdir -p ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH="$HOME/.npm-global/bin:$PATH"' >> ~/.zshrc   # or ~/.bashrc
source ~/.zshrc
which claude   # verify it resolves
```

**Windows note.** WSL2 is strongly recommended. Native PowerShell/CMD works but has more friction with paths and file permissions.

**VS Code integration.** Install the Claude Code extension from the marketplace (or it auto-detects when you run `claude` in VS Code's integrated terminal). You get in-editor diffs, Quick Launch (`Cmd/Ctrl+Esc`), and file/line referencing (`Cmd/Ctrl+Opt/Alt+K`). Run the terminal-setup command once for `Shift+Enter` newlines.

```bash
/terminal-setup   # run once inside Claude Code
```

**Vercel.** Your project is already deployed. Optionally add the CLI to pull env vars and run a local prod-like server. Most importantly, confirm in the Vercel dashboard that the GitHub repo is connected so pushes auto-deploy.

```bash
npm i -g vercel
vercel login
vercel link        # connect this folder to the Vercel project
vercel pull        # pull env vars into .env.local (gitignored)
# vercel dev       # optional: run a local prod-like server
```

> **Credentials guardrail (non-negotiable)**
> Never paste API keys or passwords into a chat prompt, and never commit them. Keep secrets in `.env.local` (gitignored) and in Vercel's Environment Variables UI. Authenticate Claude Code and Vercel through their own login flows — not by pasting keys into instructions.

### 6.2 One-time project setup

1. Install deps and confirm the dev server runs:

```bash
npm install
npm run dev   # open the localhost URL it prints
```

2. Create a redesign branch off `main` so production stays untouched:

```bash
git checkout main && git pull
git checkout -b redesign/foundation
```

3. Create `CLAUDE.md` at the repo root — the **design constitution**. Claude Code reads it automatically every session; this is what stops drift. Full template in Appendix A. It pins brand voice, audience, design direction, the type system, palette/spacing tokens, motion rules, hard do-nots (including "never rewrite the good copy"), and tech constraints.

4. Centralize design tokens — colours, a real type scale, a small intentional set of radii, spacing, shadows — in a Tailwind theme extension or a CSS custom-properties file. Appendix B. This gives the agent one source of truth to reference.

5. Commit and open a draft PR. Vercel creates a preview URL on the PR automatically:

```bash
git add -A
git commit -m 'chore: add design constitution + tokens'
git push -u origin redesign/foundation
# open the PR on GitHub as a draft; Vercel comments a preview URL
```

### 6.3 The change loop (repeat for every change)

1. One branch per logical change, off `main`:

```bash
git checkout main && git pull
git checkout -b fix/hero-image
```

2. In VS Code's terminal, run `claude`. Give it a specific, screenshot-anchored task (§6.4). Reference the exact file with `Cmd/Ctrl+Opt/Alt+K`.

3. **Review the diff inline.** Do not blind-accept — read it, ask "why" on anything unfamiliar (you are in Phase 0, learning), and reject if it drifts from `CLAUDE.md`.

4. Run locally and eyeball at mobile + desktop widths. For visual fidelity, screenshot the result and paste it back: "here's the current state; the card padding is still uniform — vary it per the tokens."

```bash
npm run dev   # check localhost, resize to a phone width
```

5. When happy, commit and push:

```bash
git add -A
git commit -m 'fix: replace generic hero with authored asset'
git push
```

6. Open the Vercel preview URL on the PR, verify on a real phone, run Lighthouse on the preview.

7. Merge the PR → Vercel auto-deploys to production. Delete the branch. One change per PR keeps previews clean and rollback trivial (`git revert`, or redeploy a previous Vercel deployment from the dashboard).

### 6.4 Specific Claude Code prompts

Each models the pattern that separates premium output from generic: **specific + screenshot-anchored + references CLAUDE.md and tokens + states constraints + scopes the diff.** Copy, adapt, paste.

**Typography (P0 #2)**

```
Read CLAUDE.md and the design tokens file. Implement the type system:
load <display face> and <body face> via next/font/google with
display: 'swap'. Apply the display face to h1–h3 using the scale and
tracking in tokens; body face everywhere else. Do NOT change any copy.
Show me the diff for the font setup and the tokens file only.
```

**Hero image (P0 #1)**

```
The hero currently loads /hero.png at 3840px (generic 'student' stock).
Replace the <Image> with <new asset path>: set a sane width/height and
sizes, priority on the hero only, and rely on next/image AVIF/WebP.
If we go typographic instead of photographic, propose a hero layout
using the display type + one accent motif and no stock image.
Mobile-first and LCP-conscious. Show the diff.
```

**Microinteraction (P1 #5)**

```
Add a purposeful hover state to the guide cards: on hover, lift 2–4px
with an eased transform (200ms ease-out) and reveal the read-time.
Respect prefers-reduced-motion. This is the card's only motion.
Show the component diff.
```

**Legal / policy pages (P0 #4)**

```
Create app/privacy/page.tsx and app/terms/page.tsx as real route pages
using our layout and type styles. Draft India-DPDP-aware Privacy and
standard Terms content as a STARTING DRAFT I will review with a human;
clearly mark placeholders for entity name and contact. Wire the footer
links to these routes and remove the /coming-soon targets.
```

> **On the legal drafts**
> Claude's draft is a starting point, not legal advice. Get a human — ideally someone who knows the DPDP Act — to review Privacy and Terms before you publish them. The agent is good for structure and first-pass language; it is not your lawyer, and neither am I.

**Read-only audit pass (do this first, before editing)**

```
Without changing any copy, scan the homepage components for the
AI-slop tells listed in CLAUDE.md (uniform radii/padding, dead hover
states, fade-in-on-everything, default tracking). List each instance
with file:line and a proposed fix. Do NOT edit yet — just the report.
```

### 6.5 Guardrails & review discipline

- **CLAUDE.md is law.** If a diff violates it, reject and cite the rule.
- **One change per branch/PR;** always preview before prod.
- **Never let it rewrite the good copy.** Pin that in CLAUDE.md and watch for it.
- **Read every diff.** You are learning, not outsourcing. Ask "why" on anything unfamiliar.
- **Secrets stay in `.env.local` / Vercel env** — never in chat or git.
- **Legal/policy drafts get human review** before publishing.
- **Keep `main` always-deployable;** use Vercel's instant rollback if production breaks.
- **Question new dependencies.** Don't let the agent add packages casually.

---

## 7. Realistic phasing for a one-hour project slot

This assumes you allocate roughly **6–10 of your protected 4–5pm project hours** to WhatNow over about two weeks — which means trading that time away from Veekh and vasudocs for that stretch. Decide that trade consciously; do not let it leak past the ceiling.

| Session | Focus | Output |
|---|---|---|
| 1 | Setup | Node/Claude Code/VS Code/Vercel linked; CLAUDE.md + tokens; foundation PR open |
| 2–3 | Typography + hero | The two biggest visual wins shipped |
| 4 | Hero headline + subhead | Your words; fast |
| 5–6 | Privacy + Terms (+ Editorial Guidelines) | Real pages live; footer links resolve |
| 7 | Microinteractions + ticker decision | 2–3 purposeful interactions; ticker fixed or cut |
| 8 | Layout variation + featured-guide fix | Hierarchy through variation; no placeholder in the key slot |
| 9 | OG images / metadata / schema / sitemap / hreflang | Shareable, well-indexed pages |
| 10 | Lighthouse / perf hardening; final review | Core Web Vitals green; P0–P1 done |

> **The opportunity-cost line**
> That is P0–P1, finished. P2 is a backlog you pull from on weekends or buffer days — not something to grind during a heavy chapter week. If you notice yourself wanting to keep polishing past session 10, run it against your Sunday two-sentence review and the OS Diary distraction protocol before you continue. The site being "good enough to be proud of" is the goal; "perfect" is the trap.

---

## Appendix A — CLAUDE.md design constitution (template)

Drop this at the repo root as `CLAUDE.md`, then replace every angle-bracket placeholder. Claude Code loads it automatically each session. Keep it short and opinionated — vague constitutions don't anchor anything.

```markdown
# WhatNow — Design Constitution

## What this site is
An unbiased, free careers/exams guide for Indian students (16–19),
mostly on mobile, often on slow data. Voice: a senior who has been
through it — direct, concrete, dry, anti-hype. "Built like a senior,
not like a brand."

## Design direction (pick 2–3 and hold the line)
High-end editorial magazine, NOT a SaaS landing page.
1. Distinctive editorial typography.
2. Authored imagery (never generic stock / AI-looking).
3. One signature interaction; everything else calm.

## Type system
Display: <face> for h1–h3, tracking <value>, scale <ratio>.
Body: <face>. Load via next/font with display:'swap'. No layout shift.

## Tokens (source of truth: <tokens file>)
Colours, type scale, a SMALL intentional set of radii, spacing, shadows.
Use radii/padding with intent — variation creates hierarchy.

## Motion
Purposeful only. Eased, not snapping. Respect prefers-reduced-motion.
No fade-in on every block. No competing animations.

## Hard do-nots
- Do NOT rewrite existing marketing copy. Protected lines:
  "Built like a senior, not like a brand."
  "We made the thing we needed when we were 17 and confused."
  "The careers your career counselor forgot..."
  "No paywall, no email gate, no upsell."
- No purple→blue gradient default. No glassmorphism by reflex.
- No uniform radius/padding that flattens hierarchy.
- No generic stock or AI-looking imagery.
- No new dependencies without asking.

## Tech constraints
Next.js (app router), next/font, next/image (AVIF/WebP).
Accessibility AA. Core Web Vitals: LCP<2.5s, CLS<0.1, INP<200ms.
Secrets only in .env.local / Vercel env.

## Workflow
One change per branch/PR. Show diffs; explain non-obvious choices.
When given a screenshot, fix the specific thing named.
```

---

## Appendix B — Design tokens (example)

A minimal token set as CSS custom properties. If you use Tailwind, mirror these in your theme `extend` instead. The point is one referenceable source of truth and a deliberately small, varied set — not a radius for every occasion.

```css
:root {
  /* colour — replace with an intentional, AA-contrast palette */
  --ink: #1a1a1a;
  --paper: #ffffff;
  --accent: #0b5fff;   /* one accent, used sparingly */
  --muted: #5b5b5b;

  /* type scale (1.25 — major third) */
  --step--1: 0.8rem;
  --step-0: 1rem;
  --step-1: 1.25rem;
  --step-2: 1.563rem;
  --step-3: 1.953rem;
  --step-4: 2.441rem;
  --step-5: 3.052rem;   /* hero display */

  /* radii — intentionally just two, used for different roles */
  --radius-sm: 6px;
  --radius-lg: 16px;

  /* spacing scale */
  --space-1: 0.5rem; --space-2: 1rem; --space-3: 1.5rem;
  --space-4: 2.5rem; --space-5: 4rem;

  /* one real shadow, not a default blur */
  --shadow-card: 0 8px 24px -12px rgba(0,0,0,0.18);
}
```

---

## Appendix C — Authored-vs-generic pre-merge checklist

A 60-second gut-check before you merge any visual change. If you answer "no" to the left column, you are shipping a tell.

| Authored (aim for this) | Generic tell (avoid) |
|---|---|
| Headings use a chosen display face with deliberate tracking | System font / default Inter, default tracking |
| Imagery is real, specific, or custom-illustrated | Stock or AI-looking "person doing the thing" |
| Hierarchy comes from intentional size/weight/space variation | Everything the same radius, padding, height |
| One purposeful signature interaction; the rest is calm | Dead hover states, or fade-in on every block |
| Buttons and transitions are eased | Buttons snap; no transition |
| Palette is restrained and means something; passes AA | Purple→blue gradient + glassmorphism by reflex |
| Copy is concrete and in your voice | "We help [people] [verb] [outcome]" |
| Hero asset is right-sized, AVIF/WebP, LCP-conscious | 3840px raster shipped to phones |

---

## Appendix D — Sources & a note on the uploaded guide

### Treat the uploaded guide as a design checklist, not a fact sheet

The document you uploaded is useful for its design principles (§2, §4) but several of its specifics — perplexity/burstiness as a usable metric, the precise "GPT-era" word lists, the TCO tables, the "Pangram 6/6"-style accuracy scores — are over-stated or vendor marketing. Do not cite those numbers as fact. The detector-evasion premise in particular is a treadmill; §1 explains why.

### Research used in this audit

**On detector unreliability (the basis for §1):**

- Are AI Detectors Accurate in 2026? — Walter Writes
- Evaluating the accuracy and reliability of AI content detectors — Int. J. for Educational Integrity (Springer, 2026)
- AI Content Detection Tools 2026: What Works and What Doesn't — Digital Applied
- AI Content Detectors vs Reality — Atom Writer

**On AI-design tells and distinctive design (the basis for §2–§4):**

- AI Slop Web Design: Spotting and Fixing Generic Websites (2026) — 925 Studios
- How To Spot AI-Generated Design — Nick Babich, UX Planet
- What's Wrong with AI-Generated Websites — Freshly Brewed Marketing
- Top Web Design Trends for 2026 — Figma
- Web Design Trends 2026 (intentionality, editorial direction) — Line25
- Top Web Design Trends for 2026 (anti-design, judgment over trends) — Buzz Interactive
- Building Premium AI-Built Websites (CLAUDE.md identity anchor, screenshot iteration) — AI Fire

**On the toolchain (the basis for §5–§6):**

- Claude Code — official docs
- Claude Code advanced setup / system requirements
- Claude Code + VS Code setup (2026) — Automation Atlas

---

> **Final note:** the strongest version of WhatNow is not the one that beats a detector. It is the one where a confused student feels a real person made it for them. Your copy already gets you most of the way there — this is mostly about making the visual and structural layers tell the same truth.
