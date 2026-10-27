# ポートフォリオ候補作品の所在一覧（2026-09-16棚卸し、2026-10-23追補）

ポートフォリオの「作品の追加」候補として、mf/ 全体を走査した結果。既存サイトの11作品(2022〜2025)は旧サイト `others/バイト関連/portfolioForPartTimeJob` にある(キャンドルモビールの元動画 `media/candle_mobile_002.mp4` 52.9MB もここ)。以下はすべて**未掲載**。

## 本人の選定(2026-10-23時点の候補、原文)

> 卒業論文「床面に描画された円形領域の拡大・縮小による視覚フィードバックが対人距離の調整行動に及ぼす影響」
> infill-designer
> B2春ゼミ輪郭抽出映像
> Pincare_Explorer
> 自作キーボード、keymap-lab
> SNDC2025オノマトぺったん
> SNDC2026起き上がりはんこ（roly-poly-generator, stamp-generator含む）
> duocad
> monocore
> context-engine
> 3Dプリント作品（mATX-PCケース、スタッカブルトレイ、石けん置き、モニターアタッチメント類、ラブリコブラケット類、歯ブラシスタンド、電池ケース、チェスの駒）
> ikebana-site
> vanfu-Tシャツ
> ワットチェッカー
> romaji-slm
> minimal-editor
>
> unlockos, aiccは作品としては出さない

同日の本人の判断(原文):

> keymap-labは自作キーボードの中でおまけとして入れよう。monitor-simulatorは除外で了解。ikebana-siteはまだダミー画像が入っていて利用者の実績もない。これは最初は入れず、完成したら入れることにしよう。previewworldは教員の判断でボツになった論文なので、外部に出すことはできない。キャンドルもニールも除外しよう。私が満足していないので。

- 「キャンドルもニール」は LEDキャンドルモビールのこと(現サイトの featured 1)
- mATX PCケースは「3Dプリント作品」から独立させ、1件として扱う(2026-10-23本人)。「3Dプリント作品」に残るのはスタッカブルトレイ・石けん置き・モニターアタッチメント類・ラブリコブラケット類・歯ブラシスタンド・電池ケース・チェスの駒
- 初回公開に入るのは、ikebana-site を除き PCケースを独立させた16件。そこから vanfu-Tシャツを外して15件(2026-10-25本人「Tシャツ、を掲載作品から除外しよう」)。context-engine と3Dプリント作品はいったん非表示にしていたが(2026-10-25本人「現時点でコンテキストエンジン、3Dプリント作品の2点は一旦非表示にしておいてほしい。今後内容を詰めて追加します」)、draft を廃止して全件出すことにした(2026-10-27本人「draftを廃止して。全部出す。」)
- infill-designer は作品ごと削除した(2026-10-27本人「infill-designerについて話せることが何もないので作品自体を削除して」)。フォルダごと消したので、戻すときは git 履歴から
- 選定の「Pincare_Explorer」は、ボツになった WebGL 版ではなく、授業に提出した poincareSphere(Processing)に差し替えた(2026-10-27本人「poincare-explorerもけして。これはぼつになったやつだった。ミスった。提出したのは同じリポジトリにあるsphereの方だった。こちらのページを作って」)
- トップに出す6件は [structure.md](structure.md) の「選抜作品」。2026-10-23 に SNDC2026 をトップから外したが、2026-10-25 に3Dプリント作品と入れ替えてトップに戻した(本人「3dp作品をSNDC2026に変えよう。順番は3つ目で」)
- サイトへの反映は、別セッションのサイトデザイン確定後(2026-10-23本人)。2026-10-25 に、写真・文章が未記入のものも含めてこの16件をサイトに反映した(docs/structure.md「公開」)
- 現サイトにあって今回の候補に無いもの: 音の落書き・波の落書き・標本化定理の可視化・ベジェ曲線の3D・LEDキャンドルモビール(除外)。40%キーボードは「自作キーボード」に(2026-10-25本人)、3Dプリント小物とモニタ壁掛けパーツは「3Dプリント作品」にまとめた

以下は選定前の棚卸し。

