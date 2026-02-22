import { HeroSection } from "@/components/hero-section"
import LogoCloud from "@/components/logo-cloud-1"
import Features from "@/components/features-ten"
import FAQs from "@/components/faqs-3"
import Testimonials from "@/components/testimonials-4"
import CallToAction from "@/components/call-to-action-1"

export default function Home() {
  return (
    <>
      <HeroSection showHeader={false} />
      <LogoCloud className="border-t" />
      <Features className="border-t" />
      <Testimonials className="border-t" />
      <FAQs className="border-t" />
      <CallToAction className="border-t" />
    </>
  )
}
