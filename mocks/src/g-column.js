// G 一列: 中央の1列(本文幅 960px)に、上から 名前 → 所属 → 一行 → 作品 → 経歴 → 連絡先 を積む。
// 左右に分けない、地の色を変えた帯を作らない、文字を特大にしない(第6回への本人の判定。2026-10-24)。作品は2列の格子。
{
  const who = (home) => {
    const inner = `<span class="who-ja">${esc(PROFILE.ja)}</span><span class="mono sub">${esc(PROFILE.en)}</span>`;
    return home ? `<h1 class="who">${inner}</h1>` : `<a class="who" href="${to.home}">${inner}</a>`;
  };
  const card = (w) =>
    `<li><a class="card" href="${to.work(w)}">${ph(w, '4/3')}<div class="cap"><h3>${esc(w.title)}</h3><span class="mono sub">${esc(when(w))}</span></div><p class="sub line">${esc(w.line)}</p></a></li>`;
  const rows = (title, items) =>
    `<section><h2 class="sec-t">${title}</h2><dl class="rows">${items.map(([p, t]) => `<div><dt class="mono sub">${esc(p)}</dt><dd>${esc(t)}</dd></div>`).join('')}</dl></section>`;
  const foot = () =>
    `<footer class="contact"><h2 class="sec-t">連絡先</h2><p class="mail">${mail()}</p><p class="ext">${extLinks()}</p></footer>`;
  const page = (home, inner) => `<div class="page">${who(home)}${inner}${foot()}</div>`;

  start({
    home: () =>
      page(
        true,
        `<div class="intro"><p class="sub aff">${esc(PROFILE.affiliation)}</p><p class="lead">${esc(PROFILE.headline)}</p></div>
        <main>
          <section class="works"><div class="sec-h"><h2 class="sec-t">選抜作品</h2><a class="link more" href="${to.works}">すべての作品 →</a></div><ul class="grid">${featured.map(card).join('')}</ul></section>
          <div class="profile">${rows('経歴', CAREER)}${rows('研究・発表', RESEARCH)}${rows('受賞', AWARDS)}</div>
        </main>`
      ),
    works: () =>
      page(
        false,
        `<main class="sub-page"><h1 class="title">すべての作品</h1><div class="years">${byYear()
          .map(([y, ws]) => `<section><h2 class="year mono">${y}</h2><ul class="grid">${ws.map(card).join('')}</ul></section>`)
          .join('')}</div></main>`
      ),
    work: (w) =>
      page(
        false,
        `<main class="sub-page"><article>
          <h1 class="title">${esc(w.title)}</h1><p class="sub lead-s">${esc(w.line)}</p>
          <dl class="meta">${metaOf(w).map(([k, v]) => `<div><dt class="sub">${k}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>
          ${ph(w, '16/10')}
          <div class="prose">${BODY.map((p) => `<p>${esc(p)}</p>`).join('')}</div>
          <div class="pair">${ph(w, '4/3', 1)}${ph(w, '4/3', 2)}</div>
          <p class="back"><a class="link" href="${to.works}">← すべての作品</a></p>
        </article></main>`
      ),
  });
}
