# 🎨 TAREA LOTE 1 - GEMINI CLI: Preparar Sistema de Componentes SEO

**Estado:** 🟡 En espera (Espera a Claude Code)
**Prioridad:** 🔴 CRÍTICA
**Deadline:** Después de que Claude Code complete su Lote 1
**Tiempo estimado:** 2-3 horas
**Bloqueador:** SÍ - Espera a que Claude Code cree `03_backend/schemas/`
**Dependencia:** Lote 1 de Claude Code (meta tags, robots.txt, sitemap, schemas)

---

## RESUMEN EJECUTIVO

Mientras Claude Code está creando la infraestructura técnica (meta tags, schemas, archivos), tu trabajo es preparar el lado React para que pueda CONSUMIR esa configuración dinámicamente. Piensa en esto como construir el "cableado eléctrico" que se conectará con la "caja de fusibles" que Claude Code está creando.

No es crear landing pages aún (eso es Lote 2). Es preparar los bloques de construcción que usarás en Lote 2.

---

## TUS 4 RESPONSABILIDADES

Tu trabajo es crear la infraestructura React que hará posible todo lo futuro. Sin esto, no puedes inyectar meta tags dinámicamente. Sin esto, cada página tendría que tener meta tags hardcodeados, lo cual es inmanejable.

### Responsabilidad 1: Crear Componente MetaTagProvider

**Archivo a crear:** `04_frontend/src/components/MetaTagProvider.jsx`

**Por qué es importante:** Este componente inyecta dinámicamente meta tags en el `<head>` de la página. Sin esto, tendrías que hardcodear meta tags en cada página HTML. Con esto, cambias meta tags desde configuración central.

**Contenido exacto:**

```jsx
// 04_frontend/src/components/MetaTagProvider.jsx
import { useEffect } from 'react';

/**
 * MetaTagProvider - Inyecta meta tags dinámicamente en el documento
 * 
 * Uso:
 * <MetaTagProvider
 *   title="Mi página"
 *   description="Descripción optimizada"
 *   image="url-imagen"
 *   canonical="https://..."
 * />
 * 
 * Este componente no renderiza nada visible, solo modifica el <head>
 */
export default function MetaTagProvider({ 
  title = "Pasteles de Pañales en Badalona | Manoli",
  description = "Tartas y canastillas artesanales para recién nacidos",
  image = "https://www.manolipastelesdepañales.com/og-image.jpg",
  canonical = "https://www.manolipastelesdepañales.com/",
  ogType = "website"
}) {
  useEffect(() => {
    // Actualizar title de la página
    document.title = title;

    // Actualizar meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;

    // Actualizar Open Graph tags
    const updateMetaTag = (property, content, isProperty = true) => {
      const attr = isProperty ? 'property' : 'name';
      let metaTag = document.querySelector(`meta[${attr}="${property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute(attr, property);
        document.head.appendChild(metaTag);
      }
      metaTag.content = content;
    };

    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', canonical, true);
    updateMetaTag('og:type', ogType, true);

    // Actualizar canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

  }, [title, description, image, canonical, ogType]);

  // Este componente no renderiza nada visible
  return null;
}
```

**Validación:** Importa este componente en un archivo de prueba. Debe compilar sin errores.

---

### Responsabilidad 2: Crear Hook useMeta

**Archivo a crear:** `04_frontend/src/hooks/useMeta.js`

**Por qué es importante:** Un hook simplifica el uso de MetaTagProvider. En lugar de pasar todos los props manualmente a cada página, el hook puede leer configuración de un lugar central.

**Contenido exacto:**

```jsx
// 04_frontend/src/hooks/useMeta.js
import { useEffect } from 'react';

/**
 * Hook para manejar meta tags de forma centralizada
 * 
 * Uso:
 * const { setMeta } = useMeta();
 * useEffect(() => {
 *   setMeta({
 *     title: "Mi página",
 *     description: "Optimizada para SEO"
 *   });
 * }, []);
 */
