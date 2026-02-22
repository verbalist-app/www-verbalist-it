import type { Metadata } from "next"
import Image from "next/image"
import { Download } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Linee Guida del Brand",
  description:
    "Linee guida del brand Verbalist. Loghi, colori, tipografia e regole d'uso per rappresentare correttamente il marchio.",
  alternates: {
    canonical: "/brand",
  },
  robots: {
    index: false,
    follow: false,
  },
}

function DownloadButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      download
      className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
    >
      <Download className="size-3" style={{ color: '#473424' }} />
      {label}
    </a>
  )
}

function ColorSwatch({
  name,
  variable,
  value,
  light,
}: {
  name: string
  variable: string
  value: string
  light?: boolean
}) {
  return (
    <div className="flex items-center gap-4">
      <div
        className={`size-12 rounded-lg border border-border flex-shrink-0 ${light ? "ring-1 ring-inset ring-border" : ""}`}
        style={{ backgroundColor: value }}
      />
      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-muted-foreground font-mono">
          {variable}
        </p>
      </div>
    </div>
  )
}

export default function BrandPage() {
  return (
    <section className="pt-20 md:pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <Badge variant="secondary" className="mb-4">
            Brand
          </Badge>
          <h1 className="font-serif text-3xl md:text-4xl font-medium tracking-tighter mb-4">
            Linee guida del brand
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
            Queste linee guida servono a garantire un uso coerente e corretto
            del marchio Verbalist. Per qualsiasi dubbio, contattaci prima
            di utilizzare i nostri asset.
          </p>
        </div>

        <div className="space-y-20">
          {/* ── Logo ── */}
          <section>
            <h2 className="font-serif text-2xl font-medium tracking-tight mb-2">Logo</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Il logo Verbalist è composto da un marchio (la &quot;V&quot;
              geometrica) e dal logotipo. Possono essere usati insieme o
              separatamente, a seconda del contesto.
            </p>

            {/* Full logo */}
            <div className="space-y-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
                  Logo completo
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white border border-border rounded-lg p-10 flex items-center justify-center">
                    <Image
                      src="/logo-Verbalist-full.svg"
                      alt="Verbalist logo – versione scura"
                      width={280}
                      height={56}
                      className="h-10 w-auto"
                    />
                  </div>
                  <div className="bg-foreground border border-border rounded-lg p-10 flex items-center justify-center">
                    <Image
                      src="/brand/logo-Verbalist-full-light.svg"
                      alt="Verbalist logo – versione chiara"
                      width={280}
                      height={56}
                      className="h-10 w-auto"
                    />
                  </div>
                </div>
                <div className="flex gap-4 mt-3">
                  <DownloadButton href="/logo-Verbalist-full.svg" label="SVG scuro" />
                  <DownloadButton
                    href="/brand/logo-Verbalist-full-light.svg"
                    label="SVG chiaro"
                  />
                </div>
              </div>

              {/* Mark only */}
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
                  Marchio
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white border border-border rounded-lg p-10 flex items-center justify-center">
                    <Image
                      src="/logo.svg"
                      alt="Verbalist mark – versione scura"
                      width={64}
                      height={64}
                      className="h-14 w-auto"
                    />
                  </div>
                  <div className="bg-foreground border border-border rounded-lg p-10 flex items-center justify-center">
                    <Image
                      src="/brand/logo-mark-light.svg"
                      alt="Verbalist mark – versione chiara"
                      width={64}
                      height={64}
                      className="h-14 w-auto"
                    />
                  </div>
                </div>
                <div className="flex gap-4 mt-3">
                  <DownloadButton href="/logo.svg" label="SVG scuro" />
                  <DownloadButton
                    href="/brand/logo-mark-light.svg"
                    label="SVG chiaro"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ── Clear space ── */}
          <section>
            <h2 className="font-serif text-2xl font-medium tracking-tight mb-2">
              Area di rispetto
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-2xl">
              Mantenere sempre un&apos;area di rispetto minima attorno al logo
              pari all&apos;altezza della &quot;V&quot; del marchio. Nessun
              elemento grafico o testuale deve invadere questo spazio.
            </p>
            <div className="bg-muted border border-border rounded-lg p-10 flex items-center justify-center">
              <div className="border-2 border-dashed border-foreground/20 p-8 rounded-lg">
                <Image
                  src="/logo-Verbalist-full.svg"
                  alt="Verbalist logo con area di rispetto"
                  width={220}
                  height={44}
                  className="h-8 w-auto"
                />
              </div>
            </div>
          </section>

          {/* ── Colors ── */}
          <section>
            <h2 className="font-serif text-2xl font-medium tracking-tight mb-2">Colori</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Il design system Verbalist usa una palette calda e terrosa.
              Toni marroni e beige per un aspetto organico e professionale.
            </p>

            <div className="space-y-8">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  Colori primari
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <ColorSwatch
                    name="Foreground"
                    variable="--foreground"
                    value="oklch(0.3421 0.0379 61.15)"
                  />
                  <ColorSwatch
                    name="Background"
                    variable="--background"
                    value="oklch(0.9779 0.0042 56.38)"
                    light
                  />
                </div>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  Colori di sistema
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <ColorSwatch
                    name="Primary"
                    variable="--primary"
                    value="oklch(0.5967 0.0558 61.59)"
                  />
                  <ColorSwatch
                    name="Muted Foreground"
                    variable="--muted-foreground"
                    value="oklch(0.4563 0.0061 48.59)"
                  />
                  <ColorSwatch
                    name="Border"
                    variable="--border"
                    value="oklch(0.3421 0.0379 61.15 / 7.5%)"
                    light
                  />
                  <ColorSwatch
                    name="Muted"
                    variable="--muted"
                    value="oklch(0.3421 0.0379 61.15 / 5%)"
                    light
                  />
                </div>
              </div>

              {/* Full palette strip */}
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  Palette completa
                </p>
                <div className="flex rounded-lg overflow-hidden border border-border h-16">
                  <div className="flex-1" style={{ backgroundColor: 'oklch(0.3421 0.0379 61.15)' }} />
                  <div className="flex-1" style={{ backgroundColor: 'oklch(0.4563 0.0061 48.59)' }} />
                  <div className="flex-1" style={{ backgroundColor: 'oklch(0.5967 0.0558 61.59)' }} />
                  <div className="flex-1" style={{ backgroundColor: 'oklch(0.7262 0.0037 67.77)' }} />
                  <div className="flex-1" style={{ backgroundColor: 'oklch(0.9068 0.0112 89.73)' }} />
                  <div className="flex-1" style={{ backgroundColor: 'oklch(0.9404 0.0082 61.08)' }} />
                  <div className="flex-1" style={{ backgroundColor: 'oklch(0.9779 0.0042 56.38)' }} />
                  <div className="flex-1" style={{ backgroundColor: 'oklch(1 0 0)' }} />
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-[10px] text-muted-foreground font-mono">
                    Foreground
                  </span>
                  <span className="text-[10px] text-muted-foreground font-mono">
                    Background
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ── Typography ── */}
          <section>
            <h2 className="font-serif text-2xl font-medium tracking-tight mb-2">
              Tipografia
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Usiamo Geist Sans come font principale per interfacce e testi.
              Asar per i titoli e gli heading. Per contesti monospazio usiamo Geist Mono.
            </p>

            <div className="space-y-6">
              <div className="bg-muted border border-border rounded-lg p-8">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  Asar &mdash; Serif (titoli)
                </p>
                <p className="font-serif text-4xl font-medium tracking-tight mb-4">
                  Aa Bb Cc Dd Ee Ff Gg
                </p>
                <p className="font-serif text-sm text-muted-foreground">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
                  0123456789
                </p>
              </div>

              <div className="bg-muted border border-border rounded-lg p-8">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  Geist Sans &mdash; Sans-serif (corpo)
                </p>
                <p className="text-4xl font-light tracking-tight mb-1">
                  Aa Bb Cc Dd Ee Ff Gg
                </p>
                <p className="text-4xl font-medium tracking-tight mb-4">
                  Aa Bb Cc Dd Ee Ff Gg
                </p>
                <p className="text-sm text-muted-foreground">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
                  0123456789
                </p>
              </div>
            </div>
          </section>

          {/* ── Usage guidelines ── */}
          <section>
            <h2 className="font-serif text-2xl font-medium tracking-tight mb-2">
              Regole d&apos;uso
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Per mantenere l&apos;integrità del brand, segui queste regole
              quando usi il logo e gli asset Verbalist.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Do's */}
              <div className="space-y-4">
                <p className="text-xs font-medium uppercase tracking-wider text-foreground">
                  Corretto
                </p>
                {[
                  "Usa il logo su sfondi bianchi, neri o grigi neutri",
                  "Mantieni le proporzioni originali del logo",
                  "Usa la versione chiara su sfondi scuri e viceversa",
                  "Lascia sufficiente area di rispetto attorno al logo",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-muted border border-border rounded-lg p-4"
                  >
                    <span className="text-foreground text-sm mt-0.5">
                      &#10003;
                    </span>
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>

              {/* Don'ts */}
              <div className="space-y-4">
                <p className="text-xs font-medium uppercase tracking-wider text-foreground">
                  Non corretto
                </p>
                {[
                  "Non distorcere, ruotare o alterare il logo",
                  "Non applicare colori diversi dal bianco e nero",
                  "Non posizionare il logo su sfondi fotografici complessi",
                  "Non aggiungere ombre, bordi o effetti al logo",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-muted border border-border rounded-lg p-4"
                  >
                    <span className="text-foreground text-sm mt-0.5">
                      &#10007;
                    </span>
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Contact ── */}
          <section className="bg-muted rounded-xl p-8 md:p-12 border border-border">
            <h3 className="font-serif text-2xl font-medium tracking-tight mb-4">
              Hai bisogno degli asset in un altro formato?
            </h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
              Contattaci per ricevere i file in PNG, PDF, EPS o altri formati
              specifici.
            </p>
            <a
              href="mailto:brand@verbalist.ai"
              className="inline-flex items-center gap-2 text-sm bg-foreground text-background px-6 py-3 rounded-lg hover:bg-foreground/90 transition-colors font-medium"
            >
              Contattaci
            </a>
          </section>
        </div>
      </div>
    </section>
  )
}
