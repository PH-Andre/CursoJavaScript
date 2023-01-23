function soma(a,b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2,3)(4)