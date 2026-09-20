# MultiCatálogo – Frontend + Backend

Proyecto de práctica que conecta un frontend en **React + TypeScript + Vite** con una API RESTful desarrollada en **Go (Fiber)**.

* **Frontend:** interfaz de usuario (login, catálogo, carrito y dashboard).
* **Backend:** API REST que proporciona autenticación y listado de productos.

---

## Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

| Herramienta | Versión recomendada        | Comprobación    |
| ----------- | -------------------------- | --------------- |
| Node.js     | 18 o superior              | `node -v`       |
| npm         | Incluido con Node.js       | `npm -v`        |
| Go          | 1.21 o superior            | `go version`    |
| Git         | Cualquier versión reciente | `git --version` |

---

## 1. Clonar el repositorio

Desde una terminal, ejecuta:

```bash
git clone <https://github.com/Peter-LOV/Cat-logo_Multinivel.git>
cd Practica_03
```

---

## 2. Ejecutar el Backend (API Go)

Ingresa a la carpeta del backend:

```bash
cd multicatalogo-backend
```

Instala o actualiza las dependencias:

```bash
go mod tidy
```

Ejecuta el servidor:

```bash
go run main.go
```

El backend estará disponible en:

```text
http://localhost:3000
```

### Endpoints disponibles

| Método | Ruta             | Descripción                                |
| ------ | ---------------- | ------------------------------------------ |
| POST   | `/api/login`     | Autenticación mediante email y contraseña  |
| GET    | `/api/productos` | Obtiene la lista de productos del catálogo |

### Credenciales de prueba

```text
Email:    admin@upse.edu.ec
Password: 123456
```

> **Importante:** mantén esta terminal abierta mientras utilices el frontend.

---

## 3. Ejecutar el Frontend (React + Vite)

Abre una **segunda terminal** en la carpeta raíz del proyecto.

Instala las dependencias:

```bash
npm install
```

Ejecuta el proyecto:

```bash
npm run dev
```

La aplicación estará disponible en:

```text
http://localhost:5173
```

---

## 4. Verificar que todo funciona

1. Abre el navegador en `http://localhost:5173`.
2. Inicia sesión utilizando las credenciales de prueba.
3. Dirígete a **Catálogo**.
4. Comprueba que los productos se cargan correctamente desde el backend.
5. Puedes abrir la consola del navegador con **F12 → Console** para revisar los mensajes de comunicación con la API.

> **Importante:** el backend debe estar ejecutándose antes de utilizar el login y el catálogo. Si el backend está apagado, el frontend mostrará errores de conexión.

---

## Estructura del proyecto

```text
Practica_03/
├── multicatalogo-backend/     # API REST desarrollada en Go (Fiber)
│   ├── controllers/           # Lógica de login y productos
│   ├── models/                # Estructuras de datos
│   ├── routes/                # Definición de rutas
│   ├── main.go                # Punto de entrada y configuración CORS
│   └── go.mod                 # Dependencias del backend
│
├── src/                       # Frontend desarrollado en React
│   ├── components/            # Login, Catálogo, Carrito, etc.
│   ├── context/               # AuthContext y CartContext
│   ├── config/
│   │   └── api.ts             # Configuración de la API
│   ├── App.tsx                # Componente principal
│   └── main.tsx               # Punto de entrada
│
├── package.json               # Dependencias y scripts del frontend
└── vite.config.ts             # Configuración de Vite
```

---

## Configuración de la API

La URL del backend utilizada por el frontend se encuentra en:

```text
src/config/api.ts
```

Por defecto, debe tener la siguiente configuración:

```typescript
export const API_BASE_URL = "http://localhost:3000";
```

Si el backend se ejecuta en una **IP diferente** o utiliza otro **puerto**, modifica únicamente el valor de `API_BASE_URL`.

Por ejemplo:

```typescript
export const API_BASE_URL = "http://192.168.1.100:3000";
```

---

## Tecnologías utilizadas

### Frontend

* React
* TypeScript
* Vite
* HTML5
* CSS3

### Backend

* Go
* Fiber
* API REST
* CORS

---

## Flujo de funcionamiento

```text
┌─────────────────────┐
│      Usuario        │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ React + TypeScript  │
│       Vite          │
└──────────┬──────────┘
           │ HTTP Requests
           ▼
┌─────────────────────┐
│    API REST Go      │
│       Fiber         │
└──────────┬──────────┘
           │
           ├── POST /api/login
           │
           └── GET /api/productos
```

---

## Autor

Proyecto desarrollado como práctica académica para la carrera de **Ingeniería de Software**.
