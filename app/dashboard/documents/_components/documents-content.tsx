"use client"

import * as React from "react"
import Link from "next/link"
import {
  Plus,
  Search,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  MoreHorizontal,
  FileText,
  Trash2,
  FolderInput,
  Eye,
  Download,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"

// Mock data
const allDocuments = [
  {
    id: "1",
    title: "Guida completa al SEO nel 2025",
    keyword: "seo 2025",
    type: "blog_post",
    project: "Blog Aziendale",
    projectId: "1",
    status: "completed",
    wordCount: 2450,
    createdAt: "2025-01-19",
  },
  {
    id: "2",
    title: "Come scegliere il miglior CRM",
    keyword: "miglior crm",
    type: "guide",
    project: "Landing Pages",
    projectId: "2",
    status: "processing",
    wordCount: 0,
    createdAt: "2025-01-19",
  },
  {
    id: "3",
    title: "10 strategie di marketing B2B",
    keyword: "marketing b2b",
    type: "blog_post",
    project: "Blog Aziendale",
    projectId: "1",
    status: "completed",
    wordCount: 1890,
    createdAt: "2025-01-18",
  },
  {
    id: "4",
    title: "Ottimizzazione pagina prodotto",
    keyword: "pagina prodotto ecommerce",
    type: "product_page",
    project: "E-commerce",
    projectId: "3",
    status: "completed",
    wordCount: 980,
    createdAt: "2025-01-17",
  },
  {
    id: "5",
    title: "Come aumentare le conversioni",
    keyword: "aumentare conversioni",
    type: "landing_page",
    project: "Landing Pages",
    projectId: "2",
    status: "completed",
    wordCount: 1250,
    createdAt: "2025-01-16",
  },
  {
    id: "6",
    title: "Guida all'email marketing",
    keyword: "email marketing",
    type: "guide",
    project: "Guide Tecniche",
    projectId: "4",
    status: "failed",
    wordCount: 0,
    createdAt: "2025-01-15",
  },
  {
    id: "7",
    title: "Strategie di link building",
    keyword: "link building",
    type: "blog_post",
    project: "Blog Aziendale",
    projectId: "1",
    status: "completed",
    wordCount: 2100,
    createdAt: "2025-01-14",
  },
  {
    id: "8",
    title: "Analisi competitor",
    keyword: "analisi competitor seo",
    type: "guide",
    project: "Guide Tecniche",
    projectId: "4",
    status: "completed",
    wordCount: 3200,
    createdAt: "2025-01-13",
  },
]

const statusOptions = [
  { value: "all", label: "Tutti gli stati" },
  { value: "completed", label: "Completato" },
  { value: "processing", label: "In elaborazione" },
  { value: "failed", label: "Errore" },
]

const typeOptions = [
  { value: "all", label: "Tutti i tipi" },
  { value: "blog_post", label: "Blog Post" },
  { value: "product_page", label: "Pagina Prodotto" },
  { value: "guide", label: "Guida/Tutorial" },
  { value: "landing_page", label: "Landing Page" },
]

const projectOptions = [
  { value: "all", label: "Tutti i progetti" },
  { value: "1", label: "Blog Aziendale" },
  { value: "2", label: "Landing Pages" },
  { value: "3", label: "E-commerce" },
  { value: "4", label: "Guide Tecniche" },
]

const statusLabels: Record<string, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
  completed: { label: "Completato", variant: "default" },
  processing: { label: "In elaborazione", variant: "secondary" },
  failed: { label: "Errore", variant: "destructive" },
}

const typeLabels: Record<string, string> = {
  blog_post: "Blog Post",
  product_page: "Pagina Prodotto",
  guide: "Guida",
  landing_page: "Landing Page",
}

type SortField = "title" | "createdAt" | "wordCount"
type SortDirection = "asc" | "desc"

const ITEMS_PER_PAGE = 5

