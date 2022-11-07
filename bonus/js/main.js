// Calcolo prezzo biglietto del viaggio in base all'età e ai km da percorrere.

// Dichiarazioni variabili
let kmViaggio
let etaPasseggero
const prezzoAlKm = 0.21
let sconto
let prezzoViaggio

// Chiedere quanti km vuole percorrere
kmViaggio = prompt("Quanti km vuoi percorrere?");

// Chiedere età passeggero
etaPasseggero = prompt("Quanti anni hai?");

// Moltiplicare km X 0.21€
prezzoViaggio = prezzoAlKm * kmViaggio;

// Applichiamo sconti se idonei

// Se è minorenne sconto del 20%
if(etaPasseggero < 18){
    prezzoViaggio *= 0.20;
    sconto = 20

} else if (etaPasseggero >= 65){// Altrimenti se è over65 sconto del 40%
    prezzoViaggio *= 0.40;
    sconto = 40
}

// Output del prezzo finale (massimo 2 decimali)
if(etaPasseggero < 18 || etaPasseggero >= 65){
    document.getElementById("sconto").innerHTML = "HAI OTTENUTO UNO SCONTO DEL " + sconto + "%!"
}

document.getElementById("kmViaggio").innerHTML = kmViaggio + "km";
document.getElementById("etaPasseggero").innerHTML = etaPasseggero + " anni";
document.getElementById("prezzoAlKm").innerHTML = prezzoAlKm + "€";
document.getElementById("prezzoViaggio").innerHTML = prezzoViaggio.toFixed(2) + "€";

