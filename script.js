//---------------------------------
// MI ASSICURO CHE IL FOGLIO JS COMUNICHI CON IL FOGLIO HTML

console.log("JS OK");

//---------------------------------
// CREO 2 PROMPT PER RICEVERE DALL'UTENTE LA SUA SCELTA

const tot = parseInt(prompt("Quanti numeri vuoi avere?"));
const minLenght = parseInt(prompt("Quanti elementi vuoi stampare?"));

//! Validazione 
if (isNaN(minLenght) || isNaN(tot) || minLenght < 0 || tot > 100 || tot < minLenght || minLenght >= tot) {
    alert("Il numero di elementi da stampare non è valido");
} else {

    // CREO UN ARRAY VUOTO NEL QUALE POI DOVR0' AGGIUNGERE TOT NUMERI DATI DALL'UTENTE

    const numbers = [];

    //DECIDO QUANTE VOLTE SI DEVE RIPETERE IL CICLO IN BASE ALLA SCELTA DELL'UTENTE

    for (let i = 1; i <= tot; i++) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        numbers.push(randomNumber);
    }

    // STAMPO IN CONSOLE

    console.log(numbers);

    // CREO UNA COSTANTE MI PERMETTE DI PRENDERE GLI X NUMERI DALL'ARRAY PARTENDO DALLA FINE

    const elementsToPrint = numbers.slice(-minLenght);

    // STAMPO IN CONSOLE

    console.log(elementsToPrint);
}