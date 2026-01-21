# Verbalist Brand Book

## Filosofia del Design

Verbalist adotta un design **minimalista monocromatico**. L'interfaccia è pulita, essenziale e priva di distrazioni visive. Ogni elemento ha uno scopo preciso.

---

## Palette Colori

### Colori Principali (Light Mode)

| Nome | Valore OKLCH | Uso |
|------|--------------|-----|
| Background | `oklch(1 0 0)` | Sfondo principale, cards |
| Foreground | `oklch(0.15 0 0)` | Testo principale |
| Muted | `oklch(0.96 0 0)` | Sfondi secondari, hover states |
| Muted Foreground | `oklch(0.5 0 0)` | Testo secondario |
| Border | `oklch(0.92 0 0)` | Bordi elementi |

### Colori Principali (Dark Mode)

| Nome | Valore OKLCH | Uso |
|------|--------------|-----|
| Background | `oklch(0.15 0 0)` | Sfondo principale |
| Foreground | `oklch(0.98 0 0)` | Testo principale |
| Muted | `oklch(0.2 0 0)` | Sfondi secondari |
| Muted Foreground | `oklch(0.6 0 0)` | Testo secondario |
| Border | `oklch(0.25 0 0)` | Bordi elementi |

### Colori Funzionali (Status)

Usati **esclusivamente** per indicare stati. Sempre nella variante 500.

| Stato | Colore Testo | Colore Background |
|-------|--------------|-------------------|
| Successo/Completato | `text-green-500` | `bg-green-500/10` |
| In corso/Warning | `text-yellow-500` | `bg-yellow-500/10` |
| Errore/Eliminazione | `text-red-500` | `bg-red-500/10` |

---

## Tipografia

### Font Families

| Tipo | Font | Uso |
|------|------|-----|
| Sans-serif | **Inter** | Testo principale, UI, titoli |
| Serif | **Playfair Display** | Titoli marketing (opzionale) |
| Monospace | **SF Mono / system** | Codice, keyword, dati tecnici |

### Font Source
- **Inter**: [Google Fonts](https://fonts.google.com/specimen/Inter)
- Licenza: SIL Open Font License (gratuito per uso commerciale)

### Font Weights

**Importante:** Utilizzare sempre `font-medium` (500), mai `font-semibold` (600).

| Classe Tailwind | Weight | Uso |
|-----------------|--------|-----|
| `font-normal` | 400 | Testo body |
| `font-medium` | 500 | Titoli, label, elementi enfatizzati |

### Dimensioni Titoli

| Elemento | Classe | Uso |
|----------|--------|-----|
| H1 | `text-2xl font-medium tracking-tight` | Titoli pagina |
| H2 | `text-xl font-medium` | Sezioni principali |
| H3 | `text-lg font-medium` | Sottosezioni |
| Body | `text-sm` o `text-base` | Testo normale |
| Small | `text-xs` | Label, metadata |

---

## Componenti

### Cards

- Sfondo: bianco puro (`--card: oklch(1 0 0)`)
- Bordo: `border-border` (grigio chiaro)
- **Nessuna ombra** (`shadow: none`)
- Border radius: `--radius: 0.5rem`

### Bottoni

| Variante | Stile |
|----------|-------|
| Default | Sfondo nero, testo bianco |
| Outline | Bordo grigio, sfondo trasparente |
| Ghost | Nessun bordo, hover con sfondo muted |

### Icone

- Libreria: **Lucide React**
- Dimensione standard: `size-4` (16px) o `size-5` (20px)
- Colore: `text-muted-foreground` per icone decorative
- **Mai** usare sfondi colorati dietro le icone
- **Mai** usare cerchi o box colorati per contenere icone

```tsx
// Corretto
<FileText className="size-4 text-muted-foreground" />

// Errato - non fare mai questo
<div className="bg-blue-500 rounded-lg p-2">
  <FileText className="size-4 text-white" />
</div>
```

### Input e Form

- Bordo: `border-input`
- Focus ring: `ring-ring`
- Altezza standard: `h-9` o `h-10`

### Badge/Status Pills

```tsx
<span className="rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-500/10 text-green-500">
  Completato
</span>
```

---

## Layout

### Dashboard

- Sidebar collassabile a sola icona
- Header altezza: `h-14` (56px)
- Sidebar e header allineati in altezza
- Logo centrato nella sidebar header

### Spacing

| Uso | Classe |
|-----|--------|
| Gap tra sezioni | `space-y-6` o `space-y-8` |
| Padding cards | `p-4` o `p-6` |
| Gap elementi inline | `gap-2` o `gap-3` |

---

## Regole Generali

1. **Nessuna ombra** - Le shadow sono disabilitate globalmente
2. **Monocromatico** - Solo scala di grigi, colori solo per status
3. **Minimalismo** - Meno elementi possibili, ogni cosa ha uno scopo
4. **Consistenza** - Stessi pattern in tutta l'applicazione
5. **Peso font** - Sempre 500 (medium), mai 600 (semibold)
6. **Icone nude** - Mai icone con sfondi colorati

---

## Logo

### Logotipo

- File: `/public/logo.svg` (solo simbolo V)
- File: `/public/logo-full.svg` (simbolo + wordmark)

### Utilizzo

| Contesto | File |
|----------|------|
| Dashboard sidebar | `logo.svg` (solo simbolo) |
| Footer sito | `logo-full.svg` |
| Favicon | `logo.svg` |

### Dimensioni

- Sidebar: `size-6` (24px)
- Footer: `h-7` (28px)

---

## File di Riferimento

- CSS Variables: `/app/globals.css`
- Componenti UI: `/components/ui/`
- Layout Dashboard: `/app/dashboard/layout.tsx`
