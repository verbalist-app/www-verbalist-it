---
name: Verbalist
description: Nero caldo su carta avorio, pannelli tinti senza bordo, un solo carattere (Geist) e un solo inchiostro
colors:
  ink: "oklch(26.3% 0.013 100.5)"
  ink-deep: "oklch(18.2% 0.014 94)"
  ink-soft: "oklch(45% 0.012 100)"
  ink-line: "oklch(70% 0.012 100)"
  background: "oklch(97.5% 0.004 106.5)"
  panel: "oklch(95.8% 0.005 95)"
  white: "#ffffff"
  base-50: "oklch(94.6% 0.006 97)"
  base-100: "oklch(92.1% 0.007 97)"
  base-200: "oklch(90.6% 0.007 97)"
  base-300: "oklch(85% 0.008 97)"
  base-400: "oklch(70% 0.012 100)"
  base-500: "oklch(50% 0.012 100)"
  base-600: "oklch(45% 0.012 100)"
  base-700: "oklch(37.8% 0.012 100)"
  base-800: "oklch(30% 0.012 100)"
  base-900: "oklch(26.3% 0.013 100.5)"
  base-950: "oklch(18.2% 0.014 94)"
  status-success: "oklch(65% 0.1 150)"
  status-error: "oklch(60% 0.13 25)"
  wash-warm: "oklch(95% 0.03 60)"
  wash-cool: "oklch(96% 0.006 97)"
typography:
  hero:
    fontFamily: "Geist Variable, Geist Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 2.75rem + 1vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-0.03em"
  hero-md:
    fontFamily: "Geist Variable, Geist Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 2.25rem + 0.5vw, 2.75rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  display:
    fontFamily: "Geist Variable, Geist Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 2.25rem + 1vw, 3.25rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  display-xs:
    fontFamily: "Geist Variable, Geist Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2rem"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Geist Variable, Geist Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.0125em"
  pair:
    fontFamily: "Geist Variable, Geist Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.375
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
    fontWeight: 400
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
  label:
    fontFamily: "Geist Variable, Geist Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  note:
    fontFamily: "Geist Variable, Geist Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: "normal"
rounded:
  none: "0px"
  md: "4px"
  xl: "6px"
  2xl: "8px"
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
  v1: "24px"
  v2: "48px"
  v3: "72px"
  v4: "96px"
  v5: "120px"
  v6: "144px"
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
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "0 16px"
    height: "36px"
  button-muted:
    backgroundColor: "{colors.base-100}"
    textColor: "{colors.base-900}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    padding: "0 24px"
    height: "40px"
  button-muted-hover:
    backgroundColor: "{colors.base-200}"
    textColor: "{colors.base-900}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.base-900}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "0 16px"
    height: "36px"
  button-ghost-hover:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.base-900}"
  nav-item:
    backgroundColor: "transparent"
    textColor: "{colors.base-900}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "0 12px"
    height: "36px"
  nav-item-hover:
    backgroundColor: "{colors.base-100}"
    textColor: "{colors.base-950}"
  subnav-pill:
    backgroundColor: "transparent"
    textColor: "{colors.base-600}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "0 12px"
    height: "32px"
  subnav-pill-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  label-section:
    backgroundColor: "transparent"
    textColor: "{colors.base-500}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0"
  chip-recommended:
    backgroundColor: "transparent"
    textColor: "{colors.base-900}"
    typography: "{typography.note}"
    rounded: "{rounded.full}"
    padding: "0 10px"
    height: "24px"
  chip-status:
    backgroundColor: "transparent"
    textColor: "{colors.base-900}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "0 12px"
    height: "32px"
  panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.base-900}"
    rounded: "{rounded.md}"
    padding: "24px"
  panel-lg:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.base-900}"
    rounded: "{rounded.md}"
    padding: "40px"
  panel-hover:
    backgroundColor: "{colors.base-100}"
    textColor: "{colors.base-900}"
  panel-soft:
    backgroundColor: "{colors.base-50}"
    textColor: "{colors.base-900}"
    rounded: "{rounded.md}"
    padding: "24px"
  panel-popular:
    backgroundColor: "{colors.base-100}"
    textColor: "{colors.base-900}"
    rounded: "{rounded.md}"
    padding: "40px"
  window:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.base-900}"
    rounded: "{rounded.xl}"
    padding: "24px"
  float-card:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.base-900}"
    rounded: "{rounded.2xl}"
    padding: "16px"
  cell:
    backgroundColor: "transparent"
    textColor: "{colors.base-900}"
    rounded: "{rounded.none}"
    padding: "32px 16px"
  cell-hover:
    backgroundColor: "{colors.base-50}"
  input-search:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.base-500}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: "36px"
  mobile-cta-bar:
    backgroundColor: "{colors.background}"
    textColor: "{colors.base-600}"
    typography: "{typography.note}"
    rounded: "{rounded.none}"
    padding: "10px 16px"
  footer:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.base-900}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "72px 20px 32px"
---

# Design System: Verbalist

## Overview

**Creative North Star: "Carta avorio, un solo inchiostro"**

Il sito è una pagina avorio su cui stanno pannelli di carta un passo più scura, scritti in un solo inchiostro caldo. La grammatica a carta avorio (riferimento estratto il 2026-10-16, adottata il 2026-10-17): nessuna cornice, nessuna riga in testa alle sezioni, le sezioni si separano con l'aria; le hero stanno sul colore della pagina; colonna da 1300 px; nav opaca senza riga; chiusure centrate con il titolo grande. L'identità resta quella registrata in `/brand/`, aggiornata ai nuovi valori: Nero Verbalist #26251E, Avorio #F7F7F4, Carta #F2F1ED, Grigio testo #65635C. Nessun colore saturo. La fiducia viene dal prodotto che si vede all'opera dentro pannelli tinti, non dall'effetto.

La densità è quella di uno strumento: pannelli a 4 px senza bordo, righe piene `base-200` da 1 px per elenchi e celle, la V del marchio davanti ai fatti. Un solo carattere, Geist, per tutto (display, testo, dati, codice, slug, versioni), in due pesi: 400 per tutto, 500 per `strong`, le enfasi nei mockup e, unica eccezione tra i titoli, l'H1 dell'hero della home. Dal 2026-10-17 non c'è più un mono: gli artefatti (slug, versioni, numeri dei passi, codice) si distinguono per misura e colore (12 px, `base-500`), non per carattere. Le etichette di sezione sono in sans a 14 px grigie, in sentence case. La gerarchia si regge su misura e tono di grigio: titoli interamente neri sotto un'etichetta grigia, e nelle coppie titolo/lede alla stessa misura la distanza la fa solo il colore.

