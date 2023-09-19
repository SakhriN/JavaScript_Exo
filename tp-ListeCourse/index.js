console.log("Local Storage");

class Person {
    constructor(name) {
        this.name = name;
    }
}

// Fonction pour vérifier si une valeur existe dans le localStorage
function valeurExisteDansLocalStorage(clé) {
    const valeur = localStorage.getItem(clé);
    return valeur !== null;
}

// Vérifiez d'abord si la valeur existe dans le localStorage
if (!valeurExisteDansLocalStorage("peuple")) {
    let userInput = prompt("Entrez votre nom :");
    let person1 = new Person(userInput);
    
    // Enregistrez la personne dans le localStorage si elle n'existe pas déjà
    localStorage.setItem("peuple", JSON.stringify(person1));
}

let personStorage = JSON.parse(localStorage.getItem("peuple"));

console.log(personStorage);

console.log(personStorage.name);

let boum = document.getElementById("HEAD");
boum.innerHTML = `<h1>BONJOUR <b>${personStorage.name}</b></h1>`;


function recupe(){
    let recup = document.getElementById("texteuh").value;
    let titre = "";
    let nom = "";

    // Sélectionner le tableau
    let tableau = document.createElement("table");

    // Créer une nouvelle ligne
    let nouvelleLigne = document.createElement("tr");

    // Créer des cellules pour chaque valeur
    let celluleRecup = document.createElement("td");
    celluleRecup.textContent = recup;

    let celluleTitre = document.createElement("td");
    celluleTitre.textContent = titre;

    let celluleNom = document.createElement("td");
    celluleNom.textContent = nom;

    // Ajouter les cellules à la nouvelle ligne
    nouvelleLigne.appendChild(celluleRecup);
    nouvelleLigne.appendChild(celluleTitre);
    nouvelleLigne.appendChild(celluleNom);

    // Ajouter la nouvelle ligne au tableau
    tableau.appendChild(nouvelleLigne);

    // Effacer les champs de saisie
    document.getElementById("texteuh").value = "";
}