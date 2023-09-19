// function gain() {

//     let imma = document.getElementById("immatriculation").textContent;

//     console.log(imma) 
// } 
// document.getElementById("buy").addEventListener("click", gain());


const madate = new Date()

const timer = document.querySelector("#timer")
const btnIn = document.querySelector("#obtain")
const btnOut = document.querySelector("#buy")
let tab = []
let inTime, outTime
let temps = 0
let test = document.getElementById("immatriculation").value
let resultat
let message
let sortie = document.getElementById("sortie")


function timeout(nb) {
    message = resultat + " minutes, ça fera " + nb + " €"
    sortie.innerHTML = message
    setTimeout(() => {
sortie.innerHTML = "";
    }, 5000);
}
btnIn.addEventListener('click', (e) => {
    test = document.getElementById("immatriculation").value
    if (tab.includes(test)) {
        alert(`Tu existes deja`);
    } else {
        inTime = new Date()
        tab.push(test);
        console.table(tab)
    }
})



btnOut.addEventListener('click', (e) => {
    e.preventDefault();
    test = document.getElementById("immatriculation").value
    
    if (tab.includes(test)) {
        outTime = new Date()
        console.log(outTime)
        resultat = (outTime - inTime) / 1000

        const indexToRemove = tab.indexOf(test);
        
        if (indexToRemove !== -1) {
            tab.splice(indexToRemove, 1);
            console.table(tab)
        }

        switch (true) {
            case (resultat <= 15) :
                timeout(0.8)
                break;
            case (resultat <= 30) :
                timeout(1.3)
                break;
            case (resultat <= 45) :
                timeout(1.7)
                break;
            default:
                timeout(6)
                break;
        }
    }
    else {
        alert("Tu n'existes pas encore dans notre parking")
    }
})

// searchButton.addEventListener("click", () => {
//     const searchValue = immatriculation.value.trim();

//     // Vérifiez si la valeur du input existe dans le tableau
//     if (tab.includes(searchValue)) {
//         // La valeur existe dans le tableau, effectuez l'action appropriée ici
//         alert("La valeur existe dans le tableau.");
//     } else {
//         // La valeur n'existe pas dans le tableau, faites autre chose
//         alert("La valeur n'existe pas dans le tableau.");
//     }
// });