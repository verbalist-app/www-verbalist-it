"use client"

import * as React from "react"
import { GTM, updateGTMConsent } from "./gtm"
import { CookieConsent, type CookiePreferences } from "@/components/cookie-consent"

type Locale = "it" | "en"

interface AnalyticsProviderProps {
  locale?: Locale
  gtmId?: string
  children?: React.ReactNode
}

/**
 * Loads Google Tag Manager and bridges cookie consent to Consent Mode v2.
 *
 * All tracking tags (GA4, Contentsquare) are configured as tags inside the
 * GTM container and fire only when the relevant consent signals are granted.
 */
export function AnalyticsProvider({
  locale = "it",
  gtmId,
  children,
}: AnalyticsProviderProps) {
  const handleAccept = React.useCallback((prefs: CookiePreferences) => {
    updateGTMConsent(prefs)
  }, [])

  const handleDecline = React.useCallback(() => {
    updateGTMConsent({ necessary: true, analytics: false, marketing: false })
  }, [])

  return (
    <>
      {gtmId && <GTM containerId={gtmId} />}
      <CookieConsent
        locale={locale}
        onAcceptCallback={handleAccept}
        onDeclineCallback={handleDecline}
      />
      {children}
    </>
  )
}
