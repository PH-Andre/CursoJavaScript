function contaCaractere(caractere, texto){
    let testavel = texto.split("")
    let quantostem = 0
    for(i in testavel){
        if (testavel[i] == caractere){
            quantostem++
        }
    }
 return quantostem
}

console.log(contaCaractere("r", "A sorte favorece os audazes"))
console.log(contaCaractere("c", "Conhece-te a ti mesmo"))