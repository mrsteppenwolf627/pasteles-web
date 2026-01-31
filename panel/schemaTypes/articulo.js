import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'articulo',
  title: 'Artículo del Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título del Artículo',
      type: 'string',
      validation: (rule) => rule.required().max(70).warning('Máximo 70 caracteres para SEO'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Descripción (SEO)',
      type: 'text',
      rows: 3,
      description: 'Resumen para Google. Máximo 155 caracteres.',
      validation: (rule) => rule.required().max(155),
    }),
    defineField({
      name: 'imagenDestacada',
      title: 'Imagen Destacada',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto Alternativo (SEO)',
          validation: (rule) => rule.required(),
        }
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'categoria',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Regalos para Bebés', value: 'regalos-bebes' },
          { title: 'Guías y Consejos', value: 'guias-consejos' },
          { title: 'Hospitales y Maternidad', value: 'hospitales-maternidad' },
          { title: 'Sobre Manoli', value: 'sobre-manoli' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'fechaPublicacion',
      title: 'Fecha de Publicación',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contenido',
      title: 'Contenido del Artículo',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Cita', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Negrita', value: 'strong' },
              { title: 'Cursiva', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Enlace',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (rule) => rule.uri({
                      scheme: ['http', 'https', 'mailto', 'tel']
                    })
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texto Alternativo',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Pie de foto',
            }
          ]
        }
      ],
    }),
    defineField({
      name: 'productoRelacionado',
      title: 'Producto Relacionado (opcional)',
      type: 'reference',
      to: [{ type: 'product' }],
      description: 'Enlaza un producto para mostrarlo al final del artículo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      categoria: 'categoria',
      media: 'imagenDestacada',
    },
    prepare({ title, categoria, media }) {
      return {
        title,
        subtitle: categoria,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Fecha de Publicación',
      name: 'fechaDesc',
      by: [{ field: 'fechaPublicacion', direction: 'desc' }],
    },
  ],
})
