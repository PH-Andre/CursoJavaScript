const alunos = [
    {nome: 'joao', nota: 7.3, bolsita: false},
    {nome: 'maria', nota: 9.3, bolsita: true},
    {nome: 'pedro', nota: 4.8, bolsita: false},
    {nome: 'ana', nota: 2.9, bolsita: true},
]

// desafio 1: todos os alunos são bolsitas?

const todosBolsitas = (resultado, bolsita) => resultado && bolsita
console.log(alunos.map(a => a.bolsita).reduce(todosBolsitas))

// desafio 2: algum aluno é bolsista?

const algumBolsista = (resultado, bolsita) => resultado || bolsita
console.log(alunos.map(a => a.bolsita).reduce(algumBolsista))
