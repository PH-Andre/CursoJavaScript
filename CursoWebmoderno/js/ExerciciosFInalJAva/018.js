function despesas(array) {
    let somaGeral = 0

    for(i in array) {
        somaGeral = somaGeral + array[i].preco
    }
    return somaGeral
  }

console.log(despesas([
    {nome: 'jornal online', categoria: 'informacao', preco: 89.99},
    {nome: "cinema", categoria: "Entretenimento", preco: 150}
]))
console.log(despesas([
    {nome: 'Galaxy s20', categoria: "Eletrônicos", preco: 3599.99},
    {nome: 'MacBook Pro', categoria: "Eletrônicos", preco: 30999.90}
]))