# 🔴 TAREA LOTE 1 - CLAUDE CODE: Correcciones Técnicas Críticas

**Estado:** 🔴 Pendiente
**Prioridad:** 🔴 CRÍTICA (Bloquea todo lo demás)
**Deadline:** HOY (27 de Marzo)
**Tiempo estimado:** 2-3 horas
**Bloqueador:** NO - Puedes empezar inmediatamente
**Dependencia:** Ninguna

---

## RESUMEN EJECUTIVO

El sitio www.manolipastelesdepañales.com tiene 5 problemas técnicos fundamentales que evitan que Google lo entienda correctamente. Esta tarea arreglará los 5. Sin esto, todas las optimizaciones posteriores de Gemini CLI tendrán poco impacto.

Esto es como limpiar los cimientos antes de construir. Sin esto, aunque Gemini CLI haga una fachada hermosa, Google seguirá sin entender qué vendes.

---

## TUS 5 RESPONSABILIDADES

No hay creatividad aquí. Solo sigue las instrucciones exactas para cada archivo.

### Responsabilidad 1: Meta Tags Básicos en `index.html`

**Archivo a crear:** `03_backend/index.html`

**Por qué es crítica:** Este archivo dice a Google información básica sobre tu sitio. Sin esto, Google no sabe qué codificación de caracteres usas, si es responsive, o cuál es tu descripción oficial.

**Contenido exacto que debe tener:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="index, follow">
    <meta name="description" content="Tartas de pañales y canastillas artesanales en Badalona. Entrega en mano y a domicilio en hospitales (Can Ruti, Quirón). El regalo perfecto para recién nacidos.">
    
    <!-- Open Graph para redes sociales -->
    <meta property="og:title" content="Pasteles de Pañales en Badalona y Barcelona | Entrega a Domicilio - Manoli">
    <meta property="og:description" content="Tartas de pañales y canastillas artesanales en Badalona. Entrega en mano a domicilio.">
    <meta property="og:image" content="https://www.manolipastelesdepañales.com/images/og-image.jpg">
    <meta property="og:url" content="https://www.manolipastelesdepañales.com/">
    <meta property="og:type" content="website">
    
    <!-- Canonical -->
    <link rel="canonical" href="https://www.manolipastelesdepañales.com/">
    
    <title>Pasteles de Pañales en Badalona y Barcelona | Entrega a Domicilio - Manoli</title>
</head>
<body>
    <!-- El contenido aquí será completado por Gemini CLI -->
</body>
</html>
```

**Validación:** Abre DevTools (F12) en tu navegador, ve a Elements, busca el `<head>` y verifica que TODOS estos meta tags estén presentes.

---

### Responsabilidad 2: Crear `robots.txt`

**Archivo a crear:** `03_backend/robots.txt`

**Por qué es crítica:** Google carga robots.txt PRIMERO antes de rastrear el sitio. Sin esto, Google podría rastrear carpetas innecesarias o gastar recursos en archivos que no quieres indexados.

**Contenido exacto:**

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /private/
Disallow: /*.pdf$
Disallow: /*.doc$

Sitemap: https://www.manolipastelesdepañales.com/sitemap.xml
```

**Explicación:**
- `User-agent: *` significa "para todos los buscadores"
- `Allow: /` significa "pueden acceder a todo"
- `Disallow: /admin/` significa "excepto la carpeta admin"
- La última línea dice dónde está el sitemap

**Validación:** Navega a `https://www.manolipastelesdepañales.com/robots.txt` en tu navegador. Deberías ver el contenido de texto sin errores.

---

### Responsabilidad 3: Crear `sitemap.xml`

**Archivo a crear:** `03_backend/sitemap.xml`

**Por qué es crítica:** El sitemap es como un mapa para Google. Sin esto, Google podría perderse y no descubrir todas tus páginas. Con una buena lista de URLs, Google las rastrea más eficientemente.

**Contenido exacto:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://www.manolipastelesdepañales.com/</loc>
        <lastmod>2026-03-27</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.manolipastelesdepañales.com/productos</loc>
        <lastmod>2026-03-27</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>https://www.manolipastelesdepañales.com/sobre-nosotros</loc>
        <lastmod>2026-03-27</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://www.manolipastelesdepañales.com/contacto</loc>
        <lastmod>2026-03-27</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://www.manolipastelesdepañales.com/blog</loc>
        <lastmod>2026-03-27</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
    </url>
