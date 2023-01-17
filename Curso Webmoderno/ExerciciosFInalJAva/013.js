function filtrarNumeros(array){
    
    let result = []
    for(i in array){
        let tipo = typeof array[i]
        if (tipo === "number"){
            result.push(array[i])
        }
    }
    return result
}

console.log(filtrarNumeros(["JavaScript", 1, '3', 'web', 20 ]))

console.log(filtrarNumeros(["a", 'c']))
