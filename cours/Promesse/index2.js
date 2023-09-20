const apiUrl = "https://jsonplacholder.ctypicode.com/posts/1"
Math.random

fetch(apiUrl)
.then(response => {
    if(!response.ok){
        throw new Error(`La requete a echoue avec un statut ${response.status}`)
    }

    return response.json()
}).then(data =>{
    console.log("Donnees recu : "+data)
}).catch(error => {
    console.error("une erreur : "+ error)
})