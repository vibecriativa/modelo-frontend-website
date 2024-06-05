import { defineConfig, passthroughImageService } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import node from '@astrojs/node';
import robotsTxt from 'astro-robots-txt';
import { ClientURL } from './src/utils/project_data';
import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: ClientURL,
  integrations: [react(), tailwind({
    applyBaseStyles: false
  }), robotsTxt(), playformCompress()],
  image: {
    service: passthroughImageService()
  },
  output: 'server',
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