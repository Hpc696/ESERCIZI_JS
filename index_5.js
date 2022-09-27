const prompt=require('prompt-sync')();
//8. numero in input K, ritornate tutti i numeri primi compresi tra 1 e K
let K=parseInt(prompt("Inserisci fino a quale numero vuoi calcolare i numeri primi: "));
console.log("Uè aspè cerco tutti i numeri primi fino a: "+K);
trovaprimi(K);
console.log("Ho cercato tutti i numeri primi fino a: "+K);
//bonus: in input un altro numero scrivete la somma fino al numero piu' vicino
let K2=parseInt(prompt("Inserisci altro numero: "));
let Primi=new Array();
let sum=sommaprimi(K, Primi, K2);
console.log("La somma dei numeri primi fino a "+K2+" è: "+sum);

function trovaprimi(K){
	let quant=0;  //contatore x la quantità di nums primi
	for (let i=2; i<=K; i++){ //ciclo numeri che vanno fino a K 
	let contatore= true; //contatore booleano x riconoscere numero primo sì/no
	//'migliora prestazioni' divis<=radice quadrata dei numeri(i)...così metà dei cicli
	for(let divis=2; /*divis<i*/divis<=Math.sqrt(i); divis++){ //ciclo x divisori dei numeri(i)
		if(i%divis === 0){
			contatore=false;
			break;
		}	
	}
	if(contatore){
		console.log(i);
		quant++;
	}
	} console.log("Ho trovato "+quant+" numeri primi mannaggia a te");
}
function sommaprimi(K, Primi, K2){
	let somma=0;
	for (let j=0; j<K2; j++){
		for (let i=2; i<=K; i++){ 
			let contatore= true;
			for(let divis=2; divis<=Math.sqrt(i); divis++){
				if(i%divis === 0){
					contatore=false;
					break;
				}	
			}
			if(contatore){
				Primi.push(i);
			} somma=Primi[2]; somma=Primi[i]+somma;
		} 
	} return somma;
}