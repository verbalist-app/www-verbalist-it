import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import { readdirSync, readFileSync } from "node:fs";

// lastmod della sitemap: la data vera dei contenuti, letta dal frontmatter
// (pubDate per post, changelog e documenti legali; lastUpdated per l'help).
// Le pagine indice prendono la data più recente dei loro figli; le altre
// pagine restano senza lastmod piuttosto che con una data inventata.
function frontmatter(dir) {
  const base = new URL(`./src/content/${dir}/`, import.meta.url);
  return readdirSync(base)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const fm = readFileSync(new URL(f, base), "utf8").split(/^---\s*$/m)[1] ?? "";
      const data = { slug: f.replace(/\.md$/, "") };
      let list = null;
      for (const line of fm.split("\n")) {
        const item = line.match(/^\s+-\s+["']?(.*?)["']?\s*$/);
        if (list && item) {
          list.push(item[1]);
          continue;
        }
        const kv = line.match(/^([A-Za-z]\w*):\s*(.*)$/);
        if (!kv) continue;
        const value = kv[2].trim().replace(/^["']|["']$/g, "");
        list = value === "" ? (data[kv[1]] = []) : null;
        if (value !== "") data[kv[1]] = value;
      }
      return data;
    });
}
const day = (s) => (s && !Number.isNaN(Date.parse(s)) ? new Date(s).toISOString().slice(0, 10) : undefined);
const latest = (days) => days.filter(Boolean).sort().at(-1);
const slugifyTag = (tag) => tag.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const lastmod = new Map();
const sections = [
  ["posts", "/blog/", "pubDate"],
  ["changelog", "/changelog/", "pubDate"],
  ["helpcenter", "/help/", "lastUpdated"],
  ["legal", "/legale/", "pubDate"],
];
for (const [dir, prefix, field] of sections) {
  const entries = frontmatter(dir).map((e) => ({ ...e, day: day(e[field]) }));
  for (const e of entries) if (e.day) lastmod.set(`${prefix}${e.slug}/`, e.day);
  lastmod.set(prefix, latest(entries.map((e) => e.day)));
  if (dir === "posts") {
    lastmod.set("/categorie/", lastmod.get(prefix));
    const byTag = new Map();
    for (const e of entries)
      for (const tag of Array.isArray(e.tags) ? e.tags : [])
        byTag.set(slugifyTag(tag), [...(byTag.get(slugifyTag(tag)) ?? []), e.day]);
    for (const [slug, days] of byTag) lastmod.set(`/categorie/${slug}/`, latest(days));
  }
}

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
      serialize(item) {
        const date = lastmod.get(new URL(item.url).pathname);
        if (date) item.lastmod = date;
        return item;
      },
    }),
    react(),
  ],
});
