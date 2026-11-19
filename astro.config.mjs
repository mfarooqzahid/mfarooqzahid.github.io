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
    sitemap({
      // Build-time timestamp; replace with per-page dates if content dates
      // are added to the frontmatter later.
      serialize: (item) => ({ ...item, lastmod: new Date().toISOString() }),
    }),
  ],
  redirects: {
    '/about': '/',
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});