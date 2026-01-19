import { HeroSection } from "@/components/hero-section"
import { TrustedBy } from "@/components/trusted-by"
import { FeatureChecklist } from "@/components/feature-checklist"
import { FeaturesSection } from "@/components/features-section"
import { IncentivesSection } from "@/components/incentives-section"
import { Testimonials } from "@/components/testimonials"
import { SubPageCTA } from "@/components/sub-page-cta"

const homeTestimonials = [
  {
    quote: "Verbalist ha cambiato il modo in cui creiamo contenuti. Finalmente una piattaforma che parte dai dati SERP reali.",
    metric: "+180%",
    author: "Marco Rossi",
    role: "Head of SEO",
    company: "Digital Agency",
  },
  {
    quote: "Prima passavamo ore ad analizzare i competitor manualmente. Ora il processo è completamente automatizzato.",
    metric: "10x più veloce",
    author: "Laura Bianchi",
    role: "Content Manager",
    company: "E-commerce Brand",
  },
  {
    quote: "I contenuti generati rankano in prima pagina nel 70% dei casi. Un ROI incredibile per il nostro team.",
    metric: "70%",
    author: "Giuseppe Verdi",
    role: "SEO Specialist",
    company: "Tech Startup",
  },
]

const homeFeatures = [
  {
    items: [
      "Analisi SERP automatica",
      "Scraping contenuti competitor",
      "Pattern detection AI",
    ],
  },
  {
    items: [
      "Generazione contenuti SEO",
      "Ottimizzato per AEO e GEO",
      "Basato su dati reali",
    ],
  },
]

export default function Home() {
  return (
    <>
      <HeroSection showHeader={false} />
      <TrustedBy text="Scelto da team SEO e agenzie in Italia e all'estero" />
      <FeatureChecklist
        title="Una piattaforma per creare contenuti che rankano"
        columns={homeFeatures}
      />
      <FeaturesSection className="border-t" />
      <IncentivesSection className="border-t" />
      <Testimonials
        title="Cosa dicono i nostri clienti"
        testimonials={homeTestimonials}
      />
      <SubPageCTA />
    </>
  )
}
