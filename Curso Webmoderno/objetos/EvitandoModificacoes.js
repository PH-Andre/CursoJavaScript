// Object.preventExtensions

const produto = Object.preventExtensions({
    nome: ' qualquer', preco: 1.99, tag: 'progmoção'
})                            // nao deixa eu adicionar coisas no objet, mas posso excluir e modificar os que ja tem

console.log('Extensivel', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)


// Object.seal

const pessoa = { nome: 'Juliana', idade: 25}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))
                                                     // nao consigo adicionar nem remover atributos, mas consigo modificalos
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze          nao muda nada nunca