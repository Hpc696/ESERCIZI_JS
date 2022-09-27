const prompt=require('prompt-sync')();
//9. permetta di indovinare una parola da una lista di parole. - Bonus: implementare impiccato
const lista = new Array("didio", "fraberto", "brafe", "minne");
let parola= prompt("Inserisci una parola ca**one: "); 
let check = false;
let lettereIndovinate = "";

for (let i=0; i<lista.length; i++){
    if(parola==lista.any){
        check=true;
        console.log("Easyyy!!!")
        break;
        } else{
            check==false;  
            console.log("Looser L!!!");     
        } 
}
if (check==false){
    let parolaImpiccato= parola.split("");
    let lettera;
    let parolaIndovinata=[];
    for(let i=0; i<parolaImpiccato.length; i++){
        parolaIndovinata[i]=" _ ";
    }

    let cont=parolaImpiccato.length;
    let vite=3;
    while(cont > 0){
        lettera=prompt("Indovina una lettera:       ");
        let i=parolaImpiccato.indexOf(lettera);
        lettereIndovinate="";
        if(i>=0){
            parolaIndovinata[i]=parolaImpiccato[i];
            parolaImpiccato[i]='$';
            cont--;
        }
        if(i==-1){
            vite--;
        }
        for(const x of parolaIndovinata){
            lettereIndovinate+= x+ " ";
        }
        console.log("Situazione :" + lettereIndovinate + "   ");
        if(vite==0){
            console.log("GAME OVER L");
            break;
        }
        console.log("Hai "+vite+" vite rimaste");
    }
    if(vite > 0)
        console.log("Sei un animaleh!")
}