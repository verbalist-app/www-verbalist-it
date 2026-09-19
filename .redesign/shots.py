"""Screenshot full-page delle pagine chiave a 375/768/1440.

Uso: python3 .redesign/shots.py baseline   (oppure: after)
Richiede il dev server su http://localhost:4321.
"""
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE = "http://localhost:4321"
PAGES = {
    "home": "/",
    "contatti": "/contatti",
    "chi-siamo": "/chi-siamo",
    "soluzioni": "/soluzioni/",
    "soluzioni-agenzie": "/soluzioni/agenzie",
    "agenti-generazione-articolo": "/agenti/generazione-articolo",
    "clienti": "/clienti",
    "blog": "/blog",
    "changelog": "/changelog",
    "help": "/help",
}
WIDTHS = [375, 768, 1440]

out = Path(__file__).parent / (sys.argv[1] if len(sys.argv) > 1 else "baseline")
out.mkdir(parents=True, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch()
    for width in WIDTHS:
        ctx = browser.new_context(viewport={"width": width, "height": 900}, reduced_motion="reduce")
        page = ctx.new_page()
        for name, path in PAGES.items():
            resp = page.goto(BASE + path, wait_until="networkidle")
            # scroll reale: le immagini loading="lazy" non si caricano nel full page
            height = page.evaluate("document.documentElement.scrollHeight")
            for y in range(0, height, 600):
                page.evaluate(f"window.scrollTo(0, {y})")
                page.wait_for_timeout(80)
            page.add_style_tag(content="astro-dev-toolbar{display:none!important}")
            page.evaluate("window.scrollTo(0, 0)")
            page.wait_for_timeout(300)
            page.screenshot(path=str(out / f"{name}-{width}.png"), full_page=True)
            print(resp.status if resp else "?", f"{name}-{width}.png", f"h={height}")
        ctx.close()
    browser.close()