</urlset>
```

**Explicación:**
- Cada `<url>` es una página que Google debe saber que existe
- `lastmod` es cuándo fue la última modificación (usa fecha de hoy)
- `changefreq` es con qué frecuencia se actualiza (weekly = semanalmente)
- `priority` es importancia relativa (1.0 es máxima, 0.7 es menor)

**Validación:** Navega a `https://www.manolipastelesdepañales.com/sitemap.xml`. Deberías ver XML válido sin errores de sintaxis.

---

### Responsabilidad 4: Crear LocalBusiness Schema

**Archivo a crear:** `03_backend/schemas/local-business.json`

**Por qué es CRÍTICA:** Este schema JSON-LD es el más importante para SEO local. Le dice a Google exactamente dónde estás, cómo contactarte, tus horarios, el área que sirves. Sin esto, Google no sabe que eres un negocio local en Badalona.

**ANTES de copiar el contenido:** Necesitas reemplazar estos placeholders con tu información real:
- `[TU_DIRECCION_ACTUAL]` → Tu dirección en Badalona (ej: "Calle Principal 123")
- `[TU_TELEFONOACTUAL]` → Tu teléfono (ej: "+34678846424")
- `[TUS_REDES_SOCIALES]` → URLs a tu Instagram, Facebook

**Contenido base (reemplaza placeholders):**

```json
{
  "@context": "https://schema.org/",
  "@type": "LocalBusiness",
  "name": "Manoli Pasteles de Pañales",
  "image": "https://www.manolipastelesdepañales.com/images/manoli-logo.jpg",
  "description": "Tartas y canastillas de pañales artesanales personalizadas para recién nacidos",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[TU_DIRECCION_ACTUAL]",
    "addressLocality": "Badalona",
    "addressRegion": "Barcelona",
    "postalCode": "08911",
    "addressCountry": "ES"
  },
  "telephone": "[TU_TELEFONO_ACTUAL]",
  "url": "https://www.manolipastelesdepañales.com",
  "sameAs": [
    "https://www.instagram.com/[TUS_REDES_SOCIALES]",
    "https://www.facebook.com/[TUS_REDES_SOCIALES]"
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Badalona"
    },
    {
      "@type": "City",
      "name": "Barcelona"
    },
    {
      "@type": "Administrative Area",
      "name": "Maresme"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "14:00"
    }
  ],
  "priceRange": "€€"
}
```

**Validación:** Ve a https://schema.org/validator/ y pega todo el contenido JSON. Debe validar sin errores.

---

### Responsabilidad 5: Crear Organization Schema

**Archivo a crear:** `03_backend/schemas/organization.json`

**Por qué es importante:** Complementa LocalBusiness con contexto corporativo adicional. Dice a Google quién eres como organización, tu historia, contacto.

**Contenido exacto (NO necesita reemplazos):**

```json
{
  "@context": "https://schema.org/",
  "@type": "Organization",
  "name": "Manoli Pasteles de Pañales",
  "url": "https://www.manolipastelesdepañales.com",
  "logo": "https://www.manolipastelesdepañales.com/images/logo.png",
  "description": "Pasteles y tartas de pañales artesanales personalizadas para recién nacidos en Badalona",
  "founder": {
    "@type": "Person",
    "name": "Manoli"
  },
  "foundingDate": "2020",
  "sameAs": [
    "https://www.instagram.com/manolipasteles",
    "https://www.facebook.com/manolipasteles"
  ],
  "contact": {
    "@type": "ContactPoint",
    "telephone": "+34678846424",
    "contactType": "Sales"
  }
}
```

**Validación:** Ve a https://schema.org/validator/ y pega el contenido. Debe validar sin errores.

---

## ESTRUCTURA DE CARPETAS DESPUÉS DE COMPLETAR

Después de crear estos 5 archivos, tu carpeta `03_backend/` debe verse así:

```
03_backend/
├── index.html
├── robots.txt
├── sitemap.xml
└── schemas/
    ├── local-business.json
    └── organization.json
```

Exactamente 5 archivos. Nada más.

---

## PASOS DE IMPLEMENTACIÓN

**Paso 1:** Crea la carpeta `schemas` dentro de `03_backend/`

