"use client"

import * as React from "react"
import Link from "next/link"
import { X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

type Locale = "it" | "en"

export interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

interface CookieConsentProps {
  locale?: Locale
  onAcceptCallback?: (preferences: CookiePreferences) => void
  onDeclineCallback?: () => void
}

const translations = {
  it: {
    title: "Utilizziamo i cookie",
    description: "Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito.",
    managePreferences: "Gestisci preferenze",
    declineAll: "Rifiuta",
    acceptAll: "Accetta tutti",
    savePreferences: "Salva preferenze",
    learnMore: "Cookie Policy",
    learnMoreHref: "/cookie-policy",
    necessary: "Necessari",
    necessaryDesc: "Essenziali per il funzionamento del sito.",
    analytics: "Analitici",
    analyticsDesc: "Ci aiutano a capire come utilizzi il sito (Google Analytics, Hotjar).",
    marketing: "Marketing",
    marketingDesc: "Utilizzati per mostrarti pubblicità pertinenti.",
  },
  en: {
    title: "We use cookies",
    description: "We use cookies to improve your experience on our website.",
    managePreferences: "Manage preferences",
    declineAll: "Decline",
    acceptAll: "Accept all",
    savePreferences: "Save preferences",
    learnMore: "Cookie Policy",
    learnMoreHref: "/en/cookie-policy",
    necessary: "Necessary",
    necessaryDesc: "Essential for the website to function.",
    analytics: "Analytics",
    analyticsDesc: "Help us understand how you use the site (Google Analytics, Hotjar).",
    marketing: "Marketing",
    marketingDesc: "Used to show you relevant advertising.",
  },
}

function getStoredPreferences(): CookiePreferences | null {
  if (typeof document === "undefined") return null

  const consent = document.cookie
    .split("; ")
    .find((row) => row.startsWith("cookieConsent="))
    ?.split("=")[1]

  if (!consent) return null

  try {
    return JSON.parse(decodeURIComponent(consent))
  } catch {
    // Legacy format: "accepted" or "declined"
    if (consent === "accepted") {
      return { necessary: true, analytics: true, marketing: true }
    }
    if (consent === "declined") {
      return { necessary: true, analytics: false, marketing: false }
    }
    return null
  }
}

function setStoredPreferences(preferences: CookiePreferences, months: number = 12) {
  const expiryDate = new Date()
  expiryDate.setMonth(expiryDate.getMonth() + months)
  const value = encodeURIComponent(JSON.stringify(preferences))
  document.cookie = `cookieConsent=${value}; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`
}

export function CookieConsent({
  locale = "it",
  onAcceptCallback = () => {},
  onDeclineCallback = () => {},
}: CookieConsentProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [hide, setHide] = React.useState(false)
  const [showPreferences, setShowPreferences] = React.useState(false)
  const [preferences, setPreferences] = React.useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  const t = translations[locale]

  const handleAcceptAll = React.useCallback(() => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    }
    setStoredPreferences(allAccepted)
    setIsOpen(false)
    setTimeout(() => setHide(true), 500)
    onAcceptCallback(allAccepted)
  }, [onAcceptCallback])

  const handleDeclineAll = React.useCallback(() => {
    const allDeclined: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    }
    setStoredPreferences(allDeclined, 6)
    setIsOpen(false)
    setTimeout(() => setHide(true), 500)
    onDeclineCallback()
  }, [onDeclineCallback])

  const handleSavePreferences = React.useCallback(() => {
    setStoredPreferences(preferences)
    setIsOpen(false)
    setTimeout(() => setHide(true), 500)
    onAcceptCallback(preferences)
  }, [preferences, onAcceptCallback])

  React.useEffect(() => {
    const stored = getStoredPreferences()
    if (stored) {
      setHide(true)
      if (stored.analytics || stored.marketing) {
        onAcceptCallback(stored)
      }
    } else {
      setTimeout(() => setIsOpen(true), 1000)
    }
  }, [onAcceptCallback])

  if (hide) return null

  return (
    <div
      className={cn(
        "fixed z-[200] bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 sm:right-auto w-full sm:max-w-md duration-500 ease-out",
        !isOpen
          ? "transition-[opacity,transform] translate-y-8 opacity-0"
          : "transition-[opacity,transform] translate-y-0 opacity-100"
      )}
    >
      <div className="m-3 sm:m-0 bg-background rounded-lg border border-border shadow-lg relative">
        {/* X button */}
        <button
          onClick={handleDeclineAll}
          className="absolute top-3 right-3 p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          aria-label={t.declineAll}
        >
          <X className="h-4 w-4" />
        </button>

        <div className="p-4 pr-10">
          <h2 className="text-base font-medium mb-2">{t.title}</h2>
          <p className="text-sm text-muted-foreground">
            {t.description}{" "}
            <Link
              href={t.learnMoreHref}
              className="underline underline-offset-2 hover:text-foreground"
            >
              {t.learnMore}
            </Link>
          </p>
        </div>

        {/* Preferences panel */}
        {showPreferences && (
          <div className="px-4 pb-2 space-y-3 border-t border-border pt-4">
            {/* Necessary */}
            <div className="flex items-center justify-between">
              <div className="flex-1 pr-4">
                <p className="text-sm font-medium">{t.necessary}</p>
                <p className="text-xs text-muted-foreground">{t.necessaryDesc}</p>
              </div>
              <Switch
                checked={true}
                disabled
                className="opacity-50 cursor-not-allowed"
              />
            </div>

            {/* Analytics */}
            <div className="flex items-center justify-between">
              <div className="flex-1 pr-4">
                <p className="text-sm font-medium">{t.analytics}</p>
                <p className="text-xs text-muted-foreground">{t.analyticsDesc}</p>
              </div>
              <Switch
                checked={preferences.analytics}
                onCheckedChange={(checked) =>
                  setPreferences((prev) => ({ ...prev, analytics: checked }))
                }
              />
            </div>

            {/* Marketing */}
            <div className="flex items-center justify-between">
              <div className="flex-1 pr-4">
                <p className="text-sm font-medium">{t.marketing}</p>
                <p className="text-xs text-muted-foreground">{t.marketingDesc}</p>
              </div>
              <Switch
                checked={preferences.marketing}
                onCheckedChange={(checked) =>
                  setPreferences((prev) => ({ ...prev, marketing: checked }))
                }
              />
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="p-4 pt-3 border-t border-border">
          {!showPreferences ? (
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowPreferences(true)}
                className="text-xs h-9 justify-start sm:justify-center"
              >
                {t.managePreferences}
                <ChevronDown className="ml-1 h-3 w-3" />
              </Button>
              <div className="flex gap-2 sm:ml-auto">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDeclineAll}
                  className="text-xs h-9 flex-1 sm:flex-none"
                >
                  {t.declineAll}
                </Button>
                <Button
                  size="sm"
                  onClick={handleAcceptAll}
                  className="text-xs h-9 flex-1 sm:flex-none"
                >
                  {t.acceptAll}
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowPreferences(false)}
                className="text-xs h-9"
              >
                ←
              </Button>
              <Button
                size="sm"
                onClick={handleSavePreferences}
                className="text-xs h-9 flex-1"
              >
                {t.savePreferences}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
