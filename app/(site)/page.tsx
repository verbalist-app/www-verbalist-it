import { HeroSection } from "@/components/hero-section"
import { TrustedBy } from "@/components/trusted-by"
import { FeaturesSection } from "@/components/features-section"
import { StatsBar } from "@/components/stats-bar"
import { Testimonials } from "@/components/testimonials"
import { SubPageCTA } from "@/components/sub-page-cta"

const homeTestimonials = [
  {
    quote: "Verbalist ci permette di creare contenuti strutturati per la ricerca AI senza dover costruire un intero framework GEO interno.",
    metric: "+180%",
    author: "Marco Rossi",
    role: "Marketing Manager",
    company: "PMI Manifatturiera",
  },
  {
    quote: "Prima passavamo ore ad analizzare i competitor manualmente. Ora il processo è completamente automatizzato e i contenuti sono pronti per gli LLM.",
    metric: "10x più veloce",
    author: "Laura Bianchi",
    role: "Content Creator",
    company: "Freelance",
  },
  {
    quote: "I nostri clienti ci chiedevano visibilità su ChatGPT e Perplexity. Con Verbalist possiamo offrire contenuti GEO-ready senza costi proibitivi.",
    metric: "12 clienti",
    author: "Giuseppe Verdi",
    role: "Digital Consultant",
    company: "Web Agency",
  },
]

export default function Home() {
  return (
    <>
      <HeroSection showHeader={false} />
      <TrustedBy text="Scelto da agenzie, freelancer e PMI in Italia e all'estero" />
      <FeaturesSection className="border-t" />
      <StatsBar
        stats={[
          { value: "10 risultati", label: "SERP analizzati per keyword" },
          { value: "< 3 min", label: "Da keyword a contenuto GEO-ready" },
          { value: "4 modelli AI", label: "Selezionabili per generazione" },
          { value: "LLM-ready", label: "Contenuti strutturati per la ricerca AI" },
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
