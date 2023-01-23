const notas = [5.2, 5.9, 2.9, 1.7, 9.2, 7,4, 6.0]

function exibirConceito(array){
    for(i in array){
        if (array[i] <= 4.9){
            console.log(`Conceito D, Nota: ${array[i]}`)
        }else if (array[i] >= 5.0 && array[i] <= 6.9){
            console.log(`Conceito C, Nota: ${array[i]}`)
        }else if (array[i] >= 7.0 && array[i] <= 8.9){
            console.log(`Conceito B, Nota: ${array[i]}`)
        }else if (array[i] >= 9.0){
            console.log(`Conceito A, Nota: ${array[i]}`)
        }
    }
}

exibirConceito(notas)