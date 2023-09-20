const p = new Promise((resolve, reject) => {
    let test = true
    setTimeout(() => {
        if (test) {
            resolve({ data: "les données envoyées par la promise", message: "ok" })
        } else {
            reject({ message: "message d'erreur en cas d'echec de la promise" })
        }
    }, 5000)
})



// p.then((response) => {
//     result.innerHTML = response.data
// }).catch(err => {
//     result.innerHTML = err.message
// })


const result = document.querySelector("#result")
result.innerHTML = "<h1>En cours d'execution</h1>"

const get_promise_async = async () => {
    try {
        const resultat = await p
        console.log(resultat)
        result.innerHTML = resultat.data
    }catch(ex){
        console.log(ex)
        result.innerHTML = ex.message
    }
}

get_promise_async()