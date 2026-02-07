import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Documentation",
  description: "Tutorials and documentation for using Verbalist. Learn how to analyze SERP, extract patterns and generate SEO-optimized content.",
  alternates: {
    canonical: "/en/docs",
  },
  openGraph: {
    title: "Documentation \\ Verbalist",
    description: "Tutorials and documentation for using Verbalist. Learn how to analyze SERP, extract patterns and generate SEO-optimized content.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
