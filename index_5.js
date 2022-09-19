const prompt=require('prompt-sync')();
//8. numero in input K, ritornate tutti i numeri primi compresi tra 1 e K
let k= prompt("Inserisci un numero");
while (k=>i){
    for(i=0;i<=k;i++){
        if(i%k==0){
            primo= i;
            console.log(primo);
        }
    }
    k--;
}