---
title: "duocad"
year: 2026 # 並びに使う年(最後に手を入れた年)
period: "2026〜" # 開発は 2026-08 から。月は出さない
summary: ""
context: "個人制作"
tools: ["Python", "OCCT", "Svelte", "three.js", "MCP"]
featured: 1
cover: ./cover.webp # 本人が撮った画面(2026-10-25)
coverAlt: "duocad の画面。36キーのキーボードのケースを開いている"
coverFit: contain # 4:3 に切ると左の操作欄が途中で切れるので、余白を残して全体を出す(どれを余白にするかは AI が選んだ)
# 写真を置いたら cover と coverAlt を書き、本文の <figure class="slot"> を ![](./ファイル名) に置き換える
# 写真の候補(既存のファイル。mf/duocad/screenshots/): 03=stage4-voxels/overview_iso.png。現行の画面の撮影は無いので、カバーと 01 は新しく撮る(web/scripts/screenshot.mjs がある)
# コードの大半は Claude が書いた(コミットの約8割に Co-Authored-By)が、本文では触れない(本人「duocadはAIに移譲したことを特に書かなくてもいいだろう」2026-10-25)
# リポジトリは非公開のままにする(本人確定)。リンクを付けない
# 本文の事実の出典: duocad-stable の README.md・docs/DESIGN_DECISIONS.md・docs/AI_INTEGRATION.md・docs/STATUS.md・docs/TOPOPT.md、data/models/
---
<figure class="slot wide"><b>01-select.png</b><span>面がいくつか選ばれて色が付いている作業中の画面。AI のパネルに依頼の文が見えるとよい</span></figure>

![duocad の画面。36キーのキーボードのケースを開いている](./cover.webp)

<figure class="slot"><b>02-models.jpg</b><span>duocad で作ったモデル(歯ブラシ立て・マイクスタンド・キーボードのケース)の実物か画面</span></figure>

<figure class="slot wide"><b>03-topopt.png</b><span>形状最適化の結果(材料を削って骨組みになった形)</span></figure>
