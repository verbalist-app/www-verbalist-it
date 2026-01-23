"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  LayoutDashboard,
  FolderKanban,
  FileText,
  Settings,
  CreditCard,
  Plus,
  LogOut,
  User,
  ChevronDown,
  Search,
  ExternalLink,
  Globe,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Toaster } from "@/components/ui/sonner"

const navigation = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Progetti", href: "/dashboard/projects", icon: FolderKanban },
  { name: "Documenti", href: "/dashboard/documents", icon: FileText },
]

const secondaryNavigation = [
  { name: "Impostazioni", href: "/dashboard/settings", icon: Settings },
  { name: "Abbonamento", href: "/dashboard/subscription", icon: CreditCard },
]

// Mock user data
const user = {
  name: "Marco Rossi",
  email: "marco@agenzia.it",
  plan: "Professional",
  avatar: null,
}

// Mock recent documents for command menu
const recentDocuments = [
  { id: "1", title: "Guida completa al SEO nel 2025" },
  { id: "2", title: "Come scegliere il miglior CRM" },
  { id: "3", title: "10 strategie di marketing B2B" },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [commandOpen, setCommandOpen] = React.useState(false)

  // Command menu keyboard shortcut
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setCommandOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => void) => {
    setCommandOpen(false)
    command()
  }, [])

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader className="h-14 border-b border-border flex items-center justify-center">
          <Link href="/dashboard">
            <img src="/logo.svg" alt="Verbalist" className="size-6" />
          </Link>
        </SidebarHeader>

        <SidebarContent>
          {/* New Document Button */}
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Nuovo documento">
                    <Link href="/dashboard/documents/new">
                      <Plus className="size-4" />
                      <span>Nuovo documento</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Main Navigation */}
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navigation.map((item) => {
                  const isActive = pathname === item.href ||
                    (item.href !== "/dashboard" && pathname.startsWith(item.href))
                  return (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton asChild isActive={isActive} tooltip={item.name}>
                        <Link href={item.href}>
                          <item.icon className="size-4" />
                          <span>{item.name}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Secondary Navigation */}
          <SidebarGroup>
            <SidebarGroupLabel>Account</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {secondaryNavigation.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton asChild isActive={isActive} tooltip={item.name}>
                        <Link href={item.href}>
                          <item.icon className="size-4" />
                          <span>{item.name}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="border-t border-border">
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton size="lg" tooltip={user.name}>
                    <User className="size-4 shrink-0" />
                    <div className="flex flex-col gap-0.5 leading-none truncate group-data-[collapsible=icon]:hidden">
                      <span className="font-medium truncate">{user.name}</span>
                      <span className="text-xs text-muted-foreground truncate">{user.email}</span>
                    </div>
                    <ChevronDown className="ml-auto size-4 group-data-[collapsible=icon]:hidden" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-[--radix-dropdown-menu-trigger-width] min-w-56"
                  align="start"
                  side="top"
                  sideOffset={4}
                >
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/settings" className="cursor-pointer">
                      <Settings className="mr-2 size-4" />
                      Impostazioni
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/subscription" className="cursor-pointer">
                      <CreditCard className="mr-2 size-4" />
                      Abbonamento
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/login" className="cursor-pointer text-red-500">
                      <LogOut className="mr-2 size-4" />
                      Esci
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        {/* Top bar */}
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b border-border bg-background/80 backdrop-blur-lg px-4">
          <SidebarTrigger className="-ml-1" />

          {/* Search */}
          <Button
            variant="outline"
            className="relative h-9 w-full max-w-sm justify-start text-sm text-muted-foreground"
            onClick={() => setCommandOpen(true)}
          >
            <Search className="mr-2 size-4" />
            <span>Cerca...</span>
            <kbd className="pointer-events-none absolute right-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>

          <div className="flex-1" />

          <Button asChild variant="ghost" size="sm">
            <Link href="/en" title="Switch to English">
              <Globe className="mr-2 size-4" />
              EN
            </Link>
          </Button>

          <Button asChild variant="ghost" size="sm">
            <Link href="/" target="_blank">
              <ExternalLink className="mr-2 size-4" />
              Sito
            </Link>
          </Button>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 lg:p-6">{children}</main>
      </SidebarInset>

      {/* Command Menu */}
      <CommandDialog open={commandOpen} onOpenChange={setCommandOpen}>
        <CommandInput placeholder="Cerca documenti, progetti, azioni..." />
        <CommandList>
          <CommandEmpty>Nessun risultato trovato.</CommandEmpty>
          <CommandGroup heading="Azioni rapide">
            <CommandItem onSelect={() => runCommand(() => router.push("/dashboard/documents/new"))}>
              <Plus className="mr-2 size-4" />
              Nuovo documento
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/dashboard/projects"))}>
              <FolderKanban className="mr-2 size-4" />
              Vai ai progetti
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/dashboard/documents"))}>
              <FileText className="mr-2 size-4" />
              Vai ai documenti
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Documenti recenti">
            {recentDocuments.map((doc) => (
              <CommandItem
                key={doc.id}
                onSelect={() => runCommand(() => router.push(`/dashboard/documents/${doc.id}`))}
              >
                <FileText className="mr-2 size-4" />
                {doc.title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Impostazioni">
            <CommandItem onSelect={() => runCommand(() => router.push("/dashboard/settings"))}>
              <Settings className="mr-2 size-4" />
              Impostazioni
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/dashboard/subscription"))}>
              <CreditCard className="mr-2 size-4" />
              Abbonamento
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>

      {/* Toast notifications */}
      <Toaster />
    </SidebarProvider>
  )
}
