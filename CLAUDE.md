# WhatNow — Design Constitution

Loaded every session. Keep it short and opinionated. This is the identity anchor
that stops the design drifting back to generic-average. Derived from the design
audit in `stuff.related.to.whatnow/WebsiteOverhaulGuide.md`.

## What this site is
An unbiased, free careers/exams guide for Indian students (16–19), mostly on
mobile, often on slow data. Voice: a senior who has been through it — direct,
concrete, dry, anti-hype. **"Built like a senior, not like a brand."**

## Design direction (hold the line — pick nothing new without reason)
High-end **editorial magazine**, NOT a SaaS landing page. Three deliberate moves:
1. **Distinctive editorial typography** — display serif headings + clean body.
2. **Authored over generic-stock imagery.** The hero is a two-column layout with
   an image beside the headline (`/hero.png`, right-sized via `next/image`).
   Interim: replace `/hero.png` with a specific/authored asset when available.
3. **One signature interaction per view; everything else calm.**

## Type system
- **Display (headings h1–h3):** Archivo (`--font-heading` / `--font-display`), a
  blocky grotesk, weights to 900 (so `font-black` is truly heavy), tracking `-0.02em`.
  Style the hero highlight with colour + underline, not italic. Latin only — Hindi
  headings use Mukta.
- **Body:** Inter (`--font-sans`). Paired intentionally with the display grotesk.
- **Hindi:** Mukta for both headings and body (handled in `globals.css`).
- Loaded via `next/font` with `display:'swap'` — no layout shift.
- Type scale: 1.25 major third, `--step--1 … --step-6` in `globals.css`.

## Tokens (source of truth: `src/app/globals.css` `@theme`)
Colours (`--color-primary` indigo `#4F46E5`, `--color-secondary` teal `#0A8B74`,
plus neutral/tints), the type scale, and `--shadow-card`. Use radii/padding with
intent — variation creates hierarchy; uniform radius/padding everywhere reads flat.

## Motion
Purposeful only. Eased, not snapping. Respect `prefers-reduced-motion`.
No fade-in on every block. No competing animations. The home marquee is the
single signature motion on the homepage.

## Hard do-nots
- **Do NOT rewrite existing marketing copy.** Protected lines:
  - "Built like a senior, not like a brand."
  - "We made the thing we needed when we were 17 and confused."
  - "The careers your career counselor forgot — written by people doing them."
  - "No paywall, no email gate, no upsell."
  (The hero headline is the one sanctioned exception — it was flagged generic.)
- No purple→blue gradient default; no glassmorphism by reflex.
- No uniform radius/padding that flattens hierarchy.
- No generic stock or AI-looking imagery.
- No new dependencies without asking.

## Tech constraints
Next.js 16 (app router), React 19, Tailwind v4, `next/font`, `next/image`
(AVIF/WebP, right-sized, `priority` on the hero only). Bilingual EN/हि via
`LanguageContext`. Accessibility AA. Core Web Vitals: LCP < 2.5s, CLS < 0.1,
INP < 200ms. Secrets only in `.env.local` / Vercel env — never in chat or git.

## Workflow
One change per branch/PR. Show diffs; explain non-obvious choices. When given a
screenshot, fix the specific thing named. Legal/policy drafts get human (ideally
DPDP-aware) review before publishing.