export function useMeta() {
  const setMeta = (config) => {
    // Actualizar title de la página
    if (config.title) {
      document.title = config.title;
    }
    
    // Actualizar meta description
    let descTag = document.querySelector('meta[name="description"]');
    if (descTag && config.description) {
      descTag.content = config.description;
    }
    
    // Actualizar meta keywords si existen
    let keywordsTag = document.querySelector('meta[name="keywords"]');
    if (keywordsTag && config.keywords) {
      keywordsTag.content = config.keywords;
    }
    
    // Actualizar Open Graph tags si existen
    const updateOG = (property, value) => {
      if (!value) return;
      let og = document.querySelector(`meta[property="og:${property}"]`);
      if (og) {
        og.content = value;
      }
    };

    updateOG('title', config.ogTitle);
    updateOG('description', config.ogDescription);
    updateOG('image', config.ogImage);
    updateOG('url', config.ogUrl);
  };

  return { setMeta };
}

export default useMeta;
```

**Validación:** Importa este hook en un componente. Debe funcionar sin errores.

---

### Responsabilidad 3: Crear Archivo de Constantes SEO

**Archivo a crear:** `04_frontend/src/config/seo-constants.js`

**Por qué es importante:** Centraliza toda la configuración SEO en un lugar. Cuando Claude Code proporciona nuevas meta descriptions, las actualizas aquí. Todos los componentes consumen de este archivo central.

**Contenido exacto:**

```javascript
// 04_frontend/src/config/seo-constants.js

/**
 * Configuración centralizada de SEO
 * Una fuente única de verdad para meta tags, palabras clave, URLs
 * 
 * Uso: import { SITE_CONFIG, PAGE_CONFIGS } from './seo-constants'
 */

export const SITE_CONFIG = {
  name: 'Manoli Pasteles de Pañales',
  domain: 'https://www.manolipastelesdepañales.com',
  description: 'Tartas y canastillas de pañales artesanales personalizadas para recién nacidos',
  defaultImage: 'https://www.manolipastelesdepañales.com/og-image.jpg',
  defaultKeywords: 'pasteles pañales, tartas pañales, regalos bebes, badalona, barcelona'
};

/**
 * Configuración de meta tags por página/sección
 * Claude Code actualizará estas descriptions en Lote 2
 */
export const PAGE_CONFIGS = {
  home: {
    path: '/',
    title: 'Pasteles de Pañales en Badalona y Barcelona | Entrega a Domicilio - Manoli',
    description: 'Tartas de pañales y canastillas artesanales en Badalona. Entrega en mano y a domicilio en hospitales (Can Ruti, Quirón). El regalo perfecto para recién nacidos.',
    keywords: 'pasteles pañales, tartas pañales, badalona, barcelona, regalos recien nacido'
  },
  
  productos: {
    path: '/productos',
    title: 'Catálogo de Tartas de Pañales y Canastillas | Manoli Pasteles',
    description: 'Catálogo completo de pasteles de pañales personalizados. Tartas de 3 pisos, castillos, carritos y motos de pañales. Todos hechos a mano.',
    keywords: 'catálogo pasteles, tartas personalizadas, canastillas, modelos'
  },
  
  comprar: {
    path: '/comprar-pasteles-panales',
    title: 'Compra Pasteles de Pañales Artesanales | Entrega 24h - Manoli',
    description: 'Compra online pasteles de pañales personalizados. Entrega garantizada en Badalona y Barcelona en 24 horas. Hecho a mano, garantizado de calidad.',
    keywords: 'comprar pasteles pañales, comprar tartas pañales, entrega rápida'
  },

  entregas: {
    path: '/entregas-badalona-barcelona',
    title: 'Entregas a Domicilio en Badalona y Barcelona | Pasteles de Pañales - Manoli',
    description: 'Entregas de pasteles de pañales a domicilio en Badalona, Barcelona y alrededores. Servicio 24 horas, entrega en mano, garantizado.',
    keywords: 'entrega badalona, entrega barcelona, entrega domicilio, pasteles pañales'
  },

  regalos: {
    path: '/regalos-recien-nacido',
    title: 'Regalos para Recién Nacidos | Pasteles de Pañales Personalizados - Manoli',
    description: 'Los mejores regalos para recién nacidos. Pasteles de pañales personalizados, únicos y originales. Perfecto para baby shower y bautizos.',
    keywords: 'regalos recien nacido, regalo personalizado, baby shower, bautizo'
  }
};

