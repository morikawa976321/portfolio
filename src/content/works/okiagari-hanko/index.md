---
title: "起き上がりはんこ"
year: 2026 # 並びに使う年(最後に手を入れた年)
period: "2026-04〜2026-06"
summary: "はんこを収めると重心が安定し、起き上がりこぼしになるケース"
context: "コンペ(SNDC2026)"
tools: ["Python", "FastAPI", "React", "three.js", "opencascade.js"]
coverHint: "赤いケースを1つ置いた写真(横長)"
# 写真を置いたら cover と coverAlt を書き、本文の <figure class="slot"> を ![](./ファイル名) に置き換える
# 写真の候補(既存のファイル。mf/others/sndc2026/): カバー=main_001.png、01=open_001.png、02=using_001.png。03 の画面は撮影が無いので新しく撮る
# 応募時の作品名は「起きあがりはんこ」(Presensheet.pdf)。題をどちらにするかは本人が決める
# 三橋さんとの共同制作なので role に自分の担当を書く(docs/structure.md)。応募の結果(一次審査不通過)を本文に書くかは本人が決める
# roly-poly-generator と stamp-generator を含む(本人、2026-10-23)。リポジトリは C:\Users\tm976\cs\archives\roly-poly-toy-generator と C:\Users\tm976\cs\archives\stamp-generator
# 本文の事実の出典: concept_text.txt の【採用】、Presensheet.pdf、両リポジトリの README.md と git log
---
## コンセプト

「しまっておく」から「飾っておく」へ。はんこは1年の大半を引き出しの奥で過ごしている。いつも目に入る場所に置いておけるよう、はんこを収めると重心が安定し、起き上がりこぼしになるケースを作った。

<figure class="slot"><b>01-open.png</b><span>ケースを上下に分け、中に立っているはんこが見える分解図</span></figure>

<figure class="slot"><b>02-using.png</b><span>ケースとはんこを机に置いた、使っている場面の写真</span></figure>

## 形を決めるための道具

ケースとはんこの形を決めるために、2つのツールを作った。

roly-poly-toy-generator は、起き上がりこぼしの回転体を64個の制御点の半径の並びで表し、遺伝的アルゴリズムで掛け合わせて形を作る。体積と重心を計算し、75° まで傾けても起き上がる形だけを残す。STEP はブラウザの中で書き出す。

stamp-generator は、はんこの縦の断面を、球の半径・くびれの半径・天面の高さの3つで決める。3D 表示と断面図、STEP の書き出し、重心の高さの計算ができる。

<figure class="slot wide"><b>03-generator.png</b><span>roly-poly-toy-generator の画面。形の候補が並んでいるところ</span></figure>
