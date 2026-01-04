import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import sanity from '@sanity/astro'; // <--- IMPORTANTE: Esto faltaba

// https://astro.build/config
export default defineConfig({
  // Tu dominio en formato Robot (Punycode) para Google
  site: 'https://www.xn--manolipastelesdepaales-1ec.com',

  integrations: [
    tailwind(),
    react(),
    sitemap(),
    // Aquí reconectamos Sanity para que la web funcione
    sanity({
      projectId: 'y7m52g15',
      dataset: 'global',
      useCdn: true,
      apiVersion: '2023-05-03',
    }),
  ],
});