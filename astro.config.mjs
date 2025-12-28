import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sanity from '@sanity/astro';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://manolipastelesdepañales.com',
  integrations: [tailwind(), react(), sanity({
    projectId: 'y7m52g15',
    dataset: 'global', // <--- ¡AQUÍ ESTABA EL DUENDE! 😈 Antes ponía 'production'
    useCdn: true,
    apiVersion: '2024-03-20',
  }), sitemap()],
});