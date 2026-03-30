"use client"

import { useEffect, useRef, useCallback } from "react"

interface HubSpotTranslations {
  fieldLabels?: Record<string, string>
  submitText?: string
  required?: string
  invalidEmail?: string
  invalidEmailFormat?: string
  phoneInvalidCharacters?: string
  missingSelect?: string
  invalidNumber?: string
  invalidNumberMin?: string
  invalidNumberMax?: string
}

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (opts: {
          portalId: string
          formId: string
          region?: string
          target?: string
          css?: string
          cssClass?: string
          cssRequired?: string
          locale?: string
          translations?: Record<string, HubSpotTranslations>
          onFormReady?: ($form: unknown) => void
          onFormSubmitted?: () => void
        }) => void
      }
    }
    dataLayer?: Record<string, unknown>[]
  }
}

/**
 * Map of Italian text → English text for DOM-level translation.
 * Covers labels, checkbox options, select options, placeholders,
 * submit button, rich text, and consent text that HubSpot's
 * `translations` API does not handle (custom fields, checkboxes, etc.).
 */
export type DomTranslations = Record<string, string>

interface HubSpotFormProps {
  portalId: string
  formId: string
  region?: string
  locale?: string
  translations?: Record<string, HubSpotTranslations>
  /** Fallback DOM-level text replacement for anything `translations` misses */
  domTranslations?: DomTranslations
  /** When true, the HubSpot submit button is disabled via DOM */
  submitDisabled?: boolean
  /** When true, hides HubSpot's native consent/checkbox section */
  hideConsentCheckboxes?: boolean
}

export function HubSpotForm({
  portalId,
  formId,
  region = "eu1",
  locale,
  translations,
  domTranslations,
  submitDisabled,
  hideConsentCheckboxes,
}: HubSpotFormProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const applyDomTranslations = useCallback(
    (root: Element) => {
      if (!domTranslations) return

      const walker = document.createTreeWalker(
        root,
        NodeFilter.SHOW_TEXT,
        null,
      )

      let node: Text | null
      while ((node = walker.nextNode() as Text | null)) {
        const original = node.textContent?.trim()
        if (original && domTranslations[original]) {
          node.textContent = node.textContent!.replace(
            original,
            domTranslations[original],
          )
        }
      }

      // Translate placeholders
      root
        .querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
          "input[placeholder], textarea[placeholder]",
        )
        .forEach((el) => {
          const ph = el.placeholder?.trim()
          if (ph && domTranslations[ph]) {
            el.placeholder = domTranslations[ph]
          }
        })

      // Translate submit button value
      root
        .querySelectorAll<HTMLInputElement>("input[type='submit']")
        .forEach((btn) => {
          const val = btn.value?.trim()
          if (val && domTranslations[val]) {
            btn.value = domTranslations[val]
          }
        })

      // Translate select options
      root.querySelectorAll<HTMLOptionElement>("select option").forEach((opt) => {
        const text = opt.textContent?.trim()
        if (text && domTranslations[text]) {
          opt.textContent = domTranslations[text]
        }
      })
    },
    [domTranslations],
  )

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "//js-eu1.hsforms.net/forms/embed/v2.js"
    script.charset = "utf-8"
    script.type = "text/javascript"
    script.async = true

    script.onload = () => {
      if (window.hbspt && containerRef.current) {
        window.hbspt.forms.create({
          portalId,
          formId,
          region,
          target: `#${containerRef.current.id}`,
          css: "",
          cssRequired: "",
          ...(locale ? { locale } : {}),
          ...(translations ? { translations } : {}),
          onFormReady: domTranslations
            ? () => {
                if (containerRef.current) {
                  applyDomTranslations(containerRef.current)
                }
              }
            : undefined,
          onFormSubmitted: () => {
            window.dataLayer = window.dataLayer || []
            window.dataLayer.push({
              event: "hsFormCallback",
              "hs-form-id": formId,
            })
          },
        })
      }
    }

    document.head.appendChild(script)

    return () => {
      script.remove()
    }
  }, [portalId, formId, region, locale, translations, domTranslations, applyDomTranslations])

  useEffect(() => {
    if (!hideConsentCheckboxes) return

    const style = document.createElement("style")
    style.textContent = `
      #hubspot-form-container .legal-consent-container,
      #hubspot-form-container fieldset:has(.legal-consent-container),
      #hubspot-form-container fieldset:has(.hs_interesse) {
        display: none !important;
      }
      #hubspot-form-container form {
        gap: 0 !important;
      }
      #hubspot-form-container form > fieldset {
        margin-bottom: 16px !important;
      }
      #hubspot-form-container form > .hs_submit {
        margin-top: 8px !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      style.remove()
    }
  }, [hideConsentCheckboxes])

  useEffect(() => {
    if (submitDisabled === undefined || !containerRef.current) return

    const toggle = () => {
      const btn = containerRef.current?.querySelector<HTMLInputElement>(
        "input[type='submit']",
      )
      if (btn) {
        btn.disabled = submitDisabled
        btn.style.opacity = submitDisabled ? "0.5" : ""
        btn.style.pointerEvents = submitDisabled ? "none" : ""
      }
    }

    toggle()

    const observer = new MutationObserver(toggle)
    observer.observe(containerRef.current, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [submitDisabled])

  return <div id="hubspot-form-container" ref={containerRef} />
}
