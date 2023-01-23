function repetir(Orepetido, quantasVezes){
    const result = []
    for (i = 0; i < quantasVezes; i++){
        result.push(Orepetido)
    }
    return result
}

console.log(repetir("codigo", 4))
console.log(repetir(7, 4))