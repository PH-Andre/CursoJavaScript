function filtrarporquantidade(lista, ndigitos){
    let listResult = []
    for(i in lista){
        let convstring = lista[i].toString()
        
        if(convstring.length == ndigitos){
            listResult.push(lista[i])
        }
    }
    return listResult
}

console.log(filtrarporquantidade([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarporquantidade([5, 9, 1, 123, 11], 1))