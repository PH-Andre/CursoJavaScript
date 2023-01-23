function calculadora(a, b, operacao){
    switch(operacao){
        case "+":
            return a + b 
            break
        case "-":
            return a - b 
            break
        case "*":
            return a * b 
            break
        case "/":
            return a / b 
            break
        default: 
        console.log("operação invalida")
    }
}

    console.log(calculadora(5, 6, "+"))
    console.log(calculadora(5, 6, "-"))
    console.log(calculadora(5, 6, "/"))
    console.log(calculadora(5, 6, "*"))