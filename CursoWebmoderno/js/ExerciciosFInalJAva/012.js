const produto = {
    a: 1,
    b: 2
}


function removerPropriedade(objeto, propiedade) {
    const manipulador = {...objeto}
    delete manipulador[propiedade]

    
    return manipulador
}

console.log(removerPropriedade({a: 1, b: 2},"a"))
console.log(removerPropriedade({
    id: 20,
    nome: "caneca",
    Descricao: "Não preenchido"
},"Descricao"))