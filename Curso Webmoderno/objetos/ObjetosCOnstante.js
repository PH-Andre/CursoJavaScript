//pessoa -> 123

const pessoa = {nome: 'paulo'}
pessoa.nome = 'pedro'
console.log(pessoa)

//pessoa -> 456 -> {...}

//pessoa = {nome: 'Ana'}
 // nao pode mudar o endereço da memoria, mas é possivel mudar os atributos do objeto

 Object.freeze(pessoa)   // usa para congelar a pessoa e não ser possivel trcar os atributos
 pessoa.nome = 'Maria'
 console.log(pessoa)

 const pessoaConstante = Object.freeze({nome: 'João'}) // ja criei uma epssoa que nao pode ser mudada
 console.log(pessoaConstante)