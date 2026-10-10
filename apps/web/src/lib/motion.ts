// Linguaggio di movimento del sito, lato JavaScript. Gemello di
// src/styles/motion.css: durate in secondi, curve come array cubic-bezier.
// Le animazioni usano solo questi valori.
export const D = {
  micro: 0.15, // spunte, pressioni, hover
  base: 0.32, // ingressi
  wide: 0.6, // spostamenti, connettori
} as const;
/** Le uscite durano il 70% dell'ingresso corrispondente. */
export const exit = (d: number) => d * 0.7;

export const E = {
  in: [0.16, 1, 0.3, 1] as const,
  move: [0.65, 0, 0.35, 1] as const,
  out: [0.3, 0, 0.8, 0.15] as const,
};
/** Scatto per spunte, pillole, menu: molla con poco rimbalzo. */
export const SNAP = { type: "spring", bounce: 0.25, duration: 0.4 } as const;

export const STAGGER = 0.055; // tra elementi fratelli
export const RISE = 10; // px di salita negli ingressi
export const POP = { scale: 0.96, y: 4 } as const; // popover in apertura
export const READ = 0.75; // pausa di lettura dopo un passaggio

/** Ritmo di battitura leggermente irregolare (30–45 ms), deterministico.
 *  Più rapido dei 35–55 ms di partenza per tenere il ciclo della catena sotto i 20 s. */
export const typeGap = (i: number) => 0.03 + ((i * 7919) % 16) / 1000;

export const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
