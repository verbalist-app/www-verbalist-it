---
name: Verbalist
description: Foglio tecnico monocromo in Geist, cornice tratteggiata, un solo inchiostro (Nero Verbalist)
colors:
  ink: "oklch(21.8% 0.008 223.9)"
  ink-deep: "oklch(14.8% 0.004 228.8)"
  ink-soft: "oklch(45% 0.017 213.2)"
  ink-line: "oklch(72.3% 0.014 214.4)"
  white: "#ffffff"
  base-50: "oklch(98.7% 0.002 197.1)"
  base-100: "oklch(96.3% 0.002 197.1)"
  base-200: "oklch(92.5% 0.005 214.3)"
  base-300: "oklch(87.2% 0.007 219.6)"
  base-400: "oklch(72.3% 0.014 214.4)"
  base-500: "oklch(54% 0.021 213.5)"
  base-600: "oklch(45% 0.017 213.2)"
  base-700: "oklch(37.8% 0.015 216)"
  base-800: "oklch(27.5% 0.011 216.9)"
  base-900: "oklch(21.8% 0.008 223.9)"
  base-950: "oklch(14.8% 0.004 228.8)"
  status-success: "oklch(65% 0.1 150)"
  status-error: "oklch(60% 0.13 25)"
typography:
  hero:
    fontFamily: "Geist Variable, Geist Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 2.75rem + 1vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-0.03em"
  display:
    fontFamily: "Geist Variable, Geist Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 2.25rem + 1vw, 3.25rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  display-xs:
    fontFamily: "Geist Variable, Geist Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2rem"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Geist Variable, Geist Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Geist Variable, Geist Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.375
    letterSpacing: "-0.025em"
  lede:
    fontFamily: "Geist Variable, Geist Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 300
    lineHeight: 1.375
    letterSpacing: "normal"
  body:
    fontFamily: "Geist Variable, Geist Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  secondary:
    fontFamily: "Geist Variable, Geist Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  meta:
    fontFamily: "Geist Variable, Geist Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Geist Mono Variable, Geist Mono Fallback, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: "0.05em"
  mono:
    fontFamily: "Geist Mono Variable, Geist Mono Fallback, ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  none: "0px"
  sm: "2px"
  lg: "8px"
  xl: "12px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  2xl: "24px"
  3xl: "32px"
  4xl: "40px"
  5xl: "48px"
  6xl: "56px"
  7xl: "80px"
components:
  button-accent:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    padding: "0 24px"
    height: "40px"
  button-accent-hover:
    backgroundColor: "{colors.base-700}"
    textColor: "{colors.white}"
  button-accent-sm:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.meta}"
    rounded: "{rounded.full}"
    padding: "0 16px"
    height: "36px"
  button-muted:
    backgroundColor: "{colors.white}"
    textColor: "{colors.base-900}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    padding: "0 24px"
    height: "40px"
  button-muted-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
  nav-item:
    backgroundColor: "transparent"
    textColor: "{colors.base-600}"
    typography: "{typography.meta}"
    rounded: "{rounded.full}"
    padding: "0 12px"
    height: "36px"
  nav-item-active:
    backgroundColor: "{colors.base-100}"
    textColor: "{colors.base-950}"
  subnav-pill:
    backgroundColor: "transparent"
    textColor: "{colors.base-600}"
    typography: "{typography.meta}"
    rounded: "{rounded.full}"
    padding: "0 12px"
    height: "32px"
  subnav-pill-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  tag-section:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "2px 6px"
  chip-gap:
    backgroundColor: "{colors.base-900}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "2px 8px"
  panel:
    backgroundColor: "{colors.white}"
    textColor: "{colors.base-900}"
    rounded: "{rounded.xl}"
    padding: "16px"
  panel-active:
    backgroundColor: "{colors.white}"
    textColor: "{colors.base-900}"
    rounded: "{rounded.xl}"
    padding: "16px"
  node:
    backgroundColor: "{colors.white}"
    textColor: "{colors.base-900}"
    rounded: "{rounded.lg}"
    padding: "20px"
  node-active:
    backgroundColor: "{colors.base-50}"
    textColor: "{colors.base-900}"
  cell:
    backgroundColor: "transparent"
    textColor: "{colors.base-900}"
    rounded: "{rounded.none}"
    padding: "32px 16px"
  cell-hover:
    backgroundColor: "{colors.base-50}"
  input-keyword:
    backgroundColor: "{colors.base-50}"
    textColor: "{colors.base-800}"
    typography: "{typography.mono}"
    rounded: "{rounded.full}"
    padding: "0 16px"
    height: "36px"
  mobile-cta-bar:
    backgroundColor: "{colors.white}"
    textColor: "{colors.base-600}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "10px 16px"
---

# Design System: Verbalist

## Overview

**Creative North Star: "Il foglio tecnico"**

Il sito è un foglio tecnico stampato in un solo inchiostro. Una colonna incorniciata da linee tratteggiate, la sigla di sezione nel margine (`Sec 0.n`), due punti d'angolo da 3 px su ogni sezione, pannelli bianchi con bordo sottile dentro cui la catena di Verbalist lavora davvero. L'identità è quella registrata in `/brand/`: Nero Verbalist, Bianco, Mist e Grigio testo. Nessun colore saturo. La fiducia viene dalla precisione e dal fatto che il prodotto si vede all'opera, non dall'effetto.

