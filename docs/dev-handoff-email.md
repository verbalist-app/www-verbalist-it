# Handoff Frontend Verbalist

**Oggetto:** Verbalist - Repository Frontend pronta per integrazione

---

Ciao team,

vi consegno la repository del frontend Verbalist, completa di sito marketing e dashboard applicativa.

**Nota sulla dashboard:** So che avevate gia sviluppato una versione della dashboard. Ho deciso di rifarla da zero all'interno di questa repository per due motivi:

1. **Uniformita tecnologica**: Sito e dashboard ora utilizzano lo stesso stack (Next.js 16, React 19, Tailwind CSS 4, shadcn/ui). Questo semplifica la manutenzione e permette di condividere componenti tra le due parti.

2. **Coerenza visiva**: Il design system e' ora identico tra sito marketing e dashboard - stesso look minimalista monocromatico, stessi componenti UI, stesse convenzioni.

La vostra dashboard precedente resta valida come riferimento per la logica di business e le integrazioni backend. Questa nuova versione e' puramente UI/frontend con dati mock, pronta per essere collegata alle vostre API.

Di seguito il riepilogo completo di quanto realizzato.

---

## 1. Overview del Progetto

**Stack tecnologico:**
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui components
- Recharts (grafici dashboard)
- Lucide React (icone)

**Struttura repository:**
```
/app
  /(site)           → Pagine marketing (layout con header/footer)
  /dashboard        → Dashboard applicativa (layout con sidebar)
  /globals.css      → Design tokens e variabili CSS
/components
  /ui               → Componenti shadcn/ui
/public
  /logo.svg         → Logotipo (solo simbolo V)
  /logo-full.svg    → Logo completo (simbolo + wordmark)
/docs
  /brand-book.md    → Linee guida design
```

---

## 2. Sito Marketing

### Pagine realizzate

| Route | Descrizione |
|-------|-------------|
| `/` | Homepage con hero, features, pricing preview, testimonial, FAQ |
| `/prodotto` | Panoramica prodotto |
| `/piattaforma` | Overview piattaforma |
| `/piattaforma/analisi-serp` | Feature: analisi SERP |
| `/piattaforma/scraping-competitor` | Feature: scraping competitor |
| `/piattaforma/analisi-pattern` | Feature: analisi pattern |
| `/piattaforma/generazione-contenuto` | Feature: generazione AI |
| `/prezzi` | Pagina pricing completa |
| `/soluzioni/agenzie` | Landing per agenzie |
| `/soluzioni/team-seo` | Landing per team SEO |
| `/soluzioni/team-marketing` | Landing per team marketing |
| `/integrazioni` | Integrazioni disponibili |
| `/guide/*` | Guide prodotto (SERP, pattern, scraping) |
| `/login` | Pagina login (UI only) |
| `/privacy-policy` | Privacy policy |
| `/termini` | Termini di servizio |

### Componenti chiave
- **BoxedHeader**: Header con navigazione, mega menu, CTA
- **Footer**: Footer completo con link, logo, social
- **PricingTable**: Tabella prezzi con toggle mensile/annuale
- **FAQ**: Accordion con domande frequenti
- **Testimonial**: Carousel testimonianze clienti

---

## 3. Dashboard Applicativa

### Pagine realizzate

| Route | Descrizione | Metadata Title |
|-------|-------------|----------------|
| `/dashboard` | Overview con stats e grafici | "Dashboard" |
| `/dashboard/documents` | Lista documenti con filtri, ricerca, ordinamento, paginazione | "Documenti" |
| `/dashboard/documents/new` | Wizard creazione documento (3 step) | "Nuovo Documento" |
| `/dashboard/documents/[id]` | Dettaglio documento con tabs (contenuto/analisi) | "Documento" |
| `/dashboard/projects` | Griglia progetti | "Progetti" |
| `/dashboard/projects/[id]` | Dettaglio progetto con lista documenti | "Progetto" |
| `/dashboard/settings` | Impostazioni account | "Impostazioni" |
| `/dashboard/subscription` | Gestione abbonamento | "Abbonamento" |

