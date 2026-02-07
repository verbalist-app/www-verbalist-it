import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Guide",
  description: "Tutorial e documentazione per usare Verbalist. Impara ad analizzare la SERP, estrarre pattern e generare contenuti SEO ottimizzati.",
  alternates: {
    canonical: "/guide",
  },
  openGraph: {
    title: "Guide \\ Verbalist",
    description: "Tutorial e documentazione per usare Verbalist. Impara ad analizzare la SERP, estrarre pattern e generare contenuti SEO ottimizzati.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
