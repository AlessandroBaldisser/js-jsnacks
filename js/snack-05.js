/* console.log("ciao") */

let numeri = [] // creo un array vuoto
for(let i = 0; i < 6; i++){ //creo il loop
    let numero = prompt("Inserisci un numero: ") //creo il prompt 
    if(numero % 2 != 0){ //controllo se è dispari
        numeri.push(numero) //se è dispari pusho nell'array
    }
}

console.log(numeri)