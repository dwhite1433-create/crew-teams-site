import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://crewteams.ai',
  integrations: [sitemap({ filter: (page) => !page.includes('/thanks') })],
});
