const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma(){
        return a + b + c
    }
}

console.log(JSON.stringify(obj))  //transforma em JSON

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))  // objeto formado a partir de um texto
console.log(JSON.parse('{ "a": 1, "b": "ETA LELE", "c": 3 }')) // todo texto tem q ser dentro de aspas duplas