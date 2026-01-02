# 🧱 Frontend Architecture – E-commerce Arquitectura Betancourt

Este documento describe la **arquitectura Frontend** del proyecto **E-commerce Arquitectura Betancourt**, explicando la organización del código, las decisiones estructurales y la relación entre rutas, features y capas compartidas.

La arquitectura está diseñada para ser **escalable, mantenible y alineada con proyectos reales de producción**, utilizando **Next.js App Router**, **arquitectura por features** y **separación por dominios**.

---

## 🎯 Objetivo de la Arquitectura

- Separar claramente responsabilidades
- Facilitar la escalabilidad por módulos
- Soportar múltiples roles (cliente, admin, diseñador)
- Evitar acoplamiento entre UI, dominio y lógica de negocio
- Permitir crecimiento sin refactorizaciones costosas

---

## 🏗️ Visión General

El frontend se estructura en **tres niveles principales**:

1. **Routing & Layouts** → `app/`
2. **Dominios de Negocio** → `features/` y `entities/`
3. **Capa Compartida** → `shared/` y `providers/`

```text
UI (app)
│
├── Features (lógica por dominio)
│
├── Entities (modelos de dominio)
│
└── Shared / Providers (infraestructura común)
```

---

## 🧭 Routing Layer (Next.js App Router)

### 📁 app/

La carpeta `app/` define las rutas, layouts y entry points de la aplicación usando Next.js App Router y layouts anidados.

```text
app/
├── (client)     → Área pública del e-commerce
├── admin        → Panel administrativo
├── designer     → Área de diseñadores/arquitectos
├── api          → API Routes (BFF)
└── globals.css  → Estilos globales
```

### (client)

Zona pública accesible a clientes finales:

- Home
- Productos
- Carrito
- Checkout
- Autenticación

### admin

Panel administrativo del sistema:

- Gestión de usuarios
- Pedidos
- Facturación
- Proyectos

### designer

Área especializada para arquitectos y diseñadores:

- Proyectos
- Tareas
- Diseños personalizados

### api/

API Routes de Next.js usadas como Backend for Frontend (BFF) para eventos e integraciones específicas del frontend.

---

## 🧩 Feature-Based Architecture

### 📁 features/

El core de la lógica de la aplicación se organiza por dominios de negocio, no por tipo técnico.

```text
features/
├── Admin
├── Design
└── public
```

Cada feature encapsula todo lo necesario para su dominio:

```text
feature/
├── components/  → UI específica del dominio
├── hooks/       → Hooks personalizados
├── services/    → Comunicación con APIs
├── libs/        → Lógica interna del dominio
└── utils/       → Utilidades específicas
```

#### Beneficios

- Alta cohesión
- Bajo acoplamiento
- Fácil eliminación o extensión de módulos
- Código predecible y navegable

---

## 🧠 Domain Layer (Entities)

### 📁 entities/

Define los modelos centrales del dominio, independientes de la UI.

```text
entities/
├── users
└── items
```

Responsabilidades:

- Tipos
- Interfaces
- Reglas básicas del dominio

Esto evita que la lógica de negocio quede acoplada a componentes visuales.

---

## ♻️ Shared Layer

### 📁 shared/

Contiene recursos reutilizables en toda la aplicación:

```text
shared/
├── components   → UI genérica (header, navegación, UI base)
├── hooks        → Hooks compartidos
├── api          → Clientes HTTP
├── types        → Tipos globales
├── utils        → Funciones utilitarias
├── styles       → Estilos compartidos
└── lib          → Helpers comunes
```

Esta capa no conoce los features, pero los features sí pueden usarla.

---

## 🔄 State & Data Management

### 📁 providers/

```text
providers/
└── react-query.tsx
```

Se utiliza React Query para:

- Fetching de datos
- Cacheo inteligente
- Sincronización automática
- Manejo de estados de carga y error

Esto reduce lógica manual y mejora el rendimiento percibido.

---

## 🔐 Middleware & Seguridad

### 📄 middleware.ts

Se utiliza para:

- Protección de rutas
- Control de acceso por roles
- Redirecciones automáticas
- Validaciones previas a la renderización

Permite aplicar reglas de seguridad a nivel global.

---

## 📁 Recursos Adicionales

- `assets/` → Recursos estáticos
- `docs/` → Documentación interna del proyecto
- `favicon.ico` → Icono de la aplicación

---

## 📐 Principios Aplicados

- **Separation of Concerns**
- **Feature-first architecture**
- **Single Responsibility**
- **Scalability by design**
- **Maintainability over time**

---

## 📌 Conclusión

La arquitectura Frontend del **E-commerce Arquitectura Betancourt** está diseñada para soportar un sistema real de comercio electrónico con múltiples roles, flujos complejos y crecimiento progresivo.

La combinación de **Next.js App Router**, **arquitectura por features**, **entidades de dominio** y **capas compartidas** garantiza un frontend robusto, profesional y preparado para producción.