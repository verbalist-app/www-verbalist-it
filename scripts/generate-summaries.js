const fs = require('fs');
const path = require('path');

const POSTS_DIR = path.join(process.cwd(), 'content/posts');
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

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
    ? `Sei un esperto nel creare riassunti concisi e informativi.

Crea un riassunto di 2-3 frasi (max 250 caratteri) per questo articolo che:
- Risponde direttamente alla domanda/tema principale dell'articolo
- Usa un linguaggio chiaro, diretto, senza fronzoli
- È autosufficiente e utile anche senza leggere l'articolo completo
- Evita parole vuote, slogan e marketing speak
- Non iniziare con "Questo articolo" o "In questo post"

Titolo: ${title}

Contenuto:
${content.slice(0, 4000)}

Restituisci SOLO il testo del riassunto, nient'altro.`
    : `You are an expert at creating concise, informative summaries.

Create a 2-3 sentence summary (max 250 characters) for this article that:
- Directly answers the main question/topic
- Uses clear, factual language
- Is self-contained and useful without reading the full article
- Avoids fluff words and marketing speak
- Don't start with "This article" or "In this post"

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
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 200,
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

  if (frontmatter.summary) {
    console.log(`⏭️  Skipping (has summary): ${path.basename(dirPath)}`);
    return false;
  }

  const title = frontmatter.title || path.basename(dirPath);
  const locale = frontmatter.locale || 'it';

  console.log(`🤖 Generating summary for: ${title} [${locale}]`);

  try {
    const summary = await generateSummary(content, title, locale);

    // Insert summary field before translationOf in frontmatter
    const lines = fileContent.split('\n');
    const insertIdx = lines.findIndex(l => l.startsWith('translationOf:'));
    const summaryLine = `summary: >-\n  ${summary}`;

    if (insertIdx > 0) {
      lines.splice(insertIdx, 0, summaryLine);
    } else {
      // Insert before closing ---
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
    console.log('⚠️  ANTHROPIC_API_KEY not set. Run with:');
    console.log('   ANTHROPIC_API_KEY=sk-... node scripts/generate-summaries.js');
    process.exit(1);
  }

  const dirs = fs.readdirSync(POSTS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => path.join(POSTS_DIR, d.name));

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
