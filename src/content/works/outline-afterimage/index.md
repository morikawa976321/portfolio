---
title: "赤外線カメラによる輪郭抽出と多種の残像の付与"
year: 2023
summary: "赤外線カメラで輪郭を抽出し、フレームを重ねて残像を付ける"
tools: ["赤外線カメラ", "再帰性反射材"]
cover: ./afterimage_001.jpg
coverAlt: "輪郭抽出と残像"
coverFit: contain # 4:3 に切ると図の枠の左右が切れるので、余白を残して全体を出す(どれを余白にするかは AI が選んだ)
# 本人の選定の「B2春ゼミ輪郭抽出映像」
---
再帰性反射材を背景にして、赤外線カメラで撮影する。画像処理で輪郭を抽出し、特定のフレーム同士を重ね合わせることで視覚的な効果を得る。

![輪郭抽出と残像](./afterimage_001.jpg)

<video src="/media/outline-afterimage/afterimage_002.mp4" controls preload="metadata" playsinline></video>
