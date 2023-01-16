function processarNotas(nota){
    if(nota < 0 || nota > 100)
        return "Nota inválida";
    
    if(nota < 38)
        return `Aluno reprovado nota: ${nota}`;

    let diferenca = nota % 5
    if(diferenca >= 3)
        return nota + (5 - diferenca);
    
    return nota
}
console.log(processarNotas(105))