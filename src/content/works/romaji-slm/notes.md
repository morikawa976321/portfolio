# romaji-slm のメモ

index.md の frontmatter から移したコメント。サイトには出ない(読み込むのは index.md だけ)。

- year: 仮
- カバーはデモ動画の 10.83秒のコマ(本人「ローマ字SLMはさっきのMp4動画のどこかのフレームをカバーにも使う」2026-10-25。コマと範囲は AI が選んだ)。
  - 元の 1920×1080 の動画から取り、変換候補の枠のまわりを 4:3 に切った(上の確定済みの行と上下の黒帯は入れない)。
  - カバーは本文にも置く決まりなので、同じコマを動画の poster(public/media/romaji-slm/poster.jpg。黒帯ごと 1280×720)にした
- 資料: mf/romaji-slm、デモ動画 mf/others/romaji-slm.mp4(18秒。public/media/romaji-slm/demo.mp4 はこれを scripts/encode-video.mjs で縮めたもの)
- tools: AI が mf/romaji-slm の pyproject.toml と ime/ から選んだ(2026-10-27)。変換は Python(GPU では PyTorch、GPU の無い機械では ONNX Runtime で動かす。モデルの学習はしていない)、言語モデルは凍結した zenz、読みから表記の候補は Mozc の辞書、常駐入力のトレイアプリは C#。zenz は版が変わるので版を書いていない
