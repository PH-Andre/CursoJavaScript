const alunos = [
    {nome: 'joao', nota: 7.3, bolsita: false},
    {nome: 'maria', nota: 9.3, bolsita: true},
    {nome: 'pedro', nota: 4.8, bolsita: false},
    {nome: 'ana', nota: 2.9, bolsita: true},
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual ){
console.log(acumulador, atual)
return acumulador + atual
})

console.log(resultado)