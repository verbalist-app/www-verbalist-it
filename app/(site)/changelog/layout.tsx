import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Changelog",
  description: "Tutte le novità e gli aggiornamenti di Verbalist. Nuove funzionalità, miglioramenti e fix per la piattaforma di content automation.",
  alternates: {
    canonical: "/changelog",
  },
  openGraph: {
    title: "Changelog \\ Verbalist",
    description: "Tutte le novità e gli aggiornamenti di Verbalist. Nuove funzionalità, miglioramenti e fix per la piattaforma di content automation.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
