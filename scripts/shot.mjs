// 表示確認用のスクリーンショット: node scripts/shot.mjs <出力フォルダ> <パス>... [--width=1280,390] [--base=http://localhost:4321] [--full]
// dev サーバー(npm run dev)を先に起動しておく。出力は <出力フォルダ>/<パス>-<幅>.png。
// 合わせてページ外へのはみ出し(横スクロール)とコンソールのエラーを標準出力に出す。
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { chromium } from 'playwright';

const opts = Object.fromEntries(
  process.argv.slice(2).filter((a) => a.startsWith('--')).map((a) => {
    const [k, v] = a.slice(2).split('=');
    return [k, v ?? true];
  }),
);
const [outDir, ...paths] = process.argv.slice(2).filter((a) => !a.startsWith('--'));
if (!outDir || !paths.length) {
  console.error('usage: node scripts/shot.mjs <outDir> <path>... [--width=1280,390] [--base=http://localhost:4321] [--full]');
  process.exit(1);
}
const base = opts.base ?? 'http://localhost:4321';
const widths = String(opts.width ?? '1280,390').split(',').map(Number);
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
for (const width of widths) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  page.on('console', (m) => m.type() === 'error' && console.log(`  console.error: ${m.text()}`));
  for (const path of paths) {
    await page.goto(base + path, { waitUntil: 'networkidle' });
    const name = (path.replace(/^\/|\/$/g, '').replace(/\//g, '_') || 'top') + `-${width}.png`;
    await page.screenshot({ path: join(outDir, name), fullPage: !!opts.full });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
    console.log(`${join(outDir, name)}${overflow > 0 ? `  横にはみ出し ${overflow}px` : ''}`);
  }
  await page.close();
}
await browser.close();
