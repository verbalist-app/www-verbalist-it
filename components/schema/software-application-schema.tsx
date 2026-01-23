interface SoftwareApplicationSchemaProps {
  locale?: "it" | "en"
}

export function SoftwareApplicationSchema({
  locale = "it",
}: SoftwareApplicationSchemaProps) {
  const isEnglish = locale === "en"

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Verbalist",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "SEO Software",
    operatingSystem: "Web Browser",
    url: isEnglish ? "https://verbalist.it/en" : "https://verbalist.it",
    description: isEnglish
      ? "Content automation platform for SEO, AEO, and GEO. Analyze Google competitors, extract winning patterns, and generate optimized content in minutes."
      : "Piattaforma di content automation per SEO, AEO e GEO. Analizza i competitor Google, estrai i pattern vincenti e genera contenuti ottimizzati in pochi minuti.",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: "0",
      highPrice: "299",
      offerCount: "4",
      offers: [
        {
          "@type": "Offer",
          name: "Free",
          price: "0",
          priceCurrency: "EUR",
          description: isEnglish
            ? "Free trial with limited features"
            : "Prova gratuita con funzionalità limitate",
        },
        {
          "@type": "Offer",
          name: "Starter",
          price: "49",
          priceCurrency: "EUR",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "49",
            priceCurrency: "EUR",
            billingDuration: "P1M",
          },
        },
        {
          "@type": "Offer",
          name: "Professional",
          price: "99",
          priceCurrency: "EUR",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "99",
            priceCurrency: "EUR",
            billingDuration: "P1M",
          },
        },
        {
          "@type": "Offer",
          name: "Enterprise",
          price: "299",
          priceCurrency: "EUR",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "299",
            priceCurrency: "EUR",
            billingDuration: "P1M",
          },
        },
      ],
    },
    featureList: isEnglish
      ? [
          "SERP Analysis",
          "Competitor Scraping",
          "Pattern Extraction",
          "AI Content Generation",
          "SEO Optimization",
          "AEO Optimization",
          "GEO Optimization",
          "Multi-language Support",
        ]
      : [
          "Analisi SERP",
          "Scraping Competitor",
          "Estrazione Pattern",
          "Generazione Contenuti AI",
          "Ottimizzazione SEO",
          "Ottimizzazione AEO",
          "Ottimizzazione GEO",
          "Supporto Multilingua",
        ],
    screenshot: "https://verbalist.it/og-image.png",
    softwareVersion: "1.0",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "50",
      bestRating: "5",
      worstRating: "1",
    },
    provider: {
      "@type": "Organization",
      name: "Verbalist",
      url: "https://verbalist.it",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
