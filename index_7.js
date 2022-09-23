let pc=0; let user=0;
let tent=3; let winpc=0; let winuser=0;
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
    }
    console.log(winpc);
    console.log(winuser);