// D 面: 地の面でまとまりを作る。導入と連絡先は帯の面、作品と経歴は地の面。線は使わない。
{
  const top = () => `<div class="page bar"><a class="who" href="${to.home}">${esc(PROFILE.ja)}</a></div>`;
  const card = (w) =>
    `<li><a class="card" href="${to.work(w)}">${ph(w, '4/3')}<div class="cap"><h3>${esc(w.title)}</h3><span class="mono sub">${esc(when(w))}</span></div><p class="sub line">${esc(w.line)}</p></a></li>`;
  const rows = (title, items) =>
    `<section class="page prof"><h2 class="prof-t">${title}</h2><dl class="rows">${items.map(([p, t]) => `<div><dt class="mono sub">${esc(p)}</dt><dd>${esc(t)}</dd></div>`).join('')}</dl></section>`;
  const foot = () =>
    `<footer class="plane band"><div class="page foot"><h2 class="foot-t">連絡先</h2><p class="mail mono">${mail()}</p><p class="ext">${extLinks()}</p></div></footer>`;

  start({
    home: () =>
      `<header class="plane band"><div class="page hero">
        <h1 class="big"><span>${esc(PROFILE.ja)}</span><span class="mono en">${esc(PROFILE.en)}</span></h1>
        <div class="hero-sub"><p class="lead">${esc(PROFILE.headline)}</p><p class="aff">${esc(PROFILE.affiliation)}</p></div>
      </div></header>
      <main class="plane paper">
        <section class="page"><div class="sec-h"><h2>選抜作品</h2><a class="link more" href="${to.works}">すべての作品 →</a></div><ul class="grid2">${featured.map(card).join('')}</ul></section>
        <div class="profile">${rows('経歴', CAREER)}${rows('研究・発表', RESEARCH)}${rows('受賞', AWARDS)}</div>
      </main>` + foot(),
    works: () =>
      `<header class="plane band">${top()}<div class="page hero-s"><h1 class="mid">すべての作品</h1></div></header>
      <main class="plane paper years">${byYear()
        .map(([y, ws]) => `<section class="page"><h2 class="year mono">${y}</h2><ul class="grid3">${ws.map(card).join('')}</ul></section>`)
        .join('')}</main>` + foot(),
    work: (w) =>
      `<header class="plane band">${top()}<div class="page hero-s">
        <h1 class="mid">${esc(w.title)}</h1><p class="lead-s">${esc(w.line)}</p>
        <dl class="meta">${metaOf(w).map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>
      </div></header>
      <main class="plane paper"><article class="page">
        ${ph(w, '16/9')}
        <div class="prose">${BODY.map((p) => `<p>${esc(p)}</p>`).join('')}</div>
        <div class="pair">${ph(w, '4/3', 1)}${ph(w, '4/3', 2)}</div>
        <p class="back"><a class="link" href="${to.works}">← すべての作品</a></p>
      </article></main>` + foot(),
  });
}
