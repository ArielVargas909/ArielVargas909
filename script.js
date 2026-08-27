/* =========================================================================
   CONTENIDO EDITABLE
   Cambia los datos de estos arreglos por tus imágenes, nombres y textos.
   Las imágenes van dentro de la carpeta /images/ (personajes, diagramas,
   storyboard). Si dejas "img" vacío o la ruta no existe, se mostrará un
   marcador de posición en su lugar, así que puedes ir probando el diseño
   antes de tener todas las imágenes listas.
   ========================================================================= */

const PERSONAJES = [
  {
    nombre: "Nombre del personaje 1",
    img: "Alma.jpg",
    descripcion: "Describe brevemente quién es este personaje y qué papel cumple en la historia."
  },
  {
    nombre: "2. La entidad oscura / Sombra espectral",
    img: "images/personajes/personaje-2.jpg",
    descripcion: "Describe brevemente quién es este personaje y qué papel cumple en la historia."
  },
  {
    nombre: "Nombre del personaje 3",
    img: "Alma.jpg",
    descripcion: "El espíritu oscuro de las montañas que sorprende al joven y le roba el alma."
  }
];

const DIAGRAMAS = [
  {
    titulo: "Nombre del diagrama 1",
    img: "images/diagramas/diagrama-1.jpg",
    descripcion: "Explica qué muestra este diagrama y cómo se relaciona con la historia."
  },
  {
    titulo: "Nombre del diagrama 2",
    img: "images/diagramas/diagrama-2.jpg",
    descripcion: "Explica qué muestra este diagrama y cómo se relaciona con la historia."
  }
];

const STORYBOARD = [
  {
    escena: "Escena 1",
    img: "images/storyboard/escena-1.jpg",
    descripcion: "Qué ocurre en este cuadro del guion."
  },
  {
    escena: "Escena 2",
    img: "images/storyboard/escena-2.jpg",
    descripcion: "Qué ocurre en este cuadro del guion."
  },
  {
    escena: "Escena 3",
    img: "images/storyboard/escena-3.jpg",
    descripcion: "Qué ocurre en este cuadro del guion."
  },
  {
    escena: "Escena 4",
    img: "images/storyboard/escena-4.jpg",
    descripcion: "Qué ocurre en este cuadro del guion."
  }
];

/* ========================================================================= */

document.addEventListener("DOMContentLoaded", () => {
  buildChakana();
  renderPersonajes();
  renderDiagramas();
  renderStoryboard();
  setupNav();
  setupStoryToggle();
  setupReveal();
  setupLightbox();
});

/* --------------------------- CRUZ ANDINA (chakana) ---------------------- */
function buildChakana(){
  const svg = document.getElementById("chakanaSvg");
  if(!svg) return;

  const matrix = [
    "000111000",
    "001111100",
    "011111110",
    "111101111",
    "111000111",
    "111101111",
    "011111110",
    "001111100",
    "000111000"
  ];

  const cell = 20, pad = 20, gap = 2;
  const cells = [];

  matrix.forEach((rowStr, i) => {
    rowStr.split("").forEach((val, j) => {
      if (val !== "1") return;
      let arm = null;
      if (i <= 2) arm = "video";
      else if (i >= 6) arm = "diagramas";
      else if (j <= 3) arm = "guion";
      else if (j >= 5) arm = "personajes";
      const ring = Math.max(Math.abs(i - 4), Math.abs(j - 4));
      cells.push({ i, j, arm, ring });
    });
  });

  cells.sort((a, b) => a.ring - b.ring);

  cells.forEach((c, idx) => {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", c.j * cell + pad + gap / 2);
    rect.setAttribute("y", c.i * cell + pad + gap / 2);
    rect.setAttribute("width", cell - gap);
    rect.setAttribute("height", cell - gap);
    if (c.arm) rect.classList.add("is-" + c.arm);
    rect.style.opacity = "0";
    rect.style.transform = "scale(0.2)";
    rect.style.transition = `opacity 0.4s ease ${idx * 16}ms, transform 0.5s cubic-bezier(.22,.61,.36,1) ${idx * 16}ms`;

    if (c.arm) {
      rect.style.cursor = "pointer";
      rect.addEventListener("click", () => {
        const target = document.getElementById(c.arm);
        if (target) target.scrollIntoView({ behavior: "smooth" });
      });
      rect.addEventListener("mouseenter", () => highlightArm(c.arm, true));
      rect.addEventListener("mouseleave", () => highlightArm(c.arm, false));
    }
    svg.appendChild(rect);
  });

  requestAnimationFrame(() => {
    cells.forEach((c, idx) => {
      const rect = svg.children[idx];
      rect.style.opacity = c.arm ? "0.92" : "0.35";
      rect.style.transform = "scale(1)";
    });
  });
}

function highlightArm(arm, on){
  document.querySelectorAll(`.chakana .is-${arm}`).forEach(r => {
    r.style.transform = on ? "scale(1.16)" : "scale(1)";
  });
  const label = document.querySelector(`.chakana-label[data-arm="${arm}"]`);
  if (label) label.style.transform += "";
}

/* reveal labels around the chakana shortly after it starts weaving */
window.addEventListener("load", () => {
  document.querySelectorAll(".chakana-label").forEach((el, idx) => {
    setTimeout(() => { el.style.opacity = "1"; }, 600 + idx * 120);
  });
});

/* --------------------------------- GRIDS --------------------------------- */
const ACCENTS = ["gold", "turquoise", "red", "clay"];

