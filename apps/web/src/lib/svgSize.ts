import { readFileSync } from "node:fs";
import { join } from "node:path";

// width e height di un SVG in public/ all'altezza data, con le proporzioni
// del suo viewBox: sugli <img> servono perché il browser riservi lo spazio
// giusto prima che il file arrivi. Se il file non si legge, niente attributi.
export function svgSize(src: string, height: number): { width?: number; height?: number } {
  try {
    const svg = readFileSync(join(process.cwd(), "public", decodeURIComponent(src)), "utf8");
    const box = svg.match(/viewBox="\s*[-\d.]+[\s,]+[-\d.]+[\s,]+([\d.]+)[\s,]+([\d.]+)\s*"/);
    if (!box) return {};
    return { width: Math.round((height * Number(box[1])) / Number(box[2])), height };
  } catch {
    return {};
  }
}
