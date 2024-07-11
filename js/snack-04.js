//console.log("ciao")
// creo un array con la lista degli invitati
let invitati = ["Martina", "Alessandro", "Davide", "Lorenzo", "Mirketto"]; 
//chiedo il nome all'utente
let sconosciuto = prompt("Inserisci il tuo nome: ");

//controllo se è nella lista degli invitati
for(let i = 0; i < invitati.length; i++){
    if(sconosciuto == invitati[i]){
        console.log("Può entrare")
    }
}