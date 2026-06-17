ContextMenu from whatnow-web. Use via `window.WhatNow.ContextMenu` (bundle loaded from the root `_ds_bundle.js`).

## Examples

### Open

```jsx
() => {
  useEffect(() => {
    const id = setTimeout(
      () => window.dispatchEvent(new MouseEvent("contextmenu", { clientX: 48, clientY: 48, bubbles: true, cancelable: true })),
      30
    );
    return () => clearTimeout(id);
  }, []);
  return (
    <LanguageProvider>
      <ContextMenu />
    </LanguageProvider>
  );
}
```
