import { defineConfig, passthroughImageService } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import node from '@astrojs/node';
import robotsTxt from 'astro-robots-txt';
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  site: "https://novo.agnrn.com.br/",
  integrations: [react(), tailwind({
    applyBaseStyles: false
  }), robotsTxt()],
  image: {
    service: passthroughImageService()
  },
  output: 'hybrid',
  adapter: node({
    mode: 'standalone'
  }),
  vite: {
    ssr: {
      noExternal: ["react-icons"]
    }
  },
  server: {
    port: 3000,
    host: true
  },
  compressHTML: true,
  build: {
    split: true
  }
});