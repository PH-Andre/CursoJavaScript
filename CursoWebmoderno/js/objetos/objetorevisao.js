const produto = new Object
produto.nome = 'Cadeira'
produto['marca']= 'Generica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca']

console.log(produto)


const carro = {
    modelo: 'a4',
    valor: 80000,
    propietario:{
        nome: 'raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua abs',
            numero: 123
        }
    },
    condutores: [{
        nome: 'junior',
        idade: 19},
        {
        nome: 'Daniela',
        idade: 29
                }],
    CalcularValorSeguro: function(){
        // ...
    }
        }
 
console.log(carro)
carro.propietario.endereco.numero = 1000
carro.propietario.endereco.logradouro = 'rua 25 de Agosto'

delete carro.condutores
delete carro.propietario.endereco
delete carro.CalcularValorSeguro

console.log(carro)