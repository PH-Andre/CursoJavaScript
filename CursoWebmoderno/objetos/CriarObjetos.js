// usando a notação literal

const obj = {
    nome: "opa"
}

// apartir do object 

console.log(new Object)


// funções construtoras

function Produto( nome, valor, desc) {
    this.nome = nome
    this.valor = valor
    this.getPrecoComDesconto = () => {
        return valor * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 1997.99, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// function Factory

function criarFuncionario(nome, salarioBase, faltas) {
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('joao', 2690, 10)
const f2 = criarFuncionario('MAria', 1950, 3)
 
console.log(f1.getSalario() , f2.getSalario())

// Object.create

const Filha = Object.create(null)
Filha.nome = "Ana"

console.log(Filha)

// uma função famosa que retorna Objeto...

const fromJSON = JSON.parse('{"info": "sou um json"}')
      console.log(fromJSON)