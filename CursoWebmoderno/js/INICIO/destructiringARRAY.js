const [a] = [10] //definindo um array
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] //destruct pegando os elementos do array
                                               //e atribuindo as suas variaveis
console.log(n1, n3, n5, n6)

const [,[,nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)



function rand([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

console.log(rand([1,60]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))