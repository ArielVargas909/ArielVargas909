# Historia Andina — sitio de presentación

Sitio de una sola página para presentar el trabajo de un video de una historia andina:
video, personajes, diagramas y guion/storyboard. Está hecho en HTML, CSS y JavaScript
puro, sin frameworks ni pasos de instalación, listo para publicarse en GitHub Pages.

## Estructura

```
index.html          → estructura de la página
css/style.css        → todos los estilos y animaciones
js/script.js         → contenido editable + interacciones (chakana, tarjetas, lightbox)
images/
  video/             → aquí va tu archivo de video
  personajes/        → fotos o dibujos de los personajes
  diagramas/          → imágenes de tus diagramas
  storyboard/         → cuadros del storyboard
```

## Cómo poner tu contenido

### 1. Video de la historia
Copia tu archivo de video (por ejemplo `historia.mp4`) dentro de `images/video/`.
Abre `index.html`, busca la etiqueta `<source src="images/video/historia.mp4" ...>`
y cambia el nombre del archivo si usaste otro. Si prefieres subir el video a YouTube
o Vimeo en lugar de alojarlo tú mismo, reemplaza la etiqueta `<video>` completa por
el código `<iframe>` que te da esa plataforma.

Justo debajo hay un botón desplegable para pegar la historia original en texto:
edita el párrafo de ejemplo dentro de `<div id="storyText">` en `index.html`.

### 2. Personajes, diagramas y storyboard
Todo el contenido de estas tres secciones se edita en un solo lugar:
el inicio de `js/script.js`, en los arreglos `PERSONAJES`, `DIAGRAMAS` y `STORYBOARD`.

Por ejemplo, para añadir un personaje:

```js
{
  nombre: "Manco Cápac",
  img: "images/personajes/manco-capac.jpg",
  descripcion: "Fundador legendario del Imperio inca."
}
```

Guarda tu imagen en la carpeta correspondiente dentro de `images/` y escribe la
misma ruta en `img`. Puedes agregar tantos elementos como quieras a cada arreglo:
las tarjetas y los cuadros del storyboard se generan automáticamente. Si una imagen
todavía no existe, la página muestra un marcador de posición en su lugar, así que
puedes ir probando el diseño antes de tener todo el material listo.

## Cómo publicarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub (o usa uno existente).
2. Sube el contenido de esta carpeta a la raíz del repositorio.
3. Entra a **Settings → Pages** del repositorio.
4. En "Source", selecciona la rama `main` y la carpeta `/ (root)`.
5. Guarda. En un par de minutos tu sitio estará disponible en
   `https://tu-usuario.github.io/nombre-del-repositorio/`.

Si el repositorio se llama `tu-usuario.github.io`, el sitio quedará directamente
en `https://tu-usuario.github.io/`.

## Notas de diseño

- El menú del inicio tiene forma de cruz escalonada, inspirada en la iconografía
  andina de las cuatro regiones (Tahuantinsuyu): cada uno de sus cuatro brazos
  lleva a una sección y se "teje" con una animación al cargar la página.
- Los divisores de color entre secciones imitan una franja textil (aguayo).
- Los colores están inspirados en tintes naturales andinos: oro, cochinilla (rojo),
  turquesa y arcilla.
