import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://bearlakejason.com',
  integrations: [tailwind(), sitemap()],
});
