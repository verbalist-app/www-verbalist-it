# AGENTS.md — www.verbalist.it

Sito marketing statico di Verbalist (SaaS italiano per contenuti SEO/GEO).
Astro 6 + Tailwind v4, contenuti markdown in Content Collections. Niente CMS.

## Regole di lavoro

- **Verità di prodotto**: ogni claim sulle funzionalità va verificato contro la
  piattaforma reale (app.verbalist.it). Non inventare feature, limiti o numeri.
- **Brand** (redesign, branch `redesign`, dal 2026-09-23): grammatica "foglio
  tecnico" sul modello di try.cloudflare.com. Un solo carattere, Geist
  (self-hosted via fontsource; `font-serif` è un alias storico che punta a
  Geist), Geist Mono per etichette di sezione, targhette e artefatti tecnici.
  Palette monocroma del brand (`/brand/`): Nero Verbalist #161B1D, Bianco,
  Mist #F1F3F3, Grigio testo #67787C. `base-*` è la rampa fredda del brand,
  `accent-*` (in `:root` come `--vb-accent-*`, `src/styles/global.css`) è la
  rampa del nero: CTA, targhette, punti. Nessun colore saturo: gli unici
  colori sono gli stati presi dall'app (`status-success` per il completato,
  `status-error` per l'errore; "in corso" non ha colore). Una sola
  animazione per sezione; niente reveal allo scroll, hover-lift, parallax. Pillole per bottoni e voci nav, pannelli `rounded-xl`
  con bordo `base-200`, cornice e righe tratteggiate `base-200`, sigla di
  sezione nel margine (`components/section/Frame.astro`, testa di sezione in
  `components/section/Head.astro`). Titoli in peso regolare
  con tracking stretto, interamente neri sotto la targhetta mono.
  Sistema completo in `apps/web/DESIGN.md`; `.impeccable.md` è l'indice
  del contesto di design: leggilo prima di ogni lavoro di UI.
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

- Un solo carattere di testo e display, Geist (peso 300 solo per il lede da 18px in su,
  400 per corpo, titoli e UI, 500 per bottoni ed enfasi); Geist Mono solo per
  targhette, etichette di sezione (uppercase, tracking-wider, 12px) e
  artefatti tecnici (versioni, slug, codice).
- Titoli in peso regolare con tracking −0.025em: hero della home 60px
  (`text-hero`, 44px su mobile), H1/H2 di sezione 52px
  (`components/section/Head.astro`, 36px su mobile), H2 di cella 24px,
  H3 di card 18–20px. Titoli interamente `base-900`: niente parole colorate.
- Corpo 16–18px con line-height ≥1.5 (lede 19px, light); secondario di
  lettura 15px regolare; metadati 14px; etichette mono 12px. Mai testo di
  lettura sotto i 12px, mai peso 300 sotto i 16px.
- Prose (blog, help, changelog, legali): colonna `max-w-xl`, testo regolare,
  link con bordo tratteggiato, elenchi con marker nell'accento.
- Unità sempre rem (le utility Tailwind lo sono già); righe 45–75 caratteri;
  testo lungo sempre allineato a sinistra.

## Struttura utile

- `src/pages/` — route (it: /agenti, /soluzioni, /clienti, /categorie, /help, /legale…)
- `src/content/solutions/` — pagine focus per pubblico (`/soluzioni/<slug>/`:
  agenzie, corporate, pmi, ecommerce, b2b). Ogni claim deve stare già
  nell'help center, nelle pagine agenti, nei prezzi o nei case study: niente
  listini dedicati, white label, integrazioni o funzioni non verificate. Il
  campo `audience` alimenta il tracking (vedi `docs/tracking-plan.md`).
- `src/components/featurepage/` — blocchi condivisi da pagine agente e
  soluzioni: `SubNav` (pagine sorelle, voci a pillola), `Manifesto` (hero
  statico: targhetta, titolo, testo e passi numerati in un pannello),
  `SectionHead` (alias di `components/section/Head.astro`).
- `src/components/section/` — `Frame` (cornice di sezione) e `Head` (testa
  di sezione): il pattern con cui si costruisce ogni sezione del sito.
- `src/components/home/` — sezioni della home; `demo.ts` contiene un output
  vero della piattaforma (documento 408 del 2026-10-07, versioni A e B):
  va riportato senza ritocchi, segnaposto `[SOURCE NEEDED]` e `[INTERNAL: …]`
  compresi. Dimostrativi restano solo i cinque risultati e le lacune dell'hero.
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
