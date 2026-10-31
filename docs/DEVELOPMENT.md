# portfolio 開発ガイド

> 外から読む人向けの案内はリポジトリ直下の [README.md](../README.md)。この文書は開発を続けるための詳細。

森川太一のポートフォリオサイト。旧サイト `mf/others/バイト関連/portfolioForPartTimeJob`(2025-07、アルバイト応募用)の作り直しで、読み手は就活の採用担当・面接官。構成の判断は [docs/structure.md](structure.md)、見た目の判断は [docs/visual.md](visual.md)。

**docs/ は判断とその理由・経緯の記録で、今の状態の記録ではない。** 掲載作品・トップの選抜・一行や本文の記入状況・経歴の値は docs に書かず、`src/content/works/`・`src/data/featured.ts`・`src/data/profile.ts` を見る。docs の記述が src と食い違ったら src が正(2026-10-30 本人「以後同様のミスがないようにdocsは更新するか、削除するか、過去のものであることを明記して」。AI が docs/structure.md の古い記述を読んで、記入済みの一行を未記入と答えたのを受けて)。

Astro(静的出力)のみに依存。スタイルは素の CSS。

## 動かす

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に静的ファイル
```

表示の確認には Playwright(Chromium)を使う。初回だけ `npx playwright install chromium`。`npm run dev` を動かしたまま、次でスクリーンショットを撮る(既定の幅は 1280 と 390。横にはみ出したページは標準出力に出る)。

```bash
node scripts/shot.mjs <出力フォルダ> / /works/ /works/duocad/ --width=1280,390 --full
```

Git Bash から `/` で始まるパスを渡すと Windows のパスに書き換えられるので、PowerShell から動かす。

## 公開する

Cloudflare Workers の静的アセット(`wrangler.jsonc`、名前 `portfolio`)に載せ、`portfolio.m-kw.net` を custom domain で割り当てている。初回だけ `npx wrangler login` でブラウザから Cloudflare にログインする。

```bash
npm run deploy   # ビルドして dist/ を Workers に上げる
```

使わなくなった見た目は `archive/` に残してある。

## 作品を足す

載せる作品は [docs/candidate-works.md](candidate-works.md) 冒頭の本人の選定に従う。選定に無い作品はフォルダを置かない(本人「のせない作品はcontent/worksから削除していい」2026-10-25)。写真(`cover`)・一行(`summary`)・本文は未記入でも出せる(写真が無いカードには無地の面が出る)。元の資料の場所や値を決めた経緯は、各フォルダの `notes.md` にある(サイトは `index.md` しか読まないので、出典のメモはこちらに書き、frontmatter にはコメントを書かない)。

カバー(`cover`)はトップと一覧のカードにだけ出し、作品ページには出さない(本人「カバー画像がトップと作品ページで重複している。トップ画像が作品ページにまだ出ている。」2026-10-25)。カバーと本文の写真は互いに独立に選ぶ(本人「カバーと本文は独立させて。」2026-10-25。AI がカバーと同じ写真を本文から抜いたのに対して)。カバーの写真を本文にも置くかは作品ごとに決めてよい(2026-10-25 に本人が決めた「カバーの写真は本文のどこかにも置く」規則は、2026-10-31 に本人が廃止した。AI の目視確認が、この規則を守っていない作品が3つあると挙げたのに対して「5の規則は廃止して。」)。動画のコマをカバーにしたときは、同じコマを動画の `poster` にする(この形を取った romaji-slm は 2026-10-30 に掲載から外した)。

1. `src/content/works/<slug>/` を作り、`index.md` と画像を入れる(slug は ASCII kebab-case)
2. 動画は `node scripts/encode-video.mjs <元動画> public/media/<slug>/<名前>.mp4` で縮めてから置く
   - 再生前に出す静止画(`poster`)を同じ場所に `<名前>-poster.jpg` として置く(`ffmpeg -i <名前>.mp4 -ss <秒> -frames:v 1 -q:v 3 <名前>-poster.jpg`)。無いとブラウザは最初のコマを出し、iOS Safari では何も出ないことがある。コマは中身が一目で分かるところを選ぶ(本人「いい感じのところをposterに設定しておいて」2026-11-01。3本のコマは AI が選んだ)
3. `index.md` の形。値が無くても title のほかの7項目すべてを書き、文字の項目は `""` のままにする:

```markdown
---
title: "作品名"
year: 2026                       # 年をまたぐなら "2022〜2025"、続いているなら "2026〜"。月は書かない
summary: ""                      # 一覧カードに出す1行。何を作ったかを言い切る
context: ""                      # 研究 / 授業課題 / コンペ / 個人制作
role: ""                         # 共同制作のとき自分の担当
tools: []                        # 例 ["Unity", "Fusion 360"]
cover: ""                        # 例 ./cover.jpg。カードの写真の alt は空(下の題と二重に読まれないため)
coverFit: cover                  # 4:3 に切ると見切れるときだけ contain。切らずに全体を出し、余りは無地の面にする
---

