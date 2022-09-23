const prompt=require('prompt-sync')();
//9. permetta di indovinare una parola da una lista di parole
const lista= new Array("casso" , "zizzona" , "didio" , "battipaglia" , "muoio");
let parola= prompt("Inserisci una parola ca**one"); 
for(i=0; i<lista.length; i++){
    if(parola==lista[i]){
        console.log("HAI INDOVINATO COJ*NE");
        break;
    } else {
        console.log("FAI SCH1FO");
    }
}