function renderPersonajes(){
  const grid = document.getElementById("personajesGrid");
  if (!grid) return;
  PERSONAJES.forEach((p, idx) => {
    const accent = ACCENTS[idx % ACCENTS.length];
    const card = document.createElement("div");
    card.className = "card reveal";
    card.dataset.accent = accent;
    card.innerHTML = `
      <div class="card__media">
        <img src="${p.img}" alt="${p.nombre}" loading="lazy"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="card__media-placeholder" style="display:none;">Coloca aquí la imagen de ${p.nombre}</div>
      </div>
      <div class="card__body">
        <h3 class="card__name">${p.nombre}</h3>
        <p class="card__desc">${p.descripcion}</p>
      </div>`;
    card.addEventListener("click", () => openLightbox(p.img, `${p.nombre} — ${p.descripcion}`));
    grid.appendChild(card);
  });
  triggerImgFallbackCheck(grid);
}

function renderDiagramas(){
  const grid = document.getElementById("diagramasGrid");
  if (!grid) return;
  DIAGRAMAS.forEach((d, idx) => {
    const accent = ACCENTS[(idx + 1) % ACCENTS.length];
    const card = document.createElement("div");
    card.className = "card reveal";
    card.dataset.accent = accent;
    card.innerHTML = `
      <div class="card__media">
        <img src="${d.img}" alt="${d.titulo}" loading="lazy"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="card__media-placeholder" style="display:none;">Coloca aquí la imagen de ${d.titulo}</div>
      </div>
      <div class="card__body">
        <h3 class="card__name">${d.titulo}</h3>
        <p class="card__desc">${d.descripcion}</p>
      </div>`;
    card.addEventListener("click", () => openLightbox(d.img, `${d.titulo} — ${d.descripcion}`));
    grid.appendChild(card);
  });
  triggerImgFallbackCheck(grid);
}

function renderStoryboard(){
  const track = document.getElementById("storyboardTrack");
  if (!track) return;
  STORYBOARD.forEach((s, idx) => {
    const panel = document.createElement("div");
    panel.className = "filmstrip__panel";
    panel.innerHTML = `
      <span class="filmstrip__num">${String(idx + 1).padStart(2, "0")} / ${String(STORYBOARD.length).padStart(2, "0")}</span>
      <div class="filmstrip__frame">
        <img src="${s.img}" alt="${s.escena}" loading="lazy"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="filmstrip__frame-placeholder" style="display:none;">Coloca aquí la imagen de ${s.escena}</div>
      </div>
      <p class="filmstrip__caption"><strong>${s.escena}.</strong> ${s.descripcion}</p>`;
    panel.querySelector(".filmstrip__frame").addEventListener("click", () => openLightbox(s.img, `${s.escena} — ${s.descripcion}`));
    track.appendChild(panel);
  });
  triggerImgFallbackCheck(track);
}

/* asegura que los marcadores de imagen rota se muestren aunque el navegador
   dispare "error" antes de que el listener quede registrado */
function triggerImgFallbackCheck(container){
  container.querySelectorAll("img").forEach(img => {
    if (img.complete && img.naturalWidth === 0) {
      img.style.display = "none";
      const ph = img.nextElementSibling;
      if (ph) ph.style.display = "flex";
    }
  });
}

/* --------------------------------- NAV ----------------------------------- */
function setupNav(){
  const nav = document.getElementById("topnav");
  const toggle = document.getElementById("navToggle");
  const links = document.querySelector(".topnav__links");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("is-visible", window.scrollY > window.innerHeight * 0.7);
  });

  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  const sections = document.querySelectorAll("main, section[id]");
  const navLinks = document.querySelectorAll(".topnav__links a");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.toggle("is-active", l.getAttribute("href") === "#" + entry.target.id));
      }
    });
  }, { rootMargin: "-45% 0px -45% 0px" });

  document.querySelectorAll("section[id]").forEach(s => observer.observe(s));
}

/* -------------------------- ACORDEÓN HISTORIA ORIGINAL -------------------- */
function setupStoryToggle(){
  const btn = document.getElementById("storyToggle");
  const panel = document.getElementById("storyText");
  if (!btn || !panel) return;
  btn.addEventListener("click", () => {
    const open = panel.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(open));
    btn.querySelector("span").textContent = open
      ? "Ocultar la historia original"
      : "Leer la historia original en texto";
  });
}

/* ------------------------------ SCROLL REVEAL ------------------------------ */
function setupReveal(){
  const targets = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  targets.forEach(t => observer.observe(t));
}

/* --------------------------------- LIGHTBOX -------------------------------- */
function setupLightbox(){
  const box = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  const caption = document.getElementById("lightboxCaption");
  const closeBtn = document.getElementById("lightboxClose");

  window._closeLightbox = () => {
    box.classList.remove("is-open");
    box.setAttribute("aria-hidden", "true");
  };

  closeBtn.addEventListener("click", window._closeLightbox);
  box.addEventListener("click", (e) => { if (e.target === box) window._closeLightbox(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") window._closeLightbox(); });

  window._openLightboxRefs = { box, img, caption };
}

function openLightbox(src, captionText){
  const refs = window._openLightboxRefs;
  if (!refs) return;
  refs.img.src = src;
  refs.img.alt = captionText;
  refs.caption.textContent = captionText;
  refs.box.classList.add("is-open");
  refs.box.setAttribute("aria-hidden", "false");
}