Il movimento è funzionale e uno per sezione. L'unica animazione del sito è nel titolo dell'hero della home: il motore per cui Verbalist scrive cambia cinque volte, ogni 2,6 s, con una dissolvenza sui token `--m-micro`/`--m-ease-out`, poi si ferma (nessun loop: WCAG 2.2.2); non parte con `prefers-reduced-motion`, è in pausa col mouse sul titolo, col focus nella sezione e a scheda nascosta. Il resto sono transizioni di colore e il chevron che scorre di 4 px.

**Decisioni registrate.** 2026-09-26: l'accento arancio preso da il primo riferimento esterno è stato ritirato ("Mono" scelta dal maintainer); le rampe `accent-*` restano nel tema come alias dell'inchiostro. 2026-10-17: il "foglio tecnico" del primo riferimento esterno (cornice tratteggiata, sigle nel margine, punti d'angolo, targhette mono bianche su nero, pannelli bianchi con bordo) è stato sostituito dalla grammatica a carta avorio; la rampa fredda (hue ~215) è diventata calda (hue ~100); l'accento arancio di il riferimento esterno è stato valutato e tenuto spento: l'accento è l'inchiostro. I colori di stato sono quelli della piattaforma (`platform/css/css.css`): verde per il completato, rosso per l'errore, nessun colore per l'"in corso". 2026-10-17, più tardi: il mono è stato ritirato del tutto (`--font-mono` è un alias di Geist, il pacchetto e il suo fallback sono stati rimossi da `BaseLayout.astro` e `global.css`); la V del marchio (`assets/Logo.astro`) è diventata la firma del sito, in filigrana nei pannelli-palco (`assets/Watermark.astro`) e come marker degli elenchi al posto del punto; l'H1 dell'hero della home è sceso a 36/44 px in peso 500 con il motore di destinazione che cambia nel titolo.

**Key Characteristics:**
- Due superfici: pagina avorio (`background`) e pannelli di carta (`panel`), un passo più scuri; `bg-white` non si usa più.
- Un solo inchiostro: il Nero Verbalist caldo riempie pillole, le V dei marker e voci attive. Il resto è una rampa calda di grigi.
- Un solo carattere, Geist, per tutto: 400, con il 500 per `strong` e per l'H1 dell'hero; etichette in sans 14 px grigie; dati e artefatti a 12 px `base-500`, nello stesso carattere.
- La V del marchio come firma: in filigrana al 7% nei pannelli-palco (hero della home, chiusura, 404) e come marker a 12 px davanti alle righe di elenco; mai colorata.
- Pannelli tinti a 4 px senza bordo, righe piene `base-200` da 1 px; nessun tratteggio.
- Nessuna ombra su pannelli, card, nav e bottoni; l'unica luce è sugli oggetti di prodotto (finestre dell'app, card in primo piano).
- Pillole per azioni e navigazione; sezioni separate dall'aria (`rhythm`), con più spazio sotto che sopra.

## Colors

Una rampa calda di grigi (hue ~97–100 in oklch) tra l'avorio della pagina e un nero caldo; due colori di stato presi dalla piattaforma, mai usati come accento.

