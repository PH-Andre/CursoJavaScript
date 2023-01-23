function somarNumeros(array) {
    let result = 0
    for(i in array){
        result = result + array[i]
    }
    return result
}

console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))