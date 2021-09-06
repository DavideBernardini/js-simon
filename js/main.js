// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// creo un array e ci inserisco 5 numeri casuali che esporrò in un alert
var numeriCasuali = [];

for (var i = 0; i < 5; i++) {
    numeriCasuali.push(Math.floor(Math.random() * 100) + 1);
}

alert(`Ricorda questi cinque numeri: ${numeriCasuali}.
Fra 30 secondi ti verrà chiesto di scriverli uno per volta.`);

// faccio partire un timer per 30 secondi e poi chiedo all'utente di scrivere i numeri esposti prima
var numeriInseriti = [];
var numeroIndovinati = 0;
var indovinati = [];

setTimeout(function() {
    for (var c = 0; c < numeriCasuali.length; c++) {
        // pusho in un array i numeri inseriti dall'utente
        numeriInseriti.push(parseInt(prompt("Inserisci uno ad uno i numeri mostrati poco fa")));

        // se i numeri inseriti corrispondono a quelli mostrati in precedenza li pusho in un altro array e faccio la conta
        if (numeriCasuali[c] == numeriInseriti[c]) {
            indovinati.push(numeriInseriti[c]);
            numeroIndovinati += 1;
        }
    }
    if (numeroIndovinati == 1) {
        alert(`Hai indovinato solo un numero: ${indovinati}`);
    } else if (numeroIndovinati == 0) {
        alert("Non hai indovinato nessun numero.");
    } else {
        alert(`Hai indovinato ${numeroIndovinati}: ${indovinati}`);
    }

}, 1000
);
