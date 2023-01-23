const aprovados = ['agatha', 'aldo', 'daniboy', 'Raquel']

aprovados.forEach(function(nome, indice){  //indice sempre como segundo parametro 
    console.log(`${indice + 1}) ${nome}`)})


aprovados.forEach(nome => console.log(nome))

const exibirAprovado = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovado)