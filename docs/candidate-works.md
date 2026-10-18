# ポートフォリオ候補作品の所在一覧（2026-09-16棚卸し）

ポートフォリオの「作品の追加」候補として、mf/ 全体を走査した結果。既存サイトの11作品(2022〜2025)は旧サイト `others/portfolioForPartTimeJob` にある。以下はすべて**未掲載**。

## 研究(明治大・橋本研)
- **卒業論文**「床面に描画された円形領域の拡大・縮小による視覚フィードバックが対人距離の調整行動に及ぼす影響」(2026-01) — `meiji/B4/4_橋本研ゼミB4/卒論B4_2025/`(pdf・発表スライド)。VR実装
- **WISS2024 論文**「PreviewWorld: モバイル環境における体外離脱体験のためのインタフェース設計」(白石大晴・森川太一・橋本直、非査読) — `meiji/B3/3_橋本研ゼミB3/WISS_PreviewWorld.pdf`。前身は橋渡ゼミポスター「VRデバイスを用いた疑似幽体離脱による空間把握能力の拡張」(2024-08)、デモ動画 eyeTrackingControl / joyBallControl_3FModel.mp4
- **M1研究**「3Dプリントのためのラティスデザイン探索手法の拡張」(pptx) — `meiji/M1/橋本研ゼミM1/`。実装は `archives/infill-designer`(Tauri+Rust、2026-05〜06。GitHub に無く、画面のスクリーンショットも無い)
- 授業課題: インタラクションデザイン「積読ジェンガとお別れする棚」(2024、Fusion+Processing)、ECA可視化 `meiji/M1/発展プログラミング/12-eca-morikawa976321`

## コンペ
- **SNDC2025** 擬音語スタンプ(gizagiza・gotsugotsu・butsubutsu・mokomoko・togetoge) — `others/sndc2025/`。一次通過後に模型を制作し展示指示書・JDN宛請求書(2025-07)あり。最終結果はファイルから読めない
- **SNDC2026**「起きあがりはんこ」(三橋と共同、2026-07-29に一次不通過) — `others/sndc2026/`。派生アプリ `archives/roly-poly-toy-generator`(GA・glb/stl 408組)と `archives/stamp-generator`(three.js+opencascade.js)。どちらも GitHub に無い

## 自作ソフトウェア(掲載は可。GitHub の morikawa976321 は2026-10-16時点で公開リポジトリ0件で、duocad・monocore も非公開)
- **duocad** — 人とAIが交互に操作するCAD（Python+Svelte、2026-08-10〜、形状最適化(SIMP)含む）。スクリーンショット `duocad/screenshots/`
- **monocore** — 個人OS(予定・inbox)。Next.js+Supabase、2026-02〜
- **AI活用基盤**(context-engine／ops／フック／エージェント定義。旧 taskbox は 2026-10-09 に廃止して mf/archives/taskbox へ退避) — 内容は非公開だが仕組み(index.md・validate.ps1、ops の daily.ps1・lib・tests)は分離可能。「作品」として語るなら設計思想の記事化が必要
- 小品: monitor-simulator(単一HTML)、keymap-lab(単一HTML)、ikebana-site(Astro+GAS、祖母の教室)、research-collector(凍結)

## 3Dプリント製品・実用品
- `3d-models/`: mATX PCケース(STL 25+、2025-11)、stackable_plate 8規格(=販売予定トレイ)、tool_holder(Pythonパラメトリック、断面画像あり)、lighting_diffuser(Python生成。2026-10-14 に mf/lighting-diffuser へ移設、2026-10-16 に閉じて mf/archives/lighting-diffuser)、モニターアタッチメント24/27/32インチ、ラブリコ柱ブラケット群(hook/shelf/hanger_bar)
- `archives/pokeca_case`(Pythonパラメトリック、実使用)
- 実物写真は `3d-models/` にほぼ無い。撮影が掲載の前提

## 生成アート
- `archives/glitch/` — AI生成の「魅力的な破綻」179枚(2026-08-08〜12)、keep/close/dull分類とnote.md。ADAA向けだったが8月計画縮小で中断

## その他
- `blender-demos/` 6本(build.py自動化+レンダー) — 習作
- `processing/` 20スケッチ — 既存サイトの2023作品の元。vanfu_t_shirt(PNG 106枚)は未掲載

## 掲載不可
- `aicc`・`unlockos-sdk`(KEYVOX-ORG、決済・本番DB) — 職務経歴としてしか書けない
- `reports/`(医療記録含む)・engine の内容・`others/finance` `contract` `バイト関連`
