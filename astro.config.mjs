// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  site: 'https://mfarooqzahid.github.io',
  integrations: [
    // /pages holds standalone artifacts that are marked noindex, so keep them
    // out of the sitemap.
    sitemap({ filter: (page) => !page.includes('/pages') }),
  ],
  redirects: {
    '/about': '/',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});