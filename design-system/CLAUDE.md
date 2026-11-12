# Design system Verbalist

Regole, valori ed esempi per l'interfaccia del sito. Questa cartella è la copia di lavoro: se un valore qui e uno nel codice del sito non coincidono, vale questo.

## Da dove partire

1. `README.md`: le regole. Principi, voce, colore, contrasto, tipografia, spazio, superfici, segni, immagini. Leggilo per intero prima di toccare l'interfaccia.
2. `anatomia.md`: cinque schemi di schermata da riusare come sezioni.
3. `components/<Nome>/README.md`: quando usare un componente e che cosa gli va fornito.
4. `misure.md`: quali valori sono misurati sul riferimento e quali stimati.

## Che cosa contiene

| File | Che cos'è | Si importa nel sito? |
|---|---|---|
| `tokens.css` | Tutti i token come variabili CSS, ognuno con la sua nota d'uso, e i `@font-face` | Sì. È la fonte dei valori: si modifica qui |
| `type.css` | Gli stili tipografici come classi: `.display`, `.lead`, `.label`, `.paper-*` | Dopo aver controllato i nomi: sono generici |
| `components/components.css` | CSS di riferimento dei componenti, solo classi `.vb-*` | Sì, intero o a pezzi. Presuppone `box-sizing: border-box` |
| `components/preview-base.css` | Azzeramenti per le pagine di anteprima | No |
| `components/<Nome>/preview.html` | Markup d'esempio, si apre nel browser così com'è | No: è il modello da cui copiare la struttura |
| `anteprime/<Nome>.png` | Come deve apparire ogni anteprima | No: è il termine di confronto |
| `fonts/` | Inter Display, Inter, JetBrains Mono, con licenza OFL | Sì |

Nel README i token sono citati per nome: `sky-700` è `var(--sky-700)`, lo stile `display` è la classe `.display`.

## Portarlo nel sito

- Nomi e valori dei token sono vincolanti. Portali nel sistema di stile che il progetto usa già, senza rinominarli e senza ricopiarne i valori a mano.
- Prima di importare `tokens.css` e `type.css` controlla che il progetto non definisca già variabili o classi con gli stessi nomi (`--ink`, `--line`, `--font-sans`, `.label`, `.lead`).
- Nessun colore, spazio, raggio, ombra o corpo fuori dai token. Se ne manca uno non inventarlo: segnalalo e proponi un token nuovo.
- Le classi `.vb-*` sono un'implementazione di riferimento. Usale così o riscrivile nel modo in cui il progetto scrive i suoi stili: struttura e misure restano quelle.
- Le misure sono in px su una tela larga 1080. Sono proporzioni: non applicarle come px fissi a ogni larghezza di schermo.
- Rispetta la tabella dei contrasti del README. Sul cielo, il testo bianco sotto i 24px sta solo su `sky-800`.
- Logo e fotografie non sono in questa cartella: usa quelli del progetto. Non ridisegnare il marchio e non scaricare immagini.

## Ancora da decidere

Il sistema nasce da cinque slide, non da un sito. Queste parti non esistono ancora: proponile e falle approvare prima di applicarle a più pagine.

- **Scala responsiva.** Punto di partenza: tieni le proporzioni rispetto alla larghezza (margine laterale e corpo del titolo valgono entrambi il 7,4% della tela), con un minimo e un massimo.
- **Pulsanti, navigazione, moduli, prezzi, piè di pagina.** Vanno derivati dai due materiali, cielo e carta, non presi da un'altra libreria.
- **Stati interattivi.** Hover, focus, attivo e disabilitato non sono definiti.
- **Fotografia del cielo.** Finché non c'è vale il gradiente `.vb-sky`.

## Controllo

Dopo ogni modifica visiva apri la pagina e confrontala con `anteprime/` e con l'anteprima del componente. Verifica il contrasto di ogni testo sul suo fondo.

## Origine

Estratto da cinque slide di riferimento. La versione da sfogliare, con le anteprime dal vivo, è la pagina privata «Verbalist — stile estratto» su Claude: https://claude.ai/artifact/Tc8Y2Zc6f7oaRbaJvYSexK
