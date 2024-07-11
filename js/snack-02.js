//console.log("ciao")

let parola1 = prompt("inserisci la prima parola: ");
let parola2 = prompt("inserisci la seconda parola: ");


if (parola1.length > parola2.length) {
    console.log(parola1, parola2)
} else if (parola2.length > parola1.length) {
    console.log(parola2, parola1)
} else if (parola1.length == parola2.length){
    console.log("le parole hanno la stessa lunghezza")
}