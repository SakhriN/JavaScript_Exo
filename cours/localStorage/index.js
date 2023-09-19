console.log("Local Storage")



const person = {
    name : "DIO",
    age : 28
}

localStorage.setItem("peuple", JSON.stringify(person))







let personStorage = JSON.parse(localStorage.getItem("peuple"))


console.log(personStorage)

console.log(personStorage.name)
let boum = document.getElementById("HEAD")
boum.innerHTML = `<h1>BONJOUR <b>${personStorage.name}</b></h1>`