# 🚀 Checklist de Optimizaciones Pendientes

**Fecha de creación:** 20 de Octubre, 2025  
**Estado del proyecto:** Ver `PROYECTO.md`

---

## 🤖 PROMPT PARA IA (Contexto para Próximas Sesiones)

### Resumen del Proyecto

**Nombre:** NetCloud VLZA  
**Tipo:** Sitio web corporativo React + TypeScript  
**URL Producción:** https://l7manuel.github.io/netcloud-vlza/  
**Repositorio:** https://github.com/L7Manuel/netcloud-vlza

### Stack Tecnológico Actual
- **Frontend:** React 18.3.1 + TypeScript 5.8.3 (strict mode)
- **Build Tool:** Vite 5.4.19
- **Styling:** Tailwind CSS 3.4.17 + shadcn/ui (Radix UI)
- **State:** React Query 5.83.0
- **Icons:** Lucide React 0.462.0
- **Hosting:** GitHub Pages con GitHub Actions

### Métricas Actuales (Baseline)
- **Bundle JS:** 633.57 KB (184.32 KB gzip)
- **Bundle CSS:** 73.10 KB (12.53 KB gzip)
- **Módulos:** 1,731
- **Lighthouse Score:** ~75-85
- **FCP:** 2-3 segundos
- **LCP:** 3-4 segundos
- **TTI:** 4-5 segundos

### Optimizaciones Ya Implementadas ✅
- Lazy loading de componentes (ServicesSection, AboutSection, EthicsSection)
- Skeleton loaders para mejor UX
- React hooks optimizados (useCallback, useMemo)
- Scroll throttling con requestAnimationFrame
- Error Boundaries
- SEO completo (Schema.org, Open Graph, Twitter Cards)
- Accesibilidad WCAG AA
- Despliegue automático con GitHub Actions

### Archivos Clave del Proyecto
```
├── src/
│   ├── pages/Index.tsx           # Página principal con modales
│   ├── components/
│   │   ├── ServicesSection.tsx   # Lazy loaded
│   │   ├── AboutSection.tsx      # Lazy loaded
│   │   └── EthicsSection.tsx     # Lazy loaded
├── vite.config.ts                # Configuración de build
├── .github/workflows/deploy.yml  # CI/CD automático
├── public/.nojekyll              # Crítico para GitHub Pages
├── PROYECTO.md                   # Documentación técnica completa
└── OPTIMIZACIONES_PENDIENTES.md  # Este archivo
```

### Comandos Importantes (Windows PowerShell)
```bash
# Desarrollo local
npm run dev  # → http://localhost:8080

# Build de producción
npm run build

# Preview del build
npm run preview  # → http://localhost:4173/netcloud-vlza/

# Verificar TypeScript
npx tsc --noEmit

# Linting
npm run lint

# Limpieza
Remove-Item -Path dist -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path node_modules -Recurse -Force
npm install
```

### Despliegue Automático
- **Trigger:** Push a rama `main`
- **Workflow:** `.github/workflows/deploy.yml`
- **Tiempo:** 2-3 minutos
- **Verificar:** https://github.com/L7Manuel/netcloud-vlza/actions
- **Configuración:** Settings → Pages → Source: `GitHub Actions`
- **Permisos:** Settings → Actions → Workflow permissions: `Read and write`

### Notas Importantes para la IA
1. **Usuario trabaja en Windows con PowerShell** - Usar comandos Windows
2. **Despliegue automático activo** - No necesita `npm run deploy` manual
3. **Base path en producción:** `/netcloud-vlza/` (configurado en `vite.config.ts`)
4. **Archivo `.nojekyll` es crítico** - Evita procesamiento de Jekyll en GitHub Pages
5. **Última actualización:** 20 Oct 2025 - Consolidación de documentación

