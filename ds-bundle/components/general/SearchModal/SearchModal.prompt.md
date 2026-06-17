SearchModal from whatnow-web. Use via `window.WhatNow.SearchModal` (bundle loaded from the root `_ds_bundle.js`).

## Examples

### Open

```jsx
() => {
  useEffect(() => {
    const id = setTimeout(() => window.dispatchEvent(new CustomEvent("open-search")), 30);
    return () => clearTimeout(id);
  }, []);
  return (
    <LanguageProvider>
      <SearchModal />
    </LanguageProvider>
  );
}
```
