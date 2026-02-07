import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your Verbalist account to generate SEO-optimized content with AI.",
  alternates: {
    canonical: "/en/login",
  },
  openGraph: {
    title: "Sign In \ Verbalist",
    description: "Sign in to your Verbalist account to generate SEO-optimized content with AI.",
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
