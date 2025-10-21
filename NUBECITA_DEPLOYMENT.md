# ☁️ Guía de Deployment - Nubecita AI Assistant

> Documentación completa para desplegar Nubecita con n8n en diferentes escenarios de producción.

**Última actualización:** 20 de Octubre, 2025  
**Versión:** 1.0.0

---

## 📋 Tabla de Contenidos

1. [Escenarios de Deployment](#-escenarios-de-deployment)
2. [Comparativa Rápida](#-comparativa-rápida)
3. [Opción A: Semi-Automático](#-opción-a-semi-automático)
4. [Opción B: VPS 24/7](#-opción-b-vps-247)
5. [Opción C: n8n.cloud](#-opción-c-n8ncloud)
6. [Ngrok para Testing](#-ngrok-para-testing-externo)
7. [Variables de Entorno](#-variables-de-entorno)
8. [Roadmap Recomendado](#-roadmap-recomendado)
9. [Troubleshooting](#-troubleshooting)

---

## 🎯 Escenarios de Deployment

Nubecita puede desplegarse en **3 escenarios diferentes** según tus necesidades, presupuesto y fase del proyecto.

---

## 📊 Comparativa Rápida

| Característica | Semi-Automático | VPS 24/7 | n8n.cloud |
|----------------|-----------------|----------|-----------|
| **Costo** | 💰 Gratis | 💰💰 $5-10/mes | 💰 Gratis / 💰💰💰 Pago |
| **Disponibilidad** | ⏰ Horario PC | ✅ 24/7 | ✅ 24/7 |
| **Configuración** | ⭐⭐⭐ Fácil | ⭐⭐ Media | ⭐⭐⭐ Muy Fácil |
| **Mantenimiento** | 🔧 Bajo | 🔧🔧 Medio | 🔧 Ninguno |
| **Control** | ✅ Total | ✅ Total | ⚠️ Limitado |
| **Escalabilidad** | ❌ Limitada | ✅ Alta | ✅ Muy Alta |
| **Ideal para** | Testing/MVP | Producción | Escalado |
| **Clientes soportados** | 5-10 | 50-100+ | 100-1000+ |

---

## 🏠 Opción A: Semi-Automático

### ⭐ Características

**Pros:**
- ✅ **Costo:** $0 (completamente gratis)
- ✅ **Control total** sobre tu instancia
- ✅ **Perfecto para testing** y validación de producto
- ✅ **Fácil de configurar** en minutos
- ✅ **Ideal para MVP** y primeros clientes

**Contras:**
- ❌ Solo funciona cuando tu PC está encendida
- ❌ No es 24/7 real
- ❌ Dependiente de tu conexión a internet
- ❌ No recomendado para más de 10 clientes

### 🎯 Casos de Uso Ideales

1. **Desarrollo y Testing**
2. **MVP y Validación** (primeros 5-10 clientes)
3. **Horario Comercial** (9am-6pm)
4. **Presupuesto Limitado**

### 🔧 Configuración

#### 1. Verificar Docker

```powershell
docker --version
docker ps
```

#### 2. Iniciar n8n

```powershell
cd C:\ruta\a\tu\proyecto\n8n
docker-compose up -d
docker ps
```

#### 3. Acceder a n8n

Abre: **http://localhost:5678**

#### 4. Configurar Credenciales

- ✅ Google Gemini API
- ✅ Google Drive OAuth2
- ✅ Email SMTP
- ✅ Google Sheets

#### 5. Obtener URL del Webhook

```
http://localhost:5678/webhook/chat-lead-webhook
```

#### 6. Configurar Website

Crear `.env.local`:

```env
VITE_NUBECITA_WEBHOOK_URL=http://localhost:5678/webhook/chat-lead-webhook
```

#### 7. Descomentar Código

En `src/hooks/useNubecita.ts` (líneas 127-131):

```typescript
await fetch(webhookUrl, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload),
});
```

#### 8. Probar

```powershell
npm run dev
```

### 📝 Inicio Automático (Opcional)

Crear `inicio_n8n.bat`:

```batch
@echo off
echo Iniciando n8n...
cd C:\ruta\a\tu\proyecto\n8n
docker-compose up -d
echo n8n iniciado correctamente!
pause
```

Agregar al inicio de Windows:
- `Win + R` → `shell:startup`
- Copiar el archivo `.bat` ahí

---

## 🌐 Opción B: VPS 24/7

### ⭐ Características

**Pros:**
- ✅ Disponibilidad 24/7 real
- ✅ Control total
- ✅ Escalable
- ✅ IP fija

**Contras:**
- ❌ Costo: $5-10/mes
- ❌ Configuración técnica
- ❌ Mantenimiento requerido

### 💰 Proveedores Recomendados

| Proveedor | Precio | Specs |
|-----------|--------|-------|
| **DigitalOcean** | $6/mes | 1GB RAM, 1 vCPU, 25GB SSD |
| **Vultr** | $5/mes | 1GB RAM, 1 vCPU, 25GB SSD |
| **Hetzner** | €4/mes | 2GB RAM, 1 vCPU, 20GB SSD |

### 🔧 Setup Rápido

```bash
# Conectar
ssh root@tu-ip

# Instalar Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Instalar n8n
mkdir /opt/n8n && cd /opt/n8n
nano docker-compose.yml
# [Pegar configuración]
docker-compose up -d
```

---

## ☁️ Opción C: n8n.cloud

### ⭐ Características

**Pros:**
- ✅ Sin gestión de servidores
- ✅ Escalado automático
- ✅ Backups incluidos

**Contras:**
- ❌ Costo variable
- ❌ Menos control

### 💰 Planes

| Plan | Precio | Ejecuciones |
|------|--------|-------------|
| **Starter** | Gratis | 5,000/mes |
| **Pro** | $20/mes | 10,000/mes |

### 🔧 Setup

1. Registrarse en https://n8n.cloud
2. Importar workflow
3. Configurar credenciales
4. Obtener webhook URL

---

## 🌐 Ngrok para Testing Externo

### ¿Qué es Ngrok?

Túnel seguro desde internet hacia tu PC local.

### 📥 Instalación Windows

#### Opción 1: Descarga Directa

1. Ir a: https://ngrok.com/download
2. Descargar Windows (64-bit)
3. Descomprimir
4. Mover a: `C:\Program Files\ngrok\`

#### Opción 2: Chocolatey

```powershell
choco install ngrok
```

### 🔑 Configuración

1. Crear cuenta: https://dashboard.ngrok.com/signup
2. Obtener authtoken: https://dashboard.ngrok.com/get-started/your-authtoken
3. Configurar:

```powershell
cd "C:\Program Files\ngrok"
.\ngrok.exe config add-authtoken TU_TOKEN_AQUI
```

### 🚀 Uso

```powershell
# Iniciar n8n
docker-compose up -d

# Iniciar ngrok
cd "C:\Program Files\ngrok"
.\ngrok.exe http 5678
```

Ngrok mostrará:

```
Forwarding  https://abc123.ngrok.io -> http://localhost:5678
```

Tu webhook será:
```
https://abc123.ngrok.io/webhook/chat-lead-webhook
```

### ⚙️ Configurar en Website

Crear `.env.ngrok`:

```env
VITE_NUBECITA_WEBHOOK_URL=https://abc123.ngrok.io/webhook/chat-lead-webhook
```

### ⚠️ Limitaciones Plan Gratuito

- URL cambia cada vez que reinicias ngrok
- Sesiones de 2 horas máximo
- 40 conexiones/minuto

### 💎 Plan Pago ($8/mes)

- URL fija personalizada
- Sin límite de tiempo
- Sin límite de conexiones

---

## 🔧 Variables de Entorno

### Desarrollo Local

`.env.local`:
```env
VITE_NUBECITA_WEBHOOK_URL=http://localhost:5678/webhook/chat-lead-webhook
```

### Testing con Ngrok

`.env.ngrok`:
```env
VITE_NUBECITA_WEBHOOK_URL=https://abc123.ngrok.io/webhook/chat-lead-webhook
```

### Producción VPS

`.env.production`:
```env
VITE_NUBECITA_WEBHOOK_URL=https://api.tudominio.com/webhook/chat-lead-webhook
```

### Producción n8n.cloud

`.env.production`:
```env
VITE_NUBECITA_WEBHOOK_URL=https://tu-instancia.app.n8n.cloud/webhook/chat-lead-webhook
```

---

## 📱 Roadmap Recomendado

### Fase 1: Desarrollo (Semana 1-2)

**Objetivo:** Probar que todo funciona

- ✅ Setup local con Docker
- ✅ Workflow importado
- ✅ Credenciales configuradas
- ✅ Testing completo del flujo
- ✅ Ajustes de prompts Gemini

**Escenario:** Semi-Automático (Local)

---

### Fase 2: MVP (Semana 3-4)

**Objetivo:** Primeros clientes reales

- ✅ Ngrok configurado
- ✅ Website en producción
- ✅ 3-5 clientes beta
- ✅ Recopilar feedback
- ✅ Ajustar flujo según feedback

**Escenario:** Semi-Automático + Ngrok

---

### Fase 3: Escalado (Mes 2+)

**Objetivo:** Crecimiento sostenible

- ✅ Migrar a VPS o n8n.cloud
- ✅ Dominio personalizado
- ✅ SSL configurado
- ✅ Monitoreo activo
- ✅ 10+ clientes activos

**Escenario:** VPS 24/7 o n8n.cloud

---

## 🐛 Troubleshooting

### n8n no inicia

```powershell
# Ver logs
docker logs n8n

# Reiniciar
docker-compose restart

# Rebuild
docker-compose down
docker-compose up -d
```

### Webhook no responde

1. Verificar n8n está corriendo: `docker ps`
2. Verificar URL correcta en `.env`
3. Verificar código descomentado en `useNubecita.ts`
4. Ver logs de n8n: `docker logs -f n8n`

### Ngrok desconectado

```powershell
# Reiniciar ngrok
.\ngrok.exe http 5678

# Actualizar URL en .env
# Rebuild website
npm run build
```

### Credenciales Google no funcionan

1. Verificar OAuth consent screen configurado
2. Verificar redirect URI en Google Console
3. Regenerar credenciales si es necesario

### Error "CORS"

Agregar en n8n:
```yaml
environment:
  - N8N_CORS_ORIGIN=https://tudominio.com
```

---

## 📞 Soporte

**Documentación oficial:**
- n8n: https://docs.n8n.io
- Ngrok: https://ngrok.com/docs

**Comunidad:**
- n8n Forum: https://community.n8n.io
- Discord: https://discord.gg/n8n

---

## 📝 Checklist de Deployment

### Pre-Deploy
- [ ] Docker instalado y corriendo
- [ ] n8n configurado localmente
- [ ] Workflow importado
- [ ] Credenciales Google configuradas
- [ ] Testing local exitoso

### Deploy Semi-Automático
- [ ] Inicio automático configurado
- [ ] Webhook URL en `.env.local`
- [ ] Código descomentado
- [ ] Website testeado localmente

### Deploy con Ngrok
- [ ] Ngrok instalado
- [ ] Authtoken configurado
- [ ] Túnel iniciado
- [ ] URL pública en `.env.ngrok`
- [ ] Website rebuild y deploy

### Deploy VPS
- [ ] VPS contratado
- [ ] Docker instalado en VPS
- [ ] n8n corriendo en VPS
- [ ] Dominio configurado (opcional)
- [ ] SSL configurado (opcional)
- [ ] Webhook URL en `.env.production`

---

**¡Listo para desplegar Nubecita! 🚀**
