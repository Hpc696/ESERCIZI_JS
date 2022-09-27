const prompt=require('prompt-sync')();
//10. gioco carta, forbice e sasso (giocatore VS giocatore)
let user1=0; let user2=0; let winu1=0; let winu2=0;
let quante=parseInt(prompt("A quante vittorie si arriva? "));
for(let i=0; i<quante+100; i++){ //massimi pareggi consentiti 100
  user1= prompt("GIOCATORE 1 --- Inserisci f per forbice, s per sasso e c per carta: ");
  user2= prompt("GIOCATORE 2 --- Inserisci f per forbice, s per sasso e c per carta: ");
    if (user1 == user2) {
      console.log("Parità");
    } else if ((user1 == "s" && user2 == "f") || (user1 == "f" && user2 == "c") || (user1 == "c" && user2 == "s")) {
      console.log("Round vinto dal GIOCATORE 1");
      winu1++;
    } else {
      console.log("Round vinto dal GIOCATORE 2");
      winu2++;
    }
    if ((winu1>=quante) || (winu2>=quante)) {
      break;
    }
}
console.log("Vittorie del GIOCATORE 1: "+winu1);
console.log("Vittorie del GIOCATORE 2: "+winu2);
if(winu1>winu2){
    console.log("Partita vinta dal GIOCATORE 1");
} else{
    console.log("Partita vinta dal GIOCATORE 2");
}