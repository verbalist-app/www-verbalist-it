'use client'

import * as React from 'react'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Menu, X, Building2, Users, Megaphone, Search, Download, BarChart3, FileText, BookOpen, GraduationCap, HelpCircle, History, ShoppingCart, Sparkles, Landmark } from 'lucide-react'
import { LanguageSwitcher } from '@/components/language-switcher'
import { Button } from '@/components/ui/button'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

type Locale = 'it' | 'en'

const content = {
    it: {
        solutions: [
            { title: "Agenzie", href: "/soluzioni/agenzie", icon: Building2 },
            { title: "SEO Specialist", href: "/soluzioni/team-seo", icon: Users },
            { title: "Content Creator", href: "/soluzioni/team-marketing", icon: Megaphone },
            { title: "Startup e PMI", href: "/soluzioni/enterprise", icon: Landmark },
            { title: "Ecommerce", href: "/soluzioni/ecommerce", icon: ShoppingCart },
            { title: "AI Strategist", href: "/soluzioni/ai-strategist", icon: Sparkles },
        ],
        features: [
            { title: "Analisi risultati Google", href: "/piattaforma/analisi-serp", icon: Search },
            { title: "Analisi competitor", href: "/piattaforma/scraping-competitor", icon: Download },
            { title: "Analisi pattern", href: "/piattaforma/analisi-pattern", icon: BarChart3 },
            { title: "Generazione contenuto", href: "/piattaforma/generazione-contenuto", icon: FileText },
        ],
        resources: [
            { title: "Blog", href: "/blog", icon: BookOpen },
            { title: "Changelog", href: "/changelog", icon: History },
            { title: "Guide", href: "/guide", icon: GraduationCap },
            { title: "FAQ", href: "/faq", icon: HelpCircle },
        ],
        labels: {
            platform: "Piattaforma",
            solutions: "Soluzioni",
            resources: "Risorse",
            pricing: "Prezzi",
            bookDemo: "Prenota una demo",
            openMenu: "Apri Menu",
            closeMenu: "Chiudi Menu",
            signIn: "Accedi",
        },
        cta: { text: "Prenota una demo", href: "/prenota-demo" },
        basePath: "",
        pricingHref: "/prezzi",
        bookDemoHref: "/prenota-demo",
    },
    en: {
        solutions: [
            { title: "Agencies", href: "/en/solutions/agencies", icon: Building2 },
            { title: "SEO Specialist", href: "/en/solutions/seo-teams", icon: Users },
            { title: "Content Creator", href: "/en/solutions/marketing-teams", icon: Megaphone },
            { title: "Startups & SMBs", href: "/en/solutions/enterprise", icon: Landmark },
            { title: "Ecommerce", href: "/en/solutions/ecommerce", icon: ShoppingCart },
            { title: "AI Strategist", href: "/en/solutions/ai-strategist", icon: Sparkles },
        ],
        features: [
            { title: "Search Results Analysis", href: "/en/platform/serp-analysis", icon: Search },
            { title: "Competitor Analysis", href: "/en/platform/competitor-scraping", icon: Download },
            { title: "Pattern Analysis", href: "/en/platform/pattern-analysis", icon: BarChart3 },
            { title: "Content Generation", href: "/en/platform/content-generation", icon: FileText },
        ],
        resources: [
            { title: "Blog", href: "/en/blog", icon: BookOpen },
            { title: "Changelog", href: "/en/changelog", icon: History },
            { title: "Docs", href: "/en/docs", icon: GraduationCap },
            { title: "FAQ", href: "/en/faq", icon: HelpCircle },
        ],
        labels: {
            platform: "Platform",
            solutions: "Solutions",
            resources: "Resources",
            pricing: "Pricing",
            bookDemo: "Book a demo",
            openMenu: "Open Menu",
            closeMenu: "Close Menu",
            signIn: "Sign in",
        },
        cta: { text: "Book a demo", href: "/en/book-demo" },
        basePath: "/en",
        pricingHref: "/en/pricing",
        bookDemoHref: "/en/book-demo",
    },
} as const

interface BoxedHeaderProps {
    locale?: Locale
}

