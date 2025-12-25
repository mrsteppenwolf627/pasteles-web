import { sanityClient } from 'sanity:client';

// 1. TU DOMINIO REAL (Cámbialo cuando compres el dominio definitivo)
const SITE_URL = "https://manolipasteles.com";

export async function GET() {
  // 2. Definimos las páginas estáticas (las que siempre existen)
  const staticPages = [
    "",
    "/productos",
    "/sobre-nosotros",
    "/contacto",
    "/aviso-legal",
    "/privacidad",
  ];

  // 3. Buscamos los productos dinámicos en Sanity para añadirlos al mapa
  let dynamicProducts = [];
  try {
    dynamicProducts = await sanityClient.fetch(`*[_type in ["producto", "product"]] { "slug": slug.current, _updatedAt }`);
  } catch (error) {
    console.error("Error generando sitemap:", error);
  }

  // 4. Generamos el XML (el lenguaje que habla Google)
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      
      ${staticPages.map((path) => `
        <url>
          <loc>${SITE_URL}${path}</loc>
          <changefreq>weekly</changefreq>
          <priority>${path === "" ? "1.0" : "0.8"}</priority>
        </url>
      `).join("")}

      ${dynamicProducts.map((product) => `
        <url>
          <loc>${SITE_URL}/productos/${product.slug}</loc>
          <lastmod>${product._updatedAt ? product._updatedAt.split('T')[0] : new Date().toISOString().split('T')[0]}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.9</priority>
        </url>
      `).join("")}

    </urlset>`.trim();

  // 5. Devolvemos el archivo listo
  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}