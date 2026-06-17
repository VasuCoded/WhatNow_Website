VisualAnalytics from whatnow-web. Use via `window.WhatNow.VisualAnalytics` (bundle loaded from the root `_ds_bundle.js`).

## Examples

### ExamTrends

```jsx
() => (
  <LanguageProvider>
    <VisualAnalytics type="exam" data={examData} colorTheme="indigo" />
  </LanguageProvider>
)
```

### CareerSalary

```jsx
() => (
  <LanguageProvider>
    <VisualAnalytics type="career" data={careerData} colorTheme="teal" />
  </LanguageProvider>
)
```
