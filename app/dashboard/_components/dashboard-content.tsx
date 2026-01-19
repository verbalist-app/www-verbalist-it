"use client"

import Link from "next/link"
import {
  FileText,
  FolderKanban,
  Zap,
  TrendingUp,
  Clock,
  ArrowRight,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Mock data for charts
const contentGeneratedData = [
  { month: "Set", documenti: 12 },
  { month: "Ott", documenti: 18 },
  { month: "Nov", documenti: 15 },
  { month: "Dic", documenti: 22 },
  { month: "Gen", documenti: 28 },
  { month: "Feb", documenti: 24 },
]

const creditsUsageData = [
  { month: "Set", crediti: 80 },
  { month: "Ott", crediti: 120 },
  { month: "Nov", crediti: 95 },
  { month: "Dic", crediti: 140 },
  { month: "Gen", crediti: 156 },
  { month: "Feb", crediti: 132 },
]

const chartConfig = {
  documenti: {
    label: "Documenti",
    color: "hsl(var(--foreground))",
  },
  crediti: {
    label: "Crediti",
    color: "hsl(var(--foreground))",
  },
}

// Mock data
const stats = [
  {
    name: "Documenti creati",
    value: "24",
    change: "+12%",
    changeType: "positive" as const,
    icon: FileText,
    description: "questo mese",
  },
  {
    name: "Progetti attivi",
    value: "5",
    change: "+2",
    changeType: "positive" as const,
    icon: FolderKanban,
    description: "totali",
  },
  {
    name: "Crediti utilizzati",
    value: "156",
    total: "500",
    icon: Zap,
    description: "questo mese",
  },
  {
    name: "Giorni rimanenti",
    value: "23",
    icon: Clock,
    description: "nel ciclo",
  },
]

const recentDocuments = [
  {
    id: "1",
    title: "Guida completa al SEO nel 2025",
    project: "Blog Aziendale",
    status: "completed",
    createdAt: "2 ore fa",
  },
  {
    id: "2",
    title: "Come scegliere il miglior CRM",
    project: "Landing Pages",
    status: "processing",
    createdAt: "5 ore fa",
  },
  {
    id: "3",
    title: "10 strategie di marketing B2B",
    project: "Blog Aziendale",
    status: "completed",
    createdAt: "1 giorno fa",
  },
  {
    id: "4",
    title: "Ottimizzazione pagina prodotto",
    project: "E-commerce",
    status: "completed",
    createdAt: "2 giorni fa",
  },
]

const statusLabels: Record<string, { label: string; className: string }> = {
  completed: {
    label: "Completato",
    className: "bg-green-500/10 text-green-500",
  },
  processing: {
    label: "In elaborazione",
    className: "bg-yellow-500/10 text-yellow-500",
  },
  failed: {
    label: "Errore",
    className: "bg-red-500/10 text-red-500",
  },
}

export function DashboardContent() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-medium tracking-tight">Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Bentornato, Marco. Ecco un riepilogo della tua attivita.
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/documents/new">
            <Plus className="mr-2 size-4" />
            Nuovo documento
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <stat.icon className="size-5 text-muted-foreground" />
                {stat.change && (
                  <span
                    className={`inline-flex items-center gap-1 text-xs font-medium ${
                      stat.changeType === "positive"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {stat.changeType === "positive" ? (
                      <ArrowUpRight className="size-3" />
                    ) : (
                      <ArrowDownRight className="size-3" />
                    )}
                    {stat.change}
                  </span>
                )}
              </div>
              <div className="mt-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-medium">{stat.value}</span>
                  {stat.total && (
                    <span className="text-sm text-muted-foreground">
                      /{stat.total}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1">{stat.name}</p>
              </div>
              {stat.total && (
                <div className="mt-3">
                  <div className="h-1.5 w-full rounded-full bg-muted">
                    <div
                      className="h-1.5 rounded-full bg-foreground transition-all"
                      style={{
                        width: `${(parseInt(stat.value) / parseInt(stat.total)) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-medium">Documenti generati</CardTitle>
            <CardDescription>Ultimi 6 mesi</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[200px] w-full">
              <BarChart data={contentGeneratedData} margin={{ top: 0, right: 0, bottom: 0, left: -20 }}>
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  fontSize={12}
                  tickMargin={8}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  fontSize={12}
                  tickMargin={8}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar
                  dataKey="documenti"
                  fill="var(--color-documenti)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base font-medium">Utilizzo crediti</CardTitle>
            <CardDescription>Ultimi 6 mesi</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[200px] w-full">
              <LineChart data={creditsUsageData} margin={{ top: 0, right: 0, bottom: 0, left: -20 }}>
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  fontSize={12}
                  tickMargin={8}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  fontSize={12}
                  tickMargin={8}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="crediti"
                  stroke="var(--color-crediti)"
                  strokeWidth={2}
                  dot={{ fill: "var(--color-crediti)", strokeWidth: 0, r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Documents */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-base font-medium">
              Documenti recenti
            </CardTitle>
            <CardDescription>I tuoi ultimi contenuti generati</CardDescription>
          </div>
          <Button asChild variant="ghost" size="sm">
            <Link href="/dashboard/documents">
              Vedi tutti
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            {recentDocuments.map((doc) => (
              <Link
                key={doc.id}
                href={`/dashboard/documents/${doc.id}`}
                className="flex items-center justify-between rounded-lg p-3 hover:bg-muted transition-colors group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <FileText className="size-4 shrink-0 text-muted-foreground" />
                  <div className="min-w-0">
                    <p className="font-medium text-sm truncate">{doc.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {doc.project} · {doc.createdAt}
                    </p>
                  </div>
                </div>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    statusLabels[doc.status].className
                  }`}
                >
                  {statusLabels[doc.status].label}
                </span>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="group hover:border-foreground/20 transition-colors cursor-pointer">
          <Link href="/dashboard/documents/new?type=blog_post">
            <CardContent className="p-6">
              <FileText className="size-5 text-muted-foreground mb-4" />
              <h3 className="font-medium">Crea un blog post</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Genera un articolo ottimizzato per SEO
              </p>
            </CardContent>
          </Link>
        </Card>

        <Card className="group hover:border-foreground/20 transition-colors cursor-pointer">
          <Link href="/dashboard/documents/new?type=product_page">
            <CardContent className="p-6">
              <TrendingUp className="size-5 text-muted-foreground mb-4" />
              <h3 className="font-medium">Pagina prodotto</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Ottimizza la descrizione di un prodotto
              </p>
            </CardContent>
          </Link>
        </Card>

        <Card className="group hover:border-foreground/20 transition-colors cursor-pointer">
          <Link href="/dashboard/documents/new?type=guide">
            <CardContent className="p-6">
              <Zap className="size-5 text-muted-foreground mb-4" />
              <h3 className="font-medium">Guida/Tutorial</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Crea una guida completa su un argomento
              </p>
            </CardContent>
          </Link>
        </Card>
      </div>
    </div>
  )
}
