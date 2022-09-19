const prompt=require('prompt-sync')();

//5. numero in input M, stampare somma dei numeri divisibili x 3 fino al numero M (come prima ma usare modulo per determinare num divisibili per 3)
let m= prompt("Inserisci un numero");
let somma=0;
for(let i=0; i<=m; i++){
    if (i%3==0){
        somma= i + somma
    }
};
console.log(somma);