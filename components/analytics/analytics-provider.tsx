"use client"

import * as React from "react"
import { GoogleAnalytics } from "./google-analytics"
import { Hotjar } from "./hotjar"
import { CookieConsent, type CookiePreferences } from "@/components/cookie-consent"

type Locale = "it" | "en"

interface AnalyticsProviderProps {
  locale?: Locale
  gaMeasurementId?: string
  hotjarSiteId?: string
  children?: React.ReactNode
}

export function AnalyticsProvider({
  locale = "it",
  gaMeasurementId,
  hotjarSiteId,
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
      {analyticsEnabled && hotjarSiteId && (
        <Hotjar siteId={hotjarSiteId} />
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
