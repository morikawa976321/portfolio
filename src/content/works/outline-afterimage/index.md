---
title: "赤外線カメラによる輪郭抽出と多種の残像の付与"
year: 2023
summary: "同じ動きでも残像の見せ方をかえることでバリエーションが生まれる"
context: "授業課題"
role: ""
tools: ["赤外線カメラ", "再帰性反射材", "Processing"]
cover: ./afterimage_001.jpg
coverFit: contain
---
学部2年のゼミで作った映像。再帰性反射材を背景にして赤外線カメラで人を撮り、輪郭だけを白い線で取り出す。そこに過去のフレームの輪郭を重ねて残像を付ける。重ねるフレームの選び方を変えると、同じ動きから違う映像ができる。

<video src="/media/outline-afterimage/afterimage_002.mp4" controls preload="metadata" playsinline></video>

反射材は赤外線を強く返すので、背景だけが真っ白に映り、人はその手前の影になる。その影の縁を輪郭にした。

動画では、次の5通りを順に流している。

- ノーマル(Normal): 今の輪郭だけを出す
- 残像累積(Accumulated): 撮り始めからの輪郭をすべて残す。動いた跡が画面を埋めていく
- 静止残像(Static afterimage): 少し前の姿が、その場にしばらくとどまってから次の位置へ移る
- 追従残像(Chasing afterimage): 少し前の姿が、体の後をなめらかに追いかける
- 等フレーム間隔画像(Equal interval frames): 一定の間隔で切り出した姿を、撮影の全体から1枚に重ねる。時刻のずれた同じ人が、画面に何人も並ぶ
