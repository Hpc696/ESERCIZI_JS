const prompt=require('prompt-sync')();
/* Dato un numero N, calcola se quell'anno e' bisestile o meno;
Fare in modo che la risposta non venga data immediatamente ma date all'utente la possibilita' di indovinare;
Ritornate quanti mesi intercorrono tra oggi e l'anno inserito dall'utente (considerate primo ottobre);
Ritornate quante settimane passano tra la data indicata e oggi (considerate primo ottobre) */

let n=parseInt(prompt("Inserisci l'anno: ")); let check= false;
let risposta=prompt("Secondo te è bisestile? Premi Y per yes o N per no: "); 
if(risposta=!"Y" || risposta=!"N"ß){
    console.log("NON HAI DIGITATO BENEEEE!!!");
} else if((risposta=="Y" && check==true) || (risposta=="N" && check==false)){
    console.log("Hai indovinato yeee!");
}  else {
    console.log("Non hai indovinato sf1ghat0!");
}  if((n%400==0) || (n%4==0 && !(n%100==0))){
    console.log("L'anno "+n+" è bisestile"); check=true; 
} else{
    console.log("L'anno "+n+" non è bisestile"); check=false;
}

//era fattibile anche con switch case anzi meglio...
