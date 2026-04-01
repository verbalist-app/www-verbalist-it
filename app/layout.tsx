import type React from "react"
import type { Metadata, Viewport } from "next"
import localFont from 'next/font/local'
import { GeistSans } from 'geist/font/sans'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { OrganizationSchema } from "@/components/schema"
import { LangSync } from "@/components/lang-sync"
import "./globals.css"

const asar = localFont({
  src: '../public/fonts/Asar-Regular.woff2',
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
  other: {
    "apple-mobile-web-app-title": "Verbalist",
  },
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
  twitter: {
    card: "summary_large_image",
    title: "Verbalist \\ Piattaforma Generative Engine Optimization",
    description:
      "Analizza i competitor Google, estrai i pattern vincenti e genera contenuti strutturati per essere citati da ChatGPT, Perplexity, Gemini e AI Overview.",
    images: ["/og-image.png"],
    creator: "@verbalist_ai",
  },
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
  verification: {
    google: "YkeQp-qqag3oyxoFNcR6XxbW4eoi0x3xqp-Y1w6YJZw",
  },
  generator: 'v0.app'
}

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
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <LangSync />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
