/* Página do portfólio da Raiane. Lista de vídeos em videos.js. */
(() => {
  const CATS = [
    { id: "all", nome: "All work" },
    { id: "reels", nome: "Reels & Social" },
    { id: "youtube", nome: "YouTube" },
    { id: "documentary", nome: "Documentary" },
    { id: "motion", nome: "Motion Graphics" },
    { id: "business", nome: "Brand & Business" },
    { id: "ai", nome: "AI Video" },
    { id: "design", nome: "Brand Design" },
  ];
  const itens = (typeof VIDEOS !== "undefined" ? VIDEOS : []).map((it) => ({ ...it, cat: it.categoria }));

  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const thumb = (it) => (it.tipo === "youtube" ? `https://img.youtube.com/vi/${it.id}/hqdefault.jpg` : it.poster);
  const nomeCat = (id) => (CATS.find((c) => c.id === id) || {}).nome || "";

  let atual = "all", lista = [], pos = 0;

  const usadas = new Set(itens.map((i) => i.cat));
  const soVideos = itens.filter((i) => i.tipo !== "galeria");
  $("#stats").innerHTML = `<div class="stat"><b>${soVideos.length}</b><span>videos in this portfolio</span></div><div class="stat"><b>${new Set(soVideos.map((i) => i.cat)).size}</b><span>video styles</span></div>`;

  $("#tabs").innerHTML = CATS.filter((c) => c.id === "all" || usadas.has(c.id))
    .map((c) => `<button class="tab${c.id === atual ? " is-on" : ""}" data-cat="${c.id}">${c.nome}</button>`).join("");
  $("#tabs").addEventListener("click", (e) => {
    const b = e.target.closest(".tab"); if (!b) return;
    atual = b.dataset.cat;
    document.querySelectorAll(".tab").forEach((t) => t.classList.toggle("is-on", t === b));
    render();
  });

  function render() {
    lista = itens.filter((i) => atual === "all" || i.cat === atual);
    $("#grid").innerHTML = lista.map((it, n) => {
      const largo = it.tipo === "youtube" || it.tipo === "galeria" || !it.vertical;
      return `<button class="card${largo ? " card--wide" : ""}" data-n="${n}">
        <img class="card__img" src="${esc(thumb(it))}" alt="${esc(it.titulo)}" loading="lazy">
        ${it.tipo === "galeria" ? "" : `<span class="card__play"></span>`}
        <span class="card__info"><b>${esc(it.titulo)}</b><span>${esc(nomeCat(it.cat))}</span></span>
      </button>`;
    }).join("");
  }

  function frame(it) {
    if (it.tipo === "galeria")
      return `<div class="modal__gallery">${it.imagens.map((s, i) => `<img src="${esc(s)}" alt="${esc(it.titulo)} · page ${i + 1}" loading="lazy">`).join("")}</div>`;
    if (it.tipo === "youtube")
      return `<div class="modal__frame"><iframe src="https://www.youtube.com/embed/${esc(it.id)}?autoplay=1&rel=0&playsinline=1" allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowfullscreen title="${esc(it.titulo)}"></iframe></div>`;
    return `<div class="modal__frame${it.vertical ? " modal__frame--v" : ""}"><video src="${esc(it.src)}" poster="${esc(it.poster)}" controls autoplay playsinline></video></div>`;
  }
  function abrir(n) {
    pos = (n + lista.length) % lista.length;
    $("#modal-body").innerHTML = frame(lista[pos]);
    $("#count").textContent = `${pos + 1} / ${lista.length}`;
    $("#modal").classList.add("is-open");
  }
  function fechar() { $("#modal").classList.remove("is-open"); $("#modal-body").innerHTML = ""; }

  $("#grid").addEventListener("click", (e) => { const c = e.target.closest(".card"); if (c) abrir(+c.dataset.n); });
  $("#prev").addEventListener("click", () => abrir(pos - 1));
  $("#next").addEventListener("click", () => abrir(pos + 1));
  $("#modal").addEventListener("click", (e) => { if (e.target.id === "modal" || e.target.closest(".modal__close")) fechar(); });
  document.addEventListener("keydown", (e) => {
    if (!$("#modal").classList.contains("is-open")) return;
    if (e.key === "Escape") fechar();
    if (e.key === "ArrowRight") abrir(pos + 1);
    if (e.key === "ArrowLeft") abrir(pos - 1);
  });

  render();
})();
