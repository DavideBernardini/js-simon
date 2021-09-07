// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// creo un array e ci inserisco 5 numeri casuali che esporrò in un alert
var numeriCasuali = [];

while (numeriCasuali.length < 5) {
    var numrandom = Math.floor(Math.random() * 100) + 1;
    
    if (numeriCasuali.includes(numrandom) == false) {
        numeriCasuali.push(numrandom);
    }
}

alert(`Ricorda questi cinque numeri: ${numeriCasuali}.
Fra 30 secondi ti verrà chiesto di scriverli uno per volta.`);

// faccio partire un timer per 30 secondi e poi chiedo all'utente di scrivere i numeri esposti prima
var numeroIndovinati = 0;
var indovinati = [];
var numeriInseriti = [];
var secondi = 30;

var timer = setInterval(function() {
    secondi--
    document.getElementById("timer").innerHTML = secondi;
    if (secondi == 29) {
        document.getElementById("timer").innerHTML = "";
        clearInterval(timer);

        for (var c = 0; c < numeriCasuali.length; c++) {

            // pusho in un array i numeri inseriti dall'utente
            numeriInseriti.push(parseInt(prompt("Inserisci uno ad uno i numeri mostrati precedentemente")));

            // se i numeri inseriti corrispondono a quelli mostrati in precedenza li pusho in un altro array e faccio la conta
            if (numeriCasuali[c] == numeriInseriti[c]) {
                indovinati.push(numeriInseriti[c]);
                numeroIndovinati += 1;
            }
        }

        // comunico quanti e quali numeri l'utente ha individuato
        switch(numeroIndovinati) {
            case 1:
                alert(`Hai indovinato solo un numero: ${indovinati}`);
                break;
            case 0:
                alert("Non hai indovinato nessun numero.");
                break;
            case numeriCasuali.length:
                alert(`Hai indovinato tutti e ${numeroIndovinati} i numeri: ${indovinati}. Bravo!`);
                break;
            default:
                alert(`Hai indovinato ${numeroIndovinati} numeri: ${indovinati}`);
        }
    }
}, 1000);




