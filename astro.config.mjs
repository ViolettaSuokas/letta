import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://www.letta.fi",
  server: { host: true },
  compressHTML: true,
  output: "server",
  adapter: vercel(),
  build: {
    inlineStylesheets: `always`,
  },
  integrations: [
    sitemap({
      changefreq: "monthly",
      priority: 0.9,
      lastmod: new Date().toISOString(),
    }),
  ],
});
