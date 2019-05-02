// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

var difficoltà = parseInt(prompt("Inserisci una difficoltà 0 - 1 - 2: "));
var n_max,giocate_valide;
var n_casuali = Array(16);
var termina = false;
var punteggio = 0;


//varie modalità di difficoltà
switch (difficoltà) {
  case 0:
    n_max = 100;
    break;
  case 1:
    n_max = 80;
    break;
  case 2:
    n_max = 50;
    break;
}

//giocate valide in base alla difficoltà scelta
giocate_valide = n_max - n_casuali.length;

//genere i 16 numeri casuali in base alla difficoltà scelta
for (var i = 0; i < n_casuali.length; i++) {
  n_casuali[i] = Math.floor(Math.random() * n_max + 1);
}
console.log("Stampo il contenuto di array numeri casuali in caso si vogliano fare verifiche: "+n_casuali.sort());

//eseguo un ciclo for da 0 a giocate_valide in modo che la condizione "raggiunge il numero massimo possibile di numeri consentiti" viene già controllata
//e all'interno eseguo un if per verificare se il numero è vietato o meno
for (var i = 0; i < giocate_valide; i++) {
  var n_utente = parseInt(prompt("Inserisci un numero da 1 a 100: "));

  //ciclo for per verificare che il num inserito dall'utente non sia uguale a quello casuale,in caso fosse termina diventa true
  for (var j = 0; j < n_casuali.length; j++) {
    if(n_casuali[j] == n_utente){
      termina = true;
    }
  }

  //se termina è uguale a true il gioco termina,altrimenti incremento in punteggio
  if(termina == false){
    punteggio+=1;
  }else{
    alert('Hai totalizzato: '+punteggio+' punti');
    break;
  }
}
