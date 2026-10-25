// @ts-check
import { defineConfig } from 'astro/config';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// 写真の置き場の枠(<figure class="slot">。src/styles/global.css)は開発時だけ見せる。
// 本番のビルドでは指示の文ごと HTML から取り除く(CSS で隠すだけだとソースに残る)
const stripSlots = {
  name: 'strip-slots',
  hooks: {
    /** @param {{ dir: URL }} options */
    'astro:build:done': async ({ dir }) => {
      const root = fileURLToPath(dir);
      for (const f of await readdir(root, { recursive: true })) {
        if (!f.endsWith('.html')) continue;
        const p = join(root, f);
        const html = await readFile(p, 'utf8');
        const out = html.replace(/<figure class="slot[^"]*"[^>]*>[\s\S]*?<\/figure>/g, '');
        if (out !== html) await writeFile(p, out);
      }
    },
  },
};

// 公開先は Cloudflare Workers の静的アセット(wrangler.jsonc)で portfolio.m-kw.net(2026-10-25 本人が決定)
export default defineConfig({
  site: 'https://portfolio.m-kw.net',
  integrations: [stripSlots],
});
