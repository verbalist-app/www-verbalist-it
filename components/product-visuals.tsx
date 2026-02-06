import { cn } from "@/lib/utils"

// Visualizzazione Analisi SERP - Recupero top 10 risultati Google
export function SerpAnalysisVisual() {
  const results = [
    { position: 1, title: "Guida alla scelta del materasso: consigli esperti", domain: "materassi.it", wordCount: "2.847" },
    { position: 2, title: "Come scegliere il materasso perfetto per te", domain: "dormire-bene.com", wordCount: "2.134" },
    { position: 3, title: "Materassi: guida completa all'acquisto 2024", domain: "consumatori.it", wordCount: "3.201" },
    { position: 4, title: "Quale materasso comprare? La guida definitiva", domain: "casa-salute.it", wordCount: "1.956" },
    { position: 5, title: "Scegliere il materasso giusto: 10 fattori chiave", domain: "espertoriposo.it", wordCount: "2.412" },
  ]

  return (
    <div className="h-full bg-white p-6 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-[11px] text-neutral-400 uppercase tracking-wider mb-1">Keyword</div>
          <div className="text-sm font-medium text-neutral-900">&quot;come scegliere un materasso&quot;</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-[12px] text-neutral-500">SERP recuperata</span>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-2">
        {results.map((result) => (
          <div
            key={result.position}
            className="flex items-center gap-3 p-3 rounded-lg border bg-neutral-50 border-neutral-200"
          >
            <div className="w-6 h-6 rounded bg-neutral-200 flex items-center justify-center text-[12px] font-medium text-neutral-600">
              {result.position}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-medium text-neutral-900 truncate">{result.title}</div>
              <div className="text-[11px] text-neutral-500">{result.domain}</div>
            </div>
            <div className="text-[11px] text-neutral-500 text-right">
              <span>{result.wordCount} parole</span>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-4 pt-4 border-t border-neutral-100 text-[12px] text-neutral-500">
        <span className="text-neutral-900 font-medium">5 competitor</span> analizzati · Media{" "}
        <span className="text-neutral-900 font-medium">2.510 parole</span>
      </div>
    </div>
  )
}

// Visualizzazione Scraping Competitor - Estrazione contenuti competitor
export function ScrapingVisual() {
  const pages = [
    {
      domain: "materassi.it",
      headings: ["H1: Guida alla scelta del materasso", "H2: Tipologie di materasso", "H2: Materiali e composizione", "H2: Dimensioni e misure"],
      words: "2.847",
    },
    {
      domain: "dormire-bene.com",
      headings: ["H1: Come scegliere il materasso", "H2: Per chi dorme di lato", "H2: Budget e fascia di prezzo", "H2: FAQ"],
      words: "2.134",
    },
    {
      domain: "consumatori.it",
      headings: ["H1: Guida completa all'acquisto", "H2: Tipologie a confronto", "H2: Consigli degli esperti", "H2: Prezzi e offerte"],
      words: "3.201",
    },
  ]

  return (
    <div className="h-full bg-white p-6 overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <div className="text-[11px] text-neutral-400 uppercase tracking-wider">Scraping competitor</div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-[12px] text-neutral-500">Estrazione completata</span>
        </div>
      </div>

      <div className="space-y-3">
        {pages.map((page) => (
          <div
            key={page.domain}
            className="rounded-lg border p-3 border-neutral-200 bg-neutral-50"
          >
            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-neutral-100">
              <div className="flex gap-0.5">
                <div className="size-1.5 rounded-full bg-red-400" />
                <div className="size-1.5 rounded-full bg-yellow-400" />
                <div className="size-1.5 rounded-full bg-green-400" />
              </div>
              <span className="text-[11px] text-neutral-500">{page.domain}</span>
              <span className="ml-auto text-[10px] text-neutral-400">{page.words} parole</span>
            </div>
            <div className="space-y-0.5">
              {page.headings.map((h, i) => (
                <div
                  key={i}
                  className={cn(
                    "text-[11px]",
                    h.startsWith("H1") ? "text-neutral-900 font-medium" : "text-neutral-500 pl-3"
                  )}
                >
                  {h}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-neutral-100 text-[12px] text-neutral-500">
        <span className="text-neutral-900 font-medium">3 pagine</span> estratte · Convertite in{" "}
        <span className="text-neutral-900 font-medium">Markdown</span>
      </div>
    </div>
  )
}

// Visualizzazione Pattern Detection - Analisi AI dei contenuti competitor
export function PatternDetectionVisual() {
  const metrics = [
    { label: "Word Count", value: "2.510", detail: "media" },
    { label: "Heading H2", value: "7", detail: "media" },
    { label: "Search Intent", value: "Informational", detail: "dominante" },
    { label: "E-E-A-T", value: "Alto", detail: "segnali" },
  ]

  const commonTopics = [
    { name: "Tipologie di materasso", frequency: "5/5" },
    { name: "Materiali e composizione", frequency: "5/5" },
    { name: "Guida alla scelta per esigenze", frequency: "4/5" },
    { name: "Dimensioni e misure", frequency: "4/5" },
    { name: "Fascia di prezzo", frequency: "3/5" },
  ]

  const typicalStructure = [
    "H1: Titolo con keyword",
    "H2: Tipologie di materasso",
    "H2: Come scegliere",
    "H2: Materiali",
    "H2: FAQ",
  ]

  return (
    <div className="h-full bg-white p-6 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-[11px] text-neutral-400 uppercase tracking-wider">Pattern identificati</div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-[12px] text-neutral-500">Analisi AI</span>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-4 gap-2 mb-5">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="p-2.5 rounded-lg border bg-neutral-50 border-neutral-200"
          >
            <div className="text-[10px] uppercase tracking-wider mb-1 text-neutral-500">
              {metric.label}
            </div>
            <div className="text-[16px] font-medium text-neutral-900">
              {metric.value}
            </div>
            <div className="text-[10px] text-neutral-500">
              {metric.detail}
            </div>
          </div>
        ))}
      </div>

      {/* Two columns: Topics + Structure */}
      <div className="grid grid-cols-2 gap-4">
        {/* Topic comuni */}
        <div>
          <div className="text-[11px] text-neutral-400 uppercase tracking-wider mb-2">Topic ricorrenti</div>
          <div className="space-y-1.5">
            {commonTopics.map((topic) => (
              <div key={topic.name} className="flex items-center justify-between text-[12px]">
                <span className="text-neutral-700 truncate">{topic.name}</span>
                <span className="text-neutral-400 ml-2">{topic.frequency}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Struttura tipica */}
        <div>
          <div className="text-[11px] text-neutral-400 uppercase tracking-wider mb-2">Struttura heading</div>
          <div className="space-y-1.5">
            {typicalStructure.map((heading, idx) => (
              <div key={idx} className="text-[12px] text-neutral-700">
                {heading}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Visualizzazione Generazione Contenuto - Output finale AI
export function ContentGenerationVisual() {
  const sections = [
    { type: "seo", label: "Title Tag", content: "Come Scegliere un Materasso: Guida Completa 2024" },
    { type: "seo", label: "Meta Description", content: "Scopri come scegliere il materasso perfetto: tipologie, materiali, dimensioni e consigli per ogni esigenza. Guida aggiornata con prezzi." },
    { type: "seo", label: "Slug", content: "come-scegliere-materasso-guida" },
    { type: "content", label: "H1", content: "Come Scegliere un Materasso: La Guida Definitiva" },
  ]

  return (
    <div className="h-full bg-white p-6 overflow-hidden">
      {/* Progress */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-[12px] text-neutral-500">Generazione completata</span>
        </div>
        <div className="flex gap-1">
          {sections.map((_, idx) => (
            <div
              key={idx}
              className="w-8 h-1 rounded-full bg-neutral-900"
            />
          ))}
        </div>
      </div>

      {/* All Sections Completed */}
      <div className="space-y-2">
        {sections.map((section, idx) => (
          <div key={idx} className="flex items-start gap-2 p-2 rounded bg-green-50 border border-green-200">
            <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <div className="text-[10px] text-green-700 font-medium uppercase">{section.label}</div>
              <div className="text-[12px] text-green-900 truncate max-w-xs">{section.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
