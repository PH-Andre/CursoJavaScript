function calculadoraMedia(array) {
    let result = 0
    for(i in array) {
         result = result + array[i]
        }
    result = result/array.length
    return result
}

console.log(calculadoraMedia([0 , 10]))
console.log(calculadoraMedia([1, 2, 3, 4, 5, ]))
