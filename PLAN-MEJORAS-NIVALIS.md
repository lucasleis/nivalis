# 🚀 PLAN DE MEJORAS NIVALIS
## Usando skills: ui-ux-pro-max + gsap-* + prompt-master

---

## 📊 ANÁLISIS DEL PROYECTO

**Stack actual:**
- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion (ya instalado)
- React Router
- Lucide Icons

**Skills disponibles:**
- ✅ `ui-ux-pro-max` - Diseño UI/UX profesional
- ✅ `gsap-core` - Animaciones core
- ✅ `gsap-react` - Integración con React
- ✅ `gsap-scrolltrigger` - Scroll animations
- ✅ `gsap-timeline` - Secuencias
- ✅ `prompt-master` - Optimización de prompts

---

## 🎯 PRIORIDADES (Basadas en tu TODO)

### ALTA PRIORIDAD (Impacto visual inmediato)

#### 1. HEADER: Scroll Blur + Scroll Spy
**Impacto:** ⭐⭐⭐⭐⭐  
**Complejidad:** Media  
**Skills:** `ui-ux-pro-max` + `gsap-scrolltrigger`

**Mejoras:**
- ❌ Header sin blur al hacer scroll (se ve plano)
- ❌ Sin indicador de navegación activa
- ❌ Hover básico (solo scale)

**Prompt para OpenCode:**
```
SKILLS A USAR:
- ui-ux-pro-max (del repo ui-ux-pro-max-skill)
- gsap-scrolltrigger (del repo gsap-skills)
- prompt-master (del repo prompt-master) para optimizar este prompt

Mejora el Header:

1. Añadir backdrop-filter blur semitransparente al hacer scroll
   - bg-white/80 dark:bg-gray-900/80
   - backdrop-blur-md
   - border-bottom sutil

2. Implementar Scroll Spy:
   - Detectar sección activa
   - Highlight en nav links (underline animado)
   - Usar IntersectionObserver

3. Mejorar hover de nav links:
   - Underline animado desde centro
   - Usar GSAP para suavidad

Archivo: src/components/Header.tsx

Mantén la estructura actual (logo parallax, botones).
Añade solo las mejoras visuales.
```

---

#### 2. HERO: Imagen + Animación Logo
**Impacto:** ⭐⭐⭐⭐⭐  
**Complejidad:** Baja  
**Skills:** `ui-ux-pro-max` + `gsap-core`

**Mejoras:**
- ❌ Falta mockup/imagen hero
- ❌ Logo estático (sin animación)
- ❌ Sub-CTA ausente

**Prompt para OpenCode:**
```
SKILLS A USAR:
- ui-ux-pro-max (del repo ui-ux-pro-max-skill)
- gsap-core (del repo gsap-skills)
- prompt-master (del repo prompt-master)

Mejora el Hero:

1. Añadir sección de imagen/mockup:
   - Glassmorphic card
   - Imagen placeholder de proyectos
   - Parallax suave

2. Animar logo al cargar:
   - Bounce muy sutil con GSAP
   - Rotación suave (5-10deg)
   - Trigger: onMount

3. Agregar sub-CTA:
   - Botón secundario "Ver Portfolio"
   - Scroll smooth a #portfolio

Archivo: src/components/Hero.tsx

Estilo: Minimalista, cohesión con design actual.
```

---

#### 3. PORTFOLIO: Filtros + Hover Premium
**Impacto:** ⭐⭐⭐⭐  
**Complejidad:** Media-Alta  
**Skills:** `ui-ux-pro-max` + `gsap-core`

**Mejoras:**
- ❌ Sin filtros de categorías
- ❌ Hover básico
- ❌ Falta glassmorphism + depth

**Prompt para OpenCode:**
```
SKILLS A USAR:
- ui-ux-pro-max (del repo ui-ux-pro-max-skill)
- gsap-core (del repo gsap-skills)
- prompt-master (del repo prompt-master)

Mejora el Portfolio:

1. Agregar filtros de categorías:
   - Todos / Web / Branding / IA / Marketing
   - Pills con active state
   - Animación de filtrado suave

2. Mejorar hover de cards:
   - Glassmorphism effect
   - Border glow sutil
   - Scale + shadow profundo
   - Transition 300ms

3. Estructura de card:
   - Imagen principal
   - Tag de categoría
   - Título
   - Descripción corta
   - Link "Ver caso de estudio"

Archivo: src/components/Portfolio.tsx

Usa los case studies existentes como data.
```

---

### MEDIA PRIORIDAD (UX y cohesión)

#### 4. SERVICIOS: Iconos Modernos + Glassmorphism
**Impacto:** ⭐⭐⭐  
**Complejidad:** Baja  
**Skills:** `ui-ux-pro-max`