export function DocumentsContent() {
  const [search, setSearch] = React.useState("")
  const [statusFilter, setStatusFilter] = React.useState("all")
  const [typeFilter, setTypeFilter] = React.useState("all")
  const [projectFilter, setProjectFilter] = React.useState("all")
  const [selectedIds, setSelectedIds] = React.useState<string[]>([])
  const [sortField, setSortField] = React.useState<SortField>("createdAt")
  const [sortDirection, setSortDirection] = React.useState<SortDirection>("desc")
  const [currentPage, setCurrentPage] = React.useState(1)

  // Filter and sort documents
  const filteredDocuments = React.useMemo(() => {
    let result = allDocuments.filter((doc) => {
      const matchesSearch = search === "" ||
        doc.title.toLowerCase().includes(search.toLowerCase()) ||
        doc.keyword.toLowerCase().includes(search.toLowerCase())
      const matchesStatus = statusFilter === "all" || doc.status === statusFilter
      const matchesType = typeFilter === "all" || doc.type === typeFilter
      const matchesProject = projectFilter === "all" || doc.projectId === projectFilter
      return matchesSearch && matchesStatus && matchesType && matchesProject
    })

    // Sort
    result.sort((a, b) => {
      let comparison = 0
      if (sortField === "title") {
        comparison = a.title.localeCompare(b.title)
      } else if (sortField === "createdAt") {
        comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      } else if (sortField === "wordCount") {
        comparison = a.wordCount - b.wordCount
      }
      return sortDirection === "asc" ? comparison : -comparison
    })

    return result
  }, [search, statusFilter, typeFilter, projectFilter, sortField, sortDirection])

  // Pagination
  const totalPages = Math.ceil(filteredDocuments.length / ITEMS_PER_PAGE)
  const paginatedDocuments = filteredDocuments.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  // Reset page when filters change
  React.useEffect(() => {
    setCurrentPage(1)
  }, [search, statusFilter, typeFilter, projectFilter])

  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("desc")
    }
  }

  const toggleSelectAll = () => {
    if (selectedIds.length === paginatedDocuments.length) {
      setSelectedIds([])
    } else {
      setSelectedIds(paginatedDocuments.map((doc) => doc.id))
    }
  }

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  const handleBulkDelete = () => {
    toast.success(`${selectedIds.length} documenti eliminati`)
    setSelectedIds([])
  }

  const handleBulkMove = () => {
    toast.success(`${selectedIds.length} documenti spostati`)
    setSelectedIds([])
  }

  const clearFilters = () => {
    setSearch("")
    setStatusFilter("all")
    setTypeFilter("all")
    setProjectFilter("all")
  }

  const hasActiveFilters = search !== "" || statusFilter !== "all" || typeFilter !== "all" || projectFilter !== "all"

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return <ArrowUpDown className="ml-2 size-4" />
    return sortDirection === "asc" ? <ArrowUp className="ml-2 size-4" /> : <ArrowDown className="ml-2 size-4" />
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-medium tracking-tight">Documenti</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Gestisci tutti i tuoi contenuti generati
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/documents/new">
            <Plus className="mr-2 size-4" />
            Nuovo documento
          </Link>
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                placeholder="Cerca per titolo o keyword..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {statusOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {typeOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={projectFilter} onValueChange={setProjectFilter}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {projectOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {hasActiveFilters && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  <X className="mr-2 size-4" />
                  Rimuovi filtri
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bulk Actions */}
      {selectedIds.length > 0 && (
        <Card className="border-foreground">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">
                {selectedIds.length} documenti selezionati
              </span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleBulkMove}>
                  <FolderInput className="mr-2 size-4" />
                  Sposta
                </Button>
                <Button variant="destructive" size="sm" onClick={handleBulkDelete}>
                  <Trash2 className="mr-2 size-4" />
                  Elimina
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={selectedIds.length === paginatedDocuments.length && paginatedDocuments.length > 0}
                  onCheckedChange={toggleSelectAll}
                />
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  size="sm"
                  className="-ml-3 h-8"
                  onClick={() => toggleSort("title")}
                >
                  Documento
                  <SortIcon field="title" />
                </Button>
              </TableHead>
              <TableHead className="hidden md:table-cell">Progetto</TableHead>
              <TableHead className="hidden lg:table-cell">Tipo</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden sm:table-cell">
                <Button
                  variant="ghost"
                  size="sm"
                  className="-ml-3 h-8"
                  onClick={() => toggleSort("wordCount")}
                >
                  Parole
                  <SortIcon field="wordCount" />
                </Button>
              </TableHead>
              <TableHead className="hidden sm:table-cell">
                <Button
                  variant="ghost"
                  size="sm"
                  className="-ml-3 h-8"
                  onClick={() => toggleSort("createdAt")}
                >
                  Data
                  <SortIcon field="createdAt" />
                </Button>
              </TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedDocuments.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="h-32 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <FileText className="size-8 text-muted-foreground" />
                    <p className="text-muted-foreground">Nessun documento trovato</p>
                    {hasActiveFilters && (
                      <Button variant="link" size="sm" onClick={clearFilters}>
                        Rimuovi filtri
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              paginatedDocuments.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedIds.includes(doc.id)}
                      onCheckedChange={() => toggleSelect(doc.id)}
                    />
                  </TableCell>
                  <TableCell>
                    <div>
                      <Link
                        href={`/dashboard/documents/${doc.id}`}
                        className="font-medium hover:underline"
                      >
                        {doc.title}
                      </Link>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        <code className="bg-muted px-1 py-0.5 rounded">{doc.keyword}</code>
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Link
                      href={`/dashboard/projects/${doc.projectId}`}
                      className="text-sm hover:underline"
                    >
                      {doc.project}
                    </Link>
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    <span className="text-sm text-muted-foreground">
                      {typeLabels[doc.type]}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge variant={statusLabels[doc.status].variant}>
                      {statusLabels[doc.status].label}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <span className="text-sm tabular-nums">
                      {doc.wordCount > 0 ? doc.wordCount.toLocaleString() : "-"}
                    </span>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <span className="text-sm text-muted-foreground">
                      {new Date(doc.createdAt).toLocaleDateString("it-IT")}
                    </span>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="size-8">
                          <MoreHorizontal className="size-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                          <Link href={`/dashboard/documents/${doc.id}`}>
                            <Eye className="mr-2 size-4" />
                            Visualizza
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="mr-2 size-4" />
                          Esporta
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <FolderInput className="mr-2 size-4" />
                          Sposta in progetto
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="mr-2 size-4" />
                          Elimina
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-4 border-t">
            <p className="text-sm text-muted-foreground">
              Mostrando {((currentPage - 1) * ITEMS_PER_PAGE) + 1}-{Math.min(currentPage * ITEMS_PER_PAGE, filteredDocuments.length)} di {filteredDocuments.length} documenti
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="size-4" />
              </Button>
              <span className="text-sm">
                Pagina {currentPage} di {totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="size-4" />
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}
