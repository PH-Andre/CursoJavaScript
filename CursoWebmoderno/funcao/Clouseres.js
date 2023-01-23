// Closure é o escopo criado quando uma função é declarada
// esse escopo permite acessar e manipular variaveis externas à função

// contexto lexico em açao

const x = "global"

function fora() {
    const x = "Local"
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())