import { chromium } from 'playwright';
const BASE = process.argv[2] || 'http://127.0.0.1:3220';
const browser = await chromium.launch();

// Home — hero + floating pill (desktop & mobile)
for (const [name, w, h] of [['home2-desktop', 1280, 860], ['home2-mobile', 390, 844]]) {
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  const errs = []; page.on('pageerror', e => errs.push(String(e.message || e)));
  await page.goto(BASE + '/', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(800);
  await page.screenshot({ path: `.ds-sync/shots/${name}.png` });
  console.log(name, 'errs:', JSON.stringify(errs));
  await page.close();
}

// WhyWhatnow section — scroll into view for the contrast check
{
  const page = await browser.newPage({ viewport: { width: 1280, height: 860 } });
  await page.goto(BASE + '/', { waitUntil: 'networkidle', timeout: 30000 });
  await page.evaluate(() => {
    const el = [...document.querySelectorAll('h2')].find(h => /Built like a senior/i.test(h.textContent || ''));
    if (el) el.scrollIntoView({ block: 'center' });
  });
  await page.waitForTimeout(700);
  await page.screenshot({ path: `.ds-sync/shots/whywhatnow.png` });
  console.log('whywhatnow captured');
  await page.close();
}
await browser.close();
