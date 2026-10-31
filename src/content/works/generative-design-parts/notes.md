# ジェネレーティブデザインの部品 のメモ

index.md の frontmatter から移したコメント。サイトには出ない(読み込むのは index.md だけ)。

- 中身は Fusion 360 のジェネレーティブデザイン(GD)で作った部品だけ(本人、2026-10-31「GDでまとめる」)。経緯: 2026-10-23 に本人が決めた「3Dプリント作品」(スタッカブルトレイ・石けん置き・モニターアタッチメント類・ラブリコブラケット類・歯ブラシスタンド・電池ケース・チェスの駒)を、2026-10-30 にモニターアタッチメントだけに絞り(本人「他は絞りアタッチメントに絞る。他の画像を外しておいて」)、2026-10-31 に GD で作った他の部品も入れることにした(本人「棚の取り付けパーツやラブリコ収納もあることを思い出した。GDで作ったパーツが複数あるのでこれをまとめるのがいいかもしれない」)。外した小物の写真 printed_items_00{1..4}.jpg は git 履歴にある
- slug は 3d-prints から generative-design-parts に変えた(2026-10-31)
- year: 本人は "2021〜" と書いていた。GD の部品に絞ったので、AI がモニタの実物写真(2025-01-27)と mf/3d-models の棚まわりの部品(2026-08)から "2025〜2026" にした
- title, summary, tools、本文冒頭の「3Dプリンタにより作れるものが広がった…」の1文は、3Dプリント全般を指していたときに本人が書いたまま
- cover: 本人が選んだ、モニタ取付部品を寄りで撮った monitor_attachment_002.jpg(2026-10-30)
- 入る部品(AI が mf/3d-models の STEP の自由曲面 B_SPLINE_SURFACE の数で GD 由来と見たもの。手で設計したフック類 hook_*・tool_case_plate_screw は自由曲面が少ないので外した):
  - モニタ取付(24/27/32インチ): monitor_attachment_*_result.stl。実物写真は 2025-01-27(Google フォト PXL_20250127_*)。monitor_attachment_for_24inch_GD.step は平面だけで、生成前の条件の形状の可能性がある
  - 棚受け(黒い PETG): 本人の X 投稿 x.com/112358tm/status/2040799841425723806(2026-04-05)「Fusion360のジェネレーティブデザインで棚受けを作って3Dプリント。最近は強度のいるパーツにはPETGを使っている」。モデルの版は未確認
  - shelf_attachment_7.step(2026-08-24)・hanger_bar_attachment_8.step(2026-08-22)・bar_attachment_4.step(2026-08-29)。実物写真は無い
- mATX PCケースは別の作品(matx-pc-case)
- 資料: mf/3d-models/、作例レンダー cad-gigs/portfolio/03_monitor_attachment.png
