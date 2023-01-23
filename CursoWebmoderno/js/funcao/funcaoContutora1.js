function Carro(velocidadeMaxima = 200, delta = 5){
    // atributo privado
    let velocidadeAtual = 0

    //metodo publico usa o THIS para deixa publico 
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }
    //metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro
console.log(uno.getVelocidadeAtual())
uno.acelerar()
console.log(uno.getVelocidadeAtual())

let ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())