/**
 * Keywords de alto volumen sin explotar
 * En Lote 2, Claude Code creará landing pages para estos
 */
export const HIGH_OPPORTUNITY_KEYWORDS = [
  {
    keyword: 'comprar pastel de pañales',
    impressions: 151,
    clicks: 0,
    position: 1.51,
    targetPage: 'comprar'
  },
  {
    keyword: 'comprar tartas de pañales',
    impressions: 135,
    clicks: 0,
    position: 11.14,
    targetPage: 'comprar'
  },
  {
    keyword: 'pasteles pañales para bebes',
    impressions: 87,
    clicks: 0,
    position: 5.36,
    targetPage: 'productos'
  },
  {
    keyword: 'tarta pañales a domicilio',
    impressions: 97,
    clicks: 0,
    position: 21.21,
    targetPage: 'entregas'
  },
  {
    keyword: 'pañalera',
    impressions: 76,
    clicks: 0,
    position: 4.07,
    targetPage: 'productos'
  }
];

/**
 * Estructura de navegación
 * Usado para crear menús, breadcrumbs
 */
export const SITE_STRUCTURE = {
  home: { title: 'Inicio', path: '/' },
  productos: { title: 'Catálogo', path: '/productos' },
  comprar: { title: 'Comprar', path: '/comprar-pasteles-panales' },
  entregas: { title: 'Entregas', path: '/entregas-badalona-barcelona' },
  regalos: { title: 'Regalos', path: '/regalos-recien-nacido' },
  blog: { title: 'Blog', path: '/blog' },
  contacto: { title: 'Contacto', path: '/contacto' }
};
```

**Validación:** Importa este archivo en un componente. Debe funcionar sin errores.

---

### Responsabilidad 4: Crear Estructura de Carpetas Frontend

**Carpetas a crear en `04_frontend/src/`:**

```
04_frontend/
├── src/
│   ├── components/
│   │   ├── MetaTagProvider.jsx (que creaste en Responsabilidad 1)
│   │   ├── Header.jsx (puede estar vacío por ahora)
│   │   ├── ProductGallery.jsx (puede estar vacío por ahora)
│   │   ├── CTA.jsx (puede estar vacío por ahora)
│   │   └── Footer.jsx (puede estar vacío por ahora)
│   │
│   ├── pages/
│   │   ├── Home.jsx (puede estar vacío por ahora)
│   │   ├── Productos.jsx (puede estar vacío por ahora)
│   │   └── Contacto.jsx (puede estar vacío por ahora)
│   │
│   ├── hooks/
│   │   ├── useMeta.js (que creaste en Responsabilidad 2)
│   │   └── useDeviceType.js (puede estar vacío por ahora)
│   │
│   ├── config/
│   │   └── seo-constants.js (que creaste en Responsabilidad 3)
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   └── App.jsx (puede estar vacío por ahora)
│
└── public/
    └── images/ (para guardar imágenes optimizadas)
```

**Qué hacer:** Crea esta estructura de carpetas. Las carpetas pueden estar vacías o tener archivos placeholder. Lo importante es que cuando Lote 2 empiece, la estructura esté lista.

**Validación:** Verifica que puedas navegar en tu editor y ver esta estructura.

---

## ESTRUCTURA ESPERADA DESPUÉS DE COMPLETAR

Tu carpeta `04_frontend/` debe verse así:

```
04_frontend/
├── src/
│   ├── components/
│   │   ├── MetaTagProvider.jsx ✅
│   │   ├── Header.jsx
│   │   ├── ProductGallery.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   │
│   ├── hooks/
│   │   └── useMeta.js ✅
│   │
│   ├── config/
│   │   └── seo-constants.js ✅
│   │
│   └── styles/
│       └── globals.css
│
└── public/
    └── images/
