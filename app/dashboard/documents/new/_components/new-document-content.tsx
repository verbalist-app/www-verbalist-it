"use client"

import * as React from "react"
import { Suspense } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  FileText,
  ShoppingBag,
  BookOpen,
  Layout,
  Link as LinkIcon,
  Type,
  Sparkles,
  Check,
  Loader2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

const outputTypes = [
  {
    id: "blog_post",
    name: "Blog Post",
    description: "Articolo ottimizzato per SEO",
    icon: FileText,
  },
  {
    id: "product_page",
    name: "Pagina Prodotto",
    description: "Descrizione prodotto per e-commerce",
    icon: ShoppingBag,
  },
  {
    id: "guide",
    name: "Guida/Tutorial",
    description: "Contenuto educativo approfondito",
    icon: BookOpen,
  },
  {
    id: "landing_page",
    name: "Landing Page",
    description: "Pagina di conversione",
    icon: Layout,
  },
]

const contentModes = [
  {
    id: "create",
    name: "Crea nuovo contenuto",
    description: "Genera un contenuto da zero basandoti sulla keyword",
  },
  {
    id: "optimize",
    name: "Ottimizza contenuto esistente",
    description: "Migliora un contenuto già esistente",
  },
]

const projects = [
  { id: "1", name: "Blog Aziendale" },
  { id: "2", name: "Landing Pages" },
  { id: "3", name: "E-commerce" },
  { id: "4", name: "Guide Tecniche" },
]

