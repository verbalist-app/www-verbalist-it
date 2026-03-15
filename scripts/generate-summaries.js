const fs = require('fs');
const path = require('path');

const POSTS_DIRS = [
  path.join(process.cwd(), 'content/posts'),
  path.join(process.cwd(), 'content/posts-en'),
];
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const FORCE = process.argv.includes('--force');

function parseMarkdoc(fileContent) {
  const match = fileContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return null;

  const frontmatterStr = match[1];
  const content = match[2];

  // Simple YAML parser for our flat frontmatter
  const frontmatter = {};
  let currentKey = null;
  let currentValue = '';
  let inMultiline = false;

  for (const line of frontmatterStr.split('\n')) {
    if (!inMultiline && /^(\w[\w-]*):/.test(line)) {
      if (currentKey) {
        frontmatter[currentKey] = currentValue.trim();
      }
      const colonIdx = line.indexOf(':');
      currentKey = line.slice(0, colonIdx).trim();
      const rest = line.slice(colonIdx + 1).trim();

      if (rest === '>-' || rest === '|') {
        inMultiline = true;
        currentValue = '';
      } else if (rest === '') {
        currentValue = '';
      } else {
        currentValue = rest.replace(/^['"]|['"]$/g, '');
        inMultiline = false;
      }
    } else if (inMultiline) {
      if (/^\S/.test(line) && !/^\s/.test(line) && line.includes(':')) {
        frontmatter[currentKey] = currentValue.trim();
        inMultiline = false;
        const colonIdx = line.indexOf(':');
        currentKey = line.slice(0, colonIdx).trim();
        const rest = line.slice(colonIdx + 1).trim();
        currentValue = rest.replace(/^['"]|['"]$/g, '');
      } else {
        currentValue += ' ' + line.trim();
      }
    } else if (line.startsWith('  - ')) {
      // Array item — skip (tags)
    }
  }
  if (currentKey) {
    frontmatter[currentKey] = currentValue.trim();
  }

  return { frontmatter, content, raw: fileContent };
}

async function generateSummary(content, title, locale) {
  const prompt = locale === 'it'
    ? `Crea un riassunto di 2-3 frasi (max 200 caratteri) per l'articolo seguente.

Regole:
- Rispondi direttamente alla domanda o al tema principale
- Usa un linguaggio semplice e fattuale; preferisci verbi diretti (è, ha, sono) a costruzioni come "si configura come", "si pone come"
- Non usare: cruciale, panorama (astratto), sottolineare, valorizzare, tessuto, approfondire, consolidare, intricato, meticoloso, fondamentale, testimonianza, in linea con, evidenziando
- Niente elenchi a tre elementi, niente costruzioni "non solo X ma anche Y"
- Niente tono promozionale o da guida turistica
- Evita i trattini lunghi; usa virgole o due punti
- Ripeti lo stesso termine se è la scelta più chiara; non sostituire sinonimi per evitare ripetizioni
- Non iniziare con "Questo articolo" o "In questo post"
- Autosufficiente: utile anche senza leggere l'articolo completo

Titolo: ${title}

Contenuto:
${content.slice(0, 4000)}

Restituisci SOLO il testo del riassunto, nient'altro.`
    : `Create a 2-3 sentence summary (max 200 characters) for the article below.

Rules:
- Answer the main question or topic directly
- Use plain, factual language; prefer simple verbs (is, are, has) over "serves as", "stands as", "boasts"
- Do not use: pivotal, underscore, foster, showcase, vibrant, tapestry, delve, bolstered, garner, intricate, meticulous, enduring, crucial, landscape (abstract), testament, align with, emphasizing, fostering
- No rule-of-three lists, no "not just X but also Y" constructions
- No promotional or travel-guide tone, no puffery
- Avoid em dashes; use commas or colons instead
- Reuse the same term if it is the clearest choice; do not substitute synonyms to avoid repetition
- Do not start with "This article" or "In this post"
- Self-contained: useful without reading the full article

Title: ${title}

Article content:
${content.slice(0, 4000)}

Return ONLY the summary text, nothing else.`;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 150,
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  const data = await response.json();
  if (data.error) throw new Error(data.error.message);
  return data.content[0].text.trim();
}

async function processPost(dirPath) {
  const filePath = path.join(dirPath, 'index.mdoc');
  if (!fs.existsSync(filePath)) return false;

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const parsed = parseMarkdoc(fileContent);
  if (!parsed) {
    console.log(`⏭️  Skipping (parse error): ${path.basename(dirPath)}`);
    return false;
  }

  const { frontmatter, content } = parsed;

  if (frontmatter.summary && !FORCE) {
    console.log(`⏭️  Skipping (has summary): ${path.basename(dirPath)}`);
    return false;
  }

  const title = frontmatter.title || path.basename(dirPath);
  const locale = frontmatter.locale || 'it';

  console.log(`🤖 Generating summary for: ${title} [${locale}]`);

  try {
    const summary = await generateSummary(content, title, locale);

    let lines = fileContent.split('\n');

    // Remove existing summary field if regenerating
    if (frontmatter.summary) {
      const summaryIdx = lines.findIndex(l => l.startsWith('summary:'));
      if (summaryIdx > -1) {
        let end = summaryIdx + 1;
        while (end < lines.length && /^\s+\S/.test(lines[end])) end++;
        lines.splice(summaryIdx, end - summaryIdx);
      }
    }

    // Insert new summary
    const insertIdx = lines.findIndex(l => l.startsWith('translationOf:'));
    const summaryLine = `summary: >-\n  ${summary}`;

    if (insertIdx > 0) {
      lines.splice(insertIdx, 0, summaryLine);
    } else {
      const endIdx = lines.indexOf('---', 1);
      if (endIdx > 0) {
        lines.splice(endIdx, 0, summaryLine);
      }
    }

    fs.writeFileSync(filePath, lines.join('\n'));
    console.log(`✅ Generated: "${summary}"`);
    return true;
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    return false;
  }
}

async function main() {
  if (!ANTHROPIC_API_KEY) {
    console.log('⚠️  ANTHROPIC_API_KEY not set, skipping summary generation');
    process.exit(0);
  }

  const dirs = POSTS_DIRS.flatMap(postsDir =>
    fs.existsSync(postsDir)
      ? fs.readdirSync(postsDir, { withFileTypes: true })
          .filter(d => d.isDirectory())
          .map(d => path.join(postsDir, d.name))
      : []
  );

  console.log(`\n📝 Found ${dirs.length} posts\n`);

  let generated = 0;
  let skipped = 0;

  for (const dir of dirs) {
    const wasGenerated = await processPost(dir);
    if (wasGenerated) {
      generated++;
      await new Promise(r => setTimeout(r, 300));
    } else {
      skipped++;
    }
  }

  console.log(`\n🎉 Done! Generated: ${generated}, Skipped: ${skipped}\n`);
}

main().catch(console.error);
