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
    nombre: "1. El joven caminante (Protagonista)",
    img: "Joven.jpg",
    descripcion: "El joven comunario que recorre los cerros y a quien le arrebatan su ajayu (alma/fuerza vital"
  },
  {
    nombre: "2. La entidad oscura / Sombra espectral",
    img: "Alma.jpg",
    descripcion: "Describe brevemente quién es este personaje y qué papel cumple en la historia."
  },
  {
    nombre: "3. El Yatiri (Sabio / Curandero andino)",
    img: "yatiri.jpg",
    descripcion: "El anciano sabio que realiza el ritual con el fuego y el sahumerio para guiar el rescate del ajayu."
  },
   {
    nombre: "4. El perro guía / fiel compañero",
    img: "can.jpg",
    descripcion: "El perro que recibe el rastro a través del humo sagrado, toma la prenda del joven y corre por las montañas guiando al sabio hasta donde yace el cuerpo"
  }
];

const DIAGRAMAS = [
  {
    titulo: "1. Diagrama de Casos de Uso",
    img: "dg_casosdeuso.svg",
    descripcion: "Joven Caminante: Es la víctima central a quien la Entidad Oscura le arrebata el ajayu (fuerza vital) Al final, es rescatado gracias al ritual.   Entidad Oscura  Sombra: Actúa como el antagonista que intercepta al joven en las alturas y apaga su cuerpo.  Yatiri (Sabio): Detecta la pérdida del ajayu, advierte el límite de tiempo y conduce el ritual de sahumerio en la choza. Perro Guía: Recibe el rastro aromático del humo sagrado, toma la prenda y guía al sabio por el camino de la montaña hasta dar con el cuerpo."
  },
  {
    titulo: "2. Diagrama de Actividades (Flujo de la Historia)",
    img: "actividades.png",
    descripcion: "Fase de Incidente: Comienza con la caminata apacible del joven que se ve interrumpida por el ataque de la sombra espectral, la cual lo despoja de su energía vital.  Fase de Alerta: El joven llega desorientado a la refugio del yatiri, quien establece la condición crítica y el tiempo límite (12 horas).  Fase de Resolución (Ritual y Acción): Mediante el fuego y el humo, el sabio transfiere el rastro al perro fiel. Este corre raudamente por la puna sorteando la tormenta hasta ubicar el cuerpo, permitiendo que el yatiri complete el ritual de sanación y el protagonista recupere su alma."
  },
   {
    titulo: "3. Diagrama de Secuencia (Flujo de la Historia)",
    img: "dgsecuencia.svg",
    descripcion: "Captura en el Borde (Edge Computing): El proceso inicia cuando los dispositivos periféricos (como sensores biométricos o relojes inteligentes) capturan las constantes vitales del paciente en campo y las envían a una pasarela local o tablet (Gateway) que actúa como buffer de datos. Transmisión de Paquetes: La tablet empaqueta la información junto con el token de identidad del usuario y las coordenadas geográficas, enviándola a través de la infraestructura de red hacia el servidor central en la nube. Procesamiento y Gestión de Base de Datos: El servidor central procesa la información consultando el estado y los umbrales clínicos almacenados en la base de datos para evaluar la salud del sistema. Mecanismo de Respuesta Condicional: El sistema evalúa dos escenarios: Si detecta una anomalía o riesgo: Envía una alerta de emergencia preventiva de vuelta a la tablet para mitigar la emergencia antes de que ocurra un incidente crítico. Si todo es normal: Devuelve una confirmación de sincronización (ACK), manteniendo el sistema en un estado operativo equilibrado."
  },
   {
    titulo: "4. Diagrama de Actividades (Visto desde ingenieria de sistemas)",
    img: "dgacti.svg",
    descripcion: "Estado Operativo: El sistema funciona con normalidad y estabilidad total. Falla Crítica (Host Crash): Una perturbación externa interrumpe el nodo principal, aislando al sistema y activando de inmediato un Nodo de Contingencia (Buffer) con un tiempo límite de vida (TTL). Procesamiento y Compensación: El buffer transporta los datos e identidad hacia el procesador central (Yatiri), el cual ejecuta el protocolo de recuperación. Restauración: Se validan las entradas para mitigar la perturbación, devolviendo el sistema al estado operativo inicial (equilibrio restaurado)."
  }
];

