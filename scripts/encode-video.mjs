// 動画を Web 掲載用に再エンコードする: node scripts/encode-video.mjs <入力> <出力.mp4>
// Cloudflare Pages は1ファイル25MiBが上限なので、元動画(最大52MB)はそのまま置けない。
// H.264 / 長辺1280px以下 / CRF 26 / faststart(先頭から再生できるよう moov を前に置く)。
import { spawnSync } from 'node:child_process';
import { mkdirSync, statSync } from 'node:fs';
import { dirname } from 'node:path';

const [input, output] = process.argv.slice(2);
if (!input || !output) {
  console.error('usage: node scripts/encode-video.mjs <input> <output.mp4>');
  process.exit(1);
}
mkdirSync(dirname(output), { recursive: true });

const args = [
  '-y', '-i', input,
  // 長辺を1280以下に縮め、拡大はしない。幅・高さは偶数に丸める(yuv420p の要件)
  '-vf', "scale='if(gt(iw,ih),min(1280,iw),-2)':'if(gt(iw,ih),-2,min(1280,ih))',scale=trunc(iw/2)*2:trunc(ih/2)*2",
  '-c:v', 'libx264', '-preset', 'slow', '-crf', '26', '-pix_fmt', 'yuv420p',
  '-c:a', 'aac', '-b:a', '128k',
  '-movflags', '+faststart',
  output,
];
const r = spawnSync('ffmpeg', args, { stdio: ['ignore', 'ignore', 'inherit'] });
if (r.status !== 0) process.exit(r.status ?? 1);

const mb = statSync(output).size / 1024 / 1024;
console.log(`${output}: ${mb.toFixed(1)} MB`);
if (mb > 25) console.error('25MiB を超えている。CRF を上げるか尺を切ること');
