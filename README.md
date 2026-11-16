# Portfolio · Sara Ardila

Web portfolio "De la cámara al código". Hecha con [Astro](https://astro.build): HTML y CSS estáticos, sin frameworks de JavaScript.

## Arrancar en local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera la web en dist/
```

Necesitas Node 22 o superior.

## Dónde se cambia cada cosa

| Quiero cambiar... | Archivo |
|---|---|
| Textos, stack, roadmap o capturas de un proyecto | `src/data/projects.ts` |
| Añadir una app nueva | Un bloque nuevo en `src/data/projects.ts` (su página se crea sola) |
| Colores y tipografías | Variables al principio de `src/styles/global.css` |
| Textos de la home | `src/pages/index.astro` |
| Cabecera, pie y metadatos | `src/layouts/Base.astro` |

## Añadir capturas

1. Guarda las imágenes en `public/capturas/` (formato vertical, proporción 1:2 aprox.).
2. En `src/data/projects.ts`, pon la ruta en `cover` (captura principal) y en `src` de cada `shots`:

```ts
cover: '/capturas/booknook-home.png',
shots: [{ caption: 'biblioteca', src: '/capturas/booknook-biblioteca.png' }],
```

Mientras una captura no tenga ruta, el móvil muestra "revelándose…".

## Pendiente

- [ ] Capturas de BookNook y Habit Tracker
- [ ] Tercera tarjeta de BookNook: una decisión técnica y por qué (está comentada en `projects.ts`)
- [ ] Foto o captura para el hero de la home (usa el `cover` de BookNook)

## Publicar en GitHub Pages

La web vive en https://saraardila.github.io/portfolio-sara-ardila/

1. En el repo: Settings → Pages → Source → **GitHub Actions**.
2. Cada push a `main` publica la web sola (`.github/workflows/deploy.yml`). El progreso se ve en la pestaña **Actions**.

Si renombras el repo, cambia `base` en `astro.config.mjs` por el nuevo nombre.
