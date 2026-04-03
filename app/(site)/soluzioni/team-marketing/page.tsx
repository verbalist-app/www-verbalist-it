import type { Metadata } from "next"
import { SubPageHero } from "@/components/sub-page-hero"
import { SubPageCTA } from "@/components/sub-page-cta"
import { BentoGrid } from "@/components/bento-grid"

export const metadata: Metadata = {
  title: "Contenuti GEO per Content Creator",
  description: "Bozze strutturate per blog, landing page e guide, ottimizzate per Google e la ricerca AI. Tono di voce personalizzabile, output pronto da rifinire.",
  alternates: {
    canonical: "/soluzioni/team-marketing",
  },
  openGraph: {
    title: "Contenuti GEO per Content Creator \\ Verbalist",
    description: "Bozze strutturate per blog, landing page e guide, ottimizzate per Google e la ricerca AI. Tono di voce personalizzabile, output pronto da rifinire.",
  },
}

function DraftIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-3">
          <div className="h-2 w-3/5 rounded bg-foreground/20" />
          <div className="space-y-1.5">
            <div className="h-1.5 w-full rounded bg-foreground/8" />
            <div className="h-1.5 w-11/12 rounded bg-foreground/8" />
            <div className="h-1.5 w-4/5 rounded bg-foreground/8" />
          </div>
          <div className="h-2 w-2/5 rounded bg-foreground/15" />
          <div className="space-y-1.5">
            <div className="h-1.5 w-full rounded bg-foreground/8" />
            <div className="h-1.5 w-3/4 rounded bg-foreground/8" />
          </div>
        </div>
      </div>
    </div>
  )
}

function ToneVoiceIllustration() {
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

function ExportIterateIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="space-y-2">
          {[true, false, false].map((active, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className={`size-2 shrink-0 rounded-full ${active ? "bg-foreground" : "bg-foreground/15"}`} />
              <div className={`h-1.5 flex-1 rounded ${active ? "bg-foreground/15" : "bg-foreground/6"}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function RealDataIllustration() {
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="rounded-lg bg-background p-4">
        <div className="flex items-end gap-2">
          {[40, 70, 55, 85, 65, 45].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded bg-foreground/12"
              style={{ height: `${h}%`, minHeight: `${h * 0.5}px` }}
            />
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

export default function TeamMarketingPage() {
  return (
    <>
      <SubPageHero
        label="Content Creator"
        title="Ricevi una bozza gia strutturata"
        description="L'analisi e la struttura le fa Verbalist. Tu dai il tono di voce e pubblichi."
      />

      <BentoGrid
        items={[
          {
            title: "Bozze strutturate",
            description: "Heading, paragrafi e meta tag basati sui pattern che funzionano. Blog post, landing page e guide.",
            visual: <DraftIllustration />,
          },
          {
            title: "Tono di voce",
            description: "Professionale, informale, tecnico o divulgativo. Ogni bozza rispetta il tuo stile e le linee guida del brand.",
            visual: <ToneVoiceIllustration />,
          },
          {
            title: "Export e iterazione",
            description: "Export in Markdown e HTML. Storico documenti per ogni progetto. Rifinisci, itera e pubblica.",
            visual: <ExportIterateIllustration />,
          },
          {
            title: "Basato su dati reali",
            description: "Non inventa: analizza cosa funziona nei risultati Google e costruisce il contenuto su quei pattern.",
            visual: <RealDataIllustration />,
          },
          {
            title: "Quattro formati",
            description: "Blog post, pagina prodotto, guida e landing page. Scegli il formato, genera la bozza strutturata.",
            visual: <FourFormatsIllustration />,
          },
        ]}
      />

      <SubPageCTA />
    </>
  )
}
