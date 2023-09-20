console.log("Local Storage");

class Person {
    constructor(name) {
        this.name = name;
    }
}
class itemCourse {
    constructor(name) {
        this.name = name;
    }
}

class supBtn {
    constructor(fnct) {
        this.fnct = fnct;
    }
}

class edtBtn {
    constructor(fnct) {
        this.fnct = fnct;
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



const test = document.querySelector("#recuperation")
test.addEventListener("click",recupe)


function recupe(e){
    e.preventDefault()
    let texte = document.getElementById("texte").value;
    let item = new itemCourse(texte)
    console.log(texte);
    localStorage.setItem("Item", JSON.stringify(item))
    let iteme = JSON.parse(localStorage.getItem("Item"));
    // Sélectionner le tableau
    let tableau = document.querySelector(".resultat tbody");

    // Créer une nouvelle ligne
    let nouvelleLigne = document.createElement("tr");

    // Créer des cellules pour chaque valeur
    let celluleRecup = document.createElement("td");
    celluleRecup.textContent = iteme.name;
    
    let celluleEdit = document.createElement("button");
    celluleEdit.setAttribute("class", "Edit btn btn-warning");
    celluleEdit.textContent = "Editer" ;

    let celluleSuppr = document.createElement("button");
    celluleSuppr.setAttribute("class", "Delete btn btn-primary");
    celluleSuppr.textContent = "Supprimer" ;

    // Ajouter les cellules à la nouvelle ligne
    nouvelleLigne.appendChild(celluleRecup);
    nouvelleLigne.appendChild(celluleEdit);
    nouvelleLigne.appendChild(celluleSuppr);

    // Ajouter la nouvelle ligne au tableau
    tableau.appendChild(nouvelleLigne);

    // Effacer les champs de saisie
    document.getElementById("texte").value = "";
}

