let valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}
 //carrega consigo o contexto da onde foi criada
 // e procura a variavel local da onde foi criada
 
exec()