**Paso 2:** Copia el contenido de `index.html` exactamente como se muestra arriba en el archivo `03_backend/index.html`

**Paso 3:** Copia el contenido de `robots.txt` exactamente en el archivo `03_backend/robots.txt`

**Paso 4:** Copia el contenido de `sitemap.xml` exactamente en el archivo `03_backend/sitemap.xml`

**Paso 5:** Crea `03_backend/schemas/local-business.json` Y REEMPLAZA los placeholders con tu información real

**Paso 6:** Crea `03_backend/schemas/organization.json` con el contenido exacto (sin cambios necesarios)

**Paso 7:** Valida cada archivo usando las herramientas especificadas arriba

**Paso 8:** Crea un archivo llamado `/02_tasks/by_agent/claude_code/lote01_completado.md` (ver sección de abajo)

---

## DOCUMENTO DE COMPLETACIÓN

Cuando termines esta tarea, crea el archivo `/02_tasks/by_agent/claude_code/lote01_completado.md` con este contenido EXACTO:

```markdown
# Lote 1 Completado - Claude Code ✅

## Tareas Completadas
- [x] Crear index.html con meta tags
- [x] Crear robots.txt
- [x] Crear sitemap.xml
- [x] Crear LocalBusiness schema
- [x] Crear Organization schema

## Archivos Creados
- 03_backend/index.html
- 03_backend/robots.txt
- 03_backend/sitemap.xml
- 03_backend/schemas/local-business.json
- 03_backend/schemas/organization.json

## Validación Completada
- [x] Meta tags presentes en index.html
- [x] robots.txt accesible y correcto
- [x] sitemap.xml es XML válido
- [x] LocalBusiness schema valida en schema.org/validator/
- [x] Organization schema valida en schema.org/validator/

## Para Gemini CLI
Los esquemas JSON-LD están listos en `03_backend/schemas/`. Ahora puedes empezar Lote 1 de tu lado:
1. Crear componente MetaTagProvider.jsx que consuma estas metaetiquetas
2. Crear hook useMeta.js
3. Crear archivo de constantes SEO

No hay bloqueadores. Puedes empezar inmediatamente.

## Próximos Pasos
Esperando confirmación de Gemini CLI de que Lote 1 de su lado está completo.
Después empezaremos Lote 2: Optimización de meta descriptions.
```

---

## CRITERIOS DE ACEPTACIÓN

Sabremos que completaste esta tarea cuando:

- [ ] Archivo `03_backend/index.html` existe y contiene todos los meta tags
- [ ] Archivo `03_backend/robots.txt` existe y es accesible
- [ ] Archivo `03_backend/sitemap.xml` existe y es XML válido
- [ ] Archivo `03_backend/schemas/local-business.json` existe y valida correctamente
- [ ] Archivo `03_backend/schemas/organization.json` existe y valida correctamente
- [ ] Tu información real (dirección, teléfono, redes) está en local-business.json
- [ ] Archivo `02_tasks/by_agent/claude_code/lote01_completado.md` existe con tu resumen

Si todas las casillas están marcadas, has completado Lote 1.

---

## NOTAS IMPORTANTES

Esta tarea es la **base técnica** de todo. Sin esto, Gemini CLI no tiene nada sobre qué construir. Google necesita esta información para entender que eres un negocio real, con ubicación real, en Badalona.

Aunque parezca "simple" (solo copiar archivos), cada línea de código impacta directamente cómo Google rastrea, indexa y rankea el sitio.

No hay atajos. No hay improvisaciones. Solo sigue exactamente lo especificado arriba.

---

## ¿PREGUNTAS?

Si algo no es claro:

1. Revisa `/02_tasks/by_agent/claude_code/PROMPT_MAESTRO_CC.md` (tu guía general)
2. Revisa `/01_audit/AUDITORIA_SEO.md` (contexto del problema)
3. Revisa `/02_tasks/SISTEMA_COORDINACION.md` (cómo trabajamos juntos)

Si después de leer estos tres documentos aún no entiendes algo, documéntalo en `/02_tasks/by_agent/claude_code/context.md` y Gemini CLI o el próximo ciclo pueden ayudarte.

---

## ¡A EMPEZAR!

**Tiempo estimado:** 2-3 horas

Abre tu editor ahora y crea el primer archivo: `03_backend/index.html`

**¡Adelante! 🚀**

