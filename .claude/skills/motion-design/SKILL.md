---
name: motion-design
description: Linguaggio di movimento di www.verbalist.it. Usalo prima di aggiungere o cambiare un'animazione sul sito (Astro + Tailwind v4, libreria Motion): principi, token, lo schema della catena, regole di accessibilità e prestazioni, cosa evitare, come verificare.
---

# Motion design di Verbalist

Il sito è un foglio tecnico monocromo: il movimento serve a mostrare il
meccanismo del prodotto, mai a decorare. Riferimento del risultato approvato:
la catena "Un documento, quattro passaggi" in home (`src/components/home/Chain.astro`).

## Principi

1. **Una sola animazione per sezione**, e solo dove mostra il prodotto. Il
   resto sono transizioni di colore (200–300 ms).
2. **Lo stato statico è il riferimento.** La pagina senza JS, con
   `prefers-reduced-motion` o fuori schermo deve essere completa e sensata.
   Il testo sta nell'HTML; gli stati iniziali nascosti li imposta il JS.
3. **Il movimento è un cambio di stato, non una recita.** Si accende, si
   completa, passa il turno. Niente cursori che cliccano, digitazione,
   spinner, chip che spuntano: provati e scartati il 2026-10-10 ("troppo
   teatrale, troppo lunga e carica, stacca dal sito").
4. **Monocromo.** L'unico colore in movimento è la spunta `text-status-success`.
   La linea e lo stato attivo sono nero (`base-900`) e grigio foglio (`base-50`).
5. **Meno è meglio.** Un ciclo breve (≈10 s), una cosa alla volta, pausa sempre
   disponibile.

## Token

- CSS: `apps/web/src/styles/motion.css` (importato da `global.css`).
  Durate `--m-micro` 150 ms, `--m-base` 320 ms, `--m-wide` 600 ms, uscita
  = durata × 0.7; curve `--m-ease-in` (decelera), `--m-ease-move`
  (simmetrica), `--m-ease-out` (accelera); distanze `--m-rise` 10 px,
  `--m-pop-scale` .96.
- JS: `apps/web/src/lib/motion.ts` esporta gli stessi valori (`D`, `E`,
  `exit()`, `SNAP`, `STAGGER`, `RISE`, `POP`, `READ`) e `reduced()`.
  Cambia qui durate e curve, non nei componenti.
- Libreria: `motion` v12, funzione `animate` vanilla, sequenze come array
  `[el, keyframes, { duration, ease, at }]` con `repeat: Infinity`;
  controlli `pause()`, `play()`, `time`, `cancel()`.

## Lo schema della catena (approvato)

Per ogni cella, in ordine: **si attiva** (fondo `base-50` e la linea
d'inchiostro di 1 px sul bordo alto avanza fino alla cella, `clip-path`)
→ **tiene** circa 1,2 s → **spunta** (`✓` verde accanto al numero, 150 ms)
→ **consegna** (la cella si spegne mentre la linea prosegue alla
successiva). Alla fine le quattro spunte restano 2 s, poi tutto torna
allo stato iniziale. Le finestre dell'app nelle celle restano ferme.

Esecuzione: solo da `lg` (desktop); parte quando la sezione è visibile al
40% (`IntersectionObserver`), si ferma fuori schermo e con tab nascosta
(`visibilitychange`); bottone **Ferma/Riprendi** con `aria-pressed`,
etichetta e icona aggiornate, focus visibile. Sotto `lg` e con
`prefers-reduced-motion`: stato statico (`is-on` sulla seconda cella,
`is-past` sulla prima).

## Accessibilità

- `prefers-reduced-motion: reduce` → nessun loop, stato finale visibile.
- Pausa raggiungibile da tastiera, con `aria-pressed` e testo che cambia.
- Gli elementi decorativi hanno `aria-hidden="true"`; le illustrazioni di
  prodotto portano `data-nosnippet`.
- Nessun contenuto solo nel movimento: ciò che l'animazione mostra è già
  scritto nella pagina.

## Prestazioni

- Anima solo `transform`, `opacity` e `clip-path` (`grid-template-rows`
  solo per aprire un pannello). Mai layout, colori di testo lunghi o filtri.
- Nessun layout shift: gli stati iniziali non cambiano le dimensioni
  (`opacity: 0`, non `display: none`).
- Una sola sequenza per sezione, cancellata e ricostruita al cambio di
  breakpoint (`matchMedia("(min-width: 1024px)")`).
- Nessuna dipendenza nuova: `motion` è già nel bundle.

## Da evitare

Reveal allo scroll, stagger di sezione, hover-lift, parallax, 3D, glow,
rimbalzi elastici, contatori che salgono, testo che compare parola per
parola, cursori e digitazione fuori dall'hero, animazioni sulle finestre
dell'app dentro le celle, più di un'animazione per sezione.

## Verifica prima di chiudere

1. `pnpm --filter @verbalist/web build`, poi anteprima su `dist`.
2. Larghezze 375, 768, 1280, 1440: nessuno scorrimento orizzontale,
   nessun errore in console, CLS 0.
3. Tre cicli completi: il ciclo riparte pulito.
4. Pausa da tastiera, scroll fuori e dentro, `prefers-reduced-motion`.
5. 60 fps e nessun long task durante il ciclo (rAF in Playwright o pannello
   Performance). Script di prova nello scratchpad della sessione, non nel repo.
6. Aggiorna `apps/web/DESIGN.md` › Motion se cambia il linguaggio.
