# 🎯 Proyecto SEO Multi-Agente: pasteles-web

Bienvenido. Este es un sistema coordinado para que Claude Code y Gemini CLI trabajen juntos en optimizar SEO local para www.manolipastelesdepañales.com en Badalona y Barcelona.

## El Problema Que Estamos Resolviendo

Tu sitio tiene un problema crítico: Google lo muestra en búsquedas (3,390 impresiones por mes) pero casi nadie hace clic (solo 1.7% CTR, cuando debería ser 3-5%). Esto significa que tu página es visible pero no atractiva.

Además, tienes 281 de 287 palabras clave posicionadas que no generan ningún clic. Palabras clave como "comprar pastel de pañales" con 151 impresiones pero cero clics. Esto es una oportunidad enorme sin explotar.

## La Solución: Dividir el Trabajo

En lugar de que una sola persona haga todo, hemos separado el trabajo en dos roles especializados que trabajan en paralelo sin pisarse mutuamente:

**Claude Code** (Backend) se encarga de toda la infraestructura técnica que Google necesita: meta tags, datos estructurados (JSON-LD), robots.txt, sitemap.xml. Piensa en esto como construir los "cimientos" técnicos del sitio.

**Gemini CLI** (Frontend) se encarga de hacer que el sitio se vea hermoso y atractivo visualmente. Crea componentes React, landing pages temáticas, y mejora la experiencia del usuario para aumentar clics. Piensa en esto como "pintar las paredes" y "decorar" lo que Claude Code construyó.

## Cómo Está Organizado

```
pasteles-web/
├── INICIO_RAPIDO.md             ← Lee esto primero (5 minutos)
├── 00_brief/                     ← Documentación del proyecto
├── 01_audit/                     ← La auditoría SEO central (ambos leen esto)
│   └── AUDITORIA_SEO.md          ← Lee ESTO antes de cualquier otra cosa
├── 02_tasks/                     ← Sistema de coordinación
│   ├── SISTEMA_COORDINACION.md   ← La biblia de cómo trabajamos juntos
│   ├── pending/                  ← Tareas por hacer
│   ├── in_progress/              ← Tareas activas
│   ├── completed/                ← Tareas terminadas
│   └── by_agent/                 ← Comunicación entre agentes
│       ├── claude_code/          ← Territorio exclusivo de Claude Code
│       │   ├── PROMPT_MAESTRO_CC.md
│       │   ├── lote01_critica.md
│       │   └── context.md
│       └── gemini_cli/           ← Territorio exclusivo de Gemini CLI
│           ├── PROMPT_MAESTRO_GC.md
│           ├── lote01_critica.md
│           └── context.md
├── 03_backend/                   ← Código backend (Claude Code escribe aquí)
├── 04_frontend/                  ← Código frontend (Gemini CLI escribe aquí)
├── 05_deployed/                  ← Versiones en producción
├── 06_documentation/             ← Documentación general
└── 07_backup/                    ← Respaldos
```

## Flujo de Trabajo Diario

**Mañana:** Claude Code abre su tarea en `02_tasks/by_agent/claude_code/lote0X_critica.md`, lee exactamente qué hacer, y crea archivos en `03_backend/`. Documenta su progreso.

**Tarde:** Gemini CLI lee lo que Claude Code hizo, abre su tarea en `02_tasks/by_agent/gemini_cli/lote0X_critica.md`, y crea componentes React en `04_frontend/` usando la salida de Claude Code. Documenta bloqueadores si existen.

**Comunicación:** No hay reuniones. Todo se documenta en archivos markdown en `02_tasks/by_agent/[su_nombre]/` que el otro agente lee en su próximo ciclo.

## Empezar: Checklist de 10 Minutos

Ambos agentes deben hacer esto antes de empezar cualquier trabajo:

1. **Lee `/INICIO_RAPIDO.md`** (5 minutos)
   - Orienta sobre la estructura general
   - Explica cómo funciona el sistema
   - Muestra el flujo de trabajo diario

2. **Lee `/01_audit/AUDITORIA_SEO.md`** (5 minutos)
   - Entiende por qué el CTR es bajo
   - Identifica qué keywords son oportunidades
   - Comprende cuál es el problema exacto que resolvemos

3. **Lee tu documento maestro específico:**
   - Si eres Claude Code: `/02_tasks/by_agent/claude_code/PROMPT_MAESTRO_CC.md`
   - Si eres Gemini CLI: `/02_tasks/by_agent/gemini_cli/PROMPT_MAESTRO_GC.md`
   - Esto te da tu rol completo, responsabilidades, y qué NO debes tocar

4. **Lee tu tarea específica:**
   - Si eres Claude Code: `/02_tasks/by_agent/claude_code/lote01_critica.md`
   - Si eres Gemini CLI: `/02_tasks/by_agent/gemini_cli/lote01_critica.md`
   - Esto dice exactamente qué hacer hoy, sin ambigüedad

