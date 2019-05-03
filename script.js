// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

var difficoltà = parseInt(prompt("Inserisci una difficoltà 0 - 1 - 2: "));
var n_max,giocate_valide;
var n_casuali = [];
var termina = false;
var punteggio = 0;
var n_inseriti = [];


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
var n_casuali = [];
while (n_casuali.length < 16){ //in modo che man mano si riempie l'array fino a quando non arriva a lunghezza 16
  var rndNum;
  rndNum = getRandomNum(n_max);
  if(n_casuali.includes(rndNum) == false){ //includes mi ritorna true se quell'elemento è contenuto nell'array altriminti da false
    n_casuali.push(rndNum);
  }
}

function getRandomNum(max) {
  return Math.floor(Math.random()*max + 1)
}

console.log("Stampo il contenuto di array numeri casuali in caso si vogliano fare verifiche: "+n_casuali.sort());

//eseguo un ciclo for da 0 a giocate_valide in modo che la condizione "raggiunge il numero massimo possibile di numeri consentiti" viene già controllata
//e all'interno eseguo un if per verificare se il numero è vietato o meno
for (var i = 0; i < giocate_valide; i++) {
  var n_utente = parseInt(prompt("Inserisci un numero da 1 a "+n_max+" : "));

  //ciclo for per verificare che il num inserito dall'utente non sia uguale a quello casuale,in caso fosse termina diventa true
  if(n_casuali.includes(n_utente)){
    termina = true;
  }


  //se termina è uguale a true il gioco termina,altrimenti incremento in punteggio inoltre
  //verifico che il n_utente non venga inserito nuovamente,in caso l'utente dovrà inserirne un'altro
  if(termina == false && n_inseriti.includes(n_utente) == false){
    punteggio+=1;
    n_inseriti.push(n_utente);
  }else if(n_inseriti.includes(n_utente)){
    alert("Numero già inserito!");
  }else{
    break;
  }
}

alert('Hai totalizzato: '+punteggio+' punti');
