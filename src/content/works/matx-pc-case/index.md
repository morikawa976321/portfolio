---
title: "mATX PCケース"
year: 2025
summary: "ネジも接着剤も使わない、パネルを組み立てるだけで自重で安定するPCケース"
context: "個人制作"
role: ""
tools: ["Fusion 360", "3Dプリンター"]
cover: ./05-v2-inside.jpg
coverFit: cover
---
mATX のマザーボード、ATX 電源、グラフィックボードを収める PC ケースを、3Dプリンターで作った。中に入る部品に合わせて、体積と設置面積を必要な分だけにしている。ねじも接着剤も使わず、板をはめ込むだけで組み上がる。

<div class="mosaic">

![側面を外したところ。上に電源、中ほどに CPU クーラーとグラフィックボード、下に2つのファン](./05-v2-inside.jpg)

![ケースを後ろから見たところ。黒い細かな穴の板に、電源・マザーボード・グラフィックボードの端子とファン](./03-v2-back.jpg)

![ケースを前から見たところ。黒い細かな穴の板に、白い電源ボタンと六角形の格子のファン穴](./04-v2-front.jpg)

![ケースの底面。2つのファン穴と四隅の脚](./06-v2-bottom.jpg)

</div>

Fusion 360 で、電源・CPU クーラー・グラフィックボード・ファンの外形を先に置き、その周りに板を立てた。手元の3Dプリンターで造形できる大きさにするため、各面を2〜4枚に分けている。分けた板どうしは、縁の凸凹をかみ合わせてつなぐ。

板の表面の細かい穴は、造形の内側の充填(インフィル)をそのまま表に出したもので、板全体が通気口になる。ファンの前だけは充填を六角形の粗い格子にして、風を通しやすくした。

<div class="pair">

![ケースの CAD モデル。板どうしは凸凹のかみ合わせでつながる](./07-v2-cad.png)

![CAD モデルに、電源・CPU クーラー・グラフィックボード・ファンの外形を入れたところ](./08-v2-cad-parts.png)

</div>

上面の板は、上から落とし込むだけで凸凹がかみ合って止まる。側面は4枚をつないだ1枚の板として、枠に沿って上から下ろして付ける。

<div class="pair">
<video src="/media/matx-pc-case/09-v2-top-panel.mp4" controls preload="metadata" playsinline aria-label="上面のパネルをはめるところの動画"></video>
<video src="/media/matx-pc-case/10-v2-side-panel.mp4" controls preload="metadata" playsinline aria-label="側面のパネルを付けるところの動画"></video>
</div>
