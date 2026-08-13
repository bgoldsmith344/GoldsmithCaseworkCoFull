import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// PUBLIC_SITE_URL / PUBLIC_BASE_PATH let CI build a relative preview (e.g. GitHub
// Pages project sites) without changing how the site behaves on its real domain,
// where it is served from the root with no base path.
const siteUrl = process.env.PUBLIC_SITE_URL || "https://goldsmithscasework.com";
const basePath = process.env.PUBLIC_BASE_PATH || "/";

export default defineConfig({
  site: siteUrl,
  base: basePath,
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
