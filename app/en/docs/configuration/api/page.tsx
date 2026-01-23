import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "API and Integrations",
  description: "Connecting Verbalist to other tools via API.",
}

export default function ApiPage() {
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
            API and Integrations
          </h1>
          <p className="text-muted-foreground mb-8">
            Automate workflows and integrate Verbalist with your tools.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">REST API</h2>
            <p className="text-foreground/80 mb-4">
              Verbalist exposes REST APIs for all main features: start analyses, retrieve patterns, generate content. Complete documentation available in the developer section.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Generating API keys</h2>
            <p className="text-foreground/80 mb-4">
              Go to Settings → API and generate a new key. You can create multiple keys with different permissions. Keys don't expire but you can revoke them at any time.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Rate limits</h2>
            <p className="text-foreground/80 mb-4">
              APIs have limits based on your plan. The system returns headers with remaining limits. Respect limits to avoid temporary blocks.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Webhooks</h2>
            <p className="text-foreground/80 mb-4">
              Configure webhooks to receive notifications when an analysis completes or content is generated. Useful for automated workflows without polling.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Native integrations</h2>
            <p className="text-foreground/80 mb-4">
              Ready integrations for: WordPress (direct publishing), Notion (automatic export), Zapier (connection with 5000+ apps), Make (advanced automations).
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">API usage</h2>
            <p className="text-foreground/80 mb-4">
              API calls consume credits like interface usage. Monitor usage from the dashboard to avoid surprises. You can set alerts for consumption thresholds.
            </p>
          </div>
        </div>
    </article>
  )
}
