import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Analisi Pattern",
  description: "Identifica i pattern vincenti dai top performer: struttura heading, topic coverage, segnali E-E-A-T e lunghezza ottimale dei contenuti.",
  alternates: {
    canonical: "/piattaforma/analisi-pattern",
  },
  openGraph: {
    title: "Analisi Pattern — Verbalist",
    description: "Identifica i pattern vincenti dai top performer: struttura heading, topic coverage, segnali E-E-A-T e lunghezza ottimale dei contenuti.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
