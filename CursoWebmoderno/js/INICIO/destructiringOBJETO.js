

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'rua Abs',
    numero: 1000    
    }
}

const {nome , idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n,i)

const{sobrenome = 'nada', bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada )

const {endereco: {logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)                //acessando dados de um objeto