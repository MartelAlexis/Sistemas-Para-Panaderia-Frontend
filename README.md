# Sistemas Para Panadería — Frontend

Aplicación frontend en React (Vite) para la tienda web y la gestión administrativa de una panadería: interfaz pública (home, catálogo, checkout, ubicación), área de usuario (perfil y pedidos) y panel administrativo (dashboard, inventario, pedidos, tiendas, usuarios).

## Stack
- **Lenguaje:** JavaScript
- **Framework / runtime:** React (Vite)
- **Dependencias destacadas:** React 19, react-router-dom (ruteo), Tailwind CSS, Axios (HTTP), @vis.gl/react-google-maps (mapas)

## Estructura del repositorio (resumen)
```text
.
├─ index.html                # Punto de entrada HTML (carga /src/main.jsx)
├─ package.json
├─ package-lock.json
├─ vite.config.js
├─ vercel.json               # Configuración de despliegue en Vercel (si aplica)
├─ public/                   # Archivos estáticos públicos
└─ src/
   ├─ main.jsx               # Bootstrap: registra toast personalizado y monta App
   ├─ index.css
   ├─ App.jsx                # Rutas principales y estructura de layouts
   ├─ App.css
   ├─ assets/                # Imágenes y recursos
   ├─ components/
   │  ├─ layout/             # MainLayout, AdminLayout, UserLayout, Navbar, Footer
   │  ├─ admin/              # Componentes del panel admin
   │  ├─ shared/             # Componentes reutilizables
   │  └─ ui/                 # Elementos UI
   ├─ pages/
   │  ├─ public/             # Home, About, Location, Pasteles, Postres, Checkout, LoginAdmin
   │  ├─ user/               # Profile, OrdersU
   │  └─ admin/              # Dashboard, Inventory, Orders, Stores, Users
   ├─ contexts/              # Providers / estado global
   ├─ hooks/                 # Hooks personalizados
   ├─ services/              # Lógica de llamadas a la API (Axios)
   └─ utils/                 # Utilidades auxiliares
```

### Cómo encaja todo
- `index.html` carga el bundle y arranca `src/main.jsx`.  
- `main.jsx` reemplaza `window.alert` por un toast personalizado y monta `<App />`.  
- `App.jsx` configura `react-router-dom` con tres áreas: rutas públicas bajo `MainLayout`, rutas de usuario bajo `UserLayout` y rutas administrativas bajo `AdminLayout`. Las vistas están en `src/pages/*` y la comunicación con el backend se organiza en `src/services`.

## Rutas principales
- Públicas: `/` (home), `/about`, `/ubicanos` (ubicación), `/pasteles`, `/postres`, `/checkout`, `/login` (login admin)
- Usuario: `/account` → `/account` (perfil), `/account/orders` (pedidos)
- Admin: `/admin` → `/admin` (dashboard), `/admin/inventory`, `/admin/orders`, `/admin/stores`, `/admin/users`

## Cómo ejecutar (desde un clon fresco)
```bash
# Instalar dependencias
npm install

# Modo desarrollo (Vite)
npm run dev

# Construir producción
npm run build

# Vista previa del build
npm run preview

# Lint
npm run lint
```

Notas:
- El proyecto usa Vite; si la app consume una API espera variables de entorno de build con prefijo `VITE_` (por ejemplo `VITE_API_URL`) — revisa `src/services` para confirmar nombres exactos.
- `index.html` referencia `/Brisseli-1.png` — revisa `public/` y `src/assets/` para verificar imágenes necesarias.
- `src/main.jsx` sobrescribe `window.alert` con un toast personalizado; esto afecta comportamientos que dependan de alertas nativas.

## Puntos clave del código
- `src/main.jsx`: implementación del toast/alert personalizado y arranque de la app.
- `src/App.jsx`: ruteo y separación de layouts (public, user, admin).
- `src/components/layout/*`: Navbar, Footer, MainLayout, AdminLayout, UserLayout.
- `src/services/*`: wrappers de Axios para llamadas a API (revisa para ver qué endpoints y variables de entorno se usan).
- `vercel.json` y `vite.config.js`: configuración de despliegue y bundling.

## Recomendaciones rápidas antes de desplegar
- Confirmar y configurar las variables de entorno (p. ej. `VITE_API_URL`) en Vercel o en el entorno de producción.
- Revisar autenticación y protección de rutas administrativas (guards); desde `App.jsx` se definen las rutas, pero revisa si existe lógica de autorización en `components` o `contexts`.
- Verificar que todas las imágenes referenciadas existan en `public/` o `src/assets/`.

## Preguntas útiles (para aclarar o completar)
- ¿Qué variables de entorno espera `src/services` (por ejemplo `VITE_API_URL`)? ¿Quieres que las documente en este README?
- ¿La autenticación y protección de rutas (admin / account) ya están implementadas o preferirías que añada un ejemplo con guards y contexto de auth?
- ¿Quieres que suba este README.md al repo y cree un PR, o prefieres revisarlo y ajustarlo aquí antes?

---
Si quieres, lo añado al repo como `README.md` en la rama principal o creo una nueva rama y PR con el cambio. Dime cómo prefieres proceder.