## 研究(明治大・橋本研)
- **卒業論文**「床面に描画された円形領域の拡大・縮小による視覚フィードバックが対人距離の調整行動に及ぼす影響」(2026-01) — `meiji/B4/4_橋本研ゼミB4/卒論B4_2025/`(pdf・発表スライド)。VR実装。プロトタイプ動画 `meiji/B4/4_橋本研ゼミB4/` 直下の Metaball_Interactoin.mp4・Sine_Wave_Interaction.mp4・Arm_Interaction.mp4、OCポスター2025(OCPoster2025_Morikawa.pptx)
- **WISS2024 論文**「PreviewWorld: モバイル環境における体外離脱体験のためのインタフェース設計」(白石大晴・森川太一・橋本直、非査読) — `meiji/B3/3_橋本研ゼミB3/WISS_PreviewWorld.pdf`。**外部公開不可**(教員の判断で投稿されなかった論文、2026-10-23本人)。前身は橋渡ゼミポスター「VRデバイスを用いた疑似幽体離脱による空間把握能力の拡張」(2024-08)、デモ動画 eyeTrackingControl / joyBallControl_3FModel.mp4
- **M1研究**「3Dプリントのためのラティスデザイン探索手法の拡張」(pptx) — `meiji/M1/橋本研ゼミM1/`。実装は `archives/infill-designer`(Tauri+Rust、2026-05〜06。GitHub に無く、画面のスクリーンショットも無い)。同フォルダに出力品のSTL 4点(cleaner_hook_bar・cleaner_hook_base・infill-gyroid・x1-carbon_trash_box)
- 授業の実験: 心理学B「背景色の明度がマウスカーソル操作時の抵抗感に与える影響」(2025-01最終発表、Processing実験プログラム・動画あり) — `meiji/B3/3_心理学B/`

## 授業内の制作(明治大)
- **CG基礎 最終課題**(2024-01、Processing) — `meiji/B2/2_CG基礎/FinalWork/`。CGFinalWork.mp4(36MB)、アイデアメモ
- **音響音楽表現 期末ライブコーディング**(B3、TidalCycles) — `meiji/B3/3_音響音楽表現/ライブコーディング/`。.tidal と mp4(13MB)
- **poincareSphere**(トポロジー特論A、Processing、2026-02) — `meiji/B4/4_コンピューティングトポロジー特論A/poincareSphere/`。授業に提出した方。同フォルダの **Poincare_Explorer**(WebGL、git・MIT・vercel.json、2026-01-29〜30)はボツになった方(2026-10-27本人)
- インタラクションデザイン(2024): 「積読ジェンガとお別れする棚」(Fusion+Processing、bookShelf.f3d・png)、個人課題「糸で引くボール」(twoDifferentViscosities.mp4) — `meiji/B3/3_インタラクションデザイン/`
- 班制作: P演習2最終「雑踏音楽」(2023-01、3人、超音波センサ→音楽。発表動画は Google フォト書き出しの p_____________________.mp4) — `meiji/B1/1_P演習/ProEn_final/`／WP実習「CollaboDraw」(2024-01、3人、PHP+SQLite の共同描画。本人担当は部屋管理とDB。webp_capture.mp4) — `meiji/B2/2_WP実習/FinalWork/`／B3ゼミ秋「Omni Mod Car」(4人) — `meiji/B3/3_橋本研ゼミB3/`
- 小品: FMS特別講義「再帰的なテセレーション1・2」(カメラをディスプレイに向けた再帰画像) — `meiji/B1/1_FMS特別講義/`、MP実習のフラクタルとピタゴラ装置(pitagora.mp4) — `meiji/B2/2_MP実習/report_2DCG/`、デジタルファブリケーション特論のレーザーカット用バラ模様生成(rose.py、CorelDRAWをCOM操作) — `meiji/M1/デジタルファブリケーション特論/`、ECA可視化 `meiji/M1/発展プログラミング/12-eca-morikawa976321`

## コンペ
- **SNDC2025** 擬音語スタンプ(gizagiza・gotsugotsu・butsubutsu・mokomoko・togetoge) — `others/sndc2025/`。一次通過後に模型を制作し展示指示書・JDN宛請求書(2025-07)あり。模型写真 IMG_2025082x 系。最終結果はファイルから読めない
- **SNDC2026**「起きあがりはんこ」(三橋と共同、2026-07-29に一次不通過) — `others/sndc2026/`。派生アプリ `archives/roly-poly-toy-generator`(GA・glb/stl 408組)と `archives/stamp-generator`(three.js+opencascade.js)。どちらも GitHub に無い

