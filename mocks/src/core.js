// 4案で共有する部品と、1ファイルの中で3種類のページ(トップ / 作品一覧 / 作品詳細)を切り替える仕組み。
// 本番(Astro)では別々の URL になる。ここでは #/ #/works #/works/<id> で代用する。
// 切り替えに動きは付けない。リンクで移ったときはページの先頭へ、戻る・進むでは前の位置へ戻す(普通のサイトと同じ挙動)。
// 表示中のページは current が持つ。data: URL で開かれると location.hash も pushState も効かないので、履歴は使えるときだけ使う。

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const byId = Object.fromEntries(WORKS.map((w) => [w.id, w]));
const featured = WORKS.filter((w) => w.featured).sort((a, b) => a.featured - b.featured);
const when = (w) => w.period || String(w.year);
const to = { home: '#/', works: '#/works', work: (w) => `#/works/${w.id}` };

// 年ごと(新しい順)。範囲を持つ作品は終わりの年に置く
const byYear = () => {
  const m = new Map();
  for (const w of WORKS) (m.get(w.year) || m.set(w.year, []).get(w.year)).push(w);
  return [...m.entries()].sort((a, b) => b[0] - a[0]);
};

const metaOf = (w) =>
  [['年', when(w)], ['文脈', w.context], w.role && ['担当', w.role], w.tools.length && ['道具', w.tools.join(' / ')]].filter(Boolean);

// 写真の代わり。比率は CSS の aspect-ratio、角に比率を小さく書く(差し替えるときの目安)
const ph = (w, ratio = '4/3', shift = 0) => {
  const [a, b] = TONES[(w.tone + shift) % TONES.length];
  return `<div class="ph" role="img" aria-label="${esc(w.title)} の写真(ダミー)" style="aspect-ratio:${ratio};--a:${a};--b:${b}"><span>${ratio.replace('/', ':')}</span></div>`;
};

const mail = () => `<a class="link" href="mailto:${esc(PROFILE.email)}">${esc(PROFILE.email)}</a>`;
const extLinks = () => PROFILE.links.map((l) => `<a class="link" href="${esc(l.url)}" rel="noopener">${esc(l.label)} ↗</a>`).join('');

function route(hash) {
  const h = hash.replace(/^#\/?/, '');
  if (h === 'works') return { view: 'works' };
  const m = h.match(/^works\/([\w-]+)$/);
  if (m && byId[m[1]]) return { view: 'work', work: byId[m[1]] };
  return { view: 'home' };
}

function start(T) {
  const app = document.getElementById('app');
  const saved = {};
  let current = location.hash || '#/';
  const render = (y) => {
    const r = route(current);
    app.innerHTML = T[r.view](r.work);
    document.title =
      r.view === 'work' ? `${r.work.title} — ${PROFILE.ja}` : r.view === 'works' ? `作品一覧 — ${PROFILE.ja}` : `${PROFILE.ja} / ${PROFILE.en}`;
    window.scrollTo(0, y);
  };
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#/"]');
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    const next = a.getAttribute('href');
    if (next === current) return window.scrollTo(0, 0);
    saved[current] = window.scrollY;
    current = next;
    try { history.pushState(null, '', next); } catch {}
    render(0);
  });
  addEventListener('popstate', () => {
    saved[current] = window.scrollY;
    current = location.hash || '#/';
    render(saved[current] || 0);
  });
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  render(0);
}
