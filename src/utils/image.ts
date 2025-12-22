import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from '../sanity';

const builder = imageUrlBuilder(sanityClient);

// Hemos añadido ": any" para que no de error
export function urlFor(source: any) {
  return builder.image(source);
}