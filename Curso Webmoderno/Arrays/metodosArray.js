const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro, comando tira ultimo indice da lista 

console.log(pilotos)

pilotos.push('verstappen') // adiciona na ultima posicao
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar ou remover elementos

//adicionar

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover

pilotos.splice(3, 1) //massa quebrou :( e vazou
console.log(pilotos)

const algunsPitolos1 = pilotos.slice(2) // novo array a partir do indice indicado

console.log(algunsPitolos1)

const algunsPilotos2 = pilotos.slice(1, 4) // pega o primeiro indice até o 4, sem incluir o 4