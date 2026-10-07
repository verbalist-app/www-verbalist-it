// OUTPUT REALE. Le due versioni qui sotto vengono da un documento generato in
// piattaforma (app.verbalist.it, documento 406, 28 settembre 2026). Il testo è
// riportato così com'è uscito, segnaposto compresi: in pagina se ne legge un
// estratto, non si riscrive. Se si rigenera il documento, si sostituisce tutto.
//
// Restano dimostrativi, e non vengono dalla piattaforma, `demoSerp` e
// `demoGaps`: l'analisi dei risultati non è esposta nella pagina del documento.

export const demoBrief = {
  keyword: "come scegliere le scarpe da running",
  market: "Italia",
  language: "italiano",
  type: "Guida/Tutorial",
};

// Dati del documento in piattaforma. Il title tag è quello che la piattaforma
// assegna al documento; lo slug è quello dell'indirizzo del documento.
export const demoDocument = {
  generated: "28 settembre 2026",
  titleTag: "Come scegliere le scarpe da running: guida tecnica 2025",
  slug: "/come-scegliere-le-scarpe-da-running-guida-tecnica-2025",
};

// I cinque risultati "letti" nella dimostrazione dell'hero: domini fittizi,
// non siti reali. Posizione, dominio, titolo, argomenti coperti.
export const demoSerp = [
  { pos: 1, host: "runningmag.it", title: "Le migliori scarpe da running 2026", topics: 4 },
  { pos: 2, host: "correre-forum.it", title: "Drop, appoggio, chilometraggio: la guida", topics: 3 },
  { pos: 3, host: "sportoutlet.it", title: "Scarpe running: come scegliere", topics: 3 },
  { pos: 4, host: "lamiacorsa.it", title: "Quando cambiare le scarpe da corsa", topics: 2 },
  { pos: 5, host: "negozio-running.it", title: "Catalogo scarpe running", topics: 1 },
];
// Le lacune trovate: sottotemi che i primi risultati non coprono.
export const demoGaps = ["schiume supercritiche", "rotazione scarpe", "analisi appoggio"];

export type DemoBlock =
  | { p: string }
  | { ul: string[] }
  | { ol: string[] }
  | { table: { head: string[]; rows: string[][] } };

export interface DemoVersion {
  id: "a" | "b";
  label: string;
  // Descrizione nostra del taglio, non parte dell'output.
  angle: string;
  // Misure del testo intero, non dell'estratto.
  words: number;
  headings: number;
  h1: string;
  intro: string;
  // Sezioni scelte per l'estratto, ciascuna dall'inizio.
  sections: { h2: string; blocks: DemoBlock[] }[];
  faq: string[];
}

