# NetCloud - Digital Haven

Bienvenido a NetCloud, tu solución de marketing y automatizaciones. Una plataforma moderna construida con tecnologías de vanguardia para ofrecer el mejor rendimiento y experiencia de usuario.

## 🚀 Características Principales

- ⚡️ **Rendimiento Optimizado**
  - Carga ultrarrápida con Vite
  - Code-splitting automático
  - Imágenes optimizadas
  - Tamaño de bundle reducido
  - **React Performance Optimizations** - useCallback, useMemo, datos memoizados
  - **Event Handling Optimization** - Throttling con requestAnimationFrame
  - **Memory Management** - Cleanup automático de listeners

- 🎨 **Interfaz Moderna Mejorada**
  - Diseño responsivo que funciona en todos los dispositivos
  - Componentes UI accesibles con Radix UI
  - Temas claros/oscuros
  - Animaciones fluidas
  - **Nueva fuente Inter** para mejor legibilidad
  - **Gradientes vibrantes** con efectos hover dinámicos
  - **Partículas flotantes** en el fondo del hero
  - **Separadores visuales elegantes** entre secciones

- 🛠 **Tecnologías Clave**
  - ⚛️ React 18 con TypeScript
  - 🚀 Vite como bundler
  - 🎨 Tailwind CSS para estilos
  - 🔄 React Query para manejo de datos
  - 🎯 Radix UI para componentes accesibles
  - 📦 Tree-shaking para optimización de código
  - **Sistema de modales interactivos** para navegación intuitiva
  - **Botón flotante "volver arriba"** para mejor UX

## ✨ Mejoras Recientes Implementadas

### 🎯 **Nueva Arquitectura de Navegación**
- **Layout híbrido** - Página principal compacta + modales para contenido detallado
- **Sistema de tarjetas interactivas** con información específica
- **Contacto siempre visible** en la página principal
- **Navegación integrada** entre header y tarjetas

### 🎨 **Mejoras Visuales Avanzadas**
- **Gradientes dinámicos** en tarjetas con efectos hover
- **Partículas animadas** en el fondo del hero section
- **Separadores elegantes** entre secciones principales
- **Fuente Inter moderna** desde Google Fonts
- **Sistema de colores optimizado** con modo oscuro mejorado

### ⚡ **Optimizaciones de Rendimiento**
- **React Hooks optimizados** (useCallback, useMemo, useEffect)
- **Event listeners con cleanup automático** y throttling
- **Datos estáticos memoizados** fuera del componente
- **Bundle optimizado** con imports limpios
- **Scroll performance mejorado** con requestAnimationFrame

### 🔧 **Correcciones de Código**
- **CSS completamente optimizado** - reducción de 7+ warnings a 3 inevitables
- **Código duplicado eliminado** en todos los archivos
- **Imports optimizados** y estructura de archivos mejorada
- **Comentarios descriptivos** para mejor mantenibilidad

### 📱 **Características UX/UI**
- **Tarjetas más detalladas** con badges informativos
- **Información contextual** antes de abrir modales
- **Botón flotante inteligente** que aparece al hacer scroll
- **Animaciones suaves** y transiciones elegantes
- **Responsive design mejorado** para móviles

## 🚀 Comenzando

### Requisitos del Sistema

- Node.js 18 o superior
- npm 9 o superior
- Git 2.25 o superior

### Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/L7Manuel/netcloud-digital-haven.git
   cd netcloud-digital-haven
   ```

2. Instala las dependencias:
   ```sh
   npm install
   # o si prefieres usar bun (más rápido)
   bun install
   ```

3. Configura las variables de entorno:
   Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```
   VITE_API_URL=tu_api_url
   VITE_BASE_URL=/
   ```

## 🚦 Desarrollo

### Iniciar Servidor de Desarrollo

```sh
npm run dev
# o con bun
bun run dev
```

El servidor estará disponible en [http://localhost:5173](http://localhost:5173)

### Comandos Útiles

```bash
# Ejecutar linter
npm run lint

# Corregir problemas de formato
npm run format

# Ejecutar pruebas
npm test

