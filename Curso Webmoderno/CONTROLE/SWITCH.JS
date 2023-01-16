

const imprimirResultado2 = function(nota) {
    switch(nota)  {
        case 10:
        case 9:
            console.log("Quadro de honra")
            break
    
        case 8:            
        case 7:
                console.log("Aprovado")
                break
        case 6:
        case 5:
        case 4:
        case 3:
        case 2:
        case 1:
        case 0:
            console.log("Reprovado")
            break
        default:
            console.log("Nao valida")
    }
}

imprimirResultado2(5)
imprimirResultado2(9)
imprimirResultado2(7)
imprimirResultado2(7.3)