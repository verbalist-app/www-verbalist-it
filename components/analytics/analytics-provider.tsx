"use client"

import * as React from "react"
import { GoogleAnalytics } from "./google-analytics"
import { Contentsquare } from "./contentsquare"
import { CookieConsent, type CookiePreferences } from "@/components/cookie-consent"

type Locale = "it" | "en"

interface AnalyticsProviderProps {
  locale?: Locale
  gaMeasurementId?: string
  contentsquareTagId?: string
  children?: React.ReactNode
}

export function AnalyticsProvider({
  locale = "it",
  gaMeasurementId,
  contentsquareTagId,
  children,
}: AnalyticsProviderProps) {
  const [preferences, setPreferences] = React.useState<CookiePreferences | null>(null)

  const handleAccept = React.useCallback((prefs: CookiePreferences) => {
    setPreferences(prefs)
  }, [])

  const handleDecline = React.useCallback(() => {
    setPreferences({ necessary: true, analytics: false, marketing: false })
  }, [])

  const analyticsEnabled = preferences?.analytics === true

  return (
    <>
      {analyticsEnabled && gaMeasurementId && (
        <GoogleAnalytics measurementId={gaMeasurementId} />
      )}
      {analyticsEnabled && contentsquareTagId && (
        <Contentsquare tagId={contentsquareTagId} />
      )}
      <CookieConsent
        locale={locale}
        onAcceptCallback={handleAccept}
        onDeclineCallback={handleDecline}
      />
      {children}
    </>
  )
}
