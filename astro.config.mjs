import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// `site` and `base` are overridable via env so the same code can build for
// production (Netlify, custom domain, root path) and for a GitHub Pages
// project preview (github.io, served under /<repo>/).
// PLACEHOLDER: confirm final production domain before launch.
const site = process.env.PUBLIC_SITE_URL || 'https://goldsmithcasework.com';
const base = process.env.PUBLIC_BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
