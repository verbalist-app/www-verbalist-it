---
target: homepage
total_score: 23
max_score: 32
na_heuristics: 5,9
p0_count: 0
p1_count: 4
target_identity: "file:/Users/filippo/www-verbalist-it/apps/web/src/pages/index.astro"
target_fingerprint: "sha256:15f6a76c32bf917c8a2af7886b429c37d21f8cb9cf4a169dc399408cb4822fcb"
target_path: /Users/filippo/www-verbalist-it/apps/web/src/pages/index.astro
timestamp: 2026-09-25T07-52-36Z
slug: src-pages-index-astro
---
Method: dual-agent (A: design review isolata · B: detector CLI + browser Playwright + overlay live, isolati). Target: homepage (src/pages/index.astro), build del 2026-09-25 (grammatica "foglio tecnico", accento arancio).

# Critique — homepage — 2026-09-25

## Design Health Score — 23/32 (72%, Good). n/a: euristiche 5 e 9 (nessun form in pagina)

| # | Euristica | Voto | Evidenza |
|---|---|---|---|
| 1 | Stato del sistema | 3 | aria-current, FAQ con icona ruotata, uptime; le ancore Agenti/Prezzi non si accendono in home |
| 2 | Linguaggio dell'utente | 3 | Italiano pratico, GEO spiegato; "featured snippet", "People Also Ask", "slug" senza appiglio per il pubblico secondario |
| 3 | Controllo e libertà | 3 | Menu con Esc, details nativi, carosello A/B con tabindex e snap |
| 4 | Coerenza | 3 | Eyebrow dell'hero diverso dalle targhette; Doors e Beyond senza tag/H2 visibile; due numerazioni (01 · / Sec 0.1) |
| 5 | Prevenzione errori | n/a | — |
| 6 | Riconoscimento | 3 | Versione B fuori viewport su mobile, suggerita solo dal selettore |
| 7 | Flessibilità | 2 | Un solo percorso; Help center assente dalla nav desktop |
| 8 | Estetica e minimalismo | 3 | 9.024 px desktop / 14.422 mobile; ~1.000 parole di demo; ogni H2 a 52 px |
| 9 | Recupero errori | n/a | — |
| 10 | Aiuto | 3 | FAQ + help center, non contestuale |

## Verdetto di specificità: la cornice è di Cloudflare, il corpo è di Verbalist
Guscio (tratteggio, Sec 0.x, puntini, targhetta mono, Geist, arancio) preso alla lettera: un devtool qualsiasi potrebbe usarlo. Ciò che nessuno potrebbe copiare: l'esempio "scarpe da running" che attraversa hero → catena → due versioni → anatomia GEO, e il registro dei sette clienti.

Detector CLI: 0 finding sul perimetro home. Overlay in pagina: 71 finding, di cui verificati: **low-contrast 37** (bianco su #f6590c 3,31:1 sui bottoni ×5; etichette mono base-400 #a1a1a1 su bianco 2,58:1 ×32: label dei pannelli hero, dt di Prints, crediti di Proofs, "Materiale dimostrativo"; parole grigie nei titoli 2,58:1 a 52 px; "€" 24 px), nested-cards 7 (pannelli hero e dl in Prints), cramped-padding 4, all-caps-body 3 (etichette mono: regola di brand). Falsi positivi: text-occlusion 11 e dark-glow 1 (DOM dell'overlay), line-length su FAQ chiuse. Browser: 0 errori console, 0 overflow, focus visibile 15/15 su entrambi i viewport, un h1, outline h2/h3 senza salti, 8 img con alt, 0 controlli senza nome, toggle menu con aria-expanded corretto, font self-hosted (0 richieste a Google Fonts). Target < 44 px a 375: link inline dei clienti (h 23), link footer (h 36), "Prova gratis" in barra (h 36), bottoni h 40. Segnalato da B e non da A: contrasto delle etichette mono e delle parole grigie nei titoli.

## Cosa funziona
1. Un solo esempio che attraversa la pagina: il "prodotto come prova" fatto davvero.
2. Disciplina di verità: claim tracciabili, demo etichettato, rassicurazione identica sotto ogni CTA, prezzi da fonte unica.
3. Il dispositivo dei titoli (nero / grigio / arancio) è un sistema ripetibile che dà ritmo senza illustrazioni.

## Carico cognitivo: moderato (3 fallimenti)
Chunking (FAQ 7, clienti 7, Custom 5 feature); nav a 8 target e Doors con 5 pubblici al secondo scroll; Prints senza progressive disclosure. Punti di decisione >4: nav (8), Doors (5), clienti (7), FAQ (7).

## Percorso emotivo
Picco: hero e articolo annotato. Valle 1: Prints finisce su "non generati dalla piattaforma" (peak-end negativo). Valle 2: registro clienti piatto, il fatto meno enfatizzato dei crediti. Manca l'avviso che "Prova gratis" porta su app.verbalist.it e cosa succede dopo "Parla con noi".

## Problemi prioritari
1. [P1] Prints: il disclaimer arriva dopo la lettura. Fix: articoli generati dalla piattaforma; nel frattempo etichetta nell'header di ogni foglio e testo intero dietro un details. → clarify, distill
2. [P1] Contrasto delle etichette mono (base-400 2,58:1) e delle parole grigie nei titoli: sotto AA in 32+ punti. Fix: base-500 per le etichette e per la parola grigia. → polish
3. [P1] Hero senza soggetto né pubblico: "software", "agenzie", "AI" non compaiono sopra la piega. Fix: eyebrow "Software per contenuti SEO e GEO · agenzie e team marketing", corpo a due righe. → clarify
4. [P1] Il chrome non è di Verbalist: accento e cornice letterali dal riferimento. Fix: un elemento proprio (segno di spunta del logo come motivo, o tinta dell'accento spostata) → colorize/live, decisione del maintainer
5. [P2] CTA fuori dalla thumb zone e nav a 8 target su desktop. Fix: barra sticky in basso su mobile, Agenti → /agenti/. → adapt
6. [P2] Registro clienti piatto. Fix: 4 casi con numero in evidenza, link "tutti i casi", via Sede. → layout

## Persona
- Giulia (agenzia): punti della porta generici; 500 €/70 = 7 € a contenuto lo calcola da sola; "utenti illimitati" solo in Custom implica un limite mai dichiarato; NUR come concorrente non affrontato.
- Riley (in-house scettico): i due modelli mai nominati in home; demo non generato; nessuna schermata reale; claim GEO assertivi senza fonte in Anatomy.
- Casey (mobile, di fretta): 14.422 px; keyword dell'hero troncata; Versione B solo con swipe; 7 FAQ chiuse; font-light 14 px su base-600.

## Minori
Due numerazioni di sezione; Sec 0.10 legge come 0.1; Doors/Beyond senza targhetta; verde emerald come secondo accento (check hero, bullet Chain, uptime); font-light quasi ovunque; citazione Zambello assente dal case study Jurny; freccia di Doors senza affordance touch; "30+ lingue" non risale all'help center; tag accent-600 su accent-50 a 4,47:1 (badge agente 02).

## Domande
1. Tolti tratteggio, arancio e Sec 0.x, cosa resta di Verbalist? Se è l'esempio delle scarpe, perché non farne il sistema?
2. La piattaforma esiste: perché la home mostra 1.000 parole scritte a mano?
3. La porta "agenzie" porta davvero a qualcosa, o è un corridoio verso "Parla con noi" mai annunciato?
