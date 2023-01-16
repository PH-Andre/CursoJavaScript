let todosJogos = [10, 20, 20, 8, 25, 3, 0, 30, 1, 35, 40, 55, 0]

function avaliarPont(arrayDePontos){
    let recordvezes= 0
    let record = 0
    let piorPoint = {
        valor: arrayDePontos[0],
        posicao: 0
    }
    
   for(i in arrayDePontos){
        if(i == 0){
            record = arrayDePontos[i]
        } else {
            if (arrayDePontos[i] > record){
                record = arrayDePontos[i]
                recordvezes ++
            }else if(arrayDePontos[i] < piorPoint.valor){
                piorPoint.valor = arrayDePontos[i]
                piorPoint.posicao = parseInt(i) + 1
            }
        }
    }
    
    return [recordvezes, piorPoint.posicao]

}

console.log(todosJogos.length)
console.log(avaliarPont(todosJogos))