// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from "@sanity/astro"; 

// https://astro.build/config
export default defineConfig({
  // 1. Aquí conectamos la base de datos
  integrations: [
    sanity({
      projectId: "y7m52g15", 
      dataset: "global", // <--- ¡AQUÍ ESTABA EL ERROR! (Cambiado de production a global)
      useCdn: false, // Ponemos false para que se actualice al instante (sin caché)
    }),
  ],

  // 2. Aquí configuramos el diseño
  vite: {
    plugins: [tailwindcss()]
  }
});