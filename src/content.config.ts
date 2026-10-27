import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 1作品 = src/content/works/<slug>/ の1フォルダ。index.md と画像を同じ場所に置く。
// index.md には値が無くてもtitle 以外の8項目をすべて書く(本人「使っていなくてもすべてのindex.mdに8つすべてをいれて。""にしておけばいい」2026-10-27)。
// 文字の項目は ""、tools は []、coverFit と draft は既定値(cover / false)にする。
// 出典や値を決めた経緯は同じフォルダの notes.md に書く(読み込まないのでサイトには出ない)。トップに出す作品は src/data/featured.ts。
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
      // 年だけで書き、月は載せない。1年に収まるなら 2025、年をまたぐなら "2022〜2025"、続いているなら "2026〜"
      // (本人「同じ年ならまとめてしまっていい。年をまたぐなら2025〜2026のように書いていい。月は載せない」2026-10-25)。
      // 一覧の並びには最後の年を使う(続いているものは今年。src/pages/works/index.astro)
      year: z.union([
        z.number().int(),
        z.string().regex(/^\d{4}〜(\d{4})?$/, '年をまたぐときは "2022〜2025" か "2026〜"(続いている)の形で、年だけで書く'),
      ]),
      // 一覧カードの1行。本文の言い換えではなく、何を作ったかを言い切る。未記入なら出さない
      summary: z.string().optional(),
      context: z.string().optional(), // 研究 / 授業課題 / コンペ / 個人制作 など
      role: z.string().optional(), // 共同制作のとき、自分が担った範囲
      tools: z.array(z.string()).default([]),
      // トップと一覧のカードにだけ出す写真。作品ページには出さない。写真がまだ無い作品は "" にし、カードには無地の面を出す
      // ("" を先に見る。image() に "" を渡すと画像を探しに行って失敗する)
      cover: z.literal('').or(image()).optional(),
      // カードでの写真の収め方。cover は 4:3 に切る(既定)。contain は切らずに全体を出し、余った所を無地の面にする。
      // 切ると見切れたり情報が欠けたりする写真だけ contain にする(本人「4対3にトリミングする段階で変に見切れたり情報が欠落する場合は無理にトリミングせず余白を残しても良い」2026-10-25)
      coverFit: z.enum(['cover', 'contain']).default('cover'),
      draft: z.boolean().default(false),
    }),
});

export const collections = { works };
