import { HeroSection } from "@/components/hero-section"
import { TrustedBy } from "@/components/trusted-by"
import { FeaturesSection } from "@/components/features-section"
import { StatsBar } from "@/components/stats-bar"
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
    quote: "I contenuti generati arrivano in prima pagina nel 70% dei casi. Un ROI incredibile per il nostro team.",
    metric: "70%",
    author: "Giuseppe Verdi",
    role: "SEO Specialist",
    company: "Tech Startup",
  },
]

export default function Home() {
  return (
    <>
      <HeroSection showHeader={false} />
      <TrustedBy text="Scelto da team SEO e agenzie in Italia e all'estero" />
      <FeaturesSection className="border-t" />
      <StatsBar
        stats={[
          { value: "10 risultati", label: "SERP analizzati per keyword" },
          { value: "< 3 min", label: "Da keyword ad articolo completo" },
          { value: "4 modelli AI", label: "Selezionabili per generazione" },
          { value: "100%", label: "Basato su dati SERP reali" },
        ]}
      />
      <Testimonials
        title="Cosa dicono i nostri clienti"
        testimonials={homeTestimonials}
      />
      <SubPageCTA />
    </>
  )
}
