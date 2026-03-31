"use client"

import Script from "next/script"
import type { CookiePreferences } from "@/components/cookie-consent"

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}

interface GTMProps {
  containerId: string
}

/**
 * Google Tag Manager with Consent Mode v2.
 *
 * Consent defaults (all denied) run via `beforeInteractive` so they are
 * evaluated before GTM loads.  GTM itself loads `afterInteractive`.
 *
 * Tags configured in the GTM console (GA4, Contentsquare)
 * will only fire once the corresponding consent signals are granted
 * through `updateGTMConsent`.
 */
export function GTM({ containerId }: GTMProps) {
  if (!containerId) return null

  return (
    <>
      <Script id="gtm-consent-defaults" strategy="beforeInteractive">
        {`
          window.dataLayer=window.dataLayer||[];
          window.gtag=function(){window.dataLayer.push(arguments);};
          window.gtag('consent','default',{
            analytics_storage:'denied',
            ad_storage:'denied',
            ad_user_data:'denied',
            ad_personalization:'denied',
            functionality_storage:'granted',
            security_storage:'granted',
            wait_for_update:500
          });
        `}
      </Script>
      <Script id="gtm-script" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${containerId}');
        `}
      </Script>
    </>
  )
}

/**
 * Push a Consent Mode v2 update to the dataLayer.
 * Called by AnalyticsProvider when the user accepts or declines cookies.
 */
export function updateGTMConsent(preferences: CookiePreferences) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return

  window.gtag("consent", "update", {
    analytics_storage: preferences.analytics ? "granted" : "denied",
    ad_storage: preferences.marketing ? "granted" : "denied",
    ad_user_data: preferences.marketing ? "granted" : "denied",
    ad_personalization: preferences.marketing ? "granted" : "denied",
  })

  // Push a custom event so GTM triggers (All Pages) that fired before
  // consent was granted can re-fire tags (GA4, Contentsquare, etc.)
  if (preferences.analytics || preferences.marketing) {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: "consent_granted" })
  }
}
