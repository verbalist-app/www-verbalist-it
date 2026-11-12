# SchedaSelezionabile

Un gruppo di voci in cui una sola è a fuoco: quella attiva è una scheda bianca, le altre riposano in un pannello di vetro.

Fornisci tu le etichette (tre-cinque parole) e quale voce è selezionata.

- Selezionata: `.vb-card`, fondo `paper`, testo `navy` in `lead`, `radius-card`, `shadow-card`, spunta piena `navy`.
- A riposo: righe dentro `.vb-glass` (`glass`, bordo `glass-border`, `blur-glass`), testo `on-sky`, spunta `check-idle` su cerchio `paper`, divise da `rule-on-sky`.
- Ogni voce è alta `space-140`; tra scheda e vetro `space-16`; rientri `space-40`.

Lo stato lo dice il materiale, carta contro vetro, non il colore della spunta.

- Sì: una sola scheda bianca per gruppo; il vetro sempre sopra un cielo.
- No: più schede bianche insieme; vetro su `paper`; vetro su cielo più chiaro di `sky-600`, dove il testo scende sotto 3:1.
