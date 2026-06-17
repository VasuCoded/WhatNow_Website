import { chromium } from 'playwright';
const BASE = process.argv[2] || 'http://127.0.0.1:3210';
const shots = [
  ['/', 'home-desktop', 1280, 860, false],
  ['/', 'home-mobile', 390, 844, false],
  ['/privacy', 'privacy-desktop', 1280, 900, false],
  ['/editorial-guidelines', 'editorial-desktop', 1280, 900, false],
];
const browser = await chromium.launch();
for (const [path, name, w, h, full] of shots) {
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  const errs = [];
  page.on('pageerror', e => errs.push(String(e.message || e)));
  await page.goto(BASE + path, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(600);
  await page.screenshot({ path: `.ds-sync/shots/${name}.png`, fullPage: full });
  console.log(name, 'errs:', JSON.stringify(errs));
  await page.close();
}
await browser.close();
