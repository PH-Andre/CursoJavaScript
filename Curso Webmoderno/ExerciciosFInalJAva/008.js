function multiplicar(n1, n2) {
    let result = n1
    for (i = 1; i < n2; i++){
        result += n1
    }
    return result
}

console.log(multiplicar(5,5))
console.log(multiplicar(0,7))
console.log(multiplicar(5,9))