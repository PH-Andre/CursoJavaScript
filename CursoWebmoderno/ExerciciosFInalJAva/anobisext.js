function bisext(ano){
    let anobixeto = 2020
    
    if (ano % 4 == 0) return 'Ano bissexto';
    return 'Ano comun';

}

console.log(bisext(2020))
console.log(bisext(2100))


