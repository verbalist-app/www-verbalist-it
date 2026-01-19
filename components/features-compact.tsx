import { Search, BarChart3, FileText } from 'lucide-react'
import Link from 'next/link'

const features = [
    {
        icon: Search,
        title: 'Analisi SERP',
        description: 'Recupera i top 10 risultati Google e ne estrae struttura e contenuti.',
        href: '/piattaforma#serp-retrieval',
    },
    {
        icon: BarChart3,
        title: 'Pattern Detection',
        description: 'Identifica intent, topic ricorrenti, struttura heading e segnali E-E-A-T.',
        href: '/piattaforma#analyze',
    },
    {
        icon: FileText,
        title: 'Generazione AI',
        description: 'Crea contenuti completi ottimizzati per SEO, AEO e GEO.',
        href: '/piattaforma#generate',
    },
]

export function FeaturesCompact() {
    return (
        <section className="py-20 border-t">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-8 md:grid-cols-3">
                    {features.map((feature) => (
                        <Link
                            key={feature.title}
                            href={feature.href}
                            className="group space-y-3"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex size-10 items-center justify-center rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                                    <feature.icon className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>
                                <h3 className="font-medium">{feature.title}</h3>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
