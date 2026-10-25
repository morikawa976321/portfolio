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
      // 一覧カードの1行。本文の言い換えではなく、何を作ったかを言い切る。未記入なら出さない
      summary: z.string().optional(),
      // 期間は年だけで書き、月は載せない。1年に収まるなら書かずに year を出す(本人「同じ年ならまとめてしまっていい。年をまたぐなら2025〜2026のように書いていい。月は載せない」2026-10-25)
      period: z
        .string()
        .regex(/^\d{4}〜(\d{4})?$/, '期間は 2022〜2025 か 2026〜(続いている)の形で、年だけで書く')
        .optional(), // あれば year の代わりに出す
      context: z.string().optional(), // 研究 / 授業課題 / コンペ / 個人制作 など
      role: z.string().optional(), // 共同制作のとき、自分が担った範囲
      tools: z.array(z.string()).default([]),
      // トップと一覧のカードにだけ出す写真。作品ページには出さない。写真がまだ無い作品は書かず、カードには無地の面を出す
      cover: image().optional(),
      coverAlt: z.string().optional(),
      // カードでの写真の収め方。cover は 4:3 に切る(既定)。contain は切らずに全体を出し、余った所を無地の面にする。
      // 切ると見切れたり情報が欠けたりする写真だけ contain にする(本人「4対3にトリミングする段階で変に見切れたり情報が欠落する場合は無理にトリミングせず余白を残しても良い」2026-10-25)
      coverFit: z.enum(['cover', 'contain']).default('cover'),
      // cover がまだ無いときに、カードの写真の位置へ開発時だけ出す「入れる写真の指示」
      coverHint: z.string().optional(),
      // トップの「選抜作品」に出す順(小さいほど上)。無ければ作品一覧にだけ出る
      featured: z.number().int().optional(),
      links: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { works };
