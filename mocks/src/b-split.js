// B 二面: 墨地。左に「誰か」(名前・所属・一行・連絡先)を止めて置き、右に「何を作ったか」を流す。
// 左はどのページでも同じで、名前がトップへのリンク。狭い画面では 導入 → 中身 → 連絡先 の順に縦に並ぶ。
{
  const side = (home) => {
    const who = `<span class="who-ja">${esc(PROFILE.ja)}</span><span class="mono sub">${esc(PROFILE.en)}</span>`;
    return `<aside class="side${home ? ' is-home' : ''}">
      <div class="intro">${home ? `<h1 class="who">${who}</h1>` : `<a class="who" href="${to.home}">${who}</a>`}
        <p class="sub aff">${esc(PROFILE.affiliation)}</p><p class="lead">${esc(PROFILE.headline)}</p></div>
      <footer class="contact"><h2 class="sub">連絡先</h2><p>${mail()}</p><p class="ext">${extLinks()}</p></footer>
    </aside>`;
  };
  const shell = (home, inner) => `<div class="shell">${side(home)}<main class="main">${inner}</main></div>`;
  const card = (w, ratio) =>
    `<li><a class="card" href="${to.work(w)}">${ph(w, ratio)}<div class="cap"><h3>${esc(w.title)}</h3><span class="mono sub">${esc(when(w))}</span></div><p class="sub line">${esc(w.line)}</p></a></li>`;
  const rows = (title, items) =>
    `<section><h2 class="sec-t">${title}</h2><dl class="rows">${items.map(([p, t]) => `<div><dt class="mono sub">${esc(p)}</dt><dd>${esc(t)}</dd></div>`).join('')}</dl></section>`;

  start({
    home: () =>
      shell(
        true,
        `<section><div class="sec-h"><h2 class="sec-t">選抜作品</h2><a class="more" href="${to.works}">すべての作品 →</a></div>
          <ul class="stack">${featured.map((w) => card(w, '16/10')).join('')}</ul></section>
        <div class="profile">${rows('経歴', CAREER)}${rows('研究・発表', RESEARCH)}${rows('受賞', AWARDS)}</div>`
      ),
    works: () =>
      shell(
        false,
        `<h1 class="pt">すべての作品</h1><div class="years">${byYear()
          .map(([y, ws]) => `<section><h2 class="mono sub year">${y}</h2><ul class="grid2">${ws.map((w) => card(w, '16/10')).join('')}</ul></section>`)
          .join('')}</div>`
      ),
    work: (w) =>
      shell(
        false,
        `<article>
          <h1 class="pt-l">${esc(w.title)}</h1><p class="sub lead-s">${esc(w.line)}</p>
          <dl class="meta">${metaOf(w).map(([k, v]) => `<div><dt class="sub">${k}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>
          ${ph(w, '3/2')}
          <div class="prose">${BODY.map((p) => `<p>${esc(p)}</p>`).join('')}</div>
          <div class="pair">${ph(w, '4/5', 1)}${ph(w, '4/5', 2)}</div>
          <p class="back"><a class="link" href="${to.works}">← すべての作品</a></p>
        </article>`
      ),
  });
}