### Antes de Implementar Optimizaciones
1. Leer `PROYECTO.md` para contexto completo
2. Verificar que el build actual funciona: `npm run build`
3. Hacer backup del branch: `git checkout -b backup-antes-optimizaciones`
4. Implementar cambios incrementalmente
5. Testear después de cada optimización
6. Hacer commit después de cada fase exitosa

---

## 📋 CHECKLIST DE OPTIMIZACIONES

### ⚡ FASE 1: Ganancias Rápidas (1.5-2 horas)
**Objetivo:** Reducir bundle ~35%, mejorar Lighthouse +10 puntos  
**Riesgo:** Bajo  
**Reversible:** Sí

---

#### ✅ 1. Code Splitting de Vendors (30 min) - **COMPLETADO** ✅
**Impacto:** -100-150 KB | **Prioridad:** 🔥 ALTA

- [x] **Paso 1:** Abrir `vite.config.ts`
- [x] **Paso 2:** Agregar configuración de `manualChunks` en `build.rollupOptions.output`
- [x] **Paso 3:** Ejecutar `npm run build` y verificar chunks generados
- [x] **Paso 4:** Ejecutar `npm run preview` y verificar que todo funciona
- [x] **Paso 5:** Commit: `git commit -m "perf: implement vendor code splitting"`

**Resultados obtenidos (20 Oct 2025):**
- ✅ **vendor-react.js:** 345.43 KB (107.69 KB gzip)
- ✅ **vendor-ui.js:** 91.04 KB (31.99 KB gzip)
- ✅ **vendor-query.js:** 28.44 KB (8.84 KB gzip)
- ✅ **vendor-icons.js:** 14.00 KB (3.39 KB gzip)
- ✅ **index.js:** 153.86 KB (35.75 KB gzip)
- ✅ **Total JS:** 650.80 KB (191.05 KB gzip)
- ✅ **Chunks generados correctamente** - Carga paralela optimizada

**Código a agregar:**
```typescript
// vite.config.ts
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        'vendor-react': ['react', 'react-dom', 'react-router-dom'],
        'vendor-ui': [
          '@radix-ui/react-dialog',
          '@radix-ui/react-dropdown-menu',
          '@radix-ui/react-popover',
          '@radix-ui/react-tabs',
          '@radix-ui/react-toast',
          '@radix-ui/react-tooltip',
          '@radix-ui/react-avatar',
          '@radix-ui/react-collapsible',
          '@radix-ui/react-label',
          '@radix-ui/react-slot',
        ],
        'vendor-icons': ['lucide-react'],
        'vendor-forms': ['react-hook-form', '@hookform/resolvers'],
      },
    },
  },
}
```

**Verificación:**
- Buscar en output del build: `vendor-react-[hash].js`, `vendor-ui-[hash].js`, etc.
- Comparar tamaño total antes/después

---

#### ✅ 2. Tree Shaking de Lucide Icons (20 min)
**Impacto:** -50-80 KB | **Prioridad:** 🔥 ALTA

- [ ] **Paso 1:** Buscar todos los imports de lucide-react: `grep -r "from 'lucide-react'" src/`
- [ ] **Paso 2:** Cambiar imports grupales por imports individuales
- [ ] **Paso 3:** Ejecutar `npm run build` y verificar reducción de bundle
- [ ] **Paso 4:** Verificar que todos los iconos se muestran correctamente
- [ ] **Paso 5:** Commit: `git commit -m "perf: tree shake lucide icons"`

**Antes:**
```typescript
import { Cloud, Users, Shield, Globe, Bot } from "lucide-react";
```

**Después:**
```typescript
import Cloud from "lucide-react/dist/esm/icons/cloud";
import Users from "lucide-react/dist/esm/icons/users";
import Shield from "lucide-react/dist/esm/icons/shield";
import Globe from "lucide-react/dist/esm/icons/globe";
import Bot from "lucide-react/dist/esm/icons/bot";
```

**Archivos a modificar:**
- `src/pages/Index.tsx`
- `src/components/ServicesSection.tsx`
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- Cualquier otro componente que use lucide-react

---

