# Brief di design — homepage (`apps/web/src/pages/index.astro`)

Uscita di `/impeccable shape`, 2026-09-19. Da confermare prima di ogni codice.
Non è ancora un direction contract: quello si scrive all'avvio della build.
Seed del tiro: `7ef77879` (scope direction, mode persuade). Mondo scelto dal
maintainer: **Bacino di inchiostro** (`medium-native-fluid-ink-basin`), adottato
contro il verdetto "declined". Percorso: code-led (nessuna generazione di
immagini disponibile). Riferimenti di finitura in
`apps/web/.impeccable/decision/`.

## 1. Lavoro e pubblico

Superficie Persuade. Arriva un SEO lead d'agenzia (primario) o un responsabile
marketing/SEO d'azienda (secondario), da desktop, in orario di lavoro, dopo
aver già visto molti AI writer. Deve capire in pochi secondi cos'è, riconoscere
il proprio caso e scegliere un ingresso. Il primo gesto della pagina è il
**doppio ingresso Agenzie / Aziende**.

## 2. Esito e prova

Azioni: **Prova gratis** (30 giorni, 15 documenti) e **/contatti**. Prove vere
disponibili: NUR agenzia dal 1999, sette case study di clienti seguiti da NUR,
il flusso reale a quattro agenti, le due versioni A/B scritte da due modelli,
prezzi pubblici, changelog, help center. Verità che solo questo prodotto può
dichiarare: legge ciò che è già in classifica e scrive ex novo; nasce dentro
un'agenzia.

## 3. Direzione scelta

**L'inchiostro è il meccanismo, non lo sfondo.** Il suminagashi ha tre gesti
che coincidono con il prodotto, ed è questo a rendere legittima la direzione:

- **le gocce**: i primi cinque risultati di Google cadono nel bacino, una
  goccia per risultato;
- **le correnti**: gli argomenti che i competitor coprono si allargano e si
  intrecciano; dove l'inchiostro non arriva restano le **lacune**, visibili
  come acqua bianca;
- **la stampa**: si posa il foglio sull'acqua e si solleva il contenuto. Due
  fogli dallo stesso bacino sono le **versioni A e B**.

Due inchiostri, indaco e nero sumi, sono i due pubblici: scegliere l'ingresso
fa cadere quell'inchiostro e tinge la corrente del resto della pagina (il
parametro `audience` esiste già nel tracking). "La goccia più recente è la più
scura" regge la gerarchia: l'ultima release, l'ultimo caso.

Sequenza, tutta ripensata:

1. **Bacino e doppio ingresso.** Primo viewport: titolo e ingressi fermi sul
   margine sinistro, bacino vivo a destra che esegue la lettura di una keyword.
2. **La lettura.** Catena e capacità fuse in un solo artefatto: i quattro
   agenti con i loro nomi veri, come quattro stati dello stesso bacino. Restano
   a parte solo le capacità che la catena non copre (30+ lingue, ottimizzazione
   dell'esistente, due modelli).
3. **Le due stampe.** Un output reale completo, A e B affiancati.
4. **Anatomia GEO.** L'articolo annotato, ridisegnato.
5. **Prove.** NUR dal 1999 come blocco a sé; i sette casi, ciascuno con riga di
   crediti: cliente, settore, mercato, lingua, data.
6. **Prezzi.** Con rassicurazione sotto ogni CTA di prova.
7. **Domande.** FAQ breve tratta dall'help center.
8. **Acqua ferma.** Il bacino si quieta, resta una sola azione.

Momento focale: la stampa, il foglio che si solleva con l'articolo. Conseguenza
di implementazione: un solver fluido in WebGL scritto per davvero.

## 4. Perimetro

Home completa, pronta per la produzione, a 375 / 768 / 1440. Navigazione e
footer sono condivisi: cambiano con la home e le altre pagine li ereditano sul
branch `redesign` finché non vengono rifatte. Non si toccano: logica, routing,
handler dei form, eventi di tracking e loro parametri, `vercel.json`,
`middleware.ts`, contenuti markdown, `llms.txt`.

Anti-obiettivi: inchiostro come carta da parati dietro al testo; tema scuro;
immagini floreali o decorative; pillole, cornice tratteggiata, etichette mono
spaziate come firma (è l'identità da superare); claim nuovi; ironia o
sensazionalismo.

## 5. Stati e intervalli

- Bacino: fermo (poster statico), in lettura, in stampa, quieto;
  `prefers-reduced-motion` e assenza di WebGL mostrano la stampa finita, mai un
  buco.
- Ingresso: nessuno scelto, Agenzie, Aziende; la scelta persiste nella sessione.
- Casi: sette oggi, il layout regge da 5 a 12. FAQ: 5–8 domande. Piani: tre.
- Titoli italiani lunghi: fino a 60 caratteri senza rompere la composizione.

## 6. Interazione e layout

Il testo sta sempre su un margine fermo, fuori dall'acqua: nessuna riga di
lettura sopra l'inchiostro in movimento. Una sola tecnica, orchestrata una
volta: il bacino risponde al puntatore e allo scroll; niente effetti sparsi.
Gerarchia con un vero picco tipografico nel primo viewport. Su mobile il bacino
diventa una fascia sopra il titolo, CTA di prova sempre raggiungibile, target
da 44px, menu chiuso non focusabile, toggle con nome e `aria-expanded`. Loop con
pausa (WCAG 2.2.2). "Contatti" entra in navigazione.

## 7. Vincoli e decisioni aperte

Vincoli: WCAG 2.2 AA; Core Web Vitals non peggiori di oggi (poster statico come
LCP, simulazione avviata dopo il primo paint, in pausa fuori viewport, DPR e
griglia limitati al budget della GPU); Astro 6 + Tailwind v4; nessuno script di
terze parti fuori da GTM.

Brief **confermato dal maintainer il 2026-09-19**, con queste decisioni:

1. **Output A/B**: la sezione 3 usa materiale dimostrativo, scritto a piena
   fedeltà ed etichettato come tale in pagina. Va sostituito con un articolo
   vero della piattaforma quando disponibile: tenerlo nell'elenco delle cose da
   rimpiazzare a fine build.
2. **Prezzo per contenuto**: non si mostra. In pagina restano solo i prezzi dei
   piani (270 € / 30 contenuti, 500 € / 70 contenuti, Custom su richiesta).
3. **Testimonianza**: la citazione Jurny è firmata da **Luca Zambello, CEO**
   (indicazione del maintainer). Resta in pagina con nome e ruolo; niente
   ritratto generato.

Ancora aperte, da non inventare:

4. **Carattere tipografico**: un sans umanistico quieto con un punto di vista;
   Geist e Familjen escono. Scelta alla build.
5. **Incoerenze di prodotto già note** (contesto del brand per documento o per
   progetto; una tantum o ricorrente): la home usa la versione prudente finché
   non vengono risolte.

Rischio dichiarato: bianco carta + indaco + sans sottile sta vicino al SaaS
quieto di partenza. La distanza la fanno il bacino vivo, il picco tipografico e
la densità di prove; se uno dei tre manca, il risultato è il sito di oggi con
una texture nuova.