Si completaste estos 4 pasos, **estás listo para empezar**.

## Los 4 Archivos Que Debes Leer Primero

En este orden exacto:

1. **INICIO_RAPIDO.md** (en raíz) - Orientación de 5 minutos
2. **01_audit/AUDITORIA_SEO.md** - Contexto del problema
3. **02_tasks/SISTEMA_COORDINACION.md** - Cómo nos coordinamos
4. **02_tasks/by_agent/[TU_NOMBRE]/PROMPT_MAESTRO_[SIGLAS].md** - Tu guía completa

Después puedes saltar directamente a tu tarea del día.

## Reglas de Oro

**Regla 1: No Pises Territorio Ajeno**
- Claude Code: NUNCA modifiques nada en `04_frontend/`. Eso es territorio de Gemini CLI.
- Gemini CLI: NUNCA modifiques nada en `03_backend/`. Eso es territorio de Claude Code.

Si necesitas que el otro agente haga algo, escribe un archivo markdown en tu carpeta `02_tasks/by_agent/[tu_nombre]/` explicándolo. El otro agente lo verá en su próximo ciclo.

**Regla 2: Documentar Todo**
No hay comunicación verbal. Todo se documenta en archivos markdown. Cuando termines una tarea, crea un archivo explicando:
- Qué hiciste
- Qué necesita el otro agente de ti
- Si hay bloqueadores
- Cuándo estará listo para el siguiente paso

**Regla 3: Leer la Auditoría Primero**
Antes de cualquier trabajo, entiende por qué lo haces. La auditoría explica que el problema es CTR bajo porque Google muestra tu página pero los usuarios no hacen clic. Este contexto debe guiar todas tus decisiones.

**Regla 4: No Hay Ambigüedad**
Cada tarea dice exactamente qué crear, qué debe contener, cómo validar que está correcto. Si algo no está claro, significa que la tarea está mal escrita, no que debas improvisar.

## Sistema de Lotes

Las tareas están organizadas en 4 lotes que se ejecutan secuencialmente:

**Lote 1 (Semana 1):** Correcciones técnicas críticas
- Claude Code: Meta tags, robots.txt, sitemap.xml, schemas JSON-LD
- Gemini CLI: Componentes React base, archivo de constantes SEO

**Lote 2 (Semana 2):** Optimización de meta descriptions
- Claude Code: Crear configuración seo-config.json con descriptions optimizadas
- Gemini CLI: Crear landing pages temáticas

**Lote 3 (Semana 3-4):** Landing pages completas
- Claude Code: Estructura HTML para cada landing page
- Gemini CLI: Diseño completo y funcional

**Lote 4 (Semana 4-5):** Contenido educativo
- Claude Code: Estructura para blog
- Gemini CLI: Plantillas de blog

Cada lote debe completarse antes de empezar el siguiente, pero Claude Code y Gemini CLI pueden trabajar en paralelo dentro del mismo lote.

## Validación de Trabajo

Cuando termines una tarea, valida:

**Claude Code:**
- ¿Existen todos los archivos en `03_backend/` especificados?
- ¿Los meta tags están bien formados?
- ¿Los JSON-LD son válidos? (puedes validar en schema.org/validator/)
- ¿Existe documento de "completado" explicando qué hiciste?

**Gemini CLI:**
- ¿Existen todos los componentes React en `04_frontend/src/`?
- ¿Pueden ser importados sin errores?
- ¿El código está documentado y limpio?
- ¿Existe documento de "completado" con bloqueadores si existen?

## Impacto Esperado

Si sigues este plan:

- **Semana 1:** Google entiende tu sitio técnicamente (estructura correcta)
- **Semana 2:** CTR mejora de 1.7% a 3-5% (snippets más atractivos)
- **Semana 3-4:** Landing pages temáticas mejoran relevancia de búsqueda
- **Semana 4-5:** Contenido educativo atrae tráfico inicial que se convierte
- **Mes 2:** Tráfico orgánico ha aumentado 3-5x desde punto de partida

## Preguntas Frecuentes

**P: ¿Qué pasa si me equivoco en algo?**
R: No hay problema. Borra el archivo y vuelve a intentar. Los cambios son iterables. Lo importante es documentar qué hiciste mal para no repetirlo.

**P: ¿Cuándo empieza Lote 2?**
R: Después de que ambos agentes terminen Lote 1 y el otro agente valide que todo funciona.

**P: ¿Puedo cambiar la estructura recomendada?**
R: Solo si lo documentas CLARAMENTE para el otro agente. La consistencia es importante para evitar confusión.

**P: ¿Qué hago si estoy bloqueado?**
R: Escribe un archivo markdown en tu carpeta explicando qué te bloquea y por qué. El otro agente lo verá en su próximo ciclo y puede actuar.

## ¿Listo?

Ahora lee INICIO_RAPIDO.md y prepárate para empezar.

**¡Adelante! 🚀**