#### ✅ 3. Terser Avanzado (15 min)
**Impacto:** -10-20 KB | **Prioridad:** ⚡ MEDIA

- [ ] **Paso 1:** Abrir `vite.config.ts`
- [ ] **Paso 2:** Agregar configuración de Terser
- [ ] **Paso 3:** Ejecutar `npm run build` y verificar reducción
- [ ] **Paso 4:** Verificar que no hay errores en consola (F12)
- [ ] **Paso 5:** Commit: `git commit -m "perf: enable advanced terser minification"`

**Código a agregar:**
```typescript
// vite.config.ts
build: {
  minify: 'terser',
  terserOptions: {
    compress: {
      drop_console: true,      // Remover console.log en producción
      drop_debugger: true,
      pure_funcs: ['console.log', 'console.info', 'console.debug'],
    },
    format: {
      comments: false,         // Remover comentarios
    },
  },
}
```

**Verificación:**
- Abrir DevTools (F12) → Console
- No debe haber console.log en producción
- Verificar que la app funciona normalmente

---

#### ✅ 4. Preconnect a Dominios Externos (10 min)
**Impacto:** -200-500ms en carga | **Prioridad:** ⚡ MEDIA

- [ ] **Paso 1:** Abrir `index.html`
- [ ] **Paso 2:** Agregar tags `<link rel="preconnect">` en `<head>`
- [ ] **Paso 3:** Ejecutar `npm run build` y desplegar
- [ ] **Paso 4:** Verificar en Network tab (F12) que las conexiones son más rápidas
- [ ] **Paso 5:** Commit: `git commit -m "perf: add preconnect to external domains"`

**Código a agregar:**
```html
<!-- index.html - dentro de <head> -->
<!-- Preconnect a API de avatares -->
<link rel="preconnect" href="https://api.dicebear.com">
<link rel="dns-prefetch" href="https://api.dicebear.com">

<!-- Preconnect a Google Fonts (si usas) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

**Verificación:**
- Abrir DevTools → Network tab
- Filtrar por "dicebear"
- Verificar que la conexión es más rápida

---

#### ✅ 5. Testing y Verificación Final (20-30 min)

- [ ] **Build exitoso:** `npm run build` sin errores
- [ ] **Preview funciona:** `npm run preview` y navegar por todo el sitio
- [ ] **TypeScript sin errores:** `npx tsc --noEmit`
- [ ] **Linting pasa:** `npm run lint`
- [ ] **Comparar métricas:**
  - Bundle size antes vs después
  - Lighthouse score antes vs después
  - Tiempo de carga antes vs después
- [ ] **Push a GitHub:** `git push origin main`
- [ ] **Verificar deploy automático:** Actions tab en GitHub
- [ ] **Verificar sitio en producción:** https://l7manuel.github.io/netcloud-digital-haven/
- [ ] **Actualizar PROYECTO.md** con nuevas métricas

---

### 🚀 FASE 2: Optimización Media (3-4 horas)
**Objetivo:** Mejorar imágenes, fuentes y CSS  
**Riesgo:** Medio  
**Reversible:** Sí

---

#### ✅ 6. Optimización de Imágenes (60 min)
**Impacto:** -200-300 KB | **Prioridad:** 🔥 ALTA

- [ ] **Paso 1:** Instalar plugin: `npm install -D vite-plugin-imagemin`
- [ ] **Paso 2:** Configurar en `vite.config.ts`
- [ ] **Paso 3:** Convertir imágenes existentes a WebP/AVIF
- [ ] **Paso 4:** Build y verificar tamaño de imágenes
- [ ] **Paso 5:** Commit: `git commit -m "perf: optimize images with WebP/AVIF"`

**Código:**
```typescript
// vite.config.ts
import viteImagemin from 'vite-plugin-imagemin';

