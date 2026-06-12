// Appiattisce la sitemap di @astrojs/sitemap in un singolo /sitemap.xml
// (niente sitemap-index: con ~50 URL un file solo è più pulito).
import { readFileSync, writeFileSync, rmSync, existsSync } from "node:fs";

const dist = new URL("../dist/", import.meta.url);
const part = new URL("sitemap-0.xml", dist);
const index = new URL("sitemap-index.xml", dist);
const flat = new URL("sitemap.xml", dist);

if (existsSync(part)) {
  writeFileSync(flat, readFileSync(part));
  rmSync(part);
  if (existsSync(index)) rmSync(index);
  console.log("sitemap.xml unica generata, index rimosso");
} else {
  console.warn("sitemap-0.xml non trovata: nessun appiattimento");
}
