function inverter(obj){
    let chave = Object.keys(obj)
    let valor = Object.values(obj)
    
    let jsoncerto = ""
    
    for(i in chave){
        let chave1 = chave[i]
        let valor1 = valor[i]
       
       if ( i == 0){
         jsoncerto = `{ "${valor1}": "${chave1}"`
     }else if (i != chave.length){
        let x123 = `, "${valor1}": "${chave1}"`
        jsoncerto = jsoncerto + x123
        }
    }
    jsoncerto =   jsoncerto + " }"
   
    
   let retorn = JSON.parse(jsoncerto)
   return retorn
}

console.log(inverter({a: 1, b: 2, c:3}))

let xxx = inverter({a: 1, b: 2, c:3})

console.log(Object.keys(xxx))
console.log(Object.values(xxx))


console.log("-----------------------------------------------------")
function inverter2(objeto) {
    const paresDeChaveValorInvertidos = Object.entries(objeto)
    .map( parChaveValor => parChaveValor.reverse() )
    return Object.fromEntries(paresDeChaveValorInvertidos)
    }


    console.log(inverter2({a: 1, b: 2, c:3}))

    let xxx2 = inverter2({a: 1, b: 2, c:3})
    
    console.log(Object.keys(xxx2))
    console.log(Object.values(xxx2))   