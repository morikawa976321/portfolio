# archive

サイトで使わなくなったものの置き場。ビルドの対象外(`src/` の外にあり、tsconfig も除外している)。本人の依頼「使わないやつは全部どこかしらに残しておいて」(2026-10-25)による。

- `round5-site/` — G(docs/visual.md 第7回)に移す前の `src/` の見た目: 第5回の形と、配色の比較の仕組み(`styles/variants/*.css`、`?v=` と `?plain=1`)。2026-10-25 に G へ置き換えた。中身を読むときの基準は当時の `src/`(`src/data/profile.ts` などはここに無い)

- `media/` — 本人の選定(docs/candidate-works.md)に入らなかった作品の動画。`public/media/` に置くと、作品ページが無くても URL で見えてしまうため移した(2026-10-25)。作品ページは src/content/works から削除した(本人「のせない作品はcontent/worksから削除していい」2026-10-25)。戻すときは、作品ページを git のコミット d7047d6 から取り出し、動画を `public/media/` へ

デザイン案のモック(第6回 A〜D・第7回 E〜G)は `mocks/` にそのまま残してある。
