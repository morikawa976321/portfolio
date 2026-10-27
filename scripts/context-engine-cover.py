# context-engine のカバーを、engine の実際のファイル数から描く: python scripts/context-engine-cover.py [engine のパス]
# 1マス = 1ファイル(ノート1件)。左が未整理の 01_inbox、右が整理バッチを経た 02_context のフォルダごとの塊。
# 中身は出さず、フォルダ名と件数だけを出す(本人「フォルダ名は出してよい」2026-10-27)。
# 数えるのは *.md から各フォルダの目次 _index.md を除いたもの。件数は描いた日の値なので、右下に日付を入れる。
import random
import sys
from datetime import date
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ENGINE = Path(sys.argv[1] if len(sys.argv) > 1 else 'C:/Users/tm976/mf/context-engine')
OUT = Path(__file__).resolve().parent.parent / 'src/content/works/context-engine/cover.png'

# 4:3。作品ページの写真の幅 832px の2倍
W, H = 1664, 1248
# サイトの3色(src/styles/global.css)。橙は本文中のリンク専用なので使わない。
# 地だけはページの地 #e0e0e0 でなく、写真の無いカードと同じ無地の面(墨6%)にする。ページと同じ色だとカードの縁が見えない
BG, FG, SUB = '#d4d4d4', '#1a1a1b', '#474747'
FONTS = Path.home() / 'AppData/Local/Microsoft/Windows/Fonts'
MONO = str(FONTS / 'IntelOneMono-Regular.otf')
JA = str(FONTS / 'NotoSansJP-Regular.otf')


def notes(d: Path) -> int:
    return sum(1 for p in d.glob('*.md') if p.name != '_index.md')


inbox = notes(ENGINE / '01_inbox')
ctx = ENGINE / '02_context'
groups = [('(直下)', notes(ctx))] + [(d.name, notes(d)) for d in ctx.iterdir() if d.is_dir()]
groups.sort(key=lambda g: -g[1])
total = sum(n for _, n in groups)

img = Image.new('RGB', (W, H), BG)
dr = ImageDraw.Draw(img)
mono = lambda s: ImageFont.truetype(MONO, s)
ja = lambda s: ImageFont.truetype(JA, s)

M = 72  # 外周の余白
S, G = 22, 6  # マスの一辺と間
COLS = 13  # 1塊の横のマス数。50件で4段になる
GW = COLS * S + (COLS - 1) * G  # 塊の幅
GX, GY = 44, 56  # 塊どうしの横・縦の間(ラベルの行を含まない)
LABEL = 44  # ラベルの行の高さ
NCOL = 3

# 右: 02_context
def rows_of(n: int) -> int:
    return max(1, -(-n // COLS))


right_w = NCOL * GW + (NCOL - 1) * GX
rx = W - M - right_w
lines = [groups[i:i + NCOL] for i in range(0, len(groups), NCOL)]
line_h = [LABEL + rows_of(max(n for _, n in ln)) * (S + G) - G for ln in lines]
right_h = 64 + sum(line_h) + (len(lines) - 1) * GY
ry = (H - right_h) // 2

dr.text((rx, ry), '02_context', font=mono(34), fill=FG, anchor='ls')
dr.text((rx + dr.textlength('02_context', font=mono(34)) + 16, ry), str(total), font=mono(34), fill=SUB, anchor='ls')
y = ry + 64
for ln, lh in zip(lines, line_h):
    for i, (name, n) in enumerate(ln):
        x = rx + i * (GW + GX)
        # 22px は最長の digital-environment と件数が塊の幅に収まる大きさ
        f = ja(20) if name.startswith('(') else mono(22)
        dr.text((x, y + 24), name, font=f, fill=FG, anchor='ls')
        dr.text((x + GW, y + 24), str(n), font=mono(22), fill=SUB, anchor='rs')
        for k in range(n):
            cx, cy = x + (k % COLS) * (S + G), y + LABEL + (k // COLS) * (S + G)
            dr.rectangle([cx, cy, cx + S - 1, cy + S - 1], fill=FG)
    y += lh + GY

# 左: 01_inbox。分類前なので、格子からわずかにずらして置く(乱数の種を固定し、描き直しても同じ形にする)
ICOLS = 4
IG = 10  # ずらしても重ならないよう、間を広げる
iw = ICOLS * S + (ICOLS - 1) * IG
ix = M
iy = ry + 64
dr.text((ix, ry), '01_inbox', font=mono(34), fill=FG, anchor='ls')
dr.text((ix + dr.textlength('01_inbox', font=mono(34)) + 16, ry), str(inbox), font=mono(34), fill=SUB, anchor='ls')
rnd = random.Random(4)
for k in range(inbox):
    cx = ix + (k % ICOLS) * (S + IG) + rnd.randint(-4, 4)
    cy = iy + LABEL + (k // ICOLS) * (S + IG) + rnd.randint(-4, 4)
    dr.rectangle([cx, cy, cx + S - 1, cy + S - 1], fill=SUB)

# 間: 整理バッチの矢印
ax0, ax1 = ix + iw + 48, rx - 48
ay = iy + LABEL + 2 * (S + IG) + S // 2
dr.line([ax0, ay, ax1, ay], fill=FG, width=3)
dr.polygon([(ax1, ay), (ax1 - 18, ay - 10), (ax1 - 18, ay + 10)], fill=FG)
dr.text(((ax0 + ax1) // 2, ay - 20), '整理バッチ', font=ja(24), fill=FG, anchor='ms')

dr.text((W - M, H - M + 24), date.today().isoformat(), font=mono(24), fill=SUB, anchor='rs')

OUT.parent.mkdir(parents=True, exist_ok=True)
img.save(OUT, optimize=True)
print(OUT, f'inbox={inbox} 02_context={total}', groups)
