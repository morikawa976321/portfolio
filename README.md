# portfolio

森川太一のポートフォリオサイト。旧サイト `mf/others/portfolioForPartTimeJob`(2025-07、アルバイト応募用)の作り直しで、読み手は就活の採用担当・面接官。構成の判断は [docs/structure.md](docs/structure.md)、経歴の記入フォームは [docs/profile-form.md](docs/profile-form.md)。

Astro(静的出力)のみに依存。スタイルは素の CSS。

## 動かす

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に静的ファイル
```

## 公開する

Cloudflare Workers の静的アセット(`wrangler.jsonc`、名前 `portfolio`)に載せ、`portfolio.m-kw.net` を custom domain で割り当てている。初回だけ `npx wrangler login` でブラウザから Cloudflare にログインする。

```bash
npm run deploy   # ビルドして dist/ を Pages に上げる
```

使わなくなった見た目は `archive/` に残してある。

## 作品を足す

載せる作品は [docs/candidate-works.md](docs/candidate-works.md) 冒頭の本人の選定に従う。選定に無い作品は `draft: true` にする。選定の作品はすべてフォルダがあり、写真(`cover`)・一行(`summary`)・本文は未記入でもよい(カードには無地の面が出る)。元の資料の場所は各 `index.md` のコメントにある。

1. `src/content/works/<slug>/` を作り、`index.md` と画像を入れる(slug は ASCII kebab-case)
2. 動画は `node scripts/encode-video.mjs <元動画> public/media/<slug>/<名前>.mp4` で縮めてから置く
3. `index.md` の形:

```markdown
---
title: "作品名"
year: 2026
summary: "一覧カードに出す1行。何を作ったかを言い切る"
period: "2026-05〜2026-06"      # 任意
context: "研究"                  # 任意: 研究 / 授業課題 / コンペ / 個人制作
role: "実装と実験設計"            # 任意: 共同制作のとき自分の担当
tools: ["Unity", "Fusion 360"]   # 任意
cover: ./cover.jpg
coverAlt: "代替テキスト"
featured: 3                      # 任意: トップに出す順。無ければ一覧のみ
links: [{ label: "論文", url: "https://..." }]  # 任意
draft: true                      # 任意: true なら出さない
---

本文。画像は ![](./01.jpg)、動画は次の1行。

<video src="/media/<slug>/demo.mp4" controls preload="metadata" playsinline></video>
```

## 経歴を直す

`src/data/profile.ts` が正本。`confirmed: false` の項目は開発サーバーでだけ破線つきで見え、本番ビルドには出ない。本人が確認したら `true` にする。
