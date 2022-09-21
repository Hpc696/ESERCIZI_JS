const prompt=require('prompt-sync')();
//6. creare una calcolatrice: prendendo in input 2 numeri e l'operatore da usare
let primonum= parseInt(prompt("Inserisci il primo numero"));
let secondonum= parseInt(prompt("Inserisci il secondo numero"));
let risultato=0;
/*bonus: implementare funzionalità memoria*/
let mem='m';
while(mem == 'm'){
switch(prompt("Per addizione premi + ; Per sottrazione premi - ; Per moltiplicazione premi * ; Per divisione premi / ; Per elevazione a potenza primonume^secondonum premere ^ ; Per radice quadrata del 1^numero premere sqrt ; Per radice quadrata del 2^numero premere sqrt2 ;  ")) { //uso switch per distinguere add,sottr,moltip,divis
    case "+":
    risultato= primonum + secondonum ; break;
    case "-":
    risultato= primonum - secondonum ; break;
    case "*":
    risultato= primonum * secondonum ; break;
    case "/":
    risultato= primonum / secondonum ; break;
//parte bonus aggiungere radice quadrata e potenza
    case "^":
    risultato= primonum ** secondonum; break; 
    case "sqrt":
    risultato= Math.sqrt(primonum) ; break;
    case "sqrt2":
    risultato= Math.sqrt(secondonum) ; break;
    default:
    console.log("Che ca**o di operatore hai digitato?!");
}; }
console.log("Il risultato è" + risultato);
/* mem=prompt("Premi m se vuoi fare altra operazione");
if (mem =='m' ){
    //funzione che ripete il while con lo switch
} 
if (mem != 'm'){
    break;
} */