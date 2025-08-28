# RecipeFinder
- Aplicación web para buscar recetas de bebidas.

Tecnologías utilizadas
- Vite
- React
- TypeScript
- HTML
- CSS

Diseño y arquitectura
- Diferentes paginas con react router.
- Stores en patron slice con zustand.
- Validacion de datos con zod.
- Esquemas con zod.
- Modal con headlessui.
- Layout principal.
- Consultas a API externa en services.

Librerías externas
- react-router-dom
- zod
- zustand
- @heroicons/react
- headlessui/react
- tailwindCSS

Capturas de pantalla
![Pantalla principal](assets/screenshot%2025-08-27%1.png)
![Recetas](assets/screenshot%2025-08-27%2.png)

Instalación
- npm install
- npm run dev

Funcionalidades destacadas
- Manipulacion de diferentes paginas por medio de react router.
- Recopilacion de la informacion de las bebidas por medio de consultas a una api externa (thecocktaildb).
- Validacion de consultas con zod.
- Datos compartidos globalmente por medio de zustand con un diseño de Slice Pattern.
- Manipulacion de favoritos por medio de un slice de zustand y persistencia de datos con localstorage.
- Manipulacion de notificaciones por medio de un slice de zustand.
- Visualizacion de recetas por medio de un modal creado con headlessui/react.
- Estilos manipulados con TailwindCSS.