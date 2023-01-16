const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break //interrompe a repetição
    }
    console.log(`x = ${nums [x]}`)
}


for (y in nums) {
    if (y == 5) {
        continue        //pula para a proxima repetição sem fzer oque esta abaixo
    }
    console.log(`y = ${nums [y]}`)
}

// criado um rotulo, e chamando um break de dentro de outra repetição
// cancelando assim o FOR de um nivel acima
externo:
 for (a in nums){
    for (b in nums){
        if (a == 2 && b ==3) {
            break externo
         } 
         console.log(`Par = ${a}, ${b}`)
    }
}