**Prompt para OpenCode:**
```
SKILLS A USAR:
- ui-ux-pro-max (del repo ui-ux-pro-max-skill)
- prompt-master (del repo prompt-master)

Mejora Services:

1. Usar Lucide icons (ya instalado):
   - Code, Palette, Zap, Users
   - Size 32px
   - Color nivOrange

2. Cards con glassmorphism:
   - bg-white/60 dark:bg-gray-800/60
   - backdrop-blur-lg
   - border sutil
   - shadow-xl

3. Hover premium:
   - Translate-y: -8px
   - Scale icon: 1.1
   - Border glow

Archivo: src/components/Services.tsx
```

---

#### 5. CTA: Trust Badges + Opciones de Contacto
**Impacto:** ⭐⭐⭐⭐  
**Complejidad:** Baja  
**Skills:** `ui-ux-pro-max`

**Prompt para OpenCode:**
```
SKILLS A USAR:
- ui-ux-pro-max (del repo ui-ux-pro-max-skill)
- prompt-master (del repo prompt-master)

Mejora el CTA:

1. Añadir trust badges:
   - "+15 proyectos completados"
   - "Atención personalizada"
   - "Entrega garantizada"
   - Icons con Check o Trophy

2. Opciones de contacto:
   - WhatsApp (primario)
   - Email (secundario)
   - Calendly (terciario)
   - Pills seleccionables

3. Diseño:
   - Grid de badges
   - Spacing amplio
   - Typography clara

Archivo: src/components/CTA.tsx
```

---

#### 6. FOOTER: Estructura + Mini Form
**Impacto:** ⭐⭐⭐  
**Complejidad:** Media  
**Skills:** `ui-ux-pro-max`

**Prompt para OpenCode:**
```
SKILLS A USAR:
- ui-ux-pro-max (del repo ui-ux-pro-max-skill)
- gsap-core (del repo gsap-skills) para el glow effect
- prompt-master (del repo prompt-master)

Mejora el Footer:

1. Layout 4 columnas (mobile 1 col):
   - Col 1: Logo + tagline
   - Col 2: Servicios (links)
   - Col 3: Portfolio (links)
   - Col 4: Mini newsletter form

2. Mini form:
   - Input email only
   - Botón "Suscribirse"
   - Validación básica

3. Bottom bar:
   - "Built by Nivalis" con glow effect
   - Social links
   - Copyright

Archivo: Crear Footer.tsx nuevo (reemplazar actual)
```

---

### BAJA PRIORIDAD (Polish y extras)

#### 7. ANIMACIONES GSAP: Scroll Smoothing
**Impacto:** ⭐⭐⭐  
**Complejidad:** Alta  
**Skills:** `gsap-scrolltrigger` + `gsap-performance`

**Prompt para OpenCode:**
```
SKILLS A USAR:
- gsap-scrolltrigger (del repo gsap-skills)
- gsap-performance (del repo gsap-skills)
- gsap-react (del repo gsap-skills)
- prompt-master (del repo prompt-master)

Añade scroll animations:

1. Scroll-linked animations en secciones:
   - Fade in from bottom
   - Stagger en elementos
   - Parallax backgrounds

2. Performance:
   - will-change optimization
   - RequestAnimationFrame
   - Lazy init

3. Integration:
   - ScrollTrigger global
   - Cleanup en unmount

Archivos: 
- src/motion/scrollAnimations.ts (nuevo)
- Aplicar en Hero, About, Services, Portfolio
```

---

#### 8. LOADER INICIAL
**Impacto:** ⭐⭐  
**Complejidad:** Baja  
**Skills:** `gsap-timeline` + `ui-ux-pro-max`

**Prompt para OpenCode:**
```
SKILLS A USAR:
- gsap-timeline (del repo gsap-skills)
- ui-ux-pro-max (del repo ui-ux-pro-max-skill)
- prompt-master (del repo prompt-master)

Crea un loader inicial:

1. Diseño:
   - Logo N en gradiente
   - Rotate + scale sequence
   - Fade out después de 1.5s

2. Timeline GSAP:
   - Entrada del logo
   - Rotación suave
   - Fade out + scale down

3. Integration:
   - Show en App mount
   - Hide en onLoad

Archivo: src/components/Loader.tsx (nuevo)
```

---

#### 9. ABOUT: Fotos + Humanización
**Impacto:** ⭐⭐⭐  
**Complejidad:** Baja  
**Skills:** `ui-ux-pro-max`

