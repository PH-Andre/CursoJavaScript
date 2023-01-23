const prod1 = {}             // recebe um objeto, criei um objeto vazio 

prod1.nome = 'Celular Ultra Mega' // criei o campo nome dinamicamente 
prod1.preco = 4998.90
prod1['desconto legal'] = 0.40  // Evitar atributos com espaço 

console.log(prod1)

const prod2 = {
    nome: 'camisa Polo',
    preco: 79.90,
    
} 

console.log(prod2)

 // os objetos são o endereço dele salvo na variavel, entao se eu atribuir a uma variavel b o valro de a, eles vão apontar para o mesmo endereço
 // sendo assim, quando eu mudar a variavel b, ela vai mudar os valores de a


 