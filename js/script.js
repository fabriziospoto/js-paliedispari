// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.

var parola = prompt("Inserisci una parola");  //Chiedo Parola
var risultato = palindromo(parola);

if (parola == risultato) {           //Imposto risposta del programma
    alert("E' una parola palindroma");
    console.log("E' una parola palindroma");
} else {
    alert("Non è una parola palindroma");
    console.log("Non è una parola palindroma");
}

function palindromo(stringa) {   //Imposto funzione cambiando condizioni per far partire i dalla fine
    var vuoto ='';
    for (var i = stringa.length-1; i >= 0; i--) {
        vuoto += stringa[i];
    }
    return vuoto;
}
