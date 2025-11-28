# Nivalis — Deployment Guide

Este documento describe el proceso recomendado para deployar una nueva versión del proyecto en el servidor, así como buenas prácticas y comandos útiles para administración.

## Deploy

### Requisitos previos en el servidor

Antes de ejecutar cualquier deploy, asegurarse de tener instalado:

- Git
- Docker y Docker Compose
- Nginx configurado como reverse proxy
- Archivo .env configurado correctamente en el servidor
(no se sube a Git)


### Actualizar código y deploy

1. Actualizar desde el repositorio
```
git pull
```

2. Ejecutar script de deploy
En el directorio ./nivalis ejecutar:
```
deploy-nivalis
```


## Nginx

El servidor usa un archivo de configuración en:
```
/etc/nginx/sites-available/tu-dominio
```

Si se modifica este archivo, ejecutar:
```
sudo systemctl reload nginx
```


## Posibles upgrades TODO

### GENERAL
- [ ] Más coherencia visual entre secciones (algunas tienen gradients intensos, otras muy blancos).
- [ ] Mejor tipografía (fuentes custom → Roca, Inter, Manrope, Poppins).
- [ ] Mayor uso de espacios negativos (padding/margin más amplios para respirar).
- [ ] Llamadas a la acción más claras y repetidas.
- [ ] Componentes reutilizables (botones, secciones, headings).
- [ ] Navegación más sólida (highlight de sección activa, scroll spy).
- [ ] Portfolio con proyectos reales, mockups o placeholders reales.
- [ ] Footer con más estructura.
- [ ] Mejor accesibilidad (aria-labels, alt, contraste).
- [✅] Dark mode opcional.


### MEJORAS GLOBALES A TODA LA LANDING
- [ ] Crear 3 componentes globales
- [ ] Tipografía Premium
- [ ] Scroll Spy (sección activa en la navbar)
- [ ] Cohesión visual
- [ ] Animaciones más “profesionales”


### MEJORAS POR COMPONENTE

#### HEADER
- [ ] Añadir blur semitransparente al hacer scroll (más premium).
- [ ] INDICADOR de navegación activa (scroll spy).
- [ ] Hover más elegante (subrayado animado → agency style).
- [ ] Añadir CTA en desktop (muy común en agencias).

#### HERO
- [ ] Falta una imagen o mockup hero (tu marca lo pide).
- [ ] Agregar una sub-CTA (ej: “Ver portfolio”).
- [ ] Animación al logo: rotación leve o bounce muy suave.
- [ ] Reducir tamaño del texto en mobile (es muy grande).

#### ABOUT
- [ ] Agregar fotos reales de vos y tu socio (generan confianza inmediata).
- [ ] El texto está muy corporativo → podés hacerlo más humano.
- [ ] Añadir un botón CTA secundario (ej: "Conocer servicios").

#### SERVICIOS
- [ ] Sumá iconografías más modernas (Linear Icons, Phosphor).
- [ ] Hacer tarjetas más “flotantes” con borde fino:

#### PORTFOLIO
- [ ] Añadir mockups reales (web, mobile, marca).
- [ ] Añadir links reales.
- [ ] Animaciones hover más premium → glassmorphism + depth.
- [ ] Colocar un filtro (Todos / Web / Branding / IA / Marketing).

#### CTA
- [ ] Permitir elegir contacto alternativo (email / llamada).
- [ ] Agregar badges de confianza:
    - “+15 proyectos completados”
    - “Atención personalizada”
    - “Entrega garantizada”

#### FOOTER
- [ ] Añadir dos columnas extra:
    - Servicios
    - Portfolio / Links
- [ ] Añadir un mini-form de contacto (solo email).
- [ ] Agregar un “Built by Nivalis” con interacción tipo glow.

### EXTRAS
- [ ] Animaciones suaves al scrollear entre secciones (scroll smoothing avanzado): Tipo Apple, muy pro.
- [ ] Loader inicial: Un loader minimalista con la N en gradient.
- [ ] Metatags + SEO: Título, OG tags, structured metadata → te lo hago.
- [ ] Versión en inglés: Si vas a trabajar internacionalmente, es clave.

