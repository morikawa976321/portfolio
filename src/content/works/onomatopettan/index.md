---
title: "オノマトぺったん"
year: 2025 # 並びに使う年(最後に手を入れた年)
# 制作は 2025-05〜2025-08。1年に収まるので period は書かず year だけ出す(本人「同じ年ならまとめてしまっていい。年をまたぐなら2025〜2026のように書いていい。月は載せない」2026-10-25)
summary: "もこもこ・ぎざぎざ・とげとげ・ぶつぶつ・ごつごつを、印影と手触りで伝える5つのスタンプ"
context: "コンペ(SNDC2025)・共同制作"
role: "アイデア出し(2人で)・モデリング"
tools: ["Python", "OpenSCAD", "Fusion 360"]
featured: 2
coverHint: "5つのスタンプの実物を並べた写真(横長)"
# 写真を置いたら cover と coverAlt を書き、本文の <figure class="slot"> を ![](./ファイル名) に置き換える
# 写真の候補(既存のファイル。mf/others/sndc2025/): カバー=mockup_production/documents/提出物/ の模型写真1of3.jpg、01=end_result/rendering_images/mat-white_paper_vivid.png、02=end_result/rendering_images/texture_solid.PNG
# 本人「オノマトペったんもSNDC2026も共同制作。アイデア出しは二人、モデリングやツールや私が作り、プレゼンシートは三橋が作った。適宜二人で意見交換をし意思決定をしていった。」(2026-10-25)。共同制作者の名前はページに出していない
# 公開しないもの: 請求書・契約書、事務局の連絡先
# presentation-sheet.jpg は PDF の中の CMYK 画像を、元の RGB のレンダリング(end_result/rendering_images/rendering.png)に差し替えてから描画した。CMYK のまま描画すると背景のグレーが茶色に転ぶ(本人「色味が全く変わってしまっている」2026-10-25)
# 本文の事実の出典: end_result/onomatopettan_presentationsheet.pdf、end_result/stamp_*.py、mockup_production/
---
## コンセプト

「さわさわ、にぎにぎ、ぎゅっ、ぺったん。」言葉に触れるスタンプ。もこもこ・ぎざぎざ・とげとげ・ぶつぶつ・ごつごつという5つのオノマトペを、押したときの印影と、握ったときの手触りの両方で表した。

<figure class="slot wide"><b>01-render.png</b><span>5つのスタンプと、その印影を白い紙の上に並べた画像</span></figure>

## 形の作り方

5つとも、下を切り落とした楕円体を土台にした。Python で OpenSCAD のコードを書き出し、土台の表面に点を散らして、言葉ごとに違う突起を置いた。ぶつぶつは小さな球を 420 個、とげとげは表面の向きにそろえた細い棒を 440 本、もこもこは大きさの違う球を 150 個並べた。ぎざぎざだけは突起を置かず、山と谷を付けた断面を回して作った。

<figure class="slot"><b>02-closeup.png</b><span>とげとげ(または1つ)の表面を近くから写した画像</span></figure>

## 結果

SNDC2025 の一次審査を通過し、展示用に実物大の模型を5つ作った。

## プレゼンシート

SNDC2025 に応募したプレゼンシート。シートは共同制作者が作った。

![オノマトぺったんのプレゼンシート。5つのスタンプと印影の下に「さわさわ、にぎにぎ、ぎゅっ、ぺったん。」とある](./presentation-sheet.jpg)