## 自作ソフトウェア(掲載は可。GitHub の morikawa976321 は2026-10-16時点で公開リポジトリ0件で、duocad・monocore も非公開)
- **duocad** — 人とAIが交互に操作するCAD（Python+Svelte、2026-08-10〜、形状最適化(SIMP)含む）。スクリーンショット `duocad/screenshots/`。duocad で作ったモデル(マイクスタンド・歯ブラシスタンド・36キーのケース)が `duocad-stable/data/models/` にサムネイル付きである
- **romaji-slm** — ローマ字の打鍵列をローカルの小型言語モデルで日本語に変換する(2026-10-11〜、本人が常用中)。デモ動画 `mf/romaji-slm.mp4`
- **minimal-editor** — 設定機能すら持たない、一人で書くためのエディター(Rust/Win32 のネイティブ版、2026-10-14〜、本人が常用中)
- **monocore** — 個人OS(予定・inbox)。Next.js+Supabase、2026-02〜
- **AI活用基盤**(context-engine／ops／フック／エージェント定義。旧 taskbox は 2026-10-09 に廃止して mf/archives/taskbox へ退避) — 内容は非公開だが仕組み(index.md・validate.ps1、ops の daily.ps1・lib・tests)は分離可能。「作品」として語るなら設計思想の記事化が必要。dotbox(Claude と共有する Debian デスクトップ、2026-10-12〜)・voicevox(読み上げ)・claude-thin-ui(archives、claude CLI のブラウザUI)もこの系統
- 小品: monitor-simulator(単一HTML)、keymap-lab(単一HTML)、ikebana-site(Astro+GAS、祖母の教室)、research-collector(凍結)、`others/ambient.html`(WebGL の fbm ノイズによる環境映像、2026-03-28、6KB)

## 3Dプリント製品・実用品
- `3d-models/`: mATX PCケース(STL 25+、2025-11)、stackable_plate 12サイズ(=販売予定トレイ)、soap_dish(波板の石鹸置き、Python生成・preview.html)、tool_holder(Pythonパラメトリック、断面画像あり)、lighting_diffuser(Python生成。2026-10-14 に mf/lighting-diffuser へ移設、2026-10-16 に閉じて mf/archives/lighting-diffuser)、モニターアタッチメント24/27/32インチ、ラブリコ柱ブラケット群(hook/shelf/hanger_bar)、fan_120mm_stand、aroma_oil_diffuser、centauri_carbon_trash_collector、toothbrush_stand
- `archives/pokeca_case`(Pythonパラメトリック、実使用)
- 実物写真は `3d-models/` にほぼ無い。Google フォトの書き出し(下記)に一部ある。作例レンダー10点は `cad-gigs/portfolio/`(トレイ・工具ホルダー・モニターアタッチメント・PCケース・フック・ファンスタンド・アロマディフューザー・プリンタ付属品・工具ケース・歯ブラシスタンド、contact_sheet.png)
- funomi: ロゴ確定(2026-09-22、`design-system/logo/` に SVG と PNG)、ショップ `funomi/site` はビルド済みだが商品写真0件・Stripe未接続

## グラフィック・生成アート
- `processing/vanfu_t_shirt` — 3波源の干渉による波紋。3508×4795px、CMYK(JapanColor2011Coated)の tif と PNG 104枚。完成品(Tシャツ)の写真は無い
- `archives/glitch/` — AI生成の「魅力的な破綻」179枚(2026-08-08〜12)、keep/close/dull分類とnote.md。ADAA向けだったが8月計画縮小で中断、2026-10-13に本人が終了と確定

## AIが主に作ったもの(本人の作品として出すなら、何を本人が決めたかを書ける場合に限る)
2026-10 の以下は全コミットに Claude の Co-Authored-By が付く。
- `archives/awai`(粒の場に動いたときだけ見える生きもの、単体HTML、2026-10-01) — README に「いまだ誰も見たことのないものを作って」の一文だけを受けて作ったとある
- `archives/blindspot-garden`(一枚ものの Web、2026-10-07)、`archives/hakoniwa`(Blender の箱庭「天気の田」、2026-10-01〜02)
- `archives/mv-lab`(MV見本16本、2026-10-01〜09) — 本人はこれに「まったく心を動かされない」と応じ、2026-10-16に閉じた
- `bauhaus-forest`(Blender 映像、2026-10-03〜10。本人が発端のテーマを出し、フェーズごとに修正を依頼する進め方。完成版は未確認)
- `trace-relief`(3DPレリーフ、2026-10-17〜18、休止中。印刷用STLは未実装)
- `archives/steam-game`(2026-10-02中止)、`archives/fdm-trunk`・`archives/mouse`(握り比べ用11型)・`archives/lighting-diffuser`(いずれも閉じた)、`archives/guitar-composer`・`archives/guitar-lab`(寝かせ中)

