// favicon と OGP 画像を作る: node scripts/make-icons.mjs
// 印は「tm」を Intel One Mono 400 で描き、曲率流(箱ぼかし r=2 を3回 → 閾値で切り直す)を FLOW 回かけた形。
// 反復は design-system の funomi-logomark-build.html と同じ(30回までは閾値 0.455、以後 0.5、境界は幅 0.12 の帯)。
// ラスタの大きさ・字の大きさ・回数のどれを変えても別の形になるので、印を変えるとき以外は触らない。
// 書体は Google Fonts から読むのでネットワークが要る。
import { chromium } from 'playwright';
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const TEXT = process.env.ICON_TEXT ?? 'tm';
const FS = +(process.env.ICON_FS ?? 104);
const FONT = process.env.ICON_FONT ?? '"Intel One Mono"';
const FLOW = +(process.env.ICON_FLOW ?? 18);
const OUT = process.env.ICON_OUT ?? 'public';
const INK = '#1a1a1b', PAPER = '#f0f0f0'; // サイトの --fg と --bg

// OGP の写真: トップの先頭4件のカバーを 4:3 に切ったもの。[ファイル, 切り出し枠(元画像の px) か null=中央切り]
const OGP_PHOTOS = [
  ['src/content/works/duocad/cover.webp', [260, 6, 1490, 1118]],
  ['src/content/works/onomatopettan/presentation-sheet.jpg', [665, 468, 1080, 810]],
  ['src/content/works/okiagari-hanko/presentation-sheet.jpg', [142, 731, 1200, 900]],
  ['src/content/works/matx-pc-case/05-v2-inside.jpg', null],
];

async function photo([file, box]) {
  const img = box ? sharp(file).extract({ left: box[0], top: box[1], width: box[2], height: box[3] }) : sharp(file);
  const buf = await img.resize(720, 540, { fit: 'cover' }).jpeg({ quality: 90 }).toBuffer();
  return 'data:image/jpeg;base64,' + buf.toString('base64');
}

