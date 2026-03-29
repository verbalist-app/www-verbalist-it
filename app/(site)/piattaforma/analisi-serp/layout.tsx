import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Analisi risultati Google",
  description: "Analizza i top 10 risultati Google per la tua keyword. Estrai search intent, topic, struttura heading e segnali di qualità e autorevolezza dai competitor.",
  alternates: {
    canonical: "/piattaforma/analisi-serp",
  },
  openGraph: {
    title: "Analisi risultati Google \\ Verbalist",
    description: "Analizza i top 10 risultati Google per la tua keyword. Estrai search intent, topic, struttura heading e segnali di qualità e autorevolezza dai competitor.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