### Funzionalita UI implementate
- **Sidebar collassabile**: Si riduce a sola icona, logo centrato
- **Command Menu**: Ricerca globale con `Cmd+K`
- **Toast notifications**: Feedback azioni utente (Sonner)
- **Filtri avanzati**: Ricerca, filtro per stato/tipo/progetto
- **Ordinamento**: Click su colonne per ordinare
- **Selezione multipla**: Checkbox per azioni bulk
- **Paginazione**: Navigazione tra pagine risultati
- **Skeleton loading**: Stati di caricamento
- **Breadcrumbs**: Navigazione contestuale

### Grafici Dashboard
- Bar chart: documenti generati (ultimi 6 mesi)
- Line chart: utilizzo crediti (ultimi 6 mesi)

---

## 4. Design System

### Filosofia
Design **minimalista monocromatico**. Nessun colore se non per stati funzionali. Nessuna ombra. Pesi font leggeri.

### Palette colori
Solo scala di grigi in OKLCH:
- Background: `oklch(1 0 0)` (bianco puro)
- Foreground: `oklch(0.15 0 0)` (quasi nero)
- Muted: `oklch(0.96 0 0)` (grigio chiaro per hover)
- Border: `oklch(0.92 0 0)` (bordi sottili)

### Colori funzionali (solo per stati)
- Successo: `green-500`
- Warning: `yellow-500`
- Errore: `red-500`

### Tipografia
- **Sans-serif**: Geist (UI principale)
- **Serif**: Playfair Display (titoli marketing)
- **Monospace**: Geist Mono (codice, keyword)
- **Font weight**: Sempre 500 (medium), mai 600 (semibold)

### Regole componenti
- Card: sfondo bianco, bordo grigio, nessuna ombra
- Icone: mai con sfondi colorati, sempre nude
- Bottoni: default nero su bianco, outline per secondari

Riferimento completo: `/docs/brand-book.md`

---

## 5. Dati Mock

Tutte le pagine utilizzano dati mock hardcoded. I dati sono definiti direttamente nei componenti per facilità di sviluppo. Esempio strutture:

**Documento:**
```typescript
{
  id: string
  title: string
  keyword: string
  type: "blog_post" | "product_page" | "guide" | "landing_page"
  status: "completed" | "processing" | "failed"
  project: string
  projectId: string
  wordCount: number
  createdAt: string
  content: string
}
```

**Progetto:**
```typescript
{
  id: string
  name: string
  description: string
  documentsCount: number
  lastUpdated: string
}
```

**Utente (mock in layout):**
```typescript
{
  name: "Marco Rossi"
  email: "marco@agenzia.it"
  plan: "Professional"
}
```

---

## 6. Sottodomini da Configurare

Per il deploy completo servono:

| Sottodominio | Uso |
|--------------|-----|
| `app.verbalist.it` | Dashboard (o redirect da `/dashboard`) |
| `docs.verbalist.it` | Documentazione API/prodotto |
| `status.verbalist.it` | Status page uptime |

---

## 7. Cosa Manca (Backend)

La repository contiene solo il frontend. Per il funzionamento completo serve:

- Autenticazione utenti
- Database (utenti, progetti, documenti, abbonamenti)
- API REST/tRPC per CRUD
- Integrazione Stripe per pagamenti
- Integrazione AI per generazione contenuti
- Integrazione Google API per analisi SERP
- Sistema di crediti e limiti per piano

---

## 8. Come Testare

```bash
# Installare dipendenze
npm install

# Avviare in sviluppo
npm run dev

# Build produzione
npm run build

# Avviare produzione
npm start
```

Il sito e' navigabile completamente con i dati mock.

---

## 9. File Chiave

| File | Descrizione |
|------|-------------|
| `/app/globals.css` | Tutti i design tokens e variabili CSS |
| `/app/dashboard/layout.tsx` | Layout dashboard con sidebar e command menu |
| `/app/(site)/layout.tsx` | Layout sito marketing |
| `/components/boxed-header.tsx` | Header navigazione sito |
| `/components/footer.tsx` | Footer sito |
| `/docs/brand-book.md` | Documentazione design system |

---

Per qualsiasi chiarimento sono disponibile.

[Nome]

**Allegati:**
- Accesso repository: [URL]
- Figma/Design (se disponibile): [URL]
