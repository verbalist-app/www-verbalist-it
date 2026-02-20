import Link from "next/link"
import type { Metadata } from "next"
import { Check, ArrowRight } from "lucide-react"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Pricing",
  description: "Verbalist: 300 credits for €3,000 + VAT. Extra credits at €35 each. Book a demo for custom plans.",
  alternates: {
    canonical: "/en/pricing",
  },
}

const features = [
  "Up to 300 credits",
  "Advanced SERP analysis",
  "Competitor scraping",
  "Pattern analysis",
  "AI content generation",
  "Dedicated support",
]

export default function PricingPage() {
  return (
    <section className="pt-20 md:pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <PageBreadcrumb
          items={[
            { label: "Home", href: "/en" },
            { label: "Pricing" },
          ]}
        />
        <div className="text-center mb-16">
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Pricing
          </p>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tighter mb-4">
            One plan, everything included
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Access all Verbalist features with a single, transparent plan.
          </p>
        </div>

        {/* Single plan card */}
        <div className="rounded-xl bg-foreground text-background ring-2 ring-foreground p-8 md:p-10 max-w-lg mx-auto">
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2 text-background">
              Verbalist
            </h3>
            <p className="text-sm text-background/70">
              Full platform access
            </p>
          </div>

          <div className="mb-2">
            <span className="text-4xl font-medium text-background">
              €3,000
            </span>
            <span className="text-sm text-background/70 ml-1">
              + VAT
            </span>
          </div>
          <p className="text-sm text-background/50 mb-6">
            up to 300 credits included
          </p>

          <ul className="space-y-3 mb-8">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check className="size-5 shrink-0 text-background" />
                <span className="text-sm text-background/80">{feature}</span>
              </li>
            ))}
          </ul>

          <Button asChild size="lg" className="w-full bg-background text-foreground hover:bg-background/90">
            <Link href="/en/book-demo">Book a demo</Link>
          </Button>

          <p className="text-xs text-background/50 text-center mt-4">
            *Each extra credit costs €35 each.
          </p>
        </div>

        {/* CTA for custom plans */}
        <div className="mt-16 text-center">
          <p className="text-base font-medium mb-2">
            Need more credits or a custom plan?
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Get in touch for a tailored quote that fits your team's needs.
          </p>
          <Button asChild variant="outline" size="lg">
            <Link href="/en/book-demo">
              Let's talk
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
