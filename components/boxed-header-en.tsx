'use client'

import * as React from 'react'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Menu, X, Building2, Users, Megaphone, Search, Download, BarChart3, FileText, BookOpen, GraduationCap, HelpCircle, History, ShoppingCart, Sparkles, Landmark } from 'lucide-react'
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

const solutions = [
    { title: "Agencies", href: "/en/solutions/agencies", icon: Building2 },
    { title: "SEO Teams", href: "/en/solutions/seo-teams", icon: Users },
    { title: "Marketing Teams", href: "/en/solutions/marketing-teams", icon: Megaphone },
    { title: "Enterprise", href: "/en/solutions/enterprise", icon: Landmark },
    { title: "Ecommerce", href: "/en/solutions/ecommerce", icon: ShoppingCart },
    { title: "AI Strategist", href: "/en/solutions/ai-strategist", icon: Sparkles },
]

const features = [
    { title: "SERP Analysis", href: "/en/platform/serp-analysis", icon: Search },
    { title: "Competitor Scraping", href: "/en/platform/competitor-scraping", icon: Download },
    { title: "Pattern Analysis", href: "/en/platform/pattern-analysis", icon: BarChart3 },
    { title: "Content Generation", href: "/en/platform/content-generation", icon: FileText },
]

const resources = [
    { title: "Blog", href: "/en/blog", icon: BookOpen },
    { title: "Changelog", href: "/en/changelog", icon: History },
    { title: "Docs", href: "/en/docs", icon: GraduationCap },
    { title: "FAQ", href: "/en/faq", icon: HelpCircle },
]

export const BoxedHeaderEn = () => {
    const [menuState, setMenuState] = React.useState(false)

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
            <nav
                data-state={menuState && 'active'}
                className="w-full">
                <div className="px-6 lg:px-12">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-4 lg:gap-0">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/en"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <div className="flex items-center gap-2 lg:hidden">
                                <Button asChild size="sm">
                                    <Link href="/en/book-demo">
                                        <span>Get started</span>
                                    </Link>
                                </Button>
                                <button
                                    onClick={() => setMenuState(!menuState)}
                                    aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
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
                                        <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <div className="w-[250px] p-4">
                                                <div className="mb-2 px-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Platform</div>
                                                <ul>
                                                    {features.map((item) => (
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
                                        <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <div className="w-[220px] p-4">
                                                <ul>
                                                    {solutions.map((item) => (
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
                                        <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <div className="w-[220px] p-4">
                                                <ul>
                                                    {resources.map((item) => (
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
                                            <Link href="/en/pricing">Pricing</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>

                                    {/* Book a demo */}
                                    <NavigationMenuItem>
                                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                            <Link href="/en/book-demo">Book a demo</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>

                        {/* Mobile Menu + CTA Buttons */}
                        <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden w-full">
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="platform" className="border-b-0">
                                        <AccordionTrigger className="py-3 text-base font-medium hover:no-underline">
                                            Platform
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="space-y-3 pl-2 pb-2">
                                                {features.map((item) => (
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
                                            Solutions
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="space-y-3 pl-2 pb-2">
                                                {solutions.map((item) => (
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
                                            Resources
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="space-y-3 pl-2 pb-2">
                                                {resources.map((item) => (
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
                                    <Link href="/en/pricing" onClick={() => setMenuState(false)} className="text-foreground font-medium block py-2">
                                        Pricing
                                    </Link>
                                    <Link href="/en/book-demo" onClick={() => setMenuState(false)} className="text-foreground font-medium block py-2">
                                        Book a demo
                                    </Link>
                                </div>
                                <div className="mt-6 pt-4 border-t">
                                    <Button asChild variant="outline" size="sm" className="w-full">
                                        <a href="https://app.verbalist.it" target="_blank" rel="noopener noreferrer">
                                            <span>Sign in</span>
                                        </a>
                                    </Button>
                                </div>
                            </div>
                            <div className="hidden lg:flex w-full flex-col space-y-3 sm:flex-row sm:items-center sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button asChild variant="outline" size="sm">
                                    <a href="https://app.verbalist.it" target="_blank" rel="noopener noreferrer">
                                        <span>Sign in</span>
                                    </a>
                                </Button>
                                <Button asChild size="sm">
                                    <Link href="/en/book-demo">
                                        <span>Get started</span>
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
