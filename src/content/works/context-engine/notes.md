# context-engine のメモ

index.md の frontmatter から移したコメント。サイトには出ない(読み込むのは index.md だけ)。

- year, summary: 本人が書いた(2026-10-27)
- 中身は非公開。仕組み(index.md・validate.ps1、ops)を説明する形で書く(docs/candidate-works.md)
- 本文は AI(Claude)が下書きした(2026-10-31、本人「本文の下書きを書いて」)。同日、本人の指示で設計思想に絞って短くした(本人「4時にバッチ処理があることなどは書く意味がない。本質亭じゃない。設計思想的な部分に重心を。」)。事実の出典: engine の index.md(1・2・3・6章)。冒頭の「仕組みは標準機能に置き換わるが文脈は使い続ける」は engine の prefer-standard-ai-features-minimal-patches にある本人の発言(2026-10-10・2026-10-13)、「本人の言ったことだけを書く」理由は index.md 2章の記述から取った
- cover: engine のノートの件数を1件1マスで描いた図。`python scripts/context-engine-cover.py` で engine の今の件数から描き直す(件数は描いた日の値で、右下に日付が入る)。現物の画面が無く、中身も出せないので、構造の図をカバーにした(本人「構造図のカバーを試作して。フォルダ名は出してよい。」2026-10-27)。地はページの地でなく写真の無いカードの面の色
