import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // ---------------------------------------------------------
  // EL CAMBIO IMPORTANTE ESTÁ AQUÍ ABAJO (Tu dominio Punycode)
  // ---------------------------------------------------------
  site: 'https://www.xn--manolipastelesdepaales-1ec.com',

  // Tus integraciones
  integrations: [
    tailwind(),
    react(),
    sitemap(),
  ],
});