function contarPalavras(texto){
    let contador = texto.split(" ")

    return contador.length
}

console.log(contarPalavras("Sou uma frase"))
console.log(contarPalavras("Me divirto aprendendo a programar"))