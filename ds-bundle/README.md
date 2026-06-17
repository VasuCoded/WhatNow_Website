# WhatNow (whatnow-web@0.1.0)

This design system is the published whatnow-web React library, bundled as a single
browser global. All 15 components are the real upstream code.

## Where things are

- `_ds_bundle.js` — the whole-DS bundle at the project root; loads every component to `window.WhatNow`. First line is a `/* @ds-bundle: … */` metadata header.
- `styles.css` — the single stylesheet entry: it `@import`s the tokens, fonts, and component styles (`_ds_bundle.css`). Link this one file.
- `components/<group>/<Name>/<Name>.prompt.md` (example JSX + variants), `<Name>.d.ts` (types), `<Name>.html` (variant grid).
- `tokens/*.css` — CSS custom properties, names verbatim from upstream.
- `fonts/` — `@font-face` files + `fonts.css` (when the package ships fonts).

For a specific component, `read_file("components/<group>/<Name>/<Name>.prompt.md")`.

## Loading

Add these two lines to your page once (React must be on the page first):

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
```

Components are then available at `window.WhatNow.*`. Mount into a dedicated child node (e.g. `<div id="ds-root">`), not the host page's own React root, so the two trees don't collide:

```jsx
const { AdminNoticeBoard } = window.WhatNow;
ReactDOM.createRoot(document.getElementById('ds-root')).render(<AdminNoticeBoard />);
```

## Tokens

250 CSS custom properties from whatnow-web. Names are
preserved verbatim from upstream. They are declared inside `_ds_bundle.css` (this DS ships one compiled stylesheet rather than separate token files).

- **color** (144): `--color-red-50`, `--color-red-100`, `--color-red-200`, …
- **spacing** (5): `--tw-space-y-reverse`, `--tw-inset-shadow`, `--tw-inset-shadow-alpha`, …
- **typography** (18): `--font-sans`, `--font-mono`, `--font-weight-normal`, …
- **radius** (6): `--radius-sm`, `--radius-md`, `--radius-lg`, …
- **shadow** (7): `--tw-shadow`, `--tw-ring-shadow`, `--tw-shadow-alpha`, …
- **other** (70): `--spacing`, `--container-xs`, `--container-sm`, …

## Components

### general
- `AdminNoticeBoard`
- `Button`
- `ComingSoon`
- `ContextMenu`
- `Footer`
- `Navbar`
- `NoticeBoard`
- `ScrollVelocity`
- `SearchModal`
- `VisualAnalytics`

### home
- `FeaturedGuides`
- `Hero`
- `Marquee`
- `Testimonials`
- `WhyWhatnow`
