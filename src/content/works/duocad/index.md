---
title: "duocad"
year: 2026 # 並びに使う年(最後に手を入れた年)
period: "2026〜" # 開発は 2026-08 から。月は出さない
summary: "人と AI の協働のための CAD"
context: "個人制作"
tools: ["Python", "OCCT", "Svelte", "three.js", "MCP"]
featured: 1
cover: ./cover.webp # 本人が撮った画面(2026-10-25)
coverAlt: "duocad の画面。36キーのキーボードのケースを開いている"
# 写真を置いたら cover と coverAlt を書き、本文の <figure class="slot"> を ![](./ファイル名) に置き換える
# 写真の候補(既存のファイル。mf/duocad/screenshots/): 03=stage4-voxels/overview_iso.png。現行の画面の撮影は無いので、カバーと 01 は新しく撮る(web/scripts/screenshot.mjs がある)
# コードの大半は Claude が書いた(コミットの約8割に Co-Authored-By)が、本文では触れない(本人「duocadはAIに移譲したことを特に書かなくてもいいだろう」2026-10-25)
# リポジトリは非公開のままにする(本人確定)。リンクを付けない
# 本文の事実の出典: duocad-stable の README.md・docs/DESIGN_DECISIONS.md・docs/AI_INTEGRATION.md・docs/STATUS.md・docs/TOPOPT.md、data/models/
---
## なぜ作ったか

自分の設計作業を、Fusion 360 に戻らずに最後まで終えられるようにしたかった。既製の CAD は、直接操作の質、Linux で動くこと、軽さで比べたが、合うものが無かった。

## 何をしたか

画面で選んだ面や辺の集まり(選択集合)を、人と AI が同じ操作で触れるようにした。AI が対象を選び、人が過不足を直し、AI がフィレットなどをかける、という交互の流れを中心に置いている。AI は Claude Code から MCP で、またはアプリの中のパネルから操作する。形の計算には OCCT を、画面には Svelte と three.js を使った。操作はすべてログに残し、形は毎回ログから作り直すので、取り消しもログの再生で行う。

<figure class="slot wide"><b>01-select.png</b><span>面がいくつか選ばれて色が付いている作業中の画面。AI のパネルに依頼の文が見えるとよい</span></figure>

## 難しかったところ

形のカーネル(OCCT)のフィレットは、失敗しても例外を出さず、壊れた形を返す。20mm の立方体の全辺に半径 10.5mm をかけると、完了の印は立つのに体積が増える。完了の印、空でないこと、体積、形の検査の4つをすべて通ったときだけ結果を使うようにした。

形を変えると面の番号が振り直され、同じ面を指し続けられない。番号は保存せず、操作ログを正として毎回たどり直すようにした。

手元で動かす小さな言語モデルは、寸法を言わない依頼でも値を勝手に決めて形を変えた。寸法の無い依頼は、モデルの判断に任せず、プログラムの側で止めるようにした。

## 結果

マイクスタンド、歯ブラシ立て、36キーのキーボードのケースを duocad でモデリングした。自動テストは 3,243 件ある。27部品・2,835面をドラッグでまとめて選ぶ処理は、1,016ms から 65.5ms に縮めた。形状最適化(有限要素解析で応力の小さい材料を削る)も作ったが、2026-10 から開発を止めている。

<figure class="slot"><b>02-models.jpg</b><span>duocad で作ったモデル(歯ブラシ立て・マイクスタンド・キーボードのケース)の実物か画面</span></figure>

<figure class="slot wide"><b>03-topopt.png</b><span>形状最適化の結果(材料を削って骨組みになった形)</span></figure>
