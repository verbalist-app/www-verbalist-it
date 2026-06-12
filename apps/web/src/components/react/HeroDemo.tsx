"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Check,
  ChevronDown,
  Copy,
  FileText,
  ImageIcon,
  Loader2,
  Sparkles,
  Upload,
} from "lucide-react";

import { cn } from "@/lib/utils";

const KEYWORD = "migliori scarpe running 2026";
const MARKETS = [
  { code: "IT", name: "Italia" },
  { code: "FR", name: "Francia" },
  { code: "ES", name: "Spagna" },
  { code: "DE", name: "Germania" },
  { code: "UK", name: "Regno Unito" },
];
const TYPES = ["Blog post", "Scheda prodotto", "Guida", "Landing page"];
const COMPETITORS = [
  "sport.it/scarpe-running-2026",
  "runnersworld.it/migliori-scarpe",
  "gazzetta.it/running/test-2026",
];
const TOPICS = ["ammortizzazione", "drop", "peso", "Nike", "Adidas", "Hoka"];
const ARTICLE =
  "Per scegliere le scarpe da running giuste contano tre fattori: ammortizzazione, peso e tipo di appoggio. Le Nike Pegasus 41 restano la scelta più versatile, le Hoka Mach 6 puntano sulla leggerezza, mentre per il trail le Adidas Terrex offrono il grip migliore.";
const WORDS = ARTICLE.split(" ");

const INITIAL = {
  phase: "form" as "form" | "editor",
  mode: false,
  marketOpen: false,
  market: "",
  keyword: "",
  typeOpen: false,
  type: "",
  pdf: false,
  comp: 0,
  topics: false,
  analysisDone: false,
  words: 0,
  contentDone: false,
  imaging: false,
  imageReady: false,
  copied: false,
};

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-mono text-[9px] uppercase tracking-wider text-mist-600 dark:text-mist-400">
        {label}
      </span>
      {children}
    </div>
  );
}

function Trigger({
  active,
  children,
}: {
  active: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex h-7 items-center justify-between gap-2 rounded-md border bg-mist-50 px-2.5 text-xs dark:bg-mist-900",
        active ? "border-mist-400/70 ring-2 ring-mist-950/5 dark:ring-white/10" : "border-border",
      )}
    >
      {children}
      <ChevronDown className="size-3 shrink-0 text-mist-400" />
    </div>
  );
}

