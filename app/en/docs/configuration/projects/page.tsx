import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Project Management",
  description: "Creating, organizing and archiving projects in Verbalist.",
}

export default function ProjectsPage() {
  return (
    <article className="pt-20 md:pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/en/docs/configuration"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Configuration
          </Link>

          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Project Management
          </h1>
          <p className="text-muted-foreground mb-8">
            Organize your work in projects to keep everything tidy.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Creating a project</h2>
            <p className="text-foreground/80 mb-4">
              Click "New project" in the dashboard. Assign a descriptive name (e.g., "Company blog", "E-commerce site", "Client X"). You can add an optional description.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Organizing analyses</h2>
            <p className="text-foreground/80 mb-4">
              Each SERP analysis and generated content belongs to a project. This makes it easy to find all work related to a site or client.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Project settings</h2>
            <p className="text-foreground/80 mb-4">
              Each project can have default settings: country and language for analyses, preferred AI model, associated Tone Profile. New analyses inherit these settings.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Sharing projects</h2>
            <p className="text-foreground/80 mb-4">
              You can invite collaborators to a project. Define permissions: read-only, edit, or admin. Useful for teams or sharing with clients.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Archiving projects</h2>
            <p className="text-foreground/80 mb-4">
              Completed or inactive projects can be archived. They remain accessible but don't appear in the main dashboard. You can restore them at any time.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Deleting projects</h2>
            <p className="text-foreground/80 mb-4">
              Deletion is permanent and removes all analyses and content from the project. Consider archiving if you might need it in the future.
            </p>
          </div>
        </div>
    </article>
  )
}
