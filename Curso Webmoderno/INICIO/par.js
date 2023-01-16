// par nome/valor

const saudacao = 'opa' // contexto léxico1 

function exec() {
    const saudacao = 'falaaa'  //contexto 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'paulo',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'rua 25 de agosto',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)