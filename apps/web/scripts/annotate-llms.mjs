// Postbuild: annota ogni voce-link di dist/llms.txt con una stima dei token
// del contenuto della pagina, es. "(~1850 token)". Serve agli agenti per
// decidere il budget di contesto prima di fetchare (convenzione llmstxt.org).
// La sorgente public/llms.txt resta pulita e curata a mano: l'arricchimento
// avviene solo nella build, quindi i numeri non diventano mai stantii.
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const dist = new URL("../dist/", import.meta.url);
const llms = new URL("llms.txt", dist);

if (!existsSync(llms)) {
  console.warn("dist/llms.txt non trovata: nessuna annotazione");
  process.exit(0);
}

// ~4 caratteri per token: euristica grezza ma adeguata come stima di budget
// (il tilde segnala l'approssimazione). Arrotondata a multipli di 50.
const estimateTokens = (text) => Math.round(text.length / 4 / 50) * 50;

// Estrae il testo leggibile di una pagina: per i .md è già pulito; per gli
// HTML prende solo <main> (esclude nav/footer) e toglie tag, script e stili.
function contentTokens(urlPath) {
  const clean = urlPath.replace(/^\/+|\/+$/g, "");
  const candidates = [];
  if (clean === "") candidates.push("index.html");
  else {
    candidates.push(`${clean}.md`); // post del blog: /blog/<slug>.md
    candidates.push(`${clean}/index.html`);
    candidates.push(`${clean}.html`);
  }
  for (const rel of candidates) {
    const file = new URL(rel, dist);
    if (!existsSync(file)) continue;
    let raw = readFileSync(file, "utf8");
    if (rel.endsWith(".md")) return estimateTokens(raw.trim());
    const main = /<main[^>]*>([\s\S]*?)<\/main>/i.exec(raw)?.[1] ?? raw;
    const text = main
      .replace(/<(script|style|svg)[^>]*>[\s\S]*?<\/\1>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/&[a-z]+;|&#\d+;/gi, " ")
      .replace(/\s+/g, " ")
      .trim();
    return estimateTokens(text);
  }
  return null;
}

const lines = readFileSync(llms, "utf8").split("\n");
let annotated = 0;

const out = lines.map((line) => {
  // Solo le voci elenco con link: "- [testo](url): descrizione"
  const m = /^- \[[^\]]+\]\((https?:\/\/[^)]+|\/[^)]*)\):/.exec(line);
  if (!m) return line;
  if (/~\d+\s*token/.test(line)) return line; // già annotata
  const path = m[1].replace(/^https?:\/\/[^/]+/, "") || "/";
  const tokens = contentTokens(path);
  if (!tokens) return line;
  annotated++;
  return `${line.replace(/\s+$/, "")} (~${tokens} token)`;
});

writeFileSync(llms, out.join("\n"));
console.log(`llms.txt: ${annotated} voci annotate con stima token`);
