import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  // TU DOMINIO OFICIAL (Esto es lo clave para Google)
  site: 'https://manolipastelesdepañales.com',

  integrations: [
    tailwind(),
    react(),
    sanity({
      projectId: 'y7m52g15', // Tu ID de proyecto
      dataset: 'production',
      useCdn: true, // Usar la red rápida (gratis)
      apiVersion: '2024-03-20',
    }),
  ],
});