const prompt=require('prompt-sync')();

//1. stampo con log
console.log("Hello world");

//2. nome e età in input, stampo stessa riga nome e età
let nome= prompt("Inserisci nome");     let eta= prompt("Inserisci l'età");
console.log(nome + eta);
/* bonus: if eta<18 non vota, else indicare una cabina di voto randomica (uso math round x approsimare a valore intero) */
let cabina=0;
if(eta<18){
    console.log("Non puoi votare...torna dalla mamma ")
} else {
    cabina=Math.round(Math.random()*5)
    console.log("Vota nella cabina " + cabina)
};

//3. input username e password, if (username e password valide) --> login, else --> alert
const uservalid= "cacca";     const pswvalid= "culo";
let user= prompt("Inserisci username");     let psw= prompt("Inserisci password");
if(user==uservalid && psw==pswvalid){
    console.log("Hai eseguito il login con successo")
} else{
    console.log("Username o password non valide!") //window.alert
};
//parte bonus se l'username non esiste, indicare che non esiste prima di chiedere la password...se la password e' scorretta, fatelo notare
let user2 = prompt("Bonus...Inserisci username"); 
if(user2 != uservalid){
    console.log("sbagliato username ca**one!");
} else {
    let psw2 = prompt("Bonus...Inserisci password")
    if(psw2 != pswvalid) {
        console.log("Login unsuccessfull c0j0n3")
    } else {
        console.log("Login successfull motherfu**er");
        }
    }

//4. numero in input, ritornare la somma da 1 al numero --> fino al num somma 
let numero= prompt("Inserisci il numero");
let risultato=0; let moltipl=1; let sommeinterm=0;
for(let i=0; i<=numero; i++){
    risultato= i + risultato; 
}; 
//parte bonus moltiplicazioni
for(let m=1; m<=numero; m++){
    moltipl*=m;
    console.log("Moltiplicazioni: " + moltipl);
};
console.log("Somma: " + risultato);
//parte bonus somme intermedie
for(let k=0; k<=numero; k++){
    sommeinterm+=k;
    console.log("Somme intermedia: " + sommeinterm)
};
