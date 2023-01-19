function menorNumber(array){
    let menor = array[0]
    for( i in array){
        if (array[i] < menor){
            menor = array[i]
        }
    }
    return menor
}


console.log(menorNumber([10, 5, 35, 65]))
console.log(menorNumber([5, -15, 50, 3]))