**Prompt para OpenCode:**
```
SKILLS A USAR:
- ui-ux-pro-max (del repo ui-ux-pro-max-skill)
- prompt-master (del repo prompt-master)

Mejora About:

1. Layout con fotos:
   - Grid 2 columnas
   - Foto placeholder circular
   - Glassmorphic border

2. Texto más humano:
   - Primera persona
   - Tone casual-profesional
   - Storytelling breve

3. CTA secundario:
   - "Conocer servicios" button
   - Scroll to #servicios

Archivo: src/components/About.tsx
```

---

#### 10. SEO + METATAGS
**Impacto:** ⭐⭐⭐⭐  
**Complejidad:** Muy Baja  
**Skills:** `ui-ux-pro-max`

**Prompt para OpenCode:**
```
SKILLS A USAR:
- ui-ux-pro-max (del repo ui-ux-pro-max-skill)
- prompt-master (del repo prompt-master)

Añade SEO completo:

1. Head tags en index.html:
   - Title optimizado
   - Description
   - Keywords

2. Open Graph tags:
   - og:title
   - og:description
   - og:image (logo)
   - og:type: website

3. Structured data:
   - JSON-LD para organization
   - LocalBusiness schema

Archivo: frontend/index.html
```

---

## 📋 WORKFLOW RECOMENDADO

### Sesión 1: Header + Hero (30-40 min)
```bash
cd ~/nivalis/frontend
opencode

# Prompt en OpenCode:
> SKILLS A USAR:
> - ui-ux-pro-max (del repo ui-ux-pro-max-skill)
> - gsap-scrolltrigger (del repo gsap-skills)
> - gsap-core (del repo gsap-skills)
> - prompt-master (del repo prompt-master)
> 
> Implementa las mejoras 1 y 2 del PLAN-MEJORAS-NIVALIS.md:
> 1. Header con blur + scroll spy
> 2. Hero con imagen + animación logo
> 
> Mantén el estilo actual pero hazlo más premium.
> Mobile responsive.
```

### Sesión 2: Portfolio + Servicios (45-60 min)
```bash
opencode

# Prompt:
> SKILLS A USAR:
> - ui-ux-pro-max (del repo ui-ux-pro-max-skill)
> - gsap-core (del repo gsap-skills)
> - prompt-master (del repo prompt-master)
> 
> Implementa las mejoras 3 y 4 del PLAN-MEJORAS-NIVALIS.md:
> 3. Portfolio con filtros + glassmorphism
> 4. Servicios con iconos modernos
> 
> Añade filtros funcionales al portfolio.
> Usa glassmorphism en las cards.
```

### Sesión 3: CTA + Footer (30-40 min)
```bash
opencode

# Prompt:
> SKILLS A USAR:
> - ui-ux-pro-max (del repo ui-ux-pro-max-skill)
> - gsap-core (del repo gsap-skills)
> - prompt-master (del repo prompt-master)
> 
> Implementa las mejoras 5 y 6 del PLAN-MEJORAS-NIVALIS.md:
> 5. CTA con trust badges
> 6. Footer con estructura 4 columnas
> 
> Crea el nuevo Footer completo.
> Añade badges de confianza al CTA.
```

### Sesión 4: Animaciones + Polish (60-90 min)
```bash
opencode

# Prompt:
> SKILLS A USAR:
> - gsap-scrolltrigger (del repo gsap-skills)
> - gsap-performance (del repo gsap-skills)
> - gsap-timeline (del repo gsap-skills)
> - gsap-react (del repo gsap-skills)
> - ui-ux-pro-max (del repo ui-ux-pro-max-skill)
> - prompt-master (del repo prompt-master)
> 
> Implementa mejoras 7, 8 y 9 del PLAN-MEJORAS-NIVALIS.md:
> 7. Scroll animations con GSAP
> 8. Loader inicial
> 9. About con fotos
> 
> Añade scroll animations fluidas.
> Crea loader minimalista.
> Mejora About section.
```

### Sesión 5: SEO + Final Polish (20-30 min)
```bash
opencode

# Prompt:
> SKILLS A USAR:
> - ui-ux-pro-max (del repo ui-ux-pro-max-skill)
> - prompt-master (del repo prompt-master)
> 
> Implementa mejora 10 del PLAN-MEJORAS-NIVALIS.md:
> 10. SEO completo con metatags
> 
> Añade todos los metatags.
> Revisa accesibilidad (aria-labels).
> Optimiza performance final.
```

---

## 🎨 DESIGN TOKENS A UNIFICAR

Basándote en tu código actual, estos son los tokens a estandarizar:

