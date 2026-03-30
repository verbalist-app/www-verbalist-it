"use client"

import { useState, useEffect } from "react"
import {
  getStoredPreferences,
  type CookiePreferences,
} from "@/components/cookie-consent"

/**
 * Reactive hook that returns the current cookie consent preferences.
 * Updates automatically when the user changes consent via the banner.
 */
export function useCookieConsent(): CookiePreferences | null {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null)

  useEffect(() => {
    setPreferences(getStoredPreferences())

    const handler = (e: Event) => {
      setPreferences((e as CustomEvent<CookiePreferences>).detail)
    }
    window.addEventListener("cookieConsentChange", handler)
    return () => window.removeEventListener("cookieConsentChange", handler)
  }, [])

  return preferences
}

/** Programmatically re-open the cookie consent banner. */
export function showCookieConsentBanner() {
  window.dispatchEvent(new Event("showCookieConsent"))
}
