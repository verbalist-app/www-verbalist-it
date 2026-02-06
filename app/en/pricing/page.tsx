import Link from "next/link"
import type { Metadata } from "next"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { PricingToggle, type PricingPlan } from "@/components/pricing-toggle"

export const metadata: Metadata = {
  title: "Pricing",
  description: "Verbalist plans and pricing. Starter, Professional and Enterprise. Free 14-day trial.",
  alternates: {
    canonical: "/en/pricing",
  },
}

const plans: PricingPlan[] = [
  {
    name: "Starter",
    description: "For freelancers and small projects",
    monthlyPrice: "49",
    annualPrice: "39",
    period: "/month",
    annualNote: "billed annually",
    features: [
      "10 contents per month",
      "Basic SERP analysis",
      "1 project",
      "Email support",
    ],
    cta: "Start free",
    href: "/en/book-demo",
    highlighted: false,
  },
  {
    name: "Professional",
    description: "For growing SEO teams and agencies",
    monthlyPrice: "149",
    annualPrice: "119",
    period: "/month",
    annualNote: "billed annually",
    features: [
      "50 contents per month",
      "Advanced SERP analysis",
      "5 projects",
      "Competitor scraping",
      "Pattern analysis",
      "Priority support",
    ],
    cta: "Start now",
    href: "/en/book-demo",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    period: "",
    annualNote: "",
    features: [
      "Unlimited contents",
      "All features",
      "Unlimited projects",
      "API access",
      "Dedicated account manager",
      "Guaranteed SLA",
    ],
    cta: "Contact us",
    href: "/en/book-demo",
    highlighted: false,
  },
]

export default function PricingPage() {
  return (
    <section className="pt-20 md:pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">
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
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Simple pricing, powerful results
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Start with a free 14-day trial. Scale up as your content needs grow. No hidden fees, no commitment.
          </p>
        </div>

        <PricingToggle
          plans={plans}
          monthlyLabel="Monthly"
          annualLabel="Annual"
          saveBadge="Save 20%"
          helpText={
            <p className="text-sm text-muted-foreground">
              Need help? <Link href="/en/book-demo" className="text-foreground hover:underline font-medium">Contact us</Link>.
            </p>
          }
        />
      </div>
    </section>
  )
}