plugins: [
  viteImagemin({
    gifsicle: { optimizationLevel: 7 },
    optipng: { optimizationLevel: 7 },
    mozjpeg: { quality: 80 },
    webp: { quality: 80 },
    svgo: {
      plugins: [
        { name: 'removeViewBox', active: false },
        { name: 'removeEmptyAttrs', active: true },
      ],
    },
  }),
]
```

---

#### ✅ 7. Lazy Loading de Imágenes (45 min)
**Impacto:** Mejora FCP en ~1-2s | **Prioridad:** 🔥 ALTA

- [ ] **Paso 1:** Crear componente `LazyImage.tsx`
- [ ] **Paso 2:** Implementar Intersection Observer
- [ ] **Paso 3:** Reemplazar `<img>` por `<LazyImage>` en componentes
- [ ] **Paso 4:** Verificar que imágenes cargan al hacer scroll
- [ ] **Paso 5:** Commit: `git commit -m "feat: implement lazy loading for images"`

**Código:**
```typescript
// src/components/LazyImage.tsx
import { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}

export const LazyImage = ({ src, alt, className, placeholder }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src={isLoaded ? src : placeholder || 'data:image/svg+xml,...'}
      alt={alt}
      className={className}
      loading="lazy"
    />
  );
};
```

---

#### ✅ 8. Font Subsetting (40 min)
**Impacto:** -50-100 KB | **Prioridad:** ⚡ MEDIA

- [ ] **Paso 1:** Identificar fuentes usadas (Google Fonts, etc.)
- [ ] **Paso 2:** Configurar subsetting en `index.html`
- [ ] **Paso 3:** Agregar `font-display: swap`
- [ ] **Paso 4:** Preload fuentes críticas
- [ ] **Paso 5:** Commit: `git commit -m "perf: implement font subsetting and preload"`

**Código:**
```html
<!-- index.html -->
<!-- Preload fuente crítica -->
<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>

