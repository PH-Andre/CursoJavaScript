const escola = [{
    nome:'turma m1',
    alunos: [{
        nome: "gustavo",
        nota: 8.1
    }, {
        nome:  'Ana',
        nota: 9.3
    }]
},{
    nome: 'turma M2',
    alunos: [{
        nome: 'rebeca',
        nota: 8.9
    }, {
        nome: 'Roverto', 
        nota: 7.3
    }]
}]

const getNotaDoAulo = a => a.nota
const getTurma = turma => turma.alunos.map(getNotaDoAulo)

const notas1 = escola.map(getTurma)
console.log(notas1)

console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ]))

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaDoAulo)
console.log(notas2)