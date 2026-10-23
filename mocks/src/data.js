// 4案で共有する中身。名前・所属・作品の題と年は確定済みの値(src/data/profile.ts、docs/candidate-works.md、docs/structure.md)。
// 自己紹介の一行・本文・画像はダミー(本人が用意する。2026-10-23)。作品の一行は docs の事実から書いた仮のもの。
// PreviewWorld(WISS2024)は外部公開不可(2026-10-23本人)なので研究・発表に入れない。

const PROFILE = {
  ja: '森川太一',
  en: 'Taichi Morikawa',
  affiliation: '明治大学大学院 先端数理科学研究科 先端メディアサイエンス専攻 修士1年 / 橋本研究室',
  headline: 'ここに自己紹介の一行が入る。研究と制作の軸を言い切る文(ダミー)。',
  email: 'mail@example.com',
  links: [{ label: 'GitHub', url: 'https://github.com/morikawa976321' }],
};

const CAREER = [
  ['2026.04 —', '明治大学大学院 先端数理科学研究科 先端メディアサイエンス専攻 修士課程(2028.03 修了見込み)'],
  ['20XX.XX —', 'Blockchain Lock(KEYVOX) テクニカルデベロッパー インターン'],
  ['2022.04 — 2026.03', '明治大学 総合数理学部 先端メディアサイエンス学科'],
];
const RESEARCH = [
  ['2026.01', '卒業論文「床面に描画された円形領域の拡大・縮小による視覚フィードバックが対人距離の調整行動に及ぼす影響」'],
];
const AWARDS = [['2025', 'SNDC2025 一次審査通過(オノマトぺったん)']];

// featured はトップに出す順。6件は本人確定(2026-10-23)、並び順は未定なので仮の順。
const WORKS = [
  { id: 'thesis', title: '卒業論文', year: 2026, context: '卒業研究(橋本研究室)', tools: ['VR'], featured: 1, tone: 6,
    line: '床面に描いた円の拡大・縮小が、人どうしの距離の取り方に及ぼす影響を VR で調べた' },
  { id: 'keyboard', title: '自作キーボード', year: 2025, period: '2022 — 2025', context: '個人制作', tools: ['3Dプリンタ', '手はんだ', 'レーザーカット'], featured: 2, tone: 0,
    line: '3Dプリントと手はんだで作ったキーボード。配列を試す keymap-lab を含む' },
  { id: 'matx-case', title: 'mATX PCケース', year: 2026, period: '2025 — 2026', context: '個人制作', tools: ['3D CAD', '3Dプリンタ'], featured: 3, tone: 3,
    line: '3Dプリントした部品を組んで作った mATX 規格の PC ケース' },
  { id: 'duocad', title: 'duocad', year: 2026, context: '個人制作', tools: ['Python', 'Svelte'], featured: 4, tone: 2,
    line: '人と AI が交互に操作する CAD。形状最適化を含む' },
  { id: 'sndc2025', title: 'オノマトぺったん', year: 2025, context: 'コンペ(SNDC2025)', tools: ['3Dモデリング'], featured: 5, tone: 4,
    line: '擬音語を形にした5種のスタンプ。一次審査通過' },
  { id: 'printed', title: '3Dプリント作品', year: 2026, period: '2022 — 2026', context: '個人制作', tools: ['Fusion 360', 'Python', '3Dプリンタ'], featured: 6, tone: 7,
    line: 'トレイ、石けん置き、モニターアタッチメントなど、暮らしで使う道具' },
  { id: 'infill-designer', title: 'infill-designer', year: 2026, context: '修士研究', tools: ['Tauri', 'Rust'], tone: 1,
    line: '3Dプリントのためのラティスデザインを探索するツール' },
  { id: 'sndc2026', title: '起き上がりはんこ', year: 2026, context: 'コンペ(SNDC2026)・共同制作', role: '担当範囲が入る(ダミー)', tools: ['three.js', 'opencascade.js'], tone: 5,
    line: '起き上がりこぼしの形をしたはんこ。形を生成するツールを2つ作った' },
  { id: 'poincare', title: 'Poincaré Explorer', year: 2026, context: '授業課題(コンピューティングトポロジー特論A)', tools: ['WebGL'], tone: 6,
    line: 'ブラウザで動く WebGL のビューア' },
  { id: 'monocore', title: 'monocore', year: 2026, context: '個人制作', tools: ['Next.js', 'Supabase'], tone: 2,
    line: '予定と inbox をまとめた個人用の OS' },
  { id: 'context-engine', title: 'context-engine', year: 2026, context: '個人制作', tools: ['Markdown', 'PowerShell'], tone: 3,
    line: 'AI と共有する、プレーンな Markdown の記憶の仕組み' },
  { id: 'romaji-slm', title: 'romaji-slm', year: 2026, context: '個人制作', tools: ['ローカル LLM'], tone: 1,
    line: 'ローマ字の打鍵列を、ローカルの小型言語モデルで日本語に変換する' },
  { id: 'minimal-editor', title: 'minimal-editor', year: 2026, context: '個人制作', tools: ['Rust', 'Win32'], tone: 5,
    line: '設定機能すら持たない、一人で書くためのエディター' },
  { id: 'vanfu', title: 'vanfu T シャツ', year: 2025, context: '個人制作', tools: ['Processing'], tone: 0,
    line: '3つの波源が干渉する波紋のグラフィック' },
  { id: 'watt-checker', title: 'ワットチェッカー', year: 2023, context: '個人制作', tools: ['Arduino', '電流トランス', '7セグメントディスプレイ'], tone: 4,
    line: 'コンセントと電化製品の間に挟み、消費電力をリアルタイムで計測する' },
  { id: 'outline-afterimage', title: '輪郭抽出と残像の映像', year: 2023, context: 'ゼミ(学部2年)', tools: ['赤外線カメラ', '再帰性反射材'], tone: 7,
    line: '赤外線カメラで輪郭を抽出し、フレームを重ねて残像を付ける' },
];

// 作品詳細の本文(ダミー)。structure.md の4段落(なぜ・何を・難所と解決・結果)の置き場所を示す
const BODY = [
  'ダミーテキスト。ここには、なぜこれを作ったかが入る。きっかけになった不便や問いを、一つか二つの文で言い切る。',
  'ダミーテキスト。ここには、何を作ったかが入る。形、仕組み、使った道具のうち、写真から読み取れないことに絞って書く。読み手が写真と見比べられる長さにとどめる。',
  'ダミーテキスト。ここには、作る途中で難しかったことと、それをどう解いたかが入る。',
  'ダミーテキスト。ここには結果が入る。使ってみてどうだったか、次に直すところはどこか。',
];

// ダミー画像の色(写真の代わり)。ブランド層の色には数えない
const TONES = [
  ['#ebe8e1', '#b9b3a7'],
  ['#d6dadf', '#8e969e'],
  ['#3d3e41', '#161719'],
  ['#f1f0ec', '#cbc8c0'],
  ['#cbc3b6', '#867c6d'],
  ['#e0e0e0', '#a2a2a2'],
  ['#2b2e33', '#0f1012'],
  ['#d5d8d0', '#9aa194'],
];
