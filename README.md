# 🏗️ E-commerce Arquitectura Betancourt – Frontend

Frontend del proyecto **E-commerce de Arquitectura Betancourt**, una plataforma de comercio electrónico orientada a la venta de productos de construcción y la contratación de servicios arquitectónicos públicos y personalizados.

Este repositorio contiene exclusivamente la **capa Frontend**, desarrollada con tecnologías modernas y una arquitectura escalable, pensada para proyectos reales de producción.

---

## 📌 Descripción del Proyecto

El frontend es responsable de la **experiencia de usuario**, la **navegación**, la **interacción con los diferentes roles del sistema** (cliente, administrador y diseñador) y la **comunicación con el backend mediante APIs**.

La aplicación está diseñada para:

- Ofrecer una navegación fluida y rápida
- Soportar múltiples módulos y roles
- Escalar sin comprometer la mantenibilidad del código

---

## 🧑‍💻 Tecnologías Utilizadas

- **React**: Construcción de interfaces dinámicas y reutilizables
- **Next.js (App Router)**: Enrutamiento, layouts anidados, SSR y SSG
- **TypeScript**: Tipado estático para mayor robustez y calidad del código
- **Tailwind CSS**: Diseño responsivo, moderno y optimizado
- **React Query**: Manejo de estado asíncrono, cacheo y sincronización de datos

---

## 🗂️ Estructura del Proyecto

El proyecto sigue una arquitectura **feature-based**, combinada con el **App Router de Next.js**, separando claramente responsabilidades.

```bash
src/
├── app/                # Rutas y layouts (Next.js App Router)
├── features/           # Funcionalidades agrupadas por dominio
├── entities/           # Modelos de dominio (users, items)
├── shared/             # Componentes, hooks y utilidades reutilizables
├── providers/          # Proveedores globales (React Query)
├── middleware.ts       # Middleware de protección y control de acceso
├── globals.css         # Estilos globales
```

---

## 🧭 Arquitectura de Rutas

### app/

La carpeta `app/` define las rutas principales del sistema utilizando **layouts anidados**.

### (client)

Módulo público del e-commerce:

- Página principal
- Catálogo de productos
- Carrito de compras
- Checkout
- Autenticación

### admin

Panel administrativo del sistema:

- Gestión de usuarios
- Gestión de pedidos
- Facturación

### designer

Módulo para arquitectos y diseñadores:

- Gestión de proyectos
- Tareas
- Diseños personalizados

---

## 🧩 Arquitectura por Features

La carpeta `features/` organiza el código por **dominios de negocio**, permitiendo alta cohesión y bajo acoplamiento.

Cada feature incluye:

- `components/` → Componentes UI específicos del dominio
- `hooks/` → Hooks personalizados
- `services/` → Lógica de consumo de APIs
- `libs/` → Lógica auxiliar
- `utils/` → Funciones utilitarias

---

## 🧠 Entities

El directorio `entities/` contiene los modelos centrales del dominio:

- `users` → Usuarios y roles
- `items` → Productos y servicios

Esto permite separar la lógica del dominio de la capa de presentación.

---

## ♻️ Shared

El directorio `shared/` centraliza recursos reutilizables:

- Componentes UI genéricos (header, navegación, UI)
- Hooks compartidos
- Tipos globales
- Utilidades comunes

---

## 🔄 Manejo de Estado y Datos

Se utiliza **React Query** para:

- Consumo eficiente de APIs
- Cacheo automático de datos
- Manejo de estados de carga y error
- Sincronización entre vistas

Esto mejora el rendimiento y la experiencia del usuario.

---

## 🔐 Middleware

El archivo `middleware.ts` se utiliza para:

- Protección de rutas
- Control de acceso por roles
- Redirecciones automáticas

---

## 🚀 Ejecución del Proyecto

```bash
npm install pnpm
pnpm install
pnpm dev
```

---

## 📈 Beneficios de la Arquitectura

- Escalabilidad por módulos
- Código limpio y mantenible
- Separación clara de responsabilidades
- Preparado para crecimiento y producción

---

## 📌 Conclusión

El frontend del **E-commerce de Arquitectura Betancourt** está diseñado con una arquitectura moderna, profesional y escalable, enfocada en ofrecer una experiencia de usuario sólida y preparada para proyectos reales de comercio electrónico.