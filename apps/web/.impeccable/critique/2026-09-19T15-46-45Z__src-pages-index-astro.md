---
target: homepage
total_score: 22
max_score: 36
na_heuristics: 7
p0_count: 0
p1_count: 4
target_identity: "file:/Users/filippo/www-verbalist-it/apps/web/src/pages/index.astro"
target_fingerprint: "sha256:2acd0cdcd7a439697ff071b96bf60c64c6dba9e799e647f6f77c89527e3c92e8"
target_path: /Users/filippo/www-verbalist-it/apps/web/src/pages/index.astro
timestamp: 2026-09-19T15-46-45Z
slug: src-pages-index-astro
---
Method: dual-agent (A: design review isolata · B: detector + browser isolato)

# Critique — homepage (src/pages/index.astro) — 2026-09-19

Contesto: redesign completo deciso dal maintainer; l'identità attuale è evidenza e anti-riferimento. Restano logo, contenuti, verità di prodotto.

## Design Health Score — 22/36 (61%, Accettabile). n/a: euristica 7

| # | Euristica | Voto | Problema chiave |
|---|---|---|---|
| 1 | Visibilità dello stato | 2 | Ancore nav senza stato attivo; badge uptime verde anche se il fetch fallisce |
| 2 | Corrispondenza col mondo reale | 3 | "GEO" mai sciolto nell'hero; "Come funziona" → #funzionalita, non la catena; ordine nav inverso alla pagina |
| 3 | Controllo e libertà | 3 | Demo hero e marquee in loop senza pausa; ⌘K porta a /blog/#cerca |
| 4 | Coerenza e standard | 3 | Etichette incoerenti (Prova gratis / Prova gratis 30 giorni; Contattaci / Parla con noi; contenuti/documenti/articolo) |
| 5 | Prevenzione errori | 3 | Bottoni Starter e Pro con lo stesso URL |
| 6 | Riconoscere, non ricordare | 2 | /contatti assente dalla nav desktop; "Scopri l'agente 03"; hamburger senza nome |
| 7 | Flessibilità ed efficienza | n/a | Superficie Persuade |
| 8 | Estetica e minimalismo | 2 | Nessuna gerarchia: H1 40 vs H2 30, una testata ripetuta 5 volte, tratteggio ovunque, SERP detta 4 volte, stesso esempio 6 volte |
| 9 | Recupero dagli errori | 2 | Falso verde uptime; HeroAppMockup client:only senza fallback |
| 10 | Aiuto e documentazione | 2 | Nessuna FAQ in home; help solo nel footer; domande d'acquisto senza risposta |

## Verdetto di specificità: intercambiabile con la categoria
Scheletro da template (Hero1, Feature1-3, Cta2, Pricing1, Testimonial1, LogoCloud1), sequenza SaaS di default, immagini floreali estranee al prodotto. D'autore: demo dell'hero, articolo annotato (Feature1), copy delle porte (AudienceDoors). Carattere mancato: SERP come materiale visivo, due versioni/due modelli mai mostrati, prezzo per contenuto (9 € / 7,14 €) mai calcolato, NUR dal 1999 come punto elenco al 67% dello scroll, 1 caso su 7.

Detector: CLI 1 finding (overused-font, Fonts.astro:5). Browser: 19 elementi a 1440, 18 a 375, quasi tutti in HeroMockup (nested-cards, testo 9–11px, all-caps, bordo sottile + ombra 48–60px, URL troncato a 375). Mockup non aria-hidden: il suo h2 entra nell'outline. Falsi positivi: nested-cards su brief-prodotto.pdf, clipped-overflow/troncatura, layout-transition della pill nav. Colto dal detector e non dalla review: menu mobile chiuso con link focusabili (opacity-0), #menu-toggle senza nome né aria-expanded, 41 target < 44×44 a 375 (logo 20×24, link footer h18, pill CTA h36), 6 fallimenti di contrasto nel mockup (#9ca8ab, 2,2–2,4:1), secondario #67787c a 4,61:1 (AA per 0,11). Nessun overflow orizzontale, nessun errore console. Nessun overlay visibile (headless).

## Cosa funziona
1. Demo dell'hero: prodotto come prova, con ramo reduced-motion.
2. Articolo annotato (Feature1): forma che nasce dal contenuto.
3. Disciplina del copy e verità di prodotto; basi a11y (skip link, reduced motion, semantica).

## Problemi prioritari
1. [P1] Pubblico primario (agenzie) invisibile fino a y≈4620. Fix: agenzia + NUR nell'hero o subito sotto, demo per cliente, split pubblici in posizione 2, prezzo per contenuto. → shape, clarify
2. [P1] Identità intercambiabile. Fix: linguaggio visivo dal materiale del prodotto (SERP, annotazione, A/B, densità di prove, changelog), un picco tipografico, via le immagini decorative. → shape, bolder
3. [P1] Prova sottile: citazione non firmata + ritratto generato senza volto, 1 caso su 7, 8 loghi per 7 casi, nessun output completo. Fix: sezione prove con i sette casi, output reale A/B, NUR dal 1999 come blocco. → layout
4. [P2] Gerarchia piatta e ridondanza: catena 1.865px, griglia a 8 che la ripete, 14,5 schermi su mobile. Fix: fondere catena e capacità, scala tipografica vera. → distill, typeset
5. [P1] Conversione poco sostenuta + a11y del menu mobile: nessun microcopy sotto Prova gratis, /contatti fuori dalla nav, CTA dietro l'hamburger, toggle senza nome, link del menu chiuso focusabili, pill h36, finale debole. → clarify, audit/adapt

## Persona
- Jordan: GEO/SERP/entità/slug non spiegati; "Come funziona" → 8 blurb; login su altro dominio senza preavviso.
- Riley: competitor diversi tra demo hero e mock Agente 02; "primi cinque" ma i mock ne mostrano tre; "30+ lingue" vs dropdown a 5; cella "La tua voce di brand" tocca la questione aperta sul contesto per documento; overlay di Testimonial1 blocca la selezione.
- Casey: 11.810px; nav solo logo + hamburger; demo tagliata a destra; ritratto da 320px senza informazione; catena dei piani obbliga a tornare su.
- Giulia (SEO lead d'agenzia): nulla dice "agenzia" nel primo viewport; prezzo per contenuto da calcolare a mano; "Su richiesta" opaco; utenti dichiarati solo su Custom; i sette casi mai inquadrati come lavoro d'agenzia di NUR. Vincolo: white label, sotto-account, rivendita non dichiarabili.

## Minori
--font-serif mappato su un sans; accent-600→950 identici; il monocromo "caldo" è freddo (hue 213–228); font-display inesistente nel footer; classe spuria `just` in Hero1; "white-glove" fuori voce; badge Consigliato 11px; loop senza pausa (WCAG 2.2.2); 23 SVG su 37 senza aria-hidden; host esterni fonts.googleapis.com, cdn.jsdelivr.net, uptime.verbalist.it.

## Domande
1. Tolti logo e copy, cosa possiede Verbalist visivamente?
2. Perché la home è per tutti se il compratore è l'agenzia?
3. Il "quieto" produce fiducia, o la produce la densità di prove?
4. Perché cinque frammenti e mai un pezzo completo A/B?
5. Perché 25 anni di agenzia e sette clienti veri non sono la spina dorsale?
