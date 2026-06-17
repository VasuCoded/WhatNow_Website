import { chromium } from 'playwright';
const BASE = process.argv[2];
const b = await chromium.launch();
// desktop full (clip left hero to avoid the auto-opened notice board on the right)
const p = await b.newPage({ viewport: { width: 1440, height: 820 } });
await p.goto(BASE + '/', { waitUntil: 'networkidle', timeout: 30000 });
await p.keyboard.press('Escape').catch(()=>{});
await p.waitForTimeout(900);
await p.screenshot({ path: '.ds-sync/shots/aurora-desktop.png', clip: { x: 0, y: 0, width: 980, height: 820 } });
console.log('aurora-desktop done');
await b.close();
