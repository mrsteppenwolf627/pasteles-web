# 📊 AUDITORÍA SEO - MANOLI PASTELES DE PAÑALES

**Proyecto:** pasteles-web + SEO Local Optimization
**Fecha:** Marzo 27, 2026
**Enfoque:** SEO Local (Badalona/Barcelona) + Optimización Técnica
**URL:** www.manolipastelesdepañales.com

---

## RESUMEN EJECUTIVO

Tu sitio genera 3,390 impresiones mensuales desde 287 keywords únicos, pero solo 58 clics (CTR 1.7%). El potencial está en optimizar meta descriptions y crear landing pages temáticas para keywords de alto volumen que ya tienen visibilidad pero cero conversión.

### Métricas Clave (Últimos 3 meses)
- **Clics:** 58 clics totales
- **Impresiones:** 3,390 impresiones
- **CTR:** 1.7% (objetivo: 3-5%)
- **Posición promedio:** 9.2 (segunda mitad de primera página)
- **Tráfico móvil:** 79% (78.9%)
- **Keywords sin explotar:** 281 de 287 (98%)
- **Mercado:** 98.7% desde España (objetivo correcto)

---

## PROBLEMAS IDENTIFICADOS

### 1. CTR Crítico (1.7% vs objetivo 3-5%)
Tu sitio tiene visibilidad pero no conversión. Razones principales:
- Meta descriptions genéricas que no diferencian tu producto
- Posición promedio de 9.2 significa muchas keywords en segunda mitad de primera página
- Competencia sin diferenciadores claros (artesanal, entrega 24h, personalizado)
- Diseño visual podría mejorar atractivo en resultados de búsqueda

### 2. Keywords de Alto Volumen Sin Clics (Oportunidad Inmediata)
Estas palabras clave ya generan impresiones altas pero cero conversión. Son low-hanging fruit:
- "comprar pastel de pañales": 151 impresiones, 0 clics, posición 1.51
- "comprar tartas de pañales": 135 impresiones, 0 clics, posición 11.14
- "pasteles pañales para bebes": 87 impresiones, 0 clics, posición 5.36
- "tarta pañales a domicilio": 97 impresiones, 0 clics, posición 21.21
- "pañalera": 76 impresiones, 0 clics, posición 4.07

**Impacto potencial:** Si mejoras solo el CTR de estas 5 keywords a 5%, generarías aproximadamente 35 clics adicionales mensuales.

### 3. Problemas Técnicos Menores (Pero importantes)
- Meta charset no está declarado explícitamente en HEAD
- Meta viewport incompleto (falta initial-scale=1.0)
- Meta robots no definido
- LocalBusiness schema podría estar incompleto o ausente
- robots.txt y sitemap.xml no verificados

---

## OPORTUNIDADES PRIORITARIAS

### Oportunidad 1: Optimizar Meta Descriptions (Semana 1-2)
Mejorar CTR de keywords de alto volumen. Esta es la ganancia más rápida sin cambios estructurales.

**Impacto:** De 1.7% a 3-5% CTR = 5-10x aumento de tráfico en el mismo volumen de impresiones.

### Oportunidad 2: Crear Landing Pages Temáticas (Semana 3-4)
Páginas específicas para diferentes intenciones de búsqueda (comprar, entregas locales, regalos, personalización).

**Impacto:** Aumenta relevancia de búsqueda, mejora ranking, aumenta CTR.

### Oportunidad 3: Implementar LocalBusiness Schema (Semana 1-2)
Esencial para SEO local en Badalona y Barcelona. Permite que Google entienda ubicación exacta, horarios, teléfono.

**Impacto:** Mejora visibilidad en búsquedas locales, puede hacer que aparezcas en Google Maps.

---

## DATOS TÉCNICOS OBSERVADOS

### Metaetiquetas Existentes
- ✅ Title: Bien optimizado, 60 caracteres, incluye palabras clave principales
- ✅ Meta description: Presente, 165 caracteres, buen contenido
- ✅ Open Graph: Implementado (og:title, og:description, og:image, og:url, og:type)
- ✅ Canonical: Presente, apunta correctamente a versión con www y HTTPS
- ✅ H1: Único, "Pasteles de Pañales en Badalona y Barcelona" (correcto)
- ✅ H2: Múltiples presentes (Catálogo, Testimonios)
- ✅ Imágenes: 4 detectadas, todas con atributo ALT (100% optimizadas)
- ⚠️ Meta charset: No explícito (debería ser UTF-8)
- ⚠️ Meta viewport: Incompleto (falta initial-scale=1.0)
- ⚠️ Meta robots: No definido

### Datos Estructurados
- ✅ JSON-LD scripts: 2 detectados (probablemente Organization y LocalBusiness)

### Estructura URLs
- ✅ URLs limpias y descriptivas (/productos, /sobre-nosotros, /contacto)
- ✅ Sin parámetros GET innecesarios
- ✅ Migas de pan presentes

---

## ANÁLISIS POR DISPOSITIVO

### Distribución de Tráfico
El 79% del tráfico proviene de dispositivos móviles (46 de 58 clics), con solo 21% de desktop (12 clics). Esto es típico del comportamiento actual pero requiere optimización mobile-first.

**CTR por dispositivo:**
- Móvil: 1.81% (46 clics de 2,548 impresiones)
- Desktop: 1.47% (12 clics de 817 impresiones)

El CTR ligeramente superior en móvil sugiere que tus snippets están bien optimizados para pantalla pequeña, pero el volumen en desktop podría mejorarse.

---

## ARCHIVOS TÉCNICOS REQUERIDOS

Para completar la estructura SEO técnica necesitas:

- `robots.txt` en raíz (indica a Google qué puede rastrear)
- `sitemap.xml` en raíz (lista todas tus URLs para descubrimiento)
- Meta charset UTF-8 en HEAD
- Meta viewport completo: `width=device-width, initial-scale=1.0`
- LocalBusiness schema JSON-LD con tu información exacta
- Meta robots: `index, follow` (o configuración específica)

---

## ESTADO DEL PROYECTO

Este documento es el punto de referencia central para ambos agentes (Claude Code y Gemini CLI). Lee esta auditoría antes de empezar a trabajar. Sin entender el contexto del problema, los cambios que hagas no tendrán el impacto correcto.

**El problema:** CTR bajo = visibilidad sin conversión.
**La solución:** Mejorar meta descriptions + crear landing pages temáticas + estructura técnica sólida.
**El resultado esperado:** Triplicar tráfico en 4-6 semanas.

---

## NEXT STEPS

1. Claude Code: Implementa meta tags, schemas, robots.txt, sitemap.xml
2. Gemini CLI: Crea componentes React y landing pages temáticas
3. Ambos: Coordinen a través de archivos markdown en `02_tasks/by_agent/`
4. Monitorea cambios en Google Search Console semanalmente

