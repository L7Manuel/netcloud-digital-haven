# NetCloud - Digital Haven

> Sitio web corporativo para empresa de tecnología especializada en desarrollo web, automatizaciones IA y marketing digital.

**🌐 Sitio en Producción:** https://l7manuel.github.io/netcloud-digital-haven/

---

## 🚀 Inicio Rápido

### Requisitos
- Node.js 18+
- npm 9+

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/L7Manuel/netcloud-digital-haven.git
cd netcloud-digital-haven

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

- **React 18** + TypeScript
- **Vite** - Build tool
- **Tailwind CSS** - Estilos
- **shadcn/ui** - Componentes UI
- **React Query** - State management
- **GitHub Pages** - Hosting

---

## 🎯 Características

- ⚡ Carga ultrarrápida con lazy loading
- 📱 100% responsive
- ♿ Accesibilidad WCAG AA
- 🔍 SEO optimizado
- 🌓 Modo oscuro/claro
- 🤖 Despliegue automático con GitHub Actions

---

## 🚀 Despliegue

### Despliegue Automático (Recomendado)

El proyecto usa GitHub Actions para despliegue automático:

1. Haz push a la rama `main`
2. GitHub Actions despliega automáticamente
3. Espera 2-3 minutos
4. Verifica en: https://l7manuel.github.io/netcloud-digital-haven/

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

## 📚 Documentación

- **README.md** - Este archivo (inicio rápido)
- **PROYECTO.md** - Documentación técnica completa

Para información detallada sobre:
- Optimizaciones implementadas
- Próximas mejoras sugeridas
- Troubleshooting avanzado
- Métricas de performance

Consulta **PROYECTO.md**

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
- **Sitio:** https://l7manuel.github.io/netcloud-digital-haven/

---

**Hecho con ❤️ por el equipo de NetCloud**
