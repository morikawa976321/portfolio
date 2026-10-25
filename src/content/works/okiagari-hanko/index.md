---
title: "起き上がりはんこ"
year: 2026 # 並びに使う年(最後に手を入れた年)
# 制作は 2026-04〜2026-06。1年に収まるので period は書かず year だけ出す(本人「同じ年ならまとめてしまっていい。年をまたぐなら2025〜2026のように書いていい。月は載せない」2026-10-25)
summary: ""
context: "コンペ(SNDC2026)・共同制作"
role: "アイデア出し(2人で)・モデリング・形を決めるツール"
tools: ["Python", "FastAPI", "React", "three.js", "opencascade.js"]
featured: 3 # 3Dプリント作品と入れ替えてトップの3番目に(本人「3dp作品をSNDC2026に変えよう。順番は3つ目で」2026-10-25)
cover: ./presentation-sheet.jpg # 本人の指定(「SNDC2つについてはプレゼンシートをカバーに使う」2026-10-25)。本文の最後にも同じ画像がある
coverAlt: "起きあがりはんこのプレゼンシート。赤いケースとはんこの画像に、コンセプトの文が添えてある"
coverFit: contain # 4:3 に切るとシートの端の文字が切れるので、余白を残して全体を出す(どれを余白にするかは AI が選んだ)
# 写真を置いたら cover と coverAlt を書き、本文の <figure class="slot"> を ![](./ファイル名) に置き換える
# 写真の候補(既存のファイル。mf/others/sndc2026/): 01=open_001.png、02=using_001.png。03・04 はツールを起動して AI が撮った(2026-10-25)
# 応募時の作品名は「起きあがりはんこ」(Presensheet.pdf)。題をどちらにするかは本人が決める
# 本人「オノマトペったんもSNDC2026も共同制作。アイデア出しは二人、モデリングやツールや私が作り、プレゼンシートは三橋が作った。適宜二人で意見交換をし意思決定をしていった。」(2026-10-25)。共同制作者の名前はページに出していない
# 応募の結果は書かない(本人「1次審査非通過は特に書かなくていいだろう」2026-10-25)
# roly-poly-generator と stamp-generator を含む(本人、2026-10-23)。リポジトリは C:\Users\tm976\cs\archives\roly-poly-toy-generator と C:\Users\tm976\cs\archives\stamp-generator
# presentation-sheet.jpg は Presensheet.pdf の中の CMYK 画像3枚を、元の RGB のレンダリング(main_001.png・open_001.png・using_001.png)に差し替えてから描画した。CMYK のまま描画すると背景のグレーが茶色に転ぶ(2026-10-25)
# 本文の事実の出典: concept_text.txt の【採用】、Presensheet.pdf、両リポジトリの README.md と git log
---
<figure class="slot"><b>01-open.png</b><span>ケースを上下に分け、中に立っているはんこが見える分解図</span></figure>

<figure class="slot"><b>02-using.png</b><span>ケースとはんこを机に置いた、使っている場面の写真</span></figure>

![roly-poly-toy-generator の画面。生成した形の候補が、断面と重心の位置つきで並んでいる](./03-generator.png)

![stamp-generator の画面。3つの寸法の入力と、はんこの 3D 表示と断面図](./04-stamp-generator.png)

![起きあがりはんこのプレゼンシート。赤いケースとはんこの画像に、コンセプトの文が添えてある](./presentation-sheet.jpg)
