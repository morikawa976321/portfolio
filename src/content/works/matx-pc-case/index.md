---
title: "mATX PC ケース"
year: 2025
summary: "ねじも接着剤も使わない、パネルを組み立てるだけで自重で安定する PC ケース"
context: "個人制作"
role: ""
tools: ["Fusion 360", "3D プリンター"]
cover: ./05-v2-inside.jpg
coverFit: cover
---
mATX のマザーボード、ATX 電源、グラフィックボードを収める PC ケースを、3D プリンターで作った。中に入る部品に合わせて、体積と設置面積を最小限にしている。ねじも接着剤も使わず、板をはめ込むだけで組み上がる。

<div class="mosaic">

![側面を外したところ。上に電源、中ほどに CPU クーラーとグラフィックボード、下に2つのファン](./05-v2-inside.jpg)

![ケースを後ろから見たところ。黒い細かな穴の板に、電源・マザーボード・グラフィックボードの端子とファン](./03-v2-back.jpg)

![ケースを前から見たところ。黒い細かな穴の板に、白い電源ボタンと六角形の格子のファン穴](./04-v2-front.jpg)

![ケースの底面。2つのファン穴と四隅の脚](./06-v2-bottom.jpg)

</div>

Fusion 360 上で最適なパーツ配置を検討しつつ設計した。手元の 3D プリンターで造形できる大きさにするため、各面を2〜4枚に分けている。分けた板どうしは、縁の凸凹をかみ合わせてつなぐ。

板の表面の細かい穴は、造形の内側の充填(インフィル)をそのまま表に出したもので、板全体が通気口になる。ファンの前だけは充填を六角形の粗い格子にして、風を通しやすくした。

<div class="pair">

![ケースの CAD モデル。板どうしは凸凹のかみ合わせでつながる](./07-v2-cad.png)

![CAD モデルに、電源・CPU クーラー・グラフィックボード・ファンの外形を入れたところ](./08-v2-cad-parts.png)

</div>

<div class="pair">
<video src="/media/matx-pc-case/09-v2-top-panel.mp4" poster="/media/matx-pc-case/09-v2-top-panel-poster.jpg" controls preload="metadata" playsinline aria-label="上面のパネルをはめるところの動画"></video>
<video src="/media/matx-pc-case/10-v2-side-panel.mp4" poster="/media/matx-pc-case/10-v2-side-panel-poster.jpg" controls preload="metadata" playsinline aria-label="側面のパネルを付けるところの動画"></video>
</div>
