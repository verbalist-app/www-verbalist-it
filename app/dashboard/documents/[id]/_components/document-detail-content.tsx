"use client"

import * as React from "react"
import { Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import {
  Copy,
  Download,
  MoreHorizontal,
  FileText,
  BarChart3,
  CheckCircle2,
  Loader2,
  RefreshCw,
  ExternalLink,
  Home,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

// Mock data
const document = {
  id: "1",
  title: "Guida completa al SEO nel 2025: strategie, tecniche e best practice",
  keyword: "seo 2025",
  type: "blog_post",
  status: "completed",
  project: "Blog Aziendale",
  projectId: "1",
  createdAt: "19 Gennaio 2025, 14:32",
  wordCount: 2450,
  readingTime: "10 min",
  content: `
# Guida completa al SEO nel 2025

Il SEO (Search Engine Optimization) continua a evolversi rapidamente. Nel 2025, le strategie che funzionano sono molto diverse da quelle di pochi anni fa. Questa guida ti mostrerà tutto ciò che devi sapere per posizionare il tuo sito ai primi posti di Google.

## Cosa troverai in questa guida

1. Le basi del SEO nel 2025
2. Ottimizzazione on-page avanzata
3. Link building etico ed efficace
4. SEO tecnico: cosa conta davvero
5. AI e SEO: come sfruttare l'intelligenza artificiale

## Le basi del SEO nel 2025

Il SEO si basa su tre pilastri fondamentali: contenuti di qualità, autorevolezza e esperienza utente. Google utilizza centinaia di fattori di ranking, ma questi tre elementi rimangono i più importanti.

### Contenuti di qualità

I contenuti devono essere:
- **Utili**: rispondono a domande reali degli utenti
- **Approfonditi**: coprono l'argomento in modo completo
- **Aggiornati**: informazioni sempre attuali e verificate
- **Originali**: offrono un punto di vista unico

### Autorevolezza (E-E-A-T)

Google valuta l'autorevolezza attraverso:
- Esperienza diretta dell'autore
- Competenze dimostrabili
- Citazioni e backlink da fonti autorevoli
- Segnali di trust (HTTPS, privacy policy, etc.)

## Ottimizzazione on-page

L'ottimizzazione on-page rimane fondamentale. Ecco gli elementi chiave:

### Title tag e meta description

Il title tag deve:
- Contenere la keyword principale
- Essere lungo 50-60 caratteri
- Essere unico per ogni pagina
- Essere accattivante per l'utente

### Struttura degli heading

Usa una gerarchia logica:
- H1: titolo principale (uno per pagina)
- H2: sezioni principali
- H3-H6: sottosezioni

### URL ottimizzati

Gli URL devono essere:
- Brevi e descrittivi
- Contenere la keyword
- Usare i trattini per separare le parole

## Conclusioni

Il SEO nel 2025 richiede un approccio olistico che combina contenuti eccellenti, ottimizzazione tecnica e una solida strategia di link building. Seguendo le best practice descritte in questa guida, potrai migliorare significativamente il posizionamento del tuo sito.
  `.trim(),
}

const analysisData = {
  serpPosition: "Top 10 analizzati",
  competitorCount: 10,
  avgWordCount: 2200,
  topicsIdentified: 12,
  patterns: [
    { name: "FAQ Section", found: 8, total: 10 },
    { name: "Table of Contents", found: 7, total: 10 },
    { name: "Images/Infographics", found: 9, total: 10 },
    { name: "Internal Links", found: 10, total: 10 },
  ],
}

function DocumentDetailInner({
  params,
}: {
  params: { id: string }
}) {
  const searchParams = useSearchParams()
  const isNew = searchParams.get("new") === "true"
  const [isProcessing, setIsProcessing] = React.useState(isNew)
  const [copied, setCopied] = React.useState(false)

  // Simulate processing completion
  React.useEffect(() => {
    if (isNew) {
      const timer = setTimeout(() => setIsProcessing(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [isNew])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(document.content)
    setCopied(true)
    toast.success("Contenuto copiato negli appunti")
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/dashboard">
                <Home className="size-4" />
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/dashboard/documents">Documenti</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{document.title.substring(0, 30)}...</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Header */}
      <div>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <span
                className={cn(
                  "shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium",
                  isProcessing
                    ? "bg-yellow-500/10 text-yellow-500"
                    : "bg-green-500/10 text-green-500"
                )}
              >
                {isProcessing ? "In elaborazione" : "Completato"}
              </span>
              <span className="text-sm text-muted-foreground">
                {document.createdAt}
              </span>
            </div>
            <h1 className="text-xl font-medium tracking-tight lg:text-2xl">
              {document.title}
            </h1>
            <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
              <Link
                href={`/dashboard/projects/${document.projectId}`}
                className="hover:text-foreground"
              >
                {document.project}
              </Link>
              <span>·</span>
              <code className="bg-muted px-1.5 py-0.5 rounded text-xs">
                {document.keyword}
              </code>
              {!isProcessing && (
                <>
                  <span>·</span>
                  <span>{document.wordCount.toLocaleString()} parole</span>
                  <span>·</span>
                  <span>{document.readingTime} di lettura</span>
                </>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleCopy}>
              {copied ? (
                <CheckCircle2 className="mr-2 size-4" />
              ) : (
                <Copy className="mr-2 size-4" />
              )}
              {copied ? "Copiato!" : "Copia"}
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 size-4" />
              Esporta
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="size-9">
                  <MoreHorizontal className="size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <RefreshCw className="mr-2 size-4" />
                  Rigenera
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ExternalLink className="mr-2 size-4" />
                  Apri in editor
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-500">
                  Elimina
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Processing State */}
      {isProcessing && (
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Loader2 className="size-5 text-muted-foreground animate-spin shrink-0" />
              <div className="flex-1">
                <h3 className="font-medium">Generazione in corso...</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Stiamo analizzando la SERP e generando il contenuto ottimizzato
                </p>
                <div className="mt-3 h-1.5 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-foreground animate-pulse" style={{ width: "60%" }} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Content */}
      {!isProcessing && (
        <Tabs defaultValue="content" className="space-y-6">
          <TabsList>
            <TabsTrigger value="content">
              <FileText className="mr-2 size-4" />
              Contenuto
            </TabsTrigger>
            <TabsTrigger value="analysis">
              <BarChart3 className="mr-2 size-4" />
              Analisi SERP
            </TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="space-y-6">
            <Card>
              <CardContent className="p-6 lg:p-8">
                <article className="prose prose-neutral max-w-none prose-headings:font-medium prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg">
                  <div dangerouslySetInnerHTML={{ __html: document.content.replace(/\n/g, '<br>').replace(/^# (.*$)/gm, '<h1>$1</h1>').replace(/^## (.*$)/gm, '<h2>$1</h2>').replace(/^### (.*$)/gm, '<h3>$1</h3>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/^- (.*$)/gm, '<li>$1</li>') }} />
                </article>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analysis" className="space-y-6">
            {/* Stats */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">Competitor analizzati</p>
                  <p className="text-2xl font-medium mt-1">{analysisData.competitorCount}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">Word count medio</p>
                  <p className="text-2xl font-medium mt-1">{analysisData.avgWordCount.toLocaleString()}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">Topic identificati</p>
                  <p className="text-2xl font-medium mt-1">{analysisData.topicsIdentified}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">Il tuo word count</p>
                  <p className="text-2xl font-medium mt-1">{document.wordCount.toLocaleString()}</p>
                </CardContent>
              </Card>
            </div>

            {/* Patterns */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Pattern rilevati</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {analysisData.patterns.map((pattern) => (
                  <div key={pattern.name}>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span>{pattern.name}</span>
                      <span className="text-muted-foreground">
                        {pattern.found}/{pattern.total} competitor
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-foreground transition-all"
                        style={{ width: `${(pattern.found / pattern.total) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  )
}

function DocumentDetailSkeleton() {
  return (
    <div className="space-y-6">
      {/* Breadcrumb skeleton */}
      <div className="flex items-center gap-2">
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-32" />
      </div>

      {/* Header skeleton */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Skeleton className="h-6 w-24 rounded-full" />
          <Skeleton className="h-4 w-32" />
        </div>
        <Skeleton className="h-8 w-3/4" />
        <div className="flex items-center gap-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>

      {/* Content skeleton */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-6 w-1/3 mt-4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </CardContent>
      </Card>
    </div>
  )
}

export function DocumentDetailContent({
  params,
}: {
  params: { id: string }
}) {
  return (
    <Suspense fallback={<DocumentDetailSkeleton />}>
      <DocumentDetailInner params={params} />
    </Suspense>
  )
}
