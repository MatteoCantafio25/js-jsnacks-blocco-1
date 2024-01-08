//---------------------------------//
// MI ASSICURO CHE IL FOGLIO JS COMUNICHI CON IL FOGLIO HTML

console.log("JS OK");

//---------------------------------//
// CREO UNA COSTANTE PER L'ARRAY

const fridge = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];


//---------------------------------//
//AGGIUNGIAMO UN ELEMENTO ALL'ARRAY

fridge.push("pesca");


//---------------------------------//
//CREIAMO UN FLAG
let hasWatermelon = false;

//---------------------------------//
// FACCIO CONTROLLARE TUTTI GLI ELEMENTI DELL'ARRAY

for (let i = 0; i < fridge.length && !hasWatermelon; i++) {

    //----------------//
    // SE IL COCOMERO C'E'STAMPO IN PAGINA...

    if (fridge[i] === "cocomero") {
        hasWatermelon = true
    }
}

// SE IL COCOMERO NON C'E'STAMPO IN PAGINA...

let message;

if (hasWatermelon) {
    message = "Trovato! Devo solo preparare il cocktail."
} else {
    message = "Oh no, devo uscire a comprare il cocomero!"
}

console.log(message);




