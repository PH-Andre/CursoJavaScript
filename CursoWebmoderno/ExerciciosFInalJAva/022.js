function functiondaSorte(num) {
    const valor = Math.floor(Math.random() * (11 - 1) + 1)
    
    if (valor == num){
     return `Parabéns! O número sorteado foi ${valor}`
    }else{
    return `Que pena! O número sorteado foi ${valor}`
    }
    
}

console.log(functiondaSorte(10))
console.log(functiondaSorte(5))
console.log(functiondaSorte(1))


