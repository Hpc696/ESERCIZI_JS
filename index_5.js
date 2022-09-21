const prompt=require('prompt-sync')();
//8. numero in input K, ritornate tutti i numeri primi compresi tra 1 e K
let K=parseInt(prompt("Inserisci fino a quale numero vuoi calcolare i numeri primi "));
console.log("Uè aspè cerco tutti i numeri primi fino a "+K);
let quant=0;  //contatore x la quantità di nums primi
for (let i=2; i<=K; i++) { //ciclo numeri che vanno fino a K 
	let contatore= true; //contatore booleano x riconoscere numero primo sì/no
	for(let divis=2; divis<i; divis++){ //ciclo x divisori dei numeri(i)
		if(i%divis === 0){
			contatore=false;
			break;
		}	
	}
	if(contatore){
		console.log(i);
		quant++;
	}
}
console.log("Trovati "+ quant +" numeri primi mannaggia a te");