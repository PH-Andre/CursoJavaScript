const notas = [6.7, 7.4, 4.5, 1.3]

for(i in notas){
    console.log(i, notas[i])
}


let pessoa = {
    nome: 'Paulo',
    idade: 25,
    peso: 88
}

for(atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}