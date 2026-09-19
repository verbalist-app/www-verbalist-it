# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primario: agenzie web e SEO.** Cercano uno strumento che abbia senso
ribaltare sui propri clienti: un progetto per ogni cliente, costo per
contenuto noto prima di generare, testi nella lingua del mercato del cliente.
Chi valuta è un SEO specialist, un content manager o il titolare. Lo fa da
desktop, in orario di lavoro, con una decisione ponderata (prova di 30
giorni, poi adozione). Il dato viene dal primo outreach commerciale
(settembre 2026) ed è ancora da consolidare.

**Secondario: team marketing e SEO di aziende italiane**, dalla PMI al
corporate, più e-commerce e B2B con mercati esteri. Ogni segmento ha la sua
pagina in `/soluzioni/`.

Entrambi arrivano con un interesse crescente per la visibilità nelle risposte
AI (GEO/AEO) e con diffidenza verso i contenuti generati "a peso".

## Product Purpose

Verbalist è un software italiano che genera contenuti ottimizzati per SEO e
GEO. Legge i primi risultati organici di Google per una keyword (o fino a 5
URL di competitor scelti dall'utente), ne estrae argomenti, struttura e
lacune, e scrive il contenuto ex novo nella lingua del mercato target, pronto
da incollare nel CMS con title tag, meta description, slug e immagini.

Il sito è il sito marketing (`www.verbalist.it`); il prodotto vive su
`app.verbalist.it`. Il successo del sito si misura su due percorsi:

1. home o pagina soluzione → **prova gratis** (30 giorni, 15 documenti);
2. home o contenuti → **/contatti** (lead per demo e piano Custom).

## Positioning

Quattro cose che un concorrente non potrebbe dichiarare con verità:

- **Nasce in un'agenzia SEO.** Costruito dentro NUR, agenzia di digital
  marketing attiva dal 1999, che lo usa sui clienti che segue. I sette case
  study pubblicati sono clienti dell'agenzia.
- **Una catena di quattro agenti**, non un prompt: keyword e contesto →
  analisi competitor → generazione del contenuto → esportazione. Il contesto
  del brand (testo libero più fino a 3 PDF) entra nei prompt di analisi e di
  scrittura.
- **SEO e GEO insieme.** I contenuti sono pensati sia per il ranking sia per
  essere citati nelle risposte dei motori AI.
- **Prezzo per contenuto.** Una tantum, crediti validi 12 mesi, nessun costo
  a token.

## Operating Context

- Sito statico Astro 6 + Tailwind v4, contenuti in Content Collections
  markdown, deploy su Vercel. Nessun CMS.
- Tracking con GTM come hub unico e Consent Mode v2; gli eventi sono pushati
  dal cookie banner. Piano in `docs/tracking-plan.md`.
- Form di contatto HubSpot condiviso tra i prodotti NUR.
- `public/llms.txt` e la versione `.md` dei post servono agenti e LLM: fanno
  parte del prodotto-sito, non sono un accessorio.
- Redirect e header vivono in `vercel.json` (due copie allineate, root e
  `apps/web/`).

## Capabilities and Constraints

Dichiarabile, perché verificato su piattaforma, help center o prezzi:

- Analisi dei primi 5 risultati organici di Google, oppure fino a 5 URL a
  scelta, nel mercato e nella lingua impostati.
- Tipi di contenuto: Blog/Articolo, Pagina Prodotto, Guida/Tutorial, Landing
  Page.
- Ogni generazione produce due versioni complete (A e B), scritte da due
  modelli diversi.
- Testi scritti ex novo nella lingua del mercato, non tradotti.
- Export HTML per il CMS con metadati compilati e immagini con alt text.
- Piani: Starter 270 € per 30 contenuti, Pro 500 € per 70 contenuti, una
  tantum; Custom su richiesta con volume su misura, utenti illimitati,
  account manager e onboarding.
- I contenuti generati restano di proprietà dell'utente.

Non dichiarabile: listino agenzie, white label, sotto-account cliente,
rivendita, integrazioni non rilasciate. I termini vietano di rivendere o
sublicenziare il servizio senza autorizzazione.

Vincoli di lavoro sul sito: non si toccano logica, routing, handler dei form
e tracking durante un lavoro di design; ogni claim va verificato contro la
piattaforma reale; verifica con una build prima di chiudere.

Questioni aperte, da non risolvere inventando: l'help center lega il contesto
del brand al singolo documento, mentre alcune sezioni del sito dicono che
viene riusato dal progetto; i termini parlano di pagamenti ricorrenti, il
listino di prezzi una tantum.

## Brand Commitments

- Nome **Verbalist** e logo (il segno a spunta), marchio registrato di NUR
  HOLDING S.r.l. Asset ufficiali in `/brand`.
- Voce: italiano pratico, sobrio, competente, concreto. Niente
  sensazionalismo né AI-ism; il riferimento di tono sono le release notes del
  changelog. Fatti con la fonte al posto degli aggettivi.
- Emozione da produrre: fiducia ("questi sanno quello che fanno").
- L'identità visiva attuale **non** è un impegno: il redesign del settembre
  2026 la tratta come evidenza e anti-riferimento. Restano logo, contenuti e
  verità di prodotto.

## Evidence on Hand

- Sette case study reali in `src/content/customers/` (Astori Ferramenta,
  Jurny, Meccanotecnica, Plastisac, Pompea, Sogese, Turboden), tutti clienti
  seguiti da NUR.
- Changelog della piattaforma in `src/content/changelog/`, help center in
  `src/content/help/`.
- Mockup di prodotto fedeli in `src/components/features/` (finestre con dati
  verosimili del dominio).
- Loghi clienti per il marquee.
- Assenze da non colmare inventando: testimonianze firmate, benchmark
  numerici comparativi, confronti "Verbalist vs X", numeri di utenti.

## Product Principles

1. **La fiducia prima dell'effetto.** Ogni scelta deve far sembrare il
   prodotto più competente, mai più rumoroso.
2. **Il prodotto è la prova.** Schermate reali, casi studio e numeri
   verificabili al posto di illustrazioni e aggettivi.
3. **Verità di prodotto.** Nessuna feature, limite o numero che non stia già
   sulla piattaforma, nell'help center, nei prezzi o nei case study.
4. **Ogni pubblico trova il suo ingresso.** L'agenzia per prima, poi
   l'azienda: chi arriva deve riconoscere il proprio caso in pochi secondi.
5. **Leggibile anche dalle macchine.** Il sito parla di GEO e deve
   praticarla: struttura, fatti citabili, `llms.txt`, markdown dei post.

## Accessibility & Inclusion

WCAG 2.2 AA: contrasto del testo lungo almeno AA, focus visibili,
`prefers-reduced-motion` sempre rispettato, mai testo di lettura sotto i
12px.
