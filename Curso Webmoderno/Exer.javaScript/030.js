const vetor = [56, 20, 54, 65, 12, 19, 85, 74, 01, 69, 99, 2, 46, 74]

function minEmax(array){
    let maior = array[0]
    let menor = array[0]
    for( i in array){
        if (array[i]> maior){
            maior = array[i]
        }
        if (array[i]< menor){
            menor = array[i]
        }
    }

    return `Maior: ${maior}  Menor ${menor}`
}

console.log(minEmax(vetor))