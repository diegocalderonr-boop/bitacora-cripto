import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guias' }),
  schema: z.object({
    titulo: z.string(),
    categoria: z.enum([
      'Arbitraje triangular',
      'Arbitraje P2P',
      'Arbitraje cash-and-carry',
    ]),
    fecha: z.string(),
  }),
});

export const collections = { guias };
