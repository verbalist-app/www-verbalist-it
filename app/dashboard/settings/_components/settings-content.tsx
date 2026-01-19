"use client"

import * as React from "react"
import { User, Mail, Lock, Bell, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

// Mock user data
const user = {
  firstName: "Marco",
  lastName: "Rossi",
  email: "marco@agenzia.it",
  language: "it",
  notifications: {
    email: true,
    documentComplete: true,
    weeklyReport: false,
  },
}

export function SettingsContent() {
  const [firstName, setFirstName] = React.useState(user.firstName)
  const [lastName, setLastName] = React.useState(user.lastName)
  const [email, setEmail] = React.useState(user.email)
  const [language, setLanguage] = React.useState(user.language)
  const [notifications, setNotifications] = React.useState(user.notifications)

  return (
    <div className="space-y-8 max-w-2xl">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-medium tracking-tight">Impostazioni</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Gestisci il tuo account e le preferenze
        </p>
      </div>

      {/* Profile */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <User className="size-5" />
            <CardTitle className="text-base">Profilo</CardTitle>
          </div>
          <CardDescription>
            Le tue informazioni personali
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex size-16 items-center justify-center rounded-full bg-muted">
              <User className="size-8 text-muted-foreground" />
            </div>
            <div>
              <Button variant="outline" size="sm">
                Cambia avatar
              </Button>
              <p className="text-xs text-muted-foreground mt-1">
                JPG, PNG. Max 2MB.
              </p>
            </div>
          </div>
          <Separator />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">Nome</Label>
              <Input
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Cognome</Label>
              <Input
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button>Salva modifiche</Button>
          </div>
        </CardContent>
      </Card>

      {/* Email */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Mail className="size-5" />
            <CardTitle className="text-base">Email</CardTitle>
          </div>
          <CardDescription>
            L'email associata al tuo account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Indirizzo email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <Button>Aggiorna email</Button>
          </div>
        </CardContent>
      </Card>

      {/* Password */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Lock className="size-5" />
            <CardTitle className="text-base">Password</CardTitle>
          </div>
          <CardDescription>
            Aggiorna la password del tuo account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="currentPassword">Password attuale</Label>
            <Input id="currentPassword" type="password" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="newPassword">Nuova password</Label>
              <Input id="newPassword" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Conferma password</Label>
              <Input id="confirmPassword" type="password" />
            </div>
          </div>
          <div className="flex justify-end">
            <Button>Cambia password</Button>
          </div>
        </CardContent>
      </Card>

      {/* Language */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Globe className="size-5" />
            <CardTitle className="text-base">Lingua</CardTitle>
          </div>
          <CardDescription>
            Seleziona la lingua dell'interfaccia
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 max-w-xs">
            <Label>Lingua</Label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="it">Italiano</SelectItem>
                <SelectItem value="en">English</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Bell className="size-5" />
            <CardTitle className="text-base">Notifiche</CardTitle>
          </div>
          <CardDescription>
            Configura le notifiche email
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">Notifiche email</p>
              <p className="text-sm text-muted-foreground">
                Ricevi aggiornamenti via email
              </p>
            </div>
            <Switch
              checked={notifications.email}
              onCheckedChange={(checked) =>
                setNotifications({ ...notifications, email: checked })
              }
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">Documento completato</p>
              <p className="text-sm text-muted-foreground">
                Notifica quando un documento è pronto
              </p>
            </div>
            <Switch
              checked={notifications.documentComplete}
              onCheckedChange={(checked) =>
                setNotifications({ ...notifications, documentComplete: checked })
              }
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">Report settimanale</p>
              <p className="text-sm text-muted-foreground">
                Riepilogo settimanale dell'attività
              </p>
            </div>
            <Switch
              checked={notifications.weeklyReport}
              onCheckedChange={(checked) =>
                setNotifications({ ...notifications, weeklyReport: checked })
              }
            />
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-red-200">
        <CardHeader>
          <CardTitle className="text-base text-red-500">Zona pericolosa</CardTitle>
          <CardDescription>
            Azioni irreversibili sul tuo account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="destructive">Elimina account</Button>
        </CardContent>
      </Card>
    </div>
  )
}
