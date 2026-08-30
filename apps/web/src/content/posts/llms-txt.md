---
title: "llms.txt: a cosa serve e come scriverlo bene"
seoTitle: "llms.txt: cos'è, a cosa serve, come scriverlo"
description: "llms.txt è un file markdown che offre ai modelli AI una mappa curata del sito. Cosa dice lo standard, cosa ne fanno davvero i motori AI e come lo abbiamo scritto per verbalist.it."
seoDescription: "llms.txt è una mappa del sito per i modelli AI. Cosa dice lo standard, chi lo usa davvero e come scriverlo, con un esempio reale."
pubDate: 2026-08-30
team: "filippo-danesi"
image:
  url: "/img/blog/llms-txt.webp"
  alt: "llms.txt: a cosa serve e come scriverlo bene"
tags:
  - "SEO"
tldr:
  - "llms.txt è un file markdown nella root del sito che dà ai modelli AI una mappa curata di contenuti e fatti chiave."
  - "Nessun grande motore AI ha confermato di usarlo per la ricerca: è una scommessa a costo quasi zero, non un fattore di ranking."
  - "Scriverlo bene significa sintesi onesta, link con descrizioni utili e fatti verificabili, non una sitemap travestita."
---

## Cos'è llms.txt

llms.txt è un file di testo in formato markdown, pubblicato nella root del sito (come robots.txt), che offre ai modelli linguistici una versione curata e compatta del sito: cosa fa, quali sono le pagine che contano, quali fatti sono verificati.

La proposta è di Jeremy Howard (Answer.AI), settembre 2024. L'idea di partenza è pratica: le finestre di contesto dei modelli sono limitate e l'HTML è pieno di rumore. Un file markdown che dice l'essenziale, con link alle fonti, è più facile da usare per un sistema AI che deve capire un sito in pochi secondi.

Lo standard prevede una struttura precisa: un titolo H1 col nome del progetto, un blockquote di sintesi, e sezioni di link ciascuno con una breve descrizione.

## La domanda vera: i motori AI lo usano?

Risposta onesta: non c'è nessuna conferma ufficiale. Google, per bocca di John Mueller, ha detto nel 2025 che nessun sistema AI di Google usa llms.txt, arrivando a paragonarlo al vecchio meta tag keywords. OpenAI, Anthropic e Perplexity non l'hanno adottato come standard dichiarato per la ricerca.

Quindi perché occuparsene? Per tre ragioni concrete:

- I crawler lo scaricano comunque. Nei log dei server il file viene richiesto da bot AI e da strumenti di sviluppo. Che lo usino per rispondere è un altro discorso, ma la lettura avviene.
- Gli agenti AI sono il pubblico che cresce. Assistenti che navigano per conto dell'utente, strumenti di coding, sistemi RAG aziendali: per chi consuma il web via software, un file pulito con i fatti chiave è oro. Molte aziende tech (Anthropic e Vercel tra le prime) pubblicano llms.txt per la documentazione.
- Il costo è vicino allo zero. Un file markdown, mezza giornata di lavoro la prima volta, aggiornamenti quando cambia qualcosa di sostanziale.

È una scommessa asimmetrica: se lo standard decolla sei arrivato prima, se non decolla hai perso mezza giornata. Da non confondere con la [GEO](/blog/cos-e-la-geo/ "Cos'è la GEO") vera e propria: il modo provato per essere citati resta la qualità e la struttura dei contenuti, llms.txt è un complemento.

## Come lo abbiamo scritto per verbalist.it

Su verbalist.it il file è in produzione, e la struttura è questa:

1. La sintesi in un paragrafo. Cosa fa il prodotto, per chi, come. È il blockquote che un modello può citare per intero: la frase che vorresti veder comparire quando qualcuno chiede "cos'è Verbalist".
2. Le sezioni di link con descrizioni vere. Prodotto, guide, azienda. Ogni link ha una riga che dice cosa c'è dietro, scritta per chi non vedrà mai la pagina: "brief con keyword, mercato, lingua e contesto del brand", non "scopri di più".
3. Una sezione di fatti chiave. Prezzo per contenuto e non per token, durata della prova, come funziona la generazione. Fatti secchi e verificabili, il formato che i modelli riprendono con meno rischio di allucinazione.
4. Le stime di token per voce. Le aggiungiamo in automatico in fase di build: aiutano un sistema AI a decidere cosa caricare nel contesto. È un dettaglio fuori standard, ma è il tipo di cortesia tecnica che costa poco.

## Come scriverlo: le regole che contano

- Markdown pulito, niente HTML. Il file è per le macchine: H1, blockquote, H2 di sezione, liste di link `[titolo](url): descrizione`.
- Sintesi prima di tutto. Se il modello legge solo le prime dieci righe, deve avere già capito il sito. Vale la stessa regola dei contenuti [GEO-ready](/blog/geo-ottimizzazione-ai/ "Come ottimizzare i contenuti per la ricerca generativa"): la risposta in apertura.
- Cura le descrizioni come fossero meta description. Ogni riga deve essere utile da sola, fuori contesto.
- Fatti, non marketing. "La prova gratuita dura 30 giorni e include 15 documenti" è un fatto citabile. "La soluzione leader per i tuoi contenuti" è rumore che nessun modello riprenderà.
- Aggiornalo quando cambia il prodotto. Un llms.txt con prezzi o funzioni vecchie è peggio di nessun file: dà ai modelli materiale sbagliato con l'etichetta di fonte affidabile.

Un errore comune è generarlo in automatico elencando tutte le URL della sitemap. Così diventa una sitemap più povera. Il valore del file è la selezione: dieci link curati battono trecento link nudi.

## Conclusione

llms.txt non ti farà comparire nelle risposte AI da solo, e chi lo vende come fattore di ranking sta esagerando. È un tassello piccolo e onesto di una strategia più ampia: rendere il sito leggibile per le macchine che sempre più spesso lo leggono al posto degli utenti. Il grosso di quella strategia resta [come strutturare i contenuti](/blog/come-farsi-citare-motori-ai/ "Come farsi citare dai motori AI") perché valga la pena citarli. Se vuoi vedere come Verbalist costruisce contenuti pensati per questo, la prova è gratuita per 30 giorni.
