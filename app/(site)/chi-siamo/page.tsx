import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chi Siamo",
  description: "Verbalist è un prodotto di NUR Digital Marketing. 25 anni di SEO, 430+ clienti, primi in Italia sulla GEO. Il team dietro al software.",
  alternates: {
    canonical: "/chi-siamo",
  },
  openGraph: {
    title: "Chi Siamo \\ Verbalist by NUR",
    description: "Verbalist è un prodotto di NUR Digital Marketing. 25 anni di SEO, 430+ clienti, primi in Italia sulla GEO.",
  },
}

export default function ChiSiamoPage() {
  return (
    <section className="pt-20 md:pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Chi Siamo
          </p>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            25 anni di esperienza SEO, ora in un software
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            Verbalist è un prodotto di <a href="https://www.nur.it/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline font-medium">NUR Digital Marketing</a>. 430+ clienti dal 1999, ora accessibile a tutti.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h3 className="text-xl font-medium tracking-tight mb-4">La storia</h3>
            <div className="prose prose-neutral max-w-none">
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                <a href="https://www.nur.it/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline font-medium">NUR Digital Marketing</a> esiste dal 1999. In 25 anni abbiamo lavorato con oltre 430 aziende in Italia e nel mondo. SEO, GEO, content optimization.
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                Abbiamo pubblicato il primo libro italiano sulla Generative Engine Optimization. Siamo HubSpot Partner Platinum. Lavoriamo con EY, Mercedes-Benz, LVMH, SDA Bocconi.
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                Verbalist nasce da questa esperienza. Automatizza le metodologie che usiamo da anni. Ogni funzionalità viene da pattern reali, testati su migliaia di campagne.
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Vogliamo rendere accessibili a tutti le stesse tecniche che usiamo per i clienti enterprise.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-medium tracking-tight mb-4">I numeri</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted rounded-lg p-6 border border-border">
                <h4 className="text-base font-medium mb-2">25+ anni</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nel digital marketing dal 1999. 430+ clienti in Italia e nel mondo.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-6 border border-border">
                <h4 className="text-base font-medium mb-2">Pattern testati</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ogni funzionalità viene da campagne reali. Niente teoria, solo cose che funzionano.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-6 border border-border">
                <h4 className="text-base font-medium mb-2">Risultati concreti</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ranking, traffico, conversioni. Metriche che contano, non vanity metrics.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-6 border border-border">
                <h4 className="text-base font-medium mb-2">Primi sulla GEO</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Primo libro italiano sulla Generative Engine Optimization. Primi servizi GEO in Italia.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-muted rounded-xl p-8 md:p-12 border border-border">
            <h3 className="text-xl font-medium tracking-tight mb-4">
              Vuoi vederlo in azione?
            </h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
              Ti mostriamo come funziona con una demo sul tuo caso.
            </p>
            <Link
              href="/prenota-demo"
              className="inline-flex items-center gap-2 text-sm bg-foreground text-background px-6 py-3 rounded-lg hover:bg-foreground/90 transition-colors font-medium"
            >
              Prenota una demo
            </Link>
          </section>
        </div>
      </div>
    </section>
  )
}
