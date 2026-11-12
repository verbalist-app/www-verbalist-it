# Misure e affidabilità

Le slide sono schermate da telefono larghe 1206px. Ogni misura è stata letta sui pixel e riportata alla tela da 1080: un px di tela vale 1,117px di schermata. A quella scala gli elementi cadono su valori tondi, segno che la tela d'origine è proprio 1080.

## Verificato

| Cosa | Letto sulla schermata | Su tela 1080 | Come |
|---|---|---|---|
| Carattere dei titoli | — | Inter Display Medium | Lettere di 7 righe di titolo sovrapposte a una settantina di stili di 18 famiglie: 93% di coincidenza, il secondo candidato 82% |
| Corpo del titolo | 89,3px | 80px | Dall'adattamento del carattere alle righe |
| Spaziatura del titolo | — | −3% | Idem |
| Interlinea del titolo | 98,5px | 88px | Passo tra le righe, su quattro slide |
| Testo di righe e schede | 44,5px | 40px, Inter Regular | Adattamento su 9 campioni |
| Margine laterale | 89–90px | 80px | Bordo di filetto, righe, schede e fogli |
| Altezza di riga e scheda | 156,3px | 140px | Passo dei filetti e bordi della scheda |
| Glifi e spunte | 44px | 40px | Ingombro dei pixel bianchi |
| Barre dei glifi | 11px | 10px | Idem |
| Dal filetto al titolo | 72px | 64px | Riga del filetto e cima delle maiuscole |
| Proporzione dei fogli | 884 × 496px | 16:9 | Bordi del foglio |
| Angoli dei fogli | — | 0 | Pixel d'angolo |
| Raggio della scheda | 36–43px | 32px, con smussatura continua | Profilo del bordo, riga per riga |
| Nero di titoli e badge | #000000–#010101 | `ink` | Aree piene |
| Blu-notte | #172b43–#1b304a | `navy` | Cerchio della spunta |
| Azzurri | sei gruppi per slide | da `sky-700` a `sky-50` | Raggruppamento dei pixel azzurri |
| Iride | da #4f58e2 a #f0e6d3 | `iris-*` | Griglia di campioni sui quattro glifi e sulla sfera |

## Stimato

| Cosa | Perché non è esatto | Valore scelto |
|---|---|---|
| Bianco attenuato | Ricavato dalla luminanza rispetto al fondo: tra 71 e 77% | 72% |
| Filetti sul cielo | Linea di 1px diluita dalla compressione: tra 40 e 50% | 50% |
| Vetro | Differenza tra dentro e fuori dal pannello: tra 9 e 13% | 12% |
| Fogli fantasma | Idem: tra 14 e 16% | 15% |
| Grigi del testo sul foglio | Tratti sottili schiariti dal JPEG | `ink-soft`, `ink-muted` |
| Ombra della scheda | Se ne legge solo il profilo di luminosità | `shadow-card` |
| Sfocature | Non misurabili da un'immagine piatta | `blur-glass`, `blur-sky` |
| Carattere mono | Lettere alte 12px: più famiglie compatibili | JetBrains Mono |
| Interlinea di `lead` | Nel riferimento non va mai su due righe | 48px |
| Raggio dei chip | Elementi di pochi pixel | 4px |

## Escluso

| Cosa | Perché |
|---|---|
| Pillola «1/5» in alto a destra | Nero al 48%, misure in punti iOS (34 × 26): è l'app |
| Fascia scura in fondo alla slide 5 | Nero al 40% sopra l'immagine: è l'app |
| Frammento scuro in alto a sinistra | Idem, tagliato dalla schermata |
| Bordo inferiore delle slide | Le schermate sono ritagli: righe e schede risultano tagliate in basso, il resto non è stato visto |