const STORYBOARD = [
  {
    escena: "Escena 1",
    img: "escena1.jpeg",
    descripcion: "Tipo de plano: Plano general panorámico $\rightarrow$ Plano medio lateral en movimiento.Descripción visual: * Vista de los Andes con terrazas de cultivo al atardecer.Un joven con poncho andino, chullo y sombrero camina por un sendero de montaña.Audio / Diálogo: * Música andina mística de fondo.Voz en off: En las alturas del cerro Cayani, el hombre convive con diversas fuerzas y misterios ancestrales..."
  },
  {
    escena: "Escena 2",
    img: "escena2.jpeg",
    descripcion: "Tipo de plano: Plano medio $\rightarrow$ Primer plano $\rightarrow$ Plano general corto.Descripción visual: * Una sombra espectral oscura con ojos brillantes desciende sobre el joven.El joven cae al suelo asustado mientras el ente extrae una silueta luminosa (su ajayu) de su pecho.Audio / Diálogo: * Voz en off: Una presencia oscura apagando su cuerpo...Sonido de viento y tensión espectral."
  },
  {
    escena: "Escena 3",
    img: "escena3.jpeg",
    descripcion: "Tipo de plano: Plano entero $\rightarrow$ Plano detalle.Descripción visual: * El joven llega débil y descalzo a la choza de un sabio/yatiri andino.El yatiri prepara un brasero central, colocando ofrendas sobre las brasas mientras el perro observa echado.Audio / Diálogo: * Yatiri: Has perdido el ajayu, tu cuerpo no resistirá. Tienes doce horas para hallar tu prenda y guiarme..."
  },
   {
    escena: "Escena 4",
    img: "escena4.jpeg",
    descripcion: "Tipo de plano: Primer plano $\rightarrow$ Plano detalle del animal.Descripción visual: * El sabio sopla el humo aromático del incienso/sahumerio.El humo viaja en espirales hacia el hocico del perro, quien lo huele con atención, se levanta y toma el poncho del joven con el hocico.Audio / Diálogo: * Sonido de respiración, viento ritual y chasquido de brasas."
  },
   {
    escena: "Escena 5",
    img: "escena5.jpeg",
    descripcion: "Tipo de plano: Plano general en traveling lateral. Descripción visual: El perro corre velozmente por las laderas andinas cargando el poncho rojo en su hocico, cruzando arroyos bajo un cielo tormentoso. Audio / Diálogo: * Canto / Narración ritual: Corre, sin palabras, con la prenda en el rastro guía al sabio a las coordenadas del pacto..."
  },
   {
    escena: "Escena 6",
    img: "escena6.jpeg",
    descripcion: "Tipo de plano: Plano entero $\rightarrow$ Primer plano $\rightarrow$ Plano general final.Descripción visual: * El sabio y el perro encuentran el cuerpo del joven en la montaña; el yatiri realiza el ritual junto a la fogata y le coloca la prenda.El joven abre los ojos, acaricia al perro agradecido y se sienta recuperado junto al fuego con las montañas de fondo.Audio / Diálogo: * Voz en off / Yatiri: Corre que la luz no se apague... El ajayu ha regresado.Música de resolución andina y calma."
  },
   {
    escena: "Escena 7",
    img: "es1.jpeg",
    descripcion: "El Nodo Principal y la Perturbación (Host Crash) Visual: Un hombre camina por los senderos de Cerro Kallani con su poncho y sombrero tradicional. De repente, una entidad oscura lo intercepta, provocando una caída con un mensaje de error crítico en pantalla (HOST CRASH / ERROR 500). Concepto: Representa la falla crítica o interrupción imprevista de un nodo principal dentro de una red distribuida."
  },
   {
    escena: "Escena 8",
    img: "cany.jpeg",
    descripcion: "El Nodo de Contingencia (Buffer Canino) Visual: Un perro toma una prenda (poncho) y corre velozmente por el terreno montañoso con un temporizador activo (TTL: 12:00:00), cruzando caminos hacia su destino. Concepto: Simula un mecanismo de respaldo (fallback/buffer) y un nodo de contingencia temporal encargado de transportar paquetes de datos/identidad antes de que expire el tiempo de vida (TTL)."
  },
   {
    escena: "Escena 9",
    img: "es3.jpeg",
    descripcion: "El Procesador y la Compensación (Mesa Ritual) Visual: Un sabio (Yatiri) junto a una fogata actúa como el procesador central. El perro llega y entrega el token. Se despliega un diagrama interactivo de compensación que procesa las entradas, mitiga la perturbación y restaura el estado operativo al 100%. Concepto: Ilustra la ejecución de un protocolo de recuperación ante desastres (Disaster Recovery), validación de tokens y restauración de la homeostasis del sistema."
  },
   {
    escena: "Escena 10",
    img: "es4.jpeg",
    descripcion: "Storyboard: Plano Principal: Un joven observa fijamente una interfaz holográfica flotante llamada Cerro Kartoogragly, que proyecta un modelo 3D del terreno montañoso. Efectos Visuales: Sobre el mapa tridimensional se encienden alertas parpadeantes de color rojo y amarillo que señalan puntos críticos de latencia y zonas de riesgo de desconexión territorial. Plano de Detalle: Se aprecian métricas numéricas exactas en pantalla (ej. tiempos de respuesta mayores a 10 u 110 horas, demoras críticas por falta de geolocalización)."
  },
   {
    escena: "Escena 11",
    img: "cany.jpeg",
    descripcion: "Plano Inicial: Primer plano del personaje sonriendo en el altiplano, exhalando vapor debido al frío. Transición Tecnológica: Un plano medio muestra una tablet interactiva donde se manipulan datos biométricos y constantes vitales en tiempo real. Plano Amplio: El personaje sostiene la tablet frente a un poblado andino equipado con torres de comunicación y celdas solares, mostrando la integración de la tecnología en la comunidad. Plano Final: Atardecer sobre las montañas nevadas; el personaje y su fiel perro observan el horizonte pacíficamente, seguido de los créditos y el cierre (Fin)."
  }
];
const HERO_JOURNEY = [
  {
    titulo: "Mundo ordinario",
    descripcion: "Un joven comunario transcurre su vida cotidiana conviviendo con los misterios ancestrales de las alturas y las terrazas de cultivo en el cerro de la región andina."
  },
  {
    titulo: "Llamado a la aventura",
    descripcion: "Una presencia espectral oscura (el $\tilde{N}anqha$ o sombra) ataca de imprevisto al caminante y le arrebata su energía vital (el ajayu), dejándolo al borde del colapso físico."
  },
  {
    titulo: "Encuentro con el Mentor y la Ayuda Sobrenatural:",
    descripcion: "El joven logra llegar débil hasta la choza del Yatiri (el sabio andino). El anciano examina la situación y le otorga un ultimátum temporal crucial (doce horas), preparando un ritual con brasas, ofrendas y sahumerio."
  },
  {
    titulo: "El Cruce del Umbral:",
    descripcion: "Mediante el humo sagrado del ritual, el rastro del joven es transferido al perro fiel. El animal toma la prenda sagrada (el poncho) en el hocico y cruza el umbral de la puerta hacia el exterior para iniciar la búsqueda en la puna hostil."
  },
  {
    titulo: "Pruebas, Aliados y Enemigos:",
    descripcion: "El perro atraviesa condiciones adversas, tormentas con nubarrones oscuros, senderos empinados y riachuelos bajo la lluvia, guiado únicamente por el rastro de la prenda y su instinto leal."
  },
   {
    titulo: "La Recompensa (El Éxito de la Misión):",
    descripcion: "Siguiendo las coordenadas del pacto ancestral, el perro guía al Yatiri hasta donde yace el cuerpo inerte del joven en la montaña. El sabio aplica el ritual y la prenda para restablecer la conexión."
  },
{
    titulo: "El Retorno con el Elixir (Restauración):",
    descripcion: "El ajayu regresa a su dueño. El joven despierta reconfortado junto al fuego y su fiel compañero, habiendo superado la prueba límite y restaurado el equilibrio espiritual de su ser."
  }
];
const AI_TOOLS = [
  {
    nombre: "Claude (Anthropic)",
    etiqueta: "Página web",
    uso: "Usado para diseñar y programar esta página de presentación: la estructura, los estilos y las animaciones."
  },
  {
    nombre: "Gemini (Google)",
    etiqueta: "Guion · Storyboard · Video",
    uso: "Storyboard por lapsos de 10 segundos: Estructuración cronológica de la narrativa visual, dividida en bloques temporales precisos con sus respectivos planos y diálogos en off de la leyenda andina.  Diseño y descripción de personajes: Conceptualización de los cuatro actores principales de la historia: el Joven Caminante, la Entidad Oscura (Sombra), el Yatiri (Sabio) y el Perro Guía.  Diagramas de software (Casos de Uso y Actividades): Modelado estructurado del flujo de la historia y las interacciones de los personajes, incluyendo sus descripciones y el código fuente listo para PlantUML. Aplicación del Camino del Héroe: Adaptación resumida del monomito clásico aplicado a las etapas del rescate del ajayu (mundo ordinario, llamada, mentor, cruce del umbral, pruebas, recompensa y retorno)."
  }
];
/* ========================================================================= */

