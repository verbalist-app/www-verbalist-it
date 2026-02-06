"use client"

import * as React from "react"
import Link from "next/link"
import { X } from "lucide-react"
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
        "fixed z-[200] bottom-4 left-4 w-full max-w-md duration-500 ease-out",
        !isOpen
          ? "transition-[opacity,transform] translate-y-8 opacity-0"
          : "transition-[opacity,transform] translate-y-0 opacity-100"
      )}
    >
      <div className="relative rounded-lg border border-border bg-background shadow-lg">
        {/* X — rifiuta tutto, nessun cookie non tecnico */}
        <button
          onClick={handleDeclineAll}
          className="absolute top-3 right-3 p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          aria-label={t.declineAll}
        >
          <X className="size-4" />
        </button>

        <div className="p-5 pr-10">
          {!showPreferences ? (
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-foreground mb-1">{t.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t.description}{" "}
                  <Link
                    href={t.learnMoreHref}
                    className="underline underline-offset-2 hover:text-foreground"
                  >
                    {t.learnMore}
                  </Link>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowPreferences(true)}
                  className="text-xs h-8"
                >
                  {t.managePreferences}
                </Button>
                <div className="flex-1" />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDeclineAll}
                  className="text-xs h-8"
                >
                  {t.declineAll}
                </Button>
                <Button
                  size="sm"
                  onClick={handleAcceptAll}
                  className="text-xs h-8"
                >
                  {t.acceptAll}
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="space-y-3">
                {/* Necessary */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
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
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
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
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
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
              <div className="flex gap-2 justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowPreferences(false)}
                  className="text-xs h-8"
                >
                  ←
                </Button>
                <Button
                  size="sm"
                  onClick={handleSavePreferences}
                  className="text-xs h-8"
                >
                  {t.savePreferences}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
