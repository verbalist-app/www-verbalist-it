# Glifi

Segni costruiti a blocchi su una griglia 4 × 4: ogni tratto è largo una cella, cioè un quarto del glifo.

Fornisci tu il tracciato SVG (viewBox `0 0 4 4`, solo celle intere) e il contesto: cielo o foglio.

- Sul cielo: bianco `on-sky`, lato `space-40` (cella `space-10`), in fila al passo `space-140`.
- Sul foglio: riempiti con l'iride (`iris-600`, `iris-400`, `iris-200`, `iris-peach`, `iris-cream`), lato 56, con il gradiente girato in una direzione diversa per ogni glifo.
- In negativo (`.vb-solid`): bianco su un quadrato `radius-chip` o un disco `ink` da 28, per le voci di una griglia sul foglio.
- Solo forme piene e ortogonali; una diagonale si fa a gradini.

Questi quattro glifi sono originali, disegnati con la grammatica del riferimento per i quattro agenti: non sono quelli delle slide.

- Sì: forme leggibili a 24px.
- No: tratti sottili, curve, icone a contorno; glifi iride sul cielo.
