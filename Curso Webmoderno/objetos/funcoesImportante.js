const pessoa = {
    nome: 'rebeca',
    idade: 22,
    peso: 13

}

console.log(Object.keys(pessoa))   // retorna nome dos atributos
console.log(Object.values(pessoa)) // retorna array com os valores dos atributos
console.log(Object.entries(pessoa)) // retorna array  de arrays com nome e valores

Object.entries(pessoa).forEach(e /*([chave, valor]) */ => {
console.log(`${e[0]}: ${e[1]}`) /*
console.log(`${e[chave]}: ${e[valor]}`) */
})  //percorre array

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,   //define se enumera essa key
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign

const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3,a: 4}
const obj = Object.assign(dest, o1, o2)   //pega os atributos dos objetos passados depois do primeiro e joga todos atributos dentro do primeiro

console.log(dest)

Object.freeze(obj ) 
obj.c = 1234
console.log(obj)