
/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.  */
/* Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio. */
/* Il prezzo del biglietto è definito in base ai km (0.21 € al km), ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65. */
/* Mostrare a schermo il prezzo del biglietto, indicando anche se è stato applicato un eventuale sconto. */

//Chiediamo il numero di Km

var numeroKm = parseInt(prompt("Quanti Km devi percorrere?"));
console.log("Km da percorrere " + numeroKm + ".");
document.getElementById("numeroKm").innerHTML = "Km da percorrere " + numeroKm;


//Chiediamo età passeggero
var age = parseInt(prompt("Qual'è la tua età"));
console.log("Età del passeggero " + age + ".");
document.getElementById("age").innerHTML = "Età passeggero " + age;


//dichiariamo prezzo costo biglietto
var costoKm = 0.21;
console.log("Costo per km = " + costoKm + "€");

var prezzoTot = numeroKm * costoKm;
console.log("Prezzo del biglietto = " + prezzoTot + "€");
document.getElementById("prezzoTot").innerHTML = "Prezzo del biglietto = " + prezzoTot + "€"

//sconto del 20%
var sconto20 = prezzoTot * 20 / 100;
var prezzoFinaleSconto20 = prezzoTot - sconto20;

//sconto del 40%
var sconto40 = prezzoTot * 40 / 100;
var prezzoFinaleSconto40 = prezzoTot - sconto40;


//applicazione degli sconti

var minorenni = 18;
var over = 65;

if (age < 18){
  console.log("Prezzo sconto 20% = " , sconto20.toFixed(2) + "€");
  document.getElementById("sconto").innerHTML = "Prezzo sconto 20% = " + sconto20 + "€"

  console.log("Prezzo Finale con sconto 20% = " + prezzoFinaleSconto20.toFixed(2) + "€");
  document.getElementById("prezzoFinale").innerHTML = "Prezzo Finale con sconto 20% = " + prezzoFinaleSconto20 + "€"
 
}else if (age > 65){
  console.log("Prezzo sconto 40% = " , sconto40.toFixed(2) + "€");
  document.getElementById("sconto").innerHTML = "Prezzo sconto 40% = " + sconto40 + "€"

  console.log("Prezzo Finale con sconto 40% = " + prezzoFinaleSconto40.toFixed(2) + "€");
  document.getElementById("prezzoFinale").innerHTML = "Prezzo Finale con sconto 40% = " + prezzoFinaleSconto40 + "€"
}else {
  console.log("Mi dispiace se sei sfigato, ma devi pagare il biglietto per Intero ^_^")
  document.getElementById("sconto").innerHTML = "Mi dispiace se sei sfigato, ma devi pagare il biglietto per Intero ^_^"
  document.getElementById("prezzoFinale").innerHTML = "Prezzo finale del biglietto = " + prezzoTot + "€"
}
