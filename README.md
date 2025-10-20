# 🌐 NETCLOUD VLZA - Tecnología del Futuro

> Sitio web corporativo moderno, optimizado y progresivo (PWA) para empresa de tecnología especializada en desarrollo web, automatizaciones IA y marketing digital.

**🚀 Sitio en Producción:** https://l7manuel.github.io/netcloud-vlza/  
**📊 Estado del Proyecto:** ✅ Fase 3 Completada + Mejoras UI/UX  
**💻 Última Actualización:** 20 de Octubre, 2025

[![Deploy Status](https://github.com/L7Manuel/netcloud-vlza/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)](https://github.com/L7Manuel/netcloud-vlza/actions)

---

## 🚀 Inicio Rápido

### Requisitos
- Node.js 18+
- npm 9+

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/L7Manuel/netcloud-vlza.git
cd netcloud-vlza

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Edita .env con tu información

# Iniciar desarrollo
npm run dev
```

El sitio estará disponible en http://localhost:8080

---

## 📦 Comandos Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
npm run lint     # Verificar código
npm run deploy   # Deploy a GitHub Pages (manual)
```

---

## 🛠 Stack Tecnológico

### Core
- **React 18.3** + TypeScript 5.5
- **Vite 5.4** - Build tool ultrarrápido
- **Tailwind CSS 3.4** - Utility-first CSS
- **shadcn/ui** - Componentes UI accesibles

### State & Data
- **TanStack React Query** - Server state management
- **React Hook Form** - Formularios optimizados

### Performance & PWA
- **vite-plugin-pwa** - Progressive Web App
- **Workbox** - Service Worker con caché inteligente
- **web-vitals** - Monitoreo de Core Web Vitals

### SEO & Meta
- **react-helmet-async** - Meta tags dinámicos
- **Schema.org** - Structured data
- **Open Graph** - Social media optimization

### UI/UX
- **Lucide React** - Iconos modernos
- **Radix UI** - Primitivos accesibles
- **Framer Motion** - Animaciones fluidas

### Deploy & CI/CD
- **GitHub Pages** - Hosting gratuito
- **GitHub Actions** - Deploy automático

---

## ✨ Características Principales

### Performance ⚡
- ✅ **Code Splitting** - 11 chunks separados para carga paralela
- ✅ **Lazy Loading** - Componentes y rutas cargadas bajo demanda
- ✅ **Tree Shaking** - Bundle optimizado sin código muerto
- ✅ **Terser Minification** - Compresión agresiva (-45.6% en iconos)
- ✅ **Critical CSS Inline** - CSS crítico en <head> para FCP rápido
- ✅ **Font Subsetting** - Solo caracteres latinos (-55% en fuentes)
- ✅ **Preconnect** - DNS prefetch para recursos externos

### PWA & Offline 📦
- ✅ **Service Worker** - Caché inteligente con Workbox
- ✅ **Offline First** - Funciona sin conexión después de primera carga
- ✅ **Instalable** - Se puede instalar como app nativa
- ✅ **Manifest.json** - Metadata completa de PWA
- ✅ **20 archivos precached** - 1.18 MB en caché

### SEO & Accesibilidad 🔍
- ✅ **Meta Tags Dinámicos** - React Helmet Async
- ✅ **Schema.org** - Structured data para buscadores
- ✅ **Open Graph** - Previews en redes sociales
- ✅ **Twitter Cards** - Tarjetas enriquecidas
- ✅ **WCAG AA** - Accesibilidad completa
- ✅ **Semantic HTML** - Estructura semántica correcta

### UI/UX 🎨
- ✅ **Smooth Scroll** - Navegación fluida global
- ✅ **Scroll Animations** - Elementos que aparecen al hacer scroll
- ✅ **Microinteracciones** - Feedback visual en todos los botones
- ✅ **Loading States** - Skeletons con animación shimmer
- ✅ **Tooltips** - Guías contextuales
- ✅ **Modo Oscuro/Claro** - Tema adaptable
- ✅ **100% Responsive** - Móvil, tablet, desktop

### Monitoring 📊
- ✅ **Web Vitals** - CLS, INP, FCP, LCP, TTFB
- ✅ **Error Boundaries** - Manejo robusto de errores
- ✅ **Console Logs** - Eliminados en producción

### DevOps 🚀
- ✅ **GitHub Actions** - CI/CD automático
- ✅ **Deploy Automático** - Push to main = deploy
- ✅ **TypeScript Strict** - Type safety completo

---

## 🚀 Despliegue

### Despliegue Automático (Recomendado)

El proyecto usa GitHub Actions para despliegue automático:

1. Haz push a la rama `main`
2. GitHub Actions despliega automáticamente
3. Espera 2-3 minutos
4. Verifica en: https://l7manuel.github.io/netcloud-vlza/

### Configuración Inicial

1. Ve a **Settings → Pages** en tu repositorio
2. En **Source**, selecciona: `GitHub Actions`
3. En **Settings → Actions → General**, verifica:
   - Workflow permissions: `Read and write permissions`

### Despliegue Manual (Alternativo)

```bash
# Windows PowerShell
Remove-Item -Path dist -Recurse -Force -ErrorAction SilentlyContinue
npm run build
npm run deploy
```

---

## 📁 Estructura del Proyecto

```
src/
├── components/       # Componentes React
│   ├── ui/          # shadcn/ui components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ...
├── pages/           # Páginas
│   └── Index.tsx
├── hooks/           # Custom hooks
├── lib/             # Utilidades
└── App.tsx

public/              # Archivos estáticos
├── .nojekyll       # Evita Jekyll en GitHub Pages
├── 404.html        # Redirección SPA
└── ...
```

---

## 🔧 Configuración

### Variables de Entorno

Crea un archivo `.env` basado en `.env.example`:

```env
VITE_WHATSAPP_NUMBER=584121234567
VITE_CONTACT_EMAIL=contacto@netcloud.com
VITE_CONTACT_PHONE=+58 412-1234567
VITE_CONTACT_ADDRESS=San Diego, Carabobo, Venezuela
```

---

## 🐛 Troubleshooting

### Página en Blanco en GitHub Pages

1. Limpia caché del navegador (`Ctrl + F5`)
2. Espera 2-3 minutos después del deploy
3. Verifica en modo incógnito
4. Revisa Console (F12) para errores

### Cambios No Se Reflejan

**Con GitHub Actions:**
- Solo haz push a `main` y espera 2-3 minutos

**Con deploy manual:**
```bash
Remove-Item -Path dist -Recurse -Force
npm run build
npm run deploy
```

### Errores de Build

```bash
# Reinstalar dependencias
Remove-Item -Path node_modules -Recurse -Force
npm install

# Verificar TypeScript
npx tsc --noEmit
```

---

## 📊 Métricas de Performance

### Bundle Size
| Archivo | Tamaño | Gzip | Descripción |
|---------|---------|------|-------------|
| **vendor-react.js** | 330.85 KB | 101.53 KB | React, React DOM, Router |
| **vendor-ui.js** | 88.74 KB | 30.06 KB | Radix UI components |
| **vendor-query.js** | 27.34 KB | 8.19 KB | TanStack Query |
| **vendor-icons.js** | 8.08 KB | 3.34 KB | Lucide React (-45.6%) |
| **index.js** | 180.09 KB | 42.66 KB | App code |
| **CSS** | 76.15 KB | 12.88 KB | Tailwind + custom |
| **Total JS** | ~635 KB | ~186 KB | 11 chunks |

### Optimizaciones Logradas
- ✅ **-45.6%** en vendor-icons (14 KB → 7.62 KB)
- ✅ **-55%** en fuentes (9 pesos → 4 pesos)
- ✅ **-6.16 KB** en vendor-react gzip
- ✅ **+0.5-1s** mejora en FCP (Critical CSS)
- ✅ **20 archivos** en precache PWA

### Core Web Vitals (Estimados)
- **FCP:** < 1.5s ✅
- **LCP:** < 2.5s ✅
- **CLS:** < 0.1 ✅
- **INP:** < 200ms ✅
- **TTFB:** < 600ms ✅

---

## 📚 Documentación

- **README.md** - Este archivo (inicio rápido y overview)
- **OPTIMIZACIONES_COMPLETADAS.md** - Registro completo de todas las optimizaciones

Para información detallada sobre:
- Todas las fases de optimización implementadas
- Métricas antes/después
- Código de ejemplo y configuraciones
- Troubleshooting y decisiones técnicas

Consulta **OPTIMIZACIONES_COMPLETADAS.md**

---

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

---

## 📞 Contacto

- **GitHub:** [@L7Manuel](https://github.com/L7Manuel)
- **Sitio:** https://l7manuel.github.io/netcloud-vlza/

---

**Hecho con ❤️ por el equipo de NetCloud**
