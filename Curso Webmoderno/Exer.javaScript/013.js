function diautil(dia) {
    switch(dia){
        case 1: 
        console.log("Fim de Semana")
        break
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log("Dia Útil")
            break
        case 7: 
        console.log("Fim de Semana")
        break
        default:
            console.log("DIA INVALIDO")
    }
    
}



diautil(20)
diautil(1)
diautil(2)