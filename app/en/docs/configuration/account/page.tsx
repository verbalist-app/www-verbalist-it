import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Account Settings",
  description: "Email, password and personal preferences for your Verbalist account.",
}

export default function AccountPage() {
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
            Account Settings
          </h1>
          <p className="text-muted-foreground mb-8">
            Manage your account information and personal preferences.
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-medium mt-8 mb-4">Profile</h2>
            <p className="text-foreground/80 mb-4">
              Edit name, email and avatar. Email is used for login and notifications. You can change it at any time by verifying the new email.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Password</h2>
            <p className="text-foreground/80 mb-4">
              Change password from the security section. Use a strong, unique password. We also support Google login if you prefer to avoid passwords.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Interface language</h2>
            <p className="text-foreground/80 mb-4">
              Choose Verbalist's interface language. This doesn't affect the language of generated content, which depends on keyword and generation settings.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Email notifications</h2>
            <p className="text-foreground/80 mb-4">
              Configure which notifications to receive: analysis completion, product updates, usage tips. You can disable everything except security notifications.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Timezone</h2>
            <p className="text-foreground/80 mb-4">
              Set your timezone for correct timestamps in analyses and reports. The system detects it automatically but you can modify it manually.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Delete account</h2>
            <p className="text-foreground/80 mb-4">
              You can delete your account from the privacy section. This action is irreversible and deletes all data: projects, analyses, generated content.
            </p>
          </div>
        </div>
    </article>
  )
}
