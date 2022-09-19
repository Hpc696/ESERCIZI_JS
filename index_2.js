const prompt=require('prompt-sync')();

//5. numero in input M, stampare somma dei numeri divisibili x 3 fino al numero M (come prima ma usare modulo per determinare num divisibili per 3)
let m= prompt("Inserisci un numero");
let somma=0;
for(let i=0; i<=m; i++){
    if (i%3==0){ //parte bonus basta mettere if((i%3==0) && (i%7==0)) x numeri divisibili sia x 3 che per 7 
        somma= i + somma
    } //per chiedere altri input num prompt qui
};
console.log(somma);
