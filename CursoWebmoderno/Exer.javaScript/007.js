function baskara(a, b, c){
    let delta = (Math.pow(b,2)) -4*a*c
    if(delta < 0){
        console.log(`Delta é negativo ${delta}`) 
    } else{
        let resultados = [((-b + Math.sqrt(delta))/(2*a)),((-b - Math.sqrt(delta))/(2*a))]
        console.log(resultados)
    }
    
}


baskara(2,-5,-7)