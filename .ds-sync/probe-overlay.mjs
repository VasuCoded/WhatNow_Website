import { createServer } from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
import { chromium } from 'playwright';

const ROOT = process.argv[2];
const REL = process.argv[3]; // e.g. components/general/SearchModal/SearchModal.html
const STORY = process.argv[4] || 'Open';
const MIME = { '.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.png':'image/png','.svg':'image/svg+xml','.woff2':'font/woff2' };
const srv = createServer((req,res)=>{
  let p = join(ROOT, decodeURIComponent(req.url.split('?')[0]));
  if (existsSync(p) && statSync(p).isFile()) { res.setHeader('content-type', MIME[extname(p)]||'application/octet-stream'); res.end(readFileSync(p)); }
  else { res.statusCode=404; res.end('nf'); }
});
await new Promise(r=>srv.listen(0,r));
const port = srv.address().port;
const browser = await chromium.launch();
const page = await browser.newPage({ viewport:{width:1280,height:760} });
const errs=[]; page.on('pageerror',e=>errs.push(String(e.message||e)));
await page.goto(`http://127.0.0.1:${port}/${REL}?story=${STORY}`, { waitUntil:'networkidle', timeout:20000 });
await page.waitForTimeout(800);
const info = await page.evaluate(()=>{
  const all=[...document.querySelectorAll('body *')];
  const fixed=all.filter(el=>{const s=getComputedStyle(el);return (s.position==='fixed'||s.position==='absolute')&&el.getBoundingClientRect().width>50&&el.getBoundingClientRect().height>50;});
  return {
    bodyTextLen: document.body.innerText.trim().length,
    bodyTextSample: document.body.innerText.trim().slice(0,200),
    rootHtmlLen: (document.getElementById('r0')?.innerHTML||document.body.innerHTML).length,
    fixedCount: fixed.length,
    fixedSample: fixed.slice(0,3).map(el=>({tag:el.tagName, cls:String(el.className).slice(0,60), w:Math.round(el.getBoundingClientRect().width), h:Math.round(el.getBoundingClientRect().height), op:getComputedStyle(el).opacity})),
  };
});
console.log(JSON.stringify({ errs, info }, null, 2));
await browser.close(); srv.close();
