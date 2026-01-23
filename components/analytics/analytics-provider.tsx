"use client"

import * as React from "react"
import { GoogleAnalytics } from "./google-analytics"
import { Hotjar } from "./hotjar"
import { CookieConsent } from "@/components/cookie-consent"

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
  const [hasConsent, setHasConsent] = React.useState(false)

  // Check initial consent on mount
  React.useEffect(() => {
    const consent = document.cookie
      .split("; ")
      .find((row) => row.startsWith("cookieConsent="))
      ?.split("=")[1]

    if (consent === "accepted") {
      setHasConsent(true)
    }
  }, [])

  const handleAccept = React.useCallback(() => {
    setHasConsent(true)
  }, [])

  const handleDecline = React.useCallback(() => {
    setHasConsent(false)
  }, [])

  return (
    <>
      {hasConsent && gaMeasurementId && (
        <GoogleAnalytics measurementId={gaMeasurementId} />
      )}
      {hasConsent && hotjarSiteId && (
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
