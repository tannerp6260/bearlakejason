import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
	site: 'https://bearlakejason.pages.dev',
  integrations: [tailwind(), sitemap()],
});
