function teste1(num){
    if(num > 7)
    console.log(num)
    console.log('Final')     //quando nao tem bloco definido executa a 1 sentença
}

teste1(6)
teste1(8)

function teste2(num){
    if(num > 7); {       // cuidado ; n usar com if's
        console.log(num)
    }
}

teste2(6)
teste2(8)


const imprimirResultado = function(nota){
    if(nota >= 9 && nota <= 10){
        console.log('Quadro de honra')
    }else if (nota >= 7 && nota <= 8.99){
        console.log("aprovadoo")
    }else if(nota <= 6.99) {
        console.log("reprovado")
    }
}


imprimirResultado(5)
imprimirResultado(9)
imprimirResultado(7)