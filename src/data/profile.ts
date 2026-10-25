// 経歴の正本。値は本人の記入フォーム(docs/profile-form.md)の回答から埋める。
// confirmed: false の項目は推測で置いた仮の値で、開発サーバーでだけ表示され、本番ビルドには出ない。
// period は月まで書いてよい(例: 2025.06 —)。作品の期間は年だけにしたが、経歴・研究・コンペは月を残す(本人「経歴・研究・コンペの期間は月を残していい」2026-10-25)。

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
  // GitHub(morikawa976321)は公開リポジトリが0件で、リンク先が空のプロフィールになるので外している。
  // 公開リポジトリができたら { label: 'GitHub', url: 'https://github.com/morikawa976321' } を戻す
  links: [] as Link[],
  email: 'taichi.morikawa.contact@gmail.com' as string | null,
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
  { period: '2025.06 —', text: 'Blockchain Lock(KEYVOX) テクニカルデベロッパー インターン', confirmed: true },
  {
    period: '2022.04 — 2026.03',
    text: '明治大学 総合数理学部 先端メディアサイエンス学科',
    confirmed: true,
  },
];

// 研究・発表。新しい順。WISS2024「PreviewWorld」は載せない(教員の判断で投稿されなかった論文。2026-10-23本人)
export const research: Item[] = [
  {
    period: '2026.01',
    text: '卒業論文「床面に描画された円形領域の拡大・縮小による視覚フィードバックが対人距離の調整行動に及ぼす影響」',
    confirmed: true,
  },
];

// 受賞・選出。新しい順
export const awards: Item[] = [
  { period: '2025', text: 'SNDC2025 一次審査通過(オノマトぺったん)', confirmed: true },
];

export const visible = (items: Item[]) =>
  items.filter((i) => i.confirmed || import.meta.env.DEV);
