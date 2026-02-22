import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accedi",
  description: "Accedi al tuo account Verbalist per generare contenuti SEO ottimizzati con l'AI.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="fixed inset-0 z-50 bg-background overflow-auto">
      {children}
    </div>
  )
}
