// One-off: genera il TL;DR ("In breve") dei post del blog con l'API
// Anthropic e lo scrive nel frontmatter (campo `tldr`). I post che hanno
// già un tldr vengono saltati: rilanciare lo script è sicuro.
//
// Uso:  ANTHROPIC_API_KEY=sk-ant-... node scripts/generate-tldr.mjs
import Anthropic from "@anthropic-ai/sdk";
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POSTS_DIR = new URL("../src/content/posts/", import.meta.url).pathname;

const client = new Anthropic();

const SYSTEM = `Sei l'editor del blog di Verbalist, un software italiano per
contenuti SEO e GEO. Scrivi il TL;DR di un articolo: esattamente 3 punti in
italiano. Regole: ogni punto è una frase singola, fattuale e asciutta (massimo
20 parole circa); dà una risposta o un fatto chiave dell'articolo, utile anche
a chi non lo leggerà; niente sensazionalismo, niente esortazioni ("scopri",
"non perdere"), niente gergo non spiegato. Il primo punto risponde alla
domanda principale dell'articolo.`;

const schema = {
  type: "object",
  properties: {
    tldr: {
      type: "array",
      items: { type: "string" },
      description: "Esattamente 3 punti, frasi singole in italiano",
    },
  },
  required: ["tldr"],
  additionalProperties: false,
};

const files = readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));

for (const file of files) {
  const path = join(POSTS_DIR, file);
  const src = readFileSync(path, "utf8");

  if (/^tldr:/m.test(src)) {
    console.log(`= ${file} (tldr già presente, salto)`);
    continue;
  }

  const fmEnd = src.indexOf("---", 4);
  const frontmatter = src.slice(0, fmEnd);
  const body = src.slice(fmEnd + 3).trim();
  const title = /title:\s*["']?(.+?)["']?\s*$/m.exec(frontmatter)?.[1] ?? file;

  const response = await client.messages.create({
    model: "claude-opus-4-8",
    max_tokens: 1024,
    system: SYSTEM,
    output_config: { format: { type: "json_schema", schema } },
    messages: [
      {
        role: "user",
        content: `TITOLO: ${title}\n\nARTICOLO:\n${body}`,
      },
    ],
  });

  const text = response.content.find((b) => b.type === "text")?.text ?? "";
  const { tldr } = JSON.parse(text);

  const yaml =
    "tldr:\n" +
    tldr.map((p) => `  - "${p.replaceAll('"', '\\"')}"`).join("\n") +
    "\n";
  const updated = src.slice(0, fmEnd) + yaml + src.slice(fmEnd);
  writeFileSync(path, updated);
  console.log(`+ ${file}\n${tldr.map((p) => `    — ${p}`).join("\n")}`);
}
