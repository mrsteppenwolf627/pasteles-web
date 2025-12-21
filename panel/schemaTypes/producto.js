export default {
    name: 'producto',
    title: 'Productos', // Así aparecerá en el menú
    type: 'document',
    fields: [
      {
        name: 'nombre',
        title: 'Nombre del Pastel',
        type: 'string',
        validation: rule => rule.required()
      },
      {
        name: 'precio',
        title: 'Precio (€)',
        type: 'number',
        validation: rule => rule.required().min(0)
      },
      {
        name: 'imagen',
        title: 'Foto del Producto',
        type: 'image',
        options: {
          hotspot: true, // Permite recortar la foto luego
        }
      },
      {
        name: 'categoria',
        title: 'Categoría',
        type: 'string',
        options: {
          list: [
            { title: 'Castillos', value: 'Castillos' },
            { title: 'Vehículos (Motos, Triciclos...)', value: 'Vehículos' },
            { title: 'Cestas y Canastillas', value: 'Cestas' },
            { title: 'Clásicos', value: 'Clásicos' },
            { title: 'Temáticos (Música, Fútbol...)', value: 'Temáticos' },
          ],
        },
        validation: rule => rule.required()
      },
      {
        name: 'descripcion',
        title: 'Descripción Corta',
        type: 'text',
        rows: 3
      }
    ]
  }