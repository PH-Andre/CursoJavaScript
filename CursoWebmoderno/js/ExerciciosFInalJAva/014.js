function objetoParaArray(Objeto){
    let chave = Object.keys(Objeto)
    let valor = Object.values(Objeto)
    const result = []
    for(i in chave){
        let inserir = [chave[i], valor[i]]
        result.push(inserir)
    }
    return result
}

console.log(objetoParaArray({
    nome: "maria",
    Profissao: "Desenvolvedora de Software"
}))

console.log(objetoParaArray({
    condigo: 11111,
    Preco: 12000
}))