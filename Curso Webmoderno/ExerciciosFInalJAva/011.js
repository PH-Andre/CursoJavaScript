const arrays = [7,14,"olá"]

function receberPrimeiroEultimo(array){
    let result = []
    result.push(array[0])
    result.push(array[array.length - 1])

    return result
}

console.log(arrays.length)
console.log(receberPrimeiroEultimo(arrays))
console.log(receberPrimeiroEultimo([-100,"Aplicativo", 16, 789, "etas"]))