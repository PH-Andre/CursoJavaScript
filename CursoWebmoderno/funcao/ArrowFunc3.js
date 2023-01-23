let comparacomThis = function(param){
    console.log(this === param)
}

comparacomThis(global)

const obs = {}
comparacomThis = comparacomThis.bind(obs)
comparacomThis(global)
comparacomThis(obs)

let comparacomThisArrow = param => console.log(this === param)

comparacomThisArrow(global)