### Primary
- **Nero Verbalist** (`ink` = `accent-500`/`accent-600` = `base-900`, brand #26251E): l'unico inchiostro. Riempie la pillola primaria, le V davanti alle righe di elenco, la voce attiva della SubNav, il selettore A/B premuto, i riquadri scuri della pagina brand; è il colore dei titoli, del testo primario e delle voci nav. Sull'avorio regge il testo più piccolo. Gli alias `accent-*` vivono in `:root` come `--vb-accent-*`, così il colore si cambia in un punto solo.
- **Nero profondo** (`ink-deep` = `accent-700` = `base-950`, #14120B): voce nav attiva e in hover, blocco del marchio nel footer. Non è una superficie.
- **Inchiostro diluito** (`ink-soft` = `accent-400` = `base-600`; `ink-line` = `accent-300` = `base-400`): grigi della stessa rampa, non un secondo colore. Il filetto dei link nella prose e nelle sezioni è `base-400`.

### Neutral
- **Avorio** (`background`, brand #F7F7F4): la pagina, la nav (opaca) e la barra mobile (95% con blur). Mai bianco puro: `--color-white` compare solo come base delle velature nelle card di prodotto e come testo sulle pillole piene.
- **Carta** (`panel`, brand #F2F1ED): i pannelli che stanno sulla pagina (porte, capacità, card degli agenti, piani non consigliati), le finestre dell'app, il footer, il menu mobile, il campo di ricerca del blog, le card in primo piano negli hero. `card` e `popover` sono alias dello stesso valore.
- **Grigio foglio** (`base-50`): pannello di prodotto dell'hero della home, blocco metadati dei fogli A/B, citazione delle prove, hover di celle e righe.
- **Mist** (`base-100`, #E6E5E0): pillola secondaria (`muted`), piano consigliato, hover delle voci nav e delle card degli agenti, riquadri chiari della pagina brand, evidenziazione nei fogli.
- **Linea** (`base-200`, #E1E0DB): ogni linea del sistema, piena e da 1 px: righe di elenco, divisori di cella, riga sotto la SubNav, bordo delle finestre dell'app e dei fogli A/B, bordo della pillola di stato nel footer. Hover della pillola `muted`.
- **Grigio filetto** (`base-300`): bordo della pillola `ghost`, barre di scorrimento, hover del bordo della pillola "Markdown".
- **Grigio muto** (`base-400`): filetto dei link (`border-b`), commenti del codice, marker. Non è un colore da testo.
- **Grigio testo** (`base-500`, brand #65635C): etichette di sezione, numeri dei passi e delle card, etichette dei pannelli, rassicurazioni sotto le CTA, metadati, intestazioni del footer, breadcrumb, segnaposto del campo di ricerca; dati e artefatti a 12 px (indirizzo del foglio e versione nel cartiglio, numeri `01 02 03` dei casi, esadecimali della pagina brand). 5:1 sull'avorio.
- **Grigio secondario** (`base-600`): lede, testo a fianco dei titoli (`Head`), seconda riga delle coppie titolo/lede, descrizioni di card, risposte FAQ, cartiglio del footer.
- **Grigio prosa** (`base-700`) e **grigio scuro** (`base-800`): prose, note dell'anatomia, righe di elenco con punto, `dd` dei metadati.
- **Inchiostro** (`base-900`): titoli, testo primario, voci nav, link del footer, "Versione A/B".
- **Verde stato** (`status-success`): punto "Tutti i sistemi operativi" nel footer, punto "Indirizzo" nei pannelli della 404, spunte e punti di completamento nelle finestre dell'app. I due stati stanno in un blocco `@theme static` di `global.css`: esistono le utility (`bg-status-success`, `text-status-success`, `bg-status-error`) e le variabili sono sempre emesse.
- **Rosso stato** (`status-error`): solo il footer quando un monitor è giù.
- **Velature** (`wash-warm` oklch(95% 0.03 60), `wash-cool` oklch(96% 0.006 97)): solo come gradienti radiali nelle card di prodotto (`ProductCard`), mai come superficie piena né come colore di testo o bordo. La velatura fredda dal 2026-10-17 è sulla stessa tinta della rampa.

### Named Rules
**The One Ink Rule.** Il sito ha un solo inchiostro, il Nero Verbalist caldo (#26251E). Non esiste un secondo colore: l'arancio del primo riferimento esterno è stato ritirato (2026-09-26) e quello di il riferimento esterno valutato e tenuto spento (2026-10-17). I verdi e i rossi sono stati della piattaforma, mai elementi di design.

**The Two Surfaces Rule.** La pagina è avorio (`background`) e tutto ciò che vi sta sopra è carta (`panel`) o un grigio della rampa (`base-50` per il tono soft, `base-100` per ciò che è premuto, consigliato o in hover). Niente bianco puro come superficie e nessuna tinta di sezione fuori da questi tre toni.

**The Black Title Rule.** I titoli sono interamente `base-900`. Il segnale sta nell'etichetta grigia sopra il titolo o nella misura, mai in una parola colorata o grigia dentro il titolo.

**The Grey Status Rule.** "In corso" non ha colore: si riconosce da fondo `base-50`/`base-100` e inchiostro. Il verde arriva solo a lavoro concluso o a sistemi operativi.

## Typography

**Display Font:** Geist Variable (fallback: Geist Fallback, ui-sans-serif, system-ui)
**Body Font:** Geist Variable (stesso)
**Label/Data Font:** Geist Variable (stesso). Dal 2026-10-17 il sito non ha un mono: slug, versioni, numeri e codice sono in Geist.

`Geist Fallback` (Arial/Helvetica) è un `@font-face` locale con `size-adjust` e override di ascent/descent in `global.css`: occupa lo stesso spazio finché il woff2 non arriva. Self-hosted via `@fontsource-variable/geist` (unico pacchetto), importato in `BaseLayout.astro`. `font-serif` e `font-mono` sono alias storici che puntano a Geist (`--font-mono` in `global.css`): non usarli per nuovo codice; `.vb-chapters` nelle pagine agente usa ancora `var(--font-mono)`, che oggi risolve a Geist.

**Character:** un grottesco solo, in peso regolare; i titoli si distinguono per misura, tracking stretto e tono di grigio, non per peso, colore o maiuscole. Le etichette sono in sans, grigie, in sentence case, come il testo corrente: niente targhette. Ogni misura fuori dalla scala Tailwind ha un nome in `@theme` (`--text-2xs` 11, `--text-md` 15, `--text-lede` 19, `--text-headline` 28, `--text-display-xs` 32, `--text-hero-md` 44, `--text-display` 52, `--text-hero-sm` 56, `--text-hero` 60).

### Hierarchy
- **Hero** (400, 44 px → 56 px da `sm` → 60 px da `lg`, line-height 1.06, tracking −0.03em): dal 2026-10-17 non è più l'H1 della home ma il titolo della chiusura (`Close`) e il numero del caso in testa a `/clienti/` e nell'hero dei casi studio. Il prezzo dei piani usa 44 px con `tabular-nums` e il "€" a 24 px `base-500`.
- **Hero-md** (500, 32 px → 36 px da `sm` → 44 px `text-hero-md` da `lg`, line-height 1.1, tracking −0.03em, `text-balance`): solo l'H1 dell'hero della home, due righe ("Prima legge Google." / "Poi scrive per <motore>"), con l'icona del motore a `0.72em` e il nome che cambia. È l'unico titolo del sito in peso 500: a 44 px il 400 non reggeva il confronto con la finestra del prodotto sotto.
- **Display** (400, 36 px → 52 px da `lg`, line-height 1.15/1.1, tracking −0.025em, `text-balance`): H1 delle pagine interne e H2 di sezione via `section/Head.astro`; titolo di `Cta2`.
- **Display-xs** (400, 32 px, line-height 1.15): "Su richiesta" nei piani, numero dei casi nell'indice clienti su mobile.
- **Headline** (400, 24 px → 28 px da `lg`, `tracking-tight`): la citazione delle prove e i titoli di release; dal 2026-10-17 (sera) non è più l'H1 dell'hero della home.
- **Coppia titolo/lede** (400, stessa misura per i due: 20 px, che nelle porte sale a 24 da `lg`; titolo `base-900`, lede `base-600`, `leading-snug`, `tracking-tight`, `mt-1`, `text-pretty`): porte e "Intorno alla catena". La gerarchia la fa solo il colore. Meccanismo preso da il riferimento esterno il 2026-10-17; non si applica alle griglie a quattro colonne (card degli agenti), dove il testo a 20 px andrebbe su troppe righe.
- **Title** (400, 18–20 px, line-height 1.375): nome delle card degli agenti e dei piani, titoli di card blog (20), help/team/casi (18), domande FAQ (18), nome delle righe di registro (18).
- **Lede** (400, 18 px `leading-snug` → 19 px `text-lede` da `lg`, `base-600`, `max-w-lg`/`max-w-xl`): il paragrafo sotto hero e Manifesto; nelle chiusure resta 18 px con `max-w-md`. In peso regolare dal 2026-10-17: la distanza dal titolo la fa il grigio, non il peso.
- **Body** (400, 16 px, line-height 1.625; prose 1.75): testo a fianco dei titoli (`Head`, `base-600`), note dell'anatomia, prose. Colonna prose `max-w-xl`, sempre a sinistra.
- **Secondary** (400, 15 px, line-height 1.6, `base-600`/`base-800`): descrizioni di card, riassunti degli agenti, descrizione dei piani, risposte FAQ, corpo dei fogli A/B, fatti dei casi.
- **Label** (400, 14 px, sans, `base-500`, sentence case): etichette di sezione (`Head` prop `tag`), etichette dei pannelli ("Per le agenzie", "Brief"), numeri delle card degli agenti, intestazioni del footer, breadcrumb, categoria e data delle celle, rassicurazioni sotto le CTA. È lo stesso passo di voci nav, SubNav, righe con marker e cartiglio, in `base-900`/`base-600`.
- **Dati e note** (400, 12 px `text-xs`, Geist, `base-500`): gli artefatti del prodotto e della build (numeri dei passi nel Manifesto e riferimenti dell'anatomia in `accent-600`, numeri `01 02 03` dei risultati nei casi e numeri della SubNav, indirizzo del foglio e versione della piattaforma nel cartiglio, esadecimali nella pagina brand, slug e codice) e le note (rassicurazioni nei piani e nella barra mobile, metadati nei pannelli, targhetta "Consigliato"). Si riconoscono dalla misura e dal grigio, non dal carattere; dove serve un passo da tabella, `tracking-wider` o `tabular-nums`. Minimo assoluto di lettura: 12 px; 11 px (`text-2xs`) solo per decorazioni nei mockup.

### Named Rules
**The Two Weights Rule.** Due pesi in tutto il sito: 400 per titoli, lede, corpo e UI; 500 per `strong` nella prose, gli H4 dentro i fogli A/B, le enfasi nei mockup e, sola eccezione tra i titoli, l'H1 dell'hero della home (`font-medium`, 36/44 px). Ogni altro titolo resta in 400. Il 300 è stato ritirato il 2026-10-17; niente 600–700.

**The Grey Label Rule.** L'etichetta sopra i titoli (`Head` prop `tag`, eyebrow del Manifesto, etichette dei pannelli) è in Geist a 14 px, `base-500`, sentence case, a 16 px dal titolo. Una per titolo, mai due. Le targhette mono maiuscole bianche su nero sono state eliminate il 2026-10-17.

**The Size Not Face Rule.** Un solo carattere per tutto, Geist: niente mono, nemmeno per ciò che la piattaforma o la build producono. Slug, versioni, numeri dei passi, esadecimali e codice si distinguono per misura e colore (`text-xs` 12 px, `base-500` o `accent-600`; `text-sm` 14 px dove vanno letti), senza maiuscole forzate. `font-mono` è un alias di Geist: non è un carattere.

**The Same Size Pair Rule.** Dove titolo e lede di un pannello stanno alla stessa misura (porte 20→24, capacità 20), la gerarchia la fa solo il colore: `base-900` sopra, `base-600` sotto, a 4 px di distanza.

## Layout

Una colonna di 1300 px senza cornice: `Wrapper variant="standard"` è `max-w-[1300px] px-5` (20 px di gutter), nav e footer compresi; le sezioni aggiungono `lg:!px-14` (56 px). I bordi laterali tratteggiati sono stati rimossi il 2026-10-17.

Ogni sezione è un `section/Frame.astro`: niente riga in testa, niente sigla nel margine, niente punti d'angolo (le prop `n` e `flush` restano nella firma perché i chiamanti le passano ancora, ma non disegnano nulla). `scroll-mt-[72px]`; tono `white` (la pagina) o `soft` (pannello `bg-base-50 rounded-md`: hero delle pagine interne, casi studio, brand). Ritmo verticale con la prop `rhythm` (meccanismo preso da il riferimento esterno): l'unità è una riga di corpo da 24 px (token `--spacing-v1…v6` in `global.css`) e le sezioni ne prendono multipli, con più aria sotto che sopra: `section` 48/96 px su mobile e 72/120 da `lg`; `open` solo sopra, per le sezioni che finiscono con celle sul bordo (griglie dei casi e delle soluzioni); `close` 72/96 → 96/120 per le chiusure (`Close`, `Cta2`, 404). Le hero tengono il loro padding: home `pt-12/pb-10` → `pt-20/pb-14`, pagine interne `pt-12/pb-14` → `pt-20/pb-20`, Manifesto `pt-10/pb-12` → `pt-16/pb-16`, casi studio `pt-8/pb-14` → `pt-10/pb-20`. Il footer sta a `mt-v4` (96 px) dall'ultima sezione.

Griglie interne: testa di sezione 7/5 (`lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]`, gap 64 px, `items-start`, testo a fianco allineato alla prima riga del titolo con `lg:pt-9`) con il testo a fianco `max-w-md`; FAQ e pagina brand 5/7; hero delle pagine agente e soluzione 7/5 con la `ProductCard` a destra; anatomia 1/1. Pannelli affiancati con `gap-3` (12 px): porte 1/1, capacità 1/1/1, piani 1/1/1; card degli agenti 2 → 4 colonne con `gap-4`. Celle a tutta larghezza per blog, help, team e indice clienti, divise da righe piene (`border-b`, `md:border-r`). Distanze ricorrenti: 4 px tra titolo e lede di una coppia, 16 px tra etichetta e titolo di sezione, 20 px tra H1 e lede dell'hero della home (`mt-5`), 24 px tra titolo e lede nelle chiusure e tra `Head` e lede del Manifesto, 32 px tra lede e azioni, 16 px tra azioni e nota, 12 px tra pillole, 40–64 px tra testa di sezione e contenuto (`mt-10 lg:mt-14`, `mt-12 lg:mt-16`). Nei pannelli il padding è 24 px → 40 px da `lg` (`p-6 lg:p-10`), nelle card degli agenti 24 px.

La densità si governa per sottrazione: i fogli A/B mostrano intro e prima sezione, il resto sta in un `details`; le prove mostrano quattro casi e un `details` "Altri n casi"; le liste sono righe da 12 px di padding. Su mobile i due fogli scorrono in orizzontale con `snap-x` e un selettore a pillola; una barra fissa in basso (`global/MobileCta.astro`) porta "Prova gratis" nella zona del pollice dopo il primo viewport, con `padding-bottom` che include `env(safe-area-inset-bottom)`, e sparisce vicino al footer.

Breakpoint usati: `sm` 640, `md` 768 (fogli affiancati, capacità a tre, casi a tre), `lg` 1024 (nav desktop, griglie, barra mobile nascosta), `xl` 1280 (footer a tre colonne). Nav fissa 72 px; le pagine interne partono con `pt-[72px]` e la SubNav alta 56 px su mobile, 48 px da `lg`. Touch: i bottoni `xs`/`sm`/`base` estendono l'area cliccabile in verticale con `.tap-target` (`pointer: coarse`); voci del footer `min-h-11`; pillole della SubNav `h-10` su mobile; voci del menu mobile `min-h-13`.

### Named Rules
**The More Air Below Rule.** Una sezione prende 2/4 righe di corpo sopra/sotto su mobile e 3/5 da `lg` (`Frame rhythm="section"`): il titolo di una sezione sta più vicino a ciò che la precede che a ciò che la segue. Il ritmo non si scrive a mano: si passa `rhythm`.

## Elevation & Depth

Sistema piatto per tono: la profondità è carta su avorio (`panel` su `background`), `base-50` per il palco di prodotto e `base-100` per ciò che è premuto o consigliato. Nessun pannello, card, nav, menu, sheet, barra o bottone ha ombra. La nav è opaca sull'avorio, senza riga; la barra mobile usa `bg-background/95` con `backdrop-blur-sm` e una riga `base-200` in alto. I pannelli tinti non hanno bordo; le finestre dell'app e i fogli hanno un bordo `base-200` da 1 px perché dentro mostrano un'interfaccia.

### Shadow Vocabulary
Le sole ombre del sito stanno sugli oggetti di prodotto, in inchiostro (`rgb(38 37 30)`), definite in `home/Hero.astro`, `featurepage/ProductCard.astro` e `global.css`:
- **Finestra dell'app** (`.vb-window`: `inset 0 1px 0 rgb(255 255 255 / 0.9), 0 0 0 1px rgb(38 37 30 / 0.08), 0 2px 4px rgb(38 37 30 / 0.04), 0 16px 32px -12px rgb(38 37 30 / 0.14), 0 48px 96px -32px rgb(38 37 30 / 0.28)`): filo chiaro in alto, bordo sottile, ombra lunga. La pagina del documento nell'hero e nei Manifesto, le finestre `features/agents/*Window.astro`.
- **Card in primo piano** (`.vb-float`: `0 0 0 1px rgb(38 37 30 / 0.06), 0 1px 2px rgb(38 37 30 / 0.05), 0 12px 24px -10px rgb(38 37 30 / 0.16), 0 32px 56px -24px rgb(38 37 30 / 0.2)`): il brief come messaggio nell'hero, i passi numerati del Manifesto.
- **Pezzo di prodotto in testa a una cella** (`.vb-peek-card`: `0 0 0 1px rgb(38 37 30 / 0.08), 0 12px 24px -12px rgb(38 37 30 / 0.25)`, raggio 8 px, con `.vb-peek` che sfuma in basso con `mask-image`): le prime tre celle di "Cosa cambia" nelle pagine soluzione.

### Named Rules
**The Tone Not Shadows Rule.** Un contenitore si separa dalla pagina con il tono (`panel`, `base-50`, `base-100`), mai con un'ombra e, se è un pannello di testo, nemmeno con un bordo. L'unica luce del sito è quella sugli oggetti di prodotto: è luce su un oggetto appoggiato, non elevazione di un contenitore.

## Shapes

Quattro raggi, ognuno con un ruolo, con i nomi Tailwind ridefiniti in `@theme` (dal 2026-10-17). Pillole (`rounded-full`) per tutto ciò che si preme o seleziona: bottoni, voci nav e SubNav, selettore A/B, pillola di stato nel footer, targhetta "Consigliato", pillola "Markdown", punti. Angoli a 4 px (`rounded-md` = `rounded-lg` = `--radius-md/lg`) per pannelli e scatole che stanno sulla pagina: porte, capacità, card degli agenti, piani, pannello di prodotto dell'hero, sezioni `soft`, righe in hover dentro le porte, campo di ricerca del blog. Angoli a 6 px (`rounded-xl` = `--radius-xl`) per le finestre dell'app e i contenitori che mostrano un'interfaccia o dati: pagina del documento, fogli A/B, articolo annotato dell'anatomia, `dl` dell'azienda nei casi, citazione delle prove, riquadri della pagina brand, `pre` e immagini della prose. Angoli a 8 px (`rounded-2xl`/`rounded-3xl` = `--radius-2xl/3xl`) per le card in primo piano (brief, passi) e la `ProductCard`. Celle, elenchi, tabelle e cartiglio sono squadrati (0 px).

Bordi: sempre 1 px, pieni, `base-200`. I tratteggi sono stati eliminati ovunque il 2026-10-17. Righe di elenco `border-t … last:border-b`, divisori di cella `border-b`/`md:border-r`, riga sotto la SubNav, bordo delle finestre e dei fogli; link con filetto `border-b border-base-400` che passa a `accent-500`/`base-900` in hover. Le icone sono SVG a tratto 1.4–1.6 (`+` delle FAQ, chevron, menu, icone degli agenti e delle capacità a 20–24 px), mai glifi di font o icone piene. L'unica forma piena è la V del marchio (`assets/Logo.astro`, `fill="currentColor"`), che ha due ruoli: filigrana (`assets/Watermark.astro`: `absolute`, `text-base-900/[0.05]`, `pointer-events-none`, tagliata da un contenitore `relative overflow-hidden`; posizione e altezza le passa chi la usa, `-right-10 -top-12 h-[130%] lg:-right-16` nel pannello dell'hero, `-right-20 -bottom-24 h-[24rem] lg:h-[32rem]` nell'hero della 404) e marker degli elenchi (`size-3 shrink-0 text-base-900`, `aria-hidden`, con `mt-1.5` quando la riga va su più righe).

### Named Rules
**The V Mark Rule.** La V del marchio è la firma del sito e compare in due soli modi: in filigrana al 7% dell'inchiostro dentro un pannello-palco (il pannello di prodotto dell'hero, l'hero della 404), sempre assoluta e tagliata dal bordo; e come marker a 10 px davanti alle righe di elenco, al posto del punto. Mai come decorazione libera su una pagina, mai colorata, mai più di una filigrana per viewport. I punti restano solo per gli stati (`status-success`, `status-error`, `base-300` per l'attesa).

## Components

### Buttons
`fundations/elements/Button.astro`, props `variant` (`accent` | `muted` | `ghost` | `default` | `none`), `size` (`xs` 32 px/`sm` 36/`base` 40/`md` 44/`lg` 48/`xl` 56), `isLink`, `iconOnly`.
- **Shape:** pillola piena (`rounded-full`), altezza fissa, testo centrato, peso 400, nessuna ombra.
- **Accent (primaria):** fondo `accent-500` (Nero Verbalist), testo bianco, `px-6` a 40 px (`px-4` a 32–36 px). Una sola per gruppo di azioni ("Prova gratis"), con la rassicurazione a 12–14 px `base-500` sotto. Hover `base-700`.
- **Muted (secondaria):** fondo `base-100`, bordo trasparente, testo `base-900`; hover `base-200` ("Parla con noi" negli hero e nelle chiusure, "Accedi" nel menu mobile, piani non consigliati, download della pagina brand).
- **Ghost (nuova, 2026-10-17):** trasparente con bordo `base-300`, testo `base-900`; hover `bg-panel`. Solo nella nav ("Parla con noi", `size="sm"`).
- **Hover / Focus:** transizione 150 ms (come `--m-micro`); focus `ring-2` con offset 2 (`base-900` per accent, `base-300` per muted e ghost). Le taglie xs/sm/base su touch estendono l'area cliccabile con `.tap-target`.
- **Default:** `bg-black`/hover `base-700`; esiste nella primitiva ma le superfici usano `accent`.
- **Bottoni di pannello (32–36 px):** `summary` dei `details` e la pillola "Markdown" nei post sono pillole `h-8`/`h-9` su `bg-panel` con bordo `base-200`, testo 14 px, hover bordo `base-300` + testo `base-900`; l'icona `+` in `accent-500`/`accent-600` ruota di 45° all'apertura.

### Chips
- **Etichetta di sezione** (`Head` prop `tag`, eyebrow del Manifesto): testo sans 14 px `base-500`, senza fondo né bordo, a 16 px dal titolo. Stessa forma per le etichette dei pannelli ("Per le agenzie", "Brief") e i numeri delle card degli agenti.
- **Targhetta "Consigliato"** (piani): pillola `h-6 px-2.5 text-xs`, bordo `border-current` in `base-900`, trasparente.
- **Pillola di stato** (footer): `h-8 px-3 text-sm`, bordo `base-200`, punto `size-1.5` in `status-success` (o `status-error`), hover `base-100`.
- **Selettore A/B (mobile):** contenitore pillola con bordo `base-200` e `p-1`; il bottone premuto è `bg-accent-600 text-white`, alto 40 px (`aria-pressed`).
- **Marker a V:** `<Logo aria-hidden="true" class="size-3 shrink-0 text-base-900" />` davanti alle righe di elenco (porte, piani, chi siamo, contatti nelle prove); `mt-1.5` se la riga va a capo. Il punto `size-1.5 rounded-full` resta solo per gli stati: `status-success` per i sistemi operativi e l'"Indirizzo" della 404, `base-300` per l'attesa.

### Cards / Containers
- **Pannello tinto** (`p-6 bg-panel rounded-md lg:p-10`): la scheda che sta sulla pagina, senza bordo. Dentro, etichetta 14 px `base-500`, poi titolo a `mt-6` e lede a `mt-1` (coppia), elenco a righe a `mt-8`, link "… →" in fondo con `mt-auto pt-6`. Quando il pannello è un link intero (`after:absolute after:inset-0` sul titolo), in hover il link in fondo passa a `opacity-75`; le righe interne che sono link a sé stanno a `z-10` con hover `bg-base-100 rounded-md`. Usato da porte e capacità.
- **Card degli agenti** (`home/Chain.astro`): `p-6 bg-panel rounded-md gap-8`, icona 24 px `base-900`, numero 14 px `base-500`, nome 20 px, riassunto 16 px `base-600`, una freccia in basso a destra; tutta la card è il link, in hover il fondo passa a `base-100` (200 ms) e il chevron scorre di 4 px (300 ms).
- **Card dei piani** (`home/Plans.astro`): `p-6 rounded-md lg:p-10`, `bg-panel` o `bg-base-100` per il consigliato (con la targhetta); nome 20 px, prezzo 44 px `tabular-nums`, periodo 14 px `base-500`, descrizione 15 px, elenco a righe, pillola (accent sul consigliato, muted altrove) con la nota a 12 px sotto.
- **Pannello di prodotto dell'hero** (`home/Hero.astro`): `relative rounded-md bg-base-50 overflow-hidden` con padding (`pt-6/8/10`, `pb-20/24/16`); dal 2026-10-17 sera non ha altezza fissa: contiene la finestra dell'app intera (`zoom` 0,28/0,6/0,86, in flusso, `mx-auto w-fit`), senza tagli sopra né sotto, a tutta larghezza sotto il testo; dentro, la V in filigrana (`Watermark`, `-right-4 -top-10 h-[120%] sm:-right-8 sm:h-[140%]`), la pagina del documento senza barra laterale (`AppWindow sidebar={false}`, `rounded-xl .vb-window`, centrata) e il brief come messaggio in basso a sinistra (`bg-panel rounded-2xl rounded-bl-md .vb-float`: etichetta 14 px `base-500`, keyword 14 px, metadati 12 px). La card dei motori è stata tolta il 2026-10-17: i motori stanno nel titolo. Il pannello è statico.
- **Finestra / foglio** (`bg-panel border border-base-200 rounded-xl`): contenitori che mostrano un'interfaccia o dati. Fogli A/B (`Prints.astro`: header 44 px `border-b` con nome versione 14 px `accent-600`, blocco metadati `bg-base-50` con `dl` a due colonne, corpo `px-5 py-6`, `details` "Leggi un estratto"), articolo annotato dell'anatomia (`p-6 sm:p-8`), `dl` dell'azienda nei casi (`p-6`, righe `border-b base-200`), riquadro "In breve" dei post. I fogli stanno in un contenitore con `data-nosnippet`; i segnaposto della piattaforma (`[SOURCE NEEDED]`, `[INTERNAL: …]`) restano visibili.
- **Citazione** (`Proofs`): `p-6 sm:p-10 bg-base-50 border border-base-200 rounded-xl`, blockquote 24 → 28 px `tracking-tight`, firma 14 px `base-600` con logo grayscale.
- **Cella** (`BlogCard`, `HelpCenterCard`, `TeamCard`, indice clienti): nessun raggio e nessun bordo proprio, solo `border-b border-base-200` e i divisori della griglia; `px-4 py-8` → `lg:px-8 lg:py-10`; riga 14 px `base-500` in testa (data/categoria, con la categoria in `accent-600`), titolo a `mt-8`, descrizione 15 px `base-600`, "Leggi →" in fondo con `mt-auto`. Hover: `bg-base-50` (200 ms) e titolo `accent-600`; il link copre la cella con `after:absolute after:inset-0`.
- **Cella con numero** (`CustomerCard4`, indice `/clienti/`): logo grayscale e settore 14 px in testa, poi il numero del caso (frontmatter `figure`) a 32 → 52 px come titolo, la sua riga 15 px `base-600`, "Leggi il caso →" in fondo. Il caso in testa (`featured`) sta a tutta larghezza con il numero a 60 px.
- **Riga di registro** (`Proofs`): `li` a tre colonne 3/5/4 con `py-6`, riga piena sopra, nome 18 px, fatto 15 px `base-800`, crediti 12 px; hover `bg-base-50`.
- **Elenco a righe** (porte, piani, chi siamo, contatti): `li` con `py-3`, `border-t border-base-200`, `last:border-b`, marker a V `size-3 text-base-900`, testo 14 px `base-800`. Lo stesso marker a V nelle righe dei piani delle pagine soluzione e agente.

### Inputs / Fields
- **Campo di ricerca del blog** (`blog/BlogSearch.astro`): `h-9 rounded-md bg-panel`, `ring-1 ring-base-200`, testo e segnaposto `base-500`; focus bordo `accent-500` e `ring-2 ring-accent-100`. Risultati in un pannello `bg-panel rounded-xl`, voci `rounded-lg hover:bg-mist-100`. Il sito non ha altri form propri oltre a HubSpot; i campi nuovi seguono questa forma (carta, 4 px, riga `base-200`, focus con ring in inchiostro).

### Navigation
- **Nav principale** (`global/Navigation.astro`): fissa, 72 px, `bg-background` opaco, senza riga; logo alto 20 px a sinistra; voci al centro (`absolute left-1/2`), ognuna una pillola `h-9 px-3 text-sm text-base-900`, hover `bg-base-100 text-base-950` (200 ms), attiva `text-base-950`; a destra "Accedi" testuale (`hover:opacity-75`), la pillola `ghost` "Parla con noi" e la pillola `accent` "Prova gratis", entrambe `size="sm"` (la accent `max-lg:h-10`, 40 px sul touch); toggle menu `size-11` con icona a tratto 1.5.
- **Menu mobile:** pannello `bg-panel` a tutto schermo sotto la nav, voci 20 px alte ≥52 px separate da righe `base-200`, voce corrente in `accent-600`, "Help center" in coda, due pillole `lg` piene in fondo (muted "Accedi" + accent "Prova gratis").
- **SubNav** (`featurepage/SubNav.astro`): riga alta 56/48 px sotto la nav con `border-b base-200`, voce di testa 14 px `base-500` con `border-r`, poi pillole 44/32 px (`h-11 lg:h-8`) `text-sm`; la corrente è `bg-accent-500 text-white` con il numero a 12 px all'80% di bianco, le altre `base-600` con il numero `base-500` e hover `bg-base-100`. Scorre in orizzontale su mobile.
- **Barra mobile** (`global/MobileCta.astro`): fissa in basso sotto `lg`, `bg-background/95` con blur e riga `base-200` in alto, nota 12 px `base-600` a sinistra e pillola accent 40 px a destra; entra con `translate-y` 300 ms dopo il 90% del primo viewport, sparisce a 420 px dal footer.
- **Footer** (`global/Footer.astro`): `bg-panel` a tutta larghezza, `mt-v4`, `pt-v3 pb-8`; marchio e una riga 14 px `base-600` a sinistra, quattro colonne con intestazioni 14 px `base-500` e link 14 px `base-900` (`hover:opacity-75`, alti ≥44 px su mobile).
- **Cartiglio** (fine del footer, ogni pagina): dal 2026-10-17 una sola riga `dl` a 14 px `base-600` con `gap-x-6`: `© anno` NUR S.r.l. con P.IVA; il foglio (indirizzo della pagina a 12 px, "404" sulla 404); **Piattaforma**, la versione dell'ultima release del changelog a 12 px (link); **Revisione**, la data della build; a destra lo stato dei sistemi come pillola `h-10` con punto, letto da uptime. Statico.

### Section head (firma)
`section/Frame.astro` + `section/Head.astro` costruiscono ogni sezione: `Frame` dà colonna, tono e ritmo; `Head` dà etichetta 14 px `base-500`, titolo 36/52 px interamente `base-900` a `mt-4`, e a fianco (5/12) il testo 16 px `base-600` `max-w-md`, allineato in basso. Le pagine "feature" li riusano tramite `featurepage/Manifesto.astro` e `featurepage/SectionHead.astro` (azioni nello slot a `mt-8`).

### Chiusure (`home/Close.astro`, `ctas/Cta2.astro`)
Centrate, `rhythm="close"`: titolo grande (`Close` 44/56/60 px `text-hero`, `Cta2` 36/52 px `text-display`), lede 18 px `base-600` `max-w-md` a `mt-6`, pillole a `mt-8` (`Close` una sola accent; `Cta2` accent + muted opzionale), rassicurazione 14 px `base-500` a `mt-4` quando il link è una registrazione.

### Fila dei clienti (`home/Logos.astro`)
Subito sotto l'hero (dal 2026-10-17): titolo solo `sr-only`, poi una riga di celle (`grid-cols-2 → 4 → 7`, bordi `base-200`, alte 80 px) con il logo di ogni caso studio in grigio (`grayscale opacity-80`, `h-5`/`h-[1.375rem]`), una cella per cliente, non cliccabile; l'ultima cella occupa due colonne sotto `lg` per non lasciare il buco. Sono gli stessi sette clienti di "Nasce in un'agenzia" e di `/clienti/`: nessun logo in più.

### Hero della home
`home/Hero.astro`, a sinistra: H1 32 → 36 → 44 px (`text-[2rem]` → `sm:text-4xl` → `lg:text-hero-md`, `leading-[1.1]`), `font-medium`, tracking −0.03em, `text-balance`, su due righe: "Prima legge Google." e "Poi scrive per <motore>.", dove il motore è icona (`size-[0.72em]`, da `public/img/engines/`) più nome e cambia tra ChatGPT, Gemini, Claude, Perplexity e Google ogni 2,6 s, per un giro solo: il nome e l'icona scendono di `0.18em` e sfumano (`opacity`/`transform` su `--m-micro` `--m-ease-out`), poi risalgono con il nuovo. È la sola animazione della sezione e dopo cinque passi si ferma da sola: non parte con `prefers-reduced-motion`, è in pausa col mouse sul titolo, col focus nella sezione e a scheda nascosta; i nomi non visibili stanno in uno `sr-only` così l'H1 letto è completo. Poi lede a `mt-5` (18 → 19 px), due pillole (accent + muted) a `mt-8`, nota 14 px `base-500` a `mt-4`, tutto in `max-w-3xl`; sotto, a `mt-12 lg:mt-16`, il pannello di prodotto tinto a tutta larghezza con la V in filigrana (vedi Cards).

### Card di prodotto (`featurepage/ProductCard.astro`)
Il contenitore delle illustrazioni nelle pagine agente e soluzione, con velature radiali: `rounded-3xl` (8 px), bordo `base-200`, fondo bianco con le velature radiali (prop `tone`: `alba` calda in basso a destra e fredda in basso a sinistra; `sera` invertita; `foschia` solo la fredda in alto a destra; `carta` = `base-50` pieno), `overflow-hidden`, `role="img"` con descrizione, `data-nosnippet`. Dentro, oggetti assoluti che i bordi tagliano netti: finestre dell'app (`.vb-window`, `rounded-xl`) e card in primo piano (`.vb-float`, `bg-panel rounded-2xl`). Due card vicine non hanno mai lo stesso sfondo. Le finestre stanno in `features/agents/*Window.astro`.

### Hero delle pagine agente e soluzione
`featurepage/Manifesto.astro`, sul colore della pagina: a sinistra `Head` con etichetta e H1, lede a `mt-6`, azioni a `mt-8`; a destra una `ProductCard` (alta 22/24/27 rem) con, in primo piano, i passi numerati (numero 12 px `accent-600` + testo 14 px, righe `base-200`) in una card `bg-panel rounded-2xl .vb-float` e, dietro, la finestra dell'app passata nello slot `card`. Pagine agente: Nuovo documento (01), analisi in corso (02), pagina del documento (03), export (04). Pagine soluzione: Progetti (agenzie), contesto con PDF (corporate, B2B), Documenti (PMI), pagina prodotto (e-commerce). Statico. Nelle pagine agente "Come funziona" è prosa `max-w-xl` a capitoli (`.vb-chapters`): ogni paragrafo ha il numero a 12 px `base-500` su un filo pieno `base-200` a sinistra. Pagine soluzione, griglia "Cosa cambia" 3×2: le prime tre celle portano in testa un pezzo di prodotto che sfuma (`.vb-peek`, `h-44`), scelto nel frontmatter (`peek`) o dal link della cella tra le schermate di `home/ChainFragment.astro`.

### Casi studio (`layouts/CustomersLayout.astro`)
Hero 7/5 sul colore della pagina: breadcrumb 14 px `base-500`, logo, H1 e azienda a sinistra, a destra il numero del caso a 52 → 60 px. Poi problema e soluzione (due celle divise da righe piene), i tre risultati in tre celle numerate `01 02 03` (12 px `base-500`, `tracking-wider`) e il racconto in prose `max-w-xl` con a fianco, `sticky top-24`, il `dl` dell'azienda in una finestra (`bg-panel border rounded-xl`).

### Anatomy (firma)
`home/Anatomy.astro`: articolo annotato in una finestra (`p-6 bg-panel border rounded-xl`) con riferimenti a 12 px `accent-600` a fianco di quattro note su righe piene; hover/focus su una nota accende il passaggio corrispondente (200 ms) e viceversa. Le note sono `tabindex="0"`.

### FAQ
`faqs/Faq1.astro`, `home/Questions.astro`: `details` su righe piene `base-200`, domanda 18 px `base-900` `py-5` (hover `accent-600`), icona `+` a tratto 1.4 in `accent-500` che ruota di 45° in 300 ms, risposta 15 px `base-600` `max-w-2xl`.

### 404 (`pages/404.astro`)
L'indirizzo richiesto letto come una keyword, su `Frame rhythm="close"` con `overflow-hidden` e la V in filigrana in basso a destra (`Watermark -right-20 -bottom-24 h-[24rem] lg:h-[32rem]`): a sinistra etichetta "404", titolo, lede e due azioni; a destra due pannelli con l'indirizzo e le pagine più vicine (`lib/nearest.ts`). Nessuna animazione.

### Superfici del browser
Selezione bianco su Nero Verbalist (utility `selection:` su `<html>`), invertita dove il fondo è già nero (pillole piene, riquadri scuri); cursore di testo e controlli nativi (`caret-color`, `accent-color`) in `base-900`; focus da tastiera `outline` 2 px `base-900` con 2 px di distanza, in base layer così le utility dei componenti hanno la meglio; barre di scorrimento `base-300` su fondo trasparente. Nei post del blog, accanto al breadcrumb, una pillola "Markdown" porta a `/blog/<articolo>.md`.

### Motion
Una sola animazione per sezione, e solo dove mostra il prodotto o la sua destinazione. L'unico loop del sito è il motore che cambia nel titolo dell'hero della home (ogni 2,6 s, uscita e ingresso su `--m-micro` e `--m-ease-out`, `setInterval` che salta i passi con il mouse sul titolo o `document.hidden`, mai avviato con `prefers-reduced-motion`); nessun'altra sezione ha un loop dal 2026-10-11. Il linguaggio sta in `.claude/skills/motion-design/`; token di durata e curve in `src/styles/motion.css` (`--m-micro` 150, `--m-base` 320, `--m-wide` 600, `--m-ease-out`) e `src/lib/motion.ts`. Il resto sono transizioni di colore (`duration-150` sui bottoni; `duration-200` su celle, righe, voci nav e SubNav, card degli agenti, link della prose; `duration-300` sull'icona `+`, sul chevron che scorre di 4 px e sull'ingresso della barra mobile), lo scroll-snap dei fogli A/B sotto `md`. `prefers-reduced-motion` azzera tutto in `global.css`. Vietati: fade-and-rise allo scroll, hover-lift, parallax, stagger per sezione.

## Do's and Don'ts

### Do:
- **Do** costruire ogni sezione con `Frame` (rhythm) e `Head` (tag, title, text): colonna da 1300 px, ritmo verticale e testa di sezione non si replicano a mano.
- **Do** usare il Nero Verbalist (`accent-500`/`accent-600`, `base-900`) per tutto ciò che deve pesare: pillola primaria, marker a V, voce attiva, titoli. Nessun altro colore.
- **Do** posare i contenuti su pannelli tinti `bg-panel rounded-md` senza bordo (`p-6 lg:p-10`), e separare righe e celle con linee piene `base-200` da 1 px.
- **Do** tenere i titoli in peso 400 con tracking −0.025em (chiusura −0.03em), interamente `base-900`, sotto un'etichetta sans 14 px `base-500`; l'H1 dell'hero della home (500, −0.03em) è l'unica eccezione e non si replica.
- **Do** scrivere dati e artefatti (slug, versioni, numeri dei passi, esadecimali, codice) nello stesso Geist, a 12 px `base-500`; etichette e intestazioni restano a 14 px. Nessun secondo carattere.
- **Do** mettere la V del marchio davanti alle righe di elenco (`Logo` a `size-3 text-base-900`) e, in filigrana al 7%, dentro i pannelli-palco (`Watermark` in un contenitore `relative overflow-hidden`).
- **Do** usare pillole per tutto ciò che si preme (`Button`, voci nav, SubNav, selettori, `summary`) e una sola pillola accent per gruppo di azioni, con la rassicurazione a 12–14 px sotto; `muted` come secondaria, `ghost` solo nella nav.
- **Do** usare `bg-base-50` solo per il pannello di prodotto dell'hero e per l'hover delle celle (le hero stanno sul colore della pagina) e `bg-base-100` per ciò che è premuto, consigliato o in hover; nient'altro come tinta di superficie.
- **Do** mettere titolo e lede di un pannello alla stessa misura (20, 24 nelle porte) con la gerarchia affidata al colore, salvo nelle griglie a quattro colonne.
- **Do** dare a ogni transizione una durata dal set 150/200/300 ms e lo stato finale con `prefers-reduced-motion`.

### Don't:
- **Don't** introdurre texture, gradienti, immagini decorative o illustrazioni: le uniche immagini sono i loghi dei clienti (grayscale), i ritratti del team (grayscale), i marchi dei motori nell'hero e le copertine dei post dentro il post; le velature restano nelle card di prodotto.
- **Don't** aggiungere ombre a pannelli, card, nav, menu, barra mobile o bottoni: le uniche ombre sono quelle degli oggetti di prodotto (`.vb-window`, `.vb-float`, `.vb-peek-card`).
- **Don't** usare `bg-white`, bordi tratteggiati, cornici, sigle nel margine o punti d'angolo: la grammatica del foglio tecnico è stata ritirata il 2026-10-17.
- **Don't** usare un colore saturo o una parola colorata nel titolo: l'arancio dei riferimenti esterni è stato ritirato; verde e rosso sono stati di sistema.
- **Don't** usare pesi 500–700 sui titoli (salvo l'H1 dell'hero della home), il peso 300 (ritirato il 2026-10-17) o un secondo carattere: `font-serif` e `font-mono` sono alias di Geist e il mono è stato ritirato il 2026-10-17.
- **Don't** mettere testo di lettura sotto i 12 px.
- **Don't** usare glifi da font o icone piene: solo SVG a tratto 1.4–1.6 in `accent-500`/`base-900`.
- **Don't** ricreare targhette: niente etichette maiuscole a 12 px, niente fondo nero sotto un'etichetta, niente due etichette sullo stesso titolo.
- **Don't** usare la V come decorazione libera, colorarla o metterne più di una in filigrana per viewport; i punti restano solo per gli stati.
- **Don't** aggiungere reveal allo scroll, hover-lift, parallax o stagger: una sola animazione per sezione, e solo se mostra il prodotto.
