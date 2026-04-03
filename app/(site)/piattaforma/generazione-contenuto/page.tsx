import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { BentoGrid } from "@/components/bento-grid"


export const metadata: Metadata = {
  title: "Generazione contenuti AI",
  description: "Genera contenuti SEO con AI basandosi sui pattern dei risultati Google. Title, meta description, struttura heading e testo ottimizzato. Pronto per pubblicare.",
  alternates: {
    canonical: "/piattaforma/generazione-contenuto",
  },
  openGraph: {
    title: "Generazione contenuti AI \\ Verbalist",
    description: "Genera contenuti SEO con AI basandosi sui pattern dei risultati Google. Title, meta description, struttura heading e testo ottimizzato. Pronto per pubblicare.",
  },
}

function SeoMetadataIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="space-y-2">
        {[60, 90, 45].map((w, i) => (
          <div key={i} className="rounded-lg bg-background p-3">
            <div className="h-1.5 rounded bg-foreground/15" style={{ width: `${w}%` }} />
            <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-foreground/6">
              <div className="h-full rounded-full bg-foreground/20" style={{ width: `${w}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ToneIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="grid grid-cols-2 gap-2">
          {[true, false, false, false].map((active, i) => (
            <div key={i} className={`h-8 rounded-md ${active ? "bg-foreground" : "bg-foreground/6"}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

function FourFormatsIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="grid grid-cols-2 gap-2">
          <div className="h-10 rounded-md bg-foreground/20" />
          <div className="h-10 rounded-md bg-foreground/8" />
          <div className="h-10 rounded-md bg-foreground/8" />
          <div className="h-10 rounded-md bg-foreground/8" />
        </div>
      </div>
    </div>
  )
}

function OptimizeExistingIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2">
          <div className="rounded-md bg-foreground/8 p-2.5">
            <div className="space-y-1.5">
              <div className="h-1.5 w-3/4 rounded bg-foreground/10" />
              <div className="h-1.5 w-full rounded bg-foreground/6" />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="h-4 w-0.5 rounded bg-foreground/15" />
          </div>
          <div className="rounded-md bg-foreground/12 p-2.5">
            <div className="space-y-1.5">
              <div className="h-1.5 w-3/4 rounded bg-foreground/25" />
              <div className="h-1.5 w-full rounded bg-foreground/15" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ExportReadyIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="rounded-md bg-foreground/6 p-3">
          <div className="space-y-2">
            <div className="h-2 w-1/2 rounded bg-foreground/20" />
            <div className="h-1.5 w-full rounded bg-foreground/10" />
            <div className="h-1.5 w-4/5 rounded bg-foreground/10" />
            <div className="h-1.5 w-full rounded bg-foreground/10" />
            <div className="h-1.5 w-2/3 rounded bg-foreground/10" />
          </div>
          <div className="mt-3 flex justify-center">
            <div className="h-1.5 w-6 rounded bg-foreground/20" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function GenerazioneContenutoPage() {
  return (
    <>
      <SubPageHero
        label="Generazione"
        title="Scrivi un articolo basato su cosa funziona"
        description="Genera title, meta, heading e testo partendo dai pattern dei risultati Google."
      />

      <BentoGrid
        items={[
          {
            title: "SEO metadata perfetti",
            description: "Genera title tag, meta description e URL slug ottimizzati. Basati sui pattern che funzionano nei risultati di ricerca.",
            visual: <SeoMetadataIllustration />,
          },
          {
            title: "Il tuo tono di voce",
            description: "Scegli lo stile: professionale, informale, tecnico, divulgativo. Ogni contenuto rispetta le linee guida del tuo brand.",
            visual: <ToneIllustration />,
          },
          {
            title: "Quattro formati",
            description: "Blog post, pagina prodotto, guida e landing page. Struttura specifica ottimizzata per ogni formato.",
            visual: <FourFormatsIllustration />,
          },
          {
            title: "Ottimizza contenuti esistenti",
            description: "Carica un URL, un testo o un PDF. Verbalist lo confronta con i competitor e genera la versione migliorata.",
            visual: <OptimizeExistingIllustration />,
          },
          {
            title: "Export pronto",
            description: "Markdown e HTML con heading, paragrafi e meta tag già formattati. Copia o scarica, pronto da pubblicare.",
            visual: <ExportReadyIllustration />,
          },
        ]}
      />

      <SubPageCTA />
    </>
  )
}
