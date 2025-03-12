// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import icon from "astro-icon";
import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon()
  ],

  vite: {
    plugins: [tailwindcss()]
  },

  image: {
    service: passthroughImageService()
  },

  adapter: vercel()
});