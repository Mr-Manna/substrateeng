// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://substrate.engineering',
  integrations: [react(), sitemap()],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr', 'de', 'bn', 'hi', 'ar'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
