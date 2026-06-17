Button from whatnow-web. Use via `window.WhatNow.Button` (bundle loaded from the root `_ds_bundle.js`).

## Examples

### Primary

```jsx
() => <Button variant="primary">Explore Careers</Button>
```

### Outline

```jsx
() => <Button variant="outline">About WhatNow</Button>
```

### WithIcon

```jsx
() => (
  <Button variant="primary" icon={<Arrow />}>Get started</Button>
)
```

### Disabled

```jsx
() => (
  <Button variant="primary" disabled>Submitting…</Button>
)
```
