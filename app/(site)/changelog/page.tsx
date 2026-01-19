import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type ChangelogEntry = {
  version: string
  date: string
  title: string
  description: string
  items?: string[]
  image?: string
  button?: {
    url: string
    text: string
  }
}

const changelogEntries: ChangelogEntry[] = [
  {
    version: "v1.3.0",
    date: "15 Gennaio 2026",
    title: "Analisi E-E-A-T Avanzata",
    description:
      "Ora puoi analizzare i segnali E-E-A-T dei competitor. Vedi cosa manca ai tuoi contenuti rispetto a chi ranka.",
    items: [
      "Scoring automatico dei segnali E-E-A-T",
      "Trova gli elementi di trust che ti mancano",
      "Suggerimenti pratici per migliorare",
      "Confronto diretto con i top performer",
    ],
  },
  {
    version: "v1.2.0",
    date: "8 Dicembre 2025",
    title: "Multi-Format Export",
    description:
      "Esporta contenuti e analisi in più formati. Markdown, JSON, plain text. Integrazione con Google Docs.",
    items: [
      "Export in Markdown, JSON e plain text",
      "Template personalizzabili",
      "Integrazione con Google Docs",
      "Download batch di più analisi insieme",
    ],
  },
  {
    version: "v1.1.0",
    date: "20 Novembre 2025",
    title: "Analisi Pattern Migliorata",
    description:
      "Nuove metriche e visualizzazioni nell'analisi pattern. Più facile capire cosa funziona in SERP.",
    items: [
      "Word count distribution con range ottimale",
      "Analisi heading più dettagliata",
      "Topic gap analysis",
      "Scoring competitivo con metriche comparative",
    ],
  },
  {
    version: "v1.0.0",
    date: "1 Ottobre 2025",
    title: "Lancio Verbalist",
    description:
      "Prima release. Da keyword a contenuto SEO in 4 step. Analisi SERP, Scraping, Pattern Detection, Generazione.",
    items: [
      "Analisi SERP top 10 risultati Google",
      "Scraping automatico contenuti competitor",
      "Conversione HTML to Markdown",
      "Generazione contenuti SEO-ready",
    ],
    button: {
      url: "/piattaforma",
      text: "Vedi le funzionalità",
    },
  },
]

export default function ChangelogPage() {
  return (
    <section className="pt-32 pb-24 md:pb-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Aggiornamenti
          </p>
          <h1 className="mb-4 text-3xl font-medium tracking-tight md:text-4xl">
            Changelog
          </h1>
          <p className="mb-6 text-base text-muted-foreground leading-relaxed">
            Novità e aggiornamenti della piattaforma.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-3xl space-y-16 md:mt-20 md:space-y-20">
          {changelogEntries.map((entry, index) => (
            <div
              key={index}
              className="relative flex flex-col gap-4 md:flex-row md:gap-16"
            >
              <div className="top-32 flex h-min w-64 shrink-0 items-center gap-4 md:sticky">
                <Badge variant="secondary" className="text-xs">
                  {entry.version}
                </Badge>
                <span className="text-xs font-medium text-muted-foreground">
                  {entry.date}
                </span>
              </div>
              <div className="flex flex-col">
                <h2 className="mb-3 text-lg font-medium leading-tight text-foreground md:text-xl">
                  {entry.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {entry.description}
                </p>
                {entry.items && entry.items.length > 0 && (
                  <ul className="mt-4 ml-4 space-y-1.5 text-sm text-muted-foreground">
                    {entry.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {entry.image && (
                  <img
                    src={entry.image}
                    alt={`${entry.version} visual`}
                    className="mt-8 w-full rounded-lg object-cover"
                  />
                )}
                {entry.button && (
                  <Button variant="link" className="mt-4 self-start px-0" asChild>
                    <a href={entry.button.url}>
                      {entry.button.text} <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
