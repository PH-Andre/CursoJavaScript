const prod1 = {
    nome: '...',
    preco: 45
}

//Factory semples   

function criarPessoa() {
    return{
        nome: '...',
        preco: 45
    }
}

let a = criarPessoa();

console.log(a)