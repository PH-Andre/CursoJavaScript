//função sem retorno 

function imprimirSoma(a,b) {
    console.log(a+b)
}


imprimirSoma(2,3)

imprimirSoma(10)
imprimirSoma('OLA', " pessoal")

function imprimirSoma2(a,b = 0) {         // passamos um parametro padrão para a function, para caso entre somente um parametro ele retorne ele mesmo ao invez de ___NaN___
    console.log(a+b)
}


imprimirSoma2(2,3)

imprimirSoma2(10)