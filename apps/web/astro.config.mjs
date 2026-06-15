import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "css-variables",
    },
  },
  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true,
  },
  site: "https://www.verbalist.it",
  // I redirect (slug EN→IT, URL semplificate, sezioni spostate) sono 301 al
  // edge in vercel.json: niente più stub HTML meta-refresh nella build.
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/system/"),
    }),
    react(),
  ],
});