export const demoVersions: DemoVersion[] = [
  {
    id: "a",
    label: "Versione A",
    angle: "Per parametri tecnici e categorie",
    words: 2472,
    headings: 11,
    h1: "Come scegliere le scarpe da running: guida tecnica alla calzatura giusta",
    intro:
      "Capire come scegliere le scarpe da running significa incrociare sei variabili: tipo di appoggio, conformazione dell'arco plantare, peso corporeo, superficie di allenamento, ritmo abituale e chilometraggio settimanale. Una scarpa giusta riduce il rischio di infortunio, allunga la vita del prodotto e migliora la resa in gara; una scarpa sbagliata trasferisce lo stress su ginocchia, tibia e fascia plantare. Questa guida spiega i parametri tecnici da valutare, come leggerli sul proprio piede e come tradurli nella categoria di calzatura corretta, con un capitolo dedicato ai modelli a basso impatto ambientale.",
    sections: [
      {
        h2: "Come capire che scarpa da running scegliere?",
        blocks: [
          {
            p: "La scarpa giusta si trova incrociando due variabili chiave: peso corporeo e ritmo abituale. La matrice che segue traduce i profili piu comuni in categoria consigliata, ipotizzando appoggio neutro su asfalto. Pronatori aggiungono un livello di stabilita (passaggio ad A4); trail runner scelgono A5 indipendentemente dagli altri parametri.",
          },
          {
            table: {
              head: ["Peso / Ritmo", "Sotto 4:30 min/km", "4:30-5:30 min/km", "Sopra 5:30 min/km"],
              rows: [
                ["Fino a 65 kg", "A1 con piastra", "A2", "A2 o A3 leggera"],
                ["65-80 kg", "A2 reattiva", "A2-A3", "A3"],
                ["Oltre 80 kg", "A2 rinforzata", "A3", "A3 massimo ammortizzamento"],
              ],
            },
          },
          {
            p: "La tabella e uno schema di orientamento, non una prescrizione. Chi ha appena iniziato a correre parte sempre da una A3 anche se leggero, perche i tessuti muscolo-tendinei non sono ancora abituati all'impatto ripetuto.",
          },
        ],
      },
      {
        h2: "Quando sostituire le scarpe da running",
        blocks: [
          {
            p: "Le scarpe da running vanno sostituite tra i 500 e gli 800 chilometri percorsi [SOURCE NEEDED], intervallo che si stringe per runner sopra gli 80 kg e si allarga per corridori leggeri e tecnici. Segnali di usura oltre il chilometraggio:",
          },
          {
            ul: [
              "L'intersuola presenta rughe visibili o zone compresse.",
              "Il battistrada e liscio nel punto di appoggio prevalente.",
              "Compaiono fastidi ricorrenti a polpaccio, ginocchio o pianta del piede senza altre cause identificabili.",
              "La sensazione di corsa e piatta: l'intersuola non ritorna piu dopo la compressione.",
            ],
          },
          {
            p: "Annotare il chilometraggio su un'app o un foglio permette di anticipare il cambio prima che l'usura provochi problemi.",
          },
        ],
      },
      {
        h2: "Uso di configuratori online e shoe finder",
        blocks: [
          {
            p: "I configuratori online (shoe finder) proposti da molti rivenditori chiedono peso, sesso, appoggio, superficie e ritmo, poi restituiscono una selezione di modelli compatibili. Sono un buon filtro iniziale: riducono l'assortimento da centinaia a decine di prodotti. Non sostituiscono la prova in negozio con corsa sul tapis o su breve tratto, che resta l'unico modo per verificare calzata, volume interno e sensazione dinamica.",
          },
          {
            p: "Prima di usare uno shoe finder conviene aver eseguito i test descritti sopra: dati approssimativi in ingresso producono suggerimenti approssimativi in uscita.",
          },
        ],
      },
    ],
    faq: [
      "Posso usare le scarpe da running per la palestra?",
      "Che numero devo prendere?",
      "Scarpe con piastra in carbonio: quando servono davvero?",
      "Meglio scarpe neutre o stabili se non conosco il mio appoggio?",
      "Quante paia di scarpe servono per allenarsi bene?",
      "Le scarpe da running eco-sostenibili durano meno?",
    ],
  },
  {
    id: "b",
    label: "Versione B",
    angle: "Per domande e prove pratiche",
    words: 2855,
    headings: 16,
    h1: "Come scegliere le scarpe da running: guida pratica completa",
    intro:
      "Capire come scegliere le scarpe da running significa trovare un modello compatibile con piede, terreno, distanza e sensazioni personali, non inseguire la scarpa più costosa o più pubblicizzata. La scelta corretta parte da quattro verifiche: destinazione d’uso, calzata, livello di ammortizzazione e stabilità richiesta. Questa guida spiega come valutare appoggio, arco plantare, peso, ritmo, drop e struttura della scarpa. Include inoltre una procedura di prova concreta, una tabella comparativa e criteri ambientali verificabili. L’obiettivo è restringere la scelta a pochi modelli coerenti e selezionare quello che rimane comodo durante una breve corsa, senza pressioni, scivolamenti o correzioni forzate del movimento.",
    sections: [
      {
        h2: "Come scegliere le scarpe da running in breve",
        blocks: [
          {
            p: "Per scegliere le scarpe da running, definisci prima dove e quanto correrai; verifica poi larghezza, spazio in punta e tenuta del tallone. Confronta almeno due modelli della stessa categoria e preferisci quello che risulta subito stabile e confortevole. Appoggio e peso aiutano a restringere le opzioni, ma non sostituiscono la prova in movimento.",
          },
          {
            ol: [
              "Definisci l’uso principale: strada, trail, pista, tapis roulant, allenamento quotidiano o gara.",
              "Considera il carico: distanza abituale, frequenza settimanale, peso corporeo e intensità.",
              "Valuta la calzata: il piede non deve essere compresso e il tallone non deve sollevarsi.",
              "Scegli la struttura: neutra, stabile, molto ammortizzata, leggera oppure specialistica.",
              "Prova la scarpa correndo: bastano pochi minuti per individuare pressioni, instabilità o sfregamenti evidenti.",
            ],
          },
        ],
      },
      {
        h2: "Come cambia la scelta in base alla superficie di corsa?",
        blocks: [
          {
            p: "La superficie determina soprattutto battistrada, protezione e stabilità. L’asfalto richiede una transizione fluida; fango e roccia richiedono trazione e protezioni; la pista favorisce modelli specialistici. Usare una scarpa sul terreno sbagliato può ridurre aderenza e comfort anche quando la misura è corretta.",
          },
          {
            table: {
              head: ["Superficie", "Caratteristiche utili", "Possibile limite"],
              rows: [
                [
                  "Strada",
                  "Battistrada relativamente uniforme, ammortizzazione, transizione fluida",
                  "Poca trazione su fango e terreno cedevole",
                ],
                [
                  "Trail",
                  "Tasselli, protezione del puntale, base stabile, tomaia resistente",
                  "Può risultare rigida e rumorosa sull’asfalto",
                ],
                [
                  "Pista",
                  "Peso ridotto, risposta rapida, eventuali chiodi per disciplina",
                  "Uso specialistico e protezione limitata",
                ],
                [
                  "Tapis roulant",
                  "Comfort, ventilazione, battistrada non aggressivo",
                  "Non sostituisce una trail sui percorsi esterni",
                ],
              ],
            },
          },
        ],
      },
      {
        h2: "Drop: che cos’è e come influenza la corsa?",
        blocks: [
          {
            p: "Il drop è la differenza di altezza tra tallone e avampiede. Un drop maggiore tende a spostare parte della richiesta meccanica lontano da caviglia e polpaccio; un drop basso può aumentare il lavoro di queste strutture, soprattutto durante una transizione improvvisa [SOURCE NEEDED]. Non determina automaticamente l’appoggio di tallone o avampiede.",
          },
          {
            p: "Chi passa a un drop molto diverso dovrebbe aumentare gradualmente il tempo di utilizzo. Un esempio prudente consiste nell’impiegare la nuova scarpa in una corsa breve e facile, alternandola al modello abituale, invece di usarla subito per la distanza più lunga della settimana.",
          },
          { p: "[INTERNAL: significato del drop e transizione verso scarpe minimaliste]" },
        ],
      },
    ],
    faq: [
      "Quale caratteristica è più importante per ridurre il rischio di infortuni?",
      "Con quale frequenza devo sostituire le scarpe da running?",
      "I principianti hanno bisogno di scarpe diverse dai runner esperti?",
      "Che differenza c’è tra scarpe da strada e scarpe da trail?",
      "I runner più pesanti hanno bisogno di scarpe diverse?",
      "È necessario conoscere la propria pronazione?",
      "Posso usare le scarpe da running anche per camminare?",
    ],
  },
];
