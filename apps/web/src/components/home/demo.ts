// OUTPUT REALE. Le due versioni qui sotto vengono da un documento generato in
// piattaforma (app.verbalist.it, documento 408, 7 ottobre 2026, 07:16;
// sostituisce il 406, la cui versione A era uscita senza lettere accentate).
// Il testo è riportato così com'è uscito, segnaposto compresi: in pagina se
// ne legge un estratto, non si riscrive. Se si rigenera, si sostituisce tutto.
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
  generated: "7 ottobre 2026",
  time: "07:16",
  titleTag: "Come scegliere le scarpe da running: guida completa",
  slug: "/come-scegliere-le-scarpe-da-running-guida-completa",
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
  // La sezione scelta per l'estratto, intera. Una sola per versione: in home
  // il testo dimostrativo non deve prevalere su quello del prodotto.
  sections: { h2: string; blocks: DemoBlock[] }[];
  faq: string[];
}

export const demoVersions: DemoVersion[] = [
  {
    id: "a",
    label: "Versione A",
    angle: "Per misure, categorie e prova in negozio",
    words: 2469,
    headings: 12,
    h1: "Come scegliere le scarpe da running: guida completa a misura, appoggio e terreno",
    intro:
      "Capire come scegliere le scarpe da running significa incrociare cinque variabili: lunghezza reale del piede, tipo di appoggio, peso corporeo, superficie su cui corri e volume di chilometri settimanali. Marchio e colore vengono dopo. Questa guida spiega come misurare il piede in centimetri, quanto spazio lasciare davanti alle dita, quale drop e quale ammortizzazione scegliere in base alla tua corsa e come leggere la classificazione A1–A6 usata da molti negozi specializzati italiani. In fondo trovi una procedura di prova in sette passaggi da seguire prima dell'acquisto.",
    sections: [
      {
        h2: "La classificazione A1–A6: cosa significano le sigle",
        blocks: [
          {
            p: "In Italia molti negozi e riviste di settore raggruppano le scarpe da running in sei categorie, dalla A1 alla A6, in base a ammortizzazione, peso e destinazione d'uso [SOURCE NEEDED]. Non si tratta di una norma tecnica: le definizioni possono variare leggermente da una fonte all'altra, ma la sigla aiuta a orientarsi rapidamente tra gli scaffali.",
          },
          {
            table: {
              head: ["Categoria", "Tipologia", "Uso tipico"],
              rows: [
                ["A1", "Scarpe da gara superleggere", "Competizioni, runner leggeri ed esperti"],
                ["A2", "Scarpe intermedie", "Allenamenti veloci, gare su distanze medie"],
                ["A3", "Massimo ammortizzamento, neutre", "Allenamento quotidiano, lunghi, runner di peso medio-alto"],
                ["A4", "Stabili o antipronazione", "Runner con iperpronazione"],
                ["A5", "Trail e fuoristrada", "Sentieri, sterrato, montagna"],
                ["A6", "Scarpe da pista o chiodate", "Atletica su pista"],
              ],
            },
          },
        ],
      },
    ],
    faq: [
      "Conviene prendere mezza taglia in più?",
      "Ogni quanti chilometri vanno cambiate le scarpe da running?",
      "Un principiante deve comprare scarpe con piastra in carbonio?",
      "Le scarpe da running vanno bene anche per camminare o per la palestra?",
      "Si può usare un plantare nelle scarpe da corsa?",
    ],
  },
  {
    id: "b",
    label: "Versione B",
    angle: "Per domande e prove pratiche",
    words: 3265,
    headings: 14,
    h1: "Come scegliere le scarpe da running: guida pratica per trovare il modello giusto",
    intro:
      "Capire come scegliere le scarpe da running significa abbinare la scarpa al piede, al tipo di corsa e al terreno, non inseguire il modello più costoso o più pubblicizzato. Questa guida trasforma peso, passo, distanza, appoggio e calzata in criteri concreti. Troverai anche una procedura di prova, confronti fra categorie e soluzioni ai problemi più comuni. Il principio decisivo è semplice: la scarpa corretta deve risultare stabile e confortevole per quello specifico runner, lasciando spazio alle dita senza permettere al tallone di muoversi. Se dolore o infortuni persistono, la scelta della scarpa non sostituisce una valutazione sanitaria qualificata.",
    sections: [
      {
        h2: "Come scegliere le scarpe da running in 7 passaggi",
        blocks: [
          {
            p: "Per scegliere una scarpa da corsa senza perdersi tra sigle e tecnologie, conviene seguire un ordine preciso. Prima si definiscono uso e superficie; poi si valutano piede, sensazioni e calzata. Il passo medio o il peso, considerati da soli, non possono determinare il modello.",
          },
          {
            ol: [
              "Definisci l’uso principale: corsa quotidiana, fondo lungo, gara, ripetute, trail o tapis roulant.",
              "Identifica il terreno: asfalto, pista, sterrato compatto oppure sentiero tecnico.",
              "Considera il carico reale: peso corporeo, chilometri settimanali, distanza della singola uscita e frequenza.",
              "Osserva piede e andatura: larghezza, volume, arco plantare, eventuali asimmetrie e stabilità durante la corsa.",
              "Scegli la funzione prevalente: comfort e ammortizzazione, supporto, aderenza o reattività.",
              "Prova la calzata: usa le calze da corsa, allaccia entrambe le scarpe e corri, se possibile.",
              "Confronta almeno due modelli: valuta quale scompare maggiormente ai piedi, senza punti di pressione o correzioni percepite come invasive.",
            ],
          },
          { p: "[INTERNAL: guida per iniziare a correre]" },
        ],
      },
    ],
    faq: [
      "Le scarpe stabili servono a tutti i pronatori?",
      "Più ammortizzazione significa maggiore protezione?",
      "Si può correre con scarpe da trail su asfalto?",
      "È meglio comprare una scarpa più grande?",
      "Una scarpa veloce va bene per ogni allenamento?",
    ],
  },
];
