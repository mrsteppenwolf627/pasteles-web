import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: 'y7m52g15', // Este ID lo he sacado de tu captura, es el de tu proyecto
  dataset: 'global',     // El nombre que le pusimos a la base de datos
  apiVersion: '2023-05-03',
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => {
  return builder.image(source);
}