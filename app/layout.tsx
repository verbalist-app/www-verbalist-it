import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from 'next/font/google'

import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { OrganizationSchema } from "@/components/schema"
import "./globals.css"

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const siteUrl = "https://verbalist.it"

export const metadata: Metadata = {
  title: {
    default: "Verbalist \\ Content Automation per SEO, AEO, GEO",
    template: "%s \\ Verbalist",
  },
  description:
    "Analizza i competitor Google, estrai i pattern vincenti e genera contenuti ottimizzati per SEO, AEO e GEO. Da keyword a articolo completo in pochi minuti.",
  keywords: [
    "software SEO",
    "generazione contenuti AI",
    "SEO automation",
    "analisi SERP",
    "ottimizzazione contenuti",
    "GEO optimization",
    "AEO optimization",
    "content marketing AI",
    "articoli SEO",
    "tool SEO italiano",
  ],
  authors: [{ name: "NUR Digital Marketing", url: "https://www.nur.it" }],
  creator: "Verbalist",
  publisher: "NUR Digital Marketing",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
    languages: {
      'it': '/',
      'en': '/en',
      'x-default': '/',
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  // Open Graph
  openGraph: {
    type: "website",
    locale: "it_IT",
    alternateLocale: "en_US",
    url: siteUrl,
    siteName: "Verbalist",
    title: "Verbalist \\ Content Automation per SEO, AEO, GEO",
    description:
      "Analizza i competitor Google, estrai i pattern vincenti e genera contenuti ottimizzati per SEO, AEO e GEO. Da keyword a articolo completo in pochi minuti.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Verbalist - Software SEO con AI per generare contenuti ottimizzati",
      },
    ],
  },
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Verbalist \\ Content Automation per SEO, AEO, GEO",
    description:
      "Analizza i competitor Google, estrai i pattern vincenti e genera contenuti ottimizzati per SEO, AEO e GEO. Da keyword a articolo completo in pochi minuti.",
    images: ["/og-image.png"],
    creator: "@verbalist_ai",
  },
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

// <CHANGE> Added viewport configuration for dark theme
export const viewport: Viewport = {
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <head>
        <OrganizationSchema />
      </head>
      <body className={`${inter.variable} font-sans antialiased min-h-screen bg-background text-foreground`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
