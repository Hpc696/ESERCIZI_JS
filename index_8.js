const prompt=require('prompt-sync')();
//(consegna_2) --1. Trova il massimo, il minimo, di una lista di numeri, calcolate la media dell'array, bonus: indicate il numero piu' vicino alla media contenuto nell'array, specificate se il numero e' presente nell'array, oppure indicate quanto dista dai due numeri piu' vicini
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
let avg= media(contenitore);
console.log("La media dell'array è "+ avg);
//richiamo, stampo funzione numero vicino dentro array
console.log("Il numero più vicino alla media dentro l'array è "+ vicino(contenitore, avg));
//numero dentro array è uguale alla media?
if(vicino(contenitore, avg)==avg){
    console.log("Valore della media è nell'array")
}
/* richiamo e stampo funz x numero prima e dopo + vicini alla media
console.log("Il numero prima della media più vicino è "+ prima(avg, contenitore));
console.log("Il numero dopo la media più vicino è "+ dopo(avg, contenitore)); */


//funzione per inserimento valori nell'array
function inserimento(contenitore, dimensione){
    for(let i=0; i<dimensione; i++){
        let numero=parseInt(prompt("Numero che vuoi inserire nell'array: "));
        contenitore.push(numero);
    }
}
//funzione per calcolare la media
function media(contenitore) {
    let i = 0, somma = 0;
    while (i<contenitore.length) {
        somma+=contenitore[i++];
    }
    return somma / contenitore.length;
}
//funzione numero vicino media dentro array
function vicino(contenitore, avg){
    let nvicino=contenitore[0]; //assegno iniz. a nvicino il numero nella prima posiz. di array
    for(let i=0; i<contenitore.length; i++){
        if(Math.abs(contenitore[i]-avg)<Math.abs(nvicino-avg)){ //controllo differenza tra ogni valore e media (riassegnando nel caso di differenza sempre + piccola nvicino)
            nvicino=contenitore[i];
       } /* let diff=new Array();
            for(let j=0; j<dimensione; j++){
            diff[j]=Math.abs(avg-contenitore[i]);
            if(avg==contenitore[i]) {
                nvicino=contenitore[i];
            } else if (diff[j]<diff[j++]){
                nvicino=contenitore[i];
            } 
        }non va e che cazzo!*/
    } return nvicino;
}//ora va yeah!
/*
//funzione per numero prima + vic media
function quelloprima(contenitore, avg){
    let p=0;
    for(i=0; i<contenitore.length; i++){
      if(contenitore[i]<avg){
        p=contenitore[i];
      }
    } return p;
  }
//funz x numero dopo + vic media 
function quellodopo(contenitore, avg){
    let p=0;
    for(i=0; i<contenitore.length; i++){
      if(contenitore[i]>avg){
        p=contenitore[i];
      }
    } return p;
} non vanno burp*/