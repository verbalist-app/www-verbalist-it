"use client"

import { GoogleAnalytics as GA } from "@next/third-parties/google"

interface GoogleAnalyticsProps {
  measurementId: string
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  if (!measurementId) return null

  return <GA gaId={measurementId} />
}
