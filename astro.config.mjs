import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import sanity from '@sanity/astro'; // <--- IMPORTANTE: Esto faltaba

// https://astro.build/config
export default defineConfig({
  // Host canónico estable. El navegador puede mostrar el dominio internacionalizado;
  // Punycode evita ambigüedades en canonical, Open Graph y sitemap.
  site: 'https://www.xn--manolipastelesdepaales-1ec.com',
  trailingSlash: 'always',

  integrations: [
    tailwind(),
    react(),
    sitemap({
      // Las páginas legales siguen accesibles desde el footer, pero no deben
      // formar parte del conjunto de URLs indexables del sitemap.
      filter: (page) => !page.endsWith('/aviso-legal/') && !page.endsWith('/privacidad/') && !page.endsWith('/entrega-hospitales/'),
    }),
    // Aquí reconectamos Sanity para que la web funcione
    sanity({
      projectId: 'y7m52g15',
      dataset: 'global',
      useCdn: true,
      apiVersion: '2023-05-03',
    }),
  ],
});
