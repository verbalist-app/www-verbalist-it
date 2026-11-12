Verbalist parla con due materiali: il **cielo** e la **carta**. Il cielo porta il titolo e dà respiro; la carta porta i contenuti e resta nitida, piatta, in bianco e nero. Un solo accento, l'**iride**, compare sulla carta: colora i glifi delle fasi e segna ciò che fa l'AI.

Le misure sono in px su una tela larga 1080, quella delle slide da cui lo stile è estratto. Sono proporzioni da trasporre, non ancora la scala responsiva del sito.

## Principi

1. **Cielo per dire, carta per spiegare.** Sul cielo stanno un titolo e al più un elenco breve. Tutto ciò che si legge per più di una riga sta su un `Foglio`.
2. **Una cosa grande per schermata.** Un titolo in `display`, poi un solo gruppo: righe, schede o fogli.
3. **La carta non si tinge.** Su `paper` solo `ink`, `ink-soft`, `ink-muted` e i filetti `line`. Il colore sta nel cielo e nell'iride.
4. **L'iride è l'unico accento.** Colora i glifi delle fasi sul foglio e la sfera che segna una tappa dell'AI. Mai testo, mai fondi.
5. **Filetti al posto dei riquadri.** Le cose si separano con linee da `stroke-hairline`, non con bordi o card dentro card.
6. **Tutto parte dal margine.** Filetto, titolo, glifi, schede e fogli si allineano a `space-80`. Niente centrature.
7. **Spigoli vivi alla carta, angoli morbidi a ciò che galleggia.** `radius-none` ai fogli, `radius-card` a schede e vetro, `radius-full` a badge e spunte.

## Voce

- Scrivi i titoli come frasi, con la maiuscola solo all'inizio. Frasi brevi in serie, ognuna con il suo punto: «Prima legge Google. Poi scrive per le AI.», «Paghi una volta, per quanto produci.»
- Metti i numeri nel titolo: «Una catena di quattro agenti», «30 giorni, 15 documenti».
- Accoppia nome e descrizione: una-tre parole a sinistra, due-quattro a destra («Analisi competitor», «I primi 5 su Google»).
- Tieni le etichette di sezione brevissime, in maiuscolo mono, con punto medio e numero: `PANORAMICA · 4`.
- Niente punti esclamativi, niente emoji, niente tutto-maiuscolo fuori dalle etichette.

## Colore

- **Cielo.** Limpido: gradiente a 98° da `sky-700` a `sky-400`, profondo in alto a sinistra e chiaro a destra. Sfocato: da `sky-100` a `sky-400`, con aloni `bloom-cream` e `bloom-rose` verso gli angoli. Profondo: `sky-800`, per il testo piccolo.
- **Sul cielo.** Testo `on-sky`; seconda voce e descrizioni `on-sky-muted`; filetti `rule-on-sky`; vetro `glass` con bordo `glass-border`; fogli non a fuoco `ghost`.
- **Carta.** `paper` pieno. Titoli e badge `ink`, testo `ink-soft`, descrizioni e chip `ink-muted`, segni muti `ink-faint`, filetti `line`, fondo dei chip `chip`.
- **Schede sul cielo.** Testo e spunta `navy`: il blu-notte lega la scheda al cielo, il nero resta alla carta.
- **Iride.** Un gradiente a 135°: `iris-600`, `iris-400` al 34%, `iris-200` al 60%, `iris-peach` all'86%, `iris-cream`. Ogni glifo lo gira in una direzione diversa.
- **Fioritura.** I `bloom-*` vivono solo dentro fotografie e aloni. Non sono colori d'interfaccia.

## Contrasto

Lo stile del riferimento mette testo bianco su azzurri chiari che non reggono le soglie di leggibilità. I valori sono riportati esatti; queste regole dicono dove usarli.

| Testo | `sky-800` | `sky-700` | `sky-600` | `sky-500` | `sky-400` | `sky-300` | `sky-200` |
|---|---|---|---|---|---|---|---|
| `on-sky` | 4,5 | 4,0 | 3,7 | 3,2 | 2,7 | 2,2 | 2,0 |
| `on-sky-muted` | 3,2 | 2,9 | 2,7 | 2,4 | 2,1 | 1,8 | 1,6 |
| `navy` | 3,0 | 3,4 | 3,7 | 4,3 | 5,1 | 6,3 | 7,0 |

