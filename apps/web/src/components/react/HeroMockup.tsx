import { FileText, Search } from "lucide-react";

import { HeroDemo } from "./HeroDemo";

export function HeroAppMockup() {
  return (
    <div className="relative mt-8 px-4 pb-12 sm:mt-10 sm:px-6 sm:pb-16">
      {/* Pannello dipinto: la finestra galleggia sopra, stile Cursor */}
      <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[1.4rem] border border-border bg-mist-100 p-5 shadow-[var(--shadow-card)] sm:p-10 md:p-16">
        {/* Fondo floreale sfocato + velo, dietro la finestra */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[url(/img/hero-floral.webp)] bg-cover bg-center"
        />
        <div aria-hidden className="absolute inset-0 bg-[var(--color-mist-100)]/25" />
        <div className="relative z-10 w-full overflow-hidden rounded-xl border border-border bg-card shadow-[0_22px_48px_-30px_rgba(15,15,20,0.4)]">
          {/* Browser chrome */}
          <div className="flex items-center gap-3 border-b border-border bg-mist-50 px-4 py-3 dark:bg-mist-900">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-mist-300" />
              <span className="size-2.5 rounded-full bg-mist-300" />
              <span className="size-2.5 rounded-full bg-mist-300" />
            </div>
            <div className="flex min-w-0 flex-1 items-center justify-center gap-2">
              <div className="flex w-full min-w-0 max-w-sm items-center gap-1.5 rounded-md bg-card px-2.5 py-1 text-[11px] text-mist-600 dark:text-mist-400 ring-1 ring-border">
                <span className="size-1.5 shrink-0 rounded-full bg-emerald-500" />
                <span className="truncate font-mono">app.verbalist.it/nuovo</span>
              </div>
            </div>
            <div className="flex w-12" />
          </div>

          {/* Sidebar + demo */}
          <div className="flex">
            <aside className="hidden w-48 shrink-0 flex-col gap-1 border-r border-border bg-mist-50/50 p-3 sm:flex dark:bg-mist-900/30">
              <div className="mb-3 flex items-center gap-2 px-1">
                <svg
                  viewBox="0 0 29 34"
                  fill="currentColor"
                  className="h-5 w-auto text-foreground"
                  aria-hidden
                >
                  <path d="m23.77-.078-4.454 7.84-2.691 4.734-2.566 4.516-1.473 2.593-3.227 5.684-.004.004 4.704 8.281 2.945-5.18 1.762-3.101.937-1.652 4.184-7.368 4.84-8.511ZM.309 9.816l4.058 7.149 2.895 5.09 4.789-8.13-2.332-4.109Z" />
                </svg>
                <span className="text-xs font-medium text-foreground">
                  Verbalist
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] font-medium text-mist-600 dark:text-mist-400">
                <FileText className="size-3" />
                Documenti
              </div>
              <div className="flex items-center gap-2 rounded-md bg-mist-950 px-2 py-1.5 text-[11px] font-medium text-white dark:bg-mist-50 dark:text-mist-950">
                <Search className="size-3" />
                Progetti
              </div>
              <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] font-medium text-mist-600 dark:text-mist-400">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="size-3"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
                Impostazioni
              </div>
            </aside>

            <HeroDemo />
          </div>
        </div>

        {/* Card-comando galleggiante (stile Cursor): profondità + l'input del flusso */}
        <div className="absolute bottom-5 right-5 z-20 hidden w-[17.5rem] rounded-xl border border-border bg-card p-4 shadow-[0_28px_60px_-24px_rgba(15,15,20,0.5)] sm:block md:bottom-8 md:right-8">
          <span className="font-mono text-[11px] uppercase tracking-wider text-mist-600 dark:text-mist-400">
            Nuovo contenuto
          </span>
          <div className="mt-2.5 flex items-center gap-2 rounded-lg border border-border bg-mist-50 px-3 py-2.5 dark:bg-mist-900/50">
            <Search
              className="size-4 shrink-0 text-mist-500"
              strokeWidth={2}
              aria-hidden
            />
            <span className="flex-1 truncate text-sm font-medium text-foreground">
              scarpe running 2026
            </span>
            <kbd className="shrink-0 rounded border border-border bg-card px-1.5 font-mono text-[10px] text-mist-500">
              ↵
            </kbd>
          </div>
          <p className="mt-2.5 text-[11px] leading-tight text-mist-600 dark:text-mist-400">
            Analizza la SERP e scrive l'articolo
          </p>
          <p className="mt-1 font-mono text-[11px] text-mist-500">
            IT · tono professionale
          </p>
        </div>
      </div>
    </div>
  );
}
