import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 1作品 = src/content/works/<slug>/ の1フォルダ。index.md と画像を同じ場所に置く。
// 動画は astro:assets が扱えないので public/media/<slug>/ に置き、本文から /media/... で参照する。
const works = defineCollection({
  loader: glob({
    pattern: '*/index.md',
    base: './src/content/works',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // 並びに使う年。長く改良を続けている作品は最後に手を入れた年にし、範囲は period に書く
      year: z.number().int(),
      // 一覧カードの1行。本文の言い換えではなく、何を作ったかを言い切る
      summary: z.string(),
      period: z.string().optional(), // 例: 2026-05〜2026-06、2022〜2025、2022〜(続いている)。あれば year の代わりに出す
      context: z.string().optional(), // 研究 / 授業課題 / コンペ / 個人制作 など
      role: z.string().optional(), // 共同制作のとき、自分が担った範囲
      tools: z.array(z.string()).default([]),
      cover: image(),
      coverAlt: z.string(),
      // トップの「選抜作品」に出す順(小さいほど上)。無ければ作品一覧にだけ出る
      featured: z.number().int().optional(),
      links: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { works };
