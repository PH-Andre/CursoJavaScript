let aprovados = new Array('bia', 'Carlos', 'Ana')
console.log(aprovados)

console.log(aprovados[1]) //procura indice especifico
aprovados[3] = 'paulo'  //adiciona ou substitui indice especifico
aprovados.push('Abia')  // adiciona no final do array
console.log(aprovados.length)
console.log(aprovados)


aprovados[9] = 'Barbara' // aumenta o tamanho mas os objetos que nao tem valor fican undefined/vazios

console.log(aprovados.length)
console.log(aprovados)
aprovados.sort()         // altera o array, agrupando tudo
console.log(aprovados)
aprovados.sort()         // altera o array, agrupando tudo
console.log(aprovados)


//delete aprovados[1] //remover indice especifico
 
aprovados2 = ['bia', 'Carlos', 'Ana']
aprovados2.splice(1, 2,'opaa','never')
// define o indice, quantos elementos vai exluir a partir daquele indice, e os elementos q vai adicionar ou nAO
//consegue incluir e empurrar o resto para frente 
console.log(aprovados2)