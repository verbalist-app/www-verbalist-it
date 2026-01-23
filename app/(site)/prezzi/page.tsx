import Link from "next/link"
import { Check, ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Prezzi Strumento SEO | Piani da €49/mese",
  description: "Scegli il piano Verbalist: Starter €49, Professional €149, Enterprise custom. Prova gratuita 14 giorni, nessun vincolo. Analisi SERP e contenuti AI.",
  alternates: {
    canonical: "/prezzi",
  },
  openGraph: {
    title: "Prezzi Strumento SEO — Verbalist",
    description: "Scegli il piano Verbalist: Starter €49, Professional €149, Enterprise custom. Prova gratuita 14 giorni, nessun vincolo.",
  },
}

const plans = [
  {
    name: "Starter",
    description: "Per freelancer e piccoli progetti",
    price: "49",
    period: "/mese",
    features: [
      "10 contenuti al mese",
      "Analisi SERP base",
      "1 progetto",
      "Supporto email",
    ],
    cta: "Inizia gratis",
    href: "/contatti",
    highlighted: false,
  },
  {
    name: "Professional",
    description: "Per team SEO e agenzie in crescita",
    price: "149",
    period: "/mese",
    features: [
      "50 contenuti al mese",
      "Analisi SERP avanzata",
      "5 progetti",
      "Scraping competitor",
      "Analisi pattern",
      "Supporto prioritario",
    ],
    cta: "Inizia ora",
    href: "/contatti",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "Per grandi organizzazioni",
    price: "Custom",
    period: "",
    features: [
      "Contenuti illimitati",
      "Tutte le funzionalità",
      "Progetti illimitati",
      "API access",
      "Account manager dedicato",
      "SLA garantito",
    ],
    cta: "Contattaci",
    href: "/contatti",
    highlighted: false,
  },
]

export default function PrezziPage() {
  return (
    <section className="pt-20 md:pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="size-4" />
          Torna alla Home
        </Link>
        <div className="text-center mb-16">
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Piani
          </p>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Prezzi
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Tre piani. Prova gratis per 14 giorni. Nessun vincolo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-foreground text-background ring-2 ring-foreground"
                  : "bg-muted border border-border"
              }`}
            >
              <div className="mb-6">
                <h3 className={`text-lg font-medium mb-2 ${plan.highlighted ? "text-background" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? "text-background/70" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className={`text-4xl font-medium ${plan.highlighted ? "text-background" : "text-foreground"}`}>
                  {plan.price === "Custom" ? "" : "€"}{plan.price}
                </span>
                <span className={`text-sm ${plan.highlighted ? "text-background/70" : "text-muted-foreground"}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={`size-5 shrink-0 ${plan.highlighted ? "text-background" : "text-foreground"}`} />
                    <span className={`text-sm ${plan.highlighted ? "text-background/80" : "text-muted-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`block w-full text-center py-3 px-6 rounded-lg text-sm font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-background text-foreground hover:bg-background/90"
                    : "bg-foreground text-background hover:bg-foreground/90"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Serve aiuto? <Link href="/contatti" className="text-foreground hover:underline font-medium">Scrivici</Link>.
          </p>
        </div>
      </div>
    </section>
  )
}
