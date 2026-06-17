ScrollVelocity from whatnow-web. Use via `window.WhatNow.ScrollVelocity` (bundle loaded from the root `_ds_bundle.js`).

## Examples

### Default

```jsx
() => (
  <div style={{ overflow: "hidden", width: "100%" }}>
    <ScrollVelocity
      texts={["WhatNow  •  Careers  •  Exams  •  Guides  •  ", "Unbiased  •  Real stories  •  Clear roadmaps  •  "]}
      velocity={40}
      numCopies={6}
    />
  </div>
)
```
