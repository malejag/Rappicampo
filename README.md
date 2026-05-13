# RappiCampo Frontend

Aplicación web para comercio electrónico rural construida con React, Vite, Tailwind CSS y React Router.

## Funcionalidades incluidas

- Landing page completa.
- Login y registro simulado por roles.
- Rutas protegidas por rol.
- Catálogo de productos conectado a FastAPI cuando `VITE_USE_MOCKS=false`.
- Detalle de producto.
- Carrito funcional con localStorage.
- Checkout conectado a `POST /api/orders`.
- Seguimiento de pedido con timeline.
- Chat / asistente IA conectado a `POST /api/chat`.
- Panel Cliente Rural.
- Panel Tienda/Supermercado.
- Panel Repartidor.
- Panel Administrador.

## Ejecutar localmente

```bash
npm install
cp .env.example .env
npm run dev
```

Para trabajar sin backend local:

```env
VITE_USE_MOCKS=true
```

Para consumir la API real:

```env
VITE_API_URL=https://api.tudominio.com
VITE_USE_MOCKS=false
```

## GitHub Pages

Este frontend usa `HashRouter` para evitar problemas al recargar rutas en GitHub Pages.

El workflow principal está en:

```text
../.github/workflows/deploy-github-pages.yml
```

El `base` de Vite se configura automáticamente en GitHub Actions con:

```text
/${{ github.event.repository.name }}/
```

En GitHub debe configurar el secreto:

```text
VITE_API_URL=https://api.tudominio.com
```
