const prompt=require('prompt-sync')();

//1. stampo con log
console.log("Hello world");

//2. nome e età in input, stampo stessa riga nome e età
let nome= prompt("Inserisci nome");     let eta= prompt("Inserisci l'età");
console.log(nome + eta);

//3. input username e password, if (username e password valide) --> login, else --> alert
let uservalid= "Sommo";     let pswvalid= "Ilsignore";
let user= prompt("Inserisci username");     let psw= prompt("Inserisci password");
if(user==uservalid && psw==pswvalid){
    console.log("Hai eseguito il login con successo")
} else{
    console.log("Username o password non valide!") //window.alert
};

//4. numero in input, ritornare la somma da 1 al numero --> fino al num somma 
let numero= prompt("Inserisci il numero");
let risultato=0;
for(let i=0; i<=numero; i++){
    risultato= i + risultato; 
}; 
console.log(risultato);
