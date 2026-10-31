// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
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

// 本文の写真(Markdown の ![](...))に、表示幅に合わせた srcset を付ける。
// Astro は本文の写真を webp にするだけで縮めないので、付けないと元の大きさのまま配信される(duocad の 3837px が 1MB)。
// 幅の決め方は docs/DEVELOPMENT.md「写真の大きさ」。sizes は global.css の --w(832px)・--gutter・.pair の gap(16px)から出した。
// この関数の中身だけを変えても、Astro の本文のキャッシュ(.astro/data-store.json)は捨てられない。確かめるときは astro build --force
const BODY_WIDTHS = [480, 832, 1280, 1664];
const BODY_SIZES = '(min-width: 904px) 832px, 92vw';
const PAIR_SIZES = '(min-width: 904px) 408px, 46vw';
/** @type {import('satteri').HastPluginDefinition} */
const bodyImageSizes = {
  name: 'body-image-sizes',
  element: {
    filter: ['img'],
    visit(node, ctx) {
      if (/\.svg$/i.test(String(node.properties?.src))) return;
      const p = ctx.parent(node);
      const root = p && ctx.parent(p);
      // <div class="pair"> は木の中で親にならず、同じ階層の raw として前に並ぶ。直前の開き/閉じタグで中か外かを決める
      let inPair = false;
      if (root?.type === 'root') {
        for (let i = (ctx.indexOf(p) ?? 0) - 1; i >= 0; i--) {
          const c = root.children[i];
          if (c.type !== 'raw') continue;
          if (/<div class="pair"/.test(c.value)) { inPair = true; break; }
          if (/<\/div>/.test(c.value)) break;
        }
      }
      ctx.setProperty(node, 'widths', BODY_WIDTHS);
      ctx.setProperty(node, 'sizes', inPair ? PAIR_SIZES : BODY_SIZES);
    },
  },
};

// 公開先は Cloudflare Workers の静的アセット(wrangler.jsonc)で portfolio.m-kw.net(2026-10-25 本人が決定)
export default defineConfig({
  site: 'https://portfolio.m-kw.net',
  integrations: [stripSlots],
  markdown: {
    processor: satteri({ hastPlugins: [bodyImageSizes] }),
  },
});
