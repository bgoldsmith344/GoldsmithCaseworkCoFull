import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production site URL — used for sitemap, canonical URLs, and Open Graph tags.
// PLACEHOLDER: confirm final domain before launch.
export default defineConfig({
  site: 'https://goldsmithcasework.com',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