function NewDocumentInner() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const preselectedType = searchParams.get("type")
  const preselectedProject = searchParams.get("project")

  const [step, setStep] = React.useState(1)
  const [isGenerating, setIsGenerating] = React.useState(false)

  // Form state
  const [outputType, setOutputType] = React.useState(preselectedType || "")
  const [contentMode, setContentMode] = React.useState("create")
  const [keyword, setKeyword] = React.useState("")
  const [contentUrl, setContentUrl] = React.useState("")
  const [contentText, setContentText] = React.useState("")
  const [project, setProject] = React.useState(preselectedProject || "")
  const [inputMode, setInputMode] = React.useState<"url" | "text">("url")

  const canProceedStep1 = outputType !== ""
  const canProceedStep2 = keyword.trim() !== "" && (contentMode === "create" || contentUrl || contentText)

  const handleGenerate = async () => {
    setIsGenerating(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    // Redirect to document detail page (mock)
    router.push("/dashboard/documents/1?new=true")
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/dashboard/documents"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4"
        >
          <ArrowLeft className="size-4" />
          Documenti
        </Link>
        <h1 className="text-2xl font-medium tracking-tight">
          Nuovo documento
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Crea un nuovo contenuto ottimizzato per SEO
        </p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3].map((s) => (
          <React.Fragment key={s}>
            <div
              className={cn(
                "flex size-8 items-center justify-center rounded-full text-sm font-medium transition-colors",
                step >= s
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {step > s ? <Check className="size-4" /> : s}
            </div>
            {s < 3 && (
              <div
                className={cn(
                  "h-0.5 flex-1 transition-colors",
                  step > s ? "bg-foreground" : "bg-muted"
                )}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Step 1: Output Type */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <Label className="text-base">Tipo di contenuto</Label>
            <p className="text-sm text-muted-foreground mt-1">
              Seleziona il tipo di contenuto che vuoi generare
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {outputTypes.map((type) => (
              <Card
                key={type.id}
                className={cn(
                  "cursor-pointer transition-all hover:border-foreground/20",
                  outputType === type.id && "border-foreground ring-1 ring-foreground"
                )}
                onClick={() => setOutputType(type.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                      <type.icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">{type.name}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {type.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-end pt-4">
            <Button onClick={() => setStep(2)} disabled={!canProceedStep1}>
              Continua
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Step 2: Content Details */}
      {step === 2 && (
        <div className="space-y-6">
          {/* Content Mode */}
          <div className="space-y-3">
            <Label className="text-base">Modalità</Label>
            <div className="grid gap-3 sm:grid-cols-2">
              {contentModes.map((mode) => (
                <Card
                  key={mode.id}
                  className={cn(
                    "cursor-pointer transition-all hover:border-foreground/20",
                    contentMode === mode.id && "border-foreground ring-1 ring-foreground"
                  )}
                  onClick={() => setContentMode(mode.id)}
                >
                  <CardContent className="p-4">
                    <h3 className="font-medium text-sm">{mode.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {mode.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Existing Content (if optimize mode) */}
          {contentMode === "optimize" && (
            <div className="space-y-3">
              <Label className="text-base">Contenuto esistente</Label>
              <div className="flex gap-2 mb-3">
                <Button
                  variant={inputMode === "url" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setInputMode("url")}
                >
                  <LinkIcon className="mr-2 size-4" />
                  URL
                </Button>
                <Button
                  variant={inputMode === "text" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setInputMode("text")}
                >
                  <Type className="mr-2 size-4" />
                  Testo
                </Button>
              </div>
              {inputMode === "url" ? (
                <Input
                  placeholder="https://www.esempio.com/pagina"
                  value={contentUrl}
                  onChange={(e) => setContentUrl(e.target.value)}
                />
              ) : (
                <Textarea
                  placeholder="Incolla qui il contenuto da ottimizzare..."
                  rows={5}
                  value={contentText}
                  onChange={(e) => setContentText(e.target.value)}
                />
              )}
            </div>
          )}

          {/* Keyword */}
          <div className="space-y-3">
            <Label htmlFor="keyword" className="text-base">
              Keyword principale
            </Label>
            <p className="text-sm text-muted-foreground">
              La keyword per cui vuoi ottimizzare il contenuto
            </p>
            <Input
              id="keyword"
              placeholder="es. miglior software gestionale"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>

          {/* Project */}
          <div className="space-y-3">
            <Label className="text-base">Progetto (opzionale)</Label>
            <Select value={project} onValueChange={setProject}>
              <SelectTrigger>
                <SelectValue placeholder="Seleziona un progetto" />
              </SelectTrigger>
              <SelectContent>
                {projects.map((p) => (
                  <SelectItem key={p.id} value={p.id}>
                    {p.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-between pt-4">
            <Button variant="outline" onClick={() => setStep(1)}>
              <ArrowLeft className="mr-2 size-4" />
              Indietro
            </Button>
            <Button onClick={() => setStep(3)} disabled={!canProceedStep2}>
              Continua
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Step 3: Review & Generate */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <Label className="text-base">Riepilogo</Label>
            <p className="text-sm text-muted-foreground mt-1">
              Controlla i dettagli e avvia la generazione
            </p>
          </div>

          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    Tipo contenuto
                  </p>
                  <p className="font-medium mt-1">
                    {outputTypes.find((t) => t.id === outputType)?.name}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    Modalità
                  </p>
                  <p className="font-medium mt-1">
                    {contentMode === "create" ? "Nuovo contenuto" : "Ottimizzazione"}
                  </p>
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  Keyword
                </p>
                <code className="mt-1 inline-block bg-muted px-2 py-1 rounded text-sm">
                  {keyword}
                </code>
              </div>

              {contentMode === "optimize" && (contentUrl || contentText) && (
                <div className="border-t pt-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    Contenuto da ottimizzare
                  </p>
                  <p className="text-sm mt-1 truncate">
                    {contentUrl || contentText.substring(0, 100) + "..."}
                  </p>
                </div>
              )}

              {project && (
                <div className="border-t pt-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    Progetto
                  </p>
                  <p className="font-medium mt-1">
                    {projects.find((p) => p.id === project)?.name}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="bg-muted/50 border-dashed">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-foreground text-background">
                  <Sparkles className="size-5" />
                </div>
                <div>
                  <h3 className="font-medium">Cosa succederà</h3>
                  <ol className="mt-2 space-y-1 text-sm text-muted-foreground list-decimal list-inside">
                    <li>Analisi SERP per la keyword "{keyword}"</li>
                    <li>Scraping dei top 10 risultati Google</li>
                    <li>Identificazione pattern vincenti</li>
                    <li>Generazione contenuto ottimizzato</li>
                  </ol>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Tempo stimato: 2-3 minuti
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between pt-4">
            <Button variant="outline" onClick={() => setStep(2)}>
              <ArrowLeft className="mr-2 size-4" />
              Indietro
            </Button>
            <Button onClick={handleGenerate} disabled={isGenerating}>
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Generazione in corso...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 size-4" />
                  Genera contenuto
                </>
              )}
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export function NewDocumentContent() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center p-8"><Loader2 className="size-6 animate-spin" /></div>}>
      <NewDocumentInner />
    </Suspense>
  )
}
