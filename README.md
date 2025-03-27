# Express Blog Routing

Nell'esercizio di oggi, salvato come progetto n.35, andiamo a lavorare con il **routing**.

## Info 

L'obiettivo di questo progetto e creare delle rotte per il nostro sito con i post, che in questi giorni andremo a completare.
Utilizzando **Postman** come client, riusciamo a creare e testare rotte separate in base a metodi diversi, ma utilizzando lo stesso *URI*.
I metodi *HTTP* che andremo ad utilizzare sono:
- GET;
- POST;
- PUT;
- PATCH;
- DELETE.

Successivamente salveremo le rotte direttamente su Postman. Creeremo una collection relativa al nostro progetto e una cartella all'interno del quale salveremo una rotta per ogni metodo utilizzato:
-INDEX;
-UPDATE;
-MODIFY;
-SHOW;
-DESTROY;
-STORE. 

### Bonus

L'esercizi è dotato di due bonus, nei quali dovremmo andare ad utilizzare l'array di oggetti relativi ai posts fornitoci.
Nel primo bonus tramite la rotta index, nella quale utilizzeremo il metodo get, alla rotta "http://127.0.0.1[porta_utilizzata]/posts/" invieremo come risposta l'array totale di oggetti.
Nel secondo bonus, creando la rotta show all'interno di Postman, sempre utilizzando il metodo get, andremo a creare delle rotte dinamiche.
Quando verrà inserito un numero come nell'esempio (http://127.0.0.1:[porta_utilizzata]/posts/3) andremo a far corrispondere l'elemento numero 3 dell'array di oggetti Posts (posts[2]). 
Ho inserito un controllo che permette di controllare il valore inserito. Se viene inserito un numero superiore a 5 (lunghezza dell'array di oggetti posts) verrà stampato un messaggio che dice "I post sono solo 5). Se viene inserito un numero minore di 0 o una stringa non convertibile in oggetto allora verrà stampato un messaggio che indica di inserire un numero compreso tra 1 e 5.
