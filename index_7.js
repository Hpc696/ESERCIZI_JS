const prompt=require('prompt-sync')();
//10. gioco carta, forbice e sasso
let pc=0; let user=0; let winpc=0; let winuser=0;
let quante=parseInt(prompt("A quante vittorie si arriva? "));
for(let i=0; i<quante+100; i++){ //massimi pareggi consentiti 100
  pc= Math.floor(Math.random()*3);
  if (pc == 0) {
      pc = "f";
    } else if (pc == 1){
      pc = "s";
    } else {
      pc = "c";
    }
  user = prompt("Inserisci f per forbice, s per sasso e c per carta: ");
  console.log("Il pc ha scelto randomicamente: "+pc);
    if (pc == user) {
      console.log("Parità");
    } else if ((user == "s" && pc == "f") || (user == "f" && pc == "c") || (user == "c" && pc == "s")) {
      console.log("Hai vinto");
      winuser++;
    } else {
      console.log("Hai perso");
      winpc++;
    }
    if ((winpc>=quante) || (winuser>=quante)) {
      break;
    }
}
/* let tent=3;
for (i=0; i<tent; i++){
    pc= Math.floor(Math.random()*3);
    if (pc == 0) {
        pc = "f";
      } else if (pc == 1){
        pc = "s";
      } else {
        pc = "c";
      }
    console.log(pc);
    user = prompt("Inserisci f per forbice, s per sasso e c per carta");
    user = user.toLowerCase(); //per rendere minuscolo l'input
      if (pc == user) {
        console.log("Parità");
      } else if ((user == "s" && pc == "f") || (user == "f" && pc == "c") || (user == "c" && pc == "s")) {
        console.log("Hai vinto");
        winuser++;
      } else {
        console.log("Hai perso");
        winpc++;
      }
    } era un po' una pu**a*ata*/
    console.log("Vittorie del pc: "+winpc);
    console.log("Tue vittorie: "+winuser);