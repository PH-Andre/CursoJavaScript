function receberApenasPares(array){
    const result= []
    for(i in array){
        if (i % 2 == 0){
            if (array[i] % 2 == 0){
                result.push(array[i])
            }
        }
    }
    return result
}

console.log(receberApenasPares([1, 2, 3, 4]))
console.log(receberApenasPares([10, 70, 22, 43]))