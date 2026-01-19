import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Generazione Contenuto",
  description: "Genera articoli SEO completi con AI: title tag, meta description, struttura heading e body ottimizzato basato sui pattern dei top performer.",
  alternates: {
    canonical: "/piattaforma/generazione-contenuto",
  },
  openGraph: {
    title: "Generazione Contenuto — Verbalist",
    description: "Genera articoli SEO completi con AI: title tag, meta description, struttura heading e body ottimizzato basato sui pattern dei top performer.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
