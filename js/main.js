
/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.  */
/* Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio. */
/* Il prezzo del biglietto è definito in base ai km (0.21 € al km), ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65. */
/* Mostrare a schermo il prezzo del biglietto, indicando anche se è stato applicato un eventuale sconto. */

//Chiediamo il numero di Km

var numeroKm = parseInt(prompt("Quanti Km devi percorrere?"));
console.log("Km da percorrere " , numeroKm + ".");


//Chiediamo età passeggero
var age = parseInt(prompt("Qual'è la tua età"));
console.log("Età del passeggero " , age + ".");


//dichiariamo prezzo costo biglietto 
var costoKm = 0.21;
console.log(costoKm);

var prezzoTot = numeroKm * costoKm;
console.log(prezzoTot);

//sconto del 20%
var sconto20 = prezzoTot * 20 / 100;
var prezzoFinaleSconto20 = prezzoTot - sconto20;
console.log("Prezzo sconto 20% " , sconto20);
console.log("Prezzo Finale con sconto " , prezzoFinaleSconto20);

//sconto del 40%
var sconto40 = prezzoTot * 40 / 100;
var prezzoFinaleSconto40 = prezzoTot - sconto40;
console.log("Prezzo sconto 40% " , sconto40);
console.log("Prezzo Finale con sconto " , prezzoFinaleSconto40);