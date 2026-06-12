// Edge Middleware (Vercel): gestisce le URL del vecchio sito.
// - /guide e /guide/getting-started hanno un equivalente -> 301
// - tutto il resto di /guide/* e /soluzioni/* non esiste più -> 410 Gone
// - /en/* (versione inglese del vecchio sito) non esiste più -> 410 Gone
// I redirect semplici (slug diversi con equivalente) stanno in vercel.json.
export const config = {
  matcher: [
    "/guide/:path*",
    "/soluzioni/:path*",
    "/guide",
    "/soluzioni",
    "/en/:path*",
    "/en",
  ],
};

const MOVED: Record<string, string> = {
  "/guide": "/help",
  "/guide/getting-started": "/help/creazione-documento",
};

export default function middleware(request: Request) {
  const { pathname } = new URL(request.url);
  const path = pathname.replace(/\/$/, "") || pathname;

  const target = MOVED[path];
  if (target) {
    return Response.redirect(new URL(target, request.url), 301);
  }

  const isEn = path === "/en" || path.startsWith("/en/");
  const t = isEn
    ? {
        lang: "en",
        title: "Content removed | Verbalist",
        heading: "This page no longer exists",
        text: "It was removed with the new Verbalist site, which is in Italian.",
        home: "Go to the homepage",
      }
    : {
        lang: "it",
        title: "Contenuto rimosso | Verbalist",
        heading: "Questo contenuto non esiste più",
        text: "La pagina è stata rimossa con il nuovo sito Verbalist.",
        home: "Vai alla home",
      };

  return new Response(
    `<!doctype html>
<html lang="${t.lang}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex" />
  <title>${t.title}</title>
  <style>
    body { font-family: ui-sans-serif, system-ui, sans-serif; color: #161b1d; display: grid; place-items: center; min-height: 90vh; margin: 0; }
    main { text-align: center; padding: 2rem; }
    h1 { font-size: 1.5rem; font-weight: 500; }
    p { color: #67787c; }
    a { color: #161b1d; }
  </style>
</head>
<body>
  <main>
    <h1>${t.heading}</h1>
    <p>${t.text}</p>
    <p><a href="/">${t.home}</a> · <a href="/help">Help center</a></p>
  </main>
</body>
</html>`,
    {
      status: 410,
      headers: { "content-type": "text/html; charset=utf-8" },
    }
  );
}
