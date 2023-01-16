function aplicarJurosSimples(capital, taxa, tempo){
    let montante = capital * taxa * tempo
    var arredondado = parseFloat(montante.toFixed(2));
    console.log( arredondado)
}


function aplicarJurosComposto(capital, taxa, tempo){
    let montante = capital

    for(i = 0; i < tempo; i++){
        
        montante = montante + (montante * taxa)
        
    }
    var arredondado = parseFloat(montante.toFixed(2));
    console.log( arredondado)
}
 
aplicarJurosComposto(2500, 0.1, 24)

aplicarJurosSimples(2000, 0.10, 24)