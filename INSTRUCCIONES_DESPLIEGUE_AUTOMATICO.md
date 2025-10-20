# 🚀 Instrucciones para Activar Despliegue Automático

## ⚠️ Problema Identificado

**Tu problema:** Los cambios no se reflejan en GitHub Pages porque:
1. No tienes configurado GitHub Actions para despliegue automático
2. Estás usando `npm run deploy` manualmente, pero no lo ejecutas después de cada cambio
3. GitHub Pages no se actualiza automáticamente cuando haces push a `main`

## ✅ Solución: GitHub Actions

He creado un workflow de GitHub Actions que desplegará automáticamente tu sitio cada vez que hagas push a la rama `main`.

## 📋 Pasos para Activar (Solo una vez)

### 1. Subir el Workflow a GitHub

```powershell
# Asegúrate de estar en la carpeta del proyecto
cd c:\Users\Windows\OneDrive\Desktop\NETCLOUD\netcloud-digital-haven

# Agregar el nuevo workflow
git add .github/workflows/deploy.yml

# Agregar también el README actualizado
git add README.md

# Commit
git commit -m "feat: Agregar workflow de GitHub Actions para despliegue automático"

# Push a GitHub
git push origin main
```

### 2. Configurar GitHub Pages

1. Ve a tu repositorio en GitHub: https://github.com/L7Manuel/netcloud-digital-haven
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, haz clic en **Pages**
4. En la sección **Source** (Origen):
   - Cambia de `Deploy from a branch` a **`GitHub Actions`**
5. Guarda los cambios

### 3. Verificar el Primer Despliegue

1. Ve a la pestaña **Actions** en tu repositorio
2. Verás el workflow "Deploy to GitHub Pages" ejecutándose
3. Espera a que termine (2-3 minutos)
4. Si ves un ✅ verde, el despliegue fue exitoso
5. Si ves un ❌ rojo, haz clic para ver los logs del error

### 4. Verificar el Sitio

Abre tu sitio: https://l7manuel.github.io/netcloud-digital-haven/

## 🎯 Cómo Funciona Ahora

### Antes (Manual - Problemático)
```
1. Haces cambios en el código
2. git add . && git commit -m "..." && git push
3. ❌ Los cambios NO aparecen en el sitio
4. Debes ejecutar manualmente: npm run deploy
5. Esperar 2-3 minutos
6. ✅ Ahora sí aparecen los cambios
```

### Ahora (Automático - Recomendado)
```
1. Haces cambios en el código
2. git add . && git commit -m "..." && git push
3. ✅ GitHub Actions despliega automáticamente
4. Esperar 2-3 minutos
5. ✅ Los cambios aparecen en el sitio
```

## 📝 Flujo de Trabajo Diario

```powershell
# 1. Haz tus cambios en el código
# (edita archivos en VS Code, etc.)

# 2. Guarda y haz commit
git add .
git commit -m "Descripción de tus cambios"

# 3. Push a GitHub
git push origin main

# 4. ¡Listo! GitHub Actions desplegará automáticamente
# Ve a la pestaña Actions para ver el progreso
```

## 🔍 Monitorear Despliegues

### Ver el Estado Actual
1. Ve a: https://github.com/L7Manuel/netcloud-digital-haven/actions
2. Verás una lista de todos los despliegues
3. El más reciente estará arriba

### Si Hay un Error
1. Haz clic en el workflow con ❌
2. Haz clic en el job "build" o "deploy"
3. Lee los logs para ver qué falló
4. Corrige el error y haz push de nuevo

## 🎨 Ejemplo de Cambio

```powershell
# Supongamos que cambias el título del sitio

# 1. Edita src/pages/Index.tsx
# 2. Guarda el archivo

# 3. Commit y push
git add src/pages/Index.tsx
git commit -m "Actualizar título del sitio"
git push origin main

# 4. Ve a Actions y espera el ✅
# 5. Refresca tu sitio en el navegador (Ctrl + F5)
# 6. ¡Verás el nuevo título!
```

## ⚡ Comandos Útiles

```powershell
# Ver el estado de Git
git status

# Ver los últimos commits
git log --oneline -5

# Ver las ramas remotas
git branch -a

# Forzar actualización desde GitHub
git pull origin main

# Ver la URL del repositorio
git remote -v
```

## 🔧 Troubleshooting

### Problema: El workflow no se ejecuta
**Solución:** Verifica que el archivo `.github/workflows/deploy.yml` exista en GitHub

### Problema: Error de permisos en Actions
**Solución:** 
1. Ve a Settings → Actions → General
2. En "Workflow permissions", selecciona "Read and write permissions"
3. Guarda y vuelve a ejecutar el workflow

### Problema: Los cambios no aparecen después del despliegue
**Solución:**
1. Limpia la caché del navegador (Ctrl + Shift + Delete)
2. O abre en modo incógnito
3. O fuerza recarga con Ctrl + F5

### Problema: Quiero volver al despliegue manual
**Solución:**
1. Settings → Pages → Source: `Deploy from a branch`
2. Branch: `gh-pages` / `/(root)`
3. Usa `npm run deploy` para desplegar manualmente

## 📊 Ventajas del Despliegue Automático

✅ **No más olvidos** - No necesitas recordar ejecutar `npm run deploy`
✅ **Más rápido** - Solo haces push y listo
✅ **Historial completo** - Puedes ver todos los despliegues en Actions
✅ **Detección de errores** - Si algo falla, lo sabrás inmediatamente
✅ **Rollback fácil** - Puedes volver a un commit anterior y hacer push

## 🎓 Recursos Adicionales

- [Documentación de GitHub Actions](https://docs.github.com/en/actions)
- [Documentación de GitHub Pages](https://docs.github.com/en/pages)
- [Guía de Vite para GitHub Pages](https://vitejs.dev/guide/static-deploy.html#github-pages)

## 📞 ¿Necesitas Ayuda?

Si tienes problemas:
1. Revisa los logs en la pestaña Actions
2. Verifica que la configuración de Pages esté en "GitHub Actions"
3. Asegúrate de que el archivo `.github/workflows/deploy.yml` exista
4. Limpia la caché del navegador

---

**Última actualización:** 20 de octubre de 2025
**Autor:** Cascade AI Assistant
