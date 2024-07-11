/* console.log("ciao") */

let numeroCasuale = Math.random() * 10 +1; // creo un numero casuale da 1 a 10
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 10 e scopri se hai vinto!")) //chiedo il numero all'utente

if(Math.round(numeroCasuale) === numeroUtente){ // controllo se sono uguali
    console.log("Hai vinto!")
}else{
    console.log("Hai perso!")
}

console.log(Math.round(numeroCasuale))  //printo il numero casuale perchè si :)