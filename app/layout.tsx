import type React from "react"
import type { Metadata, Viewport } from "next"
import localFont from 'next/font/local'

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const cashSans = localFont({
  src: [
    { path: '../public/fonts/CashSans-Extralight.woff2', weight: '200', style: 'normal' },
    { path: '../public/fonts/CashSans-ExtralightItalic.woff2', weight: '200', style: 'italic' },
    { path: '../public/fonts/CashSans-Light.woff2', weight: '300', style: 'normal' },
    { path: '../public/fonts/CashSans-LightItalic.woff2', weight: '300', style: 'italic' },
    { path: '../public/fonts/CashSans-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/CashSans-RegularItalic.woff2', weight: '400', style: 'italic' },
    { path: '../public/fonts/CashSans-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/CashSans-MediumItalic.woff2', weight: '500', style: 'italic' },
    { path: '../public/fonts/CashSans-Semibold.woff2', weight: '600', style: 'normal' },
    { path: '../public/fonts/CashSans-SemiboldItalic.woff2', weight: '600', style: 'italic' },
    { path: '../public/fonts/CashSans-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../public/fonts/CashSans-BoldItalic.woff2', weight: '700', style: 'italic' },
    { path: '../public/fonts/CashSans-Extrablack.woff2', weight: '800', style: 'normal' },
    { path: '../public/fonts/CashSans-ExtrablackItalic.woff2', weight: '800', style: 'italic' },
    { path: '../public/fonts/CashSans-Black.woff2', weight: '900', style: 'normal' },
    { path: '../public/fonts/CashSans-BlackItalic.woff2', weight: '900', style: 'italic' },
  ],
  variable: '--font-cash-sans',
  display: 'swap',
})

const siteUrl = "https://verbalist.it"

export const metadata: Metadata = {
  title: {
    default: "Verbalist — Content Automation per SEO, AEO, GEO",
    template: "%s — Verbalist",
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
    title: "Verbalist — Content Automation per SEO, AEO, GEO",
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
    title: "Verbalist — Content Automation per SEO, AEO, GEO",
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
      <body className={`${cashSans.variable} font-sans antialiased min-h-screen bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
