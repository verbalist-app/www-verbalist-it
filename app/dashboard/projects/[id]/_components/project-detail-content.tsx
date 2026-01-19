import Link from "next/link"
import {
  ArrowLeft,
  Plus,
  MoreHorizontal,
  FileText,
  Search,
  Filter,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Mock data
const project = {
  id: "1",
  name: "Blog Aziendale",
  description: "Contenuti per il blog corporate",
}

const documents = [
  {
    id: "1",
    title: "Guida completa al SEO nel 2025",
    keyword: "seo 2025",
    type: "blog_post",
    status: "completed",
    createdAt: "19 Gen 2025",
    wordCount: 2450,
  },
  {
    id: "2",
    title: "Come scegliere il miglior CRM per la tua azienda",
    keyword: "miglior crm",
    type: "blog_post",
    status: "completed",
    createdAt: "18 Gen 2025",
    wordCount: 1890,
  },
  {
    id: "3",
    title: "10 strategie di marketing B2B che funzionano",
    keyword: "marketing b2b strategie",
    type: "blog_post",
    status: "processing",
    createdAt: "17 Gen 2025",
    wordCount: null,
  },
  {
    id: "4",
    title: "Email marketing: guida definitiva",
    keyword: "email marketing guida",
    type: "guide",
    status: "completed",
    createdAt: "15 Gen 2025",
    wordCount: 3200,
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

const typeLabels: Record<string, string> = {
  blog_post: "Blog Post",
  product_page: "Pagina Prodotto",
  guide: "Guida",
  landing_page: "Landing Page",
}

export function ProjectDetailContent({
  params,
}: {
  params: { id: string }
}) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <Link
          href="/dashboard/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4"
        >
          <ArrowLeft className="size-4" />
          Progetti
        </Link>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-medium tracking-tight">
              {project.name}
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              {project.description}
            </p>
          </div>
          <Button asChild>
            <Link href={`/dashboard/documents/new?project=${params.id}`}>
              <Plus className="mr-2 size-4" />
              Nuovo documento
            </Link>
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input placeholder="Cerca documenti..." className="pl-9" />
        </div>
        <Button variant="outline" size="sm">
          <Filter className="mr-2 size-4" />
          Filtri
        </Button>
      </div>

      {/* Documents List */}
      <Card>
        <CardContent className="p-0">
          <div className="divide-y divide-border">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <FileText className="size-4 shrink-0 text-muted-foreground" />
                  <div className="min-w-0">
                    <Link
                      href={`/dashboard/documents/${doc.id}`}
                      className="font-medium text-sm hover:underline block truncate"
                    >
                      {doc.title}
                    </Link>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-muted-foreground">
                        {typeLabels[doc.type]}
                      </span>
                      <span className="text-xs text-muted-foreground">·</span>
                      <code className="text-xs bg-muted px-1.5 py-0.5 rounded">
                        {doc.keyword}
                      </code>
                      {doc.wordCount && (
                        <>
                          <span className="text-xs text-muted-foreground">·</span>
                          <span className="text-xs text-muted-foreground">
                            {doc.wordCount.toLocaleString()} parole
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground hidden sm:block">
                    {doc.createdAt}
                  </span>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      statusLabels[doc.status].className
                    }`}
                  >
                    {statusLabels[doc.status].label}
                  </span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-8 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <MoreHorizontal className="size-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Apri</DropdownMenuItem>
                      <DropdownMenuItem>Duplica</DropdownMenuItem>
                      <DropdownMenuItem>Esporta</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-500">
                        Elimina
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