# Analizar el bundle
npm run analyze
```

## 🏗️ Construcción y Despliegue

### Construir para Producción

```sh
npm run build
# o con bun
bun run build
```

Los archivos de producción optimizados se generarán en la carpeta `dist/`.

### Optimizaciones Incluidas

- **JavaScript**: Minificación y tree-shaking
- **CSS**: Minificación y purgado de estilos no utilizados
- **Imágenes**: Compresión automática a formatos modernos (WebP/AVIF)
- **Code Splitting**: Carga bajo demanda de rutas y componentes
- **Precarga de recursos**: Mejora en el rendimiento de carga

### Desplegar en Producción

1. **Configuración del Servidor**:
   - Asegúrate de que tu servidor esté configurado para servir archivos estáticos
   - Configura la compresión GZIP/Brotli
   - Establece encabezados de caché apropiados

2. **Variables de Entorno de Producción**:
   ```
   NODE_ENV=production
   VITE_API_URL=tu_api_url_produccion
   VITE_BASE_URL=/
   ```

## 🌐 Despliegue en GitHub Pages

### Configuración Inicial

1. Asegúrate de que tu repositorio esté configurado correctamente en GitHub:
   - Ve a la pestaña "Settings"
   - Navega a "Pages" en el menú lateral
   - Configura "Source" para usar la rama `gh-pages` y la carpeta `/(root)`
   - Habilita "Enforce HTTPS" si está disponible

### Proceso de Despliegue

1. Asegúrate de que todos tus cambios estén confirmados y enviados a GitHub:
   ```sh
   git add .
   git commit -m "Tu mensaje descriptivo"
   git push origin main
   ```

2. Ejecuta el comando de despliegue:
   ```sh
   npm run deploy
   ```
   Este comando:
   - Construirá la aplicación para producción
   - Copiará los archivos necesarios
   - Desplegará los archivos en la rama `gh-pages`

3. Tu sitio estará disponible en:
   [https://l7manuel.github.io/netcloud-digital-haven/](https://l7manuel.github.io/netcloud-digital-haven/)

### Solución de Problemas Comunes

- **Página en blanco**:
  - Verifica que la ruta base en `vite.config.ts` sea correcta
  - Asegúrate de que los archivos se hayan desplegado correctamente en la rama `gh-pages`
  - Limpia la caché del navegador con `Ctrl + F5`

- **Errores de ruta 404**:
  - Asegúrate de que el archivo `404.html` esté presente en la raíz del proyecto y en la carpeta `public/`
  - Verifica que las rutas en `App.tsx` estén configuradas correctamente

## 📁 Estructura del Proyecto

```
src/
├── assets/            # Recursos estáticos (imágenes, fuentes)
├── components/        # Componentes reutilizables
│   ├── ui/           # Componentes de UI personalizados
│   └── ...
├── hooks/            # Custom hooks
├── lib/              # Utilidades y configuraciones
├── pages/            # Componentes de página
├── App.tsx           # Componente raíz de la aplicación
└── main.tsx          # Punto de entrada de la aplicación

public/               # Archivos estáticos servidos directamente
├── favicon.ico
├── robots.txt
└── ...

# Archivos de configuración
vite.config.ts        # Configuración de Vite
tailwind.config.ts    # Configuración de Tailwind CSS
tsconfig.json         # Configuración de TypeScript
```

## 🛠 Optimizaciones Implementadas

### Code Splitting
- Rutas cargadas bajo demanda
- Componentes pesados cargados dinámicamente
- División de código por rutas y características

### Optimización de Imágenes
- Compresión automática a WebP/AVIF
- Lazy loading nativo
- Tamaños responsivos con srcset

### Rendimiento
- Preconexión a orígenes críticos
- Precarga de recursos clave
- Caché del lado del cliente
- Compresión GZIP/Brotli
- **React Performance Optimizations** con hooks avanzados

## 📦 Análisis del Bundle

Para analizar el tamaño del bundle y las dependencias:

```bash
# Instalar el analizador
npm install -D rollup-plugin-visualizer

# Ejecutar análisis
npm run build
npx vite-bundle-visualizer
```

Esto generará un informe detallado de las dependencias y su impacto en el tamaño del bundle.

## 🔄 Flujo de Trabajo de Desarrollo

1. Crea una nueva rama para tus cambios:
   ```sh
   git checkout -b nombre-de-tu-rama
   ```

2. Realiza tus cambios y verifica que todo funcione localmente

3. Haz commit de tus cambios:
   ```sh
   git add .
   git commit -m "Descripción de los cambios"
   ```

4. Sube tus cambios y crea un Pull Request

## 📝 Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE).

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1. Abre un issue para discutir los cambios propuestos
2. Haz fork del proyecto
3. Crea una rama para tu característica (`git checkout -b feature/AmazingFeature`)
4. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
5. Haz push a la rama (`git push origin feature/AmazingFeature`)
6. Abre un Pull Request

## 📞 Soporte

Para soporte, por favor abre un issue en el repositorio.