```typescript
// src/styles/tokens.ts (crear)

export const colors = {
  nivOrange: '#FF6B35',
  nivBlack: '#1a1a1a',
  nivWhite: '#ffffff',
  nivGray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    // ...
  }
};

export const gradients = {
  primary: 'linear-gradient(135deg, #FF6B35 0%, #FF8E53 100%)',
  subtle: 'linear-gradient(to bottom, transparent, rgba(255,107,53,0.1))',
  dark: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
};

export const spacing = {
  section: {
    py: 'py-24 md:py-32',
    px: 'px-6 md:px-8',
  },
  container: 'max-w-7xl mx-auto',
};

export const typography = {
  h1: 'font-nauryz text-5xl md:text-7xl font-bold',
  h2: 'font-nauryz text-4xl md:text-5xl font-bold',
  h3: 'font-nauryz text-2xl md:text-3xl font-semibold',
  body: 'font-inter text-base md:text-lg',
};

export const animations = {
  hover: 'transition-all duration-300 ease-out',
  fast: 'transition-all duration-200 ease-out',
  slow: 'transition-all duration-500 ease-out',
};
```

**Prompt para aplicar:**
```
Crea el archivo src/styles/tokens.ts con los design tokens.
Luego refactoriza Header.tsx, Hero.tsx y Services.tsx para usar estos tokens.
```

---

## ✅ CHECKLIST DE PROGRESO

Marca con [x] cuando completes cada mejora:

### Alta Prioridad
- [x] Header: Blur + Scroll Spy + Hover mejorado (MANTENER)
- [x] Hero: Imagen + Animación logo + Sub-CTA (ROLLBACK - mantener original)
- [x] Portfolio: Filtros + Hover glassmorphism (MANTENER)

### Media Prioridad
- [x] Servicios: Iconos modernos + Cards premium (MANTENER)
- [x] CTA: Trust badges + Opciones contacto (ROLLBACK - mantener original)
- [x] Footer: Estructura 4 cols + Mini form (MANTENER)

### Baja Prioridad
- [x] Animaciones GSAP scroll (usando Framer Motion existente)
- [x] Loader inicial
- [x] About: Fotos + Humanización
- [x] SEO: Metatags completos

### Extras
- [ ] Design tokens unificados
- [x] Accesibilidad (aria-labels)
- [ ] Performance audit
- [x] Dark mode ajustes
- [x] Mobile optimizations

---

## 📊 IMPACTO ESPERADO

**Antes:**
- Landing funcional pero básica
- Animaciones solo con Framer Motion
- Hover básicos
- Sin scroll spy
- Portfolio sin filtros

**Después:**
- Landing premium estilo agencia
- Animaciones fluidas con GSAP
- Glassmorphism + depth
- Scroll spy funcional
- Portfolio filtrable e interactivo
- Trust signals claros
- SEO optimizado

**Tiempo estimado total:** 4-6 horas de trabajo con OpenCode + tus skills

---

## 🚀 COMANDO PARA EMPEZAR

```bash
# En tu WSL
cd ~/nivalis/frontend
opencode

# Prompt inicial en OpenCode:
> Tengo 3 skills configuradas de repos específicos:
> 1. ui-ux-pro-max (repo: ui-ux-pro-max-skill)
> 2. gsap-* (8 skills del repo: gsap-skills)
> 3. prompt-master (repo: prompt-master)
> 
> Analiza la estructura actual del proyecto.
> Lee el plan de mejoras en PLAN-MEJORAS-NIVALIS.md.
> Comencemos con la mejora #1: Header blur + scroll spy.
> 
> USA ESTAS SKILLS:
> - ui-ux-pro-max para el diseño premium
> - gsap-scrolltrigger para las animaciones
> - prompt-master para optimizar
> 
> Mantén el código actual, solo añade las mejoras.
> Asegúrate de que funcione en mobile.
```

---

## 💡 TIPS PARA OPENCODE

1. **Especifica los repos:** Siempre di "del repo ui-ux-pro-max-skill" o "del repo gsap-skills"
2. **Lista todas las skills:** Empieza con "SKILLS A USAR:" y lista las 3 skills con sus repos
3. **Un cambio a la vez:** No pidas todas las mejoras juntas
4. **Contexto claro:** Menciona siempre qué archivo modificar
5. **Mantener estilo:** "Mantén el estilo visual actual"
6. **Mobile first:** "Asegúrate de que funcione en mobile"

**Ejemplo de prompt perfecto:**
```
SKILLS A USAR:
- ui-ux-pro-max (del repo ui-ux-pro-max-skill)
- gsap-scrolltrigger (del repo gsap-skills)
- prompt-master (del repo prompt-master)

Mejora el Header añadiendo blur al hacer scroll.
Archivo: src/components/Header.tsx
Mobile responsive.
```

---

¡Éxito con las mejoras! 🎉

Las skills están listas, el plan está claro, solo queda ejecutar.
