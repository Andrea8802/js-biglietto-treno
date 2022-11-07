// Calcolo totale prezzo del viaggio

// Dichiarazioni variabili
let kmViaggio
let etaPasseggero
const prezzoAlKm = 0.21
let prezzoViaggio

// Chiedere quanti km vuole percorrere
kmViaggio = prompt("Quanti km vuoi percorrere?")
console.log(kmViaggio)

// Chiedere età passeggero
etaPasseggero = prompt("Quanti anni hai?")
console.log(etaPasseggero)

// Moltiplicare km X 0.21€
prezzoViaggio = prezzoAlKm * kmViaggio

// Applichiamo sconti se idonei

// Se è minorenne sconto del 20%
if(etaPasseggero < 18){
    prezzoViaggio *= 0.20
} else if (etaPasseggero >= 65){// Altrimenti se è over65 sconto del 40%
    prezzoViaggio *= 0.40
}

// Output del prezzo finale (massimo 2 decimali)
document.getElementById("prezzo").innerHTML = `Vuoi percorrere ${kmViaggio}km hai ${etaPasseggero} il biglietto ha un prezzo di ${prezzoAlKm}€ e pagerai il bliglietto ${prezzoViaggio.toFixed(2)}€`
