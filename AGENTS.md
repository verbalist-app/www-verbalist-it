# AGENTS.md — www.verbalist.it

Sito marketing statico di Verbalist (SaaS italiano per contenuti SEO/GEO).
Astro 6 + Tailwind v4, contenuti markdown in Content Collections. Niente CMS.

## Regole di lavoro

- **Verità di prodotto**: ogni claim sulle funzionalità va verificato contro la
  piattaforma reale (app.verbalist.it). Non inventare feature, limiti o numeri.
- **Brand**: palette mist/base/accent (accent-500 è quasi nero), Familjen
  Grotesk per i display (mappato sull'utility `font-serif` nel tema), Geist
  per il testo, Geist Mono solo per artefatti tecnici (versioni, hex, codice).
  Contesto di design completo (utenti, personalità, riferimenti, principi)
  in `.impeccable.md`: leggilo prima di ogni lavoro di UI. Pannelli `rounded-xl`, bordi `base-200`.
  Le linee tratteggiate sono il sistema strutturale del sito: cornice globale,
  righe di sezione e divisori delle celle (griglia alla Profound). Etichette ed
  eyebrow sempre in Geist Mono uppercase (text-xs, tracking-wider, base-500).
- **Copy**: italiano, pratico, niente sensazionalismo né AI-isms (vedi le
  release notes del changelog come riferimento di tono).
- **Tracking**: GTM è l'hub unico (Consent Mode v2). Gli eventi del sito sono
  pushati dal banner in `src/components/global/CookieBanner.astro`
  (cta_prova_gratis, cta_accedi, cta_contatti, outbound_click,
  hubspot_form_submit, consent_update) più `search` da
  `src/components/blog/BlogSearch.astro`. Piano completo in
  `docs/tracking-plan.md`: tienilo aggiornato quando cambi eventi o tag.
  Non aggiungere script di terze parti fuori da GTM.
- **Build**: `pnpm --filter @verbalist/web build`; il postbuild appiattisce la
  sitemap in `/sitemap.xml`. Verifica sempre con una build prima di chiudere.

## Scala tipografica (regole vincolanti)

- 7 stili: displaySM 30 (H2 di sezione) / displayMD 36 (H1 pagine interne, quote) / hero 40 desktop / displayLG 48 +
  corpo 16 ovunque (prose unica per blog, help, changelog, legali) + secondario 14 + caption 12.
- Mai testo di lettura sotto i 12px (decorazioni nei mockup esenti).
- Line-height: 1.1-1.2 sui display, >=1.5 sul corpo, prose 1.75.
- Unità sempre rem (le utility Tailwind lo sono già); righe 45-75 caratteri
  (colonna prose max-w-xl); testo lungo sempre allineato a sinistra.
- Due typeface (Familjen Grotesk display, Geist testo) + Geist Mono solo
  per artefatti tecnici; pesi 400-700, di norma 400/500.

## Struttura utile

- `src/pages/` — route (it: /agenti, /clienti, /categorie, /help, /legale…)
- `src/content/` — markdown dei contenuti
- `src/lib/data.ts` — accesso unico alle collections
- `src/components/fundations/` — primitivi (Text, Button, Wrapper, head/Seo)
- `public/llms.txt` — fatti chiave per i motori AI: tienilo aggiornato. Le
  stime token sulle voci le aggiunge in build `scripts/annotate-llms.mjs`
  (postbuild): non scriverle a mano nel sorgente.
- `src/pages/blog/[slug].md.ts` — versione Markdown dei post per agenti/LLM
  (linkata con rel="alternate" dal BlogLayout, noindex via vercel.json)
- I redirect (slug EN→IT, URL semplificate) sono 301 al edge in `vercel.json`,
  non più in astro.config.mjs: niente stub meta-refresh in build. Valgono solo
  su Vercel, non in `astro dev`/`preview`.
