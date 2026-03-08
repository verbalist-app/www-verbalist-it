import { HeroSection } from "@/components/hero-section"
import LogoCloud from "@/components/logo-cloud-1"
import Features from "@/components/features-ten"
import FAQs from "@/components/faqs-3"
import Testimonials from "@/components/testimonials-4"
import { SubPageCTA } from "@/components/sub-page-cta"

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoCloud className="border-t" />
      <Features className="border-t" />
      <Testimonials />
      <FAQs className="border-t" />
      <SubPageCTA
        className="border-t"
        secondaryCta={{ text: "Inizia ora", href: "https://app.verbalist.it" }}
      />
    </>
  )
}
