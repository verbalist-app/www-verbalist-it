import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Analisi pattern",
  description: "Identifica i pattern vincenti dai top performer: struttura heading, topic coverage, segnali di qualità e autorevolezza e lunghezza ottimale dei contenuti.",
  alternates: {
    canonical: "/piattaforma/analisi-pattern",
  },
  openGraph: {
    title: "Analisi pattern \\ Verbalist",
    description: "Identifica i pattern vincenti dai top performer: struttura heading, topic coverage, segnali di qualità e autorevolezza e lunghezza ottimale dei contenuti.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
