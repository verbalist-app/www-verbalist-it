import Link from "next/link"
import {
  FolderKanban,
  Plus,
  MoreHorizontal,
  FileText,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Mock data
const projects = [
  {
    id: "1",
    name: "Blog Aziendale",
    description: "Contenuti per il blog corporate",
    documentsCount: 12,
    lastUpdated: "2 ore fa",
  },
  {
    id: "2",
    name: "Landing Pages",
    description: "Pagine di atterraggio per campagne",
    documentsCount: 8,
    lastUpdated: "1 giorno fa",
  },
  {
    id: "3",
    name: "E-commerce",
    description: "Descrizioni prodotti e categorie",
    documentsCount: 24,
    lastUpdated: "3 giorni fa",
  },
  {
    id: "4",
    name: "Guide Tecniche",
    description: "Tutorial e documentazione",
    documentsCount: 6,
    lastUpdated: "1 settimana fa",
  },
]

export function ProjectsContent() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-medium tracking-tight">Progetti</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Organizza i tuoi documenti in progetti
          </p>
        </div>
        <Button>
          <Plus className="mr-2 size-4" />
          Nuovo progetto
        </Button>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="group hover:border-foreground/20 transition-colors"
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <FolderKanban className="size-5 text-muted-foreground shrink-0" />
                  <div>
                    <Link
                      href={`/dashboard/projects/${project.id}`}
                      className="font-medium hover:underline"
                    >
                      {project.name}
                    </Link>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {project.description}
                    </p>
                  </div>
                </div>
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
                    <DropdownMenuItem>Modifica</DropdownMenuItem>
                    <DropdownMenuItem>Duplica</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-500">
                      Elimina
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <FileText className="size-4" />
                  <span>{project.documentsCount} documenti</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="size-4" />
                  <span>{project.lastUpdated}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* New Project Card */}
        <Card className="border-dashed hover:border-foreground/20 transition-colors cursor-pointer">
          <CardContent className="p-6 flex flex-col items-center justify-center h-full min-h-[160px] text-muted-foreground hover:text-foreground transition-colors">
            <Plus className="size-5 mb-3" />
            <span className="text-sm font-medium">Crea nuovo progetto</span>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
