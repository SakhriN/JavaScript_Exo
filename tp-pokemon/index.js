const url = "https://pokeapi.co/api/v2/pokemon/"

let nb1 = Math.floor(Math.random() * 493) + 1;
let nb1string = url + nb1

console.log(nb1string);
nb1 = Math.floor(Math.random() * 493) + 1;

// 1. Faites une requête API pour obtenir les données
fetch(nb1string)
    .then(response => {
        if (!response.ok) {
            throw new Error('La réponse de l\'API n\'est pas OK');
        }
        return response.json(); // Convertit la réponse en JSON
    })
    .then(data => {
        // 2. Convertissez les données en chaîne JSON
        let jsonData = JSON.stringify(data);

        // 3. Enregistre la chaîne JSON dans le localStorage
        localStorage.setItem('pokemon1', jsonData);

        console.log('Données de l\'API enregistrées dans le localStorage.');
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données de l\'API :', error);
    });


let jsonData = localStorage.getItem('pokemon1');

let poke = document.getElementById("poke")
let namepokemon = document.getElementById("name-pokemon")
let heighpokemon = document.getElementById("heigh")
let weighpokemon = document.getElementById("weigh")

let data = JSON.parse(jsonData);

let sprite = data.sprites.front_default;
let Name = data.name;
let height = data.height;
let weight = data.weight;

poke.src = sprite;
namepokemon.innerHTML = Name;
heighpokemon.innerHTML = height;
weighpokemon.innerHTML = weight;


function changePokemon() {

    nb1 = Math.floor(Math.random() * 493) + 1;
    nb1string = url + nb1

    fetch(nb1string)
        .then(response => {
            if (!response.ok) {
                throw new Error('La réponse de l\'API n\'est pas OK');
            }
            return response.json();
        })
        .then(data => {

            jsonData = JSON.stringify(data);


            localStorage.setItem('pokemon1', jsonData);

            console.log('Données de l\'API enregistrées dans le localStorage.');
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données de l\'API :', error);
        });


    jsonData = localStorage.getItem('pokemon1');

    poke = document.getElementById("poke")

    data = JSON.parse(jsonData);

    sprite = data.sprites.front_default;
    Name = data.name;
    height = data.height;
    weight = data.weight;

    poke.src = sprite;
    namepokemon.innerHTML = Name;
    heighpokemon.innerHTML = height;
    weighpokemon.innerHTML = weight;

}

const change = document.getElementById("change")
change.addEventListener("click", changePokemon)