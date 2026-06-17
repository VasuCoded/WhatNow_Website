AdminNoticeBoard from whatnow-web. Use via `window.WhatNow.AdminNoticeBoard` (bundle loaded from the root `_ds_bundle.js`).

## Examples

### Open

```jsx
() => {
  useEffect(() => {
    const id = setTimeout(() => window.dispatchEvent(new CustomEvent("open-admin-notices")), 30);
    return () => clearTimeout(id);
  }, []);
  return <AdminNoticeBoard />;
}
```
