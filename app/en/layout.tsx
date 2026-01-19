import type React from "react"
import type { Metadata } from "next"

const siteUrl = "https://verbalist.it"

export const metadata: Metadata = {
  title: {
    default: "Verbalist — Content Automation for SEO, AEO, GEO",
    template: "%s — Verbalist",
  },
  description:
    "Analyze Google competitors, extract winning patterns and generate optimized content for SEO, AEO and GEO. From keyword to complete article in minutes.",
  alternates: {
    canonical: "/en",
    languages: {
      'it': '/',
      'en': '/en',
      'x-default': '/',
    },
  },
  openGraph: {
    locale: "en_US",
    alternateLocale: "it_IT",
  },
}

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div lang="en">
      {children}
    </div>
  )
}
