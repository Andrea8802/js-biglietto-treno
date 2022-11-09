// Calcolo prezzo biglietto del viaggio in base all'età e ai km da percorrere.

// Dichiarazioni variabili
let kmViaggio
let etaPasseggero
const prezzoAlKm = 0.21
let prezzoViaggio
let sconto

// Chiedere quanti km vuole percorrere
kmViaggio = prompt("Quanti km vuoi percorrere?");

// Chiedere età passeggero
etaPasseggero = prompt("Quanti anni hai?");

// Moltiplicare km X 0.21€
prezzoViaggio = prezzoAlKm * kmViaggio;

// Applichiamo sconti se idonei

// Se è minorenne sconto del 20%
if(etaPasseggero < 18){
    sconto = prezzoViaggio * 0.20;
    prezzoViaggio -= sconto;

} else if (etaPasseggero >= 65){// Altrimenti se è over65 sconto del 40%
    sconto = prezzoViaggio * 0.40;
    prezzoViaggio -= sconto;
}

// Output del prezzo finale (massimo 2 decimali)
document.getElementById("prezzo").innerHTML = `Il prezzo del tuo biglietto è di ${prezzoViaggio.toFixed(2)}€`;