La densità è quella di uno strumento: celle divise da tratteggi, elenchi a righe con un punto pieno, tabelle e metadati in mono. Un solo carattere, Geist, in peso regolare per i titoli e light solo per il lede; Geist Mono maiuscolo per targhette, etichette, slug e versioni. La gerarchia si regge su dimensione, tracking e tono di grigio, non su peso o colore: i titoli sono interamente neri sotto una targhetta mono nera.

Il movimento è funzionale e uno per sezione: nell'hero delle pagine agente i quattro pannelli eseguono il flusso in sequenza (keyword digitata, cinque risultati letti, contatori di parole, title e slug compilati); l'hero della home è statico, nella catena la corrente scorre sul connettore attivo, nell'anatomia GEO nota e passaggio si accendono a vicenda. Tutto ha pausa, si ferma fuori schermo e con `prefers-reduced-motion` mostra lo stato finale.

**Decisioni registrate (2026-09-26).** L'accento arancio preso da try.cloudflare.com è stato ritirato dopo il confronto di tre dosi di segnale ("Mono" scelta dal maintainer). Le rampe `accent-*` restano nel tema come alias del Nero Verbalist. I colori di stato sono quelli della piattaforma (`platform/css/css.css`): verde per il completato, rosso per l'errore, nessun colore per l'"in corso". Il mondo precedente ("Bacino di inchiostro") è stato scartato dopo la prima build.

**Key Characteristics:**
- Cornice tratteggiata `base-200` come sistema strutturale: colonna, righe di sezione, divisori di cella, righe di elenco.
- Un solo inchiostro: il Nero Verbalist riempie pillole, targhette, punti e bordi attivi. Il resto è una rampa fredda di grigi.
- Un solo carattere (Geist) più Geist Mono per etichette e artefatti tecnici; titoli 400, mai colorati.
- Superfici piatte: bianco e `base-50`; le uniche ombre stanno sui due bottoni e nell'anello `base-100` dell'elemento attivo.
- Pillole per azioni e navigazione, pannelli a 12 px, celle squadrate.

## Colors

Una rampa fredda di grigi (hue ~215) con il Nero Verbalist come inchiostro unico; due colori di stato presi dalla piattaforma, mai usati come accento.

