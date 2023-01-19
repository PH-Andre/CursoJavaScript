function removerVogal(palavra){
    let filtrado = palavra.replace('a', '')
     filtrado = filtrado.replace('e', '')
     filtrado = filtrado.replace('i', '')
     filtrado = filtrado.replace('o', '')
     filtrado = filtrado.replace('u', '')
     filtrado = filtrado.replace('A', '')
     filtrado = filtrado.replace('E', '')
     filtrado = filtrado.replace('I', '')
     filtrado = filtrado.replace('O', '')
     filtrado = filtrado.replace('U', '')
   
    return filtrado
}

console.log(removerVogal("Paulo"))