export const BoxedHeader = ({ locale = 'it' }: BoxedHeaderProps) => {
    const [menuState, setMenuState] = React.useState(false)
    const t = content[locale]

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
            <nav
                data-state={menuState && 'active'}
                className="w-full">
                <div className="mx-auto max-w-7xl px-6 lg:px-12">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-4 lg:gap-0">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href={t.basePath || "/"}
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <div className="flex items-center gap-2 lg:hidden">
                                <Button asChild size="sm">
                                    <Link href={t.cta.href}>
                                        <span>{t.cta.text}</span>
                                    </Link>
                                </Button>
                                <button
                                    onClick={() => setMenuState(!menuState)}
                                    aria-label={menuState ? t.labels.closeMenu : t.labels.openMenu}
                                    className="relative z-20 -m-2.5 block cursor-pointer p-2.5">
                                    <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                    <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                                </button>
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <NavigationMenu viewport={false}>
                                <NavigationMenuList>
                                    {/* Platform */}
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>{t.labels.platform}</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <div className="w-[250px] p-4">
                                                <div className="mb-2 px-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">{t.labels.platform}</div>
                                                <ul>
                                                    {t.features.map((item) => (
                                                        <li key={item.href}>
                                                            <NavigationMenuLink asChild>
                                                                <Link href={item.href} className="flex-row items-center gap-2">
                                                                    <item.icon className="size-4" />
                                                                    {item.title}
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>

                                    {/* Solutions */}
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>{t.labels.solutions}</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <div className="w-[220px] p-4">
                                                <ul>
                                                    {t.solutions.map((item) => (
                                                        <li key={item.href}>
                                                            <NavigationMenuLink asChild>
                                                                <Link href={item.href} className="flex-row items-center gap-2">
                                                                    <item.icon className="size-4" />
                                                                    {item.title}
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>

                                    {/* Resources */}
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>{t.labels.resources}</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <div className="w-[220px] p-4">
                                                <ul>
                                                    {t.resources.map((item) => (
                                                        <li key={item.href}>
                                                            <NavigationMenuLink asChild>
                                                                <Link href={item.href} className="flex-row items-center gap-2">
                                                                    <item.icon className="size-4" />
                                                                    {item.title}
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>

                                    {/* Pricing */}
                                    <NavigationMenuItem>
                                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                            <Link href={t.pricingHref}>{t.labels.pricing}</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>

                                    {/* Book a demo */}
                                    <NavigationMenuItem>
                                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                            <Link href={t.bookDemoHref}>{t.labels.bookDemo}</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>

                        {/* Mobile Menu + CTA Buttons */}
                        <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-xl border p-6 shadow-lg shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden w-full">
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="platform" className="border-b-0">
                                        <AccordionTrigger className="py-3 text-base font-medium hover:no-underline">
                                            {t.labels.platform}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="space-y-3 pl-2 pb-2">
                                                {t.features.map((item) => (
                                                    <li key={item.href}>
                                                        <Link href={item.href} onClick={() => setMenuState(false)} className="text-muted-foreground hover:text-accent-foreground block py-1 duration-150">
                                                            {item.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="solutions" className="border-b-0">
                                        <AccordionTrigger className="py-3 text-base font-medium hover:no-underline">
                                            {t.labels.solutions}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="space-y-3 pl-2 pb-2">
                                                {t.solutions.map((item) => (
                                                    <li key={item.href}>
                                                        <Link href={item.href} onClick={() => setMenuState(false)} className="text-muted-foreground hover:text-accent-foreground block py-1 duration-150">
                                                            {item.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="resources" className="border-b-0">
                                        <AccordionTrigger className="py-3 text-base font-medium hover:no-underline">
                                            {t.labels.resources}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="space-y-3 pl-2 pb-2">
                                                {t.resources.map((item) => (
                                                    <li key={item.href}>
                                                        <Link href={item.href} onClick={() => setMenuState(false)} className="text-muted-foreground hover:text-accent-foreground block py-1 duration-150">
                                                            {item.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                                <div className="mt-4 space-y-3">
                                    <Link href={t.pricingHref} onClick={() => setMenuState(false)} className="text-foreground font-medium block py-2">
                                        {t.labels.pricing}
                                    </Link>
                                    <Link href={t.bookDemoHref} onClick={() => setMenuState(false)} className="text-foreground font-medium block py-2">
                                        {t.labels.bookDemo}
                                    </Link>
                                </div>
                                <div className="mt-6 pt-4 border-t flex items-center justify-between gap-4">
                                    <LanguageSwitcher variant="header" />
                                    <Button asChild variant="outline" size="sm" className="flex-1">
                                        <a href="https://app.verbalist.it" target="_blank" rel="noopener noreferrer">
                                            <span>{t.labels.signIn}</span>
                                        </a>
                                    </Button>
                                </div>
                            </div>
                            <div className="hidden lg:flex w-full flex-col space-y-3 sm:flex-row sm:items-center sm:gap-3 sm:space-y-0 md:w-fit">
                                <LanguageSwitcher variant="header" />
                                <Button asChild variant="outline" size="sm">
                                    <a href="https://app.verbalist.it" target="_blank" rel="noopener noreferrer">
                                        <span>{t.labels.signIn}</span>
                                    </a>
                                </Button>
                                <Button asChild size="sm">
                                    <Link href={t.cta.href}>
                                        <span>{t.cta.text}</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
