import Link from "next/link"
import type { Metadata } from "next"
import { BreadcrumbSchema } from "@/components/schema"
import { PricingToggle, type PricingPlan } from "@/components/pricing-toggle"

export const metadata: Metadata = {
  title: "Prezzi e Piani",
  description: "Scegli il piano Verbalist: Starter €49, Professional €149, Enterprise custom. Prova gratuita 14 giorni, nessun vincolo. Analisi SERP e contenuti AI.",
  alternates: {
    canonical: "/prezzi",
  },
  openGraph: {
    title: "Prezzi Strumento SEO \\ Verbalist",
    description: "Scegli il piano Verbalist: Starter €49, Professional €149, Enterprise custom. Prova gratuita 14 giorni, nessun vincolo.",
  },
}

const plans: PricingPlan[] = [
  {
    name: "Starter",
    description: "Per freelancer e piccoli progetti",
    monthlyPrice: "49",
    annualPrice: "39",
    period: "/mese",
    annualNote: "fatturato annualmente",
    features: [
      "10 contenuti al mese",
      "Analisi SERP base",
      "1 progetto",
      "Supporto email",
    ],
    cta: "Inizia gratis",
    href: "/prenota-demo",
    highlighted: false,
  },
  {
    name: "Professional",
    description: "Per team SEO e agenzie in crescita",
    monthlyPrice: "149",
    annualPrice: "119",
    period: "/mese",
    annualNote: "fatturato annualmente",
    features: [
      "50 contenuti al mese",
      "Analisi SERP avanzata",
      "5 progetti",
      "Scraping competitor",
      "Analisi pattern",
      "Supporto prioritario",
    ],
    cta: "Inizia ora",
    href: "/prenota-demo",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "Per grandi organizzazioni",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    period: "",
    annualNote: "",
    features: [
      "Contenuti illimitati",
      "Tutte le funzionalità",
      "Progetti illimitati",
      "API access",
      "Account manager dedicato",
      "SLA garantito",
    ],
    cta: "Contattaci",
    href: "/prenota-demo",
    highlighted: false,
  },
]

export default function PrezziPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Prezzi", url: "/prezzi" },
        ]}
      />
      <section className="pt-20 md:pt-28 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Prezzi
            </p>
            <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
              Prezzi semplici, risultati concreti
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Inizia con 14 giorni gratis. Upgrade quando serve. Nessun costo nascosto, nessun vincolo.
            </p>
          </div>

          <PricingToggle
            plans={plans}
            monthlyLabel="Mensile"
            annualLabel="Annuale"
            saveBadge="Risparmia 20%"
            helpText={
              <p className="text-sm text-muted-foreground">
                Serve aiuto? <Link href="/prenota-demo" className="text-foreground hover:underline font-medium">Scrivici</Link>.
              </p>
            }
          />
        </div>
      </section>
    </>
  )
}
