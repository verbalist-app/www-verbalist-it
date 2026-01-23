import { Bot, Sparkles, Quote, Shield } from "lucide-react"
import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { TrustedBy } from "@/components/trusted-by"
import { FeatureChecklist } from "@/components/feature-checklist"
import { HighlightBlock } from "@/components/highlight-block"

export const metadata: Metadata = {
  title: "GEO e AEO Optimization | Verbalist",
  description: "Ottimizza i contenuti per AI Overview, ChatGPT e Perplexity. Generative Engine Optimization (GEO) e Answer Engine Optimization (AEO) con dati SERP.",
  alternates: {
    canonical: "/soluzioni/ai-strategist",
  },
  openGraph: {
    title: "GEO e AEO Optimization — Verbalist",
    description: "Ottimizza i contenuti per AI Overview, ChatGPT e Perplexity. Generative Engine Optimization (GEO) e Answer Engine Optimization (AEO) con dati SERP.",
  },
}

const featureColumns = [
  {
    items: [
      "Analisi segnali E-E-A-T",
      "Pattern di citabilità",
      "Struttura per featured snippet",
      "Definizioni chiare e citabili",
    ],
  },
  {
    items: [
      "Topic coverage completo",
      "Subtopic per depth",
      "FAQ schema-ready",
      "Contenuto strutturato",
    ],
  },
  {
    items: [
      "Trust patterns dai competitor",
      "Fonti e riferimenti",
      "Author expertise signals",
      "Freshness indicators",
    ],
  },
]

function EEATIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-3">
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <div className="text-xs font-medium text-muted-foreground mb-3">Segnali E-E-A-T rilevati</div>
          <div className="space-y-2">
            {[
              { signal: "Author bio presente", found: 8 },
              { signal: "Fonti citate", found: 7 },
              { signal: "Data aggiornamento", found: 9 },
              { signal: "Credenziali esplicite", found: 5 },
            ].map((item) => (
              <div key={item.signal} className="flex items-center justify-between text-xs">
                <span>{item.signal}</span>
                <span className="text-muted-foreground">{item.found}/10 competitor</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function CitabilityIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-3">
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <div className="text-xs font-medium text-muted-foreground mb-2">Struttura citabile</div>
          <div className="space-y-2 text-xs">
            <div className="p-2 rounded bg-muted">
              <span className="font-medium">Definizione:</span> Frase chiara e concisa
            </div>
            <div className="p-2 rounded bg-muted">
              <span className="font-medium">Come funziona:</span> Step numerati
            </div>
            <div className="p-2 rounded bg-muted">
              <span className="font-medium">FAQ:</span> Domanda → Risposta diretta
            </div>
          </div>
          <div className="mt-3 text-[10px] text-muted-foreground">
            Pattern che gli LLM citano facilmente
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AIStrategistPage() {
  return (
    <>
      <SubPageHero
        label="AI Strategist"
        title="Contenuti ottimizzati per essere citati dagli LLM"
        description="Analisi E-E-A-T, pattern di citabilità e strutture per AI Overview, ChatGPT e Perplexity."
      />

      <TrustedBy />

      <FeatureChecklist
        title="Ottimizzazione per motori generativi"
        description="Non solo Google. Contenuti pensati per essere citati da ChatGPT, Perplexity, Gemini e AI Overview."
        columns={featureColumns}
      />

      <HighlightBlock
        icon={Shield}
        title="Segnali E-E-A-T dai competitor"
        description="Verbalist analizza quali segnali di autorevolezza usano i contenuti meglio posizionati: author bio, fonti citate, credenziali, date di aggiornamento. Li trovi nel report per replicarli."
        visual={<EEATIllustration />}
      />

      <HighlightBlock
        icon={Quote}
        title="Struttura che gli LLM citano"
        description="Definizioni chiare, step numerati, FAQ con risposte dirette. Verbalist genera bozze con strutture che i modelli linguistici possono estrarre e citare facilmente."
        visual={<CitabilityIllustration />}
        reverse
      />

      <SubPageCTA />
    </>
  )
}
