Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando  template literal
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine  creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

- Snack 1 solution:
--Inizializzo un contatore e un peso iniziale al quale assegno il valore del peso del primo oggetto nell'array
---Utilizzando il metodo forEach vado a scansionare tutti gli oggetti presenti nell'array e confronto il loro peso con il peso del mio valore iniziale
----Se il peso dell'oggetto nell'array è inferiore al mio peso iniziale allora gli assegno il valore del peso e assegno al mio contatore il valore dell'index attuale