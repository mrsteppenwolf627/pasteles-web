import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Producto',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nombre del Producto',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL del producto)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    
    // --- GALERÍA DE IMÁGENES ---
    defineField({
      name: 'images',
      title: 'Galería de Imágenes',
      type: 'array',
      of: [
        { 
          type: 'image',
          options: {
            hotspot: true 
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texto Alternativo (Para SEO)',
            }
          ]
        }
      ],
      options: {
        layout: 'grid',
      },
      validation: (rule) => rule.required().min(1).error('Debes subir al menos una foto.'),
    }),

    // --- PRECIO (CAMBIADO A TEXTO) ---
    defineField({
      name: 'price',
      title: 'Precio (Texto)',
      description: 'Ejemplo: "Desde 50€", "45€", "Consultar". (Recuerda escribir el símbolo € tú mismo).',
      type: 'string', // AHORA ES TEXTO
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})