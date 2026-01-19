import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Prenota una Demo",
  description: "Richiedi una demo personalizzata di Verbalist. Scopri come automatizzare la creazione di contenuti SEO per il tuo team.",
  alternates: {
    canonical: "/contatti",
  },
  openGraph: {
    title: "Prenota una Demo — Verbalist",
    description: "Richiedi una demo personalizzata di Verbalist. Scopri come automatizzare la creazione di contenuti SEO per il tuo team.",
  },
}

export default function ContattiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
