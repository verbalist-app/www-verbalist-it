import Link from "next/link"
import { ArrowLeft, ChevronRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Configuration",
  description: "Verbalist settings and preferences.",
}

const articles = [
  {
    title: "Account settings",
    description: "Email, password and personal preferences.",
    href: "/en/docs/configuration/account",
  },
  {
    title: "Project management",
    description: "Creating, organizing and archiving projects.",
    href: "/en/docs/configuration/projects",
  },
  {
    title: "API and integrations",
    description: "Connecting Verbalist to other tools.",
    href: "/en/docs/configuration/api",
  },
]

export default function ConfigurationPage() {
  return (
    <section className="pt-20 md:pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/en/docs"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to documentation
          </Link>

          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Configuration
          </h1>
          <p className="text-base text-muted-foreground mb-8">
            Manage your account settings, projects and integrations with other tools.
          </p>

          <div className="space-y-3">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted transition-colors group"
              >
                <div>
                  <h2 className="font-medium text-sm">{article.title}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{article.description}</p>
                </div>
                <ChevronRight className="size-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
    </section>
  )
}