document.addEventListener("DOMContentLoaded", () => {
  buildChakana();
  renderPersonajes();
  renderDiagramas();
  renderStoryboard();
  renderHeroJourney();
  renderAITools();
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
function renderHeroJourney(){
  const el = document.getElementById("heroJourneyTimeline");
  if (!el) return;
  HERO_JOURNEY.forEach((etapa, idx) => {
    const item = document.createElement("div");
    item.className = "timeline__item reveal";
    item.innerHTML = `
      <span class="timeline__num">${String(idx + 1).padStart(2, "0")}</span>
      <h3 class="timeline__title">${etapa.titulo}</h3>
      <p class="timeline__desc">${etapa.descripcion}</p>`;
    el.appendChild(item);
  });
  setupReveal(el.querySelectorAll(".reveal"));
}
function renderAITools(){
  const grid = document.getElementById("aiToolsGrid");
  if (!grid) return;
  AI_TOOLS.forEach(tool => {
    const card = document.createElement("div");
    card.className = "tool-card reveal";
    card.innerHTML = `
      <span class="tool-card__tag">${tool.etiqueta}</span>
      <h3 class="tool-card__name">${tool.nombre}</h3>
      <p class="tool-card__use">${tool.uso}</p>`;
    grid.appendChild(card);
  });
  setupReveal(grid.querySelectorAll(".reveal"));
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
