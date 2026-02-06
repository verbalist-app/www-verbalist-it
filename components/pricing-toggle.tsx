"use client"

import { useState } from "react"
import Link from "next/link"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface PricingPlan {
  name: string
  description: string
  monthlyPrice: string
  annualPrice: string
  period: string
  annualNote: string
  features: string[]
  cta: string
  href: string
  highlighted: boolean
}

interface PricingToggleProps {
  plans: PricingPlan[]
  monthlyLabel: string
  annualLabel: string
  saveBadge: string
  helpText?: React.ReactNode
}

export function PricingToggle({
  plans,
  monthlyLabel,
  annualLabel,
  saveBadge,
  helpText,
}: PricingToggleProps) {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <div>
      {/* Toggle */}
      <div className="flex items-center justify-center gap-2 mb-12">
        <div className="inline-flex rounded-full border border-border bg-muted p-1">
          <button
            onClick={() => setIsAnnual(false)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              !isAnnual
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {monthlyLabel}
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              isAnnual
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {annualLabel}
          </button>
        </div>
        {isAnnual && (
          <span className="rounded-full bg-foreground/10 px-3 py-1 text-xs font-medium text-foreground">
            {saveBadge}
          </span>
        )}
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => {
          const price = isAnnual ? plan.annualPrice : plan.monthlyPrice
          const isCustom = price === "Custom"
          return (
            <div
              key={plan.name}
              className={cn(
                "rounded-xl p-8",
                plan.highlighted
                  ? "bg-foreground text-background ring-2 ring-foreground"
                  : "bg-muted border border-border"
              )}
            >
              <div className="mb-6">
                <h3 className={cn("text-lg font-medium mb-2", plan.highlighted ? "text-background" : "text-foreground")}>
                  {plan.name}
                </h3>
                <p className={cn("text-sm", plan.highlighted ? "text-background/70" : "text-muted-foreground")}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className={cn("text-4xl font-medium", plan.highlighted ? "text-background" : "text-foreground")}>
                  {isCustom ? "" : "€"}{price}
                </span>
                {!isCustom && (
                  <span className={cn("text-sm", plan.highlighted ? "text-background/70" : "text-muted-foreground")}>
                    {plan.period}
                  </span>
                )}
                {isAnnual && !isCustom && (
                  <div className={cn("text-xs mt-1", plan.highlighted ? "text-background/60" : "text-muted-foreground")}>
                    {plan.annualNote}
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={cn("size-5 shrink-0", plan.highlighted ? "text-background" : "text-foreground")} />
                    <span className={cn("text-sm", plan.highlighted ? "text-background/80" : "text-muted-foreground")}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {plan.highlighted ? (
                <Button asChild size="lg" className="w-full bg-background text-foreground hover:bg-background/90">
                  <Link href={plan.href}>{plan.cta}</Link>
                </Button>
              ) : (
                <Button asChild size="lg" className="w-full">
                  <Link href={plan.href}>{plan.cta}</Link>
                </Button>
              )}
            </div>
          )
        })}
      </div>

      {helpText && (
        <div className="mt-16 text-center">
          {helpText}
        </div>
      )}
    </div>
  )
}
