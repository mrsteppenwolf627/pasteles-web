# ANTIGRAVITY CONTEXT — pasteles-web
_Última actualización: 2026-04-10_
_Metodología: Antigravity Dual-Orchestration (Claude Code backend/lógica + Gemini CLI frontend/templates)_

## Stack
- Framework: Astro (SSG)
- CMS: Sanity (dataset: global, projectId: y7m52g15)
- Hosting: Vercel
- Estilos: Tailwind CSS
- Componentes React: sí (islands)
- Dominio: https://www.xn--manolipastelesdepaales-1ec.com (Punycode de manolipastelesdepañales.com)

## Estructura de archivos clave
- src/layouts/Layout.astro → head global, canonical, OG, GA, schemas
- src/pages/ → rutas estáticas
- src/pages/sitemap.xml.js → OBSOLETO, pendiente eliminar
- src/pages/productos/[slug].astro → páginas dinámicas de producto desde Sanity
- src/pages/preguntas-frecuentes.astro → FAQ page
- src/pages/aviso-legal.astro → legal, debe tener noindex
- src/pages/privacidad.astro → legal, debe tener noindex
- public/ → assets estáticos

## Estado actual del proyecto
Auditoría SEO+GEO completada el 2026-04-10.
Se están aplicando mejoras en el siguiente orden de bloques.

## Bloque 1 — COMPLETADO: [Layout.astro, sitemap.xml.js (eliminado), aviso-legal.astro, privacidad.astro]
## Bloque 2 — COMPLETADO: [index.astro, preguntas-frecuentes.astro]
## Bloque 3 — COMPLETADO: [productos/[slug].astro]
## Bloque 4 — COMPLETADO: [public/og-default.jpg, index.astro (title/desc)]
## Bloque 5 — COMPLETADO: [public/og-default.jpg, Layout.astro (og fallback), index.astro (H1)]
## Bloque 6 — COMPLETADO: [blog/que-incluye-una-tarta-de-panales-artesanal-guia-2026.md, blog/que-incluye-una-tarta-de-panales-artesanal-guia-2026.json]
## Bloque 7 — COMPLETADO: [entrega-hospitales.astro]
## Bloque 8 — COMPLETADO: [blog/como-elegir-tarta-de-panales.md, blog/como-elegir-tarta-de-panales.json, blog/regalos-originales-recien-nacidos.md, blog/regalos-originales-recien-nacidos.json, blog/panales-dodot-recien-nacidos-tarta.md, blog/panales-dodot-recien-nacidos-tarta.json, blog/cestas-canastillas-bebes-diferencias.md, blog/cestas-canastillas-bebes-diferencias.json]

## Reglas de coordinación Antigravity
- Claude Code: lógica, schemas JSON-LD, props de componentes, rutas, config
- Gemini CLI: templates .astro, copy de páginas, HTML/Tailwind, textos SEO
- Ambos leen CONTEXT.md antes de cada sesión
- Al terminar un bloque, actualizar "COMPLETADO" con los archivos modificados
- Nunca modificar el mismo archivo en paralelo
- Si hay duda de ownership → Claude Code decide la estructura, Gemini ejecuta el template

## Decisiones de diseño tomadas
- El sitemap oficial es /sitemap-index.xml (generado por @astrojs/sitemap)
- El sitemap manual /sitemap.xml.js está OBSOLETO y debe eliminarse
- OG image fallback: /public/og-default.jpg (1200x630)
- Páginas noindex: aviso-legal, privacidad
- Price en schemas: numérico (30), no string ("Desde 30")
- Schema LocalBusiness debe ser único (fusionado con aggregateRating + review)