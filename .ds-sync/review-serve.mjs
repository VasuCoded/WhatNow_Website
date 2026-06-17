import { createServer } from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { join, extname, resolve, sep } from 'node:path';
const ROOT = resolve(process.argv[2] || './ds-bundle');
const PORT = Number(process.argv[3] || 8129);
const MIME = { '.html':'text/html','.js':'text/javascript','.mjs':'text/javascript','.css':'text/css','.json':'application/json','.png':'image/png','.svg':'image/svg+xml','.woff2':'font/woff2','.woff':'font/woff','.ttf':'font/ttf' };
const rootAbs = ROOT + sep;
createServer((req,res)=>{
  let pathname; try { pathname = decodeURIComponent(new URL(req.url,'http://x').pathname); } catch { res.statusCode=400; return res.end(); }
  const p = resolve(ROOT, '.' + pathname);
  if (!p.startsWith(rootAbs) || !existsSync(p) || !statSync(p).isFile()) { res.statusCode=404; return res.end('not found'); }
  res.setHeader('Content-Type', MIME[extname(p)] ?? 'application/octet-stream');
  res.end(readFileSync(p));
}).listen(PORT, '127.0.0.1', ()=>console.log(`serving ${ROOT} at http://127.0.0.1:${PORT}/`));
