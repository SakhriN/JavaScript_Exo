const url = "https://pokeapi.co/api/v2/pokemon/"
let max = 493
let nb1 = Math.floor(Math.random() * max) + 1;
let nb1string = url + nb1

console.log(nb1string);
nb1 = Math.floor(Math.random() * max) + 1;

// 1. Faites une requête API pour obtenir les données


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


function fatch() {

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

function changePokemon() {

    nb1 = Math.floor(Math.random() * 493) + 1;
    fatch();
}

function precedentPokemon() {
    if (nb1 > 1) {
        nb1 = nb1 - 1
        nb1string = url + nb1
            fatch();
    }
    else {

        alert("Ce ne sera pas possible d'aller au dessous")
    }
}

function suivantPokemon() {
    if (nb1 < max) {
        nb1 = nb1 + 1
        nb1string = url + nb1
        fatch()   
    }
    else {
        alert("Ce ne sera pas possible d'aller au dela")
    }
}



const change = document.getElementById("change")
change.addEventListener("click", changePokemon)

let precedent = document.getElementById("precedent")
precedent.addEventListener("click", precedentPokemon)

let suivant = document.getElementById("suivant")
suivant.addEventListener("click", suivantPokemon)