```

---

## PASOS DE IMPLEMENTACIÓN

**Paso 1:** Crea la carpeta `04_frontend/src/` y todas sus subcarpetas

**Paso 2:** Copia el contenido de `MetaTagProvider.jsx` exactamente en `04_frontend/src/components/MetaTagProvider.jsx`

**Paso 3:** Copia el contenido de `useMeta.js` exactamente en `04_frontend/src/hooks/useMeta.js`

**Paso 4:** Copia el contenido de `seo-constants.js` exactamente en `04_frontend/src/config/seo-constants.js`

**Paso 5:** Crea archivos placeholder vacíos en las otras carpetas (Header.jsx, Footer.jsx, etc.)

**Paso 6:** Verifica que puedas importar MetaTagProvider, useMeta y seo-constants sin errores

**Paso 7:** Crea un archivo llamado `/02_tasks/by_agent/gemini_cli/lote01_completado.md` (ver sección de abajo)

---

## DOCUMENTO DE COMPLETACIÓN

Cuando termines esta tarea, crea el archivo `/02_tasks/by_agent/gemini_cli/lote01_completado.md` con este contenido EXACTO:

```markdown
# Lote 1 Completado - Gemini CLI ✅

## Tareas Completadas
- [x] Crear MetaTagProvider.jsx
- [x] Crear useMeta.js hook
- [x] Crear seo-constants.js
- [x] Crear estructura de carpetas frontend

## Archivos Creados
- 04_frontend/src/components/MetaTagProvider.jsx
- 04_frontend/src/hooks/useMeta.js
- 04_frontend/src/config/seo-constants.js
- 04_frontend/src/styles/globals.css
- Estructura completa de carpetas

## Validación Completada
- [x] MetaTagProvider.jsx importable sin errores
- [x] useMeta.js importable sin errores
- [x] seo-constants.js importable sin errores
- [x] Estructura de carpetas lista para Lote 2
- [x] Todos los archivos compilables

## Para Claude Code
Los componentes React están listos y pueden consumir los schemas JSON-LD que creaste. En Lote 2, estos componentes injec tarán dinámicamente las meta descriptions que proporciones.

No hay bloqueadores en mi lado. El siguiente paso es que en Lote 2 proporciones un archivo `seo-config.json` que estos componentes puedan consumir.

## Próximos Pasos
Ambos hemos completado Lote 1. Podemos empezar Lote 2: Optimización de meta descriptions.
```

---

## CRITERIOS DE ACEPTACIÓN

Sabremos que completaste esta tarea cuando:

- [ ] Archivo `04_frontend/src/components/MetaTagProvider.jsx` existe y compilable
- [ ] Archivo `04_frontend/src/hooks/useMeta.js` existe y compilable
- [ ] Archivo `04_frontend/src/config/seo-constants.js` existe y compilable
- [ ] Estructura de carpetas `04_frontend/src/` existe con todas sus subcarpetas
- [ ] Los tres archivos principales pueden ser importados sin errores
- [ ] Archivo `02_tasks/by_agent/gemini_cli/lote01_completado.md` existe con tu resumen

Si todas las casillas están marcadas, has completado Lote 1.

---

## NOTAS IMPORTANTES

Este lote es sobre **preparación**, no sobre crear landing pages. Los componentes que crees ahora serán la **base** para todo lo futuro. Sin esta base, Lote 2 sería caótico.

Aunque parezca "simple" (solo crear componentes), cada uno de estos componentes será usado docenas de veces en Lote 2 y lotes posteriores. Una buena base ahora significa que el trabajo futuro será 10 veces más rápido.

También nota que aunque esperas a que Claude Code complete, puedes crear TODOS tus componentes ahora. No necesitas que existan los schemas JSON para crear components que los consumirán. Los componentes están listos cuando Claude Code tenga sus archivos.

---

## ¿PREGUNTAS?

Si algo no es claro:

1. Revisa `/02_tasks/by_agent/gemini_cli/PROMPT_MAESTRO_GC.md` (tu guía general)
2. Revisa `/01_audit/AUDITORIA_SEO.md` (contexto del problema)
3. Revisa `/02_tasks/SISTEMA_COORDINACION.md` (cómo trabajamos juntos)

---

## ¡A EMPEZAR!

**Tiempo estimado:** 2-3 horas

No esperes a Claude Code para empezar. Puedes crear todos tus componentes ahora mismo.

Abre tu editor y crea el primer archivo: `04_frontend/src/components/MetaTagProvider.jsx`

**¡Adelante! 🚀**

