// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from "@sanity/astro"; // <--- ESTO FALTABA

// https://astro.build/config
export default defineConfig({
  // 1. Aquí conectamos la base de datos
  integrations: [
    sanity({
      projectId: "y7m52g15", // <--- ¡PEGA TU ID AQUÍ!
      dataset: "production",
      useCdn: true,
    }),
  ],

  // 2. Aquí configuramos el diseño
  vite: {
    plugins: [tailwindcss()]
  }
});// CAMBIO OBLIGATORIO