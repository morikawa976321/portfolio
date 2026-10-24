// デザイン案(第6回・第7回、docs/visual.md)を1案1ファイルの HTML にまとめる。依存なし。
//   node mocks/build.mjs
// dist/<案>.html は単体で開ける(書体だけ Google Fonts から読む)。中身は src/data.js、部品と切り替えは src/core.js で全案共通。
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const src = (name) => readFile(join(here, 'src', name), 'utf8');

const designs = [
  ['a-swiss', 'A 格子'],
  ['b-split', 'B 二面'],
  ['c-catalog', 'C 目録'],
  ['d-planes', 'D 面'],
  // 第7回: 第6回への本人の判定を受けた改良案
  ['e-swiss2', 'E 格子・改'],
  ['f-catalog2', 'F 目録・改'],
  ['g-column', 'G 一列'],
];

await mkdir(join(here, 'dist'), { recursive: true });
for (const [id, label] of designs) {
  const html = `<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<meta name="description" content="森川太一のポートフォリオ(デザイン案 ${label})">
<title>森川太一 / Taichi Morikawa</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Intel+One+Mono&family=Noto+Sans+JP:wght@400;500&display=swap">
<style>
${await src('base.css')}
${await src(`${id}.css`)}
</style>
</head>
<body>
<div id="app"></div>
<script>
(() => {
${await src('data.js')}
${await src('core.js')}
${await src(`${id}.js`)}
})();
</script>
</body>
</html>
`;
  await writeFile(join(here, 'dist', `${id}.html`), html);
  console.log(`mocks/dist/${id}.html (${Math.round(html.length / 1024)} KB)`);
}
