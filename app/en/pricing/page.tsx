import Link from "next/link"
import { Check } from "lucide-react"
import type { Metadata } from "next"
import { PageBreadcrumb } from "@/components/page-breadcrumb"

export const metadata: Metadata = {
  title: "Pricing",
  description: "Verbalist plans and pricing. Starter, Professional and Enterprise. Free 14-day trial.",
  alternates: {
    canonical: "/en/pricing",
  },
}

const plans = [
  {
    name: "Starter",
    description: "For freelancers and small projects",
    price: "49",
    period: "/month",
    features: [
      "10 contents per month",
      "Basic SERP analysis",
      "1 project",
      "Email support",
    ],
    cta: "Start free",
    href: "/en/contact",
    highlighted: false,
  },
  {
    name: "Professional",
    description: "For growing SEO teams and agencies",
    price: "149",
    period: "/month",
    features: [
      "50 contents per month",
      "Advanced SERP analysis",
      "5 projects",
      "Competitor scraping",
      "Pattern analysis",
      "Priority support",
    ],
    cta: "Start now",
    href: "/en/contact",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: "Custom",
    period: "",
    features: [
      "Unlimited contents",
      "All features",
      "Unlimited projects",
      "API access",
      "Dedicated account manager",
      "Guaranteed SLA",
    ],
    cta: "Contact us",
    href: "/en/contact",
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
            Plans
          </p>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Pricing
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Three plans. Free 14-day trial. No commitment.
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
            Need help? <Link href="/en/contact" className="text-foreground hover:underline font-medium">Contact us</Link>.
          </p>
        </div>
      </div>
    </section>
  )
}
