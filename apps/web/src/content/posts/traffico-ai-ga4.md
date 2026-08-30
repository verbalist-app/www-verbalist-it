---
title: "Traffico da ChatGPT e AI in GA4: come misurarlo"
seoTitle: "Misurare il traffico da ChatGPT e AI in GA4"
description: "Il traffico che arriva da ChatGPT, Perplexity e Copilot finisce nei referral di GA4, mescolato a tutto il resto. Come isolarlo con un gruppo di canali dedicato, cosa si può misurare e cosa no."
seoDescription: "Come isolare in GA4 il traffico da ChatGPT, Perplexity, Copilot e Gemini: referral da cercare, canale personalizzato e limiti reali."
pubDate: 2026-08-30
team: "filippo-danesi"
image:
  url: "/img/blog/traffico-ai-ga4.webp"
  alt: "Traffico da ChatGPT e AI in GA4: come misurarlo"
tags:
  - "Guide"
tldr:
  - "Il traffico dai motori AI arriva in GA4 come referral: chatgpt.com, perplexity.ai, copilot.microsoft.com, gemini.google.com."
  - "Un gruppo di canali personalizzato con una regex su queste sorgenti lo rende visibile in tutti i report."
  - "Le AI Overview non si possono isolare: quel traffico resta dentro l'organico Google, senza referrer dedicato."
---

## Da dove arriva il traffico AI

Quando un utente clicca una fonte citata in ChatGPT, Perplexity o Copilot, la visita arriva sul tuo sito con un referrer riconoscibile. In GA4 lo trovi nella dimensione "Sorgente sessione", sotto valori come questi:

- chatgpt.com (e il vecchio chat.openai.com)
- perplexity.ai
- copilot.microsoft.com
- gemini.google.com
- claude.ai

Il problema è che GA4, di default, classifica tutto questo come generico "Referral", in mezzo a directory, forum e siti partner. Il traffico AI esiste già nei tuoi dati: è solo mescolato al resto.

## La verifica in cinque minuti

Prima di costruire qualsiasi cosa, guarda se e quanto traffico AI hai già:

1. Apri Esplorazioni e crea un'esplorazione in formato libero.
2. Dimensione: Sorgente sessione. Metriche: Sessioni, Utenti attivi, Sessioni con coinvolgimento.
3. Applica un filtro sulla dimensione: Sorgente sessione, corrisponde a regex, con questo pattern: `chatgpt\.com|openai\.com|perplexity\.(ai|com)|copilot\.microsoft\.com|gemini\.google\.com|claude\.ai`
4. Allarga l'intervallo agli ultimi 12 mesi e guarda la serie storica.

Per la maggior parte dei siti italiani i numeri assoluti saranno piccoli: decine o centinaia di sessioni al mese, non migliaia. È normale, ed è il motivo per cui vale la pena tracciarli adesso: la curva conta più del valore, e la direzione è una sola. Un'analisi di Profound su 7,5 milioni di conversazioni ha misurato che le conversazioni commerciali in ChatGPT (valutazioni di prodotti, confronti, acquisti) sono più che raddoppiate in un anno.

## Il canale dedicato: una volta, per sempre

L'esplorazione va bene per guardare, ma la soluzione pulita è un gruppo di canali personalizzato, così il traffico AI compare come canale a sé in tutti i report standard.

In Amministrazione → Impostazioni dati → Gruppi di canali, crea (o modifica una copia del gruppo predefinito) e aggiungi un canale "AI" con la condizione: Sorgente corrisponde alla regex vista sopra. Trascinalo in cima alla lista: i gruppi di canali valutano le regole in ordine, e il canale AI deve catturare quelle sorgenti prima che le prenda la regola generica dei referral.

Da quel momento puoi rispondere con un click alle domande che contano: quante sessioni porta l'AI, su quali pagine atterrano, come convertono rispetto all'organico. Sulle pagine di atterraggio un pattern ricorrente: il traffico AI arriva quasi tutto su contenuti informativi, gli stessi che vengono citati nelle risposte. È il segnale che la [strategia di citazione](/blog/come-farsi-citare-motori-ai/ "Come farsi citare dai motori AI") sta funzionando.

## Cosa non puoi misurare (ed è importante saperlo)

Tre limiti strutturali, da mettere in conto prima di presentare i numeri a qualcuno:

- Le AI Overview non hanno un referrer dedicato. Chi clicca una fonte dal riquadro AI di Google arriva come normale traffico google / organic. Il canale "AI" di GA4 misura i motori conversazionali, non le [AI Overview](/blog/ai-overview-google/ "AI Overview di Google: quando compaiono e come entrarci"): per quelle servono Search Console e il monitoraggio delle query.
- Una parte del traffico AI arriva senza referrer. Click dalle app native o link copiati a mano finiscono in Direct. I numeri del canale AI sono una stima per difetto.
- Le citazioni senza click non lasciano traccia. Se ChatGPT cita il tuo brand e l'utente non clicca, GA4 non vede nulla. La visibilità nelle risposte si misura a monte, interrogando i motori sulle proprie query, non a valle nell'analytics.

## Oltre il conteggio: cosa guardare davvero

Il numero di sessioni è la metrica meno interessante. Più utili:

- Coinvolgimento e conversioni del canale AI contro l'organico: chi arriva da una risposta AI ha già ricevuto contesto, spesso è più avanti nel percorso.
- Le pagine citate: dicono quali dei tuoi contenuti i motori considerano fonti. È la lista da proteggere e aggiornare per prima nel [content refresh](/blog/content-refresh/ "Content refresh: quando e come aggiornare i contenuti").
- Le query dove non compari: il censimento manuale su ChatGPT e Perplexity delle tue venti query principali resta il complemento necessario ai dati di GA4.

## Conclusione

Misurare il traffico AI in GA4 è un lavoro da un pomeriggio: una regex, un canale, un'esplorazione salvata. Il valore non è nel numero di oggi ma nella serie storica che inizi a costruire, perché tra un anno la domanda "quanto ci porta l'AI?" arriverà in ogni riunione marketing, e la risposta buona richiede dati raccolti da mesi. Il passo successivo è aumentare quel numero: contenuti strutturati per essere citati. È il lavoro per cui è nato Verbalist, e puoi provarlo gratis per 30 giorni.
