"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { FileText, Search } from "lucide-react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { docsSearchDataIT, docsSearchDataEN, type DocItem } from "@/lib/docs-search-data"

type Locale = "it" | "en"

interface CommandMenuProps {
  locale?: Locale
}

const translations = {
  it: {
    placeholder: "Cerca nella documentazione...",
    noResults: "Nessun risultato trovato.",
    searchDocs: "Cerca con ⌘K",
  },
  en: {
    placeholder: "Search documentation...",
    noResults: "No results found.",
    searchDocs: "Search with ⌘K",
  },
}

export function CommandMenu({ locale = "it" }: CommandMenuProps) {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()
  const t = translations[locale]
  const docsData = locale === "en" ? docsSearchDataEN : docsSearchDataIT

  // Group items by section
  const groupedItems = React.useMemo(() => {
    const groups: Record<string, DocItem[]> = {}
    docsData.forEach((item) => {
      if (!groups[item.section]) {
        groups[item.section] = []
      }
      groups[item.section].push(item)
    })
    return groups
  }, [docsData])

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const handleSelect = React.useCallback(
    (href: string) => {
      setOpen(false)
      router.push(href)
    },
    [router]
  )

  return (
    <>
      {/* Search trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-md border border-border hover:border-foreground/20 bg-background"
      >
        <Search className="h-4 w-4" />
        <span className="hidden sm:inline">{t.searchDocs}</span>
        <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={t.placeholder} />
        <CommandList>
          <CommandEmpty>{t.noResults}</CommandEmpty>
          {Object.entries(groupedItems).map(([section, items]) => (
            <CommandGroup key={section} heading={section}>
              {items.map((item) => (
                <CommandItem
                  key={item.href}
                  value={`${item.title} ${item.description} ${item.keywords?.join(" ") || ""}`}
                  onSelect={() => handleSelect(item.href)}
                  className="cursor-pointer"
                >
                  <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
                  <div className="flex flex-col">
                    <span>{item.title}</span>
                    <span className="text-xs text-muted-foreground">
                      {item.description}
                    </span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}
