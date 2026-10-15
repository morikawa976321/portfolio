// 経歴の正本。値は本人の記入フォーム(docs/profile-form.md)の回答から埋める。
// confirmed: false の項目は推測で置いた仮の値で、開発サーバーでだけ表示され、本番ビルドには出ない。

export type Item = { period?: string; text: string; confirmed: boolean };
export type Link = { label: string; url: string };

export const profile = {
  name: { ja: '森川太一', en: 'Taichi Morikawa' },
  affiliation: {
    text: '明治大学大学院 先端数理科学研究科 先端メディアサイエンス専攻 修士1年 / 橋本研究室',
    confirmed: true,
  },
  // 自己紹介の軸(フォーム10)。1〜2行
  headline: { text: '', confirmed: false },
  links: [{ label: 'GitHub', url: 'https://github.com/morikawa976321' }] as Link[],
  email: null as string | null,
  // 検索エンジンに出すか(フォーム9)。決まるまで noindex
  indexable: false,
};

// 学歴・職歴。新しい順
export const career: Item[] = [
  {
    period: '2026.04 —',
    text: '明治大学大学院 先端数理科学研究科 先端メディアサイエンス専攻 修士課程(2028.03 修了見込み)',
    confirmed: true,
  },
  { period: '', text: 'Blockchain Lock(KEYVOX) テクニカルデベロッパー インターン', confirmed: false },
  {
    period: '2022.04 — 2026.03',
    text: '明治大学 総合数理学部 先端メディアサイエンス学科',
    confirmed: false,
  },
];

// 研究・発表。新しい順
export const research: Item[] = [
  {
    period: '2026.01',
    text: '卒業論文「床面に描画された円形領域の拡大・縮小による視覚フィードバックが対人距離の調整行動に及ぼす影響」',
    confirmed: true,
  },
  {
    period: '2024',
    text: '白石大晴, 森川太一, 橋本直. PreviewWorld: モバイル環境における体外離脱体験のためのインタフェース設計. WISS2024(非査読)',
    confirmed: true,
  },
];

// 受賞・選出。新しい順
export const awards: Item[] = [
  { period: '2025', text: 'SNDC2025 一次審査通過(擬音語スタンプ)', confirmed: false },
];

export const visible = (items: Item[]) =>
  items.filter((i) => i.confirmed || import.meta.env.DEV);
