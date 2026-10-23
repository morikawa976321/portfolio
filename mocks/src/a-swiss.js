// A 格子: 白地。12列の格子で、左3列に名前と節名、右9列に中身。どのページも同じ2列に揃う。
// 罫線は使わず、列の揃いと余白の段だけでまとまりを作る。写真は角を丸めない。
{
  const head = (home, inner) => {
    const who = `<span class="who-ja">${esc(PROFILE.ja)}</span><span class="mono sub">${esc(PROFILE.en)}</span>`;
    return `<header class="page row head">${home ? `<h1 class="label who">${who}</h1>` : `<a class="label who" href="${to.home}">${who}</a>`}<div class="body">${inner}</div></header>`;
  };
  const card = (w) =>
    `<li><a class="card" href="${to.work(w)}">${ph(w, '4/3')}<div class="cap"><h3>${esc(w.title)}</h3><span class="mono sub">${esc(when(w))}</span></div><p class="sub line">${esc(w.line)}</p></a></li>`;
  const rows = (items) =>
    `<dl class="body rows">${items.map(([p, t]) => `<div><dt class="mono sub">${esc(p)}</dt><dd>${esc(t)}</dd></div>`).join('')}</dl>`;
  const foot = () =>
    `<footer class="page row foot"><h2 class="label">連絡先</h2><div class="body"><p class="mail">${mail()}</p><p class="ext">${extLinks()}</p></div></footer>`;

  start({
    home: () =>
      head(true, `<p class="lead">${esc(PROFILE.headline)}</p><p class="sub aff">${esc(PROFILE.affiliation)}</p>`) +
      `<main>
        <section class="page row"><div class="label"><h2>選抜作品</h2><a class="more link" href="${to.works}">すべての作品 →</a></div><ul class="body grid">${featured.map(card).join('')}</ul></section>
        <div class="profile">
          <section class="page row"><h2 class="label">経歴</h2>${rows(CAREER)}</section>
          <section class="page row"><h2 class="label">研究・発表</h2>${rows(RESEARCH)}</section>
          <section class="page row"><h2 class="label">受賞</h2>${rows(AWARDS)}</section>
        </div>
      </main>` +
      foot(),
    works: () =>
      head(false, `<h1 class="title">すべての作品</h1>`) +
      `<main class="years">${byYear()
        .map(([y, ws]) => `<section class="page row"><h2 class="label mono year">${y}</h2><ul class="body grid">${ws.map(card).join('')}</ul></section>`)
        .join('')}</main>` +
      foot(),
    work: (w) =>
      head(false, `<h1 class="title">${esc(w.title)}</h1><p class="sub lead-s">${esc(w.line)}</p>`) +
      `<main><article class="page row">
        <dl class="label meta">${metaOf(w).map(([k, v]) => `<div><dt class="sub">${k}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>
        <div class="body">
          ${ph(w, '16/10')}
          <div class="prose">${BODY.map((p) => `<p>${esc(p)}</p>`).join('')}</div>
          <div class="pair">${ph(w, '4/3', 1)}${ph(w, '4/3', 2)}</div>
          <p class="back"><a class="link" href="${to.works}">← すべての作品</a></p>
        </div>
      </article></main>` +
      foot(),
  });
}
