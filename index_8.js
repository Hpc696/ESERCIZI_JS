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
    console.log("Valore della media è nell'array");
} 
//richiamo e stampo funz x ordine decresc. e x numero prima e dopo al numero + vicino alla media 
ordine(contenitore); console.log(contenitore);
console.log("Il numero prima del numero più vicino alla media è "+ prima(contenitore, avg));
console.log("Il numero dopo il numero più vicino alla media è "+ dopo(contenitore, avg));
let distprima=avg-prima(contenitore, avg);
let distdopo=dopo(contenitore, avg)-avg;
console.log("Il numero prima dista "+distprima);
console.log("Il numero dopo dista "+distdopo);

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
       }
    } return nvicino;
}//ora va yeah!
//metto in ordine decrescente l'array e funz. x trovare numero prima e ql dopo il num + vicino alla media
function ordine(contenitore){
    contenitore.sort(function(a, b){return b-a});
}
function prima(contenitore, avg){
    let nprimavicino=contenitore[0]; 
    for(let i=0; i<contenitore.length; i++){
        if(Math.abs(contenitore[i]-avg)<Math.abs(nprimavicino-avg)){ 
            nprimavicino=contenitore[i--];
       }
    } return nprimavicino;
}
function dopo(contenitore, avg){
    let ndopovicino=contenitore[0]; 
    for(let i=0; i<contenitore.length; i++){
        if(Math.abs(contenitore[i]-avg)<Math.abs(ndopovicino-avg)){ 
            ndopovicino=contenitore[i++];
       }
    } return ndopovicino;
}