import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Verbalist",
  description: "Verbalist is a product of NUR Digital Marketing. 25 years of SEO, 430+ clients. The team behind the software.",
  alternates: {
    canonical: "/en/about",
  },
  openGraph: {
    title: "About Us — Verbalist",
    description: "Verbalist is a product of NUR Digital Marketing. 25 years of SEO, 430+ clients. The team behind the software.",
  },
}

export default function AboutPage() {
  return (
    <section className="pt-20 md:pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            About Us
          </p>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Built on 25 years of SEO expertise
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            Verbalist is a product of <a href="https://www.nur.it/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline font-medium">NUR Digital Marketing</a>. 430+ clients served since 1999, now accessible to everyone through software.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h3 className="text-xl font-medium tracking-tight mb-4">Our story</h3>
            <div className="prose prose-neutral max-w-none">
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                <a href="https://www.nur.it/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline font-medium">NUR Digital Marketing</a> has been around since 1999. In 25 years we've worked with over 430 companies in Italy and worldwide. SEO, GEO, content optimization.
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                We published the first Italian book on Generative Engine Optimization. We're a HubSpot Platinum Partner. We work with EY, Mercedes-Benz, LVMH, SDA Bocconi.
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                Verbalist was born from this experience. It automates the methodologies we've used for years. Every feature comes from real patterns, tested on thousands of campaigns.
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                We want to make accessible to everyone the same techniques we use for enterprise clients.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-medium tracking-tight mb-4">The numbers</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted rounded-lg p-6 border border-border">
                <h4 className="text-base font-medium mb-2">25+ years</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  In digital marketing since 1999. 430+ clients in Italy and worldwide.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-6 border border-border">
                <h4 className="text-base font-medium mb-2">Tested patterns</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every feature comes from real campaigns. No theory, only things that work.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-6 border border-border">
                <h4 className="text-base font-medium mb-2">Concrete results</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ranking, traffic, conversions. Metrics that matter, not vanity metrics.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-6 border border-border">
                <h4 className="text-base font-medium mb-2">GEO pioneers</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  First Italian book on Generative Engine Optimization. First GEO services in Italy.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-muted rounded-xl p-8 md:p-12 border border-border">
            <h3 className="text-xl font-medium tracking-tight mb-4">
              Want to see it in action?
            </h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
              We'll show you how it works with a demo on your case.
            </p>
            <Link
              href="/en/book-demo"
              className="inline-flex items-center gap-2 text-sm bg-foreground text-background px-6 py-3 rounded-lg hover:bg-foreground/90 transition-colors font-medium"
            >
              Book a demo
            </Link>
          </section>
        </div>
      </div>
    </section>
  )
}
