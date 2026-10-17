# AGENTS.md — www.verbalist.it

Sito marketing statico di Verbalist (SaaS italiano per contenuti SEO/GEO).
Astro 6 + Tailwind v4, contenuti markdown in Content Collections. Niente CMS.

## Regole di lavoro

- **Verità di prodotto**: ogni claim sulle funzionalità va verificato contro la
  piattaforma reale (app.verbalist.it). Non inventare feature, limiti o numeri.
- **Brand** (dal 2026-10-17, ramo `stile-carta`; prima il "foglio tecnico" del primo riferimento esterno, dal 2026-09-23): grammatica a carta avorio, presa da un riferimento esterno. Un solo carattere, Geist, per tutto (self-hosted via
  fontsource; `font-serif` e `font-mono` sono alias storici che puntano a
  Geist: il mono è stato ritirato il 2026-10-17). La V del brand
  (`assets/Logo.astro`) è la firma: in filigrana nei pannelli-palco
  (`assets/Watermark.astro`) e come marker degli elenchi al posto del punto. Palette
  monocroma calda (`/brand/`): Nero Verbalist #26251E, Avorio #F7F7F4
  (pagina, `bg-background`), Carta #F2F1ED (pannelli, `bg-panel`;
  `bg-white` non si usa), Grigio testo #6A6961. `base-*` è la rampa calda
  del brand, `accent-*` (in `:root` come `--vb-accent-*`,
  `src/styles/global.css`) è la rampa del nero: CTA, punti, bordo attivo.
  Nessun colore saturo: gli unici colori sono gli stati presi dall'app
  (`status-success` per il completato, `status-error` per l'errore; "in
  corso" non ha colore); l'arancio del riferimento esterno è stato valutato e tenuto
  spento. Una sola animazione per sezione; niente reveal allo scroll,
  hover-lift, parallax. Pillole per bottoni e voci nav (`accent`, `muted`
  tinta, `ghost`), pannelli tinti `bg-panel rounded-md` senza bordo, righe
  piene `border-base-200` (niente tratteggi), nessuna cornice né sigla di
  sezione: le sezioni si separano con l'aria (`components/section/Frame.astro`,
  prop `rhythm`; testa di sezione in `components/section/Head.astro`, con
  l'etichetta sans 14px grigia sopra il titolo). Titoli in peso regolare
  con tracking stretto, interamente neri. Hero della home a sinistra, con
  il prodotto in un pannello tinto a tutta larghezza; chiusure centrate.
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
- **SEO tecnica**: il meta robots lo scrive solo `Seo.astro` (uno per pagina,
  con `max-image-preview:large`); il suffisso ` | Verbalist` si aggiunge solo
  se il titolo resta entro 60 caratteri. Il `lastmod` della sitemap arriva
  dal frontmatter (`astro.config.mjs`: `pubDate`, `lastUpdated`). Immagine OG
  di default `public/img/og-verbalist.jpg` (1200×630). Header e redirect
  vanno scritti in entrambi i `vercel.json` (root e `apps/web`). La ricerca
  del blog usa fuse.js dal bundle: niente script da CDN.
  Titoli: ogni pagina ha almeno un H2 e i primi H2 non si ripetono tra
  pagine (Screaming Frog li confronta). Le etichette di sezione uguali
  ovunque (Novità, Modifiche, Cosa riceve…) sono H3 sotto un H2 unico, anche
  solo `sr-only`; dentro le illustrazioni dell'app niente tag h1–h6.

## Scala tipografica (regole vincolanti)

- Un solo carattere, Geist, per tutto (400 per corpo, titoli, lede e UI;
  500 per l'H1 dell'hero, `strong` e le enfasi nei mockup; nessun peso 300;
  nessun mono: dati, slug e versioni si distinguono per misura e colore); le
  etichette di sezione sono Geist 14px `base-500`, sentence case.
- Titoli in peso regolare con tracking −0.025em: hero della home 44px in
  peso 500 (`text-hero-md`, 32px su mobile e 36 da `sm`; `text-hero` 60px solo per la
  chiusura),
  H1/H2 di sezione 52px
  (`components/section/Head.astro`, 36px su mobile), H2 di cella 24px,
  H3 di card 18–20px. Titoli interamente `base-900`: niente parole colorate.
- Corpo 16–18px con line-height ≥1.5 (lede 19px, regolare, `base-600`); secondario di
  lettura 15px regolare; metadati ed etichette 14px; artefatti 12–13px in Geist, `base-500`. Mai testo di
  lettura sotto i 12px, mai peso 300.
- Prose (blog, help, changelog, legali): colonna `max-w-xl`, testo regolare,
  link con bordo sottile, elenchi con marker nell'accento.
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
  statico: etichetta, titolo, testo; a destra una `ProductCard` con i passi
  numerati e la finestra dell'app passata nello slot `card`),
  `SectionHead` (alias di `components/section/Head.astro`).
- `src/components/section/` — `Frame` (cornice di sezione; il ritmo verticale
  sta nella sua prop `rhythm`, sui token `--spacing-v*`: più aria sotto che
  sopra) e `Head` (testa di sezione): il pattern con cui si costruisce ogni
  sezione del sito. I bottoni non hanno ombre: le sole ombre del sito sono
  sugli oggetti di prodotto.
- `src/components/home/` — sezioni della home; `demo.ts` contiene un output
  vero della piattaforma (documento 408 del 2026-10-07, versioni A e B):
  va riportato senza ritocchi, segnaposto `[SOURCE NEEDED]` e `[INTERNAL: …]`
  compresi. Dimostrativi restano solo i cinque risultati e le lacune dell'hero.
  In home se ne legge una sezione per versione e le illustrazioni hanno
  `data-nosnippet`: il testo dimostrativo non deve prevalere su quello del
  prodotto.
- `src/styles/motion.css` e `src/lib/motion.ts` — token di movimento (durate,
  curve); il linguaggio di movimento sta in `.claude/skills/motion-design/`.
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
