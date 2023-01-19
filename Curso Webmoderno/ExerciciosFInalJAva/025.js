function buscarPalavra(palavra, lista){
    const resultado = []
   
    for (i in lista){
        if (lista[i].includes(palavra)){
        resultado.push(lista[i])
    }}
return resultado

}

console.log(buscarPalavra("pro", ["programação", "mnobile"," Etcpro", "profissional"]))
console.log(buscarPalavra("python", ["javascript", "java", "C++"]))