本文。画像は ![](./01.jpg)、リンクは [論文](https://...)、動画は次の1行。

<video src="/media/<slug>/demo.mp4" poster="/media/<slug>/demo-poster.jpg" controls preload="metadata" playsinline></video>
```

写真がまだ無い場所には枠を置ける。開発サーバーでだけ破線の枠として見え、本番のビルドでは HTML から消える(`astro.config.mjs` の strip-slots)。写真を置いたら `![](./ファイル名)` に置き換える。

```html
<figure class="slot wide"><b>01-room.png</b><span>入れる写真の指示</span></figure>
```

`wide` を付けると 16:9、付けなければ 4:3 の枠になる。

トップに出す作品とその順は `src/data/featured.ts` の並び。

## 写真の大きさ

元の写真は縮めずに作品フォルダへ置き、大きさの統一はビルドに任せる(本人「いい感じに統一しておいて。またルールを明文化して記録しておいて」2026-10-31。下の幅の値は AI が global.css の表示幅から決めた)。形式は jpg・png・webp のどれでもよい(ビルドが webp にする。svg は変換せずそのまま出す)。

| 置き場所 | 表示幅(PC) | ビルドが作る幅 | 元の写真の幅の下限 |
|---|---|---|---|
| カバー(カード) | 256px | 480・960 | 960px |
| 本文の全幅 | 832px | 480・832・1280・1664 | 1664px |
| 本文の `<div class="pair">` の中 | 408px | 同上 | 832px |

- 下限は高解像度の画面(2倍)でぼけない幅。下回っても出せるが、ビルドは拡大しないので、その幅のまま引き伸ばされて表示される
- 上限は無い。ブラウザは srcset から画面に合う幅だけを取るので、元が大きくても配信は重くならない(重くなるのはリポジトリだけ)
- カバーは `src/components/WorkCard.astro` の `widths`・`sizes`、本文は `astro.config.mjs` の body-image-sizes(`BODY_WIDTHS`・`BODY_SIZES`・`PAIR_SIZES`)が決める。Astro は本文の写真を webp にするだけで縮めないので、この処理が無いと元の大きさのまま配信される(duocad の 3837px のスクリーンショットが 1MB だった)
- 本文の幅 `--w`・左右の余白 `--gutter`・`.pair` の間隔(`global.css`)を変えたら、`sizes` も合わせて直す

## 文章を書く

一行(`summary`)と本文の文章は本人が書く。どこまで書いたかは各 `index.md` を見る。

1. VS Code でこのフォルダを開き、端末で `npm run dev` を動かす
2. ブラウザで `http://localhost:4321/works/<slug>/` を開き、VS Code と横に並べる
3. `src/content/works/<slug>/index.md` を書いて保存すると、ブラウザの表示がすぐ変わる
   - 一行は frontmatter の `summary: ""` の `""` の中。VS Code の全体検索(Ctrl+Shift+F)で `summary:` を探すと、全作品の一行が1つの欄に並ぶ
   - 本文は2つ目の `---` の後。写真(`![](...)`)や動画の間に段落を書くと、その位置に出る。`<div class="pair">`〜`</div>` は2枚を横に並べる枠なので、その中には書かない
   - 見出しは `## 見出し`
4. 公開は `npm run deploy`

和文と欧文の語(AI・3D・PC・duocad など)の間には半角空白を入れる(「AI が」「3D プリンター」。本人「すべてにいれて」2026-10-31)。数字だけの語と数字に単位が付いた語(12人・3m・100MB)は詰める(数字を対象から外したのは AI の判断)。中黒「・」の前後は空けない。

## 経歴を直す

`src/data/profile.ts` が正本。`confirmed: false` の項目は開発サーバーでだけ破線つきで見え、本番ビルドには出ない。本人が確認したら `true` にする。
