function inverso(parametro) {
    let tipo = typeof parametro
    
    if(tipo === "boolean"){
        return !parametro
    } else if(tipo === "number"){
        return parametro *(-1)
    }

    return `Booleano ou números esperado, mas o paramtro é do tipo ${tipo}`
}

console.log(inverso(true))