export function HeroDemo() {
  const reduceMotion = useReducedMotion();
  const hasMouse = useMediaQuery("(pointer: fine)");
  const [s, setS] = useState(INITIAL);
  const [cursor, setCursor] = useState({ x: 40, y: 40 });
  const [cursorOn, setCursorOn] = useState(false);
  const [pressKey, setPressKey] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const modeRef = useRef<HTMLDivElement>(null);
  const marketRef = useRef<HTMLDivElement>(null);
  const marketOptRef = useRef<HTMLDivElement>(null);
  const keywordRef = useRef<HTMLDivElement>(null);
  const typeRef = useRef<HTMLDivElement>(null);
  const typeOptRef = useRef<HTMLDivElement>(null);
  const pdfRef = useRef<HTMLDivElement>(null);
  const generaRef = useRef<HTMLDivElement>(null);
  const imgBtnRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [s.comp, s.topics, s.analysisDone, s.words, s.imageReady]);

  useEffect(() => {
    if (reduceMotion) {
      setS({
        ...INITIAL,
        phase: "editor",
        mode: true,
        market: "Italia",
        keyword: KEYWORD,
        type: "Blog post",
        pdf: true,
        comp: 3,
        topics: true,
        analysisDone: true,
        words: WORDS.length,
        contentDone: true,
        imaging: true,
        imageReady: true,
        copied: true,
      });
      return;
    }

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const SPEED = 0.85; // <1 = leggermente più veloce su tutte le tempistiche
    const wait = (ms: number) =>
      new Promise<void>((res) => {
        timer = setTimeout(res, ms * SPEED);
      });

    const measure = (ref: React.RefObject<HTMLDivElement | null>) => {
      const el = ref.current;
      const cont = containerRef.current;
      if (!el || !cont) return null;
      const r = el.getBoundingClientRect();
      const c = cont.getBoundingClientRect();
      return {
        x: r.left - c.left + Math.min(r.width / 2, 24),
        y: r.top - c.top + r.height / 2,
      };
    };

    const click = async (
      ref: React.RefObject<HTMLDivElement | null>,
      key: string,
      action: () => void,
      move = 600,
      dwell = 760,
    ) => {
      if (cancelled) return;
      setCursorOn(true);
      const pos = measure(ref);
      if (pos) setCursor(pos);
      await wait(move);
      if (cancelled) return;
      setPressKey(key);
      action();
      await wait(200);
      setPressKey(null);
      await wait(dwell);
    };

    const type = async () => {
      for (let i = 1; i <= KEYWORD.length; i++) {
        if (cancelled) return;
        setS((p) => ({ ...p, keyword: KEYWORD.slice(0, i) }));
        await wait(48);
      }
    };

    const run = async () => {
      while (!cancelled) {
        setS(INITIAL);
        setCursorOn(false);
        await wait(750);

        await click(modeRef, "mode", () => setS((p) => ({ ...p, mode: true })));

        // mercato — dropdown
        await click(marketRef, "market", () =>
          setS((p) => ({ ...p, marketOpen: true })),
        );
        await wait(420);
        await click(marketOptRef, "market", () =>
          setS((p) => ({ ...p, market: "Italia" })),
        );
        await wait(320);
        setS((p) => ({ ...p, marketOpen: false }));
        await wait(380);

        // keyword
        await click(keywordRef, "kw", () => {}, 580, 140);
        await type();
        await wait(420);

        // tipo — dropdown
        await click(typeRef, "type", () =>
          setS((p) => ({ ...p, typeOpen: true })),
        );
        await wait(420);
        await click(typeOptRef, "type", () =>
          setS((p) => ({ ...p, type: "Blog post" })),
        );
        await wait(320);
        setS((p) => ({ ...p, typeOpen: false }));
        await wait(380);

        // pdf
        await click(pdfRef, "pdf", () => setS((p) => ({ ...p, pdf: true })));

        // genera
        await click(
          generaRef,
          "genera",
          () => setS((p) => ({ ...p, phase: "editor" })),
          600,
          450,
        );
        setCursorOn(false);
        await wait(550);

        // STEP 1 — analisi competitor
        for (let i = 1; i <= COMPETITORS.length; i++) {
          if (cancelled) return;
          setS((p) => ({ ...p, comp: i }));
          await wait(560);
        }
        setS((p) => ({ ...p, topics: true }));
        await wait(650);
        setS((p) => ({ ...p, analysisDone: true }));
        await wait(800);

        // STEP 2 — scrittura del contenuto
        for (let i = 1; i <= WORDS.length; i++) {
          if (cancelled) return;
          setS((p) => ({ ...p, words: i }));
          await wait(80);
        }
        await wait(500);
        setS((p) => ({ ...p, contentDone: true }));
        await wait(600);

        // STEP 3 — genera immagine
        await click(
          imgBtnRef,
          "img",
          () => setS((p) => ({ ...p, imaging: true })),
          640,
          250,
        );
        setCursorOn(false);
        await wait(1500);
        if (cancelled) return;
        setS((p) => ({ ...p, imageReady: true }));
        await wait(800);

        // copia
        await click(
          copyRef,
          "copy",
          () => setS((p) => ({ ...p, copied: true })),
          680,
          2400,
        );
        setCursorOn(false);
        await wait(900);
      }
    };

    run();
    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, [reduceMotion]);

  const status =
    s.phase === "form"
      ? "Bozza"
      : s.imageReady
        ? "Completato"
        : s.imaging
          ? "Generazione immagine"
          : s.contentDone
            ? "Articolo pronto"
            : s.words > 0
              ? "Scrittura del contenuto"
              : "Analisi competitor";

  return (
    <div className="relative flex flex-1 flex-col">
      <div className="flex items-center justify-between border-b border-border px-4 py-3 sm:px-5 sm:py-3.5">
        <div className="min-w-0">
          <h2 className="text-sm font-medium text-foreground md:text-base">
            Nuovo contenuto
          </h2>
          <p className="text-[11px] text-mist-600 dark:text-mist-400">{status}</p>
        </div>
        {s.phase === "form" ? (
          <span className="inline-flex items-center rounded-full border border-border bg-background px-2 py-0.5 text-[10px] font-medium text-mist-600 dark:text-mist-400">
            Bozza
          </span>
        ) : s.imageReady ? (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-700 dark:text-emerald-400">
            <Check className="size-2.5" />
            Completato
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium text-amber-700 dark:text-amber-400">
            <Loader2 className="size-2.5 animate-spin" />
            In corso
          </span>
        )}
      </div>

      <div
        ref={containerRef}
        className="relative h-[340px] overflow-hidden sm:h-[452px]"
      >
        {cursorOn && hasMouse && (
          <motion.div
            className="pointer-events-none absolute z-40"
            initial={false}
            animate={{ left: cursor.x, top: cursor.y }}
            transition={{ type: "spring", stiffness: 130, damping: 17 }}
          >
            <span className="relative block">
              {pressKey && (
                <span className="absolute -left-1.5 -top-1.5 size-6 animate-ping rounded-full bg-foreground/25" />
              )}
              <svg viewBox="0 0 24 24" className="size-4 drop-shadow-sm">
                <path
                  d="m4 2 15 8.5-6.2 1.4L9.2 21 4 2Z"
                  className="fill-white stroke-mist-950 dark:fill-mist-950 dark:stroke-white"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </motion.div>
        )}

        {/* ── FORM ── */}
        {s.phase === "form" && (
          <div className="flex flex-col gap-3 p-4 sm:p-5">
            <div
              ref={modeRef}
              className="hidden grid-cols-2 gap-1 rounded-lg border border-border bg-mist-100/60 p-1 sm:grid dark:bg-mist-950/40"
            >
              <span
                className={cn(
                  "inline-flex h-7 items-center justify-center gap-1.5 rounded-md text-[11px] font-medium transition-all",
                  pressKey === "mode" && "scale-95",
                  s.mode
                    ? "bg-card text-foreground shadow-sm dark:bg-mist-800"
                    : "text-mist-600 dark:text-mist-400",
                )}
              >
                <Sparkles className="size-3" />
                Nuovo contenuto
              </span>
              <span className="inline-flex h-7 items-center justify-center gap-1.5 rounded-md text-[11px] font-medium text-mist-600 dark:text-mist-400">
                <FileText className="size-3" />
                Ottimizza esistente
              </span>
            </div>

            {/* Mercato dropdown */}
            <Field label="Mercato">
              <div className="relative">
                <div ref={marketRef} className={pressKey === "market" ? "scale-[0.99]" : undefined}>
                  <Trigger active={s.marketOpen}>
                    {s.market ? (
                      <span className="flex items-center gap-1.5 font-medium text-foreground">
                        <span className="font-mono text-[10px] text-mist-400">
                          IT
                        </span>
                        {s.market}
                      </span>
                    ) : (
                      <span className="text-mist-600 dark:text-mist-400">Seleziona mercato</span>
                    )}
                  </Trigger>
                </div>
                {s.marketOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute left-0 top-full z-30 mt-1 w-48 overflow-hidden rounded-md border border-border bg-card shadow-[var(--shadow-popover)] dark:bg-mist-900"
                  >
                    {MARKETS.map((m) => {
                      const sel = s.market === m.name;
                      const isItalia = m.name === "Italia";
                      return (
                        <div
                          key={m.code}
                          ref={isItalia ? marketOptRef : undefined}
                          className={cn(
                            "flex items-center justify-between px-2.5 py-1.5 text-[11px]",
                            sel
                              ? "bg-mist-100 dark:bg-mist-800"
                              : "text-mist-600 dark:text-mist-300",
                          )}
                        >
                          <span className="flex items-center gap-2">
                            <span className="font-mono text-[9px] text-mist-400">
                              {m.code}
                            </span>
                            <span
                              className={sel ? "font-medium text-foreground" : ""}
                            >
                              {m.name}
                            </span>
                          </span>
                          {sel && (
                            <Check className="size-3 text-emerald-600 dark:text-emerald-400" />
                          )}
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </div>
            </Field>

            <Field label="Keyword">
              <div
                ref={keywordRef}
                className={cn(
                  "flex h-7 items-center rounded-md border bg-mist-50 px-2.5 font-mono text-xs text-foreground transition-colors dark:bg-mist-900",
                  s.keyword
                    ? "border-mist-400/70 ring-2 ring-mist-950/5 dark:ring-white/10"
                    : "border-border",
                )}
              >
                {s.keyword}
                {s.keyword.length < KEYWORD.length && s.keyword.length > 0 && (
                  <span
                    aria-hidden
                    className="ml-px inline-block h-3.5 w-px animate-blink-cursor bg-foreground"
                  />
                )}
              </div>
            </Field>

            {/* Tipo dropdown */}
            <Field label="Tipo di contenuto">
              <div className="relative">
                <div ref={typeRef} className={pressKey === "type" ? "scale-[0.99]" : undefined}>
                  <Trigger active={s.typeOpen}>
                    {s.type ? (
                      <span className="flex items-center gap-1.5 font-medium text-foreground">
                        <FileText className="size-3 text-mist-600 dark:text-mist-400" />
                        {s.type}
                      </span>
                    ) : (
                      <span className="text-mist-600 dark:text-mist-400">Seleziona tipo</span>
                    )}
                  </Trigger>
                </div>
                {s.typeOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute left-0 top-full z-30 mt-1 w-44 overflow-hidden rounded-md border border-border bg-card shadow-[var(--shadow-popover)] dark:bg-mist-900"
                  >
                    {TYPES.map((tp) => {
                      const sel = s.type === tp;
                      const isBlog = tp === "Blog post";
                      return (
                        <div
                          key={tp}
                          ref={isBlog ? typeOptRef : undefined}
                          className={cn(
                            "flex items-center justify-between px-2.5 py-1.5 text-[11px]",
                            sel
                              ? "bg-mist-100 font-medium text-foreground dark:bg-mist-800"
                              : "text-mist-600 dark:text-mist-300",
                          )}
                        >
                          {tp}
                          {sel && (
                            <Check className="size-3 text-emerald-600 dark:text-emerald-400" />
                          )}
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </div>
            </Field>

            <div className="hidden sm:block">
              <Field label="Brief o documento · PDF (opzionale)">
              <div ref={pdfRef} className="w-fit">
                {s.pdf ? (
                  <span className="inline-flex h-7 items-center gap-1.5 rounded-md border border-border bg-mist-50 px-2.5 text-xs dark:bg-mist-900">
                    <FileText className="size-3 text-mist-600 dark:text-mist-400" />
                    <span className="font-mono text-[11px] text-foreground">
                      brief-prodotto.pdf
                    </span>
                    <Check className="size-3 text-emerald-600 dark:text-emerald-400" />
                  </span>
                ) : (
                  <div className="flex h-7 items-center gap-1.5 rounded-md border border-dashed border-border px-2.5 text-[11px] text-mist-600 dark:text-mist-400">
                    <Upload className="size-3" />
                    Trascina un PDF o sfoglia
                  </div>
                )}
              </div>
              </Field>
            </div>

            <div
              ref={generaRef}
              className={cn(
                "mt-1 inline-flex h-9 w-full items-center justify-center gap-1.5 rounded-md text-xs font-medium text-white transition-transform duration-150 dark:text-mist-950",
                pressKey === "genera"
                  ? "scale-[0.98] bg-mist-800 dark:bg-mist-200"
                  : "bg-mist-950 dark:bg-mist-50",
              )}
            >
              <Sparkles className="size-3.5" />
              Genera contenuto
            </div>
          </div>
        )}

        {/* ── EDITOR ── */}
        {s.phase === "editor" && (
          <div className="flex h-full flex-col gap-3 p-4 sm:p-5">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="inline-flex h-6 items-center gap-1 rounded-md border border-border bg-mist-50 px-2 text-[11px] font-medium dark:bg-mist-900">
                <span className="font-mono text-[9px] text-mist-400">IT</span>{" "}
                Italia
              </span>
              <span className="inline-flex h-6 max-w-[170px] items-center rounded-md border border-border bg-mist-50 px-2 dark:bg-mist-900">
                <span className="truncate font-mono text-[10px]">{KEYWORD}</span>
              </span>
              <span className="inline-flex h-6 items-center gap-1 rounded-md border border-border bg-mist-50 px-2 text-[11px] font-medium dark:bg-mist-900">
                <FileText className="size-2.5 text-mist-600 dark:text-mist-400" /> Blog post
              </span>
            </div>

            {(s.imaging || s.imageReady) && (
              <div className="relative h-16 shrink-0 overflow-hidden rounded-lg border border-border">
                <div className="absolute inset-0 bg-gradient-to-br from-mist-300 to-mist-500 dark:from-mist-700 dark:to-mist-900" />
                {!s.imageReady && (
                  <div className="absolute inset-0 animate-pulse bg-mist-200/40 dark:bg-mist-800/40" />
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex items-center gap-1 rounded-full bg-background/80 px-2 py-0.5 font-mono text-[9px] text-mist-600 dark:text-mist-300">
                    {s.imageReady ? (
                      <>
                        <ImageIcon className="size-2.5" /> Copertina generata
                      </>
                    ) : (
                      <>
                        <Loader2 className="size-2.5 animate-spin" /> Generazione
                        immagine…
                      </>
                    )}
                  </span>
                </div>
              </div>
            )}

            <div
              ref={scrollRef}
              className="min-h-0 flex-1 space-y-3 overflow-hidden rounded-lg border border-border bg-mist-50/60 p-3 dark:bg-mist-900/50"
            >
              {/* STEP 1: analisi competitor */}
              <div className="space-y-1.5">
                <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-mist-600 dark:text-mist-400">
                  Analisi competitor
                  {s.analysisDone && (
                    <Check className="size-2.5 text-emerald-600 dark:text-emerald-400" />
                  )}
                </span>
                {COMPETITORS.slice(0, s.comp).map((domain, i) => (
                  <div
                    key={domain}
                    className="flex items-center gap-2 text-[11px]"
                  >
                    <span className="flex size-4 shrink-0 items-center justify-center rounded bg-mist-950 font-mono text-[9px] font-bold text-mist-50 dark:bg-mist-200 dark:text-mist-950">
                      {i + 1}
                    </span>
                    <span className="flex-1 truncate font-mono text-foreground">
                      {domain}
                    </span>
                    <Check className="size-3 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  </div>
                ))}
                {s.topics && (
                  <div className="flex flex-wrap gap-1 pt-0.5">
                    {TOPICS.map((topic) => (
                      <span
                        key={topic}
                        className="inline-flex items-center rounded border border-border bg-background px-1.5 py-0.5 font-mono text-[9px] text-mist-700 dark:bg-mist-900 dark:text-mist-300"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* STEP 2: contenuto in streaming (solo dopo l'analisi) */}
              {s.words > 0 && (
                <div className="space-y-1.5 border-t border-border pt-2.5">
                  <p className="font-mono text-[11px] font-semibold text-foreground">
                    <span className="text-mist-400"># </span>
                    Migliori scarpe running 2026
                  </p>
                  <p className="text-[12px] leading-relaxed text-foreground/90">
                    {WORDS.slice(0, s.words).join(" ")}
                    {s.words < WORDS.length && (
                      <span
                        aria-hidden
                        className="ml-px inline-block h-3 w-px animate-blink-cursor bg-foreground align-middle"
                      />
                    )}
                  </p>
                </div>
              )}
            </div>

            <div className="flex shrink-0 items-center justify-between">
              <span className="font-mono text-[10px] tabular-nums text-mist-600 dark:text-mist-400">
                {s.imageReady
                  ? "1.850 parole · IT · Blog post"
                  : s.contentDone
                    ? "Articolo pronto · 1.850 parole"
                    : s.analysisDone
                      ? "3 competitor · 6 argomenti"
                      : "Analisi in corso…"}
              </span>

              {s.imageReady ? (
                <div
                  ref={copyRef}
                  className={cn(
                    "inline-flex h-7 items-center gap-1 rounded-full px-2.5 font-mono text-[10px] font-medium transition-transform",
                    pressKey === "copy" && "scale-95",
                    s.copied
                      ? "border border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                      : "bg-mist-950 text-mist-50 dark:bg-mist-200 dark:text-mist-950",
                  )}
                >
                  {s.copied ? (
                    <>
                      <Check className="size-2.5" strokeWidth={3} /> Copiato!
                    </>
                  ) : (
                    <>
                      <Copy className="size-2.5" /> Copia
                    </>
                  )}
                </div>
              ) : s.contentDone ? (
                <div
                  ref={imgBtnRef}
                  className={cn(
                    "inline-flex h-7 items-center gap-1 rounded-full px-2.5 font-mono text-[10px] font-medium text-white transition-transform dark:text-mist-950",
                    pressKey === "img"
                      ? "scale-95 bg-mist-800 dark:bg-mist-200"
                      : "bg-mist-950 dark:bg-mist-50",
                  )}
                >
                  <ImageIcon className="size-2.5" /> Genera immagine
                </div>
              ) : (
                <Loader2 className="size-3 animate-spin text-mist-600 dark:text-mist-400" />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
