// Piani reali dal -DEF (siteConfig.pricing): pacchetti una tantum, crediti 12 mesi.
// Fonte unica per Pricing1 (pagine interne) e per i prezzi della home.
// Prezzi e volumi compaiono anche in: pages/index.astro (JSON-LD),
// content/helpcenter/cosa-includono-i-piani.md e content/solutions/*.md
// (piano consigliato e FAQ). Se cambiano qui, vanno allineati anche lì.
export const TRIAL_HREF =
  "https://app.verbalist.it/login?registration&code=PROVAGRATUITA26";

export const pricingOptions = [
  {
    title: "Starter",
    price: "€270",
    period: "una tantum",
    description:
      "Per iniziare a produrre contenuti SEO con un volume sostenibile.",
    button: {
      text: "Prova gratis 30 giorni",
      variant: "muted",
      href: "https://app.verbalist.it/login?registration&code=PROVAGRATUITA26",
    },
    isPopular: false,
    features: [
      "30 contenuti",
      "Validi 12 mesi dall'acquisto",
      "Analisi dei risultati di Google, estrazione competitor e ottimizzazione",
      "Multi-lingua e multi-mercato",
    ],
  },
  {
    title: "Pro",
    price: "€500",
    period: "una tantum",
    description: "Per team marketing che producono contenuti su scala.",
    button: {
      text: "Prova gratis 30 giorni",
      variant: "accent",
      href: "https://app.verbalist.it/login?registration&code=PROVAGRATUITA26",
    },
    isPopular: true,
    features: [
      "70 contenuti",
      "Validi 12 mesi dall'acquisto",
      "Tutto il piano Starter",
    ],
  },
  {
    title: "Custom",
    price: "Su richiesta",
    period: "",
    description:
      "Per agenzie e aziende con volumi alti o esigenze custom su brand e workflow.",
    button: { text: "Contattaci", variant: "muted", href: "/contatti/" },
    isPopular: false,
    features: [
      "Volume di contenuti personalizzato sul caso d'uso",
      "Tutto il piano Pro",
      "Utenti del team illimitati",
      "Account manager dedicato",
      "Onboarding white-glove",
    ],
  },
];
