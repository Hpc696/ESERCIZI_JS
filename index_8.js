const prompt=require('prompt-sync')();
//(consegna_2) --1. Trova il massimo, il minimo, di una lista di numeri, calcolate la media dell'array, indicate il numero piu' vicino alla media contenuto nell'array, specificate se il numero e' presente nell'array, oppure indicate quanto dista dai due numeri piu' vicini
let contenitore= new Array();
contenitore.lenght= prompt("Inserisci quanti numeri vuoi mettere nell'array");
//richiamo funzione inserimento e stampo l'array e sua lunghezza
inserimento(contenitore);
console.log(contenitore);
//calcolo e stampo max,min dell'array
let massimo= Math.max.apply(Math, contenitore);
console.log("Il valore massimo dell'array è "+ massimo);
let minimo= Math.min.apply(Math, contenitore);
console.log("Il valore minimo dell'array è "+ minimo);
//richiamo funzione media
console.log("La media dell'array è "+ media(contenitore));
//funzione per inserimento valori nell'array
function inserimento(contenitore){
    for(let i=1; i<=contenitore.lenght; i++){
        let numero=parseInt(prompt(i + "^ Numero che vuoi inserire nell'array: "));
        contenitore.push(numero);
    }
}
//funzione per calcolare la media
function media(contenitore) {
    let i = 0, somma = 0;
    while (i<contenitore.lenght) {
        somma+=contenitore[i++];
    }
    return somma / contenitore.lenght;
}