<!-- Google Fonts con subsetting -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap&subset=latin" rel="stylesheet">
```

```css
/* index.css */
@font-face {
  font-family: 'Inter';
  font-display: swap;
  /* Solo caracteres latinos + números */
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
```

---

#### ✅ 9. Critical CSS Inline (60 min)
**Impacto:** -0.5-1s en FCP | **Prioridad:** ⚡ MEDIA

- [ ] **Paso 1:** Instalar: `npm install -D vite-plugin-critical`
- [ ] **Paso 2:** Configurar en `vite.config.ts`
- [ ] **Paso 3:** Identificar CSS crítico del hero section
- [ ] **Paso 4:** Inline CSS crítico en `<head>`
- [ ] **Paso 5:** Commit: `git commit -m "perf: inline critical CSS"`

---

### 🎯 FASE 3: Avanzado (5-6 horas)
**Objetivo:** PWA, SEO avanzado, monitoreo  
**Riesgo:** Medio-Alto  
**Reversible:** Sí

---

#### ✅ 10. Service Worker + PWA (2.5 horas)
**Impacto:** Caché offline, instalable | **Prioridad:** ✅ BAJA

- [ ] **Paso 1:** Instalar: `npm install -D vite-plugin-pwa`
- [ ] **Paso 2:** Configurar en `vite.config.ts`
- [ ] **Paso 3:** Crear `manifest.json`
- [ ] **Paso 4:** Agregar iconos PWA
- [ ] **Paso 5:** Testear instalación como app
- [ ] **Paso 6:** Commit: `git commit -m "feat: implement PWA with service worker"`

**Código:**
```typescript
// vite.config.ts
import { VitePWA } from 'vite-plugin-pwa';

plugins: [
  VitePWA({
    registerType: 'autoUpdate',
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/api\.dicebear\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'dicebear-cache',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 60 * 60 * 24 * 7, // 7 días
            },
          },
        },
      ],
    },
    manifest: {
      name: 'NetCloud Digital Haven',
      short_name: 'NetCloud',
      description: 'Desarrollo web + Automatizaciones IA',
      theme_color: '#0ea5e9',
      icons: [
        {
          src: '/icon-192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icon-512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  }),
]
```

---

#### ✅ 11. Meta Tags Dinámicos (60 min)
**Impacto:** Mejor SEO | **Prioridad:** ✅ BAJA

- [ ] **Paso 1:** Instalar: `npm install react-helmet-async`
- [ ] **Paso 2:** Configurar provider en `App.tsx`
- [ ] **Paso 3:** Agregar meta tags por página/sección
- [ ] **Paso 4:** Verificar en view-source
- [ ] **Paso 5:** Commit: `git commit -m "feat: implement dynamic meta tags"`

---

#### ✅ 12. Web Vitals Monitoring (45 min)
**Impacto:** Métricas en tiempo real | **Prioridad:** ✅ BAJA

- [ ] **Paso 1:** Instalar: `npm install web-vitals`
- [ ] **Paso 2:** Implementar en `main.tsx`
- [ ] **Paso 3:** Enviar métricas a Analytics
- [ ] **Paso 4:** Crear dashboard de métricas
- [ ] **Paso 5:** Commit: `git commit -m "feat: implement web vitals monitoring"`

**Código:**
```typescript
// src/main.tsx
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  console.log(metric);
  // Enviar a Google Analytics, etc.
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

---

## 📊 Resultados Esperados

### Después de Fase 1
- **Bundle JS:** ~450 KB (120-140 KB gzip) → **-35%**
- **Lighthouse:** ~85 → **+10 puntos**
- **FCP:** ~1.5-2s → **-30%**

### Después de Fase 2
- **Bundle JS:** ~400 KB (110-120 KB gzip) → **-40%**
- **Lighthouse:** ~90 → **+15 puntos**
- **FCP:** ~1-1.5s → **-50%**
- **LCP:** ~1.5-2s → **-50%**

### Después de Fase 3
- **Bundle JS:** ~400 KB (110-120 KB gzip) → **-40%**
- **Lighthouse:** ~92-95 → **+20 puntos**
- **PWA:** ✅ Instalable, funciona offline
- **SEO:** ✅ Meta tags dinámicos
- **Monitoring:** ✅ Web Vitals en tiempo real

---

## 🔧 Herramientas de Medición

### Antes de Empezar
```bash
# Lighthouse
npx lighthouse https://l7manuel.github.io/netcloud-vlza/ --view

# Bundle analyzer
npm run build
npx vite-bundle-visualizer
```

### Después de Cada Fase
```bash
# Comparar bundle size
npm run build
# Ver output en terminal

# Lighthouse CI
npm install -g @lhci/cli
lhci autorun --url=https://l7manuel.github.io/netcloud-vlza/
```

---

## ⚠️ Notas Importantes

### Antes de Empezar
1. ✅ Hacer backup: `git checkout -b backup-antes-optimizaciones`
2. ✅ Verificar que el build actual funciona
3. ✅ Leer `PROYECTO.md` para contexto completo
4. ✅ Tener métricas baseline (Lighthouse, bundle size)

### Durante la Implementación
1. ✅ Implementar una optimización a la vez
2. ✅ Testear después de cada cambio
3. ✅ Hacer commit después de cada optimización exitosa
4. ✅ Si algo falla, revertir: `git reset --hard HEAD~1`

### Después de Completar
1. ✅ Actualizar `PROYECTO.md` con nuevas métricas
2. ✅ Marcar checkboxes completados en este archivo
3. ✅ Push a GitHub: `git push origin main`
4. ✅ Verificar deploy automático en Actions
5. ✅ Verificar sitio en producción

---

## 📞 Recursos

- **Documentación técnica:** `PROYECTO.md`
- **Repositorio:** https://github.com/L7Manuel/netcloud-vlza
- **Producción:** https://l7manuel.github.io/netcloud-vlza/
- **Actions:** https://github.com/L7Manuel/netcloud-vlza/actions

---

**Última actualización:** 20 de Octubre, 2025  
**Próxima revisión:** Después de completar Fase 1
