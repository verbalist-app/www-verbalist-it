"use client"

import * as React from "react"
import { Check, ChevronsUpDown, Languages } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLanguages, getLanguageByCode } from "../_lib/google-languages"
import { useTargetLanguage } from "../_lib/target-language"
import { useDashboardLocale } from "../_lib/dashboard-locale"

const content = {
  it: {
    searchPlaceholder: "Cerca lingua...",
    emptyMessage: "Nessuna lingua trovata.",
    label: "Lingua di output",
  },
  en: {
    searchPlaceholder: "Search language...",
    emptyMessage: "No language found.",
    label: "Output language",
  },
}

export function LanguageSelector() {
  const [open, setOpen] = React.useState(false)
  const { targetLanguage, setTargetLanguage } = useTargetLanguage()
  const { t } = useDashboardLocale()
  const txt = t(content)

  const selectedLanguage = getLanguageByCode(targetLanguage)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          role="combobox"
          aria-expanded={open}
          aria-label={txt.label}
          className="h-9 gap-2 px-3"
        >
          <Languages className="size-4 shrink-0" />
          <span className="hidden sm:inline truncate max-w-[120px]">
            {selectedLanguage?.nativeName ?? targetLanguage}
          </span>
          <span className="sm:hidden uppercase text-xs font-medium">
            {targetLanguage.split("-")[0]}
          </span>
          <ChevronsUpDown className="size-3.5 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-0" align="end">
        <Command>
          <CommandInput placeholder={txt.searchPlaceholder} />
          <CommandList>
            <CommandEmpty>{txt.emptyMessage}</CommandEmpty>
            <CommandGroup>
              {googleLanguages.map((lang) => (
                <CommandItem
                  key={lang.code}
                  value={`${lang.name} ${lang.nativeName} ${lang.code}`}
                  onSelect={() => {
                    setTargetLanguage(lang.code)
                    setOpen(false)
                  }}
                >
                  <span className="flex-1 truncate">
                    <span className="font-medium">{lang.nativeName}</span>
                    {lang.nativeName !== lang.name && (
                      <span className="text-muted-foreground ml-1.5 text-xs">
                        {lang.name}
                      </span>
                    )}
                  </span>
                  <Check
                    className={cn(
                      "size-4 shrink-0",
                      targetLanguage === lang.code ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
