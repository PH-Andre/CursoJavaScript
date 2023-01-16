function impars(inicio, fim){
    if (inicio > fim){
        for (i = fim; i <= inicio; i++){
            if (i % 2 == 1){
                console.log(i)
            }
        }
    }else{
        for (i = inicio; i <= fim; i++){
            if (i % 2 == 1){
                console.log(i)
            }
        }
    }
}


impars(55, 100)

impars(100, 55)