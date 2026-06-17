NoticeBoard from whatnow-web. Use via `window.WhatNow.NoticeBoard` (bundle loaded from the root `_ds_bundle.js`).

## Examples

### Open

```jsx
() => {
  useEffect(() => {
    const id = setTimeout(() => window.dispatchEvent(new CustomEvent("open-notice-board")), 30);
    return () => clearTimeout(id);
  }, []);
  return <NoticeBoard />;
}
```
