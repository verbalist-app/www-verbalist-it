import type React from "react"
import type { Metadata, Viewport } from "next"
import localFont from 'next/font/local'
import { GeistSans } from 'geist/font/sans'

import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { OrganizationSchema } from "@/components/schema"
import "./globals.css"

const asar = localFont({
  src: '../public/fonts/Asar-Regular.woff',
  variable: '--font-serif',
  display: 'swap',
})

const siteUrl = "https://www.verbalist.it"

export const metadata: Metadata = {
  title: {
    default: "Verbalist \\ Piattaforma Generative Engine Optimization",
    template: "%s \\ Verbalist",
  },
  description:
    "Il software GEO SEO che analizza i competitor Google, estrae i pattern vincenti e genera contenuti strutturati per ChatGPT, Perplexity e AI Overview.",
  keywords: [
    "generative engine optimization",
    "GEO optimization",
    "geo seo",
    "contenuti per LLM",
    "content engineering",
    "analisi SERP",
    "ottimizzazione contenuti AI",
    "AEO optimization",
    "answer engine optimization",
    "contenuti per ChatGPT",
    "visibilità ricerca AI",
    "ai search optimization",
    "software GEO italiano",
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
    title: "Verbalist \\ Piattaforma Generative Engine Optimization",
    description:
      "Analizza i competitor Google, estrai i pattern vincenti e genera contenuti strutturati per essere citati da ChatGPT, Perplexity, Gemini e AI Overview.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Verbalist - Content Engineering per la Generative Engine Optimization",
      },
    ],
  },
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Verbalist \\ Piattaforma Generative Engine Optimization",
    description:
      "Analizza i competitor Google, estrai i pattern vincenti e genera contenuti strutturati per essere citati da ChatGPT, Perplexity, Gemini e AI Overview.",
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
      <body className={`${GeistSans.variable} ${asar.variable} font-sans antialiased min-h-screen bg-background text-foreground`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
