// Le pagine più vicine a un indirizzo, per la 404: l'URL richiesto viene
// letto come una keyword e le sue parole si confrontano con quelle delle
// pagine del sito (indirizzo, titolo, sinonimi). Stesse funzioni in build,
// per preparare l'indice, e nel browser, per il confronto.

export interface IndexedPage {
  title: string;
  url: string;
  words: string[];
}

// Parole troppo comuni per dire qualcosa su una pagina.
const STOP = new Set([
  "the", "and", "for", "www", "http", "https", "html", "htm", "php", "asp", "aspx",
  "index", "page", "pagina", "verbalist",
  "per", "con", "come", "cosa", "del", "dei", "della", "delle", "dello", "degli",
  "gli", "una", "uno", "nel", "nella", "nei", "sul", "sulla", "dal", "dalla",
  "alla", "alle", "agli", "che", "non", "piu", "tra", "fra", "sono", "anche",
  "quale", "quali", "quando",
]);

/** Parole di almeno tre lettere, minuscole e senza accenti, senza doppioni. */
export function tokenize(text: string): string[] {
  const words = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .split(/[^a-z0-9]+/)
    .filter((w) => w.length >= 3 && !STOP.has(w));
  return [...new Set(words)];
}

const sharedPrefix = (a: string, b: string) => {
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i++;
  return i;
};

// 3 = stessa parola; 2 = stessa radice (prezzo/prezzi, guida/guide,
// ottimizzare/ottimizzazione); 1 = una parola contiene l'altra.
function closeness(asked: string, word: string): number {
  if (asked === word) return 3;
  const shorter = Math.min(asked.length, word.length);
  if (shorter < 4) return 0;
  const prefix = sharedPrefix(asked, word);
  if (prefix >= 5 || prefix >= shorter - 1) return 2;
  if (asked.includes(word) || word.includes(asked)) return 1;
  return 0;
}

/** Le pagine più vicine, al massimo `max`; a parità, vince l'ordine dell'indice. */
export function nearest(asked: string[], pages: IndexedPage[], max = 5): IndexedPage[] {
  return pages
    .map((page, order) => ({
      page,
      order,
      score: asked.reduce((sum, a) => sum + Math.max(0, ...page.words.map((w) => closeness(a, w))), 0),
    }))
    .filter((hit) => hit.score >= 2)
    .sort((x, y) => y.score - x.score || x.order - y.order)
    .slice(0, max)
    .map((hit) => hit.page);
}
