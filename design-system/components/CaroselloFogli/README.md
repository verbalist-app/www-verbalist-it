# CaroselloFogli

Una fila di fogli in 16:9 di cui uno a fuoco: quello al centro è carta, i vicini sono fantasmi di vetro.

Fornisci tu i fogli, ognuno un `Foglio` completo, e quale sta al centro.

- Foglio centrale `paper`; vicini `.vb-paper--ghost` (`ghost`, `blur-glass`) con il testo in `on-sky`: si intravedono, non si leggono, e sono nascosti ai lettori di schermo.
- Tra i fogli `space-30`; i vicini escono dai bordi della tela.
- Sulla fotografia limpida i vicini possono restare bianchi pieni: è la variante della prima slide.
- Fasi (`.vb-stages`): glifo iride da 56, nome in `paper-name`, descrizione in `paper-subtitle` `ink-muted`, badge a pillola sul filetto `line`, poi i `Chip`.

- Sì: tre fogli visibili, uno intero; un solo foglio a fuoco.
- No: frecce e pallini sovrapposti ai fogli; fogli di altezze diverse.
