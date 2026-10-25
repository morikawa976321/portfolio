# portfolio

森川太一のポートフォリオサイト。旧サイト `mf/others/バイト関連/portfolioForPartTimeJob`(2025-07、アルバイト応募用)の作り直しで、読み手は就活の採用担当・面接官。構成の判断は [docs/structure.md](docs/structure.md)、経歴の記入フォームは [docs/profile-form.md](docs/profile-form.md)。

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
npm run deploy   # ビルドして dist/ を Workers に上げる
```

使わなくなった見た目は `archive/` に残してある。

## 作品を足す

載せる作品は [docs/candidate-works.md](docs/candidate-works.md) 冒頭の本人の選定に従う。選定に無い作品はフォルダを置かない(本人「のせない作品はcontent/worksから削除していい」2026-10-25)。選定の作品はすべてフォルダがあり、写真(`cover`)・一行(`summary`)・本文は未記入でもよい(カードには無地の面が出る)。元の資料の場所は各 `index.md` のコメントにある。

カバー(`cover`)はトップと一覧のカードにだけ出し、作品ページには出さない(本人「カバー画像がトップと作品ページで重複している。トップ画像が作品ページにまだ出ている。」2026-10-25)。カバーと本文の写真は互いに独立に選ぶ(本人「カバーと本文は独立させて。」2026-10-25。AI がカバーと同じ写真を本文から抜いたのに対して)。カバーの写真は、どの作品でも本文のどこかに置く(本人「すべての作品についてカバー画像は本文にも含めてほしい」2026-10-25)。動画のコマをカバーにしたときは、同じコマを動画の `poster` にする(romaji-slm)。

1. `src/content/works/<slug>/` を作り、`index.md` と画像を入れる(slug は ASCII kebab-case)
2. 動画は `node scripts/encode-video.mjs <元動画> public/media/<slug>/<名前>.mp4` で縮めてから置く
3. `index.md` の形:

```markdown
---
title: "作品名"
year: 2026
summary: "一覧カードに出す1行。何を作ったかを言い切る"
period: "2022〜2025"            # 任意: 年をまたぐときだけ(2026〜 は続いている)。月は書かない
context: "研究"                  # 任意: 研究 / 授業課題 / コンペ / 個人制作
role: "実装と実験設計"            # 任意: 共同制作のとき自分の担当
tools: ["Unity", "Fusion 360"]   # 任意
cover: ./cover.jpg
coverAlt: "代替テキスト"
coverFit: contain                # 任意: 4:3 に切ると見切れるときだけ。切らずに全体を出し、余りは無地の面にする
coverHint: "カバーに入れる写真の指示"  # 任意: cover が無い間、開発時だけカードに枠を出す
featured: 3                      # 任意: トップに出す順。無ければ一覧のみ
links: [{ label: "論文", url: "https://..." }]  # 任意
draft: true                      # 任意: true なら出さない
---

本文。画像は ![](./01.jpg)、動画は次の1行。

<video src="/media/<slug>/demo.mp4" controls preload="metadata" playsinline></video>
```

写真がまだ無い場所には枠を置ける。開発サーバーでだけ破線の枠として見え、本番のビルドでは HTML から消える(`astro.config.mjs` の strip-slots)。写真を置いたら `![](./ファイル名)` に置き換える。

```html
<figure class="slot wide"><b>01-room.png</b><span>入れる写真の指示</span></figure>
```

`wide` を付けると 16:9、付けなければ 4:3 の枠になる。

## 経歴を直す

`src/data/profile.ts` が正本。`confirmed: false` の項目は開発サーバーでだけ破線つきで見え、本番ビルドには出ない。本人が確認したら `true` にする。
