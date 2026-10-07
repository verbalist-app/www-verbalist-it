---
version: 1
slug: "apps-web-src-pages-index-astro"
primary_target: "apps/web/src/pages/index.astro"
related_targets: ["apps/web/src/components/global/Navigation.astro","apps/web/src/components/global/Footer.astro"]
---

# Homepage — surface brief

Scope: `apps/web/src/pages/index.astro` più navigazione, footer, token e bottoni condivisi. Mode: Persuade.
Brief di contenuto: `.redesign/home-brief.md` (sequenza, prove, decisioni del maintainer). Il mondo visivo "Bacino di inchiostro" è stato scartato dal maintainer il 2026-09-21 dopo la prima build ("mi fa veramente schifo"); riferimento scelto: https://try.cloudflare.com/, con il suo schema colori.

## Direction contract

THESIS: la home è un foglio tecnico: cornice con sigle di sezione, pannelli che mostrano la catena al lavoro, un solo accento che guida l'occhio su azione e parole chiave. Rifiuta ogni texture o effetto: la fiducia viene dalla precisione.

OWN-WORLD: bianco e `base-50`, testo `#292929`-ish (`base-900`), secondario `base-600`, linee tratteggiate `base-200`, accento arancio `--vb-accent-*` (500 per bottoni e superfici, 600 per testo piccolo). Geist regolare per i display (52px/36px, tracking −0.025em, una parola grigia e una nell'accento), Geist light per il corpo, Geist Mono uppercase per targhette e etichette. Pillole per CTA e nav, pannelli `rounded-xl`, due punti d'angolo nell'accento su ogni sezione.

STORY: capisce che Verbalist legge Google e scrive; riconosce il proprio ingresso; vede la catena come schema e un output A/B intero; trova le prove d'agenzia e i prezzi; prova gratis o scrive.

FIRST VIEWPORT: 1440: sinistra titolo 60px "Prima legge Google. Poi scrive.", lede, pillola arancio "Prova gratis" + pillola bianca "Parla con noi", rassicurazione; destra quattro pannelli impilati (brief, analisi, scrittura A/B, export) con etichette mono. 375: stessa sequenza in colonna, pannelli sotto le azioni.

SIGNATURE / MOTION: nessuna simulazione. Hover di colore su pannelli e righe, plus che ruota sulle FAQ, scroll-snap con selettore per le due versioni su mobile.

FORM: canon della categoria (lo standard SaaS tecnico) eseguito con la cura del riferimento; scelta esplicita del maintainer, non del tiro. Seed originario `7ef77879`, superato.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
