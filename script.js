//---------------------------------//
// MI ASSICURO CHE IL FOGLIO JS COMUNICHI CON IL FOGLIO HTML

console.log("JS OK");

//---------------------------------//
// CREO UNA COSTANTE PER L'ARRAY

const fridge = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
console.log(fridge);

//---------------------------------//
//AGGIUNGIAMO UN ELEMENTO ALL'ARRAY

fridge.push("pesca");
console.log(fridge);

//---------------------------------//
// FACCIO CONTROLLARE TUTTI GLI ELEMENTI DELL'ARRAY


for (let i = 0; i < fridge.length; i++) {
    const currentIngredient = fridge[i];

    //----------------//
    // SE IL COCOMERO C'E'STAMPO IN PAGINA...

    if (currentIngredient == fridge[6]) {
        console.log("Trovato! Devo solo preparare il cocktail.")
    }

    // SE IL COCOMERO NON C'E'STAMPO IN PAGINA...

}

