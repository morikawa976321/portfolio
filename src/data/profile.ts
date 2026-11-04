// 経歴の正本。初期値は本人の記入フォーム(docs/profile-form.md、2026-10-25)の回答から埋めた。以後はここを直接直す。
// confirmed: false の項目は推測で置いた仮の値で、開発サーバーでだけ表示され、本番ビルドには出ない。
// period は月まで書いてよい(例: 2025.06〜)。区切りは作品の期間と同じ波にする(本人「ただのハイフンだと分かりずらいので波にしよう」2026-10-25)。作品の期間は年だけにしたが、経歴・研究・コンペは月を残す(本人「経歴・研究・コンペの期間は月を残していい」2026-10-25)。

export type Item = { period?: string; text: string; confirmed: boolean };
export type Link = { label: string; url: string };

export const profile = {
  name: { ja: '森川太一', en: 'Taichi Morikawa' },
  affiliation: {
    text: '明治大学大学院 先端数理科学研究科 先端メディアサイエンス専攻 修士1年 / 橋本研究室',
    confirmed: true,
  },
  // 自己紹介の軸(フォーム10)。1〜2行。本人が「自分の道具を自分で作る」と「設計と反復」の2つの軸を選んだ(2026-11-04「ABあたりがよさそう」)。
  // 下の文は AI がその2軸を1文ずつ合わせた下書き。本人が確定するまで confirmed: false のままにし、開発サーバーだけに出す
  headline: {
    text: '自分で使う道具を、自分で設計して作る。キーボードや PC ケースから 3D CAD まで、作って、使って、直す。',
    confirmed: false,
  },
  // GitHub(morikawa976321)は公開リポジトリが0件で、リンク先が空のプロフィールになるので外している。
  // 公開リポジトリができたら { label: 'GitHub', url: 'https://github.com/morikawa976321' } を戻す
  links: [] as Link[],
  email: 'taichi.morikawa.contact@gmail.com' as string | null,
  // 検索エンジンに出すか(フォーム9)。決まるまで noindex
  indexable: false,
};

// 学歴・職歴。新しい順
// funomi(自作プロダクト販売・CAD受注)は載せない。サイトが未公開で商品も1つだけのため(本人「いますぐはのせられない」2026-10-30)
export const career: Item[] = [
  {
    period: '2026.04〜',
    text: '明治大学大学院 先端数理科学研究科 先端メディアサイエンス専攻 修士課程(2028.03 修了見込み)',
    confirmed: true,
  },
  // 職種名は「開発インターン」(本人「職種名を外して「Blockchain Lock(KEYVOX) インターン」にして」、続けて「開発インターン、とかで」2026-10-26)。
  // それまで出していた「テクニカルデベロッパー」は engine から埋めた値で、本人が確かめたのは開始時期だけだった
  { period: '2025.06〜', text: 'Blockchain Lock(KEYVOX) 開発インターン', confirmed: true },
  {
    period: '2022.04〜2026.03',
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
  // コンペ名は略称(SNDC2025)ではなく作品ページの本文と同じ正式名で書く(本人、2026-11-03)
  {
    period: '2025',
    text: 'SHACHIHATA New Product Design Competition 2025 一次審査通過(オノマトぺったん)',
    confirmed: true,
  },
];

// 資格。新しい順。学歴・職歴ではないので経歴には入れない(本人「経歴じゃなくない？研究コンペの方がまだ近い」2026-11-03)
export const qualifications: Item[] = [
  // 合格年月日は令和6年3月14日(本人が合格証で確認、2026-11-03)
  { period: '2024.03', text: '基本情報技術者試験 合格', confirmed: true },
];

export const visible = (items: Item[]) =>
  items.filter((i) => i.confirmed || import.meta.env.DEV);
