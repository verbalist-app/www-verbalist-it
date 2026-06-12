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
  redirects: {
    // Slug inglesi del template → slug italiani
    "/about": "/chi-siamo",
    "/contact": "/contatti",
    "/customers": "/clienti",
    "/customers/[...slug]": "/clienti/[...slug]",
    "/helpcenter": "/help",
    "/helpcenter/[...slug]": "/help/[...slug]",
    "/assistenza": "/help",
    "/assistenza/[...slug]": "/help/[...slug]",
    "/legal/[...slug]": "/legale/[...slug]",
    // URL semplificate
    "/blog/tags": "/categorie",
    "/blog/tags/[tag]": "/categorie/[tag]",
    "/blog/posts/[...slug]": "/blog/[...slug]",
    // Sezioni rimosse o spostate
    "/agenti": "/#agenti",
    "/sign-in": "https://app.verbalist.it/login",
    "/sign-up": "https://app.verbalist.it/login?registration",
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/system/"),
    }),
    react(),
  ],
});