const html = `<!doctype html><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Intel+One+Mono&family=Noto+Sans+JP:wght@500&display=swap">`;

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setContent(html, { waitUntil: 'networkidle' });
const photos = await Promise.all(OGP_PHOTOS.map(photo));
const out = await page.evaluate(async ({ TEXT, FS, FONT, FLOW, INK, PAPER, photos }) => {
  await document.fonts.load(`400 ${FS}px ${FONT}`, TEXT);
  await document.fonts.load('400 32px "Intel One Mono"', 'Taichi Morikawa');
  await document.fonts.load('500 64px "Noto Sans JP"', '森川太一');
  const R = 200;
  const cv = (w, h) => Object.assign(document.createElement('canvas'), { width: w, height: h });
  // 字をラスタの中央に描いた濃度の面
  const c0 = cv(R, R), g0 = c0.getContext('2d');
  g0.font = `400 ${FS}px ${FONT}`;
  const m = g0.measureText(TEXT);
  const w = m.actualBoundingBoxLeft + m.actualBoundingBoxRight, h = m.actualBoundingBoxAscent + m.actualBoundingBoxDescent;
  g0.fillText(TEXT, (R - w) / 2 + m.actualBoundingBoxLeft, (R - h) / 2 + m.actualBoundingBoxAscent);
  const d0 = g0.getImageData(0, 0, R, R).data;
  let cur = new Float32Array(R * R);
  for (let i = 0; i < R * R; i++) cur[i] = d0[i * 4 + 3] / 255;
  const blur = (src, dst) => {
    const tmp = new Float32Array(R * R);
    for (let y = 0; y < R; y++) for (let x = 0; x < R; x++) { let s = 0; for (let k = -2; k <= 2; k++) s += src[y * R + Math.min(R - 1, Math.max(0, x + k))]; tmp[y * R + x] = s / 5; }
    for (let y = 0; y < R; y++) for (let x = 0; x < R; x++) { let s = 0; for (let k = -2; k <= 2; k++) s += tmp[Math.min(R - 1, Math.max(0, y + k)) * R + x]; dst[y * R + x] = s / 5; }
  };
  const f = new Float32Array(R * R), f2 = new Float32Array(R * R);
  for (let k = 1; k <= FLOW; k++) {
    blur(cur, f); blur(f, f2); blur(f2, f);
    const th = k <= 30 ? 0.455 : 0.5, nm = new Float32Array(R * R);
    for (let i = 0; i < R * R; i++) nm[i] = Math.min(1, Math.max(0, (f[i] - th) / 0.12 + 0.5));
    cur = nm;
  }
  // 墨の印のラスタと外接矩形
  const ink = cv(R, R), gi = ink.getContext('2d'), id = gi.createImageData(R, R);
  let x0 = R, y0 = R, x1 = 0, y1 = 0;
  for (let i = 0; i < R * R; i++) {
    id.data[i * 4] = 0x1a; id.data[i * 4 + 1] = 0x1a; id.data[i * 4 + 2] = 0x1b;
    id.data[i * 4 + 3] = Math.min(1, Math.max(0, (cur[i] - 0.5) / 0.1 + 0.5)) * 255;
    if (cur[i] > 0.5) { const x = i % R, y = (i / R) | 0; x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }
  }
  gi.putImageData(id, 0, 0);
  const bw = x1 - x0 + 1, bh = y1 - y0 + 1;
  // 地の正方形に、印を幅・高さの 78% に収めて置く(見本のページと同じ)
  const tile = (S) => {
    const c = cv(S, S), g = c.getContext('2d');
    g.fillStyle = PAPER; g.fillRect(0, 0, S, S);
    const k = Math.min(S * 0.78 / bw, S * 0.78 / bh);
    g.imageSmoothingQuality = 'high';
    g.drawImage(ink, x0, y0, bw, bh, (S - bw * k) / 2, (S - bh * k) / 2, bw * k, bh * k);
    return c.toDataURL('image/png');
  };
  const icons = {};
  for (const S of [16, 32, 48, 180]) icons[S] = tile(S);
  // OGP 1200×630: 左に名前、右に 4:3 の写真を 2×2
  const og = cv(1200, 630), g = og.getContext('2d');
  g.fillStyle = PAPER; g.fillRect(0, 0, 1200, 630);
  g.fillStyle = INK; g.font = '500 64px "Noto Sans JP"'; g.fillText('森川太一', 64, 300);
  g.fillStyle = '#474747'; g.font = '400 32px "Intel One Mono"'; g.fillText('Taichi Morikawa', 66, 356);
  const W = 360, H = 270, gap = 16, ox = 1200 - 40 - (W * 2 + gap), oy = (630 - (H * 2 + gap)) / 2;
  const imgs = await Promise.all(photos.map((src) => new Promise((res) => { const i = new Image(); i.onload = () => res(i); i.src = src; })));
  imgs.forEach((im, i) => {
    g.save(); g.beginPath(); g.roundRect(ox + (i % 2) * (W + gap), oy + Math.floor(i / 2) * (H + gap), W, H, 8); g.clip();
    g.drawImage(im, ox + (i % 2) * (W + gap), oy + Math.floor(i / 2) * (H + gap), W, H);
    g.restore();
  });
  return { icons, og: og.toDataURL('image/png') };
}, { TEXT, FS, FONT, FLOW, INK, PAPER, photos });
await browser.close();

const png = (u) => Buffer.from(u.split(',')[1], 'base64');
writeFileSync(`${OUT}/favicon-32.png`, png(out.icons[32]));
writeFileSync(`${OUT}/apple-touch-icon.png`, png(out.icons[180]));
// favicon.ico: 16・32・48 の PNG をそのまま入れた ICO(link を読まないクライアントが /favicon.ico を取りに来るため)
const ims = [16, 32, 48].map((s) => png(out.icons[s]));
const head = Buffer.alloc(6 + 16 * ims.length);
head.writeUInt16LE(0, 0); head.writeUInt16LE(1, 2); head.writeUInt16LE(ims.length, 4);
let offset = head.length;
ims.forEach((b, i) => {
  const s = [16, 32, 48][i], e = 6 + 16 * i;
  head.writeUInt8(s, e); head.writeUInt8(s, e + 1); head.writeUInt16LE(1, e + 4); head.writeUInt16LE(32, e + 6);
  head.writeUInt32LE(b.length, e + 8); head.writeUInt32LE(offset, e + 12); offset += b.length;
});
writeFileSync(`${OUT}/favicon.ico`, Buffer.concat([head, ...ims]));
await sharp(png(out.og)).jpeg({ quality: 88 }).toFile(`${OUT}/og.jpg`);
console.log('wrote favicon.ico, favicon-32.png, apple-touch-icon.png, og.jpg to', OUT);
