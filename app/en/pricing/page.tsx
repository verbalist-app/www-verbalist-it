import Link from "next/link"
import type { Metadata } from "next"
import { Check, ArrowRight } from "lucide-react"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Pricing",
  description: "Verbalist: 300 credits for €3,000 + VAT. Extra credits at €35 each. Book a demo for custom plans.",
  alternates: {
    canonical: "/en/pricing",
  },
}

const features = [
  "All platform features included",
  "All AI models (Claude, GPT-4, Gemini)",
  "Extra credits available anytime",
  "Dedicated email support",
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
          <h1 className="font-serif text-3xl md:text-4xl font-medium tracking-tighter mb-4">
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

        {/* How credits work */}
        <div className="mt-16 max-w-2xl mx-auto">
          <h2 className="text-xl font-medium tracking-tight text-center mb-3">
            How credits work
          </h2>
          <p className="text-sm text-muted-foreground text-center mb-8">
            One credit = one keyword analyzed. Each analysis includes: Google results, competitor analysis, patterns and content generation.
          </p>

          <div className="rounded-xl border bg-muted/40 p-6 md:p-8">
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {[
                { type: "Blog post", credits: "~20", output: "~15 per month" },
                { type: "Product page", credits: "~15", output: "~20 per month" },
                { type: "Complete guide", credits: "~30", output: "~10 per month" },
              ].map((item) => (
                <div key={item.type} className="text-center rounded-lg bg-background border p-4">
                  <p className="text-2xl font-medium tracking-tight">{item.credits}</p>
                  <p className="text-[11px] text-muted-foreground">credits</p>
                  <p className="text-sm font-medium mt-3">{item.type}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.output}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground text-center mt-6 pt-4 border-t">
              With 300 credits you can generate about 15 blog posts or 20 product pages per month.
            </p>
          </div>
        </div>

        {/* CTA for custom plans */}
        <div className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <p className="text-sm text-muted-foreground">
            Need more credits or a custom plan?
          </p>
          <Button asChild variant="outline" size="sm">
            <Link href="/en/book-demo">
              Request a quote
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>

        {/* FAQ */}
        <div className="mt-20 max-w-2xl mx-auto">
          <h2 className="text-xl font-medium tracking-tight text-center mb-8">
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="credits-exhausted">
              <AccordionTrigger className="text-sm font-medium" data-gtm="faq-accordion">
                What happens if I run out of credits?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                You can purchase extra credits at €35 each at any time, without changing your plan.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="cancel">
              <AccordionTrigger className="text-sm font-medium" data-gtm="faq-accordion">
                Can I cancel at any time?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Yes, you can cancel whenever you want. Your access stays active until the end of the billing period.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="generation-time">
              <AccordionTrigger className="text-sm font-medium" data-gtm="faq-accordion">
                How long does it take to generate content?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                About 2-3 minutes on average. Verbalist analyzes the search results, extracts patterns and generates the content automatically.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="unique-content">
              <AccordionTrigger className="text-sm font-medium" data-gtm="faq-accordion">
                Is the generated content unique?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Yes. Each piece of content is generated from scratch based on patterns extracted from the search results in real time. It's not rewriting or spinning.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
