import Link from "next/link"
import { Check, Zap, Clock, CreditCard, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

// Mock subscription data
const subscription = {
  plan: "Professional",
  status: "active",
  creditsUsed: 156,
  creditsTotal: 500,
  daysRemaining: 23,
  startDate: "1 Gennaio 2025",
  endDate: "31 Gennaio 2025",
  price: "149",
  features: [
    "50 contenuti al mese",
    "Analisi SERP avanzata",
    "5 progetti",
    "Scraping competitor",
    "Analisi pattern",
    "Supporto prioritario",
  ],
}

const plans = [
  {
    name: "Starter",
    price: "49",
    description: "Per freelancer e piccoli progetti",
    features: [
      "10 contenuti al mese",
      "Analisi SERP base",
      "1 progetto",
      "Supporto email",
    ],
    current: false,
  },
  {
    name: "Professional",
    price: "149",
    description: "Per team SEO e agenzie in crescita",
    features: [
      "50 contenuti al mese",
      "Analisi SERP avanzata",
      "5 progetti",
      "Scraping competitor",
      "Analisi pattern",
      "Supporto prioritario",
    ],
    current: true,
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Per grandi organizzazioni",
    features: [
      "Contenuti illimitati",
      "Tutte le funzionalità",
      "Progetti illimitati",
      "API access",
      "Account manager dedicato",
      "SLA garantito",
    ],
    current: false,
  },
]

export function SubscriptionContent() {
  const creditsPercentage = (subscription.creditsUsed / subscription.creditsTotal) * 100

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-medium tracking-tight">Abbonamento</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Gestisci il tuo piano e la fatturazione
        </p>
      </div>

      {/* Current Plan Overview */}
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base">Piano attuale</CardTitle>
                <CardDescription>
                  Il tuo abbonamento Verbalist
                </CardDescription>
              </div>
              <span className="inline-flex items-center rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-500">
                Attivo
              </span>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-lg bg-foreground text-background">
                <Zap className="size-6" />
              </div>
              <div>
                <h3 className="text-xl font-medium">{subscription.plan}</h3>
                <p className="text-sm text-muted-foreground">
                  €{subscription.price}/mese
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Crediti utilizzati</span>
                  <span className="font-medium">
                    {subscription.creditsUsed}/{subscription.creditsTotal}
                  </span>
                </div>
                <Progress value={creditsPercentage} className="h-2" />
              </div>
              <div className="flex items-center gap-2">
                <Clock className="size-4 text-muted-foreground" />
                <span className="text-sm">
                  <span className="font-medium">{subscription.daysRemaining}</span>
                  <span className="text-muted-foreground"> giorni rimanenti</span>
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between border-t pt-4">
              <div className="text-sm text-muted-foreground">
                Periodo: {subscription.startDate} - {subscription.endDate}
              </div>
              <Button variant="outline" size="sm">
                Gestisci abbonamento
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Metodo di pagamento</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                <CreditCard className="size-5" />
              </div>
              <div>
                <p className="font-medium text-sm">•••• •••• •••• 4242</p>
                <p className="text-xs text-muted-foreground">Scade 12/2026</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full">
              Aggiorna carta
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Features List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Cosa include il tuo piano</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {subscription.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <Check className="size-4 text-green-500" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* All Plans */}
      <div>
        <h2 className="text-lg font-medium mb-4">Tutti i piani</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={
                plan.highlighted
                  ? "border-foreground ring-1 ring-foreground"
                  : ""
              }
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{plan.name}</CardTitle>
                  {plan.current && (
                    <span className="text-xs text-muted-foreground">
                      Piano attuale
                    </span>
                  )}
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <span className="text-3xl font-medium">
                    {plan.price === "Custom" ? "" : "€"}
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-muted-foreground">/mese</span>
                  )}
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="size-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.current ? "outline" : "default"}
                  className="w-full"
                  disabled={plan.current}
                >
                  {plan.current
                    ? "Piano attuale"
                    : plan.price === "Custom"
                    ? "Contattaci"
                    : "Passa a " + plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Billing History */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-base">Storico fatturazione</CardTitle>
            <CardDescription>Le tue fatture recenti</CardDescription>
          </div>
          <Button variant="ghost" size="sm">
            Vedi tutte
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { date: "1 Gen 2025", amount: "€149.00", status: "Pagato" },
              { date: "1 Dic 2024", amount: "€149.00", status: "Pagato" },
              { date: "1 Nov 2024", amount: "€149.00", status: "Pagato" },
            ].map((invoice, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-2 border-b last:border-0"
              >
                <div>
                  <p className="font-medium text-sm">{invoice.date}</p>
                  <p className="text-xs text-muted-foreground">
                    Piano Professional
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm">{invoice.amount}</span>
                  <span className="text-xs text-green-500">{invoice.status}</span>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="size-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
