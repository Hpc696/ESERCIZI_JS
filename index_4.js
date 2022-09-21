const prompt=require('prompt-sync')();
//7. numero in input J, stampate tutte le tabelline da 2 a J
let j= parseInt(prompt("Inserisci un numero"));
let tabb=0; let tabbcorr=0;
//bonus: da input quale numero escludere dalla tabella
let escluso= parseInt(prompt("Inserisci un numero da escludere dalla tabella"));
while (2 <= j) /* ciclo per limitare tabelline da 2 a J*/ {
    console.log("Tabellina di "+ j + " è");
    for (let i=1 ; i<=10; i++){
        if(i==escluso){
            continue;
        }
        tabbcorr= j;
        tabb= j;
        tabb *= i; //incr moltipl
        console.log(tabbcorr + "*" + i + "=" + tabb)
    } 
    j--; //decremento numero j ripete istruz ciclo while finchè minore di 2   
}