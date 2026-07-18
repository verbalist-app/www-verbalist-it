# Tracking plan — www.verbalist.it

Aggiornato: 2026-07-18 · Owner: SEO/Analytics (NUR)

## Strumenti

| Strumento | ID | Dove vive |
|---|---|---|
| Google Tag Manager | `GTM-KMFNL4BM` | iniettato da `Tracking.astro` (env `PUBLIC_GTM_ID`) |
| Google Analytics 4 | `G-Y8NEQ3710B` | tag dentro GTM |
| Microsoft Clarity | `xob37uo0tb` | tag dentro GTM (custom HTML + `consentv2`) |
| Vercel Analytics | — | cookieless, `/_vercel/insights` (env `PUBLIC_VERCEL_ANALYTICS`) |
| HubSpot Forms | portal `26552285` | embed su `/contatti` (form lead) |

**Regola**: GTM è l'hub unico. Nessuno script di terze parti fuori da GTM
(eccezioni: Vercel Analytics perché cookieless, HubSpot perché funzionale al form).

## Architettura del consenso

- Consent Mode v2, default **negato** su tutte le categorie (`Tracking.astro`);
  `security_storage` granted. Consenso salvato in localStorage
  (`verbalist-consent`), validità 12 mesi, sincronizzato tra tab.
- Tutti i tag GA4/Clarity hanno il consent check GTM su `analytics_storage`
  e sparano su All Pages + trigger `Consent Update - Granted`.
- Clarity riceve anche il proprio segnale `consentv2` (`ad_Storage` sempre
  denied); alla revoca il banner invia denied e cancella `_clck`/`_clsk`,
  oltre a `_ga*`. I cookie orfani di strumenti dismessi (`_cs*`, `_hj*`)
  vengono cancellati sempre.

## Eventi

Gli eventi del sito partono da `CookieBanner.astro` (delegazione click +
postMessage HubSpot) e `BlogSearch.astro` (ricerca). GTM li consuma con
trigger customEvent. Convenzione nomi: evento GA4 raccomandato dove esiste
(`search`, `click`, `generate_lead`, `scroll`, `filter_content`), famiglia
`cta_*` per le call-to-action.

| Evento | Descrizione / decisione che informa | Parametri | Sorgente |
|---|---|---|---|
| `page_view` | Traffico e landing (automatico) | standard GA4 | Google Tag |
| `cta_prova_gratis` | Quale CTA porta alla registrazione | `link_text`, `link_url` | sito → dataLayer |
| `cta_accedi` | Click login utenti esistenti | — | sito → dataLayer |
| `cta_contatti` | Intento demo/contatto (link interni a /contatti) | `link_text`, `link_url` | sito → dataLayer |
| `generate_lead` | **Conversione**: submit form HubSpot su /contatti | `form_id` | postMessage HubSpot → dataLayer |
| `click` (outbound) | Uscite verso siti esterni | `link_url`, `outbound=true` | sito → dataLayer |
| `search` | Cosa cercano nel blog (0 risultati = gap editoriale) | `search_term`, `search_results` | BlogSearch → dataLayer (debounce 900ms, ≥3 char) |
| `faq_interaction` | Quali FAQ vengono aperte | `question_text` | trigger click GTM (`data-gtm="faq-accordion"`) |
| `filter_content` | Categorie blog più cliccate | `category` | trigger click GTM (`data-gtm="blog-filter"`) |
| `scroll` | Profondità lettura (25/50/75/90) | `percent_scrolled` | trigger scroll GTM |
| `consent_update` | Stato consenso (uso interno, fa ripartire i tag) | `consent_analytics` | banner → dataLayer |
| Clarity `prova_gratis` | Filtro registrazioni in Clarity | — | smart event Clarity su evento GTM |

## Configurazione GA4 (Admin)

**Custom dimensions** (scope evento) da registrare — senza, i parametri non
compaiono nei report:

| Nome dimensione | Parametro |
|---|---|
| Link text | `link_text` |
| Link URL | `link_url` |
| Form ID | `form_id` |
| FAQ question | `question_text` |
| Blog category | `category` |
| Search results count | `search_results` |

(`search_term` e `percent_scrolled` sono dimensioni predefinite GA4.)

**Key events**: `generate_lead` (primario), `cta_prova_gratis` (secondario).

**Enhanced measurement** (stream web): disattivare **Scrolls** e **Outbound
clicks** — li mandiamo già da GTM con parametri più ricchi e consent-consistent;
tenerli attivi duplica gli eventi.

**Data retention**: 14 mesi (il default è 2).

**Google Signals**: spento (GDPR, nessun uso ads).

## Funnel registrazione (da implementare su app.verbalist.it)

Oggi misuriamo l'intento (`cta_prova_gratis`) ma non la registrazione
completata: il tasso CTA→signup non è calcolabile. Pacchetto per il team app:

1. Installare gtag.js nell'app con la **stessa property** `G-Y8NEQ3710B` e
   Consent Mode v2 (default denied + banner consenso lato app, stesso pattern
   del sito).
2. Al completamento della registrazione, inviare l'evento GA4 raccomandato:
   ```js
   gtag('event', 'sign_up', { method: 'email' }); // o 'google', ecc.
   ```
3. Cross-domain: in GA4 Admin → Data streams → Configure tag settings →
   *Configure your domains* aggiungere `verbalist.it` e `app.verbalist.it`
   (il linker `_gl` passa il client ID tra i domini); in *List unwanted
   referrals* aggiungere `app.verbalist.it`. → configurazione lato GA4,
   non richiede codice.
4. Marcare `sign_up` come key event.

Con questo, in GA4: funnel `page_view → cta_prova_gratis → sign_up` con
attribuzione alla sorgente marketing originale.

## Convenzioni UTM

- Tutto lowercase, underscore come separatore.
- `utm_source` = piattaforma (`linkedin`, `newsletter`, `google`);
  `utm_medium` = mezzo (`social`, `email`, `cpc`);
  `utm_campaign` = nome campagna (`lancio_agenti_2026`);
  `utm_content` = variante/posizione (`post_organico`, `footer_cta`).
- Mai UTM su link interni (azzerano la sessione di attribuzione).

## Validazione

- GA4 DebugView + GTM Preview per ogni modifica ai tag.
- Checklist: evento spara una sola volta; parametri valorizzati; niente PII;
  consenso rispettato (nessun cookie `_ga*`/`_clck` prima dell'accettazione);
  revoca cancella i cookie.
- Le versioni GTM si pubblicano con nome e descrizione parlanti; le note di
  tag e trigger spiegano il perché di ogni scelta.