## 研究の試作(修士研究の3本並行のうち2本)
- `research/mitate`(見立て) — 音のデモ `sounds/demo5`(効果音5本)、balance.html・board.js、30秒進捗報告スライド(2026-10-16)
- `research/face`(FACE の3DPレリーフ表現技法) — 手で引いた線を取り込むツール `capture/`、試験タイルSTL 5種 `tiles/out/`(flat・grooves・wells)

## 文章
- engine の `02_context/creative/` に本人の掌編「人間には二種類ある。空気より重い人と軽い人」全文(prose-heavier-lighter-than-air)と物語の種6件(story-premise-seeds)。engine は非公開なので、出すなら本文を別に起こす

## 実物写真・動画(`mf/GooglePhotoAllContents-1-001.zip`、2026-10-23に全件をサムネイルで確認)
zip 1254件のうち大半は人物・旅行・高校の部活の写真。作品に関わるのは次のファイル(zip内パスは `GooglePhotoAllContents/<名前>`)。
- mATX PCケース実物: IMG_20260203_152312〜152357.jpg(4枚)、組み立て動画 VID_20260203_152422.mp4・152522.mp4。白い六角穴の別版 PXL_20250301_091458479〜091526303.jpg(3枚)、CAD画面 スクリーンショット 2026-02-04 203446/203458.png
- ラティス造形(M1研究の出力と思われる): IMG_20260222_112241〜112328.jpg(円筒・花瓶・箱の3点)
- キーボード: 分割エルゴ PXL_20250301_072149075〜072417206.jpg、2023-01 の自作 PXL_20230105_015441712〜015511795.jpg、それ以前の黒い格子配列 DSC_0001.JPG・DSC_0011.JPG(組み立て中)
- モニターアタッチメント実物: PXL_20250127_120529090〜120605483.jpg(4枚)、CAD画面 スクリーンショット 2025-01-27 210147.png
- ワットチェッカー: PXL_20230907_114916318〜120043102.jpg、dryer.png・ACadapter.png
- 工具ケース・トレイの使用写真: IMG_20260405_233411・233433.jpg。電池ホルダー: PXL_20221113_105405327.jpg。初期の3Dプリント: DSC_0010.JPG
- SNDC2025 擬音はんこ5種のレンダー: 1749485486652.png
- 雑踏音楽の発表動画(P演習2、178秒): p_____________________.mp4。発表スライドのスクショ Screenshot_20230130-20*.png
- 輪郭抽出と残像の比較動画: f901d62d4eaa44267b742a53055c0d78~4.mp4。ほか bezier.mp4・pitagora.mp4・visualizationOfSamplingTheorem.mp4・waveGraffiti~3.mp4・epepep 2022-11-09.mp4・音響音楽表現_final.mp4(meiji 等と重複)
- ギター演奏動画(手元のみ): PXL_20221103_094419948・PXL_20231120_120739601・PXL_20231120_121724535(74秒)・PXL_20231127_070441834・PXL_20231212_112708443・PXL_20240124_122826805・MOV_0071
- 対象外: 2026-01-31 の展示会場の写真・動画(IMG_20260131_*・VID_20260131_*)は本人が見学しただけの展示(2026-10-23本人)

## その他
- `blender-demos/` 6本(build.py自動化+レンダー) — 習作
- `processing/` 20スケッチ — 既存サイトの2023作品の元
- `others/hobby_ikebana_images`(生け花の写真5枚、2026-05-08)、`others/mov`(ギターを弾きながら話す映像 VID_20260408 系4本) — 本人のものかはファイルから判別していない

## 掲載不可
- `aicc`・`unlockos-sdk`(KEYVOX-ORG、決済・本番DB) — 職務経歴としてしか書けない
- `voiceclone`(インターン先代表の声のクローン。本人の許可済み・非公開利用に限る)
- `reports/`(医療記録含む)・engine の内容・`others/finance` `contract` `バイト関連`
- `others/yt`(他人の動画のダウンロード)、`others/md`(個人メモ)
