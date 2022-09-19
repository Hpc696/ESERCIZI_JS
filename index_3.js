const prompt=require('prompt-sync')();
//6. creare una calcolatrice: prendendo in input 2 numeri e l'operatore da usare
let primon= parseInt(prompt("Inserisci il primo numero"));
let secondon= parseInt(prompt("Inserisci il secondo numero"));
let risultato=0;

switch(prompt("Per addizione premi + ; Per sottrazione premi - ; Per moltiplicazione premi * ; Per divisione premi /")) { //uso switch per distinguere add,sottr,moltip,divis
    case "+":
    risultato= primon + secondon ; break;
    case "-":
    risultato= primon - secondon ; break;
    case "*":
    risultato= primon * secondon ; break;
    case "/":
    risultato= primon / secondon ; break;
};
console.log("Il risultato è" + risultato);
/*parte bonus -implementate la funzionalita' memoria
-aggiungere radice quadrata e potenza */


