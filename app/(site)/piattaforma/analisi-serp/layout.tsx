import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Analisi SERP",
  description: "Analizza i top 10 risultati Google per la tua keyword. Estrai search intent, topic, struttura heading e segnali E-E-A-T dai competitor.",
  alternates: {
    canonical: "/piattaforma/analisi-serp",
  },
  openGraph: {
    title: "Analisi SERP \\ Verbalist",
    description: "Analizza i top 10 risultati Google per la tua keyword. Estrai search intent, topic, struttura heading e segnali E-E-A-T dai competitor.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