### Primary
- **Nero Verbalist** (`ink` = `accent-500`/`accent-600` = `base-900`, brand #161B1D): l'unico inchiostro. Riempie la pillola primaria, la targhetta di sezione, i punti degli elenchi e degli angoli, la voce attiva della SubNav, il chip delle lacune, il bordo del pannello o nodo attivo. Su bianco vale ~16:1: regge anche il testo più piccolo.
- **Nero profondo** (`ink-deep` = `accent-700` = `base-950`): voce nav attiva e in hover, testo del footer. Non è una superficie.
- **Inchiostro diluito** (`ink-soft` = `accent-400` = `base-600`; `ink-line` = `accent-300` = `base-400`): la barretta 2×12 px accanto alla targhetta è `accent-300`; il bordo in hover dei nodi della catena è `accent-400`. Sono grigi, non un secondo colore.

### Neutral
- **Bianco** (#ffffff): foglio, pannelli, bottoni secondari, nav e barra mobile (95% con blur).
- **Grigio foglio** (`base-50`): sezioni "soft" (hero, chiusure), piano consigliato, hover delle celle e delle righe, campo keyword, blocco metadati dei fogli A/B, nodo attivo della catena.
- **Mist** (`base-100`, brand #F1F3F3): sfondo della voce nav attiva, evidenziazione `mark` nell'anatomia GEO, anello da 3 px intorno al pannello attivo.
- **Tratteggio** (`base-200`): ogni linea del sistema; bordo dei pannelli, dei nodi e dei bottoni secondari. Hover del `mark` attivo.
- **Grigio sigla** (`base-300`): sigle `Sec 0.n`, angoli della scatola della catena, connettori spenti, punto dei pannelli in attesa, bordo in hover del bottone muted, nodo già passato.
- **Grigio muto** (`base-400`): filetto tratteggiato dei link nella prose, marker delle liste nei fogli. Non è un colore da testo (2.6:1).
- **Grigio testo** (`base-500`, brand #67787C): etichette mono, note, rassicurazioni, "/" del campo keyword, contatori. 4.7:1 su bianco.
- **Grigio secondario** (`base-600`): lede, descrizioni, risposte FAQ, righe di footer.
- **Grigio prosa** (`base-700`) e **grigio scuro** (`base-800`): testo a fianco dei titoli, prose, righe di elenco, `dd` dei metadati.
- **Inchiostro** (`base-900`): titoli, testo primario, "Versione A/B" nei fogli, chip delle lacune.
- **Verde stato** (`status-success`): spunta `✓` sui nodi passati, punto dei pannelli completati, contatore "5 di 5", indicatore dei sistemi nel cartiglio, punti dei pannelli della 404. I due stati stanno in un blocco `@theme static` di `global.css`: così esistono le utility (`bg-status-success`, `text-status-success`, `bg-status-error`) e le variabili sono sempre emesse.
- **Rosso stato** (`status-error`): solo il footer quando un monitor è giù.
- **Velature** (`wash-warm` oklch(95% 0.03 60), `wash-cool` oklch(96% 0.012 200)): solo come gradienti radiali in basso nelle card di prodotto (hero, nodi della catena), mai come superficie piena né come colore di testo o bordo. Introdotte il 2026-10-07 sul modello delle card di claude.com.

### Named Rules
**The One Ink Rule.** Il sito ha un solo inchiostro, il Nero Verbalist. Non esiste un secondo colore né una tinta di sezione diversa da `base-50`; i verdi e i rossi sono stati della piattaforma, mai elementi di design.

**The Black Title Rule.** I titoli sono interamente `base-900`. Il segnale sta nella targhetta mono nera sopra il titolo, mai in una parola colorata o grigia dentro il titolo.

**The Grey Status Rule.** "In corso" non ha colore: si riconosce da bordo `base-900`, fondo `base-50`/`base-100` e anello `base-100`. Il verde arriva solo a lavoro concluso.

## Typography

**Display Font:** Geist Variable (fallback: Geist Fallback, ui-sans-serif, system-ui)
**Body Font:** Geist Variable (stesso)
**Label/Mono Font:** Geist Mono Variable (fallback: Geist Mono Fallback, ui-monospace)

`Geist Fallback` (Arial/Helvetica) e `Geist Mono Fallback` (Menlo/Consolas) sono `@font-face` locali con `size-adjust` e override di ascent/descent in `global.css`: occupano lo stesso spazio finché il woff2 non arriva. Self-hosted via `@fontsource-variable/geist` e `geist-mono`, importati in `BaseLayout.astro`, con preload del solo file latin. `font-serif` è un alias storico che punta a Geist: non usarlo per nuovo codice.

**Character:** un grottesco solo, in peso regolare; i titoli si distinguono per dimensione e tracking stretto, non per peso o colore. Il mono maiuscolo dà il tono "targhetta" alle etichette. Ogni misura fuori dalla scala Tailwind ha un nome in `@theme` (`--text-2xs` 11, `--text-md` 15, `--text-lede` 19, `--text-headline` 28, `--text-display-xs` 32, `--text-display` 52, `--text-hero-sm` 56, `--text-hero` 60).

### Hierarchy
- **Hero** (400, 44 px → 56 px da `sm` → 60 px da `lg`, line-height 1.06, tracking −0.03em): solo l'H1 della home. Il prezzo dei piani usa 44 px con `tabular-nums` e il "€" a 24 px `base-500`.
- **Display** (400, 36 px → 52 px da `lg`, line-height 1.1/1.08, tracking −0.025em, `text-balance`): H1 delle pagine interne e H2 di sezione, sempre via `section/Head.astro`.
- **Display-xs** (400, 32 px, line-height 1.15): "Su richiesta" nei piani.
- **Headline** (400, 24 px → 28 px da `lg` per le citazioni, tracking −0.025em): H2 di cella (porte, clienti), H3 dei fogli A/B, blockquote.
- **Title** (400, 18–20 px, line-height 1.375): titoli di card blog (20), help/team/casi (18), domande FAQ (18).
- **Lede** (300, 18 px → 19 px da `lg`, line-height 1.375, `base-600`, `max-w-lg`): il paragrafo sotto hero, Manifesto e chiusure.
- **Body** (400, 16 px, line-height 1.625; prose 1.75): testo a fianco dei titoli, nodi della catena, prose. Colonna prose `max-w-xl`, sempre a sinistra.
- **Secondary** (400, 15 px, line-height 1.6, `base-600`/`base-800`): descrizioni di card, righe dei passi, risposte FAQ, corpo dei fogli A/B, fatti dei casi.
- **Meta** (400, 14 px): voci nav e SubNav, righe di elenco con punto, "Leggi →", footer, rassicurazioni sotto le CTA, intro dei fogli.
- **Label** (400, 12 px, tracking 0.05em, MAIUSCOLO, Geist Mono): targhette, etichette dei pannelli, categorie, intestazioni del footer, sigle, `dt` dei metadati. `base-500`, o bianco su nero quando è la targhetta di sezione.
- **Mono** (400, 13 px, Geist Mono): keyword, slug, titoli digitati nei pannelli; `accent-600` per lo slug come artefatto del prodotto, `base-800` nel campo keyword.
- **Note** (400, 12 px, `base-500`): rassicurazioni nei piani e nella barra mobile, metadati nei pannelli. Minimo assoluto di lettura: 12 px; 11 px (`text-2xs`) solo per decorazioni nei mockup.

### Named Rules
**The Regular Weight Rule.** Titoli in 400 con tracking negativo. Il 500 esiste solo per `strong` nella prose, gli H4 da 15 px dentro i fogli A/B e la domanda-H2 nell'anatomia. Niente 600–700.

**The Light-From-18 Rule.** Il peso 300 compare solo dai 18 px in su (lede). Sotto, Geist light è troppo sottile: testo secondario a 15 px e metadati a 14 px restano regular.

**The Mono Kicker Rule.** La targhetta sopra i titoli (`Head` prop `tag`, eyebrow del Manifesto, etichette dei pannelli) è grammatica del sistema: sempre Geist Mono, 12 px, maiuscolo, tracking 0.05em. Una per titolo, mai due.

## Layout

Una colonna incorniciata: `Wrapper variant="standard"` è `max-w-5xl` (1024 px) con `px-4`, che sale a `max-w-6xl` (1152 px) con `px-12` da `2xl`; i bordi laterali tratteggiati `base-200` corrono per tutta la pagina, nav e footer compresi. Le sezioni aggiungono `lg:!px-14` (56 px) dentro la cornice, oppure `!px-0` quando il contenuto è a celle che toccano il bordo (porte, piani).

Ogni sezione è un `section/Frame.astro`: riga tratteggiata in testa (omessa con `flush` sotto una SubNav), sigla `Sec 0.n` in mono `base-300` nel margine esterno da `xl`, due punti da 3 px `accent-500` a 8 px dagli angoli superiori, `scroll-mt-[72px]`, tono `white` o `soft`. Ritmo verticale: `py-14` (56 px) su mobile, `py-20` (80 px) da `lg`; hero `pt-12/pb-16` → `pt-14/pb-16`; Manifesto `pt-10/pb-12` → `pt-16/pb-16`; chiusura `py-16/20`, variante compatta `py-12/14`.

Griglie interne: testa di sezione 7/5 (`lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]`, gap 64 px) con il testo a fianco `max-w-md`; FAQ 5/7; hero della home 1fr/34rem, hero delle pagine agente 1fr/31rem; anatomia 1/1; porte e piani a celle intere divise da `lg:divide-x lg:divide-dashed`, con `border-b border-dashed` tra le righe su mobile; card blog/help/team come celle `px-4 py-8` → `lg:px-8 lg:py-10`; casi `py-10/12` con `pl-14`/`pr-14` alternati. Distanze ricorrenti: 8 px tra pannelli impilati nell'hero, 12 px tra pillole e tra nodi, 24 px tra targhetta e titolo e tra titolo e lede, 32 px tra lede e azioni, 16 px tra azioni e nota, 40–64 px tra testa di sezione e contenuto.

La densità si governa per sottrazione: i fogli A/B mostrano intro e prima sezione, il resto sta in un `details` "Leggi il testo intero"; le prove mostrano quattro casi e un `details` "Altri n casi"; le liste sono righe da 12 px di padding. Su mobile i due fogli scorrono in orizzontale con `snap-x` e un selettore a pillola; una barra fissa in basso (`global/MobileCta.astro`) porta "Prova gratis" nella zona del pollice dopo il primo viewport, con `padding-bottom` che include `env(safe-area-inset-bottom)`, e sparisce vicino alla chiusura.

Breakpoint usati: `sm` 640, `md` 768 (fogli affiancati, casi a due colonne), `lg` 1024 (nav desktop, griglie, barra mobile nascosta), `xl` 1280 (sigle, footer a tre colonne), `2xl` 1536 (cornice larga). Nav fissa 72 px; le pagine interne partono con `pt-[72px]` e la SubNav alta 56 px su mobile, 48 px da `lg`. Touch: i bottoni `xs`/`sm`/`base` estendono l'area cliccabile in verticale con `.tap-target` (`pointer: coarse`); voci del footer `min-h-11`; pillole della SubNav `h-10` su mobile.

## Elevation & Depth

Sistema piatto: la profondità è tono (`base-50` su bianco) e linea, non ombra. Le uniche ombre stanno sui bottoni: la pillola accent porta un filo di luce interno e un'ombra corta, la pillola muted un'ombra quasi invisibile. Nessun pannello, card, nav, sheet o barra ha ombra; nav e barra mobile usano `bg-white/95` con `backdrop-blur-sm`. Lo stato "attivo" di un pannello o nodo si segnala con bordo `base-900` e un anello piatto da 3 px in `base-100`, senza sfocatura: è un contorno, non un'elevazione.

### Shadow Vocabulary
- **Pillola accent** (`box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.22), 0 1px 2px rgb(0 0 0 / 0.14)`): solo su `variant="accent"`.
- **Pillola muted** (`box-shadow: 0 1px 2px rgb(0 0 0 / 0.05)`): solo su `variant="muted"`.
- **Anello attivo** (`box-shadow: 0 0 0 3px var(--color-base-100)`): pannello dell'hero e nodo della catena mentre lavorano; `mark` acceso nell'anatomia con `0 0 0 2px base-200`.

### Named Rules
**The Lines Not Shadows Rule.** Un contenitore si separa dal foglio con un bordo `base-200` (pieno sui pannelli, tratteggiato sulle celle) o con `bg-base-50`. Mai con un'ombra diffusa. Eccezione (2026-10-07): il prodotto mostrato come oggetto, la finestra dell'app nell'hero e i frammenti nella catena, porta un'ombra lunga e morbida: è luce su un oggetto, non elevazione di un contenitore.

## Shapes

Quattro forme, ognuna con un ruolo. Pillole (`rounded-full`) per tutto ciò che si preme o seleziona: bottoni, voci nav e SubNav, selettore A/B, campo keyword, chip delle lacune, `summary` dei `details`, punti. Pannelli a 12 px (`rounded-xl`) per le schede che stanno sul foglio: pannelli dell'hero, scatola della catena, fogli A/B, lista dei passi del Manifesto, citazione, articolo annotato, `pre` e immagini della prose, ritratti del team. Angoli a 8 px (`rounded-lg`) per le scatole dentro un pannello: i quattro nodi della catena, "Versione A/B" nell'hero, le statistiche delle porte. Angoli a 2 px (`rounded-sm`) solo per il `mark` dell'anatomia. Celle, targhette, elenchi e tabelle sono squadrati (0 px): la targhetta di sezione è un rettangolo pieno nero con una barretta 2×12 px `accent-300` a fianco.

Bordi: sempre 1 px. Pieno `base-200` sui pannelli, nodi, bottoni muted e header dei fogli; tratteggiato `base-200` su cornice, righe di sezione, divisori di cella, righe di elenco, `hr` e link della prose (`border-b border-dashed border-base-400`, che passa ad `accent-500` in hover). I connettori della catena sono `stroke-dasharray 3 3` in `base-300`, `accent-500` quando attraversati dalla corrente. La scatola della catena ha quattro angoli di 8 px in `base-300` come un foglio da registrare. Le icone sono SVG a tratto 1.4–1.6 (`+` delle FAQ e dei `details`, copia, chevron, menu), mai glifi di font o icone piene.

## Components

### Buttons
`fundations/elements/Button.astro`, props `variant` (`accent` | `muted` | `default` | `none`), `size` (`xs` 32 px/`sm` 36/`base` 40/`md` 44/`lg` 48/`xl` 56), `isLink`, `iconOnly`.
- **Shape:** pillola piena (`rounded-full`), altezza fissa, testo centrato, peso 400.
- **Accent (primaria):** fondo `accent-500` (Nero Verbalist), testo bianco, `px-6` a 40 px (`px-4` a 32–36 px), ombra "pillola accent". Una sola per gruppo di azioni ("Prova gratis"), con la rassicurazione a 12–14 px `base-500` sotto.
- **Muted (secondaria):** bianco, bordo `base-200`, testo `base-900`, ombra "pillola muted" ("Parla con noi", "Accedi" nel sheet, piani non consigliati).
- **Hover / Focus:** transizione 300 ms; accent → `base-700`; muted → bordo `base-300` e testo `accent-600`; focus `ring-2` con offset 2 (`base-900` / `base-300`). Le taglie xs/sm/base su touch estendono l'area cliccabile con `.tap-target`.
- **Default:** `bg-black`/hover `base-700`; esiste nella primitiva ma le superfici usano `accent`.
- **Bottoni di pannello (36 px):** `summary` dei `details` e "Copia lo slug" sono pillole `h-9`/`h-8` bianche con bordo `base-200`, testo 14/12 px, hover bordo `base-300` + testo `accent-600`; l'icona `+` in `accent-500` ruota di 45° all'apertura.

### Chips
- **Targhetta di sezione** (`Head` prop `tag`): mono 12 px maiuscolo bianco su `accent-600`, `px-1.5 py-0.5`, angoli vivi, barretta `accent-300` a destra. Stessa forma per "Consigliato" nei piani.
- **Chip delle lacune** (run): pillola bianca con bordo `base-200`, testo `base-800` 12 px, `px-2 py-0.5`.
- **Selettore A/B (mobile):** contenitore pillola con bordo `base-200` e `p-1`; il bottone premuto è `bg-accent-600 text-white`, alto 40 px (`aria-pressed`).
- **Etichetta mono con punto:** `size-1.5` in `accent-500` seguito dall'etichetta `base-500`; il punto diventa `base-300` in attesa e `status-success` a lavoro concluso.

### Cards / Containers
- **Pannello** (`p-4 bg-white border rounded-xl border-base-200`; `p-8`/`p-10` da `sm`/`lg` nella scatola della catena): la scheda che sta sul foglio. Dentro, riga di etichette mono `justify-between`, poi contenuto a `mt-2/3`. Attivo: bordo `base-900` + anello `base-100` (transizione 400 ms).
- **Nodo della catena** (`p-5 rounded-lg border-base-200`, link): etichetta mono, nome 16 px, sommario 12 px `base-600`, riga "→ output" mono su tratteggio. Hover bordo `accent-400`; attivo `bg-base-50` + bordo `base-900` + anello; passato bordo `base-300` con `✓` verde davanti all'etichetta.
- **Foglio A/B** (`Prints.astro`): pannello con `overflow-hidden`, header 44 px `border-b` (nome versione 14 px `accent-600`, "Generato da Verbalist" mono), blocco metadati `bg-base-50` con `dl` a due colonne e `border-b border-dashed`, corpo `px-5 py-6` con H3 24 px e intro 15 px `base-700`, poi `details` "Leggi un estratto" con una sola sezione per versione (A: la classificazione A1–A6; B: i 7 passaggi), H4 15 px medium, testo 15 px `base-600`, elenchi e tabelle. I due fogli stanno in un contenitore con `data-nosnippet`: il testo dimostrativo non finisce negli snippet della home. I segnaposto della piattaforma (`[SOURCE NEEDED]`, `[INTERNAL: …]`) sono targhette mono 12 px su `base-100`.
- **Cella** (`BlogCard`, `HelpCenterCard`, `TeamCard`, `CustomerCard4`, porte, piani): nessun raggio e nessun bordo proprio, solo `border-b border-dashed border-base-200` e i divisori della griglia; `px-4 py-8` → `lg:px-8 lg:py-10`; riga mono in testa (data/categoria, con la categoria in `accent-600`), titolo a `mt-8`, descrizione 15 px `base-600`, "Leggi →" o chevron in fondo con `mt-auto`. Hover: `bg-base-50` (200 ms) e titolo `accent-600`; il link copre la cella con `after:absolute after:inset-0`.
- **Riga di registro** (`Proofs`): `li` a tre colonne 3/5/4 con `py-6`, tratteggio sopra, nome 18 px, fatto 15 px `base-800`, crediti `dl` 12 px; hover `bg-base-50`.
- **Elenco a righe** (`Doors`, `Plans`, catena, prose): `li` con `py-3`, `border-t border-dashed border-base-200`, `last:border-b`, punto `size-1.5 bg-accent-500`, testo 14 px `base-800`.
- **Citazione** (`Proofs`): pannello `bg-base-50 rounded-xl` con blockquote 24/28 px e firma 14 px con logo grayscale.

### Inputs / Fields
- **Campo keyword (nell'hero)**: pillola alta 36 px, `bg-base-50`, bordo `base-200`, mono 13 px `base-800` con prefisso "/" in `base-500`. Il sito non ha form propri oltre a HubSpot e alla ricerca del blog; i campi nuovi seguono questa forma (pillola, `base-50`, bordo `base-200`, focus con ring `base-900`).

### Navigation
- **Nav principale** (`global/Navigation.astro`): fissa, 72 px, `bg-white/95 backdrop-blur-sm`, `border-b border-dashed border-base-200`; logo alto 20 px; voci separate dal logo da un `border-l base-200`; ogni voce è una pillola 36 px `px-3 text-sm text-base-600`, hover e attiva `bg-base-100 text-base-950` (200 ms); "Accedi" testuale; CTA "Prova gratis" `Button size="sm" variant="accent"`; toggle menu `size-11` con icona a tratto 1.5.
- **Sheet mobile:** pannello bianco a tutto schermo sotto la nav, voci 20 px alte ≥52 px separate da tratteggi, voce corrente in `accent-600`, due pillole `lg` piene in fondo (muted + accent).
- **SubNav** (`featurepage/SubNav.astro`): riga alta 56/48 px sotto la nav, voce di testa mono maiuscola `base-500` con `border-r` tratteggiato, poi pillole 40/32 px `text-sm`; la corrente è `bg-accent-500 text-white` con numero mono al 80% di bianco, le altre `base-600` con hover `bg-base-100`. Scorre in orizzontale su mobile con sfumatura bianca a destra.
- **Barra mobile** (`global/MobileCta.astro`): fissa in basso sotto `lg`, `bg-white/95` con blur e tratteggio in alto, nota 12 px `base-600` a sinistra e pillola accent 40 px a destra; entra con `translate-y` 300 ms dopo il 90% del primo viewport, sparisce a 420 px dal footer.
- **Footer**: `border-t` tratteggiato, quattro colonne con intestazioni mono `base-500` e link 14 px `base-700` alti ≥44 px su mobile (hover `accent-600`), poi il cartiglio.
- **Cartiglio** (fine del footer, ogni pagina): come il riquadro di un disegno tecnico, una griglia di celle squadrate a tratteggio `base-200` (due colonne su mobile, cinque da `lg`), etichetta mono 12 px `base-500` sopra un valore 12 px. Celle: `© anno` con NUR S.r.l. e P.IVA; **Foglio**, l'indirizzo della pagina in mono ("404" sulla 404); **Piattaforma**, la versione dell'ultima release del changelog (link, cella intera cliccabile, hover `base-50`); **Revisione**, la data della build; **Stato**, l'indicatore dei sistemi letto da uptime (link esterno, cella intera). Statico.

### Section frame (firma)
`section/Frame.astro` + `section/Head.astro` costruiscono ogni sezione: cornice con sigla e punti d'angolo, targhetta mono nera, titolo 36/52 px interamente `base-900`, testo a fianco 5/12 in `base-700`. Le pagine "feature" li riusano tramite `featurepage/Manifesto.astro` (H1 con lista dei passi numerati in mono `accent-600` dentro un pannello `p-2`) e `featurepage/SectionHead.astro`; `ctas/Cta2.astro` è la chiusura su fondo `base-50` con titolo, lede light e pillole.

### Hero della home
`home/Hero.astro`: a sinistra targhetta, H1 (tre righe da `lg`), lede, azioni e nota; a destra, in griglia `1fr/34rem`, una **card di prodotto** sul modello delle card di claude.com: `rounded-3xl`, bordo `base-200`, alta 20/30/36 rem, bianca con due velature radiali in basso (`wash-warm` a destra, `wash-cool` a sinistra, quasi bianche: sono le uniche tinte del sito). Dentro, tre oggetti sovrapposti: in alto a sinistra il brief come un messaggio (card `rounded-2xl` con angolo in alto a sinistra più stretto, etichetta mono, keyword tra virgolette, tipo · mercato · lingua); in basso a sinistra (da `sm`) la card "Per Google e per le AI" con i cinque motori in righe (marchio nel colore del brand in una tessera `size-6`: file SVG in `public/img/engines/`, forniti dal maintainer, OpenAI compreso); a destra `home/AppWindow.astro` senza barra laterale (`sidebar={false}`), ridotta con `zoom` (0,42 / 0,5 / 0,56), che parte dal 40–44 % della card ed esce dai bordi destro e inferiore, tagliata netta. Luce: filo chiaro in alto, bordo da 1 px, ombra lunga e morbida sulla finestra; ombra più corta sulle due card. Testi dal documento vero in `demo.ts`: delle due versioni solo il titolo e l'attacco dell'introduzione (32 parole, poi "…"), il resto a righe neutre (`h-3 base-800` per l'H2, `h-2 base-200` per il testo), come nei frammenti della catena. Il blocco è `role="img"` con descrizione e `data-nosnippet`. Nessuna animazione.

### Card di prodotto (`featurepage/ProductCard.astro`)
Il contenitore delle illustrazioni di prodotto, sul modello delle card di claude.com: `rounded-3xl`, bordo `base-200`, bianca con le due velature radiali in basso (`wash-warm` a destra, `wash-cool` a sinistra), `overflow-hidden`, `role="img"` con descrizione, `data-nosnippet`. Dentro, oggetti assoluti che i bordi tagliano netti: finestre dell'app (`.vb-window`: filo chiaro in alto, bordo 1 px, ombra lunga) e card in primo piano (`.vb-float`: ombra corta). Quattro toni di sfondo (prop `tone`): `alba` (caldo in basso a destra, freddo in basso a sinistra; hero di home e soluzioni), `sera` (caldo a sinistra, freddo in alto a destra; sezione prodotto delle pagine agente), `foschia` (solo la velatura fredda in alto a destra; blocco In breve delle soluzioni), `carta` (`base-50` pieno, senza velature; disponibile, al momento non usato): due card vicine non hanno mai lo stesso sfondo. Nell'hero delle soluzioni la finestra cambia con il pubblico: Progetti (agenzie), contesto con PDF (corporate, B2B), Documenti (PMI), pagina prodotto (e-commerce); nelle pagine agente: Nuovo documento, analisi in corso con la coda dei risultati, pagina del documento, export con il menu Scarica. Le finestre stanno in `features/agents/*Window.astro`; i vecchi `Mockup*` sono stati rimossi. La usano la hero della home (direttamente, stessa grammatica), l'hero delle pagine soluzione (`Manifesto` senza `run`: la pagina del documento senza barra laterale a destra, i passi numerati in una card in basso a sinistra; alta 18/24/27 rem) e il blocco "In breve" delle soluzioni (le finestre "Nuovo documento" di `features/agents/BriefWindow.astro`, una per brief d'esempio, sfalsate in diagonale quando sono tre, centrata quando è una; alte 20/22/24 rem, `zoom` 0,62/0,72/0,8). `BriefWindow` ricostruisce il passo 2 della procedura dell'app (tipo scelto, keyword principale, località, lingua, contesto con il PDF, progetto, "Continua") a 420 px.

### Hero delle pagine agente e soluzione
`featurepage/Manifesto.astro`: a sinistra targhetta, H1, lede, azioni; a destra una `ProductCard` (tono `alba`) con i passi numerati in primo piano e, dietro, la finestra dell'app passata nello slot `card`. Pagine agente: Nuovo documento (01), analisi in corso con la coda dei risultati (02), pagina del documento senza barra laterale (03), export con il menu Scarica (04). Pagine soluzione: Progetti (agenzie), contesto con PDF (corporate, B2B), Documenti (PMI), pagina prodotto (e-commerce). Statico. La sezione "Il prodotto" delle pagine agente mostra l'app intera con la barra laterale (tono `sera`); il blocco "Come funziona" è solo prosa, colonna `max-w-xl`. L'animazione a quattro pannelli (`run/Run.astro`) è stata ritirata il 2026-10-07.

### Chain (firma)
`home/Chain.astro`: quattro nodi collegati da connettori SVG tratteggiati; la corrente (`stroke-dashoffset` 600 ms lineare) scorre solo sul connettore attivo, il nodo attivo la segue (1,5 s; 2,2 s sull'analisi), i nodi passati mostrano `✓` in `status-success`. Pausa con lo stesso bottone mono; fermo = analisi accesa, senza corrente.

I nodi sono `rounded-2xl`. In fondo a ogni nodo c'è un pezzo dell'app (`home/ChainFragment.astro`): una finestra bianca `rounded-xl` con barra a tre punti `base-200`, disegnata a 320–560 px e ridotta con `zoom` 0,56 in un'area alta 7 rem su mobile, 0,66 in 10 rem da `lg`, su una velatura `wash-warm` in basso. Dentro: il brief del nuovo documento (keyword, località, lingua, contesto), i passaggi "Cosa succederà" dell'analisi, le due versioni con "Usa questa versione", i menu Copia/Esporta aperti. Esce dal nodo a destra e in basso, tagliata netta dal bordo, con bordo da 1 px e ombra morbida.

### Anatomy (firma)
`home/Anatomy.astro`: articolo annotato con `mark` `base-100` e riferimenti mono `accent-600` a fianco di quattro note; hover/focus su una nota accende il `mark` corrispondente (`base-200` + anello 2 px, 200 ms) e viceversa. Le note sono `tabindex="0"`.

### FAQ
`faqs/Faq1.astro`: `details` con righe tratteggiate, domanda 18 px `base-900` (hover `accent-600`), icona `+` a tratto 1.4 in `accent-500` che ruota di 45° in 300 ms, risposta 15 px `base-600` `max-w-2xl`.

### Titoli con trattino
`fundations/elements/Unbroken.astro` tiene intere le parole con il trattino (GEO-ready, E-E-A-T) negli H1 dei post e dei casi cliente: niente a capo dopo il trattino.

### 404 (`pages/404.astro`)
L'indirizzo richiesto letto come una keyword. A sinistra targhetta "404", titolo, lede e due azioni; a destra due pannelli come quelli della catena: **Indirizzo** (campo a pillola mono con il percorso richiesto) e **Analisi** ("n pagine lette" e cinque righe numerate come risultati di ricerca: titolo 14 px sopra, indirizzo mono 12 px sotto, hover `base-50`). La pagina porta l'indice del sito (titolo, indirizzo, parole: 67 pagine più le ancore della home) e lo script confronta le parole dell'URL con quelle dell'indice (`lib/nearest.ts`: stessa parola, stessa radice, parola contenuta). Senza JavaScript, o senza parole in comune, restano cinque pagine da cui ripartire. Nessuna animazione.

### Superfici del browser
Selezione bianco su Nero Verbalist (utility `selection:` su `<html>`), invertita dove il fondo è già nero (targhette, pillole piene); cursore di testo e controlli nativi (`caret-color`, `accent-color`) in `base-900`; focus da tastiera `outline` 2 px `base-900` con 2 px di distanza, in base layer così le utility dei componenti hanno la meglio; barre di scorrimento `base-300` su fondo trasparente. Nei post del blog, accanto al breadcrumb, una pillola mono "Markdown" porta a `/blog/<articolo>.md`. In testa al sorgente di ogni pagina un commento indica `/llms.txt`, le versioni Markdown e `/robots.txt`.

### Motion
Una sola animazione per sezione, e solo dove mostra il prodotto: la catena "Un documento, quattro passaggi" (un ciclo di circa 20 s, una scena per nodo: si attiva → azione → uscita → spunta → consegna al nodo dopo, con il pulsante Ferma/Riprendi) e lo streaming delle due versioni (parole e contatori, una volta all'ingresso). Token di durata e curve in `src/styles/motion.css` e `src/lib/motion.ts`. Il resto sono transizioni di colore (`duration-200` su celle, voci nav, link della prose; `duration-300` su bottoni, bordi dei nodi, icone `+`), la traslazione di 4 px del chevron nelle card clienti, lo scroll-snap dei fogli A/B sotto `md` e l'ingresso della barra mobile. `prefers-reduced-motion` azzera tutto in `global.css` e i copioni JS mostrano lo stato finale. Vietati: fade-and-rise allo scroll, hover-lift, parallax, stagger per sezione, cursori lampeggianti fuori dalla digitazione dell'hero e del brief nella catena.

## Do's and Don'ts

### Do:
- **Do** costruire ogni sezione con `Frame` (n, tone, flush) e `Head` (tag, title, text): cornice tratteggiata, sigla e punti d'angolo non si replicano a mano.
- **Do** usare il Nero Verbalist (`accent-500`/`accent-600`, `base-900`) per tutto ciò che deve pesare: pillola primaria, targhetta, punti, bordo attivo. Nessun altro colore.
- **Do** separare i contenuti con tratteggi `base-200` (righe, celle, elenchi) e i pannelli con bordo pieno `base-200` a 12 px.
- **Do** tenere i titoli in peso 400 con tracking −0.025em (hero −0.03em), interamente `base-900`, sotto una targhetta mono.
- **Do** scrivere etichette e artefatti tecnici in Geist Mono 12–13 px, maiuscolo con tracking 0.05em quando sono etichette.
- **Do** usare pillole per tutto ciò che si preme (`Button`, voci nav, SubNav, selettori, `summary`) e una sola pillola accent per gruppo di azioni, con la rassicurazione a 12–14 px sotto.
- **Do** usare `bg-base-50` per il tono "soft" (hero, chiusure, piano consigliato, hover delle celle, nodo attivo) e nient'altro come tinta di superficie.
- **Do** segnalare lo stato con forma e tono: bordo `base-900` + anello `base-100` per "in corso", `✓` e punto in `status-success` per "fatto".
- **Do** dare a ogni animazione pausa, stop fuori schermo e stato finale con `prefers-reduced-motion`.

### Don't:
- **Don't** introdurre texture, gradienti, immagini decorative o illustrazioni: le uniche immagini sono i loghi dei clienti (grayscale), i ritratti del team (grayscale) e le copertine dei post dentro il post.
- **Don't** aggiungere ombre a pannelli, card, nav, sheet o barra mobile: le ombre esistono solo sulle due pillole di `Button` e nell'anello piatto dell'elemento attivo.
- **Don't** usare un colore saturo o una parola colorata nel titolo: l'arancio è stato ritirato; verde e rosso sono stati di sistema.
- **Don't** usare pesi 500–700 sui titoli, il peso 300 sotto i 18 px o un secondo carattere (Familjen Grotesk è stato rimosso; `font-serif` è un alias di Geist).
- **Don't** mettere testo di lettura sotto i 12 px.
- **Don't** usare glifi da font o icone piene: solo SVG a tratto 1.4–1.6 in `accent-500`/`base-700`.
- **Don't** ricreare eyebrow in Geist o con colori diversi da bianco-su-nero/`base-500`, né impilarne due sullo stesso titolo.
- **Don't** aggiungere reveal allo scroll, hover-lift, parallax o stagger: una sola animazione per sezione, e solo se mostra il prodotto.
