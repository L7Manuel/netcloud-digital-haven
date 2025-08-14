# NetCloud - Digital Haven

Bienvenido a NetCloud, tu solución de marketing y automatizaciones

## 🚀 Características

- Interfaz de usuario intuitiva y responsiva
- Almacenamiento seguro de archivos en la nube
- Acceso rápido y fácil a tus documentos
- Compatible con múltiples dispositivos
- Interfaz construida con React y TypeScript
- Estilizado con Tailwind CSS
- ⚛️ React 18 - Biblioteca de JavaScript para interfaces de usuario
- 📦 TypeScript - JavaScript tipado estáticamente
- 🎨 Tailwind CSS - Framework CSS utilitario
- 🔄 React Query - Manejo de datos del servidor
- 🎯 Radix UI - Componentes de interfaz de usuario accesibles
- 🌐 GitHub Pages - Alojamiento estático

## 🚀 Empezando

### Requisitos previos

- Node.js 16 o superior
- npm 8 o superior
- Git

### Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/L7Manuel/netcloud-digital-haven.git
   cd netcloud-digital-haven
   ```

2. Instala las dependencias:
   ```sh
   npm install
   ```

## 🚦 Desarrollo

Para iniciar el servidor de desarrollo local:

```sh
npm run dev
```

El servidor estará disponible en [http://localhost:5173](http://localhost:5173)

## 🏗️ Construcción

Para crear una versión de producción optimizada:

```sh
npm run build
```

Los archivos de producción se generarán en la carpeta `dist/`.

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

```bash
src/
├── components/     # Componentes reutilizables
├── pages/         # Componentes de página
├── App.tsx        # Componente principal de la aplicación
└── main.tsx       # Punto de entrada de la aplicación
public/
├── 404.html       # Página de redirección personalizada
└── .nojekyll      # Archivo para deshabilitar Jekyll en GitHub Pages
```

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