- Sotto i 24px sul cielo: solo `on-sky` su `sky-800`. Meglio ancora, su un `Foglio`.
- Titoli e `lead`: `on-sky` su `sky-500` o più profondo.
- `on-sky-muted`: da 32px in su, e mai da solo a portare un'informazione.
- Sul cielo chiaro, da `sky-400` in su, niente testo bianco: o carta, o `navy`.
- Glifi e spunte bianchi: su `sky-500` o più profondo.
- Sulla carta ogni coppia regge: `ink` 21:1, `ink-soft` 7,8:1, `ink-muted` 5,3:1. `ink-faint` e `check-idle` sono solo decorativi.

## Tipografia

- **Inter Display** medio per `display` e `paper-title`: stretto, con spaziatura a −3% e −2%.
- **Inter** regolare e medio per tutto il resto. Sul cielo `lead` a −2%; sul foglio spaziatura naturale e interlinea 1,5.
- **JetBrains Mono** per `label`, sempre maiuscolo.
- Due soli pesi, 400 e 500. Nessun grassetto, nessun corsivo.
- La gerarchia si fa con la dimensione e il tono, non con il peso: il titolo del foglio è il doppio del sottotitolo (42 e 21), che è poco più del testo (18).

## Spazio e griglia

- Margine laterale `space-80`, il 7,4% della tela. Area utile 920.
- In verticale: filetto, `space-64`, titolo, `space-48`, sottotitolo, `space-120`, contenuto.
- Il modulo `space-140` torna tre volte: altezza delle righe, altezza delle schede, passo delle file di simboli.
- Misurano `space-40` i glifi, le spunte, i rientri di schede e vetro, la distanza dal glifo al nome.
- Dentro il foglio: margine `space-56`, tre colonne da 420 o quattro da 308, senza canalini. L'aria la fa il testo, che resta più corto della colonna.
- I fogli possono uscire dalla tela a destra e in basso. Il cielo no: è sempre a tutta larghezza.

## Superfici

| Superficie | Materiale | Angoli | Ombra | Testo |
|---|---|---|---|---|
| Cielo | gradiente o fotografia | nessuno | nessuna | `on-sky` |
| Foglio | `paper` | `radius-none` | nessuna | `ink` |
| Scheda | `paper` | `radius-card` | `shadow-card` | `navy` |
| Vetro | `glass` con `blur-glass` | `radius-card` | nessuna, bordo `glass-border` | `on-sky` |
| Fantasma | `ghost` con `blur-glass` | `radius-none` | nessuna | `on-sky` |

## Segni

- **Glifi a blocchi.** Griglia 4 × 4, tratto di una cella (`space-10` su un glifo da `space-40`), solo forme piene e ortogonali. Bianchi sul cielo, iride sul foglio, in negativo su `ink` per le voci di una griglia.
- **Badge.** Dischi `ink` con la cifra `paper`; sfera iride per la tappa dell'AI.
- **Spunta.** Tratto `stroke-check` a estremità tonde, in un cerchio da `space-40`.
- Nessuna emoji, nessuna icona a contorno sottile, nessuna illustrazione.
- Il marchio Verbalist non è in questo sistema: nelle anteprime il nome è composto in `label`. Va aggiunto dai file originali, mai ridisegnato.

## Immagini

- Una sola fotografia: cielo sereno a tutta tela, fiori di campo rosa, gialli e bianchi che entrano dal bordo inferiore, luce piena, niente persone, niente orizzonte.
- La stessa fotografia, sfocata di `blur-sky`, dà i fondi morbidi: gli aloni caldi sono i fiori fuori fuoco.
- La fotografia del riferimento non è nostra: va scattata o acquistata. Fino ad allora vale il gradiente `.vb-sky`.
- I fogli sono a loro volta immagini: pagine vere del prodotto, mostrate intere o al vivo, mai schermate decorate.

## Aggiunte intenzionali

- `sky-800` e il cielo `.vb-sky--deep`: non esistono nel riferimento. Servono a un sito, che ha testo piccolo dove le slide hanno solo titoli.
- Il centro indaco del badge iride, per tenere leggibile la cifra.
- I quattro glifi: originali, costruiti con la stessa grammatica.

## Fuori dal sistema

- La pillola scura «1/5» e la fascia scura in fondo all'ultima slide: sono l'interfaccia dell'app in cui le slide sono state viste, non lo stile.
- Logo, fotografia, glifi e marchi di terzi del riferimento.
- Pulsanti, navigazione, moduli, prezzi, piè di pagina: le slide non ne mostrano. Vanno derivati da questi materiali, non ripresi da un'altra libreria.
