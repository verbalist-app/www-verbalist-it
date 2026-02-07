import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Scraping Competitor",
  description: "Estrai automaticamente i contenuti delle pagine competitor. Heading, paragrafi e struttura convertiti in Markdown pronto per l'analisi.",
  alternates: {
    canonical: "/piattaforma/scraping-competitor",
  },
  openGraph: {
    title: "Scraping Competitor \ Verbalist",
    description: "Estrai automaticamente i contenuti delle pagine competitor. Heading, paragrafi e struttura convertiti in Markdown pronto per l'analisi.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
