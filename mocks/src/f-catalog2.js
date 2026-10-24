// F 目録・改(C の改良): 全ページの行が同じ4列(写真 / 題と一行 / 文脈 / 年)に揃い、何がどこにあるかが列の位置で決まる。
// C から写真の列を 200 → 440px に広げた(C は小さすぎた。2026-10-24本人)。狭い画面では写真を幅いっぱいにして、その下に文字を置く。
{
  const who = () => `<span class="who-ja">${esc(PROFILE.ja)}</span><span class="mono sub">${esc(PROFILE.en)}</span>`;
  const head = (home, inner) =>
    `<header class="page g4 head">${home ? `<h1 class="c1 who">${who()}</h1>` : `<a class="c1 who" href="${to.home}">${who()}</a>`}<div class="c2 c2-4">${inner}</div></header>`;
  const item = (w) =>
    `<li><a class="item g4" href="${to.work(w)}"><div class="c1">${ph(w, '4/3')}</div><div class="c2"><h3>${esc(w.title)}</h3><p class="sub line">${esc(w.line)}</p></div><p class="meta"><span class="c3 sub">${esc(w.context)}</span><span class="c4 mono">${esc(when(w))}</span></p></a></li>`;
  const rows = (title, items) =>
    `<section class="block"><h2 class="page g4 sec-h"><span class="c1">${title}</span></h2><dl class="page">${items
      .map(([p, t]) => `<div class="g4 prow"><dt class="c1 mono sub">${esc(p)}</dt><dd class="c2 c2-3">${esc(t)}</dd></div>`)
      .join('')}</dl></section>`;
  const foot = () =>
    `<footer class="page g4 foot"><h2 class="c1 sub">連絡先</h2><div class="c2"><p class="mail">${mail()}</p><p class="ext">${extLinks()}</p></div></footer>`;

  start({
    home: () =>
      head(true, `<p class="lead">${esc(PROFILE.headline)}</p><p class="sub aff">${esc(PROFILE.affiliation)}</p>`) +
      `<main>
        <section class="block"><div class="page g4 sec-h"><h2 class="c1">選抜作品</h2><a class="c4 link more" href="${to.works}">すべての作品 →</a></div>
          <ul class="page list">${featured.map(item).join('')}</ul></section>
        <div class="profile">${rows('経歴', CAREER)}${rows('研究・発表', RESEARCH)}${rows('受賞', AWARDS)}</div>
      </main>` +
      foot(),
    works: () =>
      head(false, `<h1 class="title">すべての作品</h1>`) +
      `<main class="years">${byYear()
        .map(([y, ws]) => `<section class="block"><h2 class="page g4 sec-h"><span class="c1 mono">${y}</span></h2><ul class="page list">${ws.map(item).join('')}</ul></section>`)
        .join('')}</main>` +
      foot(),
    work: (w) =>
      head(false, `<h1 class="title">${esc(w.title)}</h1><p class="sub lead-s">${esc(w.line)}</p>`) +
      `<main><article>
        <dl class="page">${metaOf(w).map(([k, v]) => `<div class="g4 prow"><dt class="c1 mono sub">${k}</dt><dd class="c2 c2-3">${esc(v)}</dd></div>`).join('')}</dl>
        <div class="page g4 fig"><div class="c2 c2-4">${ph(w, '16/9')}</div></div>
        <div class="page g4"><div class="c2 prose">${BODY.map((p) => `<p>${esc(p)}</p>`).join('')}</div></div>
        <div class="page g4 fig"><div class="c2 c2-4 pair">${ph(w, '4/3', 1)}${ph(w, '4/3', 2)}</div></div>
        <div class="page g4"><p class="c2 back"><a class="link" href="${to.works}">← すべての作品</a></p></div>
      </article></main>` +
      foot(),
  });
}
