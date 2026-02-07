export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Verbalist",
    url: "https://www.verbalist.it",
    logo: "https://www.verbalist.it/logo.png",
    description:
      "Verbalist is a content automation platform for SEO, AEO, and GEO. Analyze competitors, extract winning patterns, and generate optimized content.",
    foundingDate: "2024",
    sameAs: [
      "https://www.linkedin.com/company/verbalist",
      "https://twitter.com/verbalist_ai",
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "NUR Digital Marketing",
      url: "https://www.nur.it",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "info@verbalist.it",
      availableLanguage: ["Italian", "English"],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
