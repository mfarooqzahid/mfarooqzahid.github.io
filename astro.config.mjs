// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  site: 'https://mfarooqzahid.github.io',
  image: {
    domains: ['raw.githubusercontent.com'],
  },
  integrations: [
    // /pages holds standalone artifacts that are marked noindex, so keep them
    // out of the sitemap.
    sitemap({
      filter: (page) => !page.includes('/pages'),
      // Build-time timestamp; replace with per-page dates if content dates
      // are added to the frontmatter later.
      serialize: (item) => ({ ...item, lastmod: new Date().toISOString() }),
    }),
  ],
  redirects: {
    '/about': '/',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});