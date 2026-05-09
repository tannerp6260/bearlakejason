import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://tannerp6260.github.io',
  base: '/bearlakejason',
  integrations: [tailwind({ applyBaseStyles: false })],
});
