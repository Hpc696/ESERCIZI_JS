const prompt=require('prompt-sync')();
//(consegna_2) --1. Trova il massimo, il minimo, di una lista di numeri, calcolate la media dell'array, indicate il numero piu' vicino alla media contenuto nell'array, specificate se il numero e' presente nell'array, oppure indicate quanto dista dai due numeri piu' vicini
let contenitore= new Array();
const dimensione=parseInt(prompt("Inserisci quanti numeri vuoi mettere nell'array"));
//richiamo funzione inserimento e stampo l'array e sua lunghezza
inserimento(contenitore, dimensione);
console.log(contenitore);
//calcolo e stampo max,min dell'array
let massimo= Math.max.apply(Math, contenitore);
console.log("Il valore massimo dell'array è "+ massimo);
let minimo= Math.min.apply(Math, contenitore);
console.log("Il valore minimo dell'array è "+ minimo);
//richiamo, stampo funzione media
let avg= media(contenitore, dimensione);
console.log("La media dell'array è "+ avg);
//richiamo, stampo funzione numero vicino dentro array
console.log("Il numero più vicino alla media dentro l'array è "+ vicino(contenitore, avg, dimensione));

//funzione per inserimento valori nell'array
function inserimento(contenitore, dimensione){
    for(let i=0; i<dimensione; i++){
        let numero=parseInt(prompt("Numero che vuoi inserire nell'array: "));
        contenitore.push(numero);
    }
}
//funzione per calcolare la media
function media(contenitore, dimensione) {
    let i = 0, somma = 0;
    while (i<dimensione) {
        somma+=contenitore[i++];
    }
    return somma / dimensione;
}
//funzione numero vicino media dentro array
function vicino(contenitore, avg, dimensione){
    let nvicino=0; let diff=new Array();
    for(let i=0; i<dimensione; i++){
        diff[i]=avg-contenitore[i];
        if(diff[i]<diff[i++]) {
            nvicino=contenitore[i];
        }
    }
    return nvicino;
}
